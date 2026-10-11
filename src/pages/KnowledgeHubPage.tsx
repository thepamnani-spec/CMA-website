import React, { useState } from "react";
import { knowledgeHubArticles } from "../data/knowledgeHubData";
import { TaxRegimeCalculator } from "../components/tools/TaxRegimeCalculator";
import { GstLateFeeCalculator } from "../components/tools/GstLateFeeCalculator";
import { WorkingCapitalAnalyzer } from "../components/tools/WorkingCapitalAnalyzer";
import { BookOpen, Calculator, CheckCircle2, ArrowRight } from "lucide-react";

interface KnowledgeHubPageProps {
  navigate: (path: string) => void;
  onOpenConsultation: (serviceTitle?: string) => void;
}

export const KnowledgeHubPage: React.FC<KnowledgeHubPageProps> = ({
  navigate,
  onOpenConsultation,
}) => {
  const [activeTab, setActiveTab] = useState<"calculators" | "articles">("calculators");
  const [activeCalc, setActiveCalc] = useState<"regime" | "gst" | "working-capital">("regime");
  const [expandedArticleId, setExpandedArticleId] = useState<string | null>("new-vs-old-tax-regime");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C5A15A]">
          <span>Financial Education</span>
          <span aria-hidden="true">·</span>
          <span>Krish & Associate</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#10243A]">
          Tax & Financial Knowledge Hub
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Clear, practical financial guides and interactive compliance tools designed to help business promoters and individuals navigate Indian taxation and cash flow management.
        </p>
      </div>

      {/* Main Mode Switch: Segmented control */}
      <div className="flex items-center gap-2 p-1.5 bg-slate-100 rounded-lg max-w-fit">
        <button
          onClick={() => setActiveTab("calculators")}
          className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
            activeTab === "calculators"
              ? "bg-[#10243A] text-white shadow-xs"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          <Calculator className="w-3.5 h-3.5" />
          <span>Interactive Tax & Capital Tools</span>
        </button>
        <button
          onClick={() => setActiveTab("articles")}
          className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
            activeTab === "articles"
              ? "bg-[#10243A] text-white shadow-xs"
              : "text-slate-600 hover:text-slate-900"
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
              className={`px-3 py-1.5 rounded border transition-colors cursor-pointer ${
                activeCalc === "regime"
                  ? "bg-[#C5A15A] text-[#10243A] font-bold border-[#C5A15A]"
                  : "bg-white text-slate-700 border-slate-300 hover:border-slate-400"
              }`}
            >
              1. Income Tax Regime Evaluator (Sec 115BAC vs Old)
            </button>
            <button
              onClick={() => setActiveCalc("gst")}
              className={`px-3 py-1.5 rounded border transition-colors cursor-pointer ${
                activeCalc === "gst"
                  ? "bg-[#C5A15A] text-[#10243A] font-bold border-[#C5A15A]"
                  : "bg-white text-slate-700 border-slate-300 hover:border-slate-400"
              }`}
            >
              2. GST Late Fee & Sec 50 Interest Estimator
            </button>
            <button
              onClick={() => setActiveCalc("working-capital")}
              className={`px-3 py-1.5 rounded border transition-colors cursor-pointer ${
                activeCalc === "working-capital"
                  ? "bg-[#C5A15A] text-[#10243A] font-bold border-[#C5A15A]"
                  : "bg-white text-slate-700 border-slate-300 hover:border-slate-400"
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
                  className="bg-white rounded-lg border border-slate-200 p-8 space-y-4 hover:border-slate-300 transition-colors shadow-xs"
                >
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span className="font-semibold text-slate-800">{article.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.readTime}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.publishedDate}</span>
                  </div>

                  <h2 className="font-serif text-2xl font-bold text-[#10243A]">
                    {article.title}
                  </h2>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {article.summary}
                  </p>

                  {/* Expandable Article Content */}
                  {isExpanded && (
                    <div className="pt-4 border-t border-slate-100 space-y-4 text-sm text-slate-700 leading-relaxed">
                      {article.content.map((p, idx) => (
                        <p key={idx}>{p}</p>
                      ))}

                      {/* Key Takeaways */}
                      <div className="p-4 bg-[#F5F7FA] rounded border border-slate-200 space-y-2 mt-4">
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#10243A] block">
                          Core Practical Takeaways:
                        </span>
                        <ul className="space-y-1.5 text-xs text-slate-700">
                          {article.keyTakeaways.map((takeaway, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A15A] shrink-0 mt-0.5" />
                              <span>{takeaway}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Official References */}
                      {article.officialReferences && (
                        <div className="text-xs text-slate-400 pt-2">
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
                      className="text-xs font-semibold text-[#10243A] hover:text-[#C5A15A] transition-colors cursor-pointer"
                    >
                      {isExpanded ? "← Collapse Guide" : "Read Complete Guide & Takeaways →"}
                    </button>

                    <button
                      onClick={() => onOpenConsultation(`Inquiry from article: ${article.title}`)}
                      className="text-xs text-slate-500 hover:text-slate-900 cursor-pointer"
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
      <div className="bg-[#10243A] text-white p-8 rounded-lg border border-[#183B56] flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-serif text-lg font-bold text-white">
            Have a Specific Case or Complex Tax Scenario?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
            Generic tax guides outline legal rules, but entity specifics—such as turnover thresholds, prior-year depreciation, and vendor compliance history—dictate the right path.
          </p>
        </div>
        <button
          onClick={() => onOpenConsultation("Case Review Request")}
          className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#10243A] bg-[#C5A15A] hover:bg-[#D8BA76] transition-colors rounded-sm cursor-pointer whitespace-nowrap shrink-0"
        >
          Request Direct Case Review
        </button>
      </div>
    </div>
  );
};
