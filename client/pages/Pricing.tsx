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
    name: "SOC 2 (Type III) Readiness & Cert",
    category: "Compliance",
    type: "One-time (monthly breakdown)",
    low: "$4,000",
    high: "$9,000",
    typical: "$7,000",
    description:
      "Readiness assessment, SOC 2 Type III testing and evidence collection, evidence packag testing, and validated assessor coordination (e.g., Thorough, Standish, Socurity).",
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
    category: "Compliance / Cert",
    type: "One-time (monthly breakdown)",
    low: "$4,500",
    high: "$9,500",
    typical: "$7,500",
    description:
      "ISMS build out and certification support. ISO 27001 certification support, initial audit, management Stage 1 audits (Stage 2 assessor coordination (e.g., Thorough, Standish, Socurity).",
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
    category: "Compliance / Cert",
    type: "Engagement-based",
    low: "$8,000",
    high: "$15,000",
    typical: "$10,000",
    description:
      "HITRUST assessment execution and remediation. Engagement-based model with Stage 1 audits (Stage 2 audits for healthcare and related assessor coordination (e.g., Thorough, Standish).",
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
    name: "Internal Audit / Security Risk Assessment",
    category: "Compliance-Based",
    type: "Engagement-based",
    low: "$3,500",
    high: "$5,500",
    typical: "$4,000",
    description:
      "Independent internal audit or security risk assessment. Delivers comprehensive technical assessment, evidence collection and validated assessor coordination - escalation (e.g., Thorough, Pentesi).",
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
    id: 6,
    name: "Penetration Testing",
    category: "Offensive Security",
    type: "Per-test",
    low: "$3,500",
    high: "$4,500",
    typical: "$4,000",
    description:
      "Manual + automated penetration testing across web, APIs, cloud, and internal networks. Includes multi + automated penetration testing across web, APIs, cloud, and internal networks. Includes mapping out, remediation guides. Evidence & penetration testing across web, APIs, cloud, and internal networks.",
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
    id: 7,
    name: "GRC Platform — Resale + Implementation",
    category: "Platform",
    type: "Annual",
    low: "$4,000",
    high: "$6,000",
    typical: "$5,000",
    description:
      "Reseller of GRC/compliance automation platforms (Domo, Thorough, Vanta-class) with white-glove implementation, embedded tools built in vs. cloud platform pricing. GRC/compliance automation platforms (Domo, Thorough, Vanta-class) with white-glove implementation - margin built in vs. cloud platform pricing.",
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
    id: 8,
    name: "Managed IT Support",
    category: "Managed Services",
    type: "Monthly",
    low: "$2,000",
    high: "$5,000",
    typical: "$3,500",
    description:
      "Outsourced IT helpdesk and endpoint operations: user onboarding, HOMED (Hernode, Wault, etc.), SSO, endpoint compliance, and role management. Scaled by seat count.",
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
    id: 9,
    name: "Compliance / Audit Readiness (Other Frameworks)",
    category: "Compliance",
    type: "Engagement-based",
    low: "$4,500",
    high: "$7,500",
    typical: "$5,750",
    description:
      "Readiness and audit support for additional frameworks: HIPAA, PCI-DSS, NIST 800-53 / CMMC, PIPEDA. Same delivery model as SOC 2/ISO, tailored to the target framework.",
    icon: Shield,
    benefits: [
      "Framework-specific assessment",
      "Readiness planning",
      "HIPAA compliance",
      "PCI-DSS support",
      "NIST/CMMC guidance",
    ],
  },
  {
    id: 10,
    name: "Security Awareness / Phishing Training",
    category: "Training",
    type: "Custom",
    low: "$1,000",
    high: "$3,000",
    typical: "$2,000",
    description:
      "Security awareness program; annual training curriculum, role-based modules, Security Newsletters, simulated phishing campaigns with metrics, and regulation-ready completion evidence. Blake handled via the Com-Sec Phishing Testing form.",
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
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pricing-hero py-20 bg-gradient-to-br from-primary via-blue-800 to-accent text-white relative overflow-hidden">
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
                className="bg-white text-primary hover:bg-white/90 pricing-cta-button"
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Our Services & Pricing
            </h2>
            <p className="text-center text-muted-foreground text-lg">
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
                  className={`pricing-card-wrapper animation-delay-${index * 100}`}
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  <Card
                    className={`pricing-card h-full relative overflow-hidden group ${
                      service.featured
                        ? "pricing-card-featured border-accent/50"
                        : "border-2 border-gray-200"
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
                          <p className="text-sm font-semibold text-accent mb-2">
                            {service.category}
                          </p>
                          <CardTitle className="text-xl mb-2">
                            {service.name}
                          </CardTitle>
                          <CardDescription className="text-base">
                            {service.description}
                          </CardDescription>
                        </div>
                        <IconComponent className="h-12 w-12 text-accent opacity-10 flex-shrink-0" />
                      </div>
                    </CardHeader>

                    {/* Pricing Section */}
                    <div className="px-6 pb-6">
                      <div className="pricing-tier-display mb-6 p-4 bg-gradient-to-r from-accent/5 to-blue-100/5 rounded-lg border border-accent/10">
                        <div className="text-sm text-muted-foreground mb-2">
                          Pricing Type
                        </div>
                        <p className="font-semibold text-primary mb-4">
                          {service.type}
                        </p>

                        <div className="grid grid-cols-3 gap-4">
                          <div>
                            <p className="text-xs text-muted-foreground">Low</p>
                            <p className="text-lg font-bold text-primary">
                              {service.low}
                            </p>
                          </div>
                          <div className="border-l border-r border-gray-200">
                            <p className="text-xs text-muted-foreground">
                              Typical
                            </p>
                            <p className="text-lg font-bold text-accent">
                              {service.typical}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">High</p>
                            <p className="text-lg font-bold text-primary">
                              {service.high}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Benefits */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-sm mb-3">
                          What's Included:
                        </h4>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-muted-foreground">
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
                            ? "bg-gradient-to-r from-accent to-orange-600 hover:from-accent/90 hover:to-orange-600/90 text-white"
                            : "border-2 border-accent text-accent hover:bg-accent hover:text-white"
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
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
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
                className="pricing-faq-item p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-accent hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-lg mb-3">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Secure Your Organization?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let's discuss which security solutions are right for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-primary"
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
