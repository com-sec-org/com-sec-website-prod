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
} from "lucide-react";

export default function HowToChooseASoc2Auditor() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "How to Choose a SOC 2 Auditor Without Overpaying or Getting Burned",
      text: "A founder gets two SOC 2 audit quotes. One is $30,000. The other is $12,000. Same framework, same company, same scope. Here's how to actually evaluate them.",
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

  const priceTiers = [
    {
      range: "$3,000 – $5,000",
      body: "This range exists and it's not automatically a red flag. For companies under 50 employees with a simple environment (single cloud, one product, straightforward scope), there are legitimate low-cost audit firms that deliver solid work at this price. The key is that the scope is genuinely simple.",
    },
    {
      range: "$5,000 – $15,000",
      body: "The most common range for startups and growth-stage companies. Quality varies widely here. Some firms at this price do real work. Others rely entirely on automated evidence from your GRC platform with minimal manual testing.",
    },
    {
      range: "$15,000 – $30,000",
      body: "Where most established small-to-midsize audit firms operate for a thorough SOC 2 Type II. At this price, expect real sampling, genuine testing, auditor walkthroughs, follow-up questions, and a report that reflects your actual environment.",
    },
    {
      range: "$30,000+",
      body: "Larger firms, more complex scopes, multiple trust service categories, or complicated environments (multi-cloud, HIPAA overlay, international operations). The premium gets you deeper testing, more experienced teams, and a firm name that carries weight with enterprise buyers.",
    },
  ];

  const cutCorners = [
    {
      title: "Sampling",
      body: "A thorough auditor pulls a meaningful sample of your access changes, code deployments, incidents, and vendor reviews. A cheap auditor pulls 3 samples instead of 25 — or doesn't sample at all and just accepts whatever your GRC platform exports.",
    },
    {
      title: "Walkthroughs",
      body: "A good auditor sits down with your team and says \"show me how an employee gets access to production.\" A cheap auditor sends a checklist and accepts written answers without verification.",
    },
    {
      title: "Testing of operating effectiveness",
      body: "For a Type II, the auditor needs to test whether controls operated effectively throughout the review period — evidence across multiple months, not just the most recent screenshot. Cheap auditors test a single point in time and call it a Type II.",
    },
    {
      title: "Follow-up on exceptions",
      body: "When a good auditor finds something that doesn't look right, they dig in and ask follow-up questions. A cheap auditor notes it and moves on because their time budget doesn't allow for investigation.",
    },
    {
      title: "The system description",
      body: "Your system description is the foundation of the report. A good auditor reviews it carefully and pushes back if it doesn't reflect your environment. A cheap auditor accepts whatever you write.",
    },
  ];

  const evaluationSteps = [
    {
      title: "Step 1: Verify they're a real CPA firm",
      body: "SOC 2 reports can only be issued by licensed CPA firms. Look them up on the AICPA's firm directory, check their state board of accountancy registration, and confirm the signing partner is a licensed CPA. If a firm calls itself a \"security assessor\" but isn't a CPA firm, they cannot issue a SOC 2 report.",
    },
    {
      title: "Step 2: Check their AICPA peer review",
      body: "Every CPA firm that does attestation work is required to undergo peer review — an independent evaluation of the firm's audit quality by another CPA firm. Ask for their most recent peer review report, or look it up on the AICPA's Peer Review Public File. If they don't have one or won't share it, that's a hard stop.",
    },
    {
      title: "Step 3: Ask for a sample report",
      body: "A redacted report from a previous engagement tells you more than a sales call. Look at the system description (specific vs. generic boilerplate), the testing procedures described, the depth of findings, and the length — a thorough Type II is usually 50 to 100+ pages.",
    },
    {
      title: "Step 4: Google them",
      body: "Search the firm name plus \"SOC 2,\" plus \"complaint\" or \"lawsuit\" or \"peer review.\" Check LinkedIn for real CPA credentials and attestation experience on the team.",
    },
    {
      title: "Step 5: Ask pointed questions",
      body: "How do you determine sample sizes? How many hours are budgeted? Who performs the fieldwork? Can I talk to a recent client? What happens if you find exceptions? Do you receive referral fees from any GRC platforms? Vague answers are the red flag.",
    },
    {
      title: "Step 6: Look at the contract terms",
      body: "Review the engagement letter: scope, timeline (a Type II promised in 3 weeks should raise questions), deliverables, cancellation policy, and whether the fee is fixed or variable.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          How to Choose a SOC 2 Auditor Without Overpaying or Getting Burned
        </title>

        <meta
          name="description"
          content="A founder gets two SOC 2 audit quotes — one is $30,000, the other $12,000, same scope. Here's how to tell a legitimate low-cost auditor from one cutting corners."
        />

        <link
          rel="canonical"
          href="https://com-sec.io/blog/how-to-choose-a-soc-2-auditor"
        />

        <meta
          property="og:title"
          content="How to Choose a SOC 2 Auditor Without Overpaying or Getting Burned"
        />

        <meta
          property="og:description"
          content="A founder gets two SOC 2 audit quotes — one is $30,000, the other $12,000, same scope. Here's how to tell a legitimate low-cost auditor from one cutting corners."
        />

        <meta
          property="og:image"
          content="https://com-sec.io/images/blog-images/how-to-choose-a-soc-2-auditor.png"
        />

        <meta
          property="og:url"
          content="https://com-sec.io/blog/how-to-choose-a-soc-2-auditor"
        />

        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Com-Sec" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:author" content="Farbod Fakhrai" />
        <meta property="article:published_time" content="2026-08-03T00:00:00Z" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comsec" />

        <meta
          name="twitter:title"
          content="How to Choose a SOC 2 Auditor Without Overpaying or Getting Burned"
        />

        <meta
          name="twitter:description"
          content="A founder gets two SOC 2 audit quotes — one is $30,000, the other $12,000, same scope. Here's how to tell them apart."
        />

        <meta
          name="twitter:image"
          content="https://com-sec.io/images/blog-images/how-to-choose-a-soc-2-auditor.png"
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
                SOC 2
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-balance">
              How to Choose a SOC 2 Auditor Without Overpaying or Getting Burned
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sky-200">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>August 3, 2026</span>
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
                src="/images/blog-images/how-to-choose-a-soc-2-auditor.png"
                alt="How to Choose a SOC 2 Auditor Without Overpaying or Getting Burned"
                className="rounded-xl shadow-md max-w-xl w-full h-auto"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <section className="mb-10">
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    I get this question constantly. A founder gets two SOC 2 audit quotes. One is $30,000. The other is $12,000. Same framework. Same company. Same scope. They ask me which one to pick.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    My answer is always the same: why is the cheap one so cheap?
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  The audit market has a quality problem
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    SOC 2 has exploded in popularity. Every SaaS company, health tech startup, and AI company needs one. That demand created a gold rush of firms offering SOC 2 audits at prices that should make you uncomfortable.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Some of these are one or two person shops running a high volume of audits at rock-bottom prices. They're licensed CPAs, they can technically issue the report, but one person doing 50 or 100 audits a year can't spend meaningful time on any single engagement. The math doesn't allow it. At that volume and that price, the work gets compressed into template reports, minimal sampling, and rubber-stamped opinions.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    I've seen quotes lower than $3,000 for a Type II. At that price, the firm is either losing money on every engagement or they're not doing real audit work. Usually it's the second one.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The Delve scandal made this visible at scale — hundreds of near-identical SOC 2 reports, pre-written auditor conclusions generated before clients submitted evidence, audit firms rubber-stamping reports without independent testing. But Delve was the extreme case. The everyday version is less dramatic and more common: firms that technically issue a report but cut every corner to make the math work at their price point.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  First, understand who's actually doing the audit
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    This is where most founders get confused. A lot of companies in the compliance space are readiness firms, not audit firms. They prepare you for the audit: help you build your controls, configure your GRC platform, write your policies, and get your evidence in order. Then they connect you with a partner audit firm that actually performs the audit and issues the report.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    That's how we work at Com-Sec. That's how most compliance consultancies work. It's a legitimate and common model.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    But when you get a quote from a readiness firm, you need to ask: who is the actual auditor? The readiness firm isn't issuing your{" "}
                    <Link to="/soc2" className="text-sky-700 underline hover:text-sky-900">
                      SOC 2 report
                    </Link>
                    . Their partner audit firm is. And that audit firm's reputation, independence, and thoroughness are what matter.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    I've seen proposals where the readiness firm lists one audit partner on their website but sends a different firm in the actual proposal. That's not necessarily a problem, but you should know who's doing the work, talk to them directly, and make your own assessment.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  What you actually get at different price points
                </h2>
                <div className="space-y-4">
                  {priceTiers.map((tier, index) => (
                    <div
                      key={index}
                      className="bg-sky-50 border-l-4 border-sky-500 rounded-r-lg p-4"
                    >
                      <p className="text-gray-800 text-lg">
                        <b>{tier.range}:</b> {tier.body}
                      </p>
                    </div>
                  ))}
                  <p className="text-gray-700 leading-relaxed text-lg pt-2">
                    We used a firm in the $3,000–$5,000 range for our own{" "}
                    <Link to="/soc2" className="text-sky-700 underline hover:text-sky-900">
                      SOC 2 audit
                    </Link>{" "}
                    and had a great experience. The key is that the scope was genuinely simple.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  Cheap doesn't always mean bad. Expensive doesn't always mean good.
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    I want to be clear about this because the compliance industry loves to scare people into overpaying. We've worked with expensive firms that took weeks to respond, had poor communication, and once delivered a report containing another client's information. We stopped working with those firms immediately. Price didn't protect us from any of that.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    We've also worked with low-cost firms that were responsive, thorough, and produced clean reports our clients were proud to share with customers. The price didn't predict the quality.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    What predicts quality is the auditor's responsiveness, communication, independence, and whether they actually test your controls or just accept whatever your platform exports.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  How we manage auditor relationships
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    In general, we don't speak negatively about audit firms. Every firm has strengths and weaknesses, and what works for one client's scope and budget might not work for another. We'd rather steer clients toward firms we trust than tear down firms we don't.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    When we have a bad experience with an auditor — slow communication, sloppy reports, missed deadlines — we simply stop working with them. We don't make it public. We just quietly move on and recommend someone better.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The only exceptions we make are for firms involved in genuinely fraudulent activity. After the Delve scandal, we publicly stopped recommending the audit firms allegedly involved in producing fabricated reports. That's a different category. When an auditor's independence and integrity are compromised at that level, staying quiet isn't protecting anyone.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  Will your customers actually trust the report?
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    This is a nuance most founders miss. Your SOC 2 report isn't for you. It's for the enterprise buyer's security team who reviews it during procurement.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Some audit firms are well-known and respected. When a buyer sees their name on the opinion letter, it carries weight. Other firms are completely unknown. The report might be perfectly fine, but the buyer's never heard of the firm and has no basis for trusting the work.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    This doesn't mean you need a Big 4 auditor. But it does mean you should think about whether your target customers will recognize and trust the firm's name. If you're selling into sophisticated enterprise buyers who review dozens of SOC 2 reports a year, a report from an unknown offshore firm is going to get more scrutiny than one from an established US-based CPA firm. That's just reality.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  What cheap auditors actually skip
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    I've reviewed enough{" "}
                    <Link to="/soc2" className="text-sky-700 underline hover:text-sky-900">
                      SOC 2 reports
                    </Link>{" "}
                    from discount auditors to see the pattern. Here's what gets cut when the price drops:
                  </p>
                  <div className="space-y-4">
                    {cutCorners.map((item, index) => (
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
                  Why it matters
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    A weak SOC 2 report creates three specific problems.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Enterprise buyers see through it.</b> Experienced security teams at large companies review SOC 2 reports for a living. They can tell the difference between a thorough report and a rubber stamp. A thin report with minimal testing, generic language, and no exceptions doesn't build trust. It raises questions.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>It doesn't actually help your security.</b> A good audit makes your program better. The auditor catches gaps you missed, identifies controls that are designed but not operating, and pushes you to fix things. A cheap audit confirms what you already know and doesn't challenge anything. You paid for a PDF, not an improvement.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>It creates liability.</b> If you experience a breach and your SOC 2 report was produced by a firm that didn't do real testing, that report becomes a liability, not a defense. Regulators, lawyers, and customers will look at the report and ask whether the audit was genuine. A report that doesn't reflect reality is worse than no report at all.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  How to evaluate an auditor
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Most founders are going to pick the lower-cost option if they don't see a clear reason not to. That's rational. The key is knowing how to verify whether the cheaper firm is legitimate before you sign. Here's exactly how to do that.
                  </p>
                  <div className="space-y-4">
                    {evaluationSteps.map((step, index) => (
                      <div
                        key={index}
                        className="bg-sky-50 border-l-4 border-sky-500 rounded-r-lg p-4"
                      >
                        <p className="text-gray-800 text-lg">
                          <b>{step.title}.</b> {step.body}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  The real cost isn't the audit fee
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Here's what most founders figure out halfway through the process: the audit fee is the smallest part of the cost. Whether you're paying $3,000 or $30,000 for the audit itself, the real cost is the time and friction it takes to get through it.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Somebody has to manage the auditor relationship, collect evidence, respond to requests, chase down screenshots, schedule walkthroughs, and answer follow-up questions. At a startup, that "somebody" is usually the CTO or a senior engineer who has a hundred other things to do. An audit can consume 40 to 80 hours of internal time over a few months — a full sprint's worth of engineering capacity, redirected to evidence collection and auditor emails.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Companies on a budget are going to go for low-cost audit options. That's fine — there are good firms at every price point. But the cheaper the auditor, the more work typically falls on your team. Low-cost firms operate lean. They're not hand-holding you through evidence collection or chasing down your team for missing documentation. They expect the package to show up ready.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    That's where a{" "}
                    <Link to="/compliance-audit-service" className="text-sky-700 underline hover:text-sky-900">
                      vCISO
                    </Link>{" "}
                    pays for itself. We manage the auditor relationship, prepare the evidence, handle the back-and-forth, and make sure your team spends as little time on the audit as possible. Pair a low-cost auditor with a vCISO who knows how to run the process, and you get a quality report at a fraction of what a big firm charges, without burning your engineering team's time.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The audit fee is a line item. The time your team spends is the real expense. We take care of that part.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  The question to ask yourself
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    When you're comparing quotes, the question isn't "why is this one so expensive?" or "why is this one so cheap?" The question is: who is actually doing the audit, and will they do the work?
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    A $3,000 audit from a responsive, thorough firm that tests your controls and delivers a clean report is better than a $30,000 audit from a big-name firm that takes 6 weeks to respond to an email and sends you a template report with someone else's company name still in it.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Focus less on the price and more on the auditor's reputation, responsiveness, independence, and whether your customers will recognize and trust their reports. Those factors will have a much bigger impact than saving or spending a few thousand dollars.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  Trust your gut
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Talk to the auditor directly before you sign. Not just the readiness firm. Not just the salesperson. The actual auditor or engagement manager who will do the work.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Ask them how they approach the engagement. Listen to how they answer. Are they thoughtful? Do they ask questions about your environment? Do they seem like they'll challenge you where it matters?
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    If something feels off — if the timeline seems unrealistic, if nobody can tell you who's actually performing the audit, if the proposal promises a Type II in 3 weeks — slow down. The same instinct that tells you when a deal is too good to be true applies here.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    We've avoided bad partnerships by trusting that instinct. Your auditor relationship is too important to rush.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  The bottom line
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Your{" "}
                    <Link to="/soc2" className="text-sky-700 underline hover:text-sky-900">
                      SOC 2 report
                    </Link>{" "}
                    is a trust document. It's what you hand to enterprise customers to prove your security program is real. If the report was produced by a firm that didn't do the work, it's not a trust document. It's a liability.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Pick your auditor the way you'd pick a doctor. Not the cheapest one. The one who's going to look carefully, ask hard questions, and tell you what they actually find.
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
                  </a>, a consulting firm supporting startups and growth-stage companies. [com-sec.com]
                </p>
              </section>
            </div>
          </div>
        </article>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-sky-900 via-blue-800 to-slate-900 rounded-xl px-8 py-10 text-white text-center shadow-lg">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Choosing between SOC 2 auditor quotes?
              </h3>
              <p className="text-sky-200 text-lg mb-6 max-w-xl mx-auto leading-relaxed">
                Com-Sec manages the auditor relationship, prepares your evidence, and handles the back-and-forth — so you get a quality report without burning your engineering team's time.
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
