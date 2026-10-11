import React, { useState } from "react";
import { siteConfig } from "../../config/siteConfig";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface HeaderProps {
  currentPath: string;
  navigate: (path: string) => void;
  onOpenConsultation: (serviceTitle?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPath,
  navigate,
  onOpenConsultation,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#10243A] text-white border-b border-[#183B56]/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strict Top Bar Contract: Zone 1 (Wordmark) - Zone 2 (4-5 Nav Links) - Zone 3 (1 Primary Action) */}
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Brand Wordmark (Single text element in display face, no pills or subtitles attached) */}
          <button
            onClick={() => handleNavClick("/")}
            className="text-left group cursor-pointer focus:outline-none"
            aria-label="Krish & Associate Home"
          >
            <span className="font-serif text-2xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-[#C5A15A] transition-colors whitespace-nowrap shrink-0">
              {siteConfig.firmName}
            </span>
          </button>

          {/* Zone 2: Primary Nav Links (Clean single-line text links with subtle hover underlines) */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-200">
            <button
              onClick={() => handleNavClick("/services")}
              className={`hover:text-[#C5A15A] transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentPath.startsWith("/services") ? "text-[#C5A15A] font-semibold" : ""
              }`}
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick("/gst-updates")}
              className={`hover:text-[#C5A15A] transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentPath === "/gst-updates" ? "text-[#C5A15A] font-semibold" : ""
              }`}
            >
              GST Updates
            </button>
            <button
              onClick={() => handleNavClick("/knowledge-hub")}
              className={`hover:text-[#C5A15A] transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentPath === "/knowledge-hub" ? "text-[#C5A15A] font-semibold" : ""
              }`}
            >
              Knowledge Hub
            </button>
            <button
              onClick={() => handleNavClick("/about")}
              className={`hover:text-[#C5A15A] transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentPath === "/about" ? "text-[#C5A15A] font-semibold" : ""
              }`}
            >
              About Us
            </button>
            <button
              onClick={() => handleNavClick("/contact")}
              className={`hover:text-[#C5A15A] transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentPath === "/contact" ? "text-[#C5A15A] font-semibold" : ""
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Zone 3: 1 Primary Action (Single-line control) */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <button
              onClick={() => onOpenConsultation()}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#10243A] bg-[#C5A15A] hover:bg-[#D8BA76] transition-colors rounded-sm cursor-pointer whitespace-nowrap shrink-0 shadow-sm"
            >
              <span>Talk to Us</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-200 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#183B56] border-b border-[#263445] px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2 text-base font-medium text-slate-100">
            <button
              onClick={() => handleNavClick("/")}
              className="text-left py-2 px-3 rounded hover:bg-[#10243A]"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick("/services")}
              className="text-left py-2 px-3 rounded hover:bg-[#10243A]"
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick("/gst-updates")}
              className="text-left py-2 px-3 rounded hover:bg-[#10243A]"
            >
              GST Updates & Circulars
            </button>
            <button
              onClick={() => handleNavClick("/knowledge-hub")}
              className="text-left py-2 px-3 rounded hover:bg-[#10243A]"
            >
              Knowledge Hub & Tools
            </button>
            <button
              onClick={() => handleNavClick("/about")}
              className="text-left py-2 px-3 rounded hover:bg-[#10243A]"
            >
              About Krish & Associate
            </button>
            <button
              onClick={() => handleNavClick("/contact")}
              className="text-left py-2 px-3 rounded hover:bg-[#10243A]"
            >
              Contact & Location
            </button>
          </nav>
          <div className="pt-2 border-t border-[#263445]/60 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3 text-center text-xs font-semibold uppercase tracking-wider text-[#10243A] bg-[#C5A15A] hover:bg-[#D8BA76] transition-colors rounded-sm"
            >
              Talk to Us / Book Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
