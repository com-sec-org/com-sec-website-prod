import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Zap,
  Shield,
  Users,
  TrendingUp,
  CheckCircle,
  ChevronRight,
  Sparkles,
  Award,
  Rocket,
  Target,
} from "lucide-react";
import "../styles/pricing.css";

const pricingData = [
  {
    id: 1,
    name: "vCISO (Remote Chief Information Security Officer)",
    category: "Executive Security Leadership",
    type: "Monthly",
    startingPrice: "$2,500",
    description:
      "Fractional Chief Information Security Officer engagement. Com-Sec embeds a senior security leader who owns the client's security program, policy, risk, and day-to-day escalation.",
    icon: Shield,
    benefits: [
      "Fractional CISO coverage",
      "Security strategy development",
      "Risk management oversight",
      "Policy development and review",
      "Board-level reporting",
    ],
    simplePrice: true,
  },
  {
    id: 2,
    name: "SOC 2 Type I & II",
    category: "Compliance & Frameworks",
    type: "One-time",
    startingPrice: "$4,000",
    description:
      "Comprehensive SOC 2 Type I and Type II certification support including readiness assessment, testing, evidence collection, and validated assessor coordination.",
    icon: Award,
    benefits: [
      "Readiness assessment & gap analysis",
      "SOC 2 Type I support",
      "SOC 2 Type II testing",
      "Full evidence collection",
      "Assessor coordination",
    ],
    simplePrice: true,
  },
  {
    id: 3,
    name: "ISO 27001 Certification",
    category: "Compliance & Frameworks",
    type: "One-time",
    startingPrice: "$4,000",
    description:
      "ISMS build out and ISO 27001 certification support with initial audit, management Stage 1 & 2 audits and assessor coordination.",
    icon: Target,
    benefits: [
      "ISMS development",
      "Initial audit support",
      "Stage 1 & 2 coordination",
      "Documentation assistance",
      "Compliance mapping",
    ],
    simplePrice: true,
  },
  {
    id: 4,
    name: "HITRUST Certification",
    category: "Compliance & Frameworks",
    type: "One-time",
    startingPrice: "$8,000",
    description:
      "HITRUST assessment execution and remediation with Stage 1 & 2 audits for healthcare compliance organizations.",
    icon: Zap,
    benefits: [
      "Assessment execution",
      "Remediation planning",
      "Stage 1 & 2 support",
      "Healthcare compliance",
      "Assessor coordination",
    ],
    simplePrice: true,
  },
  {
    id: 5,
    name: "Internal Audit / Security Risk Assessment",
    category: "Extra Add-Ons",
    type: "Engagement-based",
    startingPrice: "$3,500",
    description:
      "Independent internal audit or security risk assessment with comprehensive technical assessment and evidence collection.",
    icon: Users,
    benefits: [
      "Technical assessment",
      "Independent evaluation",
      "Evidence packaging",
      "Detailed reporting",
      "Risk prioritization",
    ],
    simplePrice: true,
  },
  {
    id: 6,
    name: "Penetration Testing",
    category: "Extra Add-Ons",
    type: "Per-test",
    startingPrice: "$3,500",
    description:
      "Manual + automated penetration testing across web, APIs, cloud, and internal networks with remediation guides.",
    icon: Rocket,
    benefits: [
      "Manual penetration testing",
      "Automated scanning",
      "Multi-vector assessment",
      "Remediation roadmap",
      "Evidence documentation",
    ],
    simplePrice: true,
  },
  {
    id: 7,
    name: "Managed IT Support",
    category: "Extra Add-Ons",
    type: "Monthly",
    startingPrice: "$2,000",
    description:
      "Outsourced IT helpdesk and endpoint operations including user onboarding, SSO, endpoint compliance, and role management.",
    icon: Zap,
    benefits: [
      "24/7 helpdesk support",
      "Endpoint management",
      "User onboarding",
      "Access control",
      "Compliance monitoring",
    ],
    simplePrice: true,
  },
  {
    id: 8,
    name: "Compliance & Audit Readiness",
    category: "Compliance & Frameworks",
    type: "Engagement-based",
    startingPrice: "$4,000",
    description:
      "Comprehensive compliance support for GDPR, HIPAA, PCI-DSS, NIST 800-53, and other regulatory frameworks with assessment and implementation support.",
    icon: Award,
    benefits: [
      "Framework assessment",
      "Gap analysis",
      "Implementation guidance",
      "Control mapping",
      "Audit preparation",
    ],
    simplePrice: true,
  },
  {
    id: 9,
    name: "Security Awareness / Phishing Training",
    category: "Training",
    type: "Custom",
    startingPrice: "$1,000",
    description:
      "Security awareness program with annual training curriculum, role-based modules, and simulated phishing campaigns.",
    icon: Target,
    benefits: [
      "Annual training curriculum",
      "Role-based modules",
      "Simulated phishing",
      "Compliance evidence",
      "Security newsletters",
    ],
    simplePrice: true,
  },
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />

      {/* Hero Section */}
      <section className="pricing-hero py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 pricing-hero-animation"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6 backdrop-blur-md border border-white/20">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-semibold">Transparent Pricing</span>
            </div>
            <h1 className="pricing-hero-title text-5xl md:text-7xl font-bold mb-6">
              Security Solutions for Every Budget
            </h1>
            <p className="pricing-hero-subtitle text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              Comprehensive cybersecurity and compliance services with flexible
              engagement models tailored to your organization's needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-slate-700 hover:bg-orange-500 text-white pricing-cta-button transition-colors"
                >
                  Get Started <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
              Our Services & Pricing
            </h2>
            <p className="text-center text-slate-400 text-lg">
              Choose from our comprehensive suite of security and compliance
              services
            </p>
          </div>

          <div className="pricing-grid">
            {pricingData.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="pricing-card-wrapper"
                >
                  <Card
                    className="pricing-card h-full relative overflow-hidden group border-0 flex flex-col"
                  >

                    <div className="pricing-card-glow"></div>

                    <CardHeader className="pb-4 flex-grow">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <p className="text-sm font-semibold text-orange-400 mb-2">
                            {service.category}
                          </p>
                          <CardTitle className="text-xl mb-2 text-white">
                            {service.name}
                          </CardTitle>
                          <CardDescription className="text-slate-300 text-base">
                            {service.description}
                          </CardDescription>
                        </div>
                        <IconComponent className="h-12 w-12 text-orange-400 opacity-20 flex-shrink-0" />
                      </div>
                    </CardHeader>

                    {/* Pricing Section */}
                    <div className="px-6 pb-6">
                      {service.simplePrice ? (
                        <div className="pricing-tier-display mb-6 p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                          <div className="text-sm text-slate-400 mb-2">
                            Starting Price ({service.type})
                          </div>
                          <p className="text-3xl font-bold text-orange-400">
                            {service.startingPrice}
                          </p>
                          <p className="text-xs text-slate-400 mt-2">
                            Custom pricing available based on scope
                          </p>
                        </div>
                      ) : (
                        <div className="pricing-tier-display mb-6 p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                          <div className="text-sm text-slate-400 mb-2">
                            Pricing Type
                          </div>
                          <p className="font-semibold text-white mb-4">
                            {service.type}
                          </p>

                          <div className="grid grid-cols-3 gap-4">
                            <div>
                              <p className="text-xs text-slate-500">{service.lowLabel || 'Low'}</p>
                              <p className="text-lg font-bold text-white">
                                {service.low}
                              </p>
                              {service.lowDesc && (
                                <p className="text-xs text-slate-400 mt-1">
                                  {service.lowDesc}
                                </p>
                              )}
                            </div>
                            <div className="border-l border-r border-slate-700">
                              <p className="text-xs text-slate-500">
                                {service.typicalLabel || 'Typical'}
                              </p>
                              <p className="text-lg font-bold text-orange-400">
                                {service.typical}
                              </p>
                              {service.typicalDesc && (
                                <p className="text-xs text-slate-400 mt-1">
                                  {service.typicalDesc}
                                </p>
                              )}
                            </div>
                            <div>
                              <p className="text-xs text-slate-500">{service.highLabel || 'High'}</p>
                              <p className="text-lg font-bold text-white">
                                {service.high}
                              </p>
                              {service.highDesc && (
                                <p className="text-xs text-slate-400 mt-1">
                                  {service.highDesc}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Benefits */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-sm mb-3 text-white">
                          What's Included:
                        </h4>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-orange-400 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-slate-300">
                                {benefit}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA Button */}
                      <Link to="/contact">
                        <Button
                          className="w-full bg-slate-700 hover:bg-orange-500 text-white transition-colors pricing-cta-btn"
                          variant="default"
                        >
                          Get Started
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </Card>
                </div>
              );
            })}
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

      <Footer />
    </div>
  );
}
