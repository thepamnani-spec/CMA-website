import React from "react";
import { siteConfig } from "../config/siteConfig";
import { ShieldCheck, MapPin, CheckCircle2, UserCheck, ArrowRight, Building2 } from "lucide-react";
import { TeamRotator } from "../components/common/TeamRotator";

interface AboutPageProps {
  navigate: (path: string) => void;
  onOpenConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ navigate, onOpenConsultation }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C5A15A]">
          <span>About Krish & Associate</span>
          <span aria-hidden="true">·</span>
          <span>Ahmedabad, Gujarat</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#10243A]">
          Built on Rigorous Financial Discipline and Clear Communication
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          An independent financial management, cost analysis, and tax compliance advisory practice led by Krish Pamnani, committed to grounded business support without inflated claims.
        </p>
      </div>

      {/* Leadership Profile */}
      <div className="bg-white rounded-lg border border-slate-200 p-8 sm:p-12 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 space-y-4">
            <div className="w-20 h-20 bg-[#10243A] text-[#C5A15A] rounded-lg flex items-center justify-center font-serif text-3xl font-bold">
              KP
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#10243A]">
                {siteConfig.founder.name}
              </h2>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#C5A15A] mt-0.5">
                {siteConfig.founder.role}
              </p>
            </div>
            <div className="pt-2 text-xs text-slate-500 space-y-1.5 border-t border-slate-100">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>Ahmedabad, Gujarat, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-3.5 h-3.5 text-slate-400" />
                <span>Financial & Management Consulting</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            <h3 className="font-serif text-xl font-bold text-[#10243A]">
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
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A15A] block">
            Practice Specialists
          </span>
          <h3 className="font-serif text-2xl font-bold text-[#10243A]">
            Advisory Team & Domain Associates
          </h3>
        </div>
        <TeamRotator onOpenConsultation={onOpenConsultation} />
      </div>

      {/* Ethical Code & Statutory Boundaries */}
      <div className="bg-[#10243A] text-white rounded-lg border border-[#183B56] p-8 sm:p-12 space-y-6">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C5A15A]">
          <ShieldCheck className="w-4 h-4" />
          <span>Professional Integrity & Code</span>
        </div>

        <h3 className="font-serif text-2xl font-bold text-white">
          Our Commitment to Truthful and Transparent Representation
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2 text-sm text-slate-300 leading-relaxed">
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Accurate Identity & Scope
            </h4>
            <p>
              We do not claim that Krish & Associate is a Chartered Accountant (CA) firm, Cost Accountant (CMA) firm, or statutory audit entity unless verified registrations are formally published. We do not invent fictional awards, exaggerated client numbers, or artificial years of establishment.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Statutory Certification & Regulated Support
            </h4>
            <p>
              Where an engagement requires statutory audit certifications, Form CRA-3 cost audit reports under the Companies Act, or representation before specialized judicial authorities, Krish & Associate provides preparation, record structuring, and works strictly alongside qualified, authorized practitioners.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              No Fabricated Guarantees
            </h4>
            <p>
              We never promise speculative "100% tax reductions" or "guaranteed audit exemptions". Compliance in India is strictly governed by statutory provisions (CGST Act, Income Tax Act, 1961). Our role is to optimize legitimate deductions and maintain immaculate records.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
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
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A15A]">
            Ecosystem Focus
          </span>
          <h3 className="font-serif text-2xl font-bold text-[#10243A]">
            Who We Partner With in Ahmedabad & Gujarat
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg border border-slate-200 space-y-2">
            <h4 className="font-serif text-base font-bold text-[#10243A]">
              Manufacturing & Processing Units
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Industrial enterprises in Naroda, Vatva, Sanand, Changodar, and across Gujarat seeking cost classification, yield variance tracking, and CRA-1 cost record alignment.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-slate-200 space-y-2">
            <h4 className="font-serif text-base font-bold text-[#10243A]">
              Wholesale Traders & Distributors
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Commercial businesses managing high transactional volume, complex GSTR-2B Input Tax Credit reconciliation, and multi-state inventory movement.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-slate-200 space-y-2">
            <h4 className="font-serif text-base font-bold text-[#10243A]">
              Growing MSMEs & Startups
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Enterprises with ₹3 Cr to ₹50 Cr turnover needing Virtual CFO leadership, forward 13-week cash forecasts, and professional banking/CMA dossiers.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-slate-200 space-y-2">
            <h4 className="font-serif text-base font-bold text-[#10243A]">
              Salaried & Professional Taxpayers
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Individuals navigating New vs. Old Tax Regime evaluation, AIS/TIS dividend and securities matching, and timely, defect-free ITR submissions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-slate-200 space-y-2">
            <h4 className="font-serif text-base font-bold text-[#10243A]">
              Business Owners Seeking Clarity
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Promoters who want concise, digestible explanations of changing GST circulars and Income Tax amendments rather than overwhelming bureaucratic text.
            </p>
          </div>

          <div className="bg-[#F5F7FA] p-6 rounded-lg border border-slate-200 flex flex-col justify-between">
            <div>
              <h4 className="font-serif text-base font-bold text-[#10243A]">
                Have a Specific Question?
              </h4>
              <p className="text-xs text-slate-600 mt-1">
                Let us review your books or compliance questions directly.
              </p>
            </div>
            <button
              onClick={onOpenConsultation}
              className="mt-4 py-2 px-4 text-xs font-semibold uppercase tracking-wider text-[#10243A] bg-[#C5A15A] hover:bg-[#D8BA76] transition-colors rounded-sm flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Schedule a Discussion</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
