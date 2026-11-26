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

export default function ThirdPartyScriptHack() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "The Code You Didn't Write: How a Third-Party Script Hack Hit 178 Companies",
      text: "A flaw at a single script provider let attackers skim card details from at least 178 organizations. Here's how to find and lock down the third-party code on your own website.",
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
        <title>The Code You Didn't Write: How a Third-Party Script Hack Hit 178 Companies</title>

        <meta
          name="description"
          content="Attackers hit 178 organizations through a third-party script flaw in Optimizely. Here's how to inventory, lock down, and monitor the scripts on your website."
        />

        <link
          rel="canonical"
          href="https://com-sec.io/blog/the-code-you-didnt-write-how-a-third-party-script-hack-hit-178-companies"
        />

        <meta
          property="og:title"
          content="The Code You Didn't Write: How a Third-Party Script Hack Hit 178 Companies"
        />

        <meta
          property="og:description"
          content="A flaw at a single script provider let attackers skim card details from at least 178 organizations. Here's how to find and lock down the third-party code on your own website."
        />

        <meta
          property="og:image"
          content="https://com-sec.io/images/blog-images/the-code-you-didnt-write-how-a-third-party-script-hack-hit-178-companies.png"
        />

        <meta
          property="og:url"
          content="https://com-sec.io/blog/the-code-you-didnt-write-how-a-third-party-script-hack-hit-178-companies"
        />

        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Com-Sec" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:author" content="Farbod Fakhrai" />
        <meta property="article:published_time" content="2026-11-25T00:00:00Z" />

        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="The Code You Didn't Write: How a Third-Party Script Hack Hit 178 Companies"
        />

        <meta
          name="twitter:description"
          content="A flaw at a single script provider let attackers skim card details from at least 178 organizations. Here's how to find and lock down the third-party code on your own website."
        />

        <meta
          name="twitter:image"
          content="https://com-sec.io/images/blog-images/the-code-you-didnt-write-how-a-third-party-script-hack-hit-178-companies.png"
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
              The Code You Didn't Write: How a Third-Party Script Hack Hit 178 Companies
            </h1>

            <p className="text-xl text-sky-100 mb-8 leading-relaxed">
              A flaw at a single script provider let attackers skim card details from at least 178 organizations. Here's how to find and lock down the third-party code on your own website.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sky-200">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>November 25, 2026</span>
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
                src="/images/blog-images/the-code-you-didnt-write-how-a-third-party-script-hack-hit-178-companies.png"
                alt="The Code You Didn't Write: How a Third-Party Script Hack Hit 178 Companies"
                className="rounded-xl shadow-md max-w-xl w-full h-auto"
              />
            </div>

            <div className="prose prose-lg max-w-none">

              {/* INTRO */}
              <section className="mb-10">
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    On November 17, 2026, security researchers disclosed that attackers had exploited a flaw in Optimizely Web Experimentation to inject malicious code into scripts loaded by at least 178 organizations. The list of affected companies included CNN, the BBC, and Zoom.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    The injected code swapped cryptocurrency wallet addresses and captured credit card details from site visitors. Not from Optimizely's servers. From the websites that loaded Optimizely's script.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    If your startup has a website, and it does, you almost certainly have third-party scripts running on it that you've never audited.
                  </p>
                </div>
              </section>

              {/* HOW SCRIPTS WORK */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  HOW THIRD-PARTY SCRIPTS WORK
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    When you add an analytics tool, a chat widget, an A/B testing platform, or a payment form to your website, you're loading JavaScript from someone else's servers. That script runs in your visitors' browsers with the same permissions as your own code.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    It can read form inputs. It can see what your users type. It can modify the page. It can send data to any server it wants.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    This is by design. It's how these tools work. The problem is that if the company hosting that script gets compromised, the attacker's code runs on your site with those same permissions.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Your visitors don't know the difference. They see your domain in the address bar. They trust your site. And the malicious code runs silently behind your brand.
                  </p>
                </div>
              </section>

              {/* WHAT HAPPENED */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  WHAT HAPPENED WITH OPTIMIZELY
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Attackers found a vulnerability in Optimizely's Web Experimentation product that allowed them to modify the JavaScript files served to Optimizely's customers' websites. The injected code did two things: it swapped crypto wallet addresses on pages where users were making crypto transactions, and it captured credit card details entered into forms.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Optimizely says it fixed the flaw and removed the malicious code, but the number of exposed card numbers is still unknown.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    178 organizations were confirmed affected. The real number could be higher.
                  </p>
                </div>
              </section>

              {/* NOT NEW */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  THIS ISN'T NEW. IT'S JUST GETTING WORSE.
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Third-party script attacks have been happening for years. The Magecart attacks that hit British Airways, Ticketmaster, and thousands of e-commerce sites in 2018 and 2019 used the same technique. Attackers compromise one script provider, and every website loading that script becomes a target.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    What's changed is scale. Modern websites load scripts from a dozen or more third-party providers. Analytics, marketing, personalization, support, payments, advertising. Each one is a potential entry point.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    A typical startup website might load scripts from Google Analytics, Hotjar or FullStory, Intercom or Drift, Stripe, a tag manager, an A/B testing tool, and several marketing pixels. That's seven or more external JavaScript sources running on every page load, each with full access to the DOM.
                  </p>
                </div>
              </section>

              {/* WHAT YOU CAN DO */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  WHAT YOU CAN DO ABOUT IT
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    <strong>Run an inventory.</strong> Open your website in Chrome, press F12, go to the Network tab, and filter by JS. Count how many different domains are loading scripts. If you don't recognize one, find out what it is. If it's not needed, remove it.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <strong>Implement Subresource Integrity (SRI).</strong> SRI is an HTML attribute that tells the browser to check a script's content against a known hash before executing it. If the content has changed, meaning someone modified it, the browser blocks it. It's one line of HTML per script.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Here's what it looks like:
                  </p>

                  <pre className="bg-slate-900 text-slate-100 rounded-lg p-5 overflow-x-auto text-sm leading-relaxed">
                    <code>{`<script src="https://example.com/script.js"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
  crossorigin="anonymous"></script>`}</code>
                  </pre>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <strong>Set up a Content Security Policy (CSP).</strong> A CSP is an HTTP header that tells the browser which domains are allowed to load scripts on your page. If an attacker injects a script from an unauthorized domain, the browser blocks it.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Start with a report-only policy so you can see what would be blocked without breaking anything. Then tighten it once you know your legitimate sources.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <strong>Use a tag manager with approval workflows.</strong> If your marketing team adds scripts through a tag manager, make sure there's an approval step before new scripts go live. The tag manager itself should be locked down with strong authentication.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <strong>Monitor for changes.</strong> Services like Report URI can collect CSP violation reports, showing you when something tries to load from an unauthorized source. Some security tools also monitor your site's script inventory and alert you to changes.
                  </p>
                </div>
              </section>

              {/* SOC 2 CONNECTION */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  THE SOC 2 CONNECTION
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    If your company is pursuing{" "}
                    <Link
                      to="/soc2"
                      className="text-sky-700 font-semibold hover:underline"
                    >
                      SOC 2
                    </Link>
                    , your auditor will look at change management and third-party risk. Third-party scripts are both.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Every script on your website is a dependency you've accepted. Your SOC 2 control environment should include an inventory of those scripts, a process for approving new ones, and monitoring for unauthorized changes.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Most companies we work with discover scripts during their{" "}
                    <Link
                      to="/soc2"
                      className="text-sky-700 font-semibold hover:underline"
                    >
                      SOC 2 readiness
                    </Link>{" "}
                    assessment that nobody on the current team remembers adding. That's the gap attackers exploit.
                  </p>
                </div>
              </section>

              {/* DON'T WAIT */}
              <section className="mb-10">
                <div className="bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200 rounded-xl p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    DON'T WAIT FOR THE BREACH DISCLOSURE
                  </h2>

                  <div className="space-y-4">
                    <p className="text-gray-800 leading-relaxed text-lg">
                      The Optimizely attack was discovered and disclosed. Many similar attacks aren't. Magecart-style skimmers have been found running on websites for months before detection.
                    </p>

                    <p className="text-gray-800 leading-relaxed text-lg">
                      The fix isn't complicated. Inventory your scripts, implement SRI and CSP, and treat every third-party script as a trust decision, not a marketing decision.
                    </p>

                    <p className="text-gray-800 leading-relaxed text-lg">
                      <strong>Your website is your front door. Know what code is running on it.</strong>
                    </p>
                  </div>
                </div>
              </section>

              {/* AUTHOR BIO */}
              <section className="mb-4 border-t border-gray-200 pt-6">
                <p className="text-gray-600 leading-relaxed">
                  Farbod Fakhrai is the founder of <strong>Com-Sec</strong>, a cybersecurity and{" "}
                  <a
                    href="https://com-sec.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-700 font-semibold hover:underline"
                  >
                    compliance consulting firm
                  </a>{" "}
                  for startups and growth-stage companies.{" "}
                  <a
                    href="https://com-sec.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-700 hover:underline"
                  >
                    com-sec.io
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
                Do you know what code is running on your website?
              </h3>

              <p className="text-sky-200 text-lg mb-6 max-w-xl mx-auto leading-relaxed">
                Com-Sec helps startups inventory third-party risk, build audit-ready controls, and get through SOC 2.
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
