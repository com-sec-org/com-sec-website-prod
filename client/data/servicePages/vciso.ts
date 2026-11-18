import {
  AlertTriangle,
  BookOpen,
  Building2,
  ClipboardCheck,
  ClipboardList,
  FileSearch,
  FileSignature,
  FileText,
  GraduationCap,
  Handshake,
  ListChecks,
  Mail,
  MousePointerClick,
  Newspaper,
  RefreshCw,
  Scale,
  Search,
  ShieldCheck,
  Target,
  Truck,
  Users,
} from "lucide-react";
import type { ServicePageContent } from "@/components/service-page/types";
import { defaultCta, grcPlatforms, whyComSec } from "./common";

// vCISO Leadership sub-pages. Sources: "vCISO Leadership One Pager" (file 5),
// "SOC 2 Maintenance Plans One Pager" (file 13), Services Booklet p. 5.
// The group heading itself links to the existing /fractional-security-leadership page.

const vcisoRelated = {
  vciso: { label: "Fractional Security Leadership", to: "/fractional-security-leadership", body: "A senior security leader who owns your program on a fractional basis." },
  risk: { label: "Risk Management", to: "/risk-management", body: "A living risk register with owners, treatment plans and reviews." },
  policies: { label: "Policies & Procedures", to: "/policies-procedures", body: "Policies written for how your team works, kept current every year." },
  vendor: { label: "Vendor Risk Management", to: "/vendor-risk-management", body: "Security reviews for every third party that touches your data." },
  questionnaires: { label: "Security Questionnaires & RFPs", to: "/security-questionnaires", body: "Accurate answers to customer security reviews, fast." },
  awareness: { label: "Security Awareness & Phishing", to: "/security-awareness-training", body: "Training, phishing simulations and monthly newsletters for your team." },
};

export const securityQuestionnairesPage: ServicePageContent = {
  path: "/security-questionnaires",
  seo: {
    title: "Security Questionnaire & RFP Response Services | Com-Sec",
    description:
      "Com-Sec completes customer security questionnaires, due diligence requests and RFP security sections with accurate, consistent answers backed by evidence.",
    ogTitle: "Security Questionnaires & RFPs | Com-Sec",
    keywords: "security questionnaire, security questionnaire response, RFP security section, vendor due diligence, SIG questionnaire, CAIQ, customer security review",
    serviceName: "Security Questionnaire & RFP Response",
  },
  hero: {
    eyebrow: "vCISO Leadership",
    title: "Security Reviews That",
    highlight: "Don't Stall Your Deals.",
    description:
      "Enterprise buyers send long security questionnaires before they sign. Com-Sec answers them accurately and quickly, backed by your real controls and evidence, so sales keeps moving.",
    tags: ["Questionnaires", "RFP security sections", "Due diligence", "Answer library"],
    panel: {
      title: "What we handle",
      checklist: [
        "Customer security questionnaires in any format",
        "Security sections of RFPs and RFIs",
        "Vendor due diligence requests",
        "Follow up calls with customer security teams",
        "A reusable library of approved answers",
      ],
    },
  },
  overview: {
    eyebrow: "Why it matters",
    title: "Every Questionnaire Is Part of the Sale",
    paragraphs: [
      "Security questionnaires arrive at the worst time: late in a deal, with a deadline, and with hundreds of questions only a security specialist can answer well.",
      "We complete them for you using what is actually true about your program, your policies, controls, reports and certifications, so answers are consistent from one customer to the next and hold up if a buyer asks for proof.",
    ],
    callout: {
      title: "Honest answers only",
      body: "When a question exposes a real gap, we flag it, suggest the right response, and add the fix to your roadmap rather than overstating your security.",
    },
  },
  inclusions: {
    eyebrow: "What's included",
    title: "From First Question to Signed Deal",
    items: [
      { icon: ClipboardList, title: "Questionnaire Completion", body: "Spreadsheets, portals and custom formats completed by our security team." },
      { icon: FileText, title: "RFP Security Sections", body: "Clear written responses for the security and compliance parts of RFPs and RFIs." },
      { icon: FileSearch, title: "Evidence Packages", body: "Policies, reports and summaries gathered so buyers get proof, not just claims." },
      { icon: BookOpen, title: "Answer Library", body: "Approved answers kept current, so each new questionnaire is faster than the last." },
      { icon: Handshake, title: "Customer Calls", body: "We join security review calls and answer follow up questions with your team." },
      { icon: Target, title: "Gap Tracking", body: "Questions you can't answer yet become tracked items on your security roadmap." },
    ],
  },
  phases: {
    eyebrow: "How it works",
    title: "How a Request Moves",
    steps: [
      { title: "Send It Over", body: "Forward the questionnaire or RFP and the deadline.", points: ["Format and scope review", "Deadline confirmed"] },
      { title: "We Draft", body: "Our team answers from your program and evidence.", points: ["Consistent with past answers", "Gaps flagged"] },
      { title: "You Review", body: "You check business details and approve.", points: ["Short review, not a rewrite", "Open items resolved"] },
      { title: "Submit & Reuse", body: "Answers go back to the customer and into your library.", points: ["Follow up support", "Library updated"] },
    ],
  },
  why: whyComSec,
  faqs: [
    { q: "Which questionnaire formats do you work with?", a: "Any format customers send, including spreadsheets, online vendor portals, industry standard questionnaires and custom documents." },
    { q: "Do we need SOC 2 or ISO 27001 first?", a: "No. We answer based on the program you have today. A report or certificate makes questionnaires shorter, and we can help you get one when it makes sense." },
    { q: "How involved does our team need to be?", a: "Usually a short review at the end. We draft the answers and only come back to you for business details we can't know, such as contract terms." },
    { q: "Is this included in your vCISO and maintenance plans?", a: "Yes. Security questionnaires and RFP security sections are part of our fractional CISO and SOC 2 maintenance services, and they can also be scoped on their own." },
  ],
  related: [vcisoRelated.vciso, vcisoRelated.policies, vcisoRelated.vendor],
  cta: defaultCta("Have a Questionnaire", "Due This Week?", "Book a call and tell us what's on your desk. We'll show you how we'd handle it and how quickly."),
};

export const riskManagementPage: ServicePageContent = {
  path: "/risk-management",
  seo: {
    title: "Cybersecurity Risk Management & Risk Assessments | Com-Sec",
    description:
      "Com-Sec runs your security risk assessments, builds a risk register with owners and treatment plans, and keeps risk reviews on schedule for SOC 2, ISO 27001 and HIPAA.",
    ogTitle: "Risk Management | Com-Sec",
    keywords: "cybersecurity risk management, security risk assessment, risk register, risk treatment plan, ISO 27001 risk assessment, HIPAA security risk analysis",
    serviceName: "Cybersecurity Risk Management",
  },
  hero: {
    eyebrow: "vCISO Leadership",
    title: "Know Your Risks.",
    highlight: "Decide What to Fix First.",
    description:
      "Com-Sec turns security risk into a clear list your leadership can act on: what could go wrong, how likely it is, who owns it and what you're doing about it.",
    tags: ["Risk assessment", "Risk register", "Treatment plans", "Annual review"],
    panel: {
      title: "What you get",
      checklist: [
        "A risk assessment of your people, systems and vendors",
        "A scored risk register with named owners",
        "Treatment plans tied to your roadmap",
        "Scheduled reviews and board ready reporting",
      ],
    },
  },
  overview: {
    eyebrow: "Overview",
    title: "Risk Management That Drives Decisions",
    paragraphs: [
      "Every major framework, from SOC 2 and ISO 27001 to HIPAA and NIST, expects a documented risk assessment. Too often it becomes a spreadsheet filled in once a year for the auditor.",
      "We run risk management as an ongoing process. Risks are scored, owned and treated, then reviewed as your product, team and vendors change, so the register reflects the business you actually run.",
    ],
  },
  inclusions: {
    eyebrow: "What's included",
    title: "A Complete Risk Program",
    items: [
      { icon: Search, title: "Risk Assessment", body: "Identify threats and weaknesses across people, process, technology and vendors." },
      { icon: ListChecks, title: "Risk Register", body: "Every risk scored for likelihood and impact, with an owner, in your GRC platform." },
      { icon: Target, title: "Treatment Plans", body: "Mitigate, transfer, accept or avoid, with actions and dates for each decision." },
      { icon: Truck, title: "Vendor Risk", body: "Third party risks reviewed and tracked alongside your internal risks." },
      { icon: RefreshCw, title: "Ongoing Reviews", body: "Scheduled reviews and an annual reassessment to keep the register current." },
      { icon: Building2, title: "Leadership Reporting", body: "Risk explained in business terms for founders, leadership and the board." },
    ],
  },
  phases: {
    eyebrow: "How it works",
    title: "How We Run It",
    steps: [
      { title: "Assess", body: "Interviews and reviews to find what could hurt the business.", points: ["Asset and data review", "Threat identification"] },
      { title: "Score", body: "Each risk rated for likelihood and impact.", points: ["Consistent method", "Owners assigned"] },
      { title: "Treat", body: "Decisions and actions agreed with leadership.", points: ["Treatment plans", "Roadmap priorities"] },
      { title: "Review", body: "The register stays current as things change.", points: ["Scheduled reviews", "Annual reassessment"] },
    ],
  },
  platforms: grcPlatforms,
  why: whyComSec,
  faqs: [
    { q: "Which frameworks require a risk assessment?", a: "SOC 2, ISO 27001, ISO 42001, HIPAA, HITRUST, PCI DSS, NIST and CMMC all expect a documented, regularly reviewed risk assessment." },
    { q: "How often should we update our risk assessment?", a: "At least once a year, and whenever something significant changes, such as a new product, a new vendor handling sensitive data, or an incident." },
    { q: "Is this a one time project or ongoing?", a: "Both options exist. We can deliver a standalone assessment, or run risk management as part of our vCISO and compliance maintenance services." },
    { q: "Where does the risk register live?", a: "In your GRC platform, such as Drata, Vanta or Shield GRC, so risks link to the controls and tasks that treat them." },
  ],
  related: [vcisoRelated.vciso, vcisoRelated.vendor, vcisoRelated.policies],
  cta: defaultCta("Get a Clear Picture of", "Your Security Risk.", "Book a call. We'll talk through your business and show you what a useful risk assessment looks like for a team your size."),
};

export const policiesProceduresPage: ServicePageContent = {
  path: "/policies-procedures",
  seo: {
    title: "Security Policies & Procedures Development | Com-Sec",
    description:
      "Com-Sec writes, reviews and maintains information security policies and procedures tailored to how your team works, with employee acknowledgments tracked for audits.",
    ogTitle: "Policies & Procedures | Com-Sec",
    keywords: "information security policies, security policy development, security procedures, SOC 2 policies, ISO 27001 policies, HIPAA policies, policy acknowledgment",
    serviceName: "Security Policies & Procedures",
  },
  hero: {
    eyebrow: "vCISO Leadership",
    title: "Policies Written for",
    highlight: "How Your Team Works.",
    description:
      "Auditors read your policies first. Com-Sec writes and maintains policies and procedures that match what your team really does, so they pass review and actually get followed.",
    tags: ["Policy writing", "Annual review", "Employee sign off", "Audit ready"],
    panel: {
      title: "What we deliver",
      checklist: [
        "A complete policy set mapped to your frameworks",
        "Procedures that describe real workflows",
        "Approvals and version history",
        "Employee acknowledgments tracked",
        "Annual review and updates",
      ],
    },
  },
  overview: {
    eyebrow: "Overview",
    title: "Templates Get You Started. Tailoring Gets You Through the Audit.",
    paragraphs: [
      "Generic policy templates describe a company that isn't yours. When an auditor tests a control against a policy your team never follows, it becomes an exception.",
      "We write policies around your actual tools, team size and processes, map them to every framework you hold, and keep them current as the business changes.",
    ],
  },
  inclusions: {
    eyebrow: "What's included",
    title: "Your Policy Program, Handled",
    items: [
      { icon: FileText, title: "Policy Set", body: "Information security, access control, incident response, vendor management, acceptable use and more." },
      { icon: ClipboardCheck, title: "Procedures", body: "Step by step procedures for the processes auditors sample, like onboarding and change management." },
      { icon: Scale, title: "Framework Mapping", body: "Each policy mapped to SOC 2, ISO 27001, HIPAA, GDPR or the frameworks you need." },
      { icon: FileSignature, title: "Approvals", body: "Leadership approval and version history captured in your GRC platform." },
      { icon: Users, title: "Acknowledgments", body: "Employee sign off tracked for every policy, new hires included." },
      { icon: RefreshCw, title: "Annual Review", body: "Policies reviewed and updated every year and when your business changes." },
    ],
  },
  phases: {
    eyebrow: "How it works",
    title: "From Gap to Signed Policies",
    steps: [
      { title: "Review", body: "We look at what you have and how you work.", points: ["Existing policies", "Tool and process walkthrough"] },
      { title: "Write", body: "Policies and procedures drafted for your team.", points: ["Plain language", "Framework mapped"] },
      { title: "Approve", body: "Leadership approves and staff acknowledge.", points: ["Version control", "Sign off tracked"] },
      { title: "Maintain", body: "Kept current every year.", points: ["Annual review", "Updates as you change"] },
    ],
  },
  platforms: grcPlatforms,
  why: whyComSec,
  faqs: [
    { q: "How many policies do we need?", a: "It depends on your frameworks and size. Most companies preparing for SOC 2 or ISO 27001 need roughly 15 to 25 policies plus supporting procedures." },
    { q: "Can you work with the templates in our GRC platform?", a: "Yes. We often start from platform templates and tailor them so they describe how your company really operates." },
    { q: "How do you track employee acknowledgments?", a: "Through your GRC platform or HR tooling, so every employee's sign off is recorded and ready for the auditor." },
    { q: "Do you update policies when regulations change?", a: "Yes. Ongoing support includes an annual review and updates when frameworks, regulations or your business change." },
  ],
  related: [vcisoRelated.vciso, vcisoRelated.risk, vcisoRelated.awareness],
  cta: defaultCta("Get Policies That", "Pass the Audit.", "Book a call and we'll review where your policies stand today and what it takes to get them audit ready."),
};

export const vendorRiskPage: ServicePageContent = {
  path: "/vendor-risk-management",
  seo: {
    title: "Vendor Risk Management & Third Party Security Reviews | Com-Sec",
    description:
      "Com-Sec manages your vendor inventory, runs security reviews for third parties that touch your data, and tracks vendor risk in your GRC platform for SOC 2 and ISO 27001.",
    ogTitle: "Vendor Risk Management | Com-Sec",
    keywords: "vendor risk management, third party risk management, vendor security review, vendor due diligence, SOC 2 vendor management, supplier security",
    serviceName: "Vendor Risk Management",
  },
  hero: {
    eyebrow: "vCISO Leadership",
    title: "Your Vendors Are Part of",
    highlight: "Your Attack Surface.",
    description:
      "Every SaaS tool and service provider that touches your data adds risk. Com-Sec keeps an inventory of your vendors, reviews their security, and tracks it all where auditors expect to see it.",
    tags: ["Vendor inventory", "Security reviews", "Annual renewals", "GRC tracking"],
    panel: {
      title: "What we manage",
      checklist: [
        "A complete inventory of vendors and the data they handle",
        "Security reviews before new vendors are approved",
        "SOC 2 report and contract reviews",
        "Annual vendor reviews for audits",
      ],
    },
  },
  overview: {
    eyebrow: "Overview",
    title: "Third Party Risk, Without the Spreadsheet",
    paragraphs: [
      "SOC 2, ISO 27001 and HIPAA all require you to know who your vendors are, what data they handle and whether they protect it. Most teams lose track as tools multiply.",
      "We build and maintain your vendor program: an inventory ranked by risk, security reviews for the vendors that matter most, and annual reviews tracked in your GRC platform.",
    ],
  },
  inclusions: {
    eyebrow: "What's included",
    title: "A Vendor Program That Runs Itself",
    items: [
      { icon: ClipboardList, title: "Vendor Inventory", body: "Every vendor listed with owner, data handled and risk tier." },
      { icon: Search, title: "Security Reviews", body: "Questionnaires, SOC 2 reports and security documentation reviewed for critical vendors." },
      { icon: ShieldCheck, title: "New Vendor Onboarding", body: "A review step before new tools get access to sensitive data." },
      { icon: FileSignature, title: "Contract & BAA Checks", body: "Security terms, DPAs and BAAs confirmed where they're required." },
      { icon: RefreshCw, title: "Annual Reviews", body: "Recurring reviews completed and documented on schedule." },
      { icon: AlertTriangle, title: "Risk Tracking", body: "Vendor findings recorded in your risk register with follow ups." },
    ],
  },
  phases: {
    eyebrow: "How it works",
    title: "How We Build It",
    steps: [
      { title: "Inventory", body: "Find every vendor in use.", points: ["Owners identified", "Data mapped"] },
      { title: "Tier", body: "Rank vendors by the risk they carry.", points: ["Critical vendors first", "Review depth set"] },
      { title: "Review", body: "Assess security for vendors that matter.", points: ["Reports and questionnaires", "Findings tracked"] },
      { title: "Maintain", body: "Keep it current all year.", points: ["New vendor reviews", "Annual renewals"] },
    ],
  },
  platforms: grcPlatforms,
  why: whyComSec,
  faqs: [
    { q: "Which vendors need a security review?", a: "Focus on vendors that store or process sensitive data or have access to your systems. We tier vendors so effort goes where risk is highest." },
    { q: "What if a vendor doesn't have a SOC 2 report?", a: "We use a security questionnaire and other evidence instead, and record any gaps and how you've decided to handle them." },
    { q: "How often should vendors be reviewed?", a: "Critical vendors at least once a year, plus a review before any new vendor gets access to sensitive data." },
    { q: "Does this cover AI vendors?", a: "Yes. AI tools get the same review, plus checks on how they use your prompts, outputs and data. See our AI Vendor Reviews service for more." },
  ],
  related: [vcisoRelated.risk, { label: "AI Vendor Reviews", to: "/ai-vendor-reviews", body: "Security and privacy reviews for AI tools that touch your data." }, vcisoRelated.questionnaires],
  cta: defaultCta("Get Your Vendors", "Under Control.", "Book a call and we'll show you how we'd inventory, tier and review your vendors."),
};

export const securityAwarenessPage: ServicePageContent = {
  path: "/security-awareness-training",
  seo: {
    title: "Security Awareness Training & Phishing Simulations | Com-Sec",
    description:
      "Com-Sec runs security awareness training, monthly phishing simulations and security newsletters, with coaching for clickers and records ready for SOC 2, ISO 27001 and HIPAA.",
    ogTitle: "Security Awareness & Phishing | Com-Sec",
    keywords: "security awareness training, phishing simulation, phishing testing, security newsletter, HIPAA training, SOC 2 security training",
    serviceName: "Security Awareness Training & Phishing Simulations",
  },
  hero: {
    eyebrow: "vCISO Leadership",
    title: "Turn Your Team Into",
    highlight: "Your First Line of Defense.",
    description:
      "Most incidents start with a person. Com-Sec runs training, phishing simulations and monthly newsletters that build real habits, and keeps the completion records your auditors ask for.",
    tags: ["Annual training", "Monthly phishing", "Newsletters", "Coaching"],
    panel: {
      title: "What we run",
      checklist: [
        "Annual security awareness training",
        "Topic training: phishing, PII, PHI and AI use",
        "Monthly phishing simulations",
        "Monthly security newsletters",
        "Follow up coaching for anyone who clicks",
      ],
    },
  },
  overview: {
    eyebrow: "Overview",
    title: "Awareness That Changes Behavior",
    paragraphs: [
      "Every framework requires security training, but a once a year video rarely changes how people act. Habits come from regular, relevant practice.",
      "We combine annual training with monthly phishing simulations and short newsletters on timely topics, then coach anyone who clicks. You get a team that spots threats and a clean record for your auditor.",
    ],
  },
  inclusions: {
    eyebrow: "What's included",
    title: "A Year Round Program",
    items: [
      { icon: GraduationCap, title: "Annual Training", body: "Security awareness training for every employee, with completion tracked." },
      { icon: BookOpen, title: "Topic Modules", body: "Focused training on phishing, PII, PHI and safe use of AI tools." },
      { icon: Mail, title: "Phishing Simulations", body: "Realistic monthly campaigns that reflect the threats your team actually sees." },
      { icon: MousePointerClick, title: "Clicker Coaching", body: "Short, supportive follow up for anyone who clicks, never public shaming." },
      { icon: Newspaper, title: "Monthly Newsletters", body: "Timely topics such as MFA, device security, shadow IT and seasonal scams." },
      { icon: ClipboardCheck, title: "Audit Records", body: "Completion and campaign results kept as evidence in your GRC platform." },
    ],
  },
  phases: {
    eyebrow: "How it works",
    title: "How the Program Runs",
    steps: [
      { title: "Baseline", body: "A first simulation shows where you start.", points: ["Initial click rate", "Training assigned"] },
      { title: "Train", body: "Everyone completes core training.", points: ["Role relevant topics", "Completion tracked"] },
      { title: "Practice", body: "Monthly simulations and newsletters.", points: ["Varied scenarios", "Coaching for clickers"] },
      { title: "Report", body: "Trends shared with leadership.", points: ["Monthly results", "Audit evidence"] },
    ],
  },
  why: whyComSec,
  faqs: [
    { q: "How often should we run phishing simulations?", a: "Monthly works well for most teams. It keeps awareness high without becoming noise, and gives you a clear trend over the year." },
    { q: "What happens when someone clicks?", a: "They get short, private coaching on what to look for. The goal is learning, not blame." },
    { q: "Does this meet SOC 2, ISO 27001 and HIPAA training requirements?", a: "Yes. Training completion and campaign records are kept as evidence for those frameworks, and HIPAA workforce training can be included." },
    { q: "Can we try a phishing test first?", a: "Yes. Our free phishing test on the Resources menu is a quick way to see how your team responds." },
  ],
  related: [vcisoRelated.policies, { label: "Incident Response & Resilience", to: "/incident-response-resilience", body: "Plans, playbooks and tabletop exercises for when something goes wrong." }, vcisoRelated.vciso],
  cta: defaultCta("Build a Team That", "Spots the Phish.", "Book a call and we'll plan a training and phishing program that fits your team."),
};
