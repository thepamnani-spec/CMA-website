import React, { useState } from "react";
import { siteConfig } from "../config/siteConfig";
import { servicesData } from "../data/servicesData";
import { gstUpdatesData } from "../data/gstUpdatesData";
import { knowledgeHubArticles } from "../data/knowledgeHubData";
import { ArchitecturalHeroVisual } from "../components/common/ArchitecturalHeroVisual";
import { TeamRotator } from "../components/common/TeamRotator";
import {
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  Shield,
  Layers,
  FileCheck,
  TrendingDown,
  ChevronDown,
  ExternalLink,
  Database,
  Loader2,
} from "lucide-react";
import { saveConsultationInquiry } from "../lib/supabaseClient";

interface HomePageProps {
  navigate: (path: string) => void;
  onOpenConsultation: (serviceTitle?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ navigate, onOpenConsultation }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Quick In-Page Contact Form State
  const [quickName, setQuickName] = useState("");
  const [quickPhone, setQuickPhone] = useState("");
  const [quickService, setQuickService] = useState("Cost Optimization & Cost Analysis");
  const [quickMessage, setQuickMessage] = useState("");
  const [quickSuccess, setQuickSuccess] = useState(false);
  const [quickSaving, setQuickSaving] = useState(false);
  const [quickRef, setQuickRef] = useState("");

  const handleQuickSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickName.trim() || !quickPhone.trim()) return;

    setQuickSaving(true);
    const ref = `KA-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setQuickRef(ref);

    await saveConsultationInquiry(
      {
        fullName: quickName,
        phone: quickPhone,
        email: "",
        entityType: "Business / MSME",
        serviceOfInterest: quickService,
        message: quickMessage,
        preferredContactMethod: "WhatsApp",
        consentChecked: true,
      },
      ref
    );

    setQuickSaving(false);
    setQuickSuccess(true);
  };

  const faqs = [
    {
      q: "What types of businesses does Krish & Associate assist?",
      a: "We work with manufacturing enterprises, wholesale traders, MSMEs, emerging startups, and salaried individuals across Ahmedabad and Gujarat seeking disciplined GST compliance, income tax planning, operational cost optimization, and Virtual CFO guidance.",
    },
    {
      q: "Is Krish & Associate a Chartered Accountant or Cost Accountant firm?",
      a: "Krish & Associate is an independent financial consulting and business advisory practice founded by Krish Pamnani. We do not claim to be a statutory CA or CMA partnership firm. For regulatory engagements that mandate statutory certifications, statutory audit reports, or specific licenses under Indian law, we facilitate structured documentation and coordinate with qualified, authorized professionals.",
    },
    {
      q: "How does the engagement process work?",
      a: "We follow a clear 3-step engagement: 1) You share your specific challenges or pending filings; 2) We evaluate books, data availability, and define a transparent scope; 3) We agree on terms and commence execution with scheduled reporting checkpoints.",
    },
    {
      q: "Do you guarantee reductions in tax liabilities or cost savings?",
      a: "No. In accordance with professional ethics and Indian regulatory standards, we never promise speculative or guaranteed tax savings. We identify legitimate deductions, eliminate billing and Input Tax Credit errors, and structure operations to reduce avoidable inefficiencies within the strict boundaries of Indian law.",
    },
    {
      q: "Can we consult with Krish Pamnani in person in Ahmedabad?",
      a: "Yes. Consultations can be scheduled at our Ahmedabad office location along the commercial corridor, or virtually over structured video calls depending on your preference and schedule.",
    },
  ];

  return (
    <div className="space-y-24 pb-16">
      {/* SECTION B: HERO SECTION */}
      <section className="relative pt-12 sm:pt-16 lg:pt-20 pb-16 overflow-hidden bg-gradient-to-b from-[#10243A] via-[#122A44] to-[#10243A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#C5A15A]">
                <span>Krish & Associate</span>
                <span aria-hidden="true">·</span>
                <span>Ahmedabad, Gujarat</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight" style={{ textWrap: "balance" }}>
                Clarity in Compliance. Confidence in Every Financial Decision.
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-xl">
                Practical support for GST and income tax compliance, cost optimization, and financial management for businesses and individuals.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <button
                  onClick={() => onOpenConsultation()}
                  className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#10243A] bg-[#C5A15A] hover:bg-[#D8BA76] transition-colors rounded-sm flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Discuss Your Requirements</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => navigate("/services")}
                  className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-colors rounded-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Explore Services</span>
                </button>
              </div>

              {/* Regional B2B Trust Markers */}
              <div className="pt-4 border-t border-slate-700/60 flex flex-wrap items-center gap-6 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A15A]" />
                  <span>Ahmedabad Direct Advisory</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A15A]" />
                  <span>MSME & Corporate Scope</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A15A]" />
                  <span>Statutory Rule Alignment</span>
                </span>
              </div>
            </div>

            {/* Right Architectural Visual Column */}
            <div className="lg:col-span-6">
              <ArchitecturalHeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION C: TRUST-BUILDING INTRODUCTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg border border-slate-200 p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A15A] block">
                Firm Leadership & Principles
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#10243A]">
                Disciplined Financial Counsel for Growing Enterprises
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              <p>
                Founded and led by <strong>{siteConfig.founder.name}</strong> in Ahmedabad, <strong>Krish & Associate</strong> bridges the operational divide between routine bookkeeping and strategic executive decision-making. We believe that clarity in numbers creates resilience in commercial operations.
              </p>
              <p>
                Rather than treating statutory filings as isolated periodic chores, we integrate regular GST reconciliations, Advance Tax projections, and cost variance tracking into your ongoing management rhythm. Our practice operates with strict professional integrity: we communicate transparently about what we deliver, quote fair fees based on documented scope, and maintain full adherence to Indian statutory regulations.
              </p>
              <div className="pt-2 flex items-center gap-6 text-xs text-slate-500 font-medium">
                <span>Founder: Krish Pamnani</span>
                <span aria-hidden="true">·</span>
                <span>Location: Ahmedabad, Gujarat</span>
                <span aria-hidden="true">·</span>
                <span>Focus: Business Visibility & Compliance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION D: SERVICE CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A15A] block mb-1">
              Practicing Capabilities
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#10243A]">
              Services Tailored to Your Operating Cycle
            </h2>
          </div>
          <button
            onClick={() => navigate("/services")}
            className="text-xs font-semibold uppercase tracking-wider text-[#10243A] hover:text-[#C5A15A] transition-colors flex items-center gap-1 cursor-pointer shrink-0"
          >
            <span>View Full Service Catalog</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, idx) => (
            <div
              key={service.id}
              className="bg-white rounded-lg border border-slate-200 p-6 flex flex-col justify-between hover:border-[#10243A]/40 transition-all hover:shadow-md group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono font-medium">0{idx + 1}.</span>
                  <div className="flex items-center gap-1.5">
                    {service.audienceLabels.slice(0, 2).map((lbl, i) => (
                      <span key={i} className="text-[11px] text-slate-500">
                        {lbl}
                        {i === 0 && <span className="ml-1 text-slate-300">/</span>}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="font-serif text-lg font-bold text-[#10243A] group-hover:text-[#183B56] transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {service.shortDescription}
                </p>

                {service.regulatoryNote && (
                  <div className="p-2 bg-slate-50 border border-slate-200/80 rounded text-[11px] text-slate-500 leading-normal">
                    {service.regulatoryNote}
                  </div>
                )}
              </div>

              <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => navigate(`/services/${service.slug}`)}
                  className="text-xs font-semibold text-[#10243A] group-hover:text-[#C5A15A] transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>Explore Scope</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onOpenConsultation(service.title)}
                  className="text-xs font-medium text-slate-500 hover:text-slate-900 cursor-pointer"
                >
                  Enquire
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION E: HOW WE HELP (REDUCING INEFFICIENCIES WITHOUT UNFOUNDED CLAIMS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#10243A] text-white rounded-lg p-8 sm:p-12 border border-[#183B56] shadow-xl">
          <div className="max-w-3xl space-y-3 mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A15A]">
              Operational Framework
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Eliminating Structural Inefficiencies & Enhancing Financial Visibility
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              We focus on measurable, controllable levers within your operating framework. We do not make unsupported claims of guaranteed tax savings or universal applicability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3 border-t border-slate-700 pt-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C5A15A]">
                <TrendingDown className="w-4 h-4" />
                <span>01. Inefficiency Containment</span>
              </div>
              <h3 className="font-serif text-base font-bold text-white">
                Curtailing Avoidable Wastage
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                By segregating direct material variance, unmonitored supplier overhead, and inventory carrying expense, we pinpoint where cash leaks prior to reaching your bottom line.
              </p>
            </div>

            <div className="space-y-3 border-t border-slate-700 pt-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C5A15A]">
                <FileCheck className="w-4 h-4" />
                <span>02. Regulatory Precision</span>
              </div>
              <h3 className="font-serif text-base font-bold text-white">
                Eliminating Unmatched Credits
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Systematic GSTR-2B matching and vendor payment audits prevent costly Rule 37A credit reversals and automate timely responses to DRC-01B / DRC-01C portal intimations.
              </p>
            </div>

            <div className="space-y-3 border-t border-slate-700 pt-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C5A15A]">
                <Layers className="w-4 h-4" />
                <span>03. Management Visibility</span>
              </div>
              <h3 className="font-serif text-base font-bold text-white">
                Forward Cash Flow Foresight
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Monthly MIS packs and 13-week rolling cash flow forecasts allow business owners to plan vendor disbursements, loan servicing, and inventory orders without sudden panics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION F: THREE-STEP ENGAGEMENT PROCESS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A15A]">
            Structured Workflow
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#10243A]">
            A Transparent Three-Step Engagement
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            No convoluted onboarding or hidden commitments. We establish clarity right from the initial conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg border border-slate-200 p-6 sm:p-8 space-y-3 relative">
            <span className="font-mono text-2xl font-bold text-[#C5A15A]">01</span>
            <h3 className="font-serif text-lg font-bold text-[#10243A]">
              Share Your Requirements
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Reach out via WhatsApp, phone, or our consultation form detailing your business profile, ongoing compliance needs, or pending tax filing matters.
            </p>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-6 sm:p-8 space-y-3 relative">
            <span className="font-mono text-2xl font-bold text-[#C5A15A]">02</span>
            <h3 className="font-serif text-lg font-bold text-[#10243A]">
              Discuss Scope & Documentation
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We conduct a preliminary review of your data availability, books, and statutory timelines, then formulate a precise, transparent scope of deliverables.
            </p>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-6 sm:p-8 space-y-3 relative">
            <span className="font-mono text-2xl font-bold text-[#C5A15A]">03</span>
            <h3 className="font-serif text-lg font-bold text-[#10243A]">
              Agree on Service & Next Steps
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Upon mutual agreement on engagement terms, we initiate structured data verification, schedule regular reviews, and deliver orderly compliance outputs.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION G: EDUCATIONAL UPDATES & STATUTORY INSIGHTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A15A] block mb-1">
              Indian Tax & Regulatory Radar
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#10243A]">
              Date-Sensitive GST & Tax Intelligence
            </h2>
          </div>
          <button
            onClick={() => navigate("/gst-updates")}
            className="text-xs font-semibold uppercase tracking-wider text-[#10243A] hover:text-[#C5A15A] transition-colors flex items-center gap-1 cursor-pointer shrink-0"
          >
            <span>View All Official Notifications</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Top GST Notification Card */}
          <div className="bg-white rounded-lg border border-slate-200 p-6 space-y-4">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold text-slate-700">Official GST Notification</span>
              <span className="font-mono text-[11px]">{gstUpdatesData[0].date}</span>
            </div>
            <h3 className="font-serif text-lg font-bold text-[#10243A]">
              {gstUpdatesData[0].title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {gstUpdatesData[0].practicalImplication}
            </p>
            <div className="pt-2 text-xs text-slate-500">
              <strong>Source:</strong> {gstUpdatesData[0].officialSource}
            </div>
            <button
              onClick={() => navigate("/gst-updates")}
              className="text-xs font-semibold text-[#10243A] hover:text-[#C5A15A] flex items-center gap-1 cursor-pointer"
            >
              <span>Read Full Notification & Action Checklist</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Featured Tax Guide Card */}
          <div className="bg-white rounded-lg border border-slate-200 p-6 space-y-4">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold text-slate-700">Tax Guide</span>
              <span className="text-[11px]">{knowledgeHubArticles[0].readTime}</span>
            </div>
            <h3 className="font-serif text-lg font-bold text-[#10243A]">
              {knowledgeHubArticles[0].title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {knowledgeHubArticles[0].summary}
            </p>
            <div className="pt-2 text-xs text-slate-500">
              <strong>Key takeaway:</strong> {knowledgeHubArticles[0].keyTakeaways[0]}
            </div>
            <button
              onClick={() => navigate("/knowledge-hub")}
              className="text-xs font-semibold text-[#10243A] hover:text-[#C5A15A] flex items-center gap-1 cursor-pointer"
            >
              <span>Explore Interactive Comparison Tool</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* DYNAMIC AUTO-ROTATING EMPLOYEES & TEAMS INTRODUCTIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A15A] block mb-1">
              Practice Advisors & Specialists
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#10243A]">
              Team & Advisory Specialists
            </h2>
          </div>
          <p className="text-xs text-slate-500 max-w-sm">
            Meet the domain specialists leading direct tax, GSTR-2B reconciliations, industrial cost analysis, and Virtual CFO mandates at Krish & Associate.
          </p>
        </div>

        <TeamRotator onOpenConsultation={onOpenConsultation} />
      </section>

      {/* SECTION H: FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A15A]">
            Clarity & Transparency
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#10243A]">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Factual answers regarding our practice scope, engagement terms, and professional standards.
          </p>
        </div>

        <div className="space-y-3 pt-4">
          {faqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-lg border border-slate-200 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-serif text-sm sm:text-base font-semibold text-[#10243A]">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#C5A15A]" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION I: FINAL CONVERSION SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#10243A] via-[#142C44] to-[#10243A] rounded-lg border border-[#183B56] text-white p-8 sm:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Direct Contact Channels */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A15A] block">
                Start the Conversation
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                Ready to Bring Clarity to Your Business Numbers?
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Connect directly with Krish Pamnani in Ahmedabad to discuss GST reconciliations, income tax return assistance, cost optimization diagnostics, or Virtual CFO retainers.
              </p>

              <div className="space-y-4 pt-2">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                    "Hello Krish & Associate, I would like to schedule a consultation regarding financial advisory services."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-sm text-xs font-semibold uppercase tracking-wider transition-colors shadow-md"
                >
                  <MessageSquare className="w-5 h-5 fill-current" />
                  <span>Enquire via WhatsApp ({siteConfig.contact.whatsappDisplay})</span>
                </a>

                <div className="flex flex-col sm:flex-row gap-4 pt-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#C5A15A]" />
                    <a href={`tel:${siteConfig.contact.phoneTel}`} className="hover:text-white">
                      {siteConfig.contact.phoneDisplay}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#C5A15A]" />
                    <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick In-Page Enquiry Box */}
            <div className="lg:col-span-6 bg-white text-[#263445] p-6 sm:p-8 rounded-lg shadow-lg">
              {quickSuccess ? (
                <div className="text-center py-8 space-y-3">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-[#10243A]">
                    Enquiry Recorded
                  </h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    Thank you, {quickName}. Krish & Associate will review your requirement regarding <strong>{quickService}</strong> and respond during office hours.
                  </p>
                  <div className="p-3 bg-[#F5F7FA] rounded border border-slate-200 text-xs space-y-1 text-left max-w-sm mx-auto">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Ref Code:</span>
                      <span className="font-mono font-bold text-slate-800">{quickRef}</span>
                    </div>
                    <div className="flex justify-between text-emerald-700 text-[11px] pt-1 border-t border-slate-200">
                      <span className="flex items-center gap-1">
                        <Database className="w-3.5 h-3.5" />
                        <span>Database Synced</span>
                      </span>
                      <span className="font-mono text-slate-500">Supabase</span>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setQuickSuccess(false);
                      setQuickName("");
                      setQuickPhone("");
                      setQuickMessage("");
                      setQuickRef("");
                    }}
                    className="text-xs font-semibold text-[#10243A] hover:underline pt-1 cursor-pointer block mx-auto"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleQuickSubmit} className="space-y-4">
                  <h3 className="font-serif text-base font-bold text-[#10243A] border-b border-slate-100 pb-2">
                    Request an Initial Discussion
                  </h3>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={quickName}
                      onChange={(e) => setQuickName(e.target.value)}
                      placeholder="e.g. Anand Shah"
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-sm focus:border-[#10243A] focus:ring-1 focus:ring-[#10243A]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={quickPhone}
                      onChange={(e) => setQuickPhone(e.target.value)}
                      placeholder="e.g. 98980 12345"
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-sm focus:border-[#10243A] focus:ring-1 focus:ring-[#10243A]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Primary Service *
                    </label>
                    <select
                      value={quickService}
                      onChange={(e) => setQuickService(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-sm focus:border-[#10243A] focus:ring-1 focus:ring-[#10243A] bg-white"
                    >
                      <option value="Cost Optimization & Cost Analysis">Cost Optimization & Cost Analysis</option>
                      <option value="Cost Audit Support (CRA-1)">Cost Audit Support (CRA-1)</option>
                      <option value="GST Returns & 2B Reconciliation">GST Returns & 2B Reconciliation</option>
                      <option value="Income Tax Planning & Filing">Income Tax Planning & Filing</option>
                      <option value="Virtual CFO Services">Virtual CFO Services</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Brief Message (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={quickMessage}
                      onChange={(e) => setQuickMessage(e.target.value)}
                      placeholder="Provide turnover scale or key questions..."
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-sm focus:border-[#10243A] focus:ring-1 focus:ring-[#10243A]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={quickSaving}
                    className="w-full py-3 px-4 text-xs font-semibold uppercase tracking-wider text-[#10243A] bg-[#C5A15A] hover:bg-[#D8BA76] transition-colors rounded-sm cursor-pointer shadow-sm flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {quickSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
                    <span>{quickSaving ? "Saving to Database..." : "Submit Details"}</span>
                  </button>
                  <p className="text-[10px] text-slate-400 text-center">
                    Submitting this form initiates an exploratory conversation without binding obligations.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
