import { Helmet } from "react-helmet";
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
  Search,
  Shield,
  Globe,
  Wifi,
  Users,
  Monitor,
  Lock,
  AlertTriangle,
  ChevronRight,
  ArrowRight,
  Target,
  Zap,
  Eye,
  Star,
} from "lucide-react";

export default function PenetrationTesting() {
  return (
    <>
    {/* 🧠 SEO Metadata */}
    <Helmet>
      <title>Professional Penetration Testing Services | Com-Sec</title>
      <meta
        name="description"
        content="Secure your systems with expert pen testing services. Identify vulnerabilities and strengthen cybersecurity defenses. Get reliable testing with Com-Sec today!"
      />

<link
          rel="canonical"
          href="https://com-sec.io/penetration-testing-services"
        />
      <meta name="robots" content="index, follow" />
      <meta
        property="og:title"
        content="Professional Penetration Testing Services | Com-Sec"
      />
      <meta
        property="og:description"
        content="Com-Sec provides expert penetration testing to identify vulnerabilities and strengthen your cybersecurity defenses with reliable testing and actionable insights."
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://com-sec.io/penetration-testing-services"
      />
      <meta property="og:site_name" content="Com-Sec" />
    </Helmet>

    <div className="min-h-screen bg-white">
      <Navigation />


      {/* Animated Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-red-900 via-red-800 to-red-900 text-white relative overflow-hidden">
        {/* Animated scanning lines */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-400 to-transparent animate-scan"></div>
          <div className="absolute top-20 left-10 w-32 h-32 border-2 border-red-400/30 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border border-red-300/20 rounded-full animate-ping"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-red-400/10 rounded-full animate-bounce"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center bg-red-500/20 rounded-full px-6 py-2 text-red-300 font-medium text-sm animate-fade-in">
                <Search className="h-4 w-4 mr-2" />
                Ethical Hacking
              </div>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-slide-up">
                Penetration
                <span className="block text-red-400 animate-glow-red">
                  Testing
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-white/90 animate-slide-up animation-delay-200">
                Comprehensive security assessments that identify vulnerabilities
                before attackers do. Professional ethical hacking to strengthen
                your defenses.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-400">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 transform hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <Link to="/contact">
                    Schedule Assessment
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 transform hover:scale-105 transition-all duration-500">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 animate-slide-in-right">
                    <div className="w-4 h-4 bg-red-400 rounded-full animate-pulse"></div>
                    <div className="text-lg">
                      Scanning network infrastructure...
                    </div>
                  </div>
                  <div className="flex items-center gap-4 animate-slide-in-right animation-delay-200">
                    <div className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
                    <div className="text-lg">Testing web applications...</div>
                  </div>
                  <div className="flex items-center gap-4 animate-slide-in-right animation-delay-400">
                    <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                    <div className="text-lg">
                      Analyzing wireless security...
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="text-center animate-counter">
                      <div className="text-3xl font-bold text-red-400 mb-2">
                        1000+
                      </div>
                      <div className="text-sm text-white/80">
                        Tests Performed
                      </div>
                    </div>
                    <div className="text-center animate-counter animation-delay-200">
                      <div className="text-3xl font-bold text-red-400 mb-2">
                        100%
                      </div>
                      <div className="text-sm text-white/80">Issues Found</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testing Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 animate-fade-in">
              Types of Penetration Testing
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in animation-delay-200">
              Comprehensive security testing across all attack vectors to
              identify and address vulnerabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Network Penetration Testing",
                description:
                  "Evaluate network infrastructure security including servers, firewalls, switches, and routers for misconfigurations and vulnerabilities",
                icon: Globe,
                color: "text-blue-600",
                bgColor: "bg-blue-50 hover:bg-blue-100",
                delay: "animation-delay-100",
              },
              {
                title: "Web Application Testing",
                description:
                  "Identify security flaws in web applications including SQL injection, XSS, and broken authentication mechanisms",
                icon: Monitor,
                color: "text-green-600",
                bgColor: "bg-green-50 hover:bg-green-100",
                delay: "animation-delay-200",
              },
              {
                title: "Wireless Security Testing",
                description:
                  "Assess Wi-Fi and Bluetooth security, encryption protocols, and identify unauthorized access points",
                icon: Wifi,
                color: "text-purple-600",
                bgColor: "bg-purple-50 hover:bg-purple-100",
                delay: "animation-delay-300",
              },
              {
                title: "Social Engineering Testing",
                description:
                  "Evaluate human element security through phishing simulations, pretexting, and psychological manipulation techniques",
                icon: Users,
                color: "text-red-600",
                bgColor: "bg-red-50 hover:bg-red-100",
                delay: "animation-delay-400",
              },
              {
                title: "Physical Security Testing",
                description:
                  "Assess physical security measures by attempting unauthorized access to secure areas and facilities",
                icon: Lock,
                color: "text-orange-600",
                bgColor: "bg-orange-50 hover:bg-orange-100",
                delay: "animation-delay-500",
              },
              {
                title: "Client-Side Testing",
                description:
                  "Identify vulnerabilities in client applications like email platforms, browsers, and document readers",
                icon: Eye,
                color: "text-indigo-600",
                bgColor: "bg-indigo-50 hover:bg-indigo-100",
                delay: "animation-delay-600",
              },
            ].map((test, index) => (
              <Card
                key={index}
                className={`group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up ${test.delay} ${test.bgColor} border-l-4 border-l-red-300 hover:border-l-red-500`}
              >
                <CardHeader className="text-center">
                  <test.icon
                    className={`h-16 w-16 mx-auto mb-4 ${test.color} group-hover:scale-110 transition-transform duration-300`}
                  />
                  <CardTitle className="text-xl group-hover:text-red-600 transition-colors">
                    {test.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {test.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Penetration Testing Pricing
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Customizable pricing based on scope, complexity, and testing approach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Web Application",
                description: "OWASP Top 10, APIs, auth flows, RBAC, session management, input validation, business logic testing.",
                icon: Monitor,
                price: "$3,500",
                color: "text-green-600",
                bgColor: "bg-green-50 hover:bg-green-100",
                badge: "POPULAR",
              },
              {
                title: "Cloud Infrastructure",
                description: "Review of configurations, IAM controls, network segmentation, exposed services, and privilege escalation paths across AWS, Azure, and GCP.",
                icon: Globe,
                price: "$2,500",
                color: "text-blue-600",
                bgColor: "bg-blue-50 hover:bg-blue-100",
              },
              {
                title: "Network Infrastructure",
                description: "Internal/external network testing, firewall & VPN review, port/service enumeration AD exploitation, lateral movement, etc.",
                icon: Wifi,
                price: "$2,500",
                color: "text-purple-600",
                bgColor: "bg-purple-50 hover:bg-purple-100",
              },
              {
                title: "Mobile Application",
                description: "iOS/Android binary analysis, local storage review, API layer testing, cert pinning, runtime manipulation.",
                icon: Shield,
                price: "$6,500",
                color: "text-red-600",
                bgColor: "bg-red-50 hover:bg-red-100",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className={`group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up animation-delay-${
                  (index + 1) * 100
                } ${service.bgColor} border-t-4 border-t-orange-500 hover:border-t-orange-600 relative h-full flex flex-col`}
              >
                {service.badge && (
                  <div className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {service.badge}
                  </div>
                )}
                <CardHeader className="flex-1">
                  <service.icon
                    className={`h-12 w-12 mb-4 ${service.color} group-hover:scale-110 transition-transform duration-300`}
                  />
                  <CardTitle className="text-xl group-hover:text-orange-600 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed mt-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-orange-600">
                    FROM <br />
                    <span className="text-3xl">{service.price}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 p-8 bg-white rounded-xl border-2 border-orange-200">
            <p className="text-center text-gray-600 text-lg">
              <span className="font-semibold text-primary">Custom pricing available</span> based on scope, engagement duration, and specific testing requirements. Contact us for a detailed quote.
            </p>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Testing Methodology
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Structured approach ensuring comprehensive coverage and effective
              vulnerability identification
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Black-Box Testing",
                description:
                  "No prior knowledge of the target system, simulating external attacker perspective",
                icon: "🕶️",
                features: [
                  "External attacker simulation",
                  "Zero knowledge approach",
                  "Real-world attack scenarios",
                ],
              },
              {
                title: "Gray-Box Testing",
                description:
                  "Partial knowledge of target systems, simulating insider threat or compromised access",
                icon: "🔍",
                features: [
                  "Limited system knowledge",
                  "Insider threat simulation",
                  "Balanced approach",
                ],
              },
              {
                title: "White-Box Testing",
                description:
                  "Full knowledge including source code and architecture for comprehensive analysis",
                icon: "📋",
                features: [
                  "Complete system access",
                  "Source code analysis",
                  "Architectural review",
                ],
              },
            ].map((method, index) => (
              <Card
                key={index}
                className={`text-center hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 animate-float animation-delay-${
                  index * 200
                } group`}
              >
                <CardContent className="p-8">
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {method.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-red-600 transition-colors">
                    {method.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {method.description}
                  </p>
                  <ul className="space-y-2">
                    {method.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center justify-center gap-2"
                      >
                        <Target className="h-4 w-4 text-red-500" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Engagement Timeline (3 to 6 Weeks)
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Typical engagement duration varies based on scope and testing requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                phase: "Week 1",
                title: "Scope, Recon, Scanning",
                description:
                  "Map attack surface using passive and active methods",
                icon: Search,
                color: "text-blue-600",
                bgColor: "bg-blue-50",
              },
              {
                phase: "Week 2-4",
                title: "Vuln ID & Exploitation",
                description:
                  "Exploit vulnerabilities, escalate privileges, assess risk",
                icon: Zap,
                color: "text-red-600",
                bgColor: "bg-red-50",
              },
              {
                phase: "Week 5-6",
                title: "Reporting & Remediation",
                description:
                  "Detailed findings with fix guidance and retest",
                icon: Shield,
                color: "text-green-600",
                bgColor: "bg-green-50",
              },
            ].map((phase, index) => (
              <Card
                key={index}
                className={`hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up animation-delay-${
                  (index + 1) * 100
                } ${phase.bgColor} border-t-4 border-t-orange-500`}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <phase.icon className={`h-8 w-8 ${phase.color} flex-shrink-0`} />
                    <div>
                      <div className="text-sm font-bold text-orange-600 mb-1">
                        {phase.phase}
                      </div>
                      <h3 className="text-2xl font-bold text-primary">
                        {phase.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {phase.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-orange-200">
            <h3 className="text-lg font-semibold text-primary mb-4">Ready?</h3>
            <p className="text-gray-700 mb-4">
              Retesting & Validation
            </p>
            <p className="text-gray-600">
              Pricing scoped on expected hours, endpoints, assets, roles, and complexity. Customizable per engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              What You'll Receive
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive deliverables to understand and remediate identified vulnerabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Comprehensive Security Report",
                icon: "📋",
                description: "Complete technical findings with detailed vulnerability descriptions",
              },
              {
                title: "Remediation Recommendations",
                icon: "🔧",
                description: "Specific step-by-step guidance for fixing each identified vulnerability",
              },
              {
                title: "Risk Assessment (CVSS Scoring)",
                icon: "⚠️",
                description: "Vulnerability severity ratings using CVSS framework for prioritization",
              },
              {
                title: "Post Remediation Retesting",
                icon: "✓",
                description: "Follow-up testing to verify successful remediation of vulnerabilities",
              },
              {
                title: "Executive Summary",
                icon: "📊",
                description: "High-level overview of findings for leadership and C-suite stakeholders",
              },
              {
                title: "Attestation Letter",
                icon: "✅",
                description: "Official documentation confirming completion of penetration testing engagement",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className={`hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up animation-delay-${
                  (index + 1) * 100
                } bg-white hover:bg-red-50 border-l-4 border-l-red-500 hover:border-l-red-600`}
              >
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-gradient-to-r from-red-900 to-red-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 transform hover:scale-105 transition-all duration-500">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-red-400 text-red-400" />
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl font-medium mb-6 leading-relaxed">
              "The penetration testing revealed critical vulnerabilities we
              never knew existed. Com-Sec's thorough approach and detailed
              remediation guidance helped us prevent potential security breaches
              worth millions."
            </blockquote>
            <footer className="text-lg">
              <div className="font-semibold text-red-300">Michael Chen</div>
              <div className="text-white/80">CISO, HealthTech Solutions</div>
            </footer>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Secure Your Systems Today
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Don't wait for attackers to find your vulnerabilities. Schedule a
            comprehensive penetration test and strengthen your defenses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 transform hover:scale-105 transition-all duration-300"
              asChild
            >
              <Link to="/contact">
                Schedule Penetration Test
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
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

      {/* Penetration Testing Reviews Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 via-white to-red-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 to-gray-600/5"></div>
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-red-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gray-400/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-red-100 to-gray-100 rounded-full px-4 sm:px-6 py-2 text-red-700 font-medium text-xs sm:text-sm mb-6 sm:mb-8">
              <Star className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 fill-current" />
              Penetration Testing Excellence
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Trusted by{" "}
              <span className="bg-gradient-to-r from-red-600 to-gray-700 bg-clip-text text-transparent">
                Security Leaders
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              See what our clients say about our thorough and professional
              penetration testing services.
            </p>
          </div>

          {/* Penetration Testing Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {/* Healthcare Pen Test Review */}
            <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-red-200 animate-float animation-delay-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current mr-1"
                  />
                ))}
              </div>
              <blockquote className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
                "Wonderful experience, would use again. Com-Sec was great! They
                did a very thorough pen testing for us. In healthcare, we have
                to be extremely diligent with cybersecurity. Farbod and his team
                allowed us to make sure we can provide secure service to our
                patients."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  H
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    Healthcare Executive
                  </div>
                  <div className="text-sm text-gray-500">Apr 06, 2024</div>
                </div>
              </div>
            </div>

            {/* Great Pen Test Provider */}
            <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-red-200 animate-bounce-slow animation-delay-200">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current mr-1"
                  />
                ))}
              </div>
              <blockquote className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
                "Great pen test provider! Very thorough testing, and great
                communication. Highly recommended!"
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  S
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    Security Manager
                  </div>
                  <div className="text-sm text-gray-500">Apr 01, 2024</div>
                </div>
              </div>
            </div>

            {/* Outstanding First Pentest */}
            <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-red-200 animate-wiggle animation-delay-300">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current mr-1"
                  />
                ))}
              </div>
              <blockquote className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
                "Outstanding service for our first Pentest. Com-Sec has been
                fantastic. They conducted a thorough pen test tailored to our
                needs, simplified compliance, improved our security, and did it
                all at a great price. Led by Farbod, their professional and
                adaptable team has been crucial."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  C
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    Compliance Director
                  </div>
                  <div className="text-sm text-gray-500">Oct 23, 2023</div>
                </div>
              </div>
            </div>

            {/* Professional Reports */}
            <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-red-200 animate-twinkle animation-delay-400 md:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current mr-1"
                  />
                ))}
              </div>
              <blockquote className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
                "Well-executed, fairly priced, and professional and helpful in
                their reports. We hired Com-Sec for a pentest. They did
                everything they said they would, which... is surprisingly rare.
                Really enjoyed working with them, and they're thoughtful and
                helpful in discussing the findings and working through
                remediation efforts with us."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  T
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Tech Lead</div>
                  <div className="text-sm text-gray-500">Oct 02, 2023</div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="mb-8">
              <div className="inline-flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">5.0</div>
                  <div className="flex justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <div className="text-sm text-gray-600">Avg Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">100%</div>
                  <div className="text-sm text-gray-600">Satisfied Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600">Tests Completed</div>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-red-500/25 text-sm sm:text-base px-6 sm:px-8"
              asChild
            >
              <Link to="/contact">
                Schedule Your Penetration Test
                <Target className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @keyframes scan {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100vw);
          }
        }

        @keyframes glowRed {
          0%,
          100% {
            text-shadow: 0 0 20px rgba(239, 68, 68, 0.5);
          }
          50% {
            text-shadow: 0 0 30px rgba(239, 68, 68, 0.8);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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

        .animate-scan {
          animation: scan 3s linear infinite;
        }

        .animate-glow-red {
          animation: glowRed 2s ease-in-out infinite;
        }

        .animate-slide-in-left {
          animation: slideInLeft 1s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slideInRight 1s ease-out forwards;
        }

        /* Include all other animations from SOC2 page */
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
