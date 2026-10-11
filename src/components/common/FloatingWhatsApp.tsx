import React, { useState } from "react";
import { siteConfig } from "../../config/siteConfig";
import { MessageSquare, X } from "lucide-react";

interface FloatingWhatsAppProps {
  defaultService?: string;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ defaultService }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const messageText = defaultService
    ? `Hello Krish & Associate, I would like to inquire about ${defaultService}.`
    : `Hello Krish & Associate, I would like to discuss financial compliance and advisory services for my business in Ahmedabad.`;

  // International format without '+' or punctuation in the actual URL
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    messageText
  )}`;

  return (
    <aside aria-label="WhatsApp quick contact" className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Tooltip Card */}
      {showTooltip && (
        <div className="mb-3 w-72 bg-[#18181B] text-zinc-200 p-3.5 rounded-lg shadow-2xl border border-[#27272A] text-xs animate-in fade-in slide-in-from-bottom-2 duration-150">
          <div className="flex items-center justify-between pb-1.5 border-b border-[#27272A]">
            <span className="font-bold text-white flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#EAB308]"></span>
              Krish & Associate
            </span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-zinc-400 hover:text-white p-0.5 cursor-pointer"
              aria-label="Close WhatsApp prompt"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="mt-2 text-zinc-300 leading-relaxed text-[11px]">
            Connect directly on WhatsApp with Krish Pamnani regarding GST, income tax, or financial advisory.
          </p>
          <div className="mt-2.5 pt-2 border-t border-[#27272A] flex items-center justify-between text-[11px] text-zinc-400">
            <span>Direct WhatsApp</span>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#EAB308] hover:text-[#FACC15]"
            >
              Start Chat →
            </a>
          </div>
        </div>
      )}

      {/* Button */}
      <div className="relative group">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setShowTooltip(true)}
          className="flex items-center gap-2.5 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:bg-[#20ba5a] transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
          aria-label="Enquire on WhatsApp with Krish & Associate"
        >
          <MessageSquare className="w-5 h-5 fill-current" />
          <span className="text-xs font-semibold tracking-wide whitespace-nowrap hidden sm:inline">
            WhatsApp Enquiry
          </span>
        </a>
      </div>
    </aside>
  );
};
