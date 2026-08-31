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

export default function YourFirstCallAfterASecurityIncident() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "Your First Call After a Security Incident Shouldn't Be to IT",
      text: "The order of your first three calls matters more than most companies realize. Getting it right can save you tens of thousands of dollars and significantly improve the outcome.",
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

  const responseEcosystem = [
    {
      title: "Breach counsel",
      body: "An attorney who specializes in data breach response. They provide legal guidance on your obligations, manage privilege over the investigation (so your findings are protected from discovery in future litigation), advise on notification requirements, and coordinate with regulators if necessary. This is not your corporate lawyer. This is a specialist who handles breaches regularly and knows the specific requirements in every jurisdiction.",
    },
    {
      title: "A forensics firm",
      body: "A digital forensics team that investigates what happened, determines how the attacker got in, assesses the scope of the compromise (what data was accessed, what systems were affected, how long the attacker was in the environment), and provides a detailed report of findings. This is critical for understanding the incident, meeting legal obligations, and preventing recurrence.",
    },
    {
      title: "Notification services",
      body: "If the incident involves personal data and triggers notification requirements (HIPAA, state breach notification laws, GDPR), the carrier's team handles the logistics: drafting notification letters, managing mailing or email delivery, setting up call centers for affected individuals, and coordinating credit monitoring services.",
    },
    {
      title: "Crisis communications support",
      body: "Guidance on what to say publicly, when to say it, and how to communicate with customers, partners, employees, and media. Getting communications wrong during a breach can be more damaging than the breach itself.",
    },
  ];

  const whatGoesWrong = [
    {
      title: "Unapproved vendors",
      body: "The company hired its own forensics firm without checking whether the carrier approved them. The carrier refused to cover the cost because the firm wasn't on their approved panel. $40,000 in forensics fees came out of the company's pocket.",
    },
    {
      title: "Privilege waiver",
      body: "The company started the investigation without involving breach counsel. The forensic findings weren't protected by attorney-client privilege. When a class-action lawsuit followed the breach, the company's own investigation report became evidence against them.",
    },
    {
      title: "Premature public statements",
      body: "Without legal guidance, the company issued a public statement acknowledging the breach before the scope was understood. The statement contained inaccuracies that had to be corrected later, damaging credibility and providing ammunition for plaintiffs' attorneys.",
    },
    {
      title: "Missed policy provisions",
      body: "The company's policy required notification to the carrier within 72 hours of discovering the incident. They notified at day 21. The carrier didn't deny the claim outright, but they pushed back on coverage for costs incurred before notification, and the late notice complicated the claims process significantly.",
    },
    {
      title: "Duplicate work",
      body: "The company's IT team spent 80 hours trying to investigate the incident on their own before bringing in professionals. Most of that work had to be redone by the forensics firm because the IT team's investigation, while well-intentioned, didn't follow forensic best practices and some evidence was inadvertently modified.",
    },
  ];

  const rightOrder = [
    {
      title: "Call 1: Cyber insurance carrier",
      body: "Open the claim. Get the claims number and the name of your claims adjuster. They'll activate the response team and connect you with breach counsel and forensics.",
    },
    {
      title: "Call 2: Your security advisor or vCISO",
      body: "They can help coordinate the technical response, work with the forensics firm, manage the timeline, and serve as a bridge between your team and the carrier's resources.",
    },
    {
      title: "Call 3: Your IT team or MSP",
      body: "They'll handle the immediate technical containment: isolating affected systems, resetting credentials, revoking access, and preserving evidence for the forensics team.",
    },
  ];

  const beforeIncidentChecklist = [
    "Find your policy. Locate it, save it somewhere accessible, and know which document is the actual policy (not just the proposal or the certificate of insurance).",
    "Find the claims number. Write it down. Put it in your incident response plan, on a card in your wallet, or wherever leadership can access it at 2am on a Saturday.",
    "Know the notification window. Most policies require notifying the carrier within 24, 48, or 72 hours of discovering an incident. Set it as a hard constraint in your IR plan.",
    "Know the approved vendor panel. Get the carrier's list of approved forensics firms and breach counsel in advance. If your preferred advisor isn't on it, talk to the carrier about adding them before an incident occurs.",
    "Update your incident response plan. List the insurance carrier as the first external call, with the policy number, claims phone number, notification window, and broker or agent name.",
    "Brief your leadership team. Make sure the CEO, CTO, and anyone likely to be involved in incident response knows the protocol: call the carrier first, don't make public statements without legal guidance, and don't start investigating without coordinating with the forensics team.",
  ];

  return (
    <>
      <Helmet>
        <title>Your First Call After a Security Incident Shouldn't Be to IT</title>

        <meta
          name="description"
          content="The order of your first three calls after a security incident matters more than most companies realize. Why your cyber insurance carrier comes first, what goes wrong when it doesn't, and how to prepare before an incident happens."
        />

        <link
          rel="canonical"
          href="https://com-sec.io/blog/your-first-call-after-a-security-incident-shouldnt-be-to-it"
        />

        <meta
          property="og:title"
          content="Your First Call After a Security Incident Shouldn't Be to IT"
        />

        <meta
          property="og:description"
          content="The order of your first three calls after a security incident matters more than most companies realize. Why your cyber insurance carrier comes first, what goes wrong when it doesn't, and how to prepare before an incident happens."
        />

        <meta
          property="og:image"
          content="https://com-sec.io/images/blog-images/your-first-call-after-a-security-incident-shouldnt-be-to-it.png"
        />

        <meta
          property="og:url"
          content="https://com-sec.io/blog/your-first-call-after-a-security-incident-shouldnt-be-to-it"
        />

        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Com-Sec" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:author" content="Farbod Fakhrai" />
        <meta property="article:published_time" content="2026-08-28T00:00:00Z" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comsec" />

        <meta
          name="twitter:title"
          content="Your First Call After a Security Incident Shouldn't Be to IT"
        />

        <meta
          name="twitter:description"
          content="The order of your first three calls after a security incident matters more than most companies realize. Why your cyber insurance carrier comes first, what goes wrong when it doesn't, and how to prepare before an incident happens."
        />

        <meta
          name="twitter:image"
          content="https://com-sec.io/images/blog-images/your-first-call-after-a-security-incident-shouldnt-be-to-it.png"
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
              Your First Call After a Security Incident Shouldn't Be to IT
            </h1>

            <p className="text-xl text-sky-100 mb-8 leading-relaxed">
              Why the order of your first three calls after an incident
              matters more than most companies realize, and how to get it
              right before you ever need to.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sky-200">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>August 28, 2026</span>
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
                src="/images/blog-images/your-first-call-after-a-security-incident-shouldnt-be-to-it.png"
                alt="Your First Call After a Security Incident Shouldn't Be to IT"
                className="rounded-xl shadow-md max-w-xl w-full h-auto"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <section className="mb-10">
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Most companies' first instinct after a security
                    incident is to call their IT person or their MSP.
                    That's understandable. Something technical broke and
                    you want a technical person to fix it.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    But in most cases, the first call should be to your
                    cyber insurance carrier.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    This applies whether the incident is a stolen laptop
                    with active sessions to sensitive systems, a
                    ransomware attack encrypting your servers, a business
                    email compromise with fraudulent wire transfer
                    instructions, a data breach exposing customer
                    information, an employee reporting that their
                    credentials were compromised, or any other event where
                    data, systems, or money may be at risk.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The order of your first three calls matters more than
                    most companies realize. Getting it right can save you
                    tens of thousands of dollars and significantly improve
                    the outcome. Getting it wrong can void your coverage,
                    increase your liability, and turn a manageable
                    incident into a crisis.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  Why insurance first
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Your cyber insurance carrier provides more than
                    financial reimbursement after the fact. When you open a
                    claim, they activate a response ecosystem that
                    typically includes:
                  </p>
                  <div className="space-y-4">
                    {responseEcosystem.map((item, index) => (
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
                    All of these services are typically covered under your
                    policy. The carrier has pre-negotiated rates with
                    approved vendors, established relationships, and a
                    playbook they've executed hundreds of times.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  What happens when you don't call them first
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    I've seen companies spend $80,000 or more out of pocket
                    on breach response because nobody thought to call the
                    insurance carrier until week three. By then, the
                    damage was compounded in several ways.
                  </p>
                  <div className="space-y-4">
                    {whatGoesWrong.map((item, index) => (
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
                  The right order
                </h2>
                <div className="space-y-5">
                  <div className="space-y-4">
                    {rightOrder.map((item, index) => (
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
                    Notice that IT isn't off the hook. They're essential
                    for containment and recovery. But they're call 3, not
                    call 1, because the carrier and the security advisor
                    set the strategy that the IT team executes.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  What to do right now, before an incident happens
                </h2>
                <div className="space-y-5">
                  <ul className="space-y-3 bg-gray-50 border border-gray-200 rounded-lg p-6">
                    {beforeIncidentChecklist.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  If you don't have cyber insurance
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Get it. This week.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Policies for small companies (under 100 employees,
                    under $50M in revenue) typically cost $2,000 to $5,000
                    per year. The coverage is worth multiples of that in a
                    single incident.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Most applications will ask about your security
                    controls: MFA, endpoint protection, backups, email
                    security, access management. Having these controls in
                    place before you apply gets you better coverage at a
                    lower premium. Not having them may result in higher
                    premiums, coverage exclusions, or denial.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    If you've been breached before and you don't have
                    insurance, the cost of forensics ($50,000 to
                    $200,000), legal counsel ($20,000 to $100,000+),
                    notification services ($5 to $20 per affected
                    individual), credit monitoring ($10 to $30 per
                    individual for 12 months), and potential regulatory
                    fines makes the $3,000 annual premium look like the
                    best investment you never made.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  The bottom line
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The IT person fixes the system. The insurance carrier
                    manages the crisis. Both matter. The order matters
                    more.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    When something goes wrong, the decisions made in the
                    first few hours determine the trajectory of the entire
                    response. The right first call activates a team that's
                    done this hundreds of times, protects your legal
                    position, and ensures costs are covered. The wrong
                    first call wastes time, wastes money, and creates
                    exposure that didn't need to exist.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Save the claims number. Update your IR plan. Brief
                    your team. And if you don't have cyber insurance, stop
                    reading and go get a quote.
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
                Do you know who to call when something goes wrong?
              </h3>
              <p className="text-sky-200 text-lg mb-6 max-w-xl mx-auto leading-relaxed">
                Com-Sec helps companies build an incident response plan
                with the right call order, the right vendors, and the
                right coverage in place before an incident happens.
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
