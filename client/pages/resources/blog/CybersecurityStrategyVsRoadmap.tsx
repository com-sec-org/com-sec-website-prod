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

export default function CybersecurityStrategyVsRoadmap() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "Cybersecurity Strategy vs. Cybersecurity Roadmap: What's the Difference?",
      text: "These two terms get used interchangeably. They're not the same thing — and understanding the difference matters.",
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
      title: "How a Fractional CISO Builds a Strong Cybersecurity Strategy",
      excerpt:
        "What building a cybersecurity strategy actually looks like in practice — from the first two weeks through ongoing execution.",
      link: "/blog/how-a-fractional-ciso-builds-a-strong-cybersecurity-strategy",
      category: "Security Leadership",
      emoji: "🛡️",
    },
    {
      title: "10 Steps to Building an Effective Security Program",
      excerpt:
        "Building a security program is a sequence of practical steps that build on each other. Here's the order we use with every client.",
      link: "/blog/10-steps-to-building-an-effective-security-program",
      category: "Security Program",
      emoji: "🧩",
    },
    {
      title: "What Is a vCISO? Understanding the Role and Benefits",
      excerpt:
        "Learn how vCISO services help organizations strengthen cybersecurity leadership.",
      link: "/blog/what-is-vciso-role-cybersecurity",
      category: "Cybersecurity Leadership",
      emoji: "🧭",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Cybersecurity Strategy vs. Cybersecurity Roadmap: What's the Difference?</title>

        <meta
          name="description"
          content="Strategy and roadmap get used interchangeably, but they're not the same thing. Here's what each one answers, how they work together, and why the distinction matters."
        />

        <link
          rel="canonical"
          href="https://com-sec.io/blog/cybersecurity-strategy-vs-cybersecurity-roadmap-whats-the-difference"
        />

        <meta
          property="og:title"
          content="Cybersecurity Strategy vs. Cybersecurity Roadmap: What's the Difference?"
        />

        <meta
          property="og:description"
          content="These two terms get used interchangeably. They're not the same thing. Understanding the difference matters."
        />

        <meta
          property="og:image"
          content="https://com-sec.io/images/blog-images/cybersecurity-strategy-vs-cybersecurity-roadmap-whats-the-difference.png"
        />

        <meta
          property="og:url"
          content="https://com-sec.io/blog/cybersecurity-strategy-vs-cybersecurity-roadmap-whats-the-difference"
        />

        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Com-Sec" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:author" content="Farbod Fakhrai" />
        <meta property="article:published_time" content="2026-09-23T00:00:00Z" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comsec" />

        <meta
          name="twitter:title"
          content="Cybersecurity Strategy vs. Cybersecurity Roadmap: What's the Difference?"
        />

        <meta
          name="twitter:description"
          content="These two terms get used interchangeably. They're not the same thing. Understanding the difference matters."
        />

        <meta
          name="twitter:image"
          content="https://com-sec.io/images/blog-images/cybersecurity-strategy-vs-cybersecurity-roadmap-whats-the-difference.png"
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
                Security Leadership
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-balance">
              Cybersecurity Strategy vs. Cybersecurity Roadmap: What's the Difference?
            </h1>

            <p className="text-xl text-sky-100 mb-8 leading-relaxed">
              These two terms get used interchangeably. They're not the same thing, and understanding the difference matters.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sky-200">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>September 23, 2026</span>
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
                src="/images/blog-images/cybersecurity-strategy-vs-cybersecurity-roadmap-whats-the-difference.png"
                alt="Cybersecurity Strategy vs. Cybersecurity Roadmap: What's the Difference?"
                className="rounded-xl shadow-md max-w-xl w-full h-auto"
              />
            </div>

            <div className="prose prose-lg max-w-none">

              {/* INTRO */}
              <section className="mb-10">
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    These two terms get used interchangeably. They're not the same thing. Understanding the difference matters because it determines how you plan, prioritize, and communicate about security.
                  </p>
                </div>
              </section>

              {/* STRATEGY */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  The strategy: the why and the what
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    A cybersecurity strategy answers three questions: what are we protecting, what are the biggest risks, and how do we approach managing them?
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>The strategy is business-level thinking.</b> It's informed by your company's goals, your customer requirements, your regulatory environment, your risk tolerance, and your budget constraints. It defines the direction.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>A strategy might say:</b> "We're a health tech company selling to enterprise health systems. Our security program must satisfy HIPAA, achieve HITRUST i1 certification within 18 months, and enable us to pass enterprise procurement reviews. We'll take a risk-based approach, prioritizing controls that directly enable sales and protect patient data."
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>That's a strategy.</b> It doesn't tell you what to do on Monday. It tells you why you're doing anything at all and what success looks like.
                  </p>
                </div>
              </section>

              {/* ROADMAP */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  The roadmap: the when and the how
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    A{" "}
                    <Link to="/" className="text-sky-700 font-semibold hover:underline">
                      cybersecurity roadmap
                    </Link>{" "}
                    answers a different question: what specific things do we need to do, in what order, by when?
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    The roadmap is the execution plan. It takes the strategy's direction and breaks it into concrete, sequenced, time-bound initiatives with owners, dependencies, and milestones.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>A roadmap might say:</b>
                    <br />
                    <b>Q1:</b> Deploy MDM and EDR across all endpoints. Implement SSO with MFA. Write core policies. Set up Drata.
                    <br />
                    <b>Q2:</b> Complete risk assessment. Begin evidence collection. Conduct security awareness training. Start vendor reviews.
                    <br />
                    <b>Q3:</b> Pen test. Tabletop exercise. Internal audit. Remediate findings.
                    <br />
                    <b>Q4:</b> HITRUST readiness assessment. Engage assessor. Begin formal assessment.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    That's a roadmap. It tells you exactly what happens when.
                  </p>
                </div>
              </section>

              {/* WHY IT MATTERS */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Why the distinction matters
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Companies that confuse the two end up in one of two failure modes.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Strategy without a roadmap.</b> Leadership has a high-level understanding of what the company needs for security. "We need SOC 2." "We should be more secure." "Our customers are asking about compliance." But nobody has translated that into a sequenced plan with milestones, owners, and deadlines. The result is good intentions and no progress.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>This is the most common failure mode at startups.</b> The founders know security matters. They've had the conversation. They may have even hired a consultant who produced a strategy document. But without a roadmap, nothing gets scheduled, resourced, or executed. Six months later, the company is in the same position.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Roadmap without a strategy.</b> The security team is executing tasks, checking boxes, deploying tools, and running through compliance requirements. But the work isn't connected to business priorities. They're implementing controls that don't map to the risks that matter most. They're pursuing a framework that customers aren't asking for. They're spending budget on advanced capabilities while basic controls have gaps.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    This happens when a company hires a security person or engages a consultant who starts doing without first understanding why. Activity replaces strategy. The program looks busy but doesn't produce business results.
                  </p>
                </div>
              </section>

              {/* HOW THEY WORK TOGETHER */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  How they work together
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The strategy informs the roadmap. The roadmap operationalizes the strategy.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    When a customer asks about your security posture, the strategy is what you tell them: "We're a{" "}
                    <Link to="/soc2" className="text-sky-700 font-semibold hover:underline">
                      SOC 2 Type II
                    </Link>{" "}
                    certified company with an ongoing security program managed by a dedicated security team. We're currently pursuing{" "}
                    <Link to="/hitrust" className="text-sky-700 font-semibold hover:underline">
                      HITRUST certification
                    </Link>{" "}
                    to serve the healthcare market."
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    The roadmap is what your team uses to make that statement true.
                  </p>
                </div>
              </section>

              {/* WHEN EACH CHANGES */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  When each one changes
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The strategy changes when the business changes. New market, new customer segment, new regulatory requirement, acquisition, new product line. Strategy changes are infrequent, maybe once or twice a year.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    The roadmap changes more often. Timelines shift. Priorities adjust. A new risk emerges that needs immediate attention. A deal requires a certification earlier than planned. An incident reveals a gap that wasn't on the roadmap. The roadmap is updated quarterly at minimum.
                  </p>
                </div>
              </section>

              {/* WHAT A GOOD STRATEGY INCLUDES */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  What a good strategy includes
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Your business context:</b> what you do, who your customers are, what data you handle, what regulations apply.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Your risk posture:</b> the top risks to the business and your approach to managing them.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Your compliance requirements:</b> what frameworks you need, in what order, by when.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Your security principles:</b> how you make decisions. At Com-Sec, our principles include practical over theoretical, start simple and build, security should enable revenue, and substance over theater. Your principles should reflect how your company thinks about security.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Your success metrics:</b> how you know the program is working. Deal velocity improvement, questionnaire response time, audit findings reduction, mean time to detect and respond.
                  </p>
                </div>
              </section>

              {/* WHAT A GOOD ROADMAP INCLUDES */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  What a good roadmap includes
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Time-bound initiatives grouped into phases (typically quarters). Each initiative has an owner, a deadline, dependencies, and a definition of done. The initiatives are sequenced by priority: what must happen before what, what unblocks the most value, what has the tightest deadline.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Resource requirements:</b> what each initiative costs in money, time, and people. This prevents the common problem of a roadmap that's technically correct but impossible to execute with the available resources.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Milestones:</b> specific checkpoints that leadership can track. "
                    <Link to="/soc2-readiness" className="text-sky-700 font-semibold hover:underline">
                      SOC 2 readiness
                    </Link>{" "}
                    assessment complete by end of Q1" is a milestone. "Improve security posture" is not.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Dependencies:</b> what needs to happen before something else can start. You can't start a SOC 2 audit without a review period of evidence. You can't run a pen test retest without first remediating the findings. The roadmap captures these dependencies so nothing gets scheduled out of order.
                  </p>
                </div>
              </section>

              {/* HOW TO PRESENT */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  How to present each one
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Strategy goes to leadership and the board. It's a 1 to 2 page document that explains why the company is investing in security, what the goals are, and how progress will be measured. Non-technical. Business-focused.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    The roadmap goes to the team executing the work. It's a detailed plan with tasks, owners, timelines, and status tracking. It's the operating document that gets reviewed weekly and updated as things change.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    A{" "}
                    <Link to="/fractional-security-leadership" className="text-sky-700 font-semibold hover:underline">
                      fractional CISO
                    </Link>{" "}
                    owns both. They present the strategy to leadership and drive the roadmap with the team. The strategy sets the direction. The roadmap makes it happen.
                  </p>
                </div>
              </section>

              {/* BOTTOM LINE */}
              <section className="mb-10">
                <div className="bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200 rounded-xl p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    The bottom line
                  </h2>

                  <div className="space-y-4">
                    <p className="text-gray-800 leading-relaxed text-lg">
                      A strategy without a roadmap is a plan with no action. A roadmap without a strategy is action with no direction. You need both, and they need to be connected.
                    </p>

                    <p className="text-gray-800 leading-relaxed text-lg">
                      If someone asks you about your cybersecurity strategy and you can explain the business rationale, the risk priorities, and the compliance goals in 60 seconds, you have a strategy. If you can also show them a phased plan with milestones and owners that's being actively tracked, you have a roadmap. Both together is what a mature security program looks like.
                    </p>
                  </div>
                </div>
              </section>

              {/* AUTHOR */}
              <section className="mb-12 border-t border-gray-200 pt-8">
                <p className="text-gray-600 text-base italic">
                  Farbod Fakhrai is the founder of{" "}
                  <a
                    href="https://com-sec.io/"
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
                Need a strategy and a roadmap that actually connect?
              </h3>

              <p className="text-sky-200 text-lg mb-6 max-w-xl mx-auto leading-relaxed">
                Com-Sec helps startups and growth-stage companies build a security strategy — and the roadmap that makes it real.
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
