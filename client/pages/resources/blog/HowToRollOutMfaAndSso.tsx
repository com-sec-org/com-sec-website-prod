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

export default function HowToRollOutMfaAndSso() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "How to Roll Out MFA and SSO Without Losing Your Mind",
      text: "Every compliance framework requires it. Every enterprise customer asks about it. Most companies still haven't fully deployed MFA and SSO. Here's how to do it without breaking everything.",
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

  const rolloutTimeline = [
    {
      title: "Week 1: MFA on email and identity provider",
      body: "Start with the account that gates everything else. If an attacker compromises your email, they can reset passwords on every other service. Google Workspace and Microsoft 365 both support enforcing MFA at the admin level. Use authenticator apps (Google Authenticator, Authy, Microsoft Authenticator) at minimum. FIDO2 security keys or passkeys for anyone with admin access. Never use SMS as the primary MFA method \u2014 it's better than nothing but it's vulnerable to SIM swapping and phishing proxies.",
    },
    {
      title: "Week 2: MFA on critical apps",
      body: "Cloud console (AWS, Azure, GCP). Code repositories (GitHub, GitLab). Banking and financial platforms. HR and payroll systems. Any admin panel for your product. These are the systems where unauthorized access causes the most damage.",
    },
    {
      title: "Week 3: MFA on everything else",
      body: "CRM, project management, design tools, analytics, anything that has an MFA option. Most SaaS apps support it now. Make it the default for every new tool you onboard.",
    },
    {
      title: "Week 4+: SSO rollout",
      body: "Now connect your apps to your identity provider. Start with the apps that support SAML or OIDC (most enterprise SaaS tools do). This is where the work gets heavier because each app has its own SSO configuration process. Prioritize by risk: apps with sensitive data first, then high-usage apps, then everything else. Some apps charge extra for SSO (the infamous \u201cSSO tax\u201d). Factor that into your budget but don't let it stop you \u2014 the security value of centralized access control justifies the cost.",
    },
  ];

  const ssoTaxOptions = [
    "Negotiate. Many vendors will add SSO to a lower tier if you ask, especially if you're a growing company they want to keep.",
    "Check for SAML support on lower tiers using community guides and workarounds.",
    "For apps that absolutely won't support SSO at a reasonable price, enforce strong MFA and monitor access through your IdP's OAuth connection logs.",
  ];

  return (
    <>
      <Helmet>
        <title>How to Roll Out MFA and SSO Without Losing Your Mind</title>

        <meta
          name="description"
          content="Every compliance framework requires MFA and SSO. Most companies still haven't fully deployed them. Why companies delay, how to inventory your SaaS environment, and a week-by-week rollout plan that doesn't break everything."
        />

        <link
          rel="canonical"
          href="https://com-sec.io/blog/how-to-roll-out-mfa-and-sso-without-losing-your-mind"
        />

        <meta
          property="og:title"
          content="How to Roll Out MFA and SSO Without Losing Your Mind"
        />

        <meta
          property="og:description"
          content="Every compliance framework requires MFA and SSO. Most companies still haven't fully deployed them. Why companies delay, how to inventory your SaaS environment, and a week-by-week rollout plan that doesn't break everything."
        />

        <meta
          property="og:image"
          content="https://com-sec.io/images/blog-images/how-to-roll-out-mfa-and-sso-without-losing-your-mind.png"
        />

        <meta
          property="og:url"
          content="https://com-sec.io/blog/how-to-roll-out-mfa-and-sso-without-losing-your-mind"
        />

        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Com-Sec" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:author" content="Farbod Fakhrai" />
        <meta property="article:published_time" content="2026-09-09T00:00:00Z" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comsec" />

        <meta
          name="twitter:title"
          content="How to Roll Out MFA and SSO Without Losing Your Mind"
        />

        <meta
          name="twitter:description"
          content="Every compliance framework requires MFA and SSO. Most companies still haven't fully deployed them. Why companies delay, how to inventory your SaaS environment, and a week-by-week rollout plan that doesn't break everything."
        />

        <meta
          name="twitter:image"
          content="https://com-sec.io/images/blog-images/how-to-roll-out-mfa-and-sso-without-losing-your-mind.png"
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
              How to Roll Out MFA and SSO Without Losing Your Mind
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sky-200">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>September 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>8 min read</span>
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
                src="/images/blog-images/how-to-roll-out-mfa-and-sso-without-losing-your-mind.png"
                alt="How to Roll Out MFA and SSO Without Losing Your Mind"
                className="rounded-xl shadow-md max-w-xl w-full h-auto"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <section className="mb-10">
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Every compliance framework requires it. Every
                    enterprise customer asks about it. Every security
                    advisor recommends it. And most companies still
                    haven't fully deployed MFA and SSO across their
                    environment.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Not because they don't know it matters. Because
                    rolling it out is painful if you do it wrong.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Here's how to do it without breaking everything.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  Why companies delay this
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The objections are always the same. "It's going to
                    slow everyone down." "People will lose access to
                    things." "We don't know what tools everyone is
                    using." "Our apps don't all support SSO." "We tried
                    once and it was a mess."
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    These are real concerns. MFA and SSO rollouts do
                    break things if you move too fast without planning.
                    But the alternative, dozens of SaaS apps with
                    separate passwords, no centralized access control,
                    and no way to revoke everything when someone leaves,
                    is worse. And every day you wait makes the eventual
                    rollout harder because the sprawl grows.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  Start with the inventory
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    You can't put SSO in front of apps you don't know
                    about. Before you touch any identity configuration,
                    audit your SaaS environment.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Check your SSO provider's app catalog. Check expense
                    reports for SaaS subscriptions. Survey your team:
                    "What tools do you use for work?" Check browser
                    extensions across your fleet. Review OAuth
                    connections in Google Workspace or Microsoft 365.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    You'll find 2 to 3x more apps than you expected.
                    Categorize them: apps that handle sensitive data
                    (customer data, PHI, source code, financial
                    information), apps that everyone uses daily, and
                    apps that are nice-to-have or team-specific.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  Choose your identity provider
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    If you don't already have one: Google Workspace and
                    Microsoft 365 both function as identity providers
                    with built-in SSO and MFA support. For more control,
                    Okta and JumpCloud are the most common dedicated IdPs
                    for companies your size.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The IdP becomes the front door to everything. One
                    login, one MFA challenge, access to all connected
                    apps. When someone leaves, you disable one account
                    and access to everything is revoked.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  Roll out MFA first, SSO second
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Do them in this order. MFA is simpler, faster, and
                    provides immediate security value even without SSO.
                  </p>
                  <div className="space-y-4">
                    {rolloutTimeline.map((item, index) => (
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
                  The SSO tax problem
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Some SaaS vendors only offer SSO on their enterprise
                    tier, which can be 2 to 5x the cost of the standard
                    plan. This is frustrating and it's a well-documented
                    industry problem.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Options:
                  </p>
                  <ul className="space-y-3 bg-gray-50 border border-gray-200 rounded-lg p-6">
                    {ssoTaxOptions.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-700 leading-relaxed text-lg pt-2">
                    Don't let the SSO tax become an excuse to skip SSO
                    entirely. Even if 20% of your apps can't be
                    connected, having 80% behind SSO with centralized
                    control is dramatically better than having 0%.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  The compliance angle
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    <Link
                      to="/soc2"
                      className="text-sky-700 underline hover:text-sky-900"
                    >
                      SOC 2
                    </Link>{" "}
                    CC6.1 and CC6.3 cover logical access controls.{" "}
                    <Link
                      to="/iso27001"
                      className="text-sky-700 underline hover:text-sky-900"
                    >
                      ISO 27001
                    </Link>{" "}
                    A.8 covers access management.{" "}
                    <Link
                      to="/hipaa"
                      className="text-sky-700 underline hover:text-sky-900"
                    >
                      HIPAA
                    </Link>{" "}
                    Security Rule requires access controls and unique
                    user identification. Every framework expects
                    centralized access management, MFA on critical
                    systems, and documented access provisioning and
                    deprovisioning.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Having SSO and MFA deployed across your environment
                    satisfies multiple controls simultaneously. It also
                    makes access reviews dramatically easier: you review
                    access in one place instead of 30.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  What we do
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    We roll out SSO and MFA for clients as part of our
                    managed IT and security services. We handle the
                    inventory, the IdP configuration, the app-by-app SSO
                    setup, and the documentation for your compliance
                    program. For most companies, the rollout takes 2 to
                    4 weeks with minimal disruption to the team.
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
                Still juggling passwords across a dozen SaaS apps?
              </h3>
              <p className="text-sky-200 text-lg mb-6 max-w-xl mx-auto leading-relaxed">
                Com-Sec handles your MFA and SSO rollout end to end —
                inventory, identity provider setup, and app-by-app
                configuration — with minimal disruption to your team.
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
