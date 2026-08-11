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

export default function ThinkYoureTooSmallForSecurity() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "Think You're Too Small for Security? Think Again.",
      text: "Wealth management firms, family offices, VC funds, law firms, and medical practices don't need a certification. They need the fundamentals done right.",
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

  const whatYouNeed = [
    {
      title: "Email security",
      body: "This is where most attacks start. Phishing, business email compromise, and credential theft all come through email. At minimum: MFA on every email account (not SMS, use an authenticator app or hardware key), advanced threat protection enabled (Microsoft Defender for Office 365, Google Workspace security features), and a policy that wire transfer instructions received via email are always verified by phone using a known number.",
    },
    {
      title: "Device management",
      body: "Every laptop and phone that accesses firm data needs to be managed. That means encryption enabled (FileVault on Mac, BitLocker on Windows), screen lock after inactivity, remote wipe capability, and automatic OS updates. An MDM like Mosyle, Jamf, or even Microsoft Intune handles all of this.",
    },
    {
      title: "Access controls",
      body: "In most small firms, everyone has access to everything. The admin assistant has the same access as the managing partner. Implement least-privilege access. Not everyone needs access to wire instructions, LP tax documents, or investment account credentials. Review access when people change roles or leave.",
    },
    {
      title: "Password management",
      body: "Shared passwords in a spreadsheet, passwords in email, passwords on sticky notes. Use a password manager (1Password, Bitwarden). Unique passwords for every system. No sharing credentials via email or text.",
    },
    {
      title: "Secure file sharing",
      body: "Client documents shouldn't be going back and forth over email attachments. Use a secure file sharing platform with access controls and audit logging. If you're on Microsoft 365, SharePoint and OneDrive with proper permissions work. If you need a client portal, tools like Citrix ShareFile or Box are built for this.",
    },
    {
      title: "Backups",
      body: "If ransomware hits your firm tomorrow, can you recover? Your data should be backed up to a separate location (cloud backup, not just a hard drive on the same network), backups should be tested periodically, and backup access should be separate from your primary credentials.",
    },
    {
      title: "Incident response",
      body: "You don't need a 30-page plan. You need answers to four questions: Who do we call first? How do we contain it? Who needs to be notified? How do we recover? Write it down, put it somewhere everyone can find it, and make sure more than one person knows the plan.",
    },
  ];

  const regulatoryAngle = [
    {
      title: "Financial services",
      body: "SEC-registered investment advisers have obligations under the Safeguards Rule and the SEC's cybersecurity risk management rules. FINRA-regulated broker-dealers have cybersecurity requirements under various FINRA rules. State-registered advisers face varying state-level requirements. New York's DFS cybersecurity regulation (23 NYCRR 500) applies to financial services companies operating in New York.",
    },
    {
      title: "Law firms",
      body: "The ABA Model Rules of Professional Conduct require lawyers to make reasonable efforts to prevent unauthorized access to client information (Rule 1.6). A breach of privileged communications isn't just a security incident — it's a potential ethics violation. Some malpractice insurers are starting to ask about cybersecurity controls during the application process.",
    },
    {
      title: "Medical practices",
      body: "HIPAA applies to every healthcare provider that transmits health information electronically, regardless of size. A solo practitioner has the same HIPAA Security Rule obligations as a hospital system: a risk assessment, security policies, workforce training, and breach notification procedures. Penalties range from $100 to $50,000 per violation, with annual maximums up to $1.5 million per violation category.",
    },
  ];

  const costItems = [
    "Password manager: $5-10 per user per month.",
    "MDM: $5-15 per device per month.",
    "Email security (advanced threat protection): usually included in Microsoft 365 or Google Workspace business plans.",
    "Backup solution: $50-200 per month depending on data volume.",
    "Cyber insurance: $2,000-5,000 per year.",
    "Security advisor to set it all up and maintain it: $2,000-5,000 per month.",
  ];

  return (
    <>
      <Helmet>
        <title>Think You're Too Small for Security? Think Again.</title>

        <meta
          name="description"
          content="Wealth management firms, family offices, VC funds, law firms, and medical practices don't need a compliance certification. Here's what they actually need to protect the sensitive data they hold."
        />

        <link
          rel="canonical"
          href="https://com-sec.io/blog/think-youre-too-small-for-security-think-again"
        />

        <meta
          property="og:title"
          content="Think You're Too Small for Security? Think Again."
        />

        <meta
          property="og:description"
          content="Wealth management firms, family offices, VC funds, law firms, and medical practices don't need a compliance certification. Here's what they actually need to protect the sensitive data they hold."
        />

        <meta
          property="og:image"
          content="https://com-sec.io/images/blog-images/think-youre-too-small-for-security-think-again.png"
        />

        <meta
          property="og:url"
          content="https://com-sec.io/blog/think-youre-too-small-for-security-think-again"
        />

        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Com-Sec" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:author" content="Farbod Fakhrai" />
        <meta property="article:published_time" content="2026-08-07T00:00:00Z" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comsec" />

        <meta
          name="twitter:title"
          content="Think You're Too Small for Security? Think Again."
        />

        <meta
          name="twitter:description"
          content="Wealth management firms, family offices, VC funds, law firms, and medical practices don't need a compliance certification. Here's what they actually need to protect the sensitive data they hold."
        />

        <meta
          name="twitter:image"
          content="https://com-sec.io/images/blog-images/think-youre-too-small-for-security-think-again.png"
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
              Think You're Too Small for Security? Think Again.
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sky-200">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>August 6, 2026</span>
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
                src="/images/blog-images/think-youre-too-small-for-security-think-again.png"
                alt="Think You're Too Small for Security? Think Again."
                className="rounded-xl shadow-md max-w-xl w-full h-auto"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <section className="mb-10">
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Not every company needs a compliance certification. If you're a wealth management firm, a family office, a VC fund, a law firm, or a private medical practice, nobody is sending you a security questionnaire or asking for your SOC 2 report. There's no enterprise procurement process to pass. No auditor knocking on your door.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    But you're sitting on some of the most sensitive information imaginable.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Client net worth. Investment positions. Tax returns. Estate plans. Wire transfer instructions. Fund performance data. LP personal information. Deal flow. Cap tables. Bank account details. Attorney-client privileged communications. Case files. Medical records. Patient diagnoses. Prescription histories. Billing information.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    A breach at a family office doesn't make the news. It makes a phone call from a client whose entire financial life just got exposed. A breach at a law firm compromises privileged communications that can torpedo active litigation. A breach at a medical practice exposes patient health records with HIPAA notification requirements and potential federal penalties. These are different kinds of consequences than a SaaS company losing email addresses.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  Why small firms are attractive targets
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Most wealth management firms, family offices, VC funds, law firms, and medical practices operate with 5 to 30 people. Small team. Lean operations. No IT department. Maybe a managed service provider handling the basics.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Attackers know this. They also know that the data inside these firms is extraordinarily valuable. A compromised email account at a family office can lead to fraudulent wire transfers. A breached file share at a VC fund exposes LP data, deal terms, and portfolio company financials. A ransomware attack on a law firm locks up privileged case files with no backup to restore from. A phishing attack on a medical practice exposes thousands of patient records and triggers HIPAA breach notification requirements.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    These firms don't get targeted because they're famous. They get targeted because they're valuable and often under-protected.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  The problem with "we're too small for this"
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    I hear it regularly. "We're only 8 people." "We don't have customer data like a SaaS company." "Nobody's going to hack a dermatology practice."
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Every firm that's been breached thought the same thing. Size doesn't determine risk. The value of the data and the strength of the controls around it do.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    A $2B family office with 6 employees and no MFA on their email is a higher-value, easier target than a 200-person SaaS company with SOC 2 and an MDM. A 4-attorney law firm handling M&A transactions has privileged deal documents worth millions sitting in an unencrypted email inbox. A medical practice with 3 providers and 2,000 patient records has a HIPAA obligation regardless of how small the office is. The SaaS company has controls. These firms often have a Gmail password from 2019.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  What you actually need
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    You don't need SOC 2. You don't need{" "}
                    <Link to="/iso27001" className="text-sky-700 underline hover:text-sky-900">
                      ISO 27001
                    </Link>
                    . You don't need a GRC platform. You need the fundamentals done right. Here's what that looks like for a small firm handling sensitive information.
                  </p>
                  <div className="space-y-4">
                    {whatYouNeed.map((item, index) => (
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
                  Wire fraud deserves its own section
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Wire fraud is the number one financial risk for wealth management firms and family offices. The attack pattern is simple and devastatingly effective:
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    An attacker compromises an email account (often through phishing). They monitor email traffic and learn the firm's communication patterns. They wait for a legitimate wire transfer conversation. They insert themselves into the thread with modified wire instructions, often from a lookalike email address. The firm sends the wire to the attacker's account. The money is gone.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    I've seen this happen to firms managing hundreds of millions of dollars. The losses are immediate and usually unrecoverable.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The defense is simple: never execute a wire transfer based solely on email instructions. Always verify by phone using a number you already have on file, not a number from the email. Always. No exceptions. No matter how urgent it seems. Make this a firm-wide policy and enforce it.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  Cyber insurance
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    If you handle sensitive financial data and you don't have cyber insurance, get it. Policies for small firms typically cost $2,000 to $5,000 per year and cover breach response, forensics, legal fees, client notification, and in some cases wire fraud losses.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Most cyber insurance applications will ask about your security controls: MFA, backups, endpoint protection, email security. Having these in place before you apply will get you better coverage at a lower premium. Not having them may get you denied.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  The regulatory angle
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Depending on your firm type, you may have regulatory obligations around cybersecurity that exist whether or not you pursue a certification:
                  </p>
                  <div className="space-y-4">
                    {regulatoryAngle.map((item, index) => (
                      <div
                        key={index}
                        className="bg-sky-50 border-l-4 border-sky-500 rounded-r-lg p-4"
                      >
                        <p className="text-gray-800 text-lg">
                          <b>{item.title}.</b>{" "}
                          {item.title === "Medical practices" ? (
                            <>
                              HIPAA applies to every healthcare provider that transmits health information electronically, regardless of size. A solo practitioner has the same{" "}
                              <Link to="/hipaa" className="text-sky-700 underline hover:text-sky-900">
                                HIPAA Security Rule
                              </Link>{" "}
                              obligations as a hospital system: a risk assessment, security policies, workforce training, and breach notification procedures. Penalties range from $100 to $50,000 per violation, with annual maximums up to $1.5 million per violation category.
                            </>
                          ) : (
                            item.body
                          )}
                        </p>
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg pt-2">
                    Even if you're not directly regulated, your clients and patients increasingly have expectations about how you protect their information. High-net-worth individuals, institutional LPs, corporate clients, and patients are all more aware of data security than they were five years ago. Having clear answers builds confidence.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  What this costs
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    For a firm of 5 to 30 people, getting the fundamentals right costs less than most people think:
                  </p>
                  <ul className="space-y-3 bg-gray-50 border border-gray-200 rounded-lg p-6">
                    {costItems.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-700 leading-relaxed text-lg pt-2">
                    <b>Total:</b> roughly $3,000 to $8,000 per month for a firm managing tens of millions to billions in assets. That's a rounding error on the AUM. The cost of a single wire fraud incident or data breach is 10 to 100x that.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  The bottom line
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    You don't need a certification. You don't need a compliance framework. You need someone to set up the basics, make sure they're working, and keep an eye on things so you can focus on managing money, practicing law, treating patients, or closing deals.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    That's what we do for our wealth management, family office, VC, law firm, and medical practice clients. No frameworks. No audits. Just practical security that protects the firm and the people who trust you with their most sensitive information.
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
                  </a>, a cybersecurity and compliance consulting firm supporting startups and growth-stage companies.
                </p>
              </section>
            </div>
          </div>
        </article>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-sky-900 via-blue-800 to-slate-900 rounded-xl px-8 py-10 text-white text-center shadow-lg">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Handling sensitive client data?
              </h3>
              <p className="text-sky-200 text-lg mb-6 max-w-xl mx-auto leading-relaxed">
                Com-Sec helps wealth management firms, family offices, VC funds, law firms, and medical practices get the security fundamentals right — no frameworks, no audits required.
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
