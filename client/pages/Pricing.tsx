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
  Search,
} from "lucide-react";
import "../styles/pricing.css";

// Section 1: One-Time Engagements
const oneTimeEngagements = [
  {
    id: 1,
    name: "Security Assessments",
    category: "One-Time Engagements",
    type: "One-time",
    startingPrice: "$4,000",
    description:
      "Technical and operational security assessment services designed to identify vulnerabilities, validate controls, and improve organizational security posture.",
    icon: Search,
    highlights: [
      "Penetration Testing - $3,500",
      "Internal Audit - $3,500",
    ],
    benefits: [
      "Web & cloud penetration testing",
      "Internal compliance audits",
      "Risk analysis",
      "Remediation recommendations",
      "Technical reporting",
      "Evidence validation",
    ],
    simplePrice: true,
    buttonText: "Learn More",
  },
  {
    id: 2,
    name: "Compliance & Framework Audit Readiness",
    category: "One-Time Engagements",
    type: "One-time",
    startingPrice: "$6,000",
    description:
      "Comprehensive compliance and audit readiness support for major frameworks and certifications.",
    icon: Award,
    frameworks: [
      "SOC 2 Type I",
      "SOC 2 Type II",
      "ISO 27001",
      "GDPR",
      "NIST",
      "HITRUST",
    ],
    benefits: [
      "Gap assessments",
      "Policy & documentation support",
      "Control implementation guidance",
      "Evidence readiness",
      "Audit preparation",
      "Compliance roadmap",
    ],
    simplePrice: true,
    buttonText: "Get Started",
  },
  {
    id: 3,
    name: "Full SOC 2 Audit Package",
    category: "One-Time Engagements",
    type: "One-time",
    startingPrice: "$18,500",
    description:
      "Complete SOC 2 Type II engagement including readiness, evidence collection, GRC platform support, auditor coordination, and compliance management from kickoff to final report.",
    icon: Award,
    benefits: [
      "GRC platform support",
      "Auditor coordination",
      "Policy implementation",
      "Evidence monitoring",
      "Observation support",
      "Compliance management",
    ],
    simplePrice: true,
    badge: "MOST POPULAR",
    pricingDisplay: {
      headline: "All-Inclusive",
      price: "$18,500",
      subtext: "Complete SOC 2 Type II engagement",
    },
    buttonText: "Book a Consultation",
  },
];

// Section 2: Ongoing Support Services
const ongoingSupportServices = [
  {
    id: 4,
    name: "vCISO Support",
    category: "Ongoing Support",
    type: "Monthly",
    startingPrice: "$2,500",
    description:
      "Virtual Chief Information Security Officer services including security strategy, risk management, and compliance oversight.",
    icon: Shield,
    benefits: [
      "Security strategy development",
      "Risk management oversight",
      "Policy development and review",
      "Compliance monitoring",
      "Board-level reporting",
      "Regulatory guidance",
    ],
    simplePrice: true,
    buttonText: "Learn More",
  },
  {
    id: 5,
    name: "vCISO + IT Management",
    category: "Ongoing Support",
    type: "Monthly",
    startingPrice: "$4,500",
    description:
      "Combined virtual security leadership and IT operations management for comprehensive security and infrastructure oversight.",
    icon: Users,
    benefits: [
      "Fractional CISO coverage",
      "IT helpdesk support",
      "Endpoint management",
      "User onboarding & access control",
      "Security strategy development",
      "Compliance monitoring",
    ],
    simplePrice: true,
    buttonText: "Learn More",
  },
  {
    id: 6,
    name: "MSSP + SOC Support",
    category: "Ongoing Support",
    type: "Monthly",
    startingPrice: "$6,500",
    description:
      "Managed Security Service Provider with 24/7 Security Operations Center monitoring and threat response capabilities.",
    icon: Rocket,
    benefits: [
      "24/7 SOC monitoring",
      "Threat detection and response",
      "Security incident management",
      "Log aggregation and analysis",
      "Vulnerability management",
      "Security reporting",
    ],
    simplePrice: true,
    buttonText: "Learn More",
  },
];

const pricingData = [...oneTimeEngagements, ...ongoingSupportServices];

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

      {/* Pricing Sections */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* SECTION 1: One-Time Engagements */}
          <div className="mb-20">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
                One-Time Compliance & Security Engagements
              </h2>
              <p className="text-center text-slate-400 text-lg">
                Fixed-cost project engagements for compliance readiness, certifications, and security assessments.
              </p>
            </div>

            <div className="pricing-grid">
              {oneTimeEngagements.map((service) => {
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

                      <CardHeader className="pb-4 flex-grow relative">
                        {service.badge && (
                          <div className="absolute top-2 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                            {service.badge}
                          </div>
                        )}
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
                            {service.pricingDisplay?.headline || `Starting Price (${service.type})`}
                          </div>
                          <p className="text-3xl font-bold text-orange-400">
                            {service.pricingDisplay?.price || service.startingPrice}
                          </p>
                          <p className="text-xs text-slate-400 mt-2">
                            {service.pricingDisplay?.subtext || "Custom pricing available based on scope"}
                          </p>
                        </div>

                        {/* Highlights Section - Services/Frameworks */}
                        {service.highlights && (
                          <div className="mb-6">
                            <p className="text-xs font-semibold text-orange-400 mb-3 uppercase tracking-wider">Highlighted Services</p>
                            <div className="flex flex-wrap gap-2">
                              {service.highlights.map((highlight, idx) => (
                                <span key={idx} className="px-3 py-1 bg-orange-500/20 text-orange-300 text-xs rounded-full font-semibold border border-orange-500/30">
                                  {highlight}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {service.frameworks && (
                          <div className="mb-6">
                            <p className="text-xs font-semibold text-orange-400 mb-3 uppercase tracking-wider">Frameworks Covered</p>
                            <div className="flex flex-wrap gap-2">
                              {service.frameworks.map((framework, idx) => (
                                <span key={idx} className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full font-semibold border border-blue-500/30">
                                  {framework}
                                </span>
                              ))}
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
                        <Link to={service.href || "/contact"}>
                          <Button
                            className="w-full bg-slate-700 hover:bg-orange-500 text-white transition-colors pricing-cta-btn"
                            variant="default"
                          >
                            {service.buttonText || "Get Started"}
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

          {/* Section Divider */}
          <div className="my-16 border-t border-slate-700"></div>

          {/* SECTION 2: Ongoing Support Services */}
          <div>
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
                Ongoing Security & IT Support
              </h2>
              <p className="text-center text-slate-400 text-lg">
                Continuous monthly security, compliance, and managed IT support services.
              </p>
            </div>

            <div className="pricing-grid">
              {ongoingSupportServices.map((service) => {
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

                      <CardHeader className="pb-4 flex-grow relative">
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
                            Starting Price (Monthly)
                          </div>
                          <p className="text-3xl font-bold text-orange-400">
                            {service.startingPrice}
                          </p>
                          <p className="text-xs text-slate-400 mt-2">
                            Per month
                          </p>
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
                        <Link to={service.href || "/contact"}>
                          <Button
                            className="w-full bg-slate-700 hover:bg-orange-500 text-white transition-colors pricing-cta-btn"
                            variant="default"
                          >
                            {service.buttonText || "Learn More"}
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
