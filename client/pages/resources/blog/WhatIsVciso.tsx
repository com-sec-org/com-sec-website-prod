import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  CheckCircle,
  Shield,
  Users,
  TrendingUp,
  Building,
  ArrowRight,
  BookOpen,
  Target,
} from "lucide-react";

export default function WhatIsVciso() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-purple-300/10 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-ping"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            to="/blogs"
            className="inline-flex items-center text-purple-200 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <span className="bg-purple-500/20 text-purple-200 px-4 py-2 rounded-full text-sm font-medium">
              Leadership
            </span>
            <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-bold">
              Executive Guide
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            What is a vCISO? Understanding the Role and How It Supports Your
            Cybersecurity Goals
          </h1>

          <p className="text-xl text-purple-100 mb-8 leading-relaxed">
            Learn about virtual Chief Information Security Officers and how they
            can strengthen your cybersecurity posture without the full-time
            executive cost.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-purple-200">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>November 20, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>4 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Com-Sec Leadership</span>
            </div>
            <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors">
              <Share2 className="h-4 w-4" />
              <span>Share</span>
            </button>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-xl p-8 mb-12 border-l-4 border-purple-500">
            <div className="flex items-center mb-4">
              <BookOpen className="h-5 w-5 text-purple-600 mr-2" />
              <h2 className="text-xl font-bold text-gray-900">
                Table of Contents
              </h2>
            </div>
            <ul className="space-y-2">
              <li>
                <a
                  href="#what-is-vciso"
                  className="text-purple-600 hover:text-purple-800 transition-colors"
                >
                  What is a vCISO?
                </a>
              </li>
              <li>
                <a
                  href="#key-responsibilities"
                  className="text-purple-600 hover:text-purple-800 transition-colors"
                >
                  Key Responsibilities
                </a>
              </li>
              <li>
                <a
                  href="#benefits"
                  className="text-purple-600 hover:text-purple-800 transition-colors"
                >
                  Benefits of vCISO
                </a>
              </li>
              <li>
                <a
                  href="#when-to-consider"
                  className="text-purple-600 hover:text-purple-800 transition-colors"
                >
                  When to Consider a vCISO
                </a>
              </li>
              <li>
                <a
                  href="#choosing-vciso"
                  className="text-purple-600 hover:text-purple-800 transition-colors"
                >
                  How to Choose
                </a>
              </li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <section className="mb-12">
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8 rounded-r-lg">
                <div className="flex items-start">
                  <Shield className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">
                      Executive-Level Security Leadership
                    </h3>
                    <p className="text-blue-800">
                      A virtual Chief Information Security Officer (vCISO)
                      provides strategic cybersecurity leadership and expertise
                      to organizations that need executive-level security
                      guidance.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                As cyber threats continue to evolve and regulatory requirements
                become more complex, organizations of all sizes need strategic
                cybersecurity leadership. However, not every company can justify
                the cost of a full-time CISO, which can range from $200,000 to
                $500,000+ annually.
              </p>
            </section>

            {/* What is a vCISO */}
            <section id="what-is-vciso" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Target className="h-8 w-8 text-purple-600 mr-3" />
                What is a vCISO?
              </h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                A virtual Chief Information Security Officer (vCISO) is an
                outsourced cybersecurity executive who provides strategic
                security leadership, governance, and expertise to organizations
                on a part-time or project basis. They offer the same high-level
                strategic thinking and leadership as a full-time CISO, but at a
                fraction of the cost.
              </p>

              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-8 mb-8 border border-purple-200">
                <h3 className="text-xl font-semibold text-purple-900 mb-4">
                  Key Differences: vCISO vs Traditional CISO
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-purple-800 mb-3">
                      Traditional CISO
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-purple-700">
                          Full-time, dedicated employee
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-purple-700">
                          High salary + benefits ($200K-$500K+)
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-purple-700">
                          Single organization focus
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-indigo-800 mb-3">
                      vCISO
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-indigo-700">
                          Part-time, outsourced service
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-indigo-700">
                          Cost-effective ($50K-$150K annually)
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-indigo-700">
                          Cross-industry experience
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Key Responsibilities */}
            <section id="key-responsibilities" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Users className="h-8 w-8 text-blue-600 mr-3" />
                Key vCISO Responsibilities
              </h2>

              <div className="space-y-6">
                {[
                  {
                    title: "Strategic Security Planning",
                    description:
                      "Develop comprehensive cybersecurity strategies aligned with business objectives",
                    details: [
                      "Security roadmap development",
                      "Budget planning and allocation",
                      "Technology stack evaluation",
                      "Risk appetite definition",
                    ],
                  },
                  {
                    title: "Compliance & Governance",
                    description:
                      "Ensure regulatory compliance and establish governance frameworks",
                    details: [
                      "SOC 2, HIPAA, GDPR compliance",
                      "Policy development",
                      "Audit preparation",
                      "Board reporting",
                    ],
                  },
                  {
                    title: "Risk Management",
                    description:
                      "Identify, assess, and mitigate cybersecurity risks across the organization",
                    details: [
                      "Risk assessments",
                      "Threat modeling",
                      "Vendor risk management",
                      "Business continuity planning",
                    ],
                  },
                  {
                    title: "Team Leadership",
                    description:
                      "Guide and mentor internal security teams and stakeholders",
                    details: [
                      "Security team development",
                      "Training programs",
                      "Incident response leadership",
                      "Cross-functional collaboration",
                    ],
                  },
                ].map((responsibility, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-xl p-6 border-l-4 border-blue-500"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {responsibility.title}
                    </h3>
                    <p className="text-gray-700 mb-4">
                      {responsibility.description}
                    </p>
                    <div className="grid md:grid-cols-2 gap-2">
                      {responsibility.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-600">
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Benefits */}
            <section id="benefits" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <TrendingUp className="h-8 w-8 text-green-600 mr-3" />
                Benefits of a vCISO
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-6">
                  <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                    <h3 className="text-lg font-semibold text-green-900 mb-3">
                      💰 Cost Effectiveness
                    </h3>
                    <p className="text-green-800 text-sm">
                      Access executive-level expertise at 30-50% of the cost of
                      a full-time CISO, with no benefits, equity, or overhead
                      costs.
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                    <h3 className="text-lg font-semibold text-blue-900 mb-3">
                      🎯 Immediate Expertise
                    </h3>
                    <p className="text-blue-800 text-sm">
                      Get immediate access to experienced professionals who have
                      worked across multiple industries and threat landscapes.
                    </p>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
                    <h3 className="text-lg font-semibold text-purple-900 mb-3">
                      ⚡ Flexibility
                    </h3>
                    <p className="text-purple-800 text-sm">
                      Scale engagement up or down based on business needs,
                      projects, or seasonal requirements without HR
                      complications.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
                    <h3 className="text-lg font-semibold text-orange-900 mb-3">
                      🔄 Fresh Perspective
                    </h3>
                    <p className="text-orange-800 text-sm">
                      Benefit from cross-industry experience and best practices
                      that internal teams might not have exposure to.
                    </p>
                  </div>

                  <div className="bg-teal-50 rounded-lg p-6 border border-teal-200">
                    <h3 className="text-lg font-semibold text-teal-900 mb-3">
                      📈 Faster Implementation
                    </h3>
                    <p className="text-teal-800 text-sm">
                      Skip the lengthy hiring process and onboarding time -
                      start benefiting from strategic guidance immediately.
                    </p>
                  </div>

                  <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-200">
                    <h3 className="text-lg font-semibold text-indigo-900 mb-3">
                      🛡️ Vendor Neutrality
                    </h3>
                    <p className="text-indigo-800 text-sm">
                      Get unbiased recommendations without vendor relationships
                      or internal politics affecting technology decisions.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* When to Consider */}
            <section id="when-to-consider" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Building className="h-8 w-8 text-orange-600 mr-3" />
                When to Consider a vCISO
              </h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                A vCISO is particularly valuable for organizations in certain
                situations or growth stages:
              </p>

              <div className="space-y-4">
                {[
                  {
                    scenario: "Growing Companies (50-500 employees)",
                    description:
                      "Need strategic security leadership but can't justify full-time CISO costs",
                    indicators: [
                      "Expanding rapidly",
                      "Handling sensitive data",
                      "Facing compliance requirements",
                    ],
                  },
                  {
                    scenario: "Compliance-Driven Organizations",
                    description:
                      "Must achieve certifications like SOC 2, ISO 27001, HIPAA, or GDPR",
                    indicators: [
                      "First-time certification",
                      "Failed previous audits",
                      "Complex compliance requirements",
                    ],
                  },
                  {
                    scenario: "Post-Incident Recovery",
                    description:
                      "Need expert guidance after a security breach or significant finding",
                    indicators: [
                      "Recent security incident",
                      "Audit findings",
                      "Stakeholder concerns",
                    ],
                  },
                  {
                    scenario: "Technology Transformation",
                    description:
                      "Undergoing digital transformation, cloud migration, or major system changes",
                    indicators: [
                      "Cloud adoption",
                      "New technology implementations",
                      "Legacy system modernization",
                    ],
                  },
                ].map((scenario, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {scenario.scenario}
                    </h3>
                    <p className="text-gray-700 mb-4">{scenario.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {scenario.indicators.map((indicator, idx) => (
                        <span
                          key={idx}
                          className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm"
                        >
                          {indicator}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Key Takeaways */}
            <section className="mb-12">
              <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-purple-500">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Key Takeaways
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Cost-Effective Leadership
                      </h3>
                      <p className="text-gray-700">
                        vCISOs provide executive-level security expertise at
                        30-50% of full-time CISO costs
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Strategic Focus
                      </h3>
                      <p className="text-gray-700">
                        They focus on strategy, governance, and compliance
                        rather than day-to-day operations
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Immediate Impact
                      </h3>
                      <p className="text-gray-700">
                        Organizations can start benefiting from expert guidance
                        immediately without lengthy hiring processes
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Perfect for Growth
                      </h3>
                      <p className="text-gray-700">
                        Ideal for growing companies that need security
                        leadership but aren't ready for full-time executive
                        positions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">
              Ready for Strategic Security Leadership?
            </h2>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Our experienced vCISOs can help you build a robust cybersecurity
              program, achieve compliance, and protect your organization. Get
              strategic guidance without the full-time cost.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-purple-50 transform hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link to="/contact">
                  Schedule vCISO Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white bg-transparent hover:bg-white hover:text-purple-600"
                asChild
              >
                <Link to="/services" className="text-white hover:text-purple-600">Learn About Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            Related Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "How to Prepare for a Compliance Audit",
                excerpt:
                  "Essential strategies and best practices for audit preparation.",
                link: "/blog/how-to-prepare-for-a-compliance-audit-best-practices-and-strategies",
                category: "Audit Readiness",
              },
              {
                title: "Why SOC 2 Matters for Small Companies",
                excerpt:
                  "Discover why SOC 2 compliance is crucial for companies of all sizes.",
                link: "/resources/blog/why-soc2-matters-small-companies",
                category: "Compliance",
              },
              {
                title: "Managed Security Compliance Services",
                excerpt:
                  "What are managed security compliance services and why they're essential.",
                link: "/resources/blog/managed-security-compliance-services",
                category: "Managed Services",
              },
            ].map((article, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                    {article.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <Link
                  to={article.link}
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
                >
                  Read More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
