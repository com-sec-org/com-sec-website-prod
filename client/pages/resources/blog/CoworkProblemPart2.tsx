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

export default function CoworkProblemPart2() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "The Cowork Problem — When AI Gets Admin Access to Your Infrastructure",
      text: "Part 2: When AI Gets Admin Access to Your Infrastructure. What Anthropic's Cowork means for your security posture.",
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
      title: "Agentic AI Governance & Lifecycle Management in Healthcare",
      excerpt:
        "How healthcare organizations can govern agentic AI systems responsibly while maintaining compliance.",
      link: "/blog/agentic-ai-governance-lifecycle-management-healthcare-2026",
      category: "AI Governance",
      emoji: "🏥",
    },
    {
      title: "What Is a vCISO? Understanding the Role and Benefits",
      excerpt:
        "Learn how vCISO services help organizations strengthen cybersecurity leadership.",
      link: "/blog/what-is-vciso-role-cybersecurity",
      category: "Cybersecurity Leadership",
      emoji: "🛡️",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          The Cowork Problem — When AI Gets Admin Access to Your Infrastructure
        </title>

        <meta
          name="description"
          content="Part 2: Anthropic's Cowork is one of the most powerful AI tools available today — and one of the most risky if deployed without thinking through the implications. Here's what security and compliance teams need to know."
        />

        <link
          rel="canonical"
          href="https://com-sec.io/blog/the-cowork-problem-when-ai-gets-admin-access"
        />

        <meta
          property="og:title"
          content="The Cowork Problem — When AI Gets Admin Access to Your Infrastructure"
        />

        <meta
          property="og:description"
          content="Part 2: When AI Gets Admin Access to Your Infrastructure. What Anthropic's Cowork means for your security posture."
        />

        <meta
          property="og:image"
          content="https://com-sec.io/images/blog-images/the-cowork-problem-when-ai-gets-admin-access.png"
        />

        <meta
          property="og:url"
          content="https://com-sec.io/blog/the-cowork-problem-when-ai-gets-admin-access"
        />

        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Com-Sec" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:author" content="Farbod Fakhrai" />
        <meta property="article:published_time" content="2026-06-22T00:00:00Z" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comsec" />

        <meta
          name="twitter:title"
          content="The Cowork Problem — When AI Gets Admin Access to Your Infrastructure"
        />

        <meta
          name="twitter:description"
          content="Part 2: When AI Gets Admin Access to Your Infrastructure. What Anthropic's Cowork means for your security posture."
        />

        <meta
          name="twitter:image"
          content="https://com-sec.io/images/blog-images/the-cowork-problem-when-ai-gets-admin-access.png"
        />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navigation />

        {/* HERO */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-rose-900 via-red-800 to-slate-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

            <Link
              to="/blogs"
              className="inline-flex items-center text-rose-200 hover:text-white transition-colors mb-8 group"
            >
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>

            <div className="flex items-center gap-4 mb-6 flex-wrap">

              <span className="bg-rose-500/20 text-rose-100 px-4 py-2 rounded-full text-sm font-medium">
                AI Governance
              </span>

              <span className="bg-white/15 text-white px-4 py-2 rounded-full text-sm font-bold border border-white/25">
                Part 2 of Series
              </span>

            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-balance">
              The Cowork Problem — When AI Gets Admin Access to Your Infrastructure
            </h1>

            <p className="text-xl text-rose-100 mb-8 leading-relaxed">
              Anthropic's Cowork is one of the most powerful AI tools available today. It's genuinely useful. It's also genuinely risky if you deploy it without thinking through the implications.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-rose-200">

              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>June 22, 2026</span>
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
                src="/images/blog-images/the-cowork-problem-when-ai-gets-admin-access.png"
                alt="The Cowork Problem — When AI Gets Admin Access to Your Infrastructure"
                className="rounded-xl shadow-md max-w-xl w-full h-auto"
              />
            </div>

            <div className="prose prose-lg max-w-none">

              {/* INTRO */}
              <section className="mb-10">
                <div className="space-y-5">

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Anthropic's Cowork is one of the most powerful AI tools available today. It brings Claude Code's agentic capabilities to the desktop: Claude can read, edit, and create files on your machine, control your browser, open applications, execute shell commands, and complete multi-step tasks autonomously. It's genuinely useful. It's also genuinely risky if you deploy it without thinking through the implications.
                  </p>

                </div>
              </section>

              {/* WHAT COWORK ACTUALLY DOES */}
              <section className="mb-10">

                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  What Cowork actually does
                </h2>

                <div className="space-y-5">

                  <p className="text-gray-700 leading-relaxed text-lg">
                    In a regular Claude chat, you type a prompt and get a response. In Cowork, Claude has permission to act. It can access your file system, interact with applications, browse the web on your behalf, and execute code in an isolated VM on your machine. It can work in parallel across multiple workstreams. You can assign it a task and walk away.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    For knowledge workers, this is transformative. For security and compliance teams, this is a new attack surface.
                  </p>

                </div>

              </section>

              {/* THE ENGINEER WITH ADMIN PRIVILEGES */}
              <section className="mb-10">

                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  The engineer with admin privileges
                </h2>

                <div className="space-y-5">

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Here's the scenario that keeps me up at night: an engineer at your company has Cowork enabled on their workstation. That engineer also has admin privileges to your AWS environment, your CI/CD pipeline, your production database, or your identity provider.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Cowork is now one prompt away from making changes to your infrastructure. Not hypothetically. The tool is designed to act autonomously. If it's running in "act without asking" mode, it can execute commands, modify files, and interact with systems without pausing for approval. A poorly worded prompt, a misunderstood instruction, or even a prompt injection from a malicious document could result in unintended changes to production systems, data exposure, or configuration drift that nobody notices until something breaks.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    This isn't a flaw in the product. It's working as designed. The risk is in how companies deploy it.
                  </p>

                </div>

              </section>

              {/* HEALTH TECH */}
              <section className="mb-10">

                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Health tech companies, pay attention
                </h2>

                <div className="space-y-5">

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Anthropic's own documentation is clear: "Do not enable Cowork for HIPAA, FedRAMP, or FSI regulated workloads." The BAA explicitly does not cover Cowork. If your employees are using Cowork on machines that have access to PHI, ePHI, or systems that process patient data, you have a compliance gap. Full stop.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    The BAA covers the Claude API (Messages API specifically) and Claude Enterprise under certain configurations. It does not cover Cowork, Claude in Chrome, Claude in Excel, or any features currently in beta. If you're a health tech company and your team is using Cowork casually, you need to evaluate that immediately.
                  </p>

                </div>

              </section>

              {/* WHAT TO DO */}
              <section className="mb-10">

                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  What to do
                </h2>

                <div className="space-y-5">

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Don't ban Cowork outright. It's a powerful tool and your team will use it regardless if you don't provide guidance. Instead:
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Define who can use it and on which machines.</b> Engineers with admin access to production infrastructure probably shouldn't have Cowork running on the same workstation, or at minimum should be using "ask before acting" mode exclusively.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Separate environments.</b> If possible, ensure that machines with Cowork enabled don't have direct access to production systems, sensitive databases, or PHI.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Use the permission controls.</b> Cowork has per-app permissions and an app blocklist. Use them. Block access to infrastructure management consoles, cloud dashboards, and any application where unintended actions could cause real damage.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Train your team.</b> Make sure anyone using Cowork understands that it's not a chatbot. It's an agent that can take real actions on their machine. The difference matters.
                  </p>

                </div>

              </section>

              {/* SUMMARY */}
              <section className="mb-10">

                <div className="bg-gradient-to-r from-rose-50 to-red-50 border border-rose-200 rounded-xl p-8">

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    The bottom line
                  </h2>

                  <div className="space-y-4">

                    <p className="text-gray-800 leading-relaxed text-lg">
                      Cowork is powerful enough that restricting it entirely would be the wrong call. But letting it run unchecked on machines with production access is equally wrong. The answer is governance: clear policies about who can use it, on which machines, with which permissions, and under which modes.
                    </p>

                    <p className="text-gray-800 leading-relaxed text-lg">
                      If you don't have those policies yet, now is the time. Your team is already using these tools. The question is whether they're using them safely.
                    </p>

                  </div>

                </div>

              </section>

              {/* PART 3 TEASER */}
              <section className="mb-10">

                <div className="bg-slate-900 rounded-xl p-8 text-white flex items-start gap-4">

                  <div className="text-3xl mt-1">→</div>

                  <div>

                    <p className="text-sm font-semibold text-rose-300 uppercase tracking-wide mb-2">
                      Up next in the series
                    </p>

                    <p className="text-lg text-slate-100 leading-relaxed">
                      In Part 3, we'll dig into the data layer: BAAs, zero data retention, and what companies actually need to understand about where their data goes when they use AI.
                    </p>

                  </div>

                </div>

              </section>

              {/* AUTHOR */}
              <section className="mb-12 border-t border-gray-200 pt-8">

                <p className="text-gray-600 text-base italic">
                  Farbod Fakhrai is the founder of{" "}
                  <a
                    href="https://com-sec.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-rose-700 font-semibold hover:underline"
                  >
                    Com-Sec
                  </a>
                  , a cybersecurity and compliance consulting firm supporting startups and growth-stage companies.
                </p>

              </section>

            </div>
          </div>
        </article>

        {/* CTA */}
        <section className="pb-16">

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="bg-gradient-to-br from-rose-900 via-red-800 to-slate-900 rounded-xl px-8 py-10 text-white text-center shadow-lg">

              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Need help governing AI tools in your organization?
              </h3>

              <p className="text-rose-200 text-lg mb-6 max-w-xl mx-auto leading-relaxed">
                Com-Sec helps startups and growth-stage companies build AI governance frameworks, manage compliance risk, and prepare for enterprise security reviews.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">

                <Link
                  to="/contact"
                  className="bg-white text-rose-900 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
                >
                  Schedule a Consultation →
                </Link>

                <Link
                  to="/services"
                  className="border border-white/40 text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-rose-900 transition"
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

                    <span className="text-xs font-medium text-rose-700 bg-rose-50 px-2 py-1 rounded-full w-fit">
                      {article.category}
                    </span>

                    <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2 group-hover:text-rose-700 transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-gray-600 text-sm flex-grow">
                      {article.excerpt}
                    </p>

                    <div className="mt-4 flex items-center text-rose-700 text-sm font-medium">
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
