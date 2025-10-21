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
  Shield,
  Lock,
  Search,
  FileCheck,
  Users,
  CheckCircle,
  ChevronRight,
  Star,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Enhanced Hero Section with Advanced Animations */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-primary via-blue-800 to-blue-900 text-white relative overflow-hidden">
        {/* Enhanced animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full animate-pulse-slow"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-white/5 rounded-full animate-bounce-slow"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-accent/20 rounded-full animate-ping-slow"></div>
          <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-cyan-300/10 rounded-full animate-float"></div>
          <div className="absolute bottom-1/3 left-1/3 w-12 h-12 bg-white/10 rounded-full animate-wiggle"></div>

          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent animate-shimmer"></div>

          {/* Floating particles */}
          <div className="absolute top-1/4 left-1/5 w-2 h-2 bg-accent rounded-full animate-float-particle"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white rounded-full animate-float-particle animation-delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-cyan-400/30 rounded-full animate-float-particle animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* Enhanced compliance badges with glow effect */}
            <div className="mb-8">
              <div className="inline-flex items-center bg-accent/20 rounded-full px-6 py-2 text-accent font-medium text-sm animate-fade-in-up glow-effect border border-accent/30">
                <Sparkles className="h-4 w-4 mr-2 animate-spin-slow" />
                SOC 2 • HIPAA • ISO 27001 • GDPR • CCPA • PCI-DSS • NIST 800-53
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-slide-up">
              Compliance Meets
              <span className="block text-accent animate-glow-text bg-gradient-to-r from-accent to-orange-500 bg-clip-text text-transparent">
                Confidence.
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto animate-slide-up animation-delay-300">
              Your trusted partner for comprehensive cybersecurity services. We
              specialize in security audits, SOC 2 compliance, penetration
              testing, and cloud security solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animation-delay-500">
              <Button
                size="lg"
                className="bg-gradient-to-r from-accent to-orange-600 hover:from-accent/80 hover:to-orange-500 text-white transform hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-accent/25 animate-pulse-button"
                asChild
              >
                <Link to="/contact">
                  Start Free Audit Review
                  <ChevronRight className="ml-2 h-5 w-5 animate-bounce-x" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary backdrop-blur-sm transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl glow-button"
                asChild
              >
                <Link to="/services">
                  <span className="relative">
                    Learn More
                    <span className="absolute inset-0 bg-white/20 rounded opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
                  </span>
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Preview Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 animate-fade-in">
              Our Cybersecurity Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in animation-delay-200">
              Comprehensive security solutions tailored to protect your business
              and ensure compliance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Shield,
                title: "SOC 2 Readiness",
                description:
                  "Complete SOC 2 compliance preparation and audit support to meet industry standards",
                color: "text-blue-600",
                bgGradient: "from-blue-50 to-blue-100",
                hoverGradient: "hover:from-blue-100 hover:to-blue-200",
                delay: "animation-delay-100",
              },
              {
                icon: Search,
                title: "Penetration Testing",
                description:
                  "Comprehensive security assessments to identify vulnerabilities before attackers do",
                color: "text-red-600",
                bgGradient: "from-red-50 to-red-100",
                hoverGradient: "hover:from-red-100 hover:to-red-200",
                delay: "animation-delay-200",
              },
              {
                icon: Lock,
                title: "Cloud Security",
                description:
                  "Secure your cloud infrastructure with best practices and continuous monitoring",
                color: "text-cyan-600",
                bgGradient: "from-cyan-50 to-cyan-100",
                hoverGradient: "hover:from-cyan-100 hover:to-cyan-200",
                delay: "animation-delay-300",
              },
              {
                icon: FileCheck,
                title: "Security Policy Audits",
                description:
                  "Review and strengthen your security policies to align with regulatory requirements",
                color: "text-green-600",
                bgGradient: "from-green-50 to-green-100",
                hoverGradient: "hover:from-green-100 hover:to-green-200",
                delay: "animation-delay-400",
              },
              {
                icon: Users,
                title: "Risk Management",
                description:
                  "Identify, assess, and mitigate security risks across your entire organization",
                color: "text-purple-600",
                bgGradient: "from-purple-50 to-purple-100",
                hoverGradient: "hover:from-purple-100 hover:to-purple-200",
                delay: "animation-delay-500",
              },
              {
                icon: CheckCircle,
                title: "Compliance Consulting",
                description:
                  "Expert guidance on meeting various compliance frameworks and regulations",
                color: "text-orange-600",
                bgGradient: "from-orange-50 to-orange-100",
                hoverGradient: "hover:from-orange-100 hover:to-orange-200",
                delay: "animation-delay-600",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className={`group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 animate-slide-up ${service.delay} bg-gradient-to-br ${service.bgGradient} ${service.hoverGradient} border-0 shadow-lg hover:shadow-accent/10`}
              >
                <CardHeader>
                  <service.icon
                    className={`h-12 w-12 ${service.color} mb-4 group-hover:scale-125 group-hover:animate-bounce transition-all duration-300`}
                  />
                  <CardTitle className="group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl glow-button-primary"
              asChild
            >
              <Link to="/services">
                <span className="relative">
                  View All Services
                  <span className="absolute inset-0 bg-primary/10 rounded opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
                </span>
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced About Preview Section */}
      <section className="py-20 bg-gradient-to-br from-accent/5 via-orange-50 to-accent/10 relative overflow-hidden">
        {/* Animated background shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-accent/5 rounded-full animate-pulse-slow"></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-orange-200/20 rounded-full animate-float"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Choose Com-Sec?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                With over 15 years of combined experience in information
                security and compliance, our team brings deep expertise in
                protecting businesses from cyber threats while ensuring
                regulatory compliance.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We've helped over 200+ companies achieve their security goals,
                from startups preparing for their first SOC 2 audit to
                enterprise organizations implementing comprehensive security
                programs.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 bg-white/50 rounded-lg backdrop-blur-sm hover:bg-white/70 transition-all duration-300 transform hover:scale-105">
                  <div className="text-3xl font-bold text-accent animate-counter">
                    200+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Companies Protected
                  </div>
                </div>
                <div className="text-center p-4 bg-white/50 rounded-lg backdrop-blur-sm hover:bg-white/70 transition-all duration-300 transform hover:scale-105">
                  <div className="text-3xl font-bold text-accent animate-counter animation-delay-200">
                    15+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Years Experience
                  </div>
                </div>
              </div>
              <Button
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl glow-button-primary"
                asChild
              >
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
            </div>
            <div className="flex justify-center animate-slide-in-right">
              <div className="bg-gradient-to-br from-primary to-blue-600 rounded-2xl p-8 text-white transform hover:scale-105 hover:rotate-2 transition-all duration-500 shadow-2xl hover:shadow-primary/25">
                <Shield className="h-32 w-32 mx-auto opacity-20 animate-pulse-slow" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Preview */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 animate-fade-in">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground animate-fade-in animation-delay-200">
              Trusted by companies across industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                quote:
                  "Com-Sec was instrumental in helping us achieve SOC 2 compliance ahead of schedule. Their expertise made the process seamless.",
                name: "Sarah Johnson",
                title: "CTO, TechStart Inc.",
                delay: "animation-delay-100",
              },
              {
                quote:
                  "The penetration testing revealed critical vulnerabilities we never knew existed. Com-Sec's approach saved us from potential breaches.",
                name: "Michael Chen",
                title: "CISO, HealthTech Solutions",
                delay: "animation-delay-200",
              },
              {
                quote:
                  "Outstanding cloud security implementation. Their team understood our requirements and delivered beyond expectations.",
                name: "Emily Rodriguez",
                title: "VP Engineering, CloudCorp",
                delay: "animation-delay-300",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className={`hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1 animate-slide-up ${testimonial.delay} bg-gradient-to-br from-gray-50 to-white border-0 shadow-lg`}
              >
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-accent text-accent animate-twinkle"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground mb-4 group-hover:text-gray-700 transition-colors duration-300">
                    "{testimonial.quote}"
                  </blockquote>
                  <footer>
                    <div className="font-semibold text-primary">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.title}
                    </div>
                  </footer>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl glow-button-primary"
              asChild
            >
              <Link to="/testimonials">
                Read All Testimonials
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-br from-accent/10 via-orange-50 to-accent/5 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-accent/10 rounded-full animate-float"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-orange-200/30 rounded-full animate-bounce-slow"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-accent/5 to-orange-200/5 rounded-full animate-pulse-slow"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 animate-fade-in">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in animation-delay-200">
            Let's discuss your cybersecurity needs and create a customized
            solution for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-400">
            <Button
              size="lg"
              className="bg-gradient-to-r from-accent to-orange-600 hover:from-accent/80 hover:to-orange-500 transform hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-accent/25 animate-pulse-button"
              asChild
            >
              <a
                href="https://calendly.com/bojan-com-sec"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Free Consultation
                <ChevronRight className="ml-2 h-5 w-5 animate-bounce-x" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl glow-button-accent"
              asChild
            >
              <Link to="/services">
                View Our Services
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trusted by Leading Companies - Amazing Client Showcase */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400/10 rounded-full animate-pulse-slow"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-purple-400/10 rounded-full animate-bounce-slow"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white/5 rounded-full animate-ping-slow"></div>
          <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-blue-300/10 rounded-full animate-float"></div>
          <div className="absolute bottom-1/3 left-2/3 w-12 h-12 bg-cyan-400/20 rounded-full animate-wiggle"></div>
          <div className="absolute top-1/4 left-3/4 w-6 h-6 bg-accent/30 rounded-full animate-twinkle"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-accent/20 rounded-full px-6 py-2 text-accent font-medium text-sm mb-8 glow-effect">
              <Star className="h-4 w-4 mr-2 animate-spin-slow" />
              Trusted by Innovation Leaders
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent animate-glow-text">
              Securing Tomorrow's Companies
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto animate-fade-in-up">
              From healthcare innovators to AI pioneers, we've secured
              organizations across every industry
            </p>
          </div>

          {/* Floating Client Cards with Crazy Animations */}
          <div className="relative h-96 mb-16 overflow-hidden">
            {[
              {
                name: "RaveHealth",
                sector: "Healthcare",
                color: "from-green-400 to-emerald-500",
                position: { x: 5, y: 10 },
                delay: 0,
              },
              {
                name: "GPTZero",
                sector: "AI & ML",
                color: "from-blue-400 to-cyan-500",
                position: { x: 75, y: 20 },
                delay: 0.5,
              },
              {
                name: "VhedaHealth",
                sector: "MedTech",
                color: "from-purple-400 to-pink-500",
                position: { x: 25, y: 60 },
                delay: 1,
              },
              {
                name: "CloseKnit",
                sector: "Social",
                color: "from-orange-400 to-red-500",
                position: { x: 60, y: 5 },
                delay: 1.5,
              },
              {
                name: "Castellum.ai",
                sector: "AI Security",
                color: "from-indigo-400 to-purple-500",
                position: { x: 10, y: 45 },
                delay: 2,
              },
              {
                name: "CropTrak",
                sector: "AgTech",
                color: "from-green-400 to-lime-500",
                position: { x: 80, y: 65 },
                delay: 2.5,
              },
              {
                name: "NeuralWave",
                sector: "HealthTech",
                color: "from-cyan-400 to-blue-500",
                position: { x: 45, y: 30 },
                delay: 3,
              },
              {
                name: "MentorPro",
                sector: "EdTech",
                color: "from-yellow-400 to-orange-500",
                position: { x: 20, y: 80 },
                delay: 3.5,
              },
              {
                name: "GloveBox",
                sector: "Automotive",
                color: "from-gray-400 to-slate-500",
                position: { x: 65, y: 40 },
                delay: 4,
              },
              {
                name: "Cycloid",
                sector: "DevOps",
                color: "from-teal-400 to-cyan-500",
                position: { x: 35, y: 15 },
                delay: 4.5,
              },
              {
                name: "Farlinium",
                sector: "Enterprise",
                color: "from-pink-400 to-rose-500",
                position: { x: 85, y: 50 },
                delay: 5,
              },
              {
                name: "Tangenesis",
                sector: "Biotech",
                color: "from-violet-400 to-purple-500",
                position: { x: 15, y: 25 },
                delay: 5.5,
              },
            ].map((client, index) => (
              <div
                key={client.name}
                className="absolute transform transition-all duration-1000 ease-in-out animate-float"
                style={{
                  left: `${client.position.x}%`,
                  top: `${client.position.y}%`,
                  animationDelay: `${client.delay}s`,
                  animationDuration: `${4 + (index % 3)}s`,
                }}
              >
                <div
                  className={`bg-gradient-to-br ${client.color} p-4 md:p-6 rounded-2xl shadow-2xl transform hover:scale-125 hover:rotate-6 transition-all duration-500 cursor-pointer group backdrop-blur-sm border border-white/20 hover:border-white/40`}
                >
                  <div className="text-white relative z-10">
                    <h3 className="font-bold text-sm md:text-lg mb-1 group-hover:animate-bounce-x">
                      {client.name}
                    </h3>
                    <p className="text-white/90 text-xs md:text-sm font-medium">
                      {client.sector}
                    </p>
                  </div>
                  {/* Dynamic glow effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${client.color} rounded-2xl opacity-0 group-hover:opacity-30 transition-all duration-500 blur-xl transform group-hover:scale-150`}
                  ></div>
                  {/* Sparkle effect on hover */}
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Advanced Scrolling Ticker with Multiple Layers */}
          <div className="relative mb-16">
            <div className="text-center mb-8">
              <p className="text-white/60 text-sm uppercase tracking-wide font-semibold animate-pulse">
                🚀 Securing Innovation Across Industries 🚀
              </p>
            </div>

            {/* First ticker - left to right */}
            <div className="overflow-hidden mb-4">
              <div className="flex animate-scroll-right whitespace-nowrap">
                {[
                  "RaveHealth",
                  "GPTZero",
                  "VhedaHealth",
                  "CloseKnit",
                  "Castellum.ai",
                  "CropTrak",
                  "NeuralWave",
                  "MentorPro",
                ].map((client, index) => (
                  <span
                    key={`right-${index}`}
                    className="mx-6 text-xl md:text-3xl font-bold text-white/30 hover:text-accent hover:scale-110 transition-all duration-300 cursor-pointer transform hover:rotate-3"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {client}
                  </span>
                ))}
                {[
                  "RaveHealth",
                  "GPTZero",
                  "VhedaHealth",
                  "CloseKnit",
                  "Casellum.ai",
                  "CropTrak",
                  "NeuroWave",
                  "MentorPro",
                ].map((client, index) => (
                  <span
                    key={`right-dup-${index}`}
                    className="mx-6 text-xl md:text-3xl font-bold text-white/30 hover:text-accent hover:scale-110 transition-all duration-300 cursor-pointer transform hover:rotate-3"
                  >
                    {client}
                  </span>
                ))}
              </div>
            </div>

            {/* Second ticker - right to left */}
            <div className="overflow-hidden">
              <div className="flex animate-scroll-left whitespace-nowrap">
                {[
                  "GloveBox",
                  "Cycloid",
                  "Farlinium",
                  "Tangenesis",
                  "CaryHealth",
                  "Cicerai",
                  "Xchart",
                  "ThePublicInterestCompany",
                  "Conover",
                ].map((client, index) => (
                  <span
                    key={`left-${index}`}
                    className="mx-6 text-lg md:text-2xl font-bold text-white/25 hover:text-purple-300 hover:scale-110 transition-all duration-300 cursor-pointer transform hover:-rotate-3"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {client}
                  </span>
                ))}
                {[
                  "GloveBox",
                  "Cycloid",
                  "Farlinium",
                  "Tangenesis",
                  "CaryHealth",
                  "Cicerai",
                  "Xchart",
                  "ThePublicInterestCompany",
                  "Conover",
                ].map((client, index) => (
                  <span
                    key={`left-dup-${index}`}
                    className="mx-6 text-lg md:text-2xl font-bold text-white/25 hover:text-purple-300 hover:scale-110 transition-all duration-300 cursor-pointer transform hover:-rotate-3"
                  >
                    {client}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Impressive Stats with Counters */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-accent/50 transition-all duration-300 transform hover:scale-105 group">
              <div className="text-4xl font-bold text-accent mb-2 animate-counter group-hover:animate-bounce">
                17+
              </div>
              <div className="text-white/80 text-sm font-medium">
                Trusted Partners
              </div>
              <div className="w-full h-1 bg-white/20 rounded-full mt-3 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-accent to-orange-500 rounded-full animate-shimmer"></div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-green-400/50 transition-all duration-300 transform hover:scale-105 group">
              <div className="text-4xl font-bold text-green-400 mb-2 animate-counter group-hover:animate-bounce animation-delay-300">
                100%
              </div>
              <div className="text-white/80 text-sm font-medium">
                Success Rate
              </div>
              <div className="w-full h-1 bg-white/20 rounded-full mt-3 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-shimmer animation-delay-500"></div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105 group">
              <div className="text-4xl font-bold text-blue-400 mb-2 animate-counter group-hover:animate-bounce animation-delay-600">
                8+
              </div>
              <div className="text-white/80 text-sm font-medium">
                Industries Served
              </div>
              <div className="w-full h-1 bg-white/20 rounded-full mt-3 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full animate-shimmer animation-delay-1000"></div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105 group">
              <div className="text-4xl font-bold text-purple-400 mb-2 animate-counter group-hover:animate-bounce animation-delay-900">
                24/7
              </div>
              <div className="text-white/80 text-sm font-medium">
                Security Support
              </div>
              <div className="w-full h-1 bg-white/20 rounded-full mt-3 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-shimmer animation-delay-1500"></div>
              </div>
            </div>
          </div>

          {/* Call to Action with Gradient Effect */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-accent/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Ready to Join Our Success Stories?
              </h3>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                Let's secure your innovation and build confidence in your
                cybersecurity posture.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-accent to-orange-600 hover:from-accent/80 hover:to-orange-500 text-white transform hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-accent/25 animate-pulse-button"
                asChild
              >
                <Link to="/contact">
                  Start Your Security Journey
                  <ChevronRight className="ml-2 h-5 w-5 animate-bounce-x" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );


        @keyframes floatParticle {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-10px) translateX(5px);
          }
          66% {
            transform: translateY(-5px) translateX(-3px);
          }
        }

        @keyframes wiggle {
          0%,
          100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(1deg);
          }
          75% {
            transform: rotate(-1deg);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes glowText {
          0%,
          100% {
            text-shadow: 0 0 20px rgba(245, 121, 59, 0.5);
          }
          50% {
            text-shadow: 0 0 30px rgba(245, 121, 59, 0.8);
          }
        }

        @keyframes bounceX {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(5px);
          }
        }

        @keyframes pulseButton {
          0%,
          100% {
            box-shadow: 0 0 0 0 rgba(245, 121, 59, 0.7);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(245, 121, 59, 0);
          }
        }

        @keyframes pulseSlow {
          0%,
          100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes bounceSlow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pingSlow {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          75%,
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes twinkle {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.1);
          }
        }

        @keyframes counter {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }

        .animate-slide-up {
          animation: slideUp 1s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slideInLeft 1s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slideInRight 1s ease-out forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-particle {
          animation: floatParticle 4s ease-in-out infinite;
        }

        .animate-wiggle {
          animation: wiggle 2s ease-in-out infinite;
        }

        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }

        .animate-glow-text {
          animation: glowText 2s ease-in-out infinite;
        }

        .animate-bounce-x {
          animation: bounceX 1s ease-in-out infinite;
        }

        .animate-pulse-button {
          animation: pulseButton 2s infinite;
        }

        .animate-pulse-slow {
          animation: pulseSlow 4s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounceSlow 3s ease-in-out infinite;
        }

        .animate-ping-slow {
          animation: pingSlow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .animate-spin-slow {
          animation: spinSlow 3s linear infinite;
        }

        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }

        .animate-counter {
          animation: counter 1s ease-out forwards;
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }

        .glow-effect {
          box-shadow: 0 0 20px rgba(245, 121, 59, 0.3);
        }

        .glow-button {
          transition: all 0.3s ease;
        }

        .glow-button:hover {
          box-shadow: 0 0 30px rgba(255, 255, 255, 0.5);
        }

        .glow-button-primary:hover {
          box-shadow: 0 0 30px rgba(10, 45, 81, 0.5);
        }

        .glow-button-accent:hover {
          box-shadow: 0 0 30px rgba(245, 121, 59, 0.5);
        }

        .animation-delay-100 {
          animation-delay: 0.1s;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .group:hover .group-hover\\:translate-x-1 {
          transform: translateX(0.25rem);
        }

        .group:hover .group-hover\\:translate-x-2 {
          transform: translateX(0.5rem);
        }
      `}</style>
    </div>
  );
}