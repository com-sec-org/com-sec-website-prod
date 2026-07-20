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

export default function AiGovernanceModelPart1() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "Implementing an AI Governance Model — Part 1",
      text: "Part 1: Start With the Inventory. You Can't Govern What You Don't Know About.",
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
      title: "Implementing an AI Governance Model — Part 2",
      excerpt:
        "Writing an AI Policy That People Actually Follow — a practical, four-section structure your team will actually use.",
      link: "/blog/implementing-an-ai-governance-model-part-2",
      category: "AI Governance",
      emoji: "📋",
    },
    {
      title: "What Are Managed Security & Compliance Services and Why Are They Essential?",
      excerpt:
        "Understand how managed security and compliance services help organizations reduce risk and stay audit-ready.",
      link: "/blog/what-are-managed-security-compliance-services-and-why-are-they-essential",
      category: "Compliance",
      emoji: "🛡️",
    },
    {
      title: "How AI Is Changing IT Security Operations",
      excerpt:
        "Explore how artificial intelligence is reshaping the way organizations detect, monitor, and respond to threats.",
      link: "/blog/how-ai-is-changing-it-security-operations-in-2025",
      category: "AI & Security",
      emoji: "🤖",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Implementing an AI Governance Model — Part 1</title>

        <meta
          name="description"
          content="Part 1: Start With the Inventory. You can't govern what you don't know about. Learn how to run an AI tool inventory, check your systems, and build your AI register."
        />

        <link
          rel="canonical"
          href="https://com-sec.io/blog/implementing-an-ai-governance-model-part-1"
        />

        <meta
          property="og:title"
          content="Implementing an AI Governance Model — Part 1"
        />

        <meta
          property="og:description"
          content="Part 1: Start With the Inventory. You Can't Govern What You Don't Know About."
        />

        <meta
          property="og:image"
          content="https://com-sec.io/images/blog-images/implementing-an-ai-governance-model-part-1.png"
        />

        <meta
          property="og:url"
          content="https://com-sec.io/blog/implementing-an-ai-governance-model-part-1"
        />

        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Com-Sec" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:author" content="Com-Sec" />
        <meta property="article:published_time" content="2026-06-17T00:00:00Z" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comsec" />

        <meta
          name="twitter:title"
          content="Implementing an AI Governance Model — Part 1"
        />

        <meta
          name="twitter:description"
          content="Part 1: Start With the Inventory. You Can't Govern What You Don't Know About."
        />

        <meta
          name="twitter:image"
          content="https://com-sec.io/images/blog-images/implementing-an-ai-governance-model-part-1.png"
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
                Part 1 of Series
              </span>

            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-balance">
              Implementing an AI Governance Model
            </h1>

            <p className="text-xl text-sky-100 mb-8 leading-relaxed">
              Part 1: Start With the Inventory. You Can't Govern What You Don't Know About.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sky-200">

              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>June 17, 2026</span>
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
                src="/images/blog-images/implementing-an-ai-governance-model-part-1.png"
                alt="Implementing an AI Governance Model Part 1 - Start With the Inventory"
                className="rounded-xl shadow-md max-w-xl w-full h-auto"
              />
            </div>

            <div className="prose prose-lg max-w-none">

              {/* INTRO */}
              <section className="mb-10">
                <div className="space-y-5">

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Every AI governance framework starts in the same place: figuring out what your company is actually using.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    This sounds simple. It's not. At most companies, AI adoption has been bottom-up and ungoverned. Individual employees signed up for tools. Engineers plugged in API keys. Teams built internal tools on top of models. Nobody tracked any of it.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Before you write a policy, before you evaluate risk, before you talk to your auditor, you need to know what's in your environment.
                  </p>

                </div>
              </section>

              {/* HOW TO RUN THE INVENTORY */}
              <section className="mb-10">

                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  How to run the inventory
                </h2>

                <div className="space-y-5">

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Send a company-wide survey. Keep it short. Three questions: What AI tools do you use for work? What do you use them for? What data do you put into them?
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    You'll be surprised. Marketing is using ChatGPT to draft customer emails. Engineering is using Claude Code to write and debug production code. Customer success is pasting support tickets into AI tools to draft responses. Sales is using AI to research prospects. Product is running analytics queries through AI. Some of these tools have enterprise agreements. Most don't.
                  </p>

                </div>

              </section>

              {/* CHECK YOUR SYSTEMS */}
              <section className="mb-10">

                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Check your systems
                </h2>

                <div className="space-y-5">

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Surveys catch what people remember. Systems catch everything else.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Review your SSO/SAML logs for AI-related applications. Check expense reports and credit card statements for AI subscriptions. Look at browser extensions across your fleet. Review API keys in your codebase and CI/CD pipeline. Check your cloud provider marketplace for AI services that have been enabled.
                  </p>

                </div>

              </section>

              {/* BUILD THE REGISTER */}
              <section className="mb-10">

                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Build the register
                </h2>

                <div className="space-y-5">

                  <p className="text-gray-700 leading-relaxed text-lg">
                    For every AI tool you find, document:
                  </p>

                  <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
                    <li>Tool name and provider.</li>
                    <li>Who's using it and which team.</li>
                    <li>What plan or tier (free, pro, enterprise, API).</li>
                    <li>What data goes into it — customer data, PHI, PII, source code, internal docs, or public info only.</li>
                    <li>Whether there's a signed agreement (BAA, DPA, enterprise contract).</li>
                    <li>Whether data is used for model training.</li>
                    <li>Retention policy.</li>
                    <li>Whether the tool has agentic capabilities — can it take actions, access files, execute code.</li>
                  </ul>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    This register is the foundation of everything that follows. It's also the first thing an auditor or enterprise customer will ask for when they want to understand your AI governance posture.
                  </p>

                </div>

              </section>

              {/* WHAT YOU'LL PROBABLY FIND */}
              <section className="mb-10">

                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  What you'll probably find
                </h2>

                <div className="space-y-5">

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>More tools than anyone expected.</b> Most companies discover 3 to 5x more AI tools in use than leadership knew about.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Data flowing somewhere it shouldn't.</b> PHI or PII going into consumer-grade tools without BAAs. Engineers using agentic tools with admin access to production.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>No consistency in plans or tiers.</b> Half the team on free accounts, some on personal pro plans, a few with enterprise agreements — often for the same tool.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    That's normal. The point of the inventory isn't to punish anyone. It's to get a clear picture so you can make informed decisions about what to approve, what to restrict, and what to shut down.
                  </p>

                </div>

              </section>

              {/* SUMMARY */}
              <section className="mb-10">

                <div className="bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200 rounded-xl p-8">

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Why this matters now
                  </h2>

                  <div className="space-y-4">

                    <p className="text-gray-800 leading-relaxed text-lg">
                      Enterprise buyers, compliance frameworks like ISO 42001, and regulators are all starting to ask pointed questions about AI use. The companies that can produce a clean, accurate AI inventory when asked — from a customer security review, an audit, or a board meeting — are the ones that build trust faster.
                    </p>

                    <p className="text-gray-800 leading-relaxed text-lg">
                      The inventory is the first step. Everything else — policy, risk classification, vendor review — builds on top of it.
                    </p>

                  </div>

                </div>

              </section>

              {/* PART 2 */}
              <section className="mb-10">

                <Link to="/blog/implementing-an-ai-governance-model-part-2" className="block group">
                  <div className="bg-slate-900 rounded-xl p-8 text-white flex items-start gap-4 hover:bg-slate-800 transition-colors">

                    <div className="text-3xl mt-1">→</div>

                    <div>

                      <p className="text-sm font-semibold text-sky-300 uppercase tracking-wide mb-2">
                        Up next in the series
                      </p>

                      <p className="text-lg text-slate-100 leading-relaxed">
                        In Part 2, we write an AI acceptable use policy your team will actually follow.
                      </p>

                      <p className="text-sm text-sky-300 mt-3 group-hover:underline">Read Part 2 →</p>

                    </div>

                  </div>
                </Link>

              </section>

              {/* AUTHOR */}
              <section className="mb-12 border-t border-gray-200 pt-8">

                <p className="text-gray-600 text-base italic">
                  This article is part of Com-Sec's AI Governance series for startups and growth-stage companies. Learn more at{" "}
                  <a
                    href="https://com-sec.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-700 font-semibold hover:underline"
                  >
                    com-sec.io
                  </a>
                  .
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
