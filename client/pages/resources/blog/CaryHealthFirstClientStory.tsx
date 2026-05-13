import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  ArrowRight,
} from "lucide-react";

export default function CaryHealthFirstClientStory() {
  const relatedArticles = [
    {
      title: "What Is a vCISO? Understanding the Role and Benefits",
      excerpt:
        "Learn how virtual CISOs help startups and healthcare organizations strengthen cybersecurity leadership.",
      link: "/blog/what-is-vciso-role-cybersecurity",
      category: "Cybersecurity Leadership",
      emoji: "🛡️",
    },
    {
      title: "Security & Compliance Challenges for Healthcare Companies",
      excerpt:
        "Explore the biggest compliance and cybersecurity challenges healthcare organizations face today.",
      link: "/blog/security-compliance-health-companies",
      category: "Healthcare Security",
      emoji: "🏥",
    },
    {
      title: "How to Prepare for a Compliance Audit",
      excerpt:
        "Best practices and strategies to prepare your organization for compliance audits successfully.",
      link: "/blog/how-to-prepare-for-a-compliance-audit-best-practices-and-strategies",
      category: "Compliance",
      emoji: "📋",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          CaryHealth Was Our First Client: A Milestone for Com-Sec's Healthcare
          Security Journey
        </title>
        <meta
          name="description"
          content="CaryHealth was Com-Sec's first client long before the company officially existed. This story reflects how both teams grew together through healthcare compliance, security challenges, and years of building in a difficult industry."
        />
        <link
          rel="canonical"
          href="https://com-sec.io/blog/caryhealth-first-client-story"
        />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navigation />

        {/* HERO */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-emerald-900 via-teal-800 to-slate-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to="/blogs"
              className="inline-flex items-center text-emerald-200 hover:text-white transition-colors mb-8 group"
            >
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>

            <div className="flex items-center gap-4 mb-6 flex-wrap">
              <span className="bg-emerald-500/20 text-emerald-100 px-4 py-2 rounded-full text-sm font-medium">
                Healthcare Security
              </span>
              <span className="bg-white/15 text-white px-4 py-2 rounded-full text-sm font-bold border border-white/25">
                🎉 Founder Story
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-balance">
              CaryHealth was client #1. Their exit means everything to us.
            </h1>

            <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
              A story about building two companies at once and what it means
              when the one that gave you your start reaches the finish line.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-emerald-100">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>May 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>5 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Com-Sec Team</span>
              </div>
              <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors">
                <Share2 className="h-4 w-4" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </section>

        {/* ARTICLE */}
        <article className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Cover image */}
            <div className="mb-12 flex justify-center">
              <img
                src="/images/blog-images/Cary-Health-First-Client-Cover.jpeg"
                alt="CaryHealth — Com-Sec's first client"
                className="rounded-xl shadow-md max-w-2xl w-full h-auto"
              />
            </div>

            <div className="prose prose-lg max-w-none">

              <section className="mb-10">
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  Last week, CareTria announced its acquisition of CaryHealth,
                  bringing together two companies to build one of the leading
                  direct to patient pharmacy platforms in the country. For Areo
                  Nazari and the entire CaryHealth team, it's the culmination of
                  years of hard work in one of the toughest verticals to build
                  in: healthcare.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg font-semibold">
                  For Com-Sec, it's personal.
                </p>
              </section>

              <section className="mb-10">
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  CaryHealth was our first client. Before Com-Sec was a real
                  company, before we had full time employees, before we had an
                  office, there was CaryHealth. It started the way it does with
                  most startups: a business need for SOC 2, a growing pile of
                  security questionnaires and SIGs from customers and partners,
                  and no one in-house to own it.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  I came on to advise Areo on a fractional basis, helping them
                  work through the compliance demands that come with selling into
                  pharma and health systems. Back then it was just me, doing
                  vCISO work on the side, figuring things out alongside a team
                  that was figuring things out too.
                </p>
              </section>

              <section className="mb-10">
                <p className="text-gray-700 leading-relaxed text-lg">
                  As CaryHealth grew, so did we. What started as fractional
                  advisory turned into deeper involvement. More systems to
                  secure. More compliance requirements to meet. More customers
                  asking harder questions about how their data was being
                  protected. Healthcare does that to you. The regulatory bar is
                  high, the stakes are real, and there's no room to fake it.
                </p>
              </section>

              {/* Mid-article image */}
              <div className="my-12 flex flex-col items-center">
                <img
                  src="/images/blog-images/Cary-Health-First-Client-Content.jpg"
                  alt="Com-Sec team working alongside CaryHealth in their early days"
                  className="rounded-xl shadow-md max-w-lg w-full h-auto"
                />
                <p className="text-sm text-gray-500 italic mt-3 text-center">
                  The early days — building Com-Sec alongside CaryHealth's team.
                </p>
              </div>

              <section className="mb-10">
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  Areo and the CaryHealth team gave us something you can't buy:
                  a chance to grow alongside them. They let us use their office
                  as a workspace. One summer, we had our entire team, interns
                  included, packed into their conference room.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  It was crowded and it was exactly what we needed. We were
                  building Com-Sec in real time, inside a company that was
                  building something meaningful in healthcare.
                </p>
              </section>

              <section className="mb-10">
                <div className="bg-emerald-50 border-l-4 border-emerald-500 p-8 rounded-r-lg">
                  <p className="text-emerald-900 text-lg leading-relaxed">
                    When I look at where Com-Sec is today compared to where we
                    were when CaryHealth brought us on, the difference is stark.
                    We went from a handful of 1099 contractors and a side project
                    to a team of 10 full time employees, a growing roster of
                    project based contractors, and a company with real structure,
                    real clients, and real delivery capability. CaryHealth didn't
                    cause all of that, but they were the starting point. A lot of
                    the discipline, the processes, and the standards we operate
                    by today were shaped by what we learned working with their
                    team.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Building in healthcare is hard. Scaling in healthcare is
                  harder. Doing it while meeting the security and compliance
                  demands of pharma manufacturers, health systems, and enterprise
                  buyers is a challenge that most companies underestimate.
                  CaryHealth did it right. They invested in security early, they
                  treated compliance as a business enabler, and they built a
                  platform that could withstand serious diligence. That matters
                  when you're heading toward an exit.
                </p>
              </section>

              <section className="mb-10">
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-8">
                  <p className="text-gray-800 leading-relaxed text-lg mb-4">
                    Congratulations to Areo, to the CaryHealth team, and to
                    everyone who contributed to getting here. This is well
                    deserved. 🎊
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    And to anyone building a health tech company wondering whether
                    investing in security and compliance early actually pays off:
                    it does. We watched it happen.
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
                    className="text-emerald-700 font-semibold hover:underline"
                  >
                    Com-Sec
                  </a>
                  , a cybersecurity and compliance consulting firm supporting
                  startups and growth stage companies.
                </p>
              </section>

            </div>
          </div>
        </article>

        {/* CTA */}
        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-emerald-900 via-teal-800 to-slate-900 rounded-xl px-8 py-10 text-white text-center shadow-lg">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Build Security &amp; Compliance Early
              </h3>
              <p className="text-emerald-100 text-lg mb-6 max-w-xl mx-auto leading-relaxed">
                Com-Sec helps startups and healthcare companies strengthen
                cybersecurity, compliance readiness, and customer trust from
                the beginning.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/contact"
                  className="bg-white text-emerald-900 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
                >
                  Schedule a Consultation →
                </Link>
                <Link
                  to="/services"
                  className="border border-white/40 text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-emerald-900 transition"
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
                    <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-1 rounded-full w-fit">
                      {article.category}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2 group-hover:text-emerald-700 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm flex-grow">
                      {article.excerpt}
                    </p>
                    <div className="mt-4 flex items-center text-emerald-700 text-sm font-medium">
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
