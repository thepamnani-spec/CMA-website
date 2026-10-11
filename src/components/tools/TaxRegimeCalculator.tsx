import React, { useState } from "react";
import { Calculator, ArrowRight, Check } from "lucide-react";

export const TaxRegimeCalculator: React.FC<{ onEnquire: () => void }> = ({ onEnquire }) => {
  const [grossIncome, setGrossIncome] = useState<number>(1200000);
  const [sec80c, setSec80c] = useState<number>(150000);
  const [sec80d, setSec80d] = useState<number>(25000);
  const [hra, setHra] = useState<number>(100000);
  const [homeLoanInterest, setHomeLoanInterest] = useState<number>(0);

  // New Regime Calculation
  const newStdDeduction = 75000;
  const newNetTaxable = Math.max(0, grossIncome - newStdDeduction);

  let newTaxBeforeCess = 0;
  if (newNetTaxable <= 300000) {
    newTaxBeforeCess = 0;
  } else if (newNetTaxable <= 700000) {
    newTaxBeforeCess = (newNetTaxable - 300000) * 0.05;
  } else if (newNetTaxable <= 1000000) {
    newTaxBeforeCess = 400000 * 0.05 + (newNetTaxable - 700000) * 0.10;
  } else if (newNetTaxable <= 1200000) {
    newTaxBeforeCess = 400000 * 0.05 + 300000 * 0.10 + (newNetTaxable - 1000000) * 0.15;
  } else if (newNetTaxable <= 1500000) {
    newTaxBeforeCess =
      400000 * 0.05 + 300000 * 0.10 + 200000 * 0.15 + (newNetTaxable - 1200000) * 0.20;
  } else {
    newTaxBeforeCess =
      400000 * 0.05 +
      300000 * 0.10 +
      200000 * 0.15 +
      300000 * 0.20 +
      (newNetTaxable - 1500000) * 0.30;
  }

  // 87A Rebate in New Regime (taxable up to ₹7,00,000 pays 0 tax)
  if (newNetTaxable <= 700000) {
    newTaxBeforeCess = 0;
  }
  const newTotalTax = Math.round(newTaxBeforeCess * 1.04);

  // Old Regime Calculation
  const oldStdDeduction = 50000;
  const capped80c = Math.min(150000, Math.max(0, sec80c));
  const capped80d = Math.min(100000, Math.max(0, sec80d));
  const cappedHomeLoan = Math.min(200000, Math.max(0, homeLoanInterest));
  const totalOldDeductions = oldStdDeduction + capped80c + capped80d + Math.max(0, hra) + cappedHomeLoan;

  const oldNetTaxable = Math.max(0, grossIncome - totalOldDeductions);

  let oldTaxBeforeCess = 0;
  if (oldNetTaxable <= 250000) {
    oldTaxBeforeCess = 0;
  } else if (oldNetTaxable <= 500000) {
    oldTaxBeforeCess = (oldNetTaxable - 250000) * 0.05;
  } else if (oldNetTaxable <= 1000000) {
    oldTaxBeforeCess = 250000 * 0.05 + (oldNetTaxable - 500000) * 0.20;
  } else {
    oldTaxBeforeCess = 250000 * 0.05 + 500000 * 0.20 + (oldNetTaxable - 1000000) * 0.30;
  }

  // 87A Rebate in Old Regime (taxable up to ₹5,00,000)
  if (oldNetTaxable <= 500000) {
    oldTaxBeforeCess = 0;
  }
  const oldTotalTax = Math.round(oldTaxBeforeCess * 1.04);

  const taxDifference = Math.abs(oldTotalTax - newTotalTax);
  const recommendedRegime = newTotalTax <= oldTotalTax ? "New Tax Regime (Sec 115BAC)" : "Old Tax Regime";

  const formatRupees = (val: number) => {
    return "₹" + val.toLocaleString("en-IN");
  };

  return (
    <div className="bg-white rounded-lg border border-slate-200 p-6 sm:p-8 shadow-sm">
      <div className="flex items-center gap-3 pb-6 border-b border-slate-100">
        <div className="p-2.5 bg-[#10243A] text-[#C5A15A] rounded">
          <Calculator className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-serif text-lg font-bold text-[#10243A]">
            Income Tax Regime Evaluator (FY 2024-25 & 2025-26)
          </h3>
          <p className="text-xs text-slate-500">
            Compare Section 115BAC vs Old Regime with updated standard deductions and tax slabs.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
        {/* Input Parameters */}
        <div className="lg:col-span-7 space-y-4">
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-xs font-semibold text-slate-700">
                Gross Annual Income (Salary / Professional Gross)
              </label>
              <span className="text-xs font-mono font-bold text-[#10243A] tabular-nums">
                {formatRupees(grossIncome)}
              </span>
            </div>
            <input
              type="range"
              min="300000"
              max="5000000"
              step="50000"
              value={grossIncome}
              onChange={(e) => setGrossIncome(Number(e.target.value))}
              className="w-full accent-[#10243A] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-0.5">
              <span>₹3 Lakh</span>
              <span>₹25 Lakh</span>
              <span>₹50 Lakh</span>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100">
            <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider block mb-3">
              Eligible Deductions (Old Regime Applicable)
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <label className="block text-slate-600 mb-1">Section 80C (Max ₹1.5L)</label>
                <input
                  type="number"
                  min="0"
                  max="150000"
                  step="10000"
                  value={sec80c}
                  onChange={(e) => setSec80c(Number(e.target.value))}
                  className="w-full px-3 py-1.5 border border-slate-300 rounded font-mono tabular-nums text-xs"
                />
              </div>

              <div>
                <label className="block text-slate-600 mb-1">Section 80D Health Insurance</label>
                <input
                  type="number"
                  min="0"
                  max="100000"
                  step="5000"
                  value={sec80d}
                  onChange={(e) => setSec80d(Number(e.target.value))}
                  className="w-full px-3 py-1.5 border border-slate-300 rounded font-mono tabular-nums text-xs"
                />
              </div>

              <div>
                <label className="block text-slate-600 mb-1">HRA Exemption Claimed</label>
                <input
                  type="number"
                  min="0"
                  max="1000000"
                  step="10000"
                  value={hra}
                  onChange={(e) => setHra(Number(e.target.value))}
                  className="w-full px-3 py-1.5 border border-slate-300 rounded font-mono tabular-nums text-xs"
                />
              </div>

              <div>
                <label className="block text-slate-600 mb-1">Section 24(b) Home Loan Interest</label>
                <input
                  type="number"
                  min="0"
                  max="200000"
                  step="10000"
                  value={homeLoanInterest}
                  onChange={(e) => setHomeLoanInterest(Number(e.target.value))}
                  className="w-full px-3 py-1.5 border border-slate-300 rounded font-mono tabular-nums text-xs"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Results Comparison Card */}
        <div className="lg:col-span-5 bg-[#F5F7FA] p-5 rounded-lg border border-slate-200 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="p-3 bg-white rounded border border-slate-200">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block">
                Calculated Recommendation
              </span>
              <p className="text-sm font-bold text-[#10243A] mt-0.5 flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>{recommendedRegime}</span>
              </p>
              <p className="text-xs text-emerald-700 font-medium mt-1">
                Estimated Tax Benefit: {formatRupees(taxDifference)} per year
              </p>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between items-center py-1.5 border-b border-slate-200">
                <span className="text-slate-600">New Regime Tax (Sec 115BAC):</span>
                <span className="font-mono font-bold text-[#10243A] tabular-nums">
                  {formatRupees(newTotalTax)}
                </span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-slate-200">
                <span className="text-slate-600">Old Regime Tax:</span>
                <span className="font-mono font-bold text-[#10243A] tabular-nums">
                  {formatRupees(oldTotalTax)}
                </span>
              </div>
              <div className="flex justify-between items-center py-1.5">
                <span className="text-slate-500">Standard Deduction Applied:</span>
                <span className="font-mono text-slate-700 tabular-nums">
                  ₹75,000 (New) / ₹50,000 (Old)
                </span>
              </div>
            </div>
          </div>

          <div className="pt-4 mt-4 border-t border-slate-200">
            <button
              onClick={onEnquire}
              className="w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-[#10243A] bg-[#C5A15A] hover:bg-[#D8BA76] transition-colors rounded-sm flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Get Professional Filing Support</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <p className="text-[10px] text-slate-400 text-center mt-2">
              For indicative assessment. Accurate liability depends on AIS reconciliation and specific schedules.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
