import {
  Activity,
  AppWindow,
  Boxes,
  Building2,
  ClipboardCheck,
  ClipboardList,
  Fingerprint,
  Gauge,
  Headphones,
  KeyRound,
  Laptop,
  LifeBuoy,
  Lock,
  Mail,
  Package,
  Radar,
  RefreshCw,
  Rocket,
  ScanSearch,
  ShieldCheck,
  Siren,
  Trash2,
  UserMinus,
  UserPlus,
  Users,
  Wrench,
} from "lucide-react";
import type { ServicePageContent } from "@/components/service-page/types";
import { defaultCta, whyComSec } from "./common";

// Managed Security & IT. Sources: "Managed Security, Compliance & IT One Pager" (file 11),
// "SOC 2 Maintenance Plans One Pager" Advanced tier (file 13), Services Booklet p. 6.
// Specific resold tools are not named until confirmed (open question).

const related = {
  group: { label: "Managed Security & IT", to: "/managed-security-it", body: "Monitoring, endpoints, access and IT, managed for you." },
  soc: { label: "Security Operations & Monitoring", to: "/soc-support", body: "24/7 SOC monitoring, threat detection and response." },
  endpoint: { label: "Endpoint & Device Management", to: "/endpoint-device-management", body: "MDM and EDR rollout, monitoring and device lifecycle." },
  iam: { label: "Identity & Access Management", to: "/identity-access-management", body: "SSO, MFA, provisioning and access reviews." },
  vuln: { label: "Vulnerability & Patch Management", to: "/vulnerability-patch-management", body: "Scanning, prioritization and fixes tracked to closure." },
  onboarding: { label: "Employee Onboarding & Offboarding", to: "/employee-onboarding-offboarding", body: "Accounts, devices and access handled with records kept." },
  saas: { label: "SaaS & Asset Management", to: "/saas-asset-management", body: "Apps, licenses and hardware inventory kept current." },
  it: { label: "IT Support", to: "/it-support", body: "Day to day IT help for your team, run by a security first MSP." },
};

const mspCallout = {
  title: "Your MSP, or Your IT Team's Partner",
  body: "Com-Sec operates as a Managed Service Provider. We work alongside your internal IT team, or act as your IT team if you don't have one.",
};

export const managedSecurityItPage: ServicePageContent = {
  path: "/managed-security-it",
  seo: {
    title: "Managed Security, Compliance & IT Services (MSP / MSSP) | Com-Sec",
    description:
      "Com-Sec is a security first MSP. We run 24/7 monitoring, endpoints, identity, patching, onboarding and IT support for your team, with SOC 2, ISO 27001 and HIPAA evidence built in.",
    ogTitle: "Managed Security, Compliance & IT | Com-Sec",
    keywords: "managed security services, MSP, MSSP, managed IT services, security first MSP, managed SOC, endpoint management, IT support for startups",
    serviceName: "Managed Security, Compliance & IT",
  },
  hero: {
    eyebrow: "Managed Security & IT",
    title: "A Full Security and IT Team,",
    highlight: "Without the Hiring.",
    description:
      "Most growing companies can't staff a 24/7 security team. Com-Sec runs your security operations and day to day IT for you, while SOC 2, ISO 27001 and HIPAA evidence keeps building in the background.",
    tags: ["MSP & MSSP", "24/7 monitoring", "Endpoints & identity", "IT support"],
    panel: {
      title: "What we run for you",
      checklist: [
        "24/7 SOC monitoring and threat detection",
        "Endpoints: MDM, EDR and device lifecycle",
        "Identity: SSO, MFA and access reviews",
        "Vulnerability scanning and patching",
        "Onboarding, offboarding and IT support",
      ],
      footnote: "Every alert and action is logged as audit evidence.",
    },
  },
  overview: {
    eyebrow: "How we work",
    title: "A Security First Managed Service Provider",
    paragraphs: [
      "Com-Sec operates as an MSP and MSSP in one. We take ownership of the security and IT work that keeps your company running: monitoring, devices, access, patching, onboarding and support.",
      "Because we're a security and compliance firm first, everything we run is built to pass an audit. Logs are retained, access is reviewed, devices are compliant, and the records land in your GRC platform automatically.",
    ],
    callout: mspCallout,
  },
  audiences: {
    eyebrow: "Who it's for",
    title: "Built for Teams Like Yours",
    items: [
      { icon: Rocket, title: "Startups Without IT", body: "You need laptops, accounts and security handled properly, without hiring an IT department." },
      { icon: Users, title: "Lean IT Teams", body: "Your IT team is stretched. We take the security operations and audit work off their plate." },
      { icon: ShieldCheck, title: "Companies Under Audit", body: "SOC 2, ISO 27001 or HIPAA needs controls that run every day, not just before the audit." },
      { icon: Building2, title: "Scaling Companies", body: "Headcount is growing fast and onboarding, devices and access need a repeatable process." },
    ],
  },
  inclusions: {
    eyebrow: "What we manage",
    title: "Everything Under One Roof",
    items: [
      { icon: Radar, title: "Security Operations", body: "24/7 SOC monitoring of cloud, endpoints and identity, with alert triage and escalation." },
      { icon: Laptop, title: "Endpoints & Devices", body: "MDM and EDR deployed and monitored, with device lifecycle managed end to end." },
      { icon: KeyRound, title: "Identity & Access", body: "SSO, MFA, provisioning and regular access reviews." },
      { icon: ScanSearch, title: "Vulnerabilities & Patching", body: "Scanning, prioritization and fixes tracked to closure." },
      { icon: UserPlus, title: "Onboarding & Offboarding", body: "Accounts, devices and access handled for every joiner and leaver." },
      { icon: AppWindow, title: "SaaS & Assets", body: "Business apps, licenses and hardware inventory kept current." },
      { icon: Mail, title: "Email Security", body: "Protection against phishing, spoofing and malware." },
      { icon: Headphones, title: "IT Support", body: "Day to day help for your team, plus incident response with root cause analysis." },
    ],
  },
  phases: {
    eyebrow: "How it works",
    title: "From Onboarding to Monthly Reporting",
    steps: [
      { title: "Onboard", body: "We connect your tools and set baselines.", points: ["Systems and access reviewed", "Monitoring connected"] },
      { title: "Monitor", body: "Around the clock watch on your environment.", points: ["24/7 SOC", "Log analysis"] },
      { title: "Respond", body: "Threats contained and issues fixed fast.", points: ["Incident response", "Root cause analysis"] },
      { title: "Report", body: "Clear monthly reviews and audit evidence.", points: ["Monthly security reports", "Evidence in your GRC platform"] },
    ],
  },
  why: [
    { icon: ShieldCheck, title: "Compliance Built In", body: "Every alert, review and change is logged as evidence for your audits." },
    { icon: Users, title: "Named Security Contact", body: "A named contact for your team, with a dedicated analyst at higher tiers." },
    { icon: Gauge, title: "Scales With You", body: "Start with monitoring and add devices, identity and IT support as you grow." },
  ],
  faqs: [
    { q: "Are you an MSP or an MSSP?", a: "Both. We manage day to day IT like devices, accounts and support, and we run security operations like 24/7 monitoring and incident response." },
    { q: "Do you replace our IT team?", a: "Only if you want us to. We can act as your whole IT team, or work alongside your internal IT staff and take on security and compliance work." },
    { q: "How does this help with SOC 2 or ISO 27001?", a: "The controls auditors test, such as access reviews, device compliance, logging and onboarding records, are run by us every day and recorded as evidence." },
    { q: "Do you provide the security tools?", a: "We deploy and manage the tools you need, including MDM, EDR, identity and email security, and can work with tools you already own." },
    { q: "Can we start small?", a: "Yes. Many clients start with monitoring and response, then add endpoints, identity, patching and IT support as they grow." },
  ],
  related: [related.soc, related.it, { label: "Fractional Security Leadership", to: "/fractional-security-leadership", body: "Pair managed operations with a vCISO who owns your strategy." }],
  cta: defaultCta("Get a Security and IT Team", "Without the Hiring.", "Book a call and we'll map out what we'd manage for you, and how it fits with any IT team you already have."),
};

export const endpointDevicePage: ServicePageContent = {
  path: "/endpoint-device-management",
  seo: {
    title: "Endpoint & Device Management (MDM & EDR) | Com-Sec",
    description:
      "Com-Sec rolls out and manages MDM and EDR across your laptops and devices, with zero touch setup, compliance monitoring, lifecycle management and secure wipe.",
    ogTitle: "Endpoint & Device Management | Com-Sec",
    keywords: "endpoint management, device management, MDM, EDR, zero touch deployment, device compliance, laptop management, endpoint security",
    serviceName: "Endpoint & Device Management",
  },
  hero: {
    eyebrow: "Managed Security & IT",
    title: "Every Laptop Secured,",
    highlight: "From Unboxing to Retirement.",
    description:
      "Com-Sec deploys and manages MDM and EDR across your devices, keeps them compliant, and handles the full lifecycle, so every endpoint is protected and audit ready.",
    tags: ["MDM", "EDR", "Zero touch setup", "Secure wipe"],
    panel: {
      title: "What we manage",
      checklist: [
        "MDM rollout and policy enforcement",
        "EDR deployment and monitoring",
        "Zero touch setup for new devices",
        "Encryption, updates and screen lock checks",
        "Device return and secure wipe",
      ],
    },
  },
  overview: {
    eyebrow: "Overview",
    title: "Devices Are Where Work Happens",
    paragraphs: [
      "Laptops carry your source code, customer data and credentials. Auditors check that every device is encrypted, updated and protected, and attackers check too.",
      "We put every device under management, enforce your security baseline, watch for threats with EDR, and handle the device lifecycle from procurement to secure wipe.",
    ],
    callout: mspCallout,
  },
  inclusions: {
    eyebrow: "What's included",
    title: "Full Device Lifecycle",
    items: [
      { icon: Laptop, title: "MDM Rollout", body: "Mac and Windows devices enrolled and managed with security policies enforced." },
      { icon: ShieldCheck, title: "EDR Protection", body: "Endpoint detection and response deployed, tuned and monitored." },
      { icon: Rocket, title: "Zero Touch Setup", body: "New devices arrive ready to work with apps and policies applied." },
      { icon: ClipboardCheck, title: "Compliance Monitoring", body: "Encryption, OS updates, firewall and screen lock checked continuously." },
      { icon: Package, title: "Procurement & Inventory", body: "Device ordering support and an accurate hardware inventory." },
      { icon: Trash2, title: "Secure Wipe", body: "Devices recovered and wiped when people leave, with records kept." },
    ],
  },
  phases: {
    eyebrow: "How it works",
    title: "How We Roll It Out",
    steps: [
      { title: "Inventory", body: "Find every device in use.", points: ["Hardware list", "Current gaps"] },
      { title: "Baseline", body: "Agree the security settings.", points: ["Policies defined", "Exceptions documented"] },
      { title: "Deploy", body: "Enroll devices with minimal disruption.", points: ["MDM and EDR", "Staff guidance"] },
      { title: "Manage", body: "Ongoing monitoring and lifecycle.", points: ["Compliance checks", "Joiners and leavers"] },
    ],
  },
  why: whyComSec,
  faqs: [
    { q: "What's the difference between MDM and EDR?", a: "MDM manages a device's settings, apps and compliance. EDR watches the device for malicious activity and helps respond to it. Most companies need both." },
    { q: "Do you support Mac and Windows?", a: "Yes. We manage mixed fleets of macOS and Windows devices." },
    { q: "Will this slow our team down?", a: "No. Rollouts are planned to avoid disruption, and zero touch setup means new hires get a ready to use laptop on day one." },
    { q: "Does this help with audits?", a: "Yes. Device encryption, updates and endpoint protection are common SOC 2, ISO 27001 and HIPAA controls, and our records serve as evidence." },
  ],
  related: [related.onboarding, related.vuln, related.group],
  cta: defaultCta("Get Every Device", "Under Control.", "Book a call and we'll review your fleet and plan an MDM and EDR rollout that fits your team."),
};

export const identityAccessPage: ServicePageContent = {
  path: "/identity-access-management",
  seo: {
    title: "Identity & Access Management (SSO, MFA, Access Reviews) | Com-Sec",
    description:
      "Com-Sec manages identity and access for your team: SSO and MFA rollout, provisioning, least privilege, privileged access and quarterly access reviews for SOC 2 and ISO 27001.",
    ogTitle: "Identity & Access Management | Com-Sec",
    keywords: "identity and access management, IAM, SSO, MFA, access reviews, user provisioning, least privilege, privileged access management",
    serviceName: "Identity & Access Management",
  },
  hero: {
    eyebrow: "Managed Security & IT",
    title: "The Right Access for",
    highlight: "the Right People.",
    description:
      "Stolen credentials are the most common way in. Com-Sec rolls out SSO and MFA, manages who has access to what, and runs the access reviews your auditors expect.",
    tags: ["SSO", "MFA", "Provisioning", "Access reviews"],
    panel: {
      title: "What we manage",
      checklist: [
        "SSO and MFA across your business apps",
        "Account provisioning and removal",
        "Least privilege and role based access",
        "Privileged and admin access controls",
        "Quarterly access reviews",
      ],
    },
  },
  overview: {
    eyebrow: "Overview",
    title: "Access Is Your New Perimeter",
    paragraphs: [
      "Your team works from many apps and many places. Identity, meaning who can log in to what, is now the main control between attackers and your data.",
      "We centralize sign in with SSO, enforce MFA, keep access matched to each person's role, and review it on a schedule, with every change recorded for your audits.",
    ],
    callout: mspCallout,
  },
  inclusions: {
    eyebrow: "What's included",
    title: "Identity, Handled End to End",
    items: [
      { icon: KeyRound, title: "SSO Rollout", body: "Single sign on connected across your business applications." },
      { icon: Fingerprint, title: "MFA Everywhere", body: "Multi factor authentication enforced, with phishing resistant options where possible." },
      { icon: UserPlus, title: "Provisioning", body: "Accounts created and removed based on role, quickly and consistently." },
      { icon: Lock, title: "Least Privilege", body: "Role based access so people only get what their job needs." },
      { icon: ShieldCheck, title: "Privileged Access", body: "Admin and production access limited, approved and monitored." },
      { icon: ClipboardCheck, title: "Access Reviews", body: "Quarterly reviews across critical systems, documented for auditors." },
    ],
  },
  phases: {
    eyebrow: "How it works",
    title: "How We Get There",
    steps: [
      { title: "Map", body: "Who has access to what today.", points: ["App inventory", "Admin accounts found"] },
      { title: "Centralize", body: "SSO and MFA rolled out.", points: ["Staged rollout", "Staff guidance"] },
      { title: "Right Size", body: "Access matched to roles.", points: ["Roles defined", "Excess access removed"] },
      { title: "Review", body: "Kept clean over time.", points: ["Quarterly reviews", "Evidence recorded"] },
    ],
  },
  why: whyComSec,
  faqs: [
    { q: "Which identity providers do you work with?", a: "Common providers such as Google Workspace, Microsoft Entra ID and Okta. We work with what you have or help you choose." },
    { q: "How often should access be reviewed?", a: "Quarterly for critical systems is the common expectation for SOC 2 and ISO 27001, plus immediate removal when someone leaves." },
    { q: "Will rolling out MFA disrupt our team?", a: "We stage the rollout, communicate clearly and support people through enrollment, so disruption is minimal." },
    { q: "What about shared or service accounts?", a: "We inventory them, reduce them where possible, and put controls and ownership around the ones you need." },
  ],
  related: [related.onboarding, related.endpoint, related.group],
  cta: defaultCta("Lock Down Access", "Without Slowing Work.", "Book a call and we'll review your identity setup and plan the SSO, MFA and access review work."),
};

export const vulnerabilityPatchPage: ServicePageContent = {
  path: "/vulnerability-patch-management",
  seo: {
    title: "Vulnerability & Patch Management Services | Com-Sec",
    description:
      "Com-Sec scans your environment, prioritizes vulnerabilities by real risk, patches operating systems and applications, and tracks every fix to closure.",
    ogTitle: "Vulnerability & Patch Management | Com-Sec",
    keywords: "vulnerability management, patch management, vulnerability scanning, risk based prioritization, OS patching, external vulnerability scan",
    serviceName: "Vulnerability & Patch Management",
  },
  hero: {
    eyebrow: "Managed Security & IT",
    title: "Find It. Prioritize It.",
    highlight: "Fix It. Prove It.",
    description:
      "Com-Sec runs your vulnerability and patch program end to end: regular scanning, risk based prioritization, patching, and fixes tracked to closure with evidence for your audits.",
    tags: ["Scanning", "Prioritization", "Patching", "Tracked to closure"],
    panel: {
      title: "What we run",
      checklist: [
        "Internal and external vulnerability scans",
        "Risk based prioritization, not raw CVSS lists",
        "Operating system and application patching",
        "Remediation tracked to closure",
        "Reporting for leadership and auditors",
      ],
    },
  },
  overview: {
    eyebrow: "Overview",
    title: "A Scan Report Isn't a Program",
    paragraphs: [
      "Scanners produce long lists. Without someone to prioritize, assign and verify fixes, the same findings appear month after month and auditors notice.",
      "We run the full loop: scan, decide what matters most for your business, patch or hand fixes to your engineers, then rescan to confirm the issue is gone.",
    ],
    callout: mspCallout,
  },
  inclusions: {
    eyebrow: "What's included",
    title: "The Full Remediation Loop",
    items: [
      { icon: ScanSearch, title: "Vulnerability Scanning", body: "Scheduled scans of endpoints, servers, cloud and external facing assets." },
      { icon: Gauge, title: "Risk Prioritization", body: "Findings ranked by exploitability and business impact." },
      { icon: RefreshCw, title: "Patching", body: "OS and third party application patches applied on a regular cycle." },
      { icon: Wrench, title: "Remediation Support", body: "Clear fix guidance for issues that need engineering changes." },
      { icon: ClipboardList, title: "Tracked to Closure", body: "Every finding has an owner and a due date until it's verified fixed." },
      { icon: Activity, title: "Reporting", body: "Trends and SLA performance for leadership and audit evidence." },
    ],
  },
  phases: {
    eyebrow: "How it works",
    title: "How the Cycle Runs",
    steps: [
      { title: "Scan", body: "Regular scans across your environment.", points: ["Internal and external", "Asset coverage checked"] },
      { title: "Prioritize", body: "Focus on what's exploitable.", points: ["Risk ranking", "Owners assigned"] },
      { title: "Remediate", body: "Patch and fix.", points: ["Patch cycles", "Engineering fixes"] },
      { title: "Verify", body: "Rescan and record.", points: ["Fix confirmed", "Evidence kept"] },
    ],
  },
  why: whyComSec,
  faqs: [
    { q: "How often do you scan?", a: "Scan frequency is set by your risk and frameworks. Monthly internal scans and regular external scans are common, and PCI DSS requires quarterly ASV scans." },
    { q: "Is this the same as a penetration test?", a: "No. Scanning finds known weaknesses automatically and often. A penetration test is a manual, expert led attack simulation. Most programs need both." },
    { q: "Who applies the patches?", a: "We patch managed endpoints and systems directly, and give your engineers clear guidance for fixes that need code or infrastructure changes." },
    { q: "Does this satisfy audit requirements?", a: "Yes. Scan results, remediation timelines and verification records are the evidence SOC 2, ISO 27001, HIPAA and PCI DSS auditors look for." },
  ],
  related: [{ label: "Penetration Testing", to: "/penetration-testing-services", body: "Expert led testing that finds what scanners miss." }, related.endpoint, related.group],
  cta: defaultCta("Stop Seeing the Same", "Findings Every Month.", "Book a call and we'll show you how we'd run scanning, patching and remediation for your environment."),
};

export const onboardingOffboardingPage: ServicePageContent = {
  path: "/employee-onboarding-offboarding",
  seo: {
    title: "Employee Onboarding & Offboarding (IT & Security) | Com-Sec",
    description:
      "Com-Sec handles accounts, devices, access, background checks and policy acknowledgments for every new hire and leaver, with records kept for SOC 2, ISO 27001 and HIPAA.",
    ogTitle: "Employee Onboarding & Offboarding | Com-Sec",
    keywords: "employee onboarding, employee offboarding, IT onboarding, access removal, device return, background checks, policy acknowledgment, SOC 2 onboarding",
    serviceName: "Employee Onboarding & Offboarding",
  },
  hero: {
    eyebrow: "Managed Security & IT",
    title: "Day One Ready.",
    highlight: "Last Day Locked Down.",
    description:
      "Com-Sec runs IT and security onboarding and offboarding for your team: accounts, devices, access, training and acknowledgments, with every step recorded for your audits.",
    tags: ["Accounts", "Devices", "Access removal", "Records kept"],
    panel: {
      title: "What we handle",
      checklist: [
        "Accounts and access provisioned by role",
        "Laptops set up and shipped ready to use",
        "Background checks, agreements and policy sign off",
        "Security training assigned on day one",
        "Same day access removal and device return",
      ],
    },
  },
  overview: {
    eyebrow: "Overview",
    title: "Two Moments Auditors Always Test",
    paragraphs: [
      "Auditors sample new hires and leavers to check that access was granted correctly and removed on time. Missed steps here are one of the most common audit exceptions.",
      "We run both processes from a checklist built for your tools and frameworks, so nothing is missed and every action is documented.",
    ],
    callout: mspCallout,
  },
  inclusions: {
    eyebrow: "What's included",
    title: "Both Ends of the Employee Lifecycle",
    items: [
      { icon: UserPlus, title: "Account Provisioning", body: "Email, SSO and app accounts created based on role." },
      { icon: Laptop, title: "Device Setup", body: "Laptops configured with security tools and ready on day one." },
      { icon: ClipboardCheck, title: "HR Security Steps", body: "Background checks, confidentiality agreements and code of conduct sign off tracked." },
      { icon: Users, title: "Training & Policies", body: "Security training and policy acknowledgments assigned and completed." },
      { icon: UserMinus, title: "Access Removal", body: "All accounts disabled promptly when someone leaves." },
      { icon: Package, title: "Device Recovery", body: "Devices returned, wiped and recorded in the inventory." },
    ],
  },
  phases: {
    eyebrow: "How it works",
    title: "How It Runs",
    steps: [
      { title: "Notify", body: "HR or a manager tells us who's joining or leaving.", points: ["Role and start or end date", "Systems needed"] },
      { title: "Prepare", body: "We set up or plan removal.", points: ["Accounts and devices", "Checklist created"] },
      { title: "Execute", body: "Steps completed on the day.", points: ["Access granted or removed", "Device shipped or returned"] },
      { title: "Record", body: "Evidence saved for audits.", points: ["Checklist closed", "Records in your GRC platform"] },
    ],
  },
  why: whyComSec,
  faqs: [
    { q: "How fast is access removed when someone leaves?", a: "We remove access on the person's last day, or immediately for unplanned departures, and record the time for your audit trail." },
    { q: "Do you handle remote employees?", a: "Yes. We coordinate shipping devices to new hires and recovering them from leavers, wherever they are." },
    { q: "Can this connect to our HR system?", a: "Yes. We can take requests from your HR tool or a simple form, whichever fits your process." },
    { q: "What records do auditors need?", a: "Proof of access granted by role, completed training and acknowledgments for new hires, and timely access removal for leavers. We keep all of it." },
  ],
  related: [related.iam, related.endpoint, related.group],
  cta: defaultCta("Make Every Hire and Exit", "Audit Ready.", "Book a call and we'll set up an onboarding and offboarding process for your team."),
};

export const saasAssetPage: ServicePageContent = {
  path: "/saas-asset-management",
  seo: {
    title: "SaaS & IT Asset Management Services | Com-Sec",
    description:
      "Com-Sec manages your business SaaS apps, licenses and hardware inventory: admin, renewals, shadow IT discovery and an asset inventory that's ready for audits.",
    ogTitle: "SaaS & Asset Management | Com-Sec",
    keywords: "SaaS management, IT asset management, asset inventory, license management, shadow IT, SaaS administration, Microsoft 365 administration, Google Workspace administration",
    serviceName: "SaaS & Asset Management",
  },
  hero: {
    eyebrow: "Managed Security & IT",
    title: "Know Every App and Device",
    highlight: "You Pay For.",
    description:
      "Com-Sec administers your business apps, tracks licenses and renewals, and keeps an accurate inventory of hardware and software, so nothing is unmanaged, unowned or overpaid.",
    tags: ["SaaS admin", "Licenses", "Asset inventory", "Shadow IT"],
    panel: {
      title: "What we manage",
      checklist: [
        "Administration of your business apps",
        "License tracking and renewals",
        "Hardware and software asset inventory",
        "Shadow IT discovery and review",
      ],
    },
  },
  overview: {
    eyebrow: "Overview",
    title: "You Can't Protect What You Don't Know You Have",
    paragraphs: [
      "Every framework starts with an asset inventory. Yet most growing companies don't know exactly which apps are in use, who owns them, or which laptops are still out there.",
      "We take over administration of your core business apps, keep a live inventory of software and hardware, and flag new tools before they become a security or budget problem.",
    ],
    callout: mspCallout,
  },
  inclusions: {
    eyebrow: "What's included",
    title: "Apps, Licenses and Assets in Order",
    items: [
      { icon: AppWindow, title: "SaaS Administration", body: "Settings, security options and users managed in your core business apps." },
      { icon: ClipboardList, title: "License Management", body: "Seats tracked against people so you stop paying for unused licenses." },
      { icon: RefreshCw, title: "Renewals", body: "Upcoming renewals tracked with owners and review dates." },
      { icon: Boxes, title: "Asset Inventory", body: "Hardware and software inventory kept current for audits." },
      { icon: Radar, title: "Shadow IT Discovery", body: "Unapproved tools found and routed through a review." },
      { icon: Mail, title: "Domain & Email Health", body: "Domain reputation and email authentication settings kept healthy." },
    ],
  },
  phases: {
    eyebrow: "How it works",
    title: "How We Get Organized",
    steps: [
      { title: "Discover", body: "Find every app and device.", points: ["SaaS discovery", "Hardware count"] },
      { title: "Assign", body: "Give everything an owner.", points: ["Owners and costs", "Risk noted"] },
      { title: "Clean Up", body: "Remove what isn't needed.", points: ["Unused seats", "Unapproved tools"] },
      { title: "Maintain", body: "Keep it current.", points: ["Joiners and leavers", "Renewal reviews"] },
    ],
  },
  why: whyComSec,
  faqs: [
    { q: "Which apps do you administer?", a: "Core business tools such as Google Workspace or Microsoft 365, plus the other SaaS apps your team relies on. We agree the list during onboarding." },
    { q: "Why does an asset inventory matter for compliance?", a: "SOC 2, ISO 27001, HIPAA and other frameworks require you to know which assets hold or access sensitive data. It's the base for most other controls." },
    { q: "What is shadow IT?", a: "Apps employees sign up for without approval. They can hold company data without security review, so we find them and route them through a quick review." },
    { q: "Can this save us money?", a: "Often, yes. Matching licenses to active people and reviewing renewals usually uncovers seats and tools you no longer need." },
  ],
  related: [related.endpoint, { label: "Vendor Risk Management", to: "/vendor-risk-management", body: "Security reviews for the vendors behind your apps." }, related.group],
  cta: defaultCta("Get Your Apps and Assets", "Organized.", "Book a call and we'll show you how we'd inventory and manage your apps, licenses and devices."),
};

export const itSupportPage: ServicePageContent = {
  path: "/it-support",
  seo: {
    title: "Managed IT Support for Growing Companies (MSP) | Com-Sec",
    description:
      "Com-Sec is a security first MSP. We provide day to day IT support, device and account management, onboarding and offboarding, working with your IT team or acting as it.",
    ogTitle: "IT Support | Com-Sec",
    keywords: "IT support, managed IT services, MSP, IT helpdesk, outsourced IT, IT support for startups, security first MSP",
    serviceName: "Managed IT Support",
  },
  hero: {
    eyebrow: "Managed Security & IT",
    title: "IT Support From a",
    highlight: "Security First MSP.",
    description:
      "Com-Sec is a Managed Service Provider. We handle day to day IT for your team, working closely with your IT staff or acting as your IT team, and every fix is done the secure, audit ready way.",
    tags: ["Helpdesk", "Devices", "Accounts", "Onboarding"],
    panel: {
      title: "Day to day, we handle",
      checklist: [
        "Help requests from your team",
        "Laptops, accounts and app access",
        "Onboarding and offboarding",
        "Security tool management, such as MDM and endpoint protection",
        "Incident response with root cause analysis",
      ],
    },
  },
  overview: {
    eyebrow: "How we work",
    title: "Your IT Team, or Your IT Team's Backup",
    paragraphs: [
      "Com-Sec operates as an MSP. For companies without IT staff, we are the IT team: your people come to us for help, and we run the devices, accounts and tools behind the scenes.",
      "For companies with an IT team, we work alongside them. We take on the security tooling, compliance tasks and overflow, so your staff can focus on what matters most to the business.",
    ],
    callout: {
      title: "Security and compliance included",
      body: "Unlike a typical IT shop, we're a security and compliance firm. Changes are documented, access is controlled, and records feed your SOC 2, ISO 27001 or HIPAA evidence.",
    },
  },
  inclusions: {
    eyebrow: "What's included",
    title: "Everyday IT, Done Securely",
    items: [
      { icon: Headphones, title: "IT Helpdesk", body: "A clear way for your team to get help with devices, apps and access." },
      { icon: Laptop, title: "Device Management", body: "Laptop setup, procurement support, MDM and endpoint protection." },
      { icon: KeyRound, title: "Accounts & Access", body: "User accounts, SSO, MFA and app access managed by role." },
      { icon: UserPlus, title: "Onboarding & Offboarding", body: "New hires ready on day one and leavers removed on time." },
      { icon: AppWindow, title: "App Administration", body: "Your core business apps such as Microsoft 365 or Google Workspace administered." },
      { icon: Siren, title: "Incident Response", body: "Hands on help when something goes wrong, with root cause analysis." },
      { icon: Wrench, title: "Security Tool Management", body: "We deploy and run the security tools your environment needs." },
      { icon: LifeBuoy, title: "IT & Security Hours", body: "A monthly block of IT and security support hours, scaled to your team." },
    ],
  },
  phases: {
    eyebrow: "How it works",
    title: "Getting Started",
    steps: [
      { title: "Discover", body: "We learn your people, devices and tools.", points: ["Current setup reviewed", "Pain points listed"] },
      { title: "Agree Roles", body: "Who does what, if you have an IT team.", points: ["Responsibilities split", "Escalation paths"] },
      { title: "Take Over", body: "We start handling requests.", points: ["Support channel live", "Tools under management"] },
      { title: "Improve", body: "Fix root causes, not just tickets.", points: ["Monthly reviews", "Security improvements"] },
    ],
  },
  why: [
    { icon: ShieldCheck, title: "Security First", body: "IT run by a security and compliance team, so fixes don't create new risks." },
    { icon: ClipboardCheck, title: "Audit Ready", body: "Changes, access and onboarding records double as audit evidence." },
    { icon: Users, title: "Dedicated Analyst", body: "Priority access to a dedicated Com-Sec analyst at higher tiers." },
  ],
  faqs: [
    { q: "Do you replace our IT team?", a: "Only if you want us to. We can be your whole IT team, or support your existing IT staff with security tooling, compliance work and overflow." },
    { q: "How do employees get help?", a: "Through a support channel agreed during onboarding, so requests are tracked and nothing gets lost." },
    { q: "Do you provide and manage security tools?", a: "Yes. We deploy and manage the tools your environment needs, such as MDM, endpoint protection and identity, and can work with tools you already have." },
    { q: "Is IT support available on its own?", a: "IT support is usually part of our managed security or advanced maintenance plans. Book a call and we'll recommend the right fit." },
  ],
  related: [related.group, related.onboarding, related.endpoint],
  cta: defaultCta("Get IT Support That", "Keeps You Secure.", "Book a call and tell us about your team. We'll explain how we'd support you, with or without an internal IT team."),
};
