import React, { useState } from "react";
import { servicesData } from "../data/servicesData";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";

interface ServicesPageProps {
  navigate: (path: string) => void;
  onOpenConsultation: (serviceTitle?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ navigate, onOpenConsultation }) => {
  const [selectedAudience, setSelectedAudience] = useState<string>("All");

  const filterOptions = ["All", "MSMEs", "Manufacturers", "Traders", "Salaried Individuals", "Corporate Entities"];

  const filteredServices = servicesData.filter((service) => {
    if (selectedAudience === "All") return true;
    return service.audienceLabels.some((lbl) =>
      lbl.toLowerCase().includes(selectedAudience.toLowerCase().replace(" entities", "").replace(" individuals", ""))
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C5A15A]">
          <span>Service Catalog</span>
          <span aria-hidden="true">·</span>
          <span>Krish & Associate</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#10243A]">
          Advisory & Compliance Practice Areas
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Comprehensive, structured support covering cost optimization, statutory cost record alignment, GST returns, income tax planning, and outsourced Virtual CFO leadership in Ahmedabad, Gujarat.
        </p>
      </div>

      {/* Audience Filter Bar (Functional segmented buttons per skill guidelines) */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-100 rounded-lg max-w-fit">
        {filterOptions.map((option) => (
          <button
            key={option}
            onClick={() => setSelectedAudience(option)}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
              selectedAudience === option
                ? "bg-[#10243A] text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredServices.map((service, idx) => (
          <div
            key={service.id}
            className="bg-white rounded-lg border border-slate-200 p-8 flex flex-col justify-between hover:border-[#10243A] transition-all hover:shadow-md"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono font-medium">0{idx + 1}.</span>
                <div className="flex items-center gap-1.5">
                  {service.audienceLabels.map((lbl, i) => (
                    <span key={i} className="text-[11px] text-slate-500">
                      {lbl}
                      {i < service.audienceLabels.length - 1 && <span className="ml-1 text-slate-300">/</span>}
                    </span>
                  ))}
                </div>
              </div>

              <h2 className="font-serif text-xl font-bold text-[#10243A]">
                {service.title}
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                {service.longDescription}
              </p>

              {service.regulatoryNote && (
                <div className="p-3 bg-amber-50/70 border border-amber-200 rounded text-xs text-amber-900 leading-relaxed flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <span>{service.regulatoryNote}</span>
                </div>
              )}

              {/* Scope highlights */}
              <div className="pt-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-700 block mb-2">
                  Key Scope Elements:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {service.scopeIncluded.slice(0, 3).map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A15A] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => navigate(`/services/${service.slug}`)}
                className="text-xs font-semibold text-[#10243A] hover:text-[#C5A15A] transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>Read Full Scope & Process</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onOpenConsultation(service.title)}
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#10243A] bg-[#C5A15A] hover:bg-[#D8BA76] transition-colors rounded-sm cursor-pointer shadow-xs"
              >
                Enquire
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Engagement Note */}
      <div className="bg-[#10243A] text-white p-8 rounded-lg border border-[#183B56] flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-serif text-lg font-bold text-white">
            Need a Customized Multi-Service Scope?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
            We regularly structure consolidated retainers combining monthly GST compliance, quarterly Advance Tax review, and Virtual CFO management for growing businesses.
          </p>
        </div>
        <button
          onClick={() => onOpenConsultation("Integrated Financial Retainer")}
          className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#10243A] bg-[#C5A15A] hover:bg-[#D8BA76] transition-colors rounded-sm cursor-pointer whitespace-nowrap shrink-0"
        >
          Discuss Combined Retainer
        </button>
      </div>
    </div>
  );
};
