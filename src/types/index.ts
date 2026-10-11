export type TargetAudienceType = 
  | "msme"
  | "salaried"
  | "corporate"
  | "manufacturer"
  | "startup"
  | "general";

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  targetAudience: string[];
  audienceLabels: string[];
  commonProblems: string[];
  scopeIncluded: string[];
  processSteps: { step: number; title: string; detail: string }[];
  regulatoryNote?: string;
  practicalBenefits: string[];
  faqs: { question: string; answer: string }[];
}

export interface GstUpdateItem {
  id: string;
  notificationNumber: string;
  date: string;
  category: "Rate Change" | "Due Date" | "E-Invoicing" | "ITC Rule" | "Procedural" | "Circular";
  title: string;
  officialSummary: string;
  practicalImplication: string;
  actionRequired: string;
  officialSource: string;
  sourceUrl?: string;
}

export interface ArticleItem {
  id: string;
  slug: string;
  title: string;
  category: "Income Tax" | "GST" | "Cost Management" | "Virtual CFO" | "Compliance";
  readTime: string;
  publishedDate: string;
  summary: string;
  content: string[];
  keyTakeaways: string[];
  officialReferences?: string[];
}

export interface ConsultationFormState {
  fullName: string;
  phone: string;
  email: string;
  entityType: "Business / MSME" | "Individual / Salaried" | "Manufacturing / Industrial" | "Startup" | "Other";
  serviceOfInterest: string;
  message: string;
  preferredContactMethod: "WhatsApp" | "Phone Call" | "Email";
  consentChecked: boolean;
}
