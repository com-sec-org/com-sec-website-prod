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
  CheckCircle,
  Clock,
  FileCheck,
  Users,
  TrendingUp,
  ArrowRight,
  ChevronRight,
  Star,
  Target,
  Search,
} from "lucide-react";

export default function Soc2Readiness() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Animated Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-primary via-blue-800 to-blue-900 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-white/5 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-accent/20 rounded-full animate-ping"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center bg-accent/20 rounded-full px-6 py-2 text-accent font-medium text-sm animate-fade-in">
                <Shield className="h-4 w-4 mr-2" />
                SOC 2 Compliance
              </div>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-slide-up">
                SOC 2
                <span className="block text-accent animate-glow">
                  Readiness
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-white/90 animate-slide-up animation-delay-200">
                Comprehensive SOC 2 compliance preparation to ensure your
                organization meets Trust Services Criteria and passes audits
                with confidence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-400">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-accent to-orange-600 hover:from-accent/90 hover:to-orange-600/90 transform hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <Link to="/contact">
                    Start Your Assessment
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-accent to-orange-600 hover:from-orange-500 hover:to-red-600 transform hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <Link to="/contact">
                    Start Assessment
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group mb-8">
                <img
                  src="https://images.pexels.com/photos/8296977/pexels-photo-8296977.jpeg"
                  alt="An accountant using a calculator and signing paperwork, showcasing financial analysis"
                  className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-accent/80 to-orange-600/80 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Shield className="h-20 w-20 md:h-24 md:w-24 mx-auto mb-4 animate-pulse" />
                    <div className="text-xl md:text-2xl font-bold mb-2">
                      SOC 2 Readiness
                    </div>
                    <div className="text-sm md:text-base opacity-90">
                      Trust Services Criteria
                    </div>
                  </div>
                </div>
                {/* Document flow animation */}
                <div className="absolute top-4 left-4 w-8 h-6 bg-white/20 rounded animate-float"></div>
                <div className="absolute top-12 left-8 w-6 h-4 bg-accent/30 rounded animate-float animation-delay-500"></div>
                <div className="absolute top-20 left-6 w-7 h-5 bg-orange-300/25 rounded animate-float animation-delay-1000"></div>
                {/* Checkmark indicators */}
                <div className="absolute top-6 right-6 w-4 h-4 border-2 border-green-400 rounded-full flex items-center justify-center animate-pulse">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                </div>
                <div className="absolute bottom-8 right-8 w-3 h-3 border-2 border-emerald-400 rounded-full flex items-center justify-center animate-pulse animation-delay-700">
                  <div className="w-1 h-1 bg-emerald-400 rounded-full"></div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 transform hover:scale-105 transition-all duration-500">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center animate-counter">
                    <div className="text-4xl font-bold text-accent mb-2">
                      100%
                    </div>
                    <div className="text-sm text-white/80">Success Rate</div>
                  </div>
                  <div className="text-center animate-counter animation-delay-200">
                    <div className="text-4xl font-bold text-accent mb-2">
                      60
                    </div>
                    <div className="text-sm text-white/80">Days Average</div>
                  </div>
                  <div className="text-center animate-counter animation-delay-400">
                    <div className="text-4xl font-bold text-accent mb-2">
                      500+
                    </div>
                    <div className="text-sm text-white/80">Controls</div>
                  </div>
                  <div className="text-center animate-counter animation-delay-600">
                    <div className="text-4xl font-bold text-accent mb-2">
                      24/7
                    </div>
                    <div className="text-sm text-white/80">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Services Criteria */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 animate-fade-in">
              Trust Services Criteria (TSC)
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in animation-delay-200">
              We ensure your organization meets all five Trust Services Criteria
              for comprehensive SOC 2 compliance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Security",
                description:
                  "Protection against unauthorized access, use, or modification of information",
                icon: Shield,
                color: "text-blue-600",
                delay: "animation-delay-100",
              },
              {
                title: "Availability",
                description:
                  "System operations, products, or services are available for operation and use",
                icon: Clock,
                color: "text-green-600",
                delay: "animation-delay-200",
              },
              {
                title: "Processing Integrity",
                description:
                  "System processing is complete, valid, accurate, timely, and authorized",
                icon: CheckCircle,
                color: "text-purple-600",
                delay: "animation-delay-300",
              },
              {
                title: "Confidentiality",
                description:
                  "Information designated as confidential is protected as committed or agreed",
                icon: FileCheck,
                color: "text-red-600",
                delay: "animation-delay-400",
              },
              {
                title: "Privacy",
                description:
                  "Personal information is collected, used, retained, disclosed, and disposed properly",
                icon: Users,
                color: "text-orange-600",
                delay: "animation-delay-500",
              },
            ].map((criteria, index) => (
              <Card
                key={index}
                className={`group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up ${criteria.delay} border-l-4 border-l-accent/30 hover:border-l-accent`}
              >
                <CardHeader className="text-center">
                  <criteria.icon
                    className={`h-16 w-16 mx-auto mb-4 ${criteria.color} group-hover:scale-110 transition-transform duration-300`}
                  />
                  <CardTitle className="text-xl group-hover:text-accent transition-colors">
                    {criteria.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {criteria.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-gradient-to-br from-accent/5 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our 8-Step SOC 2 Readiness Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive methodology to ensure your organization is fully
              prepared for SOC 2 audit success
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Define Audit Scope",
                description:
                  "Determine which systems, processes, and data flows will be included in the assessment. Identify the specific TSC principles applicable to your organization.",
                icon: Target,
              },
              {
                step: "02",
                title: "Review Existing Policies",
                description:
                  "Assess your current policies and procedures to ensure they align with SOC 2 requirements including security, privacy, and access control policies.",
                icon: FileCheck,
              },
              {
                step: "03",
                title: "Conduct Gap Analysis",
                description:
                  "Compare your existing controls against SOC 2 criteria to identify areas where your organization may fall short of requirements.",
                icon: TrendingUp,
              },
              {
                step: "04",
                title: "Implement Remediation",
                description:
                  "Develop and execute plans to address identified gaps, including updating policies, implementing security measures, and staff training.",
                icon: CheckCircle,
              },
              {
                step: "05",
                title: "Collect Documentation",
                description:
                  "Gather all necessary documentation that demonstrates compliance with SOC 2 criteria, including system documentation and security controls.",
                icon: FileCheck,
              },
              {
                step: "06",
                title: "Engage External Auditor",
                description:
                  "Select and work with a qualified CPA firm to conduct the readiness assessment and provide valuable insights throughout the process.",
                icon: Users,
              },
              {
                step: "07",
                title: "Conduct Mock Audit",
                description:
                  "Perform a simulated audit to identify any last-minute gaps and familiarize your team with the actual audit process.",
                icon: Search,
              },
              {
                step: "08",
                title: "Review and Refine",
                description:
                  "After the mock audit, review results and refine controls as needed to ensure full preparation for a successful SOC 2 audit.",
                icon: TrendingUp,
              },
            ].map((step, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-8 animate-slide-in-right animation-delay-${
                  (index + 1) * 100
                }`}
              >
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-24 h-24 bg-gradient-to-br from-accent to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {step.step}
                    </div>
                    <div className="absolute inset-0 w-24 h-24 bg-gradient-to-br from-accent to-orange-600 rounded-full animate-ping opacity-20"></div>
                  </div>
                </div>
                <Card className="flex-1 hover:shadow-lg transition-all duration-300 transform hover:scale-102">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <step.icon className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-2xl font-bold text-primary mb-3">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Choose Our SOC 2 Readiness Service?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Guidance",
                description:
                  "Our certified professionals have helped 200+ companies achieve SOC 2 compliance",
                icon: "👨‍💼",
              },
              {
                title: "Proven Methodology",
                description:
                  "Time-tested 8-step process with 100% success rate in audit preparation",
                icon: "🎯",
              },
              {
                title: "Comprehensive Documentation",
                description:
                  "Complete policy templates, procedures, and audit-ready documentation",
                icon: "📋",
              },
              {
                title: "Ongoing Support",
                description:
                  "24/7 support throughout your compliance journey and beyond",
                icon: "🛡️",
              },
              {
                title: "Cost Effective",
                description:
                  "Reduce audit costs by up to 100% with proper preparation and readiness",
                icon: "💰",
              },
              {
                title: "Fast Track",
                description:
                  "Complete readiness assessment in 60 days average, get audit-ready faster",
                icon: "⚡",
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
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 transform hover:scale-105 transition-all duration-500">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-accent text-accent" />
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl font-medium mb-6 leading-relaxed">
              "Com-Sec's SOC 2 readiness assessment was game-changing. They
              identified gaps we didn't know existed and guided us through every
              step. We passed our audit on the first try with zero findings."
            </blockquote>
            <footer className="text-lg">
              <div className="font-semibold text-accent">Sarah Johnson</div>
              <div className="text-white/80">CTO, TechStart Inc.</div>
            </footer>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Ready to Start Your SOC 2 Journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get a free 30-minute consultation to discuss your SOC 2 readiness
            needs and create a customized roadmap.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-accent to-orange-600 hover:from-accent/90 hover:to-orange-600/90 transform hover:scale-105 transition-all duration-300"
              asChild
            >
              <Link to="/contact">
                Get Free Consultation
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white"
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

      <style jsx>{`
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

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes glow {
          0%,
          100% {
            text-shadow: 0 0 20px rgba(245, 121, 59, 0.5);
          }
          50% {
            text-shadow: 0 0 30px rgba(245, 121, 59, 0.8);
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

        .animate-slide-in-right {
          animation: slideInRight 1s ease-out forwards;
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
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

        .transform:hover {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  );
}
