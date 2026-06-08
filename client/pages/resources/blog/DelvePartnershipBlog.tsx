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

export default function DelvePartnershipBlog() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "We Almost Partnered With Delve. Here's What Stopped Us.",
      text: "How Com-Sec nearly partnered with Delve before the compliance scandal surfaced.",
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
      title: "How to Prepare for a Compliance Audit",
      excerpt:
        "Best practices and strategies to prepare your organization for compliance audits successfully.",
      link: "/blog/how-to-prepare-for-a-compliance-audit-best-practices-and-strategies",
      category: "Compliance",
      emoji: "📋",
    },
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
  ];

  return (
    <>
      <Helmet>
        <title>
          We Almost Partnered With Delve. Here's What Stopped Us.
        </title>

        <meta
          name="description"
          content="Com-Sec was weeks away from partnering with Delve before the compliance scandal surfaced. Here's what happened and the lessons learned."
        />

        <link
          rel="canonical"
          href="https://com-sec.io/blog/we-almost-partnered-with-delve"
        />

        <meta
          property="og:title"
          content="We Almost Partnered With Delve. Here's What Stopped Us."
        />

        <meta
          property="og:description"
          content="Com-Sec was weeks away from partnering with Delve before the compliance scandal surfaced. Here's what happened and the lessons learned."
        />

        <meta
          property="og:image"
          content="https://com-sec.io/images/blog-images/delve-compliance-scandal.png"
        />

        <meta
          property="og:url"
          content="https://com-sec.io/blog/we-almost-partnered-with-delve"
        />

        <meta property="og:type" content="article" />

        <meta property="og:site_name" content="Com-Sec" />

        <meta property="og:image:width" content="1200" />

        <meta property="og:image:height" content="627" />

        <meta property="og:image:type" content="image/png" />

        <meta property="article:published_time" content="2026-05-15T00:00:00Z" />

        <meta property="article:author" content="Farbod Fakhrai" />

        <meta property="article:section" content="Compliance & Cybersecurity" />

        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="We Almost Partnered With Delve. Here's What Stopped Us."
        />

        <meta
          name="twitter:description"
          content="How Com-Sec nearly partnered with Delve before the compliance scandal surfaced."
        />

        <meta
          name="twitter:image"
          content="https://com-sec.io/images/blog-images/delve-compliance-scandal.png"
        />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navigation />

        {/* HERO */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-red-950 via-rose-900 to-slate-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to="/blogs"
              className="inline-flex items-center text-red-200 hover:text-white transition-colors mb-8 group"
            >
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>

            <div className="flex items-center gap-4 mb-6 flex-wrap">
              <span className="bg-red-500/20 text-red-100 px-4 py-2 rounded-full text-sm font-medium">
                Compliance & Cybersecurity
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-balance">
              We Almost Partnered With Delve. Here's What Stopped Us.
            </h1>

            <p className="text-xl text-red-100 mb-8 leading-relaxed">
              A firsthand look at how Com-Sec nearly partnered with Delve before
              the compliance scandal surfaced.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-red-200">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>May 2026</span>
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

            {/* Cover image */}
            <div className="mb-12 flex justify-center">
              <img
                src="/images/blog-images/delve-compliance-scandal.png"
                alt="Delve compliance scandal"
                className="rounded-xl shadow-md max-w-xl w-full h-auto"
              />
            </div>

            <div className="prose prose-lg max-w-none">

              {/* Intro */}
              <section className="mb-10">
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    By now, most people in the compliance world know what happened with Delve. The whistleblower report. The fabricated audit evidence. The identical SOC 2 reports. The rubber-stamp auditors. Y Combinator asking the founders to leave the program. A $300 million valuation collapsing under the weight of allegations that the whole thing was, as the whistleblower put it, "fake compliance as a service."
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    What most people don't know is that Com-Sec was weeks away from being their lead vCISO partner for HITRUST clients.
                  </p>
                </div>
              </section>

              {/* The opportunity looked great */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  The opportunity looked great
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    As a small company, you fight hard for every client and every referral. When Delve approached us about a partnership, the pitch was compelling: they had a large and growing client base, many of them in healthcare, and they needed experienced vCISO support to help their HITRUST clients get through the process. We would be the go-to partner for that work.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    For a firm our size, access to that kind of client pipeline was significant. I enjoyed my conversations with their founding team. They were sharp, moved fast, and seemed to have real traction. We started putting together a co-branded blog post. We were building the relationship and getting ready to kick things off.
                  </p>
                </div>
              </section>

              {/* Then things started feeling off */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Then things started feeling off
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Right before we were about to formally launch the partnership, small things started not adding up. We were getting requests to turn things around over weekends and after hours on timelines that didn't make sense. Deliverables that normally take careful review were being treated as checkbox items to knock out as fast as possible. The urgency wasn't the kind that comes from a client in a crunch. It was the kind that comes from a process that's been designed to skip steps.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Something felt fishy. I couldn't point to one specific thing, but the overall pattern didn't sit right with how we approach compliance work. We slowed down. We stopped rushing to get the partnership finalized. We pulled back on the co-branded content. We decided to wait and see.
                  </p>
                </div>
              </section>

              {/* The next month, it all came out */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  The next month, it all came out
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    In March, the DeepDelver whistleblower report dropped. Nearly 500 draft SOC 2 reports that were 99.8% identical. Pre-written auditor conclusions generated before clients even submitted evidence. Fabricated board meeting minutes. Audit firms that were rubber-stamping reports without independent testing. Hundreds of companies, some publicly traded, some handling PHI for millions of patients, potentially exposed to regulatory liability because they trusted a platform that was producing the appearance of compliance without the substance.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Y Combinator removed them. Customers scrambled to figure out whether their certifications were even valid. The compliance industry had its Theranos moment.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    And we had dodged a bullet.
                  </p>
                </div>
              </section>

              {/* The lesson */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  The lesson
                </h2>

                <div className="space-y-5">

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Trust your instincts.</b> When something feels off in a business relationship, slow down. The pressure to move fast, especially when the opportunity looks good, can override the signals your experience is sending you. In compliance especially, speed that comes at the expense of rigor is a red flag, not a feature.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Vet your partners the way you'd vet a vendor.</b> We tell our clients to scrutinize their vendors' security posture. The same standard applies to business partnerships. A compelling pitch and a large client base don't mean the underlying operation is sound.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>There are no shortcuts in compliance.</b> This is the core of it. SOC 2, ISO 27001, HITRUST: these frameworks exist to provide real assurance that real controls are in place and operating effectively. When someone promises to get it done in days instead of weeks, or treats evidence collection as an afterthought, they're not innovating. They're cutting corners. And eventually, the corners catch up.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Protect your reputation above all else.</b> If we had gone all-in on that partnership, our name would have been attached to work product built on a fraudulent foundation. For a small firm, that's not a setback. That's potentially fatal. The short-term revenue wasn't worth the long-term risk, even though we didn't fully understand the risk at the time.
                  </p>

                </div>
              </section>

              {/* The bigger picture */}
              <section className="mb-10">
                <div className="bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-xl p-8">

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    The bigger picture
                  </h2>

                  <div className="space-y-4">
                    <p className="text-gray-800 leading-relaxed text-lg">
                      The Delve scandal wasn't just about one company. It exposed a structural weakness in how the market treats compliance: as a product to be purchased rather than a discipline to be practiced. When the incentive is to get the certificate as fast and cheap as possible, corners will get cut. Sometimes by the company. Sometimes by the platform. Sometimes by the auditor.
                    </p>

                    <p className="text-gray-800 leading-relaxed text-lg">
                      The companies that came out of this fine were the ones that treated compliance as a real operational practice, not a checkbox. They had controls that actually worked. They had evidence that reflected reality. They had auditors who did real testing. That's the standard. It always has been.
                    </p>

                    <p className="text-gray-800 leading-relaxed text-lg">
                      We're glad we weren't part of the other side of that story.
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
                    className="text-red-700 font-semibold hover:underline"
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
            <div className="bg-gradient-to-br from-red-950 via-rose-900 to-slate-900 rounded-xl px-8 py-10 text-white text-center shadow-lg">

              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Build a stronger compliance and security program
              </h3>

              <p className="text-red-200 text-lg mb-6 max-w-xl mx-auto leading-relaxed">
                Com-Sec helps startups and healthcare companies strengthen cybersecurity, compliance readiness, and customer trust — without cutting corners.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/contact"
                  className="bg-white text-red-900 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
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

                    <div className="text-4xl mb-4">
                      {article.emoji}
                    </div>

                    <span className="text-xs font-medium text-red-700 bg-red-50 px-2 py-1 rounded-full w-fit">
                      {article.category}
                    </span>

                    <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2 group-hover:text-red-700 transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-gray-600 text-sm flex-grow">
                      {article.excerpt}
                    </p>

                    <div className="mt-4 flex items-center text-red-700 text-sm font-medium">
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