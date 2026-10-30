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
  ArrowRight,
  Check,
} from "lucide-react";

export default function AicpaSoc2Updates() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "AICPA SOC 2 Updates: What's Changing and What It Means for You",
      text: "The AICPA is making changes to SOC 2, and most companies aren't paying attention yet. Here's what's happening and what it means for you.",
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

  const relatedArticles = [
    {
      title: "How to Build a Compliance Roadmap for Your Business",
      excerpt:
        "A compliance roadmap turns an overwhelming list of requirements into a sequenced plan your team can actually execute. Here's how to build one.",
      link: "/blog/how-to-build-a-compliance-roadmap-for-your-business",
      category: "Compliance",
      emoji: "🗺️",
    },
    {
      title: "Your Q4 Compliance Planning Checklist (So Q1 Isn't a Scramble)",
      excerpt:
        "Every year, the same thing happens. Security and compliance get pushed to January, then suddenly everything is urgent. Q4 is the time to set up Q1 for success.",
      link: "/blog/your-q4-compliance-planning-checklist-so-q1-isnt-a-scramble",
      category: "Compliance",
      emoji: "📅",
    },
    {
      title: "10 Steps to Building an Effective Security Program",
      excerpt:
        "Building a security program is a sequence of practical steps that build on each other. Here's the order we use with every client.",
      link: "/blog/10-steps-to-building-an-effective-security-program",
      category: "Security Program",
      emoji: "🧩",
    },
  ];

  return (
    <>
      <Helmet>
        <title>AICPA SOC 2 Updates: What's Changing and What It Means for You</title>

        <meta
          name="description"
          content="The AICPA is rewriting the attestation standards that govern SOC 2 examinations. Here's what's changing, what auditors already expect, and what you should do now."
        />

        <link
          rel="canonical"
          href="https://com-sec.io/blog/aicpa-soc-2-updates-whats-changing-and-what-it-means-for-you"
        />

        <meta
          property="og:title"
          content="AICPA SOC 2 Updates: What's Changing and What It Means for You"
        />

        <meta
          property="og:description"
          content="The AICPA is making changes to SOC 2, and most companies aren't paying attention yet. Here's what's happening and what it means for you."
        />

        <meta
          property="og:image"
          content="https://com-sec.io/images/blog-images/aicpa-soc-2-updates-whats-changing-and-what-it-means-for-you.png"
        />

        <meta
          property="og:url"
          content="https://com-sec.io/blog/aicpa-soc-2-updates-whats-changing-and-what-it-means-for-you"
        />

        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Com-Sec" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:author" content="Farbod Fakhrai" />
        <meta property="article:published_time" content="2026-10-30T00:00:00Z" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comsec" />

        <meta
          name="twitter:title"
          content="AICPA SOC 2 Updates: What's Changing and What It Means for You"
        />

        <meta
          name="twitter:description"
          content="The AICPA is making changes to SOC 2, and most companies aren't paying attention yet. Here's what's happening and what it means for you."
        />

        <meta
          name="twitter:image"
          content="https://com-sec.io/images/blog-images/aicpa-soc-2-updates-whats-changing-and-what-it-means-for-you.png"
        />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navigation />

        {/* HERO */}
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
              AICPA SOC 2 Updates: What's Changing and What It Means for You
            </h1>

            <p className="text-xl text-sky-100 mb-8 leading-relaxed">
              The AICPA is making changes to SOC 2, and most companies aren't paying attention yet. Here's what's happening and what it means for you.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sky-200">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>October 30, 2026</span>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>3 min read</span>
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

        {/* ARTICLE */}
        <article className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* COVER IMAGE */}
            <div className="mb-12 flex justify-center">
              <img
                src="/images/blog-images/aicpa-soc-2-updates-whats-changing-and-what-it-means-for-you.png"
                alt="AICPA SOC 2 Updates: What's Changing and What It Means for You"
                className="rounded-xl shadow-md max-w-xl w-full h-auto"
              />
            </div>

            <div className="prose prose-lg max-w-none">

              {/* INTRO */}
              <section className="mb-10">
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The AICPA is making changes to SOC 2, and most companies aren't paying attention yet.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Here's what's happening and what it means for you.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    The attestation standards are being rewritten. The AICPA Auditing Standards Board has been working on revisions to the core attestation standards (AT-C 105, 205, and 210) that govern how SOC 2 examinations are conducted. The exposure drafts closed for comment in June 2026, and the board is now reviewing the 23 responses. No final standard has been issued yet.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    The proposed effective date is engagements beginning on or after June 15, 2029. But that doesn't mean you can ignore this until 2029.
                  </p>
                </div>
              </section>

              {/* WHAT'S CHANGING */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  What's changing:
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Evidence standards are getting stricter. The revised AT-C 205 would align more closely with AU-C 500's evidence principles. Auditors will scrutinize the relevance and reliability of your evidence more carefully, especially information prepared with management specialists. If your evidence collection is sloppy, expect findings.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Risk assessments are getting deeper. Procedures will be scaled to subject matter complexity, with more attention to fraud risk and noncompliance with laws and regulations. The days of copying last year's risk assessment are numbered.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Type II engagements feel it most. Since Type II relies on records gathered over a period, the tighter evidence and risk requirements hit hardest here. Your controls need to work consistently, not just during audit week.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    What hasn't changed: The Trust Services Criteria themselves. Still the 2017 criteria with the 2022 revised points of focus. No new criteria have been added.
                  </p>
                </div>
              </section>

              {/* WHAT AUDITORS EXPECT */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  What auditors are already expecting, even before the new standards:
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The criteria haven't changed, but how auditors interpret them has shifted significantly:
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Vendor and supply-chain scrutiny is up. 89.6% of SOC 2 reports now reference subservice providers, up from 82% the year before. Expect documented vendor tiering, onboarding processes, and continuous monitoring.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Confidentiality is now included in 64% of reports, up from 34% in 2023. Availability appears in 75%. More companies are adding optional criteria, and more customers are requiring them.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Reports covering 150+ controls jumped from 16% to 23%. Reports are getting bigger, more detailed, and harder to fake.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Cross-framework mapping is becoming standard. SOC 2 controls mapped to{" "}
                    <b>
                      <Link to="/hipaa" className="text-sky-700 font-semibold hover:underline">
                        HIPAA
                      </Link>
                    </b>
                    ,{" "}
                    <b>
                      <Link to="/iso27001" className="text-sky-700 font-semibold hover:underline">
                        ISO 27001
                      </Link>
                    </b>
                    ,{" "}
                    <b>
                      <Link to="/nist" className="text-sky-700 font-semibold hover:underline">
                        NIST
                      </Link>
                    </b>
                    , and{" "}
                    <b>
                      <Link to="/hitrust" className="text-sky-700 font-semibold hover:underline">
                        HITRUST
                      </Link>
                    </b>
                    , including SOC 2+ reports, are increasingly expected.
                  </p>
                </div>
              </section>

              {/* WHAT TO DO NOW */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  What you should do now:
                </h2>

                <div className="space-y-5">
                  <ol className="list-decimal pl-6 space-y-3 text-gray-700 text-lg">
                    <li>
                      Don't wait for 2029. Auditors are already tightening their approach. The new standards will formalize what the best firms are already doing.
                    </li>
                    <li>
                      Clean up your evidence. Automated, continuous evidence collection beats scrambling before an audit. If you're still pulling screenshots into folders, it's time to mature that process.
                    </li>
                    <li>
                      Formalize your risk assessment. Make it recurring, documented, and tied to actual business changes. Not a once-a-year checkbox.
                    </li>
                    <li>
                      Get your vendor program in order. Collect vendor SOC 2 and ISO reports. Tier your vendors by risk. Document your onboarding and offboarding processes.
                    </li>
                    <li>
                      Talk to your auditor. Ask them how they're interpreting the exposure drafts and whether they expect any scope changes for your next examination.
                    </li>
                  </ol>
                </div>
              </section>

              {/* BOTTOM LINE */}
              <section className="mb-10">
                <div className="bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200 rounded-xl p-8">
                  <div className="space-y-4">
                    <p className="text-gray-800 leading-relaxed text-lg">
                      The AICPA doesn't overhaul SOC 2 often. When they do, it's worth paying attention. By the time the standard is final, the market will already expect you to meet it.
                    </p>

                    <p className="text-gray-800 leading-relaxed text-lg">
                      Com-Sec manages{" "}
                      <b>
                        <Link to="/soc2" className="text-sky-700 font-semibold hover:underline">
                          SOC 2 programs
                        </Link>
                      </b>{" "}
                      for startups and growth-stage companies, from readiness through audit and beyond. If you need help getting ahead of these changes, visit com-sec.io.
                    </p>
                  </div>
                </div>
              </section>

            </div>
          </div>
        </article>

        {/* CTA */}
        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-sky-900 via-blue-800 to-slate-900 rounded-xl px-8 py-10 text-white text-center shadow-lg">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Want to get ahead of the SOC 2 changes?
              </h3>

              <p className="text-sky-200 text-lg mb-6 max-w-xl mx-auto leading-relaxed">
                Com-Sec manages SOC 2 programs for startups and growth-stage companies, from readiness through audit and beyond.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/contact"
                  className="bg-white text-sky-900 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
                >
                  Schedule a Consultation →
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

        {/* RELATED ARTICLES */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Related Articles
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedArticles.map((article, index) => (
                <Link key={index} to={article.link} className="group">
                  <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow transform hover:scale-105 h-full flex flex-col">
                    <div className="text-4xl mb-4">{article.emoji}</div>

                    <span className="text-xs font-medium text-sky-700 bg-sky-50 px-2 py-1 rounded-full w-fit">
                      {article.category}
                    </span>

                    <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2 group-hover:text-sky-700 transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-gray-600 text-sm flex-grow">
                      {article.excerpt}
                    </p>

                    <div className="mt-4 flex items-center text-sky-700 text-sm font-medium">
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
    </>
  );
}
