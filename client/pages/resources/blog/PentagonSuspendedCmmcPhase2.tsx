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

export default function PentagonSuspendedCmmcPhase2() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "The Pentagon Just Suspended CMMC Phase 2",
      text: "Here's what it means and what doesn't change for defense contractors.",
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
    {
      title: "Rolling Out AI the Right Way — Part 5",
      excerpt:
        "Part 5: Common Mistakes and the Path Forward. The mistakes I see most often when companies roll out AI, and how to avoid them.",
      link: "/blog/rolling-out-ai-the-right-way-part-5",
      category: "AI Governance",
      emoji: "✅",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          The Pentagon Just Suspended CMMC Phase 2 — Here's What It Means and What Doesn't Change
        </title>

        <meta
          name="description"
          content="DoD has suspended CMMC Phase 2 third-party certification requirements. Here's what changed, what didn't, and what defense contractors should do now."
        />

        <link
          rel="canonical"
          href="https://com-sec.io/blog/pentagon-suspended-cmmc-phase-2"
        />

        <meta
          property="og:title"
          content="The Pentagon Just Suspended CMMC Phase 2 — Here's What It Means and What Doesn't Change"
        />

        <meta
          property="og:description"
          content="DoD has suspended CMMC Phase 2 third-party certification requirements. Here's what changed, what didn't, and what defense contractors should do now."
        />

        <meta
          property="og:image"
          content="https://com-sec.io/images/blog-images/pentagon-suspended-cmmc-phase-2.png"
        />

        <meta
          property="og:url"
          content="https://com-sec.io/blog/pentagon-suspended-cmmc-phase-2"
        />

        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Com-Sec" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:author" content="Farbod Fakhrai" />
        <meta property="article:published_time" content="2026-07-15T00:00:00Z" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comsec" />

        <meta
          name="twitter:title"
          content="The Pentagon Just Suspended CMMC Phase 2"
        />

        <meta
          name="twitter:description"
          content="DoD has suspended CMMC Phase 2 third-party certification requirements. Here's what changed, what didn't, and what defense contractors should do now."
        />

        <meta
          name="twitter:image"
          content="https://com-sec.io/images/blog-images/pentagon-suspended-cmmc-phase-2.png"
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
              <span className="bg-white/15 text-white px-4 py-2 rounded-full text-sm font-bold border border-white/25">
                Breaking
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-balance">
              The Pentagon Just Suspended CMMC Phase 2. Here's What It Means and What Doesn't Change.
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sky-200">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>July 15, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>7 min read</span>
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
                src="/images/blog-images/pentagon-suspended-cmmc-phase-2.png"
                alt="The Pentagon Just Suspended CMMC Phase 2"
                className="rounded-xl shadow-md max-w-xl w-full h-auto"
              />
            </div>

            <div className="prose prose-lg max-w-none">

              {/* INTRO */}
              <section className="mb-10">
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Yesterday the Department of Defense announced the immediate suspension of CMMC Phase 2 requirements. The third-party certification mandate that was set to take effect <b>November 10, 2026</b> is on hold. A Reform Task Force will spend 60 days reviewing the program and come back with recommendations.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    If you're a defense contractor, this is the biggest CMMC development since enforcement began last November. Here's what you need to know.
                  </p>
                </div>
              </section>

              {/* WHAT HAPPENED */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  What happened?
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    DoD CIO Kirsten Davies and Under Secretary of Defense for Acquisition Michael Duffey announced the suspension at a Pentagon briefing on July 13. The core issue: the program as designed was structurally broken.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Over 100,000 defense industrial base businesses needed third-party assessments. There were roughly 100 approved assessors. The SBA estimated compliance costs approaching $600,000 per certification for small firms. As Davies put it: "the math just simply doesn't math."
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The SBA had been raising alarms for months that CMMC compliance was forcing small businesses out of the defense industrial base entirely. Companies that should be building capabilities for warfighters were instead spending their time and money navigating a certification process that couldn't scale.
                  </p>
                </div>
              </section>

              {/* WHAT CHANGED */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  What changed?
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Phase 2 is suspended. The November 10 deadline for third-party C3PAO certification as a condition of contract award is on hold. All pending and future CMMC implementation milestones in DoD solicitations and contracts are suspended. Contracting officers have been directed to amend active solicitations that contain Phase 2 requirements.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    A CMMC Reform Task Force is conducting a 60-day review. DoD is issuing a Request for Information asking contractors about cost drivers, administrative burdens, which NIST 800-171 controls deliver meaningful risk reduction, and how companies are already using commercial cybersecurity tools. Responses are due August 14. Recommendations are expected around mid-September.
                  </p>
                </div>
              </section>

              {/* WHAT DID NOT CHANGE */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  What did NOT change?
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    This is the part most people will miss.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Phase 1 self-assessment requirements remain in force. If you have DFARS 252.204-7012 in your contracts, you are still legally required to protect controlled unclassified information. NIST SP 800-171 Rev 2 is still the standard. Your SPRS score still matters. The DoD can still assess you at any time. Your primes can still gate awards on compliance.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The suspension targets the certification mechanism, not the underlying security requirement. If you handle CUI and you're not implementing the 110 controls in NIST 800-171, you're still noncompliant. You just don't need a third-party assessor to tell you that right now.
                  </p>
                </div>
              </section>

              {/* ALREADY INVESTED */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  What this means for contractors who've already invested
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    If you've been spending time and money getting your security posture right, building your SSP, implementing controls, and working toward NIST 800-171 compliance, that work is not wasted. Davies said it directly: "Every dollar spent on security is a wise dollar spent. Those who have been forward leaning in uplifting their cyber posture have contributed to national security. That is not money spent in vain."
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The security requirement hasn't gone away. The verification mechanism is being reworked. Companies that are already compliant are in a stronger position regardless of what the task force recommends, because primes still evaluate subcontractor security posture, and the underlying DFARS obligation hasn't changed.
                  </p>
                </div>
              </section>

              {/* WAITING */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  What this means for companies that were waiting
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    If you were putting off CMMC compliance hoping it would go away, you got a temporary reprieve on the certification deadline. You did not get a reprieve on the security requirement itself.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Here's the reality: the 60-day review could result in Phase 2 coming back with new dates, a narrower scope (third-party assessment only for higher-risk contracts), a shift toward automated or government-led verification, or a fundamentally restructured program. Every scenario on the table keeps NIST 800-171 Rev 2 as the substantive standard.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The contractors who use this pause to actually implement controls will be ready for whatever comes next. The ones who use it as an excuse to do nothing will be in the same scramble they were in before, just with a different deadline.
                  </p>
                </div>
              </section>

              {/* BIGGER PICTURE */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  The bigger picture
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    There's an irony here that's worth noting. The compliance industry spent years building around CMMC. Assessor organizations stood up. Consulting firms built CMMC practices. Companies invested hundreds of thousands of dollars preparing for Phase 2. And the program got suspended because it couldn't scale.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    This is what happens when compliance becomes more about the certification process than the actual security outcome. The DoD's own statement says they want to "replace prohibitive, third-party compliance models with scalable, realistic security measures." That's an acknowledgment that the mechanism was getting in the way of the goal.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Sound familiar? We've seen this dynamic play out in other frameworks. When the process becomes the product and the security outcome becomes secondary, something eventually breaks.
                  </p>
                </div>
              </section>

              {/* WHAT TO DO NOW */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  What to do now
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    If you're a defense contractor or subcontractor handling CUI:
                  </p>
                  <div className="space-y-4">
                    <div className="bg-sky-50 border-l-4 border-sky-500 rounded-r-lg p-4">
                      <p className="text-gray-800 text-lg"><b>Keep implementing NIST 800-171 controls.</b> The standard isn't going anywhere. Build to the standard and stay flexible on the mechanism.</p>
                    </div>
                    <div className="bg-sky-50 border-l-4 border-sky-500 rounded-r-lg p-4">
                      <p className="text-gray-800 text-lg"><b>Maintain your self-assessment and SPRS score.</b> Phase 1 is still in effect. Your score still matters for contract eligibility.</p>
                    </div>
                    <div className="bg-sky-50 border-l-4 border-sky-500 rounded-r-lg p-4">
                      <p className="text-gray-800 text-lg"><b>Respond to the RFI.</b> If you have feedback on cost drivers, which controls deliver real risk reduction, and how the program should be restructured, submit it by August 14. This is your chance to shape what comes next.</p>
                    </div>
                    <div className="bg-sky-50 border-l-4 border-sky-500 rounded-r-lg p-4">
                      <p className="text-gray-800 text-lg"><b>Don't stop security investments.</b> The pause is on the certification, not the requirement. Companies that stay ahead of the standard will have a competitive advantage when the new framework is announced.</p>
                    </div>
                    <div className="bg-sky-50 border-l-4 border-sky-500 rounded-r-lg p-4">
                      <p className="text-gray-800 text-lg"><b>Watch for the task force recommendations in September.</b> Plan for multiple scenarios. The smart move is building compliance that works regardless of which verification model DoD chooses.</p>
                    </div>
                  </div>
                </div>
              </section>
              
              {/* AUTHOR */}
              <section className="mb-12 border-t border-gray-200 pt-8">

                <p className="text-gray-600 text-base italic">
                  Farbod Fakhrai is the founder of Com-Sec, a cybersecurity and compliance consulting firm supporting startups and growth-stage companies. [{" "}
                  <a
                    href="https://com-sec.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-700 font-semibold hover:underline"
                  >
                    com-sec.io
                  </a>
                  ].
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
                Need help navigating CMMC and NIST 800-171?
              </h3>
              <p className="text-sky-200 text-lg mb-6 max-w-xl mx-auto leading-relaxed">
                Com-Sec helps defense contractors and subcontractors build toward NIST 800-171 compliance, maintain SPRS scores, and stay ready regardless of how the CMMC framework evolves.
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
