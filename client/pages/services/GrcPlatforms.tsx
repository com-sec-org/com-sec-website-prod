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
  Zap,
  CheckCircle,
  TrendingUp,
  Users,
  ChevronRight,
  ArrowRight,
  Target,
  BarChart3,
  Cog,
} from "lucide-react";

export default function GrcPlatforms() {
  return (
    <>
      <Helmet>
        <title>GRC Platforms & Compliance Technology | Com-Sec</title>
        <meta
          name="description"
          content="Governance, Risk, and Compliance platforms that scale with your business. Expert implementation and support for Vanta, Drata, Secureframe, and more."
        />
        <link rel="canonical" href="https://com-sec.io/grc-platforms" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="GRC Platforms & Compliance Technology | Com-Sec" />
        <meta
          property="og:description"
          content="Platform-agnostic GRC solutions to automate compliance, streamline audits, and maintain continuous security readiness."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://com-sec.io/grc-platforms" />
        <meta property="og:site_name" content="Com-Sec" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-24 pb-20 bg-gradient-to-br from-indigo-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-16 left-8 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-12 right-24 w-28 h-28 bg-emerald-400/10 rounded-full blur-xl"></div>
            <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-red-400/10 rounded-full blur-lg"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <div className="inline-flex items-center bg-gradient-to-r from-red-100 to-green-100 rounded-full px-6 py-2 text-red-700 font-semibold text-sm mb-8 border border-red-200">
                <BarChart3 className="h-4 w-4 mr-2" />
                Compliance Technology That Scales
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  GRC Platforms
                </span>
                <span className="block bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent">
                  & Governance Solutions
                </span>
              </h1>

              <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
                A strong Governance, Risk, and Compliance platform helps organizations automate compliance activities, streamline audits, and maintain continuous security readiness.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-500 to-emerald-600 hover:from-red-500/90 hover:to-emerald-600/90 transform hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <Link to="/contact">
                    Evaluate Your Needs
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Our Platform-Agnostic Approach
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We help organizations evaluate, implement, and manage leading GRC platforms based on their compliance goals, business needs, security maturity, and growth plans.
              </p>
            </div>

            <Card className="hover:shadow-lg transition-all duration-300 border-2 mb-12">
              <CardHeader>
                <CardTitle className="text-2xl text-primary mb-4">
                  Beyond the Tool
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Many organizations purchase a GRC platform expecting compliance to happen automatically. The reality is that technology accelerates compliance—it does not replace security expertise.
                </p>
                <p className="text-muted-foreground mb-6">
                  Com-Sec combines:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Security leadership</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Compliance expertise</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Technical implementation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Audit experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>GRC platform knowledge</span>
                  </li>
                </ul>
                <p className="text-muted-foreground font-semibold">
                  to build programs that are practical, scalable, and audit-ready.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Supported Platforms */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                GRC Platforms We Support
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Expert implementation and management across leading GRC solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  name: "Vanta",
                  description: "A leading compliance automation platform designed to help organizations achieve and maintain security certifications efficiently.",
                  capabilities: [
                    "Automated evidence collection",
                    "Continuous control monitoring",
                    "Policy management",
                    "Risk management",
                    "Vendor risk workflows",
                    "Security awareness tracking",
                    "Cloud and SaaS integrations",
                    "Audit collaboration",
                  ],
                },
                {
                  name: "Drata",
                  description: "Provides compliance automation and continuous monitoring capabilities for organizations managing complex security and compliance requirements.",
                  capabilities: [
                    "Automated control monitoring",
                    "Evidence collection",
                    "Asset management",
                    "Risk assessments",
                    "Policy lifecycle management",
                    "Vendor management",
                    "Compliance reporting",
                    "Auditor collaboration",
                  ],
                },
                {
                  name: "Secureframe",
                  description: "Helps organizations automate compliance programs and achieve certifications faster through automated workflows and security integrations.",
                  capabilities: [
                    "Automated evidence collection",
                    "Security control monitoring",
                    "Policy generation and management",
                    "Employee compliance workflows",
                    "Risk management",
                    "Vendor management",
                    "Audit preparation",
                    "Security questionnaire support",
                  ],
                },
                {
                  name: "Scrut Automation",
                  description: "Provides a GRC platform focused on simplifying compliance management, risk tracking, and audit readiness.",
                  capabilities: [
                    "Compliance automation",
                    "Control management",
                    "Risk assessments",
                    "Evidence collection",
                    "Policy management",
                    "Vendor risk management",
                    "Audit workflows",
                    "Continuous monitoring",
                  ],
                },
                {
                  name: "Comp AI",
                  description: "Provides compliance automation focused on making security certifications more accessible and efficient for growing organizations.",
                  capabilities: [
                    "Compliance workflows",
                    "Evidence automation",
                    "Policy management",
                    "Risk tracking",
                    "Employee security processes",
                    "Audit preparation",
                    "Framework mapping",
                  ],
                },
                {
                  name: "Ceel",
                  description: "Provides a modern compliance and governance platform designed to help organizations manage security controls, risks, and compliance operations.",
                  capabilities: [
                    "Control management",
                    "Compliance workflows",
                    "Risk tracking",
                    "Evidence organization",
                    "Governance processes",
                    "Audit support",
                    "Operational visibility",
                  ],
                },
                {
                  name: "VerifyAI",
                  description: "Helps organizations manage AI governance, security, and compliance requirements as artificial intelligence adoption expands.",
                  capabilities: [
                    "AI risk assessments",
                    "AI inventory management",
                    "Governance workflows",
                    "Policy management",
                    "Compliance documentation",
                    "Risk monitoring",
                  ],
                },
                {
                  name: "Rippling",
                  description: "Combines workforce management, IT management, and security administration into a unified platform for comprehensive compliance.",
                  capabilities: [
                    "Employee onboarding and offboarding automation",
                    "Identity and access management",
                    "Device management",
                    "Application provisioning and access controls",
                    "Security policy enforcement",
                    "Employee compliance workflows",
                    "HR and IT workflow automation",
                    "Audit-ready reporting",
                  ],
                },
                {
                  name: "Screenata",
                  description: "An AI-powered compliance officer that scans your infrastructure, writes policies grounded in real systems, and operates continuously across Slack, email, terminal, and PRs to automate evidence collection and compliance operations.",
                  capabilities: [
                    "Infrastructure scanning and analysis",
                    "AI-generated policy creation from real systems",
                    "Automated evidence collection and signing",
                    "Continuous control monitoring at 6 AM",
                    "Claim-to-artifact traceability",
                    "Slack and email reporting",
                    "GitHub and terminal integration",
                    "Multi-framework support (SOC 2, HIPAA, more)",
                  ],
                },
                {
                  name: "OneLeet",
                  description: "A security-first compliance automation platform that combines continuous monitoring with in-house pentesting expertise, code security scanning, and dedicated vCISO guidance for real-world security implementation alongside compliance.",
                  capabilities: [
                    "Automated evidence collection and monitoring",
                    "OSCE-certified penetration testing",
                    "Code security scanning and vulnerability detection",
                    "Attack surface management",
                    "Dark web monitoring",
                    "Dedicated vCISO support",
                    "Control workflow management and task tracking",
                    "Integration with AWS, Azure, GCP, GitHub, Slack",
                  ],
                },
              ].map((platform) => (
                <Card
                  key={platform.name}
                  className="hover:shadow-lg transition-all duration-300 border-2 flex flex-col"
                >
                  <CardHeader>
                    <CardTitle className="text-xl text-primary mb-2">
                      {platform.name}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {platform.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div>
                      <p className="text-sm font-semibold text-primary mb-3">
                        Key Capabilities:
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {platform.capabilities.map((capability) => (
                          <li key={capability} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              {capability}
                            </span>
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

        {/* How Com-Sec Helps */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                How Com-Sec Helps
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A GRC platform is only as effective as the program built around it.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Platform Selection & Strategy",
                  description: "Help identify the right GRC platform based on your environment and goals.",
                  icon: Target,
                },
                {
                  title: "Implementation & Configuration",
                  description: "Expert setup and configuration of workflows, integrations, and processes.",
                  icon: Cog,
                },
                {
                  title: "Framework Mapping",
                  description: "Align your controls and requirements with relevant compliance frameworks.",
                  icon: BarChart3,
                },
                {
                  title: "Policy Development",
                  description: "Create and maintain policies that support your GRC platform implementation.",
                  icon: CheckCircle,
                },
                {
                  title: "Control Implementation",
                  description: "Build technical and administrative controls within your platform.",
                  icon: Zap,
                },
                {
                  title: "Evidence Collection & Automation",
                  description: "Set up automated evidence collection and control testing processes.",
                  icon: TrendingUp,
                },
                {
                  title: "Risk Management Processes",
                  description: "Establish risk assessment and management workflows within your platform.",
                  icon: BarChart3,
                },
                {
                  title: "Ongoing Compliance Management",
                  description: "Continuous support to keep your compliance program current and effective.",
                  icon: Users,
                },
              ].map((service, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <service.icon className="h-8 w-8 text-emerald-600 mr-3" />
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Implementation Process */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Our GRC Implementation Process
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {[
                {
                  step: "01",
                  title: "Assess",
                  description: "We evaluate your current security posture, compliance objectives, and business requirements.",
                },
                {
                  step: "02",
                  title: "Select",
                  description: "We help identify the right GRC platform based on your environment and goals.",
                },
                {
                  step: "03",
                  title: "Implement",
                  description: "We configure workflows, integrations, controls, policies, and evidence collection.",
                },
                {
                  step: "04",
                  title: "Prepare",
                  description: "We organize your compliance program and prepare your team for independent audits.",
                },
                {
                  step: "05",
                  title: "Maintain",
                  description: "We provide ongoing support to keep your compliance program current.",
                },
              ].map((process, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300 flex flex-col"
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold mb-4">
                      {process.step}
                    </div>
                    <CardTitle className="text-lg">{process.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground">
                      {process.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Com-Sec */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Why Organizations Choose Com-Sec
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <ul className="space-y-4">
                {[
                  "Independent GRC platform guidance",
                  "Experience across multiple compliance frameworks",
                  "Faster audit readiness",
                  "Reduced administrative burden",
                  "Security expertise beyond compliance checklists",
                  "Support from initial implementation through ongoing compliance",
                ].map((reason, index) => (
                  <Card key={index} className="border-l-4 border-l-emerald-600">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-4">
                        <CheckCircle className="h-6 w-6 text-emerald-600 flex-shrink-0" />
                        <span className="text-lg text-muted-foreground">
                          {reason}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </ul>
            </div>

            <div className="mt-12 p-8 bg-emerald-50 rounded-lg border-2 border-emerald-200 text-center">
              <p className="text-lg text-primary font-semibold">
                Com-Sec helps organizations build compliance programs that are efficient, defensible, and ready for growth.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Ready to Transform Your Compliance Program?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Whether you're selecting your first GRC platform or optimizing an existing implementation, Com-Sec provides the expertise to maximize your investment and achieve audit readiness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-500 to-emerald-600 hover:from-red-500/90 hover:to-emerald-600/90 transform hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link to="/contact">
                  Schedule a Consultation
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white"
                asChild
              >
                <Link to="/services">
                  View All Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
