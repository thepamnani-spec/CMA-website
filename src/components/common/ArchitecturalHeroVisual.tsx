import React from "react";

export const ArchitecturalHeroVisual: React.FC = () => {
  return (
    <div className="relative w-full h-[380px] lg:h-[460px] rounded-lg overflow-hidden bg-gradient-to-br from-[#0A0A0A] via-[#121214] to-[#0A0A0A] p-6 sm:p-8 flex flex-col justify-between border border-[#27272A] shadow-2xl">
      {/* Background Architectural Vector Grid Lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-25 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 600"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#EAB308" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        {/* Architectural Diagonal Axonometric Lines */}
        <line x1="0" y1="600" x2="800" y2="200" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
        <line x1="100" y1="600" x2="900" y2="200" stroke="#EAB308" strokeWidth="1.2" />
      </svg>

      {/* Top Floating Pillar: Ahmedabad Hub */}
      <div className="relative z-10 flex items-center justify-between border-b border-[#27272A] pb-4">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#EAB308] block">
            Advisory Framework
          </span>
          <span className="text-sm font-serif font-bold text-white tracking-wide">
            Krish & Associate · Western India Practice
          </span>
        </div>
        <div className="text-right">
          <span className="text-[10px] text-zinc-400 block uppercase tracking-wider">Jurisdiction</span>
          <span className="text-xs font-semibold text-zinc-200">Ahmedabad, Gujarat</span>
        </div>
      </div>

      {/* Central Visual: Financial Structure Matrix */}
      <div className="relative z-10 grid grid-cols-3 gap-3 my-auto py-2">
        {/* Module 1: Cost Optimization */}
        <div className="bg-[#18181B]/95 backdrop-blur-xs p-3.5 rounded border border-[#27272A] hover:border-[#EAB308] transition-colors">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-semibold text-zinc-200">Cost Analysis</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#EAB308]"></span>
          </div>
          <div className="space-y-1">
            <div className="h-1.5 bg-black rounded w-full overflow-hidden">
              <div className="h-full bg-[#EAB308] w-3/4"></div>
            </div>
            <p className="text-[10px] text-zinc-400 pt-1">Variance containment & margins</p>
          </div>
        </div>

        {/* Module 2: GST Reconciliation */}
        <div className="bg-[#18181B]/95 backdrop-blur-xs p-3.5 rounded border border-[#27272A] hover:border-[#EAB308] transition-colors">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-semibold text-zinc-200">GST Compliance</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#FACC15]"></span>
          </div>
          <div className="space-y-1">
            <div className="h-1.5 bg-black rounded w-full overflow-hidden">
              <div className="h-full bg-[#FACC15] w-5/6"></div>
            </div>
            <p className="text-[10px] text-zinc-400 pt-1">GSTR-2B matching & 37A audit</p>
          </div>
        </div>

        {/* Module 3: Virtual CFO */}
        <div className="bg-[#18181B]/95 backdrop-blur-xs p-3.5 rounded border border-[#27272A] hover:border-[#EAB308] transition-colors">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-semibold text-zinc-200">Virtual CFO</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#EAB308]"></span>
          </div>
          <div className="space-y-1">
            <div className="h-1.5 bg-black rounded w-full overflow-hidden">
              <div className="h-full bg-[#EAB308] w-4/5"></div>
            </div>
            <p className="text-[10px] text-zinc-400 pt-1">13-week cash forecasting & MIS</p>
          </div>
        </div>
      </div>

      {/* Bottom KPI & Verification Anchor */}
      <div className="relative z-10 bg-[#121214]/95 p-4 rounded border border-[#27272A] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-black border border-[#EAB308] flex items-center justify-center text-[#EAB308] font-serif font-bold text-sm">
            KA
          </div>
          <div>
            <p className="text-xs font-semibold text-white">
              Pragmatic Business Financial Oversight
            </p>
            <p className="text-[11px] text-zinc-400">
              Clear reporting, documented reconciliations, zero ambiguity
            </p>
          </div>
        </div>
        <div className="text-right shrink-0">
          <span className="text-[10px] uppercase tracking-wider text-zinc-400 block">Lead Advisor</span>
          <span className="text-xs font-bold text-[#EAB308]">Krish Pamnani</span>
        </div>
      </div>
    </div>
  );
};
