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

export default function TheQuestionIAskEveryFounder() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "The Question I Ask Every Founder in Our First Meeting",
      text: "\u201cIf your laptop got stolen right now, what would an attacker have access to?\u201d It takes 10 seconds and tells me more about a founder's security posture than 30 minutes on their tech stack.",
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

  const startupPatterns = [
    {
      title: "Founders don't think of themselves as targets",
      body: "\u201cI'm not important enough to hack\u201d is a common reflex. But attackers don't target people based on fame. They target people based on access. A founder of a 30-person startup managing $5M in annual revenue, with active sessions to AWS, banking, email, and customer data, is a higher-value target than a mid-level employee at a Fortune 500 company who has access to a shared team drive and a ticketing system.",
    },
    {
      title: "Personal and work are blended on the same device",
      body: "At startups, especially early stage, the founder's personal laptop is the work laptop. Personal email, personal banking, personal social media, all on the same device as production infrastructure and customer data. A compromised personal account can lead to a compromised work environment.",
    },
    {
      title: "Convenience wins over security",
      body: "Browser-saved passwords. Auto-login to every service. No screen lock timeout. No VPN. MFA disabled because it was annoying. These choices make sense when you're moving fast and context-switching between 15 different tools every hour. They make less sense when you consider what happens if the device falls into the wrong hands.",
    },
    {
      title: "No MDM or device management",
      body: "Most early-stage startups don't have mobile device management. The founder's laptop isn't enrolled in anything. There's no way to remotely wipe it, verify it's encrypted, or enforce a screen lock. If it gets lost or stolen, the only option is to manually change passwords on every service and hope the attacker hasn't already accessed them.",
    },
    {
      title: "Shared credentials",
      body: "The founder knows every shared password in the company. The admin password for the hosting provider. The shared login for the analytics platform. The credentials for the company bank account. Often these are stored in a text file, a note, or saved in the browser, not in a password manager.",
    },
  ];

  const digitalScenarios = [
    {
      title: "Malware infection",
      body: "A founder visits a compromised website, downloads a malicious attachment, or installs a tool that includes a keylogger or remote access trojan. The attacker now has access to everything on the device without physically possessing it. They can capture passwords as they're typed, access active sessions, exfiltrate files, and monitor activity in real time.",
    },
    {
      title: "Credential compromise",
      body: "The founder reuses a password that appears in a data breach. An attacker tries that password against their email, and it works. From email, they reset passwords on other services. Within hours, they've pivoted from a single compromised password to full access to the company's infrastructure.",
    },
    {
      title: "Business email compromise",
      body: "An attacker gains access to the founder's email through phishing. They monitor the inbox, learn communication patterns, and wait for the right moment. When a wire transfer or sensitive transaction is in progress, they insert themselves into the conversation with modified instructions.",
    },
    {
      title: "Session hijacking",
      body: "An attacker on the same network (public WiFi at a hotel, coffee shop, or airport) intercepts session tokens from unencrypted connections. They don't need the password. They have the active session.",
    },
  ];

  const fixSteps = [
    {
      title: "Enable full disk encryption",
      body: "FileVault on Mac, BitLocker on Windows. If the laptop is powered off, the data on the drive is inaccessible without the password. This is table stakes. Check right now: System Settings > Privacy & Security > FileVault on Mac, or Settings > Privacy & Security > Device Encryption on Windows. If it's not on, turn it on today.",
    },
    {
      title: "Set a short screen lock timeout",
      body: "5 minutes maximum. If you walk away from your laptop for 10 minutes at a coffee shop, the screen should be locked. Require a password to unlock, not just a trackpad touch.",
    },
    {
      title: "Enable remote wipe",
      body: "Through your MDM (Mosyle, Jamf, Intune) if you have one, or through the OS (Find My Mac, Microsoft Find My Device). If a device is lost or stolen, you need to be able to wipe it remotely within minutes. Test this before you need it \u2014 a remote wipe you've never tested is a remote wipe that might not work when it matters.",
    },
    {
      title: "Use a password manager",
      body: "1Password, Bitwarden, Dashlane. Stop saving passwords in the browser, reusing passwords, or storing credentials in text files and notes. A password manager requires a separate master password, can be configured to lock after inactivity, and generates unique passwords for every service.",
    },
    {
      title: "Enable MFA on everything",
      body: "Every system, no exceptions: email, cloud consoles, banking, code repositories, admin panels, SaaS tools. Use an authenticator app at minimum. Use FIDO2 security keys or passkeys for your most critical accounts \u2014 they're phishing-resistant, so even if you enter your password on a fake site, the key won't authenticate to a domain it doesn't recognize.",
    },
    {
      title: "Review your active sessions",
      body: "Right now. How many services are you logged into on this device? Which ones auto-login when you open the browser? Which ones would survive a reboot? Close the sessions you don't need open. Google, GitHub, AWS, Slack, and most major platforms let you view and terminate active sessions from their settings page.",
    },
    {
      title: "Separate personal and work",
      body: "If possible, use a dedicated work device managed by your company. If you can't, at minimum use separate browser profiles (not just tabs) for personal and work activity. This prevents a compromised personal account from directly affecting work sessions.",
    },
    {
      title: "Enroll the device in MDM",
      body: "Even if you're the only employee. MDM gives you remote wipe, encryption enforcement, screen lock enforcement, OS update enforcement, and the ability to manage the device centrally. When you hire employees, the MDM is already in place and you're leading by example.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>The Question I Ask Every Founder in Our First Meeting</title>

        <meta
          name="description"
          content="\u201cIf your laptop got stolen right now, what would an attacker have access to?\u201d Why this question matters, the startup-specific patterns that make it worse, and how to fix it in about an hour."
        />

        <link
          rel="canonical"
          href="https://com-sec.io/blog/the-question-i-ask-every-founder-in-our-first-meeting"
        />

        <meta
          property="og:title"
          content="The Question I Ask Every Founder in Our First Meeting"
        />

        <meta
          property="og:description"
          content="\u201cIf your laptop got stolen right now, what would an attacker have access to?\u201d Why this question matters, the startup-specific patterns that make it worse, and how to fix it in about an hour."
        />

        <meta
          property="og:image"
          content="https://com-sec.io/images/blog-images/the-question-i-ask-every-founder-in-our-first-meeting.png"
        />

        <meta
          property="og:url"
          content="https://com-sec.io/blog/the-question-i-ask-every-founder-in-our-first-meeting"
        />

        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Com-Sec" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:author" content="Farbod Fakhrai" />
        <meta property="article:published_time" content="2026-08-21T00:00:00Z" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comsec" />

        <meta
          name="twitter:title"
          content="The Question I Ask Every Founder in Our First Meeting"
        />

        <meta
          name="twitter:description"
          content="\u201cIf your laptop got stolen right now, what would an attacker have access to?\u201d Why this question matters, the startup-specific patterns that make it worse, and how to fix it in about an hour."
        />

        <meta
          name="twitter:image"
          content="https://com-sec.io/images/blog-images/the-question-i-ask-every-founder-in-our-first-meeting.png"
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
              The Question I Ask Every Founder in Our First Meeting
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sky-200">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>August 2026</span>
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
                src="/images/blog-images/the-question-i-ask-every-founder-in-our-first-meeting.png"
                alt="The Question I Ask Every Founder in Our First Meeting"
                className="rounded-xl shadow-md max-w-xl w-full h-auto"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <section className="mb-10">
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    I ask every founder the same question during our first
                    meeting. It takes 10 seconds and it tells me more about
                    their security posture than 30 minutes of discussion
                    about their tech stack.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    "If your laptop got stolen right now, what would an
                    attacker have access to?"
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Most founders go quiet for a second. Then they start
                    listing things. Email. Slack. AWS console. Bank
                    accounts. Customer data. Source code. Investor
                    documents. CRM. HR platform. Payroll. Cap table. Board
                    documents.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    All behind one password. No MFA on half of it. No device
                    encryption. Active sessions everywhere. Auto-saved
                    passwords in the browser. Logged into everything.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The laptop isn't the risk. The sessions on it are.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  Why this question matters
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The question isn't really about a stolen laptop. It's
                    about how much access is concentrated on a single device
                    with inadequate controls. The stolen laptop is just the
                    scenario that makes it tangible.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The same risk applies if the laptop is compromised by
                    malware. If someone gains remote access through a
                    vulnerability. If the founder connects to a malicious
                    WiFi network. If someone shoulder-surfs their password
                    at a coffee shop. The attack vector doesn't matter.
                    What matters is what the attacker gets access to once
                    they have the device or a session on it.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    For founders specifically, the exposure is amplified
                    because they typically have access to everything.
                    Production infrastructure. Financial accounts. Investor
                    communications. Board documents. Customer data. HR
                    records. Legal documents. Bank accounts with wire
                    transfer authority.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    A compromised founder laptop is often the single
                    highest-impact device in the entire company. If you
                    were an attacker and you could choose any device at the
                    company to compromise, you'd pick the founder's.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  What makes it worse at startups
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Several startup-specific patterns make this risk
                    particularly acute.
                  </p>
                  <div className="space-y-4">
                    {startupPatterns.map((item, index) => (
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
                  The real-world scenarios
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    A stolen laptop with an encrypted drive, a strong
                    password, no active sessions, MFA on all accounts, and
                    remote wipe capability is a hardware loss. Annoying, but
                    manageable. Report it, wipe it remotely, replace it,
                    move on. Total impact: the cost of a new laptop and a
                    few hours of inconvenience.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    A stolen laptop with no encryption, saved passwords in
                    the browser, active sessions to AWS, banking, email, and
                    Slack, no MFA on critical accounts, and no remote wipe
                    capability is an active security incident. The person
                    who has the laptop (or whoever they sell it to) doesn't
                    need to crack anything. They open the lid and they're
                    logged in.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    What can happen in the first hour: the attacker accesses
                    email and reads sensitive communications. They access
                    Slack and download conversation history. They access
                    the AWS console and copy or delete data. They access the
                    banking portal and initiate a wire transfer. They access
                    the code repository and steal intellectual property.
                    They access HR tools and download employee PII. They
                    read board documents, investor updates, and cap tables.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    By the time the founder realizes the laptop is missing
                    and starts changing passwords, the attacker may have
                    already downloaded everything they need.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    This isn't hypothetical. Laptop theft is one of the most
                    common physical security incidents, and the data on the
                    device is usually worth orders of magnitude more than
                    the hardware itself.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  The question also applies to getting hacked
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The stolen laptop scenario is dramatic because it's
                    physical and tangible. But the same exposure exists in
                    purely digital scenarios that are actually more common.
                  </p>
                  <div className="space-y-4">
                    {digitalScenarios.map((item, index) => (
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
                    In every one of these scenarios, the damage is
                    determined by what the founder has access to and what
                    controls are in place to limit that access. The same
                    question applies: if an attacker got into your device
                    right now, what would they have?
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  How to fix it
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    None of this requires enterprise-grade security. It
                    requires discipline and about an hour of setup.
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
                  The team question
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The founder laptop is the highest-impact device, but the
                    question applies to everyone. Ask every member of your
                    team: what would an attacker have access to from your
                    device? For engineers with production access, the
                    exposure may be just as significant as the founder's.
                    For customer success reps with access to customer data,
                    the same applies.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    This is why device management, MFA, and least-privilege
                    access matter for the entire team, not just the founder.
                    Every device in your company is a potential entry point.
                    The controls should be consistent across all of them.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  The bottom line
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The stolen laptop question isn't really about theft.
                    It's about how much damage a single compromised device
                    can cause. Whether it's stolen, infected with malware,
                    or accessed remotely through a compromised credential,
                    the question is the same: what's exposed?
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Ask yourself the question. Then fix whatever made you
                    uncomfortable about the answer. It takes an hour. The
                    cost of not doing it is measured in compromised customer
                    data, stolen IP, fraudulent wire transfers, and the kind
                    of incident that makes the next board meeting very
                    uncomfortable.
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
                Do you know what's exposed on your device right now?
              </h3>
              <p className="text-sky-200 text-lg mb-6 max-w-xl mx-auto leading-relaxed">
                Com-Sec helps founders and growth-stage teams lock down
                device security, MFA, and access controls before a lost
                laptop turns into a real incident.
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
