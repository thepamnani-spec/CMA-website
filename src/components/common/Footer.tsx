import React from "react";
import { siteConfig } from "../../config/siteConfig";
import { MapPin, Mail, Phone, ShieldCheck, ArrowRight, ExternalLink } from "lucide-react";
import { EventsHighlightsCarousel } from "./EventsHighlightsCarousel";

interface FooterProps {
  navigate: (path: string) => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ navigate, onOpenConsultation }) => {
  return (
    <footer className="bg-[#10243A] text-slate-300 border-t border-[#183B56] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-[#183B56]">
          
          {/* Col 1: Firm Overview */}
          <div className="space-y-4">
            <span className="font-serif text-2xl font-bold tracking-tight text-white block">
              {siteConfig.firmName}
            </span>
            <p className="text-sm text-slate-300 leading-relaxed">
              Led by {siteConfig.founder.name}, providing grounded financial leadership, cost optimization, GST compliance, and strategic management support.
            </p>
            <div className="pt-2 flex items-start gap-2.5 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-[#C5A15A] shrink-0 mt-0.5" />
              <span>{siteConfig.location.addressDetails}</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-slate-400">
              <Mail className="w-4 h-4 text-[#C5A15A] shrink-0" />
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">
                {siteConfig.contact.email}
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-slate-400">
              <Phone className="w-4 h-4 text-[#C5A15A] shrink-0" />
              <a href={`tel:${siteConfig.contact.phoneTel}`} className="hover:text-white transition-colors">
                {siteConfig.contact.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Col 2: Core Advisory Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C5A15A]">
              Advisory & Compliance
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => navigate("/services/cost-optimization")}
                  className="hover:text-white transition-colors text-left text-slate-300 cursor-pointer"
                >
                  Cost Optimization & Analysis
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/services/cost-audit")}
                  className="hover:text-white transition-colors text-left text-slate-300 cursor-pointer"
                >
                  Cost Audit & CRA-1 Support
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/services/gst-compliance")}
                  className="hover:text-white transition-colors text-left text-slate-300 cursor-pointer"
                >
                  GST Returns & 2B Reconciliation
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/services/income-tax")}
                  className="hover:text-white transition-colors text-left text-slate-300 cursor-pointer"
                >
                  Income Tax & AIS Management
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/services/virtual-cfo")}
                  className="hover:text-white transition-colors text-left text-slate-300 cursor-pointer"
                >
                  Virtual CFO & MIS Reporting
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/services")}
                  className="text-xs text-[#C5A15A] hover:underline flex items-center gap-1 pt-1"
                >
                  <span>View All Services</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Knowledge & Statutory Updates */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C5A15A]">
              Knowledge Hub
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => navigate("/gst-updates")}
                  className="hover:text-white transition-colors text-left text-slate-300 cursor-pointer"
                >
                  Recent GST Notifications & Circulars
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/knowledge-hub")}
                  className="hover:text-white transition-colors text-left text-slate-300 cursor-pointer"
                >
                  New vs. Old Tax Regime Analysis
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/knowledge-hub")}
                  className="hover:text-white transition-colors text-left text-slate-300 cursor-pointer"
                >
                  Interactive Tax Regime Evaluator
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/knowledge-hub")}
                  className="hover:text-white transition-colors text-left text-slate-300 cursor-pointer"
                >
                  GST Late Fee & Interest Calculator
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/knowledge-hub")}
                  className="hover:text-white transition-colors text-left text-slate-300 cursor-pointer"
                >
                  Working Capital & Cash Cycle Guide
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Consultation & Office Hours */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C5A15A]">
              Direct Engagement
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Schedule an in-person discussion in Ahmedabad or a structured virtual consultation for your enterprise.
            </p>
            <div className="p-3 bg-[#183B56]/50 rounded-sm border border-[#183B56] text-xs space-y-1">
              <span className="text-[#C5A15A] font-medium block">Office Hours</span>
              <span className="text-slate-300 block">{siteConfig.contact.workingHours}</span>
              <span className="text-slate-400 block">Location: {siteConfig.location.city}, {siteConfig.location.state}</span>
            </div>
            <button
              onClick={onOpenConsultation}
              className="w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-[#10243A] bg-[#C5A15A] hover:bg-[#D8BA76] transition-colors rounded-sm cursor-pointer"
            >
              Request Consultation
            </button>
          </div>
        </div>

        {/* Events & Highlights Dynamic Auto-Rotating Showcase & Regulatory Notice */}
        <div className="py-10 border-b border-[#183B56]/60 text-xs text-slate-400 space-y-8">
          {/* Dynamic Auto-Rotating Events & Highlights Carousel */}
          <div>
            <EventsHighlightsCarousel onOpenConsultation={onOpenConsultation} />
          </div>

          {/* Statutory Regulatory Notice */}
          <div className="pt-4 border-t border-[#183B56]/50 space-y-2">
            <div className="flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C5A15A] shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong className="text-slate-300">Regulatory Status & Notice:</strong> {siteConfig.disclaimer.general}
              </p>
            </div>
            <p className="pl-6 text-[11px] text-slate-400">
              {siteConfig.disclaimer.costAuditNotice} Official circulars and statutory amendments are cited from CBIC and Income Tax Department notifications for educational reference.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} {siteConfig.firmName}. All rights reserved. Ahmedabad, Gujarat, India.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => navigate("/privacy-policy")}
              className="hover:text-slate-200 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <button
              onClick={() => navigate("/disclaimer")}
              className="hover:text-slate-200 transition-colors cursor-pointer"
            >
              Website Disclaimer
            </button>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <button
              onClick={() => navigate("/contact")}
              className="hover:text-slate-200 transition-colors cursor-pointer"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
