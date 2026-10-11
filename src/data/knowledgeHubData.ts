import { ArticleItem } from "../types";

export const knowledgeHubArticles: ArticleItem[] = [
  {
    id: "new-vs-old-tax-regime",
    slug: "new-vs-old-tax-regime",
    title: "New Tax Regime vs. Old Tax Regime: Practical Comparison for FY 2024-25 & FY 2025-26",
    category: "Income Tax",
    readTime: "6 min read",
    publishedDate: "Updated for Current Assessment Year",
    summary:
      "A granular breakdown of tax slabs, standard deduction updates under Section 115BAC, and the threshold where the Old Regime remains beneficial for salaried individuals and business owners.",
    content: [
      "The Finance Act has established the New Tax Regime under Section 115BAC as the default tax regime for individuals, Hindu Undivided Families (HUFs), and Associations of Persons (AOPs). Taxpayers wishing to compute income under the Old Tax Regime must explicitly opt out.",
      "Key Features of the Default New Regime: Slabs range from Nil up to 30%, with an increased standard deduction of ₹75,000 for salaried employees (previously ₹50,000). Furthermore, under Section 87A rebate provisions, resident individuals with taxable income up to ₹7,00,000 pay zero tax (subject to marginal relief provisions).",
      "When is the Old Regime Still Better? The Old Regime continues to offer advantages only when an individual possesses substantial cumulative deductions exceeding roughly ₹3.75 Lakh to ₹4.25 Lakh. These typically include Section 80C (₹1.5 Lakh), Section 80D Mediclaim (up to ₹50,000 - ₹1,00,000), House Rent Allowance (HRA) under Section 10(13A), and Home Loan Interest under Section 24(b) (up to ₹2 Lakh for self-occupied property).",
      "For Business Owners: Salaried individuals can evaluate and switch between regimes annually when filing their ITR. However, individuals with business or professional income (ITR-3 / ITR-4) who opt out of the New Regime must file Form 10-IEA. If they subsequently opt back into the New Regime, they can never switch back to the Old Regime again.",
    ],
    keyTakeaways: [
      "The New Regime is default; you must proactively select the Old Regime before the due date if opting out.",
      "Salaried standard deduction in the New Regime is ₹75,000.",
      "Zero tax liability applies on net taxable income up to ₹7,00,000 in the New Regime due to Section 87A rebate.",
      "Business taxpayers have only one lifetime opportunity to return to the New Regime after opting out.",
    ],
    officialReferences: [
      "Income Tax Act, 1961 - Section 115BAC",
      "Finance (No. 2) Act, 2024 Provisions",
      "CBDT Circular on Default Tax Regime Rules",
    ],
  },
  {
    id: "itc-reconciliation-gstr-2b",
    slug: "itc-reconciliation-gstr-2b",
    title: "Mastering ITC Reconciliation: Navigating GSTR-2B, Purchase Books & Rule 37A",
    category: "GST",
    readTime: "7 min read",
    publishedDate: "Practical Compliance Guide",
    summary:
      "Why relying solely on vendor tax invoices is no longer legally compliant in India, and how systematic monthly reconciliation safeguards your working capital from departmental demand notices.",
    content: [
      "In the initial years of GST, taxpayers availed Input Tax Credit (ITC) on a self-assessment basis using purchase invoices. However, post the introduction of Section 16(2)(aa) of the CGST Act, statutory entitlement to ITC is contingent upon supplier compliance: the invoice must be furnished by the supplier in GSTR-1 and communicated to the buyer in Form GSTR-2B.",
      "Why GSTR-2B, Not GSTR-2A? Form GSTR-2B is a static statement generated on the 14th of every month. It categorizes credits definitively into 'ITC Available' and 'ITC Not Available' (due to place of supply mismatches, time limitation under Section 16(4), or composition status).",
      "The Danger of Rule 37A: If your vendor filed GSTR-1 (so the invoice appears in your 2B) but fails to file GSTR-3B by the 30th of September following the end of the financial year, you are legally mandated to reverse that ITC on or before 30th November. Failure to do so attracts 18% mandatory interest from the date of wrongful utilization.",
      "Best Practice Workflow: Ahmedabad businesses and manufacturers should establish a 3-way match: Purchase Order vs. Goods Receipt Note (GRN) vs. GSTR-2B portal entry. Hold vendor retention payments or contractual GST amounts until the invoice status is verified as 'Filed' in the portal.",
    ],
    keyTakeaways: [
      "Section 16(2)(aa) makes 2B matching a mandatory legal condition for taking credit.",
      "Check both GSTR-1 filing status and GSTR-3B payment status of key suppliers.",
      "Rule 37 requires reversal of ITC if supplier is not paid within 180 days of invoice date.",
      "Never claim provisional or unreflected ITC in Table 4(A)(5) of Form GSTR-3B.",
    ],
    officialReferences: [
      "Central Goods and Services Tax Act, 2017 - Section 16(2)(aa) and Section 16(4)",
      "CGST Rules, 2017 - Rule 37, Rule 37A, and Rule 88D",
      "CBIC Circular No. 183/15/2022-GST",
    ],
  },
  {
    id: "cost-optimization-gujarat-msmes",
    slug: "cost-optimization-gujarat-msmes",
    title: "Cost Optimization Framework for Gujarat Manufacturing & Trading Enterprises",
    category: "Cost Management",
    readTime: "8 min read",
    publishedDate: "Operational Advisory",
    summary:
      "How mid-sized manufacturers in Ahmedabad and industrial clusters across Gujarat can uncover 3% to 7% operating margin improvements through structured cost classification.",
    content: [
      "Gujarat is India's manufacturing powerhouse, spanning chemicals, engineering, textiles, plastics, and precision fabrication. In competitive markets, selling prices are dictated by market dynamics rather than cost-plus markups. Therefore, expanding profitability relies on rigorous cost management.",
      "The Five Classic Cost Leaks in MSMEs: 1) Untracked scrap and yield variance during processing; 2) Sub-optimal batch sizes causing repeated machine setup downtime; 3) Unreconciled utility consumption (power factor penalties, inefficient compressor leaks); 4) Carrying dead inventory funded by 9-11% working capital bank lines; and 5) Vendor freight and demurrage charges slipped into general ledgers.",
      "Segregating Fixed vs. Variable Overhead: Many owner-managed businesses blend direct manufacturing expenses into administrative overheads. When direct product costing is blurred, pricing decisions often result in selling certain high-volume product lines below their genuine marginal cost.",
      "The Diagnostic Methodology: We map an entity's expenses into an activity-based contribution matrix. By establishing the actual contribution margin per machine hour or per processing cycle, management can shift capacity toward high-yielding product lines while renegotiating raw material contracts.",
    ],
    keyTakeaways: [
      "Competitive markets set your selling price; internal cost control determines your net margin.",
      "Inventory holding carries an implicit 12-15% annual cost including working capital interest and warehousing.",
      "Machine hour rate analysis uncovers whether high-volume SKUs are actually generating net cash profit.",
      "Variance analysis must happen monthly, not retrospectively at annual financial audit time.",
    ],
    officialReferences: [
      "Principles of Activity-Based Costing (ABC) and Margin Variance Analysis",
      "Institute of Cost Accountants of India (ICMAI) Cost Accounting Standards",
    ],
  },
  {
    id: "virtual-cfo-explained",
    slug: "virtual-cfo-explained",
    title: "Virtual CFO vs. Traditional Accountant: Unlocking Strategic Financial Governance",
    category: "Virtual CFO",
    readTime: "5 min read",
    publishedDate: "Executive Guide",
    summary:
      "Why growing businesses reaching ₹5 Cr to ₹50 Cr turnover need forward-looking financial leadership to bridge the gap between routine accounting and executive decision-making.",
    content: [
      "Most business promoters in Ahmedabad are exceptional at product development, sales, and customer relationships. However, as business turnover scales from ₹2 Crore to ₹20 Crore, financial complexity multiplies exponentially.",
      "The Limitation of Routine Bookkeeping: A conventional internal accountant records transactions after they happen. They enter invoices, cut cheques, generate GST challans, and tally bank statements. But they are rarely equipped to answer: 'If we accept this ₹50 Lakh order on 90-day credit, will we have enough liquidity to meet payroll next month?' or 'How should we structure our debt portfolio to minimize interest expense?'",
      "The Role of a Virtual CFO: A Virtual CFO serves as an outsourced financial co-pilot. Responsibilities include setting up monthly MIS reporting packs, modeling forward 13-week cash forecasts, optimizing the Cash Conversion Cycle, and presenting credit appraisal dossiers (CMA Data) to commercial bankers.",
      "Cost-Effectiveness: A full-time experienced CFO commands an annual compensation of ₹35 Lakh to ₹60 Lakh plus benefits. A Virtual CFO engagement provides the identical high-level strategic oversight on a flexible monthly advisory retainer suited to growing business budgets.",
    ],
    keyTakeaways: [
      "Bookkeepers report the past; a Virtual CFO forecasts and steers the future.",
      "Cash flow forecasting prevents sudden liquidity panics despite positive P&L profits.",
      "Professional bank presentations and CMA data dramatically enhance loan approval speed and interest terms.",
      "Delivers enterprise-grade financial governance without permanent executive overhead.",
    ],
    officialReferences: [
      "RBI Master Directions on Commercial Lending & Working Capital Assessment",
      "Best Practices in Corporate Financial Planning & Analysis (FP&A)",
    ],
  },
];
