import React from "react";
import { siteConfig } from "../../config/siteConfig";
import { MapPin, Mail, Phone, ShieldCheck, ArrowRight } from "lucide-react";
import { EventsHighlightsCarousel } from "./EventsHighlightsCarousel";

interface FooterProps {
  navigate: (path: string) => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ navigate, onOpenConsultation }) => {
  return (
    <footer className="bg-[#0A0A0A] text-zinc-300 border-t border-[#27272A] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-[#27272A]">
          
          {/* Col 1: Firm Overview */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-[#18181B] border border-[#EAB308] flex items-center justify-center font-serif font-bold text-xs text-[#EAB308]">
                KA
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white block">
                {siteConfig.firmName}
              </span>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Led by {siteConfig.founder.name}, providing grounded financial leadership, cost optimization, GST compliance, and strategic management support.
            </p>
            <div className="pt-2 flex items-start gap-2.5 text-xs text-zinc-400">
              <MapPin className="w-4 h-4 text-[#EAB308] shrink-0 mt-0.5" />
              <span>{siteConfig.location.addressDetails}</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-zinc-400">
              <Mail className="w-4 h-4 text-[#EAB308] shrink-0" />
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-[#EAB308] transition-colors">
                {siteConfig.contact.email}
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-zinc-400">
              <Phone className="w-4 h-4 text-[#EAB308] shrink-0" />
              <a href={`tel:${siteConfig.contact.phoneTel}`} className="hover:text-[#EAB308] transition-colors">
                {siteConfig.contact.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Col 2: Core Advisory Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#EAB308]">
              Advisory & Compliance
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => navigate("/services/cost-optimization")}
                  className="hover:text-[#EAB308] transition-colors text-left text-zinc-300 cursor-pointer"
                >
                  Cost Optimization & Analysis
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/services/cost-audit")}
                  className="hover:text-[#EAB308] transition-colors text-left text-zinc-300 cursor-pointer"
                >
                  Cost Audit & CRA-1 Support
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/services/gst-compliance")}
                  className="hover:text-[#EAB308] transition-colors text-left text-zinc-300 cursor-pointer"
                >
                  GST Returns & 2B Reconciliation
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/services/income-tax")}
                  className="hover:text-[#EAB308] transition-colors text-left text-zinc-300 cursor-pointer"
                >
                  Income Tax & AIS Management
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/services/virtual-cfo")}
                  className="hover:text-[#EAB308] transition-colors text-left text-zinc-300 cursor-pointer"
                >
                  Virtual CFO & MIS Reporting
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/services")}
                  className="text-xs text-[#EAB308] hover:underline flex items-center gap-1 pt-1 font-semibold"
                >
                  <span>View All Services</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Knowledge & Statutory Updates */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#EAB308]">
              Knowledge Hub
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => navigate("/gst-updates")}
                  className="hover:text-[#EAB308] transition-colors text-left text-zinc-300 cursor-pointer"
                >
                  Recent GST Notifications & Circulars
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/knowledge-hub")}
                  className="hover:text-[#EAB308] transition-colors text-left text-zinc-300 cursor-pointer"
                >
                  New vs. Old Tax Regime Analysis
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/knowledge-hub")}
                  className="hover:text-[#EAB308] transition-colors text-left text-zinc-300 cursor-pointer"
                >
                  Interactive Tax Regime Evaluator
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/knowledge-hub")}
                  className="hover:text-[#EAB308] transition-colors text-left text-zinc-300 cursor-pointer"
                >
                  GST Late Fee & Interest Calculator
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/knowledge-hub")}
                  className="hover:text-[#EAB308] transition-colors text-left text-zinc-300 cursor-pointer"
                >
                  Working Capital & Cash Cycle Guide
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Consultation & Office Hours */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#EAB308]">
              Direct Engagement
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Schedule an in-person discussion in Ahmedabad or a structured virtual consultation for your enterprise.
            </p>
            <div className="p-3.5 bg-[#18181B] rounded-sm border border-[#27272A] text-xs space-y-1">
              <span className="text-[#EAB308] font-semibold block">Office Hours</span>
              <span className="text-zinc-200 block">{siteConfig.contact.workingHours}</span>
              <span className="text-zinc-400 block">Location: {siteConfig.location.city}, {siteConfig.location.state}</span>
            </div>
            <button
              onClick={onOpenConsultation}
              className="w-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-black bg-[#EAB308] hover:bg-[#FACC15] transition-all rounded-sm cursor-pointer shadow-lg shadow-yellow-500/20 active:scale-95"
            >
              Request Consultation
            </button>
          </div>
        </div>

        {/* Events & Highlights Dynamic Auto-Rotating Showcase & Regulatory Notice */}
        <div className="py-10 border-b border-[#27272A] text-xs text-zinc-400 space-y-8">
          {/* Dynamic Auto-Rotating Events & Highlights Carousel */}
          <div>
            <EventsHighlightsCarousel onOpenConsultation={onOpenConsultation} />
          </div>

          {/* Statutory Regulatory Notice */}
          <div className="pt-4 border-t border-[#27272A] space-y-2">
            <div className="flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-[#EAB308] shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong className="text-zinc-200">Regulatory Status & Notice:</strong> {siteConfig.disclaimer.general}
              </p>
            </div>
            <p className="pl-6 text-[11px] text-zinc-500">
              {siteConfig.disclaimer.costAuditNotice} Official circulars and statutory amendments are cited from CBIC and Income Tax Department notifications for educational reference.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} {siteConfig.firmName}. All rights reserved. Ahmedabad, Gujarat, India.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => navigate("/privacy-policy")}
              className="hover:text-[#EAB308] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span aria-hidden="true" className="text-zinc-700">·</span>
            <button
              onClick={() => navigate("/disclaimer")}
              className="hover:text-[#EAB308] transition-colors cursor-pointer"
            >
              Website Disclaimer
            </button>
            <span aria-hidden="true" className="text-zinc-700">·</span>
            <button
              onClick={() => navigate("/contact")}
              className="hover:text-[#EAB308] transition-colors cursor-pointer"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
