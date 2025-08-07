import { Link } from "react-router-dom";
import {
  Shield,
  Globe,
  Users,
  FileText,
  Lock,
  Eye,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Navigation } from "../../components/Navigation";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/ui/button";

export default function Gdpr() {
  const coreRights = [
    {
      title: "Right to Information",
      description:
        "Individuals must be informed about how their personal data is collected and used",
      icon: FileText,
      requirements: [
        "Privacy notices",
        "Data collection purposes",
        "Legal basis for processing",
      ],
    },
    {
      title: "Right of Access",
      description:
        "Individuals can request access to their personal data and supplementary information",
      icon: Eye,
      requirements: [
        "Data subject access requests",
        "Response within 1 month",
        "Free of charge",
      ],
    },
    {
      title: "Right to Rectification",
      description:
        "Individuals can have inaccurate personal data rectified or completed if incomplete",
      icon: FileText,
      requirements: [
        "Data accuracy verification",
        "Correction processes",
        "Third-party notifications",
      ],
    },
    {
      title: "Right to Erasure",
      description:
        "Individuals can request deletion of their personal data in certain circumstances",
      icon: AlertTriangle,
      requirements: [
        "Right to be forgotten",
        "Data retention policies",
        "Technical deletion measures",
      ],
    },
    {
      title: "Right to Data Portability",
      description:
        "Individuals can obtain and reuse their personal data across different services",
      icon: Globe,
      requirements: [
        "Structured data formats",
        "Machine-readable formats",
        "Direct transmission",
      ],
    },
    {
      title: "Right to Object",
      description:
        "Individuals can object to processing of personal data in certain circumstances",
      icon: Shield,
      requirements: [
        "Opt-out mechanisms",
        "Direct marketing controls",
        "Automated decision-making",
      ],
    },
  ];

  const principles = [
    {
      principle: "Lawfulness, Fairness & Transparency",
      description:
        "Processing must be lawful, fair and transparent to the data subject",
    },
    {
      principle: "Purpose Limitation",
      description:
        "Personal data must be collected for specified, explicit and legitimate purposes",
    },
    {
      principle: "Data Minimisation",
      description:
        "Personal data must be adequate, relevant and limited to what is necessary",
    },
    {
      principle: "Accuracy",
      description:
        "Personal data must be accurate and kept up to date where necessary",
    },
    {
      principle: "Storage Limitation",
      description:
        "Personal data must not be kept longer than necessary for the purposes",
    },
    {
      principle: "Integrity & Confidentiality",
      description:
        "Personal data must be processed securely with appropriate technical measures",
    },
    {
      principle: "Accountability",
      description:
        "Controllers must demonstrate compliance with the data protection principles",
    },
  ];

  const implementationSteps = [
    {
      phase: "Data Discovery & Mapping",
      description:
        "Identify and map all personal data processing activities across your organization",
      duration: "3-4 weeks",
      activities: [
        "Data audit",
        "Processing registers",
        "Data flow mapping",
        "System inventory",
      ],
    },
    {
      phase: "Legal Basis Assessment",
      description:
        "Determine and document the legal basis for each processing activity",
      duration: "2-3 weeks",
      activities: [
        "Legal basis analysis",
        "Consent mechanisms",
        "Legitimate interests assessment",
      ],
    },
    {
      phase: "Privacy Impact Assessments",
      description:
        "Conduct DPIAs for high-risk processing activities and new projects",
      duration: "2-4 weeks",
      activities: [
        "DPIA framework",
        "Risk assessments",
        "Mitigation measures",
        "Consultation processes",
      ],
    },
    {
      phase: "Policies & Procedures",
      description:
        "Develop and implement GDPR-compliant policies and procedures",
      duration: "4-6 weeks",
      activities: [
        "Privacy policies",
        "Data retention policies",
        "Breach procedures",
        "Subject rights processes",
      ],
    },
    {
      phase: "Technical & Organisational Measures",
      description:
        "Implement appropriate security measures and privacy by design principles",
      duration: "8-12 weeks",
      activities: [
        "Security controls",
        "Encryption",
        "Access controls",
        "Privacy by design",
      ],
    },
    {
      phase: "Training & Awareness",
      description:
        "Train staff on GDPR requirements and establish ongoing awareness programs",
      duration: "2-3 weeks",
      activities: [
        "Staff training",
        "Awareness materials",
        "Regular updates",
        "Competency assessment",
      ],
    },
  ];

  const penaltyTiers = [
    {
      tier: "Administrative Fines - Tier 1",
      amount: "Up to $10 million or 2% of annual turnover",
      violations: [
        "Failure to maintain records of processing",
        "Inadequate security measures",
        "Failure to notify supervisory authority of breach",
        "Failure to conduct DPIA when required",
      ],
    },
    {
      tier: "Administrative Fines - Tier 2",
      amount: "Up to $20 million or 4% of annual turnover",
      violations: [
        "Processing without legal basis",
        "Violating data subject rights",
        "Unlawful international data transfers",
        "Violating core data protection principles",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-500/20 rounded-xl mr-4">
                  <Globe className="w-8 h-8 text-blue-200" />
                </div>
                <span className="text-blue-200 font-semibold">
                  Data Protection & Privacy
                </span>
              </div>
              <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
                GDPR
                <span className="block text-blue-200">Compliance</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Achieve comprehensive GDPR compliance with our expert guidance.
                Protect personal data, respect individual privacy rights, and
                avoid significant penalties with our proven methodology.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white"
                  asChild
                >
                  <Link to="/contact">
                    Start GDPR Assessment
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8">
                <img
                  src="https://images.pexels.com/photos/15434151/pexels-photo-15434151.jpeg"
                  alt="Vibrant interior of a parliament hall with a grand dome and intricate architecture"
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 to-purple-700/80 flex items-center justify-center">
                  <Globe className="h-24 w-24 md:h-32 md:w-32 text-white opacity-90" />
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-sm border border-blue-400/30">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">8</div>
                    <div className="text-blue-200">Individual Rights</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">7</div>
                    <div className="text-blue-200">Core Principles</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">
                      72h
                    </div>
                    <div className="text-blue-200">Breach Notification</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">
                      $20M
                    </div>
                    <div className="text-blue-200">Max Penalty</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Individual Rights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Individual Rights Under GDPR
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              GDPR grants individuals comprehensive rights over their personal
              data. Organizations must implement processes to respect and
              facilitate these rights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreRights.map((right, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 h-full">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-blue-50 rounded-xl mr-4 group-hover:bg-blue-100 transition-colors">
                      <right.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Article {index + 13}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {right.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {right.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Key Requirements:
                    </h4>
                    {right.requirements.map((req, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-sm text-gray-600">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GDPR Principles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              GDPR Core Principles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seven fundamental principles that govern all personal data
              processing under GDPR. These principles must be embedded into
              every aspect of your data handling practices.
            </p>
          </div>

          <div className="space-y-6">
            {principles.map((principle, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 hover:from-blue-100 hover:to-indigo-100 transition-all duration-300">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-8">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                        {principle.principle}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              GDPR Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach ensures systematic GDPR compliance
              across all aspects of personal data processing in your
              organization.
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
                    <div className="bg-white rounded-xl p-8 group-hover:bg-blue-50 transition-colors shadow-lg">
                      <div className="flex flex-wrap items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {step.phase}
                        </h3>
                        <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">
                          {step.duration}
                        </span>
                      </div>
                      <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        {step.description}
                      </p>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">
                          Key Activities:
                        </h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {step.activities.map((activity, idx) => (
                            <div key={idx} className="flex items-center">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                              <span className="text-sm text-gray-600">
                                {activity}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Penalty Structure */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              GDPR Penalty Structure
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding GDPR penalties helps prioritize compliance efforts
              and demonstrates the financial importance of proper data
              protection measures.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {penaltyTiers.map((tier, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 rounded-xl p-8 group-hover:from-red-100 group-hover:to-orange-100 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <AlertTriangle className="w-8 h-8 text-red-600 mr-4" />
                    <h3 className="text-2xl font-bold text-gray-900">
                      {tier.tier}
                    </h3>
                  </div>
                  <div className="bg-red-600 text-white px-6 py-3 rounded-lg mb-6">
                    <div className="text-lg font-bold text-center">
                      {tier.amount}
                    </div>
                    <div className="text-center text-red-100 text-sm">
                      (whichever is higher)
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">
                      Common Violations:
                    </h4>
                    <div className="space-y-3">
                      {tier.violations.map((violation, idx) => (
                        <div key={idx} className="flex items-start">
                          <AlertTriangle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">
                            {violation}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">
                Benefits of GDPR Compliance
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Enhanced Customer Trust
                    </h3>
                    <p className="text-blue-100">
                      Demonstrate commitment to privacy and build stronger
                      relationships with customers and partners.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Competitive Advantage
                    </h3>
                    <p className="text-blue-100">
                      Stand out in the market by showcasing strong data
                      protection practices and privacy leadership.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Improved Data Governance
                    </h3>
                    <p className="text-blue-100">
                      Better understanding and control of personal data flows
                      throughout your organization.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Global Market Access
                    </h3>
                    <p className="text-blue-100">
                      Enable business operations and data transfers within the
                      European Economic Area.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Compliance Metrics
                </h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center text-white">
                    <span>Data Subject Rights</span>
                    <span className="font-bold">100%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-green-400 h-2 rounded-full w-full"></div>
                  </div>
                  <div className="flex justify-between items-center text-white">
                    <span>Privacy Policies Updated</span>
                    <span className="font-bold">95%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-blue-400 h-2 rounded-full w-11/12"></div>
                  </div>
                  <div className="flex justify-between items-center text-white">
                    <span>Staff Training Completed</span>
                    <span className="font-bold">88%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-purple-400 h-2 rounded-full w-5/6"></div>
                  </div>
                  <div className="flex justify-between items-center text-white">
                    <span>Technical Measures</span>
                    <span className="font-bold">92%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-yellow-400 h-2 rounded-full w-11/12"></div>
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
            Ready to Achieve GDPR Compliance?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your GDPR compliance journey with our comprehensive assessment
            and implementation services.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white"
              asChild
            >
              <Link to="/contact">
                Schedule Assessment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
