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
  FileCheck,
  Users,
  TrendingUp,
  Clock,
  ChevronRight,
  ArrowRight,
  Star,
  Target,
  Award,
  BookOpen,
} from "lucide-react";

export default function ComplianceAuditReadiness() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-indigo-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/10 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-white/5 rounded-full animate-bounce-slow"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-indigo-400/20 rounded-full animate-ping-slow"></div>
          <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-blue-300/10 rounded-full animate-wiggle"></div>
          <div className="absolute bottom-1/3 left-2/3 w-12 h-12 bg-indigo-400/20 rounded-full animate-twinkle"></div>
          <div className="absolute top-1/4 left-3/4 w-8 h-8 bg-blue-400/30 rounded-full animate-magical-sparkle"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center bg-blue-400/20 rounded-full px-6 py-2 text-blue-300 font-medium text-sm mb-8">
              <Award className="h-4 w-4 mr-2" />
              Compliance & Audit Excellence
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="animate-typewriter-word animation-delay-200 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                Compliance
              </span>
              <span className="mx-2 animate-typewriter-word animation-delay-400 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                & Audit
              </span>
              <span className="block animate-confidence-reveal animation-delay-600 bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-600 bg-clip-text text-transparent animate-gradient-shift">
                Readiness
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              Comprehensive compliance readiness services to help your
              organization prepare for and pass audits across multiple
              frameworks including SOC 2, HIPAA, ISO 27001, and more.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-500 hover:to-indigo-600 transform hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link to="/contact">
                  Start Compliance Journey
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
              Expert guidance across all major compliance and regulatory
              frameworks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "SOC 2",
                description: "Service Organization Control 2",
                icon: "🛡️",
                color: "bg-blue-50 border-blue-200",
              },
              {
                name: "HIPAA",
                description: "Health Insurance Portability",
                icon: "🏥",
                color: "bg-green-50 border-green-200",
              },
              {
                name: "ISO 27001",
                description: "Information Security Management",
                icon: "🌐",
                color: "bg-purple-50 border-purple-200",
              },
              {
                name: "PCI DSS",
                description: "Payment Card Industry",
                icon: "💳",
                color: "bg-red-50 border-red-200",
              },
              {
                name: "GDPR",
                description: "General Data Protection",
                icon: "🇪🇺",
                color: "bg-yellow-50 border-yellow-200",
              },
              {
                name: "NIST",
                description: "Cybersecurity Framework",
                icon: "🔒",
                color: "bg-indigo-50 border-indigo-200",
              },
              {
                name: "HITRUST",
                description: "Healthcare Trust Alliance",
                icon: "⚕️",
                color: "bg-teal-50 border-teal-200",
              },
              {
                name: "CMMC",
                description: "Cybersecurity Maturity Model",
                icon: "🏛️",
                color: "bg-orange-50 border-orange-200",
              },
            ].map((framework, index) => (
              <Card
                key={index}
                className={`text-center hover:shadow-lg transition-all duration-300 border-2 ${framework.color}`}
              >
                <CardContent className="pt-6">
                  <div className="text-3xl mb-3">{framework.icon}</div>
                  <h3 className="font-bold text-primary mb-2">
                    {framework.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {framework.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Readiness Process */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Compliance Readiness Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A proven methodology to ensure audit success across all frameworks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Initial Assessment",
                description:
                  "Comprehensive evaluation of your current compliance posture and gap identification",
                icon: Target,
                duration: "1-2 weeks",
              },
              {
                step: "02",
                title: "Framework Mapping",
                description:
                  "Map your existing controls to the required compliance framework requirements",
                icon: BookOpen,
                duration: "1 week",
              },
              {
                step: "03",
                title: "Gap Remediation",
                description:
                  "Develop and implement action plans to address identified compliance gaps",
                icon: TrendingUp,
                duration: "4-8 weeks",
              },
              {
                step: "04",
                title: "Policy Development",
                description:
                  "Create or update policies and procedures to meet compliance requirements",
                icon: FileCheck,
                duration: "2-4 weeks",
              },
              {
                step: "05",
                title: "Training & Awareness",
                description:
                  "Train your team on new policies and compliance requirements",
                icon: Users,
                duration: "1-2 weeks",
              },
              {
                step: "06",
                title: "Pre-Audit Review",
                description:
                  "Conduct mock audits and final readiness verification before the official audit",
                icon: CheckCircle,
                duration: "1-2 weeks",
              },
            ].map((step, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      {step.step}
                    </div>
                    <step.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                  <CardDescription className="text-base">
                    {step.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-blue-600 font-medium">
                    Duration: {step.duration}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Comprehensive Readiness Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-primary mb-4 flex items-center">
                  <Shield className="h-8 w-8 mr-3 text-blue-600" />
                  Gap Assessment & Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Comprehensive evaluation of your current state against
                  compliance requirements.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Current state assessment
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Control gap identification
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Risk prioritization matrix
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Remediation roadmap
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-primary mb-4 flex items-center">
                  <FileCheck className="h-8 w-8 mr-3 text-blue-600" />
                  Policy & Procedure Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Creation and updating of policies and procedures to meet
                  compliance standards.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Policy template library
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Custom policy development
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Procedure documentation
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Version control system
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-primary mb-4 flex items-center">
                  <Users className="h-8 w-8 mr-3 text-blue-600" />
                  Training & Awareness Programs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Employee training programs to ensure compliance understanding
                  and adherence.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Role-based training
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Interactive workshops
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Compliance documentation
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Ongoing education
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-primary mb-4 flex items-center">
                  <Clock className="h-8 w-8 mr-3 text-blue-600" />
                  Continuous Monitoring
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Ongoing monitoring to ensure sustained compliance and
                  readiness for future audits.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Automated compliance checks
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Regular assessments
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Compliance dashboards
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Audit trail management
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stats */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Success Record
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                stat: "100%",
                label: "First-Time Pass Rate",
                description: "Clients pass audits on first attempt",
              },
              {
                stat: "200+",
                label: "Successful Audits",
                description: "Audits completed successfully",
              },
              {
                stat: "100%",
                label: "Time Reduction",
                description: "Maximum efficiency in audit prep",
              },
              {
                stat: "24/7",
                label: "Support Available",
                description: "Expert support when you need it",
              },
            ].map((metric, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {metric.stat}
                  </div>
                  <div className="font-semibold text-primary mb-2">
                    {metric.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {metric.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Ready to Achieve Compliance?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Start your compliance journey with our proven methodology and expert
            guidance. We'll help you pass your audit with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-500 hover:to-indigo-600 transform hover:scale-105 transition-all duration-300"
              asChild
            >
              <Link to="/contact">
                Start Your Assessment
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
              asChild
            >
              <Link to="/frameworks/soc2">
                Explore Frameworks
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
