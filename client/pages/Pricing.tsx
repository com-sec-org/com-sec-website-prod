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
    low: "$8,000",
    high: "$12,000",
    typical: "$10,000",
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
    featured: true,
  },
  {
    id: 2,
    name: "SOC 2 Type II Readiness & Cert",
    category: "Compliance",
    type: "One-time (monthly breakdown)",
    low: "$4,000",
    high: "$9,000",
    typical: "$7,000",
    description:
      "Readiness assessment, SOC 2 Type II testing and evidence collection, evidence packaging, and validated assessor coordination.",
    icon: Award,
    benefits: [
      "Gap analysis and remediation",
      "Policy development",
      "Evidence collection",
      "Audit preparation",
      "Assessor coordination",
    ],
  },
  {
    id: 3,
    name: "ISO 27001 Certification",
    category: "Compliance / Frameworks",
    type: "One-time (monthly breakdown)",
    low: "$4,500",
    high: "$9,500",
    typical: "$7,500",
    description:
      "ISMS build out and certification support. ISO 27001 certification support, initial audit, management Stage 1 & 2 audits with assessor coordination.",
    icon: Target,
    benefits: [
      "ISMS development",
      "Initial audit support",
      "Stage 1 & 2 coordination",
      "Documentation assistance",
      "Compliance mapping",
    ],
  },
  {
    id: 4,
    name: "HITRUST Certification",
    category: "Compliance / Frameworks",
    type: "Engagement-based",
    low: "$8,000",
    high: "$15,000",
    typical: "$10,000",
    description:
      "HITRUST assessment execution and remediation. Engagement-based model with Stage 1 & 2 audits for healthcare compliance.",
    icon: Zap,
    benefits: [
      "Assessment execution",
      "Remediation planning",
      "Stage 1 & 2 support",
      "Healthcare compliance",
      "Assessor coordination",
    ],
  },
  {
    id: 5,
    name: "HIPAA Compliance",
    category: "Compliance / Frameworks",
    type: "Engagement-based",
    low: "$5,000",
    high: "$12,000",
    typical: "$8,500",
    description:
      "HIPAA security and privacy compliance assessment, implementation guidance, and audit support for healthcare organizations.",
    icon: Shield,
    benefits: [
      "Security assessment",
      "Privacy compliance review",
      "Risk analysis",
      "Implementation guidance",
      "Audit readiness support",
    ],
  },
  {
    id: 6,
    name: "PCI-DSS Compliance",
    category: "Compliance / Frameworks",
    type: "Engagement-based",
    low: "$6,000",
    high: "$13,000",
    typical: "$9,500",
    description:
      "PCI-DSS compliance assessment and remediation for payment card industry organizations and merchants.",
    icon: Target,
    benefits: [
      "Gap analysis",
      "Control implementation",
      "Technical assessment",
      "Documentation support",
      "Validator coordination",
    ],
  },
  {
    id: 7,
    name: "NIST 800-53 / CMMC",
    category: "Compliance / Frameworks",
    type: "Engagement-based",
    low: "$7,000",
    high: "$14,000",
    typical: "$10,500",
    description:
      "NIST 800-53 and CMMC compliance for defense contractors and government agencies requiring federal compliance.",
    icon: Award,
    benefits: [
      "Security controls mapping",
      "Implementation support",
      "Assessment readiness",
      "CMMC Level guidance",
      "Documentation assistance",
    ],
  },
  {
    id: 8,
    name: "GDPR Compliance",
    category: "Compliance / Frameworks",
    type: "Engagement-based",
    low: "$5,500",
    high: "$12,000",
    typical: "$8,750",
    description:
      "GDPR compliance assessment and implementation for organizations handling EU resident data.",
    icon: Target,
    benefits: [
      "Data inventory assessment",
      "Privacy impact analysis",
      "Controls implementation",
      "DPA coordination",
      "Ongoing compliance support",
    ],
  },
  {
    id: 9,
    name: "Internal Audit / Security Risk Assessment",
    category: "Compliance-Based",
    type: "Engagement-based",
    low: "$3,500",
    high: "$5,500",
    typical: "$4,000",
    description:
      "Independent internal audit or security risk assessment. Delivers comprehensive technical assessment and evidence collection.",
    icon: Users,
    benefits: [
      "Technical assessment",
      "Independent evaluation",
      "Evidence packaging",
      "Detailed reporting",
      "Risk prioritization",
    ],
  },
  {
    id: 10,
    name: "Penetration Testing",
    category: "Offensive Security",
    type: "Per-test",
    low: "$3,500",
    high: "$4,500",
    typical: "$4,000",
    description:
      "Manual + automated penetration testing across web, APIs, cloud, and internal networks. Includes remediation guides.",
    icon: Rocket,
    benefits: [
      "Manual penetration testing",
      "Automated scanning",
      "Multi-vector assessment",
      "Remediation roadmap",
      "Evidence documentation",
    ],
  },
  {
    id: 11,
    name: "GRC Platform — Resale + Implementation",
    category: "Platform",
    type: "Annual",
    low: "$4,000",
    high: "$6,000",
    typical: "$5,000",
    description:
      "Reseller of GRC/compliance automation platforms with white-glove implementation and training.",
    icon: TrendingUp,
    benefits: [
      "Platform integration",
      "Implementation support",
      "Training and onboarding",
      "Ongoing optimization",
      "White-glove service",
    ],
  },
  {
    id: 12,
    name: "Managed IT Support",
    category: "Managed Services",
    type: "Monthly",
    low: "$2,000",
    high: "$5,000",
    typical: "$3,500",
    description:
      "Outsourced IT helpdesk and endpoint operations: user onboarding, SSO, endpoint compliance, and role management.",
    icon: Zap,
    benefits: [
      "24/7 helpdesk support",
      "Endpoint management",
      "User onboarding",
      "Access control",
      "Compliance monitoring",
    ],
  },
  {
    id: 13,
    name: "Security Awareness / Phishing Training",
    category: "Training",
    type: "Custom",
    low: "$1,000",
    high: "$3,000",
    typical: "$2,000",
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
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white pricing-cta-button"
              >
                Schedule Consultation <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Compare Plans
              </Button>
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
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  <Card
                    className={`pricing-card h-full relative overflow-hidden group border-0 ${
                      service.featured
                        ? "pricing-card-featured"
                        : ""
                    }`}
                  >
                    {service.featured && (
                      <div className="pricing-featured-badge">
                        <span>⭐ Most Popular</span>
                      </div>
                    )}

                    <div className="pricing-card-glow"></div>

                    <CardHeader className="pb-4">
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
                      <div className="pricing-tier-display mb-6 p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                        <div className="text-sm text-slate-400 mb-2">
                          Pricing Type
                        </div>
                        <p className="font-semibold text-white mb-4">
                          {service.type}
                        </p>

                        <div className="grid grid-cols-3 gap-4">
                          <div>
                            <p className="text-xs text-slate-500">Low</p>
                            <p className="text-lg font-bold text-white">
                              {service.low}
                            </p>
                          </div>
                          <div className="border-l border-r border-slate-700">
                            <p className="text-xs text-slate-500">
                              Typical
                            </p>
                            <p className="text-lg font-bold text-orange-400">
                              {service.typical}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-500">High</p>
                            <p className="text-lg font-bold text-white">
                              {service.high}
                            </p>
                          </div>
                        </div>
                      </div>

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
                      <Button
                        className={`w-full pricing-cta-btn ${
                          service.featured
                            ? "bg-orange-500 hover:bg-orange-600 text-white"
                            : "bg-slate-700 hover:bg-slate-600 text-white border-orange-400/30"
                        }`}
                        variant={service.featured ? "default" : "outline"}
                      >
                        Get Started
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </Card>
                </div>
              );
            })}
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
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white"
            >
              Schedule Free Consultation
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              View Services
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
