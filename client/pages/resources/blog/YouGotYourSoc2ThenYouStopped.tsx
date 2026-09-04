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

export default function YouGotYourSoc2ThenYouStopped() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "You Got Your SOC 2. Then You Stopped. Now the Next Audit Is 90 Days Away.",
      text: "Getting SOC 2 is the hard part. Keeping it is the discipline. Why compliance programs go dormant after the first audit, what the auditor finds when they do, and how to break the cycle.",
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

  const whatAuditorSees = [
    {
      title: "Evidence gaps",
      body: "Your policy says quarterly access reviews. The auditor asks for evidence from Q1 through Q4. You have Q1 (from the last audit push) and Q4 (from the current scramble). Q2 and Q3 don't exist. That's two exceptions on a single control.",
    },
    {
      title: "Stale policies",
      body: "Your information security policy references tools you no longer use, team members who left 6 months ago, and processes that have completely changed. Your AI governance policy doesn't exist because you started using AI tools after the last audit. Your vendor management policy lists vendors you've replaced.",
    },
    {
      title: "Orphaned accounts",
      body: "Employees and contractors who left during the dormant period still have active access to systems. The offboarding process worked during audit prep but nobody maintained it after the report was issued.",
    },
    {
      title: "Unmonitored evidence",
      body: "Your GRC platform shows 15 failing evidence monitors that have been red for months. Endpoint encryption checks failing because new devices were deployed without MDM enrollment. Access review tasks overdue. Training completion lapsed for recent hires.",
    },
    {
      title: "Scope changes that weren't documented",
      body: "You migrated from AWS to GCP. You added three new SaaS tools that process customer data. You launched a new product line. You started using AI in your workflow. None of this was reflected in your system description or control matrix.",
    },
    {
      title: "Missing vendor reviews",
      body: "Your vendor risk management control requires annual review of critical vendors' security posture. You reviewed them all during the first audit. None have been reviewed since. Three of those vendors have had security incidents in the interim that you don't know about.",
    },
  ];

  const howToBreakCycle = [
    {
      title: "Someone needs to own the program year-round",
      body: "Not during audit season. Year-round. This person monitors the GRC platform weekly, ensures evidence is being collected, follows up on overdue tasks, coordinates access reviews on schedule, and keeps policies current. At most companies our size, this is a vCISO engagement, not a full-time hire.",
    },
    {
      title: "Weekly touchpoints, not quarterly check-ins",
      body: "A 30-minute weekly sync between the program owner and the internal team catches issues before they become gaps. A failing evidence monitor gets fixed in week 1, not discovered in month 9. A new tool gets scoped into the program when it's adopted, not when the auditor asks about it.",
    },
    {
      title: "Treat the GRC platform as a live system, not an audit tool",
      body: "Drata, Vanta, Rippling: these platforms are designed for continuous monitoring. They alert you when evidence fails, when tasks are overdue, when controls drift. But only if someone is watching. Check it weekly. Respond to alerts. Keep the dashboard green.",
    },
    {
      title: "Schedule recurring controls in advance",
      body: "Access reviews: put them on the calendar quarterly with a named owner. Vendor reviews: schedule them annually with due dates. Policy reviews: assign them when each policy is due for update. Risk assessment: block time annually. If it's on the calendar with a name attached, it happens. If it's not, it doesn't.",
    },
    {
      title: "Keep your system description current",
      body: "When your environment changes (new cloud provider, new SaaS tools, new product, new office, organizational changes), update the system description. Don't wait for audit prep to discover that your description no longer matches reality.",
    },
  ];

  const whatWeDo = [
    {
      title: "Kickoff",
      body: "We get access to your GRC platform, your Slack or Teams, your ticketing system, and your key stakeholders. We assess where things stand: what's current, what's stale, what's broken, and what's missing.",
    },
    {
      title: "Cleanup",
      body: "We work through the backlog: failing evidence monitors, overdue access reviews, stale policies, untracked vendors, scope changes that weren't documented. We prioritize by what the auditor will test first and what creates the most risk.",
    },
    {
      title: "Ongoing management",
      body: "Weekly touchpoints with your team. We monitor the GRC platform, manage evidence collection, coordinate access reviews, keep policies current, handle vendor reviews, and prepare for the next audit cycle. When the auditor shows up, the evidence is already there, the controls have been operating all year, and the audit is a non-event.",
    },
    {
      title: "Audit coordination",
      body: "We work directly with your auditor. We prepare the evidence package, handle auditor requests, manage the timeline, and resolve any findings. Your team's involvement is minimal because the program has been running all year.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          You Got Your SOC 2. Then You Stopped. Now the Next Audit Is 90 Days
          Away.
        </title>

        <meta
          name="description"
          content="Getting SOC 2 is the hard part. Keeping it is the discipline. Why compliance programs go dormant after the first audit, what the auditor finds when they do, and how to break the cycle."
        />

        <link
          rel="canonical"
          href="https://com-sec.io/blog/you-got-your-soc-2-then-you-stopped"
        />

        <meta
          property="og:title"
          content="You Got Your SOC 2. Then You Stopped. Now the Next Audit Is 90 Days Away."
        />

        <meta
          property="og:description"
          content="Getting SOC 2 is the hard part. Keeping it is the discipline. Why compliance programs go dormant after the first audit, what the auditor finds when they do, and how to break the cycle."
        />

        <meta
          property="og:image"
          content="https://com-sec.io/images/blog-images/you-got-your-soc-2-then-you-stopped.png"
        />

        <meta
          property="og:url"
          content="https://com-sec.io/blog/you-got-your-soc-2-then-you-stopped"
        />

        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Com-Sec" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:author" content="Farbod Fakhrai" />
        <meta property="article:published_time" content="2026-09-03T00:00:00Z" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comsec" />

        <meta
          name="twitter:title"
          content="You Got Your SOC 2. Then You Stopped. Now the Next Audit Is 90 Days Away."
        />

        <meta
          name="twitter:description"
          content="Getting SOC 2 is the hard part. Keeping it is the discipline. Why compliance programs go dormant after the first audit, what the auditor finds when they do, and how to break the cycle."
        />

        <meta
          name="twitter:image"
          content="https://com-sec.io/images/blog-images/you-got-your-soc-2-then-you-stopped.png"
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
                Compliance
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-balance">
              You Got Your SOC 2. Then You Stopped. Now the Next Audit Is 90
              Days Away.
            </h1>

            <p className="text-xl text-sky-100 mb-8 leading-relaxed">
              Why compliance programs go dormant after the first audit, what
              the auditor finds when they do, and how to break the cycle.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sky-200">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>September 3, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>10 min read</span>
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
                src="/images/blog-images/you-got-your-soc-2-then-you-stopped.png"
                alt="You Got Your SOC 2. Then You Stopped. Now the Next Audit Is 90 Days Away."
                className="rounded-xl shadow-md max-w-xl w-full h-auto"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <section className="mb-10">
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    This is one of the most common calls we get.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    A company went through the effort to get their first{" "}
                    <Link
                      to="/soc2"
                      className="text-sky-700 underline hover:text-sky-900"
                    >
                      SOC 2
                    </Link>{" "}
                    report. They hired a consultant, set up a GRC
                    platform, wrote the policies, collected the evidence,
                    survived the audit. Report issued. Celebrations. The
                    sales team starts sending it to prospects. Deals
                    close.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Then everybody goes back to building product. Nobody
                    touches Vanta or Drata for 8 months. The policies
                    don't get reviewed. The access reviews stop happening.
                    The evidence monitors start failing and nobody
                    notices. New tools get added without being scoped into
                    the compliance program. Employees join and leave
                    without the controls being documented. The risk
                    assessment from last year still references a cloud
                    environment that's been completely restructured.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    And then the calendar reminder hits: your next audit
                    window opens in 90 days.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Now you're scrambling.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  How this happens
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    It's not negligence. It's the natural result of
                    treating SOC 2 as a project instead of a program.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The first audit gets all the attention because there's
                    a deal on the line or a customer requirement driving
                    urgency. Everyone rallies. The consultant leads the
                    effort. The team cooperates because there's a deadline
                    and a clear business reason.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Once the report is issued, the urgency disappears. The
                    consultant's engagement ends. The person who drove the
                    project internally moves on to other priorities. The
                    GRC platform becomes another tab nobody opens. The
                    controls that were operating during the audit period
                    start to drift because nobody is maintaining them.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    This isn't unique to small companies. I've seen it at
                    200-person companies with dedicated security teams.
                    The audit creates a burst of activity, and then the
                    program goes dormant until the next audit approaches.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The problem is that {" "}
                  <a
                    href="https://com-sec.io/soc2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-700 font-semibold hover:underline"
                  >
                    SOC 2 Type II
                  </a> covers a continuous
                    review period, usually 12 months. The auditor isn't
                    just looking at your controls today. They're looking
                    at whether your controls operated effectively
                    throughout the entire period. If your access reviews
                    stopped in March and the audit covers January through
                    December, you have a 9-month gap that the auditor will
                    find.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  What the auditor sees when you've let things slide
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Auditors are good at spotting programs that went
                    dormant. Here's what they find:
                  </p>
                  <div className="space-y-4">
                    {whatAuditorSees.map((item, index) => (
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
                  What this means for your report
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Exceptions in a SOC 2 report aren't the end of the
                    world. We've covered that before. But there's a
                    difference between one or two minor exceptions and a
                    report that shows a pattern of controls not operating
                    during the middle of the review period.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    A few exceptions say: this company has a program, they
                    had some gaps, they're addressing them. That's normal
                    and most enterprise buyers understand it.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    A pattern of dormant controls says: this company only
                    does security when the auditor is watching. That's a
                    credibility problem. Sophisticated buyers read the
                    testing section of your report carefully, and a
                    cluster of exceptions in the same time period tells a
                    story about program maturity that no executive summary
                    can fix.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    In the worst case, if enough controls show gaps during
                    the review period, the auditor may issue a qualified
                    opinion. That's when the auditor says the controls
                    were not operating effectively across the period. A
                    qualified SOC 2 report is worse than no report at all
                    in many procurement conversations because it
                    explicitly documents the failures.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  The 90-day scramble
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Here's what happens when companies realize the audit
                    is approaching and the program has been dormant.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Week 1 is panic. Someone logs into the GRC platform
                    for the first time in months and sees a wall of red.
                    Failed monitors, overdue tasks, missing evidence. They
                    start assigning tasks to people who weren't involved
                    in the first audit and don't know what they're looking
                    at.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Weeks 2 through 4 are catch-up. Access reviews get
                    done all at once. Policies get hastily updated.
                    Evidence gets backdated or reconstructed from memory.
                    New tools get added to the scope. The system
                    description gets rewritten. Everything that should
                    have happened over 12 months gets compressed into 4
                    weeks.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Weeks 5 through 8 are the audit itself. The auditor
                    arrives and starts testing. They see that all the
                    access reviews happened in the same 2-week window.
                    They see policies with revision dates that are
                    suspiciously recent. They see evidence gaps in the
                    middle of the review period that no amount of
                    last-minute work can fill.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The result: a report with more exceptions than
                    necessary, a stressful audit experience, and a team
                    that's exhausted and resentful of compliance. Then the
                    cycle repeats.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  How to break the cycle
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The fix isn't complicated. It's just consistent.
                  </p>
                  <div className="space-y-4">
                    {howToBreakCycle.map((item, index) => (
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
                  What we do for clients in this situation
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    This is one of our most common engagements. A company
                    got their SOC 2, the program went dormant, and they
                    need someone to come in, clean it up, and keep it
                    running.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Here's what that looks like:
                  </p>
                  <div className="space-y-4">
                    {whatWeDo.map((item, index) => (
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
                  <p className="text-gray-700 leading-relaxed text-lg pt-2">
                    The goal is simple: your next audit should be boring.
                    No scramble. No surprises. No late nights
                    reconstructing evidence. Just a clean program that's
                    been running consistently, documented properly, and
                    ready for review.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  What it costs
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    For most companies in this situation (20 to 150
                    employees, one or two frameworks, existing GRC
                    platform), ongoing compliance management runs $3,000
                    to $5,000 per month. That covers the weekly
                    monitoring, evidence management, access reviews,
                    policy maintenance, vendor oversight, and audit prep.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Compare that to the alternative: a last-minute
                    consultant engagement at rush rates ($15,000 to
                    $30,000 for a compressed readiness sprint), a
                    stressful audit with multiple exceptions, engineering
                    time pulled from product work, and a report that
                    doesn't reflect well on your program.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The monthly investment pays for itself in avoided
                    scramble costs, cleaner reports, faster sales cycles,
                    and a team that doesn't dread audit season.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  The bottom line
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Getting SOC 2 is the hard part. Keeping it is the
                    discipline.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The companies that treat compliance as a continuous
                    program close more deals, have cleaner reports, and
                    spend less per audit cycle than the ones that sprint,
                    rest, and scramble.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    If your next audit is approaching and you're staring
                    at a GRC dashboard full of red, we've been there
                    before. We'll clean it up, get you through the audit,
                    and keep it running so this doesn't happen again.
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
                  startups and growth-stage companies.
                </p>
              </section>
            </div>
          </div>
        </article>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-sky-900 via-blue-800 to-slate-900 rounded-xl px-8 py-10 text-white text-center shadow-lg">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Is your GRC dashboard full of red right now?
              </h3>
              <p className="text-sky-200 text-lg mb-6 max-w-xl mx-auto leading-relaxed">
                Com-Sec cleans up dormant compliance programs, gets you
                through the next audit, and keeps things running year-round
                so this doesn't happen again.
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
