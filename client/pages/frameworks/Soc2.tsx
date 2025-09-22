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
  Users,
  TrendingUp,
  ChevronRight,
  ArrowRight,
  Star,
  Target,
  Lock,
  Database,
} from "lucide-react";

export default function Soc2() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-primary to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-white/5 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-accent/20 rounded-full animate-ping"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center bg-accent/20 rounded-full px-6 py-2 text-accent font-medium text-sm mb-8">
              <Shield className="h-4 w-4 mr-2" />
              SOC 2 Framework
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              SOC 2<span className="block text-accent">Compliance</span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              Service Organization Control (SOC) 2 is a compliance framework
              that ensures your organization securely manages customer data
              based on five Trust Services Criteria.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-accent to-orange-600 hover:from-accent/90 hover:to-orange-600/90 transform hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link to="/contact">
                  Get SOC 2 Ready
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
        </div>
      </section>

      {/* What is SOC 2 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                What is SOC 2?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                SOC 2 (Service Organization Control 2) is an auditing procedure
                that ensures your service providers securely manage your data to
                protect the interests of your organization and the privacy of
                its clients.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Developed by the American Institute of CPAs (AICPA), SOC 2
                defines criteria for managing customer data based on five "Trust
                Service Criteria"—security, availability, processing integrity,
                confidentiality, and privacy.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <div className="text-3xl font-bold text-accent mb-2">
                    100%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Enterprise Adoption
                  </div>
                </div>
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <div className="text-3xl font-bold text-accent mb-2">
                    $2.4M
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Avg. Data Breach Cost
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/5475786/pexels-photo-5475786.jpeg"
                  alt="A tech-savvy individual using a laptop in a neon-lit room, symbolizing cybersecurity"
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-blue-600/80 flex items-center justify-center">
                  <Shield className="h-24 w-24 md:h-32 md:w-32 text-white opacity-90" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Services Criteria */}
      <section className="py-20 bg-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Trust Services Criteria
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The five foundational principles that form the basis of SOC 2
              compliance
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
                bgColor: "bg-blue-50",
              },
              {
                title: "Availability",
                description:
                  "System operations, products, or services are available for operation and use",
                icon: Clock,
                color: "text-green-600",
                bgColor: "bg-green-50",
              },
              {
                title: "Processing Integrity",
                description:
                  "System processing is complete, valid, accurate, timely, and authorized",
                icon: CheckCircle,
                color: "text-purple-600",
                bgColor: "bg-purple-50",
              },
              {
                title: "Confidentiality",
                description:
                  "Information designated as confidential is protected as committed or agreed",
                icon: Lock,
                color: "text-red-600",
                bgColor: "bg-red-50",
              },
              {
                title: "Privacy",
                description:
                  "Personal information is collected, used, retained, disclosed, and disposed properly",
                icon: Users,
                color: "text-orange-600",
                bgColor: "bg-orange-50",
              },
            ].map((criteria, index) => (
              <Card
                key={index}
                className={`hover:shadow-lg transition-all duration-300 ${criteria.bgColor}`}
              >
                <CardHeader className="text-center">
                  <criteria.icon
                    className={`h-12 w-12 mx-auto mb-4 ${criteria.color}`}
                  />
                  <CardTitle className="text-xl">{criteria.title}</CardTitle>
                  <CardDescription className="text-base">
                    {criteria.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SOC 2 Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              SOC 2 Report Types
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-primary mb-4 flex items-center">
                  <Target className="h-8 w-8 mr-3 text-accent" />
                  SOC 2 Type I
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Reports on the design of controls at a specific point in time.
                  It provides a snapshot of your security posture.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Point-in-time assessment
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Control design evaluation
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Faster completion (6-8 weeks)
                  </li>
                </ul>
                <div className="text-sm text-accent font-medium">
                  Duration: 6-8 weeks
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-primary mb-4 flex items-center">
                  <TrendingUp className="h-8 w-8 mr-3 text-accent" />
                  SOC 2 Type II
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Reports on the design and operating effectiveness of controls
                  over a period of time (typically 3-12 months).
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Operating effectiveness testing
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    3-12 month observation period
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Most trusted by customers
                  </li>
                </ul>
                <div className="text-sm text-accent font-medium">
                  Duration: 3-12 months observation
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SOC 2 Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">SOC 2 Pricing</h2>
            <p className="text-xl text-muted-foreground">Clear, outcome-focused pricing for your SOC 2 journey</p>
          </div>

          <div className="grid grid-cols-1 gap-8 max-w-3xl mx-auto">
            {[
              {
                name: "Continued SOC 2 Support",
                price: "Custom pricing",
                description:
                  "We become your compliance team—owning ongoing evidence collection, control monitoring, auditor coordination, and security questionnaires.",
                features: [
                  "Quarterly risk and control reviews",
                  "Evidence automation and upkeep",
                  "Security questionnaire responses",
                  "Executive reporting and metrics",
                ],
              },
            ].map((plan, index) => (
              <Card key={index} className="relative hover:shadow-xl transition-all duration-300 border-2">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-accent mb-2">{plan.price}</div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-accent hover:bg-accent/90" asChild>
                    <Link to="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Benefits of SOC 2 Compliance
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Customer Trust",
                description:
                  "Build trust with customers and partners by demonstrating your commitment to security",
                icon: "🤝",
              },
              {
                title: "Competitive Advantage",
                description:
                  "Differentiate from competitors and win more enterprise deals",
                icon: "🏆",
              },
              {
                title: "Risk Reduction",
                description:
                  "Identify and mitigate security risks before they become incidents",
                icon: "🛡️",
              },
              {
                title: "Operational Excellence",
                description:
                  "Improve internal processes and operational efficiency",
                icon: "⚡",
              },
              {
                title: "Regulatory Compliance",
                description:
                  "Meet regulatory requirements and industry standards",
                icon: "📋",
              },
              {
                title: "Market Access",
                description: "Access new markets that require SOC 2 compliance",
                icon: "🌍",
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
                  <p className="text-muted-foreground">{benefit.description}</p>
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
            Ready for SOC 2 Compliance?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Start your SOC 2 journey with our expert guidance and proven
            methodology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-accent to-orange-600 hover:from-accent/90 hover:to-orange-600/90 transform hover:scale-105 transition-all duration-300"
              asChild
            >
              <Link to="/services/soc2-readiness">
                Start SOC 2 Readiness
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
