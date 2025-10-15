import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  MapPin,
  Award,
  Shield,
  Target,
  BookOpen,
  ArrowRight,
  Zap,
  Brain,
} from "lucide-react";

export default function MeetTeamRojin() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-emerald-300/10 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-ping"></div>
          <Shield className="absolute top-32 right-1/3 h-8 w-8 text-yellow-300 animate-spin" />
          <Target className="absolute bottom-32 right-20 h-6 w-6 text-orange-300 animate-bounce" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            to="/blogs"
            className="inline-flex items-center text-emerald-200 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <span className="bg-emerald-500/20 text-emerald-200 px-4 py-2 rounded-full text-sm font-medium animate-pulse">
              Team Spotlight
            </span>
            <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-bold">
              Security Expert
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Meet the Team:
                <span className="block text-emerald-200 animate-pulse">
                  Rojin Rezaei
                </span>
              </h1>
              <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
                Penetration Testing Specialist and Ethical Hacker with a passion
                for finding vulnerabilities before the bad guys do. Expert in
                advanced testing methodologies and security research.
              </p>

              <div className="flex flex-wrap items-center gap-6 text-emerald-200">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>October 18, 2022</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>4 min read</span>
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

            {/* Profile Card */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 transform hover:scale-105 transition-all duration-300">
                <div className="relative mb-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full mx-auto flex items-center justify-center text-4xl font-bold text-white shadow-2xl">
                    RR
                  </div>
                  <div className="absolute inset-0 w-32 h-32 border-4 border-white/30 rounded-full mx-auto animate-pulse"></div>
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Rojin Rezaei
                  </h3>
                  <p className="text-emerald-200 mb-4">
                    Senior Penetration Tester
                  </p>

                  <div className="flex items-center justify-center gap-2 text-emerald-200 mb-4">
                    <MapPin className="h-4 w-4" />
                    <span>Austin, TX</span>
                  </div>

                  <div className="flex justify-center gap-4">
                    <div className="bg-white/20 rounded-lg p-3 hover:bg-white/30 transition-colors">
                      <Target className="h-5 w-5 text-white" />
                    </div>
                    <div className="bg-white/20 rounded-lg p-3 hover:bg-white/30 transition-colors">
                      <Shield className="h-5 w-5 text-white" />
                    </div>
                    <div className="bg-white/20 rounded-lg p-3 hover:bg-white/30 transition-colors">
                      <Zap className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Background */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <User className="h-8 w-8 text-emerald-600 mr-3" />
                From Curiosity to Cybersecurity
              </h2>

              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-8 mb-8 border border-emerald-200">
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Rojin's journey into cybersecurity began with a simple
                  question: "How do hackers actually break into systems?" This
                  curiosity led her from studying computer engineering at UT
                  Austin to becoming one of the most skilled penetration testers
                  in the industry.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  With over 6 years of experience in offensive security, Rojin
                  has helped dozens of organizations discover and fix critical
                  vulnerabilities before malicious actors could exploit them.
                </p>
              </div>
            </section>

            {/* Specializations */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <Target className="h-8 w-8 text-red-600 mr-3" />
                Testing Specializations
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Web Application Testing",
                    description:
                      "OWASP Top 10, API security, and modern web app vulnerabilities",
                    color: "bg-red-50 border-red-200 text-red-900",
                    icon: "🌐",
                  },
                  {
                    title: "Network Penetration Testing",
                    description:
                      "Internal and external network assessments, lateral movement techniques",
                    color: "bg-blue-50 border-blue-200 text-blue-900",
                    icon: "🔗",
                  },
                  {
                    title: "Social Engineering",
                    description:
                      "Phishing campaigns, physical security assessments, and human factor testing",
                    color: "bg-purple-50 border-purple-200 text-purple-900",
                    icon: "🎭",
                  },
                  {
                    title: "Cloud Security Testing",
                    description:
                      "AWS, Azure, and GCP security assessments, container security",
                    color: "bg-cyan-50 border-cyan-200 text-cyan-900",
                    icon: "☁️",
                  },
                ].map((spec, index) => (
                  <div
                    key={index}
                    className={`rounded-lg p-6 border ${spec.color} transform hover:scale-105 transition-all duration-300`}
                  >
                    <div className="text-3xl mb-3">{spec.icon}</div>
                    <h3 className="text-xl font-semibold mb-3">{spec.title}</h3>
                    <p>{spec.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Methodology */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Brain className="h-8 w-8 text-purple-600 mr-3" />
                Testing Philosophy
              </h2>

              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 text-white mb-8">
                <blockquote className="text-xl font-medium italic mb-4">
                  "A good penetration test isn't just about finding
                  vulnerabilities—it's about understanding the real-world impact
                  and providing actionable solutions. I don't just break things;
                  I help fix them better than before."
                </blockquote>
                <cite className="text-purple-200 font-semibold">
                  — Rojin Rezaei
                </cite>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {[
                  {
                    step: "01",
                    title: "Intelligence Gathering",
                    description:
                      "Comprehensive reconnaissance and information collection",
                    color: "border-blue-500",
                  },
                  {
                    step: "02",
                    title: "Vulnerability Analysis",
                    description:
                      "Systematic identification and validation of security weaknesses",
                    color: "border-red-500",
                  },
                  {
                    step: "03",
                    title: "Exploitation & Impact",
                    description:
                      "Demonstrate real-world impact with minimal business disruption",
                    color: "border-green-500",
                  },
                ].map((step, index) => (
                  <div
                    key={index}
                    className={`border-l-4 ${step.color} pl-6 py-4`}
                  >
                    <div className="text-2xl font-bold text-gray-400 mb-2">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Achievements */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <Award className="h-8 w-8 text-yellow-600 mr-3" />
                Notable Achievements
              </h2>

              <div className="space-y-6">
                {[
                  {
                    title: "CVE Discoveries",
                    description:
                      "Discovered and responsibly disclosed 12+ CVEs in popular software",
                    icon: "🔍",
                    highlight: "CVE-2023-XXXX",
                  },
                  {
                    title: "Conference Speaker",
                    description:
                      "Regular speaker at BSides Austin and DEF CON villages",
                    icon: "🎤",
                    highlight: "DEF CON 30",
                  },
                  {
                    title: "Certification Expert",
                    description:
                      "OSCP, OSCE, GPEN, and pursuing OSEE certification",
                    icon: "📜",
                    highlight: "OSCP Since 2020",
                  },
                  {
                    title: "Research Publications",
                    description:
                      "Published research on emerging attack vectors and defense strategies",
                    icon: "📚",
                    highlight: "8+ Papers",
                  },
                ].map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-start p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="text-3xl mr-6 mt-1">{achievement.icon}</div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-700 mb-2">
                        {achievement.description}
                      </p>
                      <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                        {achievement.highlight}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Beyond Work */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <BookOpen className="h-8 w-8 text-indigo-600 mr-3" />
                Beyond Penetration Testing
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-6 border border-indigo-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      🎯 CTF Competitor
                    </h3>
                    <p className="text-gray-700">
                      Active participant in Capture The Flag competitions.
                      Member of team "CyberCats" with multiple top-10 finishes
                      in international competitions.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      🏫 Educator
                    </h3>
                    <p className="text-gray-700">
                      Teaches ethical hacking workshops at local universities
                      and runs a mentorship program for women entering
                      cybersecurity.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 border border-yellow-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      🔬 Security Researcher
                    </h3>
                    <p className="text-gray-700">
                      Conducts independent security research on IoT devices and
                      emerging technologies. Recently published findings on 5G
                      security implications.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg p-6 border border-pink-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      🌮 Austin Local
                    </h3>
                    <p className="text-gray-700">
                      When not breaking into systems, you can find Rojin
                      exploring Austin's food truck scene or rock climbing at
                      local gyms.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Work With Rojin */}
            <section className="mb-12">
              <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Work with Rojin</h3>
                <p className="text-emerald-100 text-lg mb-6">
                  Need a comprehensive penetration test or security assessment?
                  Rojin brings technical expertise and clear communication to
                  every engagement.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    className="bg-white text-emerald-600 hover:bg-gray-100"
                  >
                    <Link to="/contact">
                      Request Penetration Test
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    asChild
                    className="border-white text-white bg-transparent hover:bg-white hover:text-emerald-600"
                  >
                    <Link to="/penetration-testing">
                      Learn About Our Testing
                    </Link>
                  </Button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Related Articles
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Meet the Team: Jayush Chawla",
                excerpt: "Learn about our Senior Cybersecurity Consultant",
                link: "/blog/meet-team-jayush-chawla",
                category: "Team Spotlight",
                emoji: "👨‍💻",
              },
              {
                title: "Internal vs External Penetration Testing",
                excerpt:
                  "Understanding the differences between testing approaches",
                link: "/blog/internal-vs-external-penetration-testing",
                category: "Penetration Testing",
                emoji: "🔍",
              },
              {
                title: "Top 10 Easy Online Safety Tips",
                excerpt: "Simple security practices everyone should follow",
                link: "/blog/top-10-online-safety-tips",
                category: "Security Tips",
                emoji: "🛡️",
              },
            ].map((article, index) => (
              <Link key={index} to={article.link} className="group">
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow transform hover:scale-105">
                  <div className="text-4xl mb-4">{article.emoji}</div>
                  <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                    {article.category}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2 group-hover:text-emerald-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{article.excerpt}</p>
                  <div className="mt-4 flex items-center text-emerald-600 text-sm font-medium">
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
  );
}
