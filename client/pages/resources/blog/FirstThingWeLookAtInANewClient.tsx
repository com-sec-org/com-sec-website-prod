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

export default function FirstThingWeLookAtInANewClient() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "One of the First Things We Look at In a New Client's Environment",
      text: "Not the firewall. Not the SIEM. Not the vulnerability scan results. The offboarding process tells us more about your security posture in 10 minutes than any questionnaire ever could.",
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

  const whyItHappens = [
    {
      title: "No complete access inventory",
      body: "Most startups don't have a complete inventory of what systems each employee has access to. There's no central access register, no automated provisioning and deprovisioning. Access is granted ad hoc over time as people need things, and nobody tracks the full picture. So when someone leaves, it's \u201cdisable what we remember\u201d and hope nothing gets missed.",
    },
    {
      title: "Non-employees fall through the cracks",
      body: "Not everyone who leaves goes through HR. Contractors, freelancers, part-time advisors, interns, and agency partners often have access to company systems but aren't in the HR system. When they leave, there's no trigger. Their access just sits there until someone notices, if someone notices.",
    },
    {
      title: "Offboarding isn't anyone's priority",
      body: "The people doing IT at early-stage companies are often engineers who are also doing 10 other things. Offboarding isn't their priority. They get the Slack message, they disable the email, and they move on to their actual work. The remaining systems don't get touched until someone asks.",
    },
  ];

  const fixSteps = [
    {
      title: "Step 1: Build a complete access register",
      body: "List every system, application, and service that your employees and contractors have access to. Every cloud console, every SaaS tool, every repository, every shared credential, every API key. If you don't know what people have access to, you can't revoke what you don't know about.",
    },
    {
      title: "Step 2: Automate where possible",
      body: "If you're using Rippling, Okta, JumpCloud, or a similar platform, connect your HR system to your identity provider so that termination triggers automatic access revocation across connected systems. This eliminates the most common failure point: the gap between HR knowing someone left and IT acting on it. Automation won't cover everything, but it handles the 80% that's most critical and most likely to be missed.",
    },
    {
      title: "Step 3: Build an offboarding checklist for the remaining 20%",
      body: "For every system that isn't automated, create a manual checklist. Include shared credentials that need to be rotated. Include API keys that need to be revoked. Include third-party tools that aren't connected to SSO. Make the checklist specific enough that someone who doesn't know the departing employee can complete it.",
    },
    {
      title: "Step 4: Include contractors and non-employees",
      body: "Your offboarding process can't be limited to HR-triggered departures. Contractors, freelancers, advisors, interns, and agency partners all need to go through the same process. Create a trigger mechanism: when a contractor engagement ends, someone (the project owner, the hiring manager) initiates the offboarding process.",
    },
    {
      title: "Step 5: Verify with quarterly access reviews",
      body: "Even with automation and checklists, things get missed. Every quarter, pull a list of all active accounts across your critical systems and compare it to your current employee and contractor roster. Identify and remove any accounts that shouldn't be there. Document the review \u2014 this is also evidence for your SOC 2 audit.",
    },
    {
      title: "Step 6: Assign ownership",
      body: "Someone needs to own the offboarding process, not just participate in it. They're responsible for making sure every departure is handled completely, the checklist is followed, the automation is working, and the quarterly reviews happen. At most startups, this is the security lead, the vCISO, or the IT manager. Without clear ownership, the process decays within 6 months.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          One of the First Things We Look at In a New Client's Environment
        </title>

        <meta
          name="description"
          content="Not the firewall. Not the SIEM. The offboarding process tells us more about a company's security posture in 10 minutes than any questionnaire ever could \u2014 and it's the number one source of SOC 2 exceptions."
        />

        <link
          rel="canonical"
          href="https://com-sec.io/blog/first-thing-we-check-in-a-new-clients-environment"
        />

        <meta
          property="og:title"
          content="One of the First Things We Look at In a New Client's Environment"
        />

        <meta
          property="og:description"
          content="Not the firewall. Not the SIEM. The offboarding process tells us more about a company's security posture in 10 minutes than any questionnaire ever could \u2014 and it's the number one source of SOC 2 exceptions."
        />

        <meta
          property="og:image"
          content="https://com-sec.io/images/blog-images/first-thing-we-check-in-a-new-clients-environment.png"
        />

        <meta
          property="og:url"
          content="https://com-sec.io/blog/first-thing-we-check-in-a-new-clients-environment"
        />

        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Com-Sec" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:author" content="Farbod Fakhrai" />
        <meta property="article:published_time" content="2026-08-14T00:00:00Z" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comsec" />

        <meta
          name="twitter:title"
          content="One of the First Things We Look at In a New Client's Environment"
        />

        <meta
          name="twitter:description"
          content="Not the firewall. Not the SIEM. The offboarding process tells us more about a company's security posture in 10 minutes than any questionnaire ever could \u2014 and it's the number one source of SOC 2 exceptions."
        />

        <meta
          name="twitter:image"
          content="https://com-sec.io/images/blog-images/first-thing-we-check-in-a-new-clients-environment.png"
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
              One of the First Things We Look at In a New Client's
              Environment
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
                src="/images/blog-images/first-thing-we-check-in-a-new-clients-environment.png"
                alt="One of the First Things We Look at In a New Client's Environment"
                className="rounded-xl shadow-md max-w-xl w-full h-auto"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <section className="mb-10">
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    When we start working with a new client, there's a long
                    list of things to assess. Cloud configuration, access
                    management, endpoint protection, policies, vendor risk,
                    compliance readiness. It's a lot, and every company's
                    environment has its own quirks.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    But one of the first things we look at, before we dig
                    into any of that, is the offboarding process.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Not the firewall. Not the SIEM. Not the vulnerability
                    scan results. The offboarding process.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Show me what happens when someone leaves your company
                    and I'll tell you more about your security posture in 10
                    minutes than any questionnaire ever could.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  Why offboarding tells us everything
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Offboarding is the canary in the coal mine for how
                    disciplined the rest of your security program is. If you
                    can revoke access cleanly and consistently when someone
                    leaves, it means you know what systems people have
                    access to, you have a process that works, and someone
                    owns it. Those three things, inventory, process, and
                    ownership, are the foundation of every security program.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    If offboarding is messy, it means you don't have a
                    complete picture of access across your environment, you
                    don't have a reliable process for managing changes, and
                    nobody is consistently driving security operations. That
                    tells us what the rest of the engagement is going to
                    look like.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Every company I work with gets this exercise in the
                    first week: pull up a list of everyone who's left in the
                    last 12 months. Now show me when their access was
                    revoked across every system. Email. Slack. GitHub. AWS.
                    Google Workspace. Your application admin panel. VPN.
                    SSO. Every SaaS tool they had access to. Every shared
                    credential they knew about.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  What we usually find
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    At least one former employee still has active access
                    somewhere. Usually more than one. And the findings are
                    rarely minor.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    I've found a contractor from 8 months ago still holding
                    admin access to a production AWS environment. Nobody
                    remembered to revoke it because the contractor was
                    managed by the engineering team, not HR, and the
                    offboarding checklist only covered HR-initiated
                    departures.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    I've found a former CTO whose personal email was still
                    an owner on the company's Google Workspace domain. They
                    left 14 months ago. Nobody thought to transfer ownership
                    because the CTO set up the domain originally and
                    everyone assumed someone else would handle it.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    I've found former employees still active in GitHub repos
                    containing proprietary source code. Still active in
                    Slack channels discussing customer data. Still listed as
                    admins in third-party SaaS tools that process sensitive
                    information.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    In one case, a former employee's account was still
                    active in the company's banking platform. Not as an
                    admin, but with sufficient access to view transaction
                    history and account balances. The employee had been gone
                    for 6 months.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    These aren't edge cases. This is what we find at the
                    majority of companies we onboard, across every industry,
                    at every stage. Startups, growth-stage, mid-market. The
                    pattern is remarkably consistent.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  Why this keeps happening
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    At most startups, offboarding is informal and
                    incomplete. The typical process looks something like
                    this: HR gets notified that someone is leaving. HR tells
                    IT (usually via Slack or email, not through a ticketed
                    system). IT disables the email account and maybe the SSO
                    account. And that's where it stops.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Nobody checks Slack. Nobody checks GitHub. Nobody checks
                    AWS or GCP or Azure. Nobody checks the 15 SaaS tools the
                    employee was using. Nobody checks whether they had API
                    keys committed in the codebase. Nobody checks shared
                    credentials that the employee knew about (and there are
                    always shared credentials at startups).
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The problem is compounded by three factors:
                  </p>
                  <div className="space-y-4">
                    {whyItHappens.map((item, index) => (
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
                  The SOC 2 impact
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    This is the number one source of{" "}
                    <Link
                      to="/soc2"
                      className="text-sky-700 underline hover:text-sky-900"
                    >
                      SOC 2
                    </Link>{" "}
                    exceptions. Number one. More than any other control.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    During a SOC 2 audit, the auditor tests your access
                    management controls by comparing your HR records (start
                    dates, termination dates) against your system access
                    logs (when access was actually granted and revoked).
                    They pull a sample of terminations during the review
                    period and check whether access was revoked within the
                    timeframe specified in your policy.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    If your policy says access will be revoked within 24
                    hours of termination and the auditor finds that it took
                    10 days for one employee, that's an exception. If they
                    find that a contractor's access was never revoked at
                    all, that's a bigger exception. If they find a pattern
                    of delayed offboarding across multiple terminations,
                    that calls into question whether the control is
                    operating effectively.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    I've seen companies accumulate 5 or 6 exceptions on a
                    single SOC 2 report, all from offboarding gaps. That's
                    not a good look when an enterprise customer reads your
                    report. It signals that you have a systemic problem with
                    a fundamental security control.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    For{" "}
                    <Link
                      to="/iso27001"
                      className="text-sky-700 underline hover:text-sky-900"
                    >
                      ISO 27001
                    </Link>
                    , it's similar. Access control is covered under Annex A
                    controls, and offboarding is part of the A.6 (People
                    Security) requirements. If your internal audit finds
                    offboarding gaps, they become nonconformities that need
                    to be resolved before your certification audit.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  The security risk beyond compliance
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Compliance aside, the security risk is real and
                    straightforward.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    A former employee with active credentials can access
                    your systems. Whether they're malicious or not doesn't
                    matter. The access exists. If their credentials are
                    compromised through a separate breach (credential
                    stuffing, phishing, password reuse), an attacker can use
                    them to access your environment. The attacker doesn't
                    know or care that the account belongs to someone who
                    left 6 months ago.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Former employee accounts are actually more dangerous
                    than current employee accounts in some ways. Nobody is
                    monitoring them. Nobody is logging into them regularly,
                    so there's no baseline of normal activity to compare
                    against. If an attacker accesses a former employee's
                    account at 3am on a Sunday, there are no alerts because
                    the account was already dormant.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    In regulated industries, the risk escalates further. A
                    former employee with access to PHI, PII, or financial
                    data represents a compliance violation that could
                    trigger breach notification requirements. Under HIPAA,
                    access by an unauthorized individual (including a former
                    employee who should have been deprovisioned) can
                    constitute a reportable breach.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  How to fix it
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The good news: this is one of the most solvable security
                    problems. It doesn't require expensive tools or complex
                    architecture. It requires process and follow-through.
                  </p>
                  <div className="space-y-4">
                    {fixSteps.map((item, index) => (
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
                  What clean offboarding looks like
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    When offboarding works well, it looks like this: HR
                    processes the termination. The identity provider
                    automatically disables SSO access and disconnects all
                    linked applications. The IT or security owner receives
                    an automated notification and runs through the manual
                    checklist for any remaining systems. Shared credentials
                    the employee knew about are rotated. API keys and access
                    tokens are revoked. The laptop is collected (or remotely
                    wiped if remote). The offboarding is documented with
                    timestamps showing when each system's access was
                    revoked.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The whole process takes less than an hour and the audit
                    trail is clean. When the SOC 2 auditor pulls a sample 6
                    months later, every termination shows access revoked
                    within the policy window, documented and verified.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    That's what good looks like. And it starts with
                    treating offboarding as a security process, not an HR
                    afterthought.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  The bottom line
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    When we walk into a new client's environment, offboarding
                    is one of the first things we check because it tells us
                    everything we need to know about the health of the
                    security program. If a company can cleanly terminate
                    access within 24 hours, consistently, across every
                    system, with documentation, the rest of the program is
                    usually in good shape. If they can't, we know where to
                    start.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    It's not glamorous. It doesn't make for exciting
                    conference talks. But it's one of the most practical,
                    highest-impact security controls any company can get
                    right. And it's the one that most companies get wrong.
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
                Not sure what your offboarding gaps are?
              </h3>
              <p className="text-sky-200 text-lg mb-6 max-w-xl mx-auto leading-relaxed">
                Com-Sec runs access audits and builds offboarding processes
                that hold up under SOC 2 and ISO 27001 review, so nothing
                gets missed when someone leaves.
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