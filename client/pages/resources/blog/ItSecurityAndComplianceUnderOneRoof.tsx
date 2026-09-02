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

export default function ItSecurityAndComplianceUnderOneRoof() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "IT, Security, and Compliance Under One Roof: Why It Matters",
      text: "Three vendors, three invoices, three sets of meetings, and none of them talking to each other. This is the default model and it's broken.",
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

  const whatThisIncludes = [
    {
      title: "IT operations",
      body: "Device management with MDM (enrollment, encryption, patching, remote wipe). Identity and access management (SSO, MFA, provisioning, deprovisioning). Employee onboarding and offboarding with security controls built in. Email administration and security. Cloud infrastructure oversight. Help desk escalation for security-related issues.",
    },
    {
      title: "Security operations",
      body: "Endpoint detection and response. 24/7 monitoring through our SOC. Vulnerability management. Penetration test coordination and remediation tracking. Incident response planning and execution. Security awareness training and phishing simulations. Vendor risk management.",
    },
    {
      title: "Compliance operations",
      body: "GRC platform management (Drata, Vanta, Rippling). SOC 2, HIPAA, HITRUST, ISO 27001 program management. Audit coordination and evidence preparation. Security questionnaire response. Policy development and maintenance. Risk assessment. Board and investor reporting.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>IT, Security, and Compliance Under One Roof: Why It Matters</title>

        <meta
          name="description"
          content="Three vendors, three invoices, three sets of meetings, and none of them talking to each other. Why gaps form at the seams of the three-vendor model, and what a unified IT, security, and compliance team looks like instead."
        />

        <link
          rel="canonical"
          href="https://com-sec.io/blog/it-security-and-compliance-under-one-roof-why-it-matters"
        />

        <meta
          property="og:title"
          content="IT, Security, and Compliance Under One Roof: Why It Matters"
        />

        <meta
          property="og:description"
          content="Three vendors, three invoices, three sets of meetings, and none of them talking to each other. Why gaps form at the seams of the three-vendor model, and what a unified IT, security, and compliance team looks like instead."
        />

        <meta
          property="og:image"
          content="https://com-sec.io/images/blog-images/it-security-and-compliance-under-one-roof-why-it-matters.png"
        />

        <meta
          property="og:url"
          content="https://com-sec.io/blog/it-security-and-compliance-under-one-roof-why-it-matters"
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
          content="IT, Security, and Compliance Under One Roof: Why It Matters"
        />

        <meta
          name="twitter:description"
          content="Three vendors, three invoices, three sets of meetings, and none of them talking to each other. Why gaps form at the seams of the three-vendor model, and what a unified IT, security, and compliance team looks like instead."
        />

        <meta
          name="twitter:image"
          content="https://com-sec.io/images/blog-images/it-security-and-compliance-under-one-roof-why-it-matters.png"
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
              IT, Security, and Compliance Under One Roof: Why It Matters
            </h1>

            <p className="text-xl text-sky-100 mb-8 leading-relaxed">
              Why gaps form at the seams of the three-vendor model, and what
              a unified IT, security, and compliance team looks like
              instead.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sky-200">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>September 3, 2026</span>
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

        <article className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 flex justify-center">
              <img
                src="/images/blog-images/it-security-and-compliance-under-one-roof-why-it-matters.png"
                alt="IT, Security, and Compliance Under One Roof: Why It Matters"
                className="rounded-xl shadow-md max-w-xl w-full h-auto"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <section className="mb-10">
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Most companies I work with started the same way. They
                    hired an MSP for IT. Then a customer asked about{" "}
                    <Link
                      to="/soc2"
                      className="text-sky-700 underline hover:text-sky-900"
                    >
                      SOC 2
                    </Link>{" "}
                    and they hired a compliance consultant. Then they had
                    an incident scare and they hired a security advisor.
                    Three vendors, three invoices, three sets of meetings,
                    and none of them talking to each other.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    This is the default model and it's broken.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  Where the three-vendor model falls apart
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    When IT, security, and compliance are run by separate
                    firms, gaps form at the seams.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The MSP deploys a new cloud service and nobody tells
                    the compliance team, so it never gets added to the
                    SOC 2 scope. The compliance consultant writes a policy
                    requiring 24-hour access revocation on termination,
                    but the MSP's offboarding process takes 5 days because
                    they weren't involved in writing the policy. The
                    security advisor recommends MFA on all critical
                    systems, but the MSP pushes back because it creates
                    help desk tickets.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Each vendor optimizes for their own scope. The MSP
                    wants systems running with minimal tickets. The
                    compliance consultant wants clean audit evidence. The
                    security advisor wants strong controls. When those
                    objectives conflict, and they will, nobody has the
                    authority or the context to make the trade-off. The
                    founder gets pulled into every decision, which is
                    exactly what hiring specialists was supposed to
                    prevent.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The other problem is information. Your MSP knows what
                    devices are deployed but doesn't track whether they
                    meet compliance requirements. Your compliance
                    consultant knows what controls are required but
                    doesn't know what's actually configured. Your security
                    advisor recommends changes but can't implement them.
                    Everything passes through the founder as a relay,
                    losing context and urgency at every handoff.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  What a unified model looks like
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    When one team owns IT, security, and compliance
                    together, the entire dynamic changes.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    We deploy a device and it's configured to meet
                    compliance requirements from day one. When we write a
                    policy, we write it based on how the IT environment
                    actually works, not how we wish it worked. When we
                    recommend a security control, we implement it
                    ourselves and track the evidence in the GRC platform.
                    When the auditor asks a question, the same team that
                    configured the control answers it.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    No handoffs. No relay through the founder. No gaps at
                    the seams.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    For a healthcare company, this is especially
                    important.{" "}
                    <Link
                      to="/hipaa"
                      className="text-sky-700 underline hover:text-sky-900"
                    >
                      HIPAA
                    </Link>{" "}
                    touches IT (device encryption, access controls, audit
                    logging), security (risk assessment, incident
                    response, monitoring), and compliance (policies,
                    training, breach notification, BAAs). When three
                    separate vendors own those three areas, HIPAA
                    compliance falls through the cracks because everyone
                    assumes someone else is handling it.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  What this actually includes
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    When we say we manage IT, security, and compliance for
                    a client, here's what that covers:
                  </p>
                  <div className="space-y-4">
                    {whatThisIncludes.map((item, index) => (
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
                    One team. One point of contact. One invoice.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  Who this is for
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    This model works best for companies between 15 and 200
                    employees that don't have (and don't need) an internal
                    IT or security team. Startups and growth-stage
                    companies where the CTO is currently handling IT on
                    the side. Healthcare and health tech companies where
                    HIPAA makes the stakes higher. SaaS companies entering
                    enterprise sales where security is suddenly a
                    procurement requirement.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    If you're currently paying three vendors and
                    coordinating between them yourself, or if you have no
                    coverage at all and you're looking for one partner to
                    handle it, this is what we built for.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  What it costs
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Monthly retainers start at $2,500 for smaller
                    organizations and scale based on headcount,
                    complexity, and frameworks. For most companies in our
                    sweet spot (20 to 100 employees, one or two compliance
                    frameworks, standard cloud environment), the cost is
                    $4,000 to $8,000 per month.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Compare that to three separate vendors at $3,000 to
                    $5,000 each, plus the founder's time coordinating
                    between them. The unified model is usually cheaper and
                    always more effective.
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
                Tired of coordinating between three vendors?
              </h3>
              <p className="text-sky-200 text-lg mb-6 max-w-xl mx-auto leading-relaxed">
                Com-Sec runs your IT, security, and compliance under one
                roof — one team, one point of contact, one invoice.
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
