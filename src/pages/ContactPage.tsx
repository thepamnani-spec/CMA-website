import React, { useState } from "react";
import { siteConfig } from "../config/siteConfig";
import { ConsultationFormState } from "../types";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  CheckCircle,
  ShieldCheck,
  Send,
  Building,
  Database,
  Loader2,
} from "lucide-react";
import { saveConsultationInquiry } from "../lib/supabaseClient";

export const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState<ConsultationFormState>({
    fullName: "",
    phone: "",
    email: "",
    entityType: "Business / MSME",
    serviceOfInterest: "Cost Optimization & Cost Analysis",
    message: "",
    preferredContactMethod: "WhatsApp",
    consentChecked: true,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [refCode, setRefCode] = useState("");

  const validate = () => {
    const err: Record<string, string> = {};
    if (!formState.fullName.trim()) err.fullName = "Please provide your full name.";
    if (!formState.phone.trim()) {
      err.phone = "Mobile number is required.";
    } else if (!/^[0-9+\s-]{10,14}$/.test(formState.phone.trim())) {
      err.phone = "Please enter a valid 10-digit mobile number.";
    }
    if (formState.email.trim() && !/^\S+@\S+\.\S+$/.test(formState.email.trim())) {
      err.email = "Please provide a valid email format.";
    }
    if (!formState.consentChecked) {
      err.consent = "Please acknowledge the informational notice.";
    }
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSaving(true);
    const generated = `KA-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setRefCode(generated);

    // Save directly to Supabase database
    await saveConsultationInquiry(formState, generated);

    setIsSaving(false);
    setIsSubmitted(true);
  };

  const whatsappMessage = `*Consultation Inquiry from Website [${refCode || "New"}]*%0A*Name:* ${encodeURIComponent(
    formState.fullName
  )}%0A*Entity:* ${encodeURIComponent(formState.entityType)}%0A*Service:* ${encodeURIComponent(
    formState.serviceOfInterest
  )}%0A*Phone:* ${encodeURIComponent(formState.phone)}%0A*Message:* ${encodeURIComponent(
    formState.message || "Requesting discussion on financial compliance & advisory."
  )}`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C5A15A]">
          <span>Get in Touch</span>
          <span aria-hidden="true">·</span>
          <span>Krish & Associate</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#10243A]">
          Consultation & Office Contact
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Schedule an in-person meeting in Ahmedabad or connect directly via WhatsApp, telephone, or our structured consultation request form.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Office Details & Direct Channels */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#10243A] text-white p-8 rounded-lg border border-[#183B56] space-y-6 shadow-sm">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A15A] block">
                Primary Contact
              </span>
              <h2 className="font-serif text-2xl font-bold text-white mt-1">
                Krish Pamnani
              </h2>
              <p className="text-xs text-slate-300">
                Founder & Lead Financial Advisor
              </p>
            </div>

            <div className="space-y-4 pt-2 text-sm text-slate-200">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C5A15A] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white text-xs uppercase tracking-wider mb-0.5">
                    Location & Office
                  </strong>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {siteConfig.location.addressDetails}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#C5A15A] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white text-xs uppercase tracking-wider mb-0.5">
                    Office Hours
                  </strong>
                  <p className="text-xs text-slate-300">
                    {siteConfig.contact.workingHours}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#C5A15A] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white text-xs uppercase tracking-wider mb-0.5">
                    Telephone (Direct)
                  </strong>
                  <a
                    href={`tel:${siteConfig.contact.phoneTel}`}
                    className="text-xs text-slate-200 hover:text-white"
                  >
                    {siteConfig.contact.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#C5A15A] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white text-xs uppercase tracking-wider mb-0.5">
                    Official Email
                  </strong>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-xs text-slate-200 hover:text-white"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Quick Launch */}
            <div className="pt-4 border-t border-slate-700">
              <a
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                  "Hello Krish & Associate, I would like to schedule a consultation in Ahmedabad."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 py-3 px-4 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Chat on WhatsApp ({siteConfig.contact.whatsappDisplay})</span>
              </a>
            </div>
          </div>

          {/* Regional Ahmedabad Presence Card */}
          <div className="bg-white p-6 rounded-lg border border-slate-200 space-y-2 text-xs text-slate-600">
            <div className="flex items-center gap-2 text-slate-900 font-semibold">
              <Building className="w-4 h-4 text-[#C5A15A]" />
              <span>Gujarat Commercial Hub Presence</span>
            </div>
            <p className="leading-relaxed">
              We regularly visit client manufacturing sites and corporate offices across Ahmedabad (Sanand, Changodar, Naroda, Prahlad Nagar, SG Highway) and key Gujarat industrial corridors.
            </p>
          </div>
        </div>

        {/* Right Column: Structured Consultation Form */}
        <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-lg border border-slate-200 shadow-sm">
          {isSubmitted ? (
            <div className="text-center py-10 space-y-5">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-2xl font-bold text-[#10243A]">
                  Consultation Request Registered
                </h3>
                <p className="text-xs font-mono font-semibold text-slate-500">
                  Inquiry Reference Code: {refCode}
                </p>
                <p className="text-sm text-slate-600 max-w-md mx-auto pt-2 leading-relaxed">
                  Thank you, <strong>{formState.fullName}</strong>. Your enquiry for <strong>{formState.serviceOfInterest}</strong> has been logged. We will review your details and contact you via {formState.preferredContactMethod} during business hours.
                </p>
              </div>

              <div className="p-4 bg-[#F5F7FA] rounded border border-slate-200 max-w-md mx-auto text-left text-xs space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-slate-500">Entity Category:</span>
                  <span className="font-medium text-slate-800">{formState.entityType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Phone:</span>
                  <span className="font-medium text-slate-800">{formState.phone}</span>
                </div>
                {formState.email && (
                  <div className="flex justify-between">
                    <span className="text-slate-500">Email:</span>
                    <span className="font-medium text-slate-800">{formState.email}</span>
                  </div>
                )}
                <div className="pt-1.5 border-t border-slate-200 flex items-center justify-between text-[11px] text-emerald-700">
                  <span className="flex items-center gap-1 font-semibold">
                    <Database className="w-3.5 h-3.5" />
                    <span>Database Synchronized</span>
                  </span>
                  <span className="font-mono text-slate-500">Project: ysbgxhpvicfmznupnksd</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20ba5a] rounded-sm transition-colors"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Transmit to WhatsApp Now</span>
                </a>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormState({
                      fullName: "",
                      phone: "",
                      email: "",
                      entityType: "Business / MSME",
                      serviceOfInterest: "Cost Optimization & Cost Analysis",
                      message: "",
                      preferredContactMethod: "WhatsApp",
                      consentChecked: true,
                    });
                  }}
                  className="px-6 py-3 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-sm transition-colors"
                >
                  Submit Another Enquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#10243A]">
                  Request a Formal Consultation
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Fill in your details below. We respond promptly within 24 business hours.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.fullName}
                    onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                    placeholder="e.g. Bhavesh Shah"
                    className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded focus:border-[#10243A] focus:ring-1 focus:ring-[#10243A]"
                  />
                  {errors.fullName && <p className="text-xs text-rose-600 mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    placeholder="e.g. 98250 54321"
                    className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded focus:border-[#10243A] focus:ring-1 focus:ring-[#10243A]"
                  />
                  {errors.phone && <p className="text-xs text-rose-600 mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="name@business.in"
                    className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded focus:border-[#10243A] focus:ring-1 focus:ring-[#10243A]"
                  />
                  {errors.email && <p className="text-xs text-rose-600 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Business / Entity Profile *
                  </label>
                  <select
                    value={formState.entityType}
                    onChange={(e) =>
                      setFormState({
                        ...formState,
                        entityType: e.target.value as ConsultationFormState["entityType"],
                      })
                    }
                    className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded focus:border-[#10243A] focus:ring-1 focus:ring-[#10243A] bg-white"
                  >
                    <option value="Business / MSME">Business / MSME</option>
                    <option value="Manufacturing / Industrial">Manufacturing / Industrial</option>
                    <option value="Individual / Salaried">Individual / Salaried</option>
                    <option value="Startup">Startup Venture</option>
                    <option value="Other">Other Category</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Primary Service Requirement *
                </label>
                <select
                  value={formState.serviceOfInterest}
                  onChange={(e) => setFormState({ ...formState, serviceOfInterest: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded focus:border-[#10243A] focus:ring-1 focus:ring-[#10243A] bg-white"
                >
                  <option value="Cost Optimization & Cost Analysis">Cost Optimization & Cost Analysis</option>
                  <option value="Cost Audit Support (CRA-1 Assistance)">Cost Audit Support (CRA-1 Assistance)</option>
                  <option value="GST Registration, Returns & Reconciliation">GST Registration, Returns & Reconciliation</option>
                  <option value="Income Tax Planning & Return Filing">Income Tax Planning & Return Filing</option>
                  <option value="Virtual CFO Retainer">Virtual CFO Retainer</option>
                  <option value="General Business Advisory">General Business Advisory</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Scope Outline / Specific Situation
                </label>
                <textarea
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Mention your turnover bracket, pending statutory deadlines, or specific areas of concern..."
                  className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded focus:border-[#10243A] focus:ring-1 focus:ring-[#10243A]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Preferred Communication Channel:
                </label>
                <div className="flex gap-4 text-xs">
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="contactPref"
                      value="WhatsApp"
                      checked={formState.preferredContactMethod === "WhatsApp"}
                      onChange={() => setFormState({ ...formState, preferredContactMethod: "WhatsApp" })}
                      className="text-[#10243A]"
                    />
                    <span>WhatsApp</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="contactPref"
                      value="Phone Call"
                      checked={formState.preferredContactMethod === "Phone Call"}
                      onChange={() => setFormState({ ...formState, preferredContactMethod: "Phone Call" })}
                      className="text-[#10243A]"
                    />
                    <span>Phone Call</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="contactPref"
                      value="Email"
                      checked={formState.preferredContactMethod === "Email"}
                      onChange={() => setFormState({ ...formState, preferredContactMethod: "Email" })}
                      className="text-[#10243A]"
                    />
                    <span>Email</span>
                  </label>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <label className="flex items-start gap-2 cursor-pointer text-xs text-slate-600">
                  <input
                    type="checkbox"
                    checked={formState.consentChecked}
                    onChange={(e) => setFormState({ ...formState, consentChecked: e.target.checked })}
                    className="mt-0.5 text-[#10243A] rounded-sm"
                  />
                  <span>
                    I confirm this request is for professional consulting inquiry. I acknowledge that preliminary discussion does not constitute a formal legal or statutory audit engagement.
                  </span>
                </label>
                {errors.consent && <p className="text-xs text-rose-600 mt-1">{errors.consent}</p>}
              </div>

              <button
                type="submit"
                disabled={isSaving}
                className="w-full py-3.5 px-6 text-xs font-semibold uppercase tracking-wider text-[#10243A] bg-[#C5A15A] hover:bg-[#D8BA76] transition-colors rounded-sm cursor-pointer shadow-sm flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                <span>{isSaving ? "Saving to Database..." : "Submit Consultation Request"}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
