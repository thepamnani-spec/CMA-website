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
    <header className="sticky top-0 z-40 w-full bg-[#0A0A0A]/95 text-white border-b border-[#27272A] backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strict Top Bar Contract: Zone 1 (Wordmark) - Zone 2 (4-5 Nav Links) - Zone 3 (1 Primary Action) */}
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Brand Wordmark */}
          <button
            onClick={() => handleNavClick("/")}
            className="text-left group cursor-pointer focus:outline-none flex items-center gap-3"
            aria-label="Krish & Associate Home"
          >
            <div className="w-9 h-9 rounded bg-[#18181B] border border-[#EAB308] flex items-center justify-center font-serif font-bold text-sm text-[#EAB308] group-hover:bg-[#EAB308] group-hover:text-black transition-colors">
              KA
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-[#EAB308] transition-colors whitespace-nowrap shrink-0 block">
                {siteConfig.firmName}
              </span>
              <span className="text-[10px] tracking-widest uppercase text-[#EAB308] block -mt-1 font-semibold">
                Ahmedabad · Gujarat
              </span>
            </div>
          </button>

          {/* Zone 2: Primary Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-300">
            <button
              onClick={() => handleNavClick("/services")}
              className={`hover:text-[#EAB308] transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentPath.startsWith("/services") ? "text-[#EAB308] font-bold" : ""
              }`}
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick("/gst-updates")}
              className={`hover:text-[#EAB308] transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentPath === "/gst-updates" ? "text-[#EAB308] font-bold" : ""
              }`}
            >
              GST Updates
            </button>
            <button
              onClick={() => handleNavClick("/knowledge-hub")}
              className={`hover:text-[#EAB308] transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentPath === "/knowledge-hub" ? "text-[#EAB308] font-bold" : ""
              }`}
            >
              Knowledge Hub
            </button>
            <button
              onClick={() => handleNavClick("/about")}
              className={`hover:text-[#EAB308] transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentPath === "/about" ? "text-[#EAB308] font-bold" : ""
              }`}
            >
              About Us
            </button>
            <button
              onClick={() => handleNavClick("/contact")}
              className={`hover:text-[#EAB308] transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentPath === "/contact" ? "text-[#EAB308] font-bold" : ""
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <button
              onClick={() => onOpenConsultation()}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-black bg-[#EAB308] hover:bg-[#FACC15] transition-all rounded-sm cursor-pointer whitespace-nowrap shrink-0 shadow-lg shadow-yellow-500/20 active:scale-95"
            >
              <span>Talk to Us</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-[#EAB308]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#121214] border-b border-[#27272A] px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2 text-base font-medium text-zinc-200">
            <button
              onClick={() => handleNavClick("/")}
              className="text-left py-2 px-3 rounded hover:bg-[#18181B] hover:text-[#EAB308]"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick("/services")}
              className="text-left py-2 px-3 rounded hover:bg-[#18181B] hover:text-[#EAB308]"
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick("/gst-updates")}
              className="text-left py-2 px-3 rounded hover:bg-[#18181B] hover:text-[#EAB308]"
            >
              GST Updates & Circulars
            </button>
            <button
              onClick={() => handleNavClick("/knowledge-hub")}
              className="text-left py-2 px-3 rounded hover:bg-[#18181B] hover:text-[#EAB308]"
            >
              Knowledge Hub & Tools
            </button>
            <button
              onClick={() => handleNavClick("/about")}
              className="text-left py-2 px-3 rounded hover:bg-[#18181B] hover:text-[#EAB308]"
            >
              About Krish & Associate
            </button>
            <button
              onClick={() => handleNavClick("/contact")}
              className="text-left py-2 px-3 rounded hover:bg-[#18181B] hover:text-[#EAB308]"
            >
              Contact & Location
            </button>
          </nav>
          <div className="pt-2 border-t border-[#27272A] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3 text-center text-xs font-bold uppercase tracking-wider text-black bg-[#EAB308] hover:bg-[#FACC15] transition-colors rounded-sm"
            >
              Talk to Us / Book Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
