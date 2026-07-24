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

export default function ImplementingAnAiGovernanceModelPart3() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "Implementing an AI Governance Model — Part 3: Technical Controls That Make Your Policy Enforceable",
      text: "Part 3: A policy without technical controls is a suggestion. Here's how to make it real — identity, MDM, network, platform configuration, and logging.",
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
        "Most AI policies are too vague to enforce or too long to read. A practical, four-section structure for a policy your team will actually use.",
      link: "/blog/implementing-an-ai-governance-model-part-2",
      category: "AI Governance",
      emoji: "📋",
    },
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
  ];

  return (
    <>
      <Helmet>
        <title>
          Implementing an AI Governance Model — Part 3: Technical Controls That Make Your Policy Enforceable
        </title>

        <meta
          name="description"
          content="Part 3: A policy without technical controls is a suggestion. How to enforce your AI policy through identity and access, MDM, network and DLP, platform configuration, and logging."
        />

        <link
          rel="canonical"
          href="https://com-sec.io/blog/implementing-an-ai-governance-model-part-3"
        />

        <meta
          property="og:title"
          content="Implementing an AI Governance Model — Part 3: Technical Controls That Make Your Policy Enforceable"
        />

        <meta
          property="og:description"
          content="A policy without technical controls is a suggestion. Here's how to make it real."
        />

        <meta
          property="og:image"
          content="https://com-sec.io/images/blog-images/implementing-an-ai-governance-model-part-3.png"
        />

        <meta
          property="og:url"
          content="https://com-sec.io/blog/implementing-an-ai-governance-model-part-3"
        />

        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Com-Sec" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comsec" />

        <meta
          name="twitter:title"
          content="Implementing an AI Governance Model — Part 3: Technical Controls That Make Your Policy Enforceable"
        />

        <meta
          name="twitter:description"
          content="A policy without technical controls is a suggestion. Here's how to make it real."
        />

        <meta
          name="twitter:image"
          content="https://com-sec.io/images/blog-images/implementing-an-ai-governance-model-part-3.png"
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
              Implementing an AI Governance Model: A 5-Part Guide for Companies That Use AI
            </h1>

            <p className="text-xl text-sky-100 mb-8 leading-relaxed">
              Part 3: Technical Controls That Make Your Policy Enforceable
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sky-200">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>July 2026</span>
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
                src="/images/blog-images/implementing-an-ai-governance-model-part-3.png"
                alt="Implementing an AI Governance Model Part 3 - Technical Controls That Make Your Policy Enforceable"
                className="rounded-xl shadow-md max-w-xl w-full h-auto"
              />
            </div>

            <div className="prose prose-lg max-w-none">

              {/* INTRO */}
              <section className="mb-10">
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    A policy without technical controls is a suggestion. Here's how to make it real.
                  </p>
                </div>
              </section>

              {/* IDENTITY AND ACCESS */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Identity and access
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    If you're using AI tools at the enterprise tier, provision them through your identity provider. SSO/SAML for every AI tool that supports it. This gives you a single point of control for who has access, and a single point of revocation when someone leaves or changes roles.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    For API-based AI usage, manage keys through a secrets manager. No API keys in source code. No shared keys across teams. Rotate keys on a schedule and when team members leave.
                  </p>
                </div>
              </section>

              {/* MDM */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  MDM and device controls
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    If you've decided that agentic tools like Cowork shouldn't run on machines with production access, enforce that through your MDM. Create device groups: machines with Cowork enabled and machines with production/admin access. Keep them separate.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Use Cowork's built-in app blocklist to prevent it from accessing specific applications (cloud consoles, infrastructure tools, sensitive internal apps). This is a configuration, not a request. Set it at the admin level.
                  </p>
                </div>
              </section>

              {/* NETWORK AND DLP */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Network and DLP
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    If your environment supports it, use DNS filtering or a CASB to block unauthorized AI tools at the network level. If marketing signs up for a new AI writing tool that's not on the approved list, the block happens before data ever leaves your network.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    For companies handling PHI or sensitive data, consider a DLP solution that can inspect outbound traffic to AI APIs and flag or block transmissions containing sensitive patterns (SSNs, MRNs, credit card numbers). This isn't foolproof, but it adds a layer.
                  </p>
                </div>
              </section>

              {/* PLATFORM CONFIGURATION */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Platform configuration
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    For each approved AI tool, configure the enterprise settings correctly before anyone starts using it:
                  </p>
                  <div className="space-y-4">
                    <div className="bg-sky-50 border-l-4 border-sky-500 rounded-r-lg p-4">
                      <p className="text-gray-800 text-lg"><b>Claude Enterprise:</b> enable HIPAA mode in admin settings if you're processing PHI. Confirm ZDR is active if required. Disable features not covered under your BAA (web search, beta features).</p>
                    </div>
                    <div className="bg-sky-50 border-l-4 border-sky-500 rounded-r-lg p-4">
                      <p className="text-gray-800 text-lg"><b>Cloud AI services (Bedrock, Vertex):</b> ensure the AI services are included in your cloud BAA. Configure VPC endpoints so data doesn't traverse the public internet. Enable logging for all AI API calls.</p>
                    </div>
                    <div className="bg-sky-50 border-l-4 border-sky-500 rounded-r-lg p-4">
                      <p className="text-gray-800 text-lg"><b>GRC platform:</b> add your AI tools to your vendor register. Map AI-related controls in your compliance framework. Set up evidence collection for AI governance controls.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* LOGGING AND MONITORING */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Logging and monitoring
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Log every AI API call your company makes. At minimum: timestamp, user, model, input token count (not the input itself if it contains sensitive data), and output token count. This gives you an audit trail without storing the actual prompts and completions.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    If your AI platform supports it, enable admin audit logs. Claude Enterprise provides organization-level logging. Use it.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Set up alerts for anomalies: unusual volume from a single user, API calls outside business hours, calls to models that aren't on your approved list.
                  </p>
                </div>
              </section>

              {/* THE PRINCIPLE */}
              <section className="mb-10">
                <div className="bg-slate-900 rounded-xl p-8 text-white flex items-start gap-4">
                  <div className="text-3xl mt-1">→</div>
                  <div>
                    <p className="text-sm font-semibold text-sky-300 uppercase tracking-wide mb-2">
                      The principle
                    </p>
                    <p className="text-lg text-slate-100 leading-relaxed">
                      Every rule in your policy should have a corresponding technical control. "Don't put PHI into consumer AI tools" should be backed by SSO provisioning that only gives access to the enterprise tier, plus network controls that block the consumer domains. "Agentic tools can't access production systems" should be backed by device segmentation and app blocklists. Policy tells people what to do. Controls make sure it happens.
                    </p>
                  </div>
                </div>
              </section>

              {/* PART 4 TEASER */}
              <section className="mb-10">
                <div className="bg-sky-50 border-l-4 border-sky-500 rounded-r-lg p-6">
                  <p className="text-sm font-semibold text-sky-700 uppercase tracking-wide mb-2">
                    Up next in the series
                  </p>
                  <p className="text-gray-800 text-lg leading-relaxed">
                    In Part 4, we'll cover the vendor and third-party side of AI governance.
                  </p>
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
                Need help enforcing your AI policy?
              </h3>
              <p className="text-sky-200 text-lg mb-6 max-w-xl mx-auto leading-relaxed">
                Com-Sec helps startups and growth-stage companies configure the identity, device, network, and logging controls that turn an AI policy from a document into a real program.
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
