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

export default function OpenSourceDependenciesSupplyChainRisk() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title:
        "Your Open-Source Dependencies Are Someone Else's Weekend Project. Act Accordingly.",
      text: "Every modern software company runs on open source. The risk profile has changed significantly, and most companies haven't adjusted.",
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
      title: "Your AI Agents Are a Security Blind Spot. Here's Why That Matters.",
      excerpt:
        "88% of organizations that have deployed AI agents have experienced agent-related security incidents. Here's what breaks when agents go wrong, and what to do about it.",
      link: "/blog/your-ai-agents-are-a-security-blind-spot-heres-why-that-matters",
      category: "AI Governance",
      emoji: "🤖",
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
      title: "10 Steps to Building an Effective Security Program",
      excerpt:
        "Building a security program is a sequence of practical steps that build on each other. Here's the order we use with every client.",
      link: "/blog/10-steps-to-building-an-effective-security-program",
      category: "Security Program",
      emoji: "🧩",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Your Open-Source Dependencies Are Someone Else's Weekend Project. Act Accordingly.
        </title>

        <meta
          name="description"
          content="Every modern software company runs on open source. Recent supply chain attacks show the risk profile has changed significantly, and most startups haven't adjusted. Here's what to do about it."
        />

        <link
          rel="canonical"
          href="https://com-sec.io/blog/your-open-source-dependencies-are-someone-elses-weekend-project"
        />

        <meta
          property="og:title"
          content="Your Open-Source Dependencies Are Someone Else's Weekend Project. Act Accordingly."
        />

        <meta
          property="og:description"
          content="Every modern software company runs on open source. The risk profile has changed significantly, and most companies haven't adjusted."
        />

        <meta
          property="og:image"
          content="https://com-sec.io/images/blog-images/your-open-source-dependencies-are-someone-elses-weekend-project.png"
        />

        <meta
          property="og:url"
          content="https://com-sec.io/blog/your-open-source-dependencies-are-someone-elses-weekend-project"
        />

        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Com-Sec" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:author" content="Farbod Fakhrai" />
        <meta property="article:published_time" content="2026-10-09T00:00:00Z" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comsec" />

        <meta
          name="twitter:title"
          content="Your Open-Source Dependencies Are Someone Else's Weekend Project. Act Accordingly."
        />

        <meta
          name="twitter:description"
          content="Every modern software company runs on open source. The risk profile has changed significantly, and most companies haven't adjusted."
        />

        <meta
          name="twitter:image"
          content="https://com-sec.io/images/blog-images/your-open-source-dependencies-are-someone-elses-weekend-project.png"
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
                Application Security
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-balance">
              Your Open-Source Dependencies Are Someone Else's Weekend Project. Act Accordingly.
            </h1>

            <p className="text-xl text-sky-100 mb-8 leading-relaxed">
              Somewhere in your dependency tree, there's a package maintained by one person in their spare time. The risk profile has changed, and most companies haven't adjusted.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sky-200">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>October 9, 2026</span>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>4 min read</span>
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
                src="/images/blog-images/your-open-source-dependencies-are-someone-elses-weekend-project.png"
                alt="Your Open-Source Dependencies Are Someone Else's Weekend Project. Act Accordingly."
                className="rounded-xl shadow-md max-w-xl w-full h-auto"
              />
            </div>

            <div className="prose prose-lg max-w-none">

              {/* INTRO */}
              <section className="mb-10">
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Every modern software company runs on open source. Your application framework, your database driver, your authentication library, your logging tool, your CI/CD pipeline — somewhere in your dependency tree, there's a package maintained by one person in their spare time.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    This isn't news. But the risk profile has changed significantly, and most companies haven't adjusted.
                  </p>
                </div>
              </section>

              {/* SUPPLY CHAIN REALITY */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  The supply chain reality
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Recent reports show a sharp increase in supply chain attacks targeting open-source projects. Google's security team has warned explicitly about the rise of attacks on open-source package repositories. Red Hat issued an advisory this year covering multiple supply chain compromises of open-source projects in a single incident.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    The pattern is consistent: attackers target widely-used open-source packages — either by compromising maintainer accounts, submitting malicious pull requests, or creating typosquatted packages with similar names. Because these packages are pulled automatically by build systems and dependency managers, a single compromised package can propagate across thousands of organizations within hours.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    The Trivy and Axios incidents earlier this year demonstrated exactly how quickly this can escalate. A compromised package gets pulled into your CI/CD pipeline, and suddenly you're running attacker-controlled code in your build environment.
                  </p>
                </div>
              </section>

              {/* WHY STARTUPS ARE EXPOSED */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Why startups are especially exposed
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Large companies have dedicated security teams that review dependencies, monitor for compromises, and maintain internal mirrors of critical packages. Startups don't.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Here's what I typically see:
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>No software bill of materials.</b> Most startups can't produce a complete list of their dependencies, let alone their transitive dependencies (the dependencies of their dependencies). When a vulnerability is disclosed in a widely-used package, they don't know whether they're affected without manually checking.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Automatic updates without review.</b> Dependabot and Renovate are great tools for keeping dependencies current. But if you're automatically merging dependency updates without reviewing what changed, you're trusting the entire open-source ecosystem implicitly.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>No pinned versions.</b> Using version ranges (^1.2.3) instead of exact versions (1.2.3) means your build can pull in a new version of a dependency without any human decision. If that new version is compromised, you're compromised.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Build environments with broad access.</b> Your CI/CD pipeline probably has access to your source code, your cloud credentials, your deployment infrastructure, and your artifact registry. If a compromised dependency runs in that environment, the attacker has access to all of those things.
                  </p>
                </div>
              </section>

              {/* WHAT TO DO */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  What to do about it
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Generate and maintain an SBOM.</b> Use tools like Syft, CycloneDX, or your language ecosystem's built-in tools to generate a software bill of materials. Know what you're running. Update it regularly.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Pin your dependency versions.</b> Use exact versions in your lock files. Review dependency updates before merging them. Yes, this creates more work. It also prevents a compromised package from automatically entering your build.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Use dependency scanning.</b> Tools like Snyk, Dependabot, Grype, or Trivy can scan your dependencies for known vulnerabilities and alert you when new ones are disclosed. This should be part of your CI/CD pipeline.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Evaluate critical dependencies.</b> For the packages your application depends on most heavily, look at the project's health. How many maintainers does it have? How frequently is it updated? Does it have a security policy? Is it backed by a company or foundation, or is it a single maintainer's side project?
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Isolate your build environment.</b> Your CI/CD pipeline should have the minimum permissions needed to build and deploy your application. Don't give it admin access to your cloud environment. Use separate credentials for build, deploy, and production. Segment your pipeline so a compromise in one stage doesn't automatically propagate to the next.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Consider contributing.</b> If your business depends on an open-source project maintained by one or two people, consider contributing to it. Financial sponsorship, code contributions, security reviews — all of these make the project more resilient and reduce your risk.
                  </p>
                </div>
              </section>

              {/* THE UNCOMFORTABLE DEPENDENCY */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  The uncomfortable dependency
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Open source is a supply chain, and like any supply chain, it has risks that need to be managed. The difference is that most companies manage their vendor supply chain actively — they do vendor assessments, negotiate SLAs, review SOC 2 reports — but treat their open-source supply chain as a free resource with no risk.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    That assumption was always wrong. It's becoming dangerous.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    The companies that take open-source supply chain security seriously now — maintaining SBOMs, scanning dependencies, reviewing updates, isolating build environments — are building resilience against a threat that is growing quickly. The ones that don't are one compromised package away from a very bad day.
                  </p>
                </div>
              </section>

              {/* BOTTOM LINE */}
              <section className="mb-10">
                <div className="bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200 rounded-xl p-8">
                  <p className="text-gray-800 leading-relaxed text-lg">
                    If you need help assessing your software supply chain risk or building dependency management into your security program, we do this work regularly at Com-Sec.
                  </p>
                </div>
              </section>

              {/* AUTHOR */}
              <section className="mb-12 border-t border-gray-200 pt-8">
                <p className="text-gray-600 text-base italic">
                  Farbod Fakhrai is the founder of{" "}
                  <b>
                    <a
                      href="https://com-sec.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-700 font-semibold hover:underline"
                    >
                      Com-Sec
                    </a>
                  </b>
                  , a{" "}
                  <b>
                    <a
                      href="https://com-sec.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-700 font-semibold hover:underline"
                    >
                      cybersecurity and compliance
                    </a>
                  </b>{" "}
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
                One compromised package away from a bad day?
              </h3>

              <p className="text-sky-200 text-lg mb-6 max-w-xl mx-auto leading-relaxed">
                Com-Sec helps startups build dependency management and software supply chain risk into their security program.
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
