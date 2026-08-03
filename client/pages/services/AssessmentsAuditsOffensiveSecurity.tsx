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
  Search,
  Target,
  AlertTriangle,
  Shield,
  BarChart3,
  Users,
  Lock,
  Zap,
  Cloud,
  Bug,
} from "lucide-react";

export default function AssessmentsAuditsOffensiveSecurity() {
  return (
    <>
      <Helmet>
        <title>Security Assessments & Penetration Testing | Com-Sec</title>
        <meta
          name="description"
          content="Comprehensive security assessments, penetration testing, vulnerability assessments, and cloud security testing. Identify vulnerabilities before attackers do."
        />
        <link rel="canonical" href="https://com-sec.io/assessments-audits-offensive-security" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Assessments, Audits & Offensive Security | Com-Sec" />
        <meta property="og:description" content="Professional penetration testing, security assessments, and vulnerability management services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://com-sec.io/assessments-audits-offensive-security" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-24 pb-20 bg-gradient-to-br from-purple-900 via-indigo-800 to-purple-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-16 left-8 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-12 right-24 w-28 h-28 bg-pink-400/10 rounded-full blur-xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <div className="inline-flex items-center bg-gradient-to-r from-pink-100 to-purple-100 rounded-full px-6 py-2 text-purple-700 font-semibold text-sm mb-8 border border-pink-200">
                <Zap className="h-4 w-4 mr-2" />
                Find Vulnerabilities Before Attackers
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Security Assessments,
                </span>
                <span className="block bg-gradient-to-r from-white to-pink-400 bg-clip-text text-transparent">
                  Audits & Offensive Security
                </span>
              </h1>

              <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
                Comprehensive security assessments and professional penetration testing to identify vulnerabilities, validate controls, and improve your security posture.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-500/90 hover:to-purple-600/90 transform hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <Link to="/contact">
                    Schedule Your Assessment
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Assessment Services */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Assessment & Testing Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Professional, hands-on security testing to validate your controls
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Penetration Testing",
                  price: "Starting at $4,000",
                  description: "Comprehensive ethical hacking to identify exploitable vulnerabilities",
                  services: [
                    "Web application penetration testing",
                    "API penetration testing",
                    "Internal network penetration testing",
                    "External network penetration testing",
                    "Wireless security testing",
                    "Social engineering assessments",
                    "Physical security testing",
                    "Detailed remediation recommendations"
                  ],
                  highlights: ["Professional Report", "Remediation Guidance", "Follow-up Testing"]
                },
                {
                  title: "Vulnerability Assessments",
                  price: "Starting at $3,500",
                  description: "Systematic identification of security weaknesses",
                  services: [
                    "Network vulnerability scanning",
                    "Web application vulnerability scanning",
                    "Database vulnerability assessment",
                    "Configuration review",
                    "Patch management assessment",
                    "Risk scoring and prioritization",
                    "Remediation roadmap",
                    "Compliance alignment"
                  ],
                  highlights: ["Automated Scanning", "Manual Review", "Risk Prioritization"]
                },
                {
                  title: "Cloud Security Assessments",
                  price: "Starting at $5,500",
                  description: "AWS, Azure, and GCP security evaluation",
                  services: [
                    "AWS security assessment",
                    "Azure security assessment",
                    "GCP security assessment",
                    "Configuration review",
                    "IAM and access control review",
                    "Data protection assessment",
                    "Compliance validation",
                    "Remediation recommendations"
                  ],
                  highlights: ["Cloud-Native", "Compliance-Focused", "Best Practices"]
                },
                {
                  title: "Readiness Assessments",
                  price: "Starting at $4,000",
                  description: "Evaluate readiness for compliance audits",
                  services: [
                    "Current state assessment",
                    "Gap identification",
                    "Control effectiveness review",
                    "Documentation review",
                    "Evidence collection support",
                    "Audit preparation",
                    "Roadmap development",
                    "Timeline estimation"
                  ],
                  highlights: ["Audit Preparation", "Gap Analysis", "Planning"]
                }
              ].map((service, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                        <CardDescription className="mt-2">{service.description}</CardDescription>
                      </div>
                    </div>
                    <div className="font-bold text-lg text-accent">{service.price}</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-3">Includes:</h4>
                      <ul className="space-y-2">
                        {service.services.map((svc, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-700">{svc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="flex flex-wrap gap-2">
                        {service.highlights.map((highlight, i) => (
                          <span key={i} className="px-2 py-1 bg-accent/10 text-accent text-xs rounded font-semibold">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testing Methodologies */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Our Testing Approach
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Industry-standard methodologies for thorough and professional security testing
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: "Scoping & Planning",
                  description: "Clear definition of testing scope, objectives, and timeline."
                },
                {
                  icon: Search,
                  title: "Reconnaissance",
                  description: "Information gathering to understand targets and potential attack vectors."
                },
                {
                  icon: Bug,
                  title: "Active Testing",
                  description: "Hands-on exploitation attempts to validate real-world risk."
                },
                {
                  icon: BarChart3,
                  title: "Analysis & Reporting",
                  description: "Detailed analysis of findings with business impact assessment."
                },
                {
                  icon: AlertTriangle,
                  title: "Risk Scoring",
                  description: "Industry-standard CVSS scoring and severity classification."
                },
                {
                  icon: ChevronRight,
                  title: "Remediation Guidance",
                  description: "Clear, actionable recommendations for fixing identified issues."
                }
              ].map((approach, idx) => {
                const IconComponent = approach.icon;
                return (
                  <Card key={idx} className="hover:shadow-lg transition-shadow border-2 hover:border-accent/20">
                    <CardHeader>
                      <IconComponent className="h-10 w-10 text-accent mb-3" />
                      <CardTitle className="text-lg">{approach.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">{approach.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testing Types */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Types of Testing We Perform
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { category: "Network", icon: "🌐", items: ["Internal network testing", "External network testing", "Wireless security testing"] },
                { category: "Application", icon: "📱", items: ["Web app testing", "API testing", "Mobile app testing"] },
                { category: "Infrastructure", icon: "⚙️", items: ["Cloud security testing", "Database security", "Configuration review"] },
                { category: "Human Factor", icon: "👤", items: ["Social engineering", "Phishing tests", "Physical security testing"] }
              ].map((category, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{category.icon}</span>
                      <CardTitle>{category.category} Security Testing</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
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
                Why Choose Our Assessment Services
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                "Certified and experienced penetration testers",
                "Professional, detailed reporting",
                "Real-world attack simulations",
                "Business impact analysis",
                "Clear remediation guidance",
                "Follow-up testing support",
                "Compliance-aligned testing",
                "Industry-standard methodologies"
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
        <section className="py-20 bg-gradient-to-br from-purple-900 via-indigo-800 to-purple-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Test Your Security Defenses?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Let's identify vulnerabilities before attackers do
            </p>
            <Button
              size="lg"
              className="bg-white text-purple-900 hover:bg-gray-100"
              asChild
            >
              <Link to="/contact">
                Schedule Your Security Assessment
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
