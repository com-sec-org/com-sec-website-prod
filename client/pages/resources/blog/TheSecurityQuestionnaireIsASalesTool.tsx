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

export default function TheSecurityQuestionnaireIsASalesTool() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "The Security Questionnaire Is a Sales Tool, Not a Compliance Exercise",
      text: "Post 2: Things I've Learned Running a Cybersecurity Firm. A well-answered security questionnaire builds trust, differentiates you from competitors, and shortens the sales cycle.",
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
      title: "Your SOC 2 Auditor Matters More Than Your GRC Platform",
      excerpt:
        "Post 1: Things I've Learned Running a Cybersecurity Firm. The GRC platform is a tool — the auditor is what makes your report worth something.",
      link: "/blog/your-soc-2-auditor-matters-more-than-your-grc-platform",
      category: "Founder Lessons",
      emoji: "🧾",
    },
    {
      title: "How to Prepare for SOC 2 in 2026",
      excerpt:
        "A practical walkthrough of what it actually takes to get audit-ready.",
      link: "/blog/how-to-prepare-for-soc2-2026",
      category: "Compliance",
      emoji: "✅",
    },
    {
      title: "SOC 2 Audit Checklist & Report Templates (Complete Guide for 2026)",
      excerpt:
        "Checklists and templates to keep your SOC 2 audit organized end to end.",
      link: "/blog/soc2-audit-checklist-2026",
      category: "Compliance",
      emoji: "📋",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          The Security Questionnaire Is a Sales Tool, Not a Compliance Exercise
        </title>

        <meta
          name="description"
          content="Post 2: Things I've Learned Running a Cybersecurity Firm. What separates a security questionnaire that closes deals from one that stalls them — and how to build a response library that scales."
        />

        <link
          rel="canonical"
          href="https://com-sec.io/blog/the-security-questionnaire-is-a-sales-tool-not-a-compliance-exercise"
        />

        <meta
          property="og:title"
          content="The Security Questionnaire Is a Sales Tool, Not a Compliance Exercise"
        />

        <meta
          property="og:description"
          content="A well-answered security questionnaire builds trust, differentiates you from competitors, and shortens the sales cycle by removing security as a blocker."
        />

        <meta
          property="og:image"
          content="https://com-sec.io/images/blog-images/the-security-questionnaire-is-a-sales-tool-not-a-compliance-exercise.png"
        />

        <meta
          property="og:url"
          content="https://com-sec.io/blog/the-security-questionnaire-is-a-sales-tool-not-a-compliance-exercise"
        />

        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Com-Sec" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:author" content="Farbod Fakhrai" />
        <meta property="article:published_time" content="2026-07-13T00:00:00Z" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comsec" />

        <meta
          name="twitter:title"
          content="The Security Questionnaire Is a Sales Tool, Not a Compliance Exercise"
        />

        <meta
          name="twitter:description"
          content="A well-answered security questionnaire builds trust, differentiates you from competitors, and shortens the sales cycle by removing security as a blocker."
        />

        <meta
          name="twitter:image"
          content="https://com-sec.io/images/blog-images/the-security-questionnaire-is-a-sales-tool-not-a-compliance-exercise.png"
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
                Founder Lessons
              </span>
              <span className="bg-white/15 text-white px-4 py-2 rounded-full text-sm font-bold border border-white/25">
                Post 2 of 5
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-balance">
              The Security Questionnaire Is a Sales Tool, Not a Compliance Exercise
            </h1>

            <p className="text-xl text-sky-100 mb-8 leading-relaxed">
              Things I've Learned Running a Cybersecurity Firm — Post 2
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sky-200">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>July 13, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>4 min read</span>
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
                src="/images/blog-images/the-security-questionnaire-is-a-sales-tool-not-a-compliance-exercise.png"
                alt="The Security Questionnaire Is a Sales Tool, Not a Compliance Exercise"
                className="rounded-xl shadow-md max-w-xl w-full h-auto"
              />
            </div>

            <div className="prose prose-lg max-w-none">

              {/* INTRO */}
              <section className="mb-10">
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Most companies treat security questionnaires as a nuisance. Something the sales team forwards to whoever knows the most about security, with a note that says "customer needs this by Friday."
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    That's a missed opportunity. A well-answered security questionnaire doesn't just check a box. It builds trust with the customer, differentiates you from competitors who give vague answers, and shortens the sales cycle by removing security as a blocker.
                  </p>
                </div>
              </section>

              {/* BAD ANSWERS */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  What bad answers look like
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>"Yes."</b> No context, no explanation, no evidence.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>"We follow industry best practices."</b> This means nothing. Every company says this.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>"Please refer to our SOC 2 report."</b> The customer asked a specific question. They want a specific answer, not a homework assignment.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>"N/A."</b> Used too broadly. If a question doesn't apply, explain why in one sentence.
                  </p>
                </div>
              </section>

              {/* GOOD ANSWERS */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  What good answers look like
                </h2>
                <div className="space-y-5">
                  <div className="bg-sky-50 border-l-4 border-sky-500 rounded-r-lg p-4">
                    <p className="text-gray-800 text-lg">
                      "Yes. We enforce MFA across all corporate applications through Okta. SSO is required for all production systems. MFA enrollment is verified during onboarding and audited quarterly."
                    </p>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    That answer takes 30 seconds to write and tells the customer exactly what they need to know. It's specific, defensible, and shows you actually do what you claim.
                  </p>
                </div>
              </section>

              {/* RULES */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  The rules I follow
                </h2>
                <div className="space-y-4">
                  <div className="bg-sky-50 border-l-4 border-sky-500 rounded-r-lg p-4">
                    <p className="text-gray-800 text-lg">
                      <b>Be accurate.</b> Don't say "yes" unless the control is truly implemented. "Yes, with explanation" or "Partially implemented" are better than a false yes that unravels during due diligence.
                    </p>
                  </div>
                  <div className="bg-sky-50 border-l-4 border-sky-500 rounded-r-lg p-4">
                    <p className="text-gray-800 text-lg">
                      <b>Be specific.</b> Name the tools, describe the process, mention the frequency. Generic answers signal that you either don't know or don't want to say.
                    </p>
                  </div>
                  <div className="bg-sky-50 border-l-4 border-sky-500 rounded-r-lg p-4">
                    <p className="text-gray-800 text-lg">
                      <b>Don't overstate.</b> Avoid "fully compliant," "guaranteed secure," or "zero risk." These phrases are red flags for experienced security reviewers.
                    </p>
                  </div>
                  <div className="bg-sky-50 border-l-4 border-sky-500 rounded-r-lg p-4">
                    <p className="text-gray-800 text-lg">
                      <b>Be concise.</b> Nobody wants to read a paragraph when a sentence will do. But a one-word answer isn't concise, it's lazy.
                    </p>
                  </div>
                  <div className="bg-sky-50 border-l-4 border-sky-500 rounded-r-lg p-4">
                    <p className="text-gray-800 text-lg">
                      <b>Flag what's planned.</b> "Not currently implemented. Planned for Q3 as part of our SOC 2 readiness program." That's an honest answer that shows maturity and a roadmap.
                    </p>
                  </div>
                </div>
              </section>

              {/* STRATEGIC ANGLE */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  The strategic angle
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    If your company responds to a lot of questionnaires, build a response library. Standardize your answers around your actual controls, map them to your SOC 2 or ISO 27001 evidence, and update the library after each audit cycle. This turns a 3-day exercise into a 3-hour exercise and improves consistency.
                  </p>
                </div>
              </section>

              {/* BOTTOM LINE */}
              <section className="mb-10">
                <div className="bg-slate-900 rounded-xl p-8 text-white flex items-start gap-4">
                  <div className="text-3xl mt-1">→</div>
                  <div>
                    <p className="text-sm font-semibold text-sky-300 uppercase tracking-wide mb-2">
                      The bottom line
                    </p>
                    <p className="text-lg text-slate-100 leading-relaxed">
                      The companies that treat questionnaires as a sales asset close deals faster than the ones that treat them as a compliance burden.
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
                Drowning in security questionnaires?
              </h3>
              <p className="text-sky-200 text-lg mb-6 max-w-xl mx-auto leading-relaxed">
                Com-Sec helps growth-stage companies build a response library, map answers to real evidence, and turn security reviews into a sales advantage instead of a bottleneck.
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
