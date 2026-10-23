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

export default function CyberInsuranceCarrierQuestions() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "What Your Cyber Insurance Carrier Is About to Ask You (And Why You Should Care)",
      text: "Cyber insurance used to be simple. That era is over. Here's what carriers are actually asking now, and what it means for your premium.",
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
      title: "7 Signs Your Business Needs Fractional Security Leadership",
      excerpt:
        "There's a point where the \"we'll figure it out\" approach to security breaks. Here are the seven signs your company has outgrown it.",
      link: "/blog/7-signs-your-business-needs-fractional-security-leadership",
      category: "Security Leadership",
      emoji: "🚩",
    },
    {
      title: "10 Steps to Building an Effective Security Program",
      excerpt:
        "Building a security program is a sequence of practical steps that build on each other. Here's the order we use with every client.",
      link: "/blog/10-steps-to-building-an-effective-security-program",
      category: "Security Program",
      emoji: "🧩",
    },
    {
      title: "Your AI Agents Are a Security Blind Spot. Here's Why That Matters.",
      excerpt:
        "88% of organizations that have deployed AI agents have experienced agent-related security incidents. Here's what breaks when agents go wrong, and what to do about it.",
      link: "/blog/your-ai-agents-are-a-security-blind-spot-heres-why-that-matters",
      category: "AI Governance",
      emoji: "🤖",
    },
  ];

  return (
    <>
      <Helmet>
        <title>What Your Cyber Insurance Carrier Is About to Ask You (And Why You Should Care)</title>

        <meta
          name="description"
          content="Cyber insurance applications now look a lot more like a security audit than a formality. Here's what carriers are actually asking, why it matters beyond the policy, and what to do before your renewal."
        />

        <link
          rel="canonical"
          href="https://com-sec.io/blog/what-your-cyber-insurance-carrier-is-about-to-ask-you-and-why-you-should-care"
        />

        <meta
          property="og:title"
          content="What Your Cyber Insurance Carrier Is About to Ask You (And Why You Should Care)"
        />

        <meta
          property="og:description"
          content="Cyber insurance used to be simple. That era is over. Here's what carriers are actually asking now, and what it means for your premium."
        />

        <meta
          property="og:image"
          content="https://com-sec.io/images/blog-images/what-your-cyber-insurance-carrier-is-about-to-ask-you-and-why-you-should-care.png"
        />

        <meta
          property="og:url"
          content="https://com-sec.io/blog/what-your-cyber-insurance-carrier-is-about-to-ask-you-and-why-you-should-care"
        />

        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Com-Sec" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:author" content="Farbod Fakhrai" />
        <meta property="article:published_time" content="2026-10-22T00:00:00Z" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comsec" />

        <meta
          name="twitter:title"
          content="What Your Cyber Insurance Carrier Is About to Ask You (And Why You Should Care)"
        />

        <meta
          name="twitter:description"
          content="Cyber insurance used to be simple. That era is over. Here's what carriers are actually asking now, and what it means for your premium."
        />

        <meta
          name="twitter:image"
          content="https://com-sec.io/images/blog-images/what-your-cyber-insurance-carrier-is-about-to-ask-you-and-why-you-should-care.png"
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
                Risk Management
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-balance">
              What Your Cyber Insurance Carrier Is About to Ask You (And Why You Should Care)
            </h1>

            <p className="text-xl text-sky-100 mb-8 leading-relaxed">
              Cyber insurance used to be simple. The application process now looks a lot more like a security audit than a formality.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sky-200">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>October 22, 2026</span>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>5 min read</span>
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
                src="/images/blog-images/what-your-cyber-insurance-carrier-is-about-to-ask-you-and-why-you-should-care.png"
                alt="What Your Cyber Insurance Carrier Is About to Ask You (And Why You Should Care)"
                className="rounded-xl shadow-md max-w-xl w-full h-auto"
              />
            </div>

            <div className="prose prose-lg max-w-none">

              {/* INTRO */}
              <section className="mb-10">
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Cyber insurance used to be simple. Fill out a questionnaire, pay a premium, get a policy. The questions were surface-level. The underwriting was loose. If you had an antivirus and a firewall, you were good.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    That era is over.
                  </p>
                </div>
              </section>

              {/* MARKET SHIFT */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  The market has shifted
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    After several years of massive payouts — ransomware attacks, data breaches, business interruption claims — cyber insurers have fundamentally changed how they underwrite policies. Premiums have gone up. Coverage terms have gotten stricter. And the application process now looks a lot more like a security audit than a formality.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    For startups and growth-stage companies, this shift matters because cyber insurance is increasingly a business requirement. Enterprise customers ask if you have it. Investors want to see it. Board members expect it. And the carriers that issue it are now setting a minimum security bar that you have to clear.
                  </p>
                </div>
              </section>

              {/* WHAT THEY'RE ASKING */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  What they're asking now
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Here's what I'm seeing on current cyber insurance applications and renewal questionnaires:
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>MFA.</b> This is non-negotiable for almost every carrier. Do you have MFA enabled for email, VPN, remote access, and admin accounts? If the answer is no to any of these, expect either a denial or a significantly higher premium. Some carriers won't even quote without an MFA.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Endpoint detection and response.</b> Having antivirus isn't enough anymore. Carriers want to see EDR — a solution that can detect, investigate, and respond to threats on your endpoints in real time. Products like CrowdStrike, SentinelOne, or Microsoft Defender for Endpoint.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Email security.</b> Beyond basic spam filtering. Carriers are asking about email authentication (DMARC, DKIM, SPF), phishing protection, and whether you have controls to prevent business email compromise.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Backup and recovery.</b> Do you have backups? Are they tested? Are they air-gapped or immutable (meaning an attacker who gets into your network can't also encrypt or delete your backups)? This is a direct response to ransomware attacks where companies paid ransoms because their backups were also compromised.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Patch management.</b> How quickly do you patch critical vulnerabilities? What's your process? Carriers are looking for evidence that you can respond to new threats promptly, not on a 90-day cycle.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Incident response plan.</b> Do you have one? Has it been tested? Do you have a retainer with a forensics firm? Carriers want to know that if something happens, you have a plan and the resources to execute it.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Employee training.</b> Are your employees trained on phishing, social engineering, and security awareness? How often? Carriers view untrained employees as a risk factor.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Privileged access management.</b> Who has admin access to your critical systems? How is that access managed, reviewed, and rotated? Over-privileged accounts are a common attack vector, and carriers know it.
                  </p>
                </div>
              </section>

              {/* WHY IT MATTERS */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Why this matters beyond the policy
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Here's the thing about cyber insurance requirements: they're not arbitrary. The controls carriers are asking about are the same controls that actually prevent breaches. MFA, EDR, patching, backups, incident response — this is the core security program that every company should have.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    If you're implementing controls specifically to qualify for cyber insurance, you're doing security backwards. But the outcome is the same. And for companies that haven't invested in security because there was no forcing function, the insurance application is becoming exactly that.
                  </p>
                </div>
              </section>

              {/* PREMIUM MATH */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  The premium math
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Premiums vary widely based on industry, company size, revenue, data sensitivity, and — increasingly — your security posture. But here's the general pattern:
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Companies with strong security programs — MFA everywhere, EDR deployed, tested incident response plans, current patching — are getting competitive premiums and favorable coverage terms.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Companies with gaps — no MFA on some systems, no EDR, untested backups, stale incident response plans — are facing premium increases of 30-100% or coverage exclusions that make the policy significantly less useful.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Companies with significant gaps — no MFA, no EDR, no incident response plan — are being denied coverage entirely. And a denial on your record makes future applications harder.
                  </p>
                </div>
              </section>

              {/* WHAT TO DO */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  What to do
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Review your current policy.</b> Do you actually know what's covered and what's excluded? Many policies have sublimits for ransomware, carve-outs for certain attack types, and waiting periods for business interruption claims. Read the fine print.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Prepare for your renewal.</b> If your renewal is coming up, start preparing now. Review the likely questionnaire topics above and identify any gaps. Fix them before the renewal application, not after.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Use the application as a security checklist.</b> The controls your carrier is asking about are the controls you should have. If you're failing the insurance questionnaire, you're also failing at basic security.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Get help if you need it.</b> If you're not sure whether your security program meets current insurance requirements, get an assessment. It's cheaper than a denied claim.
                  </p>
                </div>
              </section>

              {/* BOTTOM LINE */}
              <section className="mb-10">
                <div className="bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200 rounded-xl p-8">
                  <div className="space-y-4">
                    <p className="text-gray-800 leading-relaxed text-lg">
                      The cyber insurance market is doing something that the security industry has been trying to do for years: creating financial consequences for poor security hygiene. Whether that's the right mechanism is debatable. That it's effective is not.
                    </p>

                    <p className="text-gray-800 leading-relaxed text-lg">
                      If you need help getting your security program to a point where you can qualify for competitive cyber insurance rates, that's a conversation we have regularly at Com-Sec.
                    </p>
                  </div>
                </div>
              </section>

              {/* AUTHOR */}
              <section className="mb-12 border-t border-gray-200 pt-8">
                <p className="text-gray-600 text-base italic">
                  Farbod Fakhrai is the founder of{" "}
                  <a
                    href="https://com-sec.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-700 font-semibold hover:underline"
                  >
                    Com-Sec
                  </a>
                  , a{" "}
                  <a
                    href="https://com-sec.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-700 font-semibold hover:underline"
                  >
                    cybersecurity and compliance
                  </a>{" "}
                  consulting firm for startups and growth-stage companies.
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
                Trying to qualify for competitive cyber insurance rates?
              </h3>

              <p className="text-sky-200 text-lg mb-6 max-w-xl mx-auto leading-relaxed">
                Com-Sec helps startups close the gaps that carriers are actually underwriting against.
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
