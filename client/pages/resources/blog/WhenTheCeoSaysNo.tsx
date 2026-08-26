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

export default function WhenTheCeoSaysNo() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "When the CEO Says No to Your Security Recommendation",
      text: "The role of security, compliance, and legal is to identify risk and recommend a course of action. The leader's job is to decide. Here's how to make that relationship work.",
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

  const scenarios = [
    {
      title: "The security tool that costs more than the company can justify",
      body: "You want a SIEM. It's $40,000 a year. The company has 25 employees and $2M in revenue. Leadership says no. They're not wrong — you can get meaningful visibility with cheaper alternatives and revisit the SIEM when the company grows into it.",
    },
    {
      title: "The compliance control that slows down engineering",
      body: "You recommend mandatory code reviews for every pull request with a 24-hour SLA. Engineering leadership pushes back because it'll slow deployment velocity by 30% during a critical product launch. You compromise on mandatory reviews for production-facing changes and self-merge for internal tooling. That's a reasonable trade-off, not a capitulation.",
    },
    {
      title: "The vendor that doesn't meet your security standards",
      body: "You flag that a critical vendor has gaps in their security posture. Sales tells you the vendor relationship drives $500K in annual revenue and there's no viable alternative. Leadership decides to continue the relationship with additional monitoring. They've accepted the risk with their eyes open.",
    },
    {
      title: "The policy that the board won't fund",
      body: "You recommend a disaster recovery solution that would cut RTO from 48 hours to 4 hours. The cost is $80,000 a year. The board decides the business can tolerate the longer recovery time given the probability of a full outage. That's a calculated decision, not negligence.",
    },
  ];

  const presentingTips = [
    {
      title: "Quantify the business impact",
      body: "\"We need endpoint detection\" is a security ask. \"Without endpoint detection, a single compromised laptop gives an attacker access to our entire cloud environment. Our cyber insurance requires it, and two enterprise prospects asked about it in security questionnaires last quarter\" is a business case.",
    },
    {
      title: "Present options, not ultimatums",
      body: "Don't bring one recommendation at one price. Bring three: the ideal solution, a middle-ground option, and the minimum viable control. Let leadership choose based on what the business can absorb. You've done your job by making sure every option addresses the risk to some degree.",
    },
    {
      title: "Be specific about consequences",
      body: "\"This creates risk\" is vague. \"If we don't address this and a breach occurs involving customer data, we're required to notify affected individuals within 60 days under HIPAA. Our cyber insurance deductible is $50,000. We could face OCR investigation and fines up to $1.5M per violation category\" is specific. Leaders make better decisions with specific consequences, not abstract risk scores.",
    },
    {
      title: "Separate the urgent from the important",
      body: "Not every recommendation needs to happen this quarter. Prioritize. Tell leadership what needs to happen now, what can wait 6 months, and what's a long-term investment. If everything is urgent, nothing is.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          When the CEO Says No to Your Security Recommendation
        </title>

        <meta
          name="description"
          content="The role of security, compliance, and legal is to advise, not to decide. Here's how to tell the difference between risk acceptance and negligence, and how to present risk so leaders can actually decide."
        />

        <link
          rel="canonical"
          href="https://com-sec.io/blog/when-the-ceo-says-no-to-your-security-recommendation"
        />

        <meta
          property="og:title"
          content="When the CEO Says No to Your Security Recommendation"
        />

        <meta
          property="og:description"
          content="The role of security, compliance, and legal is to advise, not to decide. Here's how to tell the difference between risk acceptance and negligence."
        />

        <meta
          property="og:image"
          content="https://com-sec.io/images/blog-images/when-the-ceo-says-no-to-your-security-recommendation.png"
        />

        <meta
          property="og:url"
          content="https://com-sec.io/blog/when-the-ceo-says-no-to-your-security-recommendation"
        />

        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Com-Sec" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:author" content="Farbod Fakhrai" />
        <meta property="article:published_time" content="2026-08-05T00:00:00Z" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comsec" />

        <meta
          name="twitter:title"
          content="When the CEO Says No to Your Security Recommendation"
        />

        <meta
          name="twitter:description"
          content="The role of security, compliance, and legal is to advise, not to decide. Here's how to tell the difference between risk acceptance and negligence."
        />

        <meta
          name="twitter:image"
          content="https://com-sec.io/images/blog-images/when-the-ceo-says-no-to-your-security-recommendation.png"
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
                vCISO Insights
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-balance">
              When the CEO Says No to Your Security Recommendation
            </h1>

            <p className="text-xl text-sky-100 mb-8 leading-relaxed">
              Why a rejected recommendation isn't a failure of your security
              program, and how to make sure risk acceptance never turns into
              negligence.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sky-200">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>August 5, 2026</span>
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
                src="/images/blog-images/when-the-ceo-says-no-to-your-security-recommendation.png"
                alt="When the CEO Says No to Your Security Recommendation"
                className="rounded-xl shadow-md max-w-xl w-full h-auto"
              />
            </div>

            <div className="prose prose-lg max-w-none">

              {/* INTRO */}
              <section className="mb-10">
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    It's going to happen. You bring a recommendation to leadership. It's the right thing to do from a security, compliance, or legal perspective. And the answer is no.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Not because they don't care. Because the cost is too high, the timing is wrong, or the business can't absorb the impact right now.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    This is normal. And if you're in security or compliance and it's never happened to you, you're either not pushing hard enough or you're not paying attention.
                  </p>
                </div>
              </section>

              {/* ADVISE NOT DECIDE */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  The job is to advise, not to decide
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    This is the part a lot of security professionals struggle with, especially early in their careers. You see the risk clearly. You know what the right control is. You've done the research, built the business case, and presented it well. And the CEO, the board, or the CTO says: "I understand the risk. We're not doing that right now."
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    That's their call to make. Not yours.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The role of security, compliance, and legal is to identify risk, quantify it as clearly as possible, recommend a course of action, and explain the potential consequences of not acting. That's the job. The leader's job is to weigh that recommendation against everything else: revenue targets, runway, headcount constraints, customer commitments, product timelines, and a dozen other factors you may not have full visibility into.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    When they decide to accept the risk, that's not a failure of your security program. That's risk management working as designed.
                  </p>
                </div>
              </section>

              {/* WHERE IT GETS REAL */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  Where it gets real
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Here are the scenarios I see regularly:
                  </p>
                  <div className="space-y-4">
                    {scenarios.map((scenario, index) => (
                      <div
                        key={index}
                        className="bg-sky-50 border-l-4 border-sky-500 rounded-r-lg p-4"
                      >
                        <p className="text-gray-800 text-lg">
                          <b>{scenario.title}.</b> {scenario.body}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* RISK ACCEPTANCE VS NEGLIGENCE */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  The difference between risk acceptance and negligence
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    This is the line that matters.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Risk acceptance is when leadership understands the risk, understands the potential consequences, and makes a deliberate decision to accept it based on business factors. That decision is documented. The risk stays on the register. It gets reviewed periodically. If circumstances change, the decision gets revisited.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Negligence is when nobody told leadership the risk existed, or when the risk was communicated and leadership ignored it without any deliberation, or when the decision was never documented and everyone pretends the conversation didn't happen.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Your job is to make sure the first scenario happens, not the second.
                  </p>
                </div>
              </section>

              {/* HOW TO PRESENT RISK */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  How to present risk so leaders can actually decide
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Most security recommendations fail not because leadership doesn't care, but because the recommendation is presented in a way that doesn't connect to how they think.
                  </p>
                  <div className="space-y-4">
                    {presentingTips.map((tip, index) => (
                      <div
                        key={index}
                        className="bg-sky-50 border-l-4 border-sky-500 rounded-r-lg p-4"
                      >
                        <p className="text-gray-800 text-lg">
                          <b>{tip.title}.</b> {tip.body}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* DOCUMENT EVERYTHING */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  Document everything
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    This is non-negotiable.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    When leadership accepts a risk, document it. The risk, the recommendation, the decision, who made it, and the date. Put it in your risk register. Review it quarterly.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    This protects the company and it protects you. If something goes wrong and a regulator or a customer asks "did you know about this risk?" the answer needs to be: "Yes. We identified it, we recommended a mitigation, leadership made a deliberate decision to accept the risk based on these factors, and we documented it here."
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    That's a defensible position. "We never discussed it" is not.
                  </p>
                </div>
              </section>

              {/* VCISO PERSPECTIVE */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  The vCISO perspective
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    As a vCISO, I'm in this position constantly. I advise multiple companies. I make recommendations that I believe are right. And sometimes the founder or CEO says no.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    My job in that moment is to make sure they understand what they're accepting, document the decision, and move on to the next priority. I don't take it personally. I don't relitigate it every meeting. I don't go around leadership to make it happen anyway.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    What I do is revisit it when the context changes. The company closes a bigger customer with stricter security requirements. A competitor gets breached. A regulation takes effect. The risk calculus shifts and sometimes the recommendation that got a no six months ago gets a yes today because the business context changed.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    That's how the relationship works. Security advises. Leadership decides. Both sides need to trust the process.
                  </p>
                </div>
              </section>

              {/* WHEN TO PUSH HARDER */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  When to push harder
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    All of that said, there are times when accepting the risk is the wrong call and you need to say so clearly.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    If the risk involves potential harm to people — patient safety, physical security, situations where the consequences aren't just financial.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    If the risk violates a legal or regulatory requirement. "We've decided not to comply with HIPAA" isn't risk acceptance. That's a legal exposure that leadership may not fully understand.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    If the risk is existential — a vulnerability that could result in complete data loss, a breach that would end customer trust permanently, or a gap that would void your cyber insurance coverage.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    In these situations, your job is to escalate, be direct, and make sure leadership understands the severity. Put it in writing. If they still say no, you've done your job. The decision is documented and the accountability is clear.
                  </p>
                </div>
              </section>

              {/* BOTTOM LINE */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  The bottom line
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Security is not a veto. Compliance is not a veto. Legal is not a veto. These functions exist to give leadership the information they need to make informed decisions about risk.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Sometimes the right business decision is to accept a security risk. Sometimes the budget isn't there. Sometimes the timing is wrong. Sometimes the trade-off is worth it.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The job is to advise clearly, quantify honestly, present options, document decisions, and revisit when circumstances change. That's what a mature security program looks like. Not one where every recommendation gets approved, but one where every risk gets a deliberate decision.
                  </p>
                </div>
              </section>

{/* AUTHOR */}
              <section className="mb-12 border-t border-gray-200 pt-8">

                <p className="text-gray-600 text-base italic">
                  Farbod Fakhrai is the founder of COM-SEC, a {" "}
                  <a
                    href="https://com-sec.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-700 font-semibold hover:underline"
                  >
                    cybersecurity and compliance
                  </a> consulting firm supporting startups and growth-stage companies. [com-sec.com]
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
                Need a security voice at the leadership table?
              </h3>
              <p className="text-sky-200 text-lg mb-6 max-w-xl mx-auto leading-relaxed">
                Com-Sec's vCISO services help startups and growth-stage companies quantify risk, present clear options to leadership, and document decisions that hold up to auditors and regulators.
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

        <Footer />
      </div>
    </>
  );
}
