import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  Building2,
  CalendarCheck,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Cloud,
  Code2,
  Eye,
  FileSearch,
  FileText,
  FileWarning,
  FolderOpen,
  ListChecks,
  ListTodo,
  Milestone,
  Plug,
  Rocket,
  RefreshCw,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  Target,
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

const valueThemes: { icon: LucideIcon; title: string; body: string; signals: string[] }[] = [
  {
    icon: Eye,
    title: "See Your Compliance Status Clearly",
    body: "Get a centralized view of your frameworks, controls, policies, security tests, and outstanding requirements.",
    signals: ["Framework readiness", "Test results", "Policy approvals"],
  },
  {
    icon: Target,
    title: "Turn Findings Into Action",
    body: "Identify failed security checks, missing evidence, and overdue tasks so your team can prioritize remediation.",
    signals: ["Failed checks", "Missing evidence", "Overdue tasks"],
  },
  {
    icon: CalendarCheck,
    title: "Stay Organized for Your Next Audit",
    body: "Keep compliance documentation, control requirements, and audit preparation activities connected in one place.",
    signals: ["Controls", "Documentation", "Audit preparation"],
  },
];

const expertiseAreas: { icon: LucideIcon; title: string }[] = [
  { icon: ShieldCheck, title: "SOC 2 readiness and audit preparation" },
  { icon: ClipboardCheck, title: "ISO 27001 compliance and internal audits" },
  { icon: AlertTriangle, title: "Security risk assessments" },
  { icon: Truck, title: "Vendor security reviews" },
  { icon: FileText, title: "Security policies and governance" },
  { icon: Cloud, title: "Cloud security and continuous monitoring" },
];

const monitoringCapabilities: { icon: LucideIcon; title: string }[] = [
  { icon: ShieldCheck, title: "Automated security checks" },
  { icon: Plug, title: "Integration monitoring" },
  { icon: Activity, title: "Test status and results" },
  { icon: AlertTriangle, title: "Security gap identification" },
  { icon: ListTodo, title: "Remediation tracking" },
  { icon: RefreshCw, title: "Continuous compliance visibility" },
];

const connectorNames = [
  "AWS",
  "GitHub",
  "Google Workspace",
  "Microsoft Entra ID / Microsoft 365",
  "Endpoint and device monitoring",
];

const remediationFlow: { title: string; body: string }[] = [
  { title: "Monitor", body: "Automated checks run against supported connected systems." },
  { title: "Identify", body: "Failed checks and security gaps appear in your Tests view." },
  { title: "Assign", body: "Assign tasks to the people responsible for the work." },
  { title: "Remediate", body: "Your team makes the fix and adds evidence and comments to the task." },
  { title: "Track Progress", body: "Follow task status and review results as checks run again." },
];

const connectedModules: {
  icon: LucideIcon;
  title: string;
  summary: string;
  points: string[];
  note?: string;
}[] = [
  {
    icon: ListChecks,
    title: "Frameworks & Controls",
    summary: "Organize security and compliance requirements in a centralized workspace.",
    points: [
      "View applicable frameworks and requirements.",
      "Track implementation of security controls.",
      "Map controls to relevant policies and evidence.",
      "Identify gaps and monitor remediation progress.",
    ],
    note: "Current focus: SOC 2. ISO 27001 and other frameworks are being expanded.",
  },
  {
    icon: FileText,
    title: "Policies & Approvals",
    summary: "Create, review, approve, and maintain organizational security policies.",
    points: [
      "Centralized policy library.",
      "Policy approval workflows.",
      "Version history and renewal tracking.",
      "Employee policy acknowledgments.",
    ],
  },
  {
    icon: FolderOpen,
    title: "Evidence & Documents",
    summary: "Keep compliance documentation organized and accessible.",
    points: [
      "Centralized evidence library.",
      "Associate evidence with compliance requirements.",
      "Track missing evidence.",
      "Organize documentation for audit preparation.",
    ],
  },
  {
    icon: Activity,
    title: "Automated Tests",
    summary: "Run automated security checks across connected systems and review the results.",
    points: [
      "Test status and results by integration.",
      "Identify failing checks and security gaps.",
      "Track remediation for failed checks.",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Risks & Vendors",
    summary: "Identify, assess, and track security risks and third-party reviews.",
    points: [
      "Centralized risk register with severity and ownership.",
      "Risk assessment and treatment tracking.",
      "Vendor inventory and risk classification.",
      "Vendor security assessment tracking.",
    ],
  },
  {
    icon: UserCheck,
    title: "Personnel & Devices",
    summary: "Track employee-related security requirements and device monitoring.",
    points: [
      "Employee onboarding and compliance tasks.",
      "Policy acknowledgment tracking.",
      "Device inventory and monitoring.",
      "Visibility into outstanding compliance activities.",
    ],
  },
  {
    icon: ListTodo,
    title: "Tasks & Remediation",
    summary: "Turn security and compliance gaps into actionable work.",
    points: [
      "Assign tasks to team members.",
      "Track overdue and upcoming tasks.",
      "Upload supporting evidence.",
      "Add comments and coordinate remediation.",
    ],
  },
  {
    icon: FileSearch,
    title: "Audit Preparation",
    summary: "Organize readiness activities and supporting evidence before an independent audit.",
    points: [
      "Organize audit-related activities.",
      "Track control readiness.",
      "Prepare supporting evidence.",
      "Identify outstanding gaps.",
    ],
    note: "Shield supports audit preparation. Independent auditors and certification bodies perform the assessments and issue any reports or certifications.",
  },
];

const benefits: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Search,
    title: "Find compliance documentation faster",
    body: "Locate policies, evidence, and supporting documents by the control or requirement they support.",
  },
  {
    icon: ListChecks,
    title: "See which controls need attention",
    body: "Identify gaps and monitor remediation progress across your frameworks.",
  },
  {
    icon: FileWarning,
    title: "Spot missing evidence and approvals",
    body: "Track evidence that is still outstanding and policies waiting on approvers.",
  },
  {
    icon: Users,
    title: "Know who owns each remediation task",
    body: "Assign tasks, track ownership, and see which items are overdue or due soon.",
  },
  {
    icon: Activity,
    title: "Review monitoring results in one place",
    body: "Check test status and results across connected integrations and devices.",
  },
  {
    icon: CalendarCheck,
    title: "Keep audit preparation visible",
    body: "Follow control readiness and outstanding gaps as your next audit approaches.",
  },
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
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">{eyebrow}</p>
      )}
      <h2 className="mb-4 text-3xl font-bold leading-tight text-primary sm:text-4xl">{title}</h2>
      {description && <p className="text-lg leading-relaxed text-gray-700">{description}</p>}
    </div>
  );
}

function ConnectedShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = connectedModules[activeIndex];
  const ActiveIcon = active.icon;

  return (
    <div className="grid gap-6 lg:grid-cols-12">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:col-span-4 lg:grid-cols-1">
        {connectedModules.map(({ icon: Icon, title }, i) => {
          const isActive = i === activeIndex;
          return (
            <button
              key={title}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActiveIndex(i)}
              className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm font-semibold transition-all duration-200 ${
                isActive
                  ? "border-accent bg-primary text-white shadow-lg"
                  : "border-gray-200 bg-white text-primary hover:border-orange-200 hover:bg-orange-50/40"
              }`}
            >
              <Icon className={`h-5 w-5 shrink-0 ${isActive ? "text-orange-400" : "text-accent"}`} aria-hidden="true" />
              <span>{title}</span>
            </button>
          );
        })}
      </div>

      <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-xl sm:p-8 lg:col-span-8">
        <div className="mb-5 flex items-center gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-accent to-orange-600 text-white">
            <ActiveIcon className="h-6 w-6" aria-hidden="true" />
          </span>
          <h3 className="text-2xl font-bold text-primary">{active.title}</h3>
        </div>
        <p className="mb-6 text-lg leading-relaxed text-gray-700">{active.summary}</p>
        <ul className="grid gap-3 sm:grid-cols-2">
          {active.points.map((point) => (
            <li key={point} className="flex gap-2 text-sm text-gray-700">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
        {active.note && (
          <p className="mt-6 rounded-xl border border-gray-100 bg-gray-50 p-4 text-sm leading-relaxed text-gray-600">
            {active.note}
          </p>
        )}
      </div>
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
        <section className="relative isolate overflow-hidden bg-primary pt-28 pb-16 text-white sm:pt-32 lg:pb-28">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950 via-primary to-blue-900" aria-hidden="true" />
          <div
            className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]"
            aria-hidden="true"
          />
          <div className="absolute -top-40 right-0 -z-10 h-[36rem] w-[36rem] rounded-full bg-orange-500/20 blur-3xl" aria-hidden="true" />
          <div className="absolute -bottom-32 left-1/4 -z-10 h-96 w-[40rem] rounded-full bg-orange-600/10 blur-3xl" aria-hidden="true" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8">
            <div className="text-center lg:col-span-5 lg:text-left">
              <div className="mb-6 inline-flex items-center rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-300">
                <ShieldCheck className="mr-2 h-4 w-4" aria-hidden="true" />
                Shield GRC
              </div>

              <h1 className="mb-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
                Meet Shield GRC —{" "}
                <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                  Your Compliance Command Center
                </span>
              </h1>

              <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl lg:mx-0">
                Manage security, compliance, risks, policies, evidence, and audit readiness in one place. Shield GRC
                helps organizations see what's working, close gaps, and stay ready for their next audit.
              </p>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                <Link to={DEMO_HREF} className={PRIMARY_CTA}>
                  Request a Demo
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <a href="#features" className={SECONDARY_CTA}>
                  Explore Features
                </a>
              </div>
            </div>

            <div className="relative lg:col-span-7 lg:-mr-8 xl:-mr-24">
              <div className="absolute inset-x-8 top-1/2 -z-10 h-2/3 -translate-y-1/2 rounded-full bg-orange-500/25 blur-3xl" aria-hidden="true" />
              <img
                src="/images/products/shield-grc-dashboard.webp"
                alt="Shield GRC dashboard on a laptop showing framework readiness, automated test results, policy approvals, risk overview, device monitoring, tasks, and integration status"
                width={2400}
                height={1350}
                fetchPriority="high"
                className="relative w-full drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)] [mask-image:linear-gradient(to_right,transparent,black_18%),linear-gradient(to_left,transparent,black_12%),linear-gradient(to_bottom,transparent,black_14%),linear-gradient(to_top,transparent,black_16%)] [mask-composite:intersect] [-webkit-mask-composite:source-in]"
              />
            </div>
          </div>
        </section>

        {/* Value */}
        <section className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Overview"
              title="Know Where You Stand. Know What Comes Next."
              description="Security and compliance involve more than completing checklists. Shield GRC brings your controls, policies, evidence, security monitoring, and remediation tasks into one workspace, helping your team understand what's ready, what needs attention, and what to work on next."
            />

            <div className="grid gap-6 md:grid-cols-3">
              {valueThemes.map(({ icon: Icon, title, body, signals }) => (
                <article
                  key={title}
                  className="flex flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-accent to-orange-600 text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-primary">{title}</h3>
                  <p className="mb-6 text-sm leading-relaxed text-gray-700">{body}</p>
                  <ul className="mt-auto flex flex-wrap gap-2">
                    {signals.map((signal) => (
                      <li key={signal} className="rounded-full bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
                        {signal}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise */}
        <section className="bg-gradient-to-br from-gray-50 via-white to-blue-50 py-16 sm:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">Our Expertise</p>
              <h2 className="mb-6 text-3xl font-bold leading-tight text-primary sm:text-4xl">
                Built by People Who Work in Security & Compliance Every Day.
              </h2>
              <p className="mb-4 text-lg leading-relaxed text-gray-700">
                Shield GRC is developed by Com-Sec, a team with hands-on experience supporting organizations through
                security assessments, compliance readiness, internal audits, risk management, and ongoing security
                operations.
              </p>
              <p className="mb-4 leading-relaxed text-gray-700">
                That experience shapes how Shield is built, from organizing audit evidence and managing policy approvals
                to tracking security findings and remediation.
              </p>
              <p className="leading-relaxed text-gray-700">
                Our focus is on making compliance requirements easier to understand and manage in practice.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-xl">
              <h3 className="mb-6 text-lg font-bold text-primary">Areas of experience</h3>
              <ul className="space-y-4">
                {expertiseAreas.map(({ icon: Icon, title }) => (
                  <li key={title} className="flex items-center gap-3 text-gray-800">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    {title}
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-gray-100 pt-6 text-sm leading-relaxed text-gray-600">
                Shield's automation covers the supported integrations described on this page. It does not automate every
                framework or service Com-Sec supports.
              </p>
            </div>
          </div>
        </section>

        {/* Security to compliance */}
        <section className="relative isolate overflow-hidden bg-slate-950 py-16 text-white sm:py-24">
          <div className="absolute -top-32 left-0 -z-10 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" aria-hidden="true" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-5 lg:gap-16">
              <div className="lg:col-span-2">
                <p className="mb-3 text-base font-semibold text-orange-300">
                  Automated Security Monitoring. Clear Results. Faster Remediation.
                </p>
                <h2 className="mb-5 text-3xl font-bold leading-tight sm:text-4xl">
                  From Security Checks to Compliance Progress.
                </h2>
                <p className="mb-4 text-lg leading-relaxed text-white/80">
                  Shield GRC helps teams monitor security configurations across connected systems, identify failed
                  security checks, and track remediation from one centralized workspace.
                </p>
                <p className="mb-8 leading-relaxed text-white/70">
                  Shield helps connect technical security monitoring with the compliance activities your team manages
                  every day. When a supported security check identifies an issue, teams can review the finding,
                  understand what needs remediation, and track the associated work.
                </p>
                <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  {monitoringCapabilities.map(({ icon: Icon, title }) => (
                    <li
                      key={title}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-orange-400">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      {title}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <p className="mb-3 text-sm font-semibold text-white">Connected integrations</p>
                  <ul className="flex flex-wrap gap-2">
                    {connectorNames.map((name) => (
                      <li
                        key={name}
                        className="rounded-full border border-orange-400/30 bg-orange-500/10 px-3 py-1 text-xs font-medium text-orange-200"
                      >
                        {name}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 text-xs leading-relaxed text-white/60">
                    Integration availability and functionality depend on the current supported connector catalog.
                  </p>
                </div>
              </div>

              <div className="relative lg:col-span-3">
                <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-orange-500/15 blur-3xl" aria-hidden="true" />
                <img
                  src="/images/products/shield-grc-tests.webp"
                  alt="Shield GRC Tests page showing 20 of 72 connected tests passing, test results by integration across AWS, GitHub, Google Workspace, Slack, device agents, and Pentest, and a list of critical checks with status and framework tags"
                  width={1672}
                  height={941}
                  loading="lazy"
                  decoding="async"
                  className="w-full rounded-2xl border border-white/10 shadow-2xl shadow-orange-500/20"
                />
              </div>
            </div>

            <ol className="mt-16 grid gap-4 md:grid-cols-5">
              {remediationFlow.map(({ title, body }, i) => (
                <li key={title} className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-accent to-orange-600 text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <h3 className="font-bold text-white">{title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-white/70">{body}</p>
                  {i < remediationFlow.length - 1 && (
                    <ChevronRight
                      className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-orange-400 md:block"
                      aria-hidden="true"
                    />
                  )}
                </li>
              ))}
            </ol>
            <p className="mt-6 text-center text-sm text-white/60">
              Shield tracks remediation work. Your team performs the fixes.
            </p>
          </div>
        </section>

        {/* Connected program */}
        <section id="features" className="scroll-mt-24 bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Platform"
              title="Your Security & Compliance Program, Connected."
              description="Frameworks, policies, evidence, tests, risks, personnel, tasks, and audit preparation are managed in one workspace, so related work stays connected."
            />
            <ConnectedShowcase />
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-gradient-to-br from-gray-50 via-white to-blue-50 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading title="Less Time Searching. More Clarity on What Matters." />

            <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {benefits.map(({ icon: Icon, title, body }) => (
                <li
                  key={title}
                  className="flex gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="mb-1 font-bold text-primary">{title}</h3>
                    <p className="text-sm leading-relaxed text-gray-700">{body}</p>
                  </div>
                </li>
              ))}
            </ul>
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

        {/* Audiences */}
        <section className="bg-gradient-to-br from-gray-50 via-white to-blue-50 py-16 sm:py-24">
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
        <section className="bg-white py-16 sm:py-24">
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
              Make Security & Compliance{" "}
              <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                Easier to Manage.
              </span>
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-white/85">
              Whether you're building your first compliance program or managing ongoing security requirements, Shield
              GRC gives your team a clearer way to organize the work, monitor progress, and prepare for what comes next.
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
