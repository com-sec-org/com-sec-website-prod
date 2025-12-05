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
  TrendingUp,
  Building,
  ArrowRight,
  AlertTriangle,
  DollarSign,
} from "lucide-react";

export default function Soc2SmallCompanies() {
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
            to="/blogs"
            className="inline-flex items-center text-green-200 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <span className="bg-green-500/20 text-green-200 px-4 py-2 rounded-full text-sm font-medium">
              Compliance
            </span>
            <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-bold">
              Popular
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Why SOC 2 Matters—Even If You're Not a Big Company?
          </h1>

          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            Discover why SOC 2 compliance is crucial for companies of all sizes
            and how it can accelerate your business growth, build customer
            trust, and open new opportunities.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-green-200">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>June 25, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>8 min read</span>
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
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <section className="mb-12">
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8 rounded-r-lg">
                <div className="flex items-start">
                  <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                      Common Misconception
                    </h3>
                    <p className="text-yellow-700">
                      Many small and medium businesses think SOC 2 compliance is
                      only for large enterprises. This couldn't be further from
                      the truth.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                In today's digital landscape, data security isn't a luxury—it's
                a necessity. Whether you're a 10-person startup handling
                customer data or a growing SaaS company with ambitious plans,
                SOC 2 compliance can be the differentiator that sets you apart
                from competitors and accelerates your growth.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Let's explore why SOC 2 matters for businesses of all sizes and
                how it can transform your organization from a security liability
                into a trusted partner.
              </p>
            </section>

            {/* What is SOC 2 Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="h-8 w-8 text-blue-600 mr-3" />
                What is SOC 2? A Quick Refresher
              </h2>

              <div className="bg-blue-50 rounded-xl p-8 mb-8">
                <p className="text-blue-900 text-lg leading-relaxed">
                  SOC 2 (Service Organization Control 2) is an auditing
                  procedure that ensures your service organization securely
                  manages data to protect the interests of your organization and
                  the privacy of its clients.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The framework is built around five Trust Services Criteria:
                Security, Availability, Processing Integrity, Confidentiality,
                and Privacy. Companies that handle customer data—regardless of
                size—can benefit significantly from SOC 2 compliance.
              </p>
            </section>

            {/* Why Small Companies Need SOC 2 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <Building className="h-8 w-8 text-green-600 mr-3" />
                Why Small Companies Need SOC 2
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                  <TrendingUp className="h-8 w-8 text-green-600 mb-4" />
                  <h3 className="text-xl font-semibold text-green-900 mb-4">
                    Competitive Advantage
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-green-800">
                        Stand out from competitors without SOC 2
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-green-800">
                        Win enterprise clients who require compliance
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-green-800">
                        Accelerate sales cycles with trust
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
                  <DollarSign className="h-8 w-8 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">
                    Revenue Growth
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-blue-800">
                        Access to enterprise market segments
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-blue-800">
                        Higher contract values and premiums
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-blue-800">
                        Faster customer acquisition
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 text-white mb-8">
                <h3 className="text-2xl font-bold mb-4">Real-World Impact</h3>
                <p className="text-purple-100 text-lg leading-relaxed">
                  "After achieving SOC 2 compliance, we saw a 40% increase in
                  enterprise inquiries and closed deals 30% faster. It wasn't
                  just about security—it became our growth engine."
                </p>
                <p className="text-purple-200 mt-4 font-medium">
                  — Startup CEO, 25 employees
                </p>
              </div>
            </section>

            {/* Common Myths */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Debunking Common SOC 2 Myths
              </h2>

              <div className="space-y-6">
                {[
                  {
                    myth: "SOC 2 is too expensive for small companies",
                    reality:
                      "With proper planning and guidance, SOC 2 compliance can be achieved cost-effectively. The ROI often pays for itself through new business opportunities.",
                    color: "bg-red-50 border-red-200",
                  },
                  {
                    myth: "We don't have enough customers to justify SOC 2",
                    reality:
                      "SOC 2 isn't about current size—it's about growth potential. It opens doors to customers you couldn't reach before.",
                    color: "bg-yellow-50 border-yellow-200",
                  },
                  {
                    myth: "SOC 2 is only for SaaS companies",
                    reality:
                      "Any organization that handles customer data can benefit from SOC 2, including consulting firms, healthcare providers, and financial services.",
                    color: "bg-blue-50 border-blue-200",
                  },
                  {
                    myth: "The process takes too long for fast-growing companies",
                    reality:
                      "With expert guidance, companies can achieve SOC 2 readiness in 3-6 months while continuing to grow and scale.",
                    color: "bg-green-50 border-green-200",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`rounded-lg p-6 border ${item.color}`}
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      ❌ Myth: {item.myth}
                    </h3>
                    <p className="text-gray-700">✅ Reality: {item.reality}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Getting Started */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Your SOC 2 Journey Starts Here
              </h2>

              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Ready to transform your business with SOC 2 compliance? The
                journey might seem daunting, but with the right partner, it
                becomes a strategic advantage rather than a burden.
              </p>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Start Your SOC 2 Journey with Com-Sec
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  We've helped dozens of small and medium businesses achieve SOC
                  2 compliance efficiently and cost-effectively. Our proven
                  methodology reduces time-to-compliance while building security
                  into your business DNA.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-blue-600 hover:bg-blue-700">
                    <Link to="/contact">
                      Get Free SOC 2 Assessment
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link to="/soc2-readiness">
                      Learn About Our SOC 2 Services
                    </Link>
                  </Button>
                </div>
              </div>
            </section>

            {/* Key Takeaways */}
            <section className="mb-12">
              <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Key Takeaways
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      SOC 2 compliance is a growth enabler, not just a security
                      requirement
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Small companies can achieve SOC 2 compliance
                      cost-effectively with proper guidance
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      The competitive advantage often outweighs the
                      implementation costs
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Starting early in your growth journey provides maximum
                      benefit
                    </span>
                  </li>
                </ul>
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
                title: "ISO 27001 Certification Guide",
                excerpt:
                  "Complete guide to ISO 27001 certification process and requirements",
                link: "/blog/iso-27001-certification-guide",
                category: "Compliance",
              },
              {
                title: "How to Prepare for a Compliance Audit",
                excerpt:
                  "Essential strategies for successful compliance audits",
                link: "/blog/how-to-prepare-for-a-compliance-audit-best-practices-and-strategies",
                category: "Audit Readiness",
              },
              {
                title:
                  "Com-Sec: Your Trusted Partner in Achieving SOC2 Compliance",
                excerpt:
                  "Learn how Com-Sec helps organizations achieve SOC 2 compliance",
                link: "/blog/comsec-trusted-partner-soc2",
                category: "Company",
              },
            ].map((article, index) => (
              <Link key={index} to={article.link} className="group">
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
                  <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                    {article.category}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2 group-hover:text-green-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{article.excerpt}</p>
                  <div className="mt-4 flex items-center text-green-600 text-sm font-medium">
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
