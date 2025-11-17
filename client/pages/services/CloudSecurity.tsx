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
  Cloud,
  Shield,
  Lock,
  Key,
  Monitor,
  AlertTriangle,
  CheckCircle,
  Database,
  ChevronRight,
  ArrowRight,
  Star,
  Zap,
  Eye,
  Settings,
} from "lucide-react";

export default function CloudSecurity() {
  return (
    <>
     <Helmet>

     <link
          rel="canonical"
          href="https://com-sec.io/compliance-audit-readiness"
        />

     </Helmet>
    
    
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Animated Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 text-white relative overflow-hidden">
        {/* Floating cloud elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-20 bg-white/5 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-24 h-16 bg-cyan-300/10 rounded-full animate-float animation-delay-200"></div>
          <div className="absolute bottom-20 left-1/4 w-28 h-18 bg-blue-300/10 rounded-full animate-float animation-delay-400"></div>
          <div className="absolute top-1/2 right-1/3 w-20 h-12 bg-white/5 rounded-full animate-float animation-delay-600"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center bg-cyan-400/20 rounded-full px-6 py-2 text-cyan-300 font-medium text-sm animate-fade-in">
                <Cloud className="h-4 w-4 mr-2" />
                Cloud Infrastructure Security
              </div>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-slide-up">
                Cloud
                <span className="block text-cyan-400 animate-glow-blue">
                  Security
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-white/90 animate-slide-up animation-delay-200">
                Comprehensive cloud security solutions for AWS, Azure, and GCP.
                Protect your cloud infrastructure with enterprise-grade security
                and continuous monitoring.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-400">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600 transform hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <Link to="/contact">
                    Secure Your Cloud
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white bg-transparent hover:bg-white hover:text-blue-600 backdrop-blur-sm"
                >
                  Free Security Assessment
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 transform hover:scale-105 transition-all duration-500">
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="text-center animate-cloud-bounce">
                    <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <span className="text-white font-bold text-sm">AWS</span>
                    </div>
                    <div className="text-sm text-white/80">
                      Amazon Web Services
                    </div>
                  </div>
                  <div className="text-center animate-cloud-bounce animation-delay-200">
                    <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <span className="text-white font-bold text-sm">
                        Azure
                      </span>
                    </div>
                    <div className="text-sm text-white/80">Microsoft Azure</div>
                  </div>
                  <div className="text-center animate-cloud-bounce animation-delay-400">
                    <div className="w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <span className="text-white font-bold text-sm">GCP</span>
                    </div>
                    <div className="text-sm text-white/80">Google Cloud</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center animate-counter">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">
                      99.9%
                    </div>
                    <div className="text-sm text-white/80">Uptime SLA</div>
                  </div>
                  <div className="text-center animate-counter animation-delay-200">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">
                      24/7
                    </div>
                    <div className="text-sm text-white/80">Monitoring</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Platforms */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 animate-fade-in">
              Multi-Cloud Security Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in animation-delay-200">
              Comprehensive security solutions across all major cloud platforms
              with platform-specific best practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                platform: "Amazon Web Services",
                logo: "🟠",
                services: [
                  "IAM Security & Access Management",
                  "S3 Bucket Security Configuration",
                  "VPC Network Security",
                  "CloudTrail Monitoring",
                  "AWS Config Compliance",
                  "KMS Key Management",
                ],
                color: "border-orange-500 hover:border-orange-600",
                bgColor: "bg-orange-50 hover:bg-orange-100",
              },
              {
                platform: "Microsoft Azure",
                logo: "🔷",
                services: [
                  "Azure AD Identity Management",
                  "Network Security Groups",
                  "Azure Key Vault",
                  "Security Center Implementation",
                  "Azure Monitor Setup",
                  "Conditional Access Policies",
                ],
                color: "border-blue-500 hover:border-blue-600",
                bgColor: "bg-blue-50 hover:bg-blue-100",
              },
              {
                platform: "Google Cloud Platform",
                logo: "🔴",
                services: [
                  "Cloud IAM & Identity-Aware Proxy",
                  "VPC Security & Firewall Rules",
                  "Cloud KMS & CMEK",
                  "Security Command Center",
                  "Cloud Audit Logs",
                  "Organization Policy Constraints",
                ],
                color: "border-red-500 hover:border-red-600",
                bgColor: "bg-red-50 hover:bg-red-100",
              },
            ].map((platform, index) => (
              <Card
                key={index}
                className={`hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up animation-delay-${
                  (index + 1) * 200
                } ${platform.bgColor} border-l-4 ${platform.color}`}
              >
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">{platform.logo}</div>
                  <CardTitle className="text-xl">{platform.platform}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {platform.services.map((service, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{service}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Areas */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Comprehensive Cloud Security Areas
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              End-to-end security coverage for your entire cloud infrastructure
              and applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Identity & Access Management",
                description:
                  "Implement robust IAM policies, multi-factor authentication, and least privilege access principles",
                icon: Key,
                features: [
                  "Role-based access control",
                  "MFA enforcement",
                  "Identity federation",
                ],
              },
              {
                title: "Data Encryption & Key Management",
                description:
                  "Comprehensive encryption at rest and in transit with centralized key management",
                icon: Lock,
                features: [
                  "End-to-end encryption",
                  "Key rotation policies",
                  "Hardware security modules",
                ],
              },
              {
                title: "Network Security",
                description:
                  "Secure network architecture with micro-segmentation and traffic monitoring",
                icon: Shield,
                features: [
                  "VPC configuration",
                  "Firewall rules",
                  "DDoS protection",
                ],
              },
              {
                title: "Monitoring & Logging",
                description:
                  "Real-time security monitoring with automated threat detection and response",
                icon: Monitor,
                features: [
                  "SIEM integration",
                  "Automated alerts",
                  "Compliance reporting",
                ],
              },
              {
                title: "Compliance & Governance",
                description:
                  "Ensure regulatory compliance with automated policy enforcement",
                icon: CheckCircle,
                features: [
                  "Policy automation",
                  "Audit trails",
                  "Compliance dashboards",
                ],
              },
              {
                title: "Incident Response",
                description:
                  "Rapid incident detection, containment, and recovery procedures",
                icon: AlertTriangle,
                features: [
                  "24/7 monitoring",
                  "Automated response",
                  "Forensic analysis",
                ],
              },
            ].map((area, index) => (
              <Card
                key={index}
                className={`group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up animation-delay-${
                  index * 100
                }`}
              >
                <CardHeader>
                  <area.icon className="h-12 w-12 text-cyan-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="text-xl group-hover:text-cyan-600 transition-colors">
                    {area.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {area.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {area.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Framework */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Cloud Security Framework
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our proven methodology for implementing and maintaining robust
              cloud security
            </p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "Assess",
                  title: "Security Assessment",
                  description:
                    "Comprehensive evaluation of current cloud security posture",
                  icon: Eye,
                  color: "bg-blue-500",
                },
                {
                  step: "Design",
                  title: "Architecture Design",
                  description:
                    "Create secure cloud architecture aligned with best practices",
                  icon: Settings,
                  color: "bg-cyan-500",
                },
                {
                  step: "Implement",
                  title: "Security Implementation",
                  description:
                    "Deploy security controls and configurations across cloud environment",
                  icon: Zap,
                  color: "bg-green-500",
                },
                {
                  step: "Monitor",
                  title: "Continuous Monitoring",
                  description:
                    "Ongoing security monitoring and threat detection",
                  icon: Monitor,
                  color: "bg-purple-500",
                },
              ].map((phase, index) => (
                <div
                  key={index}
                  className={`text-center animate-slide-up animation-delay-${index * 200}`}
                >
                  <div className="relative mb-6">
                    <div
                      className={`w-20 h-20 ${phase.color} rounded-full flex items-center justify-center mx-auto mb-4 transform hover:scale-110 transition-all duration-300`}
                    >
                      <phase.icon className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-sm font-bold text-white bg-gray-800 px-3 py-1 rounded-full">
                      {phase.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {phase.title}
                  </h3>
                  <p className="text-muted-foreground">{phase.description}</p>

                  {/* Arrow for desktop */}
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-10 right-0 transform translate-x-1/2">
                      <ArrowRight className="h-6 w-6 text-gray-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Cloud Security Benefits
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Cost Optimization",
                description:
                  "Reduce security costs by up to 100% with automated cloud security",
                icon: "💰",
                stat: "40%",
                statLabel: "Cost Reduction",
              },
              {
                title: "Enhanced Compliance",
                description:
                  "Meet regulatory requirements with automated compliance monitoring",
                icon: "📋",
                stat: "99.9%",
                statLabel: "Compliance Rate",
              },
              {
                title: "Threat Detection",
                description:
                  "Advanced AI-powered threat detection and automated response",
                icon: "🛡️",
                stat: "15min",
                statLabel: "Avg Response Time",
              },
              {
                title: "Scalable Security",
                description:
                  "Security that grows with your cloud infrastructure automatically",
                icon: "📈",
                stat: "100%",
                statLabel: "Coverage",
              },
              {
                title: "Zero Downtime",
                description:
                  "Implement security without disrupting business operations",
                icon: "⚡",
                stat: "0",
                statLabel: "Service Interruptions",
              },
              {
                title: "Expert Support",
                description:
                  "24/7 access to certified cloud security professionals",
                icon: "👨‍💼",
                stat: "24/7",
                statLabel: "Support",
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className={`text-center hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 animate-float animation-delay-${
                  index * 100
                } group`}
              >
                <CardContent className="p-8">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-cyan-600 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {benefit.description}
                  </p>
                  <div className="bg-cyan-100 rounded-lg p-3">
                    <div className="text-2xl font-bold text-cyan-600">
                      {benefit.stat}
                    </div>
                    <div className="text-sm text-cyan-700">
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
      <section className="py-20 bg-gradient-to-r from-blue-900 to-cyan-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 transform hover:scale-105 transition-all duration-500">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-cyan-400 text-cyan-400" />
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl font-medium mb-6 leading-relaxed">
              "Com-Sec's cloud security implementation exceeded our
              expectations. They secured our multi-cloud environment without any
              service disruption and reduced our security costs by 35%.
              Outstanding!"
            </blockquote>
            <footer className="text-lg">
              <div className="font-semibold text-cyan-300">Emily Rodriguez</div>
              <div className="text-white/80">VP Engineering, CloudCorp</div>
            </footer>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Secure Your Cloud Infrastructure Today
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get a free cloud security assessment and discover how to protect
            your cloud environment with enterprise-grade security.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600 transform hover:scale-105 transition-all duration-300"
              asChild
            >
              <Link to="/contact">
                Get Free Assessment
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white"
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

      <style>{`
        @keyframes glowBlue {
          0%,
          100% {
            text-shadow: 0 0 20px rgba(34, 211, 238, 0.5);
          }
          50% {
            text-shadow: 0 0 30px rgba(34, 211, 238, 0.8);
          }
        }

        @keyframes cloudBounce {
          0%,
          100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-5px) scale(1.05);
          }
        }

        .animate-glow-blue {
          animation: glowBlue 2s ease-in-out infinite;
        }

        .animate-cloud-bounce {
          animation: cloudBounce 2s ease-in-out infinite;
        }

        /* Include all other animations */
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes counter {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-slide-up {
          animation: slideUp 1s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-counter {
          animation: counter 1s ease-out forwards;
        }

        .animation-delay-100 {
          animation-delay: 0.1s;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </div>
    </>
  );
}
