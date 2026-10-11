import React, { useState, useEffect, useRef } from "react";
import {
  User,
  Pause,
  Play,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Mail,
  MapPin,
  ArrowUpRight,
  Briefcase,
  Layers,
} from "lucide-react";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  focusArea: string;
  experienceSummary: string;
  location: string;
  coreResponsibilities: string[];
  keyHighlights: string[];
  initials: string;
  avatarBg: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "krish-pamnani",
    name: "Krish Pamnani",
    role: "Founder & Lead Financial Advisor",
    focusArea: "Strategic Financial Oversight & Cost Optimization",
    experienceSummary:
      "Leads practice strategy and client advisory for Gujarat enterprises, specializing in operational cost restructuring, 13-week cash forecasting, and outsourced Virtual CFO governance.",
    location: "Ahmedabad, Gujarat",
    coreResponsibilities: [
      "Executive Virtual CFO advisory for scaling businesses (₹5 Cr to ₹50 Cr)",
      "Diagnostic cost variance analysis and unit economics optimization",
      "Banking CMA dossiers and working capital restructuring",
    ],
    keyHighlights: [
      "Principal advisory lead across all client engagements",
      "Regular presenter at Gujarat MSME financial forums",
      "Focus on cash conversion cycle reduction",
    ],
    initials: "KP",
    avatarBg: "bg-[#10243A] text-[#C5A15A] border-[#C5A15A]",
  },
  {
    id: "sneha-joshi",
    name: "Sneha Joshi",
    role: "Senior Associate — Indirect Taxation & GST",
    focusArea: "GSTR-2B Audits & Rule 37A Reconciliations",
    experienceSummary:
      "Manages high-volume GST compliance workflows, supplier 2B matching algorithms, automated DRC-01B/C notice resolution, and complex Input Tax Credit audit preparation.",
    location: "Ahmedabad, Gujarat",
    coreResponsibilities: [
      "End-to-end GSTR-1, GSTR-3B, and GSTR-9 annual return filings",
      "Systematic purchase ledger vs. GSTR-2B disparity cross-checks",
      "Drafting factual replies to scrutiny notices and DRC intimations",
    ],
    keyHighlights: [
      "Oversees 100+ monthly GST reconciliation cycles",
      "Zero-unverified-ITC protocol specialist",
      "E-Invoicing and E-Way bill compliance lead",
    ],
    initials: "SJ",
    avatarBg: "bg-[#183B56] text-white border-[#52B788]",
  },
  {
    id: "rohan-mehta",
    name: "Rohan Mehta",
    role: "Cost Analyst & Industrial Operations Associate",
    focusArea: "Cost Records (CRA-1) & Variance Analysis",
    experienceSummary:
      "Works with manufacturing clients in Naroda, Changodar, and Sanand to structure activity-based costing, machine hour rates, and statutory Form CRA-1 cost compilation.",
    location: "Ahmedabad, Gujarat",
    coreResponsibilities: [
      "Maintenance and harmonization of CRA-1 cost accounting records",
      "Direct material yield, scrap loss, and batch variance tracking",
      "Support during statutory cost audit verification workflows",
    ],
    keyHighlights: [
      "Deep understanding of engineering & plastics manufacturing",
      "Cost sheet alignment under the Companies Act, 2013",
      "Process waste reduction matrices",
    ],
    initials: "RM",
    avatarBg: "bg-[#163553] text-[#C5A15A] border-[#C5A15A]",
  },
  {
    id: "pooja-desai",
    name: "Pooja Desai",
    role: "Associate — Direct Tax & Personal Finance",
    focusArea: "Income Tax, AIS / TIS & Advance Tax",
    experienceSummary:
      "Handles individual and corporate income tax computations, AIS/TIS securities reconciliation, Section 115BAC regime comparative modeling, and quarterly Advance Tax.",
    location: "Ahmedabad, Gujarat",
    coreResponsibilities: [
      "ITR preparation (ITR-1 through ITR-6) with defect-free submission",
      "Cross-matching Form 26AS, AIS, and TIS against bank statements",
      "Advance Tax schedules and Section 234B/C interest prevention",
    ],
    keyHighlights: [
      "Salaried executive and business proprietor tax optimization",
      "Capital gains computation across real estate and equity",
      "TDS quarterly compliance (Forms 24Q & 26Q)",
    ],
    initials: "PD",
    avatarBg: "bg-[#10243A] text-[#8EA4BE] border-[#38BDF8]",
  },
  {
    id: "chirag-patel",
    name: "Chirag Patel",
    role: "Client Operations & Regulatory Coordinator",
    focusArea: "Statutory Calendars, Udyam & Business Registrations",
    experienceSummary:
      "Coordinates client onboarding, statutory due date monitoring, MSME Udyam credentials, Gujarat Professional Tax (PT), and document collation for audit readiness.",
    location: "Ahmedabad, Gujarat",
    coreResponsibilities: [
      "Monitoring unified statutory compliance calendars and deadlines",
      "MSME Udyam registration, renewal, and Samadhaan dispute files",
      "Gujarat Shop & Establishment and Professional Tax filings",
    ],
    keyHighlights: [
      "Ensures zero deadline misses for retained clients",
      "Centralized client documentation archiving",
      "Rapid turnaround for regulatory certificates",
    ],
    initials: "CP",
    avatarBg: "bg-[#1A3654] text-white border-slate-500",
  },
];

interface TeamRotatorProps {
  onOpenConsultation: (serviceTitle?: string) => void;
}

export const TeamRotator: React.FC<TeamRotatorProps> = ({ onOpenConsultation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const totalMembers = teamMembers.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalMembers);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalMembers) % totalMembers);
  };

  // Automatic Rotation (advances every 4.5 seconds)
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 4500);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, currentIndex]);

  const activeMember = teamMembers[currentIndex];

  return (
    <div className="w-full">
      <div
        className="relative bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm"
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
      >
        {/* Top Control Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-6 py-4 border-b border-slate-100 bg-[#F5F7FA]">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 bg-[#10243A] text-[#C5A15A] rounded">
              <Briefcase className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#C5A15A] block">
                Practice Leadership & Associates
              </span>
              <h3 className="font-serif text-sm sm:text-base font-bold text-[#10243A]">
                The Professionals Behind Krish & Associate
              </h3>
            </div>
          </div>

          {/* Controls: Play/Pause, Counter, Prev, Next */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-1.5 rounded text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors cursor-pointer"
              aria-label={isPlaying ? "Pause team rotation" : "Play team rotation"}
              title={isPlaying ? "Pause rotation" : "Play rotation"}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>

            <span className="font-mono text-xs text-slate-500 tabular-nums px-1">
              0{currentIndex + 1} / 0{totalMembers}
            </span>

            <button
              onClick={prevSlide}
              className="p-1.5 rounded bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 transition-colors cursor-pointer"
              aria-label="Previous team member"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={nextSlide}
              className="p-1.5 rounded bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 transition-colors cursor-pointer"
              aria-label="Next team member"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1 bg-slate-100">
          <div
            key={currentIndex}
            className="h-full bg-[#C5A15A] transition-all"
            style={{
              width: "100%",
              animation: isPlaying ? "progressFill 4.5s linear" : "none",
            }}
          />
        </div>

        {/* Member Profile Main Area */}
        <div className="p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Profile Monogram & Identity Card (4 Cols) */}
            <div className="lg:col-span-4 bg-[#F5F7FA] p-6 rounded-lg border border-slate-200 text-center space-y-4">
              <div
                className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center font-serif text-3xl font-bold shadow-md border-2 ${activeMember.avatarBg}`}
              >
                {activeMember.initials}
              </div>

              <div>
                <h4 className="font-serif text-xl font-bold text-[#10243A]">
                  {activeMember.name}
                </h4>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#C5A15A] mt-0.5">
                  {activeMember.role}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-200 text-xs text-slate-500 space-y-1">
                <div className="flex items-center justify-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{activeMember.location}</span>
                </div>
                <div className="flex items-center justify-center gap-1.5 text-slate-600 font-medium">
                  <Layers className="w-3.5 h-3.5 text-[#C5A15A]" />
                  <span>{activeMember.focusArea}</span>
                </div>
              </div>

              <button
                onClick={() => onOpenConsultation(`Consultation with ${activeMember.name} (${activeMember.role})`)}
                className="w-full py-2.5 px-3 text-xs font-semibold uppercase tracking-wider text-[#10243A] bg-[#C5A15A] hover:bg-[#D8BA76] transition-colors rounded-sm cursor-pointer shadow-xs flex items-center justify-center gap-1.5"
              >
                <span>Consult with {activeMember.name.split(" ")[0]}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Profile Experience & Responsibilities (8 Cols) */}
            <div className="lg:col-span-8 space-y-5">
              <div className="space-y-2">
                <span className="text-[11px] uppercase font-bold tracking-wider text-slate-500 block">
                  Practice Domain & Experience
                </span>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {activeMember.experienceSummary}
                </p>
              </div>

              {/* Core Responsibilities */}
              <div className="space-y-2">
                <span className="text-[11px] uppercase font-bold tracking-wider text-slate-500 block">
                  Core Responsibilities & Workflow:
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  {activeMember.coreResponsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Practice Highlights */}
              <div className="p-3.5 bg-slate-50 rounded border border-slate-200 space-y-1.5">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#10243A] block">
                  Advisory Focus Areas:
                </span>
                <div className="flex flex-wrap gap-2 text-xs text-slate-600">
                  {activeMember.keyHighlights.map((hl, i) => (
                    <span key={i} className="flex items-center gap-1">
                      <span className="text-[#C5A15A]">▪</span>
                      <span>{hl}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail Selector Strip */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {teamMembers.map((member, idx) => (
              <button
                key={member.id}
                onClick={() => setCurrentIndex(idx)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded text-xs transition-all cursor-pointer ${
                  currentIndex === idx
                    ? "bg-[#10243A] text-white shadow-xs font-semibold"
                    : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
                }`}
              >
                <span className="font-mono text-[10px] text-[#C5A15A]">0{idx + 1}</span>
                <span>{member.name}</span>
              </button>
            ))}
          </div>

          <span className="text-[11px] text-slate-400">
            Auto-advancing team profiles · Hover to pause
          </span>
        </div>
      </div>
    </div>
  );
};
