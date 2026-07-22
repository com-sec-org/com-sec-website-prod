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

export default function WhatFoundersGetWrongAboutHiringTheirFirstSecurityPerson() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "What Founders Get Wrong About Hiring Their First Security Person",
      text: "The instinct to hire a security person is right. The execution is usually wrong. Here are the three mistakes founders make, and the case for going fractional first.",
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
        "The GRC platform is a tool. The auditor is what determines whether your controls hold up and your report is worth the paper it's printed on.",
      link: "/blog/your-soc-2-auditor-matters-more-than-your-grc-platform",
      category: "Founder Lessons",
      emoji: "🔍",
    },
    {
      title: "SOC 2 Is Simpler Than You Think",
      excerpt:
        "SOC 2 isn't a certification or a pass/fail test — it's a report. Here's what it actually is.",
      link: "/blog/soc-2-is-simpler-than-you-think",
      category: "Founder Lessons",
      emoji: "📄",
    },
    {
      title: "Implementing an AI Governance Model — Part 2",
      excerpt:
        "Most AI policies are too vague to enforce or too long to read. A practical, four-section structure for a policy your team will actually use.",
      link: "/blog/implementing-an-ai-governance-model-part-2",
      category: "AI Governance",
      emoji: "📋",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          What Founders Get Wrong About Hiring Their First Security Person
        </title>

        <meta
          name="description"
          content="Founders usually get the instinct right and the execution wrong: hiring too late, hiring the wrong profile, and buying tools before defining the process. Here's the case for going fractional first."
        />

        <link
          rel="canonical"
          href="https://com-sec.io/blog/what-founders-get-wrong-about-hiring-their-first-security-person"
        />

        <meta
          property="og:title"
          content="What Founders Get Wrong About Hiring Their First Security Person"
        />

        <meta
          property="og:description"
          content="The instinct to hire a security person is right. The execution is usually wrong. Three common mistakes, and the case for going fractional first."
        />

        <meta
          property="og:image"
          content="https://com-sec.io/images/blog-images/what-founders-get-wrong-about-hiring-their-first-security-person.png"
        />

        <meta
          property="og:url"
          content="https://com-sec.io/blog/what-founders-get-wrong-about-hiring-their-first-security-person"
        />

        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Com-Sec" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comsec" />

        <meta
          name="twitter:title"
          content="What Founders Get Wrong About Hiring Their First Security Person"
        />

        <meta
          name="twitter:description"
          content="The instinct to hire a security person is right. The execution is usually wrong. Three common mistakes, and the case for going fractional first."
        />

        <meta
          name="twitter:image"
          content="https://com-sec.io/images/blog-images/what-founders-get-wrong-about-hiring-their-first-security-person.png"
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
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-balance">
              What Founders Get Wrong About Hiring Their First Security Person
            </h1>

            <p className="text-xl text-sky-100 mb-8 leading-relaxed">
              The instinct to hire a security person is right. The execution is usually wrong.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sky-200">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>July 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>5 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Com-Sec</span>
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
                src="/images/blog-images/what-founders-get-wrong-about-hiring-their-first-security-person.png"
                alt="What Founders Get Wrong About Hiring Their First Security Person"
                className="rounded-xl shadow-md max-w-xl w-full h-auto"
              />
            </div>

            <div className="prose prose-lg max-w-none">

              {/* INTRO */}
              <section className="mb-10">
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    At some point, usually when a customer asks a hard question or an audit is looming, every founder has the same thought: "We need to hire a security person."
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The instinct is right. The execution is usually wrong.
                  </p>
                </div>
              </section>

              {/* MISTAKE 1 */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Mistake 1: Hiring too late
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    By the time most startups hire for security, they've already accumulated years of technical debt, unmanaged access, no logging, default configurations, and a pile of security questionnaires answered by someone who Googled the answers. The first hire spends their first six months cleaning up instead of building.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Start thinking about security earlier than you think you need to. Not necessarily a hire, but at least a structured program.
                  </p>
                </div>
              </section>

              {/* MISTAKE 2 */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Mistake 2: Hiring the wrong profile
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    A common pattern: the founder posts a "Head of Security" job, gets a former enterprise CISO who's managed 50-person teams at a Fortune 500, and hires them to run security at a 40-person startup. It doesn't work. The skill set is different. Startup security is hands-on. You need someone who can write a policy, configure an MDM, answer a questionnaire, prep for an audit, and explain risk to the board, often in the same week.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The best first security hire is a generalist who's comfortable operating across compliance, IT security, and risk management. Not a specialist in one domain.
                  </p>
                </div>
              </section>

              {/* MISTAKE 3 */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Mistake 3: Buying tools before defining the process
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    "We need a SIEM" is usually the wrong first move. So is "we need a vulnerability scanner" or "we need a compliance platform." Tools are useful when they support a defined process. Without the process, they generate noise, cost money, and create a false sense of security.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Define what you're trying to accomplish first: access management, endpoint protection, audit readiness, incident response. Then pick the tools that support those processes. The order matters.
                  </p>
                </div>
              </section>

              {/* FRACTIONAL FIRST */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  The case for fractional first
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    For most companies between 10 and 100 employees, a full-time CISO is premature. You don't have enough work to keep them busy 40 hours a week, and good ones are expensive.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    A fractional or virtual CISO gives you experienced security leadership at a fraction of the cost. They can build the program, handle compliance, answer customer questionnaires, and coordinate with auditors. When you've grown enough that security needs a full-time person, the vCISO has already built the foundation they'll operate on.
                  </p>
                </div>
              </section>

              {/* CLOSING */}
              <section className="mb-10">
                <div className="bg-slate-900 rounded-xl p-8 text-white flex items-start gap-4">
                  <div className="text-3xl mt-1">→</div>
                  <div>
                    <p className="text-lg text-slate-100 leading-relaxed">
                      This isn't a pitch for {" "}
                  <a
                    href="https://com-sec.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-700 font-semibold hover:underline"
                  >
                    Com-Sec
                  </a>  (well, maybe a little). It's genuinely the right model for most startups. I've seen it work dozens of times.
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
                Thinking about your first security hire?
              </h3>
              <p className="text-sky-200 text-lg mb-6 max-w-xl mx-auto leading-relaxed">
                Com-Sec provides fractional CISO support for startups and growth-stage companies — building the program, handling compliance, and answering the hard questionnaires, without the full-time cost.
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
