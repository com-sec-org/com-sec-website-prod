import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import { useState } from "react";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  Check,
} from "lucide-react";

export default function HitrustCertificationE1I1R2Explained() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "HITRUST Certification: e1, i1, and r2 Explained",
      text: "HITRUST is the gold standard for healthcare security certification. Here's the plain English breakdown of the three tiers and which one you actually need.",
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // user cancelled
      }
    } else {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const tiers = [
    {
      title: "HITRUST e1 (Essentials, 1-year)",
      body: "The entry point. 44 control requirements covering the most fundamental security practices, designed for smaller organizations or those just starting their security journey. Assessment type: self-assessment with a HITRUST-approved external assessor validating a subset of controls. Cost: typically $15,000 to $30,000 including assessor fees. Timeline: 2 to 4 months from readiness to certification. Appropriate when a customer requires \u201cHITRUST certification\u201d without specifying the level, and your organization is small (under 50 employees) with a straightforward environment.",
    },
    {
      title: "HITRUST i1 (Implemented, 1-year)",
      body: "The middle tier. 182 control requirements covering a broader set of security, privacy, and risk management practices \u2014 controls that are not just defined but implemented and operating. Assessment type: validated assessment with real testing, not just document review. Cost: typically $30,000 to $60,000 including assessor fees. Timeline: 4 to 6 months from readiness to certification. This is the sweet spot for most health tech companies selling into mid-market health systems and payers.",
    },
    {
      title: "HITRUST r2 (Risk-based, 2-year)",
      body: "The full certification. 350+ control requirements tailored to your specific risk profile, with extensive external assessor testing including evaluation of control maturity (policy, process, implemented, measured, managed). Cost: typically $50,000 to $150,000+ including assessor fees, depending on scope. Timeline: 6 to 12 months from readiness to certification. Required when selling into large health systems, pharma companies, and major payers that specify \u201cHITRUST r2\u201d in their vendor requirements. The 2-year certification period (with an interim assessment at the 1-year mark) means less frequent full assessments than the annual e1 and i1.",
    },
  ];

  const progression = [
    {
      title: "Year 1",
      body: "SOC 2 Type II. Build the security program, get the first report, start closing enterprise deals.",
    },
    {
      title: "Year 2",
      body: "SOC 2 Type II renewal plus HITRUST e1 or i1. Layer HITRUST on top of the existing program. The SOC 2 foundation covers 60 to 70% of HITRUST requirements.",
    },
    {
      title: "Year 3+",
      body: "SOC 2 Type II renewal plus HITRUST r2. Upgrade to r2 when customer requirements or deal size justifies the investment.",
    },
  ];

  const mistakes = [
    {
      title: "Starting with r2 when i1 would suffice",
      body: "Ask the customer what they need. Don't over-invest.",
    },
    {
      title: "Underestimating the timeline",
      body: "HITRUST assessments take longer than SOC 2. The HITRUST organization itself adds processing time for quality assurance review after the assessor submits the results. Build in buffer.",
    },
    {
      title: "Choosing the wrong assessor",
      body: "HITRUST requires an authorized external assessor. Not all assessors have the same depth of experience. Ask how many HITRUST assessments they've completed, specifically at your target certification level.",
    },
    {
      title: "Not leveraging existing work",
      body: "If you have SOC 2, ISO 27001, or a mature HIPAA program, the crosswalk to HITRUST is well-documented. Don't rebuild controls that already exist. Map them.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>HITRUST Certification: e1, i1, and r2 Explained</title>

        <meta
          name="description"
          content="HITRUST is the gold standard for healthcare security certification, but it's confusing to navigate. The plain English breakdown of e1, i1, and r2, and how to know which one you need."
        />

        <link
          rel="canonical"
          href="https://com-sec.io/blog/hitrust-certification-e1-i1-r2-explained"
        />

        <meta
          property="og:title"
          content="HITRUST Certification: e1, i1, and r2 Explained"
        />

        <meta
          property="og:description"
          content="HITRUST is the gold standard for healthcare security certification, but it's confusing to navigate. The plain English breakdown of e1, i1, and r2, and how to know which one you need."
        />

        <meta
          property="og:image"
          content="https://com-sec.io/images/blog-images/hitrust-certification-e1-i1-r2-explained.png"
        />

        <meta
          property="og:url"
          content="https://com-sec.io/blog/hitrust-certification-e1-i1-r2-explained"
        />

        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Com-Sec" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:author" content="Farbod Fakhrai" />
        <meta property="article:published_time" content="2026-09-10T00:00:00Z" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comsec" />

        <meta
          name="twitter:title"
          content="HITRUST Certification: e1, i1, and r2 Explained"
        />

        <meta
          name="twitter:description"
          content="HITRUST is the gold standard for healthcare security certification, but it's confusing to navigate. The plain English breakdown of e1, i1, and r2, and how to know which one you need."
        />

        <meta
          name="twitter:image"
          content="https://com-sec.io/images/blog-images/hitrust-certification-e1-i1-r2-explained.png"
        />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navigation />

        <section className="pt-24 pb-16 bg-gradient-to-br from-sky-900 via-blue-800 to-slate-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to="/blogs"
              className="inline-flex items-center text-sky-200 hover:text-white transition-colors mb-8 group"
            >
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>

            <div className="flex items-center gap-4 mb-6 flex-wrap">
              <span className="bg-sky-500/20 text-sky-100 px-4 py-2 rounded-full text-sm font-medium">
                Compliance
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-balance">
              HITRUST Certification: e1, i1, and r2 Explained
            </h1>

            <p className="text-xl text-sky-100 mb-8 leading-relaxed">
              The gold standard for healthcare security certification has
              three tiers, and most companies don't know which one they
              actually need. Here's the plain English breakdown.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sky-200">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>September 10, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>8 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Farbod Fakhrai</span>
              </div>
              <button
                onClick={handleShare}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors"
              >
                {copied ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Share2 className="h-4 w-4" />
                )}
                <span>{copied ? "Copied!" : "Share"}</span>
              </button>
            </div>
          </div>
        </section>

        <article className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 flex justify-center">
              <img
                src="/images/blog-images/hitrust-certification-e1-i1-r2-explained.png"
                alt="HITRUST Certification: e1, i1, and r2 Explained"
                className="rounded-xl shadow-md max-w-xl w-full h-auto"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <section className="mb-10">
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    HITRUST is the gold standard for healthcare security
                    certification. It's also one of the most confusing
                    frameworks to navigate, because there are three
                    different certification levels and most companies
                    don't know which one they need or what the
                    differences actually mean.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Here's the plain English breakdown.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  Why HITRUST exists
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    HIPAA tells you what to do but doesn't prescribe
                    exactly how. SOC 2 is broad and not
                    healthcare-specific. HITRUST was built to solve both
                    problems: a certifiable framework that maps to
                    HIPAA, SOC 2, ISO 27001, NIST, and other standards,
                    specifically designed for organizations that handle
                    healthcare data.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Large health systems (Kaiser, UnitedHealth, Anthem,
                    Humana) and major payers increasingly require or
                    strongly prefer HITRUST certification from their
                    vendors. If you sell into enterprise healthcare,
                    HITRUST will come up. The question is which level.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  The three tiers
                </h2>
                <div className="space-y-4">
                  {tiers.map((item, index) => (
                    <div
                      key={index}
                      className="bg-sky-50 border-l-4 border-sky-500 rounded-r-lg p-4"
                    >
                      <p className="text-gray-800 text-lg">
                        <b>{item.title}.</b> {item.body}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  Which one do you need?
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Start with what your customers are asking for.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    If nobody has specified a level and you're early in
                    your healthcare sales motion, start with e1. It gets
                    you certified, builds the muscle, and gives you
                    something to show procurement teams. You can upgrade
                    to i1 or r2 later.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    If a specific customer requires i1 or r2, that
                    determines your path. Ask them directly: "What level
                    of HITRUST certification do you require?" Don't
                    assume r2 when i1 would satisfy the requirement. The
                    cost difference is significant.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    If you already have SOC 2 and you're adding HITRUST,
                    the overlap is substantial. Many of your SOC 2
                    controls map directly to HITRUST requirements. Your
                    GRC platform (Drata, Vanta) likely supports HITRUST
                    and can show you the gap between what you have and
                    what you need. The incremental effort is real but
                    it's not starting from zero.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  The path from SOC 2 to HITRUST
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Most of our health tech clients follow this
                    progression:
                  </p>
                  <div className="space-y-4">
                    {progression.map((item, index) => (
                      <div
                        key={index}
                        className="bg-sky-50 border-l-4 border-sky-500 rounded-r-lg p-4"
                      >
                        <p className="text-gray-800 text-lg">
                          <b>{item.title}.</b> {item.body}
                        </p>
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg pt-2">
                    This approach spreads the cost and effort over time
                    and avoids the shock of going from zero to HITRUST
                    r2 in one year.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  Common mistakes
                </h2>
                <div className="space-y-4">
                  {mistakes.map((item, index) => (
                    <div
                      key={index}
                      className="bg-sky-50 border-l-4 border-sky-500 rounded-r-lg p-4"
                    >
                      <p className="text-gray-800 text-lg">
                        <b>{item.title}.</b> {item.body}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  What we do
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    We manage HITRUST readiness and certification at all
                    three tiers: e1, i1, and r2. We assess your current
                    program, identify the gaps against your target
                    certification level, build the remediation roadmap,
                    prepare the evidence, and coordinate with your
                    assessor through the full certification process.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    For companies with existing SOC 2 programs, we map
                    the crosswalk and focus remediation only on the
                    delta. For companies starting from scratch, we build
                    the security program and the HITRUST readiness
                    simultaneously so you're not paying twice.
                  </p>
                </div>
              </section>

              <section className="mb-12 border-t border-gray-200 pt-8">
                <p className="text-gray-600 text-base italic">
                  Farbod Fakhrai is the founder of{" "}
                  <a
                    href="https://com-sec.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-700 font-semibold hover:underline"
                  >
                    Com-Sec
                  </a>
                  , a cybersecurity and compliance consulting firm supporting
                  startups and growth-stage companies, with deep expertise
                  in healthcare and health tech.
                </p>
              </section>
            </div>
          </div>
        </article>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-sky-900 via-blue-800 to-slate-900 rounded-xl px-8 py-10 text-white text-center shadow-lg">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Not sure which HITRUST tier is right for you?
              </h3>
              <p className="text-sky-200 text-lg mb-6 max-w-xl mx-auto leading-relaxed">
                Com-Sec manages HITRUST readiness and certification end to
                end \u2014 gap assessment, remediation, evidence, and assessor
                coordination \u2014 at whichever tier your customers require.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/contact"
                  className="bg-white text-sky-900 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
                >
                  Schedule a Consultation \u2192
                </Link>
                <Link
                  to="/services"
                  className="border border-white/40 text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-sky-900 transition"
                >
                  Explore Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
