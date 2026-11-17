import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Code2,
  FileSearch,
  FileText,
  FolderOpen,
  Layers,
  ListChecks,
  ListTodo,
  Milestone,
  Plug,
  Rocket,
  Settings,
  ShieldCheck,
  Sparkles,
  Truck,
  UserCheck,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const PAGE_URL = "https://com-sec.io/products/shield-grc";
const IMAGE_URL = "https://com-sec.io/images/products/shield-grc-dashboard.webp";
const SEO_TITLE = "Shield GRC | Security & Compliance Management Platform | Com-Sec";
const SEO_DESCRIPTION =
  "Explore Shield GRC by Com-Sec, a platform for managing compliance frameworks, security controls, policies, evidence, risks, and audit readiness.";

const PRIMARY_CTA =
  "inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:from-orange-500 hover:to-orange-600 sm:text-base sm:px-8";
const SECONDARY_CTA =
  "inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-accent/60 sm:text-base sm:px-8";
const DEMO_HREF = "/contact";

const whyCards: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Layers,
    title: "Centralized Compliance Management",
    body: "Manage frameworks, controls, policies, evidence, and audit requirements without switching between multiple tools.",
  },
  {
    icon: Activity,
    title: "Automated Security Monitoring",
    body: "Connect supported cloud platforms and business applications to monitor security configurations, identify failing checks, and track remediation.",
  },
  {
    icon: ClipboardCheck,
    title: "Clear Audit Readiness",
    body: "Understand which controls are ready, what evidence is missing, and which activities need attention before an audit.",
  },
  {
    icon: Users,
    title: "Built for Collaboration",
    body: "Assign tasks, track ownership, manage approvals, and coordinate compliance activities across teams.",
  },
];

const features: {
  icon: LucideIcon;
  title: string;
  intro: string;
  bullets: string[];
}[] = [
  {
    icon: ListChecks,
    title: "Compliance Frameworks & Controls",
    intro: "Organize security and compliance requirements in a centralized workspace.",
    bullets: [
      "View applicable frameworks and requirements.",
      "Track implementation of security controls.",
      "Map controls to relevant policies and evidence.",
      "Identify gaps and monitor remediation progress.",
      "Track readiness across applicable compliance requirements.",
    ],
  },
  {
    icon: FileText,
    title: "Policy Management",
    intro: "Create, review, approve, and maintain organizational security policies.",
    bullets: [
      "Centralized policy library.",
      "Policy approval workflows.",
      "Version history and renewal tracking.",
      "Assigned policy approvers.",
      "Employee policy acknowledgments.",
      "Visibility into outstanding policy actions.",
    ],
  },
  {
    icon: FolderOpen,
    title: "Evidence & Document Management",
    intro: "Keep compliance documentation organized and accessible.",
    bullets: [
      "Centralized evidence library.",
      "Upload supporting documentation.",
      "Associate evidence with compliance requirements.",
      "Track missing evidence.",
      "Organize documentation for audit preparation.",
    ],
  },
  {
    icon: Plug,
    title: "Automated Monitoring & Integrations",
    intro: "Monitor security configurations across connected systems.",
    bullets: [
      "AWS",
      "GitHub",
      "Google Workspace",
      "Microsoft Entra ID / Microsoft 365",
      "Endpoint and device monitoring",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Risk Management",
    intro: "Identify, assess, and track security risks.",
    bullets: [
      "Centralized risk register.",
      "Risk severity and ownership.",
      "Risk assessment and treatment tracking.",
      "Visibility into remediation activities.",
      "Risk reporting and oversight.",
    ],
  },
  {
    icon: Truck,
    title: "Vendor Risk Management",
    intro: "Manage third-party security and compliance activities.",
    bullets: [
      "Vendor inventory.",
      "Vendor risk classification.",
      "Security assessment tracking.",
      "Supporting documentation.",
      "Review and remediation follow-ups.",
    ],
  },
  {
    icon: UserCheck,
    title: "Personnel & Device Compliance",
    intro: "Track employee-related security requirements.",
    bullets: [
      "Employee onboarding and compliance tasks.",
      "Policy acknowledgment tracking.",
      "Personnel security requirements.",
      "Device inventory and monitoring.",
      "Visibility into outstanding compliance activities.",
    ],
  },
  {
    icon: ListTodo,
    title: "Tasks & Remediation",
    intro: "Turn security and compliance gaps into actionable work.",
    bullets: [
      "Assign tasks to team members.",
      "Track overdue and upcoming tasks.",
      "Upload supporting evidence.",
      "Add comments and coordinate remediation.",
      "Monitor task completion.",
    ],
  },
  {
    icon: FileSearch,
    title: "Audit Management",
    intro: "Support organizations preparing for independent security and compliance audits.",
    bullets: [
      "Organize audit-related activities.",
      "Track control readiness.",
      "Prepare supporting evidence.",
      "Identify outstanding gaps.",
      "Coordinate internal audit preparation.",
    ],
  },
];

const dashboardAreas: { title: string; detail: string }[] = [
  { title: "Framework readiness", detail: "Controls and evidence progress for each framework." },
  { title: "Automated test results", detail: "Passing checks, items needing remediation, errors, and tests with no recent results." },
  { title: "Policy approval status", detail: "Policies awaiting approval and other outstanding policy actions." },
  { title: "Risk overview", detail: "Inherent risk broken down by severity level." },
  { title: "Device monitoring", detail: "Reporting status across monitored computers." },
  { title: "Open and overdue tasks", detail: "Overdue, due-soon, upcoming, and completed tasks." },
  { title: "Integration connectivity", detail: "How many connected integrations are active and whether any report errors." },
];

const workflowSteps: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Building2,
    title: "Set Up Your Workspace",
    body: "Create your organization's workspace and configure its compliance requirements.",
  },
  {
    icon: Plug,
    title: "Connect Your Systems",
    body: "Connect supported applications and infrastructure to enable relevant security monitoring.",
  },
  {
    icon: Settings,
    title: "Manage Your Compliance Program",
    body: "Organize policies, controls, evidence, risks, vendors, and tasks.",
  },
  {
    icon: BadgeCheck,
    title: "Track Progress and Prepare for Audits",
    body: "Monitor readiness, resolve outstanding issues, and prepare documentation for independent assessments.",
  },
];

const expertiseHighlights = [
  "Practical GRC experience",
  "Security and compliance expertise",
  "Audit readiness workflows",
  "Ongoing security monitoring",
  "Human expertise alongside technology",
];

const audiences: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Rocket,
    title: "Startups & Growing Companies",
    body: "Build a structured security and compliance program as your organization grows.",
  },
  {
    icon: Code2,
    title: "SaaS & Technology Companies",
    body: "Organize cloud security monitoring, policies, evidence, and compliance activities.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Compliance Teams",
    body: "Reduce manual tracking and gain better visibility into outstanding work.",
  },
  {
    icon: FileSearch,
    title: "Organizations Preparing for Audits",
    body: "Coordinate readiness activities, identify gaps, and prepare evidence for independent assessments.",
  },
];

const roadmapItems: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: ListChecks,
    title: "Framework expansion",
    body: "ISO 27001 and additional frameworks.",
  },
  {
    icon: Plug,
    title: "Integration expansion",
    body: "More connectors added to the supported integration catalog.",
  },
  {
    icon: Sparkles,
    title: "Automation & management",
    body: "Further automation and compliance management capabilities.",
  },
];

const productSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Shield GRC",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: SEO_DESCRIPTION,
  url: PAGE_URL,
  image: IMAGE_URL,
  provider: {
    "@type": "Organization",
    name: "Com-Sec",
    url: "https://com-sec.io/",
  },
};

function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">{eyebrow}</p>
      )}
      <h2
        className={`mb-4 text-3xl font-bold leading-tight sm:text-4xl ${light ? "text-white" : "text-primary"}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`text-lg leading-relaxed ${light ? "text-white/80" : "text-gray-700"}`}>{description}</p>
      )}
    </div>
  );
}

export default function ShieldGrc() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{SEO_TITLE}</title>
        <meta name="description" content={SEO_DESCRIPTION} />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:title" content="Shield GRC | Com-Sec" />
        <meta property="og:description" content={SEO_DESCRIPTION} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={IMAGE_URL} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
      </Helmet>

      <Navigation />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary via-blue-900 to-blue-800 pt-28 pb-20 text-white sm:pt-32 sm:pb-24">
          <div className="absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-orange-500/20 blur-3xl" aria-hidden="true" />

          <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
            <div className="mb-6 inline-flex items-center rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-300">
              <ShieldCheck className="mr-2 h-4 w-4" aria-hidden="true" />
              Shield GRC
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl">
              Meet Shield GRC —{" "}
              <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                Your Compliance Command Center
              </span>
            </h1>

            <p className="mx-auto mb-4 max-w-3xl text-lg text-white/90 sm:text-xl">
              Manage security, compliance, risks, policies, evidence, and audit readiness in one place. Shield GRC
              helps organizations understand what's working, identify gaps, and stay prepared for their next audit.
            </p>
            <p className="mx-auto mb-10 max-w-3xl text-base leading-relaxed text-white/70">
              Built by the security and compliance professionals at Com-Sec, Shield combines practical GRC workflows,
              automated security monitoring, and clear visibility into compliance progress.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link to={DEMO_HREF} className={PRIMARY_CTA}>
                Request a Demo
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a href="#features" className={SECONDARY_CTA}>
                Explore Features
              </a>
            </div>
          </div>

          <div className="relative z-10 mx-auto mt-14 max-w-5xl px-4 sm:px-6 lg:px-8">
            <img
              src="/images/products/shield-grc-dashboard.webp"
              alt="Shield GRC dashboard on a laptop showing framework readiness, automated test results, policy approvals, risk overview, device monitoring, tasks, and integration status"
              width={1600}
              height={900}
              fetchPriority="high"
              className="w-full rounded-2xl border border-white/10 shadow-2xl shadow-orange-500/20 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:duration-700"
            />
          </div>
        </section>

        {/* Why Shield GRC */}
        <section className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Compliance Shouldn't Be Complicated"
              description="Preparing for SOC 2, ISO 27001, and other security assessments often involves tracking hundreds of requirements, collecting evidence, reviewing policies, managing risks, and coordinating with auditors. Shield GRC brings these activities together in a structured workspace."
            />

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {whyCards.map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-primary">{title}</h3>
                  <p className="text-sm leading-relaxed text-gray-700">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="scroll-mt-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Features"
              title="Explore Shield GRC"
              description="A dedicated workspace for each part of your security and compliance program."
            />

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map(({ icon: Icon, title, intro, bullets }) => (
                <article
                  key={title}
                  className="flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl sm:p-8"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-accent to-orange-600 text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-primary">{title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-gray-700">{intro}</p>

                  {title === "Automated Monitoring & Integrations" ? (
                    <>
                      <ul className="mb-4 flex flex-wrap gap-2">
                        {bullets.map((b) => (
                          <li
                            key={b}
                            className="rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-medium text-orange-700"
                          >
                            {b}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-auto text-xs leading-relaxed text-gray-500">
                        Integration availability and functionality depend on the current supported connector catalog.
                      </p>
                    </>
                  ) : (
                    <ul className="space-y-2">
                      {bullets.map((b) => (
                        <li key={b} className="flex gap-2 text-sm text-gray-700">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {title === "Compliance Frameworks & Controls" && (
                    <div className="mt-6 space-y-3 rounded-xl border border-gray-100 bg-gray-50 p-4 text-sm">
                      <p className="text-gray-800">
                        <span className="font-semibold text-primary">Current focus:</span> SOC 2
                      </p>
                      <p className="text-gray-800">
                        <span className="font-semibold text-primary">On the Roadmap:</span> ISO 27001 and other
                        frameworks being expanded.
                      </p>
                    </div>
                  )}

                  {title === "Audit Management" && (
                    <p className="mt-6 rounded-xl border border-gray-100 bg-gray-50 p-4 text-xs leading-relaxed text-gray-600">
                      Shield supports audit preparation. Independent auditors and certification bodies perform the
                      assessments and issue any reports or certifications.
                    </p>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Dashboard showcase */}
        <section className="bg-slate-950 py-16 text-white sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Know Exactly Where Your Compliance Program Stands"
              description="Shield provides a consolidated view of your security and compliance activities, helping teams prioritize the work that matters and understand where attention is needed."
              light
            />

            <div className="grid items-start gap-10 lg:grid-cols-5">
              <div className="lg:sticky lg:top-28 lg:col-span-3">
                <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-orange-500/10">
                  <img
                    src="/images/products/shield-grc-dashboard.webp"
                    alt="Shield GRC dashboard overview with framework progress, test results, policy approvals, inherent risk, computer status, open tasks, and integrations"
                    width={1600}
                    height={900}
                    loading="lazy"
                    className="h-auto w-full"
                  />
                </div>
              </div>

              <ul className="grid gap-3 lg:col-span-2">
                {dashboardAreas.map((area, i) => (
                  <li
                    key={area.title}
                    className="group flex gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-accent/50 hover:bg-white/10"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-semibold text-white">{area.title}</h3>
                      <p className="text-sm leading-relaxed text-white/70">{area.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="How it works" title="How Shield GRC Works" />

            <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {workflowSteps.map(({ icon: Icon, title, body }, i) => (
                <li
                  key={title}
                  className="relative rounded-2xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-accent to-orange-600 text-white">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <span className="text-sm font-semibold text-accent">Step {i + 1}</span>
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-primary">{title}</h3>
                  <p className="text-sm leading-relaxed text-gray-700">{body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Built by professionals */}
        <section className="bg-gradient-to-br from-gray-50 via-white to-blue-50 py-16 sm:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">Why Com-Sec</p>
              <h2 className="mb-6 text-3xl font-bold leading-tight text-primary sm:text-4xl">
                More Than Software. Built on Real Compliance Experience.
              </h2>
              <p className="mb-4 text-lg leading-relaxed text-gray-700">
                Shield GRC is developed by Com-Sec, a team that works directly with organizations on security
                assessments, compliance readiness, risk management, internal audits, and ongoing security operations.
              </p>
              <p className="mb-4 leading-relaxed text-gray-700">
                Our experience supporting SOC 2, ISO 27001, HITRUST, and other security and compliance initiatives helps
                shape how Shield is designed.
              </p>
              <p className="leading-relaxed text-gray-700">
                We understand the challenges organizations face when collecting evidence, managing policies, responding
                to auditor requests, and maintaining security controls. Shield is designed around those practical
                workflows.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-xl">
              <h3 className="mb-6 text-lg font-bold text-primary">What sets Shield apart</h3>
              <ul className="space-y-4">
                {expertiseHighlights.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-800">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Audiences */}
        <section className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Who it's for" title="Who Is Shield GRC For?" />

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {audiences.map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-primary">{title}</h3>
                  <p className="text-sm leading-relaxed text-gray-700">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section className="bg-gradient-to-br from-gray-50 via-white to-blue-50 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Roadmap"
              title="Built for Today. Expanding for Tomorrow."
              description="Shield is continuing to expand its integrations, frameworks, automation, and compliance management capabilities."
            />

            <div className="grid gap-6 md:grid-cols-3">
              {roadmapItems.map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-dashed border-orange-300 bg-white p-6"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <Icon className="h-6 w-6 text-accent" aria-hidden="true" />
                    <span className="inline-flex items-center gap-1 rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700">
                      <Milestone className="h-3 w-3" aria-hidden="true" />
                      On the Roadmap
                    </span>
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-primary">{title}</h3>
                  <p className="text-sm leading-relaxed text-gray-700">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary via-blue-900 to-slate-900 py-20 text-white sm:py-28">
          <div className="absolute -bottom-24 right-0 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl" aria-hidden="true" />

          <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
            <h2 className="mb-6 text-3xl font-bold leading-tight sm:text-4xl">
              Make Compliance Easier to Manage with{" "}
              <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                Shield GRC
              </span>
            </h2>
            <p className="mb-4 text-lg text-white/85">
              Bring your policies, evidence, security monitoring, risks, and compliance tasks together in one workspace.
            </p>
            <p className="mb-10 text-base text-white/70">
              See how Shield GRC can help your team stay organized and prepare for its next audit.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link to={DEMO_HREF} className={PRIMARY_CTA}>
                Request a Demo
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link to={DEMO_HREF} className={SECONDARY_CTA}>
                Talk to Our Team
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
