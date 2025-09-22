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
  Globe,
  Lock,
  FileCheck,
  Users,
  TrendingUp,
  ChevronRight,
  ArrowRight,
  Star,
  Target,
  Eye,
  Settings,
  CheckCircle,
  Award,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";

export default function Iso27001() {
  const [showAllSteps, setShowAllSteps] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-indigo-900 via-blue-800 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/10 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-white/5 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-purple-400/20 rounded-full animate-ping"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center bg-blue-400/20 rounded-full px-6 py-2 text-blue-300 font-medium text-sm mb-8">
              <Globe className="h-4 w-4 mr-2" />
              International Standard
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              ISO 27001
              <span className="block text-blue-400">Information Security</span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              The international standard for Information Security Management
              Systems (ISMS), providing a systematic approach to managing
              sensitive company information.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-500 hover:to-purple-600 transform hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link to="/contact">
                  Get ISO 27001 Ready
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is ISO 27001 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                What is ISO 27001?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                ISO 27001 is the international standard that describes how to
                manage information security in a company. It provides a
                framework for establishing, implementing, maintaining, and
                continually improving an Information Security Management System
                (ISMS).
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                This standard helps organizations of any size keep information
                assets secure through a risk management process that ensures the
                confidentiality, integrity, and availability of information by
                applying a risk management process.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    190+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Countries Adopted
                  </div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    50K+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Organizations Certified
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg"
                  alt="Close-up view of a mouse cursor over digital security text on display"
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 to-purple-700/80 flex items-center justify-center">
                  <Globe className="h-24 w-24 md:h-32 md:w-32 text-white opacity-90" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ISO 27001 Structure */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              ISO 27001 Structure
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Understanding the main components of the ISO 27001 standard
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-primary mb-4 flex items-center">
                  <FileCheck className="h-8 w-8 mr-3 text-blue-600" />
                  Main Clauses (4-10)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  The core requirements for establishing and maintaining an ISMS
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Context of the Organization
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Leadership and Commitment
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Planning and Risk Assessment
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Support and Operation
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Performance Evaluation
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Improvement
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-primary mb-4 flex items-center">
                  <Shield className="h-8 w-8 mr-3 text-blue-600" />
                  Annex A Controls
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  114 security controls organized into 14 categories
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Information Security Policies
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Organization of Information Security
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Human Resource Security
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Asset Management
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Access Control
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500" />+ 9 more
                    categories
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              10-Step Implementation Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our proven methodology for ISO 27001 implementation and
              certification
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Secure Management Commitment",
                description:
                  "Obtain unwavering support from top management and allocate necessary resources for the ISMS implementation",
                icon: Users,
                duration: "1 week",
              },
              {
                step: "02",
                title: "Define ISMS Scope",
                description:
                  "Clearly delineate the boundaries of your ISMS based on business nature and regulatory obligations",
                icon: Target,
                duration: "1-2 weeks",
              },
              {
                step: "03",
                title: "Conduct Gap Analysis",
                description:
                  "Assess current information security posture against ISO 27001 requirements",
                icon: Eye,
                duration: "2-3 weeks",
              },
              {
                step: "04",
                title: "Establish Implementation Team",
                description:
                  "Form cross-functional team with defined roles and responsibilities",
                icon: Users,
                duration: "1 week",
              },
              {
                step: "05",
                title: "Perform Risk Assessment",
                description:
                  "Identify potential threats, vulnerabilities, and assess impact and likelihood",
                icon: TrendingUp,
                duration: "3-4 weeks",
              },
              ...(!showAllSteps
                ? []
                : [
                    {
                      step: "06",
                      title: "Develop ISMS Policies",
                      description:
                        "Create comprehensive information security policies and procedures aligned with business objectives",
                      icon: FileCheck,
                      duration: "2-3 weeks",
                    },
                    {
                      step: "07",
                      title: "Implement Security Controls",
                      description:
                        "Deploy and configure selected security controls from Annex A based on risk assessment results",
                      icon: Shield,
                      duration: "4-6 weeks",
                    },
                    {
                      step: "08",
                      title: "Training & Awareness",
                      description:
                        "Conduct comprehensive security awareness training for all personnel and stakeholders",
                      icon: Users,
                      duration: "2 weeks",
                    },
                    {
                      step: "09",
                      title: "Monitor & Measure",
                      description:
                        "Establish monitoring procedures and conduct internal audits to verify ISMS effectiveness",
                      icon: Eye,
                      duration: "2-3 weeks",
                    },
                    {
                      step: "10",
                      title: "Management Review & Certification",
                      description:
                        "Conduct management review, address any gaps, and proceed with certification audit",
                      icon: Award,
                      duration: "1-2 weeks",
                    },
                  ]),
            ].map((step, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "" : "lg:flex-row-reverse"
                }`}
              >
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-blue-600 to-purple-700 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-lg">
                      {step.step}
                    </div>
                    <div className="absolute inset-0 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-blue-600 to-purple-700 rounded-full animate-ping opacity-20"></div>
                  </div>
                </div>
                <Card className="flex-1 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-start gap-4">
                      <step.icon className="h-6 w-6 md:h-8 md:w-8 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-3">
                          {step.description}
                        </p>
                        <div className="text-sm text-blue-600 font-medium">
                          Duration: {step.duration}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
              onClick={() => setShowAllSteps(!showAllSteps)}
            >
              {showAllSteps
                ? "Show Essential Steps"
                : "View Complete 10-Step Process"}
              {showAllSteps ? (
                <ChevronUp className="ml-2 h-4 w-4" />
              ) : (
                <ChevronDown className="ml-2 h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Benefits of ISO 27001 Certification
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Enhanced Security",
                description:
                  "Systematic approach to managing information security risks",
                icon: "🔒",
                stat: "100%",
                statLabel: "Risk Reduction",
              },
              {
                title: "Customer Trust",
                description:
                  "Demonstrate commitment to information security to clients",
                icon: "🤝",
                stat: "100%",
                statLabel: "Client Confidence",
              },
              {
                title: "Regulatory Compliance",
                description:
                  "Meet legal and regulatory requirements for data protection",
                icon: "📋",
                stat: "100%",
                statLabel: "Compliance",
              },
              {
                title: "Business Continuity",
                description:
                  "Ensure critical business processes remain operational",
                icon: "⚡",
                stat: "100%",
                statLabel: "Uptime",
              },
              {
                title: "Competitive Advantage",
                description:
                  "Stand out in the market with internationally recognized certification",
                icon: "🏆",
                stat: "100%",
                statLabel: "Market Edge",
              },
              {
                title: "Cost Reduction",
                description:
                  "Reduce costs associated with security incidents and breaches",
                icon: "💰",
                stat: "100%",
                statLabel: "Cost Savings",
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
                  <div className="bg-blue-100 rounded-lg p-3">
                    <div className="text-2xl font-bold text-blue-600">
                      {benefit.stat}
                    </div>
                    <div className="text-sm text-blue-700">
                      {benefit.statLabel}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PDCA Cycle */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Plan-Do-Check-Act (PDCA) Cycle
            </h2>
            <p className="text-xl text-muted-foreground">
              ISO 27001 follows the PDCA methodology for continuous improvement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                phase: "Plan",
                description:
                  "Establish ISMS policies, objectives, processes, and procedures",
                icon: Target,
                color: "bg-blue-500",
                items: [
                  "Risk assessment",
                  "Policy development",
                  "Scope definition",
                ],
              },
              {
                phase: "Do",
                description:
                  "Implement and operate the ISMS policies and controls",
                icon: Settings,
                color: "bg-green-500",
                items: [
                  "Control implementation",
                  "Training delivery",
                  "Process execution",
                ],
              },
              {
                phase: "Check",
                description:
                  "Monitor and review the ISMS against policies and objectives",
                icon: Eye,
                color: "bg-orange-500",
                items: [
                  "Internal audits",
                  "Management review",
                  "Performance measurement",
                ],
              },
              {
                phase: "Act",
                description:
                  "Take corrective and preventive actions to continually improve",
                icon: TrendingUp,
                color: "bg-purple-500",
                items: [
                  "Corrective actions",
                  "Process improvement",
                  "Update procedures",
                ],
              },
            ].map((cycle, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div
                    className={`w-16 h-16 ${cycle.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <cycle.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {cycle.phase}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {cycle.description}
                  </p>
                  <ul className="text-xs text-left space-y-1">
                    {cycle.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Process */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Certification Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-8">
                <Award className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary mb-3">
                  Stage 1 Audit
                </h3>
                <p className="text-muted-foreground mb-4">
                  Documentation review and readiness assessment by certification
                  body
                </p>
                <div className="text-sm text-blue-600 font-medium">
                  Duration: 1-2 days
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-8">
                <Eye className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary mb-3">
                  Stage 2 Audit
                </h3>
                <p className="text-muted-foreground mb-4">
                  On-site assessment of ISMS implementation and effectiveness
                </p>
                <div className="text-sm text-blue-600 font-medium">
                  Duration: 3-5 days
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-8">
                <CheckCircle className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary mb-3">
                  Certification
                </h3>
                <p className="text-muted-foreground mb-4">
                  Certificate issuance and ongoing surveillance audits
                </p>
                <div className="text-sm text-blue-600 font-medium">
                  Valid for: 3 years
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ISO 27001 Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">ISO 27001 Pricing</h2>
            <p className="text-xl text-muted-foreground">Clear, outcome-focused pricing for your ISO 27001 journey</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Internal Audit",
                price: "$3,500",
              },
              {
                name: "Full Audit Support",
                price: "$12,000",
              },
              {
                name: "Continued ISO 27001 Support",
                price: "Custom Pricing",
              },
            ].map((plan, index) => (
              <Card key={index} className="relative hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{plan.price}</div>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-500 hover:to-purple-600" asChild>
                    <Link to="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Ready for ISO 27001 Certification?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Start your ISO 27001 journey with our expert guidance and proven
            implementation methodology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-500 hover:to-purple-600 transform hover:scale-105 transition-all duration-300"
              asChild
            >
              <Link to="/services/compliance-audit-readiness">
                Start Implementation
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
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
