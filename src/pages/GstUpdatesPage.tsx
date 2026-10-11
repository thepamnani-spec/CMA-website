import React, { useState } from "react";
import { gstUpdatesData } from "../data/gstUpdatesData";
import { Search, ExternalLink, ShieldAlert, ArrowRight, Filter, AlertCircle } from "lucide-react";

interface GstUpdatesPageProps {
  navigate: (path: string) => void;
  onOpenConsultation: (serviceTitle?: string) => void;
}

export const GstUpdatesPage: React.FC<GstUpdatesPageProps> = ({
  navigate,
  onOpenConsultation,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "E-Invoicing", "ITC Rule", "Procedural", "Circular"];

  const filteredUpdates = gstUpdatesData.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.notificationNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.practicalImplication.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C5A15A]">
          <span>Regulatory Intelligence</span>
          <span aria-hidden="true">·</span>
          <span>Krish & Associate</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#10243A]">
          GST Notifications, Circulars & Practical Impact
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Accurate, date-sensitive Indian GST statutory updates curated for Ahmedabad businesses, manufacturers, and traders. We translate complex CBIC notifications into clear operational actions.
        </p>
      </div>

      {/* Disclaimers & Date Sensitivity Notice */}
      <div className="bg-[#10243A] text-white p-5 rounded-lg border border-[#183B56] text-xs space-y-2">
        <div className="flex items-center gap-2 text-[#C5A15A] font-semibold">
          <ShieldAlert className="w-4 h-4" />
          <span>Statutory Content & Verification Notice</span>
        </div>
        <p className="text-slate-300 leading-relaxed">
          GST regulations in India are subject to continuous official amendments by the CBIC and GST Council. The summaries below distinguish official notification text from our practical commentary. For entity-specific rulings or dispute matters, review official gazette copies or consult professional counsel.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center">
        {/* Search */}
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search notifications, rules, or keywords..."
            className="w-full pl-9 pr-4 py-2 text-xs border border-slate-300 rounded focus:border-[#10243A] focus:ring-1 focus:ring-[#10243A] bg-white"
          />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#10243A] text-white"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Notifications List */}
      <div className="space-y-6">
        {filteredUpdates.length === 0 ? (
          <div className="bg-white p-12 text-center rounded-lg border border-slate-200">
            <p className="text-sm text-slate-500">No GST notifications match your search terms.</p>
          </div>
        ) : (
          filteredUpdates.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-lg border border-slate-200 p-6 sm:p-8 space-y-5 hover:border-slate-400 transition-colors shadow-xs"
            >
              {/* Notification Metadata */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100 text-xs text-slate-500">
                <div className="flex items-center gap-2 font-mono">
                  <span className="font-semibold text-slate-800">{item.notificationNumber}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-[#C5A15A] font-semibold">{item.category}</span>
                </div>
                <div>
                  <strong>Timeline:</strong> {item.date}
                </div>
              </div>

              {/* Title */}
              <h2 className="font-serif text-xl font-bold text-[#10243A]">
                {item.title}
              </h2>

              {/* Two-Column Comparison: Official Summary vs Practical Implication */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-1">
                {/* Official Statutory Text */}
                <div className="p-4 bg-slate-50 rounded border border-slate-200 space-y-1.5">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-600 block">
                    Official Notification Summary
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {item.officialSummary}
                  </p>
                </div>

                {/* Practical Takeaway */}
                <div className="p-4 bg-amber-50/50 rounded border border-amber-200 space-y-1.5">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-900 block">
                    Practical Impact on Business Operations
                  </span>
                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                    {item.practicalImplication}
                  </p>
                </div>
              </div>

              {/* Action Required Box */}
              <div className="p-4 bg-[#10243A] text-white rounded text-xs space-y-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#C5A15A] block">
                  Action Checklist for Ahmedabad Businesses:
                </span>
                <p className="text-slate-200 leading-relaxed">
                  {item.actionRequired}
                </p>
              </div>

              {/* Official Source Footnote */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span>Source Verification: {item.officialSource}</span>
                </div>
                <button
                  onClick={() => onOpenConsultation(`Inquiry regarding ${item.notificationNumber}`)}
                  className="text-xs font-semibold text-[#10243A] hover:text-[#C5A15A] flex items-center gap-1 cursor-pointer self-start sm:self-auto"
                >
                  <span>Discuss Business Implication with Advisor</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))
        )}
      </div>

      {/* Consultation Banner */}
      <div className="bg-white rounded-lg border border-slate-200 p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
        <div>
          <h3 className="font-serif text-xl font-bold text-[#10243A]">
            Received a GST Intimation (DRC-01B or DRC-01C)?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
            Automated disparity notices require structured reconciliation within 7 days. We assist in cross-verifying purchase registers and drafting factual explanations.
          </p>
        </div>
        <button
          onClick={() => onOpenConsultation("GST Notice / Intimation Support")}
          className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#10243A] bg-[#C5A15A] hover:bg-[#D8BA76] transition-colors rounded-sm cursor-pointer whitespace-nowrap shrink-0 shadow-sm"
        >
          Request GST Support
        </button>
      </div>
    </div>
  );
};
