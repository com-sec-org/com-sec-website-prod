import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  ArrowRight,
  Shield,
  Globe,
  Lock,
  Smartphone,
  Cloud,
  Server,
  Cpu,
  CheckCircle,
} from "lucide-react";

export default function TwentyYearsOfCybersecurity2026() {
  const relatedArticles = [
    {
      title: "The Role of AI in Penetration Testing: Hype vs Reality 2026",
      excerpt: "Explore how AI is transforming penetration testing strategies and what is realistic today.",
      link: "/blog/the-role-of-ai-in-penetration-testing-hype-vs-reality",
      category: "Penetration Testing",
      emoji: "🤖",
    },
    {
      title: "Global Cybersecurity Regulations in 2026",
      excerpt: "How to prepare your business for the latest compliance frameworks and audit requirements.",
      link: "/blog/global-cybersecurity-regulations-in-2025-how-to-prepare-your-business",
      category: "Compliance",
      emoji: "🌍",
    },
    {
      title: "Web Application Penetration Testing Checklist [2026]",
      excerpt: "The ultimate checklist to test authentication, APIs, and business logic flaws.",
      link: "/blog/web-application-penetration-testing-checklist-2025-edition",
      category: "Web Security",
      emoji: "📋",
    },
  ];

  const timelineEvents = [
    {
      era: "The Early 2000s",
      title: "The Dawn of Digital Dangers",
      icon: Globe,
      content:
        "The early 2000s marked the beginning of widespread internet adoption. As email, websites, and online services became part of everyday life, viruses, basic malware, and phishing attacks began to target early users. Security controls during this era were largely reactive and perimeter-focused.",
    },
    {
      era: "Mid-2000s",
      title: "The Rise of Organized Cyberattacks",
      icon: Server,
      content:
        "By the mid-2000s, cybercrime became coordinated and global. Threats such as the MyDoom worm, botnets, and early large-scale data breaches exposed weaknesses in interconnected systems. Cybersecurity shifted from an afterthought to a business necessity.",
    },
    {
      era: "Late 2000s",
      title: "Cybersecurity Awareness Takes Shape",
      icon: User,
      content:
        "Governments and enterprises began recognizing cybersecurity as a shared responsibility. Public initiatives like Cybersecurity Awareness Month were introduced to educate users. Security was no longer limited to IT teams; human behavior became a critical factor.",
    },
    {
      era: "Early 2010s",
      title: "Mobile, Cloud, and Social Media Risks",
      icon: Smartphone,
      content:
        "The rapid adoption of smartphones and cloud services reshaped how people worked. New threats emerged, including mobile malware and account takeovers. Organizations started investing in SIEM tools and behavioral analytics to proactively identify risks.",
    },
    {
      era: "Mid-2010s",
      title: "The Age of Ransomware",
      icon: Lock,
      content:
        "Ransomware emerged as a disruptive threat. Attacks like WannaCry and NotPetya demonstrated how quickly malware could spread. This era highlighted the critical importance of backup strategies, incident response, and business continuity.",
    },
    {
      era: "Late 2010s",
      title: "Cybersecurity Goes Mainstream",
      icon: Shield,
      content:
        "As attacks grew costlier, cybersecurity became a strategic executive priority. Organizations widely adopted encryption, Multi-Factor Authentication (MFA), and endpoint protection, while compliance frameworks pushed businesses to formalize security programs.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Cybersecurity Awareness Month 2026: Evolution, Threats & Zero Trust Security
        </title>
        <meta
          name="description"
          content="Discover how cybersecurity has evolved over the years and how modern cybersecurity threats like ransomware, cloud security risks, AI-driven attacks, and Zero Trust security models are shaping cybersecurity strategies and cybersecurity compliance services today."
        />
        <link
          rel="canonical"
          href="https://com-sec.io/blog/20-years-of-cybersecurity-a-journey-through-the-digital-age"
        />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-blue-900 via-indigo-800 to-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-white/10 rounded-full animate-bounce"></div>
            <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-ping"></div>
            <Shield className="absolute top-32 right-1/3 h-12 w-12 text-blue-400/20 animate-spin-slow" />
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Link
              to="/blogs"
              className="inline-flex items-center text-blue-200 hover:text-white transition-colors mb-8 group"
            >
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <span className="bg-blue-500/20 text-blue-100 px-4 py-2 rounded-full text-sm font-medium">
                Industry History
              </span>
              <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-bold">
                2026 Edition
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Cybersecurity Awareness Month 2026: Evolution, Threats & Zero Trust Security
            </h1>

            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              October is Cybersecurity Awareness Month, a time to reflect on how far cybersecurity has come. From the early days of basic viruses to the AI-driven threats of 2026, the digital world has transformed dramatically—and our defenses have had to evolve alongside it.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-blue-100">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>February 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>8 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Com-Sec Security Team</span>
              </div>
              <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors">
                <Share2 className="h-4 w-4" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              {/* Introduction */}
              <section className="mb-12">
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  Over the past two decades, cybersecurity has transitioned from a niche IT concern to a boardroom priority. As technology advanced, so did the sophistication of cybercriminals. Today, we face a landscape defined by ransomware, cloud vulnerabilities, and AI-powered attacks, making the need for robust security strategies more critical than ever.
                </p>
                <div className="mt-8 mb-10">
                  <img
                    src="/images/blog-images/20-years-of-cybersecurity.png"
                    alt="Timeline of Cybersecurity Evolution"
                    className="w-full rounded-xl border border-gray-200 shadow-sm"
                  />
                </div>
              </section>

              {/* Timeline Section */}
              <section className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  A Journey Through the Digital Age
                </h2>
                <div className="space-y-8">
                  {timelineEvents.map((event, index) => (
                    <div
                      key={index}
                      className="flex flex-col md:flex-row gap-6 bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
                    >
                      <div className="flex-shrink-0">
                        <div className="h-14 w-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-700">
                          <event.icon className="h-7 w-7" />
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-sm font-bold text-blue-600 uppercase tracking-wide">
                            {event.era}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {event.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {event.content}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* 2020s and Beyond */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  The 2020s and Beyond: Remote Work, Cloud, and Zero Trust
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  The 2020s continue to redefine how organizations operate. Remote and hybrid work models are now deeply embedded into business environments, while cloud-first and SaaS-based infrastructures have significantly expanded attack surfaces.
                </p>
                
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 rounded-r-lg">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">
                    Identity is the New Perimeter
                  </h3>
                  <p className="text-blue-800">
                    With the dissolution of the traditional office network, identity has become the primary control point. This shift is driving the widespread adoption of <strong>Zero Trust architectures</strong>, where trust is never granted implicitly, regardless of where the request originates.
                  </p>
                </div>

                <p className="text-gray-700 text-lg leading-relaxed">
                  To address modern threats, organizations are increasingly relying on Endpoint Detection and Response (EDR), continuous security monitoring, secure access solutions, and managed security operations. Protecting distributed users, cloud workloads, and third-party integrations is now essential for maintaining resilience and regulatory compliance.
                </p>
              </section>

              {/* Today's Threat Landscape */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Today’s Threat Landscape: AI-Driven Attacks
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">
                      <strong>AI-Powered Phishing:</strong> Attackers are leveraging artificial intelligence to automate phishing campaigns, craft deepfake scams, and evade traditional security controls with alarming precision.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">
                      <strong>Supply Chain Risks:</strong> Identity-based breaches and cloud misconfigurations remain some of the most critical risks facing organizations across industries.
                    </span>
                  </li>
                </ul>
              </section>

              {/* The Future */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Cpu className="h-8 w-8 text-indigo-600" />
                  The Future of Cybersecurity
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  As emerging technologies such as artificial intelligence, IoT, and 5G continue to evolve, cybersecurity strategies must evolve alongside them. The future of cybersecurity will rely heavily on:
                </p>
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  {[
                    "AI-Driven Threat Detection",
                    "Real-Time Visibility",
                    "Proactive Risk Management",
                  ].map((item, i) => (
                    <div key={i} className="bg-white border border-gray-200 rounded-lg p-4 text-center font-semibold text-indigo-700 shadow-sm">
                      {item}
                    </div>
                  ))}
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Continuous monitoring, strong identity security, and user education will play a central role in preventing incidents before they occur.
                </p>
              </section>

              {/* Conclusion */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Conclusion: A Shared Responsibility
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  The past two decades of cybersecurity evolution have shown one thing clearly: cybersecurity is no longer just a technical issue. It is a collective responsibility shared by organizations, employees, and technology partners.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  As we observe Cybersecurity Awareness Month, organizations should focus on building a strong security culture through security awareness training, implementing Zero Trust security models, and partnering with experts that deliver <Link to="/services/compliance-audit-readiness" className="text-blue-700 font-semibold hover:underline">cybersecurity compliance services</Link> and <Link to="/services/soc-support" className="text-blue-700 font-semibold hover:underline">managed cybersecurity services</Link> to create a safer, more resilient digital world.
                </p>
                <p className="text-xl font-bold text-center text-indigo-700 mt-8">
                  Happy Cybersecurity Awareness Month! 🔐
                </p>
              </section>

              {/* CTA */}
              <section className="mb-12">
                <div className="bg-gradient-to-br from-blue-900 via-indigo-800 to-slate-900 rounded-xl p-8 text-white text-center">
                  <h3 className="text-2xl font-bold mb-4">
                    Ready to modernize your cybersecurity strategy?
                  </h3>
                  <p className="text-blue-100 text-lg mb-6">
                    Partner with Com-Sec to implement Zero Trust models, enhance compliance, and secure your future against AI-driven threats.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild className="bg-white text-blue-900 hover:bg-gray-100">
                      <Link to="/contact" target="_blank" rel="noopener noreferrer">
                        Schedule a Consultation
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>

                    <Button
                      variant="outline"
                      asChild
                      className="border-white text-white bg-transparent hover:bg-white hover:text-blue-900"
                    >
                      <Link
                        to="/services/penetration-testing-services"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-900"
                      >
                        Explore Our Services
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
              {relatedArticles.map((article, index) => (
                <Link key={index} to={article.link} className="group">
                  <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow transform hover:scale-105 h-full flex flex-col">
                    <div className="text-4xl mb-4">{article.emoji}</div>
                    <span className="text-xs font-medium text-blue-700 bg-blue-50 px-2 py-1 rounded-full w-fit">
                      {article.category}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2 group-hover:text-blue-700 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm flex-grow">
                      {article.excerpt}
                    </p>
                    <div className="mt-4 flex items-center text-blue-700 text-sm font-medium">
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