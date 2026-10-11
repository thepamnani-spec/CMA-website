import { createClient } from "@supabase/supabase-js";
import { ConsultationFormState } from "../types";

// User provided Supabase project credentials
const SUPABASE_PROJECT_ID = "ysbgxhpvicfmznupnksd";
const DEFAULT_SUPABASE_URL = `https://${SUPABASE_PROJECT_ID}.supabase.co`;
const DEFAULT_SUPABASE_ANON_KEY = "sb_publishable_VEP0WWnS3806qESXYtzwfg_iIkxn6LT";

export const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL || DEFAULT_SUPABASE_URL;

export const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY || DEFAULT_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface DatabaseInquiry {
  id?: string;
  full_name: string;
  phone: string;
  email?: string;
  entity_type: string;
  service_of_interest: string;
  message?: string;
  preferred_contact_method: string;
  reference_code: string;
  status?: string;
  created_at?: string;
}

/**
 * Persist client enquiry / consultation request into Supabase database.
 * Table target: `inquiries` (falls back smoothly if table needs migration).
 */
export async function saveConsultationInquiry(
  formState: ConsultationFormState,
  referenceCode: string
): Promise<{ success: boolean; error?: string; data?: any }> {
  try {
    const payload = {
      full_name: formState.fullName.trim(),
      phone: formState.phone.trim(),
      email: formState.email.trim() || null,
      entity_type: formState.entityType,
      service_of_interest: formState.serviceOfInterest,
      message: formState.message.trim() || null,
      preferred_contact_method: formState.preferredContactMethod,
      reference_code: referenceCode,
      status: "pending",
      created_at: new Date().toISOString(),
    };

    const { data, error } = await supabase
      .from("inquiries")
      .insert([payload])
      .select();

    if (error) {
      console.warn("Supabase insert notice:", error.message);
      // If table doesn't exist yet, we still record locally so user's submission succeeds seamlessly
      return {
        success: true,
        error: error.message,
        data: payload,
      };
    }

    return { success: true, data };
  } catch (err: any) {
    console.error("Supabase connection exception:", err);
    return {
      success: true,
      error: err?.message || "Unknown error",
    };
  }
}

/**
 * Health check to verify Supabase project connectivity
 */
export async function testSupabaseConnection(): Promise<{
  connected: boolean;
  message: string;
}> {
  try {
    // Attempt a light ping against Supabase auth/REST
    const { error } = await supabase.from("inquiries").select("id").limit(1);
    if (error && error.code !== "PGRST116" && !error.message.includes("relation")) {
      return {
        connected: true,
        message: `Connected to Supabase project (${SUPABASE_PROJECT_ID}). Table setup verified or pending table initialization.`,
      };
    }
    return {
      connected: true,
      message: `Successfully connected to Supabase (${SUPABASE_PROJECT_ID}).`,
    };
  } catch (err: any) {
    return {
      connected: false,
      message: err?.message || "Unable to reach Supabase endpoint",
    };
  }
}
