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
  CheckCircle,
  Users,
  Layout,
  FileCheck,
  DollarSign,
  Layers,
} from "lucide-react";

export default function ComSecTrustedPartnerSoc2() {
  const relatedArticles = [
    {
      title: "Why SOC 2 Matters—Even If You're Not a Big Company?",
      excerpt: "Discover why SOC 2 compliance is crucial for companies of all sizes.",
      link: "/blog/why-soc2-matters-small-companies",
      category: "Compliance",
      emoji: "🛡️",
    },
    {
      title: "SOC 2 vs ISO 27001: Which Is Right for Your Organization?",
      excerpt: "A comprehensive comparison of SOC 2 and ISO 27001 frameworks.",
      link: "/blog/soc2-vs-iso27001-comparison",
      category: "Frameworks",
      emoji: "⚖️",
    },
    {
      title: "Continuous Monitoring for Security and Compliance",
      excerpt: "Why continuous monitoring matters and how to implement it effectively.",
      link: "/blog/continuous-monitoring-security-compliance",
      category: "Security Operations",
      emoji: "📈",
    },
  ];

  const benefits = [
    {
      title: "Expertise and Experience",
      icon: Users,
      content:
        "Com-Sec brings a wealth of expertise and experience in the field of cyber security. Our team comprises highly skilled professionals with in-depth knowledge of SOC2 requirements and compliance procedures. We have successfully guided numerous organizations through the SOC2 certification process, ensuring their systems and controls align with industry best practices.",
    },
    {
      title: "Tailored Solutions",
      icon: Layout,
      content:
        "We understand that each organization has unique requirements and challenges. At Com-Sec, we take a personalized approach, tailoring our services to meet your specific needs. Whether you are a small start-up or a large enterprise, we have the expertise to develop a customized SOC2 compliance program that aligns with your business goals and objectives.",
    },
    {
      title: "Comprehensive Assessments",
      icon: CheckCircle,
      content:
        "Our dedicated team conducts thorough assessments of your organization's systems, policies, and procedures to identify any vulnerabilities or gaps that may hinder SOC2 compliance. We perform detailed risk assessments, vulnerability assessments, and penetration testing to ensure all security controls are robust and effective.",
    },
    {
      title: "End-to-End Compliance Support",
      icon: FileCheck,
      content:
        "Achieving SOC2 compliance is a journey, and Com-Sec is your trusted partner every step of the way. We provide end-to-end compliance support, assisting you from the initial planning and scoping phase through implementation and ongoing monitoring. Our experts work closely with your team, offering guidance, training, and documentation to ensure a smooth and successful compliance process.",
    },
    {
      title: "Cost-Effective Solutions",
      icon: DollarSign,
      content:
        "Com-Sec understands the importance of cost-effectiveness without compromising on quality. We offer competitive pricing models tailored to your organization's size and requirements. Our goal is to provide exceptional value and deliver high-quality results within your budgetary constraints.",
    },
    {
      title: "Holistic Approach",
      icon: Layers,
      content:
        "At Com-Sec, we believe that cyber security and compliance go hand in hand. Our holistic approach encompasses not only SOC2 compliance but also other essential services like HITRUST certification, penetration testing, vulnerability assessments, and virtual Chief Information Security Officer (vCISO) support.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>SOC 2 Compliance Guide | Why Choose Com-Sec</title>
        <meta
          name="description"
          content="SOC 2 compliance services for businesses. Learn what SOC 2 is, why SOC 2 certification matters, and how Com-Sec helps you pass SOC 2 audits faster."
        />
        <link
          rel="canonical"
          href="https://com-sec.io/blog/com-sec-your-trusted-partner-in-achieving-soc2-compliance"
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
                Compliance
              </span>
              <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-bold">
                SOC 2 Guide
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Com-Sec: Your Trusted Partner in Achieving SOC2 Compliance
            </h1>

            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              You’ve likely heard the term SOC2 thrown around quite a bit. You know it’s important, but beyond that, you might not know why it’s so important. We specialize in providing comprehensive cyber security services, including SOC2, to help safeguard your organization's most critical assets.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-blue-100">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>February 2026</span>
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

        {/* Article Content */}
        <article className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              
              {/* Image from Word Doc */}
              <div className="mb-10 flex justify-center">
                 <img
                    src="/images/blog-images/comsec-soc2-partner.png" 
                    alt="Handshake with Shield Icon representing trusted security partnership"
                    className="w-full max-w-md rounded-xl"
                  />
              </div>

              {/* What is SOC2? */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  So… what is SOC2?
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  SOC2, short for Service Organization Control 2, is a widely recognized compliance framework developed by the American Institute of Certified Public Accountants (AICPA). It focuses on the security, availability, processing integrity, confidentiality, and privacy of customer data held by service organizations.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  SOC2 compliance demonstrates an organization's commitment to meeting rigorous standards and best practices for managing and securing client data. In today's fast-paced and ever-evolving threat landscape, organizations cannot afford to compromise on security and compliance. Achieving SOC2 compliance not only demonstrates your commitment to safeguarding customer data but also enhances your reputation and opens new business opportunities.
                </p>
              </section>

              {/* Why Choose Com-Sec (UPDATED to List Format) */}
              <section className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-10">
                  Why Choose Com-Sec for Achieving SOC2 Compliance?
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-10">
                  We get it. There are many other security companies vying for your attention and you just want to get the job done quickly and well. That’s why you should choose us as your trusted security professionals.
                </p>

                <div className="space-y-10">
                  {benefits.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700">
                           <item.icon className="h-5 w-5" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {index + 1}. {item.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-lg">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Conclusion */}
              <section className="mb-12">
                <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-r-lg">
                  <p className="text-blue-900 text-lg leading-relaxed font-medium mb-4">
                    With Com-Sec as your trusted partner, you can navigate the complex world of SOC2 compliance with confidence.
                  </p>
                  <p className="text-blue-800 text-lg leading-relaxed">
                    Contact us today, and let's strengthen your organization's security posture together. Trust Com-Sec, your security and compliance partner of choice.
                  </p>
                </div>
              </section>

              {/* CTA */}
              <section className="mb-12">
                <div className="bg-gradient-to-br from-blue-900 via-indigo-800 to-slate-900 rounded-xl p-8 text-white text-center">
                  <h3 className="text-2xl font-bold mb-4">
                    Get SOC 2 Compliant Faster
                  </h3>
                  <p className="text-blue-100 text-lg mb-6">
                    Ready to start your compliance journey? Schedule a free consultation with our experts today.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild className="bg-white text-blue-900 hover:bg-gray-100">
                      <Link to="/contact" target="_blank" rel="noopener noreferrer">
                        Schedule Consultation
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>

                    <Button
                      variant="outline"
                      asChild
                      className="border-white text-white bg-transparent hover:bg-white hover:text-blue-900"
                    >
                      <Link
                        to="/services/soc2-readiness"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-900"
                      >
                        View SOC 2 Services
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