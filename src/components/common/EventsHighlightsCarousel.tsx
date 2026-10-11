import React, { useState, useEffect, useRef } from "react";
import {
  Calendar,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Users,
  Award,
  Sparkles,
  ArrowUpRight,
  Maximize2,
  X,
} from "lucide-react";

export interface EventHighlight {
  id: string;
  title: string;
  category: "Seminar" | "Masterclass" | "Roundtable" | "Clinic" | "Summit";
  date: string;
  location: string;
  attendeesCount: string;
  summary: string;
  keyTopics: string[];
  gradientTheme: string;
  accentColor: string;
  svgBadge: React.ReactNode;
}

export const eventsData: EventHighlight[] = [
  {
    id: "event-msme-tax-seminar",
    title: "Gujarat MSME Tax Compliance & Budget Analysis Seminar",
    category: "Seminar",
    date: "September 2026",
    location: "Ahmedabad Management Association (AMA), Ahmedabad",
    attendeesCount: "85+ Business Owners",
    summary:
      "A comprehensive knowledge symposium led by Krish Pamnani addressing Section 115BAC default regime implications, Section 43B(h) MSME payment guidelines, and working capital preservation.",
    keyTopics: [
      "Section 115BAC vs Old Regime for Business Promoters",
      "Section 43B(h) 45-Day Payment Safeguards",
      "Advance Tax Estimation for FY 2024-25 & 2025-26",
    ],
    gradientTheme: "from-[#10243A] via-[#1A3654] to-[#122A44]",
    accentColor: "#C5A15A",
    svgBadge: (
      <svg className="w-full h-full" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="240" rx="8" fill="#10243A" />
        {/* Stage & Presentation Backdrop */}
        <rect x="30" y="25" width="340" height="130" rx="6" fill="#183B56" stroke="#C5A15A" strokeWidth="1.5" />
        <line x1="50" y1="50" x2="190" y2="50" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
        <line x1="50" y1="70" x2="160" y2="70" stroke="#C5A15A" strokeWidth="2" strokeLinecap="round" />
        <line x1="50" y1="90" x2="220" y2="90" stroke="#8EA4BE" strokeWidth="2" strokeLinecap="round" />
        {/* Bar Chart Visual on Stage Screen */}
        <rect x="250" y="95" width="16" height="40" rx="2" fill="#C5A15A" />
        <rect x="274" y="75" width="16" height="60" rx="2" fill="#52B788" />
        <rect x="298" y="55" width="16" height="80" rx="2" fill="#D8BA76" />
        <rect x="322" y="40" width="16" height="95" rx="2" fill="#FFFFFF" />
        {/* Speaker Dais & Attendees Grid */}
        <rect x="180" y="145" width="40" height="25" rx="3" fill="#C5A15A" />
        <circle cx="200" cy="135" r="9" fill="#F4E9CD" />
        {/* Audience Silhouette Rows */}
        <g fill="#2A4B6B">
          <circle cx="60" cy="190" r="10" />
          <circle cx="100" cy="190" r="10" />
          <circle cx="140" cy="190" r="10" />
          <circle cx="180" cy="190" r="10" />
          <circle cx="220" cy="190" r="10" />
          <circle cx="260" cy="190" r="10" />
          <circle cx="300" cy="190" r="10" />
          <circle cx="340" cy="190" r="10" />
          <circle cx="80" cy="215" r="12" fill="#1E3E5B" />
          <circle cx="120" cy="215" r="12" fill="#1E3E5B" />
          <circle cx="160" cy="215" r="12" fill="#1E3E5B" />
          <circle cx="200" cy="215" r="12" fill="#1E3E5B" />
          <circle cx="240" cy="215" r="12" fill="#1E3E5B" />
          <circle cx="280" cy="215" r="12" fill="#1E3E5B" />
          <circle cx="320" cy="215" r="12" fill="#1E3E5B" />
        </g>
      </svg>
    ),
  },
  {
    id: "event-gst-itc-masterclass",
    title: "GST 2B Reconciliation & Rule 37A Audit Masterclass",
    category: "Masterclass",
    date: "August 2026",
    location: "SG Highway Commercial Hub, Ahmedabad",
    attendeesCount: "60+ Finance Heads & Accountants",
    summary:
      "A hands-on technical workshop demonstrating automated purchase register matching against GSTR-2B, drafting compliant responses to DRC-01B/C intimations, and mitigating 180-day vendor ITC reversal penalties.",
    keyTopics: [
      "Rule 37A 180-Day Payment Reversal Workflow",
      "DRC-01B & DRC-01C Disparity Management",
      "Section 16(2)(aa) Supplier Verification Protocol",
    ],
    gradientTheme: "from-[#0E1F33] via-[#163553] to-[#1B4268]",
    accentColor: "#52B788",
    svgBadge: (
      <svg className="w-full h-full" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="240" rx="8" fill="#0E1F33" />
        {/* Dual Screen 2B vs Books Matrix */}
        <rect x="35" y="30" width="155" height="135" rx="5" fill="#163553" stroke="#52B788" strokeWidth="1.5" />
        <rect x="210" y="30" width="155" height="135" rx="5" fill="#163553" stroke="#C5A15A" strokeWidth="1.5" />
        {/* Screen 1 Header */}
        <text x="50" y="55" fill="#52B788" fontSize="12" fontWeight="bold" fontFamily="sans-serif">GSTR-2B PORTAL</text>
        <line x1="50" y1="65" x2="175" y2="65" stroke="#2B5175" strokeWidth="1" />
        <rect x="50" y="75" width="125" height="16" rx="2" fill="#1E4469" />
        <rect x="50" y="98" width="125" height="16" rx="2" fill="#1E4469" />
        <rect x="50" y="121" width="125" height="16" rx="2" fill="#1E4469" />
        {/* Screen 2 Header */}
        <text x="225" y="55" fill="#C5A15A" fontSize="12" fontWeight="bold" fontFamily="sans-serif">PURCHASE BOOKS</text>
        <line x1="225" y1="65" x2="350" y2="65" stroke="#2B5175" strokeWidth="1" />
        <rect x="225" y="75" width="125" height="16" rx="2" fill="#1E4469" />
        <rect x="225" y="98" width="125" height="16" rx="2" fill="#1E4469" />
        <rect x="225" y="121" width="125" height="16" rx="2" fill="#1E4469" />
        {/* Sync Matching Connectors */}
        <path d="M 175 83 L 225 83" stroke="#52B788" strokeWidth="2" strokeDasharray="3 3" />
        <circle cx="200" cy="83" r="4" fill="#52B788" />
        <path d="M 175 106 L 225 106" stroke="#52B788" strokeWidth="2" strokeDasharray="3 3" />
        <circle cx="200" cy="106" r="4" fill="#52B788" />
        {/* Interactive Masterclass Banner */}
        <rect x="35" y="180" width="330" height="38" rx="4" fill="#163553" />
        <circle cx="55" cy="199" r="8" fill="#52B788" />
        <line x1="72" y1="195" x2="260" y2="195" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        <line x1="72" y1="205" x2="190" y2="205" stroke="#8EA4BE" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "event-cost-optimization-changodar",
    title: "Manufacturing Cost Engineering & CRA-1 Round Table",
    category: "Roundtable",
    date: "July 2026",
    location: "Changodar Industrial Estate, Gujarat",
    attendeesCount: "45 Industrialists & Plant Heads",
    summary:
      "An executive roundtable addressing rising raw material volatility, machine setup downtime, scrap minimization, and structuring statutory CRA-1 cost accounting records for mid-sized manufacturers.",
    keyTopics: [
      "Activity-Based Costing for Multi-Product Lines",
      "Scrap Yield Accounting & Variance Analysis",
      "CRA-1 Cost Accounting Record Preparation",
    ],
    gradientTheme: "from-[#122438] via-[#1B3650] to-[#122A44]",
    accentColor: "#E09F3E",
    svgBadge: (
      <svg className="w-full h-full" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="240" rx="8" fill="#122438" />
        {/* Factory & Industrial Gear Iconography */}
        <rect x="30" y="30" width="340" height="180" rx="6" fill="#1A334E" stroke="#E09F3E" strokeWidth="1" />
        {/* Executive Conference Table Oval */}
        <ellipse cx="200" cy="120" rx="120" ry="50" fill="#244466" stroke="#C5A15A" strokeWidth="2" />
        <ellipse cx="200" cy="120" rx="80" ry="30" fill="#1A334E" />
        {/* Documents on Table */}
        <rect x="150" y="110" width="20" height="22" rx="2" fill="#FFFFFF" opacity="0.8" />
        <rect x="180" y="105" width="22" height="20" rx="2" fill="#E09F3E" opacity="0.8" />
        <rect x="215" y="112" width="20" height="22" rx="2" fill="#FFFFFF" opacity="0.8" />
        {/* Seated Industrial Representatives */}
        <circle cx="100" cy="95" r="9" fill="#8EA4BE" />
        <circle cx="140" cy="75" r="9" fill="#8EA4BE" />
        <circle cx="200" cy="65" r="10" fill="#E09F3E" />
        <circle cx="260" cy="75" r="9" fill="#8EA4BE" />
        <circle cx="300" cy="95" r="9" fill="#8EA4BE" />
        <circle cx="100" cy="145" r="9" fill="#8EA4BE" />
        <circle cx="140" cy="165" r="9" fill="#8EA4BE" />
        <circle cx="200" cy="175" r="9" fill="#8EA4BE" />
        <circle cx="260" cy="165" r="9" fill="#8EA4BE" />
        <circle cx="300" cy="145" r="9" fill="#8EA4BE" />
      </svg>
    ),
  },
  {
    id: "event-virtual-cfo-summit",
    title: "Virtual CFO Strategy Summit: Scaling from ₹5 Cr to ₹50 Cr",
    category: "Summit",
    date: "May 2026",
    location: "GIFT City / Prahlad Nagar Executive Hub, Ahmedabad",
    attendeesCount: "70+ Founders & Promoters",
    summary:
      "A strategic summit on institutional financial governance, 13-week rolling cash flow forecasts, bank credit enhancement (CMA data), and bridging the gap between historical accounting and executive strategy.",
    keyTopics: [
      "13-Week Cash Conversion Cycle Optimization",
      "Executive MIS Reporting & KPI Dashboards",
      "Bank Credit Appraisal & CMA dossier preparation",
    ],
    gradientTheme: "from-[#0F2238] via-[#193A5D] to-[#122A44]",
    accentColor: "#38BDF8",
    svgBadge: (
      <svg className="w-full h-full" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="240" rx="8" fill="#0F2238" />
        {/* Executive Dashboard Display */}
        <rect x="35" y="25" width="330" height="150" rx="6" fill="#16375A" stroke="#38BDF8" strokeWidth="1.5" />
        {/* Trend Line Chart */}
        <polyline
          points="60,130 110,110 160,120 210,85 260,95 310,50"
          fill="none"
          stroke="#38BDF8"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <circle cx="60" cy="130" r="4" fill="#FFFFFF" />
        <circle cx="110" cy="110" r="4" fill="#FFFFFF" />
        <circle cx="160" cy="120" r="4" fill="#FFFFFF" />
        <circle cx="210" cy="85" r="4" fill="#FFFFFF" />
        <circle cx="260" cy="95" r="4" fill="#FFFFFF" />
        <circle cx="310" cy="50" r="5" fill="#38BDF8" />
        {/* Metric Cards inside screen */}
        <rect x="55" y="40" width="70" height="28" rx="3" fill="#0F2238" />
        <rect x="135" y="40" width="70" height="28" rx="3" fill="#0F2238" />
        {/* Bottom Banner */}
        <rect x="35" y="190" width="330" height="30" rx="4" fill="#193A5D" />
        <text x="50" y="210" fill="#38BDF8" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
          VIRTUAL CFO ADVISORY FORUM · AHMEDABAD
        </text>
      </svg>
    ),
  },
  {
    id: "event-advance-tax-clinic",
    title: "Annual Advance Tax & AIS Reconciliation Client Clinic",
    category: "Clinic",
    date: "June 2026",
    location: "Krish & Associate Practice Office, Ahmedabad",
    attendeesCount: "1-on-1 Dedicated Sessions",
    summary:
      "A focused consultation series for high-income salaried individuals, partnership firms, and business owners reviewing dividend incomes, capital gains, and Section 234B/C interest prevention.",
    keyTopics: [
      "AIS / TIS & Form 26AS Automated Cross-Match",
      "Section 234B and 234C Penalty Prevention",
      "Foreign Remittance & LRS Reporting Checks",
    ],
    gradientTheme: "from-[#10243A] via-[#1A3859] to-[#0D1D2E]",
    accentColor: "#C5A15A",
    svgBadge: (
      <svg className="w-full h-full" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="240" rx="8" fill="#10243A" />
        {/* Consultation Desk & Review Setup */}
        <rect x="35" y="30" width="330" height="180" rx="6" fill="#183B56" stroke="#C5A15A" strokeWidth="1" />
        <circle cx="150" cy="85" r="14" fill="#F4E9CD" />
        <circle cx="250" cy="85" r="14" fill="#C5A15A" />
        {/* Desk with Tablet & Calculator */}
        <rect x="90" y="115" width="220" height="50" rx="4" fill="#24476B" />
        <rect x="130" y="125" width="40" height="28" rx="2" fill="#FFFFFF" opacity="0.9" />
        <rect x="185" y="125" width="55" height="30" rx="2" fill="#10243A" stroke="#C5A15A" strokeWidth="1" />
        <rect x="250" y="128" width="22" height="22" rx="2" fill="#52B788" />
        {/* Tick Verification badge */}
        <circle cx="200" cy="185" r="12" fill="#52B788" />
        <polyline points="195,185 199,189 206,181" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

interface EventsHighlightsCarouselProps {
  onOpenConsultation?: (serviceTitle?: string) => void;
  compactMode?: boolean;
}

export const EventsHighlightsCarousel: React.FC<EventsHighlightsCarouselProps> = ({
  onOpenConsultation,
  compactMode = false,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState<EventHighlight | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const totalEvents = eventsData.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalEvents);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalEvents) % totalEvents);
  };

  // Automatic Rotation Effect (changes slide every 4.5 seconds when playing)
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

  const activeEvent = eventsData[currentIndex];

  return (
    <div className="w-full">
      {/* Container with refined navy/gold styling */}
      <div
        className="relative bg-[#10243A] rounded-lg border border-[#183B56] overflow-hidden shadow-xl"
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
      >
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-6 py-4 border-b border-[#183B56] bg-[#0E1E30]">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#183B56] rounded text-[#C5A15A]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#C5A15A] block">
                Firm Activity & Seminars
              </span>
              <h3 className="font-serif text-base sm:text-lg font-bold text-white tracking-wide">
                Events & Advisory Highlights
              </h3>
            </div>
          </div>

          {/* Controls: Play/Pause, Prev, Next, Slide Counter */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-1.5 rounded text-slate-300 hover:text-white hover:bg-[#183B56] transition-colors cursor-pointer"
              aria-label={isPlaying ? "Pause auto-rotation" : "Play auto-rotation"}
              title={isPlaying ? "Pause auto-rotation" : "Play auto-rotation"}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>

            <span className="font-mono text-xs text-slate-400 tabular-nums px-1">
              0{currentIndex + 1} / 0{totalEvents}
            </span>

            <button
              onClick={prevSlide}
              className="p-1.5 rounded bg-[#183B56] hover:bg-[#20496B] text-slate-200 hover:text-white transition-colors cursor-pointer"
              aria-label="Previous event"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={nextSlide}
              className="p-1.5 rounded bg-[#183B56] hover:bg-[#20496B] text-slate-200 hover:text-white transition-colors cursor-pointer"
              aria-label="Next event"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Auto-Rotation Progress Bar */}
        <div className="w-full h-1 bg-[#183B56]">
          <div
            key={currentIndex}
            className="h-full bg-[#C5A15A] transition-all"
            style={{
              width: "100%",
              animation: isPlaying ? "progressFill 4.5s linear" : "none",
            }}
          />
        </div>

        {/* Slide Content Area */}
        <div className="p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Vector Artwork & Photo Badge (5 Cols) */}
            <div className="lg:col-span-5 relative group">
              <div className="w-full h-56 sm:h-64 rounded-lg overflow-hidden border border-[#183B56] shadow-md bg-[#0D1D2E] p-2 flex items-center justify-center">
                {activeEvent.svgBadge}
              </div>

              {/* Tag pill */}
              <div className="absolute top-4 left-4 bg-[#10243A]/90 backdrop-blur-xs text-[#C5A15A] border border-[#C5A15A]/40 text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded">
                {activeEvent.category}
              </div>

              <button
                onClick={() => setSelectedEvent(activeEvent)}
                className="absolute bottom-4 right-4 bg-[#10243A]/90 hover:bg-[#183B56] text-white p-2 rounded border border-slate-700 transition-colors shadow-sm cursor-pointer"
                aria-label="Expand event details"
                title="View full highlight details"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Event Description (7 Cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300">
                <span className="flex items-center gap-1.5 text-[#C5A15A] font-semibold">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{activeEvent.date}</span>
                </span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{activeEvent.location}</span>
                </span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span className="flex items-center gap-1.5 text-slate-300">
                  <Users className="w-3.5 h-3.5 text-slate-400" />
                  <span>{activeEvent.attendeesCount}</span>
                </span>
              </div>

              <h4 className="font-serif text-xl sm:text-2xl font-bold text-white leading-snug">
                {activeEvent.title}
              </h4>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {activeEvent.summary}
              </p>

              {/* Key Topics List */}
              <div className="pt-2">
                <span className="text-[11px] uppercase font-bold tracking-wider text-slate-400 block mb-2">
                  Delivered Takeaways & Focus:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-200">
                  {activeEvent.keyTopics.map((topic, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A15A] mt-1.5 shrink-0" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setSelectedEvent(activeEvent)}
                  className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#10243A] bg-[#C5A15A] hover:bg-[#D8BA76] transition-colors rounded-sm cursor-pointer shadow-sm flex items-center gap-1.5"
                >
                  <span>Event Recap</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                {onOpenConsultation && (
                  <button
                    onClick={() => onOpenConsultation(`Inquiry following ${activeEvent.title}`)}
                    className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#183B56] hover:bg-[#20496B] transition-colors rounded-sm cursor-pointer"
                  >
                    Request Similar Session
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicator Bar at Bottom */}
        <div className="px-6 py-3 bg-[#0D1D2E] border-t border-[#183B56] flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            {eventsData.map((ev, idx) => (
              <button
                key={ev.id}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  currentIndex === idx
                    ? "w-8 bg-[#C5A15A]"
                    : "w-2 bg-slate-700 hover:bg-slate-500"
                }`}
                aria-label={`Jump to event ${idx + 1}`}
              />
            ))}
          </div>

          <span className="text-[11px] text-slate-400">
            Auto-advancing highlights · Hover to pause
          </span>
        </div>
      </div>

      {/* Expanded Details Modal */}
      {selectedEvent && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-[#10243A] text-white w-full max-w-2xl rounded-lg border border-[#183B56] shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            <div className="p-6 border-b border-[#183B56] flex items-center justify-between">
              <div>
                <span className="text-xs uppercase font-bold text-[#C5A15A] block">
                  Event Spotlight · {selectedEvent.category}
                </span>
                <h3 className="font-serif text-xl font-bold text-white mt-0.5">
                  {selectedEvent.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedEvent(null)}
                className="p-1 text-slate-400 hover:text-white rounded"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="w-full h-48 rounded bg-[#0D1D2E] p-2 border border-[#183B56] flex items-center justify-center">
                {selectedEvent.svgBadge}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs bg-[#183B56]/50 p-4 rounded border border-[#183B56]">
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase">Timeline</span>
                  <span className="text-slate-100 font-semibold">{selectedEvent.date}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase">Venue & City</span>
                  <span className="text-slate-100 font-semibold">{selectedEvent.location}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase">Participation</span>
                  <span className="text-slate-100 font-semibold">{selectedEvent.attendeesCount}</span>
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <h4 className="font-bold text-white">Full Event Overview</h4>
                <p>{selectedEvent.summary}</p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-white text-xs uppercase tracking-wider text-[#C5A15A]">
                  Presented Frameworks & Resources
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-200">
                  {selectedEvent.keyTopics.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Award className="w-3.5 h-3.5 text-[#C5A15A] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 border-t border-[#183B56] flex justify-end gap-3">
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white"
                >
                  Close
                </button>
                {onOpenConsultation && (
                  <button
                    onClick={() => {
                      const title = selectedEvent.title;
                      setSelectedEvent(null);
                      onOpenConsultation(`Inquiry from ${title}`);
                    }}
                    className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-[#10243A] bg-[#C5A15A] hover:bg-[#D8BA76] rounded-sm transition-colors cursor-pointer"
                  >
                    Discuss Topic with Advisor
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
