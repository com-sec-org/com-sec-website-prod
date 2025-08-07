import { Link } from "react-router-dom";
import {
  Shield,
  Target,
  Award,
  Lock,
  Users,
  FileText,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";
import { Navigation } from "../../components/Navigation";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/ui/button";

export default function Cmmc() {
  const maturityLevels = [
    {
      level: 1,
      title: "Foundational",
      description:
        "Basic cyber hygiene practices to protect Federal Contract Information (FCI)",
      requirements: "17 practices from 1 domain",
      assessment: "Annual self-assessment",
      focus: "Federal Contract Information (FCI)",
      color: "blue",
      practices: [
        "Access Control",
        "Basic cybersecurity practices",
        "Self-assessment required",
      ],
    },
    {
      level: 2,
      title: "Advanced",
      description:
        "Intermediate cyber hygiene practices for protecting Controlled Unclassified Information (CUI)",
      requirements: "110 practices from 14 domains",
      assessment: "Triennial third-party assessment",
      focus: "Controlled Unclassified Information (CUI)",
      color: "green",
      practices: [
        "All 14 security domains",
        "Third-party assessment",
        "Advanced cybersecurity practices",
      ],
    },
    {
      level: 3,
      title: "Expert",
      description:
        "Advanced and progressive cybersecurity practices for protecting CUI and sensitive program information",
      requirements: "110+ practices with additional requirements",
      assessment: "Triennial government-led assessment",
      focus: "Advanced Persistent Threats (APT)",
      color: "purple",
      practices: [
        "Advanced threat protection",
        "Proactive security measures",
        "Government assessment required",
      ],
    },
  ];

  const securityDomains = [
    {
      domain: "Access Control (AC)",
      description:
        "Limit information system access to authorized users, processes, and devices",
      practices: 22,
      icon: Lock,
    },
    {
      domain: "Awareness and Training (AT)",
      description: "Ensure personnel are adequately trained in cybersecurity",
      practices: 5,
      icon: Users,
    },
    {
      domain: "Audit and Accountability (AU)",
      description: "Create, protect, and retain system audit logs and records",
      practices: 12,
      icon: FileText,
    },
    {
      domain: "Configuration Management (CM)",
      description:
        "Establish and maintain baseline configurations and inventories",
      practices: 12,
      icon: Shield,
    },
    {
      domain: "Identification and Authentication (IA)",
      description:
        "Identify users, processes, and devices before granting access",
      practices: 12,
      icon: Target,
    },
    {
      domain: "Incident Response (IR)",
      description:
        "Establish operational incident handling capability for organizational systems",
      practices: 6,
      icon: AlertTriangle,
    },
  ];

  const implementationSteps = [
    {
      phase: "Scope Definition & Gap Analysis",
      description:
        "Define CMMC scope, identify CUI flows, and assess current cybersecurity posture",
      duration: "3-4 weeks",
      activities: [
        "CUI identification and mapping",
        "System boundary definition",
        "Current state assessment",
        "Gap analysis against CMMC requirements",
      ],
    },
    {
      phase: "CMMC Level Determination",
      description:
        "Determine required CMMC level based on contract requirements and CUI handling",
      duration: "1-2 weeks",
      activities: [
        "Contract analysis",
        "CMMC level assessment",
        "Requirements documentation",
        "Stakeholder alignment",
      ],
    },
    {
      phase: "System Security Plan Development",
      description:
        "Create comprehensive documentation of cybersecurity controls and implementation",
      duration: "4-6 weeks",
      activities: [
        "SSP development",
        "Control implementation documentation",
        "Policies and procedures",
        "Evidence collection framework",
      ],
    },
    {
      phase: "Control Implementation",
      description:
        "Deploy technical and administrative controls to meet CMMC requirements",
      duration: "12-20 weeks",
      activities: [
        "Technical control deployment",
        "Administrative control implementation",
        "Staff training and awareness",
        "Process improvement",
      ],
    },
    {
      phase: "Assessment Preparation",
      description:
        "Prepare for CMMC assessment through internal testing and evidence compilation",
      duration: "3-4 weeks",
      activities: [
        "Internal assessment",
        "Evidence compilation",
        "Documentation review",
        "Assessment readiness validation",
      ],
    },
    {
      phase: "CMMC Assessment",
      description:
        "Undergo formal CMMC assessment by certified third-party assessor",
      duration: "1-2 weeks",
      activities: [
        "Formal assessment execution",
        "Evidence review",
        "Control testing",
        "Certification decision",
      ],
    },
  ];

  const complianceBenefits = [
    {
      title: "DoD Contract Eligibility",
      description:
        "Required for participating in Department of Defense contracts involving CUI",
      icon: Award,
    },
    {
      title: "Enhanced Security Posture",
      description:
        "Improved cybersecurity capabilities and resilience against advanced threats",
      icon: Shield,
    },
    {
      title: "Competitive Advantage",
      description: "Differentiation in the defense contracting marketplace",
      icon: Target,
    },
    {
      title: "Supply Chain Trust",
      description:
        "Increased trust and confidence from prime contractors and government customers",
      icon: Users,
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
                  <Shield className="w-8 h-8 text-blue-200" />
                </div>
                <span className="text-blue-200 font-semibold">
                  Defense Contractor Security
                </span>
              </div>
              <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
                CMMC
                <span className="block text-blue-200">Compliance</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Achieve Cybersecurity Maturity Model Certification for
                Department of Defense contracts. Protect Controlled Unclassified
                Information and demonstrate cybersecurity maturity.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white"
                  asChild
                >
                  <Link to="/contact">
                    Start CMMC Assessment
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8">
                <img
                  src="https://images.pexels.com/photos/6090789/pexels-photo-6090789.jpeg"
                  alt="Detailed shot of a rifle scope on a firearm, in low light setting"
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 to-purple-700/80 flex items-center justify-center">
                  <Shield className="h-24 w-24 md:h-32 md:w-32 text-white opacity-90" />
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-sm border border-blue-400/30">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">3</div>
                    <div className="text-blue-200">Maturity Levels</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">14</div>
                    <div className="text-blue-200">Security Domains</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">
                      110
                    </div>
                    <div className="text-blue-200">Level 2 Practices</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">
                      3yr
                    </div>
                    <div className="text-blue-200">Certification Validity</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maturity Levels */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              CMMC Maturity Levels
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              CMMC defines three levels of cybersecurity maturity, each building
              upon the previous level with increasing security requirements and
              assessment rigor.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {maturityLevels.map((level, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 h-full">
                  <div className="text-center mb-6">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${
                        level.color === "blue"
                          ? "from-blue-500 to-blue-600"
                          : level.color === "green"
                            ? "from-green-500 to-green-600"
                            : "from-purple-500 to-purple-600"
                      } rounded-full flex items-center justify-center mx-auto mb-4`}
                    >
                      <span className="text-white font-bold text-2xl">
                        {level.level}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Level {level.level}
                    </h3>
                    <h4 className="text-lg font-semibold text-blue-600 mb-4">
                      {level.title}
                    </h4>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {level.description}
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">
                        Requirements:
                      </h5>
                      <p className="text-sm text-gray-600">
                        {level.requirements}
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">
                        Assessment:
                      </h5>
                      <p className="text-sm text-gray-600">
                        {level.assessment}
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">
                        Focus:
                      </h5>
                      <p className="text-sm text-gray-600">{level.focus}</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">
                        Key Practices:
                      </h5>
                      <div className="space-y-2">
                        {level.practices.map((practice, idx) => (
                          <div key={idx} className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            <span className="text-sm text-gray-600">
                              {practice}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Domains */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              CMMC Security Domains
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              CMMC Level 2 encompasses 14 security domains with 110
              cybersecurity practices that organizations must implement to
              protect Controlled Unclassified Information.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityDomains.map((domain, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 border border-blue-200 h-full">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-blue-100 rounded-xl mr-4 group-hover:bg-blue-200 transition-colors">
                      <domain.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {domain.practices} practices
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {domain.domain}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {domain.description}
                  </p>
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
              CMMC Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our structured approach ensures comprehensive CMMC compliance
              preparation and successful certification assessment for your
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

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Benefits of CMMC Certification
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              CMMC certification provides tangible business and security
              benefits that extend beyond Department of Defense contract
              requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceBenefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="bg-blue-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-100 transition-colors">
                  <benefit.icon className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment Requirements */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">
                CMMC Assessment Requirements
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Certified Third-Party Assessor (C3PAO)
                    </h3>
                    <p className="text-blue-100">
                      Level 2 assessments must be conducted by CMMC-authorized
                      C3PAO organizations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Triennial Assessment Cycle
                    </h3>
                    <p className="text-blue-100">
                      CMMC certifications are valid for three years, requiring
                      periodic reassessment.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Evidence-Based Assessment
                    </h3>
                    <p className="text-blue-100">
                      Assessors review documentation, interview personnel, and
                      test security controls.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Marketplace Visibility
                    </h3>
                    <p className="text-blue-100">
                      Certified organizations are listed in the CMMC marketplace
                      for contractor visibility.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Assessment Timeline
                </h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center text-white">
                    <span>Preparation Phase</span>
                    <span className="font-bold">6-12 months</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-blue-400 h-2 rounded-full w-5/6"></div>
                  </div>
                  <div className="flex justify-between items-center text-white">
                    <span>Assessment Execution</span>
                    <span className="font-bold">1-2 weeks</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-green-400 h-2 rounded-full w-full"></div>
                  </div>
                  <div className="flex justify-between items-center text-white">
                    <span>Certification Decision</span>
                    <span className="font-bold">2-4 weeks</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-purple-400 h-2 rounded-full w-3/4"></div>
                  </div>
                  <div className="flex justify-between items-center text-white">
                    <span>Certification Validity</span>
                    <span className="font-bold">3 years</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-yellow-400 h-2 rounded-full w-full"></div>
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
            Ready to Achieve CMMC Certification?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your CMMC compliance journey with our comprehensive assessment
            and implementation services.
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
  );
}
