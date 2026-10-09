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

export default function ChangeHealthcareBreachLessons() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "What the Change Healthcare Breach Should Have Taught Every Health Tech Company",
      text: "The largest healthcare data breach in U.S. history was caused by a missing MFA control on a remote access portal. Here are the five lessons every health tech company should take from it.",
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
      title: "The HIPAA Security Rule Is Getting Its Biggest Overhaul in 20 Years. Here's What's Actually Changing.",
      excerpt:
        "The proposed HIPAA Security Rule overhaul is the most significant revision since the rule was written. Here's what's in it and what to do now.",
      link: "/blog/the-hipaa-security-rule-is-getting-its-biggest-overhaul-in-20-years",
      category: "Compliance",
      emoji: "📋",
    },
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
  ];

  return (
    <>
      <Helmet>
        <title>
          What the Change Healthcare Breach Should Have Taught Every Health Tech Company
        </title>

        <meta
          name="description"
          content="The Change Healthcare ransomware attack compromised 190 million patient records and became the largest healthcare data breach in U.S. history. Here are the five lessons every health tech company should take from it."
        />

        <link
          rel="canonical"
          href="https://com-sec.io/blog/what-the-change-healthcare-breach-should-have-taught-every-health-tech-company"
        />

        <meta
          property="og:title"
          content="What the Change Healthcare Breach Should Have Taught Every Health Tech Company"
        />

        <meta
          property="og:description"
          content="The largest healthcare data breach in U.S. history was caused by a missing MFA control. Here are the five lessons every health tech company should take from it."
        />

        <meta
          property="og:image"
          content="https://com-sec.io/images/blog-images/what-the-change-healthcare-breach-should-have-taught-every-health-tech-company.png"
        />

        <meta
          property="og:url"
          content="https://com-sec.io/blog/what-the-change-healthcare-breach-should-have-taught-every-health-tech-company"
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
          content="What the Change Healthcare Breach Should Have Taught Every Health Tech Company"
        />

        <meta
          name="twitter:description"
          content="The largest healthcare data breach in U.S. history was caused by a missing MFA control. Here are the five lessons every health tech company should take from it."
        />

        <meta
          name="twitter:image"
          content="https://com-sec.io/images/blog-images/what-the-change-healthcare-breach-should-have-taught-every-health-tech-company.png"
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
                Healthcare
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-balance">
              What the Change Healthcare Breach Should Have Taught Every Health Tech Company
            </h1>

            <p className="text-xl text-sky-100 mb-8 leading-relaxed">
              The root cause was almost embarrassingly simple: a Citrix remote access portal without multi-factor authentication.
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
                src="/images/blog-images/what-the-change-healthcare-breach-should-have-taught-every-health-tech-company.png"
                alt="What the Change Healthcare Breach Should Have Taught Every Health Tech Company"
                className="rounded-xl shadow-md max-w-xl w-full h-auto"
              />
            </div>

            <div className="prose prose-lg max-w-none">

              {/* INTRO */}
              <section className="mb-10">
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    In February 2024, Change Healthcare — one of the largest healthcare technology companies in the United States — was hit by a ransomware attack that compromised 190 million patient records. It disrupted claims processing for months, cost UnitedHealth Group over $3 billion, and became the largest healthcare data breach in U.S. history.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    The root cause was almost embarrassingly simple: a Citrix remote access portal without multi-factor authentication.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    If you're building or running a health tech company, this breach isn't just a news story. It's a case study in what happens when basic security controls are missing at scale.
                  </p>
                </div>
              </section>

              {/* WHAT HAPPENED */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  What happened
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The attackers, a ransomware group called ALPHV (also known as BlackCat), gained access to Change Healthcare's environment through a Citrix remote access account that wasn't protected by MFA. Once inside, they moved laterally through the network for nine days before deploying ransomware.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Nine days. Inside one of the most critical pieces of healthcare infrastructure in the country. Undetected.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    During those nine days, the attackers exfiltrated data on approximately 190 million individuals, including names, addresses, Social Security numbers, medical records, insurance information, and billing data. Then they encrypted systems and demanded a ransom.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    UnitedHealth Group, Change Healthcare's parent company, paid $22 million to the attackers. The disruption to healthcare claims processing affected providers, pharmacies, and patients across the country for months.
                  </p>
                </div>
              </section>

              {/* FIVE LESSONS */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  The five lessons
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>1. MFA is not optional. Anywhere.</b>
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    The single control that would have prevented this breach is one that every security framework requires and every security professional recommends: multi-factor authentication.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Change Healthcare had MFA on some systems but not all of them. The Citrix portal that was compromised was an exception. In security, exceptions are where breaches happen.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    If you have any system, anywhere in your environment, that can be accessed remotely without MFA, fix it today. Not next sprint. Today. This includes VPNs, cloud consoles, admin panels, CI/CD pipelines, and any service that has a login page.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>2. Network segmentation limits blast radius.</b>
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Once the attackers got through the Citrix portal, they were able to move laterally across Change Healthcare's network for over a week. That's a segmentation failure.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    In a properly segmented environment, compromising one system doesn't give you access to everything. Critical systems — especially those containing patient data — should be isolated from general corporate infrastructure. Lateral movement should be difficult, detectable, and contained.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    For startups, this often means rethinking your cloud architecture. Are your production databases accessible from your corporate network? Can someone with access to your internal tools reach your customer data stores? If the answer is yes, you have a segmentation problem.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>3. Detection speed matters more than prevention perfection.</b>
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Nine days of undetected lateral movement. That's the number that should keep{" "}
                    <b>health tech CISOs</b> up at night.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    You will never prevent every intrusion. But you should be able to detect an attacker moving through your network within hours, not days. That requires centralized logging, monitoring, and alerting on suspicious activity.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    At minimum, you should have alerts on: unusual login patterns, privilege escalation, large data transfers, new service accounts being created, and access to sensitive data stores from unexpected sources.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>4. Third-party risk is your risk.</b>
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Thousands of healthcare providers relied on Change Healthcare for claims processing. When Change went down, they went down too. Many couldn't process claims for weeks. Some couldn't verify insurance coverage. The downstream impact was massive.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    If your company depends on third-party services, their security posture is part of your risk profile. Ask your critical vendors about their security controls. Review their{" "}
                    <b>
                      <Link to="/soc2" className="text-sky-700 font-semibold hover:underline">
                        SOC 2 reports
                      </Link>
                    </b>
                    . Understand their incident response capabilities. And have a contingency plan for when a critical vendor goes offline.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    <b>5. Incident response plans need to be tested, not just written.</b>
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Having an incident response plan is a compliance requirement for{" "}
                    <b>
                      <Link to="/hipaa" className="text-sky-700 font-semibold hover:underline">
                        HIPAA
                      </Link>
                    </b>
                    -covered entities. Change Healthcare had one. The question is whether it was tested and exercised regularly, because the response to this breach was messy, slow, and poorly communicated.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Run tabletop exercises at least annually. Simulate scenarios that involve your most critical systems going offline. Test your communication plan. Make sure your team knows who to call, what to do, and how to make decisions under pressure.
                  </p>
                </div>
              </section>

              {/* BIGGER PICTURE */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  The bigger picture
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The Change Healthcare breach wasn't caused by a sophisticated zero-day exploit or a nation-state attacker using novel techniques. It was caused by a missing MFA control on a remote access portal.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    That's the uncomfortable reality of most breaches. They don't happen because attackers are brilliant. They happen because defenders left a door open.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    For health tech companies, the lesson is clear: get the basics right. MFA everywhere. Network segmentation. Monitoring and detection. Vendor risk management. Tested incident response. These aren't innovative security strategies. They're table stakes.
                  </p>
                </div>
              </section>

              {/* BOTTOM LINE */}
              <section className="mb-10">
                <div className="bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200 rounded-xl p-8">
                  <p className="text-gray-800 leading-relaxed text-lg">
                    If you're a health tech founder wondering whether your security program would survive this kind of scrutiny, we can help you find out before an attacker does.
                  </p>
                </div>
              </section>

              {/* AUTHOR */}
              <section className="mb-12 border-t border-gray-200 pt-8">
                <p className="text-gray-600 text-base italic">
                  Farbod Fakhrai is the founder of Com-Sec, a{" "}
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
                  consulting firm for startups and growth-stage companies.{" "}
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
                Would your security program survive this kind of scrutiny?
              </h3>

              <p className="text-sky-200 text-lg mb-6 max-w-xl mx-auto leading-relaxed">
                Com-Sec helps health tech companies find the gaps before an attacker does.
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
