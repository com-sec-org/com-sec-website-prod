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

export default function SecurityPageSoc2() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "Your Security Page Doesn't Close Deals. A SOC 2 Report Does.",
      text: "A security page tells prospects you take security seriously. It doesn't answer the first question their security team asks. Here's how that gap stretches sales cycles.",
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
      title: "Why Security Awareness Training Matters for Every Employee",
      excerpt:
        "Security awareness training is not going to stop breaches. But it still matters. Here's why, and how to do it in a way that actually provides value.",
      link: "/blog/why-security-awareness-training-matters-for-every-employee",
      category: "Security Awareness",
      emoji: "🎯",
    },
    {
      title: "What Your Cyber Insurance Carrier Is About to Ask You (And Why You Should Care)",
      excerpt:
        "Cyber insurance used to be simple. That era is over. Here's what carriers are actually asking now, and what it means for your premium.",
      link: "/blog/what-your-cyber-insurance-carrier-is-about-to-ask-you-and-why-you-should-care",
      category: "Risk Management",
      emoji: "🛡️",
    },
    {
      title: "Zero Trust for Startups: What It Actually Means (Without the Enterprise BS)",
      excerpt:
        "Zero trust has become one of those terms that means everything and nothing. It doesn't require a seven-figure budget and a team of 20.",
      link: "/blog/zero-trust-for-startups-what-it-actually-means-without-the-enterprise-bs",
      category: "Security Architecture",
      emoji: "🔐",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Your Security Page Doesn't Close Deals. A SOC 2 Report Does.</title>

        <meta
          name="description"
          content="Enterprise buyers don't read your security page. They ask for a SOC 2 report. Here's how that gap slows deals and what startups should do this week."
        />

        <link
          rel="canonical"
          href="https://com-sec.io/blog/your-security-page-doesnt-close-deals-a-soc-2-report-does"
        />

        <meta
          property="og:title"
          content="Your Security Page Doesn't Close Deals. A SOC 2 Report Does."
        />

        <meta
          property="og:description"
          content="A security page tells prospects you take security seriously. It doesn't answer the first question their security team asks. Here's how that gap stretches sales cycles."
        />

        <meta
          property="og:image"
          content="https://com-sec.io/images/blog-images/your-security-page-doesnt-close-deals-a-soc-2-report-does.png"
        />

        <meta
          property="og:url"
          content="https://com-sec.io/blog/your-security-page-doesnt-close-deals-a-soc-2-report-does"
        />

        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Com-Sec" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:author" content="Farbod Fakhrai" />
        <meta property="article:published_time" content="2026-11-14T00:00:00Z" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comsec" />

        <meta
          name="twitter:title"
          content="Your Security Page Doesn't Close Deals. A SOC 2 Report Does."
        />

        <meta
          name="twitter:description"
          content="A security page tells prospects you take security seriously. It doesn't answer the first question their security team asks. Here's how that gap stretches sales cycles."
        />

        <meta
          name="twitter:image"
          content="https://com-sec.io/images/blog-images/your-security-page-doesnt-close-deals-a-soc-2-report-does.png"
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
              Your Security Page Doesn't Close Deals. A SOC 2 Report Does.
            </h1>

            <p className="text-xl text-sky-100 mb-8 leading-relaxed">
              A security page tells prospects you take security seriously. It doesn't answer the first question their security team asks. Here's how that gap stretches sales cycles.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sky-200">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>November 14, 2026</span>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>5 min read</span>
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
                src="/images/blog-images/your-security-page-doesnt-close-deals-a-soc-2-report-does.png"
                alt="Your Security Page Doesn't Close Deals. A SOC 2 Report Does."
                className="rounded-xl shadow-md max-w-xl w-full h-auto"
              />
            </div>

            <div className="prose prose-lg max-w-none">

              {/* INTRO */}
              <section className="mb-10">
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    If you're a recently funded startup selling into enterprises, funds, or agencies, your website probably has a security page. It covers encryption, access controls, audit logs, maybe a line about how customer data stays in their cloud. All good stuff. All accurate.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    But here's the problem: none of it answers the first question your buyer's security team is going to ask.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    That question is almost always the same. <strong>Do you have a SOC 2 report?</strong>
                  </p>
                </div>
              </section>

              {/* SECURITY PAGE GAP */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  THE SECURITY PAGE GAP
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Most startups build a security page early. It makes sense. Prospects ask about security during sales calls, so the team puts together a page that explains the technical controls in place. Encryption at rest and in transit. Role-based access. Logging and monitoring. Infrastructure hosted on AWS or GCP with SOC 2 certified providers.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    All of that is true. And none of it is a substitute for an independent audit.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    When an enterprise buyer's security or procurement team evaluates a vendor, they're not reading your website. They're checking a box: does this company have a current SOC 2 Type II report? If the answer is yes, most of the security review is already done. The report covers your controls, your policies, your monitoring, and an independent auditor has verified all of it.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    If the answer is no, the review starts from scratch. And it starts with a security questionnaire.
                  </p>
                </div>
              </section>

              {/* WHAT ACTUALLY HAPPENS */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  WHAT ACTUALLY HAPPENS WITHOUT A SOC 2
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The pattern is the same almost every time.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Your sales team gets a deal to the point where the buyer is ready to move forward. Legal and procurement get involved. The buyer's security team sends over a security questionnaire. It's 200 to 400 questions covering everything from how you handle encryption keys to whether you have a formal incident response plan.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Your team scrambles to answer it. Some questions are easy. Some require pulling in engineering. Some require policies you haven't written yet. The questionnaire sits for two to four weeks while your team works through it.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Then the buyer's security team reviews the responses. They have follow-up questions. Another week or two. Maybe they want to schedule a call to walk through specific controls.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    By the time the security review clears, six to eight weeks have passed. Your sales cycle just doubled.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Now multiply that by every enterprise deal in your pipeline. Each buyer sends their own questionnaire. Each one is slightly different. Each one starts from zero because there's no report to reference.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <strong>That's not a security problem. It's a revenue problem.</strong>
                  </p>
                </div>
              </section>

              {/* WHY SECURITY PAGE DOESN'T SOLVE IT */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  WHY THE SECURITY PAGE DOESN'T SOLVE IT
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    A security page is a marketing asset. It tells prospects you take security seriously. That's valuable for building trust early in the sales cycle.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    But a security page is self-reported. You wrote it. Your buyer's security team knows that. They need independent verification, not a vendor's description of their own controls.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    A SOC 2 report is that independent verification. An accredited CPA firm audits your controls against the AICPA's Trust Services Criteria, tests whether those controls actually work, and issues a report that your buyers can rely on.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    When you hand a buyer a SOC 2 report, you're not asking them to trust your website. You're handing them a document their security team already knows how to evaluate. Most of the questionnaire questions are already answered in the report. The review that would have taken six weeks takes a few days.
                  </p>
                </div>
              </section>

              {/* REAL COST OF WAITING */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  THE REAL COST OF WAITING
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Most startups we work with don't pursue SOC 2 because they think it's too early. They'll get to it when they're bigger. When they have more enterprise deals. When the security team is more built out.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    The problem with that logic is that enterprise deals are already in the pipeline. The security questionnaires are already slowing things down. Every month without a report is another month of longer sales cycles, more manual questionnaire work, and more deals sitting in review.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Here's what the math usually looks like for a startup with 20 to 100 employees:
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    A SOC 2 engagement typically costs $25,000 to $60,000 all-in for the first year, including the GRC platform, advisory support, and audit fees. That sounds like a lot until you compare it to the cost of two or three enterprise deals slipping by a quarter because the security review dragged.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    If your average deal size is $50,000 or more, one deal closing a month faster pays for the entire engagement.
                  </p>
                </div>
              </section>

              {/* WHAT TO DO THIS WEEK */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  WHAT TO DO THIS WEEK
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    If you're heading into enterprise sales conversations and you don't have a SOC 2 report yet, here's where to start:
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Pull the last security questionnaire a prospect sent you. If you haven't received one yet, you will soon. When you do, don't treat it as a one-off task. Treat it as a readiness assessment.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Mark every question you can't answer with evidence today. Not with a verbal explanation. With actual evidence: a policy document, a screenshot of a configuration, a log export, a formal process.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Treat that list as your readiness gap. The questions you can't answer with evidence are the controls you need to build, document, or formalize before an auditor tests them.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    That gap list is your{" "}
                    <Link
                      to="/soc2-readiness"
                      className="text-sky-700 font-semibold hover:underline"
                    >
                      SOC 2 roadmap
                    </Link>
                    . It tells you exactly where you stand and what it takes to get audit-ready.
                  </p>
                </div>
              </section>

              {/* SIGNAL VS EMERGENCY */}
              <section className="mb-10">
                <div className="bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200 rounded-xl p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    THE SIGNAL VS. THE EMERGENCY
                  </h2>

                  <div className="space-y-4">
                    <p className="text-gray-800 leading-relaxed text-lg">
                      We've taken over 100 companies through SOC 2. The biggest difference between companies that get through it quickly and companies that struggle isn't size, budget, or technical maturity. It's timing.
                    </p>

                    <p className="text-gray-800 leading-relaxed text-lg">
                      The companies that move fastest treat the first security questionnaire as the signal. They recognize that if one buyer is asking these questions, every buyer will. They start the SOC 2 process before the next questionnaire lands.
                    </p>

                    <p className="text-gray-800 leading-relaxed text-lg">
                      The companies that struggle treat each questionnaire as a standalone task. They answer it, move on, and then answer the next one from scratch. By the time they decide to pursue SOC 2, they're already behind on three deals and trying to rush through an audit while keeping up with sales.
                    </p>

                    <p className="text-gray-800 leading-relaxed text-lg">
                      Don't wait for the questionnaire to become an emergency. Use it as the starting point.
                    </p>

                    <p className="text-gray-800 leading-relaxed text-lg">
                      If your security page is doing the heavy lifting on enterprise deals and you're ready to move past questionnaires, we can help. Com-Sec has guided over 100 startups and growth-stage companies through <b>SOC 2</b>, from readiness assessment to audit completion. Reach out at{" "}
                      <a
                        href="https://com-sec.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sky-700 font-semibold hover:underline"
                      >
                        com-sec.io
                      </a>{" "}
                      to start the conversation.
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
                Ready to move past security questionnaires?
              </h3>

              <p className="text-sky-200 text-lg mb-6 max-w-xl mx-auto leading-relaxed">
                Com-Sec has guided over 100 companies through SOC 2, from readiness assessment to audit completion.
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