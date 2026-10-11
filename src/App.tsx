/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Header } from "./components/common/Header";
import { Footer } from "./components/common/Footer";
import { FloatingWhatsApp } from "./components/common/FloatingWhatsApp";
import { ConsultationModal } from "./components/common/ConsultationModal";
import { SEOHead } from "./components/common/SEOHead";

// Pages
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ServicesPage } from "./pages/ServicesPage";
import { ServiceDetailPage } from "./pages/ServiceDetailPage";
import { GstUpdatesPage } from "./pages/GstUpdatesPage";
import { KnowledgeHubPage } from "./pages/KnowledgeHubPage";
import { ContactPage } from "./pages/ContactPage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { DisclaimerPage } from "./pages/DisclaimerPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || "/";
  });

  const [consultationOpen, setConsultationOpen] = useState(false);
  const [consultationService, setConsultationService] = useState<string>("");

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || "/");
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (path: string) => {
    window.history.pushState({}, "", path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOpenConsultation = (serviceTitle?: string) => {
    setConsultationService(serviceTitle || "");
    setConsultationOpen(true);
  };

  // Route matching
  const renderRoute = () => {
    // Exact routes
    if (currentPath === "/" || currentPath === "") {
      return (
        <>
          <SEOHead
            title="Clarity in Compliance & Financial Advisory"
            description="Practical GST compliance, income tax planning, cost optimization, and Virtual CFO advisory led by Krish Pamnani in Ahmedabad, Gujarat."
            path="/"
          />
          <HomePage navigate={navigate} onOpenConsultation={handleOpenConsultation} />
        </>
      );
    }

    if (currentPath === "/about") {
      return (
        <>
          <SEOHead
            title="About Us & Practice Philosophy"
            description="Learn about Krish & Associate and founder Krish Pamnani. Independent financial advisory and compliance practice based in Ahmedabad, Gujarat."
            path="/about"
          />
          <AboutPage navigate={navigate} onOpenConsultation={() => handleOpenConsultation()} />
        </>
      );
    }

    if (currentPath === "/services") {
      return (
        <>
          <SEOHead
            title="Advisory & Compliance Services"
            description="Explore our specialized services: Cost optimization, statutory CRA-1 record assistance, GST returns & 2B reconciliation, income tax, and Virtual CFO."
            path="/services"
          />
          <ServicesPage navigate={navigate} onOpenConsultation={handleOpenConsultation} />
        </>
      );
    }

    // Dynamic service detail route
    if (currentPath.startsWith("/services/")) {
      const slug = currentPath.replace("/services/", "");
      return (
        <>
          <SEOHead
            title="Service Scope & Process"
            description="Comprehensive scope, process roadmap, common challenges, and practical benefits from Krish & Associate in Ahmedabad."
            path={currentPath}
          />
          <ServiceDetailPage
            slug={slug}
            navigate={navigate}
            onOpenConsultation={handleOpenConsultation}
          />
        </>
      );
    }

    if (currentPath === "/gst-updates") {
      return (
        <>
          <SEOHead
            title="GST Notifications & Circulars"
            description="Date-sensitive CBIC GST notifications, circulars, e-invoicing thresholds, and practical compliance implications for Indian businesses."
            path="/gst-updates"
          />
          <GstUpdatesPage navigate={navigate} onOpenConsultation={handleOpenConsultation} />
        </>
      );
    }

    if (currentPath === "/knowledge-hub") {
      return (
        <>
          <SEOHead
            title="Tax & Financial Knowledge Hub"
            description="Practical tax guides and interactive calculators: New vs Old Tax Regime, Section 50 GST late fees, and Working Capital Cash Conversion Cycle."
            path="/knowledge-hub"
          />
          <KnowledgeHubPage navigate={navigate} onOpenConsultation={handleOpenConsultation} />
        </>
      );
    }

    if (currentPath === "/contact") {
      return (
        <>
          <SEOHead
            title="Contact & Book a Consultation"
            description="Connect with Krish Pamnani in Ahmedabad, Gujarat. Reach out via WhatsApp, direct phone, email, or our formal consultation inquiry form."
            path="/contact"
          />
          <ContactPage />
        </>
      );
    }

    if (currentPath === "/privacy-policy") {
      return (
        <>
          <SEOHead
            title="Privacy Policy"
            description="Digital Personal Data Protection Act (DPDP) compliant privacy policy for Krish & Associate."
            path="/privacy-policy"
          />
          <PrivacyPolicyPage navigate={navigate} />
        </>
      );
    }

    if (currentPath === "/disclaimer") {
      return (
        <>
          <SEOHead
            title="Website Disclaimer & Regulatory Notice"
            description="Official disclosure of professional practice boundaries, informational scope, and engagement terms for Krish & Associate."
            path="/disclaimer"
          />
          <DisclaimerPage navigate={navigate} />
        </>
      );
    }

    // 404 Fallback
    return (
      <>
        <SEOHead title="Page Not Found" path={currentPath} />
        <NotFoundPage navigate={navigate} />
      </>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F7FA] text-[#263445]">
      {/* 3-Zone Top Navigation Bar */}
      <Header
        currentPath={currentPath}
        navigate={navigate}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Main Content Body */}
      <main className="flex-1">
        {renderRoute()}
      </main>

      {/* Global Persistent WhatsApp Contact */}
      <FloatingWhatsApp defaultService={consultationService} />

      {/* Consultation Booking Modal */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        prefilledService={consultationService}
      />

      {/* Unified Professional Footer */}
      <Footer
        navigate={navigate}
        onOpenConsultation={() => handleOpenConsultation()}
      />
    </div>
  );
}
