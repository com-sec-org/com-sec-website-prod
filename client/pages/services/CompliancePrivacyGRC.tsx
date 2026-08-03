import { Helmet } from "react-helmet";
import { Navigation } from "@/components/Navigation";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CheckCircle,
  ChevronRight,
  FileCheck,
  Shield,
  BarChart3,
  Users,
  Lock,
  Award,
  AlertTriangle,
  Briefcase,
  TrendingUp,
  BookOpen,
} from "lucide-react";

export default function CompliancePrivacyGRC() {
  return (
    <>
      <Helmet>
        <title>Compliance, Privacy & GRC Services | Com-Sec</title>
        <meta
          name="description"
          content="Comprehensive compliance, privacy, and GRC services covering SOC 2, ISO 27001, HIPAA, GDPR, HITRUST, and AI governance. Expert guidance for regulatory frameworks."
        />
        <link rel="canonical" href="https://com-sec.io/compliance-privacy-grc" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Compliance, Privacy & GRC Services | Com-Sec" />
        <meta property="og:description" content="Expert compliance, privacy, and governance services for SOC 2, ISO 27001, HIPAA, GDPR, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://com-sec.io/compliance-privacy-grc" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-24 pb-20 bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-16 left-8 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-12 right-24 w-28 h-28 bg-blue-400/10 rounded-full blur-xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-blue-100 rounded-full px-6 py-2 text-teal-700 font-semibold text-sm mb-8 border border-green-200">
                <FileCheck className="h-4 w-4 mr-2" />
                Regulatory Excellence
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Compliance, Privacy &
                </span>
                <span className="block bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
                  GRC Solutions
                </span>
              </h1>

              <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
                Expert guidance on regulatory compliance, privacy obligations, and governance. Achieve and maintain certification across all major frameworks.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-500/90 hover:to-emerald-600/90 transform hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <Link to="/contact">
                    Start Your Compliance Journey
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Frameworks */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Compliance Frameworks We Support
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Expert guidance across industry-leading standards and regulations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "SOC 2 Type I & II", icon: "🔐" },
                { name: "ISO 27001", icon: "📋" },
                { name: "ISO 27701 (Privacy)", icon: "🛡️" },
                { name: "ISO 42001 (AI)", icon: "🤖" },
                { name: "HIPAA", icon: "⚕️" },
                { name: "HITRUST", icon: "✓" },
                { name: "GDPR", icon: "🌍" },
                { name: "CCPA", icon: "🔒" },
                { name: "Microsoft SSPA", icon: "☁️" },
                { name: "ADA-CASA AL1", icon: "♿" },
                { name: "NIST CSF & CIS Controls", icon: "📊" },
                { name: "Risk Assessments", icon: "⚠️" }
              ].map((framework, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow text-center">
                  <CardHeader>
                    <div className="text-4xl mb-3">{framework.icon}</div>
                    <CardTitle className="text-lg">{framework.name}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service Offerings */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Our Compliance & GRC Services
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Readiness Assessments",
                  icon: BarChart3,
                  description: "Evaluate your current state against target frameworks and identify gaps.",
                  price: "Starting at $6,000"
                },
                {
                  title: "Internal Audits",
                  icon: FileCheck,
                  description: "Comprehensive internal audits to assess control effectiveness and compliance.",
                  price: "Starting at $4,500"
                },
                {
                  title: "Gap Assessments",
                  icon: AlertTriangle,
                  description: "Detailed analysis of gaps between current and required compliance state.",
                  price: "Starting at $4,000"
                },
                {
                  title: "Audit Coordination",
                  icon: Users,
                  description: "End-to-end coordination with external auditors and preparation support.",
                  price: "Starting at $3,500"
                },
                {
                  title: "Evidence Collection",
                  icon: Lock,
                  description: "Systematic collection and organization of compliance evidence.",
                  price: "Starting at $2,500"
                },
                {
                  title: "Policy Development",
                  icon: BookOpen,
                  description: "Development of comprehensive security and compliance policies.",
                  price: "Starting at $3,000"
                },
                {
                  title: "GRC Platform Implementation",
                  icon: Shield,
                  description: "Implement and configure GRC platforms (Drata, Vanta, Secureframe, Sprinto, Screenata, Ceel).",
                  price: "Custom pricing"
                },
                {
                  title: "Privacy & AI Governance",
                  icon: Briefcase,
                  description: "Fractional DPO services and AI governance framework development.",
                  price: "Starting at $2,000/month"
                },
                {
                  title: "Vendor Risk Management",
                  icon: TrendingUp,
                  description: "Third-party risk assessments and security questionnaire support.",
                  price: "Starting at $3,500"
                }
              ].map((service, idx) => {
                const IconComponent = service.icon;
                return (
                  <Card key={idx} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-xl">{service.title}</CardTitle>
                          <CardDescription className="mt-2">{service.description}</CardDescription>
                        </div>
                        <IconComponent className="h-8 w-8 text-accent flex-shrink-0 ml-4" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="font-bold text-accent">{service.price}</div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Compliance Packages */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Compliance Packages
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Comprehensive, all-inclusive engagements for major compliance initiatives
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Compliance & Framework Audit Readiness",
                  price: "$6,000+",
                  frameworks: ["SOC 2", "ISO 27001", "GDPR", "HIPAA", "NIST", "HITRUST"],
                  includes: [
                    "Gap assessments",
                    "Policy & documentation support",
                    "Control implementation guidance",
                    "Evidence readiness",
                    "Audit preparation",
                    "Compliance roadmap"
                  ]
                },
                {
                  title: "Full SOC 2 Audit Package",
                  price: "$18,500",
                  badge: "BEST VALUE",
                  frameworks: ["SOC 2 Type II"],
                  includes: [
                    "Complete readiness assessment",
                    "GRC platform support (Drata, Vanta, Ceel)",
                    "Policy implementation",
                    "Auditor coordination",
                    "Evidence monitoring",
                    "Observation support",
                    "Compliance management through report"
                  ]
                }
              ].map((pkg, idx) => (
                <Card key={idx} className={`hover:shadow-lg transition-shadow relative ${pkg.badge ? 'border-2 border-accent' : 'border-2'}`}>
                  {pkg.badge && (
                    <div className="absolute -top-4 left-6 bg-accent text-white px-4 py-1 rounded-full text-sm font-bold">
                      {pkg.badge}
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-xl">{pkg.title}</CardTitle>
                    <div className="font-bold text-2xl text-accent mt-3">{pkg.price}</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Frameworks Covered:</h4>
                      <div className="flex flex-wrap gap-2">
                        {pkg.frameworks.map((fw, i) => (
                          <span key={i} className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full font-semibold">
                            {fw}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-3">What's Included:</h4>
                      <ul className="space-y-2">
                        {pkg.includes.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Why Partner With Us for Compliance
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                "Deep expertise across all major compliance frameworks",
                "Proven track record with successful certifications",
                "Efficient audit preparation and coordination",
                "Hands-on support throughout compliance journey",
                "GRC platform implementation expertise",
                "Privacy and AI governance specialization",
                "Cost-effective compliance solutions",
                "Ongoing monitoring and continuous improvement"
              ].map((benefit, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-lg text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Achieve Compliance?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Let's discuss your compliance goals and create a roadmap to success
            </p>
            <Button
              size="lg"
              className="bg-white text-teal-900 hover:bg-gray-100"
              asChild
            >
              <Link to="/contact">
                Schedule Your Compliance Assessment
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
