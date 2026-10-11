import { GstUpdateItem } from "../types";

export const gstUpdatesData: GstUpdateItem[] = [
  {
    id: "notif-e-invoicing-threshold",
    notificationNumber: "CBIC Central Tax Notification No. 10/2023",
    date: "Effective from 1st August 2023 onwards",
    category: "E-Invoicing",
    title: "Mandatory E-Invoicing Threshold for Businesses with Turnover Exceeding ₹5 Crore",
    officialSummary:
      "All registered persons having an aggregate turnover exceeding ₹5 Crore in any preceding financial year from FY 2017-18 onwards are required to issue electronic invoices (e-invoices with IRN & QR code) for B2B supplies and exports.",
    practicalImplication:
      "Any B2B tax invoice issued without an Invoice Reference Number (IRN) by an eligible taxpayer is treated as invalid under Rule 48(4). The buyer cannot claim Input Tax Credit on such invoices, and the supplier faces penalties under Section 122.",
    actionRequired:
      "Verify historical turnover across all financial years since 2017-18. If aggregate turnover crossed ₹5 Crore, enable e-invoicing on the IRP portal immediately and integrate your ERP or billing software.",
    officialSource: "Central Board of Indirect Taxes and Customs (CBIC) / GST Portal (einvoice1.gst.gov.in)",
    sourceUrl: "https://www.cbic.gov.in",
  },
  {
    id: "notif-rule-37a-reversal",
    notificationNumber: "Rule 37A of CGST Rules / Notification No. 26/2022-CT",
    date: "Annual Statutory Deadline: 30th November",
    category: "ITC Rule",
    title: "Mandatory ITC Reversal under Rule 37A if Supplier Fails to File GSTR-3B",
    officialSummary:
      "Where a recipient has availed Input Tax Credit in GSTR-3B based on GSTR-2B, but the supplier fails to furnish GSTR-3B for that tax period by 30th September following the end of the financial year, the recipient must reverse such ITC along with applicable interest if delayed beyond 30th November.",
    practicalImplication:
      "Recipients in Gujarat cannot assume ITC is safe merely because the invoice appears in GSTR-2B. If your vendor generated GSTR-1 but never filed GSTR-3B to deposit tax, you must reverse the claimed credit.",
    actionRequired:
      "Perform annual vendor-level return filing audit before 30th November. Re-avail the reversed ITC whenever the supplier subsequently files GSTR-3B.",
    officialSource: "Central Goods and Services Tax Rules / CBIC Circular No. 199/11/2023-GST",
    sourceUrl: "https://www.cbic.gov.in",
  },
  {
    id: "notif-drc-01b-drc-01c",
    notificationNumber: "Rule 88C & Rule 88D of CGST Rules",
    date: "System-Automated Notices Ongoing",
    category: "Procedural",
    title: "Automated Intimations for Outward Liability (DRC-01B) and ITC Disparities (DRC-01C)",
    officialSummary:
      "Automated system intimations are issued in Part A of Form GST DRC-01B when outward tax liability declared in GSTR-1 exceeds GSTR-3B by predetermined threshold percentages. Similarly, DRC-01C is triggered when ITC availed in GSTR-3B exceeds GSTR-2B.",
    practicalImplication:
      "Taxpayers receiving DRC-01B or DRC-01C must either deposit the differential tax along with interest via DRC-03 or provide a point-by-point explanation in Part B within 7 days. Failure blocks subsequent GSTR-1 filing.",
    actionRequired:
      "Conduct strict monthly pre-filing reconciliation between GSTR-1 and GSTR-3B, and GSTR-2B and purchase registers, to prevent automated blockages.",
    officialSource: "CBIC Notification No. 38/2023-Central Tax / GST Portal System Updates",
    sourceUrl: "https://www.gst.gov.in",
  },
  {
    id: "notif-biometric-aadhaar-gujarat",
    notificationNumber: "Rule 8(4A) Proviso / Gujarat Pilot Program",
    date: "Active in Gujarat State",
    category: "Procedural",
    title: "Biometric-Based Aadhaar Authentication for High-Risk New GST Registrations in Gujarat",
    officialSummary:
      "Applicants for new GST registration in the State of Gujarat selected on the basis of data analysis and risk parameters must undergo biometric-based Aadhaar authentication and photograph capture at designated GST Suvidha Kendras (GSK).",
    practicalImplication:
      "New applicants flagged by the system cannot complete registration online via simple OTP. Authorized signatories must physically visit the notified GSK in Ahmedabad/Gujarat with original identity documents.",
    actionRequired:
      "Prepare complete documentary proof of principal place of business (electricity bill, registered rent deed/NOC, municipal tax receipt) before submitting Form REG-01.",
    officialSource: "CBIC Notification No. 27/2022-Central Tax & Gujarat Commercial Tax Guidelines",
    sourceUrl: "https://www.cbic.gov.in",
  },
  {
    id: "notif-gst-amnesty-appeals",
    notificationNumber: "CBIC Notification No. 53/2023-CT & 53rd GST Council",
    date: "Statutory Reference Update",
    category: "Circular",
    title: "Pre-Deposit Norms & Appellate Authority Timelines under Section 107",
    officialSummary:
      "Recommendations from the 53rd and 54th GST Council meetings regarding reduction of mandatory pre-deposit for filing appeals before the Appellate Authority and Tribunal, and relief on interest/penalty for demand notices issued under Section 73.",
    practicalImplication:
      "Taxpayers with disputed tax demands from FY 2017-18, 2018-19, and 2019-20 where allegations do not involve fraud or willful misstatement can explore conditional waiver of interest and penalty under Section 128A upon full payment of principal tax.",
    actionRequired:
      "Review pending assessment orders and demand notices under Section 73 to verify eligibility for Section 128A relief before statutory cut-off dates.",
    officialSource: "53rd & 54th GST Council Press Releases / Finance (No. 2) Act, 2024",
    sourceUrl: "https://www.gstcouncil.gov.in",
  },
];
