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

export default function Soc2IsSimplerThanYouThink() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "SOC 2 Is Simpler Than You Think",
      text: "Post 2: Things I've Learned Running a Cybersecurity Firm. SOC 2 isn't a certification, a pass/fail test, or a checklist. Here's what it actually is.",
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
      title: "Your SOC 2 Auditor Matters More Than Your GRC Platform",
      excerpt:
        "The GRC platform is a tool. The auditor is what determines whether your controls hold up and your report is worth the paper it's printed on.",
      link: "/blog/your-soc-2-auditor-matters-more-than-your-grc-platform",
      category: "Compliance",
      emoji: "🔍",
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
      title: "Rolling Out AI the Right Way — Part 4",
      excerpt:
        "A practical 5-step playbook for rolling out AI at a company that takes security and compliance seriously.",
      link: "/blog/rolling-out-ai-the-right-way-part-4",
      category: "AI Governance",
      emoji: "🛠️",
    },
  ];

  return (
    <>
      <Helmet>
        <title>SOC 2 Is Simpler Than You Think</title>

        <meta
          name="description"
          content="Post 2: Things I've Learned Running a Cybersecurity Firm. SOC 2 isn't a certification or a pass/fail test — it's a report. Here's what it actually is, and why the confusion trips founders up."
        />

        <link
          rel="canonical"
          href="https://com-sec.io/blog/soc-2-is-simpler-than-you-think"
        />

        <meta
          property="og:title"
          content="SOC 2 Is Simpler Than You Think"
        />

        <meta
          property="og:description"
          content="SOC 2 isn't a certification or a pass/fail test. It's an independent auditor verifying that what you told your customers about your security is true."
        />

        <meta
          property="og:image"
          content="https://com-sec.io/images/blog-images/soc-2-is-simpler-than-you-think.png"
        />

        <meta
          property="og:url"
          content="https://com-sec.io/blog/soc-2-is-simpler-than-you-think"
        />

        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Com-Sec" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comsec" />

        <meta
          name="twitter:title"
          content="SOC 2 Is Simpler Than You Think"
        />

        <meta
          name="twitter:description"
          content="SOC 2 isn't a certification or a pass/fail test. It's an independent auditor verifying that what you told your customers about your security is true."
        />

        <meta
          name="twitter:image"
          content="https://com-sec.io/images/blog-images/soc-2-is-simpler-than-you-think.png"
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
                Type I vs. Type II
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-balance">
              SOC 2 Is Simpler Than You Think
            </h1>

            <p className="text-xl text-sky-100 mb-8 leading-relaxed">
              Things I've Learned Running a Cybersecurity Firm
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sky-200">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>July 8, 2026</span>
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
                src="/images/blog-images/soc-2-is-simpler-than-you-think.png"
                alt="SOC 2 Is Simpler Than You Think"
                className="rounded-xl shadow-md max-w-xl w-full h-auto"
              />
            </div>

            <div className="prose prose-lg max-w-none">

              {/* INTRO */}
              <section className="mb-10">
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    I've helped dozens of companies get through SOC 2. The single biggest obstacle isn't the audit, the evidence collection, or the controls. It's the confusion about what SOC 2 actually is.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    So let me make this as simple as possible.
                  </p>
                </div>
              </section>

              {/* WHAT SOC 2 ACTUALLY IS */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  What SOC 2 actually is
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    SOC 2 is a report. That's it. It's not a certification. It's not a pass/fail test. It's not a checklist of requirements you have to meet.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    It's a report that says: here's what this company says they do for security, and here's whether they're actually doing it.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    An independent auditor looks at your controls, your policies, and your processes. They collect evidence. They test whether those controls are working the way you described. Then they write a report that other people (your customers, their security teams, their procurement departments) can read to understand your security posture.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    That's the whole thing.
                  </p>
                </div>
              </section>

              {/* CAN'T FAIL */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  You can't fail a SOC 2
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    This is the part that trips people up the most. There is no pass or fail. There's no score. There's no minimum threshold you have to clear.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The auditor's job is to evaluate whether the controls you defined are suitably designed and operating effectively. If you say you do quarterly access reviews and you actually do quarterly access reviews, that control passes. If you say you do quarterly access reviews and you haven't done one in eight months, the auditor notes that as an exception.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Exceptions show up in the report. They don't kill it. A SOC 2 report with a few documented exceptions and clear remediation steps is a normal, honest report. It tells the reader: this company has a real program, they found some gaps, and they're fixing them.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    A report with zero exceptions can actually raise more eyebrows with experienced security reviewers. It either means the company's program is genuinely mature, or it means the audit wasn't very thorough.
                  </p>
                </div>
              </section>

              {/* WHY THIS MATTERS */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  Why this matters
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The confusion around SOC 2 creates two problems.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    First, it makes founders overthink it. They treat SOC 2 like a bar exam and delay starting because they think they're not "ready." You don't need to be perfect. You need to have controls that are defined, documented, and operating. If there are gaps, the audit process helps you find and fix them.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Second, it lets companies hide behind it. "We're SOC 2 compliant" has become a shorthand that implies more than it should. SOC 2 doesn't mean a company is secure. It means an auditor reviewed the controls the company chose to include and confirmed they were working during a specific period. The controls the company didn't include, the risks they didn't scope, and the things that happened outside the audit window are all outside the report.
                  </p>
                </div>
              </section>

              {/* TYPE I VS TYPE II */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  Type I vs. Type II
                </h2>
                <div className="space-y-4">
                  <div className="bg-sky-50 border-l-4 border-sky-500 rounded-r-lg p-4">
                    <p className="text-gray-800 text-lg">
                      <b>Type I</b> is a point-in-time snapshot. The auditor looks at your controls on a single date and says: as of this date, these controls are suitably designed. It's a good starting point, especially for companies getting their first report.
                    </p>
                  </div>
                  <div className="bg-sky-50 border-l-4 border-sky-500 rounded-r-lg p-4">
                    <p className="text-gray-800 text-lg">
                      <b>Type II</b> covers a review period, usually 6 to 12 months. The auditor evaluates whether your controls were operating effectively throughout that window. This is what most enterprise customers want to see because it shows consistency, not just a one-day setup.
                    </p>
                  </div>
                </div>
              </section>

              {/* WHAT SOC 2 COVERS */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  What SOC 2 covers
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    SOC 2 is built around Trust Services Criteria. The required category is Security. You can optionally add Availability, Confidentiality, Processing Integrity, and Privacy depending on what matters for your business and what your customers ask for.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Within those categories, you define your own controls. There's no fixed list of 200 requirements you have to meet. You decide what controls are appropriate for your environment, your risk profile, and your customer commitments. The auditor evaluates whether those controls are designed well and working.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    This is why two SOC 2 reports from two different companies can look completely different and both be valid. The framework is flexible by design.
                  </p>
                </div>
              </section>

              {/* SIMPLEST WAY TO THINK ABOUT IT */}
              <section className="mb-10">
                <div className="bg-slate-900 rounded-xl p-8 text-white flex items-start gap-4">
                  <div className="text-3xl mt-1">→</div>
                  <div>
                    <p className="text-sm font-semibold text-sky-300 uppercase tracking-wide mb-2">
                      The simplest way to think about it
                    </p>
                    <p className="text-lg text-slate-100 leading-relaxed">
                      Imagine you're telling a customer: "Here's how we handle security. Here's how we manage access. Here's how we protect your data. Here's what happens if something goes wrong." SOC 2 is an independent auditor verifying that what you just told them is true. That's all it is. Don't overcomplicate it.
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
                Ready to start your SOC 2 journey?
              </h3>
              <p className="text-sky-200 text-lg mb-6 max-w-xl mx-auto leading-relaxed">
                Com-Sec helps startups and growth-stage companies scope, prepare for, and pass SOC 2 audits — without the overthinking or the overselling.
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
