import { Link } from "react-router-dom";
import {
  Bug,
  ChevronRight,
  Clock,
  FileCheck,
  LifeBuoy,
  Package,
  ShieldCheck,
  Tag,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type PriceItem = { name: string; price: string; billing: string; note: string };
type PriceCategory = { title: string; description: string; icon: LucideIcon; items: PriceItem[] };

const categories: PriceCategory[] = [
  {
    title: "Managed Security Hours",
    description: "Monthly hour buckets. Engineer and analyst work draws from the same bucket.",
    icon: Clock,
    items: [
      { name: "10 hour bucket", price: "$2,000", billing: "/ month", note: "$200 per hour. Early stage, SOC 2 maintenance, questionnaires." },
      { name: "20 hour bucket", price: "$3,600", billing: "/ month", note: "$180 per hour. Readiness in flight plus vCISO." },
      { name: "40 hour bucket", price: "$6,400", billing: "/ month", note: "$160 per hour. Multi-framework program, for example SOC 2 plus HIPAA or ISO." },
      { name: "60 hour bucket", price: "$8,700", billing: "/ month", note: "$145 per hour. Regulated health tech with a heavy audit load." },
      { name: "80 hour bucket", price: "$10,800", billing: "/ month", note: "$135 per hour. Embedded security team, replaces a first security hire." },
      { name: "120 hour bucket", price: "$15,000", billing: "/ month", note: "$125 per hour. Full outsourced security function." },
    ],
  },
  {
    title: "Managed Services & Maintenance",
    description: "Ongoing plans billed every month.",
    icon: ShieldCheck,
    items: [
      { name: "Compliance maintenance (SOC 2, ISO, HITRUST)", price: "$2,000", billing: "/ month", note: "Control upkeep, evidence review and auditor coordination after the report. Questionnaires included." },
      { name: "Essential MSSP", price: "$3,500", billing: "/ month", note: "Core security monitoring and incident response." },
      { name: "Advanced MSSP and SOC", price: "$7,500", billing: "/ month", note: "24/7 monitoring, threat hunting, playbooks, dedicated analyst, EDR management." },
      { name: "Enterprise MSSP and SOC", price: "$12,000+", billing: "/ month", note: "Custom. Managed IT, endpoint, identity, cloud, quarterly reviews." },
      { name: "Managed IT", price: "$2,500+", billing: "/ month", note: "Endpoint, identity, patching, onboarding and offboarding, SaaS and asset management." },
    ],
  },
  {
    title: "Audits & Readiness",
    description: "Fixed-scope engagements, paid once.",
    icon: FileCheck,
    items: [
      { name: "SOC 2 Type I audit readiness", price: "$6,000", billing: "one-time", note: "Scope, control mapping, gap list, evidence prep and auditor coordination through the Type I report." },
      { name: "SOC 2 Type I and Type II audit readiness", price: "$8,000", billing: "one-time", note: "Both reports planned together." },
      { name: "SOC 2 Type I audit", price: "$6,000", billing: "one-time", note: "Audit only, through partner auditor." },
      { name: "SOC 2 Type I and Type II audit", price: "$8,000", billing: "one-time", note: "Audit only, through partner auditor." },
      { name: "Full SOC 2 package", price: "$18,500", billing: "one-time", note: "Type I audit plus about $10,000 for the auditor. Platform subscription is extra." },
      { name: "ISO 27001 readiness", price: "$7,000", billing: "one-time", note: "ISMS scope, risk assessment, SoA and policies." },
      { name: "ISO 27001 internal audit", price: "$3,500", billing: "one-time", note: "3 to 4 weeks with controls and evidence already in place." },
      { name: "ISO 27001 readiness plus internal audit", price: "$8,500", billing: "one-time", note: "One package, 50 percent due at signing." },
      { name: "ISO 42001 readiness", price: "$10,000", billing: "one-time", note: "AI governance management system. $2,500 as an add-on to ISO 27001." },
      { name: "Privacy: GDPR / CCPA / ISO 27701", price: "$6,000", billing: "one-time", note: "GDPR, CCPA and privacy program alignment on top of ISO 27001." },
      { name: "HIPAA risk analysis and readiness", price: "$6,000", billing: "one-time", note: "ePHI inventory, risk analysis, risk management plan, policies and training." },
      { name: "HITRUST e1 readiness", price: "$6,000", billing: "one-time", note: "Scoping and readiness. MyCSF license and assessor are separate." },
      { name: "HITRUST i1 readiness", price: "$12,000", billing: "one-time", note: "Scoping and readiness. MyCSF license and assessor are separate." },
      { name: "HITRUST r2 readiness", price: "$15,000", billing: "one-time", note: "Scoping and readiness. MyCSF license and assessor are separate." },
    ],
  },
  {
    title: "Penetration Testing",
    description: "One-time tests, priced per engagement.",
    icon: Bug,
    items: [
      { name: "Web application", price: "$3,500", billing: "one-time", note: "OWASP Top 10, authentication, access control, business logic. One retest included." },
      { name: "API", price: "$3,500", billing: "one-time", note: "REST and GraphQL authentication, authorization and data exposure." },
      { name: "Cloud or network infrastructure", price: "$3,500", billing: "one-time", note: "Cloud configuration, IAM, segmentation, internal and external network, Active Directory." },
      { name: "Mobile application", price: "$5,500", billing: "one-time", note: "iOS and Android binary analysis, local storage, API layer." },
    ],
  },
  {
    title: "Security Products",
    description: "Annual subscriptions and resold platforms.",
    icon: Package,
    items: [
      { name: "Shield GRC", price: "$7,500", billing: "/ year", note: "Controls, policies, evidence and audit tracking." },
      { name: "Shield Learn", price: "$6,500", billing: "/ year", note: "Security awareness and training." },
      { name: "Shield Defense", price: "$10,500", billing: "/ year", note: "Security monitoring and defense." },
      { name: "Resold GRC platform", price: "$9,500", billing: "per contract", note: "Drata, Vanta or Ceel. Platform subscription is billed per contract." },
    ],
  },
  {
    title: "Other Services",
    description: "Standalone services and recurring scans.",
    icon: LifeBuoy,
    items: [
      { name: "Security questionnaires", price: "$500", billing: "per item", note: "Included in retainers. Standalone only on request." },
      { name: "Incident response tabletop", price: "$2,500", billing: "one-time", note: "Scenario exercise, findings and updated IR plan." },
      { name: "BC/DR plan and test", price: "$2,500", billing: "one-time", note: "Business impact analysis, recovery plan and a test." },
      { name: "ADA / VPAT", price: "$2,500", billing: "one-time", note: "Accessibility review and VPAT report." },
      { name: "PCI ASV scans", price: "$1,500", billing: "annual", note: "Quarterly external scans and attestation." },
    ],
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center bg-accent/10 rounded-full px-4 sm:px-6 py-2 text-accent font-medium text-xs sm:text-sm mb-6 sm:mb-8">
            <Tag className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
            Transparent Pricing
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6">
            Services &amp;{" "}
            <span className="bg-gradient-to-r from-accent to-orange-500 bg-clip-text text-transparent">
              Starting Prices
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            All prices are in USD and are starting prices. Final pricing depends on your scope.
          </p>
        </div>

        <div className="space-y-14 sm:space-y-16">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div key={category.title}>
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-primary">{category.title}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg"
                    >
                      <h4 className="font-semibold text-gray-900">{item.name}</h4>
                      <p className="mt-3 flex items-baseline gap-1.5">
                        <span className="text-2xl font-bold text-primary">{item.price}</span>
                        <span className="text-sm font-medium text-gray-500">{item.billing}</span>
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14 sm:mt-16 rounded-xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl text-sm leading-relaxed text-gray-600">
              <p className="font-semibold text-gray-900 mb-2">Retainer terms</p>
              <p>
                Retainers are billed monthly in advance, Net 30. Unused hours do not roll over. Overage is billed at 110 percent of the bucket rate.
              </p>
            </div>
            <Button
              size="lg"
              className="bg-gradient-to-r from-accent to-orange-600 hover:from-accent/80 hover:to-orange-500 text-white transform hover:scale-105 transition-all duration-300 shadow-lg text-sm sm:text-base px-6 sm:px-8 shrink-0"
              asChild
            >
              <Link to="/contact">
                Talk to Our Team
                <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
