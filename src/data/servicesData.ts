import { ServiceItem } from "../types";

export const servicesData: ServiceItem[] = [
  {
    id: "cost-optimization",
    slug: "cost-optimization",
    title: "Cost Optimization & Cost Analysis",
    shortDescription:
      "Data-driven identification of operational overhead, procurement variances, and margin leaks to improve unit profitability.",
    longDescription:
      "Cost optimization at Krish & Associate is an analytical evaluation of your business expenditure patterns, procurement contracts, inventory carrying costs, and direct vs. indirect cost ratios. Rather than arbitrarily cutting headcount or essential resources, we isolate structural inefficiencies and provide actionable visibility so business owners can make grounded commercial choices.",
    targetAudience: [
      "Manufacturing units and processing plants in Gujarat",
      "Wholesale traders and distribution businesses",
      "MSME enterprises managing rising raw material costs",
      "Startups and growing ventures aiming for sustainable unit economics",
    ],
    audienceLabels: ["MSMEs", "Manufacturers", "Traders", "Startups"],
    commonProblems: [
      "Unclear product-wise or SKU-level gross margins",
      "Disproportionate administrative overhead eating into gross profits",
      "Inventory holding costs inflating working capital borrowings",
      "Lack of standard variance analysis comparing budgeted vs. actual production costs",
      "Reliance on retrospective year-end accounting rather than monthly cost insight",
    ],
    scopeIncluded: [
      "Comprehensive expenditure breakdown across direct materials, direct labor, and overheads",
      "Contribution margin analysis across product categories and customer segments",
      "Variance reporting against historical trends and industry operating standards",
      "Identification of duplicate process steps and idle capacity charges",
      "Actionable cost reduction priority matrix categorized by implementation effort",
    ],
    processSteps: [
      {
        step: 1,
        title: "Initial Cost Data Review",
        detail:
          "We examine past trial balances, expense registers, purchase ledgers, and inventory movement reports.",
      },
      {
        step: 2,
        title: "Cost Structure Mapping",
        detail:
          "We categorize costs into fixed, variable, and semi-variable buckets to establish the operational break-even threshold.",
      },
      {
        step: 3,
        title: "Variance & Leakage Report",
        detail:
          "A structured presentation detailing high-variance cost drivers and specific negotiation or containment targets.",
      },
      {
        step: 4,
        title: "Implementation Follow-Up",
        detail:
          "Periodic tracking over monthly review meetings to monitor whether adopted controls reflect in operational savings.",
      },
    ],
    practicalBenefits: [
      "Clear visibility on profitable vs. loss-making products or service lines",
      "Measurable reduction in avoidable administrative and procurement leakage",
      "Structured data to negotiate supplier terms and volume contracts",
      "Disciplined cost mindset across internal operating teams",
    ],
    faqs: [
      {
        question: "Does cost optimization mean downsizing workforce or compromising quality?",
        answer:
          "No. Sustainable cost optimization focuses on eliminating process waste, inventory holding inefficiencies, and unmonitored supplier variances. Preserving product quality and core operational capabilities is always the top priority.",
      },
      {
        question: "How long does a cost optimization review take?",
        answer:
          "For typical MSMEs and manufacturing units with available books of accounts, an initial diagnostic review typically spans 2 to 3 weeks.",
      },
    ],
  },
  {
    id: "cost-audit-support",
    slug: "cost-audit",
    title: "Cost Audit & Compliance Support",
    shortDescription:
      "Structured assistance in preparing cost records, CRA-1 documentation, and facilitating statutory cost audits under Indian regulations.",
    longDescription:
      "Under the Companies (Cost Records and Audit) Rules, 2014, designated regulated and non-regulated sector entities meeting specific turnover thresholds are mandated to maintain formal cost accounting records in Form CRA-1 and undergo a statutory cost audit. Krish & Associate provides structured documentation support, cost ledger alignment, and coordination services to ensure complete readiness.",
    regulatoryNote:
      "Statutory Note: Cost audit certification and issuance of Form CRA-3 is conducted strictly subject to applicable professional authorization and statutory eligibility under the Cost and Works Accountants Act / Companies Act, 2013. Krish & Associate provides preparation, record restructuring, and facilitation assistance.",
    targetAudience: [
      "Companies in regulated industries (telecom, electricity, petroleum, drugs & pharma, fertilizers, sugar)",
      "Companies in non-regulated sectors exceeding statutory turnover limits (₹50 Cr+ overall / ₹35 Cr+ product turnover)",
      "Mid-sized industrial units preparing for their first formal cost audit",
      "Management teams seeking to maintain year-round CRA-1 compliant records",
    ],
    audienceLabels: ["Corporate Entities", "Regulated Sectors", "Industrial Units"],
    commonProblems: [
      "Incomplete maintenance of cost records as prescribed under Form CRA-1",
      "Last-minute reconciliation between financial books of accounts and cost records",
      "Ambiguity in allocation of joint production costs and service department overheads",
      "Delays in submitting Form CRA-4 with the Ministry of Corporate Affairs (MCA)",
    ],
    scopeIncluded: [
      "Review of existing chart of accounts and cost centers against CRA-1 rules",
      "Formulation of standard allocation methodologies for shared utilities (power, steam, compressed air)",
      "Preparation of quantitative reconciliations for raw materials, scrap, and finished goods",
      "Preparation of formal Cost Audit Working Papers and Draft Schedules",
      "Facilitation and coordination during the independent cost auditor's verification process",
    ],
    processSteps: [
      {
        step: 1,
        title: "Applicability & Threshold Check",
        detail:
          "Verifying whether your company falls within the regulated or non-regulated threshold criteria under MCA rules.",
      },
      {
        step: 2,
        title: "Cost Records Harmonization",
        detail:
          "Aligning financial ledger entries with mandatory CRA-1 cost sheets, material consumption sheets, and utility schedules.",
      },
      {
        step: 3,
        title: "Audit File & Schedule Assembly",
        detail:
          "Compiling quantitative balances, capacity utilization statements, and cost reconciliation statements.",
      },
      {
        step: 4,
        title: "Statutory Reporting Coordination",
        detail:
          "Supporting the filing workflow for Form CRA-4 with MCA within statutory deadlines.",
      },
    ],
    practicalBenefits: [
      "Eliminates panic and non-compliance penalties under Section 148 of the Companies Act",
      "Clean reconciliation between financial profit and cost profit figures",
      "Documented cost accounting policies that stand up to institutional scrutiny",
    ],
    faqs: [
      {
        question: "Is cost audit mandatory for every private limited company?",
        answer:
          "No. Cost audit applies only to companies covered under Table A (regulated sectors) or Table B (non-regulated sectors) of the Companies (Cost Records and Audit) Rules, whose overall turnover and specific product turnover exceed the statutory thresholds (generally ₹50 Crore overall / ₹25 Crore product turnover for Table A, or ₹100 Crore / ₹35 Crore for Table B).",
      },
    ],
  },
  {
    id: "gst-compliance",
    slug: "gst-compliance",
    title: "GST Compliance, Returns & Reconciliation",
    shortDescription:
      "End-to-end support for GST registration, accurate return filings (GSTR-1, GSTR-3B, GSTR-9/9C), and thorough GSTR-2B vs. books ITC reconciliation.",
    longDescription:
      "GST compliance in India is highly automated and rule-sensitive. Inconsistencies between purchase ledgers and GSTR-2B, incorrect tax rate selection, or delayed filings trigger automated system notices, interest under Section 50, and credit blockages. Krish & Associate delivers disciplined, methodical GST management tailored to Ahmedabad businesses, traders, and manufacturers.",
    targetAudience: [
      "Proprietorships, partnerships, LLPs, and companies registered under GST in Gujarat",
      "Manufacturers and traders claiming substantial Input Tax Credit (ITC)",
      "Service providers navigating place of supply and export/SEZ documentation",
      "Businesses receiving DRC-01B / DRC-01C automated disparity intimations",
    ],
    audienceLabels: ["MSMEs", "Traders", "Manufacturers", "Service Providers"],
    commonProblems: [
      "Unmatched Input Tax Credit due to vendor non-filing in GSTR-1, risking Rule 37A reversals",
      "Mismatch warnings between outward liability in GSTR-1 and GSTR-3B (DRC-01B notices)",
      "Difficulty tracking non-payment to vendors beyond 180 days (mandatory ITC reversal)",
      "Complex HSN/SAC code classification and changing GST rate notifications",
      "Delays and documentation bottlenecks in applying for new GST registrations or amendments",
    ],
    scopeIncluded: [
      "Assistance with new GST registration, amendments, and cancellation procedures",
      "Monthly / quarterly computation and filing of Form GSTR-1 and GSTR-3B",
      "Rigorous GSTR-2B monthly reconciliation against purchase registers to flag non-compliant suppliers",
      "Tracking Rule 37 reversals (180-day vendor payment cycle)",
      "Preparation of Annual Return in Form GSTR-9 and reconciliation support for GSTR-9C",
      "Drafting factual replies to scrutiny notices, DRC-01A, DRC-01B, and DRC-01C intimations",
    ],
    processSteps: [
      {
        step: 1,
        title: "Monthly Data Receipt & Validation",
        detail:
          "Reviewing your sales register, purchase invoices, debit/credit notes, and bank receipts by the 5th of every month.",
      },
      {
        step: 2,
        title: "2B Purchase Reconciliation",
        detail:
          "Cross-matching your internal purchase register with the official GSTR-2B generated on the GST Portal on the 14th.",
      },
      {
        step: 3,
        title: "Tax Liability Computation & Approval",
        detail:
          "Calculating net cash outflow after eligible ITC utilization and sharing the draft computation with management.",
      },
      {
        step: 4,
        title: "Challan Generation & Return Filing",
        detail:
          "Generating PMT-06 challans, tracking timely payment, and filing returns within statutory deadlines (11th/20th).",
      },
    ],
    practicalBenefits: [
      "Zero unverified ITC claims, preventing costly departmental recovery with 18% interest",
      "Complete visibility over delinquent vendors who fail to upload outward supplies",
      "Peace of mind with timely, orderly filing ahead of portal rush hours",
    ],
    faqs: [
      {
        question: "What happens if a supplier does not reflect in my GSTR-2B?",
        answer:
          "Under Section 16(2)(aa) of the CGST Act, ITC can only be claimed if the invoice details have been furnished by the supplier in GSTR-1/IFF and communicated to the recipient in Form GSTR-2B. We flag these missing vendors immediately so you can hold payment until they upload.",
      },
      {
        question: "Can you assist with GST registration for a new firm in Ahmedabad?",
        answer:
          "Yes. We guide you through document preparation (PAN, Aadhaar, electricity bills, rent agreements, NOC) and handle the entire GST REG-01 application process on the portal.",
      },
    ],
  },
  {
    id: "income-tax",
    slug: "income-tax",
    title: "Income Tax Returns & Tax Planning",
    shortDescription:
      "Systematic return preparation (ITR-1 through ITR-6), Advance Tax estimation, AIS/TIS reconciliation, and compliant tax planning.",
    longDescription:
      "Navigating the evolving Income Tax landscape requires balancing statutory compliance with legitimate deduction planning. With the New Tax Regime (Section 115BAC) becoming the default, every taxpayer—whether salaried, professional, or corporate—must systematically evaluate regimes, reconcile Annual Information Statement (AIS) data, and meet Advance Tax timelines.",
    targetAudience: [
      "Salaried professionals, executives, and high-income individuals",
      "Proprietors, consultants, and professionals opting for regular or presumptive taxation (44AD / 44ADA)",
      "Partnership firms, LLPs, and private limited companies in Ahmedabad",
      "Taxpayers with capital gains from equity, mutual funds, or real estate transactions",
    ],
    audienceLabels: ["Salaried Individuals", "Professionals", "Proprietors", "Companies"],
    commonProblems: [
      "Confusion over whether to choose the New Tax Regime or Old Tax Regime",
      "Mismatches between Form 26AS, AIS/TIS records, and claimed income/TDS",
      "Avoidable interest penalties under Section 234B and 234C due to missed Advance Tax installments",
      "Ambiguity in computing capital gains with revised indexation rules and new tax brackets",
      "Defective return notices (Section 139(9)) due to incorrect scheduling of exempt or business income",
    ],
    scopeIncluded: [
      "Preparation and filing of Income Tax Returns (ITR-1, ITR-2, ITR-3, ITR-4, ITR-5, ITR-6)",
      "Comprehensive AIS (Annual Information Statement) and TIS reconciliation against actual bank statements",
      "Advance tax computation and installment reminders (June 15, Sept 15, Dec 15, March 15)",
      "Comparative analysis of Old vs. New Tax Regime for salary earners and business entities",
      "Capital gains calculation across shares, mutual funds, gold, and immovable property",
      "Assistance with TDS returns (Form 24Q, 26Q) and issuance of Form 16 / 16A",
    ],
    processSteps: [
      {
        step: 1,
        title: "Document Collection & Review",
        detail:
          "Collecting Form 16, bank statements, capital gains statements, deduction proofs, and prior year returns.",
      },
      {
        step: 2,
        title: "AIS / 26AS Portal Cross-Verification",
        detail:
          "Downloading the taxpayer's AIS/TIS from the e-filing portal to capture all reported financial transactions.",
      },
      {
        step: 3,
        title: "Computation & Regime Selection",
        detail:
          "Drafting dual computations (Old vs. New) to identify the legitimately optimal tax liability.",
      },
      {
        step: 4,
        title: "Filing & E-Verification",
        detail:
          "Uploading the ITR JSON, facilitating Aadhaar OTP e-verification, and securing the ITR-V acknowledgment.",
      },
    ],
    practicalBenefits: [
      "Completely accurate filings matching department data records",
      "Avoidance of costly Section 234 interest liabilities through quarterly advance tax monitoring",
      "Legitimate tax optimization without adopting aggressive or questionable positions",
    ],
    faqs: [
      {
        question: "Can a business opt out of the New Tax Regime?",
        answer:
          "Individual taxpayers with business or professional income can opt out of the default New Tax Regime by filing Form 10-IEA on or before the due date specified under Section 139(1). However, individuals with business income can only switch back to the New Regime once in their lifetime.",
      },
    ],
  },
  {
    id: "virtual-cfo",
    slug: "virtual-cfo",
    title: "Virtual CFO & Strategic Financial Management",
    shortDescription:
      "High-level financial leadership, cash flow visibility, budgeting, working capital control, and MIS reporting for growing enterprises.",
    longDescription:
      "Hiring a full-time Chief Financial Officer is often cost-prohibitive for growing MSMEs and startups, yet managing without strategic financial oversight leads to cash crunches and operational blind spots. Krish & Associate's Virtual CFO service delivers executive-tier financial guidance, structured monthly MIS reporting, cash flow projections, and bank credit assistance on a flexible, retained basis.",
    targetAudience: [
      "Growing MSMEs with ₹3 Crore to ₹50 Crore annual turnover wanting structured finance control",
      "Promoters spending excessive personal time on routine accounting and cash allocation issues",
      "Enterprises planning bank facility expansion (working capital limits, term loans, CC/OD limits)",
      "Startups needing disciplined financial reporting for stakeholders and investors",
    ],
    audienceLabels: ["Growing Businesses", "Promoters", "MSMEs", "Startups"],
    commonProblems: [
      "The business is profitable on paper, but bank accounts consistently face cash-flow shortages",
      "Management lacks timely monthly financial statements (MIS) until months after quarter-end",
      "Working capital trapped in delayed customer receivables and excess inventory stockpiles",
      "Unprepared financial projections and CMA data when approaching commercial banks for loans",
      "Lack of formalized internal financial controls to safeguard against billing leakage",
    ],
    scopeIncluded: [
      "Design and implementation of monthly Management Information Systems (MIS) reporting packs",
      "Rolling 13-week cash flow forecasting and liquidity management",
      "Working capital cycle diagnosis (DSO, DIO, DPO optimization)",
      "Preparation of CMA data, project reports, and financial projections for bank credit lines",
      "Budgeting, variance tracking, and department-wise expenditure limits",
      "Attendance at monthly executive management review meetings to interpret financial metrics",
    ],
    processSteps: [
      {
        step: 1,
        title: "Financial Health Diagnostic",
        detail:
          "In-depth review of existing accounting practices, vendor terms, customer credit periods, and current debt structures.",
      },
      {
        step: 2,
        title: "MIS & Metric Framework Setup",
        detail:
          "Establishing tailored KPI dashboards, daily cash reporting formats, and monthly review templates.",
      },
      {
        step: 3,
        title: "Active Monthly Governance",
        detail:
          "Closing books on a fixed monthly schedule and conducting structured leadership reviews of performance vs. targets.",
      },
      {
        step: 4,
        title: "Strategic Advisory & Scaling",
        detail:
          "Advising on expansion financing, capital investments, cost rationalization, and banking relationships.",
      },
    ],
    practicalBenefits: [
      "Clear visibility on forward-looking cash flow up to 90 days in advance",
      "Promoters regain time to focus on sales, operations, and business development",
      "Higher credibility with commercial banks and lending institutions",
      "Fraction of the cost of a permanent full-time CFO salary",
    ],
    faqs: [
      {
        question: "How does a Virtual CFO differ from our existing accountant?",
        answer:
          "Your internal accountant handles historical bookkeeping: entering vouchers, making payments, and recording invoices. A Virtual CFO looks forward: projecting future cash flows, setting budgets, analyzing unit margins, negotiating bank terms, and guiding business decisions based on numbers.",
      },
    ],
  },
  {
    id: "business-compliance",
    slug: "business-compliance",
    title: "General Business Compliance & Advisory",
    shortDescription:
      "Routine business registration guidance, statutory calendar management, and internal record keeping support.",
    longDescription:
      "Running a commercial business in Gujarat involves coordinated compliance across multiple statutes: MSME Udyam registration, Shop & Establishment licenses, professional tax, and periodic state regulatory obligations. Krish & Associate assists business owners in maintaining orderly statutory compliance records, avoiding late fees, and remaining audit-ready.",
    regulatoryNote:
      "Advisory Scope Notice: Krish & Associate provides advisory and operational assistance limited strictly to services the firm is qualified and authorized to provide. Legal or company secretarial certifications requiring practicing PCS/Advocate credentials are appropriately routed to verified practitioners.",
    targetAudience: [
      "Newly established businesses in Ahmedabad needing regulatory registration support",
      "Traders and service providers establishing MSME Udyam credentials",
      "Entities looking for a centralized statutory compliance calendar",
    ],
    audienceLabels: ["Startups", "Local Businesses", "MSMEs"],
    commonProblems: [
      "Missed statutory due dates resulting in compounding administrative penalties",
      "Missing Udyam registration, disqualifying the business from MSME Samadhaan delayed payment remedies",
      "Disorganized statutory physical and digital files during banker or investor reviews",
    ],
    scopeIncluded: [
      "MSME Udyam registration and certificate maintenance",
      "Gujarat Professional Tax (PT) enrollment and periodic returns assistance",
      "Establishment of unified statutory compliance calendar with alert triggers",
      "Internal documentation reviews to ensure alignment with standard commercial practices",
    ],
    processSteps: [
      {
        step: 1,
        title: "Compliance Inventory",
        detail: "Cataloging all applicable registrations, licenses, and filing obligations based on entity structure.",
      },
      {
        step: 2,
        title: "Gap Analysis",
        detail: "Identifying overdue filings, expiring licenses, or missing statutory enrollments.",
      },
      {
        step: 3,
        title: "Rectification & Ongoing Management",
        detail: "Remediating historical gaps and setting up automated calendar monitoring.",
      },
    ],
    practicalBenefits: [
      "Protection from unexpected administrative penalties and statutory notices",
      "Eligibility for government MSME credit schemes and delayed payment protections",
      "Orderly compliance record that enhances enterprise valuation",
    ],
    faqs: [
      {
        question: "Why is Udyam registration important for Gujarat businesses?",
        answer:
          "Udyam registration grants statutory protection under the MSMED Act, 2006, including mandatory 45-day payment terms from corporate buyers, access to MSME Samadhaan dispute arbitration, priority sector lending rates, and collateral-free loan eligibility.",
      },
    ],
  },
];
