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

export default function WhatDoesAFractionalCisoDo() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "What Does a Fractional CISO Do? Roles and Responsibilities",
      text: "The CISO title gets thrown around loosely, and 'fractional' makes it even more ambiguous. Here's what the role should actually include.",
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
      title: "Why Security Awareness Training Matters for Every Employee",
      excerpt:
        "Security awareness training is not going to stop breaches. But it still matters. Here's why, and how to do it in a way that actually provides value.",
      link: "/blog/why-security-awareness-training-matters-for-every-employee",
      category: "Security Awareness",
      emoji: "🎯",
    },
  ];

  return (
    <>
      <Helmet>
        <title>What Does a Fractional CISO Do? Roles and Responsibilities</title>

        <meta
          name="description"
          content="The CISO title gets thrown around loosely, and 'fractional' makes it even more ambiguous. Here's what a fractional CISO's role and responsibilities should actually include, week to week."
        />

        <link
          rel="canonical"
          href="https://com-sec.io/blog/what-does-a-fractional-ciso-do-roles-and-responsibilities"
        />

        <meta
          property="og:title"
          content="What Does a Fractional CISO Do? Roles and Responsibilities"
        />

        <meta
          property="og:description"
          content="The CISO title gets thrown around loosely. Here's what the role should actually include, week to week."
        />

        <meta
          property="og:image"
          content="https://com-sec.io/images/blog-images/what-does-a-fractional-ciso-do-roles-and-responsibilities.png"
        />

        <meta
          property="og:url"
          content="https://com-sec.io/blog/what-does-a-fractional-ciso-do-roles-and-responsibilities"
        />

        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Com-Sec" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:author" content="Farbod Fakhrai" />
        <meta property="article:published_time" content="2026-09-30T00:00:00Z" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comsec" />

        <meta
          name="twitter:title"
          content="What Does a Fractional CISO Do? Roles and Responsibilities"
        />

        <meta
          name="twitter:description"
          content="The CISO title gets thrown around loosely. Here's what the role should actually include, week to week."
        />

        <meta
          name="twitter:image"
          content="https://com-sec.io/images/blog-images/what-does-a-fractional-ciso-do-roles-and-responsibilities.png"
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
              What Does a Fractional CISO Do? Roles and Responsibilities
            </h1>

            <p className="text-xl text-sky-100 mb-8 leading-relaxed">
              The CISO title gets thrown around loosely, and "fractional" makes it even more ambiguous. Here's what the role should actually include.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sky-200">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>September 30, 2026</span>
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
                src="/images/blog-images/what-does-a-fractional-ciso-do-roles-and-responsibilities.png"
                alt="What Does a Fractional CISO Do? Roles and Responsibilities"
                className="rounded-xl shadow-md max-w-xl w-full h-auto"
              />
            </div>

            <div className="prose prose-lg max-w-none">

              {/* INTRO */}
              <section className="mb-10">
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The title sounds impressive. Fractional Chief Information Security Officer. But most founders and CEOs who are considering hiring one have the same question: what does this person actually do, day to day, week to week?
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    It's a fair question. The CISO title gets thrown around loosely in the industry, and "fractional" makes it even more ambiguous. Some fractional CISOs show up once a month and send a report. Some are deeply embedded in the business. The range is enormous, and the value you get depends entirely on what the engagement actually includes.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Here's what it should include.
                  </p>
                </div>
              </section>

              {/* CORE RESPONSIBILITIES */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  The core responsibilities
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Security strategy and program ownership</b>. The fractional CISO owns your security program. Not advises on it. Not reviews it. Owns it. They define the strategy, build the roadmap, and drive execution week by week. If something isn't getting done, it's their responsibility to flag it, escalate it, or fix it.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    This is the fundamental difference between a fractional CISO and a security consultant. The consultant gives you recommendations. The fractional CISO gives you results.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Compliance management.</b>{" "}
                    <b>
                      <Link to="/soc2" className="text-sky-700 font-semibold hover:underline">
                        SOC 2
                      </Link>
                    </b>
                    ,{" "}
                    <b>
                      <Link to="/hipaa" className="text-sky-700 font-semibold hover:underline">
                        HIPAA
                      </Link>
                    </b>
                    ,{" "}
                    <b>
                      <Link to="/hitrust" className="text-sky-700 font-semibold hover:underline">
                        HITRUST
                      </Link>
                    </b>
                    ,{" "}
                    <b>
                      <Link to="/iso27001" className="text-sky-700 font-semibold hover:underline">
                        ISO 27001
                      </Link>
                    </b>
                    , ISO 42001. Whatever framework your customers require, the fractional CISO manages the program. That includes: setting up and maintaining the GRC platform, mapping controls to framework requirements, collecting and monitoring evidence, writing and updating policies, coordinating with auditors, preparing for and managing audits, and tracking remediation of any findings.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    For most companies in our client base, compliance management consumes 30 to 40% of the fractional CISO's time. It's ongoing, not seasonal. The companies that treat compliance as a continuous operation have clean audits. The ones that sprint before audit season don't.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Risk management.</b> Identifying, assessing, and treating risks. Maintaining the risk register. Conducting annual risk assessments. Advising leadership on risk acceptance decisions. Reviewing the risk posture when the business changes (new markets, new products, new vendors, acquisitions).
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Risk management isn't a document exercise. A good fractional CISO connects risks to business outcomes. "If this vendor gets breached, we're required to notify 15,000 patients within 60 days and our cyber insurance deductible is $50,000" is a risk statement that drives decisions. "Medium risk, moderate impact" is not.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Security questionnaire response.</b> Enterprise customers send security questionnaires. A lot of them. A fractional CISO maintains a response library built from your actual controls and can turn around a 200-question questionnaire in days, not weeks.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    This is one of the most immediately valuable things a fractional CISO does. Every questionnaire that gets answered quickly and competently accelerates a deal. Every one that sits unanswered for 3 weeks slows one down.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Vendor risk management.</b> Evaluating the security posture of your third-party vendors before onboarding. Reviewing vendor SOC 2 reports. Ensuring BAAs and DPAs are in place. Maintaining the vendor register. Conducting annual vendor reviews. Managing vendor incidents.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Your company's risk isn't limited to your own environment. Every vendor that touches your data is part of your risk surface. The fractional CISO keeps that surface managed.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Incident response.</b> When something goes wrong, the fractional CISO is the first call. They coordinate containment, work with forensics, manage the cyber insurance claim, handle regulatory notifications if required, and communicate with affected parties.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Between incidents, they maintain the incident response plan, run tabletop exercises, and make sure the team knows what to do before they need to do it.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Access management oversight.</b> Ensuring that access to systems is granted, reviewed, and revoked consistently. Overseeing quarterly access reviews. Making sure the offboarding process works. Reviewing privileged access. Identifying orphaned accounts and excessive permissions.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    This is where most SOC 2 exceptions come from, and it's where a fractional CISO's operational discipline shows up most clearly.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Security tool oversight.</b> Overseeing your EDR, MDM, email security, SIEM or logging, cloud security, and vulnerability management tools. Not necessarily configuring them (that might be your MSP or IT team), but ensuring they're properly tuned, monitored, and producing value. When alerts fire, someone needs to be responsible for triage and response. The fractional CISO ensures that happens.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Security awareness training.</b> Managing the training program, selecting content, running phishing simulations, and tracking completion. Ensuring new hires are trained within 30 days. Updating training content when policies or tools change.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Board and investor reporting.</b> Translating security posture into business language for leadership, the board, or investors. A one-page quarterly summary covering compliance status, key risks, incident summary, program progress, and investment needs.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    A CEO who can confidently answer security questions during an investor meeting signals operational maturity. The fractional CISO gives them the material to do it.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Pen test coordination</b>. Scoping, procuring, and coordinating annual penetration tests. Reviewing findings. Managing remediation. Verifying fixes. Integrating results into the risk assessment and compliance evidence.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>AI governance</b>. In 2026, this is no longer optional. Inventorying AI tools in use across the organization. Defining acceptable use policies for AI. Evaluating AI vendor security posture. Ensuring human oversight for AI-generated outputs. Monitoring for unapproved AI tool usage. Advising on AI-specific compliance requirements (EU AI Act, AIUC-1, ISO 42001).
                  </p>
                </div>
              </section>

              {/* WHAT A WEEK LOOKS LIKE */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  What a week looks like
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    For a typical engagement (20 to 100 employee company, one or two <b>compliance frameworks</b>, 10 to 20 hours per week), here's a representative week:
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Monday:</b> Review{" "}
                    <b>
                      <Link to="/compliance-privacy-grc" className="text-sky-700 font-semibold hover:underline">
                        GRC platform
                      </Link>
                    </b>{" "}
                    for failing monitors and overdue tasks. Triage any new findings. Check security tool alerts from the weekend. Update ticket tracking.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Tuesday:</b> Weekly sync with the client's internal team. Review progress on the roadmap. Discuss any blockers or new requirements. Address open items from the previous week.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Wednesday:</b> Respond to a customer security questionnaire. Review a vendor's SOC 2 report for a new tool the engineering team wants to adopt. Draft a vendor risk assessment.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Thursday:</b> Prepare evidence for an upcoming audit. Update two policies that need annual review. Follow up on a pen test remediation item that's past due.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Friday:</b> Review access review results from the quarter. Coordinate with the MDM provider on a new device enrollment policy. Update the board security summary for next week's meeting.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    That's a real week. Not theoretical. That's what the engagement looks like when it's working.
                  </p>
                </div>
              </section>

              {/* GOOD VS BAD */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  The difference between good and bad
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    A good{" "}
                    <b>
                      <Link to="/fractional-security-leadership" className="text-sky-700 font-semibold hover:underline">
                        fractional CISO
                      </Link>
                    </b>{" "}
                    is proactive. They don't wait for you to ask. They identify gaps before they become problems, flag risks before they become incidents, and drive the program forward without being pushed.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    A bad fractional CISO is reactive. They show up for monthly calls, answer questions when asked, and produce reports that nobody reads. The program doesn't move between meetings because nobody is driving it.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    The test: if your fractional CISO disappeared for a month, would your security program keep running? If yes, they've built something sustainable. If no, they're a single point of failure. If nobody would notice they were gone, they're not doing enough.
                  </p>
                </div>
              </section>

              {/* COST */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  What it costs
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    $3,000 to $8,000 per month for most engagements. The range depends on the company's size, complexity, number of frameworks, and how much of the operational work falls to the fractional CISO versus an internal team or MSP.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Compare that to a full-time CISO at $250,000 to $350,000+ in total compensation. For a company with 20 to 100 employees, the fractional model is 75 to 85% cheaper and provides the same strategic and operational leadership.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    The fractional CISO also brings something a full-time hire often can't: breadth of experience across dozens of environments, industries, and company stages. They've seen the patterns. They know what works at your size. They're not learning on your dime.
                  </p>
                </div>
              </section>

              {/* TRANSITION */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  When to transition to full-time
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The fractional model works until it doesn't. The inflection point is usually when the company reaches 150 to 200 employees, has multiple compliance frameworks, handles highly regulated data at scale, or has security operations complex enough to require full-time dedicated leadership.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    When that happens, the fractional CISO has already built the program, defined the role, and created the operating model that the full-time hire steps into. The transition is smooth because the foundation exists.
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
                      A{" "}
                      <b>
                        <Link to="/fractional-security-leadership" className="text-sky-700 font-semibold hover:underline">
                          fractional CISO
                        </Link>
                      </b>{" "}
                      owns your security program. Strategy, compliance, risk management, questionnaire response, vendor oversight, incident response, training, tool management, and leadership reporting. All of it. Week to week, not month to month.
                    </p>

                    <p className="text-gray-800 leading-relaxed text-lg">
                      If your current security leadership consists of "the CTO handles it when it comes up," you don't have security leadership. You have a gap. A fractional CISO fills it at a fraction of the cost of a full-time hire, with the experience of someone who's done this across dozens of companies.
                    </p>
                  </div>
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
                  consulting firm supporting startups and growth-stage companies.{" "}
                  <b>
                    <a
                      href="https://com-sec.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-700 font-semibold hover:underline"
                    >
                      com-sec.com
                    </a>
                  </b>
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
                Ready to fill the security leadership gap?
              </h3>

              <p className="text-sky-200 text-lg mb-6 max-w-xl mx-auto leading-relaxed">
                Com-Sec provides fractional CISOs who own your security program week to week — not just once a month.
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
