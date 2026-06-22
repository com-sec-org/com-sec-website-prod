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

export default function RollingOutAiRightWayPart1() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "Rolling Out AI the Right Way — Part 1",
      text: "Part 1: AI Governance Isn't Optional Anymore. A 5-part playbook for companies that can't afford to get it wrong.",
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
      title: "Implementing an AI Governance Model — Part 1",
      excerpt:
        "Part 1: Start With the Inventory. You can't govern what you don't know about. Learn how to run an AI tool inventory, check your systems, and build your AI register.",
      link: "/blog/implementing-an-ai-governance-model-part-1",
      category: "AI Governance",
      emoji: "📋",
    },
    {
      title: "The Cowork Problem — When AI Gets Admin Access to Your Infrastructure",
      excerpt:
        "Part 2: What Anthropic's Cowork means for your security posture and what compliance teams need to know before enabling agentic AI.",
      link: "/blog/the-cowork-problem-when-ai-gets-admin-access",
      category: "AI Governance",
      emoji: "⚠️",
    },
    {
      title: "Agentic AI Governance & Lifecycle Management in Healthcare",
      excerpt:
        "How healthcare organizations can govern agentic AI systems responsibly while maintaining compliance.",
      link: "/blog/agentic-ai-governance-lifecycle-management-healthcare-2026",
      category: "AI & Compliance",
      emoji: "🏥",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Rolling Out AI the Right Way — Part 1: AI Governance Isn't Optional Anymore
        </title>

        <meta
          name="description"
          content="Part 1 of a 5-part playbook for companies that can't afford to get AI wrong. AI governance isn't optional anymore — enterprise buyers, regulators, and auditors are all paying attention."
        />

        <link
          rel="canonical"
          href="https://com-sec.io/blog/rolling-out-ai-the-right-way-part-1"
        />

        <meta
          property="og:title"
          content="Rolling Out AI the Right Way — Part 1: AI Governance Isn't Optional Anymore"
        />

        <meta
          property="og:description"
          content="Part 1 of a 5-part playbook for companies that can't afford to get AI wrong. AI governance isn't optional anymore."
        />

        <meta
          property="og:image"
          content="https://com-sec.io/images/blog-images/rolling-out-ai-the-right-way-part-1.png"
        />

        <meta
          property="og:url"
          content="https://com-sec.io/blog/rolling-out-ai-the-right-way-part-1"
        />

        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Com-Sec" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comsec" />

        <meta
          name="twitter:title"
          content="Rolling Out AI the Right Way — Part 1: AI Governance Isn't Optional Anymore"
        />

        <meta
          name="twitter:description"
          content="Part 1 of a 5-part playbook for companies that can't afford to get AI wrong."
        />

        <meta
          name="twitter:image"
          content="https://com-sec.io/images/blog-images/rolling-out-ai-the-right-way-part-1.png"
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
                AI Governance
              </span>
              <span className="bg-white/15 text-white px-4 py-2 rounded-full text-sm font-bold border border-white/25">
                Part 1 of 5
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-balance">
              Rolling Out AI the Right Way: A 5-Part Playbook for Companies That Can't Afford to Get It Wrong
            </h1>

            <p className="text-xl text-sky-100 mb-8 leading-relaxed">
              Part 1: AI Governance Isn't Optional Anymore
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sky-200">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>June 2026</span>
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
                src="/images/blog-images/rolling-out-ai-the-right-way-part-1.png"
                alt="Rolling Out AI the Right Way Part 1 - AI Governance Isn't Optional Anymore"
                className="rounded-xl shadow-md max-w-xl w-full h-auto"
              />
            </div>

            <div className="prose prose-lg max-w-none">

              {/* INTRO */}
              <section className="mb-10">
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Every company is using AI. The question is whether they're doing it with any structure or just hoping nobody asks.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    For the last two years, most startups and mid-market companies have been in experimentation mode. Employees sign up for ChatGPT or Claude with personal accounts, paste customer data into prompts, and use AI-generated outputs without review. Engineering teams plug in API keys and start building. Nobody inventories what's being used, where data is going, or what the risks are.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    That was understandable when AI tools were new and the regulatory landscape was unclear. It's not anymore.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Enterprise buyers are asking about AI governance in security questionnaires. Healthcare organizations want to know how you handle AI risk before they'll sign a BAA. The EU AI Act is in effect. ISO 42001 exists specifically to address AI management systems. SOC 2 auditors are starting to ask about AI use in their walkthroughs. And if you're in health tech, fintech, or any regulated industry, your customers and partners are paying attention.
                  </p>
                </div>
              </section>

              {/* WHAT AI GOVERNANCE ACTUALLY MEANS */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  What AI governance actually means
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    It's not a 50-page policy that nobody reads. At its core, AI governance for a startup or growth-stage company means:
                  </p>

                  <div className="space-y-3">
                    {[
                      "You know what AI tools your company uses and who's using them.",
                      "You've defined acceptable use boundaries.",
                      "You control what data goes into AI systems.",
                      "You have human oversight for any AI outputs that affect customers or business decisions.",
                      "You've documented your approach clearly enough to answer questions from customers, auditors, and regulators.",
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 bg-sky-50 border-l-4 border-sky-500 rounded-r-lg px-4 py-3"
                      >
                        <span className="text-sky-600 font-bold mt-0.5">{index + 1}.</span>
                        <p className="text-gray-800 text-lg">{item}</p>
                      </div>
                    ))}
                  </div>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    That's it. You can build on top of that, but if you can't do those five things, you don't have governance. You have hope.
                  </p>
                </div>
              </section>

              {/* WHY THIS MATTERS NOW */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  Why this matters now
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The compliance landscape is moving fast. ISO 42001 certification is becoming a differentiator. Customers in healthcare and financial services are adding AI-specific questions to their vendor assessments. And the Delve scandal showed what happens when the compliance industry prioritizes speed over substance. The same risk exists with AI: if companies adopt AI tools without understanding the data handling, retention, and privacy implications, they're creating exposure they may not discover until a customer audit or a breach forces the question.
                  </p>
                </div>
              </section>

              {/* PART 2 TEASER */}
              <section className="mb-10">
                <div className="bg-slate-900 rounded-xl p-8 text-white flex items-start gap-4">
                  <div className="text-3xl mt-1">→</div>
                  <div>
                    <p className="text-sm font-semibold text-sky-300 uppercase tracking-wide mb-2">
                      Up next in the series
                    </p>
                    <p className="text-lg text-slate-100 leading-relaxed">
                      In Part 2, we'll get into the specific risks of tools like Cowork and what companies need to understand before enabling agentic AI on employee machines.
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
                Need help building your AI governance program?
              </h3>
              <p className="text-sky-200 text-lg mb-6 max-w-xl mx-auto leading-relaxed">
                Com-Sec helps startups and growth-stage companies inventory AI usage, build governance frameworks, and prepare for audits and enterprise security reviews.
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
