import {
  Award,
  BadgeCheck,
  Bot,
  Boxes,
  Building2,
  ClipboardCheck,
  FileText,
  GraduationCap,
  Handshake,
  Layers,
  LayoutDashboard,
  Scale,
  SearchCheck,
  Users,
} from "lucide-react";
import type { ServicePageContent } from "@/components/service-page/types";

// Sources: "ISO 42001 Service One Pager" and "Com-Sec Services Booklet" (pp. 10, 13),
// "AI Governance Service One Pager" for EU AI Act / NIST AI RMF alignment.
// Pricing is intentionally left out.

export const iso42001Page: ServicePageContent = {
  path: "/iso42001",
  seo: {
    title: "ISO 42001 Certification Readiness | AI Management System | Com-Sec",
    description:
      "Get ISO/IEC 42001 certified. Com-Sec builds your AI Management System (AIMS), from AI inventory and gap assessment to Stage 1 and Stage 2 audit support.",
    ogTitle: "ISO 42001 Certification Readiness | Com-Sec",
    keywords:
      "ISO 42001, ISO/IEC 42001, AI Management System, AIMS, ISO 42001 certification, ISO 42001 readiness, ISO 42001 gap assessment, AI impact assessment, AI risk assessment, Statement of Applicability, Annex A controls, AI governance",
    serviceName: "ISO 42001 Certification Readiness",
  },
  hero: {
    eyebrow: "ISO 42001 Readiness",
    title: "Prove Your AI Is",
    highlight: "Governed Responsibly.",
    description:
      "Com-Sec builds your AI Management System and takes you from gap assessment to certification and beyond. Our team does the heavy lifting, so your engineers stay on the roadmap.",
    tags: ["AI inventory", "Impact assessments", "Statement of Applicability", "Stage 1 & Stage 2"],
    panel: {
      title: "ISO/IEC 42001 at a glance",
      stats: [
        { value: "4 to 10", label: "Management system clauses audited" },
        { value: "38", label: "Annex A controls on AI risk, data and lifecycle" },
        { value: "3 years", label: "Certificate validity, with yearly surveillance" },
        { value: "4 to 6 mo", label: "Typical time from gap assessment to certification" },
      ],
      footnote: "Timelines depend on how many AI systems are in scope and how mature your current governance is.",
    },
  },
  overview: {
    eyebrow: "What is ISO 42001",
    title: "The First Certifiable Standard for AI Governance",
    paragraphs: [
      "ISO/IEC 42001 sets the requirements for an AI Management System (AIMS): the policies, roles, risk processes and controls that show how your organization builds, buys and uses AI responsibly.",
      "An accredited certification body audits Clauses 4 to 10 and the Annex A controls covering AI risk, impacts, data and the AI system lifecycle. The certificate lasts three years, with surveillance audits in years two and three.",
      "Certification is voluntary. Most companies pursue it because customers, procurement teams and regulators are asking how AI is governed, and a certificate answers that question once instead of in every questionnaire.",
    ],
    callout: {
      title: "Already ISO 27001 certified?",
      body: "ISO 42001 uses the same management system structure as ISO 27001. Your document control, risk method, internal audit and management review carry over, and both standards can be audited together.",
    },
  },
  audiences: {
    eyebrow: "Who needs it",
    title: "Is ISO 42001 Right for You?",
    description: "If AI touches your product or your customers' data, buyers will ask how you govern it.",
    items: [
      {
        icon: Bot,
        title: "AI Product Companies",
        body: "You build or ship AI features and enterprise buyers want independent proof your AI is managed responsibly.",
      },
      {
        icon: Building2,
        title: "SaaS Selling to Enterprise",
        body: "AI sections are showing up in security reviews and RFPs. A certificate shortens those conversations.",
      },
      {
        icon: Scale,
        title: "Regulated Industries",
        body: "Healthcare, fintech and other regulated teams using AI on sensitive data need clear oversight and records.",
      },
      {
        icon: Layers,
        title: "ISO 27001 Holders",
        body: "Extend the ISMS you already run into an integrated ISMS and AIMS, without starting from scratch.",
      },
    ],
  },
  inclusions: {
    eyebrow: "What's included",
    title: "Everything You Need to Get Certified",
    description:
      "One engagement covers building your AIMS and getting it through the Stage 1 document review and the Stage 2 certification audit.",
    items: [
      {
        icon: SearchCheck,
        title: "AI Inventory & Gap Assessment",
        body: "We catalog your AI systems, define the AIMS scope and assess where you stand against ISO 42001 and Annex A.",
      },
      {
        icon: FileText,
        title: "AI Policy & Procedures",
        body: "An AI policy and supporting procedures written around how your teams actually build and use AI.",
      },
      {
        icon: ClipboardCheck,
        title: "AI Risk Assessment",
        body: "Risks identified and scored, a risk treatment plan agreed, and your Statement of Applicability prepared.",
      },
      {
        icon: Users,
        title: "AI Impact Assessments",
        body: "Impact assessments for every AI use case, covering effects on individuals, groups and society.",
      },
      {
        icon: GraduationCap,
        title: "People Controls",
        body: "AI roles and responsibilities, competence records, awareness and responsible AI use training.",
      },
      {
        icon: LayoutDashboard,
        title: "GRC Platform & Evidence",
        body: "Controls set up in your GRC platform with evidence collected and organized for the auditor.",
      },
      {
        icon: BadgeCheck,
        title: "Internal Audit & Management Review",
        body: "An internal audit of the full AIMS and a management review, so findings are closed before the auditor arrives.",
      },
      {
        icon: Handshake,
        title: "Auditor Liaison",
        body: "We coordinate with your certification body through Stage 1 and Stage 2 and handle evidence requests.",
      },
    ],
  },
  structure: {
    eyebrow: "What the auditor looks at",
    title: "How ISO 42001 Is Structured",
    description:
      "The clauses define how your management system runs. Annex A lists the AI specific controls you select and justify in your Statement of Applicability.",
    columns: [
      {
        heading: "Management system clauses",
        caption: "Required for certification",
        items: [
          { code: "4", label: "Context of the organization and AIMS scope" },
          { code: "5", label: "Leadership, AI policy and roles" },
          { code: "6", label: "Planning: AI risk assessment, treatment and impact assessment" },
          { code: "7", label: "Support: resources, competence, awareness and documentation" },
          { code: "8", label: "Operation: running the AI risk and impact processes" },
          { code: "9", label: "Performance evaluation, internal audit and management review" },
          { code: "10", label: "Continual improvement and corrective action" },
        ],
      },
      {
        heading: "Annex A control areas",
        caption: "38 controls across nine areas",
        items: [
          { code: "A.2", label: "Policies related to AI" },
          { code: "A.3", label: "Internal organization and accountability" },
          { code: "A.4", label: "Resources for AI systems" },
          { code: "A.5", label: "Assessing impacts of AI systems" },
          { code: "A.6", label: "AI system lifecycle" },
          { code: "A.7", label: "Data for AI systems" },
          { code: "A.8", label: "Information for interested parties" },
          { code: "A.9", label: "Use of AI systems" },
          { code: "A.10", label: "Third party and customer relationships" },
        ],
      },
    ],
  },
  phases: {
    eyebrow: "How it works",
    title: "From First Call to Certificate",
    description: "A clear path in four phases, typically four to six months end to end.",
    steps: [
      {
        title: "Scope & Assess",
        timing: "Weeks 1 to 3",
        body: "We learn how you build and use AI, then measure the gap.",
        points: ["AI system inventory", "AIMS scope and boundaries", "Gap assessment and prioritized roadmap"],
      },
      {
        title: "Build",
        timing: "Weeks 3 to 10",
        body: "We put the AIMS in place alongside your team.",
        points: ["AI policy and procedures", "Risk and impact assessments", "Statement of Applicability", "Training and roles"],
      },
      {
        title: "Operate & Verify",
        timing: "Weeks 10 to 16",
        body: "The AIMS runs and produces the records auditors sample.",
        points: ["Evidence in your GRC platform", "Internal audit", "Management review"],
      },
      {
        title: "Certify",
        timing: "Weeks 16 to 24",
        body: "Your certification body runs a two stage audit. We are with you throughout.",
        points: ["Stage 1 documentation review", "Stage 2 certification audit", "Corrective action support"],
      },
    ],
  },
  ongoing: {
    eyebrow: "Years 2 & 3",
    title: "Stay Certified After Year One",
    description:
      "Certificates last three years. Annual surveillance audits sample your AIMS, then recertification follows in year three. We keep the AIMS running so each audit is routine.",
    items: [
      "Monthly check ins to track tasks, gaps and timelines",
      "AI inventory, impact assessments and model changes kept current",
      "Sample ready evidence for every control the auditor will test",
      "Annual internal audit and management review",
      "Supplier reviews for AI vendors and models",
      "Surveillance audit support and auditor liaison every year",
    ],
    aside: {
      title: "Need an Internal Audit Only?",
      body: "Already running an AIMS? We offer an independent ISO 42001 internal audit, on its own or ahead of certification.",
      points: [
        "Every AIMS clause and Annex A control tested",
        "Detailed report with nonconformities and priorities",
        "Corrective action and closure support",
        "Introductions to accredited audit partners",
      ],
    },
  },
  platforms: {
    title: "Built for Your GRC Platform",
    description:
      "We work inside the platform you already use, so your controls, policies and evidence stay in one place.",
    names: ["Drata", "Vanta", "Sprinto", "Kertos", "Shield GRC"],
    shieldNote: "No platform yet? Shield GRC, our own platform, supports ISO 42001 alongside your other frameworks.",
  },
  why: [
    {
      icon: Award,
      title: "Seasoned InfoSec Team",
      body: "Hands on experience with ISO 42001, ISO 27001 and SOC 2, and a 100% first time audit pass rate.",
    },
    {
      icon: Layers,
      title: "Pairs With ISO 27001",
      body: "One control set and integrated ISMS and AIMS audits, instead of two separate programs.",
    },
    {
      icon: Boxes,
      title: "Aligned With AI Regulation",
      body: "Your AIMS maps to the NIST AI RMF and the EU AI Act, so one program answers more than one requirement.",
    },
  ],
  faqs: [
    {
      q: "Is ISO 42001 certification mandatory?",
      a: "No. ISO 42001 is a voluntary standard. Companies pursue it because customers, procurement teams and regulators increasingly ask for proof that AI is governed responsibly, and an accredited certificate is the clearest answer.",
    },
    {
      q: "How long does ISO 42001 certification take?",
      a: "Most engagements take four to six months from gap assessment to the Stage 2 audit. The biggest factors are how many AI systems are in scope and how much governance you already have. Teams with ISO 27001 in place usually move faster.",
    },
    {
      q: "Do we need to build our own AI models to be in scope?",
      a: "No. ISO 42001 applies to organizations that develop, provide or use AI systems. Your scope reflects your role, whether you train models, build AI features on third party models, or use AI tools on customer data.",
    },
    {
      q: "We already have ISO 27001. How much carries over?",
      a: "A lot. Both standards share the same clause structure, so document control, risk methodology, internal audit and management review can be reused. Many certification bodies can audit both standards together.",
    },
    {
      q: "Who performs the certification audit?",
      a: "An accredited certification body, independent of Com-Sec. We prepare you, run the internal audit and act as your liaison during Stage 1 and Stage 2. If you do not have an auditor yet, we can introduce you to accredited partners.",
    },
    {
      q: "What happens after we are certified?",
      a: "Your certificate is valid for three years. Surveillance audits take place in years two and three, then a recertification audit. We can keep your AIMS running and your evidence current so every audit is routine.",
    },
  ],
  related: [
    {
      label: "ISO 27001 Certification",
      to: "/iso27001",
      body: "Build an ISMS alongside your AIMS and certify both with integrated audits.",
    },
    {
      label: "SOC 2 Readiness",
      to: "/soc2",
      body: "Add a SOC 2 report for US customers, mapped to the same control set.",
    },
    {
      label: "Audit Readiness & Certification",
      to: "/compliance-audit-service",
      body: "See every framework we prepare you for, from HIPAA to CMMC.",
    },
  ],
  cta: {
    title: "Ready to Certify Your",
    highlight: "AI Management System?",
    body: "Book a call with our team. We will walk through your AI use, scope your AIMS and map out your path to ISO 42001 certification.",
  },
};
