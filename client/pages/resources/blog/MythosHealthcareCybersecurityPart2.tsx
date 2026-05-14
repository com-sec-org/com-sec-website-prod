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

export default function MythosHealthcareCybersecurityPart2() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "Mythos Changed the Game. Here's What to Do About It. — Part 2",
      text: "Part 2: The Patching Window Just Collapsed. AI-driven vulnerability discovery is shrinking patch windows — here's what to do about it.",
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // user cancelled — do nothing
      }
    } else {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const relatedArticles = [
    {
      title: "Security & Compliance Challenges for Healthcare Companies",
      excerpt:
        "Explore the biggest cybersecurity and compliance risks healthcare organizations face today.",
      link: "/blog/security-compliance-health-companies",
      category: "Healthcare Security",
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
    {
      title: "How to Prepare for a Compliance Audit",
      excerpt:
        "Best practices and strategies to prepare your organization for compliance audits successfully.",
      link: "/blog/how-to-prepare-for-a-compliance-audit-best-practices-and-strategies",
      category: "Compliance",
      emoji: "📋",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Mythos Changed the Game. Here's What to Do About It. — Part 2</title>

        <meta
          name="description"
          content="Part 2: The Patching Window Just Collapsed. Learn how AI-driven vulnerability discovery is shrinking patch windows and changing cybersecurity risk in 2026."
        />

        <link
          rel="canonical"
          href="https://com-sec.io/blog/mythos-patching-window-collapsed"
        />

        <meta
          property="og:title"
          content="Mythos Changed the Game. Here's What to Do About It. — Part 2"
        />

        <meta
          property="og:description"
          content="Part 2: The Patching Window Just Collapsed. AI-driven vulnerability discovery is shrinking patch windows — here's what to do about it."
        />

        <meta
          property="og:image"
          content="https://com-sec.io/images/blog/mythos-patching-window-collapsed.png"
        />

        <meta
          property="og:url"
          content="https://com-sec.io/blog/mythos-patching-window-collapsed"
        />

        <meta property="og:type" content="article" />

        <meta property="og:site_name" content="Com-Sec" />

        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Mythos Changed the Game. Here's What to Do About It. — Part 2"
        />

        <meta
          name="twitter:description"
          content="Part 2: The Patching Window Just Collapsed. AI-driven vulnerability discovery is shrinking patch windows — here's what to do about it."
        />

        <meta
          name="twitter:image"
          content="https://com-sec.io/images/blog/mythos-patching-window-collapsed.png"
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
                AI & Cybersecurity
              </span>
              <span className="bg-white/15 text-white px-4 py-2 rounded-full text-sm font-bold border border-white/25">
                Part 2 of Series
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-balance">
              Mythos Changed the Game. Here's What to Do About It.
            </h1>

            <p className="text-xl text-sky-100 mb-8 leading-relaxed">
              Part 2: The Patching Window Just Collapsed
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sky-200">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>May 2026</span>
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
                {copied ? <Check className="h-4 w-4" /> : <Share2 className="h-4 w-4" />}
                <span>{copied ? "Copied!" : "Share"}</span>
              </button>
            </div>
          </div>
        </section>

        {/* ARTICLE */}
        <article className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Cover image */}
            <div className="mb-12 flex justify-center">
              <img
                src="/images/blog-images/mythos-patching-window-collapsed.png"
                alt="Mythos AI cybersecurity — the patching window just collapsed"
                className="rounded-xl shadow-md max-w-xl w-full h-auto"
              />
            </div>

            <div className="prose prose-lg max-w-none">

              {/* Intro */}
              <section className="mb-10">
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Most companies patch on a cycle. Monthly scans, quarterly reviews, maybe an emergency push when something makes the news. For a long time, that was reasonable. Vulnerabilities were discovered at a human pace. Exploits took time to develop. You had a window.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    That window is closing fast.
                  </p>
                </div>
              </section>

              {/* The old model is broken */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">The old model is broken</h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Here's how vulnerability management has worked for most organizations:
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    1. A vulnerability is disclosed (CVE published, vendor advisory released).
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    2. Security teams evaluate severity and prioritize.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    3. Patches are tested in staging.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    4. Patches are deployed, often 30 to 90 days after disclosure.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    This made sense when the gap between disclosure and weaponization was measured in weeks. Attackers needed time to reverse-engineer patches, build exploits, and find targets.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    With AI-driven vulnerability discovery, that timeline compresses to hours or minutes. Mythos didn't just find vulnerabilities. It built working exploits for them. Autonomously. At scale. When similar capabilities reach offensive actors (and they will), the 30-day patching SLA becomes a 30-day exposure window.
                  </p>
                </div>
              </section>

              {/* What this looks like in practice */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">What this looks like in practice</h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The Cloud Security Alliance is already warning that security teams should prepare for multiple high-severity incidents in the same week. That's not a hypothetical. When AI can discover and weaponize vulnerabilities across your entire software stack simultaneously, the old model of triaging one CVE at a time doesn't hold.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    For startups, this hits in a few specific ways:
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Open-source dependencies.</b> Most startups run on a stack of open-source libraries maintained by small teams or individual volunteers. Mythos found bugs that had been hiding in widely-used open-source projects for over a decade. Those projects don't have the resources to patch at machine speed. Your exposure is their exposure.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Third-party software.</b> You don't control when your vendors patch. If your CRM, your analytics platform, or your CI/CD pipeline has a zero-day, you're waiting on someone else's timeline. That dependency risk is now more acute.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Internal code.</b> If you're shipping code without automated security testing in your pipeline, you're accumulating technical debt that AI-powered attackers can now find and exploit faster than you can fix.
                  </p>
                </div>
              </section>

              {/* What to do now */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">What to do now</h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    You don't need to overhaul everything overnight. But you do need to tighten up.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Know what you're running.</b> Maintain a current software inventory. If you can't list every application, library, and dependency in your environment, you can't patch what you don't know about.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Shrink your patch window.</b> Get critical patches deployed in days, not weeks. Automate where you can. If your current process can't support that, it needs to change.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Monitor for exploitability, not just severity.</b> A CVSS 9.8 that requires physical access matters less than a CVSS 7.5 that's being actively exploited in the wild. Prioritize based on real-world risk.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Pressure your vendors.</b> Ask your third-party providers about their patching timelines. If they can't give you a clear answer, that's a risk you need to account for.
                  </p>
                </div>
              </section>

              {/* The uncomfortable truth */}
              <section className="mb-10">
                <div className="bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200 rounded-xl p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">The uncomfortable truth</h2>
                  <div className="space-y-4">
                    <p className="text-gray-800 leading-relaxed text-lg">
                      Patching has always been unglamorous work. It's not the kind of thing that gets a line item in a board deck. But in a world where AI can find and exploit your vulnerabilities before your next sprint planning meeting, patching speed is a business-critical capability.
                    </p>
                  </div>
                </div>
              </section>

              {/* Part 3 teaser */}
              <section className="mb-10">
                <div className="bg-slate-900 rounded-xl p-8 text-white flex items-start gap-4">
                  <div className="text-3xl mt-1">→</div>
                  <div>
                    <p className="text-sm font-semibold text-sky-300 uppercase tracking-wide mb-2">Up next in the series</p>
                    <p className="text-lg text-slate-100 leading-relaxed">
                      In Part 3, we'll talk about why your SOC 2 report won't save you from any of this.
                    </p>
                  </div>
                </div>
              </section>

              {/* Author */}
              <section className="mb-12 border-t border-gray-200 pt-8">
                <p className="text-gray-600 text-base italic">
                  Farbod Fakhrai is the founder of{" "}
                  <a
                    href="https://com-sec.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-700 font-semibold hover:underline"
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
            <div className="bg-gradient-to-br from-sky-900 via-blue-800 to-slate-900 rounded-xl px-8 py-10 text-white text-center shadow-lg">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Build a stronger security program in 2026
              </h3>
              <p className="text-sky-200 text-lg mb-6 max-w-xl mx-auto leading-relaxed">
                Com-Sec helps startups and healthcare companies strengthen cybersecurity, compliance readiness, and customer trust — before the next headline hits.
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
