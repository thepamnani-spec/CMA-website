/**
 * Krish & Associate — Master Site Configuration
 * 
 * IMPORTANT CONFIGURATION NOTES:
 * 1. WhatsApp Number: Must be in international format without '+' or special symbols (e.g. 919876543210).
 *    Currently set to a verified placeholder until the firm owner confirms final direct line.
 * 2. Statutory Status Notice:
 *    Krish & Associate is an independent financial consulting and advisory practice led by Krish Pamnani.
 *    No claim of being an authorized CA firm, CMA firm, or statutory audit entity is made unless
 *    expressly licensed. All statutory audit/cost audit referrals or engagements are handled subject to
 *    applicable statutory authorizations and qualified practitioners.
 */

export const siteConfig = {
  firmName: "Krish & Associate",
  tagline: "Clarity in Compliance. Confidence in Every Financial Decision.",
  shortDescription:
    "Practical support for GST and income tax compliance, cost optimization, and financial management for businesses and individuals in Ahmedabad, Gujarat.",
  founder: {
    name: "Krish Pamnani",
    role: "Founder & Lead Financial Consultant",
    bio: "Focusing on operational financial visibility, structured compliance management, and strategic cost optimization for Gujarat businesses and individuals.",
  },
  location: {
    city: "Ahmedabad",
    state: "Gujarat",
    country: "India",
    region: "Ahmedabad & Western India",
    displayAddress: "Ahmedabad, Gujarat, India",
    // Note for production launch: Replace with verified corporate office address
    addressDetails: "Near SG Highway Commercial Corridor, Ahmedabad, Gujarat 380015",
  },
  contact: {
    // International format without '+', punctuation, or spaces for wa.me URL
    whatsappNumber: "919876543210", 
    whatsappDisplay: "+91 98765 43210",
    phoneDisplay: "+91 79 4000 0000",
    phoneTel: "+917940000000",
    email: "contact@krishassociate.in",
    workingHours: "Monday to Saturday: 10:00 AM – 7:00 PM IST",
  },
  urls: {
    siteUrl: "https://krishassociate.in",
  },
  disclaimer: {
    general:
      "Krish & Associate is a professional consulting practice providing financial advisory, management support, cost analysis, and tax compliance assistance. Information presented on this website is for educational and general informational purposes and does not constitute statutory audit opinion or legal advice. Engagement commences only upon execution of a formal written scope of work.",
    costAuditNotice:
      "Cost audit support and statutory reporting are provided strictly subject to applicable regulatory eligibility and qualified professional authorization under Indian law.",
  },
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "GST Updates", href: "/gst-updates" },
    { label: "Knowledge Hub", href: "/knowledge-hub" },
    { label: "Contact", href: "/contact" },
  ],
};
