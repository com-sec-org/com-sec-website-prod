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

export default function FireworksAiBreach() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "One Breach, Three Victims: The Fireworks AI Supply Chain Attack",
      text: "An attacker broke into an AI inference platform, and within weeks three companies were hit in three different ways. Here's what startups building on AI should take from it.",
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
      title: "Why Security Awareness Training Matters for Every Employee",
      excerpt:
        "Security awareness training is not going to stop breaches. But it still matters. Here's why, and how to do it in a way that actually provides value.",
      link: "/blog/why-security-awareness-training-matters-for-every-employee",
      category: "Security Awareness",
      emoji: "🎯",
    },
    {
      title: "What Your Cyber Insurance Carrier Is About to Ask You (And Why You Should Care)",
      excerpt:
        "Cyber insurance used to be simple. That era is over. Here's what carriers are actually asking now, and what it means for your premium.",
      link: "/blog/what-your-cyber-insurance-carrier-is-about-to-ask-you-and-why-you-should-care",
      category: "Risk Management",
      emoji: "🛡️",
    },
    {
      title: "Zero Trust for Startups: What It Actually Means (Without the Enterprise BS)",
      excerpt:
        "Zero trust has become one of those terms that means everything and nothing. It doesn't require a seven-figure budget and a team of 20.",
      link: "/blog/zero-trust-for-startups-what-it-actually-means-without-the-enterprise-bs",
      category: "Security Architecture",
      emoji: "🔐",
    },
  ];

  return (
    <>
      <Helmet>
        <title>One Breach, Three Victims: The Fireworks AI Supply Chain Attack</title>

        <meta
          name="description"
          content="One breach at AI inference provider Fireworks AI hit Notion, Cursor, and Railway in three different ways. Here's how to manage your AI supply chain risk."
        />

        <link
          rel="canonical"
          href="https://com-sec.io/blog/one-breach-three-victims-the-fireworks-ai-supply-chain-attack"
        />

        <meta
          property="og:title"
          content="One Breach, Three Victims: The Fireworks AI Supply Chain Attack"
        />

        <meta
          property="og:description"
          content="An attacker broke into an AI inference platform, and within weeks three companies were hit in three different ways. Here's what startups building on AI should take from it."
        />

        <meta
          property="og:image"
          content="https://com-sec.io/images/blog-images/one-breach-three-victims-the-fireworks-ai-supply-chain-attack.png"
        />

        <meta
          property="og:url"
          content="https://com-sec.io/blog/one-breach-three-victims-the-fireworks-ai-supply-chain-attack"
        />

        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Com-Sec" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:author" content="Farbod Fakhrai" />
        <meta property="article:published_time" content="2026-11-24T00:00:00Z" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comsec" />

        <meta
          name="twitter:title"
          content="One Breach, Three Victims: The Fireworks AI Supply Chain Attack"
        />

        <meta
          name="twitter:description"
          content="An attacker broke into an AI inference platform, and within weeks three companies were hit in three different ways. Here's what startups building on AI should take from it."
        />

        <meta
          name="twitter:image"
          content="https://com-sec.io/images/blog-images/one-breach-three-victims-the-fireworks-ai-supply-chain-attack.png"
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
                Threat Landscape
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-balance">
              One Breach, Three Victims: The Fireworks AI Supply Chain Attack
            </h1>

            <p className="text-xl text-sky-100 mb-8 leading-relaxed">
              An attacker broke into an AI inference platform, and within weeks three companies were hit in three different ways. Here's what startups building on AI should take from it.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sky-200">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>November 24, 2026</span>
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
                src="/images/blog-images/one-breach-three-victims-the-fireworks-ai-supply-chain-attack.png"
                alt="One Breach, Three Victims: The Fireworks AI Supply Chain Attack"
                className="rounded-xl shadow-md max-w-xl w-full h-auto"
              />
            </div>

            <div className="prose prose-lg max-w-none">

              {/* INTRO */}
              <section className="mb-10">
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    In October 2026, an attacker broke into Fireworks AI, an inference platform that runs AI models for other companies. Within weeks, the damage had spread to three separate organizations, each hit in a completely different way.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    This is what a modern supply chain attack looks like. And if your startup relies on AI tools, which most do now, this is exactly the kind of risk you need to understand.
                  </p>
                </div>
              </section>

              {/* WHAT HAPPENED */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  WHAT HAPPENED AT FIREWORKS AI
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Fireworks AI provides inference services, meaning other companies send data to Fireworks, and Fireworks runs AI models on that data and sends the results back. Their customers include some of the biggest names in productivity software and developer tools.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    The attack happened in two stages.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    On October 6, Fireworks identified unauthorized activity in their systems. An attacker used internal credentials to access environment variables in evaluation jobs for a limited number of customer accounts. API keys and tokens were captured.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Then on October 23, a third-party cloud provider hosting Fireworks' development machines had its own security incident. The attacker used that access to reach Fireworks' dev environment and ran unauthorized workloads that exposed additional customer data, including resource metadata, billing information, and incomplete model weights and datasets.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Two breaches. Two different entry points. Both leading back to the same attacker.
                  </p>
                </div>
              </section>

              {/* VICTIM 1 */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  VICTIM 1: NOTION
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Notion uses Fireworks to run some of its AI features. After the breach, Notion discovered that AI chat transcripts from its "Insights" feature were sitting on Fireworks' servers despite a contractual commitment to zero data retention.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Less than 1% of Notion workspaces were affected, but the exposed data included conversations that Notion users had with Notion AI. For most affected workspaces, the chats were unattributable, meaning they weren't labeled with who wrote them or which workspace they came from. But that's cold comfort when your team's AI conversations are in someone else's breach disclosure.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Notion cut traffic to Fireworks within a day of being notified, deleted all data from the vendor's systems, and halted training runs. They gave affected workspace owners a way to review what was exposed.
                  </p>
                </div>
              </section>

              {/* VICTIM 2 */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  VICTIM 2: CURSOR
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Cursor, the AI-powered code editor, was hit differently. A stolen access key that Fireworks had issued to Cursor was exposed in the breach. An attacker used that key to publish a trojanized Claude Code extension on Cursor's marketplace. The fake extension tried to install a persistent SSH backdoor on developers' machines.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    This wasn't a data exposure. This was an active attack on developers through a trusted marketplace, made possible by a stolen credential from a vendor breach.
                  </p>
                </div>
              </section>

              {/* VICTIM 3 */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  VICTIM 3: RAILWAY
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Railway, a cloud platform used by developers, suffered yet another type of damage. While Railway's breach had its own separate entry point (attackers exploited a vulnerability in Railway's build infrastructure on October 20), the broader pattern is the same: AI provider credentials were the target.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Attackers decrypted environment variables from roughly 100,000 workspaces and racked up approximately $740,000 in fraudulent AI usage charges. Customers found their keys being used to answer coding questions and run training tasks they never started. Railway is covering the charges itself.
                  </p>
                </div>
              </section>

              {/* WHY THIS MATTERS */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  WHY THIS MATTERS FOR YOUR STARTUP
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Three companies. Three completely different types of damage:
                  </p>

                  <ol className="list-decimal pl-6 space-y-3 text-gray-700 text-lg">
                    <li>Customer data exposure (Notion)</li>
                    <li>Supply chain malware through a trusted marketplace (Cursor)</li>
                    <li>Financial fraud through stolen credentials (Railway)</li>
                  </ol>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    All connected to the same ecosystem of AI infrastructure providers.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    This is the reality of building on AI tools in 2026. Your company doesn't just depend on the AI product you're using. You depend on the inference provider behind it, the cloud provider behind them, and every integration point in between.
                  </p>
                </div>
              </section>

              {/* WHAT YOU SHOULD DO */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  WHAT YOU SHOULD DO
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    <strong>Map your AI supply chain.</strong> Most startups can name the AI products they use but can't name the companies that actually run the models. Ask your vendors: who provides your inference? Where does our data go? What happens to it after processing?
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <strong>Don't rely on contracts alone.</strong> Fireworks had contractually committed to zero data retention for Notion's data. The data was there anyway. Contracts set expectations. Verification confirms reality. Ask for{" "}
                    <Link
                      to="/soc2-readiness"
                      className="text-sky-700 font-semibold hover:underline"
                    >
                      SOC 2 reports
                    </Link>
                    , architecture documentation, and evidence of data handling practices.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <strong>Rotate credentials regularly.</strong> Both the Cursor and Railway incidents involved stolen API keys and tokens. If your team stores AI provider credentials in environment variables, those credentials should be rotated on a schedule, not just when something goes wrong.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <strong>Audit your marketplace extensions.</strong> The Cursor incident shows that even trusted marketplaces can be compromised. Review what extensions and plugins your development team has installed. Verify publishers. Be skeptical of new or recently updated extensions from unfamiliar sources.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <strong>Have a vendor incident response plan.</strong> When one of your vendors gets breached, do you know what to do? Who reviews the disclosure? Who decides whether to cut traffic? Who notifies your customers if their data was involved? Write this down before you need it.
                  </p>
                </div>
              </section>

              {/* BIGGER PICTURE */}
              <section className="mb-10">
                <div className="bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200 rounded-xl p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    THE BIGGER PICTURE
                  </h2>

                  <div className="space-y-4">
                    <p className="text-gray-800 leading-relaxed text-lg">
                      The AI supply chain is young, fast-moving, and largely untested from a security perspective. Companies are integrating AI tools at a pace that security teams can't match. The result is a web of dependencies that most organizations don't fully understand until something breaks.
                    </p>

                    <p className="text-gray-800 leading-relaxed text-lg">
                      The Fireworks breach didn't just affect Fireworks. It cascaded through the companies that depended on them, and then to the customers of those companies. That's the nature of supply chain risk. Your vendor's problem becomes your problem, and your problem becomes your customer's problem.
                    </p>

                    <p className="text-gray-800 leading-relaxed text-lg">
                      If you're building on AI tools, the question isn't whether one of your vendors will have a security incident. It's whether you'll be ready when it happens.
                    </p>
                  </div>
                </div>
              </section>

              {/* AUTHOR BIO */}
              <section className="mb-4 border-t border-gray-200 pt-6">
                <p className="text-gray-600 leading-relaxed">
                  Farbod Fakhrai is the founder of{" "}
                  <a
                    href="https://com-sec.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-700 font-semibold hover:underline"
                  >
                    Com-Sec
                  </a>
                  , a cybersecurity and compliance consulting firm for startups and growth-stage companies.{" "}
                  <a
                    href="https://com-sec.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-700 hover:underline"
                  >
                    com-sec.io
                  </a>
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
                Do you know who runs the AI behind your tools?
              </h3>

              <p className="text-sky-200 text-lg mb-6 max-w-xl mx-auto leading-relaxed">
                Com-Sec helps startups map their AI supply chain, assess vendor risk, and build the response plan before an incident.
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
