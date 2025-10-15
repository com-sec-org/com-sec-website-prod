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
  BookOpen,
  CheckCircle,
  Shield,
  FileText,
  Target,
  ArrowRight,
} from "lucide-react";

export default function Iso27001Guide() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-blue-300/10 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-ping"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            to="/blogs"
            className="inline-flex items-center text-blue-200 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <span className="bg-blue-500/20 text-blue-200 px-4 py-2 rounded-full text-sm font-medium">
              Compliance
            </span>
            <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-bold">
              Featured Article
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            ISO 27001 Certification Guide: What It Is, Why It Matters, and How
            to Get Compliant?
          </h1>

          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            A comprehensive guide to ISO 27001 certification, covering
            everything from basic concepts to implementation strategies for
            achieving compliance.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-blue-200">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>July 4, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>12 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Com-Sec Team</span>
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
          <div className="bg-gray-50 rounded-xl p-8 mb-12 border-l-4 border-blue-500">
            <div className="flex items-center mb-4">
              <BookOpen className="h-5 w-5 text-blue-600 mr-2" />
              <h2 className="text-xl font-bold text-gray-900">
                Table of Contents
              </h2>
            </div>
            <ul className="space-y-2">
              <li>
                <a
                  href="#what-is-iso27001"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  What is ISO 27001?
                </a>
              </li>
              <li>
                <a
                  href="#why-matters"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Why ISO 27001 Matters
                </a>
              </li>
              <li>
                <a
                  href="#key-requirements"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Key Requirements
                </a>
              </li>
              <li>
                <a
                  href="#implementation-steps"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Implementation Steps
                </a>
              </li>
              <li>
                <a
                  href="#certification-process"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Certification Process
                </a>
              </li>
              <li>
                <a
                  href="#benefits"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Business Benefits
                </a>
              </li>
              <li>
                <a
                  href="#getting-started"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Getting Started
                </a>
              </li>
            </ul>
          </div>

          {/* Article Sections */}
          <div className="prose prose-lg max-w-none">
            <section id="what-is-iso27001" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="h-8 w-8 text-blue-600 mr-3" />
                What is ISO 27001?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                ISO 27001 is the international standard for Information Security
                Management Systems (ISMS). It provides a systematic approach to
                managing sensitive company information, ensuring it remains
                secure through people, processes, and IT systems.
              </p>
              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  Key Definition
                </h3>
                <p className="text-blue-800">
                  ISO 27001 specifies the requirements for establishing,
                  implementing, maintaining, and continually improving an
                  information security management system within the context of
                  the organization.
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                The standard follows a risk-based approach, allowing
                organizations to identify their information security risks and
                implement appropriate controls to manage them effectively.
              </p>
            </section>

            <section id="why-matters" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Target className="h-8 w-8 text-green-600 mr-3" />
                Why ISO 27001 Matters
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                  <h3 className="text-xl font-semibold text-green-900 mb-4">
                    Business Protection
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-green-800">
                        Protects against data breaches
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-green-800">
                        Reduces cybersecurity risks
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-green-800">
                        Ensures business continuity
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">
                    Competitive Advantage
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-blue-800">
                        Builds customer trust
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-blue-800">
                        Opens new market opportunities
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-blue-800">
                        Demonstrates compliance commitment
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="key-requirements" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <FileText className="h-8 w-8 text-purple-600 mr-3" />
                Key Requirements
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                ISO 27001 is built around several key requirements that
                organizations must meet to achieve certification:
              </p>
              <div className="grid gap-6">
                {[
                  {
                    title: "Context of the Organization",
                    description:
                      "Understanding internal and external issues that can affect information security",
                    color: "bg-red-50 border-red-200 text-red-900",
                  },
                  {
                    title: "Leadership and Commitment",
                    description:
                      "Top management must demonstrate leadership and commitment to the ISMS",
                    color: "bg-blue-50 border-blue-200 text-blue-900",
                  },
                  {
                    title: "Planning and Risk Assessment",
                    description:
                      "Systematic approach to identifying and managing information security risks",
                    color: "bg-green-50 border-green-200 text-green-900",
                  },
                  {
                    title: "Support and Resources",
                    description:
                      "Providing necessary resources, competence, and awareness programs",
                    color: "bg-yellow-50 border-yellow-200 text-yellow-900",
                  },
                  {
                    title: "Operation and Implementation",
                    description:
                      "Implementing and operating the planned information security controls",
                    color: "bg-purple-50 border-purple-200 text-purple-900",
                  },
                  {
                    title: "Performance Evaluation",
                    description:
                      "Monitoring, measuring, and evaluating ISMS performance",
                    color: "bg-indigo-50 border-indigo-200 text-indigo-900",
                  },
                  {
                    title: "Improvement",
                    description:
                      "Continual improvement of the ISMS through corrective actions",
                    color: "bg-teal-50 border-teal-200 text-teal-900",
                  },
                ].map((requirement, index) => (
                  <div
                    key={index}
                    className={`rounded-lg p-6 border ${requirement.color}`}
                  >
                    <h3 className="text-lg font-semibold mb-2">
                      {requirement.title}
                    </h3>
                    <p>{requirement.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="implementation-steps" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Implementation Steps
              </h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                Implementing ISO 27001 requires a systematic approach. Here are
                the key steps to achieve certification:
              </p>
              <div className="space-y-6">
                {[
                  "Conduct initial gap analysis and risk assessment",
                  "Define the scope and boundaries of your ISMS",
                  "Develop information security policies and procedures",
                  "Implement technical and organizational security controls",
                  "Train staff and raise security awareness",
                  "Monitor and measure ISMS performance",
                  "Conduct internal audits and management reviews",
                  "Engage a certification body for external audit",
                  "Address any non-conformities identified",
                  "Achieve ISO 27001 certification",
                ].map((step, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 group-hover:bg-blue-700 transition-colors">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 pt-1 group-hover:text-gray-900 transition-colors">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section id="benefits" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Business Benefits
              </h2>
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white mb-8">
                <h3 className="text-2xl font-bold mb-4">
                  Why Organizations Choose ISO 27001
                </h3>
                <p className="text-blue-100 text-lg">
                  ISO 27001 certification provides measurable business value
                  beyond just security improvements.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Risk Reduction",
                    description:
                      "Systematic identification and mitigation of information security risks",
                    icon: Shield,
                    color: "text-red-600",
                  },
                  {
                    title: "Customer Trust",
                    description:
                      "Demonstrates commitment to protecting customer and stakeholder data",
                    icon: User,
                    color: "text-green-600",
                  },
                  {
                    title: "Operational Excellence",
                    description:
                      "Improved processes and procedures for managing information security",
                    icon: Target,
                    color: "text-blue-600",
                  },
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
                  >
                    <benefit.icon
                      className={`h-12 w-12 ${benefit.color} mx-auto mb-4`}
                    />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="getting-started" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Getting Started with Com-Sec
              </h2>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Ready to begin your ISO 27001 journey? Com-Sec provides
                  comprehensive support throughout the entire certification
                  process, from initial assessment to ongoing compliance
                  management.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-blue-600 hover:bg-blue-700">
                    <Link to="/contact">
                      Schedule Free Consultation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link to="/frameworks/iso27001">
                      Get ISO 27001 Certified
                    </Link>
                  </Button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Related Articles
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Why SOC 2 Matters—Even If You're Not a Big Company?",
                excerpt:
                  "Discover why SOC 2 compliance is crucial for companies of all sizes",
                link: "/blog/why-soc2-matters-small-companies",
                category: "Compliance",
              },
              {
                title: "How to Prepare for a Compliance Audit",
                excerpt:
                  "Essential strategies for successful compliance audits",
                link: "/blog/prepare-compliance-audit-best-practices",
                category: "Audit Readiness",
              },
              {
                title: "What is a vCISO?",
                excerpt:
                  "Understanding the role of virtual Chief Information Security Officers",
                link: "/blog/what-is-vciso-role-cybersecurity",
                category: "Leadership",
              },
            ].map((article, index) => (
              <Link key={index} to={article.link} className="group">
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
                  <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                    {article.category}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{article.excerpt}</p>
                  <div className="mt-4 flex items-center text-blue-600 text-sm font-medium">
                    Read More
                    <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
