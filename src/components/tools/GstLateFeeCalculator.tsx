import React, { useState } from "react";
import { Clock, AlertTriangle, ArrowRight } from "lucide-react";

export const GstLateFeeCalculator: React.FC<{ onEnquire: () => void }> = ({ onEnquire }) => {
  const [netCashTax, setNetCashTax] = useState<number>(50000);
  const [daysDelayed, setDaysDelayed] = useState<number>(30);
  const [isNilReturn, setIsNilReturn] = useState<boolean>(false);

  // Section 50(1) interest @ 18% per annum on net cash liability
  const interestPerAnnum = 0.18;
  const computedInterest = Math.round((netCashTax * interestPerAnnum * daysDelayed) / 365);

  // Section 47 late fee: Regular return ₹50/day (₹25 CGST + ₹25 SGST), capped at ₹10,000 for regular returns
  // For Nil return: ₹20/day (₹10 CGST + ₹10 SGST), capped at ₹500
  const dailyFee = isNilReturn ? 20 : 50;
  const maxFee = isNilReturn ? 500 : 10000;
  const computedLateFee = Math.min(maxFee, daysDelayed * dailyFee);

  const totalPayable = computedInterest + computedLateFee;

  const formatRupees = (val: number) => "₹" + val.toLocaleString("en-IN");

  return (
    <div className="bg-white rounded-lg border border-slate-200 p-6 sm:p-8 shadow-sm">
      <div className="flex items-center gap-3 pb-6 border-b border-slate-100">
        <div className="p-2.5 bg-[#10243A] text-[#C5A15A] rounded">
          <Clock className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-serif text-lg font-bold text-[#10243A]">
            GST Section 50 Interest & Section 47 Late Fee Estimator
          </h3>
          <p className="text-xs text-slate-500">
            Compute statutory interest (18% p.a.) on net cash liability and delayed return filing fees.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
        <div className="lg:col-span-7 space-y-4">
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-xs font-semibold text-slate-700">
                Net Cash Tax Liability (Paid via PMT-06 / Challan, excluding ITC)
              </label>
              <span className="text-xs font-mono font-bold text-[#10243A] tabular-nums">
                {formatRupees(netCashTax)}
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="1000000"
              step="5000"
              disabled={isNilReturn}
              value={netCashTax}
              onChange={(e) => setNetCashTax(Number(e.target.value))}
              className="w-full accent-[#10243A] cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-xs font-semibold text-slate-700">
                Days Delayed Past Due Date (e.g., past 20th of the month)
              </label>
              <span className="text-xs font-mono font-bold text-[#10243A] tabular-nums">
                {daysDelayed} Days
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="180"
              step="1"
              value={daysDelayed}
              onChange={(e) => setDaysDelayed(Number(e.target.value))}
              className="w-full accent-[#10243A] cursor-pointer"
            />
          </div>

          <div className="pt-2">
            <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-700">
              <input
                type="checkbox"
                checked={isNilReturn}
                onChange={(e) => {
                  setIsNilReturn(e.target.checked);
                  if (e.target.checked) setNetCashTax(0);
                }}
                className="text-[#10243A] rounded-sm"
              />
              <span className="font-medium">This is a Nil Tax Return (No outward or inward tax liability)</span>
            </label>
          </div>
        </div>

        <div className="lg:col-span-5 bg-[#F5F7FA] p-5 rounded-lg border border-slate-200 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="p-3 bg-white rounded border border-slate-200">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block">
                Total Statutory Additional Cost
              </span>
              <p className="text-xl font-bold font-mono text-[#10243A] mt-1 tabular-nums">
                {formatRupees(totalPayable)}
              </p>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between items-center py-1.5 border-b border-slate-200">
                <span className="text-slate-600">Section 50 Interest @ 18% p.a.:</span>
                <span className="font-mono font-bold text-slate-800 tabular-nums">
                  {formatRupees(computedInterest)}
                </span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-slate-200">
                <span className="text-slate-600">Section 47 Late Filing Fee:</span>
                <span className="font-mono font-bold text-slate-800 tabular-nums">
                  {formatRupees(computedLateFee)}
                </span>
              </div>
            </div>

            <div className="flex items-start gap-1.5 text-[11px] text-amber-800 bg-amber-50 p-2.5 rounded border border-amber-200">
              <AlertTriangle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-amber-600" />
              <span>Delaying returns beyond statutory deadlines also blocks outgoing GSTR-1 and E-Way bill generation.</span>
            </div>
          </div>

          <div className="pt-4 mt-4 border-t border-slate-200">
            <button
              onClick={onEnquire}
              className="w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-[#10243A] bg-[#C5A15A] hover:bg-[#D8BA76] transition-colors rounded-sm flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Structure Regular GST Filing</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
