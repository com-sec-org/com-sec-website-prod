import { BadgeCheck, ClipboardCheck, FileSearch, FileText, Handshake, ListChecks, Scale, Wrench } from "lucide-react";
import type { ServicePageContent } from "@/components/service-page/types";
import { defaultCta, grcPlatforms, whyComSec } from "./common";

// Sources: standalone "Internal Audit Service" sections of the ISO 27001 (file 4) and
// ISO 42001 (file 18) one pagers, and Audit Readiness one pager (file 1). No pricing.

export const internalAuditsPage: ServicePageContent = {
  path: "/internal-audits",
  seo: {
    title: "ISO 27001 & ISO 42001 Internal Audit Services | Com-Sec",
    description:
      "Independent ISO 27001 and ISO 42001 internal audits by Com-Sec: every clause and Annex A control tested, a clear findings report, and corrective action support before your certification audit.",
    ogTitle: "ISO 27001 & ISO 42001 Internal Audits | Com-Sec",
    keywords: "ISO 27001 internal audit, ISO 42001 internal audit, internal audit services, ISMS internal audit, AIMS internal audit, nonconformity, Annex A",
    serviceName: "ISO 27001 & ISO 42001 Internal Audits",
  },
  hero: {
    eyebrow: "Audit Readiness",
    title: "An Independent Internal Audit",
    highlight: "Before the Auditor Arrives.",
    description:
      "ISO 27001 and ISO 42001 require an internal audit by someone independent of the work. Com-Sec tests your management system end to end and gives you a clear list of what to fix.",
    tags: ["ISO 27001", "ISO 42001", "Annex A", "Corrective actions"],
    panel: {
      title: "Every internal audit includes",
      checklist: [
        "Every clause and Annex A control tested",
        "Help collecting and fixing evidence",
        "A detailed report with nonconformities and priorities",
        "Corrective action and closure support",
        "Coordination with your certification body",
      ],
    },
  },
  overview: {
    eyebrow: "Why it matters",
    title: "A Required Step, and Your Best Rehearsal",
    paragraphs: [
      "Clause 9.2 of both ISO 27001 and ISO 42001 requires a planned internal audit, carried out by someone objective and impartial. Small teams often have no one independent enough to do it.",
      "We run the audit for you, available on its own or ahead of certification. You get findings while there's still time to fix them, and evidence that the requirement was met.",
    ],
    callout: {
      title: "Already certified?",
      body: "Internal audits are required every year, not just before certification. We run them annually to keep surveillance audits routine.",
    },
  },
  inclusions: {
    eyebrow: "What's included",
    title: "A Thorough, Independent Audit",
    items: [
      { icon: ListChecks, title: "Full Control Review", body: "Every management system clause and Annex A control tested." },
      { icon: FileSearch, title: "Evidence Support", body: "Help collecting and fixing control evidence during the audit." },
      { icon: FileText, title: "Detailed Audit Report", body: "Findings, nonconformities, observations and priorities." },
      { icon: Wrench, title: "Nonconformity Remediation", body: "Corrective actions planned and closure supported." },
      { icon: BadgeCheck, title: "Certification Support", body: "Introductions to accredited audit partners if you need one." },
      { icon: Handshake, title: "Auditor Liaison", body: "We coordinate with your certification body." },
    ],
  },
  phases: {
    eyebrow: "How it works",
    title: "How the Audit Runs",
    steps: [
      { title: "Plan", body: "Agree scope, criteria and schedule.", points: ["Audit plan", "Document request"] },
      { title: "Review", body: "Documents and records examined.", points: ["Policies and SoA", "Risk records"] },
      { title: "Test", body: "Interviews and control sampling.", points: ["Clauses 4 to 10", "Annex A controls"] },
      { title: "Report & Close", body: "Findings and corrective actions.", points: ["Audit report", "Closure support"] },
    ],
  },
  structure: {
    eyebrow: "Standards we audit",
    title: "ISO 27001 and ISO 42001",
    description: "Both standards share the same management system clauses, so integrated audits are efficient.",
    columns: [
      {
        heading: "ISO 27001:2022",
        caption: "Information Security Management System",
        items: [
          { code: "4 to 10", label: "Management system clauses" },
          { code: "93", label: "Annex A controls across organizational, people, physical and technological themes" },
          { code: "SoA", label: "Statement of Applicability reviewed" },
        ],
      },
      {
        heading: "ISO/IEC 42001:2023",
        caption: "AI Management System",
        items: [
          { code: "4 to 10", label: "Management system clauses" },
          { code: "38", label: "Annex A controls on AI risk, impacts, data and lifecycle" },
          { code: "AIIA", label: "AI impact assessments reviewed" },
        ],
      },
    ],
  },
  platforms: grcPlatforms,
  why: whyComSec,
  faqs: [
    { q: "Is an internal audit required for ISO 27001 and ISO 42001?", a: "Yes. Clause 9.2 of both standards requires planned internal audits. Certification bodies check that one was completed before the Stage 2 audit and every year after." },
    { q: "Can our own staff do the internal audit?", a: "Only if they're competent and independent of the areas they audit. In small teams that's rarely possible, which is why many companies use an outside auditor." },
    { q: "Do you also issue the certificate?", a: "No. Certification must come from an accredited certification body, independent of us. We can introduce you to accredited partners." },
    { q: "Can you audit both standards together?", a: "Yes. Because the clauses are shared, an integrated ISO 27001 and ISO 42001 internal audit saves time." },
    { q: "Do we need Com-Sec's readiness service to buy an internal audit?", a: "No. The internal audit is available as a standalone service." },
  ],
  related: [
    { label: "ISO 27001 Certification", to: "/iso27001", body: "Build and certify your ISMS with Com-Sec." },
    { label: "ISO 42001 Certification", to: "/iso42001", body: "Build and certify your AI management system." },
    { label: "Audit Readiness & Certification", to: "/compliance-audit-service", body: "Every framework we prepare you for." },
  ],
  cta: defaultCta("Book Your", "Internal Audit.", "Book a call to schedule an independent ISO 27001 or ISO 42001 internal audit, on its own or ahead of certification."),
};
