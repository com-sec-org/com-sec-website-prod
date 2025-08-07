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
  Target,
  Users,
  Shield,
  TrendingUp,
  CheckCircle,
  Clock,
  Star,
  ArrowRight,
  ChevronRight,
  Award,
  Lightbulb,
  Zap,
  Eye,
  Settings,
  FileCheck,
} from "lucide-react";

export default function Approach() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-400/10 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-white/5 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-teal-400/20 rounded-full animate-ping"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center bg-emerald-400/20 rounded-full px-6 py-2 text-emerald-300 font-medium text-sm mb-8">
              <Target className="h-4 w-4 mr-2" />
              Our Methodology
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Our Strategic
              <span className="block text-emerald-400">Approach</span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              A proven methodology that combines industry best practices with
              innovative solutions to deliver exceptional cybersecurity outcomes
              for our clients.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 transform hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link to="/contact">
                  Discuss Your Project
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-blue-700 hover:from-blue-600 hover:to-blue-800 transform hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Core Principles
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The fundamental values that guide every engagement and drive our
              success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Client-Centric Focus",
                description:
                  "Every solution is tailored to your unique business needs and objectives",
                icon: Users,
                color: "text-blue-600",
                bgColor: "bg-blue-50",
              },
              {
                title: "Risk-Based Approach",
                description:
                  "Prioritize security investments based on actual business risk and impact",
                icon: Target,
                color: "text-emerald-600",
                bgColor: "bg-emerald-50",
              },
              {
                title: "Continuous Innovation",
                description:
                  "Stay ahead of threats with cutting-edge tools and methodologies",
                icon: Lightbulb,
                color: "text-orange-600",
                bgColor: "bg-orange-50",
              },
              {
                title: "Measurable Results",
                description:
                  "Deliver quantifiable improvements in security posture and compliance",
                icon: TrendingUp,
                color: "text-purple-600",
                bgColor: "bg-purple-50",
              },
            ].map((principle, index) => (
              <Card
                key={index}
                className={`text-center hover:shadow-lg transition-all duration-300 ${principle.bgColor} border-l-4 border-l-emerald-400`}
              >
                <CardContent className="pt-8">
                  <principle.icon
                    className={`h-12 w-12 mx-auto mb-4 ${principle.color}`}
                  />
                  <h3 className="font-bold text-primary mb-3">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {principle.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5-Phase Methodology */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our 5-Phase Methodology
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A systematic approach that ensures consistent, high-quality
              results across all our cybersecurity engagements
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                phase: "01",
                title: "Discovery & Assessment",
                description:
                  "Comprehensive evaluation of your current security posture, business requirements, and risk landscape",
                icon: Eye,
                duration: "1-2 weeks",
                deliverables: [
                  "Current state security assessment",
                  "Risk analysis and threat modeling",
                  "Business impact analysis",
                  "Compliance gap assessment",
                ],
                highlight: "Foundation for all subsequent work",
              },
              {
                phase: "02",
                title: "Strategy & Planning",
                description:
                  "Development of a comprehensive cybersecurity strategy aligned with your business objectives and regulatory requirements",
                icon: Target,
                duration: "1-2 weeks",
                deliverables: [
                  "Cybersecurity roadmap",
                  "Risk mitigation strategy",
                  "Compliance implementation plan",
                  "Resource allocation recommendations",
                ],
                highlight: "Clear path to security excellence",
              },
              {
                phase: "03",
                title: "Implementation & Deployment",
                description:
                  "Systematic implementation of security controls, policies, and procedures with minimal business disruption",
                icon: Settings,
                duration: "4-12 weeks",
                deliverables: [
                  "Security control implementation",
                  "Policy and procedure documentation",
                  "Tool configuration and setup",
                  "Process automation where possible",
                ],
                highlight: "Seamless security transformation",
              },
              {
                phase: "04",
                title: "Testing & Validation",
                description:
                  "Rigorous testing of implemented controls through penetration testing, compliance audits, and security assessments",
                icon: CheckCircle,
                duration: "2-4 weeks",
                deliverables: [
                  "Penetration testing results",
                  "Compliance validation reports",
                  "Security control effectiveness testing",
                  "Remediation recommendations",
                ],
                highlight: "Proven security effectiveness",
              },
              {
                phase: "05",
                title: "Monitoring & Optimization",
                description:
                  "Ongoing monitoring, maintenance, and continuous improvement of your cybersecurity program",
                icon: TrendingUp,
                duration: "Ongoing",
                deliverables: [
                  "24/7 security monitoring",
                  "Regular security assessments",
                  "Compliance monitoring",
                  "Continuous improvement recommendations",
                ],
                highlight: "Sustained security excellence",
              },
            ].map((phase, index) => (
              <div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Phase Number and Icon */}
                <div className="lg:col-span-2 text-center lg:text-left">
                  <div className="relative inline-block">
                    <div className="w-20 h-20 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg mb-4 mx-auto lg:mx-0">
                      {phase.phase}
                    </div>
                    <div className="absolute inset-0 w-20 h-20 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-full animate-ping opacity-20"></div>
                  </div>
                  <phase.icon className="h-8 w-8 text-emerald-600 mx-auto lg:mx-0" />
                </div>

                {/* Content */}
                <div className="lg:col-span-10">
                  <Card className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2">
                          <h3 className="text-2xl font-bold text-primary mb-3">
                            {phase.title}
                          </h3>
                          <p className="text-muted-foreground mb-4 text-lg">
                            {phase.description}
                          </p>
                          <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                            <Clock className="h-4 w-4 mr-2" />
                            Duration: {phase.duration}
                          </div>
                          <div className="mt-4 bg-emerald-50 p-4 rounded-lg">
                            <div className="flex items-center mb-2">
                              <Star className="h-4 w-4 text-emerald-600 mr-2" />
                              <span className="font-medium text-emerald-800">
                                {phase.highlight}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary mb-3">
                            Key Deliverables:
                          </h4>
                          <ul className="space-y-2">
                            {phase.deliverables.map((deliverable, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2 text-sm"
                              >
                                <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                                <span>{deliverable}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-muted-foreground">
              Our approach delivers measurable improvements across key metrics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                metric: "98%",
                label: "First-Time Audit Pass Rate",
                description: "Clients pass compliance audits on first attempt",
                icon: Award,
              },
              {
                metric: "75%",
                label: "Risk Reduction",
                description: "Average reduction in identified security risks",
                icon: Shield,
              },
              {
                metric: "60%",
                label: "Faster Implementation",
                description:
                  "Reduction in project timeline vs industry average",
                icon: Zap,
              },
              {
                metric: "99.9%",
                label: "Client Satisfaction",
                description: "Client satisfaction rate across all engagements",
                icon: Star,
              },
            ].map((result, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="pt-8">
                  <result.icon className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-emerald-600 mb-2">
                    {result.metric}
                  </div>
                  <h3 className="font-bold text-primary mb-3">
                    {result.label}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {result.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Approach Works */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Our Approach Works
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Industry-Proven Methodologies",
                    description:
                      "Based on NIST, ISO 27001, and other established frameworks with 15+ years of refinement",
                  },
                  {
                    title: "Expert Team Collaboration",
                    description:
                      "Multidisciplinary team of certified professionals working together on every project",
                  },
                  {
                    title: "Technology-Enabled Efficiency",
                    description:
                      "Leverage automation and advanced tools to accelerate delivery without compromising quality",
                  },
                  {
                    title: "Continuous Learning & Adaptation",
                    description:
                      "Regular methodology updates based on emerging threats and client feedback",
                  },
                ].map((advantage, index) => (
                  <div key={index} className="flex gap-4">
                    <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-primary mb-2">
                        {advantage.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-6">
                <Shield className="h-16 w-16 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-primary">
                  Client Success Story
                </h3>
              </div>
              <blockquote className="text-muted-foreground italic mb-6 text-center">
                "Com-Sec's systematic approach transformed our security posture
                in just 8 weeks. Their methodology is incredibly thorough yet
                efficient."
              </blockquote>
              <div className="text-center">
                <div className="font-semibold text-primary">Rachel Green</div>
                <div className="text-sm text-muted-foreground">
                  Founder, InnovateLab
                </div>
                <div className="flex justify-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-emerald-500 text-emerald-500"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Models */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Partnership Models
            </h2>
            <p className="text-xl text-muted-foreground">
              Flexible engagement models to fit your unique needs and timeline
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Project-Based",
                description:
                  "Fixed-scope engagements with defined deliverables",
                features: [
                  "Clear project boundaries",
                  "Fixed timeline and budget",
                  "Specific deliverables",
                  "Post-project support included",
                ],
                ideal: "One-time compliance projects",
                color: "border-blue-400",
              },
              {
                name: "Retainer Partnership",
                description: "Ongoing partnership with dedicated resources",
                features: [
                  "Dedicated team allocation",
                  "Predictable monthly costs",
                  "Continuous improvement",
                  "Priority support access",
                ],
                ideal: "Long-term security programs",
                color: "border-emerald-400",
                popular: true,
              },
              {
                name: "Hybrid Model",
                description: "Combination of project work and ongoing support",
                features: [
                  "Flexible resource allocation",
                  "Project + maintenance phases",
                  "Scalable engagement",
                  "Cost-effective approach",
                ],
                ideal: "Growing organizations",
                color: "border-purple-400",
              },
            ].map((model, index) => (
              <Card
                key={index}
                className={`relative hover:shadow-xl transition-all duration-300 border-2 ${model.color} ${model.popular ? "scale-105" : ""}`}
              >
                {model.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">
                    {model.name}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {model.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {model.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-emerald-500" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="text-sm font-medium text-gray-700">
                      Ideal for:
                    </div>
                    <div className="text-sm text-gray-600">{model.ideal}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Our Approach?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let's discuss how our proven methodology can address your specific
            cybersecurity challenges and deliver measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-emerald-600 hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
              asChild
            >
              <Link to="/contact">
                Schedule Consultation
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              asChild
            >
              <Link to="/contact">
                Learn About Our Methodology
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
