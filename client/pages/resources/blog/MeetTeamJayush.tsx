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
  Coffee,
  Code,
  Heart,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function MeetTeamJayush() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section with Animated Background */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-pink-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-pink-300/10 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-ping"></div>
          <Sparkles className="absolute top-32 right-1/3 h-8 w-8 text-yellow-300 animate-spin" />
          <Coffee className="absolute bottom-32 right-20 h-6 w-6 text-orange-300 animate-bounce" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            to="/resources/blogs"
            className="inline-flex items-center text-pink-200 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <span className="bg-pink-500/20 text-pink-200 px-4 py-2 rounded-full text-sm font-medium animate-pulse">
              Team Spotlight
            </span>
            <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-bold">
              Meet Our Expert
            </span>
          </div>

          {/* Profile Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Meet the Team:
                <span className="block text-pink-200 animate-pulse">
                  Jayush Chawla
                </span>
              </h1>
              <p className="text-xl text-pink-100 mb-8 leading-relaxed">
                Senior Cybersecurity Consultant with expertise in cloud security
                architecture and compliance frameworks. Passionate about making
                cybersecurity accessible to organizations of all sizes.
              </p>

              <div className="flex flex-wrap items-center gap-6 text-pink-200">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>July 20, 2022</span>
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

            {/* Animated Profile Card */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 transform hover:scale-105 transition-all duration-300">
                {/* Avatar placeholder with animated ring */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full mx-auto flex items-center justify-center text-4xl font-bold text-white shadow-2xl">
                    JC
                  </div>
                  <div
                    className="absolute inset-0 w-32 h-32 border-4 border-white/30 rounded-full mx-auto animate-spin"
                    style={{ animationDuration: "3s" }}
                  ></div>
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Jayush Chawla
                  </h3>
                  <p className="text-pink-200 mb-4">
                    Senior Cybersecurity Consultant
                  </p>

                  <div className="flex items-center justify-center gap-2 text-pink-200 mb-4">
                    <MapPin className="h-4 w-4" />
                    <span>San Francisco, CA</span>
                  </div>

                  <div className="flex justify-center gap-4">
                    <div className="bg-white/20 rounded-lg p-3 hover:bg-white/30 transition-colors">
                      <Code className="h-5 w-5 text-white" />
                    </div>
                    <div className="bg-white/20 rounded-lg p-3 hover:bg-white/30 transition-colors">
                      <Award className="h-5 w-5 text-white" />
                    </div>
                    <div className="bg-white/20 rounded-lg p-3 hover:bg-white/30 transition-colors">
                      <Heart className="h-5 w-5 text-white" />
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
            {/* Background Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <User className="h-8 w-8 text-purple-600 mr-3" />
                Background & Journey
              </h2>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8 mb-8 border border-purple-200">
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Jayush joined Com-Sec with over 8 years of experience in
                  cybersecurity, bringing deep expertise in cloud security
                  architecture and compliance frameworks. His journey in
                  cybersecurity began during his computer science studies at UC
                  Berkeley, where he discovered his passion for protecting
                  digital assets.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Before joining Com-Sec, Jayush worked at leading tech
                  companies where he implemented security solutions for
                  large-scale cloud infrastructures and guided organizations
                  through complex compliance requirements.
                </p>
              </div>
            </section>

            {/* Expertise Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <Award className="h-8 w-8 text-blue-600 mr-3" />
                Areas of Expertise
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Cloud Security Architecture",
                    description:
                      "Designing secure cloud infrastructures across AWS, Azure, and GCP platforms",
                    color: "bg-blue-50 border-blue-200 text-blue-900",
                    icon: "☁️",
                  },
                  {
                    title: "Compliance Frameworks",
                    description:
                      "SOC 2, ISO 27001, HIPAA, and other regulatory compliance implementations",
                    color: "bg-green-50 border-green-200 text-green-900",
                    icon: "📋",
                  },
                  {
                    title: "Risk Assessment",
                    description:
                      "Comprehensive security risk analysis and mitigation strategies",
                    color: "bg-purple-50 border-purple-200 text-purple-900",
                    icon: "🎯",
                  },
                  {
                    title: "Security Automation",
                    description:
                      "Implementing automated security controls and monitoring solutions",
                    color: "bg-orange-50 border-orange-200 text-orange-900",
                    icon: "🤖",
                  },
                ].map((expertise, index) => (
                  <div
                    key={index}
                    className={`rounded-lg p-6 border ${expertise.color} transform hover:scale-105 transition-all duration-300`}
                  >
                    <div className="text-3xl mb-3">{expertise.icon}</div>
                    <h3 className="text-xl font-semibold mb-3">
                      {expertise.title}
                    </h3>
                    <p>{expertise.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Philosophy Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Heart className="h-8 w-8 text-red-600 mr-3" />
                Security Philosophy
              </h2>

              <div className="bg-gradient-to-r from-red-600 to-pink-600 rounded-xl p-8 text-white mb-8">
                <blockquote className="text-xl font-medium italic mb-4">
                  "Cybersecurity shouldn't be a barrier to innovation—it should
                  be the foundation that enables it. My goal is to make security
                  so seamless that it becomes invisible to users while remaining
                  impenetrable to threats."
                </blockquote>
                <cite className="text-red-200 font-semibold">
                  — Jayush Chawla
                </cite>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Jayush believes in taking a pragmatic approach to cybersecurity,
                balancing robust security measures with business needs. He
                specializes in creating security solutions that don't hinder
                productivity but rather enhance organizational confidence and
                capabilities.
              </p>
            </section>

            {/* Fun Facts Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <Coffee className="h-8 w-8 text-yellow-600 mr-3" />
                Fun Facts & Interests
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    emoji: "☕",
                    title: "Coffee Enthusiast",
                    description:
                      "Runs on specialty coffee and can recommend the best roasters in the Bay Area",
                  },
                  {
                    emoji: "🎸",
                    title: "Musician",
                    description:
                      "Plays guitar and finds that music helps him think through complex security problems",
                  },
                  {
                    emoji: "🏔���",
                    title: "Adventure Seeker",
                    description:
                      "Loves hiking and rock climbing - believes outdoor challenges parallel cybersecurity challenges",
                  },
                  {
                    emoji: "📚",
                    title: "Continuous Learner",
                    description:
                      "Currently pursuing advanced certifications in cloud security and AI/ML applications",
                  },
                  {
                    emoji: "🎮",
                    title: "CTF Competitor",
                    description:
                      "Participates in Capture The Flag competitions to stay sharp on the latest attack techniques",
                  },
                  {
                    emoji: "🌱",
                    title: "Mentorship",
                    description:
                      "Mentors junior security professionals and speaks at local cybersecurity meetups",
                  },
                ].map((fact, index) => (
                  <div
                    key={index}
                    className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="text-4xl mb-3">{fact.emoji}</div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {fact.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{fact.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Quote Section */}
            <section className="mb-12">
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8 border border-indigo-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Jayush's Advice for Organizations
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    <strong>
                      "Start with the basics and build incrementally."
                    </strong>{" "}
                    Many organizations try to implement complex security
                    solutions without mastering the fundamentals. Focus on
                    getting your foundation right—proper access controls,
                    regular updates, and employee training.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>
                      "Compliance is a journey, not a destination."
                    </strong>{" "}
                    Don't view compliance as a one-time checkbox exercise. The
                    most successful organizations treat it as an ongoing process
                    of improvement and adaptation to new threats and
                    requirements.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section className="mb-12">
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Work with Jayush</h3>
                <p className="text-purple-100 text-lg mb-6">
                  Interested in cloud security or compliance consulting? Jayush
                  would love to help your organization build a robust security
                  foundation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    className="bg-white text-purple-600 hover:bg-gray-100"
                  >
                    <Link to="/contact">
                      Schedule a Consultation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    asChild
                    className="border-white text-white bg-transparent hover:bg-white hover:text-purple-600"
                  >
                    <Link to="/services">Our Services</Link>
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
            More Team Spotlights
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Meet the Team: Rojin Rezaei",
                excerpt:
                  "Get to know Rojin Rezaei, our cybersecurity expert specializing in penetration testing",
                link: "/resources/blog/meet-team-rojin-rezaei",
                category: "Team Spotlight",
                emoji: "👩‍💻",
              },
              {
                title: "What is a vCISO?",
                excerpt:
                  "Understanding the role of virtual Chief Information Security Officers",
                link: "/resources/blog/what-is-vciso-role-cybersecurity",
                category: "Leadership",
                emoji: "👨‍💼",
              },
              {
                title: "20 Years of Cybersecurity",
                excerpt:
                  "A journey through the evolution of cybersecurity over two decades",
                link: "/resources/blog/20-years-cybersecurity-journey",
                category: "Industry History",
                emoji: "🕰️",
              },
            ].map((article, index) => (
              <Link key={index} to={article.link} className="group">
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow transform hover:scale-105">
                  <div className="text-4xl mb-4">{article.emoji}</div>
                  <span className="text-xs font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded-full">
                    {article.category}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2 group-hover:text-purple-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{article.excerpt}</p>
                  <div className="mt-4 flex items-center text-purple-600 text-sm font-medium">
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
