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

export default function HowToBuildAComplianceRoadmap() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "How to Build a Compliance Roadmap for Your Business",
      text: "A compliance roadmap turns an overwhelming list of requirements into a sequenced plan your team can actually execute. Here's how to build one.",
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
      title: "10 Steps to Building an Effective Security Program",
      excerpt:
        "Building a security program is a sequence of practical steps that build on each other. Here's the order we use with every client.",
      link: "/blog/10-steps-to-building-an-effective-security-program",
      category: "Security Program",
      emoji: "🧩",
    },
    {
      title: "Cybersecurity Strategy vs. Cybersecurity Roadmap: What's the Difference?",
      excerpt:
        "These two terms get used interchangeably. They're not the same thing — and understanding the difference matters.",
      link: "/blog/cybersecurity-strategy-vs-cybersecurity-roadmap-whats-the-difference",
      category: "Security Leadership",
      emoji: "🧭",
    },
    {
      title: "How a Fractional CISO Builds a Strong Cybersecurity Strategy",
      excerpt:
        "What building a cybersecurity strategy actually looks like in practice — from the first two weeks through ongoing execution.",
      link: "/blog/how-a-fractional-ciso-builds-a-strong-cybersecurity-strategy",
      category: "Security Leadership",
      emoji: "🛡️",
    },
  ];

  return (
    <>
      <Helmet>
        <title>How to Build a Compliance Roadmap for Your Business</title>

        <meta
          name="description"
          content="A compliance roadmap turns an overwhelming list of requirements into a sequenced plan your team can actually execute. Here's how to build one, step by step."
        />

        <link
          rel="canonical"
          href="https://com-sec.io/blog/how-to-build-a-compliance-roadmap-for-your-business"
        />

        <meta
          property="og:title"
          content="How to Build a Compliance Roadmap for Your Business"
        />

        <meta
          property="og:description"
          content="A compliance roadmap turns an overwhelming list of requirements into a sequenced plan your team can actually execute. Here's how to build one."
        />

        <meta
          property="og:image"
          content="https://com-sec.io/images/blog-images/how-to-build-a-compliance-roadmap-for-your-business.png"
        />

        <meta
          property="og:url"
          content="https://com-sec.io/blog/how-to-build-a-compliance-roadmap-for-your-business"
        />

        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Com-Sec" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:author" content="Farbod Fakhrai" />
        <meta property="article:published_time" content="2026-09-25T00:00:00Z" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comsec" />

        <meta
          name="twitter:title"
          content="How to Build a Compliance Roadmap for Your Business"
        />

        <meta
          name="twitter:description"
          content="A compliance roadmap turns an overwhelming list of requirements into a sequenced plan your team can actually execute. Here's how to build one."
        />

        <meta
          name="twitter:image"
          content="https://com-sec.io/images/blog-images/how-to-build-a-compliance-roadmap-for-your-business.png"
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
                Compliance
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-balance">
              How to Build a Compliance Roadmap for Your Business
            </h1>

            <p className="text-xl text-sky-100 mb-8 leading-relaxed">
              A compliance roadmap turns the overwhelming list of requirements into a sequenced plan your team can actually execute. Here's how to build one.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sky-200">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>September 25, 2026</span>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>7 min read</span>
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
                src="/images/blog-images/how-to-build-a-compliance-roadmap-for-your-business.png"
                alt="How to Build a Compliance Roadmap for Your Business"
                className="rounded-xl shadow-md max-w-xl w-full h-auto"
              />
            </div>

            <div className="prose prose-lg max-w-none">

              {/* INTRO */}
              <section className="mb-10">
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Somebody just told you the company needs SOC 2. Or HIPAA. Or ISO 27001. Or all three. And now you're staring at a framework with hundreds of controls wondering where to start.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    This is the moment where most companies either freeze or make expensive mistakes. They try to do everything at once, overspend on tools they don't need yet, or hire a consultant who produces a 100-page readiness assessment that nobody acts on.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    A compliance roadmap fixes this. It takes the overwhelming list of requirements and turns it into a sequenced plan your team can actually execute. Here's how to build one.
                  </p>
                </div>
              </section>

              {/* STEP 1 */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Step 1: Start with why
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Before you pick a framework, answer the question that should drive every compliance decision: why does this matter to the business?
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    The answer is almost always one of these: a customer requires it to close a deal, a prospect asked about it during sales, an investor or board member is asking about security posture, a regulation requires it for your industry, or leadership recognizes the risk and wants to get ahead of it.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    The "why" determines everything else. If a specific customer requires SOC 2 by Q4, that's a deadline-driven roadmap with a hard end date. If you're building toward HITRUST because the healthcare market is your growth strategy, the timeline is more flexible and the roadmap can be phased over 12 to 18 months.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Don't pursue a framework because it sounds impressive. Pursue it because it solves a business problem.
                  </p>
                </div>
              </section>

              {/* STEP 2 */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Step 2: Pick the right framework (or frameworks)
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Your customers tell you which framework to pursue. Listen to them.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>
                      <Link to="/soc2" className="text-sky-700 font-semibold hover:underline">
                        SOC 2
                      </Link>
                    </b>{" "}
                    is the default for SaaS, AI, and technology companies selling to enterprise buyers in the US. If you're not sure what you need, start here.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>
                      <Link to="/hipaa" className="text-sky-700 font-semibold hover:underline">
                        HIPAA
                      </Link>
                    </b>{" "}
                    is required if you handle protected health information. It's not optional for healthcare. It's law.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>
                      <Link to="/hitrust" className="text-sky-700 font-semibold hover:underline">
                        HITRUST
                      </Link>
                    </b>{" "}
                    is what large health systems and payers ask for. It maps to HIPAA, SOC 2, and other frameworks. If your customers say "HITRUST," that's what you build toward. Know which tier they need: e1, i1, or r2.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>
                      <Link to="/iso27001" className="text-sky-700 font-semibold hover:underline">
                        ISO 27001
                      </Link>
                    </b>{" "}
                    is the standard in Europe and increasingly expected by global enterprise buyers. If you're selling internationally, plan for this.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>ISO 42001</b> is the AI management system standard. If you're building AI products, this is on the horizon.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    If you need multiple frameworks, don't build separate programs for each. Build one security program and map it to multiple frameworks. The overlap between SOC 2, ISO 27001, and HITRUST is 60 to 70%. One program, multiple certifications.
                  </p>
                </div>
              </section>

              {/* STEP 3 */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Step 3: Assess the gap
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    What do you have today versus what the framework requires?
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    If you're starting from zero (no policies, no formal controls, no GRC platform), the gap is the entire framework. That's fine. Most startups start here. The roadmap is about building everything.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    If you have some controls in place (MFA deployed, basic policies written, some monitoring configured), the gap is narrower. The roadmap focuses on filling the holes and formalizing what exists.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Do a gap assessment against the specific framework you're targeting. Map your current controls to the framework's requirements. Identify what's in place, what's partially in place, and what's missing entirely. This becomes your task list.
                  </p>
                </div>
              </section>

              {/* STEP 4 */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Step 4: Phase the work
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Everything can't happen at once. Sequence the work into phases based on three factors: what's required first (dependencies), what has the biggest impact (risk reduction and business enablement), and what's achievable with your current resources.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Phase 1 (Months 1-2): Foundation.</b> Set up the GRC platform. Write core policies. Deploy MFA, EDR, and MDM. Establish the access management process. Build the offboarding checklist. Start evidence collection. Get the basics locked down.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Phase 2 (Months 2-4): Program build.</b> Complete the risk assessment. Implement vendor management. Deploy security awareness training. Configure logging and monitoring. Establish change management procedures. Run access reviews. Fill the remaining control gaps identified in the assessment.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Phase 3 (Months 4-6): Audit readiness.</b> Run a pen test and remediate findings. Conduct an incident response tabletop. Complete an internal audit or readiness assessment. Review all evidence in the GRC platform. Prepare the system description. Engage the auditor.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Phase 4 (Months 6-9): Audit and certification.</b> Execute the audit. Respond to auditor requests. Address any findings. Receive the report or certification.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Phase 5 (Ongoing): Maintenance.</b> Quarterly access reviews. Annual policy reviews. Annual risk assessment. Annual pen test. Continuous evidence monitoring. Audit renewal coordination.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    These timelines assume a company with 20 to 100 employees pursuing SOC 2 Type II for the first time. Adjust based on your size, complexity, and the framework you're targeting.
                  </p>
                </div>
              </section>

              {/* STEP 5 */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Step 5: Assign owners
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Every task on the roadmap needs an owner. Not a team. A person.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    For most startups, the ownership model looks like this: the{" "}
                    <Link to="/fractional-security-leadership" className="text-sky-700 font-semibold hover:underline">
                      fractional CISO
                    </Link>{" "}
                    or security advisor owns the roadmap and drives execution. The IT lead or MSP implements technical controls. The HR lead handles training and onboarding/offboarding. Engineering handles change management and application security. The CEO or COO approves policies and makes risk acceptance decisions.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    If nobody owns a task, it doesn't get done. If everybody owns a task, nobody does. Name names.
                  </p>
                </div>
              </section>

              {/* STEP 6 */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Step 6: Set milestones and checkpoints
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Break the roadmap into monthly or bi-weekly milestones that leadership can track. "
                    <Link to="/compliance-privacy-grc" className="text-sky-700 font-semibold hover:underline">
                      GRC platform
                    </Link>{" "}
                    configured and connected by end of Month 1." "Core policies approved by end of Month 2." "Pen test completed by end of Month 4."
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Review progress against these milestones in a weekly sync. If something is falling behind, address it immediately. A roadmap that's reviewed quarterly is a roadmap that's already behind.
                  </p>
                </div>
              </section>

              {/* STEP 7 */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Step 7: Budget it
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    A compliance roadmap without a budget is a wish list. Be specific about costs.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    For a typical startup pursuing SOC 2 for the first time: GRC platform ($5,000 to $15,000 per year), fractional CISO ($3,000 to $8,000 per month), pen test ($8,000 to $15,000), auditor fees ($3,000 to $25,000 depending on scope and firm), security tools (EDR, MDM, SSO, email security: $5,000 to $15,000 per year depending on headcount), and cyber insurance ($2,000 to $5,000 per year).
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Total first-year cost for a 30-person company: roughly $60,000 to $120,000 all-in, depending on choices. Ongoing annual cost after the first year: $40,000 to $80,000.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    These numbers should be part of the roadmap conversation so leadership can plan and approve the investment with full visibility.
                  </p>
                </div>
              </section>

              {/* COMMON MISTAKES */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Common mistakes
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Trying to boil the ocean.</b> You don't need perfect security to pass an audit. You need a structured program with controls that are operating consistently. Start with what matters most and build from there.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Committing to timelines you can't meet.</b> If a deal requires SOC 2 in 3 months and you're starting from zero, be honest about what's achievable. A Type I (point-in-time) might be possible. A Type II (review period) is not. Set realistic expectations with your customer and your team.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Ignoring the maintenance.</b> The roadmap doesn't end at "get the report." The ongoing work, access reviews, policy updates, evidence monitoring, vendor reviews, is what keeps the program alive. Budget for it from day one.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>Building for the wrong framework.</b> Talk to your customers. Ask what they actually need. Don't pursue HITRUST r2 when i1 would suffice. Don't build for ISO 27001 when your customers only ask for SOC 2. Match the investment to the requirement.
                  </p>
                </div>
              </section>

              {/* BOTTOM LINE */}
              <section className="mb-10">
                <div className="bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200 rounded-xl p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    The bottom line
                  </h2>

                  <div className="space-y-4">
                    <p className="text-gray-800 leading-relaxed text-lg">
                      A{" "}
                      <Link to="/fractional-security-leadership" className="text-sky-700 font-semibold hover:underline">
                        compliance roadmap
                      </Link>{" "}
                      turns an overwhelming requirement into a manageable sequence of steps. Start with the business reason, pick the right framework, assess the gap, phase the work, assign owners, set milestones, and budget it.
                    </p>

                    <p className="text-gray-800 leading-relaxed text-lg">
                      The companies that build a roadmap and follow it get certified faster, spend less, and have programs that actually work after the audit is over.
                    </p>
                  </div>
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
                Need a compliance roadmap that actually gets executed?
              </h3>

              <p className="text-sky-200 text-lg mb-6 max-w-xl mx-auto leading-relaxed">
                Com-Sec helps startups and growth-stage companies build a compliance roadmap — and drives it week by week until you're certified.
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
