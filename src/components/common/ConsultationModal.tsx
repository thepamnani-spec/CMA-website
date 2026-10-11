import React, { useState } from "react";
import { siteConfig } from "../../config/siteConfig";
import { ConsultationFormState } from "../../types";
import { X, CheckCircle, MessageSquare, Database, Loader2 } from "lucide-react";
import { saveConsultationInquiry } from "../../lib/supabaseClient";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
  prefilledService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
  prefilledService,
}) => {
  const [formState, setFormState] = useState<ConsultationFormState>({
    fullName: "",
    phone: "",
    email: "",
    entityType: "Business / MSME",
    serviceOfInterest: prefilledService || preselectedService || "Cost Optimization & Cost Analysis",
    message: "",
    preferredContactMethod: "WhatsApp",
    consentChecked: true,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [inquiryRefNumber, setInquiryRefNumber] = useState<string>("");

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formState.fullName.trim()) newErrors.fullName = "Please enter your name.";
    if (!formState.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else {
      const cleanPhone = formState.phone.replace(/\D/g, "");
      if (cleanPhone.length < 10) {
        newErrors.phone = "Please enter a valid 10-digit mobile number.";
      }
    }
    if (formState.email && !/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formState.consentChecked) {
      newErrors.consent = "You must acknowledge the advisory scope notice.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSaving(true);
    // Generate unique inquiry reference code
    const generatedRef = `KA-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setInquiryRefNumber(generatedRef);

    // Save directly to Supabase database
    await saveConsultationInquiry(formState, generatedRef);

    setIsSaving(false);
    setIsSubmitted(true);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setErrors({});
    onClose();
  };

  const whatsappMessage = `*New Consultation Request [${inquiryRefNumber || "Inquiry"}]*%0A*Name:* ${encodeURIComponent(
    formState.fullName
  )}%0A*Entity:* ${encodeURIComponent(formState.entityType)}%0A*Service:* ${encodeURIComponent(
    formState.serviceOfInterest
  )}%0A*Phone:* ${encodeURIComponent(formState.phone)}%0A*Note:* ${encodeURIComponent(
    formState.message || "Requesting discussion on scope and requirements."
  )}`;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-xs flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative bg-[#121214] text-white w-full max-w-xl rounded-lg shadow-2xl border border-[#27272A] overflow-hidden">
        {/* Header */}
        <div className="bg-[#18181B] px-6 py-5 text-white flex items-center justify-between border-b border-[#27272A]">
          <div>
            <h3 id="modal-title" className="font-serif text-lg font-bold tracking-wide">
              {isSubmitted ? "Consultation Request Received" : "Book a Consultation"}
            </h3>
            <p className="text-xs text-[#EAB308] mt-0.5 font-semibold">
              Krish & Associate · Ahmedabad, Gujarat
            </p>
          </div>
          <button
            onClick={handleResetAndClose}
            className="text-zinc-400 hover:text-white p-1 rounded-sm focus:outline-none cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="space-y-5 text-center py-4">
              <div className="w-14 h-14 bg-black border border-[#EAB308] text-[#EAB308] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h4 className="text-lg font-bold text-white">
                  Thank you, {formState.fullName}
                </h4>
                <p className="text-xs text-zinc-400">
                  Reference: <span className="font-mono font-bold text-[#EAB308]">{inquiryRefNumber}</span>
                </p>
                <p className="text-sm text-zinc-300 max-w-md mx-auto pt-2">
                  Your enquiry regarding <strong>{formState.serviceOfInterest}</strong> has been recorded. Krish Pamnani will review your requirements and reach out via {formState.preferredContactMethod} during office hours.
                </p>
              </div>

              <div className="bg-[#18181B] p-4 rounded text-left text-xs space-y-1.5 border border-[#27272A]">
                <div className="flex justify-between">
                  <span className="text-zinc-400">Entity:</span>
                  <span className="font-medium text-white">{formState.entityType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Contact Number:</span>
                  <span className="font-medium text-white">{formState.phone}</span>
                </div>
                {formState.email && (
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Email:</span>
                    <span className="font-medium text-white">{formState.email}</span>
                  </div>
                )}
                <div className="pt-2 border-t border-[#27272A] flex items-center justify-between text-[11px] text-[#EAB308]">
                  <span className="flex items-center gap-1 font-semibold">
                    <Database className="w-3.5 h-3.5" />
                    <span>Database Synced</span>
                  </span>
                  <span className="font-mono text-zinc-400">Supabase</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-black bg-[#25D366] hover:bg-[#20ba5a] rounded-sm transition-colors shadow-md"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Send Direct on WhatsApp</span>
                </a>
                <button
                  onClick={handleResetAndClose}
                  className="px-5 py-2.5 text-xs font-semibold text-zinc-300 bg-[#18181B] hover:bg-[#27272A] border border-[#27272A] rounded-sm transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-zinc-300 mb-1">
                    Your Name / Representative <span className="text-[#EAB308]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.fullName}
                    onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                    placeholder="e.g. Ramesh Patel"
                    className="w-full px-3 py-2 text-sm bg-[#18181B] border border-[#27272A] text-white rounded-sm focus:border-[#EAB308] focus:ring-1 focus:ring-[#EAB308] focus:outline-none placeholder:text-zinc-600"
                  />
                  {errors.fullName && <p className="text-xs text-rose-500 mt-1">{errors.fullName}</p>}
                </div>

                {/* Mobile / Phone */}
                <div>
                  <label className="block text-xs font-bold text-zinc-300 mb-1">
                    Mobile Number <span className="text-[#EAB308]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    placeholder="e.g. 98250 12345"
                    className="w-full px-3 py-2 text-sm bg-[#18181B] border border-[#27272A] text-white rounded-sm focus:border-[#EAB308] focus:ring-1 focus:ring-[#EAB308] focus:outline-none placeholder:text-zinc-600"
                  />
                  {errors.phone && <p className="text-xs text-rose-500 mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email Address */}
                <div>
                  <label className="block text-xs font-bold text-zinc-300 mb-1">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-3 py-2 text-sm bg-[#18181B] border border-[#27272A] text-white rounded-sm focus:border-[#EAB308] focus:ring-1 focus:ring-[#EAB308] focus:outline-none placeholder:text-zinc-600"
                  />
                  {errors.email && <p className="text-xs text-rose-500 mt-1">{errors.email}</p>}
                </div>

                {/* Entity Type */}
                <div>
                  <label className="block text-xs font-bold text-zinc-300 mb-1">
                    Entity / Profile Type <span className="text-[#EAB308]">*</span>
                  </label>
                  <select
                    value={formState.entityType}
                    onChange={(e) =>
                      setFormState({
                        ...formState,
                        entityType: e.target.value as ConsultationFormState["entityType"],
                      })
                    }
                    className="w-full px-3 py-2 text-sm bg-[#18181B] border border-[#27272A] text-white rounded-sm focus:border-[#EAB308] focus:ring-1 focus:ring-[#EAB308] focus:outline-none"
                  >
                    <option value="Business / MSME">Business / MSME</option>
                    <option value="Manufacturing / Industrial">Manufacturing / Industrial</option>
                    <option value="Individual / Salaried">Individual / Salaried</option>
                    <option value="Startup">Startup / Venture</option>
                    <option value="Other">Other Profile</option>
                  </select>
                </div>
              </div>

              {/* Service of Interest */}
              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-1">
                  Service of Interest <span className="text-[#EAB308]">*</span>
                </label>
                <select
                  value={formState.serviceOfInterest}
                  onChange={(e) => setFormState({ ...formState, serviceOfInterest: e.target.value })}
                  className="w-full px-3 py-2 text-sm bg-[#18181B] border border-[#27272A] text-white rounded-sm focus:border-[#EAB308] focus:ring-1 focus:ring-[#EAB308] focus:outline-none"
                >
                  <option value="Cost Optimization & Cost Analysis">Cost Optimization & Cost Analysis</option>
                  <option value="Cost Audit Support (CRA-1 Assistance)">Cost Audit Support (CRA-1 Assistance)</option>
                  <option value="GST Returns, Registration & Reconciliation">GST Returns, Registration & Reconciliation</option>
                  <option value="Income Tax Return & Advance Tax Management">Income Tax Return & Advance Tax Management</option>
                  <option value="Virtual CFO & MIS Financial Leadership">Virtual CFO & MIS Financial Leadership</option>
                  <option value="General Business Compliance & Advisory">General Business Compliance & Advisory</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-1">
                  Brief Requirements / Background
                </label>
                <textarea
                  rows={3}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Outline your primary challenges, current turnover bracket, or pending compliance matters..."
                  className="w-full px-3 py-2 text-sm bg-[#18181B] border border-[#27272A] text-white rounded-sm focus:border-[#EAB308] focus:ring-1 focus:ring-[#EAB308] focus:outline-none placeholder:text-zinc-600"
                />
              </div>

              {/* Preferred Contact Method */}
              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-1.5">
                  Preferred Channel of Response:
                </label>
                <div className="flex gap-4 text-xs">
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="contactMethod"
                      value="WhatsApp"
                      checked={formState.preferredContactMethod === "WhatsApp"}
                      onChange={() => setFormState({ ...formState, preferredContactMethod: "WhatsApp" })}
                      className="accent-[#EAB308]"
                    />
                    <span>WhatsApp</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="contactMethod"
                      value="Phone Call"
                      checked={formState.preferredContactMethod === "Phone Call"}
                      onChange={() => setFormState({ ...formState, preferredContactMethod: "Phone Call" })}
                      className="accent-[#EAB308]"
                    />
                    <span>Phone Call</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="contactMethod"
                      value="Email"
                      checked={formState.preferredContactMethod === "Email"}
                      onChange={() => setFormState({ ...formState, preferredContactMethod: "Email" })}
                      className="accent-[#EAB308]"
                    />
                    <span>Email</span>
                  </label>
                </div>
              </div>

              {/* Ethical Consent Notice */}
              <div className="pt-2 border-t border-[#27272A]">
                <label className="flex items-start gap-2 cursor-pointer text-xs text-zinc-400">
                  <input
                    type="checkbox"
                    checked={formState.consentChecked}
                    onChange={(e) => setFormState({ ...formState, consentChecked: e.target.checked })}
                    className="mt-0.5 accent-[#EAB308]"
                  />
                  <span>
                    I understand that submitting this enquiry initiates an exploratory consultation and does not constitute a formal professional engagement until mutual scope is agreed.
                  </span>
                </label>
                {errors.consent && <p className="text-xs text-rose-500 mt-1">{errors.consent}</p>}
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="px-4 py-2 text-xs font-semibold text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSaving}
                  className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-black bg-[#EAB308] hover:bg-[#FACC15] transition-all rounded-sm cursor-pointer shadow-lg shadow-yellow-500/20 disabled:opacity-70 flex items-center gap-1.5 active:scale-95"
                >
                  {isSaving && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                  <span>{isSaving ? "Saving to Database..." : "Submit Consultation Request"}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
