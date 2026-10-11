import React, { useEffect } from "react";
import { siteConfig } from "../../config/siteConfig";

interface SEOHeadProps {
  title?: string;
  description?: string;
  path?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  path = "/",
}) => {
  const fullTitle = title
    ? `${title} | ${siteConfig.firmName}`
    : `${siteConfig.firmName} | Tax & Financial Advisory | Ahmedabad`;

  const metaDesc =
    description ||
    "Practical GST compliance, income tax planning, cost optimization, and Virtual CFO advisory led by Krish Pamnani in Ahmedabad, Gujarat.";

  useEffect(() => {
    // 1. Update Title
    document.title = fullTitle;

    // 2. Helper to set or update meta tag
    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attr}="${name}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    setMeta("description", metaDesc);
    setMeta("og:title", fullTitle, true);
    setMeta("og:description", metaDesc, true);
    setMeta("og:url", `${siteConfig.urls.siteUrl}${path}`, true);
    setMeta("og:site_name", siteConfig.firmName, true);
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", metaDesc);

    // 3. Inject Schema.org JSON-LD
    let scriptTag = document.getElementById("structured-data-json-ld");
    if (!scriptTag) {
      scriptTag = document.createElement("script");
      scriptTag.id = "structured-data-json-ld";
      scriptTag.setAttribute("type", "application/ld+json");
      document.head.appendChild(scriptTag);
    }

    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "ProfessionalService",
          "@id": `${siteConfig.urls.siteUrl}/#organization`,
          "name": siteConfig.firmName,
          "url": siteConfig.urls.siteUrl,
          "founder": {
            "@type": "Person",
            "name": siteConfig.founder.name,
            "jobTitle": siteConfig.founder.role,
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": siteConfig.location.city,
            "addressRegion": siteConfig.location.state,
            "addressCountry": "IN",
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "23.0225",
            "longitude": "72.5714",
          },
          "telephone": siteConfig.contact.phoneDisplay,
          "email": siteConfig.contact.email,
          "priceRange": "$$",
          "description": siteConfig.shortDescription,
        },
        {
          "@type": "WebSite",
          "@id": `${siteConfig.urls.siteUrl}/#website`,
          "url": siteConfig.urls.siteUrl,
          "name": siteConfig.firmName,
          "description": siteConfig.shortDescription,
          "publisher": {
            "@id": `${siteConfig.urls.siteUrl}/#organization`,
          },
        },
      ],
    };

    scriptTag.textContent = JSON.stringify(schemaData);
  }, [fullTitle, metaDesc, path]);

  return null;
};
