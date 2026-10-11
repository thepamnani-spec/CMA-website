import React from "react";
import { servicesData } from "../data/servicesData";
import {
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ShieldCheck,
  ArrowRight,
  MessageSquare,
} from "lucide-react";

interface ServiceDetailPageProps {
  slug: string;
  navigate: (path: string) => void;
  onOpenConsultation: (serviceTitle?: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  slug,
  navigate,
  onOpenConsultation,
}) => {
  const service = servicesData.find((s) => s.slug === slug) || servicesData[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Breadcrumb & Navigation */}
      <div>
        <button
          onClick={() => navigate("/services")}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-[#10243A] transition-colors cursor-pointer mb-6"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Services</span>
        </button>

        <div className="max-w-4xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C5A15A]">
            <span>Advisory Practice Area</span>
            <span aria-hidden="true">·</span>
            <span>Krish & Associate</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#10243A]">
            {service.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {service.longDescription}
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <button
              onClick={() => onOpenConsultation(service.title)}
              className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#10243A] bg-[#C5A15A] hover:bg-[#D8BA76] transition-colors rounded-sm cursor-pointer shadow-sm"
            >
              Enquire About This Service
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#10243A] bg-white border border-slate-300 hover:bg-slate-50 transition-colors rounded-sm cursor-pointer"
            >
              Contact Office in Ahmedabad
            </button>
          </div>
        </div>
      </div>

      {/* Statutory / Regulatory Note if present */}
      {service.regulatoryNote && (
        <div className="bg-amber-50/80 border border-amber-200 rounded-lg p-5 text-xs text-amber-900 leading-relaxed flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <strong className="block font-semibold mb-0.5">Statutory Framework & Scope Note:</strong>
            <span>{service.regulatoryNote}</span>
          </div>
        </div>
      )}

      {/* Grid: Target Audience & Common Challenges */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Target Audience */}
        <div className="bg-white rounded-lg border border-slate-200 p-8 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A15A] block">
            Suitability & Scope
          </span>
          <h2 className="font-serif text-xl font-bold text-[#10243A]">
            Who This Service is Designed For
          </h2>
          <ul className="space-y-3 text-sm text-slate-600">
            {service.targetAudience.map((audience, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{audience}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Common Problems Solved */}
        <div className="bg-white rounded-lg border border-slate-200 p-8 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A15A] block">
            Pain Points Addressed
          </span>
          <h2 className="font-serif text-xl font-bold text-[#10243A]">
            Common Inefficiencies We Resolve
          </h2>
          <ul className="space-y-3 text-sm text-slate-600">
            {service.commonProblems.map((problem, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>{problem}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Detailed Scope Section */}
      <div className="bg-white rounded-lg border border-slate-200 p-8 sm:p-12 space-y-6">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A15A] block">
          Deliverables Breakdown
        </span>
        <h2 className="font-serif text-2xl font-bold text-[#10243A]">
          What the Engagement May Include
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {service.scopeIncluded.map((scope, idx) => (
            <div
              key={idx}
              className="p-4 bg-[#F5F7FA] rounded border border-slate-200 text-xs sm:text-sm text-slate-700 flex items-start gap-3"
            >
              <div className="w-5 h-5 rounded-full bg-[#10243A] text-white flex items-center justify-center font-mono text-[11px] shrink-0 mt-0.5">
                {idx + 1}
              </div>
              <span className="leading-relaxed">{scope}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Step-by-Step Engagement Process */}
      <div className="space-y-8">
        <div className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A15A] block">
            Execution Roadmap
          </span>
          <h2 className="font-serif text-2xl font-bold text-[#10243A]">
            How We Execute This Service
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            A transparent sequence of steps ensuring complete alignment on data, scope, and deadlines.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.processSteps.map((step) => (
            <div
              key={step.step}
              className="bg-white rounded-lg border border-slate-200 p-6 space-y-3 relative flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs font-semibold text-[#C5A15A] uppercase tracking-wider block">
                  Step 0{step.step}
                </span>
                <h3 className="font-serif text-base font-bold text-[#10243A] mt-1">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mt-2">
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Practical Tangible Benefits */}
      <div className="bg-[#10243A] text-white rounded-lg border border-[#183B56] p-8 sm:p-12 space-y-6">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A15A] block">
          Practical Commercial Value
        </span>
        <h2 className="font-serif text-2xl font-bold text-white">
          Why Clients Rely on Krish & Associate for {service.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {service.practicalBenefits.map((benefit, idx) => (
            <div key={idx} className="flex items-start gap-3 text-sm text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-[#C5A15A] shrink-0 mt-0.5" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Service FAQs */}
      {service.faqs && service.faqs.length > 0 && (
        <div className="space-y-6">
          <h2 className="font-serif text-2xl font-bold text-[#10243A]">
            Questions Regarding {service.title}
          </h2>
          <div className="space-y-4">
            {service.faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-lg border border-slate-200 p-6 space-y-2">
                <h3 className="font-serif text-base font-bold text-[#10243A]">
                  {faq.question}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Direct Service Enquiry Banner */}
      <div className="bg-white rounded-lg border border-slate-200 p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
        <div className="space-y-1">
          <h3 className="font-serif text-xl font-bold text-[#10243A]">
            Ready to Discuss Your {service.title} Scope?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            Reach out directly for an exploratory conversation in Ahmedabad or a scheduled video call.
          </p>
        </div>
        <button
          onClick={() => onOpenConsultation(service.title)}
          className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#10243A] bg-[#C5A15A] hover:bg-[#D8BA76] transition-colors rounded-sm cursor-pointer whitespace-nowrap shrink-0 shadow-sm"
        >
          Enquire for {service.title}
        </button>
      </div>
    </div>
  );
};
