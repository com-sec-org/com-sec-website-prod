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

export default function RollingOutAiRightWayPart4() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "Rolling Out AI the Right Way — Part 4",
      text: "Part 4: The AI Rollout Playbook. A practical playbook for rolling out AI at a company that takes security and compliance seriously.",
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
      title: "Rolling Out AI the Right Way — Part 3",
      excerpt:
        "Part 3: BAAs, Zero Data Retention, and the Data Layer You Need to Understand.",
      link: "/blog/rolling-out-ai-the-right-way-part-3",
      category: "AI Governance",
      emoji: "🔐",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Rolling Out AI the Right Way — Part 4: The AI Rollout Playbook
        </title>

        <meta
          name="description"
          content="Part 4: The AI Rollout Playbook. A practical 5-step playbook for rolling out AI at a company that takes security and compliance seriously — from inventory to monitoring."
        />

        <link
          rel="canonical"
          href="https://com-sec.io/blog/rolling-out-ai-the-right-way-part-4"
        />

        <meta
          property="og:title"
          content="Rolling Out AI the Right Way — Part 4: The AI Rollout Playbook"
        />

        <meta
          property="og:description"
          content="Part 4: A practical 5-step playbook for rolling out AI at a company that takes security and compliance seriously."
        />

        <meta
          property="og:image"
          content="https://com-sec.io/images/blog-images/rolling-out-ai-the-right-way-part-4.png"
        />

        <meta
          property="og:url"
          content="https://com-sec.io/blog/rolling-out-ai-the-right-way-part-4"
        />

        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Com-Sec" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:author" content="Farbod Fakhrai" />
        <meta property="article:published_time" content="2026-07-02T00:00:00Z" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comsec" />

        <meta
          name="twitter:title"
          content="Rolling Out AI the Right Way — Part 4: The AI Rollout Playbook"
        />

        <meta
          name="twitter:description"
          content="Part 4: A practical 5-step playbook for rolling out AI at a company that takes security and compliance seriously."
        />

        <meta
          name="twitter:image"
          content="https://com-sec.io/images/blog-images/rolling-out-ai-the-right-way-part-4.png"
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
              Rolling Out AI the Right Way: A 5-Part Playbook for Companies That Can't Afford to Get It Wrong
            </h1>

            <p className="text-xl text-sky-100 mb-8 leading-relaxed">
              Part 4: The AI Rollout Playbook
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sky-200">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>June 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>7 min read</span>
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
                src="/images/blog-images/rolling-out-ai-the-right-way-part-4.png"
                alt="Rolling Out AI the Right Way Part 4 - The AI Rollout Playbook"
                className="rounded-xl shadow-md max-w-xl w-full h-auto"
              />
            </div>

            <div className="prose prose-lg max-w-none">

              {/* INTRO */}
              <section className="mb-10">
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    You've understood the governance need, the risks of agentic tools, and the data handling landscape. Now let's build the actual program. This is a practical playbook for rolling out AI at a company that takes security and compliance seriously.
                  </p>
                </div>
              </section>

              {/* STEP 1 */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  Step 1: Inventory what's already in use
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Before you write a single policy, find out what your team is already using. In most companies, AI adoption has been bottom-up. Individual employees have signed up for tools, connected APIs, and started building without formal approval. You can't govern what you don't know about.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Survey your team. Check expense reports for AI subscriptions. Review browser extensions and installed applications. Look at API keys in your environment. Check SSO/SAML logs for shadow SaaS.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Build a simple inventory: tool name, who's using it, what data goes into it, what plan/tier, and whether it's covered under any compliance framework.
                  </p>
                </div>
              </section>

              {/* STEP 2 */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  Step 2: Define acceptable use
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Write an AI acceptable use policy. Keep it short and enforceable. Cover:
                  </p>
                  <div className="space-y-4">
                    <div className="bg-sky-50 border-l-4 border-sky-500 rounded-r-lg p-4">
                      <p className="text-gray-800 text-lg"><b>Approved tools and tiers.</b> Specify which AI tools are sanctioned and at what plan level. "Claude Enterprise with HIPAA mode" is very different from "Claude Pro on a personal account."</p>
                    </div>
                    <div className="bg-sky-50 border-l-4 border-sky-500 rounded-r-lg p-4">
                      <p className="text-gray-800 text-lg"><b>Data classification.</b> Define what data can and cannot be entered into AI tools. Customer data, PHI, PII, source code, credentials, internal financials: draw clear lines.</p>
                    </div>
                    <div className="bg-sky-50 border-l-4 border-sky-500 rounded-r-lg p-4">
                      <p className="text-gray-800 text-lg"><b>Human oversight requirements.</b> Any AI-generated output that affects a customer, goes into a product, or is used for a business decision needs human review before it's final.</p>
                    </div>
                    <div className="bg-sky-50 border-l-4 border-sky-500 rounded-r-lg p-4">
                      <p className="text-gray-800 text-lg"><b>Agentic tool restrictions.</b> For tools like Cowork and Claude Code, define who can use them, on what machines, and in what mode. "Ask before acting" should be the default for any employee with privileged access.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* STEP 3 */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  Step 3: Configure for compliance
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    If you're in a regulated industry, get the technical configuration right before you roll out:
                  </p>
                  <div className="space-y-4">
                    <div className="bg-sky-50 border-l-4 border-sky-500 rounded-r-lg p-4">
                      <p className="text-gray-800 text-lg"><b>Sign the right agreements.</b> BAA, DPA, ZDR: whatever your regulatory requirements demand, get the paperwork done before your team starts using the tools.</p>
                    </div>
                    <div className="bg-sky-50 border-l-4 border-sky-500 rounded-r-lg p-4">
                      <p className="text-gray-800 text-lg"><b>Enable the right controls.</b> If you're on Claude Enterprise, enable HIPAA mode in admin settings before anyone processes PHI. If you're using the API, confirm ZDR is active on your organization.</p>
                    </div>
                    <div className="bg-sky-50 border-l-4 border-sky-500 rounded-r-lg p-4">
                      <p className="text-gray-800 text-lg"><b>Block what shouldn't be used.</b> If certain features aren't covered under your BAA (web search, Cowork, beta features), disable them at the admin level or add them to your blocklist.</p>
                    </div>
                    <div className="bg-sky-50 border-l-4 border-sky-500 rounded-r-lg p-4">
                      <p className="text-gray-800 text-lg"><b>Choose your deployment path.</b> Direct Anthropic API with ZDR, or through a cloud provider (Bedrock, Vertex, Azure) under the cloud's compliance framework. Make a deliberate decision, don't let it happen by default.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* STEP 4 */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  Step 4: Train your team
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Most AI risk comes from well-intentioned employees who don't understand the boundaries. A 30-minute training session covering acceptable use, data handling rules, and the specific risks of agentic tools will prevent the majority of incidents.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Key points to cover: what data never goes into AI tools, how to use Cowork safely (if approved), the difference between consumer and enterprise AI products, and what to do if they're unsure whether a use case is approved.
                  </p>
                </div>
              </section>

              {/* STEP 5 */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  Step 5: Monitor and review
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    AI governance isn't a one-time setup. Review quarterly:
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
                    <li>Is the tool inventory still accurate?</li>
                    <li>Are there new AI tools in use that haven't been evaluated?</li>
                    <li>Are acceptable use policies being followed?</li>
                    <li>Have any incidents or near-misses occurred?</li>
                    <li>Have the vendors updated their data handling, BAA coverage, or feature eligibility?</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Assign ownership. Someone at your company needs to own AI governance. This can be your vCISO, your security lead, or your compliance manager. It doesn't need to be a full-time job, but it needs to be someone's responsibility.
                  </p>
                </div>
              </section>

              {/* PART 5 TEASER */}
              <section className="mb-10">
                <div className="bg-slate-900 rounded-xl p-8 text-white flex items-start gap-4">
                  <div className="text-3xl mt-1">→</div>
                  <div>
                    <p className="text-sm font-semibold text-sky-300 uppercase tracking-wide mb-2">
                      Up next in the series
                    </p>
                    <p className="text-lg text-slate-100 leading-relaxed">
                      In Part 5, we'll bring it all together with a maturity model and the common mistakes to avoid.
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
