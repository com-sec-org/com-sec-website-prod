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

export default function What247SecurityMonitoringActuallyLooksLike() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "What 24/7 Security Monitoring Actually Looks Like for a Small Company",
      text: "Most startups answer \u201cyes\u201d to the 24/7 monitoring question and mean \u201cwe have a tool that generates alerts.\u201d Those are two very different things.",
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

  const monitoringLayers = [
    {
      title: "Layer 1: Automated detection (always on)",
      body: "Your security tools run continuously and generate alerts based on rules, signatures, and behavioral analysis. EDR watches endpoints for malicious processes. Cloud security tools monitor for configuration changes and suspicious API calls. Email security flags phishing attempts. SIEM or log aggregation correlates events across sources. This layer runs itself. The tools detect. They alert. But an alert without a human is just noise in an inbox.",
    },
    {
      title: "Layer 2: Managed triage (24/7 human review)",
      body: "A managed detection and response (MDR) provider monitors your security tool alerts around the clock. When an alert fires, an analyst reviews it, determines whether it's a true positive or a false positive, and either contains the threat or closes the alert with documentation. This is the layer most small companies are missing. They have the tools (layer 1) but nobody watching the output. Good MDR providers include CrowdStrike Falcon Complete, SentinelOne Vigilance, Arctic Wolf, Huntress, and Expel. Costs range from $3,000 to $10,000 per month depending on the number of endpoints, log sources, and the depth of coverage.",
    },
    {
      title: "Layer 3: Strategic oversight (your vCISO)",
      body: "The MDR provider handles the tactical alert-by-alert triage. Your vCISO handles the strategic layer: reviewing monthly reports, identifying trends, adjusting detection rules, coordinating incident response when something significant happens, and reporting to leadership.",
    },
  ];

  const monitoringScope = [
    {
      title: "Endpoints",
      body: "Every laptop, workstation, and server. EDR monitoring for malicious processes, ransomware behavior, credential theft, lateral movement, and unauthorized software installation.",
    },
    {
      title: "Cloud infrastructure",
      body: "AWS, Azure, or GCP. Configuration changes, IAM modifications, unusual API activity, resource creation in unexpected regions, root account usage, security group modifications.",
    },
    {
      title: "Email",
      body: "Inbound phishing attempts, business email compromise indicators, unusual forwarding rules, impossible travel on email logins.",
    },
    {
      title: "Identity",
      body: "Failed login attempts, brute force patterns, impossible travel (logging in from two locations that are geographically impossible in the timeframe), password spray attacks, MFA bypass attempts.",
    },
    {
      title: "Application",
      body: "If your product handles sensitive data, monitor for unusual access patterns: mass data downloads, access outside normal hours, privilege escalation, API abuse.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          What 24/7 Security Monitoring Actually Looks Like for a Small
          Company
        </title>

        <meta
          name="description"
          content="Most startups answer \u201cyes\u201d to the 24/7 monitoring question on a security questionnaire and mean \u201cwe have a tool that generates alerts.\u201d The three-layer model that provides genuine 24/7 coverage without building an internal SOC."
        />

        <link
          rel="canonical"
          href="https://com-sec.io/blog/what-247-security-monitoring-actually-looks-like-for-a-small-company"
        />

        <meta
          property="og:title"
          content="What 24/7 Security Monitoring Actually Looks Like for a Small Company"
        />

        <meta
          property="og:description"
          content="Most startups answer \u201cyes\u201d to the 24/7 monitoring question on a security questionnaire and mean \u201cwe have a tool that generates alerts.\u201d The three-layer model that provides genuine 24/7 coverage without building an internal SOC."
        />

        <meta
          property="og:image"
          content="https://com-sec.io/images/blog-images/what-247-security-monitoring-actually-looks-like-for-a-small-company.png"
        />

        <meta
          property="og:url"
          content="https://com-sec.io/blog/what-247-security-monitoring-actually-looks-like-for-a-small-company"
        />

        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Com-Sec" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:author" content="Farbod Fakhrai" />
        <meta property="article:published_time" content="2026-09-10T00:00:00Z" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comsec" />

        <meta
          name="twitter:title"
          content="What 24/7 Security Monitoring Actually Looks Like for a Small Company"
        />

        <meta
          name="twitter:description"
          content="Most startups answer \u201cyes\u201d to the 24/7 monitoring question on a security questionnaire and mean \u201cwe have a tool that generates alerts.\u201d The three-layer model that provides genuine 24/7 coverage without building an internal SOC."
        />

        <meta
          name="twitter:image"
          content="https://com-sec.io/images/blog-images/what-247-security-monitoring-actually-looks-like-for-a-small-company.png"
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
              What 24/7 Security Monitoring Actually Looks Like for a Small
              Company
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sky-200">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>September 2026</span>
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
                src="/images/blog-images/what-247-security-monitoring-actually-looks-like-for-a-small-company.png"
                alt="What 24/7 Security Monitoring Actually Looks Like for a Small Company"
                className="rounded-xl shadow-md max-w-xl w-full h-auto"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <section className="mb-10">
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Your customer's security questionnaire asks: "Do you
                    have 24/7 security monitoring?"
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Most startups answer "yes" and mean "we have a tool
                    that generates alerts." Those are two very different
                    things.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    24/7 monitoring means someone is watching, triaging,
                    and responding to security events around the clock.
                    Not a dashboard. Not an inbox. A human being who
                    understands your environment, can distinguish a real
                    threat from noise, and knows what to do when
                    something is real.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    For a company with 20 to 100 employees, building this
                    internally is impractical. A three-person security
                    operations center running 24/7/365 requires at least
                    5 full-time analysts to cover shifts, vacations, and
                    sick days. At $80,000 to $120,000 per analyst, that's
                    $400,000 to $600,000 in staffing alone, before tools.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    There's a better way.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  The layers of monitoring
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Not everything needs the same level of attention. A
                    practical monitoring strategy for a small company has
                    three layers.
                  </p>
                  <div className="space-y-4">
                    {monitoringLayers.map((item, index) => (
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
                    This three-layer model gives you genuine 24/7
                    monitoring with human response at a fraction of the
                    cost of building an internal SOC.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  What gets monitored
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    For a typical startup or healthcare company, the
                    monitoring scope should cover:
                  </p>
                  <div className="space-y-4">
                    {monitoringScope.map((item, index) => (
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
                  For healthcare companies specifically
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    <Link
                      to="/hipaa"
                      className="text-sky-700 underline hover:text-sky-900"
                    >
                      HIPAA
                    </Link>{" "}
                    requires audit controls (45 CFR 164.312(b)):
                    mechanisms to record and examine activity in systems
                    that contain or use ePHI. 24/7 monitoring with
                    documented triage and response directly satisfies
                    this requirement.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Health-ISAC (the healthcare sector's threat
                    intelligence sharing organization) regularly
                    publishes alerts about active threats targeting
                    healthcare. The ShinyHunters campaign targeting
                    health tech companies through helpdesk social
                    engineering is the most recent example. Monitoring
                    that's tuned to healthcare-specific threat
                    intelligence catches these attacks faster.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Your monitoring should specifically watch for access
                    to systems containing PHI outside normal business
                    hours, bulk export or download of patient records,
                    changes to user permissions on clinical systems, and
                    new device connections to networks that access
                    patient data.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  What to tell your customers
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    When a security questionnaire asks "do you have 24/7
                    monitoring," here's what a strong answer looks like:
                  </p>
                  <div className="bg-sky-50 border-l-4 border-sky-500 rounded-r-lg p-4">
                    <p className="text-gray-800 text-lg italic">
                      "Yes. We deploy endpoint detection and response
                      across all endpoints monitored 24/7 by [MDR
                      provider]. Cloud infrastructure monitoring is
                      performed through [tool]. Security events are
                      triaged by the MDR provider's SOC with documented
                      escalation procedures. Our vCISO reviews monitoring
                      reports monthly and coordinates incident response
                      for any events requiring executive attention."
                    </p>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg pt-2">
                    That's specific, defensible, and verifiable. Compare
                    that to "yes, we have monitoring tools in place." The
                    first answer closes deals. The second one generates
                    follow-up questions.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  What we do
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    We design and manage the monitoring stack for our
                    clients. We select and deploy the right EDR and
                    monitoring tools, coordinate with MDR providers,
                    configure the alerting and escalation rules, and
                    provide the strategic oversight layer as your vCISO.
                    For healthcare companies, we tune the monitoring for
                    HIPAA-specific requirements and healthcare threat
                    intelligence.
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
                Would your answer to "do you have 24/7 monitoring" hold up?
              </h3>
              <p className="text-sky-200 text-lg mb-6 max-w-xl mx-auto leading-relaxed">
                Com-Sec builds the full monitoring stack — tools, MDR
                coordination, and vCISO oversight — so your answer is
                specific, defensible, and verifiable.
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
