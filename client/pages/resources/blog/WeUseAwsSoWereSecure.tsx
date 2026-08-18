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

export default function WeUseAwsSoWereSecure() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "\u201cWe Use AWS So We're Secure.\u201d No, You're Not.",
      text: "AWS secures the cloud. You're responsible for security in the cloud. The misconfigurations we find over and over, and how to fix them.",
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

  const misconfigurations = [
    {
      title: "S3 buckets with public access",
      body: "This is still happening in 2026. Despite AWS adding multiple layers of warnings, account-level block public access settings, and console banners, companies still find ways to make buckets public \u2014 sometimes intentionally to serve static assets without realizing the entire bucket's contents become accessible, sometimes accidentally through overly permissive bucket policies. Customer databases, application backups containing credentials, and in one case at a health tech company, files containing patient information, have all turned up sitting in public buckets, accessible to anyone with the URL.",
    },
    {
      title: "Root accounts without MFA",
      body: "The root account in AWS is the god account. It can create and delete resources, modify billing, change security settings, and close the account entirely, and there's no way to restrict its permissions. If this account doesn't have MFA enabled, one compromised password gives an attacker complete, unrestricted control over your entire AWS environment. It takes 5 minutes to fix and it's the single most important security configuration in your entire AWS account, yet it's still missing at companies managing customer data.",
    },
    {
      title: "Security groups open to the world",
      body: "Security groups are AWS's instance-level firewall. Port 22 (SSH) open to 0.0.0.0/0 means anyone on the internet can attempt to connect to your server. Port 3389 (RDP) open to the internet means the same for Remote Desktop. Port 3306 (MySQL) open publicly means your database is accepting connections from anywhere. These configurations exist because someone needed quick access during development and never tightened it down, and they're an invitation for brute-force attacks and credential stuffing.",
    },
    {
      title: "IAM policies granting admin to everyone",
      body: "Building proper, granular IAM policies takes time, so many teams take a shortcut: give everyone the AdministratorAccess managed policy. That means every developer can modify billing, delete production resources, change security configurations, and read every secret. Least-privilege access limits the blast radius when an account is compromised; AdministratorAccess for everyone means a single compromised account gives an attacker everything.",
    },
    {
      title: "CloudTrail turned off",
      body: "CloudTrail is AWS's audit logging service \u2014 it records every API call made in your account, and it's your forensics data and incident investigation starting point. Some companies turn it off to save on storage costs, or never turned it on, or have it enabled in one region but not others. Without it, if someone deletes a database or an attacker accesses your account, you won't know what happened. Standard logging typically costs $2-5 per month.",
    },
    {
      title: "No encryption on EBS volumes or RDS instances",
      body: "AWS KMS makes encryption for storage and databases straightforward to enable with minimal performance impact, and it satisfies the encryption-at-rest requirements in virtually every compliance framework. Many companies don't enable it because it wasn't the default when their resources were created. For companies subject to HIPAA, SOC 2, or ISO 27001, unencrypted storage containing sensitive data is a finding waiting to happen.",
    },
    {
      title: "Unused resources still running",
      body: "Forgotten EC2 instances, orphaned databases, test environments that were never decommissioned, load balancers pointing to nothing. These resources cost money, expand your attack surface, and often run outdated software because nobody remembers they exist. Development and staging environments regularly turn up containing copies of production data with security groups more permissive than production \u2014 making the test environment the weakest link.",
    },
  ];

  const fixSteps = [
    {
      title: "Run AWS Security Hub",
      body: "It's a built-in service that continuously evaluates your environment against best practices (AWS Foundational Security Best Practices, CIS Benchmarks). It'll surface the misconfigurations above and many more. Fix the critical and high findings first.",
    },
    {
      title: "Enable CloudTrail in every region",
      body: "Create an organization trail that logs API activity across all regions and all accounts. Send logs to a dedicated S3 bucket with versioning and encryption enabled. Set up alerts for high-risk events like root account usage, security group changes, and IAM policy modifications.",
    },
    {
      title: "Enable GuardDuty",
      body: "It's AWS's threat detection service. It analyzes CloudTrail logs, VPC flow logs, and DNS logs to identify malicious activity: compromised instances, unauthorized access, crypto mining, data exfiltration. It runs continuously and costs a few dollars per month for most small environments.",
    },
    {
      title: "Enable AWS Config",
      body: "It tracks configuration changes to your resources over time. Combined with Config Rules, it can automatically flag non-compliant configurations, like unencrypted storage or public security groups, and even auto-remediate them.",
    },
    {
      title: "Review IAM quarterly",
      body: "Remove unused IAM users and roles. Enforce least-privilege permissions. Rotate access keys. Use IAM Access Analyzer to identify overly permissive policies and resources shared outside your account.",
    },
    {
      title: "Use SCPs for guardrails",
      body: "If you're using AWS Organizations (and you should be), implement Service Control Policies that prevent dangerous actions at the account level: blocking public S3 access, requiring encryption, restricting which regions can be used. This prevents misconfigurations before they happen.",
    },
    {
      title: "Do a quarterly cloud security review",
      body: "30 minutes. Review Security Hub findings, check for new resources, verify encryption, review security groups, confirm logging is active. Put it on the calendar.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>"We Use AWS So We're Secure." No, You're Not.</title>

        <meta
          name="description"
          content="AWS secures the cloud. You're responsible for security in the cloud. The shared responsibility model, the misconfigurations we find over and over in AWS environments, and how to fix them."
        />

        <link
          rel="canonical"
          href="https://com-sec.io/blog/we-use-aws-so-were-secure-no-youre-not"
        />

        <meta
          property="og:title"
          content="\u201cWe Use AWS So We're Secure.\u201d No, You're Not."
        />

        <meta
          property="og:description"
          content="AWS secures the cloud. You're responsible for security in the cloud. The shared responsibility model, the misconfigurations we find over and over in AWS environments, and how to fix them."
        />

        <meta
          property="og:image"
          content="https://com-sec.io/images/blog-images/we-use-aws-so-were-secure-no-youre-not.png"
        />

        <meta
          property="og:url"
          content="https://com-sec.io/blog/we-use-aws-so-were-secure-no-youre-not"
        />

        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Com-Sec" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:author" content="Farbod Fakhrai" />
        <meta property="article:published_time" content="2026-08-17T00:00:00Z" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comsec" />

        <meta
          name="twitter:title"
          content="\u201cWe Use AWS So We're Secure.\u201d No, You're Not."
        />

        <meta
          name="twitter:description"
          content="AWS secures the cloud. You're responsible for security in the cloud. The shared responsibility model, the misconfigurations we find over and over in AWS environments, and how to fix them."
        />

        <meta
          name="twitter:image"
          content="https://com-sec.io/images/blog-images/we-use-aws-so-were-secure-no-youre-not.png"
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
              "We Use AWS So We're Secure." No, You're Not.
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sky-200">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>August 17, 2026</span>
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
                src="/images/blog-images/we-use-aws-so-were-secure-no-youre-not.png"
                alt="We Use AWS So We're Secure. No, You're Not."
                className="rounded-xl shadow-md max-w-xl w-full h-auto"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <section className="mb-10">
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    I hear this at least once a month. Sometimes from CTOs
                    who should know better. Sometimes from founders who
                    genuinely believe that choosing AWS (or Azure, or GCP)
                    means their security is handled.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    It's not. And the misunderstanding is costing companies
                    real money, real data, and real customer trust.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    AWS is secure. AWS has world-class physical security,
                    network security, encryption capabilities, and
                    availability. They invest billions of dollars annually
                    in protecting their infrastructure. Their security team
                    is larger than most companies' entire headcount.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Your configuration of AWS is a completely different
                    story.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  The shared responsibility model
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    AWS operates on what they call the "shared
                    responsibility model." It's the most important concept
                    in cloud security and the one most companies either
                    don't understand or choose to ignore.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    AWS is responsible for security "of" the cloud: the
                    physical data centers, the hypervisor, the global
                    network infrastructure, the hardware, and the
                    foundational services. They handle physical access
                    control, hardware lifecycle management, network
                    segmentation at the infrastructure layer, and the
                    availability of their regions and availability zones.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    You are responsible for security "in" the cloud:
                    everything you build on top of that infrastructure.
                    Your data, your applications, your identity and access
                    management, your network configuration, your encryption
                    choices, your operating system patches, and your
                    firewall rules.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    AWS provides the tools to do all of this securely.
                    Dozens of security services, hundreds of configuration
                    options, granular controls for every aspect of your
                    environment. But they don't configure them for you.
                    They don't turn them on by default (with a few recent
                    exceptions). They don't monitor your environment for
                    misconfigurations. They don't know whether your S3
                    bucket should be public or private, because that's a
                    business decision, not an infrastructure decision.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The shared responsibility model means AWS keeps the
                    building secure. You're responsible for locking your
                    own doors and windows. Most companies leave several
                    wide open.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  What we actually find in AWS environments
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    After assessing hundreds of AWS environments across
                    startups and mid-market companies, the same
                    misconfigurations show up over and over. They're
                    predictable, preventable, and almost always the result
                    of moving fast without someone focused on security.
                  </p>
                  <div className="space-y-4">
                    {misconfigurations.map((item, index) => (
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
                  The fix
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    You don't need to hire a dedicated cloud security team
                    to address these issues. You need to invest a few days
                    of focused effort and then maintain the discipline.
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
                  The bottom line
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    AWS gives you some of the best security infrastructure
                    on the planet. They also give you enough rope to hang
                    yourself with. The misconfiguration risk is real and
                    it's the number one source of cloud breaches. Not
                    sophisticated attacks. Not zero-days. Misconfigurations
                    that have been sitting in the environment since someone
                    spun up a resource during a late-night coding session
                    and never went back to lock it down.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Your cloud provider handles a lot. But the things they
                    leave to you are the things that get you breached. Know
                    what's your responsibility, configure it properly, and
                    check it regularly.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    "We use AWS" is a great start. It's not the finish
                    line.
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
                Not sure what's misconfigured in your AWS environment?
              </h3>
              <p className="text-sky-200 text-lg mb-6 max-w-xl mx-auto leading-relaxed">
                Com-Sec runs cloud security assessments that find the gaps
                AWS won't flag for you, before they turn into an incident
                or an audit finding.
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
