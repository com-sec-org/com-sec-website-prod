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

export default function HowToReportSecurityToYourBoard() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title:
        "How to Report Security to Your Board Without Putting Them to Sleep (or Scaring Them)",
      text: "Most security leaders struggle with board reporting. Here's the structure, metrics, and cadence that actually builds confidence and secures budget.",
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
      title: "What Does a Fractional CISO Do? Roles and Responsibilities",
      excerpt:
        "The CISO title gets thrown around loosely, and 'fractional' makes it even more ambiguous. Here's what the role should actually include.",
      link: "/blog/what-does-a-fractional-ciso-do-roles-and-responsibilities",
      category: "Security Leadership",
      emoji: "🧑‍💼",
    },
    {
      title: "7 Signs Your Business Needs Fractional Security Leadership",
      excerpt:
        "There's a point where the \"we'll figure it out\" approach to security breaks. Here are the seven signs your company has outgrown it.",
      link: "/blog/7-signs-your-business-needs-fractional-security-leadership",
      category: "Security Leadership",
      emoji: "🚩",
    },
    {
      title: "Cybersecurity Strategy vs. Cybersecurity Roadmap: What's the Difference?",
      excerpt:
        "These two terms get used interchangeably. They're not the same thing — and understanding the difference matters.",
      link: "/blog/cybersecurity-strategy-vs-cybersecurity-roadmap-whats-the-difference",
      category: "Security Leadership",
      emoji: "🧭",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          How to Report Security to Your Board Without Putting Them to Sleep (or Scaring Them)
        </title>

        <meta
          name="description"
          content="Either the report is so technical that board members tune out, or it's so high-level that it's meaningless. Here's the structure, metrics, and cadence that actually builds confidence and secures budget."
        />

        <link
          rel="canonical"
          href="https://com-sec.io/blog/how-to-report-security-to-your-board-without-putting-them-to-sleep"
        />

        <meta
          property="og:title"
          content="How to Report Security to Your Board Without Putting Them to Sleep (or Scaring Them)"
        />

        <meta
          property="og:description"
          content="Most security leaders struggle with board reporting. Here's the structure, metrics, and cadence that actually builds confidence and secures budget."
        />

        <meta
          property="og:image"
          content="https://com-sec.io/images/blog-images/how-to-report-security-to-your-board-without-putting-them-to-sleep.png"
        />

        <meta
          property="og:url"
          content="https://com-sec.io/blog/how-to-report-security-to-your-board-without-putting-them-to-sleep"
        />

        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Com-Sec" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:author" content="Farbod Fakhrai" />
        <meta property="article:published_time" content="2026-10-26T00:00:00Z" />

        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="How to Report Security to Your Board Without Putting Them to Sleep (or Scaring Them)"
        />

        <meta
          name="twitter:description"
          content="Most security leaders struggle with board reporting. Here's the structure, metrics, and cadence that actually builds confidence and secures budget."
        />

        <meta
          name="twitter:image"
          content="https://com-sec.io/images/blog-images/how-to-report-security-to-your-board-without-putting-them-to-sleep.png"
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
                Security Leadership
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-balance">
              How to Report Security to Your Board Without Putting Them to Sleep (or Scaring Them)
            </h1>

            <p className="text-xl text-sky-100 mb-8 leading-relaxed">
              Either the report is so technical that board members tune out, or it's so high-level that it's meaningless. Neither outcome helps you.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sky-200">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>October 26, 2026</span>
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
                src="/images/blog-images/how-to-report-security-to-your-board-without-putting-them-to-sleep.png"
                alt="How to Report Security to Your Board Without Putting Them to Sleep (or Scaring Them)"
                className="rounded-xl shadow-md max-w-xl w-full h-auto"
              />
            </div>

            <div className="prose prose-lg max-w-none">

              {/* INTRO */}
              <section className="mb-10">
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Most security leaders struggle with board reporting. Either the report is so technical that board members tune out, or it's so high-level that it's meaningless. Neither outcome helps you.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    If you're a founder reporting to investors, a CISO presenting to a board, or a vCISO advising leadership, getting this right matters. A good board security report builds confidence, secures budget, and creates alignment. A bad one wastes everyone's time.
                  </p>
                </div>
              </section>

              {/* WHAT BOARDS WANT */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  What boards actually want to know
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Board members aren't security experts. They don't need to be. They need to understand:
                  </p>

                  <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
                    <li>
                      <b>Are we protected?</b> What is our current security posture? Are the basics in place? Where are the gaps?
                    </li>
                    <li>
                      <b>What are the biggest risks?</b> Not all risks. The top three to five that could materially impact the business. Translated into business terms, not technical jargon.
                    </li>
                    <li>
                      <b>Are we getting better?</b> Are we making progress on the things we said we'd improve? Is our risk exposure decreasing over time?
                    </li>
                    <li>
                      <b>Are we compliant?</b> Where do we stand on our compliance commitments (
                      <b>
                        <Link to="/soc2" className="text-sky-700 font-semibold hover:underline">
                          SOC 2
                        </Link>
                      </b>
                      ,{" "}
                      <b>
                        <Link to="/hipaa" className="text-sky-700 font-semibold hover:underline">
                          HIPAA
                        </Link>
                      </b>
                      ,{" "}
                      <b>
                        <Link to="/iso27001" className="text-sky-700 font-semibold hover:underline">
                          ISO
                        </Link>
                      </b>
                      , etc.)? Are there any issues with our certifications?
                    </li>
                    <li>
                      <b>What do you need?</b> Budget, headcount, executive support, a decision. If you're not asking for something, the board wonders why you're presenting.
                    </li>
                  </ul>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    That's it. Everything else is detail they don't need in the boardroom.
                  </p>
                </div>
              </section>

              {/* STRUCTURE */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  The structure that works
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    I've seen a lot of board security reports. The ones that work follow a consistent structure:
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Executive summary (one paragraph).</b> Overall security posture in plain language. Two or three sentences. "Our security program is maturing on schedule. We completed our{" "}
                    <b>
                      <Link to="/soc2" className="text-sky-700 font-semibold hover:underline">
                        SOC 2 Type II audit
                      </Link>
                    </b>{" "}
                    with zero findings. Our primary risk areas are third-party vendor security and patching speed for critical vulnerabilities."
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Key metrics (three to five).</b> Pick metrics that tell a story. Not vanity metrics. Metrics that show whether your security is getting better or worse.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Good metrics:</b>
                  </p>

                  <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
                    <li>Mean time to patch critical vulnerabilities</li>
                    <li>Percentage of systems with MFA enabled</li>
                    <li>Number of security incidents (severity-weighted)</li>
                    <li>Vendor risk assessments completed vs. due</li>
                    <li>Compliance certification status</li>
                  </ul>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Bad metrics:</b>
                  </p>

                  <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
                    <li>Number of firewall rules</li>
                    <li>Total vulnerabilities found</li>
                    <li>Phishing simulation click rates (without context)</li>
                    <li>Number of security events logged</li>
                  </ul>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Top risks (three to five).</b> Each risk should be stated in business terms with a plain-language description, business impact, likelihood, and what you're doing about it.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Example: "Our third-party payment processor has not provided an updated{" "}
                    <b>SOC 2 report</b>. If their controls are inadequate, we could be exposed to payment data compromise, which would trigger PCI notification requirements and potential customer loss. We've escalated the request and are evaluating alternative processors."
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Not: "Vendor X has a CVSS 8.7 vulnerability in their API gateway that could allow authenticated users to escalate privileges."
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Progress update.</b> What did you commit to last quarter? What got done? What didn't? Why? This is where you build credibility. Boards remember what you said you'd do. Show that you did it.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>The ask.</b> Budget. Headcount. A policy decision. An approval to pursue a certification. Whatever you need from the board, put it clearly at the end with the business justification.
                  </p>
                </div>
              </section>

              {/* COMMON MISTAKES */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Common mistakes
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Information overload.</b> A 30-slide deck with vulnerability scan results, firewall logs, and technical architecture diagrams. The board doesn't need this. You're demonstrating that you're working hard, not that you're effective.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Fear-based reporting.</b> Leading with worst-case breach scenarios to scare the board into approving the budget. This works once. After that, you've cried wolf. Report risks honestly without catastrophizing.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>No business context.</b> Saying "we have 47 critical vulnerabilities" means nothing without context. Are those vulnerabilities in internet-facing systems? How many were there last quarter? What's the trend? What's the remediation plan?
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Not asking for anything.</b> If you present and don't ask for a decision or resource, the board assumes everything is fine. When you come back later asking for a budget urgently, they'll wonder what changed.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Reporting compliance as security.</b> "We passed our{" "}
                    <b>SOC 2 audit</b>" is great. It's not the same as "we're secure." The board needs to understand both your compliance posture and your operational security posture.
                  </p>
                </div>
              </section>

              {/* MAKING IT VISUAL */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Making it visual
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Boards process information visually. A few well-designed charts and dashboards are more effective than pages of text.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    A risk heat map showing your top risks by likelihood and impact. A trend line showing your mean time to patch over the last four quarters. A status dashboard showing compliance certification progress. These tell the story quickly and memorably.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Keep the slides clean. One message per slide. No walls of text. Use color intentionally — red for critical issues, green for areas that are on track, yellow for items that need attention.
                  </p>
                </div>
              </section>

              {/* CADENCE */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  The cadence
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Quarterly is standard. More frequent for companies in a high-risk environment, undergoing an incident, or building their program for the first time.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Between board meetings, send a monthly one-page summary to the CEO or your board liaison. This keeps security on the radar without requiring a full presentation. Include: any incidents, key metrics changes, and any decisions needed before the next board meeting.
                  </p>
                </div>
              </section>

              {/* VCISO ADVANTAGE */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  The vCISO advantage
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    One of the things a <b>virtual CISO</b> brings to the table is experience doing this across multiple companies and boards. We know what works, what doesn't, and how to translate technical risk into language that drives decisions.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    If you're a founder or technical leader who's been asked to present security to your board and you're not sure where to start, this is exactly the kind of thing we help with at Com-Sec.
                  </p>
                </div>
              </section>

              {/* AUTHOR */}
              <section className="mb-12 border-t border-gray-200 pt-8">
                <p className="text-gray-600 text-base italic">
                  Farbod Fakhrai is the founder of Com-Sec, a{" "}
                  <b>
                    <a
                      href="https://com-sec.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-700 font-semibold hover:underline"
                    >
                      cybersecurity and compliance
                    </a>
                  </b>{" "}
                  consulting firm for startups and growth-stage companies.
                </p>
              </section>

            </div>
          </div>
        </article>

        {/* CTA */}
        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-sky-900 via-blue-800 to-slate-900 rounded-xl px-8 py-10 text-white text-center shadow-lg">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Need to present security to your board?
              </h3>

              <p className="text-sky-200 text-lg mb-6 max-w-xl mx-auto leading-relaxed">
                Com-Sec helps founders and technical leaders translate security posture into language that drives board decisions.
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
