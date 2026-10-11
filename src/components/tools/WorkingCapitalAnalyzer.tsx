import React, { useState } from "react";
import { TrendingUp, ArrowRight } from "lucide-react";

export const WorkingCapitalAnalyzer: React.FC<{ onEnquire: () => void }> = ({ onEnquire }) => {
  const [annualTurnover, setAnnualTurnover] = useState<number>(100000000); // 10 Cr
  const [dso, setDso] = useState<number>(65); // Days Sales Outstanding
  const [dio, setDio] = useState<number>(45); // Days Inventory Outstanding
  const [dpo, setDpo] = useState<number>(30); // Days Payables Outstanding

  // Cash Conversion Cycle = DSO + DIO - DPO
  const ccc = dso + dio - dpo;

  // Trapped Working Capital = (Annual Turnover / 365) * CCC
  const dailyTurnover = annualTurnover / 365;
  const trappedCapital = Math.round(dailyTurnover * Math.max(0, ccc));

  const formatRupees = (val: number) => "₹" + val.toLocaleString("en-IN");

  return (
    <div className="bg-[#18181B] rounded-lg border border-[#27272A] p-6 sm:p-8 shadow-xl text-zinc-100">
      <div className="flex items-center gap-3 pb-6 border-b border-[#27272A]">
        <div className="p-2.5 bg-black text-[#EAB308] border border-[#EAB308] rounded">
          <TrendingUp className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-serif text-lg font-bold text-white">
            Working Capital & Cash Conversion Cycle (CCC) Diagnostic
          </h3>
          <p className="text-xs text-zinc-400">
            Identify how much capital is locked up in customer credit and inventory holding across your operating cycle.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
        <div className="lg:col-span-7 space-y-4">
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-xs font-bold text-zinc-300">
                Annual Business Turnover
              </label>
              <span className="text-xs font-mono font-bold text-[#EAB308] tabular-nums">
                {formatRupees(annualTurnover)}
              </span>
            </div>
            <input
              type="range"
              min="10000000"
              max="500000000"
              step="5000000"
              value={annualTurnover}
              onChange={(e) => setAnnualTurnover(Number(e.target.value))}
              className="w-full accent-[#EAB308] cursor-pointer"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div>
              <label className="block text-xs font-bold text-zinc-300 mb-1">
                Customer Credit (DSO)
              </label>
              <div className="flex items-center bg-[#121214] border border-[#27272A] rounded px-2.5 py-1.5 focus-within:border-[#EAB308]">
                <input
                  type="number"
                  min="5"
                  max="180"
                  value={dso}
                  onChange={(e) => setDso(Number(e.target.value))}
                  className="w-full font-mono text-xs tabular-nums text-white bg-transparent focus:outline-none"
                />
                <span className="text-[11px] text-zinc-500">days</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-zinc-300 mb-1">
                Inventory Holding (DIO)
              </label>
              <div className="flex items-center bg-[#121214] border border-[#27272A] rounded px-2.5 py-1.5 focus-within:border-[#EAB308]">
                <input
                  type="number"
                  min="5"
                  max="180"
                  value={dio}
                  onChange={(e) => setDio(Number(e.target.value))}
                  className="w-full font-mono text-xs tabular-nums text-white bg-transparent focus:outline-none"
                />
                <span className="text-[11px] text-zinc-500">days</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-zinc-300 mb-1">
                Supplier Credit (DPO)
              </label>
              <div className="flex items-center bg-[#121214] border border-[#27272A] rounded px-2.5 py-1.5 focus-within:border-[#EAB308]">
                <input
                  type="number"
                  min="0"
                  max="180"
                  value={dpo}
                  onChange={(e) => setDpo(Number(e.target.value))}
                  className="w-full font-mono text-xs tabular-nums text-white bg-transparent focus:outline-none"
                />
                <span className="text-[11px] text-zinc-500">days</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 bg-[#121214] p-5 rounded-lg border border-[#27272A] flex flex-col justify-between shadow-md">
          <div className="space-y-3">
            <div className="p-3.5 bg-[#18181B] rounded border border-[#EAB308]/40">
              <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block">
                Net Operating Cash Cycle
              </span>
              <p className="text-2xl font-bold font-mono text-[#EAB308] mt-1 tabular-nums">
                {ccc} Operating Days
              </p>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between items-center py-1.5 border-b border-[#27272A]">
                <span className="text-zinc-400">Locked Working Capital:</span>
                <span className="font-mono font-bold text-amber-400 tabular-nums">
                  {formatRupees(trappedCapital)}
                </span>
              </div>
              <div className="flex justify-between items-center py-1.5">
                <span className="text-zinc-400">Annual Interest Burden (~10% CC):</span>
                <span className="font-mono font-semibold text-white tabular-nums">
                  ~{formatRupees(Math.round(trappedCapital * 0.1))}
                </span>
              </div>
            </div>

            <p className="text-[11px] text-zinc-300 leading-relaxed bg-[#18181B] p-2.5 rounded border border-[#27272A]">
              Reducing your cash cycle by just 15 days frees approximately <strong className="text-[#EAB308]">{formatRupees(Math.round(dailyTurnover * 15))}</strong> in liquid cash flow without taking any additional bank debt.
            </p>
          </div>

          <div className="pt-4 mt-4 border-t border-[#27272A]">
            <button
              onClick={onEnquire}
              className="w-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-black bg-[#EAB308] hover:bg-[#FACC15] transition-all rounded-sm flex items-center justify-center gap-1.5 cursor-pointer shadow-lg shadow-yellow-500/20 active:scale-95"
            >
              <span>Explore Virtual CFO Retainer</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
