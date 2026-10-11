import React from "react";

export const ArchitecturalHeroVisual: React.FC = () => {
  return (
    <div className="relative w-full h-[380px] lg:h-[460px] rounded-lg overflow-hidden bg-gradient-to-br from-[#10243A] via-[#183B56] to-[#0D1D2E] p-6 sm:p-8 flex flex-col justify-between border border-[#183B56] shadow-2xl">
      {/* Background Architectural Vector Grid Lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-15 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 600"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#C5A15A" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        {/* Architectural Diagonal Axonometric Lines */}
        <line x1="0" y1="600" x2="800" y2="200" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="100" y1="600" x2="900" y2="200" stroke="#C5A15A" strokeWidth="0.8" />
      </svg>

      {/* Top Floating Pillar: Ahmedabad Hub */}
      <div className="relative z-10 flex items-center justify-between border-b border-slate-700/50 pb-4">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#C5A15A] block">
            Advisory Framework
          </span>
          <span className="text-sm font-serif font-bold text-white tracking-wide">
            Krish & Associate · Western India Practice
          </span>
        </div>
        <div className="text-right">
          <span className="text-[10px] text-slate-400 block uppercase tracking-wider">Jurisdiction</span>
          <span className="text-xs font-medium text-slate-200">Ahmedabad, Gujarat</span>
        </div>
      </div>

      {/* Central Visual: Financial Structure Matrix */}
      <div className="relative z-10 grid grid-cols-3 gap-3 my-auto py-2">
        {/* Module 1: Cost Optimization */}
        <div className="bg-[#10243A]/80 backdrop-blur-xs p-3.5 rounded border border-[#183B56] hover:border-[#C5A15A]/40 transition-colors">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-semibold text-slate-300">Cost Analysis</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A15A]"></span>
          </div>
          <div className="space-y-1">
            <div className="h-1.5 bg-slate-700 rounded w-full overflow-hidden">
              <div className="h-full bg-[#C5A15A] w-3/4"></div>
            </div>
            <p className="text-[10px] text-slate-400 pt-1">Variance containment & unit margins</p>
          </div>
        </div>

        {/* Module 2: GST Reconciliation */}
        <div className="bg-[#10243A]/80 backdrop-blur-xs p-3.5 rounded border border-[#183B56] hover:border-[#C5A15A]/40 transition-colors">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-semibold text-slate-300">GST Compliance</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          </div>
          <div className="space-y-1">
            <div className="h-1.5 bg-slate-700 rounded w-full overflow-hidden">
              <div className="h-full bg-emerald-400 w-5/6"></div>
            </div>
            <p className="text-[10px] text-slate-400 pt-1">GSTR-2B matching & 37A audit</p>
          </div>
        </div>

        {/* Module 3: Virtual CFO */}
        <div className="bg-[#10243A]/80 backdrop-blur-xs p-3.5 rounded border border-[#183B56] hover:border-[#C5A15A]/40 transition-colors">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-semibold text-slate-300">Virtual CFO</span>
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
          </div>
          <div className="space-y-1">
            <div className="h-1.5 bg-slate-700 rounded w-full overflow-hidden">
              <div className="h-full bg-sky-400 w-4/5"></div>
            </div>
            <p className="text-[10px] text-slate-400 pt-1">13-week cash forecasting & MIS</p>
          </div>
        </div>
      </div>

      {/* Bottom KPI & Verification Anchor */}
      <div className="relative z-10 bg-[#0E1E2E]/90 p-4 rounded border border-[#183B56]/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-[#183B56] flex items-center justify-center text-[#C5A15A] font-serif font-bold text-sm">
            KA
          </div>
          <div>
            <p className="text-xs font-medium text-slate-200">
              Pragmatic Business Financial Oversight
            </p>
            <p className="text-[11px] text-slate-400">
              Clear reporting, documented reconciliations, zero ambiguity
            </p>
          </div>
        </div>
        <div className="text-right shrink-0">
          <span className="text-[10px] uppercase tracking-wider text-slate-400 block">Lead Advisor</span>
          <span className="text-xs font-semibold text-[#C5A15A]">Krish Pamnani</span>
        </div>
      </div>
    </div>
  );
};
