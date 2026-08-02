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
  ArrowRight,
  AlertTriangle,
  BookOpen,
  Zap,
} from "lucide-react";

export default function MsspServices() {
  return (
    <>
      <Helmet>
        <title>MSSP Services | Managed Security & IT Support | Com-Sec</title>
        <meta
          name="description"
          content="Comprehensive managed security services including SOC support, security training, and IT support. 24/7 security monitoring and expert guidance."
        />
        <link rel="canonical" href="https://com-sec.io/mssp-services" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="MSSP Services | Managed Security & IT Support | Com-Sec" />
        <meta
          property="og:description"
          content="Full-stack managed security service provider offering SOC support, continuous monitoring, security training, and IT support."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://com-sec.io/mssp-services" />
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
                <Shield className="h-4 w-4 mr-2" />
                Managed Security Service Provider
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  MSSP
                </span>
                <span className="mx-2 bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent">
                  Services
                </span>
              </h1>

              <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
                Comprehensive managed security and IT support services. From 24/7 SOC monitoring to security training and IT infrastructure support, we keep your organization secure and operational.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-500 to-emerald-600 hover:from-red-500/90 hover:to-emerald-600/90 transform hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <Link to="/contact">
                    Get Started Today
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Core Services */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Core MSSP Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Three essential pillars of managed security and IT support
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* SOC Support */}
              <Card className="hover:shadow-xl transition-all duration-300 border-2">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary mb-4 flex items-center">
                    <AlertTriangle className="h-8 w-8 mr-3 text-emerald-600" />
                    SOC Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    24/7 Security Operations Center monitoring, threat detection, and incident response to keep your environment secure.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Round-the-clock security monitoring</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Threat detection and analysis</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Incident response and remediation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Security alerts and reporting</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Log management and analysis</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Security Training */}
              <Card className="hover:shadow-xl transition-all duration-300 border-2">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary mb-4 flex items-center">
                    <BookOpen className="h-8 w-8 mr-3 text-emerald-600" />
                    Security Training
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    Comprehensive security awareness and technical training programs to build a security-conscious culture throughout your organization.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Security awareness programs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Phishing and social engineering training</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Role-specific technical training</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Incident response drills</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Compliance training programs</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* IT Support */}
              <Card className="hover:shadow-xl transition-all duration-300 border-2">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary mb-4 flex items-center">
                    <Users className="h-8 w-8 mr-3 text-emerald-600" />
                    IT Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    Managed IT support services to keep your infrastructure running smoothly and securely.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Help desk and user support</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Infrastructure monitoring and maintenance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>System patching and updates</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Backup and disaster recovery</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Security-focused IT operations</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Risk Management */}
              <Card className="hover:shadow-xl transition-all duration-300 border-2">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary mb-4 flex items-center">
                    <TrendingUp className="h-8 w-8 mr-3 text-emerald-600" />
                    Risk Management
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    Comprehensive risk assessment and management services to identify, analyze, and mitigate security risks.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Risk assessments and analysis</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Threat modeling and analysis</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Vulnerability management</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Risk monitoring and tracking</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Incident response planning</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* MSSP Benefits */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Why Choose Com-Sec MSSP?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "24/7 Expert Monitoring",
                  description: "Round-the-clock security monitoring and incident response with dedicated security experts.",
                  icon: Clock,
                },
                {
                  title: "Reduced Security Overhead",
                  description: "Offload security operations to our team so your internal IT can focus on core business.",
                  icon: TrendingUp,
                },
                {
                  title: "Continuous Training",
                  description: "Regular security awareness and technical training keeps your team updated on threats and best practices.",
                  icon: BookOpen,
                },
                {
                  title: "Faster Incident Response",
                  description: "Rapid threat detection and response minimize damage and recovery time.",
                  icon: Zap,
                },
                {
                  title: "Compliance Support",
                  description: "Our MSSP services help you maintain compliance with security and regulatory requirements.",
                  icon: CheckCircle,
                },
                {
                  title: "Single Security Partner",
                  description: "Unified MSSP approach reduces vendor complexity and improves operational efficiency.",
                  icon: Shield,
                },
              ].map((benefit, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <benefit.icon className="h-8 w-8 text-emerald-600 mr-3" />
                      <CardTitle className="text-xl">{benefit.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service Models */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Flexible Service Models
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Choose the MSSP services that fit your organization's needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">
                    Full MSSP Stack
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Complete managed security solution with SOC support, security training, and IT support all included.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      24/7 SOC monitoring
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Ongoing security training
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Managed IT support
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Incident response
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">
                    Tailored Services
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Pick and choose the services you need. Combine SOC, training, and IT support as needed.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      SOC support only
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Training + SOC combo
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      IT support + SOC
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Custom combinations
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Ready for Enterprise-Grade Security Support?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let our MSSP experts help you build a comprehensive security and IT support program tailored to your organization's needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-500 to-emerald-600 hover:from-red-500/90 hover:to-emerald-600/90 transform hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link to="/contact">
                  Schedule Your Consultation
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
                  Explore All Services
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
