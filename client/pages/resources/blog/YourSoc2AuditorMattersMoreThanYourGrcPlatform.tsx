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

export default function YourSoc2AuditorMattersMoreThanYourGrcPlatform() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "Your SOC 2 Auditor Matters More Than Your GRC Platform",
      text: "Post 1: Things I've Learned Running a Cybersecurity Firm. The GRC platform is a tool. The auditor is what makes your report worth something.",
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
      title: "Rolling Out AI the Right Way — Part 1",
      excerpt:
        "A 5-part playbook for companies that can't afford to get AI wrong.",
      link: "/blog/rolling-out-ai-the-right-way-part-1",
      category: "AI Governance",
      emoji: "📋",
    },
    {
      title: "Rolling Out AI the Right Way — Part 3",
      excerpt:
        "BAAs, Zero Data Retention, and the Data Layer You Need to Understand.",
      link: "/blog/rolling-out-ai-the-right-way-part-3",
      category: "AI Governance",
      emoji: "🔐",
    },
    {
      title: "Rolling Out AI the Right Way — Part 4",
      excerpt:
        "A practical 5-step playbook for rolling out AI at a company that takes security and compliance seriously.",
      link: "/blog/rolling-out-ai-the-right-way-part-4",
      category: "AI Governance",
      emoji: "🛠️",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Your SOC 2 Auditor Matters More Than Your GRC Platform
        </title>

        <meta
          name="description"
          content="Post 1: Things I've Learned Running a Cybersecurity Firm. Choosing Drata vs Vanta is the wrong first question — here's what actually determines whether your SOC 2 report holds up."
        />

        <link
          rel="canonical"
          href="https://com-sec.io/blog/your-soc-2-auditor-matters-more-than-your-grc-platform"
        />

        <meta
          property="og:title"
          content="Your SOC 2 Auditor Matters More Than Your GRC Platform"
        />

        <meta
          property="og:description"
          content="The GRC platform is a tool. The auditor determines whether your controls are suitably designed and whether the report is worth the paper it's printed on."
        />

        <meta
          property="og:image"
          content="https://com-sec.io/images/blog-images/your-soc-2-auditor-matters-more-than-your-grc-platform.png"
        />

        <meta
          property="og:url"
          content="https://com-sec.io/blog/your-soc-2-auditor-matters-more-than-your-grc-platform"
        />

        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Com-Sec" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:author" content="Farbod Fakhrai" />
        <meta property="article:published_time" content="2026-07-06T00:00:00Z" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comsec" />

        <meta
          name="twitter:title"
          content="Your SOC 2 Auditor Matters More Than Your GRC Platform"
        />

        <meta
          name="twitter:description"
          content="The GRC platform is a tool. The auditor determines whether your controls are suitably designed and whether the report is worth the paper it's printed on."
        />

        <meta
          name="twitter:image"
          content="https://com-sec.io/images/blog-images/your-soc-2-auditor-matters-more-than-your-grc-platform.png"
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
                Post 1 of 5
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-balance">
              Your SOC 2 Auditor Matters More Than Your GRC Platform
            </h1>

            <p className="text-xl text-sky-100 mb-8 leading-relaxed">
              Things I've Learned Running a Cybersecurity Firm — Post 1
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sky-200">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>July 6, 2026</span>
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
                src="/images/blog-images/your-soc-2-auditor-matters-more-than-your-grc-platform.png"
                alt="Your SOC 2 Auditor Matters More Than Your GRC Platform"
                className="rounded-xl shadow-md max-w-xl w-full h-auto"
              />
            </div>

            <div className="prose prose-lg max-w-none">

              {/* INTRO */}
              <section className="mb-10">
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Every founder I talk to about SOC 2 asks the same question first: "Should we use Drata or Vanta?"
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    It's the wrong question. The GRC platform matters, but it's a tool. The auditor is the one who determines whether your controls are suitably designed, whether your evidence holds up, and whether the final report is worth the paper it's printed on. A great platform with a bad auditor produces a report that falls apart under customer scrutiny. A decent platform with a rigorous, experienced auditor produces a report that builds real trust.
                  </p>
                </div>
              </section>

              {/* BAD AUDITOR */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  What a bad auditor looks like
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    They accept whatever evidence the platform exports without question. They don't ask follow-up questions about how controls actually operate. They produce a report that reads like a template with your company name dropped in. They finish the engagement in a suspiciously short timeframe. They have no opinion on whether your controls are actually good, just whether they technically exist.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    If this sounds like the Delve model, it is. The Delve scandal was an extreme case, but the underlying dynamic exists across the industry: auditors who prioritize volume over rigor, and companies who want the certificate without the work.
                  </p>
                </div>
              </section>

              {/* GOOD AUDITOR */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  What a good auditor looks like
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    They push back. They ask how your access review process actually works in practice, not just whether you have a policy that says you do one. They flag gaps and give you a chance to fix them before the report is finalized. They design their own test procedures rather than accepting pre-packaged evidence at face value. They produce a report that you'd be comfortable handing to a sophisticated enterprise buyer.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    A good auditor makes your program better. Not just your report.
                  </p>
                </div>
              </section>

              {/* HOW TO CHOOSE */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  How to choose
                </h2>
                <div className="space-y-4">
                  <div className="bg-sky-50 border-l-4 border-sky-500 rounded-r-lg p-4">
                    <p className="text-gray-800 text-lg">
                      <b>Track record.</b> Ask how many SOC 2 audits the firm has completed.
                    </p>
                  </div>
                  <div className="bg-sky-50 border-l-4 border-sky-500 rounded-r-lg p-4">
                    <p className="text-gray-800 text-lg">
                      <b>Timeline.</b> Ask about their average engagement timeline. If it's less than 4 weeks for a Type II, ask why.
                    </p>
                  </div>
                  <div className="bg-sky-50 border-l-4 border-sky-500 rounded-r-lg p-4">
                    <p className="text-gray-800 text-lg">
                      <b>Test procedures.</b> Ask whether they use their own test procedures or rely on the GRC platform's outputs.
                    </p>
                  </div>
                  <div className="bg-sky-50 border-l-4 border-sky-500 rounded-r-lg p-4">
                    <p className="text-gray-800 text-lg">
                      <b>Sample report.</b> Ask for a sample report (redacted) so you can see the level of detail.
                    </p>
                  </div>
                  <div className="bg-sky-50 border-l-4 border-sky-500 rounded-r-lg p-4">
                    <p className="text-gray-800 text-lg">
                      <b>Peer review.</b> Check whether the firm has AICPA peer review.
                    </p>
                  </div>
                  <div className="bg-sky-50 border-l-4 border-sky-500 rounded-r-lg p-4">
                    <p className="text-gray-800 text-lg">
                      <b>Independence.</b> Check whether the firm has any financial relationship with your GRC platform vendor. Auditor independence isn't just an ethical principle — it's a structural requirement of the attestation. If your auditor gets paid by your platform for referrals, that's a conflict worth understanding.
                    </p>
                  </div>
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
                      Pick your auditor with the same care you'd pick a lawyer or a CPA. Then pick your platform. Not the other way around.
                    </p>
                  </div>
                </div>
              </section>

              {/* POST 2 */}
              <section className="mb-10">

                <Link to="/blog/the-security-questionnaire-is-a-sales-tool-not-a-compliance-exercise" className="block group">
                  <div className="bg-slate-900 rounded-xl p-8 text-white flex items-start gap-4 hover:bg-slate-800 transition-colors">

                    <div className="text-3xl mt-1">→</div>

                    <div>

                      <p className="text-sm font-semibold text-sky-300 uppercase tracking-wide mb-2">
                        Up next in the series
                      </p>

                      <p className="text-lg text-slate-100 leading-relaxed">
                        In Post 2, we look at security questionnaires: why the companies that treat them as a sales asset close deals faster than the ones that treat them as a compliance burden.
                      </p>

                      <p className="text-sm text-sky-300 mt-3 group-hover:underline">Read Post 2 →</p>

                    </div>

                  </div>
                </Link>

              </section>

            </div>
          </div>
        </article>

        {/* CTA */}
        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-sky-900 via-blue-800 to-slate-900 rounded-xl px-8 py-10 text-white text-center shadow-lg">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Choosing between SOC 2 auditors?
              </h3>
              <p className="text-sky-200 text-lg mb-6 max-w-xl mx-auto leading-relaxed">
                Com-Sec helps startups and growth-stage companies navigate SOC 2 — from picking the right auditor and platform to building a compliance program that actually holds up under scrutiny.
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
