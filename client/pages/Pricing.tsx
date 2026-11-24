import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { PricingLayout } from "@/components/pricing/PricingLayout";

type PriceItem = { name: string; price: string; unit?: string; note: string };

const priceGroups: { title: string; description: string; items: PriceItem[] }[] = [
  {
    title: "One-Time Projects",
    description: "Fixed-scope work, paid once.",
    items: [
      { name: "Security Assessments", price: "$4,000", note: "Fixed scope, typically 4 to 8 weeks. Includes penetration testing and internal audits." },
      { name: "Compliance & Audit Readiness", price: "$6,000", note: "SOC 2 Type I and II, ISO 27001, ISO 42001, HIPAA, HITRUST and GDPR." },
    ],
  },
  {
    title: "Penetration Testing",
    description: "One-time tests, priced per engagement.",
    items: [
      { name: "Web Application", price: "$3,500", note: "OWASP Top 10, APIs, authentication, access control and session management." },
      { name: "Mobile Application", price: "$6,500", note: "iOS and Android analysis, local storage, API layer and certificate pinning." },
      { name: "Cloud Infrastructure", price: "$2,500", note: "AWS, Azure and GCP configuration, IAM and network segmentation." },
      { name: "Network Infrastructure", price: "$2,500", note: "Internal and external testing, firewall and VPN review, Active Directory." },
    ],
  },
  {
    title: "Monthly Managed Services",
    description: "Ongoing plans billed every month.",
    items: [
      { name: "Essential MSSP", price: "$3,500", unit: "/month", note: "Core security monitoring and incident response." },
      { name: "Advanced MSSP", price: "$6,500", unit: "/month", note: "Complete security operations and threat management." },
      { name: "SOC Essentials", price: "$3,000", unit: "/month", note: "24/7 monitoring, incident response, monthly reports and basic threat intelligence." },
      { name: "SOC Professional", price: "$7,500", unit: "/month", note: "Threat hunting, custom playbooks, a dedicated analyst and biweekly reviews." },
    ],
  },
  {
    title: "Custom Quote",
    description: "Scoped to your environment. Contact us for pricing.",
    items: [
      { name: "Full SOC 2 Audit Package", price: "Custom", note: "Readiness, evidence collection, GRC platform support and auditor coordination." },
      { name: "Enterprise MSSP", price: "Custom", note: "Everything in Advanced, plus managed IT and endpoint security." },
      { name: "SOC Enterprise", price: "Custom", note: "Dedicated SOC team, custom integrations and on-site support." },
      { name: "Specialized Penetration Testing", price: "Custom", note: "API, red team, retesting, AI-assisted, wireless, social engineering and physical. Typically 3 to 6 weeks." },
      { name: "Fractional Security Leadership (vCISO)", price: "Custom", note: "Risk management, policies, vendor risk and security awareness." },
      { name: "Managed IT & IT Support", price: "Custom", note: "Endpoints, identity, patching, onboarding and offboarding." },
      { name: "AI Governance", price: "Custom", note: "AI tool inventory, acceptable use policies, vendor reviews and risk assessments." },
      { name: "Security Questionnaires & RFPs", price: "Custom", note: "Included in vCISO and SOC 2 maintenance plans, or scoped separately." },
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
            <div key={group.title} className="mb-14 last:mb-0">
              <h3 className="text-2xl font-bold text-white mb-1">{group.title}</h3>
              <p className="text-slate-400 mb-6">{group.description}</p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((item) => (
                  <div key={item.name} className="flex flex-col rounded-xl border border-slate-700 bg-slate-900 p-6 transition-colors hover:border-orange-400/50">
                    <h4 className="font-semibold text-white mb-3">{item.name}</h4>
                    <p className="text-3xl font-bold text-orange-400">
                      {item.price}
                      {item.unit && <span className="ml-1 text-base font-medium text-slate-400">{item.unit}</span>}
                    </p>
                    <p className="mt-3 text-sm text-slate-400">{item.note}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
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
