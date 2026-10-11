import React, { useState } from "react";
import { knowledgeHubArticles } from "../data/knowledgeHubData";
import { TaxRegimeCalculator } from "../components/tools/TaxRegimeCalculator";
import { GstLateFeeCalculator } from "../components/tools/GstLateFeeCalculator";
import { WorkingCapitalAnalyzer } from "../components/tools/WorkingCapitalAnalyzer";
import { BookOpen, Calculator, CheckCircle2 } from "lucide-react";

interface KnowledgeHubPageProps {
  navigate: (path: string) => void;
  onOpenConsultation: (serviceTitle?: string) => void;
}

export const KnowledgeHubPage: React.FC<KnowledgeHubPageProps> = ({
  onOpenConsultation,
}) => {
  const [activeTab, setActiveTab] = useState<"calculators" | "articles">("calculators");
  const [activeCalc, setActiveCalc] = useState<"regime" | "gst" | "working-capital">("regime");
  const [expandedArticleId, setExpandedArticleId] = useState<string | null>("new-vs-old-tax-regime");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 text-zinc-100">
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#EAB308]">
          <span>Financial Education</span>
          <span aria-hidden="true">·</span>
          <span>Krish & Associate</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
          Tax & Financial Knowledge Hub
        </h1>
        <p className="text-base text-zinc-300 leading-relaxed">
          Clear, practical financial guides and interactive compliance tools designed to help business promoters and individuals navigate Indian taxation and cash flow management.
        </p>
      </div>

      {/* Main Mode Switch: Segmented control */}
      <div className="flex items-center gap-2 p-1.5 bg-[#18181B] border border-[#27272A] rounded-lg max-w-fit">
        <button
          onClick={() => setActiveTab("calculators")}
          className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-md transition-colors cursor-pointer ${
            activeTab === "calculators"
              ? "bg-[#EAB308] text-black shadow-md"
              : "text-zinc-400 hover:text-white"
          }`}
        >
          <Calculator className="w-3.5 h-3.5" />
          <span>Interactive Tax & Capital Tools</span>
        </button>
        <button
          onClick={() => setActiveTab("articles")}
          className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-md transition-colors cursor-pointer ${
            activeTab === "articles"
              ? "bg-[#EAB308] text-black shadow-md"
              : "text-zinc-400 hover:text-white"
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>In-Depth Articles & Explainers</span>
        </button>
      </div>

      {/* TAB 1: INTERACTIVE CALCULATORS */}
      {activeTab === "calculators" && (
        <div className="space-y-8">
          {/* Sub-selector for tool */}
          <div className="flex flex-wrap gap-2 text-xs">
            <button
              onClick={() => setActiveCalc("regime")}
              className={`px-3.5 py-2 rounded border transition-colors cursor-pointer ${
                activeCalc === "regime"
                  ? "bg-[#EAB308] text-black font-bold border-[#EAB308] shadow-sm"
                  : "bg-[#18181B] text-zinc-300 border-[#27272A] hover:border-[#EAB308]"
              }`}
            >
              1. Income Tax Regime Evaluator (Sec 115BAC vs Old)
            </button>
            <button
              onClick={() => setActiveCalc("gst")}
              className={`px-3.5 py-2 rounded border transition-colors cursor-pointer ${
                activeCalc === "gst"
                  ? "bg-[#EAB308] text-black font-bold border-[#EAB308] shadow-sm"
                  : "bg-[#18181B] text-zinc-300 border-[#27272A] hover:border-[#EAB308]"
              }`}
            >
              2. GST Late Fee & Sec 50 Interest Estimator
            </button>
            <button
              onClick={() => setActiveCalc("working-capital")}
              className={`px-3.5 py-2 rounded border transition-colors cursor-pointer ${
                activeCalc === "working-capital"
                  ? "bg-[#EAB308] text-black font-bold border-[#EAB308] shadow-sm"
                  : "bg-[#18181B] text-zinc-300 border-[#27272A] hover:border-[#EAB308]"
              }`}
            >
              3. Working Capital & Cash Cycle Diagnostic
            </button>
          </div>

          {/* Render Active Tool */}
          {activeCalc === "regime" && (
            <TaxRegimeCalculator onEnquire={() => onOpenConsultation("Income Tax Filing & AIS Audit")} />
          )}

          {activeCalc === "gst" && (
            <GstLateFeeCalculator onEnquire={() => onOpenConsultation("GST Filing & Section 50 Rectification")} />
          )}

          {activeCalc === "working-capital" && (
            <WorkingCapitalAnalyzer onEnquire={() => onOpenConsultation("Virtual CFO & Cash Cycle Optimization")} />
          )}
        </div>
      )}

      {/* TAB 2: IN-DEPTH EXPLAINERS & ARTICLES */}
      {activeTab === "articles" && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 gap-8">
            {knowledgeHubArticles.map((article) => {
              const isExpanded = expandedArticleId === article.id;
              return (
                <article
                  key={article.id}
                  className="bg-[#18181B] rounded-lg border border-[#27272A] p-8 space-y-4 hover:border-[#EAB308] transition-colors shadow-xl"
                >
                  <div className="flex items-center gap-2 text-xs text-zinc-400">
                    <span className="font-bold text-[#EAB308]">{article.category}</span>
                    <span aria-hidden="true" className="text-zinc-700">·</span>
                    <span>{article.readTime}</span>
                    <span aria-hidden="true" className="text-zinc-700">·</span>
                    <span>{article.publishedDate}</span>
                  </div>

                  <h2 className="font-serif text-2xl font-bold text-white">
                    {article.title}
                  </h2>

                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {article.summary}
                  </p>

                  {/* Expandable Article Content */}
                  {isExpanded && (
                    <div className="pt-4 border-t border-[#27272A] space-y-4 text-sm text-zinc-300 leading-relaxed">
                      {article.content.map((p, idx) => (
                        <p key={idx}>{p}</p>
                      ))}

                      {/* Key Takeaways */}
                      <div className="p-4 bg-[#121214] rounded border border-[#27272A] space-y-2 mt-4">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#EAB308] block">
                          Core Practical Takeaways:
                        </span>
                        <ul className="space-y-1.5 text-xs text-zinc-300">
                          {article.keyTakeaways.map((takeaway, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#EAB308] shrink-0 mt-0.5" />
                              <span>{takeaway}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Official References */}
                      {article.officialReferences && (
                        <div className="text-xs text-zinc-500 pt-2 border-t border-[#27272A]">
                          <strong>Statutory References:</strong>{" "}
                          {article.officialReferences.join(" · ")}
                        </div>
                      )}
                    </div>
                  )}

                  <div className="pt-2 flex items-center justify-between">
                    <button
                      onClick={() =>
                        setExpandedArticleId(isExpanded ? null : article.id)
                      }
                      className="text-xs font-bold text-[#EAB308] hover:text-[#FACC15] transition-colors cursor-pointer"
                    >
                      {isExpanded ? "← Collapse Guide" : "Read Complete Guide & Takeaways →"}
                    </button>

                    <button
                      onClick={() => onOpenConsultation(`Inquiry from article: ${article.title}`)}
                      className="text-xs font-medium text-zinc-400 hover:text-white cursor-pointer"
                    >
                      Discuss with Krish & Associate
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      )}

      {/* Footer Banner */}
      <div className="bg-[#121214] text-white p-8 rounded-lg border border-[#27272A] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div>
          <h3 className="font-serif text-lg font-bold text-white">
            Have a Specific Case or Complex Tax Scenario?
          </h3>
          <p className="text-xs sm:text-sm text-zinc-300 mt-1 max-w-xl">
            Generic tax guides outline legal rules, but entity specifics—such as turnover thresholds, prior-year depreciation, and vendor compliance history—dictate the right path.
          </p>
        </div>
        <button
          onClick={() => onOpenConsultation("Case Review Request")}
          className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-black bg-[#EAB308] hover:bg-[#FACC15] transition-all rounded-sm cursor-pointer whitespace-nowrap shrink-0 shadow-lg shadow-yellow-500/20 active:scale-95"
        >
          Request Direct Case Review
        </button>
      </div>
    </div>
  );
};
