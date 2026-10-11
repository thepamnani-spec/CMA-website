import React from "react";
import { ArrowLeft, Home, BookOpen, Layers } from "lucide-react";

export const NotFoundPage: React.FC<{ navigate: (path: string) => void }> = ({ navigate }) => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-24 text-center space-y-6">
      <span className="font-mono text-4xl font-bold text-[#C5A15A]">404</span>
      <h1 className="font-serif text-3xl font-bold text-[#10243A]">
        Page Not Found
      </h1>
      <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
        The requested page does not exist or may have been relocated. You can navigate back to our home page or explore our service capabilities.
      </p>

      <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#10243A] hover:bg-[#183B56] transition-colors rounded-sm cursor-pointer"
        >
          <Home className="w-4 h-4" />
          <span>Home Page</span>
        </button>
        <button
          onClick={() => navigate("/services")}
          className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#10243A] bg-white border border-slate-300 hover:bg-slate-50 transition-colors rounded-sm cursor-pointer"
        >
          <Layers className="w-4 h-4" />
          <span>View Services</span>
        </button>
        <button
          onClick={() => navigate("/knowledge-hub")}
          className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#10243A] bg-white border border-slate-300 hover:bg-slate-50 transition-colors rounded-sm cursor-pointer"
        >
          <BookOpen className="w-4 h-4" />
          <span>Knowledge Hub</span>
        </button>
      </div>
    </div>
  );
};
