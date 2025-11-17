import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  Shield,
  Target,
  Eye,
  Users,
  RotateCcw,
  CheckCircle,
  FileText,
  Lock,
  ArrowRight,
} from "lucide-react";
import { Navigation } from "../../components/Navigation";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/ui/button";

export default function Nist() {
  const frameworkFunctions = [
    {
      id: "ID",
      title: "Identify",
      description:
        "Develop an understanding of cybersecurity risk to systems, assets, data, and capabilities",
      icon: Eye,
      categories: [
        "Asset Management",
        "Risk Assessment",
        "Governance",
        "Risk Management Strategy",
      ],
    },
    {
      id: "PR",
      title: "Protect",
      description:
        "Develop and implement appropriate safeguards to ensure delivery of critical services",
      icon: Shield,
      categories: [
        "Access Control",
        "Data Security",
        "Information Protection",
        "Maintenance",
      ],
    },
    {
      id: "DE",
      title: "Detect",
      description:
        "Develop and implement appropriate activities to identify occurrence of cybersecurity events",
      icon: Target,
      categories: [
        "Anomalies & Events",
        "Security Monitoring",
        "Detection Processes",
      ],
    },
    {
      id: "RS",
      title: "Respond",
      description:
        "Develop and implement appropriate activities to take action regarding detected cybersecurity events",
      icon: Users,
      categories: [
        "Response Planning",
        "Communications",
        "Analysis",
        "Mitigation",
        "Improvements",
      ],
    },
    {
      id: "RC",
      title: "Recover",
      description:
        "Develop and implement appropriate activities to maintain resilience and restore capabilities",
      icon: RotateCcw,
      categories: ["Recovery Planning", "Improvements", "Communications"],
    },
  ];

  const implementationTiers = [
    {
      tier: "Tier 1",
      title: "Partial",
      description:
        "Limited awareness of cybersecurity risk at the organizational level",
      characteristics: [
        "Risk management is ad hoc",
        "Limited awareness of cyber threats",
        "No organizational cybersecurity practices",
      ],
      color: "red",
    },
    {
      tier: "Tier 2",
      title: "Risk Informed",
      description:
        "Risk management practices are approved by management but may not be established",
      characteristics: [
        "Risk-informed management",
        "Cybersecurity practices are implemented",
        "Limited sharing of information",
      ],
      color: "yellow",
    },
    {
      tier: "Tier 3",
      title: "Repeatable",
      description:
        "Organization's risk management practices are formally approved and expressed as policy",
      characteristics: [
        "Formal risk management policies",
        "Regular cybersecurity practices",
        "Information sharing with partners",
      ],
      color: "blue",
    },
    {
      tier: "Tier 4",
      title: "Adaptive",
      description:
        "Organization adapts its cybersecurity practices based on lessons learned and predictive indicators",
      characteristics: [
        "Adaptive risk management",
        "Continuous improvement",
        "Advanced threat intelligence",
      ],
      color: "green",
    },
  ];

  const implementationSteps = [
    {
      phase: "Current State Assessment",
      description:
        "Evaluate existing cybersecurity posture against NIST Framework core functions and categories",
      duration: "2-3 weeks",
      deliverables: [
        "Gap Analysis Report",
        "Risk Assessment",
        "Current State Documentation",
      ],
    },
    {
      phase: "Target Profile Development",
      description:
        "Define desired cybersecurity outcomes and target implementation tier for your organization",
      duration: "1-2 weeks",
      deliverables: [
        "Target Profile",
        "Implementation Roadmap",
        "Success Metrics",
      ],
    },
    {
      phase: "Gap Analysis & Prioritization",
      description:
        "Identify gaps between current and target states, prioritize based on risk and business impact",
      duration: "1 week",
      deliverables: [
        "Prioritized Gap Analysis",
        "Risk-Based Action Plan",
        "Resource Requirements",
      ],
    },
    {
      phase: "Implementation Planning",
      description:
        "Develop detailed implementation plan with timelines, resources, and success criteria",
      duration: "1-2 weeks",
      deliverables: [
        "Implementation Plan",
        "Project Charter",
        "Communication Strategy",
      ],
    },
    {
      phase: "Control Implementation",
      description:
        "Deploy cybersecurity controls and practices according to prioritized action plan",
      duration: "12-24 weeks",
      deliverables: [
        "Implemented Controls",
        "Updated Policies",
        "Training Materials",
      ],
    },
    {
      phase: "Monitoring & Improvement",
      description:
        "Establish continuous monitoring and improvement processes for ongoing effectiveness",
      duration: "Ongoing",
      deliverables: [
        "Monitoring Framework",
        "Performance Metrics",
        "Improvement Process",
      ],
    },
  ];

  const benefits = [
    {
      title: "Risk-Based Approach",
      description:
        "Focus resources on highest priority risks and business-critical assets",
      icon: Target,
    },
    {
      title: "Industry Agnostic",
      description:
        "Flexible framework applicable across all sectors and organization sizes",
      icon: Users,
    },
    {
      title: "Cost Effective",
      description:
        "Leverage existing investments and prioritize improvements based on risk",
      icon: CheckCircle,
    },
    {
      title: "Regulatory Alignment",
      description:
        "Supports compliance with various regulatory requirements and standards",
      icon: FileText,
    },
  ];

  return (

    <>
  <Helmet>
    <title>NIST Cybersecurity Framework (CSF) | Risk-Based Security | Com-Sec</title>

    <meta
      name="description"
      content="Strengthen your cybersecurity posture with the NIST Cybersecurity Framework (CSF). Com-Sec helps organizations assess, implement, and operationalize NIST CSF functions—Identify, Protect, Detect, Respond, and Recover."
    />

    <meta
      name="keywords"
      content="NIST, NIST CSF, NIST Cybersecurity Framework, Identify Protect Detect Respond Recover, NIST Implementation, Risk Management, NIST Compliance, Cybersecurity Framework, Risk Assessment, Security Controls, NIST Maturity Tiers, Incident Response, Cybersecurity Best Practices"
    />

    <link rel="canonical" href="https://com-sec.io/nist" />

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
                  <Shield className="w-8 h-8 text-blue-200" />
                </div>
                <span className="text-blue-200 font-semibold">
                  Cybersecurity Excellence
                </span>
              </div>
              <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
                NIST Cybersecurity
                <span className="block text-blue-200">Framework</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Strengthen your cybersecurity posture with the NIST
                Cybersecurity Framework. A risk-based approach to managing
                cybersecurity risk that's flexible, repeatable, and
                cost-effective.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white"
                  asChild
                >
                  <Link to="/contact">
                    Start Assessment
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8">
                <img
                  src="https://images.pexels.com/photos/7785095/pexels-photo-7785095.jpeg"
                  alt="Close-up of a Tustin police car parked near a city hall building in daylight"
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 to-purple-700/80 flex items-center justify-center">
                  <Shield className="h-24 w-24 md:h-32 md:w-32 text-white opacity-90" />
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-sm border border-blue-400/30">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">5</div>
                    <div className="text-blue-200">Core Functions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">23</div>
                    <div className="text-blue-200">Categories</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">
                      108
                    </div>
                    <div className="text-blue-200">Subcategories</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">4</div>
                    <div className="text-blue-200">Implementation Tiers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Functions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              NIST Framework Core Functions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The Framework Core consists of five concurrent and continuous
              functions that provide a strategic view of the lifecycle of an
              organization's management of cybersecurity risk.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {frameworkFunctions.map((func, index) => (
              <div key={func.id} className="group">
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 h-full">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-blue-50 rounded-xl mr-4 group-hover:bg-blue-100 transition-colors">
                      <func.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                      {func.id}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {func.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {func.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Key Categories:
                    </h4>
                    {func.categories.map((category, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-sm text-gray-600">
                          {category}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Tiers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Implementation Tiers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Framework Implementation Tiers describe the degree to which an
              organization's cybersecurity risk management practices exhibit
              characteristics defined in the Framework.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {implementationTiers.map((tier, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 h-full">
                  <div className="text-center mb-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${
                        tier.color === "red"
                          ? "from-red-500 to-red-600"
                          : tier.color === "yellow"
                            ? "from-yellow-500 to-yellow-600"
                            : tier.color === "blue"
                              ? "from-blue-500 to-blue-600"
                              : "from-green-500 to-green-600"
                      } rounded-full flex items-center justify-center mx-auto mb-4`}
                    >
                      <span className="text-white font-bold text-lg">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {tier.tier}
                    </h3>
                    <h4 className="text-lg font-semibold text-blue-600 mb-4">
                      {tier.title}
                    </h4>
                  </div>
                  <p className="text-gray-600 text-sm mb-6">
                    {tier.description}
                  </p>
                  <div className="space-y-3">
                    {tier.characteristics.map((char, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{char}</span>
                      </div>
                    ))}
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
              Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach to NIST Framework implementation ensures
              your organization achieves measurable improvements in
              cybersecurity risk management.
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
                          Key Deliverables:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {step.deliverables.map((deliverable, idx) => (
                            <span
                              key={idx}
                              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                            >
                              {deliverable}
                            </span>
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
              Why Choose NIST Framework
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The NIST Cybersecurity Framework provides a flexible, risk-based
              approach that can be customized to your organization's specific
              needs and risk profile.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
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

      {/* Framework Outcomes */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">
                Expected Framework Outcomes
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Enhanced Risk Management
                    </h3>
                    <p className="text-blue-100">
                      Improved understanding and management of cybersecurity
                      risks across the organization.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Better Communication
                    </h3>
                    <p className="text-blue-100">
                      Common language for discussing cybersecurity risk across
                      all organizational levels.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Regulatory Alignment
                    </h3>
                    <p className="text-blue-100">
                      Support for compliance with various industry regulations
                      and standards.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Continuous Improvement
                    </h3>
                    <p className="text-blue-100">
                      Ongoing assessment and improvement of cybersecurity
                      capabilities and maturity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Framework Maturity Progress
                </h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center text-white">
                    <span>Identify Function</span>
                    <span className="font-bold">85%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div
                      className="bg-green-400 h-2 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                  <div className="flex justify-between items-center text-white">
                    <span>Protect Function</span>
                    <span className="font-bold">78%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div
                      className="bg-blue-400 h-2 rounded-full"
                      style={{ width: "78%" }}
                    ></div>
                  </div>
                  <div className="flex justify-between items-center text-white">
                    <span>Detect Function</span>
                    <span className="font-bold">92%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div
                      className="bg-purple-400 h-2 rounded-full"
                      style={{ width: "92%" }}
                    ></div>
                  </div>
                  <div className="flex justify-between items-center text-white">
                    <span>Respond Function</span>
                    <span className="font-bold">70%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div
                      className="bg-yellow-400 h-2 rounded-full"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                  <div className="flex justify-between items-center text-white">
                    <span>Recover Function</span>
                    <span className="font-bold">65%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div
                      className="bg-orange-400 h-2 rounded-full"
                      style={{ width: "65%" }}
                    ></div>
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
            Ready to Implement NIST Framework?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your NIST Cybersecurity Framework journey with our expert
            guidance and proven methodology.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white"
              asChild
            >
              <Link to="/contact">
                Get Started Today
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
