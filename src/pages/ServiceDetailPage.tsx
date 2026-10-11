import React from "react";
import { servicesData } from "../data/servicesData";
import {
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 text-zinc-100">
      {/* Breadcrumb & Navigation */}
      <div>
        <button
          onClick={() => navigate("/services")}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-400 hover:text-[#EAB308] transition-colors cursor-pointer mb-6"
        >
          <ArrowLeft className="w-3.5 h-3.5 stroke-[2.5]" />
          <span>Back to All Services</span>
        </button>

        <div className="max-w-4xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#EAB308]">
            <span>Advisory Practice Area</span>
            <span aria-hidden="true">·</span>
            <span>Krish & Associate</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            {service.title}
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
            {service.longDescription}
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <button
              onClick={() => onOpenConsultation(service.title)}
              className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-black bg-[#EAB308] hover:bg-[#FACC15] transition-all rounded-sm cursor-pointer shadow-lg shadow-yellow-500/20 active:scale-95"
            >
              Enquire About This Service
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#EAB308] bg-[#18181B] border border-[#27272A] hover:border-[#EAB308] transition-colors rounded-sm cursor-pointer"
            >
              Contact Office in Ahmedabad
            </button>
          </div>
        </div>
      </div>

      {/* Statutory / Regulatory Note if present */}
      {service.regulatoryNote && (
        <div className="bg-[#121214] border border-[#EAB308]/40 rounded-lg p-5 text-xs text-zinc-300 leading-relaxed flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-[#EAB308] shrink-0 mt-0.5" />
          <div>
            <strong className="block font-bold text-white mb-0.5">Statutory Framework & Scope Note:</strong>
            <span>{service.regulatoryNote}</span>
          </div>
        </div>
      )}

      {/* Grid: Target Audience & Common Challenges */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Target Audience */}
        <div className="bg-[#18181B] rounded-lg border border-[#27272A] p-8 space-y-4 shadow-xl">
          <span className="text-xs font-bold uppercase tracking-wider text-[#EAB308] block">
            Suitability & Scope
          </span>
          <h2 className="font-serif text-xl font-bold text-white">
            Who This Service is Designed For
          </h2>
          <ul className="space-y-3 text-sm text-zinc-300">
            {service.targetAudience.map((audience, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#EAB308] shrink-0 mt-0.5" />
                <span>{audience}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Common Problems Solved */}
        <div className="bg-[#18181B] rounded-lg border border-[#27272A] p-8 space-y-4 shadow-xl">
          <span className="text-xs font-bold uppercase tracking-wider text-[#EAB308] block">
            Pain Points Addressed
          </span>
          <h2 className="font-serif text-xl font-bold text-white">
            Common Inefficiencies We Resolve
          </h2>
          <ul className="space-y-3 text-sm text-zinc-300">
            {service.commonProblems.map((problem, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-zinc-500 shrink-0 mt-0.5" />
                <span>{problem}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Detailed Scope Section */}
      <div className="bg-[#18181B] rounded-lg border border-[#27272A] p-8 sm:p-12 space-y-6 shadow-xl">
        <span className="text-xs font-bold uppercase tracking-wider text-[#EAB308] block">
          Deliverables Breakdown
        </span>
        <h2 className="font-serif text-2xl font-bold text-white">
          What the Engagement May Include
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {service.scopeIncluded.map((scope, idx) => (
            <div
              key={idx}
              className="p-4 bg-[#121214] rounded border border-[#27272A] text-xs sm:text-sm text-zinc-300 flex items-start gap-3"
            >
              <div className="w-6 h-6 rounded-full bg-black border border-[#EAB308] text-[#EAB308] flex items-center justify-center font-mono text-[11px] font-bold shrink-0 mt-0.5">
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
          <span className="text-xs font-bold uppercase tracking-wider text-[#EAB308] block">
            Execution Roadmap
          </span>
          <h2 className="font-serif text-2xl font-bold text-white">
            How We Execute This Service
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            A transparent sequence of steps ensuring complete alignment on data, scope, and deadlines.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.processSteps.map((step) => (
            <div
              key={step.step}
              className="bg-[#18181B] rounded-lg border border-[#27272A] hover:border-[#EAB308] transition-colors p-6 space-y-3 relative flex flex-col justify-between shadow-md"
            >
              <div>
                <span className="font-mono text-xs font-bold text-[#EAB308] uppercase tracking-wider block">
                  Step 0{step.step}
                </span>
                <h3 className="font-serif text-base font-bold text-white mt-1">
                  {step.title}
                </h3>
                <p className="text-xs text-zinc-300 leading-relaxed mt-2">
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Practical Tangible Benefits */}
      <div className="bg-[#121214] text-white rounded-lg border border-[#27272A] p-8 sm:p-12 space-y-6 shadow-2xl">
        <span className="text-xs font-bold uppercase tracking-wider text-[#EAB308] block">
          Practical Commercial Value
        </span>
        <h2 className="font-serif text-2xl font-bold text-white">
          Why Clients Rely on Krish & Associate for {service.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {service.practicalBenefits.map((benefit, idx) => (
            <div key={idx} className="flex items-start gap-3 text-sm text-zinc-300">
              <CheckCircle2 className="w-4 h-4 text-[#EAB308] shrink-0 mt-0.5" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Service FAQs */}
      {service.faqs && service.faqs.length > 0 && (
        <div className="space-y-6">
          <h2 className="font-serif text-2xl font-bold text-white">
            Questions Regarding {service.title}
          </h2>
          <div className="space-y-4">
            {service.faqs.map((faq, idx) => (
              <div key={idx} className="bg-[#18181B] rounded-lg border border-[#27272A] p-6 space-y-2">
                <h3 className="font-serif text-base font-bold text-white">
                  {faq.question}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Direct Service Enquiry Banner */}
      <div className="bg-[#121214] rounded-lg border border-[#27272A] p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-1">
          <h3 className="font-serif text-xl font-bold text-white">
            Ready to Discuss Your {service.title} Scope?
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400">
            Reach out directly for an exploratory conversation in Ahmedabad or a scheduled video call.
          </p>
        </div>
        <button
          onClick={() => onOpenConsultation(service.title)}
          className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-black bg-[#EAB308] hover:bg-[#FACC15] transition-all rounded-sm cursor-pointer whitespace-nowrap shrink-0 shadow-lg shadow-yellow-500/20 active:scale-95"
        >
          Enquire for {service.title}
        </button>
      </div>
    </div>
  );
};
