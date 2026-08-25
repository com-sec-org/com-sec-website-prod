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

export default function YourMspIsNotYourSecurityTeam() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "Your MSP Is Not Your Security Team",
      text: "The confusion between IT operations and security operations is one of the most expensive misunderstandings in small business cybersecurity \u2014 and it shows up at the worst possible time.",
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

  const whatMspsDoWell = [
    "Deploy and manage devices \u2014 provisioning laptops, installing software, managing the device fleet, and handling new hire IT setup (and some offboarding).",
    "Set up and maintain networks \u2014 configuring routers, switches, access points, VPNs, and firewalls, and troubleshooting connectivity and bandwidth.",
    "Manage email and collaboration platforms \u2014 administering Microsoft 365 or Google Workspace, email accounts, distribution lists, and shared drives.",
    "Handle day-to-day IT support \u2014 password resets, printer issues, and the general help desk function.",
    "Patch operating systems \u2014 running automated OS patching and, in some cases, application patching.",
    "Handle basic security tooling \u2014 deploying antivirus and basic endpoint protection, and offering basic firewall management and network monitoring.",
  ];

  const whatMspsDontDo = [
    {
      title: "Build and manage a security program",
      body: "A security program includes risk assessment, policy development, control design, compliance framework alignment, and ongoing governance. This requires knowledge of security frameworks (SOC 2, ISO 27001, HIPAA, HITRUST), risk management methodology, and how to build controls that satisfy both security objectives and audit requirements. Most MSP engineers are trained in IT infrastructure, not security frameworks.",
    },
    {
      title: "Run compliance",
      body: "SOC 2, ISO 27001, HIPAA, and HITRUST require someone who understands the requirements, can map controls to criteria, prepare evidence, coordinate with auditors, and manage the ongoing compliance program. Companies that ask their MSP to handle SOC 2 readiness often end up with a control matrix that doesn't map to the criteria correctly, and pay twice: once for the MSP's attempt, again for a qualified advisor to do it correctly.",
    },
    {
      title: "Respond to security incidents",
      body: "An MSP can re-image a machine, reset passwords, and restore from a backup. What they typically can't do: run a forensic investigation into what data was accessed and how the attacker got in, coordinate legal counsel and regulatory obligations, determine whether the incident triggers breach notification requirements, or manage customer communications during an active incident.",
    },
    {
      title: "Conduct risk assessments",
      body: "A meaningful risk assessment requires understanding your business context, identifying threats relevant to your industry and size, evaluating likelihood and impact, and recommending controls that balance security, cost, and operational impact. Most MSPs can tell you what vulnerabilities exist in your network. They can't contextualize those vulnerabilities against your business risk and regulatory requirements.",
    },
    {
      title: "Answer security questionnaires",
      body: "The MSP can answer the technical questions (antivirus, network configuration, patching schedule) \u2014 maybe 30% of a typical questionnaire. The other 70% requires knowledge of your risk assessment methodology, vendor risk management, incident response process, and tabletop exercise history. That's not the MSP's job.",
    },
    {
      title: "Manage vendor risk",
      body: "Evaluating the security posture of third-party vendors, reviewing SOC 2 reports, assessing BAA compliance, and maintaining a vendor risk register is security program work, not IT operations work.",
    },
    {
      title: "Advise leadership on security investment",
      body: "When the CEO asks \u201care we secure?\u201d the MSP can say the systems are patched and antivirus is up to date. They can't say whether the company's overall risk posture is appropriate for its size and industry, or where the next dollar of security investment will have the most impact.",
    },
  ];

  const whereGapShows = [
    {
      title: "A customer sends a security questionnaire",
      body: "The sales team forwards it to the MSP. They can fill in the technical specs, but the governance and program questions go unanswered or get marked \u201cN/A\u201d \u2014 which signals you don't have a program at all.",
    },
    {
      title: "An auditor shows up",
      body: "During a SOC 2 or ISO 27001 audit, the auditor asks about control design, policy implementation, and operating effectiveness. The MSP can provide technical evidence but can't speak to how the controls were designed, why they were chosen, or how they're monitored for effectiveness.",
    },
    {
      title: "A security incident occurs",
      body: "The MSP runs their standard playbook: isolate the machine, run a scan, re-image if necessary. But the business questions go unanswered \u2014 what data was affected, do we need to notify customers, is this a reportable breach, what do we tell the board.",
    },
    {
      title: "A prospect or partner asks about your security posture",
      body: "Not a formal questionnaire, just a conversation: \u201cHow do you handle security?\u201d If the answer is \u201cwe have an MSP,\u201d that tells the prospect you have IT support. It doesn't tell them you have a security program.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Your MSP Is Not Your Security Team</title>

        <meta
          name="description"
          content="The confusion between IT operations and security operations is one of the most expensive misunderstandings in small business cybersecurity. What MSPs do well, where the gap shows up, and the right model for both."
        />

        <link
          rel="canonical"
          href="https://com-sec.io/blog/your-msp-is-not-your-security-team"
        />

        <meta
          property="og:title"
          content="Your MSP Is Not Your Security Team"
        />

        <meta
          property="og:description"
          content="The confusion between IT operations and security operations is one of the most expensive misunderstandings in small business cybersecurity. What MSPs do well, where the gap shows up, and the right model for both."
        />

        <meta
          property="og:image"
          content="https://com-sec.io/images/blog-images/your-msp-is-not-your-security-team.png"
        />

        <meta
          property="og:url"
          content="https://com-sec.io/blog/your-msp-is-not-your-security-team"
        />

        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Com-Sec" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:author" content="Farbod Fakhrai" />
        <meta property="article:published_time" content="2026-08-24T00:00:00Z" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comsec" />

        <meta
          name="twitter:title"
          content="Your MSP Is Not Your Security Team"
        />

        <meta
          name="twitter:description"
          content="The confusion between IT operations and security operations is one of the most expensive misunderstandings in small business cybersecurity. What MSPs do well, where the gap shows up, and the right model for both."
        />

        <meta
          name="twitter:image"
          content="https://com-sec.io/images/blog-images/your-msp-is-not-your-security-team.png"
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
              Your MSP Is Not Your Security Team
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
                src="/images/blog-images/your-msp-is-not-your-security-team.png"
                alt="Your MSP Is Not Your Security Team"
                className="rounded-xl shadow-md max-w-xl w-full h-auto"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <section className="mb-10">
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    This is a conversation I have regularly with companies
                    that are growing out of the "we have an IT guy" phase
                    and into the "we need real security" phase.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Most small and mid-size companies use a Managed Service
                    Provider for IT. The MSP sets up laptops, manages the
                    network, handles email, deals with printers, and keeps
                    the lights on. They're valuable. They solve real
                    problems. And for many companies, the MSP relationship
                    is the first time they've had any kind of structured IT
                    support.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    But most MSPs are not equipped to manage your security
                    program. That's not a knock on MSPs. It's a different
                    skill set, a different set of tools, and a fundamentally
                    different operating model.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The confusion between IT operations and security
                    operations is one of the most expensive
                    misunderstandings in small business cybersecurity. And
                    it shows up at the worst possible time: when something
                    goes wrong, when a customer asks a hard question, or
                    when an auditor walks in the door.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  What MSPs typically do well
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    MSPs are IT operations companies. Their core competency
                    is keeping your technology running and your users
                    productive.
                  </p>
                  <ul className="space-y-3 bg-gray-50 border border-gray-200 rounded-lg p-6">
                    {whatMspsDoWell.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-700 leading-relaxed text-lg pt-2">
                    This is legitimate, necessary work. A good MSP makes
                    your company more productive and reduces the IT burden
                    on your team. Every company needs IT operations.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  What MSPs typically don't do
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Security is a different discipline. The skill set,
                    tools, frameworks, and mindset are different from IT
                    operations. Here's what falls outside most MSPs'
                    capabilities:
                  </p>
                  <div className="space-y-4">
                    {whatMspsDontDo.map((item, index) => (
                      <div
                        key={index}
                        className="bg-sky-50 border-l-4 border-sky-500 rounded-r-lg p-4"
                      >
                        <p className="text-gray-800 text-lg">
                          <b>{item.title}.</b>{" "}
                          {item.title === "Run compliance" ? (
                            <>
                              <Link
                                to="/soc2"
                                className="text-sky-700 underline hover:text-sky-900"
                              >
                                SOC 2
                              </Link>
                              ,{" "}
                              <Link
                                to="/iso27001"
                                className="text-sky-700 underline hover:text-sky-900"
                              >
                                ISO 27001
                              </Link>
                              ,{" "}
                              <Link
                                to="/hipaa"
                                className="text-sky-700 underline hover:text-sky-900"
                              >
                                HIPAA
                              </Link>
                              , and{" "}
                              <Link
                                to="/hitrust"
                                className="text-sky-700 underline hover:text-sky-900"
                              >
                                HITRUST
                              </Link>{" "}
                              require someone who understands the
                              requirements, can map controls to criteria,
                              prepare evidence, coordinate with auditors,
                              and manage the ongoing compliance program.
                              Companies that ask their MSP to handle{" "}
                              <Link
                                to="/soc2-readiness"
                                className="text-sky-700 underline hover:text-sky-900"
                              >
                                SOC 2 readiness
                              </Link>{" "}
                              often end up with a control matrix that
                              doesn't map to the criteria correctly, and pay
                              twice: once for the MSP's attempt, again for a
                              qualified advisor to do it correctly.
                            </>
                          ) : (
                            item.body
                          )}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  Where the gap shows up in practice
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The gap between IT operations and security operations
                    usually becomes visible in one of four ways. And it's
                    always at an inconvenient time.
                  </p>
                  <div className="space-y-4">
                    {whereGapShows.map((item, index) => (
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
                  The right model
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    IT operations and security operations are complementary
                    but distinct. You need both. The best setup for most
                    companies between 10 and 100 employees is an MSP for IT
                    operations and a{" "}
                    <Link
                      to="/vciso"
                      className="text-sky-700 underline hover:text-sky-900"
                    >
                      vCISO
                    </Link>{" "}
                    or security advisor for the security program.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The MSP keeps your systems running. The vCISO keeps your
                    security program running. They work together, share
                    information, and coordinate on implementation, but they
                    own different things.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The MSP deploys the MDM. The vCISO defines the device
                    security policy that the MDM enforces. The MSP
                    configures the firewall. The vCISO evaluates whether the
                    configuration meets compliance requirements and aligns
                    with the company's risk profile. The MSP resets
                    passwords and manages user accounts. The vCISO ensures
                    there's an access management process with reviews,
                    documentation, and audit-ready evidence. The MSP deploys
                    endpoint protection. The vCISO monitors the alerts,
                    triages findings, and manages the response process.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    This model gives you operational IT efficiency from the
                    MSP and strategic security leadership from the vCISO.
                    Neither is trying to do the other's job. Both are
                    working in their area of expertise.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  How to test whether you have a gap
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    If you're currently relying on an MSP and you're not
                    sure whether your security needs are covered, here's a
                    simple test:
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Ask your MSP to answer a security questionnaire from one
                    of your customers. Give them the full questionnaire, not
                    just the technical sections. See how much they can
                    answer completely and accurately.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    If they can answer 80% or more with specific, defensible
                    responses, you have an unusually capable MSP with real
                    security expertise. That's rare, but it exists.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    If they can answer the technical sections but struggle
                    with governance, risk management, compliance, and
                    program-level questions, you have a typical MSP doing a
                    great job at IT operations. You need a security advisor
                    to handle the rest.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    If they can't answer much of it at all, you have an IT
                    support provider, not an MSP with security capabilities.
                    That's fine for what it is, but you need to be honest
                    about what's covered and what's not.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  The cost comparison
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    A common objection: "I'm already paying my MSP $8,000 a
                    month. I can't afford a vCISO on top of that."
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    But the question isn't whether you can afford it. The
                    question is what it costs you to not have it.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    A failed security questionnaire that kills a $200,000
                    deal costs more than a year of vCISO services. A
                    ransomware incident without proper response and cyber
                    insurance coordination costs $50,000 to $200,000 in
                    recovery. A SOC 2 audit that has to be redone because
                    the readiness work was done incorrectly costs double. A
                    customer data breach without a proper incident response
                    plan costs everything.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Most vCISO engagements for companies this size run
                    $3,000 to $8,000 per month. That's a fraction of the MSP
                    spend and it covers a fundamentally different set of
                    capabilities. The vCISO pays for itself the first time
                    you close a deal that required a credible security
                    posture, or the first time you avoid an incident that
                    would have cost you six figures.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  The bottom line
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Your MSP is valuable. Keep them. They solve real
                    problems and they make your company more productive.
                    But stop assuming that IT operations equals security
                    operations. They're different disciplines with
                    different skill sets, and your company needs both.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    If you're paying an MSP and assuming security is
                    handled, test that assumption. The result will tell you
                    whether you have a gap. And if you do, it's better to
                    find out now than during a customer audit, a security
                    incident, or a sales process where the answer to "how
                    do you handle security" determines whether you get the
                    contract.
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
                Not sure if your security needs are actually covered?
              </h3>
              <p className="text-sky-200 text-lg mb-6 max-w-xl mx-auto leading-relaxed">
                Com-Sec works alongside your MSP as your security program
                owner, handling risk, compliance, incident response, and
                everything IT operations wasn't built for.
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
