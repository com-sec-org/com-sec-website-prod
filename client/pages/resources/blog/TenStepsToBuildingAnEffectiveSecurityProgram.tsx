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

export default function TenStepsToBuildingAnEffectiveSecurityProgram() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "10 Steps to Building an Effective Security Program",
      text: "Building a security program is a sequence of practical steps that build on each other. Here's the order we use with every client.",
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
      title: "What Is a vCISO? Understanding the Role and Benefits",
      excerpt:
        "Learn how vCISO services help organizations strengthen cybersecurity leadership.",
      link: "/blog/what-is-vciso-role-cybersecurity",
      category: "Cybersecurity Leadership",
      emoji: "🧭",
    },
    {
      title: "The Order of Operations for Engaging a vCISO: A Step-by-Step Guide",
      excerpt:
        "A practical order of operations to evaluate providers, define scope of work, and start a vCISO engagement.",
      link: "/blog/the-order-of-operations-for-engaging-a-vciso-a-step-by-step-guide",
      category: "Security Leadership",
      emoji: "📋",
    },
  ];

  return (
    <>
      <Helmet>
        <title>10 Steps to Building an Effective Security Program</title>

        <meta
          name="description"
          content="Building a security program is a sequence of practical steps that build on each other. Here's the 10-step order Com-Sec uses with every client."
        />

        <link
          rel="canonical"
          href="https://com-sec.io/blog/10-steps-to-building-an-effective-security-program"
        />

        <meta
          property="og:title"
          content="10 Steps to Building an Effective Security Program"
        />

        <meta
          property="og:description"
          content="Building a security program is a sequence of practical steps that build on each other. Here's the order we use with every client."
        />

        <meta
          property="og:image"
          content="https://com-sec.io/images/blog-images/10-steps-to-building-an-effective-security-program.png"
        />

        <meta
          property="og:url"
          content="https://com-sec.io/blog/10-steps-to-building-an-effective-security-program"
        />

        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Com-Sec" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:author" content="Farbod Fakhrai" />
        <meta property="article:published_time" content="2026-09-22T00:00:00Z" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comsec" />

        <meta
          name="twitter:title"
          content="10 Steps to Building an Effective Security Program"
        />

        <meta
          name="twitter:description"
          content="Building a security program is a sequence of practical steps that build on each other. Here's the order we use with every client."
        />

        <meta
          name="twitter:image"
          content="https://com-sec.io/images/blog-images/10-steps-to-building-an-effective-security-program.png"
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
                Security Program
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-balance">
              10 Steps to Building an Effective Security Program
            </h1>

            <p className="text-xl text-sky-100 mb-8 leading-relaxed">
              It's a sequence of practical steps that build on each other. Here's the order we use with every client.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sky-200">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>September 22, 2026</span>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>6 min read</span>
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
                src="/images/blog-images/10-steps-to-building-an-effective-security-program.png"
                alt="10 Steps to Building an Effective Security Program"
                className="rounded-xl shadow-md max-w-xl w-full h-auto"
              />
            </div>

            <div className="prose prose-lg max-w-none">

              {/* INTRO */}
              <section className="mb-10">
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Every company that reaches a certain stage needs a security program. Not because a framework says so. Because customers start asking, deals start requiring it, and the data you're handling is too valuable to leave unprotected.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    The problem is that "build a security program" sounds enormous. It's not. It's a sequence of practical steps that build on each other. Here's the order we use with every client.
                  </p>
                </div>
              </section>

              {/* STEP 1 */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Step 1: Define what you're protecting and why
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Before you write a policy or buy a tool, answer two questions: what data do you handle that matters, and who would care if it was compromised?
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    If you're a SaaS company, you're protecting customer data, application code, and infrastructure credentials. If you're a health tech company, add PHI to that list. If you handle financial data, add PII and financial records.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    The "who would care" question drives your compliance requirements. Customers care, which means SOC 2. Regulators care, which means HIPAA or applicable state laws. Investors care, which means board-level reporting.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Write it down. One page. What data, where it lives, and who cares about it. That's your scope.
                  </p>
                </div>
              </section>

              {/* STEP 2 */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Step 2: Assess your current state
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    You can't build a roadmap without knowing where you're starting. Do an honest assessment of what you have today.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Do you have MFA on all critical systems? Is endpoint protection deployed on every device? Do you have an offboarding process that works? Are your cloud configurations reviewed? Do you have any policies written? Have you ever done a risk assessment? Do you have cyber insurance?
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Don't grade yourself generously. The gap between where you are and where you need to be is the work. Understanding it honestly saves time and money.
                  </p>
                </div>
              </section>

              {/* STEP 3 */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Step 3: Identify the framework
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Pick the compliance framework that matches your customer requirements. For most startups selling to enterprise customers, that's SOC 2. For health tech, add HIPAA and potentially HITRUST. For companies with European customers, ISO 27001.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Don't try to do all of them at once. Pick the one your customers are asking for right now and build to that standard. The frameworks overlap significantly, so building for SOC 2 gets you 60 to 70% of the way to{" "}
                    <Link to="/iso27001" className="text-sky-700 font-semibold hover:underline">
                      ISO 27001
                    </Link>{" "}
                    and HITRUST.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    If nobody is asking for a specific framework yet, build to{" "}
                    <Link to="/soc2" className="text-sky-700 font-semibold hover:underline">
                      SOC 2 Trust Services
                    </Link>{" "}
                    Criteria anyway. It's the most common requirement and provides a solid foundation that maps to everything else.
                  </p>
                </div>
              </section>

              {/* STEP 4 */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Step 4: Write your policies
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Policies define what your company does for security. Not aspirational goals. What you actually do today, written down in a form your auditor can evaluate and your team can follow.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Start with the essentials: information security policy, access management, change management, incident response, acceptable use, data classification, vendor management, and business continuity. If you use AI tools, add an AI governance section to your acceptable use policy.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Use your GRC platform's templates as a starting point, but rewrite them to reflect your actual environment. Use your real tool names, your real role titles, and your real cadences. A policy that describes a company you don't recognize isn't a policy. It's fiction.
                  </p>
                </div>
              </section>

              {/* STEP 5 */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Step 5: Implement the core controls
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Controls are the things you do to enforce your policies. These are the non-negotiables that every security program needs from day one:
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    MFA on every system that supports it. Phishing-resistant MFA (FIDO2, passkeys) for admin accounts. Endpoint protection (EDR) on every device. Device management (MDM) with encryption enforced. Centralized access management through SSO where possible. Automated offboarding that revokes access within 24 hours. Centralized logging for critical systems. Encrypted data at rest and in transit. Regular patching and vulnerability scanning.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    None of these are exotic. None of them require enterprise budgets. They're the basics, and they stop the majority of attacks that target companies your size.
                  </p>
                </div>
              </section>

              {/* STEP 6 */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Step 6: Set up your GRC platform
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Drata, Vanta, or Rippling. Pick one. Connect it to your cloud environment, identity provider, HR system, and endpoint management platform. It automates evidence collection for your{" "}
                    <Link to="/compliance-privacy-grc" className="text-sky-700 font-semibold hover:underline">
                      compliance framework
                    </Link>
                    , monitors your controls continuously, and keeps your auditor happy.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    The platform is a tool, not a strategy. It collects evidence that your controls are operating. It doesn't design the controls, implement them, or decide what matters. That's your security team's job (or your vCISO's job).
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Set it up early so evidence is collecting throughout your review period. An auditor can't evaluate controls that weren't monitored.
                  </p>
                </div>
              </section>

              {/* STEP 7 */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Step 7: Conduct a formal risk assessment
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Now that you have controls in place, do a formal risk assessment. Identify the threats relevant to your business, assess the likelihood and impact of each, evaluate whether your current controls adequately mitigate them, and document your risk treatment decisions.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    This is a compliance requirement for SOC 2, ISO 27001, HIPAA, and HITRUST. But it's also genuinely useful. A well-done risk assessment tells you where your remaining gaps are and what to prioritize next.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Review it annually and update it when your environment significantly changes.
                  </p>
                </div>
              </section>

              {/* STEP 8 */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Step 8: Train your team
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Security awareness training is a compliance requirement and a practical necessity. Every employee should complete training within 30 days of hire and annually thereafter.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Cover the basics:</b> phishing recognition and reporting, password management, device security, data handling, acceptable use, and incident reporting. For roles with elevated access or specific risk profiles (engineering, finance, executive), add targeted training.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Run phishing simulations quarterly.</b> Measure reporting rates, not just click rates. An employee who clicks but reports immediately is more valuable than one who ignores the email entirely.
                  </p>
                </div>
              </section>

              {/* STEP 9 */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Step 9: Test your program
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    You've built the controls, written the policies, set up monitoring, trained the team. Now test it.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Run a{" "}
                    <Link to="/penetration-testing-services/" className="text-sky-700 font-semibold hover:underline">
                      penetration test
                    </Link>
                    . Have an external firm attempt to find vulnerabilities in your application and infrastructure. Fix the critical and high findings. Retest to verify.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Run an incident response tabletop. Walk your team through a realistic scenario and see where the plan breaks down. Update the plan based on what you learn.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Run your first internal audit if you're pursuing ISO 27001. Review your controls against the standard and identify gaps before the certification auditor does.
                  </p>
                </div>
              </section>

              {/* STEP 10 */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Step 10: Get the audit and keep the program running
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Schedule your SOC 2, ISO 27001, or{" "}
                    <Link to="/hitrust" className="text-sky-700 font-semibold hover:underline">
                      HITRUST assessment
                    </Link>
                    . Your GRC platform has been collecting evidence. Your controls have been operating. Your policies are current. Your risk assessment is documented. You're ready.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    The audit itself typically takes 4 to 8 weeks. Your security team or vCISO coordinates with the auditor, handles evidence requests, and manages follow-ups. The output is a report you can share with customers.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Then the real work begins: keeping the program running. Access reviews every quarter. Policy reviews annually. Continuous monitoring through your{" "}
                    <Link to="/compliance-privacy-grc" className="text-sky-700 font-semibold hover:underline">
                      GRC platform
                    </Link>
                    . Annual pen tests. Annual risk assessment updates. Regular training. Ongoing vendor reviews.
                  </p>
                </div>
              </section>

              {/* CLOSING CALLOUT */}
              <section className="mb-10">
                <div className="bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200 rounded-xl p-8">
                  <p className="text-gray-800 leading-relaxed text-lg">
                    A security program isn't a project with an end date. It's an ongoing operation. The companies that treat it that way have clean audits, fast questionnaire responses, and security programs that actually protect the business.
                  </p>
                </div>
              </section>

              {/* AUTHOR */}
              <section className="mb-12 border-t border-gray-200 pt-8">
                <p className="text-gray-600 text-base italic">
                  Farbod Fakhrai is the founder of Com-Sec, a cybersecurity and compliance consulting firm supporting startups and growth-stage companies.{" "}
                  <a
                    href="https://com-sec.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-700 font-semibold hover:underline"
                  >
                    com-sec.com
                  </a>
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
                Ready to build your security program?
              </h3>

              <p className="text-sky-200 text-lg mb-6 max-w-xl mx-auto leading-relaxed">
                Com-Sec helps startups and growth-stage companies build a security program that fits the business — and keeps it running.
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
