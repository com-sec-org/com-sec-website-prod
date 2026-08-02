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
  AlertTriangle,
  BarChart3,
} from "lucide-react";

export default function VcisoServices() {
  return (
    <>
      <Helmet>
        <title>Virtual CISO Services | Strategic Security Leadership | Com-Sec</title>
        <meta
          name="description"
          content="Fractional CISO services providing strategic security leadership, governance, and risk management. Perfect for organizations without full-time security executives."
        />
        <link rel="canonical" href="https://com-sec.io/vciso-services" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Virtual CISO Services | Strategic Security Leadership | Com-Sec" />
        <meta
          property="og:description"
          content="Get enterprise-grade security leadership at a fraction of the cost. Our virtual CISO services align security with business objectives."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://com-sec.io/vciso-services" />
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
                <Briefcase className="h-4 w-4 mr-2" />
                Fractional CISO & Security Leadership
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  Virtual CISO
                </span>
                <span className="block bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent">
                  Services
                </span>
              </h1>

              <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
                Enterprise CISO expertise without enterprise overhead. Strategic security leadership, hands-on execution, and deep compliance knowledge—all at a fraction of the cost. We build the security program your business deserves.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-500 to-emerald-600 hover:from-red-500/90 hover:to-emerald-600/90 transform hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <Link to="/contact">
                    Schedule CISO Consultation
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What is vCISO */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                What is a Virtual CISO?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A fractional CISO providing strategic security leadership on a part-time or project basis
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="hover:shadow-lg transition-all duration-300 border-2">
                <CardHeader>
                  <CardTitle className="text-xl text-primary mb-4">
                    Why Organizations Need a vCISO
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Full-time CISOs are expensive ($200K-$500K+ annually)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Most organizations don't need a full-time executive</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>vCISO provides strategic guidance at 20-30% of the cost</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Access to senior expertise without hiring overhead</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Flexibility to scale engagement as needs change</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 border-2 bg-emerald-50">
                <CardHeader>
                  <CardTitle className="text-xl text-primary mb-4">
                    Com-Sec's vCISO Approach
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    We serve as your trusted security executive, bridging the gap between technology and business:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <Target className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="font-semibold">Strategic Leadership</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="font-semibold">Board & Stakeholder Communication</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <BarChart3 className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="font-semibold">Risk & Compliance Management</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <TrendingUp className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="font-semibold">Security Program Development</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* vCISO Services */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Core vCISO Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Comprehensive security leadership covering strategy to execution
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Security Strategy & Governance",
                  description: "Develop and evolve your security strategy aligned with business objectives.",
                  items: [
                    "Security roadmap development",
                    "Policy and procedure creation",
                    "Governance framework establishment",
                    "Security committee leadership",
                  ],
                },
                {
                  title: "Risk & Compliance Management",
                  description: "Identify, assess, and manage security and compliance risks.",
                  items: [
                    "Risk assessments and analysis",
                    "Compliance program oversight",
                    "Audit preparation and support",
                    "Regulatory requirement mapping",
                  ],
                },
                {
                  title: "Incident Response & Crisis Management",
                  description: "Leadership during security incidents and crisis situations.",
                  items: [
                    "Incident response planning",
                    "Crisis communication strategy",
                    "Executive briefings during incidents",
                    "Post-incident analysis and improvement",
                  ],
                },
                {
                  title: "Team Leadership & Development",
                  description: "Guide and mentor your internal security team.",
                  items: [
                    "Security team mentorship",
                    "Capability assessment",
                    "Training and development planning",
                    "Performance evaluation oversight",
                  ],
                },
                {
                  title: "Vendor & Third-Party Risk",
                  description: "Manage security risks from external vendors and partners.",
                  items: [
                    "Vendor assessment programs",
                    "Third-party risk management",
                    "Contract negotiation guidance",
                    "Ongoing vendor monitoring",
                  ],
                },
                {
                  title: "Board & Executive Communication",
                  description: "Translate security to business language for leadership.",
                  items: [
                    "Board presentations",
                    "C-suite briefings",
                    "Security metrics and reporting",
                    "Business case development",
                  ],
                },
              ].map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 border-2">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">
                      {service.title}
                    </CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Engagement Models */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Flexible vCISO Engagement Models
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Tailored to your organization's maturity and needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Strategic Advisory",
                  hours: "8-16 hours/month",
                  description: "Guidance on security initiatives and strategic decisions.",
                  ideal: "Organizations with mature security teams needing executive perspective.",
                },
                {
                  title: "Fractional CISO",
                  hours: "20-40 hours/month",
                  description: "Part-time CISO role covering strategy, oversight, and governance.",
                  ideal: "Mid-size organizations building security programs.",
                },
                {
                  title: "Interim/Transition CISO",
                  hours: "40+ hours/month",
                  description: "Full-time temporary CISO coverage during transitions or crises.",
                  ideal: "Organizations in transition, interim leadership, or crisis mode.",
                },
              ].map((model, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2 flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">
                      {model.title}
                    </CardTitle>
                    <div className="text-emerald-600 font-semibold text-sm mt-2">
                      {model.hours}
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground mb-4">{model.description}</p>
                    <div className="border-t pt-4">
                      <p className="text-xs font-semibold text-primary mb-1">Best For:</p>
                      <p className="text-sm text-muted-foreground">{model.ideal}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Com-Sec */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Why Choose Com-Sec for vCISO Services?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Senior Security Expertise",
                  description: "Experienced security leaders with 15+ years in enterprise security, compliance, and governance.",
                  icon: Shield,
                },
                {
                  title: "Business-Focused Approach",
                  description: "We understand that security exists to enable business. Strategy aligned with organizational goals.",
                  icon: Target,
                },
                {
                  title: "Vendor Independence",
                  description: "Unbiased recommendations. We don't sell tools or services—only advice you can trust.",
                  icon: AlertTriangle,
                },
                {
                  title: "Flexible Engagement",
                  description: "Scale from advisory to full-time roles. Adjust as your organization's needs evolve.",
                  icon: Clock,
                },
                {
                  title: "Hands-on Implementation",
                  description: "Not just strategy. We roll up our sleeves to help execute security initiatives.",
                  icon: TrendingUp,
                },
                {
                  title: "Compliance & Audit Ready",
                  description: "Our vCISO services support audit and compliance requirements across frameworks.",
                  icon: CheckCircle,
                },
              ].map((benefit, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <benefit.icon className="h-8 w-8 text-emerald-600 mr-3" />
                      <CardTitle className="text-lg">{benefit.title}</CardTitle>
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

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  q: "What's the difference between a vCISO and a full-time CISO?",
                  a: "A vCISO provides strategic leadership on a fractional basis (part-time), while a full-time CISO is a full-time employee. vCISOs are cost-effective for organizations that don't need daily executive presence but need strategic guidance.",
                },
                {
                  q: "Is a vCISO appropriate for my organization?",
                  a: "vCISO services work well for mid-market organizations (50-500 employees), startups growing into compliance requirements, or businesses in transition. We assess your needs and recommend the right engagement model.",
                },
                {
                  q: "Can a vCISO help with compliance audits?",
                  a: "Absolutely. vCISO services include audit preparation, compliance strategy, and executive coordination during audits. We work alongside your internal team and audit partners.",
                },
                {
                  q: "How much does a vCISO cost compared to hiring full-time?",
                  a: "A full-time CISO typically costs $200K-$500K annually. vCISO services range from $8K-$25K monthly depending on engagement level—a 60-80% cost savings with flexibility.",
                },
                {
                  q: "Can we transition from vCISO to a full-time CISO later?",
                  a: "Yes. Many organizations start with vCISO guidance, then hire a full-time CISO as they scale. We can mentor your new hire and ensure a smooth transition.",
                },
                {
                  q: "What happens during a crisis or incident?",
                  a: "Your vCISO becomes your incident commander and executive voice during crises. We coordinate response, manage communications, and guide recovery efforts.",
                },
              ].map((faq, index) => (
                <Card key={index} className="border-2">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">
                      {faq.q}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.a}</p>
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
              Need Strategic Security Leadership?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Schedule a consultation with our security experts. We'll assess your organization's needs and recommend the right vCISO engagement model.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-500 to-emerald-600 hover:from-red-500/90 hover:to-emerald-600/90 transform hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link to="/contact">
                  Schedule vCISO Consultation
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
                  Explore Other Services
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
