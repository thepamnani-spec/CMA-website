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
    <div className="bg-white rounded-lg border border-slate-200 p-6 sm:p-8 shadow-sm">
      <div className="flex items-center gap-3 pb-6 border-b border-slate-100">
        <div className="p-2.5 bg-[#10243A] text-[#C5A15A] rounded">
          <TrendingUp className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-serif text-lg font-bold text-[#10243A]">
            Working Capital & Cash Conversion Cycle (CCC) Diagnostic
          </h3>
          <p className="text-xs text-slate-500">
            Identify how much capital is locked up in customer credit and inventory holding across your operating cycle.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
        <div className="lg:col-span-7 space-y-4">
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-xs font-semibold text-slate-700">
                Annual Business Turnover
              </label>
              <span className="text-xs font-mono font-bold text-[#10243A] tabular-nums">
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
              className="w-full accent-[#10243A] cursor-pointer"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Customer Credit (DSO)
              </label>
              <div className="flex items-center border border-slate-300 rounded px-2.5 py-1.5">
                <input
                  type="number"
                  min="5"
                  max="180"
                  value={dso}
                  onChange={(e) => setDso(Number(e.target.value))}
                  className="w-full font-mono text-xs tabular-nums focus:outline-none"
                />
                <span className="text-[11px] text-slate-400">days</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Inventory Holding (DIO)
              </label>
              <div className="flex items-center border border-slate-300 rounded px-2.5 py-1.5">
                <input
                  type="number"
                  min="5"
                  max="180"
                  value={dio}
                  onChange={(e) => setDio(Number(e.target.value))}
                  className="w-full font-mono text-xs tabular-nums focus:outline-none"
                />
                <span className="text-[11px] text-slate-400">days</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Supplier Credit (DPO)
              </label>
              <div className="flex items-center border border-slate-300 rounded px-2.5 py-1.5">
                <input
                  type="number"
                  min="0"
                  max="180"
                  value={dpo}
                  onChange={(e) => setDpo(Number(e.target.value))}
                  className="w-full font-mono text-xs tabular-nums focus:outline-none"
                />
                <span className="text-[11px] text-slate-400">days</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 bg-[#F5F7FA] p-5 rounded-lg border border-slate-200 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="p-3 bg-white rounded border border-slate-200">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block">
                Net Operating Cash Cycle
              </span>
              <p className="text-xl font-bold font-mono text-[#10243A] mt-1 tabular-nums">
                {ccc} Operating Days
              </p>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between items-center py-1.5 border-b border-slate-200">
                <span className="text-slate-600">Locked Working Capital:</span>
                <span className="font-mono font-bold text-rose-700 tabular-nums">
                  {formatRupees(trappedCapital)}
                </span>
              </div>
              <div className="flex justify-between items-center py-1.5">
                <span className="text-slate-600">Annual Interest Burden (~10% CC):</span>
                <span className="font-mono font-semibold text-slate-800 tabular-nums">
                  ~{formatRupees(Math.round(trappedCapital * 0.1))}
                </span>
              </div>
            </div>

            <p className="text-[11px] text-slate-600 leading-relaxed bg-white p-2.5 rounded border border-slate-200">
              Reducing your cash cycle by just 15 days frees approximately <strong>{formatRupees(Math.round(dailyTurnover * 15))}</strong> in liquid cash flow without taking any additional bank debt.
            </p>
          </div>

          <div className="pt-4 mt-4 border-t border-slate-200">
            <button
              onClick={onEnquire}
              className="w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-[#10243A] bg-[#C5A15A] hover:bg-[#D8BA76] transition-colors rounded-sm flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Explore Virtual CFO Retainer</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
