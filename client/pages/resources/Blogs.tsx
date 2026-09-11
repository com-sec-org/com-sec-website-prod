import { useState } from "react";
import { Helmet } from "react-helmet";

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

import { allArticles } from "@shared/blog-posts";

export default function Blogs() {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const [visibleArticles, setVisibleArticles] = useState(9);
  const [showLoadMore, setShowLoadMore] = useState(true);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setVisibleArticles(allArticles.length);
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
        setVisibleArticles(allArticles.length);
      }
    }
  };

  const handleLoadMore = () => {
    const newVisibleCount = visibleArticles + 6;
    setVisibleArticles(newVisibleCount);
    // Hide Load More button if we've shown all articles
    if (newVisibleCount >= allArticles.length) {
      setShowLoadMore(false);
    }
  };

  const handleShowLess = () => {
    setVisibleArticles(9);
    setShowLoadMore(true);
  };

  return (
<>
<Helmet>
  {/* Basic SEO */}
  <title>Cybersecurity Blog | Com-Sec Insights</title>

  <meta
    name="description"
    content="Stay updated with cybersecurity insights, SOC 2 compliance tips, ISO 27001 guides, penetration testing updates, cloud security advice, and best practices from Com-Sec experts."
  />

  <meta
    name="keywords"
    content="cybersecurity blog, SOC 2 blog, ISO 27001 guides, penetration testing blog, cloud security updates, compliance best practices, Com-Sec blog, security insights"
  />

  <link rel="canonical" href="https://com-sec.io/blog" />

  <meta name="robots" content="index, follow" />
  <meta name="author" content="Com-Sec" />
  <meta name="publisher" content="Com-Sec" />
  <meta charSet="utf-8" />
  <meta name="language" content="English" />
  </Helmet>

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

          <Link to="/blog/how-to-choose-a-soc-2-auditor">
            <Card className="hover:shadow-2xl transition-all duration-500 border-0 shadow-xl overflow-hidden group">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="bg-gradient-to-br from-sky-900 via-blue-800 to-slate-900 p-8 lg:p-12 text-white">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-sky-400/20 text-sky-200 px-3 py-1 rounded-full text-sm font-medium animate-pulse">
                      Featured
                    </span>
                    <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                      🛡️ Compliance
                    </span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4 leading-tight group-hover:text-sky-200 transition-colors">
                    How to Choose a SOC 2 Auditor Without Overpaying or Getting Burned
                  </h3>
                  <p className="text-white/90 mb-6 text-lg leading-relaxed">
                    A founder gets two SOC 2 audit quotes. One is $30,000 and the other is $12,000. Here's how to tell a legitimate low-cost auditor from one cutting corners.
                  </p>
                  <div className="flex items-center gap-4 text-white/80 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">August 03 2026</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">10 min read</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span className="text-sm">Farbod Fakhrai</span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="border-white bg-white/10 text-white hover:bg-white hover:text-sky-900 group-hover:scale-105 transition-transform backdrop-blur-sm font-semibold"
                  >
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                <div className="relative overflow-hidden">
                  <img
                    src="/images/blog-images/how-to-choose-a-soc-2-auditor.png"
                    alt="How to Choose a SOC 2 Auditor Without Overpaying or Getting Burned"
                    className="w-full h-full object-cover object-left group-hover:scale-105 transition-transform duration-500"
                  />
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
            {allArticles
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
                      <div className="absolute top-4 right-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border border-white/20 category-pulse ${article.categoryColor} bg-opacity-90`}
                        >
                          {article.category}
                        </span>
                      </div>

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
                  Showing {visibleArticles} of {allArticles.length} articles
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
                  Showing all {allArticles.length} articles - Click to show less
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
}
