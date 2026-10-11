import React from "react";
import { siteConfig } from "../config/siteConfig";
import { ShieldCheck, MapPin, ArrowRight, Building2 } from "lucide-react";
import { TeamRotator } from "../components/common/TeamRotator";

interface AboutPageProps {
  navigate: (path: string) => void;
  onOpenConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenConsultation }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 text-zinc-100">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#EAB308]">
          <span>About Krish & Associate</span>
          <span aria-hidden="true">·</span>
          <span>Ahmedabad, Gujarat</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
          Built on Rigorous Financial Discipline and Clear Communication
        </h1>
        <p className="text-base text-zinc-300 leading-relaxed">
          An independent financial management, cost analysis, and tax compliance advisory practice led by Krish Pamnani, committed to grounded business support without inflated claims.
        </p>
      </div>

      {/* Leadership Profile */}
      <div className="bg-[#121214] rounded-lg border border-[#27272A] p-8 sm:p-12 shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 space-y-4">
            <div className="w-20 h-20 bg-black text-[#EAB308] border-2 border-[#EAB308] rounded-lg flex items-center justify-center font-serif text-3xl font-bold shadow-lg">
              KP
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold text-white">
                {siteConfig.founder.name}
              </h2>
              <p className="text-xs font-bold uppercase tracking-wider text-[#EAB308] mt-1">
                {siteConfig.founder.role}
              </p>
            </div>
            <div className="pt-2 text-xs text-zinc-400 space-y-1.5 border-t border-[#27272A]">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#EAB308]" />
                <span>Ahmedabad, Gujarat, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-3.5 h-3.5 text-[#EAB308]" />
                <span>Financial & Management Consulting</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
            <h3 className="font-serif text-xl font-bold text-white">
              Founder's Perspective & Approach
            </h3>
            <p>
              In India’s dynamic commercial environment—particularly within Gujarat’s thriving manufacturing, MSME, and entrepreneurial ecosystem—managing finances requires more than historical data entry. Business owners frequently encounter a disconnect: accounting entries are updated for tax filings, but management remains in the dark about forward cash flows, inventory carrying drains, and unit profitability.
            </p>
            <p>
              <strong>{siteConfig.firmName}</strong> was established to bridge this precise gap. Under Krish Pamnani's leadership, the firm provides structured financial visibility, disciplined monthly reconciliations (such as GSTR-2B vs. books), Advance Tax planning, and strategic Virtual CFO guidance that equips entrepreneurs to make confident commercial choices.
            </p>
            <p>
              We prioritize practical, actionable insight over opaque jargon. Whether auditing operational cost variances on a factory floor or preparing reconciliations for timely return filing, we focus on delivering thorough, dependable work.
            </p>
          </div>
        </div>
      </div>

      {/* Advisory Team & Associates Showcase */}
      <div className="space-y-4">
        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-[#EAB308] block">
            Practice Specialists
          </span>
          <h3 className="font-serif text-2xl font-bold text-white">
            Advisory Team & Domain Associates
          </h3>
        </div>
        <TeamRotator onOpenConsultation={onOpenConsultation} />
      </div>

      {/* Ethical Code & Statutory Boundaries */}
      <div className="bg-[#121214] text-white rounded-lg border border-[#27272A] p-8 sm:p-12 space-y-6 shadow-2xl">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#EAB308]">
          <ShieldCheck className="w-4 h-4" />
          <span>Professional Integrity & Code</span>
        </div>

        <h3 className="font-serif text-2xl font-bold text-white">
          Our Commitment to Truthful and Transparent Representation
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2 text-sm text-zinc-300 leading-relaxed">
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-[#EAB308] uppercase tracking-wider">
              Accurate Identity & Scope
            </h4>
            <p>
              We do not claim that Krish & Associate is a Chartered Accountant (CA) firm, Cost Accountant (CMA) firm, or statutory audit entity unless verified registrations are formally published. We do not invent fictional awards, exaggerated client numbers, or artificial years of establishment.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-bold text-[#EAB308] uppercase tracking-wider">
              Statutory Certification & Regulated Support
            </h4>
            <p>
              Where an engagement requires statutory audit certifications, Form CRA-3 cost audit reports under the Companies Act, or representation before specialized judicial authorities, Krish & Associate provides preparation, record structuring, and works strictly alongside qualified, authorized practitioners.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-bold text-[#EAB308] uppercase tracking-wider">
              No Fabricated Guarantees
            </h4>
            <p>
              We never promise speculative "100% tax reductions" or "guaranteed audit exemptions". Compliance in India is strictly governed by statutory provisions (CGST Act, Income Tax Act, 1961). Our role is to optimize legitimate deductions and maintain immaculate records.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-bold text-[#EAB308] uppercase tracking-wider">
              Confidentiality & Data Care
            </h4>
            <p>
              Client financial records, GST portal credentials, ledger balances, and vendor details are treated with the highest degree of confidentiality and are never disclosed to third parties without express written authorization.
            </p>
          </div>
        </div>
      </div>

      {/* Target Audiences We Serve */}
      <div className="space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-[#EAB308]">
            Ecosystem Focus
          </span>
          <h3 className="font-serif text-2xl font-bold text-white">
            Who We Partner With in Ahmedabad & Gujarat
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-[#18181B] p-6 rounded-lg border border-[#27272A] hover:border-[#EAB308] transition-colors space-y-2">
            <h4 className="font-serif text-base font-bold text-white">
              Manufacturing & Processing Units
            </h4>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Industrial enterprises in Naroda, Vatva, Sanand, Changodar, and across Gujarat seeking cost classification, yield variance tracking, and CRA-1 cost record alignment.
            </p>
          </div>

          <div className="bg-[#18181B] p-6 rounded-lg border border-[#27272A] hover:border-[#EAB308] transition-colors space-y-2">
            <h4 className="font-serif text-base font-bold text-white">
              Wholesale Traders & Distributors
            </h4>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Commercial businesses managing high transactional volume, complex GSTR-2B Input Tax Credit reconciliation, and multi-state inventory movement.
            </p>
          </div>

          <div className="bg-[#18181B] p-6 rounded-lg border border-[#27272A] hover:border-[#EAB308] transition-colors space-y-2">
            <h4 className="font-serif text-base font-bold text-white">
              Growing MSMEs & Startups
            </h4>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Enterprises with ₹3 Cr to ₹50 Cr turnover needing Virtual CFO leadership, forward 13-week cash forecasts, and professional banking/CMA dossiers.
            </p>
          </div>

          <div className="bg-[#18181B] p-6 rounded-lg border border-[#27272A] hover:border-[#EAB308] transition-colors space-y-2">
            <h4 className="font-serif text-base font-bold text-white">
              Salaried & Professional Taxpayers
            </h4>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Individuals navigating New vs. Old Tax Regime evaluation, AIS/TIS dividend and securities matching, and timely, defect-free ITR submissions.
            </p>
          </div>

          <div className="bg-[#18181B] p-6 rounded-lg border border-[#27272A] hover:border-[#EAB308] transition-colors space-y-2">
            <h4 className="font-serif text-base font-bold text-white">
              Business Owners Seeking Clarity
            </h4>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Promoters who want concise, digestible explanations of changing GST circulars and Income Tax amendments rather than overwhelming bureaucratic text.
            </p>
          </div>

          <div className="bg-[#18181B] p-6 rounded-lg border border-[#27272A] flex flex-col justify-between">
            <div>
              <h4 className="font-serif text-base font-bold text-white">
                Have a Specific Question?
              </h4>
              <p className="text-xs text-zinc-400 mt-1">
                Let us review your books or compliance questions directly.
              </p>
            </div>
            <button
              onClick={onOpenConsultation}
              className="mt-4 py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-black bg-[#EAB308] hover:bg-[#FACC15] transition-all rounded-sm flex items-center justify-center gap-1.5 cursor-pointer shadow-lg shadow-yellow-500/20 active:scale-95"
            >
              <span>Schedule a Discussion</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
