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

export default function HipaaSecurityRuleOverhaul() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title:
        "The HIPAA Security Rule Is Getting Its Biggest Overhaul in 20 Years. Here's What's Actually Changing.",
      text: "The proposed HIPAA Security Rule overhaul is the most significant revision since the rule was written. Here's what's in it and what to do now.",
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
      title: "7 Signs Your Business Needs Fractional Security Leadership",
      excerpt:
        "There's a point where the \"we'll figure it out\" approach to security breaks. Here are the seven signs your company has outgrown it.",
      link: "/blog/7-signs-your-business-needs-fractional-security-leadership",
      category: "Security Leadership",
      emoji: "🚩",
    },
    {
      title: "How to Build a Compliance Roadmap for Your Business",
      excerpt:
        "A compliance roadmap turns an overwhelming list of requirements into a sequenced plan your team can actually execute. Here's how to build one.",
      link: "/blog/how-to-build-a-compliance-roadmap-for-your-business",
      category: "Compliance",
      emoji: "🗺️",
    },
    {
      title: "How a Fractional CISO Builds a Strong Cybersecurity Strategy",
      excerpt:
        "What building a cybersecurity strategy actually looks like in practice — from the first two weeks through ongoing execution.",
      link: "/blog/how-a-fractional-ciso-builds-a-strong-cybersecurity-strategy",
      category: "Security Leadership",
      emoji: "🛡️",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          The HIPAA Security Rule Is Getting Its Biggest Overhaul in 20 Years. Here's What's Actually Changing.
        </title>

        <meta
          name="description"
          content="The proposed HIPAA Security Rule overhaul is the most significant revision since the rule was written. Here's what's actually changing, why the delay doesn't matter as much as you think, and what to do now."
        />

        <link
          rel="canonical"
          href="https://com-sec.io/blog/the-hipaa-security-rule-is-getting-its-biggest-overhaul-in-20-years"
        />

        <meta
          property="og:title"
          content="The HIPAA Security Rule Is Getting Its Biggest Overhaul in 20 Years. Here's What's Actually Changing."
        />

        <meta
          property="og:description"
          content="The proposed HIPAA Security Rule overhaul is the most significant revision since the rule was written. Here's what's in it and what to do now."
        />

        <meta
          property="og:image"
          content="https://com-sec.io/images/blog-images/the-hipaa-security-rule-is-getting-its-biggest-overhaul-in-20-years.png"
        />

        <meta
          property="og:url"
          content="https://com-sec.io/blog/the-hipaa-security-rule-is-getting-its-biggest-overhaul-in-20-years"
        />

        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Com-Sec" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:author" content="Farbod Fakhrai" />
        <meta property="article:published_time" content="2026-10-09T00:00:00Z" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comsec" />

        <meta
          name="twitter:title"
          content="The HIPAA Security Rule Is Getting Its Biggest Overhaul in 20 Years. Here's What's Actually Changing."
        />

        <meta
          name="twitter:description"
          content="The proposed HIPAA Security Rule overhaul is the most significant revision since the rule was written. Here's what's in it and what to do now."
        />

        <meta
          name="twitter:image"
          content="https://com-sec.io/images/blog-images/the-hipaa-security-rule-is-getting-its-biggest-overhaul-in-20-years.png"
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
                Compliance
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-balance">
              The HIPAA Security Rule Is Getting Its Biggest Overhaul in 20 Years. Here's What's Actually Changing.
            </h1>

            <p className="text-xl text-sky-100 mb-8 leading-relaxed">
              Some companies are treating the delay as permission to wait. That's a mistake. Here's what's actually in the proposed rule, and what to do now.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sky-200">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>October 9, 2026</span>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>4 min read</span>
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
                src="/images/blog-images/the-hipaa-security-rule-is-getting-its-biggest-overhaul-in-20-years.png"
                alt="The HIPAA Security Rule Is Getting Its Biggest Overhaul in 20 Years. Here's What's Actually Changing."
                className="rounded-xl shadow-md max-w-xl w-full h-auto"
              />
            </div>

            <div className="prose prose-lg max-w-none">

              {/* INTRO */}
              <section className="mb-10">
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    If you're in health tech, you've probably heard that the HIPAA Security Rule update got pushed back again. The latest timeline puts the final rule at July 2027. Before that, there's a 60-day public comment period that hasn't started yet.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Some companies are treating this delay as permission to wait. That's a mistake.
                  </p>
                </div>
              </section>

              {/* WHAT'S CHANGING */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  What's actually changing
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The current <b>HIPAA Security Rule</b> was last meaningfully updated in 2013. The proposed overhaul, which HHS published in late 2024, is the most significant revision since the rule was written. Here's what's in it:
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Encryption everywhere.</b> The proposed rule eliminates the "addressable" designation for encryption. Under the current rule, encryption is technically optional if you document why you didn't implement it. Under the new rule, encryption of ePHI at rest and in transit would be required. No more risk acceptance workarounds.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Mandatory MFA.</b> Multi-factor authentication would be required for all systems that access ePHI. This is already a best practice, but a lot of health tech companies still have gaps, particularly around internal tools, staging environments, and admin accounts.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>72-hour notification to business associates.</b> Covered entities would need to notify business associates within 72 hours of activating their contingency plan. This tightens the communication loop during incidents significantly.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Annual compliance audits.</b> The proposed rule requires annual security audits, not just periodic risk assessments. There's a difference. A risk assessment identifies threats and vulnerabilities. An audit evaluates whether your controls are actually working.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Technology asset inventory.</b> You'd need to maintain a current inventory of all technology assets that create, receive, maintain, or transmit ePHI, and create a network map showing how ePHI moves through your environment.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Patch management timelines.</b> Critical vulnerabilities would need to be patched within 15 days. High-severity within 30 days. This is more aggressive than what most companies are doing today.
                  </p>
                </div>
              </section>

              {/* WHY DELAY DOESN'T MATTER */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Why the delay doesn't matter as much as you think
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The final rule might land in July 2027. Or it might slip again. But here's the thing: almost everything in this proposed update reflects what enterprise buyers, cyber insurers, and auditors are already asking for.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    If you're going through{" "}
                    <b>
                      <Link to="/hitrust" className="text-sky-700 font-semibold hover:underline">
                        HITRUST certification
                      </Link>
                    </b>
                    , you're already covering most of this. If you're selling into health systems or pharma, your security questionnaires already ask about encryption, MFA, and patching timelines. The rule is catching up to market expectations, not getting ahead of them.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Companies that wait for the rule to be finalized before acting are going to find themselves scrambling to implement changes that their competitors already have in place. And in health tech, where security posture directly affects sales cycles, that's a competitive disadvantage.
                  </p>
                </div>
              </section>

              {/* WHAT TO DO NOW */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  What to do now
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Audit your encryption posture.</b> Are you encrypting ePHI at rest in every database, backup, and file store? Are there gaps in your staging or development environments where real data might exist?
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Close your MFA gaps.</b> Not just for production systems. Admin panels, CI/CD pipelines, cloud consoles, and internal tools that touch patient data all need MFA.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Get your asset inventory current.</b> If you can't produce a complete list of systems that handle ePHI, start there. You can't protect what you can't find.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Review your patch management timeline.</b> Can you actually patch critical vulnerabilities in 15 days? If not, figure out what's slowing you down and fix the process.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Consider a gap assessment.</b> Compare your current controls against the proposed rule requirements. Identify what you're already doing, what needs work, and what needs to be built from scratch. This is easier to do now, without deadline pressure, than it will be in 2027.
                  </p>
                </div>
              </section>

              {/* BOTTOM LINE */}
              <section className="mb-10">
                <div className="bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200 rounded-xl p-8">
                  <div className="space-y-4">
                    <p className="text-gray-800 leading-relaxed text-lg">
                      The{" "}
                      <b>
                        <Link to="/hipaa" className="text-sky-700 font-semibold hover:underline">
                          HIPAA Security Rule
                        </Link>
                      </b>{" "}
                      update is coming. The timeline is uncertain, but the direction is clear. Companies that treat this as a future problem are going to pay for it later. Companies that start now will barely notice when the rule goes final.
                    </p>

                    <p className="text-gray-800 leading-relaxed text-lg">
                      If you need help with a gap assessment against the proposed rule, that's exactly the kind of thing we do at Com-Sec.
                    </p>
                  </div>
                </div>
              </section>

              {/* AUTHOR */}
              <section className="mb-12 border-t border-gray-200 pt-8">
                <p className="text-gray-600 text-base italic">
                  Farbod Fakhrai is the founder of Com-Sec, a{" "}
                  <a
                    href="https://com-sec.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-700 font-semibold hover:underline"
                  >
                    cybersecurity and compliance
                  </a>{" "}
                  consulting firm for startups and growth-stage companies.{" "}
                  <a
                    href="https://com-sec.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-700 font-semibold hover:underline"
                  >
                    com-sec.com
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
                Need a gap assessment against the proposed rule?
              </h3>

              <p className="text-sky-200 text-lg mb-6 max-w-xl mx-auto leading-relaxed">
                Com-Sec helps health tech companies get ahead of the HIPAA Security Rule overhaul before it's a deadline.
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
