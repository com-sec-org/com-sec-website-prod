import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Target,
  Users,
  Award,
  Zap,
  Globe,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Lock,
  Eye,
  Brain,
  Heart,
  Rocket,
  Star,
  Building,
  Code,
  Coffee,
} from "lucide-react";

export default function Company() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />

      {/* Hero Section with Crazy Animations */}
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400/20 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-pink-400/20 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-yellow-400/20 rounded-full animate-ping"></div>
          <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-green-400/20 rounded-full animate-spin"></div>

          {/* Floating Icons */}
          <Shield className="absolute top-20 left-1/3 h-8 w-8 text-blue-300/30 animate-float" />
          <Lock className="absolute bottom-32 right-1/4 h-6 w-6 text-purple-300/30 animate-bounce" />
          <Zap className="absolute top-40 right-10 h-10 w-10 text-yellow-300/30 animate-pulse" />
          <Globe className="absolute bottom-40 left-20 h-8 w-8 text-green-300/30 animate-spin" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* Company Badge */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
              <Building className="h-5 w-5 mr-2 text-blue-300" />
              <span className="text-white font-semibold">Founded in 2019</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="block bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent animate-shimmer">
                Where Security
              </span>
              <span className="block text-white mt-2">
                Meets
                <span className="text-transparent bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text animate-pulse ml-4">
                  Innovation
                </span>
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-purple-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Com-Sec transforms cybersecurity from a business burden into a
              competitive advantage. We're not just consultants—we're your
              cybersecurity growth partners.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white transform hover:scale-110 transition-all duration-300 shadow-2xl animate-pulse"
                asChild
              >
                <Link to="/contact">
                  Start Your Journey
                  <Rocket className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Elements for Mobile */}
        <div className="absolute inset-0 sm:hidden">
          <div className="absolute top-32 left-5 w-4 h-4 bg-blue-400/30 rounded-full animate-ping"></div>
          <div className="absolute top-48 right-8 w-3 h-3 bg-pink-400/30 rounded-full animate-bounce"></div>
          <div className="absolute bottom-32 left-8 w-5 h-5 bg-yellow-400/30 rounded-full animate-pulse"></div>
        </div>
      </section>

      {/* Our Mission with Crazy Visuals */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-32 h-32 bg-blue-200/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-24 h-24 bg-purple-200/20 rounded-full animate-bounce"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 rounded-full px-6 py-2 mb-6">
              <Heart className="h-5 w-5 text-blue-600 mr-2 animate-pulse" />
              <span className="text-blue-800 font-semibold">Our Mission</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Democratizing Enterprise-Grade
              <span className="block text-blue-600">Cybersecurity</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We believe every organization, regardless of size, deserves
              enterprise-level cybersecurity. Our mission is to make advanced
              security accessible, understandable, and profitable for businesses
              everywhere.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Security First",
                description:
                  "We put security at the heart of everything we do, ensuring your business is protected against evolving threats.",
                color: "from-blue-500 to-cyan-500",
                bgColor: "bg-blue-50",
              },
              {
                icon: TrendingUp,
                title: "Growth Enabler",
                description:
                  "Our security solutions are designed to accelerate your business growth, not slow it down.",
                color: "from-green-500 to-emerald-500",
                bgColor: "bg-green-50",
              },
              {
                icon: Brain,
                title: "Innovation Driven",
                description:
                  "We leverage cutting-edge technology and methodologies to stay ahead of cyber threats.",
                color: "from-purple-500 to-pink-500",
                bgColor: "bg-purple-50",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`${item.bgColor} rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 border border-gray-200 hover:shadow-xl group`}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do - Interactive Section */}
      <section className="py-16 sm:py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-orange-100 rounded-full px-6 py-2 mb-6">
              <Zap className="h-5 w-5 text-orange-600 mr-2 animate-bounce" />
              <span className="text-orange-800 font-semibold">What We Do</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Comprehensive Cybersecurity
              <span className="block text-orange-600">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From compliance frameworks to penetration testing, we provide
              end-to-end cybersecurity services that protect your business and
              accelerate your growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                {
                  icon: Target,
                  title: "Compliance & Audit Readiness",
                  description:
                    "SOC 2, ISO 27001, HIPAA, GDPR, and more. We make compliance your competitive advantage.",
                  stats: "100% First-Time Pass Rate",
                },
                {
                  icon: Eye,
                  title: "Penetration Testing",
                  description:
                    "Advanced testing methodologies that find vulnerabilities before attackers do.",
                  stats: "500+ Vulnerabilities Found",
                },
                {
                  icon: Globe,
                  title: "Cloud Security",
                  description:
                    "Secure your AWS, Azure, and GCP environments with industry best practices.",
                  stats: "Multi-Cloud Expertise",
                },
                {
                  icon: Users,
                  title: "vCISO & Advisory",
                  description:
                    "Strategic cybersecurity leadership without the full-time executive cost.",
                  stats: "24/7 Expert Support",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-xl hover:bg-gray-50 transition-all duration-300 border border-transparent hover:border-gray-200"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg p-3 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-3 leading-relaxed">
                        {service.description}
                      </p>
                      <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        {service.stats}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-8 text-white relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-10 left-10 w-20 h-20 border border-white rounded-full"></div>
                  <div className="absolute bottom-10 right-10 w-16 h-16 border border-white rounded-full"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white rounded-full"></div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-6">
                    Why Organizations Choose Com-Sec
                  </h3>

                  <div className="space-y-6">
                    {[
                      {
                        metric: "17+",
                        label: "Trusted Clients",
                        description: "From healthcare startups to AI companies",
                      },
                      {
                        metric: "100%",
                        label: "Success Rate",
                        description:
                          "Every client achieves their compliance goals",
                      },
                      {
                        metric: "3-6",
                        label: "Months to Compliance",
                        description: "Faster than industry average",
                      },
                      {
                        metric: "24/7",
                        label: "Expert Support",
                        description: "Always available when you need us",
                      },
                    ].map((stat, index) => (
                      <div key={index} className="flex items-center space-x-4">
                        <div className="text-3xl sm:text-4xl font-bold text-yellow-300">
                          {stat.metric}
                        </div>
                        <div>
                          <div className="text-lg font-semibold">
                            {stat.label}
                          </div>
                          <div className="text-indigo-200 text-sm">
                            {stat.description}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach - Animated Timeline */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-green-100 rounded-full px-6 py-2 mb-6">
              <Code className="h-5 w-5 text-green-600 mr-2 animate-spin" />
              <span className="text-green-800 font-semibold">Our Approach</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              The Com-Sec
              <span className="block text-green-600">Methodology</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our proven 5-phase approach ensures successful cybersecurity
              implementation while minimizing business disruption and maximizing
              ROI.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line for desktop */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-green-500 rounded-full"></div>

            <div className="space-y-12 md:space-y-16">
              {[
                {
                  phase: "01",
                  title: "Discovery & Assessment",
                  description:
                    "We start by understanding your business, current security posture, and specific requirements.",
                  icon: Eye,
                  color: "from-blue-500 to-cyan-500",
                  position: "left",
                },
                {
                  phase: "02",
                  title: "Strategic Planning",
                  description:
                    "Custom roadmap development with clear timelines, milestones, and success metrics.",
                  icon: Brain,
                  color: "from-purple-500 to-pink-500",
                  position: "right",
                },
                {
                  phase: "03",
                  title: "Implementation",
                  description:
                    "Hands-on implementation with minimal business disruption and continuous communication.",
                  icon: Zap,
                  color: "from-orange-500 to-red-500",
                  position: "left",
                },
                {
                  phase: "04",
                  title: "Testing & Validation",
                  description:
                    "Comprehensive testing to ensure all security controls are working effectively.",
                  icon: Target,
                  color: "from-green-500 to-emerald-500",
                  position: "right",
                },
                {
                  phase: "05",
                  title: "Ongoing Support",
                  description:
                    "Continuous monitoring, updates, and support to maintain your security posture.",
                  icon: Heart,
                  color: "from-pink-500 to-rose-500",
                  position: "left",
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${step.position === "right" ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-blue-500 rounded-full z-10"></div>

                  <div
                    className={`w-full md:w-5/12 ${step.position === "right" ? "md:pr-16" : "md:pl-16"}`}
                  >
                    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200">
                      <div className="flex items-center mb-6">
                        <div
                          className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center mr-4`}
                        >
                          <step.icon className="h-6 w-6 text-white" />
                        </div>
                        <span className="text-3xl font-bold text-gray-300">
                          {step.phase}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Values with Interactive Cards */}
      <section className="py-16 sm:py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-purple-100 rounded-full px-6 py-2 mb-6">
              <Star className="h-5 w-5 text-purple-600 mr-2 animate-pulse" />
              <span className="text-purple-800 font-semibold">Our Values</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              What Drives Us
              <span className="block text-purple-600">Every Day</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: Shield,
                title: "Integrity",
                description:
                  "We do what's right, even when no one is watching.",
                color: "from-blue-500 to-blue-600",
                emoji: "🛡️",
              },
              {
                icon: Rocket,
                title: "Innovation",
                description:
                  "We constantly evolve our methods to stay ahead of threats.",
                color: "from-purple-500 to-purple-600",
                emoji: "🚀",
              },
              {
                icon: Users,
                title: "Partnership",
                description:
                  "Your success is our success. We're in this together.",
                color: "from-green-500 to-green-600",
                emoji: "🤝",
              },
              {
                icon: Award,
                title: "Excellence",
                description:
                  "We deliver exceptional results that exceed expectations.",
                color: "from-orange-500 to-orange-600",
                emoji: "🏆",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="group text-center transform hover:scale-105 transition-all duration-300"
              >
                <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-200 h-full">
                  <div className="text-4xl sm:text-6xl mb-4 group-hover:animate-bounce">
                    {value.emoji}
                  </div>
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Animated Background */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-white/5 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white/5 rounded-full animate-ping"></div>

          <Coffee className="absolute top-32 left-10 h-8 w-8 text-yellow-300/30 animate-spin" />
          <Heart className="absolute bottom-32 right-10 h-8 w-8 text-pink-300/30 animate-pulse" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to Transform Your
            <span className="block text-transparent bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text">
              Cybersecurity?
            </span>
          </h2>

          <p className="text-xl sm:text-2xl text-purple-100 mb-8 leading-relaxed">
            Join the companies that trust Com-Sec to secure their future. Let's
            build something amazing together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white transform hover:scale-110 transition-all duration-300 shadow-2xl animate-pulse"
              asChild
            >
              <Link to="/contact">
                Start Your Journey Today
                <Rocket className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-purple-900 backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
              asChild
            >
              <Link to="/services">
                Explore Our Services
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
