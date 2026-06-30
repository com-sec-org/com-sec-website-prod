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

export default function RollingOutAiRightWayPart3() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "Rolling Out AI the Right Way — Part 3",
      text: "Part 3: BAAs, Zero Data Retention, and the Data Layer You Need to Understand.",
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
        "Part 1: AI Governance Isn't Optional Anymore. A 5-part playbook for companies that can't afford to get AI wrong.",
      link: "/blog/rolling-out-ai-the-right-way-part-1",
      category: "AI Governance",
      emoji: "📋",
    },
    {
      title: "The Cowork Problem — When AI Gets Admin Access to Your Infrastructure",
      excerpt:
        "Part 2: What Anthropic's Cowork means for your security posture and what compliance teams need to know.",
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
          Rolling Out AI the Right Way — Part 3: BAAs, Zero Data Retention, and the Data Layer You Need to Understand
        </title>

        <meta
          name="description"
          content="Part 3: The most common question from health tech founders about AI — can we use Claude and still be HIPAA compliant? The answer depends entirely on how you use it and which product surface you're on."
        />

        <link
          rel="canonical"
          href="https://com-sec.io/blog/rolling-out-ai-the-right-way-part-3"
        />

        <meta
          property="og:title"
          content="Rolling Out AI the Right Way — Part 3: BAAs, Zero Data Retention, and the Data Layer You Need to Understand"
        />

        <meta
          property="og:description"
          content="Part 3: BAAs, Zero Data Retention, and the Data Layer You Need to Understand. What health tech companies need to know about HIPAA compliance and AI tools."
        />

        <meta
          property="og:image"
          content="https://com-sec.io/images/blog-images/rolling-out-ai-the-right-way-part-3.png"
        />

        <meta
          property="og:url"
          content="https://com-sec.io/blog/rolling-out-ai-the-right-way-part-3"
        />

        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Com-Sec" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:author" content="Com-Sec" />
        <meta property="article:published_time" content="2026-06-30T00:00:00Z" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comsec" />

        <meta
          name="twitter:title"
          content="Rolling Out AI the Right Way — Part 3: BAAs, Zero Data Retention, and the Data Layer You Need to Understand"
        />

        <meta
          name="twitter:description"
          content="Part 3: What health tech companies need to know about HIPAA compliance and AI tools."
        />

        <meta
          name="twitter:image"
          content="https://com-sec.io/images/blog-images/rolling-out-ai-the-right-way-part-3.png"
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
                Part 3 of 5
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-balance">
              Rolling Out AI the Right Way: <br/> A 5-Part Playbook for Companies That Can't Afford to Get It Wrong
            </h1>

            <p className="text-xl text-sky-100 mb-8 leading-relaxed">
              Part 3: BAAs, Zero Data Retention, and the Data Layer You Need to Understand
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sky-200">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>June 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>6 min read</span>
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
                src="/images/blog-images/rolling-out-ai-the-right-way-part-3.png"
                alt="Rolling Out AI the Right Way Part 3 - BAAs, Zero Data Retention, and the Data Layer"
                className="rounded-xl shadow-md max-w-xl w-full h-auto"
              />
            </div>

            <div className="prose prose-lg max-w-none">

              {/* INTRO */}
              <section className="mb-10">
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The most common question I get from health tech founders about AI: "Can we use Claude and still be HIPAA compliant?"
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The answer is: it depends entirely on how you use it and which product surface you're on. And the details matter more than most companies realize.
                  </p>
                </div>
              </section>

              {/* THE BAA LANDSCAPE */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  The BAA landscape
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Anthropic offers a Business Associate Agreement for its HIPAA-eligible services. But not everything with the Claude name on it is covered.
                  </p>

                  {/* COVERED */}
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-green-800 mb-3">
                      ✅ What's covered under the BAA (as of May 2026):
                    </h3>
                    <ul className="space-y-2 text-gray-700 text-lg">
                      <li>The Claude Messages API</li>
                      <li>Claude Enterprise (with HIPAA mode enabled by an admin)</li>
                      <li>Claude Code CLI (only with ZDR enabled on a qualified account)</li>
                    </ul>
                  </div>

                  {/* NOT COVERED */}
                  <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-red-800 mb-3">
                      ❌ What's NOT covered:
                    </h3>
                    <ul className="space-y-2 text-gray-700 text-lg">
                      <li>Claude Free, Pro, Max, or Team plans</li>
                      <li>Cowork</li>
                      <li>Claude in Chrome</li>
                      <li>Claude in Excel</li>
                      <li>Features currently in beta</li>
                      <li>Web search functionality</li>
                      <li>Batch API, Files API, and several other API features</li>
                    </ul>
                  </div>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    If your company signed a BAA and assumed it covered everything your team uses, go check. The coverage gaps are significant, and Anthropic updates them regularly.
                  </p>
                </div>
              </section>

              {/* ZERO DATA RETENTION */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  Zero data retention
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    ZDR is a separate arrangement where Anthropic does not store your inputs or outputs after the API response is returned, except where needed for legal compliance or abuse prevention. This is available for qualified Enterprise API and Claude Code customers.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Key points companies miss about ZDR:
                  </p>

                  <div className="space-y-4">
                    <div className="bg-sky-50 border-l-4 border-sky-500 rounded-r-lg p-4">
                      <p className="text-gray-800 text-lg"><b>It's not automatic.</b> You have to request it through Anthropic's sales team, and they review eligibility.</p>
                    </div>
                    <div className="bg-sky-50 border-l-4 border-sky-500 rounded-r-lg p-4">
                      <p className="text-gray-800 text-lg"><b>It's enabled per-organization.</b> If you create a new organization under the same account, ZDR doesn't carry over. You need to enable it separately.</p>
                    </div>
                    <div className="bg-sky-50 border-l-4 border-sky-500 rounded-r-lg p-4">
                      <p className="text-gray-800 text-lg"><b>It doesn't cover everything.</b> Even with ZDR enabled, certain features are automatically disabled: Batch API, Files API, Skills API, code execution, programmatic tool calling, and MCP connectors.</p>
                    </div>
                    <div className="bg-sky-50 border-l-4 border-sky-500 rounded-r-lg p-4">
                      <p className="text-gray-800 text-lg"><b>Anthropic still retains User Safety classifier results</b> under ZDR to enforce their usage policy.</p>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    For healthcare companies, this means your architecture decisions matter. If you need HIPAA coverage, you're either going through Anthropic's Enterprise path with the BAA and appropriate configurations, or you're running Claude through AWS Bedrock or Google Vertex AI under those platforms' compliance frameworks. Each path has tradeoffs.
                  </p>
                </div>
              </section>

              {/* THIRD PARTY PLATFORM */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  The third-party platform option
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Running Claude through AWS Bedrock is often the cleanest compliance path for regulated companies. Bedrock was added to AWS's HIPAA Eligible Services in February 2026. Under this model, Anthropic doesn't see your prompts or completions. The data stays in your AWS VPC, under your AWS BAA. You don't need a separate Anthropic BAA.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The same applies to Google Vertex AI and Microsoft Azure AI Foundry. If your company already has a cloud provider BAA and compliance framework in place, running Claude through that provider may be simpler than navigating Anthropic's direct compliance path.
                  </p>
                </div>
              </section>

              {/* PRACTICAL TAKEAWAY */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  The practical takeaway
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Before you enable any AI tool at your company, answer these questions:
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
                    <li>Where does data go when it enters this tool?</li>
                    <li>How long is it retained?</li>
                    <li>Is this product surface covered under your BAA?</li>
                    <li>Is data used for model training?</li>
                    <li>Who at your company has verified this in writing, not just read a marketing page?</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    If you can't answer those questions for every AI tool your team uses, you have a governance gap.
                  </p>
                </div>
              </section>

              {/* PART 4 TEASER */}
              <section className="mb-10">
                <div className="bg-slate-900 rounded-xl p-8 text-white flex items-start gap-4">
                  <div className="text-3xl mt-1">→</div>
                  <div>
                    <p className="text-sm font-semibold text-sky-300 uppercase tracking-wide mb-2">
                      Up next in the series
                    </p>
                    <p className="text-lg text-slate-100 leading-relaxed">
                      In Part 4, we'll build the actual rollout playbook.
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
                Not sure if your AI usage is HIPAA compliant?
              </h3>
              <p className="text-sky-200 text-lg mb-6 max-w-xl mx-auto leading-relaxed">
                Com-Sec helps health tech and regulated companies navigate AI compliance — from BAA coverage gaps to ZDR configurations and architecture decisions.
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
