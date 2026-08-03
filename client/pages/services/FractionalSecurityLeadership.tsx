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
  Target,
  Briefcase,
  BarChart3,
} from "lucide-react";

export default function FractionalSecurityLeadership() {
  return (
    <>
      <Helmet>
        <title>Fractional Security Leadership | vCISO & Security Strategy | Com-Sec</title>
        <meta
          name="description"
          content="Fractional CISO and security leadership services including security strategy, governance, and risk management. Enterprise-grade security leadership at a fraction of the cost."
        />
        <link rel="canonical" href="https://com-sec.io/fractional-security-leadership" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Fractional Security Leadership | Com-Sec" />
        <meta property="og:description" content="Strategic security leadership and vCISO services for organizations without full-time security executives." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://com-sec.io/fractional-security-leadership" />
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
                <Briefcase className="h-4 w-4 mr-2" />
                Strategic Security Leadership
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  Fractional Security
                </span>
                <span className="block bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent">
                  Leadership
                </span>
              </h1>

              <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
                Enterprise-grade CISO expertise without enterprise overhead. Strategic security leadership, governance oversight, and deep compliance knowledge—all tailored to your organization's size and needs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-500 to-emerald-600 hover:from-red-500/90 hover:to-emerald-600/90 transform hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <Link to="/contact">
                    Schedule Consultation
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                What We Offer
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Comprehensive fractional security leadership tailored to your organization
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Fractional CISO",
                  hours: "8-16 hours/month",
                  pricing: "$1,200-$2,400/month",
                  description: "Strategic guidance on security initiatives, board reporting, and executive decisions.",
                  features: [
                    "Security strategy development",
                    "Executive and board reporting",
                    "Risk management oversight",
                    "Regulatory guidance",
                    "Vendor assessment",
                    "Compliance roadmap"
                  ]
                },
                {
                  title: "Part-Time Security Leadership",
                  hours: "20-40 hours/month",
                  pricing: "$3,000-$6,000/month",
                  description: "Part-time CISO role covering strategy, oversight, governance, and hands-on guidance.",
                  features: [
                    "Complete security strategy",
                    "Policy development and governance",
                    "Security team oversight",
                    "Compliance monitoring",
                    "Incident response planning",
                    "Security culture development"
                  ]
                },
                {
                  title: "Security Program Development",
                  hours: "Custom",
                  pricing: "Custom pricing",
                  description: "Build or enhance your security program from the ground up with expert guidance.",
                  features: [
                    "Program assessment",
                    "Strategic roadmap creation",
                    "Policy framework development",
                    "Control implementation",
                    "Team training and enablement",
                    "Compliance alignment"
                  ]
                },
                {
                  title: "Executive Coaching",
                  hours: "Custom",
                  pricing: "Custom pricing",
                  description: "Direct coaching and mentoring for your security team and executives.",
                  features: [
                    "Leadership development",
                    "Technical security guidance",
                    "Compliance expertise",
                    "Industry best practices",
                    "Strategic planning",
                    "Decision support"
                  ]
                }
              ].map((service, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-accent">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <div className="text-sm text-muted-foreground mb-1">Engagement</div>
                      <div className="text-accent font-bold text-lg">{service.hours}</div>
                      <div className="text-accent font-bold text-lg mt-1">
                        {service.pricing}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-3">What's Included:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
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

        {/* Key Services */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Core Service Areas
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: "Security Strategy & Roadmap",
                  description: "Develop a comprehensive security strategy aligned with business objectives and regulatory requirements."
                },
                {
                  icon: BarChart3,
                  title: "Board & Executive Reporting",
                  description: "Translate technical security concepts into business-relevant metrics and insights for leadership."
                },
                {
                  icon: Users,
                  title: "Security Program Development",
                  description: "Build or enhance your security program with proper governance, policies, and controls."
                },
                {
                  icon: Shield,
                  title: "Risk Management",
                  description: "Identify, assess, and manage security and compliance risks across the organization."
                },
                {
                  icon: Clock,
                  title: "Compliance Oversight",
                  description: "Ensure ongoing compliance with regulations like SOC 2, ISO 27001, HIPAA, GDPR, and industry frameworks."
                },
                {
                  icon: TrendingUp,
                  title: "Security Culture",
                  description: "Foster a security-conscious culture across your organization with training and awareness programs."
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

        {/* Why Choose Us */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Why Choose Our Fractional Security Leadership
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                "Expert CISO-level guidance without the six-figure salary",
                "Flexible engagement models that scale with your needs",
                "Access to a team of certified security professionals",
                "Proven track record with organizations across industries",
                "Quick deployment - start within days, not months",
                "Focus on your business objectives, not just compliance",
                "Regular strategic reviews and continuous improvement",
                "Clear communication and transparent reporting"
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
        <section className="py-20 bg-gradient-to-br from-primary to-blue-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Security Leadership?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Let's discuss how fractional security leadership can strengthen your organization's security posture
            </p>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100"
              asChild
            >
              <Link to="/contact">
                Schedule Your Free Consultation
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
