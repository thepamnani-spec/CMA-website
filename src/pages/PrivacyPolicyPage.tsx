import React from "react";
import { siteConfig } from "../config/siteConfig";
import { ShieldCheck, ArrowLeft } from "lucide-react";

export const PrivacyPolicyPage: React.FC<{ navigate: (path: string) => void }> = ({ navigate }) => {
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
          <span>Statutory Compliance & Privacy</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#10243A]">
          Privacy Policy
        </h1>
        <p className="text-xs text-slate-500">
          Last Updated: October 2026 · Compliant with the Digital Personal Data Protection Act (DPDP), 2023
        </p>
      </div>

      <div className="bg-white rounded-lg border border-slate-200 p-8 sm:p-10 space-y-8 text-sm text-slate-700 leading-relaxed">
        <section className="space-y-2">
          <h2 className="font-serif text-lg font-bold text-[#10243A]">
            1. Overview & Commitment
          </h2>
          <p>
            This Privacy Policy describes how <strong>{siteConfig.firmName}</strong> ("we", "us", or "our"), founded by {siteConfig.founder.name} in Ahmedabad, Gujarat, India, collects, uses, and safeguards personal and commercial data provided through our website ({siteConfig.urls.siteUrl}) or direct communications.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-lg font-bold text-[#10243A]">
            2. Information We Collect
          </h2>
          <p>We collect only information voluntarily submitted by visitors seeking advisory services:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-slate-600">
            <li>Contact details: Name, mobile/telephone number, and email address.</li>
            <li>Entity profile: Business type (MSME, manufacturing unit, proprietorship, or individual taxpayer).</li>
            <li>Inquiry parameters: Service of interest, preferred contact channel, and submitted notes.</li>
            <li>Technical data: Standard server access logs (browser type, IP address) for security and anti-abuse purposes.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-lg font-bold text-[#10243A]">
            3. Purpose of Processing
          </h2>
          <p>Information is processed strictly for the following purposes:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-slate-600">
            <li>Responding to consultation requests and scoping preliminary service requirements.</li>
            <li>Coordinating scheduled discussions via WhatsApp, telephone, or in-person in Ahmedabad.</li>
            <li>Fulfilling professional engagement obligations upon formal written retainer.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-lg font-bold text-[#10243A]">
            4. Absolute Prohibition on Data Sale
          </h2>
          <p>
            We strictly do not sell, rent, monetize, or trade client or prospect information to third-party telemarketers, lead aggregators, or advertising networks. Client data is treated with utmost professional confidentiality.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-lg font-bold text-[#10243A]">
            5. Data Retention & Security
          </h2>
          <p>
            Preliminary inquiries are retained for reasonable operational periods to coordinate communications. Where no engagement follows, inquiries are archived or expunged upon request. We implement technical and administrative controls to protect communications from unauthorized access.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-lg font-bold text-[#10243A]">
            6. Inquiries & Data Privacy Officer
          </h2>
          <p>
            For privacy inquiries or to request deletion of voluntarily submitted contact details, contact Krish Pamnani directly at:
          </p>
          <div className="p-4 bg-[#F5F7FA] rounded border border-slate-200 text-xs space-y-1 font-mono">
            <div>Krish & Associate</div>
            <div>Attn: Krish Pamnani (Data Privacy Contact)</div>
            <div>Email: {siteConfig.contact.email}</div>
            <div>Location: Ahmedabad, Gujarat, India</div>
          </div>
        </section>
      </div>
    </div>
  );
};
