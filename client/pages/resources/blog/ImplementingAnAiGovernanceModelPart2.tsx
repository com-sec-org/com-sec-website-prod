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

export default function ImplementingAnAiGovernanceModelPart2() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "Implementing an AI Governance Model — Part 2: Writing an AI Policy That People Actually Follow",
      text: "Part 2: Most AI policies are either too vague to enforce or too long to read. Here's how to write one your team will actually use.",
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
      title: "Rolling Out AI the Right Way — Part 4",
      excerpt:
        "A practical 5-step playbook for rolling out AI at a company that takes security and compliance seriously.",
      link: "/blog/rolling-out-ai-the-right-way-part-4",
      category: "AI Governance",
      emoji: "🛠️",
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
      title: "SOC 2 Is Simpler Than You Think",
      excerpt:
        "SOC 2 isn't a certification or a pass/fail test — it's a report. Here's what it actually is.",
      link: "/blog/soc-2-is-simpler-than-you-think",
      category: "Founder Lessons",
      emoji: "📄",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Implementing an AI Governance Model — Part 2: Writing an AI Policy That People Actually Follow
        </title>

        <meta
          name="description"
          content="Part 2: Most AI policies are too vague to enforce or too long to read. A practical, four-section structure for an AI acceptable use policy your team will actually follow."
        />

        <link
          rel="canonical"
          href="https://com-sec.io/blog/implementing-an-ai-governance-model-part-2"
        />

        <meta
          property="og:title"
          content="Implementing an AI Governance Model — Part 2: Writing an AI Policy That People Actually Follow"
        />

        <meta
          property="og:description"
          content="A practical, four-section structure for an AI acceptable use policy your team will actually follow."
        />

        <meta
          property="og:image"
          content="https://com-sec.io/images/blog-images/implementing-an-ai-governance-model-part-2.png"
        />

        <meta
          property="og:url"
          content="https://com-sec.io/blog/implementing-an-ai-governance-model-part-2"
        />

        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Com-Sec" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comsec" />

        <meta
          name="twitter:title"
          content="Implementing an AI Governance Model — Part 2: Writing an AI Policy That People Actually Follow"
        />

        <meta
          name="twitter:description"
          content="A practical, four-section structure for an AI acceptable use policy your team will actually follow."
        />

        <meta
          name="twitter:image"
          content="https://com-sec.io/images/blog-images/implementing-an-ai-governance-model-part-2.png"
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
                Part 2 of 5
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-balance">
              Implementing an AI Governance Model: A 5-Part Guide for Companies That Use AI
            </h1>

            <p className="text-xl text-sky-100 mb-8 leading-relaxed">
              Part 2: Writing an AI Policy That People Actually Follow
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
                src="/images/blog-images/implementing-an-ai-governance-model-part-2.png"
                alt="Implementing an AI Governance Model Part 2 - Writing an AI Policy That People Actually Follow"
                className="rounded-xl shadow-md max-w-xl w-full h-auto"
              />
            </div>

            <div className="prose prose-lg max-w-none">

              {/* INTRO */}
              <section className="mb-10">
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Most AI policies I've seen are either too vague to enforce or too long to read. A good AI policy is short, specific, and structured so your team can actually use it.
                  </p>
                </div>
              </section>

              {/* THE STRUCTURE */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  The Structure
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Your AI acceptable use policy needs four sections. That's it.
                  </p>

                  <div>
                    <h3 className="font-bold italic text-gray-900 text-lg mb-2">
                      Section 1: Approved tools and tiers
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      List every AI tool that's sanctioned for use at your company, the specific plan or tier that's approved, and who's authorized to use it. Be explicit. "Claude Enterprise with HIPAA mode enabled" is an approved tool. "Claude" is not specific enough.
                    </p>
                  </div>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Include a clear statement: any AI tool not on this list requires approval before use. Give people a way to request approval (a Slack channel, a form, an email address). Make it easy or they'll skip it.
                  </p>

                  <div>
                    <h3 className="font-bold italic text-gray-900 text-lg mb-2">
                      Section 2: Data classification rules
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Define what can and cannot go into AI tools. Use your existing data classification if you have one. If you don't, create a simple one: Public data is fine for any approved tool. Internal data needs approved enterprise tools only. Confidential data (customer data, financial data, IP) needs approved enterprise tools with appropriate agreements. Restricted data (PHI, PII, credentials, secrets) needs approved tools with BAA/DPA and appropriate technical controls, and never belongs in consumer-grade tools. One sentence per category. No ambiguity.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold italic text-gray-900 text-lg mb-2">
                      Section 3: Human oversight requirements
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Any AI-generated output that goes to a customer, goes into a product, influences a clinical or business decision, or gets published externally requires human review before it's final. No exceptions. This isn't about not trusting AI. It's about accountability. When something goes wrong (and it will), you need a human who reviewed and approved the output.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold italic text-gray-900 text-lg mb-2">
                      Section 4: Agentic tool rules
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      For tools like Cowork, Claude Code, and any AI that can take actions (execute code, modify files, access systems, browse the web), define: who can use them, the default mode ("ask before acting" for anyone with privileged access), what systems and applications are blocked, and what approval is needed before using agentic AI on production systems or with sensitive data.
                    </p>
                  </div>
                </div>
              </section>

              {/* HOW TO ROLL IT OUT */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  How To Roll It Out
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Don't email a PDF and hope for the best.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Do a 30-minute all-hands or team meeting. Walk through each section. Give real examples of what's allowed and what's not. Show the approved tools list. Explain why the rules exist (customer trust, regulatory requirements, data protection) without being preachy about it.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Make the policy findable. Pin it in Slack. Put it in your wiki or handbook. Link it from your onboarding checklist.
                  </p>
                </div>
              </section>

              {/* KEEP IT ALIVE */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Keep It Alive
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Review the policy quarterly. AI tools change fast. New tools appear, existing tools add capabilities, BAA coverage shifts, your business needs evolve. A policy that's 6 months out of date is a policy that nobody trusts.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Assign an owner. Someone needs to be responsible for maintaining the approved tools list, processing approval requests, and updating the policy when things change.
                  </p>
                </div>
              </section>

              {/* PART 3 TEASER */}
              <section className="mb-10">
                <div className="bg-slate-900 rounded-xl p-8 text-white flex items-start gap-4">
                  <div className="text-3xl mt-1">→</div>
                  <div>
                    <p className="text-sm font-semibold text-sky-300 uppercase tracking-wide mb-2">
                      Up next in the series
                    </p>
                    <p className="text-lg text-slate-100 leading-relaxed">
                      In Part 3, we'll set up the technical controls that enforce what the policy says.
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
                Need help writing your AI policy?
              </h3>
              <p className="text-sky-200 text-lg mb-6 max-w-xl mx-auto leading-relaxed">
                Com-Sec helps startups and growth-stage companies write AI acceptable use policies that are short, specific, and actually get followed.
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
