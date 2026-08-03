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
  Shield,
  CheckCircle,
  Users,
  TrendingUp,
  Clock,
  ChevronRight,
  AlertTriangle,
  BarChart3,
  Lock,
  Activity,
  Server,
  Eye,
} from "lucide-react";

export default function ManagedSecurityServices() {
  return (
    <>
      <Helmet>
        <title>Managed Security Services (MSSP) | 24/7 SOC Monitoring | Com-Sec</title>
        <meta
          name="description"
          content="24/7 Managed Security Services with SOC monitoring, threat detection, incident response, and endpoint management. Enterprise security operations outsourced."
        />
        <link rel="canonical" href="https://com-sec.io/managed-security-services" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Managed Security Services (MSSP) | Com-Sec" />
        <meta property="og:description" content="24/7 Security Operations Center monitoring, threat detection, and incident response for comprehensive security." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://com-sec.io/managed-security-services" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-24 pb-20 bg-gradient-to-br from-red-900 via-red-800 to-orange-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-16 left-8 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-12 right-24 w-28 h-28 bg-emerald-400/10 rounded-full blur-xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <div className="inline-flex items-center bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full px-6 py-2 text-red-700 font-semibold text-sm mb-8 border border-yellow-200">
                <Eye className="h-4 w-4 mr-2" />
                24/7 Security Monitoring
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                  Managed Security
                </span>
                <span className="block bg-gradient-to-r from-white to-yellow-300 bg-clip-text text-transparent">
                  Services & SOC
                </span>
              </h1>

              <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
                24/7 Security Operations Center monitoring, threat detection, and incident response. Get enterprise-grade security operations without the overhead.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-500/90 hover:to-orange-600/90 transform hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <Link to="/contact">
                    Learn About Our MSSP
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* MSSP Tiers */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Managed Security Service Tiers
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Choose the level of managed security and IT support that fits your organization
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Essential MSSP",
                  price: "Starting at $3,500/month",
                  description: "Core security monitoring and incident response",
                  features: [
                    "24/7 SOC monitoring",
                    "Log aggregation & analysis",
                    "Threat detection",
                    "Incident response",
                    "Security reporting",
                    "Email security"
                  ],
                  highlight: false
                },
                {
                  title: "Advanced MSSP",
                  price: "Starting at $6,500/month",
                  description: "Complete security operations and threat management",
                  features: [
                    "24/7 SOC monitoring",
                    "Advanced threat detection",
                    "Managed vulnerability scanning",
                    "Endpoint security management",
                    "Incident response & forensics",
                    "Security awareness training",
                    "Compliance reporting",
                    "Threat intelligence"
                  ],
                  highlight: true,
                  badge: "MOST POPULAR"
                },
                {
                  title: "Enterprise MSSP",
                  price: "Custom pricing",
                  description: "Full-suite managed security with IT operations",
                  features: [
                    "Everything in Advanced MSSP",
                    "Managed IT services",
                    "Endpoint management (MDM/EDR/XDR)",
                    "Identity & access management",
                    "Cloud security",
                    "Dedicated security analyst",
                    "Quarterly business reviews",
                    "Custom integrations"
                  ],
                  highlight: false
                }
              ].map((tier, idx) => (
                <Card 
                  key={idx} 
                  className={`hover:shadow-lg transition-shadow relative ${tier.highlight ? 'border-2 border-accent md:scale-105' : 'border-2'}`}
                >
                  {tier.badge && (
                    <div className="absolute -top-4 left-6 bg-accent text-white px-4 py-1 rounded-full text-sm font-bold">
                      {tier.badge}
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-xl">{tier.title}</CardTitle>
                    <CardDescription>{tier.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <div className="font-bold text-lg text-accent">{tier.price}</div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-3">Included Services:</h4>
                      <ul className="space-y-2">
                        {tier.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-700">{feature}</span>
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

        {/* Core MSSP Services */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Comprehensive MSSP Capabilities
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Eye,
                  title: "24/7 SOC Monitoring",
                  description: "Round-the-clock Security Operations Center monitoring of your environment with proactive threat detection."
                },
                {
                  icon: AlertTriangle,
                  title: "Threat Detection & Response",
                  description: "Advanced threat detection leveraging AI and behavioral analytics with rapid incident response."
                },
                {
                  icon: Server,
                  title: "Endpoint Management",
                  description: "Complete endpoint protection with MDM, EDR, and XDR capabilities for all devices."
                },
                {
                  icon: Lock,
                  title: "Identity & Access Management",
                  description: "SSO, MFA, RBAC implementation and management for secure access control."
                },
                {
                  icon: Activity,
                  title: "Vulnerability Management",
                  description: "Continuous vulnerability scanning, assessment, and remediation tracking."
                },
                {
                  icon: BarChart3,
                  title: "Security Operations",
                  description: "Log aggregation, SIEM management, and comprehensive security reporting."
                },
                {
                  icon: Users,
                  title: "Security Training",
                  description: "Ongoing security awareness and phishing training for your team."
                },
                {
                  icon: TrendingUp,
                  title: "Onboarding/Offboarding",
                  description: "Streamlined user lifecycle management with security controls."
                },
                {
                  icon: Shield,
                  title: "Asset Management",
                  description: "IT asset inventory, tracking, and security compliance verification."
                }
              ].map((service, idx) => {
                const IconComponent = service.icon;
                return (
                  <Card key={idx} className="hover:shadow-lg transition-shadow border-2 hover:border-accent/20">
                    <CardHeader>
                      <IconComponent className="h-10 w-10 text-accent mb-3" />
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">{service.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Our MSSP */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Why Choose Our MSSP
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                "24/7 monitoring and threat response",
                "Experienced security professionals",
                "Rapid incident response and escalation",
                "Cost-effective security operations",
                "Compliance-aligned monitoring",
                "Advanced threat detection technology",
                "Transparent reporting and metrics",
                "Flexible scaling as needs grow"
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
        <section className="py-20 bg-gradient-to-br from-red-900 via-red-800 to-orange-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Get Your Security Operations Center Today
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Stop worrying about security monitoring. Let our experts handle 24/7 threat detection and response.
            </p>
            <Button
              size="lg"
              className="bg-white text-red-900 hover:bg-gray-100"
              asChild
            >
              <Link to="/contact">
                Schedule Your SOC Assessment
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
