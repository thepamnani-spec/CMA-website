import React, { useState, useEffect, useRef } from "react";
import {
  Pause,
  Play,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  MapPin,
  ArrowUpRight,
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

  // Auto rotation timer (4.5s)
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
    <div
      className="w-full bg-[#121214] rounded-lg border border-[#27272A] overflow-hidden shadow-xl"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* Top Controller Header */}
      <div className="px-6 py-4 bg-[#18181B] border-b border-[#27272A] flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="flex h-2.5 w-2.5 relative">
            <span
              className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EAB308] opacity-75 ${
                isPlaying ? "" : "hidden"
              }`}
            />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#EAB308]" />
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-white">
            Practice Specialists & Advisory Leads
          </span>
          <span className="hidden sm:inline-block text-[11px] text-zinc-400 border-l border-[#27272A] pl-3">
            Ahmedabad Office
          </span>
        </div>

        {/* Rotation Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-1.5 rounded bg-[#121214] hover:bg-[#27272A] text-zinc-300 hover:text-white border border-[#27272A] transition-colors cursor-pointer"
            title={isPlaying ? "Pause rotation" : "Play rotation"}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-[#EAB308]" />}
          </button>

          <span className="font-mono text-xs text-zinc-400 tabular-nums px-1">
            0{currentIndex + 1} / 0{totalMembers}
          </span>

          <button
            onClick={prevSlide}
            className="p-1.5 rounded bg-[#121214] hover:bg-[#27272A] text-zinc-300 hover:text-white border border-[#27272A] transition-colors cursor-pointer"
            aria-label="Previous team member"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={nextSlide}
            className="p-1.5 rounded bg-[#121214] hover:bg-[#27272A] text-zinc-300 hover:text-white border border-[#27272A] transition-colors cursor-pointer"
            aria-label="Next team member"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Progress Bar in Yellow */}
      <div className="w-full h-1 bg-[#18181B]">
        <div
          key={currentIndex}
          className="h-full bg-[#EAB308] transition-all"
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
          <div className="lg:col-span-4 bg-[#18181B] p-6 rounded-lg border border-[#27272A] text-center space-y-4">
            <div className="w-24 h-24 mx-auto rounded-full flex items-center justify-center font-serif text-3xl font-bold shadow-lg border-2 bg-black text-[#EAB308] border-[#EAB308]">
              {activeMember.initials}
            </div>

            <div>
              <h4 className="font-serif text-xl font-bold text-white">
                {activeMember.name}
              </h4>
              <p className="text-xs font-bold uppercase tracking-wider text-[#EAB308] mt-1">
                {activeMember.role}
              </p>
            </div>

            <div className="pt-2 border-t border-[#27272A] text-xs text-zinc-400 space-y-1">
              <div className="flex items-center justify-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#EAB308]" />
                <span>{activeMember.location}</span>
              </div>
              <div className="flex items-center justify-center gap-1.5 text-zinc-300 font-medium pt-1">
                <Layers className="w-3.5 h-3.5 text-[#EAB308]" />
                <span>{activeMember.focusArea}</span>
              </div>
            </div>

            <button
              onClick={() => onOpenConsultation(`Consultation with ${activeMember.name} (${activeMember.role})`)}
              className="w-full py-2.5 px-3 text-xs font-bold uppercase tracking-wider text-black bg-[#EAB308] hover:bg-[#FACC15] transition-all rounded-sm cursor-pointer shadow-lg shadow-yellow-500/20 flex items-center justify-center gap-1.5 active:scale-95"
            >
              <span>Consult with {activeMember.name.split(" ")[0]}</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>

          {/* Profile Experience & Responsibilities (8 Cols) */}
          <div className="lg:col-span-8 space-y-5">
            <div className="space-y-2">
              <span className="text-[11px] uppercase font-bold tracking-wider text-[#EAB308] block">
                Practice Domain & Experience
              </span>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {activeMember.experienceSummary}
              </p>
            </div>

            {/* Core Responsibilities */}
            <div className="space-y-2">
              <span className="text-[11px] uppercase font-bold tracking-wider text-zinc-400 block">
                Core Responsibilities & Workflow:
              </span>
              <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
                {activeMember.coreResponsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#EAB308] shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Practice Highlights */}
            <div className="p-3.5 bg-[#18181B] rounded border border-[#27272A] space-y-1.5">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#EAB308] block">
                Advisory Focus Areas:
              </span>
              <div className="flex flex-wrap gap-2 text-xs text-zinc-300">
                {activeMember.keyHighlights.map((hl, i) => (
                  <span key={i} className="flex items-center gap-1 bg-[#121214] px-2.5 py-1 rounded border border-[#27272A]">
                    <span className="text-[#EAB308]">▪</span>
                    <span>{hl}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Thumbnail Selector Strip */}
      <div className="px-6 py-4 bg-[#18181B] border-t border-[#27272A] flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2">
          {teamMembers.map((member, idx) => (
            <button
              key={member.id}
              onClick={() => setCurrentIndex(idx)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded text-xs transition-all cursor-pointer ${
                currentIndex === idx
                  ? "bg-[#EAB308] text-black shadow-md font-bold"
                  : "bg-[#121214] text-zinc-400 hover:text-white border border-[#27272A]"
              }`}
            >
              <span className={`font-mono text-[10px] ${currentIndex === idx ? "text-black" : "text-[#EAB308]"}`}>
                0{idx + 1}
              </span>
              <span>{member.name}</span>
            </button>
          ))}
        </div>

        <span className="text-[11px] text-zinc-500">
          Auto-advancing team profiles · Hover to pause
        </span>
      </div>
    </div>
  );
};
