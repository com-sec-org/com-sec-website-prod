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

export default function Q4ComplianceChecklist() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "Your Q4 Compliance Planning Checklist (So Q1 Isn't a Scramble)",
      text: "Every year, the same thing happens: security and compliance get pushed to January, then everything is urgent. Here's how to set up Q1 for success instead.",
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
      title: "10 Steps to Building an Effective Security Program",
      excerpt:
        "Building a security program is a sequence of practical steps that build on each other. Here's the order we use with every client.",
      link: "/blog/10-steps-to-building-an-effective-security-program",
      category: "Security Program",
      emoji: "🧩",
    },
    {
      title: "What Does a Fractional CISO Do? Roles and Responsibilities",
      excerpt:
        "The CISO title gets thrown around loosely, and 'fractional' makes it even more ambiguous. Here's what the role should actually include.",
      link: "/blog/what-does-a-fractional-ciso-do-roles-and-responsibilities",
      category: "Security Leadership",
      emoji: "🧑‍💼",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Your Q4 Compliance Planning Checklist (So Q1 Isn't a Scramble)</title>

        <meta
          name="description"
          content="Every year, security and compliance get pushed to January, then suddenly everything is urgent. Q4 is the time to set up Q1 for success. Here's how."
        />

        <link
          rel="canonical"
          href="https://com-sec.io/blog/your-q4-compliance-planning-checklist-so-q1-isnt-a-scramble"
        />

        <meta
          property="og:title"
          content="Your Q4 Compliance Planning Checklist (So Q1 Isn't a Scramble)"
        />

        <meta
          property="og:description"
          content="Every year, security and compliance get pushed to January, then suddenly everything is urgent. Q4 is the time to set up Q1 for success. Here's how."
        />

        <meta
          property="og:image"
          content="https://com-sec.io/images/blog-images/your-q4-compliance-planning-checklist-so-q1-isnt-a-scramble.png"
        />

        <meta
          property="og:url"
          content="https://com-sec.io/blog/your-q4-compliance-planning-checklist-so-q1-isnt-a-scramble"
        />

        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Com-Sec" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:author" content="Farbod Fakhrai" />
        <meta property="article:published_time" content="2026-10-12T00:00:00Z" />

        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Your Q4 Compliance Planning Checklist (So Q1 Isn't a Scramble)"
        />

        <meta
          name="twitter:description"
          content="Every year, security and compliance get pushed to January, then suddenly everything is urgent. Q4 is the time to set up Q1 for success. Here's how."
        />

        <meta
          name="twitter:image"
          content="https://com-sec.io/images/blog-images/your-q4-compliance-planning-checklist-so-q1-isnt-a-scramble.png"
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
              Your Q4 Compliance Planning Checklist (So Q1 Isn't a Scramble)
            </h1>

            <p className="text-xl text-sky-100 mb-8 leading-relaxed">
              Every year, the same thing happens. Security and compliance get pushed to January, then suddenly everything is urgent. Q4 is the time to set up Q1 for success.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sky-200">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>October 12, 2026</span>
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
                src="/images/blog-images/your-q4-compliance-planning-checklist-so-q1-isnt-a-scramble.png"
                alt="Your Q4 Compliance Planning Checklist (So Q1 Isn't a Scramble)"
                className="rounded-xl shadow-md max-w-xl w-full h-auto"
              />
            </div>

            <div className="prose prose-lg max-w-none">

              {/* INTRO */}
              <section className="mb-10">
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Every year, the same thing happens. Companies spend Q4 focused on revenue targets, year-end priorities, and planning for the next year. Security and compliance get pushed to January. Then January arrives, and suddenly everything is urgent: the{" "}
                    <b>
                      <Link to="/soc2" className="text-sky-700 font-semibold hover:underline">
                        SOC 2 audit
                      </Link>
                    </b>{" "}
                    window is approaching, the risk assessment is stale, the vendor reviews are overdue, and the budget for that security tool you needed was never approved.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Q4 is the time to set up Q1 for success. Here's how.
                  </p>
                </div>
              </section>

              {/* AUDIT TIMELINES */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Review your certifications and audit timelines
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    If you have SOC 2 Type II, when does your current audit period end? When does your next audit period start? Is your auditor confirmed? Have you locked in dates?
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    If your audit period ends in Q1, you should be in evidence collection mode right now. Not in January. Now.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    If you're approaching your first SOC 2, or transitioning from Type I to Type II, Q4 is when you should be finalizing your readiness assessment and locking in your audit firm. Good auditors book up early in the year.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Same goes for{" "}
                    <b>
                      <Link to="/iso27001" className="text-sky-700 font-semibold hover:underline">
                        ISO 27001
                      </Link>
                    </b>{" "}
                    surveillance audits,{" "}
                    <b>
                      <Link to="/hitrust" className="text-sky-700 font-semibold hover:underline">
                        HITRUST assessments
                      </Link>
                    </b>
                    , and{" "}
                    <b>
                      <Link to="/hipaa" className="text-sky-700 font-semibold hover:underline">
                        HIPAA risk assessments
                      </Link>
                    </b>
                    . Know your dates. Work backward from them.
                  </p>
                </div>
              </section>

              {/* ASSESS WHAT CHANGED */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Assess what changed this year
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Your environment isn't the same as it was in January. You've probably:
                  </p>

                  <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
                    <li>Added new SaaS tools and integrations</li>
                    <li>Onboarded new employees and maybe offboarded others</li>
                    <li>Changed cloud infrastructure</li>
                    <li>Adopted AI tools across the team, approved or not</li>
                    <li>Added new customers with new compliance requirements</li>
                    <li>Changed your product in ways that affect data handling</li>
                  </ul>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Each of these changes has compliance implications. A new integration might need to be added to your vendor inventory. A product change might affect your data flow diagrams. New AI tool adoption needs to be reflected in your policies.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Do a quick environmental scan now so you're not discovering these gaps during your audit.
                  </p>
                </div>
              </section>

              {/* UPDATE RISK ASSESSMENT */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Update your risk assessment
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    If your risk assessment is more than 12 months old, it's due for an update. If it's more than 6 months old and your environment has changed significantly, it's still due.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    A risk assessment doesn't have to be a massive exercise. Review your threat landscape. Have new risks emerged (AI-driven attacks, supply chain compromises, new regulatory requirements)? Have existing risks changed in likelihood or impact? Are your current controls still adequate?
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Update your risk register. Score the risks. Make sure your treatment plans are current. This is one of the first things an auditor looks at, and it's one of the most common findings when it's stale.
                  </p>
                </div>
              </section>

              {/* VENDOR INVENTORY */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Review your vendor inventory
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    When was the last time you reviewed your critical vendors? Do you have current SOC 2 reports or security assessments for each one? Have any of your vendors had security incidents this year?
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Vendor management is one of those compliance requirements that's easy to set up and easy to neglect. Q4 is a good time to:
                  </p>

                  <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
                    <li>Request updated SOC 2 reports from critical vendors</li>
                    <li>Review any vendors you added this year that haven't been assessed</li>
                    <li>Re-evaluate vendor risk ratings based on any incidents or changes</li>
                    <li>Remove vendors you're no longer using</li>
                  </ul>
                </div>
              </section>

              {/* BUDGET */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Budget for security in the new year
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    If you need a security tool, a GRC platform, a penetration test, or advisory support, the budget request needs to happen in Q4 for most companies. Waiting until Q1 to ask for budget means you won't have the tool until Q2, and by then you're behind.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Common items that need budget allocation:
                  </p>

                  <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
                    <li>Annual penetration testing</li>
                    <li>GRC platform subscription (Drata, Vanta, Secureframe, etc.)</li>
                    <li>Security awareness training platform</li>
                    <li>Endpoint protection / EDR licensing</li>
                    <li>Cloud security posture management</li>
                    <li><b>Virtual CISO</b> or security advisory services</li>
                    <li>Bug bounty or vulnerability research program</li>
                    <li>Incident response retainer</li>
                  </ul>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    If your security budget is zero, that's worth a conversation with your leadership team. Security isn't free, but the cost of a breach is orders of magnitude higher than the cost of prevention.
                  </p>
                </div>
              </section>

              {/* Q1 PRIORITIES */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Set Q1 priorities
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Don't wait until January to decide what matters most. Based on your audit timeline, risk assessment, and business objectives, identify your top three security and compliance priorities for Q1. Write them down. Share them with your team. Make them specific and time-bound.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Examples:
                  </p>

                  <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
                    <li>Complete SOC 2 Type II audit by March 31</li>
                    <li>Implement MFA across all production and admin systems by February 15</li>
                    <li>Conduct annual penetration test by end of February</li>
                    <li>Roll out AI acceptable use policy and training by January 31</li>
                    <li>Complete vendor risk reviews for all critical vendors by March 15</li>
                  </ul>
                </div>
              </section>

              {/* THE PAYOFF */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  The payoff
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Companies that do this work in Q4 start Q1 with clarity and momentum. Companies that don't start Q1 with a pile of overdue compliance work, no budget, and an audit deadline breathing down their necks.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    The difference between a smooth audit season and a stressful one is almost always preparation. And preparation happens in Q4.
                  </p>
                </div>
              </section>

              {/* BOTTOM LINE */}
              <section className="mb-10">
                <div className="bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200 rounded-xl p-8">
                  <p className="text-gray-800 leading-relaxed text-lg">
                    If you need help building your Q1 compliance plan or getting ready for an upcoming audit, reach out. That's exactly what we do.
                  </p>
                </div>
              </section>

              {/* AUTHOR */}
              <section className="mb-12 border-t border-gray-200 pt-8">
                <p className="text-gray-600 text-base italic">
                  Farbod Fakhrai is the founder of Com-Sec, a{" "}
                  <b>
                    <a
                      href="https://com-sec.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-700 font-semibold hover:underline"
                    >
                      cybersecurity and compliance
                    </a>
                  </b>{" "}
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
                Need help building your Q1 compliance plan?
              </h3>

              <p className="text-sky-200 text-lg mb-6 max-w-xl mx-auto leading-relaxed">
                Com-Sec helps startups and growth-stage companies get ready for audits before the deadline pressure hits.
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
