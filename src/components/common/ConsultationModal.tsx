import React, { useState } from "react";
import { siteConfig } from "../../config/siteConfig";
import { ConsultationFormState } from "../../types";
import { X, CheckCircle, MessageSquare, Phone, Mail, ShieldAlert, Database, Loader2 } from "lucide-react";
import { saveConsultationInquiry } from "../../lib/supabaseClient";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  prefilledService = "",
}) => {
  const [formState, setFormState] = useState<ConsultationFormState>({
    fullName: "",
    phone: "",
    email: "",
    entityType: "Business / MSME",
    serviceOfInterest: prefilledService || "Cost Optimization & Cost Analysis",
    message: "",
    preferredContactMethod: "WhatsApp",
    consentChecked: true,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [inquiryRefNumber, setInquiryRefNumber] = useState("");

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formState.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    }
    if (!formState.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[0-9+\s-]{10,14}$/.test(formState.phone.trim())) {
      newErrors.phone = "Please enter a valid 10-digit mobile number.";
    }
    if (formState.email.trim() && !/^\S+@\S+\.\S+$/.test(formState.email.trim())) {
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
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative bg-white w-full max-w-xl rounded-lg shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="bg-[#10243A] px-6 py-5 text-white flex items-center justify-between">
          <div>
            <h3 id="modal-title" className="font-serif text-lg font-semibold tracking-wide">
              {isSubmitted ? "Consultation Request Received" : "Book a Consultation"}
            </h3>
            <p className="text-xs text-slate-300 mt-0.5">
              Krish & Associate · Ahmedabad, Gujarat
            </p>
          </div>
          <button
            onClick={handleResetAndClose}
            className="text-slate-400 hover:text-white p-1 rounded-sm focus:outline-none"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="space-y-5 text-center py-4">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h4 className="text-lg font-bold text-[#10243A]">
                  Thank you, {formState.fullName}
                </h4>
                <p className="text-xs text-slate-500">
                  Reference: <span className="font-mono font-semibold text-slate-800">{inquiryRefNumber}</span>
                </p>
                <p className="text-sm text-slate-600 max-w-md mx-auto pt-2">
                  Your enquiry regarding <strong>{formState.serviceOfInterest}</strong> has been recorded. Krish Pamnani will review your requirements and reach out via {formState.preferredContactMethod} during office hours.
                </p>
              </div>

              <div className="bg-[#F5F7FA] p-4 rounded text-left text-xs space-y-1.5 border border-slate-200">
                <div className="flex justify-between">
                  <span className="text-slate-500">Entity:</span>
                  <span className="font-medium text-slate-800">{formState.entityType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Contact Number:</span>
                  <span className="font-medium text-slate-800">{formState.phone}</span>
                </div>
                {formState.email && (
                  <div className="flex justify-between">
                    <span className="text-slate-500">Email:</span>
                    <span className="font-medium text-slate-800">{formState.email}</span>
                  </div>
                )}
                <div className="pt-1.5 border-t border-slate-200 flex items-center justify-between text-[11px] text-emerald-700">
                  <span className="flex items-center gap-1">
                    <Database className="w-3.5 h-3.5" />
                    <span>Database Synced</span>
                  </span>
                  <span className="font-mono text-slate-500">Supabase: ysbgxhpvicfmznupnksd</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20ba5a] rounded-sm transition-colors"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Send Direct on WhatsApp</span>
                </a>
                <button
                  onClick={handleResetAndClose}
                  className="px-5 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-sm transition-colors"
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
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Name / Representative *
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.fullName}
                    onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                    placeholder="e.g. Ramesh Patel"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-sm focus:border-[#10243A] focus:ring-1 focus:ring-[#10243A]"
                  />
                  {errors.fullName && <p className="text-xs text-rose-600 mt-1">{errors.fullName}</p>}
                </div>

                {/* Mobile / Phone */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    placeholder="e.g. 98250 12345"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-sm focus:border-[#10243A] focus:ring-1 focus:ring-[#10243A]"
                  />
                  {errors.phone && <p className="text-xs text-rose-600 mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email Address */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-sm focus:border-[#10243A] focus:ring-1 focus:ring-[#10243A]"
                  />
                  {errors.email && <p className="text-xs text-rose-600 mt-1">{errors.email}</p>}
                </div>

                {/* Entity Type */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Entity / Profile Type *
                  </label>
                  <select
                    value={formState.entityType}
                    onChange={(e) =>
                      setFormState({
                        ...formState,
                        entityType: e.target.value as ConsultationFormState["entityType"],
                      })
                    }
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-sm focus:border-[#10243A] focus:ring-1 focus:ring-[#10243A] bg-white"
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
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Service of Interest *
                </label>
                <select
                  value={formState.serviceOfInterest}
                  onChange={(e) => setFormState({ ...formState, serviceOfInterest: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-sm focus:border-[#10243A] focus:ring-1 focus:ring-[#10243A] bg-white"
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
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Brief Requirements / Background
                </label>
                <textarea
                  rows={3}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Outline your primary challenges, current turnover bracket, or pending compliance matters..."
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-sm focus:border-[#10243A] focus:ring-1 focus:ring-[#10243A]"
                />
              </div>

              {/* Preferred Contact Method */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
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
                      className="text-[#10243A]"
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
                      className="text-[#10243A]"
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
                      className="text-[#10243A]"
                    />
                    <span>Email</span>
                  </label>
                </div>
              </div>

              {/* Ethical Consent Notice */}
              <div className="pt-2 border-t border-slate-100">
                <label className="flex items-start gap-2 cursor-pointer text-xs text-slate-600">
                  <input
                    type="checkbox"
                    checked={formState.consentChecked}
                    onChange={(e) => setFormState({ ...formState, consentChecked: e.target.checked })}
                    className="mt-0.5 text-[#10243A] rounded-sm"
                  />
                  <span>
                    I understand that submitting this enquiry initiates an exploratory consultation and does not constitute a formal professional engagement until mutual scope is agreed.
                  </span>
                </label>
                {errors.consent && <p className="text-xs text-rose-600 mt-1">{errors.consent}</p>}
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSaving}
                  className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#10243A] bg-[#C5A15A] hover:bg-[#D8BA76] transition-colors rounded-sm cursor-pointer shadow-sm disabled:opacity-70 flex items-center gap-1.5"
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
