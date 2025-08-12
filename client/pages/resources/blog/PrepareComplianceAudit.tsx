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
  FileText,
  AlertTriangle,
  Target,
  ArrowRight,
  BookOpen,
} from "lucide-react";

export default function PrepareComplianceAudit() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-green-300/10 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-ping"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            to="/resources/blogs"
            className="inline-flex items-center text-green-200 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <span className="bg-green-500/20 text-green-200 px-4 py-2 rounded-full text-sm font-medium">
              Audit Readiness
            </span>
            <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-bold">
              Essential Guide
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            How to Prepare for a Compliance Audit: Best Practices and Strategies
          </h1>

          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            Essential strategies and best practices to ensure your organization
            is ready for any compliance audit with confidence and success.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-green-200">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>June 8, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>8 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Com-Sec Compliance Team</span>
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
          <div className="bg-gray-50 rounded-xl p-8 mb-12 border-l-4 border-green-500">
            <div className="flex items-center mb-4">
              <BookOpen className="h-5 w-5 text-green-600 mr-2" />
              <h2 className="text-xl font-bold text-gray-900">
                Table of Contents
              </h2>
            </div>
            <ul className="space-y-2">
              <li>
                <a
                  href="#pre-audit-planning"
                  className="text-green-600 hover:text-green-800 transition-colors"
                >
                  Pre-Audit Planning
                </a>
              </li>
              <li>
                <a
                  href="#documentation-preparation"
                  className="text-green-600 hover:text-green-800 transition-colors"
                >
                  Documentation Preparation
                </a>
              </li>
              <li>
                <a
                  href="#team-coordination"
                  className="text-green-600 hover:text-green-800 transition-colors"
                >
                  Team Coordination
                </a>
              </li>
              <li>
                <a
                  href="#technical-preparation"
                  className="text-green-600 hover:text-green-800 transition-colors"
                >
                  Technical Preparation
                </a>
              </li>
              <li>
                <a
                  href="#common-pitfalls"
                  className="text-green-600 hover:text-green-800 transition-colors"
                >
                  Common Pitfalls
                </a>
              </li>
              <li>
                <a
                  href="#during-audit"
                  className="text-green-600 hover:text-green-800 transition-colors"
                >
                  During the Audit
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
                      Audit Success Starts with Preparation
                    </h3>
                    <p className="text-blue-800">
                      Proper preparation can mean the difference between a
                      smooth audit process and a stressful, costly experience.
                      This guide provides actionable strategies used by
                      successful organizations.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Compliance audits are a critical part of maintaining
                certifications like SOC 2, ISO 27001, HIPAA, and others. Whether
                you're preparing for your first audit or your tenth, having a
                systematic approach ensures nothing falls through the cracks.
              </p>
            </section>

            {/* Pre-Audit Planning */}
            <section id="pre-audit-planning" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Target className="h-8 w-8 text-green-600 mr-3" />
                Pre-Audit Planning (8-12 Weeks Before)
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                  <h3 className="text-xl font-semibold text-green-900 mb-4">
                    Timeline Planning
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-green-800">
                        Schedule audit 3-4 months in advance
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-green-800">
                        Create detailed preparation timeline
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-green-800">
                        Assign roles and responsibilities
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">
                    Scope Definition
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-blue-800">
                        Define audit scope and boundaries
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-blue-800">
                        Identify systems and processes
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-blue-800">
                        Update scope documentation
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Documentation Preparation */}
            <section id="documentation-preparation" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <FileText className="h-8 w-8 text-blue-600 mr-3" />
                Documentation Preparation
              </h2>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8 rounded-r-lg">
                <div className="flex items-start">
                  <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                      Documentation is Everything
                    </h3>
                    <p className="text-yellow-700">
                      Auditors need evidence that controls are not just
                      implemented, but operating effectively. Missing
                      documentation is one of the top reasons for audit
                      findings.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Essential Documentation Checklist
              </h3>
              <div className="space-y-4 mb-8">
                {[
                  {
                    category: "Policies & Procedures",
                    items: [
                      "Information Security Policy",
                      "Access Control Procedures",
                      "Incident Response Plan",
                      "Change Management Process",
                    ],
                  },
                  {
                    category: "Risk Management",
                    items: [
                      "Risk Assessment Reports",
                      "Risk Treatment Plans",
                      "Business Impact Analysis",
                      "Third-party Risk Assessments",
                    ],
                  },
                  {
                    category: "Monitoring & Testing",
                    items: [
                      "Vulnerability Scan Reports",
                      "Penetration Test Results",
                      "Security Monitoring Logs",
                      "Control Testing Evidence",
                    ],
                  },
                  {
                    category: "Training & Awareness",
                    items: [
                      "Security Training Records",
                      "Awareness Campaign Documentation",
                      "Phishing Test Results",
                      "Training Completion Reports",
                    ],
                  },
                ].map((section, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      {section.category}
                    </h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {section.items.map((item, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Team Coordination */}
            <section id="team-coordination" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Team Coordination and Communication
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Successful audits require coordinated effort across multiple
                teams. Establish clear communication channels and ensure
                everyone understands their role in the audit process.
              </p>

              <div className="bg-gray-50 rounded-xl p-8 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Key Team Roles
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Shield className="h-8 w-8 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Audit Coordinator
                    </h4>
                    <p className="text-sm text-gray-600">
                      Primary point of contact with auditors
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <User className="h-8 w-8 text-green-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Process Owners
                    </h4>
                    <p className="text-sm text-gray-600">
                      Subject matter experts for each control area
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <FileText className="h-8 w-8 text-purple-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Documentation Lead
                    </h4>
                    <p className="text-sm text-gray-600">
                      Ensures all evidence is organized and accessible
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Common Pitfalls */}
            <section id="common-pitfalls" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Common Pitfalls to Avoid
              </h2>

              <div className="space-y-6">
                {[
                  {
                    title: "Last-Minute Preparation",
                    description:
                      "Starting preparation too late leads to incomplete documentation and rushed responses.",
                    solution:
                      "Begin preparation at least 8-12 weeks before the audit date.",
                  },
                  {
                    title: "Inconsistent Documentation",
                    description:
                      "Having policies that don't match actual implemented procedures.",
                    solution:
                      "Regularly review and update documentation to reflect current practices.",
                  },
                  {
                    title: "Poor Evidence Organization",
                    description:
                      "Spending valuable audit time searching for requested documentation.",
                    solution:
                      "Create a centralized, well-organized evidence repository with clear naming conventions.",
                  },
                  {
                    title: "Inadequate Testing Evidence",
                    description:
                      "Not having sufficient evidence that controls are operating effectively.",
                    solution:
                      "Implement regular control testing and maintain detailed testing records.",
                  },
                ].map((pitfall, index) => (
                  <div
                    key={index}
                    className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg"
                  >
                    <h3 className="text-lg font-semibold text-red-900 mb-2">
                      {pitfall.title}
                    </h3>
                    <p className="text-red-800 mb-3">{pitfall.description}</p>
                    <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                      <p className="text-green-800">
                        <strong>Solution:</strong> {pitfall.solution}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Key Takeaways */}
            <section className="mb-12">
              <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-green-500">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Key Takeaways
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      ✅ Do These
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Start preparation early (8-12 weeks)
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Organize documentation systematically
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Conduct regular control testing
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Train your team on audit process
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      ❌ Avoid These
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <AlertTriangle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Last-minute documentation gathering
                        </span>
                      </li>
                      <li className="flex items-start">
                        <AlertTriangle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Inconsistent policies and procedures
                        </span>
                      </li>
                      <li className="flex items-start">
                        <AlertTriangle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Poor evidence organization
                        </span>
                      </li>
                      <li className="flex items-start">
                        <AlertTriangle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Unprepared team members
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">
              Need Help with Your Compliance Audit?
            </h2>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Our experienced compliance team can help you prepare for your
              audit with confidence. From documentation review to mock audits,
              we ensure you're ready.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-green-600 hover:bg-green-50 transform hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link to="/contact">
                  Get Audit Preparation Help
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white bg-transparent hover:bg-white hover:text-green-600"
                asChild
              >
                <Link to="/services">View Our Services</Link>
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
                title: "ISO 27001 Certification Guide",
                excerpt:
                  "Complete guide to ISO 27001 certification process and requirements.",
                link: "/resources/blog/iso-27001-certification-guide",
                category: "Compliance",
              },
              {
                title: "Why SOC 2 Matters for Small Companies",
                excerpt:
                  "Discover why SOC 2 compliance is crucial for companies of all sizes.",
                link: "/resources/blog/why-soc2-matters-small-companies",
                category: "Compliance",
              },
              {
                title: "What is a vCISO?",
                excerpt:
                  "Understanding the role of virtual Chief Information Security Officers.",
                link: "/resources/blog/what-is-vciso-role-cybersecurity",
                category: "Leadership",
              },
            ].map((article, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {article.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <Link
                  to={article.link}
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
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
