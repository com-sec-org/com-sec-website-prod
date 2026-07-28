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
  Award,
  CheckCircle,
  FileCheck,
  Users,
  TrendingUp,
  Clock,
  ChevronRight,
  ArrowRight,
  Target,
  Zap,
  BarChart3,
} from "lucide-react";

export default function CertificationsAudits() {
  return (
    <>
      <Helmet>
        <title>Certifications & Audits Services | Com-Sec</title>
        <meta
          name="description"
          content="Build trust and meet requirements with Com-Sec's certifications & audits services. Expert guidance for SOC 2, ISO 27001, HIPAA, and more compliance frameworks."
        />
        <link rel="canonical" href="https://com-sec.io/certifications-audits" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Certifications & Audits Services | Com-Sec" />
        <meta
          property="og:description"
          content="Navigate the certification and audit process with Com-Sec's trusted network of independent audit partners."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://com-sec.io/certifications-audits" />
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
                <Award className="h-4 w-4 mr-2" />
                Build Trust. Meet Requirements. Move Faster.
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  Certifications
                </span>
                <span className="mx-2 bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent">
                  &amp; Audits
                </span>
              </h1>

              <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
                Whether you're pursuing your first certification or maintaining an existing compliance program, Com-Sec helps you navigate the process from readiness through final audit.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-500 to-emerald-600 hover:from-red-500/90 hover:to-emerald-600/90 transform hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <Link to="/contact">
                    Start Your Journey
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Our Approach
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Most organizations don't need another auditor—they need a partner who ensures they pass efficiently.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="hover:shadow-lg transition-all duration-300 border-2">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary mb-4 flex items-center">
                    <Target className="h-8 w-8 mr-3 text-emerald-600" />
                    What We Do
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    Com-Sec acts as your compliance and security advisor by:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Performing readiness assessments</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Identifying and remediating gaps before the audit</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Implementing required policies and controls</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Collecting and organizing evidence</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Managing auditor communications</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Supporting remediation during the audit</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Helping maintain compliance year-round</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 border-2 bg-emerald-50">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary mb-4 flex items-center">
                    <Zap className="h-8 w-8 mr-3 text-emerald-600" />
                    Key Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    This approach minimizes surprises, shortens audit timelines, and reduces overall costs:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <BarChart3 className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="font-semibold">Faster Audits</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <TrendingUp className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="font-semibold">Better Pricing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="font-semibold">Single Point of Contact</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="font-semibold">Reduced Audit Friction</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Frameworks We Support */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Certifications & Frameworks We Support
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Expert guidance across all major compliance and regulatory frameworks
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: "SOC 2 Type I & II", icon: "🛡️" },
                { name: "ISO 27001", icon: "🌐" },
                { name: "HIPAA", icon: "🏥" },
                { name: "PCI DSS", icon: "💳" },
                { name: "GDPR", icon: "🇪🇺" },
                { name: "CCPA", icon: "📋" },
                { name: "HITRUST Readiness", icon: "⚕️" },
                { name: "NIST CSF", icon: "🔒" },
                { name: "NIST 800-53", icon: "🛡️" },
                { name: "NIST 800-171", icon: "🔐" },
                { name: "CIS Controls", icon: "✓" },
                { name: "FedRAMP Readiness", icon: "🏛️" },
                { name: "CMMC Readiness", icon: "🎖️" },
              ].map((framework) => (
                <Card
                  key={framework.name}
                  className="text-center hover:shadow-lg transition-all duration-300 border-2 hover:border-emerald-600"
                >
                  <CardContent className="pt-6">
                    <div className="text-3xl mb-3">{framework.icon}</div>
                    <p className="font-semibold text-primary text-sm">
                      {framework.name}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Our Process
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A proven 5-step methodology to ensure audit success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {[
                {
                  step: "01",
                  title: "Readiness Assessment",
                  description: "We evaluate your environment, identify gaps, and build a roadmap.",
                  icon: Target,
                },
                {
                  step: "02",
                  title: "Remediation",
                  description: "Our team implements technical, administrative, and procedural controls.",
                  icon: TrendingUp,
                },
                {
                  step: "03",
                  title: "Audit Preparation",
                  description: "We gather evidence, prepare documentation, and conduct mock interviews.",
                  icon: FileCheck,
                },
                {
                  step: "04",
                  title: "Independent Audit",
                  description: "We coordinate with trusted audit partners while supporting your team.",
                  icon: Award,
                },
                {
                  step: "05",
                  title: "Continuous Compliance",
                  description: "We help maintain controls, monitor changes, and prepare for renewals.",
                  icon: Clock,
                },
              ].map((process, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300 flex flex-col"
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold mb-4">
                      {process.step}
                    </div>
                    <CardTitle className="text-lg">{process.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground">{process.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Independent Audit Partners */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Independent Audit Partners
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We work with leading audit firms to provide independent attestations while ensuring competitive pricing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  name: "Prescient Assurance",
                  description: "A leading provider of SOC 2, ISO 27001, HIPAA, PCI DSS, and other cybersecurity audits. Known for fast turnaround times and deep expertise in cloud-native organizations.",
                },
                {
                  name: "Sensiba LLP",
                  description: "One of the most recognized firms in the compliance industry, providing SOC, ISO, privacy, and cybersecurity assurance services to organizations ranging from startups to enterprise.",
                },
                {
                  name: "A-LIGN",
                  description: "A globally recognized cybersecurity compliance assessor offering SOC, ISO 27001, HITRUST, PCI DSS, FedRAMP, and other security assessments.",
                },
                {
                  name: "ATOM",
                  description: "A trusted audit and compliance partner delivering independent assurance services with a focus on practical execution, responsive teams, and high-quality outcomes.",
                },
              ].map((partner) => (
                <Card
                  key={partner.name}
                  className="hover:shadow-lg transition-all duration-300"
                >
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">
                      {partner.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{partner.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Com-Sec */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Why Choose Com-Sec?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Independent Audits",
                  description: "We maintain the separation required for independent attestations while serving as your trusted advisor throughout the process.",
                  icon: Award,
                },
                {
                  title: "Better Pricing",
                  description: "Our strategic partnerships allow us to secure competitive audit pricing for our clients.",
                  icon: TrendingUp,
                },
                {
                  title: "Faster Audits",
                  description: "Organizations that complete readiness with Com-Sec typically spend significantly less time responding to auditor requests.",
                  icon: Zap,
                },
                {
                  title: "One Security Partner",
                  description: "Instead of juggling consultants, auditors, and vendors, Com-Sec becomes your central point of contact from readiness through ongoing compliance.",
                  icon: Users,
                },
              ].map((benefit, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <benefit.icon className="h-8 w-8 text-emerald-600 mr-3" />
                      <CardTitle className="text-xl">{benefit.title}</CardTitle>
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
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  q: "Can Com-Sec perform the audit?",
                  a: "No. To preserve auditor independence, Com-Sec provides readiness, consulting, and compliance management services. Independent attestations are performed by our audit partners.",
                },
                {
                  q: "Which audit firm should we choose?",
                  a: "We'll recommend the best partner based on your industry, certification goals, budget, customer requirements, and timeline.",
                },
                {
                  q: "Do you only help with SOC 2?",
                  a: "No. We support organizations pursuing SOC 2, ISO 27001, HIPAA, PCI DSS, NIST, CMMC, FedRAMP readiness, privacy regulations, and other security frameworks.",
                },
                {
                  q: "Can you help if we're starting from scratch?",
                  a: "Absolutely. Many of our clients begin with no formal security program. We build the policies, technical controls, governance processes, and evidence collection program needed to achieve certification.",
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
              Ready to Get Certified?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Whether you're preparing for your first SOC 2, expanding into ISO 27001, or managing multiple compliance frameworks, Com-Sec provides the expertise and partnerships to help you achieve certification efficiently and cost-effectively.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-500 to-emerald-600 hover:from-red-500/90 hover:to-emerald-600/90 transform hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link to="/contact">
                  Start Your Certification Journey
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
