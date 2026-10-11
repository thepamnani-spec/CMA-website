import React from "react";
import { siteConfig } from "../config/siteConfig";
import { AlertTriangle, ArrowLeft, ShieldCheck } from "lucide-react";

export const DisclaimerPage: React.FC<{ navigate: (path: string) => void }> = ({ navigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <button
        onClick={() => navigate("/")}
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-[#10243A] transition-colors cursor-pointer"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Return to Home</span>
      </button>

      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C5A15A]">
          <ShieldCheck className="w-4 h-4" />
          <span>Notice of Terms & Scope</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#10243A]">
          Website Disclaimer & Regulatory Notice
        </h1>
        <p className="text-xs text-slate-500">
          Statutory Disclosure and Terms of Use for Krish & Associate
        </p>
      </div>

      <div className="bg-white rounded-lg border border-slate-200 p-8 sm:p-10 space-y-8 text-sm text-slate-700 leading-relaxed">
        
        {/* Core Regulatory Disclosure */}
        <div className="p-5 bg-amber-50/80 border border-amber-200 rounded-lg text-xs text-amber-900 space-y-2 leading-relaxed">
          <div className="flex items-center gap-2 font-bold text-amber-950 uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4 text-amber-700" />
            <span>Essential Regulatory Disclosure</span>
          </div>
          <p>
            {siteConfig.firmName} is an independent financial management, cost analysis, and tax compliance consulting firm led by Krish Pamnani in Ahmedabad, Gujarat, India. This website does not represent or claim that Krish & Associate is a Chartered Accountant (CA) firm, Cost and Management Accountant (CMA) firm, registered legal practice, or statutory audit entity under the Chartered Accountants Act, 1949 or Cost and Works Accountants Act, 1959.
          </p>
        </div>

        <section className="space-y-2">
          <h2 className="font-serif text-lg font-bold text-[#10243A]">
            1. Informational & Educational Purpose Only
          </h2>
          <p>
            All content published on this website—including GST notification summaries, income tax explanations, interactive calculators, and cost analysis frameworks—is provided solely for general informational and educational purposes. It does not constitute formal legal, taxation, or statutory audit counsel and should not be relied upon as a substitute for individualized review of your books and entity facts.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-lg font-bold text-[#10243A]">
            2. Absence of Professional-Client Relationship
          </h2>
          <p>
            Visiting this website, utilizing interactive tax calculators, submitting an online consultation form, or transmitting an exploratory WhatsApp message does not establish a professional-client engagement or retainer relationship between you and {siteConfig.firmName}. A professional engagement commences only after formal mutual execution of a written Engagement Letter or Scope of Work document specifying responsibilities and fees.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-lg font-bold text-[#10243A]">
            3. Regulated Services & Statutory Cost Audit
          </h2>
          <p>
            Where an enterprise requires statutory certifications, Form CRA-3 cost audit reports under the Companies Act, 2013, or representation before judicial tax appellate forums, such services are performed strictly subject to applicable professional eligibility and authorized practitioners. {siteConfig.firmName} provides pre-audit compilation, CRA-1 documentation, and management facilitation support.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-lg font-bold text-[#10243A]">
            4. No Guarantee of Outcomes or Tax Savings
          </h2>
          <p>
            Tax laws in India are interpreted strictly by tax authorities and statutory tribunals. {siteConfig.firmName} makes no express or implied guarantees of reduced tax liability, guaranteed audit clearances, or financial outcomes. All advisory services operate strictly within applicable Indian statutes, official CBIC notifications, and CBDT circulars.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-lg font-bold text-[#10243A]">
            5. Date Sensitivity of Legal & Tax Content
          </h2>
          <p>
            Indian taxation, GST rules, and MCA regulations change frequently. While we make every effort to maintain accurate and timely updates, statutory provisions may change before website content is updated. Visitors must verify citations against current official CBIC (cbic.gov.in) and Income Tax Department (incometax.gov.in) publications.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-lg font-bold text-[#10243A]">
            6. Jurisdiction & Contact
          </h2>
          <p>
            This website and any dispute arising from its use are governed by the laws of India and subject to the exclusive jurisdiction of the competent courts in Ahmedabad, Gujarat.
          </p>
          <div className="pt-2 text-xs text-slate-500">
            For questions regarding this disclaimer, email: {siteConfig.contact.email}
          </div>
        </section>
      </div>
    </div>
  );
};
