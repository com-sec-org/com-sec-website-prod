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

export default function RollingOutAiRightWayPart5() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "Rolling Out AI the Right Way — Part 5",
      text: "Part 5: Common Mistakes and the Path Forward. The mistakes I see most often when companies roll out AI, and how to avoid them.",
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
      title: "Rolling Out AI the Right Way — Part 3",
      excerpt:
        "Part 3: BAAs, Zero Data Retention, and the Data Layer You Need to Understand.",
      link: "/blog/rolling-out-ai-the-right-way-part-3",
      category: "AI Governance",
      emoji: "🔐",
    },
    {
      title: "Rolling Out AI the Right Way — Part 4",
      excerpt:
        "Part 4: The AI Rollout Playbook. A practical 5-step playbook for rolling out AI at a company that takes security and compliance seriously.",
      link: "/blog/rolling-out-ai-the-right-way-part-4",
      category: "AI Governance",
      emoji: "🗺️",
    },
  ];

  const mistakes = [
    {
      title: "Mistake 1: Treating all AI tools the same",
      body: [
        "Claude Free and Claude Enterprise are fundamentally different products from a compliance perspective. A developer using Claude Code through the API with ZDR enabled has a completely different risk profile than a marketing manager using Claude Pro on a personal account. Your governance model needs to account for these differences.",
        "One policy that says \"employees may use AI\" without distinguishing between tool, tier, and use case is a policy that doesn't protect you.",
      ],
    },
    {
      title: "Mistake 2: Ignoring agentic risk",
      body: [
        "Cowork, Claude Code, and similar agentic tools are qualitatively different from chatbots. They can take actions, modify files, execute commands, and interact with systems. An engineer with admin access to your cloud environment running Cowork in \"act without asking\" mode is one bad prompt away from a production incident.",
        "This isn't theoretical. Companies need to treat agentic AI the way they treat privileged access: with defined boundaries, monitoring, and the principle of least privilege.",
      ],
    },
    {
      title: "Mistake 3: Assuming the BAA covers everything",
      body: [
        "I've seen health tech companies sign Anthropic's BAA and then let their team use Claude Pro, Cowork, and web search features, none of which are covered. The BAA is specific about what's in scope. Read the implementation guide. Check the feature eligibility table. Don't assume.",
      ],
    },
    {
      title: "Mistake 4: Skipping the inventory",
      body: [
        "If you don't know what AI tools are in your environment, your governance program is performative. Shadow AI is real and growing. Every quarter, new tools show up. The inventory step isn't optional.",
      ],
    },
    {
      title: "Mistake 5: Writing policy without configuring controls",
      body: [
        "A policy that says \"employees shall not enter PHI into AI tools\" is meaningless if you haven't disabled the features that make it easy to do so. Policy without technical controls is a suggestion. Configure admin settings, blocklists, and access controls to enforce what your policy says.",
      ],
    },
    {
      title: "Mistake 6: Moving fast without understanding the data layer",
      body: [
        "The AI industry is moving at breakneck speed. New features launch weekly. Data handling policies change. BAA coverage evolves. ZDR eligibility shifts. What was true six months ago may not be true today.",
        "Companies that roll out AI tools without understanding where data goes, how long it's retained, and whether it's used for training are creating exposure they may not discover until an audit or incident forces the question.",
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Rolling Out AI the Right Way — Part 5: Common Mistakes and the Path Forward
        </title>

        <meta
          name="description"
          content="Part 5: Common Mistakes and the Path Forward. The mistakes companies most often make when rolling out AI — and how to avoid them — plus what a realistic governance program actually looks like."
        />

        <link
          rel="canonical"
          href="https://com-sec.io/blog/rolling-out-ai-the-right-way-part-5"
        />

        <meta
          property="og:title"
          content="Rolling Out AI the Right Way — Part 5: Common Mistakes and the Path Forward"
        />

        <meta
          property="og:description"
          content="The mistakes I see most often when companies roll out AI, and how to avoid them."
        />

        <meta
          property="og:image"
          content="https://com-sec.io/images/blog-images/rolling-out-ai-the-right-way-part-5.png"
        />

        <meta
          property="og:url"
          content="https://com-sec.io/blog/rolling-out-ai-the-right-way-part-5"
        />

        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Com-Sec" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:author" content="Farbod Fakhrai" />
        <meta property="article:published_time" content="2026-07-09T00:00:00Z" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comsec" />

        <meta
          name="twitter:title"
          content="Rolling Out AI the Right Way — Part 5: Common Mistakes and the Path Forward"
        />

        <meta
          name="twitter:description"
          content="The mistakes I see most often when companies roll out AI, and how to avoid them."
        />

        <meta
          name="twitter:image"
          content="https://com-sec.io/images/blog-images/rolling-out-ai-the-right-way-part-5.png"
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
                Part 5 of 5
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-balance">
              Rolling Out AI the Right Way: A 5-Part Playbook for Companies That Can't Afford to Get It Wrong
            </h1>

            <p className="text-xl text-sky-100 mb-8 leading-relaxed">
              Part 5: Common Mistakes and the Path Forward
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sky-200">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>July 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>6 min read</span>
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
                src="/images/blog-images/rolling-out-ai-the-right-way-part-5.png"
                alt="Rolling Out AI the Right Way Part 5 - Common Mistakes and the Path Forward"
                className="rounded-xl shadow-md max-w-xl w-full h-auto"
              />
            </div>

            <div className="prose prose-lg max-w-none">

              {/* INTRO */}
              <section className="mb-10">
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    After walking through governance fundamentals, agentic tool risks, data handling intricacies, and the rollout playbook, let's close with the mistakes I see most often and how to avoid them.
                  </p>
                </div>
              </section>

              {/* MISTAKES */}
              {mistakes.map((mistake, index) => (
                <section className="mb-10" key={index}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                    {mistake.title}
                  </h2>
                  <div className="space-y-5">
                    {mistake.body.map((paragraph, pIndex) => (
                      <p
                        key={pIndex}
                        className="text-gray-700 leading-relaxed text-lg"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}

              {/* PATH FORWARD */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  The path forward
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    AI governance doesn't have to be heavy. For most companies, it's an inventory, a policy, the right technical configuration, a training session, and a quarterly review. That's a few days of work, not a six-month project.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The companies that build this discipline now will be in a much stronger position with customers, auditors, and regulators. The ones that wait will eventually have to do it anyway, probably under less favorable circumstances.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    If you're figuring out where to start, that's exactly the kind of problem we help solve.
                  </p>
                </div>
              </section>

              {/* SERIES COMPLETE */}
              <section className="mb-10">
                <div className="bg-slate-900 rounded-xl p-8 text-white flex items-start gap-4">
                  <div className="text-3xl mt-1">✓</div>
                  <div>
                    <p className="text-sm font-semibold text-sky-300 uppercase tracking-wide mb-2">
                      Series complete
                    </p>
                    <p className="text-lg text-slate-100 leading-relaxed">
                      That wraps up the 5-part playbook. Catch up on any part you missed below, or reach out if you're ready to put this into practice.
                    </p>
                  </div>
                </div>
              </section>

            </div>
          </div>
        </article>

        {/* AUTHOR */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* CTA */}
        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-sky-900 via-blue-800 to-slate-900 rounded-xl px-8 py-10 text-white text-center shadow-lg">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to build your AI rollout program?
              </h3>
              <p className="text-sky-200 text-lg mb-6 max-w-xl mx-auto leading-relaxed">
                Com-Sec helps startups and growth-stage companies build practical AI governance programs — from inventory to acceptable use policies, compliance configuration, and ongoing monitoring.
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
