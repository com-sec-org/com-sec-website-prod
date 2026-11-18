import {
  Archive,
  Boxes,
  Briefcase,
  Cloud,
  Code2,
  Compass,
  FileCode2,
  GitBranch,
  HardDrive,
  KeyRound,
  Layers,
  Lock,
  Network,
  Rocket,
  ScanSearch,
  ScrollText,
  Search,
  Server,
  ShieldCheck,
  Siren,
  Users,
  Wrench,
} from "lucide-react";
import type { ServicePageContent } from "@/components/service-page/types";
import { defaultCta } from "./common";

// CTO, Engineering & DevOps. Source: "CTO, Engineering & DevOps Support One Pager" (file 3), Services Booklet p. 9.

const ctoWhy: NonNullable<ServicePageContent["why"]> = [
  { icon: Users, title: "Senior Engineering Team", body: "Hands on experience across AWS, Azure, GCP and Kubernetes." },
  { icon: ShieldCheck, title: "Security First Engineering", body: "Everything we build is designed to pass your next audit." },
  { icon: Layers, title: "Pairs With vCISO", body: "Technology and security leadership working together." },
];

const related = {
  group: { label: "CTO, Engineering & DevOps", to: "/cto-engineering-devops", body: "Fractional CTO leadership and hands on DevSecOps support." },
  infra: { label: "Audit-Ready Infrastructure", to: "/audit-ready-infrastructure", body: "Logging, encryption, backups and access built the way auditors check." },
  cloud: { label: "Cloud Security Hardening", to: "/cloud-security-hardening", body: "Hands on hardening across AWS, Azure and GCP." },
  devsecops: { label: "DevSecOps & CI/CD Security", to: "/devsecops", body: "Security scanning and secrets management in your pipelines." },
  hardening: { label: "Application & Infrastructure Hardening", to: "/application-infrastructure-hardening", body: "Engineering fixes to code, configuration and architecture." },
  ir: { label: "Technical Incident Response", to: "/technical-incident-response", body: "Hands on containment, investigation and recovery." },
};

const devopsPhases: ServicePageContent["phases"] = {
  eyebrow: "How it works",
  title: "How We Engage",
  steps: [
    { title: "Assess", body: "Review your stack, team and roadmap.", points: ["Architecture review", "Gaps prioritized"] },
    { title: "Plan", body: "Architecture and priorities agreed.", points: ["Clear scope", "Owners and timelines"] },
    { title: "Build", body: "Pipelines, infrastructure and guardrails.", points: ["Infrastructure as code", "Changes reviewed"] },
    { title: "Scale", body: "Ongoing support as you grow.", points: ["Monthly hours", "Scale up or down"] },
  ],
};

export const ctoDevopsPage: ServicePageContent = {
  path: "/cto-engineering-devops",
  seo: {
    title: "Fractional CTO, Engineering & DevOps Support | Com-Sec",
    description:
      "Com-Sec pairs fractional CTO leadership with hands on DevOps and DevSecOps engineering, so your platform scales securely and stays audit ready on AWS, Azure and GCP.",
    ogTitle: "Fractional CTO, Engineering & DevOps | Com-Sec",
    keywords: "fractional CTO, DevOps support, DevSecOps, cloud engineering, infrastructure as code, Terraform, startup CTO, audit ready infrastructure",
    serviceName: "Fractional CTO, Engineering & DevOps Support",
  },
  hero: {
    eyebrow: "CTO, Engineering & DevOps",
    title: "Ship Faster on Infrastructure",
    highlight: "Your Auditors Will Trust.",
    description:
      "Most startups need a senior technical leader and solid infrastructure long before they can hire one full time. Com-Sec provides both, built with security in mind.",
    tags: ["Fractional CTO", "DevSecOps", "AWS, Azure, GCP", "Terraform"],
    panel: {
      title: "Two ways we help",
      checklist: [
        "Fractional CTO: strategy, architecture, hiring and board updates",
        "DevOps & DevSecOps: hands on cloud, pipelines and security",
        "Scoped by hours each month",
        "Scale up or down as your roadmap changes",
      ],
    },
  },
  overview: {
    eyebrow: "Overview",
    title: "Technical Leadership and Hands On Engineering",
    paragraphs: [
      "A fractional CTO gives you senior judgment on architecture, hiring and roadmap decisions, plus a technical voice for investors and enterprise customers.",
      "Our DevOps and DevSecOps engineers do the hands on work: hardening cloud environments, building secure pipelines and automating the infrastructure controls auditors test.",
    ],
    callout: { title: "Pairs with vCISO", body: "Combine fractional CTO and vCISO support so technology and security decisions are made together." },
  },
  inclusions: {
    eyebrow: "What we do",
    title: "Leadership and Engineering",
    items: [
      { icon: Compass, title: "Technology Strategy", body: "An engineering roadmap tied to business goals." },
      { icon: Layers, title: "Architecture Reviews", body: "For scale, cost, reliability and security." },
      { icon: Users, title: "Team Building", body: "Hiring plans, interviews, onboarding and engineering process." },
      { icon: Briefcase, title: "Technical Due Diligence", body: "Support for investors and enterprise customers, plus board updates." },
      { icon: Cloud, title: "Cloud Hardening", body: "Security hardening on AWS, Azure and GCP." },
      { icon: ShieldCheck, title: "Audit Ready Infrastructure", body: "Logging, encryption, backups and access done right." },
      { icon: GitBranch, title: "DevSecOps & CI/CD", body: "Code and dependency scans, secrets management." },
      { icon: Siren, title: "Incident Response", body: "Technical containment, investigation and recovery." },
    ],
  },
  phases: devopsPhases,
  why: ctoWhy,
  faqs: [
    { q: "What does a fractional CTO do?", a: "Owns technology strategy, reviews architecture, guides hiring and engineering process, supports technical due diligence and reports to the board, part time." },
    { q: "Do you write code or only advise?", a: "Both. The fractional CTO leads and advises; our DevOps and DevSecOps engineers do hands on infrastructure, pipeline and hardening work." },
    { q: "Which clouds do you support?", a: "AWS, Azure and GCP, plus Kubernetes and infrastructure as code with Terraform." },
    { q: "How is the work scoped?", a: "By hours each month, so you can scale up or down as your roadmap changes." },
  ],
  related: [related.infra, related.devsecops, { label: "Fractional Security Leadership", to: "/fractional-security-leadership", body: "A vCISO to pair with your technical leadership." }],
  cta: defaultCta("Get Senior Technical Leadership", "Without the Full Time Hire.", "Book a call and tell us about your stack, team and roadmap."),
};

export const auditReadyInfraPage: ServicePageContent = {
  path: "/audit-ready-infrastructure",
  seo: {
    title: "Audit-Ready Infrastructure for SOC 2, ISO 27001 & HIPAA | Com-Sec",
    description:
      "Com-Sec builds and automates the infrastructure controls auditors check: logging, encryption, backups and access, defined in code on AWS, Azure and GCP.",
    ogTitle: "Audit-Ready Infrastructure | Com-Sec",
    keywords: "audit ready infrastructure, SOC 2 infrastructure, SOC 2 technical controls, compliance as code, cloud logging, encryption at rest, backups, access control",
    serviceName: "Audit-Ready Infrastructure",
  },
  hero: {
    eyebrow: "CTO, Engineering & DevOps",
    title: "Infrastructure Built the Way",
    highlight: "Auditors Check It.",
    description:
      "Compliance platforms flag failing infrastructure tests, but someone has to fix them. Our engineers build and automate the controls auditors look for, in code, so they stay fixed.",
    tags: ["Logging", "Encryption", "Backups", "Access"],
    panel: {
      title: "What we put in place",
      checklist: ["Centralized logging and retention", "Encryption at rest and in transit", "Tested backups and recovery", "Least privilege access", "Controls defined in Terraform"],
    },
  },
  overview: {
    eyebrow: "Overview",
    title: "Close the Gap Between Policy and Platform",
    paragraphs: [
      "Your policies say logs are retained, data is encrypted and backups are tested. The auditor will check that your infrastructure actually does it.",
      "We implement those controls directly in your cloud, preferably as code, so they're consistent across environments and your GRC platform's automated tests pass and keep passing.",
    ],
  },
  inclusions: {
    eyebrow: "What's included",
    title: "The Controls Auditors Test",
    items: [
      { icon: ScrollText, title: "Logging & Monitoring", body: "Audit logs enabled, centralized and retained." },
      { icon: Lock, title: "Encryption", body: "Data encrypted at rest and in transit, with keys managed." },
      { icon: Archive, title: "Backups", body: "Automated backups with restore tests documented." },
      { icon: KeyRound, title: "Access Control", body: "Least privilege IAM and MFA on administrative access." },
      { icon: FileCode2, title: "Infrastructure as Code", body: "Controls defined in Terraform so they don't drift." },
      { icon: ScanSearch, title: "Failing Tests Fixed", body: "GRC platform infrastructure tests remediated." },
    ],
  },
  phases: devopsPhases,
  why: ctoWhy,
  faqs: [
    { q: "Our GRC platform shows failing infrastructure tests. Can you fix them?", a: "Yes. That's one of the most common reasons clients come to us. We fix the underlying configuration so the tests pass." },
    { q: "Do you use infrastructure as code?", a: "Wherever practical, using Terraform, so controls are repeatable and reviewable." },
    { q: "Which frameworks does this support?", a: "The technical controls for SOC 2, ISO 27001, HIPAA, PCI DSS and similar frameworks overlap heavily, so one build supports them all." },
    { q: "Will changes disrupt production?", a: "Changes are planned, reviewed and rolled out with your team to avoid downtime." },
  ],
  related: [related.cloud, related.devsecops, related.group],
  cta: defaultCta("Make Your Infrastructure", "Audit Ready.", "Book a call and we'll review your failing tests and infrastructure gaps."),
};

export const cloudHardeningPage: ServicePageContent = {
  path: "/cloud-security-hardening",
  seo: {
    title: "Cloud Security Hardening for AWS, Azure & GCP | Com-Sec",
    description:
      "Com-Sec engineers harden your AWS, Azure or GCP environment: IAM, network segmentation, secure defaults, logging and encryption, with changes defined in code.",
    ogTitle: "Cloud Security Hardening | Com-Sec",
    keywords: "cloud security hardening, AWS hardening, Azure hardening, GCP hardening, cloud IAM, cloud network segmentation, cloud security engineering",
    serviceName: "Cloud Security Hardening",
  },
  hero: {
    eyebrow: "CTO, Engineering & DevOps",
    title: "Harden Your Cloud,",
    highlight: "Hands On.",
    description:
      "Knowing what's wrong is half the job. Our engineers fix it: tightening IAM, segmenting networks and setting secure defaults across AWS, Azure and GCP.",
    tags: ["AWS", "Azure", "GCP", "Kubernetes"],
    panel: {
      title: "What we harden",
      checklist: ["IAM roles and permissions", "Network segmentation and exposure", "Secure defaults for storage and compute", "Logging and threat detection", "Kubernetes and container settings"],
    },
  },
  overview: {
    eyebrow: "Overview",
    title: "From Findings to Fixes",
    paragraphs: [
      "Cloud reviews and compliance tools produce findings. Turning them into safe, tested changes takes engineering time most teams don't have.",
      "We do the work in your environment, with your team, preferably as code, so the hardening is repeatable and doesn't drift back.",
    ],
  },
  inclusions: {
    eyebrow: "What's included",
    title: "Cloud Hardening Coverage",
    items: [
      { icon: KeyRound, title: "IAM Tightening", body: "Excess permissions removed, roles right sized." },
      { icon: Network, title: "Network Segmentation", body: "Environments separated and public exposure reduced." },
      { icon: HardDrive, title: "Secure Storage", body: "Buckets, databases and disks locked down and encrypted." },
      { icon: ScrollText, title: "Logging & Detection", body: "Cloud audit logs and native threat detection enabled." },
      { icon: Boxes, title: "Kubernetes", body: "Cluster and workload security settings hardened." },
      { icon: FileCode2, title: "Infrastructure as Code", body: "Changes captured in Terraform." },
    ],
  },
  phases: devopsPhases,
  why: ctoWhy,
  faqs: [
    { q: "Do we need a cloud security review first?", a: "It helps. A review gives a prioritized list, and we can run one, but we can also start from your GRC platform findings or a previous report." },
    { q: "Which clouds do you work with?", a: "AWS, Azure and GCP, plus Kubernetes." },
    { q: "Will you make changes directly?", a: "With your approval, yes. We plan changes with your team and roll them out safely." },
    { q: "How is this priced?", a: "As part of DevOps & DevSecOps support, scoped by hours each month. Book a call and we'll scope it." },
  ],
  related: [{ label: "Cloud Security Review", to: "/cloud-security-review", body: "Find the issues first with a review of your cloud." }, related.infra, related.group],
  cta: defaultCta("Get Your Cloud", "Hardened.", "Book a call and we'll scope the hardening work for your environment."),
};

export const devsecopsPage: ServicePageContent = {
  path: "/devsecops",
  seo: {
    title: "DevSecOps & CI/CD Pipeline Security Services | Com-Sec",
    description:
      "Com-Sec builds security into your CI/CD pipelines: code and dependency scanning, secrets management, infrastructure as code checks and secure release practices.",
    ogTitle: "DevSecOps & CI/CD Security | Com-Sec",
    keywords: "DevSecOps, CI/CD security, pipeline security, SAST, dependency scanning, SCA, secrets management, secure SDLC",
    serviceName: "DevSecOps & CI/CD Security",
  },
  hero: {
    eyebrow: "CTO, Engineering & DevOps",
    title: "Security Built Into",
    highlight: "Every Release.",
    description:
      "Catch vulnerabilities before they ship. Com-Sec adds code scanning, dependency checks and secrets management to your pipelines, tuned so developers trust the results.",
    tags: ["Code scanning", "Dependencies", "Secrets", "CI/CD"],
    panel: {
      title: "What we add",
      checklist: ["Static code analysis in pull requests", "Dependency and supply chain scanning", "Secrets detection and a secrets manager", "Infrastructure as code checks", "Change approval evidence for audits"],
    },
  },
  overview: {
    eyebrow: "Overview",
    title: "Shift Security Left Without Slowing Down",
    paragraphs: [
      "The cheapest time to fix a vulnerability is before it's merged. The hardest part is tuning tools so developers aren't buried in noise.",
      "We set up scanning, secrets management and release guardrails in the pipelines you already use, and tune them so the findings that block a merge are the ones that matter.",
    ],
  },
  inclusions: {
    eyebrow: "What's included",
    title: "A Secure Pipeline",
    items: [
      { icon: Code2, title: "Code Scanning", body: "Static analysis on every pull request." },
      { icon: Boxes, title: "Dependency Scanning", body: "Vulnerable and risky open source packages flagged." },
      { icon: KeyRound, title: "Secrets Management", body: "Hardcoded secrets removed and moved to a secrets manager." },
      { icon: FileCode2, title: "IaC Scanning", body: "Terraform and container configurations checked before deploy." },
      { icon: GitBranch, title: "Release Guardrails", body: "Branch protection, reviews and approvals enforced." },
      { icon: ScrollText, title: "Audit Evidence", body: "Change management records ready for SOC 2 and ISO 27001." },
    ],
  },
  phases: devopsPhases,
  why: ctoWhy,
  faqs: [
    { q: "Which CI/CD platforms do you work with?", a: "Common platforms such as GitHub Actions, GitLab CI and other pipelines you already use." },
    { q: "Will this slow our developers down?", a: "Not if it's tuned well. We start in report only mode, reduce noise, then block only on findings that matter." },
    { q: "Does this help with SOC 2 change management?", a: "Yes. Pull request reviews, approvals and scan results become evidence for change management controls." },
    { q: "Do you fix the findings too?", a: "We can. Application and infrastructure hardening is part of our DevOps support." },
  ],
  related: [related.hardening, related.infra, related.group],
  cta: defaultCta("Ship Secure Code", "by Default.", "Book a call and we'll review your pipelines and plan the security tooling."),
};

export const appInfraHardeningPage: ServicePageContent = {
  path: "/application-infrastructure-hardening",
  seo: {
    title: "Application & Infrastructure Hardening (Remediation Engineering) | Com-Sec",
    description:
      "Com-Sec engineers fix the findings: code, configuration and architecture changes that close pen test, scanner and audit findings across your application and infrastructure.",
    ogTitle: "Application & Infrastructure Hardening | Com-Sec",
    keywords: "application hardening, infrastructure hardening, vulnerability remediation, pen test remediation, secure configuration, security engineering",
    serviceName: "Application & Infrastructure Hardening",
  },
  hero: {
    eyebrow: "CTO, Engineering & DevOps",
    title: "We Don't Just Find It.",
    highlight: "We Help Fix It.",
    description:
      "Pen tests, scanners and audits produce findings. Our engineers make the code, configuration and architecture changes that close them, alongside your team.",
    tags: ["Code fixes", "Configuration", "Architecture", "Verified"],
    panel: {
      title: "Typical work",
      checklist: ["Fixing pen test findings", "Closing vulnerability scan results", "Hardening server and service configuration", "Architecture changes for security", "Verifying each fix"],
    },
  },
  overview: {
    eyebrow: "Overview",
    title: "Findings Don't Fix Themselves",
    paragraphs: [
      "Security reports often sit in a backlog because the team that owns the roadmap doesn't have time or the specific expertise to fix them.",
      "We take findings off your plate, or pair with your engineers, to make safe, reviewed changes and confirm each one is resolved.",
    ],
  },
  inclusions: {
    eyebrow: "What's included",
    title: "Hands On Remediation",
    items: [
      { icon: Code2, title: "Application Fixes", body: "Code changes for access control, input handling and auth issues." },
      { icon: Server, title: "Configuration Hardening", body: "Servers, services and headers set to secure baselines." },
      { icon: Layers, title: "Architecture Changes", body: "Design changes when a finding can't be patched away." },
      { icon: Wrench, title: "Dependency Upgrades", body: "Vulnerable libraries upgraded safely." },
      { icon: Search, title: "Verification", body: "Every fix checked, and retested by our pen testers if needed." },
      { icon: Rocket, title: "Knowledge Transfer", body: "Your team learns the pattern so it doesn't recur." },
    ],
  },
  phases: devopsPhases,
  why: ctoWhy,
  faqs: [
    { q: "Can you fix findings from another firm's report?", a: "Yes. We work from any pen test, scanner or audit report." },
    { q: "Do you work in our codebase?", a: "With your approval, yes, through your normal pull request and review process." },
    { q: "How do we know the fix worked?", a: "We verify every fix, and our pen testers can retest and update the report." },
    { q: "How is this scoped?", a: "As part of DevOps & DevSecOps support, by hours each month." },
  ],
  related: [{ label: "Retesting & Remediation Verification", to: "/penetration-retesting", body: "Confirm fixes and close findings cleanly." }, related.devsecops, related.group],
  cta: defaultCta("Clear Your Security", "Backlog.", "Book a call and share your findings. We'll scope the remediation work."),
};

export const technicalIrPage: ServicePageContent = {
  path: "/technical-incident-response",
  seo: {
    title: "Technical Incident Response: Containment, Investigation & Recovery | Com-Sec",
    description:
      "When something goes wrong, Com-Sec engineers contain the incident, investigate what happened, recover systems and fix the root cause across your cloud and applications.",
    ogTitle: "Technical Incident Response | Com-Sec",
    keywords: "technical incident response, incident containment, security incident investigation, cloud incident response, AWS account compromise, recovery, root cause analysis",
    serviceName: "Technical Incident Response",
  },
  hero: {
    eyebrow: "CTO, Engineering & DevOps",
    title: "Hands On Help",
    highlight: "When It Matters Most.",
    description:
      "During an incident you need engineers who can act, not just advise. Com-Sec contains the threat, investigates what happened, restores your systems and fixes the root cause.",
    tags: ["Containment", "Investigation", "Recovery", "Root cause"],
    panel: {
      title: "What we do",
      checklist: ["Contain the threat and stop the spread", "Preserve evidence and investigate", "Recover systems and data", "Fix the root cause", "Document for leadership, customers and auditors"],
    },
  },
  overview: {
    eyebrow: "Overview",
    title: "Technical Response, Not Just a Plan",
    paragraphs: [
      "An incident response plan tells you who to call. Technical response is what happens next: rotating credentials, isolating systems, reading logs and getting back online safely.",
      "Our engineers work in your cloud and applications to contain and resolve the incident, then help you harden so it doesn't happen again.",
    ],
    callout: { title: "Planning ahead?", body: "Our Incident Response & Resilience service covers IR plans, playbooks and tabletop exercises before anything goes wrong." },
  },
  inclusions: {
    eyebrow: "What's included",
    title: "From First Alert to Lessons Learned",
    items: [
      { icon: Siren, title: "Containment", body: "Isolate affected systems, revoke access and rotate credentials." },
      { icon: Search, title: "Investigation", body: "Logs and evidence reviewed to establish what happened." },
      { icon: Archive, title: "Recovery", body: "Systems and data restored safely." },
      { icon: Wrench, title: "Root Cause Fixes", body: "The underlying weakness fixed, not just the symptom." },
      { icon: ScrollText, title: "Documentation", body: "A clear incident record for leadership, customers and auditors." },
      { icon: ShieldCheck, title: "Hardening", body: "Follow up improvements to prevent a repeat." },
    ],
  },
  phases: {
    eyebrow: "How it works",
    title: "How We Respond",
    steps: [
      { title: "Contain", body: "Stop the damage spreading.", points: ["Access revoked", "Systems isolated"] },
      { title: "Investigate", body: "Find out what happened.", points: ["Logs reviewed", "Scope confirmed"] },
      { title: "Recover", body: "Get back to normal safely.", points: ["Systems restored", "Monitoring increased"] },
      { title: "Improve", body: "Fix the root cause.", points: ["Hardening", "Lessons learned"] },
    ],
  },
  why: ctoWhy,
  faqs: [
    { q: "Are you available during an active incident?", a: "Existing clients get incident response as part of their support. If you're not a client and have an active incident, contact us right away and we'll tell you how quickly we can help." },
    { q: "What kinds of incidents do you handle?", a: "Cloud account compromises, exposed credentials, compromised endpoints, application breaches and similar technical incidents." },
    { q: "Do you help with breach notifications?", a: "We provide the technical facts and documentation. Our vCISO and compliance team can guide notification requirements such as HIPAA, GDPR or contractual obligations." },
    { q: "How is this different from your SOC monitoring?", a: "SOC monitoring detects and triages alerts. Technical incident response is the hands on engineering work to contain and recover once an incident is confirmed." },
  ],
  related: [{ label: "Incident Response & Resilience", to: "/incident-response-resilience", body: "IR plans, playbooks and tabletop exercises." }, { label: "Security Operations & Monitoring", to: "/soc-support", body: "24/7 detection and alert triage." }, related.hardening],
  cta: defaultCta("Be Ready Before", "Something Goes Wrong.", "Book a call to set up incident response support. If you have an active incident, contact us now."),
};
