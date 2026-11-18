import {
  AlertTriangle,
  Bot,
  Building2,
  ClipboardCheck,
  ClipboardList,
  Database,
  Eye,
  FileText,
  GitPullRequest,
  GraduationCap,
  Layers,
  ListChecks,
  Lock,
  Radar,
  RefreshCw,
  Scale,
  Search,
  ShieldCheck,
  Sparkles,
  Truck,
  Users,
} from "lucide-react";
import type { ServicePageContent } from "@/components/service-page/types";
import { defaultCta, whyComSec } from "./common";

// AI Governance. Source: "AI Governance Service One Pager" (file 17), Services Booklet p. 8.
// Approval Workflows is a section on the group page (#approval-workflows), not its own page.

const related = {
  group: { label: "AI Governance", to: "/ai-governance", body: "A practical AI governance program aligned to ISO 42001, NIST AI RMF and the EU AI Act." },
  inventory: { label: "AI Tool Inventory", to: "/ai-tool-inventory", body: "Every AI tool, model and owner in one place." },
  policy: { label: "AI Acceptable Use Policies", to: "/ai-acceptable-use-policy", body: "Clear rules for how your teams use AI." },
  vendor: { label: "AI Vendor Reviews", to: "/ai-vendor-reviews", body: "Security and privacy reviews for AI tools that touch your data." },
  risk: { label: "AI Risk Assessments", to: "/ai-risk-assessments", body: "Data leakage, model and compliance risk, assessed and treated." },
  iso: { label: "ISO 42001 Certification", to: "/iso42001", body: "Turn your AI governance program into a certified AI management system." },
};

const aiFrameworks = "Aligned to ISO 42001, the NIST AI RMF and the EU AI Act.";

export const aiGovernancePage: ServicePageContent = {
  path: "/ai-governance",
  seo: {
    title: "AI Governance & Responsible AI Programs | Com-Sec",
    description:
      "Com-Sec builds practical AI governance: AI inventory, acceptable use policy, risk and impact assessments, vendor AI reviews and approval workflows, aligned to ISO 42001.",
    ogTitle: "AI Governance & Responsible AI Programs | Com-Sec",
    keywords: "AI governance, responsible AI, AI governance program, AI acceptable use policy, AI risk assessment, AI inventory, ISO 42001, NIST AI RMF, EU AI Act",
    serviceName: "AI Governance & Responsible AI Programs",
  },
  hero: {
    eyebrow: "AI Governance",
    title: "Adopt AI",
    highlight: "With Confidence.",
    description:
      "AI tools are entering every team, often without review. Com-Sec builds the policies, inventory and risk reviews that let your teams use AI safely, and prove it to customers.",
    tags: ["ISO 42001", "NIST AI RMF", "EU AI Act"],
    panel: {
      title: "Program setup includes",
      checklist: [
        "AI inventory of every tool, model and owner",
        "AI acceptable use policy",
        "AI risk and impact assessments",
        "Vendor AI reviews",
        "Approval workflow for new AI tools",
        "Staff training on responsible AI use",
      ],
      footnote: "Typically stood up in four to six weeks, ready for customer reviews.",
    },
  },
  overview: {
    eyebrow: "Why it matters",
    title: "Customers Are Asking How You Govern AI",
    paragraphs: [
      "Security questionnaires now include AI sections. Auditors ask about AI tools. Regulators are publishing rules. Meanwhile, teams adopt new AI tools every week.",
      "We set up a practical AI governance program that answers those questions without slowing anyone down: clear rules, a known inventory, reviewed vendors and a simple way to approve new tools.",
    ],
    callout: { title: "A path to certification", body: "The program is built on ISO 42001, so when you're ready to certify, most of the groundwork is already done." },
  },
  audiences: {
    eyebrow: "Who it's for",
    title: "Built for Teams Using AI",
    items: [
      { icon: Bot, title: "AI Product Companies", body: "You build AI features and customers want to see how they're governed." },
      { icon: Building2, title: "SaaS Selling to Enterprise", body: "AI sections in security reviews need clear, documented answers." },
      { icon: Scale, title: "Regulated Industries", body: "Healthcare and fintech teams using AI on sensitive data need oversight." },
      { icon: Users, title: "Any Team Using AI Tools", body: "Staff are already using AI. You need rules and visibility." },
    ],
  },
  inclusions: {
    eyebrow: "Program setup",
    title: "Everything a Practical AI Program Needs",
    description: "Stood up in four to six weeks, then kept current as tools change.",
    items: [
      { icon: ClipboardList, title: "AI Inventory", body: "Every AI tool, model and owner recorded in one place." },
      { icon: FileText, title: "Acceptable Use Policy", body: "AI use rules tailored to how your teams work." },
      { icon: AlertTriangle, title: "AI Risk Assessment", body: "Data leakage, model and compliance risks assessed." },
      { icon: Eye, title: "Impact Assessments", body: "Deeper review for high risk AI use cases." },
      { icon: Truck, title: "Vendor AI Reviews", body: "Security and privacy checks for AI tools that touch your data." },
      { icon: Database, title: "Data Handling Rules", body: "Rules for prompts, outputs and model training data." },
      { icon: GitPullRequest, title: "Approval Workflow", body: "A simple request and approve path for new AI tools." },
      { icon: GraduationCap, title: "Staff Training", body: "Training on safe, responsible AI use." },
    ],
  },
  phases: {
    eyebrow: "How it works",
    title: "From Discovery to Ongoing Oversight",
    steps: [
      { title: "Discover", body: "Find every AI tool and how teams use it.", points: ["Tool discovery", "Use case mapping"] },
      { title: "Govern", body: "Policies, owners and an approval flow.", points: ["Acceptable use policy", "Roles assigned"] },
      { title: "Control", body: "Risk and impact reviews in place.", points: ["Risk assessment", "Vendor reviews"] },
      { title: "Monitor", body: "Ongoing reviews as AI use changes.", points: ["Inventory upkeep", "Regulatory watch"] },
    ],
  },
  sections: [
    {
      id: "approval-workflows",
      eyebrow: "Approval Workflows",
      title: "A Simple Way to Say Yes to New AI Tools",
      body: "Banning AI drives it underground. A clear request and approval process lets teams adopt useful tools quickly while security, privacy and legal get the review they need.",
      points: [
        "A short request form for any new AI tool",
        "Risk based review: light for low risk, deeper for sensitive data",
        "Security, privacy and data handling checks",
        "Decisions and conditions recorded in the inventory",
        "New tools reviewed before rollout",
        "Clear turnaround so teams aren't left waiting",
      ],
    },
  ],
  ongoing: {
    eyebrow: "Ongoing",
    title: "AI Governance Support",
    description: "AI changes monthly. Ongoing support keeps your program current, and includes fractional DPO support for privacy and AI questions as they come up.",
    items: [
      "Monthly check ins on new tools and requests",
      "Inventory, owners and approvals kept current",
      "Risk reviews as models, vendors and data use change",
      "Regulatory watch: EU AI Act and NIST AI RMF",
      "AI questionnaires for customers and auditors",
      "A clear path to ISO 42001 certification",
    ],
  },
  why: whyComSec,
  faqs: [
    { q: "Do we need AI governance if we only use AI tools, not build them?", a: "Yes. Using AI tools on company or customer data creates data leakage, privacy and contract risks. Governance gives you visibility and rules for that use." },
    { q: "How long does it take to set up?", a: "Most programs are stood up in four to six weeks, ready for customer security reviews." },
    { q: "Which frameworks is the program aligned to?", a: "ISO 42001, the NIST AI Risk Management Framework and the EU AI Act." },
    { q: "Is this the same as ISO 42001 certification?", a: "No. AI governance is the practical program. ISO 42001 certification is an independent audit of it. The program is built so certification is a natural next step." },
    { q: "Will this slow our teams down?", a: "It shouldn't. The approval workflow is risk based, so low risk tools are approved quickly and deeper review is saved for sensitive use." },
  ],
  related: [related.iso, related.vendor, related.risk],
  cta: defaultCta("Put Guardrails on AI,", "Not Roadblocks.", "Book a call and we'll show you how we'd set up AI governance for your team in weeks, not months."),
};

export const aiToolInventoryPage: ServicePageContent = {
  path: "/ai-tool-inventory",
  seo: {
    title: "AI Tool Inventory & AI System Register | Com-Sec",
    description:
      "Com-Sec discovers every AI tool and model your teams use, assigns owners, and maintains an AI inventory for customer reviews, AI governance and ISO 42001.",
    ogTitle: "AI Tool Inventory | Com-Sec",
    keywords: "AI inventory, AI tool inventory, AI system register, shadow AI, AI governance, ISO 42001 AI inventory",
    serviceName: "AI Tool Inventory",
  },
  hero: {
    eyebrow: "AI Governance",
    title: "Know Every AI Tool",
    highlight: "Your Teams Use.",
    description:
      "You can't govern what you can't see. Com-Sec finds every AI tool and model in use, records what data it touches and who owns it, and keeps the inventory current.",
    tags: ["Discovery", "Owners", "Data mapping", "Kept current"],
    panel: {
      title: "Each entry records",
      checklist: ["The tool or model and its vendor", "Who owns it and who uses it", "What data it touches", "Approval status and conditions", "Risk level and review date"],
    },
  },
  overview: {
    eyebrow: "Overview",
    title: "The Foundation of AI Governance",
    paragraphs: [
      "Most companies underestimate how many AI tools are in use: chat assistants, coding tools, meeting note takers and AI features quietly added to existing apps.",
      "We discover them, record them in a single inventory with owners and data flows, and keep it current as new tools arrive. It's the first thing customers and ISO 42001 auditors ask for.",
    ],
  },
  inclusions: {
    eyebrow: "What's included",
    title: "A Complete, Current Inventory",
    items: [
      { icon: Radar, title: "Discovery", body: "Find AI tools through interviews, SSO and expense data, and app reviews." },
      { icon: Sparkles, title: "Embedded AI Features", body: "Identify AI features inside apps you already use." },
      { icon: Users, title: "Owners", body: "Every tool gets an accountable owner." },
      { icon: Database, title: "Data Mapping", body: "Record what data each tool receives and keeps." },
      { icon: ListChecks, title: "Risk Tiering", body: "Rank tools by the risk they carry." },
      { icon: RefreshCw, title: "Ongoing Upkeep", body: "New tools added and reviewed before rollout." },
    ],
  },
  phases: {
    eyebrow: "How it works",
    title: "How We Build It",
    steps: [
      { title: "Discover", body: "Find what's in use.", points: ["Team interviews", "System data review"] },
      { title: "Record", body: "Capture the details.", points: ["Owners and users", "Data flows"] },
      { title: "Tier", body: "Rank by risk.", points: ["Sensitive data flagged", "Review needs set"] },
      { title: "Maintain", body: "Keep it current.", points: ["New tool intake", "Periodic review"] },
    ],
  },
  why: whyComSec,
  faqs: [
    { q: "What counts as an AI tool?", a: "Any tool or feature that uses AI on your data: standalone assistants, coding tools, AI features in existing apps and models you build or host." },
    { q: "How do you find tools nobody told us about?", a: "We combine team interviews with SSO, expense and app usage data to surface tools adopted outside formal channels." },
    { q: "Where does the inventory live?", a: "In your GRC platform or a shared register, linked to your approval workflow and risk assessments." },
    { q: "Is this required for ISO 42001?", a: "Yes. An inventory of AI systems is a core part of defining your AI management system scope." },
  ],
  related: [related.group, related.policy, related.iso],
  cta: defaultCta("Find Out What AI", "Is Already in Use.", "Book a call and we'll show you how we'd discover and inventory the AI tools across your company."),
};

export const aiAcceptableUsePage: ServicePageContent = {
  path: "/ai-acceptable-use-policy",
  seo: {
    title: "AI Acceptable Use Policy Development | Com-Sec",
    description:
      "Com-Sec writes AI acceptable use policies tailored to how your teams work, with clear rules for approved tools, sensitive data, prompts, outputs and human review.",
    ogTitle: "AI Acceptable Use Policies | Com-Sec",
    keywords: "AI acceptable use policy, AI use policy, generative AI policy, AI policy template, responsible AI policy, ChatGPT policy for employees",
    serviceName: "AI Acceptable Use Policy",
  },
  hero: {
    eyebrow: "AI Governance",
    title: "Clear AI Rules Your Team",
    highlight: "Will Actually Follow.",
    description:
      "Employees want to use AI and don't know what's allowed. Com-Sec writes an AI acceptable use policy that's practical, specific to your tools, and easy to follow.",
    tags: ["Approved tools", "Data rules", "Human review", "Training"],
    panel: {
      title: "Your policy covers",
      checklist: ["Which AI tools are approved", "What data can and can't be shared", "Rules for prompts and outputs", "When human review is required", "How to request a new tool"],
    },
  },
  overview: {
    eyebrow: "Overview",
    title: "Practical Rules, Not a Ban",
    paragraphs: [
      "Blanket bans don't work. People use AI anyway, just without guidance. A good policy makes the safe path the easy path.",
      "We write your AI acceptable use policy around your approved tools, the data your teams handle and the work they do, then roll it out with training and acknowledgments.",
    ],
  },
  inclusions: {
    eyebrow: "What's included",
    title: "From Draft to Day to Day",
    items: [
      { icon: FileText, title: "Tailored Policy", body: "Written for your tools, data and teams, not a generic template." },
      { icon: Lock, title: "Data Rules", body: "Clear guidance on customer data, source code, PII and PHI." },
      { icon: Database, title: "Prompts & Outputs", body: "Rules for what goes in, what comes out and how it's used." },
      { icon: Eye, title: "Human Oversight", body: "Where AI output needs review before it's used or shared." },
      { icon: GraduationCap, title: "Training", body: "Short training so everyone understands the rules." },
      { icon: ClipboardCheck, title: "Acknowledgments", body: "Employee sign off tracked for audits." },
    ],
  },
  phases: {
    eyebrow: "How it works",
    title: "How We Write It",
    steps: [
      { title: "Learn", body: "How your teams use AI today.", points: ["Use cases", "Tools in use"] },
      { title: "Draft", body: "Practical rules in plain language.", points: ["Approved tools", "Data rules"] },
      { title: "Approve", body: "Leadership sign off.", points: ["Legal and privacy input", "Final version"] },
      { title: "Roll Out", body: "Training and acknowledgments.", points: ["Staff training", "Sign off tracked"] },
    ],
  },
  why: whyComSec,
  faqs: [
    { q: "Can we just use a template?", a: "Templates are a starting point, but they rarely match your tools and data. A policy people can follow needs to name your approved tools and real use cases." },
    { q: "How often should the policy be updated?", a: "At least yearly, and when you approve significant new tools. AI changes fast, so ongoing support keeps it current." },
    { q: "Does this cover AI features in our product?", a: "The acceptable use policy covers employee use of AI. AI in your product is covered by risk and impact assessments and, if you choose, ISO 42001." },
    { q: "Is the policy enough for customer security reviews?", a: "It's a key piece. Combined with an inventory and vendor reviews, it answers most AI questions customers ask." },
  ],
  related: [related.inventory, related.group, { label: "Policies & Procedures", to: "/policies-procedures", body: "Your full security policy set, written and maintained." }],
  cta: defaultCta("Give Your Team", "Clear AI Rules.", "Book a call and we'll show you how we'd write and roll out an AI acceptable use policy for your company."),
};

export const aiVendorReviewsPage: ServicePageContent = {
  path: "/ai-vendor-reviews",
  seo: {
    title: "AI Vendor Security & Privacy Reviews | Com-Sec",
    description:
      "Com-Sec reviews AI vendors and tools before they touch your data: security posture, data retention, model training on your data, privacy terms and contract protections.",
    ogTitle: "AI Vendor Reviews | Com-Sec",
    keywords: "AI vendor review, AI vendor risk assessment, AI third party risk, AI tool security review, AI data privacy review, LLM vendor due diligence",
    serviceName: "AI Vendor Reviews",
  },
  hero: {
    eyebrow: "AI Governance",
    title: "Know What Happens to Your Data",
    highlight: "Inside Every AI Tool.",
    description:
      "Does the vendor train on your prompts? Where is data stored, and for how long? Com-Sec reviews AI vendors before they touch your data, and records the answers.",
    tags: ["Security", "Privacy", "Data retention", "Model training"],
    panel: {
      title: "Every review checks",
      checklist: ["Whether your data trains their models", "Data retention and deletion", "Security certifications and controls", "Privacy and DPA terms", "Subprocessors and data location"],
    },
  },
  overview: {
    eyebrow: "Overview",
    title: "AI Vendors Need Their Own Questions",
    paragraphs: [
      "A standard vendor review misses what matters most for AI: whether your prompts and outputs are retained, used to train models, or shared with other providers.",
      "We review AI vendors with AI specific questions, check their contracts and settings, and record a clear decision and any conditions in your inventory.",
    ],
  },
  inclusions: {
    eyebrow: "What's included",
    title: "AI Specific Due Diligence",
    items: [
      { icon: Database, title: "Training & Retention", body: "How the vendor uses, retains and deletes your data." },
      { icon: ShieldCheck, title: "Security Posture", body: "Certifications, reports and security controls reviewed." },
      { icon: Scale, title: "Privacy & Contracts", body: "DPAs, terms and data location checked." },
      { icon: Layers, title: "Subprocessors", body: "Which underlying model providers receive your data." },
      { icon: Lock, title: "Configuration", body: "Enterprise settings, such as disabling training, confirmed." },
      { icon: ClipboardList, title: "Recorded Decision", body: "Approval, conditions and review date logged in the inventory." },
    ],
  },
  phases: {
    eyebrow: "How it works",
    title: "How a Review Runs",
    steps: [
      { title: "Request", body: "A team asks to use a tool.", points: ["Use case", "Data involved"] },
      { title: "Assess", body: "We review the vendor.", points: ["Documentation", "AI specific questions"] },
      { title: "Decide", body: "Approve, approve with conditions, or decline.", points: ["Clear rationale", "Settings required"] },
      { title: "Record", body: "Logged and re reviewed.", points: ["Inventory updated", "Annual review"] },
    ],
  },
  why: whyComSec,
  faqs: [
    { q: "Which AI vendors need a review?", a: "Any AI tool that receives company or customer data. Low risk tools get a light review, tools touching sensitive data get a deeper one." },
    { q: "How long does a review take?", a: "Most reviews are completed quickly once the vendor's documentation is available. Turnaround depends on the vendor's responsiveness." },
    { q: "What if a vendor trains on our data?", a: "We check whether it can be disabled, recommend the right settings or plan tier, and record the condition before approval." },
    { q: "Is this part of vendor risk management?", a: "Yes. AI vendor reviews extend your vendor risk program with AI specific checks and feed the same risk register." },
  ],
  related: [related.group, { label: "Vendor Risk Management", to: "/vendor-risk-management", body: "Security reviews for all your third parties." }, related.risk],
  cta: defaultCta("Review AI Vendors", "Before They See Your Data.", "Book a call and we'll show you how we review AI tools quickly and consistently."),
};

export const aiRiskAssessmentsPage: ServicePageContent = {
  path: "/ai-risk-assessments",
  seo: {
    title: "AI Risk Assessments & AI Impact Assessments | Com-Sec",
    description:
      "Com-Sec assesses AI risk across data leakage, model behavior and compliance, runs impact assessments for high risk use cases, and builds treatment plans aligned to ISO 42001.",
    ogTitle: "AI Risk Assessments | Com-Sec",
    keywords: "AI risk assessment, AI impact assessment, AI risk management, NIST AI RMF, EU AI Act risk, ISO 42001 risk assessment, data leakage risk",
    serviceName: "AI Risk Assessments",
  },
  hero: {
    eyebrow: "AI Governance",
    title: "Understand Your AI Risk",
    highlight: "Before It Becomes an Incident.",
    description:
      "Com-Sec assesses the risks your AI use creates, from data leakage to model errors to compliance gaps, and turns them into clear treatment plans.",
    tags: ["Data leakage", "Model risk", "Compliance", "Impact assessments"],
    panel: {
      title: "What we assess",
      checklist: ["Data leakage through prompts and outputs", "Model accuracy, bias and misuse", "Regulatory and contract compliance", "Impacts on people for high risk use cases", "Treatment plans with owners"],
    },
  },
  overview: {
    eyebrow: "Overview",
    title: "AI Risk Is Different From IT Risk",
    paragraphs: [
      "Traditional risk assessments don't ask whether a model could leak customer data in a response, give a harmful answer, or make a decision that affects someone unfairly.",
      "We assess AI specific risks for each use case, run deeper impact assessments where AI affects people, and agree treatments that fit your business.",
    ],
  },
  inclusions: {
    eyebrow: "What's included",
    title: "A Complete View of AI Risk",
    items: [
      { icon: Lock, title: "Data Leakage Risk", body: "How sensitive data could escape through prompts, outputs or logs." },
      { icon: Bot, title: "Model Risk", body: "Accuracy, bias, misuse and reliance on model output." },
      { icon: Scale, title: "Compliance Risk", body: "Obligations under privacy law, contracts and emerging AI regulation." },
      { icon: Users, title: "Impact Assessments", body: "Effects on individuals and groups for high risk use cases." },
      { icon: AlertTriangle, title: "Risk Register", body: "AI risks scored and tracked alongside your other risks." },
      { icon: Search, title: "Treatment Plans", body: "Controls and actions agreed with owners and dates." },
    ],
  },
  phases: {
    eyebrow: "How it works",
    title: "How We Assess",
    steps: [
      { title: "Scope", body: "Which AI use cases to assess.", points: ["Inventory review", "Priorities set"] },
      { title: "Assess", body: "Identify and score risks.", points: ["Data, model, compliance", "Impact where needed"] },
      { title: "Treat", body: "Agree what to do.", points: ["Controls", "Owners and dates"] },
      { title: "Review", body: "Reassess as AI use changes.", points: ["New models and vendors", "Annual review"] },
    ],
  },
  why: whyComSec,
  faqs: [
    { q: "What's the difference between a risk assessment and an impact assessment?", a: "A risk assessment looks at risks to your organization. An impact assessment looks at effects on people affected by the AI system, and is used for higher risk use cases." },
    { q: "Which frameworks does this align with?", a: "ISO 42001, the NIST AI Risk Management Framework and the EU AI Act's risk based approach." },
    { q: "How often should AI risk be reassessed?", a: "When models, vendors or data use change significantly, and at least once a year." },
    { q: "Does this count toward ISO 42001?", a: "Yes. AI risk assessment, treatment and impact assessment are core ISO 42001 requirements." },
  ],
  related: [related.iso, related.group, related.vendor],
  cta: defaultCta("Get Ahead of", "Your AI Risk.", "Book a call and we'll walk through your AI use cases and how we'd assess them."),
};
