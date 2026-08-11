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

export default function ImplementingAiGovernanceModelPart5() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "Implementing an AI Governance Model — Part 5",
      text: "Part 5: Keeping It Running: Ongoing AI Governance Operations. How to operationalize your AI governance program so it doesn't decay.",
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
      title: "Implementing an AI Governance Model — Part 3: Technical Controls That Make Your Policy Enforceable",
      excerpt:
        "Part 3: A policy without technical controls is a suggestion. How to enforce your AI policy through identity and access, MDM, network and DLP, platform configuration, and logging.",
      link: "/blog/implementing-an-ai-governance-model-part-3",
      category: "AI Governance",
      emoji: "🔧",
    },
    {
      title: "Implementing an AI Governance Model — Part 4: Vendor AI Governance and Third-Party Risk",
      excerpt:
        "Part 4: Your AI governance program doesn't stop at the tools your employees use directly. It extends to every vendor in your stack that uses AI.",
      link: "/blog/implementing-an-ai-governance-model-part-4",
      category: "AI Governance",
      emoji: "🤝",
    },
  ];

  const reviewItems = [
    {
      title: "Tool inventory",
      body: "Has anything been added? Are there new AI tools in use that haven't been evaluated? Has any approved tool changed its data handling, BAA coverage, or capabilities? Run a quick resurvey or check your SSO logs.",
    },
    {
      title: "Policy currency",
      body: "Does the acceptable use policy still reflect reality? Are the approved tools and tiers still accurate? Have any new regulations or customer requirements emerged that require policy updates?",
    },
    {
      title: "Incident review",
      body: "Were there any AI-related incidents, near-misses, or policy violations? What happened, what was the root cause, and what changed as a result?",
    },
    {
      title: "Vendor AI changes",
      body: "Have any of your vendors introduced new AI features or changed how they process your data with AI? This is increasingly common and often announced in changelog updates that nobody reads.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Implementing an AI Governance Model — Part 5: Keeping It Running: Ongoing AI Governance Operations
        </title>

        <meta
          name="description"
          content="Part 5: Keeping It Running. Building an AI governance program takes a few weeks — keeping it running is the actual work. Here's how to operationalize it so it doesn't decay."
        />

        <link
          rel="canonical"
          href="https://com-sec.io/blog/implementing-an-ai-governance-model-part-5"
        />

        <meta
          property="og:title"
          content="Implementing an AI Governance Model — Part 5: Keeping It Running: Ongoing AI Governance Operations"
        />

        <meta
          property="og:description"
          content="Building an AI governance program takes a few weeks. Keeping it running is the actual work. Here's how to operationalize it so it doesn't decay."
        />

        <meta
          property="og:image"
          content="https://com-sec.io/images/blog-images/implementing-an-ai-governance-model-part-5.png"
        />

        <meta
          property="og:url"
          content="https://com-sec.io/blog/implementing-an-ai-governance-model-part-5"
        />

        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Com-Sec" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:author" content="Farbod Fakhrai" />
        <meta property="article:published_time" content="2026-08-01T00:00:00Z" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comsec" />

        <meta
          name="twitter:title"
          content="Implementing an AI Governance Model — Part 5: Keeping It Running"
        />

        <meta
          name="twitter:description"
          content="Building an AI governance program takes a few weeks. Keeping it running is the actual work. Here's how to operationalize it so it doesn't decay."
        />

        <meta
          name="twitter:image"
          content="https://com-sec.io/images/blog-images/implementing-an-ai-governance-model-part-5.png"
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
              Implementing an AI Governance Model
            </h1>

            <p className="text-xl text-sky-100 mb-8 leading-relaxed">
              Part 5: Keeping It Running: Ongoing AI Governance Operations
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sky-200">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>August 1, 2026</span>
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
                src="/images/blog-images/implementing-an-ai-governance-model-part-5.png"
                alt="Implementing an AI Governance Model Part 5 - Keeping It Running: Ongoing AI Governance Operations"
                className="rounded-xl shadow-md max-w-xl w-full h-auto"
              />
            </div>

            <div className="prose prose-lg max-w-none">

              {/* INTRO */}
              <section className="mb-10">
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Building an AI governance program takes a few weeks. Keeping it running is the actual work. Here's how to operationalize it so it doesn't decay.
                  </p>
                </div>
              </section>

              {/* QUARTERLY REVIEW */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  Quarterly review cycle
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Every quarter, review four things:
                  </p>
                  <div className="space-y-4">
                    {reviewItems.map((item, index) => (
                      <div
                        key={index}
                        className="bg-sky-50 border-l-4 border-sky-500 rounded-r-lg p-4"
                      >
                        <p className="text-gray-800 text-lg">
                          <b>{item.title}.</b> {item.body}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* OWNERSHIP */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  Assign ownership
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Someone owns this program. A vCISO, a security lead, a compliance manager. Whoever it is, they need time allocated to AI governance specifically. It's not a full-time job, but it's a real responsibility that requires 2 to 4 hours per week: processing tool approval requests, monitoring for shadow AI, coordinating with vendors, and keeping the inventory and policy current.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    If nobody owns it, entropy takes over and within 6 months your inventory is outdated, your policy doesn't reflect what people are actually using, and your enterprise customers get answers to AI governance questions that don't hold up.
                  </p>
                </div>
              </section>

              {/* TRAINING CADENCE */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  Training cadence
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Initial training during rollout. Refresher during onboarding for new hires. Annual refresher for the full company. Ad hoc updates when something significant changes: a new tool approved, new restrictions, a policy update, a regulatory change.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Keep it short. 15 to 30 minutes. Focus on what changed and why. People tune out long training sessions.
                  </p>
                </div>
              </section>

              {/* AUDITS */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  Preparing for audits
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    SOC 2 auditors are asking about AI. ISO 27001 auditors are asking about AI. HITRUST assessors are asking about AI. Enterprise customers are adding AI-specific sections to security questionnaires.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Have your evidence ready: AI tool inventory, acceptable use policy, data classification for AI, training records, vendor AI assessments, incident logs, and quarterly review documentation. If you've been running the program as described in this series, you already have all of it.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    For companies pursuing ISO 42001 (the AI management system standard), the governance program we've described maps directly to the standard's requirements. You're not starting from zero.
                  </p>
                </div>
              </section>

              {/* REGULATION */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  Preparing for regulation
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The EU AI Act is in effect. State-level AI laws are proliferating in the US. Sector-specific AI guidance is coming from HHS, the FDA, financial regulators, and others. The regulatory landscape is moving fast and it's moving toward more oversight, not less.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The companies that have a documented, operational AI governance program will adapt to new requirements incrementally. The ones that don't will face expensive, rushed compliance projects when a regulation hits or a customer demands it.
                  </p>
                </div>
              </section>

              {/* BOTTOM LINE */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  The bottom line
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    AI governance is not a project with an end date. It's an operational practice, like vulnerability management or access reviews. Build it once, run it continuously, and improve it as the technology and regulatory landscape evolve.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The companies that build this muscle now will be in a fundamentally stronger position than the ones that wait.
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
                      That wraps up the 5-part series on implementing an AI governance model. Catch up on any part you missed below, or reach out if you're ready to put this into practice.
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
                Ready to build an AI governance program that runs itself?
              </h3>
              <p className="text-sky-200 text-lg mb-6 max-w-xl mx-auto leading-relaxed">
                Com-Sec helps startups and growth-stage companies stand up AI governance programs and keep them operational — inventory, policy, technical controls, vendor risk, and quarterly reviews.
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
