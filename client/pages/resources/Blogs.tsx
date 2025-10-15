import { useState } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  Search,
  Tag,
  TrendingUp,
  BookOpen,
  Shield,
  FileText,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";

export default function Blogs() {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const [visibleArticles, setVisibleArticles] = useState(9);
  const [showLoadMore, setShowLoadMore] = useState(true);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setVisibleArticles(20);
      const q = searchQuery.trim().toLowerCase().replace(/\s|-/g, "");
      setTimeout(() => {
        const items = Array.from(
          document.querySelectorAll<HTMLElement>("[data-article-title]")
        );
        const matches = items.filter((el) => {
          const t = (el.getAttribute("data-article-title") || "").toLowerCase();
          const c = (el.getAttribute("data-article-category") || "").toLowerCase();
          const e = (el.getAttribute("data-article-excerpt") || "").toLowerCase();
          const hay = `${t} ${c} ${e}`.replace(/\s|-/g, "");
          return hay.includes(q);
        });

        if (matches.length > 0) {
          toast({
            title: "We found blogs for you",
            description: `${matches.length} matching article${matches.length > 1 ? "s" : ""}.` ,
            action: (
              <ToastAction
                altText="Jump to results"
                onClick={() => document.getElementById("blog-results")?.scrollIntoView({ behavior: "smooth", block: "start" })}
              >
                Jump to results
              </ToastAction>
            ),
          });
        } else {
          toast({
            title: "No on-site matches",
            description: "Try Google search for broader results.",
            action: (
              <ToastAction altText="Search Google" onClick={() => handleGoogleSearch()}>
                Search Google
              </ToastAction>
            ),
          });
        }
      }, 0);
    }
  };

  const handleGoogleSearch = () => {
    if (searchQuery.trim()) {
      const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
      window.open(googleSearchUrl, "_blank");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (searchQuery.trim()) {
        setVisibleArticles(20);
      }
    }
  };

  const handleLoadMore = () => {
    const newVisibleCount = visibleArticles + 6;
    setVisibleArticles(newVisibleCount);
    // Hide Load More button if we've shown all articles
    if (newVisibleCount >= 20) {
      // Total number of articles
      setShowLoadMore(false);
    }
  };

  const handleShowLess = () => {
    setVisibleArticles(9);
    setShowLoadMore(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/4240505/pexels-photo-4240505.jpeg"
            alt="Woman working thoughtfully in home office, reflecting on ideas with laptop and notebook"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/80 to-gray-900/80"></div>
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/10 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-white/5 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-slate-400/20 rounded-full animate-ping"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center bg-blue-400/20 rounded-full px-6 py-2 text-blue-300 font-medium text-sm mb-8">
              <BookOpen className="h-4 w-4 mr-2" />
              Knowledge Hub
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Cybersecurity
              <span className="block text-blue-400">Insights & Updates</span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              Stay ahead of cybersecurity threats with expert insights,
              compliance guides, and industry best practices from our security
              professionals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div
                className={`relative max-w-md mx-auto sm:mx-0 search-floating ${searchFocused ? "search-glow-effect" : ""}`}
              >
                <Search
                  className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 transition-all duration-300 ${searchFocused ? "text-blue-300 animate-pulse" : "text-gray-400"}`}
                />
                <input
                  type="text"
                  placeholder="Search cybersecurity topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                  className={`w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border transition-all duration-500 text-white placeholder-white/60 focus:outline-none focus:ring-4 focus:ring-blue-400/50 focus:border-blue-300 ${
                    searchFocused
                      ? "border-blue-300 bg-white/20 transform scale-105"
                      : "border-white/20"
                  }`}
                />
                {/* Floating particles around search */}
                <div
                  className={`absolute -top-2 -right-2 w-2 h-2 bg-blue-400 rounded-full transition-opacity duration-300 ${searchFocused ? "animate-ping opacity-60" : "opacity-0"}`}
                ></div>
                <div
                  className={`absolute -bottom-2 -left-2 w-1 h-1 bg-white rounded-full transition-opacity duration-300 ${searchFocused ? "animate-bounce opacity-80" : "opacity-0"}`}
                ></div>
              </div>
              <Button
                size="lg"
                onClick={handleSearch}
                className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-500 hover:to-indigo-600 transform hover:scale-105 transition-all duration-300 smooth-scale"
              >
                Search
                <Search className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                onClick={handleGoogleSearch}
                variant="outline"
                className="border-white/30 bg-white/10 text-white hover:bg-white hover:text-blue-700 transform hover:scale-105 transition-all duration-300"
              >
                Search with Google
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Featured Article
            </h2>
          </div>

          <Link to="/blog/iso-27001-certification-guide">
            <Card className="hover:shadow-2xl transition-all duration-500 border-0 shadow-xl overflow-hidden group">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 lg:p-12 text-white">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-blue-400/20 text-blue-200 px-3 py-1 rounded-full text-sm font-medium animate-pulse">
                      Featured
                    </span>
                    <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                      Compliance
                    </span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4 leading-tight group-hover:text-blue-200 transition-colors">
                    ISO 27001 Certification Guide: What It Is, Why It Matters,
                    and How to Get Compliant?
                  </h3>
                  <p className="text-white/90 mb-6 text-lg leading-relaxed">
                    Complete guide to ISO 27001 certification process,
                    requirements, and implementation strategies for your
                    organization. Learn everything you need to know to achieve
                    compliance.
                  </p>
                  <div className="flex items-center gap-4 text-white/80 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">July 4, 2025</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">12 min read</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span className="text-sm">Com-Sec Team</span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="border-white bg-white/10 text-white hover:bg-white hover:text-blue-600 group-hover:scale-105 transition-transform backdrop-blur-sm font-semibold"
                  >
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 p-8 lg:p-12 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0">
                    <img
                      src="https://images.pexels.com/photos/4238516/pexels-photo-4238516.jpeg"
                      alt="A man reading a coronavirus case count article on a computer screen indoors"
                      className="w-full h-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-100/80 to-gray-200/80"></div>
                  </div>
                  <div className="w-full max-w-sm relative z-10">
                    <div className="bg-white rounded-lg p-6 shadow-lg transform group-hover:scale-105 transition-transform">
                      <Shield className="h-16 w-16 text-blue-600 mx-auto mb-4 animate-pulse" />
                      <div className="text-center">
                        <div className="text-3xl font-bold text-gray-800 mb-2">
                          ISO 27001
                        </div>
                        <div className="text-gray-600">
                          Information Security Management
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Browse by Category
            </h2>
            <p className="text-xl text-muted-foreground">
              Find the cybersecurity topics that matter to you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Compliance",
                description: "SOC 2, HIPAA, ISO 27001 guides",
                icon: Shield,
                color: "bg-blue-500",
                gradient: "from-blue-500 to-blue-600",
              },
              {
                name: "Healthcare",
                description: "AI, patient data & medical security",
                icon: Search,
                color: "bg-teal-500",
                gradient: "from-teal-500 to-cyan-600",
              },
              {
                name: "Team Insights",
                description: "Meet our cybersecurity experts",
                icon: FileText,
                color: "bg-purple-500",
                gradient: "from-purple-500 to-pink-600",
              },
              {
                name: "Security Tips",
                description: "Practical cybersecurity advice",
                icon: TrendingUp,
                color: "bg-green-500",
                gradient: "from-green-500 to-emerald-600",
              },
            ].map((category, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-500 cursor-pointer group transform hover:scale-105 overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>
                <CardContent className="p-6 text-center relative z-10">
                  <div className="relative mb-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-xl flex items-center justify-center mx-auto mb-2 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                    >
                      <category.icon className="h-8 w-8 text-white" />
                    </div>
                    {/* Floating elements */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-blue-400 rounded-full animate-bounce opacity-0 group-hover:opacity-100 transition-opacity delay-100"></div>
                  </div>
                  <h3 className="font-bold text-lg text-primary mb-3 group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                  <div className="mt-4 flex items-center justify-center">
                    <span className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full font-medium group-hover:bg-blue-100 transition-colors">
                      Explore Category
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-muted-foreground">
              Fresh insights from our cybersecurity experts
            </p>
          </div>

          {searchQuery.trim() && (
            <div className="text-sm text-gray-600 mb-6">
              Showing results for "<span className="font-semibold">{searchQuery}</span>"
            </div>
          )}
          <div id="blog-results" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: "iso-27001-certification-guide",
                title:
                  "ISO 27001 Certification Guide: What It Is, Why It Matters, and How to Get Compliant?",
                excerpt:
                  "Complete guide to ISO 27001 certification process, requirements, and implementation strategies for your organization.",
                date: "July 4, 2025",
                readTime: "7 min read",
                author: "Com-Sec Team",
                category: "Compliance",
                categoryColor: "bg-blue-100 text-blue-800",
                featured: true,
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F0ba8b9be18d047ca8e1a6f29e75eea99%2Ff2076f6992bf4635a3fa3a1ead352428?format=webp&width=800",
                imageAlt:
                  "ISO certification quality management and compliance assessment with audit checklist and evaluation process",
              },
              {
                id: "soc2-vs-iso27001-comparison",
                title:
                  "SOC 2 vs ISO 27001: Which Is Right for Your Organization?",
                excerpt:
                  "A comprehensive comparison of SOC 2 and ISO 27001 frameworks to help you choose the right compliance path for your organization's security and business needs.",
                date: "July 15, 2025",
                readTime: "8 min read",
                author: "Com-Sec Compliance Team",
                category: "Compliance",
                categoryColor: "bg-blue-100 text-blue-800",
                featured: true,
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F0ba8b9be18d047ca8e1a6f29e75eea99%2Fe3d3be5db7df4ab28a3c74177c6ad19d?format=webp&width=800",
                imageAlt:
                  "ISO 27001 vs SOC2 comparison showing two security shields on a balance scale with compliance frameworks",
              },
              {
                id: "why-soc2-matters-small-companies",
                title: "Why SOC 2 Matters—Even If You're Not a Big Company?",
                excerpt:
                  "Discover why SOC 2 compliance is crucial for companies of all sizes and how it can accelerate your business growth.",
                date: "June 25, 2025",
                readTime: "5 min read",
                author: "Com-Sec Team",
                category: "Compliance",
                categoryColor: "bg-blue-100 text-blue-800",
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F0ba8b9be18d047ca8e1a6f29e75eea99%2F435813f714f2455f99686b757f5ce534?format=webp&width=800",
                imageAlt:
                  "SOC 2 digital cybersecurity framework with security controls and data protection compliance standards",
              },
              {
                id: "internal-vs-external-penetration-testing",
                title:
                  "Difference Between Internal vs External Penetration Testing",
                excerpt:
                  "Understand the key differences, benefits, and when to use internal versus external penetration testing approaches.",
                date: "June 16, 2025",
                readTime: "6 min read",
                author: "Com-Sec Security Team",
                category: "Penetration Testing",
                categoryColor: "bg-red-100 text-red-800",
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F0ba8b9be18d047ca8e1a6f29e75eea99%2F2df60f7390884eedb336a7f2a01889b5?format=webp&width=800",
                imageAlt:
                  "Digital security hand holding cybersecurity shield with network protection and cyber defense technology",
              },
              {
                id: "prepare-compliance-audit-best-practices",
                title:
                  "How to Prepare for a Compliance Audit: Best Practices and Strategies",
                excerpt:
                  "Essential strategies and best practices to ensure your organization is ready for any compliance audit.",
                date: "June 8, 2025",
                readTime: "8 min read",
                author: "Com-Sec Compliance Team",
                category: "Audit Readiness",
                categoryColor: "bg-green-100 text-green-800",
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F0ba8b9be18d047ca8e1a6f29e75eea99%2F4e7f1a40243f4106ac290d96836f3226?format=webp&width=800",
                imageAlt:
                  "Compliance puzzle pieces with team collaboration showing regulatory framework integration and audit preparation",
              },
              {
                id: "what-is-vciso-role-cybersecurity",
                title:
                  "What is a vCISO? Understanding the Role and How It Supports Your Cybersecurity Goals",
                excerpt:
                  "Learn about virtual Chief Information Security Officers and how they can strengthen your cybersecurity posture.",
                date: "November 20, 2024",
                readTime: "4 min read",
                author: "Com-Sec Leadership",
                category: "Leadership",
                categoryColor: "bg-purple-100 text-purple-800",
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F0ba8b9be18d047ca8e1a6f29e75eea99%2F1e54bc2a36d74a828c3f64cc81d896f2?format=webp&width=800",
                imageAlt:
                  "Cybersecurity team collaboration with security professionals working together on digital protection strategies",
              },
              {
                id: "managed-security-compliance-services",
                title:
                  "What Are Managed Security Compliance Services and Why Are They Essential?",
                excerpt:
                  "Explore managed security compliance services and their critical role in maintaining robust cybersecurity.",
                date: "November 20, 2024",
                readTime: "6 min read",
                author: "Com-Sec Team",
                category: "Managed Services",
                categoryColor: "bg-indigo-100 text-indigo-800",
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F0ba8b9be18d047ca8e1a6f29e75eea99%2F052c4f1cb2704e56bd3384655c519d93?format=webp&width=800",
                imageAlt:
                  "Partnership handshake with security shield representing trusted managed security services and collaboration",
              },
              {
                id: "patient-confidentiality-ai-healthcare",
                title:
                  "Best Practices for Maintaining Patient Confidentiality in AI-Driven Healthcare",
                excerpt:
                  "Essential guidelines for protecting patient data privacy in AI-powered healthcare applications and systems.",
                date: "October 24, 2024",
                readTime: "6 min read",
                author: "Com-Sec Healthcare Team",
                category: "Healthcare",
                categoryColor: "bg-teal-100 text-teal-800",
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F0ba8b9be18d047ca8e1a6f29e75eea99%2Fa84fa3274fb24a74a19cdd336e023ea6?format=webp&width=800",
                imageAlt:
                  "Healthcare professionals collaborating in medical consultation with patient confidentiality and data privacy",
              },
              {
                id: "transparency-accuracy-ai-healthcare",
                title:
                  "Transparency and Accuracy in AI: Key to Ethical Healthcare Solutions",
                excerpt:
                  "How transparency and accuracy principles guide ethical AI development in healthcare innovation.",
                date: "October 8, 2024",
                readTime: "5 min read",
                author: "Com-Sec Healthcare Team",
                category: "Healthcare",
                categoryColor: "bg-teal-100 text-teal-800",
                image:
                  "https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg",
                imageAlt:
                  "Abstract illustration of AI with silhouette head full of eyes, symbolizing observation and technology",
              },
              {
                id: "human-side-ai-patient-safety",
                title:
                  "The Human Side of AI: Prioritizing Patient Safety in Healthcare Innovation",
                excerpt:
                  "Balancing AI innovation with human oversight to ensure patient safety in healthcare technology.",
                date: "October 7, 2024",
                readTime: "4 min read",
                author: "Com-Sec Healthcare Team",
                category: "Healthcare",
                categoryColor: "bg-teal-100 text-teal-800",
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F0ba8b9be18d047ca8e1a6f29e75eea99%2F19c4f52e2ac243bb88f3efa9d04349bc?format=webp&width=800",
                imageAlt:
                  "AI and human collaboration in healthcare showing partnership between artificial intelligence and medical professionals",
              },
              {
                id: "ai-ethics-healthcare-innovation",
                title: "AI and Ethics in Healthcare Innovation",
                excerpt:
                  "Exploring ethical considerations and frameworks for responsible AI implementation in healthcare.",
                date: "October 4, 2024",
                readTime: "7 min read",
                author: "Com-Sec Healthcare Team",
                category: "Healthcare",
                categoryColor: "bg-teal-100 text-teal-800",
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F0ba8b9be18d047ca8e1a6f29e75eea99%2F19c4f52e2ac243bb88f3efa9d04349bc?format=webp&width=800",
                imageAlt:
                  "AI and human collaboration in healthcare showing partnership between artificial intelligence and medical professionals",
              },
              {
                id: "cybersecurity-roundup-startups-may",
                title:
                  "Cybersecurity Roundup: Key Trends and Threats for Startups in May",
                excerpt:
                  "Monthly cybersecurity insights, emerging threats, and protection strategies specifically for startup companies.",
                date: "June 1, 2024",
                readTime: "4 min read",
                author: "Com-Sec Research Team",
                category: "Industry Trends",
                categoryColor: "bg-yellow-100 text-yellow-800",
                image:
                  "https://images.pexels.com/photos/9588215/pexels-photo-9588215.jpeg",
                imageAlt:
                  "Overhead view of blockchain app on smartphone with cash, headphones, and notebook",
              },
              {
                id: "top-10-online-safety-tips",
                title: "Top 10 Easy Online Safety Tips",
                excerpt:
                  "Simple yet effective online safety practices that everyone can implement to protect their digital presence.",
                date: "October 6, 2023",
                readTime: "3 min read",
                author: "Com-Sec Team",
                category: "Security Tips",
                categoryColor: "bg-orange-100 text-orange-800",
                image:
                  "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg",
                imageAlt:
                  "Close-up view of a mouse cursor over digital security text on display",
              },
              {
                id: "20-years-cybersecurity-journey",
                title:
                  "20 Years of Cybersecurity: A Journey Through the Digital Age",
                excerpt:
                  "Reflecting on two decades of cybersecurity evolution, major milestones, and lessons learned.",
                date: "September 29, 2023",
                readTime: "9 min read",
                author: "Com-Sec Leadership",
                category: "Industry History",
                categoryColor: "bg-gray-100 text-gray-800",
                image:
                  "https://images.pexels.com/photos/8292885/pexels-photo-8292885.jpeg",
                imageAlt:
                  "Close-up of a person reviewing mortgage history and trends document",
              },
              {
                id: "comsec-trusted-partner-soc2",
                title:
                  "Com-Sec: Your Trusted Partner in Achieving SOC2 Compliance",
                excerpt:
                  "Learn how Com-Sec helps organizations achieve and maintain SOC 2 compliance with proven methodologies.",
                date: "July 4, 2023",
                readTime: "3 min read",
                author: "Com-Sec Team",
                category: "Company",
                categoryColor: "bg-blue-100 text-blue-800",
                image:
                  "https://images.pexels.com/photos/32866728/pexels-photo-32866728.jpeg",
                imageAlt:
                  "Group of colleagues collaborating in a modern office setting, engaging in a discussion around a laptop",
              },
              {
                id: "soc2-hitrust-simultaneous-audits",
                title:
                  "The Pros and Cons of Undergoing SOC 2 Type II and HITRUST Audits Simultaneously",
                excerpt:
                  "Strategic analysis of conducting multiple compliance audits concurrently and optimization strategies.",
                date: "December 6, 2022",
                readTime: "7 min read",
                author: "Com-Sec Compliance Team",
                category: "Audit Strategy",
                categoryColor: "bg-violet-100 text-violet-800",
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F0ba8b9be18d047ca8e1a6f29e75eea99%2F78d342b17a2744d483d13c6a57bb59e3?format=webp&width=800",
                imageAlt:
                  "Pros and cons comparison analysis with plus and minus evaluation for strategic audit decision making",
              },
              {
                id: "engaging-vciso-step-by-step",
                title:
                  "The Order of Operations for Engaging a vCISO: A Step-by-Step Guide",
                excerpt:
                  "Comprehensive guide to successfully engaging and working with a virtual Chief Information Security Officer.",
                date: "November 1, 2022",
                readTime: "5 min read",
                author: "Com-Sec Leadership",
                category: "Leadership",
                categoryColor: "bg-purple-100 text-purple-800",
                image:
                  "https://images.pexels.com/photos/32866728/pexels-photo-32866728.jpeg",
                imageAlt:
                  "Group of colleagues collaborating in a modern office setting, engaging in a discussion around a laptop",
              },
              {
                id: "meet-team-rojin-rezaei",
                title: "Meet the Team: Rojin Rezaei",
                excerpt:
                  "Get to know Rojin Rezaei, one of our cybersecurity experts, and learn about their background and expertise.",
                date: "October 18, 2022",
                readTime: "2 min read",
                author: "Com-Sec Team",
                category: "Team Spotlight",
                categoryColor: "bg-pink-100 text-pink-800",
                image:
                  "https://images.pexels.com/photos/32866728/pexels-photo-32866728.jpeg",
                imageAlt:
                  "Group of colleagues collaborating in a modern office setting, engaging in a discussion around a laptop",
              },
              {
                id: "safeguarding-data-sharing-tech-companies",
                title:
                  "Safeguarding Data Sharing: Mitigating Cybersecurity Risks for Tech Companies with Com-Sec",
                excerpt:
                  "How tech companies can secure data sharing processes and mitigate cybersecurity risks effectively.",
                date: "October 4, 2022",
                readTime: "6 min read",
                author: "Com-Sec Tech Team",
                category: "Data Security",
                categoryColor: "bg-cyan-100 text-cyan-800",
                image:
                  "https://images.pexels.com/photos/12220471/pexels-photo-12220471.jpeg",
                imageAlt:
                  "Close-up of a vintage typewriter with a paper marked 'National Security', symbolizing confidentiality",
              },
              {
                id: "security-compliance-health-companies",
                title:
                  "The Vital Importance of Security and Compliance for Health Companies: Safeguarding Patient Data",
                excerpt:
                  "Why healthcare organizations must prioritize cybersecurity and compliance to protect sensitive patient information.",
                date: "August 2, 2022",
                readTime: "8 min read",
                author: "Com-Sec Healthcare Team",
                category: "Healthcare",
                categoryColor: "bg-teal-100 text-teal-800",
                image:
                  "https://images.pexels.com/photos/11623569/pexels-photo-11623569.jpeg",
                imageAlt:
                  "A gloved healthcare professional holds a COVID-19 vaccine vial, emphasizing protection and medical care",
              },
              {
                id: "meet-team-jayush-chawla",
                title: "Meet the Team: Jayush Chawla",
                excerpt:
                  "Learn about Jayush Chawla's cybersecurity journey and contributions to the Com-Sec team.",
                date: "July 20, 2022",
                readTime: "2 min read",
                author: "Com-Sec Team",
                category: "Team Spotlight",
                categoryColor: "bg-pink-100 text-pink-800",
                image:
                  "https://images.pexels.com/photos/32866728/pexels-photo-32866728.jpeg",
                imageAlt:
                  "Group of colleagues collaborating in a modern office setting, engaging in a discussion around a laptop",
              },
              // Additional articles for Load More functionality
              {
                id: "transparency-accuracy-ai-healthcare",
                title:
                  "Transparency and Accuracy in AI: Key to Ethical Healthcare Solutions",
                excerpt:
                  "How transparency and accuracy principles guide ethical AI development in healthcare innovation.",
                date: "October 8, 2024",
                readTime: "5 min read",
                author: "Com-Sec Healthcare Team",
                category: "Healthcare",
                categoryColor: "bg-teal-100 text-teal-800",
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F0ba8b9be18d047ca8e1a6f29e75eea99%2Fa84fa3274fb24a74a19cdd336e023ea6?format=webp&width=800",
                imageAlt:
                  "Healthcare professionals collaborating in medical consultation with transparency in AI healthcare systems",
              },
              {
                id: "cybersecurity-roundup-startups-may",
                title:
                  "Cybersecurity Roundup: Key Trends and Threats for Startups in May",
                excerpt:
                  "Monthly cybersecurity insights, emerging threats, and protection strategies specifically for startup companies.",
                date: "June 1, 2024",
                readTime: "4 min read",
                author: "Com-Sec Research Team",
                category: "Industry Trends",
                categoryColor: "bg-yellow-100 text-yellow-800",
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F0ba8b9be18d047ca8e1a6f29e75eea99%2Fd4d4dd2947d0420f949c2d5268a21bf5?format=webp&width=800",
                imageAlt:
                  "May 2024 Cybersecurity Monthly Roundup with Com-Sec branding for industry trends and security updates",
              },
              {
                id: "top-10-online-safety-tips",
                title: "Top 10 Easy Online Safety Tips",
                excerpt:
                  "Simple yet effective online safety practices that everyone can implement to protect their digital presence.",
                date: "October 6, 2023",
                readTime: "3 min read",
                author: "Com-Sec Team",
                category: "Security Tips",
                categoryColor: "bg-orange-100 text-orange-800",
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F0ba8b9be18d047ca8e1a6f29e75eea99%2F6c78799edc914c0c9043b995aaa950d4?format=webp&width=800",
                imageAlt:
                  "Online safety and laptop security with digital protection and cybersecurity best practices",
              },
              {
                id: "20-years-cybersecurity-journey",
                title:
                  "20 Years of Cybersecurity: A Journey Through the Digital Age",
                excerpt:
                  "Reflecting on two decades of cybersecurity evolution, major milestones, and lessons learned.",
                date: "September 29, 2023",
                readTime: "9 min read",
                author: "Com-Sec Leadership",
                category: "Industry History",
                categoryColor: "bg-gray-100 text-gray-800",
                image:
                  "https://images.pexels.com/photos/8292885/pexels-photo-8292885.jpeg",
                imageAlt:
                  "Close-up of a person reviewing mortgage history and trends document",
              },
              {
                id: "comsec-trusted-partner-soc2",
                title:
                  "Com-Sec: Your Trusted Partner in Achieving SOC2 Compliance",
                excerpt:
                  "Learn how Com-Sec helps organizations achieve and maintain SOC 2 compliance with proven methodologies.",
                date: "July 4, 2023",
                readTime: "3 min read",
                author: "Com-Sec Team",
                category: "Company",
                categoryColor: "bg-blue-100 text-blue-800",
                image:
                  "https://images.pexels.com/photos/32866728/pexels-photo-32866728.jpeg",
                imageAlt:
                  "Group of colleagues collaborating in a modern office setting, engaging in a discussion around a laptop",
              },
              {
                id: "soc2-hitrust-simultaneous-audits",
                title:
                  "The Pros and Cons of Undergoing SOC 2 Type II and HITRUST Audits Simultaneously",
                excerpt:
                  "Strategic analysis of conducting multiple compliance audits concurrently and optimization strategies.",
                date: "December 6, 2022",
                readTime: "7 min read",
                author: "Com-Sec Compliance Team",
                category: "Audit Strategy",
                categoryColor: "bg-violet-100 text-violet-800",
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F0ba8b9be18d047ca8e1a6f29e75eea99%2F78d342b17a2744d483d13c6a57bb59e3?format=webp&width=800",
                imageAlt:
                  "Pros and cons comparison analysis with plus and minus evaluation for strategic audit decision making",
              },
              {
                id: "engaging-vciso-step-by-step",
                title:
                  "The Order of Operations for Engaging a vCISO: A Step-by-Step Guide",
                excerpt:
                  "Comprehensive guide to successfully engaging and working with a virtual Chief Information Security Officer.",
                date: "November 1, 2022",
                readTime: "5 min read",
                author: "Com-Sec Leadership",
                category: "Leadership",
                categoryColor: "bg-purple-100 text-purple-800",
                image:
                  "https://images.pexels.com/photos/32866728/pexels-photo-32866728.jpeg",
                imageAlt:
                  "Group of colleagues collaborating in a modern office setting, engaging in a discussion around a laptop",
              },
              {
                id: "cloud-security-best-practices-2024",
                title:
                  "Cloud Security Best Practices for 2024: A Complete Guide",
                excerpt:
                  "Essential cloud security strategies and best practices to protect your organization's data and applications in the cloud.",
                date: "January 15, 2024",
                readTime: "7 min read",
                author: "Com-Sec Cloud Team",
                category: "Cloud Security",
                categoryColor: "bg-sky-100 text-sky-800",
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F0ba8b9be18d047ca8e1a6f29e75eea99%2F44b38bc0191e4219bab6a1573a54dd5e?format=webp&width=800",
                imageAlt:
                  "Cloud security library with data protection, cybersecurity teams managing digital information security",
              },
              {
                id: "zero-trust-architecture-implementation",
                title:
                  "Zero Trust Architecture: Implementation Guide for Modern Organizations",
                excerpt:
                  "Step-by-step guide to implementing Zero Trust security model to enhance your organization's cybersecurity posture.",
                date: "March 22, 2024",
                readTime: "8 min read",
                author: "Com-Sec Architecture Team",
                category: "Network Security",
                categoryColor: "bg-red-100 text-red-800",
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F0ba8b9be18d047ca8e1a6f29e75eea99%2F0cb8e13e6a68437d959e1c44845f5883?format=webp&width=800",
                imageAlt:
                  "Mobile security application with authentication and zero trust network security architecture",
              },
            ]
              .filter((article) => {
                const q = searchQuery.trim().toLowerCase();
                if (!q) return true;
                const hay = `${article.title} ${article.excerpt} ${article.category}`.toLowerCase();
                const norm = (s: string) => s.replace(/\s|-/g, "");
                return hay.includes(q) || norm(hay).includes(norm(q));
              })
              .slice(0, visibleArticles)
              .map((article, index) => (
                <Link
                  key={index}
                  to={`/blog/${article.id}`}
                  data-article-title={article.title}
                  data-article-category={article.category}
                  data-article-excerpt={article.excerpt}
                  id={`article-${article.id}`}
                >
                  <Card
                    className={`overflow-hidden transition-all duration-500 group cursor-pointer transform hover:scale-[1.02] hover:shadow-2xl shimmer-effect ${
                      article.featured
                        ? "ring-2 ring-blue-500/20 shadow-lg featured-glow"
                        : ""
                    }`}
                  >
                    {/* Blog Image with Crazy Effects */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.imageAlt}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/40 transition-all duration-500"></div>

                      {/* Floating Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border border-white/20 category-pulse ${article.categoryColor} bg-opacity-90`}
                        >
                          {article.category}
                        </span>
                      </div>

                      {/* Featured Badge */}
                      {article.featured && (
                        <div className="absolute top-4 right-4">
                          <span className="px-2 py-1 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full text-xs font-bold animate-pulse shadow-lg">
                            Featured ⭐
                          </span>
                        </div>
                      )}

                      {/* Reading Time with Glow Effect */}
                      <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1">
                        <Clock className="h-3 w-3 text-white animate-pulse" />
                        <span className="text-white text-xs font-medium read-time-glow">
                          {article.readTime}
                        </span>
                      </div>

                      {/* Animated Scanning Line */}
                      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>

                      {/* Floating Particles */}
                      <div className="absolute top-6 right-6 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-0 group-hover:opacity-60 transition-opacity"></div>
                      <div className="absolute bottom-8 left-6 w-1 h-1 bg-white rounded-full animate-bounce opacity-0 group-hover:opacity-80 transition-opacity delay-300"></div>
                    </div>

                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg text-primary mb-3 group-hover:text-blue-600 transition-colors leading-tight line-clamp-2 group-hover:animate-pulse">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-3">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {article.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            {article.author}
                          </div>
                        </div>
                        <ArrowRight className="h-4 w-4 text-blue-600 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>

          <div className="text-center mt-12">
            {showLoadMore ? (
              <div>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={handleLoadMore}
                  className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  Load More Articles
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <p className="text-sm text-gray-500 mt-3">
                  Showing {visibleArticles} of 20 articles
                </p>
              </div>
            ) : (
              <div>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={handleShowLess}
                  className="border-gray-500 text-gray-600 hover:bg-gray-500 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  Show Less Articles
                  <ChevronRight className="ml-2 h-4 w-4 rotate-90" />
                </Button>
                <p className="text-sm text-gray-500 mt-3">
                  Showing all 20 articles - Click to show less
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
