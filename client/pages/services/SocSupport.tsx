import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
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
  Users,
  Clock,
  CheckCircle,
  FileCheck,
  TrendingUp,
  ChevronRight,
  ArrowRight,
  Star,
  Target,
  AlertTriangle,
  Monitor,
} from "lucide-react";

export default function SocSupport() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-purple-400/10 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-white/5 rounded-full animate-bounce-slow"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-indigo-400/20 rounded-full animate-ping-slow"></div>
          <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-purple-300/10 rounded-full animate-wiggle"></div>
          <div className="absolute bottom-1/3 left-2/3 w-12 h-12 bg-blue-400/20 rounded-full animate-twinkle"></div>
          <div className="absolute top-1/4 left-3/4 w-8 h-8 bg-indigo-400/30 rounded-full animate-magical-sparkle"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center bg-purple-400/20 rounded-full px-6 py-2 text-purple-300 font-medium text-sm mb-8">
              <Monitor className="h-4 w-4 mr-2" />
              Security Operations Center
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="animate-typewriter-word animation-delay-200 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                SOC Support
              </span>
              <span className="mx-2 animate-typewriter-word animation-delay-400 text-white">
                &
              </span>
              <span className="block animate-confidence-reveal animation-delay-600 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent animate-gradient-shift">
                Monitoring
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              24/7 Security Operations Center (SOC) services to continuously
              monitor, detect, and respond to security threats in real-time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-500 hover:to-indigo-600 transform hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link to="/contact">
                  Get SOC Support
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is SOC Support */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                What is SOC Support?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                A Security Operations Center (SOC) is a centralized unit that
                monitors your organization's security posture on an ongoing
                basis. Our SOC-as-a-Service provides enterprise-level security
                monitoring without the overhead of building an in-house team.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Our expert security analysts use advanced tools and threat
                intelligence to identify, investigate, and respond to security
                incidents 24/7/365, ensuring your business stays protected
                around the clock.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    24/7
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Continuous Monitoring
                  </div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    &lt;15min
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Average Response Time
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <img
                  src="https://images.pexels.com/photos/19317897/pexels-photo-19317897.jpeg"
                  alt="Modern control room with people monitoring large digital displays and computer systems"
                  className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/80 to-indigo-700/80 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Monitor className="h-20 w-20 md:h-24 md:w-24 mx-auto mb-4 animate-pulse" />
                    <div className="text-xl md:text-2xl font-bold mb-2">
                      24/7 SOC
                    </div>
                    <div className="text-sm md:text-base opacity-90">
                      Real-time Monitoring
                    </div>
                  </div>
                </div>
                {/* Animated scanning line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse opacity-60"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse opacity-60 animation-delay-1000"></div>
                {/* Floating particles */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                <div className="absolute bottom-6 left-6 w-3 h-3 bg-purple-400 rounded-full animate-bounce"></div>
                <div className="absolute top-1/2 left-4 w-1 h-1 bg-white rounded-full animate-pulse animation-delay-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOC Services */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our SOC Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive security monitoring and incident response services
              to protect your digital assets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "24/7 Security Monitoring",
                description:
                  "Continuous monitoring of your network, endpoints, and cloud infrastructure",
                icon: Clock,
                color: "text-blue-600",
                bgColor: "bg-blue-50",
                features: [
                  "Real-time threat detection",
                  "Network traffic analysis",
                  "Endpoint monitoring",
                  "Cloud security monitoring",
                ],
              },
              {
                title: "Incident Response",
                description:
                  "Rapid response to security incidents with detailed forensics and remediation",
                icon: AlertTriangle,
                color: "text-red-600",
                bgColor: "bg-red-50",
                features: [
                  "Incident containment",
                  "Forensic analysis",
                  "Remediation guidance",
                  "Post-incident reporting",
                ],
              },
              {
                title: "Threat Intelligence",
                description:
                  "Advanced threat intelligence to identify emerging threats and attack patterns",
                icon: Target,
                color: "text-orange-600",
                bgColor: "bg-orange-50",
                features: [
                  "Global threat feeds",
                  "Industry-specific threats",
                  "IOC monitoring",
                  "Threat hunting",
                ],
              },
              {
                title: "SIEM Management",
                description:
                  "Security Information and Event Management (SIEM) platform management",
                icon: Monitor,
                color: "text-green-600",
                bgColor: "bg-green-50",
                features: [
                  "SIEM configuration",
                  "Log correlation",
                  "Alert tuning",
                  "Dashboard management",
                ],
              },
              {
                title: "Vulnerability Management",
                description:
                  "Continuous vulnerability assessment and remediation tracking",
                icon: Shield,
                color: "text-purple-600",
                bgColor: "bg-purple-50",
                features: [
                  "Vulnerability scanning",
                  "Risk prioritization",
                  "Patch management",
                  "Compliance tracking",
                ],
              },
              {
                title: "Compliance Monitoring",
                description:
                  "Ongoing compliance monitoring for various regulatory frameworks",
                icon: FileCheck,
                color: "text-cyan-600",
                bgColor: "bg-cyan-50",
                features: [
                  "SOC 2 monitoring",
                  "HIPAA compliance",
                  "PCI-DSS tracking",
                  "Custom frameworks",
                ],
              },
            ].map((service, index) => (
              <Card
                key={index}
                className={`hover:shadow-xl transition-all duration-300 ${service.bgColor} border-l-4 border-l-purple-400`}
              >
                <CardHeader>
                  <service.icon className={`h-12 w-12 mb-4 ${service.color}`} />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-purple-500" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SOC Tiers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              SOC Service Tiers
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose the right level of SOC support for your organization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "SOC Essentials",
                price: "Starting at $3,000/month",
                description: "Core SOC services for small to medium businesses",
                features: [
                  "24/7 security monitoring",
                  "Incident response",
                  "Monthly security reports",
                  "Email and phone support",
                  "Basic threat intelligence",
                  "Phishing testing (quarterly)",
                  "Security awareness training (quarterly)",
                ],
                color: "border-purple-300",
              },
              {
                name: "SOC Professional",
                price: "Starting at $80,000/month",
                description: "Comprehensive SOC services for enterprises",
                features: [
                  "Advanced threat hunting",
                  "Custom playbooks",
                  "Dedicated security analyst",
                  "Bi-weekly reviews",
                  "Advanced threat intelligence",
                  "SIEM customization",
                  "EDR management",
                  "Responding to security questionnaires",
                  "Compliance reporting dashboards",
                ],
                color: "border-purple-500",
                popular: true,
              },
              {
                name: "SOC Enterprise",
                price: "Custom pricing",
                description: "Full-scale SOC with dedicated team",
                features: [
                  "Dedicated SOC team",
                  "Custom integrations",
                  "On-site support available",
                  "Weekly strategy calls",
                  "Custom threat intelligence",
                  "Compliance assistance",
                  "Penetration testing program",
                  "Security awareness training program",
                  "Vendor risk management",
                  "Tabletop exercises and IR plan testing",
                  "Cloud security posture management",
                  "Executive reporting and board-ready metrics",
                ],
                color: "border-purple-700",
              },
            ].map((tier, index) => (
              <Card
                key={index}
                className={`relative hover:shadow-xl transition-all duration-300 border-2 ${tier.color} ${tier.popular ? "scale-105" : ""}`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">
                    {tier.name}
                  </CardTitle>
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    {tier.price}
                  </div>
                  <CardDescription>{tier.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-purple-500" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full bg-purple-600 hover:bg-purple-700"
                    asChild
                  >
                    <Link to="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What COM-Sec SOC Delivers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              What COM-Sec SOC Delivers
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Practical, hands-on services we operate for clients every day
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "24/7 monitoring across endpoints, network, and cloud",
              "Incident response with containment and remediation",
              "Threat hunting and alert tuning",
              "SIEM administration and log onboarding",
              "EDR deployment and ongoing management",
              "Vulnerability scanning and patch guidance",
              "Cloud security posture monitoring (AWS/Azure/GCP)",
              "Phishing testing and behavioral analytics",
              "Security awareness training and campaigns",
              "Responding to security questionnaires and audits",
              "Penetration testing coordination and reporting",
              "Compliance mapping and reporting (SOC 2, HIPAA, ISO 27001)",
              "Runbooks/playbooks and IR plan development",
              "Vendor risk management and third‑party due diligence",
              "Executive dashboards and board‑ready metrics",
            ].map((item, idx) => (
              <Card key={idx} className="hover:shadow-md transition-all">
                <CardContent className="flex items-start gap-3 p-5">
                  <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SOC Benefits */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Benefits of SOC-as-a-Service
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Cost Effective",
                description:
                  "Reduce security costs by 100% compared to building an in-house SOC",
                icon: "💰",
                stat: "60%",
                statLabel: "Cost Reduction",
              },
              {
                title: "Expert Team",
                description:
                  "Access to certified security professionals and threat hunters",
                icon: "👨��💼",
                stat: "50+",
                statLabel: "Security Experts",
              },
              {
                title: "Advanced Tools",
                description:
                  "Enterprise-grade security tools without the capital investment",
                icon: "🛠️",
                stat: "$2M+",
                statLabel: "Tool Investment",
              },
              {
                title: "Faster Response",
                description:
                  "Rapid incident response with mean time to detection under 15 minutes",
                icon: "⚡",
                stat: "<15min",
                statLabel: "Detection Time",
              },
              {
                title: "Scalable Solution",
                description: "Scale security monitoring as your business grows",
                icon: "📈",
                stat: "100%",
                statLabel: "Scalable",
              },
              {
                title: "Compliance Ready",
                description:
                  "Built-in compliance monitoring for various frameworks",
                icon: "📋",
                stat: "10+",
                statLabel: "Frameworks",
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="pt-8">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {benefit.description}
                  </p>
                  <div className="bg-purple-100 rounded-lg p-3">
                    <div className="text-2xl font-bold text-purple-600">
                      {benefit.stat}
                    </div>
                    <div className="text-sm text-purple-700">
                      {benefit.statLabel}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-indigo-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-6 w-6 fill-purple-400 text-purple-400"
                />
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl font-medium mb-6">
              "Com-Sec's SOC support has been invaluable. They detected and
              stopped a ransomware attack within minutes, saving our company
              from potential millions in damages and downtime."
            </blockquote>
            <footer>
              <div className="font-semibold text-purple-300">James Wilson</div>
              <div className="text-white/80">IT Director, FinanceFirst</div>
            </footer>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Protect Your Business 24/7
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Don't wait for a security incident. Get proactive SOC monitoring and
            protection starting today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-500 hover:to-indigo-600 transform hover:scale-105 transition-all duration-300"
              asChild
            >
              <Link to="/contact">
                Start SOC Monitoring
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
              asChild
            >
              <Link to="/contact">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
