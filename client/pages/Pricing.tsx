import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { PricingLayout } from "@/components/pricing/PricingLayout";

type PriceItem = { name: string; price: string; billing: string; note: string };

const priceGroups: { title: string; description: string; items: PriceItem[] }[] = [
  {
    title: "Managed Security Hours",
    description: "Monthly hour buckets. Engineer and analyst work draws from the same bucket.",
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
    items: [
      { name: "Security questionnaires", price: "$500", billing: "per item", note: "Included in retainers. Standalone only on request." },
      { name: "Incident response tabletop", price: "$2,500", billing: "one-time", note: "Scenario exercise, findings and updated IR plan." },
      { name: "BC/DR plan and test", price: "$2,500", billing: "one-time", note: "Business impact analysis, recovery plan and a test." },
      { name: "ADA / VPAT", price: "$2,500", billing: "one-time", note: "Accessibility review and VPAT report." },
      { name: "PCI ASV scans", price: "$1,500", billing: "annual", note: "Quarterly external scans and attestation." },
    ],
  },
];

export default function Pricing() {
  return (
    <PricingLayout
      title="Pricing | Com-Sec"
      description="Transparent pricing for compliance readiness, penetration testing, managed IT, and virtual CISO services."
      canonical="https://com-sec.io/pricing"
      heroTitle="Pricing"
      heroSubtitle="Comprehensive cybersecurity and compliance services with flexible engagement models tailored to your organization's needs."
    >
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "One-Time Engagements", href: "/pricing/one-time", text: "Fixed-scope compliance readiness, penetration testing, internal audits, and AI security assessments." },
              { title: "Ongoing Support", href: "/pricing/ongoing", text: "Shield Defense subscriptions, managed IT, and virtual CISO services billed monthly." },
              { title: "Package Calculator", href: "/pricing/calculator", text: "Select the services you need, enter users and endpoints, and see one-time, monthly, and first-year totals." },
            ].map((item) => (
              <Link key={item.href} to={item.href} className="group flex flex-col rounded-xl border border-slate-700 bg-slate-900 p-8 transition-colors hover:border-orange-500">
                <h2 className="text-2xl font-bold text-white mb-3">{item.title}</h2>
                <p className="text-slate-400 flex-grow">{item.text}</p>
                <span className="mt-6 inline-flex items-center text-orange-400 font-semibold">
                  View pricing <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Prices at a Glance</h2>
            <p className="text-lg text-slate-300">
              All prices are in USD. Starting prices are shown, and final pricing depends on your scope.
            </p>
          </div>

          {priceGroups.map((group) => (
            <div key={group.title} className="mb-12 last:mb-0">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-white">{group.title}</h3>
                <p className="text-slate-400">{group.description}</p>
              </div>
              <div className="overflow-x-auto rounded-xl border border-slate-700">
                <table className="w-full min-w-[640px] text-left text-sm">
                  <thead className="bg-slate-800 text-slate-300">
                    <tr>
                      <th className="px-6 py-3 font-semibold">Service</th>
                      <th className="px-6 py-3 font-semibold">Price</th>
                      <th className="px-6 py-3 font-semibold">Details</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700 bg-slate-900">
                    {group.items.map((item) => (
                      <tr key={item.name} className="align-top hover:bg-slate-800/60">
                        <td className="px-6 py-4 font-semibold text-white">{item.name}</td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <span className="text-lg font-bold text-orange-400">{item.price}</span>
                          <span className="ml-1.5 text-slate-400">{item.billing}</span>
                        </td>
                        <td className="px-6 py-4 text-slate-400">{item.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}

          <div className="mt-14 rounded-xl border border-slate-700 bg-slate-900 p-6 text-sm text-slate-400">
            <p className="font-semibold text-white mb-2">Retainer terms</p>
            <p>
              Retainers are billed monthly in advance, Net 30. Unused hours do not roll over. Overage is billed at 110 percent of the bucket rate. Engineer and analyst work draws from the same bucket.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              How We Create Your Security Program
            </h2>
            <p className="text-lg text-slate-300">
              Our proven process ensures comprehensive, tailored security solutions for your organization
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Discovery & Assessment",
                description: "We conduct a thorough assessment of your current security posture, identify gaps, and understand your specific compliance requirements and business objectives.",
                icon: "🔍",
              },
              {
                number: "02",
                title: "Strategy Development",
                description: "Based on our findings, we develop a customized security strategy and roadmap aligned with your risk tolerance, budget, and regulatory requirements.",
                icon: "📋",
              },
              {
                number: "03",
                title: "Implementation & Support",
                description: "Our experts implement security controls, policies, and procedures while providing hands-on training and support to your team throughout the process.",
                icon: "⚙️",
              },
              {
                number: "04",
                title: "Audit & Validation",
                description: "We prepare and support you through assessments and audits, ensure compliance validation, and establish ongoing monitoring and improvement processes.",
                icon: "✓",
              },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 h-full hover:border-orange-400/50 transition-colors">
                  <div className="text-4xl font-bold text-orange-400 mb-4">
                    {step.number}
                  </div>
                  <div className="text-2xl mb-4">{step.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-300 text-sm">
                    {step.description}
                  </p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-orange-400 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing FAQ Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "Can I customize a package?",
                a: "Absolutely! Each engagement is customized based on your organization's specific needs, size, and risk profile. Contact our team for a personalized quote.",
              },
              {
                q: "Do you offer discounts for multiple services?",
                a: "Yes, we provide volume discounts when combining multiple services or engaging for extended periods. Let's discuss your requirements.",
              },
              {
                q: "What's the typical engagement duration?",
                a: "It varies by service. One-time assessments typically take 4-8 weeks, while ongoing services (vCISO, Managed IT) are month-to-month or annual.",
              },
              {
                q: "How do you ensure quality and accountability?",
                a: "We employ certified professionals, provide detailed reporting, and maintain transparent communication throughout all engagements.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="pricing-faq-item p-6 bg-slate-800 rounded-lg border border-slate-700 hover:border-orange-400/50"
              >
                <h3 className="font-semibold text-lg mb-3 text-white">{faq.q}</h3>
                <p className="text-slate-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Secure Your Organization?
          </h2>
          <p className="text-xl mb-8 text-slate-300">
            Let's discuss which security solutions are right for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-slate-700 hover:bg-orange-500 text-white transition-colors"
              >
                Schedule Free Consultation
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PricingLayout>
  );
}
