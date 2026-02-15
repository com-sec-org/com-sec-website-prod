import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";
import { Calendar, Clock, User, ArrowLeft, Share2, ArrowRight } from "lucide-react";

export default function Iso27001CertificationGuideRedirect() {
  const meta = {
    title: "ISO 27001 Certification Guide: What It Is & How to Get Certified?",
    description:
      "Get ISO 27001 certified with expert help. Learn what ISO 27001 certification requirements, why it matters for your business, and how to implement it successfully. Get expert guidance from Com-Sec—from gap analysis to full compliance.",
    canonical:
      "https://com-sec.io/blog/iso-27001-certification-guide-what-it-is-why-it-matters-and-how-to-get-compliant",
  };

  const faqs = [
  {
    q: "What’s the difference between ISO 27001 and SOC 2?",
    a: "SOC 2 is more common in North America and driven by customer demand. ISO 27001 is internationally recognized and focuses on a formal ISMS framework.",
  },
  {
    q: "How long is ISO 27001 certification valid?",
    a: "Your certification is valid for three years, with annual surveillance audits required to maintain certification status.",
  },
  {
    q: "What industries benefit most from ISO 27001?",
    a: "Heavily regulated sectors like healthcare, fintech, SaaS, and data processing providers see the most value—especially when working with global clients.",
  },
  {
    q: "Does ISO 27001 apply to small businesses?",
    a: "Yes. ISO 27001 is scalable and suitable for startups and SMBs, especially those handling customer data or working with enterprise clients.",
  },
];

  const hero = {
    backTo: "/blogs",
    categoryPill: "Compliance",
    editionPill: "Certification Guide",
    heading:
      "ISO 27001 Certification Guide: What It Is, Why It Matters, and How to Get Compliant",
    intro:
      "A complete guide to understanding, implementing, and maintaining ISO 27001 certification for your business.",
    year: "2025",
    readTime: "12 min read",
    author: "Com-Sec Team",
    gradientClass: "bg-gradient-to-br from-blue-800 via-indigo-700 to-cyan-700",
    heroTextTint: "text-blue-100",
    heroMetaTint: "text-blue-100",
    backLinkTint: "text-blue-200",
  };

  const bulletList = (
    items: Array<React.ReactNode>,
    density: "normal" | "tight" = "normal"
  ) => (
    <ul
      className={[
        "pl-6 list-disc marker:text-gray-400",
        density === "normal" ? "my-6 space-y-3" : "my-5 space-y-2",
      ].join(" ")}
    >
      {items.map((item, index) => (
        <li key={index} className="text-gray-700 leading-relaxed">
          {item}
        </li>
      ))}
    </ul>
  );

  const inlineLinkClass =
    "text-blue-700 font-medium underline decoration-blue-300 underline-offset-4 hover:decoration-blue-500 hover:text-blue-800 transition-colors";

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={meta.canonical} />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navigation />

        {/* Hero Section */}
        <section
          className={`pt-24 pb-16 ${hero.gradientClass} text-white relative overflow-hidden`}
        >
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-white/10 rounded-full animate-bounce"></div>
            <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-ping"></div>
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Link
              to={hero.backTo}
              className={`inline-flex items-center ${hero.backLinkTint} hover:text-white transition-colors mb-8 group`}
            >
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <span className="bg-white/15 px-4 py-2 rounded-full text-sm font-medium">
                {hero.categoryPill}
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-bold">
                {hero.editionPill}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {hero.heading}
            </h1>

            <p className={`text-xl ${hero.heroTextTint} mb-8 leading-relaxed`}>
              {hero.intro}
            </p>

            <div
              className={`flex flex-wrap items-center gap-6 ${hero.heroMetaTint}`}
            >
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{hero.year}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{hero.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{hero.author}</span>
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
              <section className="mb-12">
                <div className="mt-8 mb-10 flex justify-center">
                  <img
                    src="/images/blog-images/ISO-27001-Certification-Information-Security.png"
                    alt="ISO 27001 Certification - Information Security"
                    className="w-full max-w-md rounded-xl border border-gray-200 shadow-sm"
                  />
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  What Is ISO 27001?
                </h2>

                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  ISO 27001 is the international gold standard for creating and managing an Information Security Management System (ISMS). Developed by the International Organization for Standardization (ISO), it provides a framework for managing risks to your information assets—protecting sensitive customer data, internal systems, and digital operations.
                </p>

                <p className="text-gray-700 leading-relaxed text-lg">
                  Whether you’re a fast-scaling startup or a mid-market enterprise serving regulated clients, ISO 27001 proves to stakeholders that you take cybersecurity seriously.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Why ISO 27001 Is More Than Just a Checkbox?
                </h2>

                <p className="text-gray-700 leading-relaxed text-lg mb-8">
                  Implementing ISO 27001 isn’t just about ticking compliance boxes—it’s about building a resilient, trustworthy, and risk-aware culture. Here’s what it brings to the table:
                </p>

                <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
                  <table className="w-full text-left">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-5 py-3 text-lg font-semibold text-gray-900 text-center">
                          Benefit
                        </th>
                        <th className="px-5 py-3 text-lg font-semibold text-gray-900 text-center">
                          Impact
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-5 py-4 text-gray-800 font-medium">
                          Risk Mitigation
                        </td>
                        <td className="px-5 py-4 text-gray-700">
                          Identifies, assesses, and manages risks before they lead to incidents.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-4 text-gray-800 font-medium">
                          Regulatory Alignment
                        </td>
                        <td className="px-5 py-4 text-gray-700">
                          Helps meet data privacy laws like GDPR, HIPAA, and others.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-4 text-gray-800 font-medium">
                          Customer Trust
                        </td>
                        <td className="px-5 py-4 text-gray-700">
                          Demonstrates credibility to clients, partners, and regulators.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-4 text-gray-800 font-medium">
                          Operational Resilience
                        </td>
                        <td className="px-5 py-4 text-gray-700">
                          Includes incident response and business continuity planning.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-4 text-gray-800 font-medium">
                          Market Differentiation
                        </td>
                        <td className="px-5 py-4 text-gray-700">
                          Stand out in security-conscious industries and RFP processes.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-4 text-gray-800 font-medium">
                          Vendor Security
                        </td>
                        <td className="px-5 py-4 text-gray-700">
                          Ensures your third-party vendors meet acceptable security baselines.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-4 text-gray-800 font-medium">
                          Global Reach
                        </td>
                        <td className="px-5 py-4 text-gray-700">
                          Meet international security expectations for cross-border data processing.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  What Does ISO 27001 Certification Mean?
                </h2>

                <p className="text-gray-700 leading-relaxed text-lg">
                  <Link
                    to="/iso27001"
                    className="font-semibold italic text-indigo-700 hover:text-indigo-800 underline underline-offset-4"
                  >
                  ISO 27001 certification
                  </Link>{" "}
                  means your organization has formally implemented an Information Security Management System (ISMS) aligned with international standards and passed a third-party audit. It confirms that you're actively protecting the confidentiality, integrity, and availability of your information assets.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  The ISO 27001 Certification Process
                </h2>

                <p className="text-gray-700 leading-relaxed text-lg mb-2">
                  Here’s a typical roadmap:
                </p>

                {bulletList(
                  [
                    <>ISMS Implementation: Define your scope, assess risks, implement controls, and document everything.</>,
                    <>External Audit: A two-stage audit—first, documentation review; then, a deep-dive verification.</>,
                    <>Maintenance & Improvement: Ongoing internal audits, policy updates, and management reviews to ensure continued compliance.</>,
                  ],
                  "tight"
                )}

                <p className="text-gray-700 leading-relaxed text-lg mt-6">
                  Timeline: Typically 6–12 months, depending on your organization’s size, complexity, and security maturity.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Core ISO 27001 Requirements: Clauses 4–10 Breakdown
                </h2>

                <p className="text-gray-700 leading-relaxed text-lg mb-2">
                  ISO 27001’s core requirements are laid out in Clauses 4 through 10, which shape the backbone of your ISMS:
                </p>

                <div className="space-y-6 mt-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Clause 4 – Organizational Context
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Define what you’re protecting, why, and for whom. Identify external/internal issues and align the ISMS scope accordingly.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Clause 5 – Leadership
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Senior management must actively support and lead the security effort, establish an information security policy, and clearly define roles and responsibilities.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Clause 6 – Planning
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Identify risks and opportunities. Set measurable and achievable security objectives and plan how you’ll meet them.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Clause 7 – Support
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Provide adequate resources, maintain documentation, ensure staff are trained, and establish communication plans.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Clause 8 – Operations
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Apply controls to mitigate risk. Continuously monitor, assess, and adapt your defenses in day-to-day operations.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Clause 9 – Performance Evaluation
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Use metrics, internal audits, and leadership reviews to evaluate ISMS performance and address weaknesses.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Clause 10 – Improvement
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Non-conformities must be addressed with corrective action. Continuous improvement is essential.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  How Com-Sec Helps You Achieve ISO 27001 Success?
                </h2>

                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  ISO 27001 compliance doesn’t need to be overwhelming. At Com-Sec, we partner with companies in healthcare, fintech, SaaS, and other regulated industries to guide them through every stage of the compliance journey — from initial gap analysis to final auditor handoff — so they can focus on growing securely and confidently.
                </p>

                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  With deep expertise not only in ISO 27001, but also SOC 2, HIPAA, HITRUST, GDPR, CMMC, and PCI-DSS, we provide a flexible, fixed-cost approach with no long-term commitments.
                </p>

                <p className="text-gray-700 leading-relaxed text-lg mb-2">
                  Here’s how we help:
                </p>

                {bulletList(
                  [
                    <>Strategic Roadmapping: We create tailored ISO implementation plans aligned with your business goals, risk profile, and timelines.</>,
                    <>Audit-Ready Documentation: Our team helps develop the policies, procedures, and evidence logs you need for certification.</>,
                    <>Risk Management & Control Design: We map Annex A controls to your actual business risks for practical, effective security.</>,
                    <>Internal Audit & Readiness Support: Through mock audits and hands-on prep, we ensure you’re fully prepared for the real thing.</>,
                    <>Continuous Compliance Monitoring: After certification, we continue supporting you with ongoing advisory to help maintain compliance.</>,
                  ]
                )}

                <p className="text-gray-700 leading-relaxed text-lg mt-6">
                  From kickoff to certification — and beyond — Com-Sec acts as your dedicated ISO 27001 partner, making compliance efficient, manageable, and scalable.
                </p>

                <p className="text-gray-700 leading-relaxed text-lg mt-8">
                  If you want to align ISO 27001 to real controls and evidence, explore our{" "}
                  <Link to="/services/compliance-audit-readiness" className={inlineLinkClass}>
                    Security and compliance solutions
                  </Link>
                  .
                </p>
              </section>

              {/* FAQs */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">FAQs</h2>

                <div className="space-y-4">
                  {faqs.map((item, index) => (
                    <details
                      key={index}
                      className="group bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
                    >
                      <summary className="flex items-center justify-between cursor-pointer select-none px-6 py-5 hover:bg-gray-50 transition-colors">
                        <span className="text-lg font-semibold text-gray-900">
                          {index + 1}) {item.q}
                        </span>

                        {/* Arrow */}
                        <span className="ml-4 flex items-center justify-center h-9 w-9 rounded-full bg-gray-100 text-gray-700 group-hover:bg-indigo-50 group-hover:text-indigo-700 transition-colors">
                          <ArrowRight className="h-4 w-4 rotate-0 group-open:rotate-90 transition-transform duration-200" />
                        </span>
                      </summary>

                      <div className="px-6 pb-6 pt-1">
                        <p className="text-gray-700 leading-relaxed text-lg">{item.a}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* CTA */}
              <section className="mb-12">
                <div
                  className={`rounded-xl p-8 text-white text-center ${hero.gradientClass}`}
                >
                  <h3 className="text-2xl font-bold mb-4">
                    Want to be audit ready in 2025 without last minute chaos
                  </h3>
                  <p className="text-white/90 text-lg mb-6">
                    We help you map requirements to real controls, set up evidence workflows, and stay ready for customer and auditor requests year round.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild className="bg-white text-blue-800 hover:bg-gray-100">
                      <Link to="/contact" target="_blank" rel="noopener noreferrer">
                        Schedule a Consultation
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>

                    <Button
                      variant="outline"
                      asChild
                      className="border-white text-white bg-transparent hover:bg-white hover:text-blue-800"
                    >
                      <Link
                        to="/blogs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-800"
                      >
                        Read More Articles
                      </Link>
                    </Button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
}
