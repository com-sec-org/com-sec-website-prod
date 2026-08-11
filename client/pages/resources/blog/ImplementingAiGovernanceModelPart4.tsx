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

export default function ImplementingAiGovernanceModelPart4() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "Implementing an AI Governance Model — Part 4",
      text: "Part 4: Vendor AI Governance and Third-Party Risk. Your AI governance program doesn't stop at the tools your employees use directly.",
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
        "Part 1: Start With the Inventory. You can't govern what you don't know about. How to run an AI tool inventory, check your systems, and build your AI register.",
      link: "/blog/implementing-an-ai-governance-model-part-1",
      category: "AI Governance",
      emoji: "📋",
    },
    {
      title: "Implementing an AI Governance Model — Part 2: Writing an AI Policy That People Actually Follow",
      excerpt:
        "Part 2: Most AI policies are too vague to enforce or too long to read. A practical, four-section structure for an AI acceptable use policy your team will actually follow.",
      link: "/blog/implementing-an-ai-governance-model-part-2",
      category: "AI Governance",
      emoji: "📝",
    },
    {
      title: "Implementing an AI Governance Model — Part 3: Technical Controls That Make Your Policy Enforceable",
      excerpt:
        "Part 3: A policy without technical controls is a suggestion. How to enforce your AI policy through identity and access, MDM, network and DLP, platform configuration, and logging.",
      link: "/blog/implementing-an-ai-governance-model-part-3",
      category: "AI Governance",
      emoji: "🔧",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Implementing an AI Governance Model — Part 4: Vendor AI Governance and Third-Party Risk
        </title>

        <meta
          name="description"
          content="Part 4: Vendor AI Governance and Third-Party Risk. Your AI governance program doesn't stop at the tools your employees use directly — it extends to every vendor in your stack that uses AI."
        />

        <link
          rel="canonical"
          href="https://com-sec.io/blog/implementing-an-ai-governance-model-part-4"
        />

        <meta
          property="og:title"
          content="Implementing an AI Governance Model — Part 4: Vendor AI Governance and Third-Party Risk"
        />

        <meta
          property="og:description"
          content="Your AI governance program doesn't stop at the tools your employees use directly. It extends to every vendor in your stack that uses AI."
        />

        <meta
          property="og:image"
          content="https://com-sec.io/images/blog-images/implementing-an-ai-governance-model-part-4.png"
        />

        <meta
          property="og:url"
          content="https://com-sec.io/blog/implementing-an-ai-governance-model-part-4"
        />

        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Com-Sec" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:author" content="Farbod Fakhrai" />
        <meta property="article:published_time" content="2026-07-29T00:00:00Z" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comsec" />

        <meta
          name="twitter:title"
          content="Implementing an AI Governance Model — Part 4: Vendor AI Governance and Third-Party Risk"
        />

        <meta
          name="twitter:description"
          content="Your AI governance program doesn't stop at the tools your employees use directly. It extends to every vendor in your stack that uses AI."
        />

        <meta
          name="twitter:image"
          content="https://com-sec.io/images/blog-images/implementing-an-ai-governance-model-part-4.png"
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
                Part 4 of 5
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-balance">
              Implementing an AI Governance Model
            </h1>

            <p className="text-xl text-sky-100 mb-8 leading-relaxed">
              Part 4: Vendor AI Governance and Third-Party Risk
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sky-200">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>July 29, 2026</span>
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
                src="/images/blog-images/implementing-an-ai-governance-model-part-4.png"
                alt="Implementing an AI Governance Model Part 4 - Vendor AI Governance and Third-Party Risk"
                className="rounded-xl shadow-md max-w-xl w-full h-auto"
              />
            </div>

            <div className="prose prose-lg max-w-none">

              {/* INTRO */}
              <section className="mb-10">
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Your AI governance program doesn't stop at the tools your employees use directly. It extends to every vendor in your stack that uses AI.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    This is the part most companies skip. It's also the part that auditors and enterprise customers are starting to ask about.
                  </p>
                </div>
              </section>

              {/* VENDORS ARE USING AI TOO */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  Your vendors are using AI too
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Your customer support platform probably added an AI feature last quarter. Your CRM has AI-powered insights. Your code review tool uses AI to suggest changes. Your marketing platform generates content with AI. Your analytics tool summarizes data with AI.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Each one of those AI features processes your data. Some of them process your customers' data. And most companies have no idea what's happening under the hood.
                  </p>
                </div>
              </section>

              {/* QUESTIONS TO ASK */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  The questions to ask
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    For every vendor that handles your data, add these to your vendor assessment:
                  </p>
                  <div className="space-y-4">
                    <div className="bg-sky-50 border-l-4 border-sky-500 rounded-r-lg p-4">
                      <p className="text-gray-800 text-lg">Does your product use AI or machine learning? If so, for what functions?</p>
                    </div>
                    <div className="bg-sky-50 border-l-4 border-sky-500 rounded-r-lg p-4">
                      <p className="text-gray-800 text-lg">Is our data used to train AI models? Can we opt out?</p>
                    </div>
                    <div className="bg-sky-50 border-l-4 border-sky-500 rounded-r-lg p-4">
                      <p className="text-gray-800 text-lg">Where is AI processing performed — same infrastructure as the rest of the product, or a third-party AI provider?</p>
                    </div>
                    <div className="bg-sky-50 border-l-4 border-sky-500 rounded-r-lg p-4">
                      <p className="text-gray-800 text-lg">If you use a third-party AI provider (OpenAI, Anthropic, Google), is our data covered under your agreement with them?</p>
                    </div>
                    <div className="bg-sky-50 border-l-4 border-sky-500 rounded-r-lg p-4">
                      <p className="text-gray-800 text-lg">What's the data retention policy for AI-processed data specifically?</p>
                    </div>
                    <div className="bg-sky-50 border-l-4 border-sky-500 rounded-r-lg p-4">
                      <p className="text-gray-800 text-lg">Do you have an AI governance policy or framework? Have you assessed your AI features against relevant regulations (EU AI Act, state AI laws, sector-specific requirements)?</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* HEALTHCARE */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  For healthcare companies
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    If your vendor processes PHI and uses AI, the stakes are higher. The BAA needs to cover AI-specific data flows. If the vendor sends your PHI to a third-party AI provider for processing, that provider is a subcontractor under HIPAA and needs their own BAA in the chain.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Ask explicitly: does PHI enter any AI model, API, or processing pipeline? If yes, is that covered under our BAA? Is the AI provider a listed subcontractor?
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Most vendors haven't thought through this yet. That doesn't mean you can ignore it. It means you need to push them.
                  </p>
                </div>
              </section>

              {/* SUPPLY CHAIN */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  AI in your supply chain
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    If you build a product that uses AI, your customers will ask you the same questions. Having clear, documented answers positions you ahead of competitors who haven't done this work.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Build a one-page AI disclosure document: what AI your product uses, what data it processes, how you govern it, and what controls are in place. Share it proactively with enterprise customers. This is becoming a sales differentiator, especially in healthcare.
                  </p>
                </div>
              </section>

              {/* VENDOR REGISTER */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  Updating your vendor register
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Add an AI column to your vendor register. For each vendor, flag whether they use AI, whether your data is involved, and whether you've assessed the AI-specific risk. Prioritize vendors that handle sensitive data or PHI. Review annually or when the vendor announces new AI features — which is basically quarterly at this point.
                  </p>
                </div>
              </section>

              {/* PART 5 TEASER */}
              <section className="mb-10">
                <Link to="/blog/implementing-an-ai-governance-model-part-5" className="block group">
                  <div className="bg-slate-900 rounded-xl p-8 text-white flex items-start gap-4 hover:bg-slate-800 transition-colors">
                    <div className="text-3xl mt-1">→</div>
                    <div>
                      <p className="text-sm font-semibold text-sky-300 uppercase tracking-wide mb-2">
                        Up next in the series
                      </p>
                      <p className="text-lg text-slate-100 leading-relaxed">
                        In Part 5, we'll cover ongoing governance: how to keep the program running and evolving as AI changes.
                      </p>
                      <p className="text-sm text-sky-300 mt-3 group-hover:underline">Read Part 5 →</p>
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
                Need help assessing AI risk across your vendor stack?
              </h3>
              <p className="text-sky-200 text-lg mb-6 max-w-xl mx-auto leading-relaxed">
                Com-Sec helps startups and growth-stage companies build vendor risk assessments, AI disclosure documents, and governance programs that hold up to auditors and enterprise customers.
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
