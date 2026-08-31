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
  Check,
  CheckCircle,
} from "lucide-react";

export default function WhatAVcisoActuallyDoesDayToDay() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "What a vCISO Actually Does Day to Day",
      text: "Everyone sells vCISO services. Most companies buying one have no idea what they're actually getting. Here's what a vCISO should actually be doing for your company, week to week.",
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

  const weekToWeekOps = [
    {
      title: "Driving the compliance program",
      body: "SOC 2, HIPAA, ISO 27001, HITRUST, whatever your customers require. The vCISO owns the roadmap, manages the GRC platform, coordinates with auditors, prepares evidence, and keeps the program moving between audits. Not once a year during audit season. Every week. Controls don't maintain themselves.",
    },
    {
      title: "Answering security questionnaires",
      body: "Enterprise customers send these constantly. A good vCISO has a response library built from your actual controls and can turn around a 200-question questionnaire in days, not weeks. They know how to answer specifically and defensibly because they built the controls being described.",
    },
    {
      title: "Managing vendor risk",
      body: "Reviewing vendor SOC 2 reports, maintaining BAAs and DPAs, keeping the vendor register current, and evaluating new vendors before they're onboarded. When a vendor has a security incident, the vCISO assesses the impact and coordinates the response.",
    },
    {
      title: "Running access reviews",
      body: "Quarterly reviews of who has access to what, across every system. Identifying orphaned accounts, over-privileged users, and access that no longer matches someone's role. Documenting the review for your auditor.",
    },
    {
      title: "Coordinating incident response",
      body: "When something goes wrong, the vCISO is the first call. They coordinate containment, work with forensics, manage the insurance carrier relationship, and handle customer and regulatory communication. Between incidents, they maintain the IR plan and run tabletop exercises.",
    },
    {
      title: "Advising leadership",
      body: "Translating technical risk into business language for the CEO, board, or investors. \u201cHere's our risk posture, here's what we've done, here's what's next, here's what I need from you.\u201d One page, once a quarter, clear enough for a non-technical board member to understand.",
    },
    {
      title: "Managing security tools",
      body: "Overseeing your EDR, MDM, SIEM or logging, email security, and cloud security configuration. Not necessarily configuring them directly (that might be your MSP or IT team), but ensuring they're tuned, monitored, and actually providing value.",
    },
    {
      title: "Training and awareness",
      body: "Running security awareness training, phishing simulations, and new-hire security onboarding. Keeping the team current on threats relevant to your industry.",
    },
    {
      title: "Policy maintenance",
      body: "Keeping your policies current, accurate, and aligned with how the company actually operates. Policies that were written for SOC 2 readiness 18 months ago and never updated don't pass audit scrutiny.",
    },
  ];

  const evaluationQuestions = [
    {
      title: "What does their engagement cadence look like?",
      body: "If the answer is \u201cmonthly check-ins,\u201d that's a consultant, not a vCISO. You want weekly involvement at minimum.",
    },
    {
      title: "How many clients do they manage simultaneously?",
      body: "If it's 30, you're getting 2 hours a week. If it's 5 to 8, you're getting real attention.",
    },
    {
      title: "What's their compliance experience?",
      body: "Can they manage SOC 2, HIPAA, HITRUST, and ISO 27001? Do they have auditor relationships? Have they actually been through the audit process, not just prepared for it?",
    },
    {
      title: "How do they handle incidents?",
      body: "What's their response time? Who do they coordinate with? Have they managed a real incident before?",
    },
    {
      title: "Can they provide references?",
      body: "Talk to a current client. Ask whether the vCISO is proactive or reactive. Whether they drive the program or wait to be asked. Whether they've made the client's life easier or just added another meeting to the calendar.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>What a vCISO Actually Does Day to Day</title>

        <meta
          name="description"
          content="Everyone sells vCISO services. Most companies buying one have no idea what they're actually getting. What a vCISO should be doing week to week, what the role isn't, and how to evaluate one."
        />

        <link
          rel="canonical"
          href="https://com-sec.io/blog/what-a-vciso-actually-does-day-to-day"
        />

        <meta
          property="og:title"
          content="What a vCISO Actually Does Day to Day"
        />

        <meta
          property="og:description"
          content="Everyone sells vCISO services. Most companies buying one have no idea what they're actually getting. What a vCISO should be doing week to week, what the role isn't, and how to evaluate one."
        />

        <meta
          property="og:image"
          content="https://com-sec.io/images/blog-images/what-a-vciso-actually-does-day-to-day.png"
        />

        <meta
          property="og:url"
          content="https://com-sec.io/blog/what-a-vciso-actually-does-day-to-day"
        />

        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Com-Sec" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:author" content="Farbod Fakhrai" />
        <meta property="article:published_time" content="2026-08-31T00:00:00Z" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comsec" />

        <meta
          name="twitter:title"
          content="What a vCISO Actually Does Day to Day"
        />

        <meta
          name="twitter:description"
          content="Everyone sells vCISO services. Most companies buying one have no idea what they're actually getting. What a vCISO should be doing week to week, what the role isn't, and how to evaluate one."
        />

        <meta
          name="twitter:image"
          content="https://com-sec.io/images/blog-images/what-a-vciso-actually-does-day-to-day.png"
        />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navigation />

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
                Security
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-balance">
              What a vCISO Actually Does Day to Day
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sky-200">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>August 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>9 min read</span>
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

        <article className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 flex justify-center">
              <img
                src="/images/blog-images/what-a-vciso-actually-does-day-to-day.png"
                alt="What a vCISO Actually Does Day to Day"
                className="rounded-xl shadow-md max-w-xl w-full h-auto"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <section className="mb-10">
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Everyone sells vCISO services. Most companies buying
                    one have no idea what they're actually getting.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The title sounds impressive. Virtual Chief Information
                    Security Officer. But when I talk to founders who've
                    hired a vCISO before and weren't happy, the complaint
                    is always the same: "They showed up once a month, gave
                    us a report we didn't read, and nothing changed."
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    That's not a vCISO. That's a consultant with a
                    recurring invoice. There's nothing wrong with this,
                    it's just not what a vCISO does.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Here's what a vCISO should actually be doing for your
                    company, week to week.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  Week to week operations
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    A good vCISO is embedded in your business. Not
                    full-time, but consistently present. For most
                    companies between 15 and 150 employees, that's 10 to
                    20 hours per week. Here's where those hours go.
                  </p>
                  <div className="space-y-4">
                    {weekToWeekOps.map((item, index) => (
                      <div
                        key={index}
                        className="bg-sky-50 border-l-4 border-sky-500 rounded-r-lg p-4"
                      >
                        <p className="text-gray-800 text-lg">
                          <b>{item.title}.</b> {item.body}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  What a vCISO is NOT
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    A vCISO is not a penetration tester. They'll coordinate
                    the pen test and manage remediation, but they're not
                    the one running Burp Suite against your application.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    A vCISO is not your IT helpdesk. They don't reset
                    passwords, deploy laptops, or troubleshoot WiFi.
                    That's your MSP or IT team.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    A vCISO is not a project consultant who shows up,
                    delivers a report, and disappears. They're an ongoing
                    member of your leadership team who owns a critical
                    function.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    A vCISO is not a tool. Platforms like Drata, Vanta, and
                    Rippling automate evidence collection and monitoring.
                    They don't make decisions, advise leadership,
                    coordinate auditors, or respond to incidents. The
                    vCISO uses these tools. They don't replace the vCISO.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  When you need one
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The trigger is usually one of these: a customer asks a
                    security question you can't answer, a deal stalls
                    because you don't have{" "}
                    <Link
                      to="/soc2"
                      className="text-sky-700 underline hover:text-sky-900"
                    >
                      SOC 2
                    </Link>
                    , you're entering healthcare and{" "}
                    <Link
                      to="/hipaa"
                      className="text-sky-700 underline hover:text-sky-900"
                    >
                      HIPAA
                    </Link>{" "}
                    is now relevant, your board or investors start asking
                    about security, or you've had an incident and realized
                    nobody owns the response.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    For most companies, the right time is when you have 15
                    to 50 employees and security has become important
                    enough to need dedicated attention but not enough to
                    justify a $250,000 full-time hire.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  What it costs
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    $3,000 to $8,000 per month depending on scope,
                    complexity, and the number of frameworks you're
                    managing. Compare that to a full-time CISO at $200,000
                    to $350,000 in total compensation.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The vCISO model gives you experienced security
                    leadership at a fraction of the cost, and you get
                    someone who's seen dozens of environments across
                    multiple industries, not just yours. That breadth of
                    experience is a feature, not a limitation.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  How to evaluate a vCISO
                </h2>
                <div className="space-y-5">
                  <div className="space-y-4">
                    {evaluationQuestions.map((item, index) => (
                      <div
                        key={index}
                        className="bg-sky-50 border-l-4 border-sky-500 rounded-r-lg p-4"
                      >
                        <p className="text-gray-800 text-lg">
                          <b>{item.title}</b> {item.body}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  What we do
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    At Com-Sec, vCISO services are our core offering. We
                    embed with your team, drive your security and
                    compliance program, coordinate auditors and pen
                    testers, answer your customer questionnaires, manage
                    your vendor risk, and serve as your security
                    leadership. We're not a monthly check-in. We're your
                    security team.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    For healthcare and health tech companies, we bring
                    deep experience across{" "}
                    <Link
                      to="/hipaa"
                      className="text-sky-700 underline hover:text-sky-900"
                    >
                      HIPAA
                    </Link>
                    , HITRUST (e1, i1, and r2),{" "}
                    <Link
                      to="/soc2"
                      className="text-sky-700 underline hover:text-sky-900"
                    >
                      SOC 2
                    </Link>
                    , and{" "}
                    <Link
                      to="/iso27001"
                      className="text-sky-700 underline hover:text-sky-900"
                    >
                      ISO 27001
                    </Link>
                    . We've managed compliance programs for companies from
                    pre-revenue through acquisition.
                  </p>
                </div>
              </section>

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
                  , a cybersecurity and compliance consulting firm supporting
                  startups and growth-stage companies, with deep expertise
                  in healthcare and health tech.
                </p>
              </section>
            </div>
          </div>
        </article>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-sky-900 via-blue-800 to-slate-900 rounded-xl px-8 py-10 text-white text-center shadow-lg">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Not sure if your vCISO is actually doing the job?
              </h3>
              <p className="text-sky-200 text-lg mb-6 max-w-xl mx-auto leading-relaxed">
                Com-Sec embeds with your team as your ongoing security
                leadership, driving compliance, vendor risk, and incident
                response week to week, not once a month.
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
