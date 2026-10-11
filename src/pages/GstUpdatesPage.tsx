import React, { useState } from "react";
import { gstUpdatesData } from "../data/gstUpdatesData";
import { Search, ShieldAlert, ArrowRight } from "lucide-react";

interface GstUpdatesPageProps {
  navigate: (path: string) => void;
  onOpenConsultation: (serviceTitle?: string) => void;
}

export const GstUpdatesPage: React.FC<GstUpdatesPageProps> = ({
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 text-zinc-100">
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#EAB308]">
          <span>Regulatory Intelligence</span>
          <span aria-hidden="true">·</span>
          <span>Krish & Associate</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
          GST Notifications, Circulars & Practical Impact
        </h1>
        <p className="text-base text-zinc-300 leading-relaxed">
          Accurate, date-sensitive Indian GST statutory updates curated for Ahmedabad businesses, manufacturers, and traders. We translate complex CBIC notifications into clear operational actions.
        </p>
      </div>

      {/* Disclaimers & Date Sensitivity Notice */}
      <div className="bg-[#121214] text-white p-5 rounded-lg border border-[#27272A] text-xs space-y-2 shadow-xl">
        <div className="flex items-center gap-2 text-[#EAB308] font-bold">
          <ShieldAlert className="w-4 h-4" />
          <span>Statutory Content & Verification Notice</span>
        </div>
        <p className="text-zinc-300 leading-relaxed">
          GST regulations in India are subject to continuous official amendments by the CBIC and GST Council. The summaries below distinguish official notification text from our practical commentary. For entity-specific rulings or dispute matters, review official gazette copies or consult professional counsel.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center">
        {/* Search */}
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search notifications, rules, or keywords..."
            className="w-full pl-9 pr-4 py-2 text-xs border border-[#27272A] rounded focus:border-[#EAB308] focus:ring-1 focus:ring-[#EAB308] bg-[#18181B] text-white focus:outline-none placeholder:text-zinc-500"
          />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#18181B] border border-[#27272A] rounded">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-bold rounded transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#EAB308] text-black shadow-sm"
                  : "text-zinc-400 hover:text-white"
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
          <div className="bg-[#18181B] p-12 text-center rounded-lg border border-[#27272A]">
            <p className="text-sm text-zinc-400">No GST notifications match your search terms.</p>
          </div>
        ) : (
          filteredUpdates.map((item) => (
            <article
              key={item.id}
              className="bg-[#18181B] rounded-lg border border-[#27272A] p-6 sm:p-8 space-y-5 hover:border-[#EAB308] transition-colors shadow-xl"
            >
              {/* Notification Metadata */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#27272A] text-xs text-zinc-400">
                <div className="flex items-center gap-2 font-mono">
                  <span className="font-bold text-white">{item.notificationNumber}</span>
                  <span aria-hidden="true" className="text-zinc-700">·</span>
                  <span className="text-[#EAB308] font-bold">{item.category}</span>
                </div>
                <div>
                  <strong className="text-zinc-300">Timeline:</strong> {item.date}
                </div>
              </div>

              {/* Title */}
              <h2 className="font-serif text-xl font-bold text-white">
                {item.title}
              </h2>

              {/* Two-Column Comparison: Official Summary vs Practical Implication */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-1">
                {/* Official Statutory Text */}
                <div className="p-4 bg-[#121214] rounded border border-[#27272A] space-y-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block">
                    Official Notification Summary
                  </span>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {item.officialSummary}
                  </p>
                </div>

                {/* Practical Takeaway */}
                <div className="p-4 bg-[#121214] rounded border border-[#EAB308]/40 space-y-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#EAB308] block">
                    Practical Impact on Business Operations
                  </span>
                  <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed">
                    {item.practicalImplication}
                  </p>
                </div>
              </div>

              {/* Action Required Box */}
              <div className="p-4 bg-black text-white rounded border border-[#27272A] text-xs space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#EAB308] block">
                  Action Checklist for Ahmedabad Businesses:
                </span>
                <p className="text-zinc-300 leading-relaxed">
                  {item.actionRequired}
                </p>
              </div>

              {/* Official Source Footnote */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 text-xs text-zinc-500">
                <div className="flex items-center gap-1.5">
                  <span>Source Verification: {item.officialSource}</span>
                </div>
                <button
                  onClick={() => onOpenConsultation(`Inquiry regarding ${item.notificationNumber}`)}
                  className="text-xs font-bold text-[#EAB308] hover:text-[#FACC15] flex items-center gap-1 cursor-pointer self-start sm:self-auto"
                >
                  <span>Discuss Business Implication with Advisor</span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </button>
              </div>
            </article>
          ))
        )}
      </div>

      {/* Consultation Banner */}
      <div className="bg-[#121214] rounded-lg border border-[#27272A] p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div>
          <h3 className="font-serif text-xl font-bold text-white">
            Received a GST Intimation (DRC-01B or DRC-01C)?
          </h3>
          <p className="text-xs sm:text-sm text-zinc-300 mt-1 max-w-xl">
            Automated disparity notices require structured reconciliation within 7 days. We assist in cross-verifying purchase registers and drafting factual explanations.
          </p>
        </div>
        <button
          onClick={() => onOpenConsultation("GST Notice / Intimation Support")}
          className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-black bg-[#EAB308] hover:bg-[#FACC15] transition-all rounded-sm cursor-pointer whitespace-nowrap shrink-0 shadow-lg shadow-yellow-500/20 active:scale-95"
        >
          Request GST Support
        </button>
      </div>
    </div>
  );
};
