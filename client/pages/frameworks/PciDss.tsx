import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  Shield,
  CreditCard,
  Lock,
  CheckCircle,
  Users,
  FileText,
  Database,
  Zap,
  ArrowRight,
} from "lucide-react";
import { Navigation } from "../../components/Navigation";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/ui/button";

export default function PciDss() {
  const requirements = [
    {
      id: "1",
      title: "Install and maintain firewall configuration",
      description:
        "Protect cardholder data with properly configured firewalls and routers",
      icon: Shield,
    },
    {
      id: "2",
      title: "Do not use vendor-supplied defaults",
      description:
        "Change default passwords and security parameters on all systems",
      icon: Lock,
    },
    {
      id: "3",
      title: "Protect stored cardholder data",
      description: "Encrypt stored cardholder data and limit data retention",
      icon: Database,
    },
    {
      id: "4",
      title: "Encrypt transmission of cardholder data",
      description: "Encrypt cardholder data sent across open, public networks",
      icon: Zap,
    },
    {
      id: "5",
      title: "Protect all systems against malware",
      description: "Use and regularly update anti-virus software or programs",
      icon: Shield,
    },
    {
      id: "6",
      title: "Develop and maintain secure systems",
      description: "Install security patches and develop applications securely",
      icon: FileText,
    },
  ];

  const implementationSteps = [
    {
      phase: "Assessment & Scoping",
      description:
        "Define cardholder data environment and identify all systems that store, process, or transmit cardholder data",
      duration: "2-4 weeks",
    },
    {
      phase: "Gap Analysis",
      description:
        "Evaluate current security controls against PCI DSS requirements and identify remediation needs",
      duration: "1-2 weeks",
    },
    {
      phase: "Remediation Planning",
      description:
        "Develop comprehensive remediation plan with timelines and resource allocation",
      duration: "1 week",
    },
    {
      phase: "Security Implementation",
      description:
        "Deploy security controls, configure systems, and implement required policies and procedures",
      duration: "8-16 weeks",
    },
    {
      phase: "Testing & Validation",
      description:
        "Conduct penetration testing, vulnerability scanning, and control testing",
      duration: "2-3 weeks",
    },
    {
      phase: "Documentation & Reporting",
      description:
        "Complete Self-Assessment Questionnaire (SAQ) or prepare for QSA assessment",
      duration: "1-2 weeks",
    },
  ];

  const complianceLevels = [
    {
      level: "Level 1",
      transactions: "6M+ annually",
      requirements: "On-site assessment by QSA, quarterly network scan",
      timeline: "12-18 months",
    },
    {
      level: "Level 2",
      transactions: "1M-6M annually",
      requirements: "Self-Assessment Questionnaire, quarterly network scan",
      timeline: "6-12 months",
    },
    {
      level: "Level 3",
      transactions: "20K-1M annually",
      requirements: "Self-Assessment Questionnaire, quarterly network scan",
      timeline: "3-6 months",
    },
    {
      level: "Level 4",
      transactions: "Under 20K annually",
      requirements: "Self-Assessment Questionnaire, quarterly network scan",
      timeline: "2-4 months",
    },
  ];

  return (

    <>
  <Helmet>
    <title>PCI DSS Compliance | Payment Security | Cardholder Data Protection | Com-Sec</title>

    <meta
      name="description"
      content="Achieve PCI DSS Level 1–4 compliance with Com-Sec. We help organizations secure payment environments, implement required controls, perform gap analysis, prepare for QSA assessments, and protect cardholder data."
    />

    <meta
      name="keywords"
      content="PCI DSS, PCI Compliance, Cardholder Data Security, QSA Assessment, Payment Processing Security, PCI Levels, PCI DSS Requirements, Payment Card Industry, Data Encryption, Card Data Protection, PCI DSS Consultant"
    />

    <link rel="canonical" href="https://com-sec.io/pci-dss" />

    <meta name="robots" content="index, follow" />
    <meta name="author" content="Com-Sec" />
    <meta name="publisher" content="Com-Sec" />
    <meta charSet="utf-8" />
    <meta name="language" content="English" />
  </Helmet>
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-500/20 rounded-xl mr-4">
                  <CreditCard className="w-8 h-8 text-blue-200" />
                </div>
                <span className="text-blue-200 font-semibold">
                  Payment Security
                </span>
              </div>
              <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
                PCI DSS
                <span className="block text-blue-200">Compliance</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Secure payment card data with comprehensive PCI Data Security
                Standard compliance. Protect customer payment information and
                build trust in your payment processing systems.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white"
                  asChild
                >
                  <Link to="/contact">
                    Start PCI Assessment
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8">
                <img
                  src="https://images.pexels.com/photos/7621136/pexels-photo-7621136.jpeg"
                  alt="Modern contactless payment using a card and terminal, highlighting the ease of digital transactions"
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 to-purple-700/80 flex items-center justify-center">
                  <CreditCard className="h-24 w-24 md:h-32 md:w-32 text-white opacity-90" />
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-sm border border-blue-400/30">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">12</div>
                    <div className="text-blue-200">Core Requirements</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">4</div>
                    <div className="text-blue-200">Compliance Levels</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">
                      365
                    </div>
                    <div className="text-blue-200">Days Validation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">
                      90%
                    </div>
                    <div className="text-blue-200">Breach Reduction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Requirements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              PCI DSS Core Requirements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The Payment Card Industry Data Security Standard defines 12
              requirements organized into six control objectives for securing
              payment card data.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {requirements.map((requirement, index) => (
              <div key={requirement.id} className="group">
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 h-full">
                  <div className="flex items-start mb-6">
                    <div className="p-3 bg-blue-50 rounded-xl mr-4 group-hover:bg-blue-100 transition-colors">
                      <requirement.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {requirement.id}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {requirement.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {requirement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our structured approach ensures comprehensive PCI DSS compliance
              while minimizing business disruption and maximizing security
              effectiveness.
            </p>
          </div>

          <div className="space-y-8">
            {implementationSteps.map((step, index) => (
              <div key={index} className="group">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="bg-gray-50 rounded-xl p-8 group-hover:bg-blue-50 transition-colors">
                      <div className="flex flex-wrap items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {step.phase}
                        </h3>
                        <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">
                          {step.duration}
                        </span>
                      </div>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Levels */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              PCI DSS Compliance Levels
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compliance requirements vary based on your annual transaction
              volume. Each level has specific validation requirements and
              timelines.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceLevels.map((level, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 h-full">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-lg">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {level.level}
                    </h3>
                    <p className="text-blue-600 font-semibold">
                      {level.transactions}
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Requirements:
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {level.requirements}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Timeline:
                      </h4>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {level.timeline}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Why PCI DSS Compliance Matters
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Protect Customer Data
                    </h3>
                    <p className="text-gray-600">
                      Safeguard sensitive payment card information from data
                      breaches and unauthorized access.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Avoid Penalties
                    </h3>
                    <p className="text-gray-600">
                      Prevent costly fines, penalties, and potential loss of
                      payment processing privileges.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Build Customer Trust
                    </h3>
                    <p className="text-gray-600">
                      Demonstrate commitment to security and build confidence in
                      your payment processes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Reduce Liability
                    </h3>
                    <p className="text-gray-600">
                      Minimize financial exposure and legal liability in case of
                      a security incident.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">
                  PCI DSS Success Metrics
                </h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span>Security Controls Implemented</span>
                    <span className="font-bold">100%</span>
                  </div>
                  <div className="w-full bg-blue-400/30 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full w-full"></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Vulnerability Reduction</span>
                    <span className="font-bold">95%</span>
                  </div>
                  <div className="w-full bg-blue-400/30 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full w-11/12"></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Compliance Achievement</span>
                    <span className="font-bold">100%</span>
                  </div>
                  <div className="w-full bg-blue-400/30 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full w-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Achieve PCI DSS Compliance?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your PCI DSS compliance journey with our expert guidance and
            proven methodology.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white"
              asChild
            >
              <Link to="/contact">
                Schedule Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
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
