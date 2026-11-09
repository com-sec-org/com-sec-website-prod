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

export default function BusinessEmailCompromise() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "Business Email Compromise: The $3 Billion Problem No One Talks About Enough",
      text: "The numbers keep getting worse, and most companies still aren't treating business email compromise like the threat it is. Here's how to defend against it.",
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
      title: "Why Security Awareness Training Matters for Every Employee",
      excerpt:
        "Security awareness training is not going to stop breaches. But it still matters. Here's why, and how to do it in a way that actually provides value.",
      link: "/blog/why-security-awareness-training-matters-for-every-employee",
      category: "Security Awareness",
      emoji: "🎯",
    },
    {
      title: "What Your Cyber Insurance Carrier Is About to Ask You (And Why You Should Care)",
      excerpt:
        "Cyber insurance used to be simple. That era is over. Here's what carriers are actually asking now, and what it means for your premium.",
      link: "/blog/what-your-cyber-insurance-carrier-is-about-to-ask-you-and-why-you-should-care",
      category: "Risk Management",
      emoji: "🛡️",
    },
    {
      title: "Zero Trust for Startups: What It Actually Means (Without the Enterprise BS)",
      excerpt:
        "Zero trust has become one of those terms that means everything and nothing. It doesn't require a seven-figure budget and a team of 20.",
      link: "/blog/zero-trust-for-startups-what-it-actually-means-without-the-enterprise-bs",
      category: "Security Architecture",
      emoji: "🔐",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Business Email Compromise: The $3 Billion Problem No One Talks About Enough</title>

        <meta
          name="description"
          content="In 2025, the FBI's IC3 received 24,768 BEC complaints with $3.05 billion in reported losses. Here's why BEC works so well, why startups are especially vulnerable, and how to defend against it."
        />

        <link
          rel="canonical"
          href="https://com-sec.io/blog/business-email-compromise-the-3-billion-problem-no-one-talks-about-enough"
        />

        <meta
          property="og:title"
          content="Business Email Compromise: The $3 Billion Problem No One Talks About Enough"
        />

        <meta
          property="og:description"
          content="The numbers keep getting worse, and most companies still aren't treating business email compromise like the threat it is. Here's how to defend against it."
        />

        <meta
          property="og:image"
          content="https://com-sec.io/images/blog-images/business-email-compromise-the-3-billion-problem-no-one-talks-about-enough.png"
        />

        <meta
          property="og:url"
          content="https://com-sec.io/blog/business-email-compromise-the-3-billion-problem-no-one-talks-about-enough"
        />

        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Com-Sec" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:author" content="Farbod Fakhrai" />
        <meta property="article:published_time" content="2026-11-09T00:00:00Z" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comsec" />

        <meta
          name="twitter:title"
          content="Business Email Compromise: The $3 Billion Problem No One Talks About Enough"
        />

        <meta
          name="twitter:description"
          content="The numbers keep getting worse, and most companies still aren't treating business email compromise like the threat it is. Here's how to defend against it."
        />

        <meta
          name="twitter:image"
          content="https://com-sec.io/images/blog-images/business-email-compromise-the-3-billion-problem-no-one-talks-about-enough.png"
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
                Threat Landscape
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-balance">
              Business Email Compromise: The $3 Billion Problem No One Talks About Enough
            </h1>

            <p className="text-xl text-sky-100 mb-8 leading-relaxed">
              Business email compromise is not new. But the numbers keep getting worse, and most companies still aren't treating it like the threat it is.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sky-200">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>November 9, 2026</span>
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
                src="/images/blog-images/business-email-compromise-the-3-billion-problem-no-one-talks-about-enough.png"
                alt="Business Email Compromise: The $3 Billion Problem No One Talks About Enough"
                className="rounded-xl shadow-md max-w-xl w-full h-auto"
              />
            </div>

            <div className="prose prose-lg max-w-none">

              {/* INTRO */}
              <section className="mb-10">
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Business email compromise is not new. But the numbers keep getting worse, and most companies still aren't treating it like the threat it is.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    In 2025, the FBI's IC3 received 24,768 BEC complaints with $3.05 billion in reported losses. That's up from 21,442 complaints and $2.77 billion the year before. Since 2013, BEC has accounted for over $55.5 billion in exposed losses globally.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    The average loss per incident: roughly $123,000. For a startup, that can be a quarter's runway gone in a single wire transfer.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    And BEC attacks are still accelerating. Fortra reported a 22% surge in BEC attacks in mid-2026 alone.
                  </p>
                </div>
              </section>

              {/* WHY BEC WORKS */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  WHY BEC WORKS SO WELL
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    BEC doesn't rely on malware, zero-days, or sophisticated exploits. It relies on trust.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    An attacker compromises or spoofs a legitimate email account and sends a request that looks completely normal: a wire transfer, an invoice payment, a payroll change, updated banking details for a vendor. The email comes from someone the recipient knows and trusts. There's no malicious attachment. No suspicious link. Just a request that looks like business as usual.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    That's why BEC accounted for only 2% of observed threats in Microsoft's data but 21% of successful attack outcomes. Compare that to ransomware at 16%. BEC is less common but more effective.
                  </p>
                </div>
              </section>

              {/* MOST COMMON ATTACKS */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  THE MOST COMMON BEC ATTACKS
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    According to the Association for Financial Professionals' 2024 survey:
                  </p>

                  <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
                    <li>Wire transfer fraud: targeted in 63% of cases</li>
                    <li>Executive impersonation: 49% of cases</li>
                    <li>Vendor impostor fraud: 45% of cases</li>
                    <li>Invoice fraud: 24% of cases</li>
                  </ul>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Vendor email compromise alone accounts for roughly 61% of all BEC in federal-sector data. Attackers know that vendor payments are high-volume, routine, and rarely questioned.
                  </p>
                </div>
              </section>

              {/* WHY STARTUPS */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  WHY STARTUPS ARE ESPECIALLY VULNERABLE
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Most startups don't have formal payment verification procedures beyond "the CEO said so." One person often approves and sends wires. Email authentication controls like DMARC, DKIM, and SPF aren't properly enforced. Security awareness training, if it exists at all, doesn't cover BEC specifically. And there's rarely a process for verifying banking changes from vendors or clients.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    The typical startup finance workflow: someone gets an email, it looks legitimate, and they act on it. That's exactly the gap BEC exploits.
                  </p>
                </div>
              </section>

              {/* HOW TO DEFEND */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  HOW TO DEFEND AGAINST IT
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    BEC is a process problem, not a technology problem. The companies that get hit aren't the ones with weak firewalls. They're the ones where a single email can move money without a second check. Here's how to close that gap.
                  </p>

                  <h3 className="text-xl font-bold text-gray-900 pt-2">
                    Lock Down Your Email
                  </h3>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Start with the basics. Set your DMARC policy to "reject" on all company domains, including domains you don't use for email. Enable DKIM signing on all outbound mail. These controls won't stop every BEC attack, but they make it significantly harder for anyone to send email pretending to be you.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Turn on external sender warnings so your team sees a banner when an email comes from outside the organization. Enable lookalike domain detection in your email security platform. And block auto-forwarding rules to external addresses. Attackers set these up after compromising a mailbox to silently monitor conversations and learn your payment patterns before they strike.
                  </p>

                  <h3 className="text-xl font-bold text-gray-900 pt-2">
                    Enforce Strong Authentication
                  </h3>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Require MFA on every email account. No exceptions. SMS-based MFA is better than nothing, but authenticator apps or hardware keys are stronger. Disable legacy authentication protocols like POP, IMAP, and SMTP AUTH that bypass MFA entirely. Monitor for impossible travel logins and sign-ins from unfamiliar locations or devices.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    A compromised email account is the starting point for most BEC attacks. MFA is the single most effective control to prevent it.
                  </p>

                  <h3 className="text-xl font-bold text-gray-900 pt-2">
                    Build Payment Verification Into Your Process
                  </h3>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    This is where most companies fail. Require dual authorization on any wire transfer, ACH payment, or payment method change. No single person should be able to initiate and approve a payment. Establish a dollar threshold, say $5,000, above which a second approver is mandatory.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Verify all banking changes by calling the requestor at a number you already have on file. Never use contact information from the email requesting the change. That phone number in the email signature could belong to the attacker.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Implement a mandatory waiting period of 24 to 48 hours for new vendor payment setup or changes to existing payment instructions. Speed is the attacker's weapon. Slowing down is your defense.
                  </p>

                  <h3 className="text-xl font-bold text-gray-900 pt-2">
                    Treat Vendor Management as a Security Function
                  </h3>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Maintain a verified vendor payment registry with confirmed banking details. Any request that deviates from the registered details triggers a verification call before any payment is processed.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Log all payment change requests and approvals. If something goes wrong, you need that paper trail for recovery, insurance claims, and law enforcement. Treat vendor onboarding the same way you treat user onboarding: verify identity, confirm details through a separate channel, and document everything.
                  </p>

                  <h3 className="text-xl font-bold text-gray-900 pt-2">
                    Train Your Team on BEC Specifically
                  </h3>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Generic phishing training doesn't cut it. Your finance, HR, and executive teams need to know what BEC attacks actually look like. Show them real examples: a spoofed invoice, a compromised vendor email thread, a fake CEO wire request. Run BEC-specific tabletop exercises at least quarterly.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Most importantly, establish a "no pressure" policy. Any request that includes urgency, secrecy, or pressure to skip verification steps gets escalated, not fast-tracked. That urgency is the attack. The person who calls the CEO to verify a wire request should be praised, not treated like they're slowing things down.
                  </p>

                  <h3 className="text-xl font-bold text-gray-900 pt-2">
                    Know What to Do When It Happens
                  </h3>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    If you suspect a BEC payment went through, contact your bank immediately. The FBI's Financial Fraud Kill Chain recovered $679 million in 2025 by freezing fraudulent transfers, but speed matters. You have hours, not days.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    File a complaint with IC3 at ic3.gov right away. This is what triggers the kill chain and gives law enforcement a chance to recover your funds. Preserve all email headers, logs, and communications. Don't delete or forward anything from the compromised thread.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    The difference between recovering the money and losing it permanently is often how fast you act in the first few hours.
                  </p>
                </div>
              </section>

              {/* BOTTOM LINE */}
              <section className="mb-10">
                <div className="bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200 rounded-xl p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    THE BOTTOM LINE
                  </h2>

                  <div className="space-y-4">
                    <p className="text-gray-800 leading-relaxed text-lg">
                      $3 billion in losses last year. $123,000 average per incident. A 22% surge in attacks in 2026. And the attacks are getting better, faster, and harder to spot as attackers adopt AI to generate more convincing impersonation emails.
                    </p>

                    <p className="text-gray-800 leading-relaxed text-lg">
                      The fix isn't expensive. It's verification procedures, email authentication, dual authorization, and training your team to question anything that involves money. The cost of not doing it is a wire transfer you can't get back.
                    </p>

                    <p className="text-gray-800 leading-relaxed text-lg">
                      Com-Sec helps startups and growth-stage companies build security programs that prevent attacks like BEC before they cost you money. If your payment verification process is "the CEO emailed me," we should talk. Visit{" "}
                      <b>
                        <a
                          href="https://com-sec.io/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sky-700 font-semibold hover:underline"
                        >
                          com-sec.io
                        </a>
                      </b>
                      .
                    </p>
                  </div>
                </div>
              </section>

            </div>
          </div>
        </article>

        {/* CTA */}
        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-sky-900 via-blue-800 to-slate-900 rounded-xl px-8 py-10 text-white text-center shadow-lg">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Is your payment process "the CEO emailed me"?
              </h3>

              <p className="text-sky-200 text-lg mb-6 max-w-xl mx-auto leading-relaxed">
                Com-Sec helps startups build the verification procedures that stop BEC before it costs you money.
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
