import React from "react";
import { Home, BookOpen, Layers } from "lucide-react";

export const NotFoundPage: React.FC<{ navigate: (path: string) => void }> = ({ navigate }) => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-24 text-center space-y-6 text-zinc-100">
      <span className="font-mono text-5xl font-bold text-[#EAB308]">404</span>
      <h1 className="font-serif text-3xl font-bold text-white">
        Page Not Found
      </h1>
      <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
        The requested page does not exist or may have been relocated. You can navigate back to our home page or explore our service capabilities.
      </p>

      <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-black bg-[#EAB308] hover:bg-[#FACC15] transition-all rounded-sm cursor-pointer shadow-lg shadow-yellow-500/20 active:scale-95"
        >
          <Home className="w-4 h-4" />
          <span>Home Page</span>
        </button>
        <button
          onClick={() => navigate("/services")}
          className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#EAB308] bg-[#18181B] border border-[#27272A] hover:border-[#EAB308] transition-colors rounded-sm cursor-pointer"
        >
          <Layers className="w-4 h-4" />
          <span>View Services</span>
        </button>
        <button
          onClick={() => navigate("/knowledge-hub")}
          className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#EAB308] bg-[#18181B] border border-[#27272A] hover:border-[#EAB308] transition-colors rounded-sm cursor-pointer"
        >
          <BookOpen className="w-4 h-4" />
          <span>Knowledge Hub</span>
        </button>
      </div>
    </div>
  );
};
