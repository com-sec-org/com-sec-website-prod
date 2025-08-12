import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Star,
  Quote,
  ChevronRight,
  ArrowRight,
  ChevronLeft,
  Sparkles,
  Shield,
  Award,
  Heart,
  ThumbsUp,
  Users,
} from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    title: "Outstanding support!",
    content:
      "Com Sec has been an invaluable partner in securing our systems. Their team is knowledgeable, responsive, and always ahead of emerging threats. They took the time to understand our unique needs and delivered tailored solutions that gave us peace of mind. What stands out most is their exceptional customer service. They're always accessible and eager to help, whether it's answering questions or guiding us through best practices. We highly recommend them to anyone looking for a trusted partner.",
    author: "IT Director",
    date: "Jan 21, 2025",
    initials: "IT",
    industry: "Technology",
    rating: 5,
  },
  {
    title: "Amazing partners in your SOC 2 accreditation journey",
    content:
      "Farbod and the Com-Sec team have been incredible partners. As an early-stage startup, we were looking for a provider that could accelerate the establishment and maintenance of our controls and security posture, and the Com-Sec team played a key role in the attainment of our accreditation.",
    author: "Startup CEO",
    date: "May 14, 2025",
    initials: "SC",
    industry: "Startup",
    rating: 5,
  },
  {
    title: "Com-Sec is a great company to partner with",
    content:
      "We chose to work with Com-Sec to help us obtain our SOC2 Type 2 certification. I highly recommend working with this company. They were in constant communication with us through the entire process and made it very easy to understand. They took care of the Drata side of things so we could focus on updating our system to become fully compliant in less than 3 months.",
    author: "Business Owner",
    date: "Sep 09, 2024",
    initials: "BO",
    industry: "Business",
    rating: 5,
  },
  {
    title: "Wonderful experience, would use again",
    content:
      "Com-Sec was great! They did a very thorough pen testing for us. In healthcare, we have to be extremely diligent with cybersecurity. Farbod and his team allowed us to make sure we can provide secure service to our patients. Thank you!",
    author: "Healthcare Executive",
    date: "Apr 06, 2024",
    initials: "HE",
    industry: "Healthcare",
    rating: 5,
  },
  {
    title: "Put our security, compliance, and IT support on auto-pilot",
    content:
      "Com-sec's services are an absolute game-changer for businesses looking to offload their IT support, security, and compliance concerns. Their approach has been a great experience, allowing us to focus on our core operations without the constant worry about IT-related issues. The peace of mind that comes from not having to think about IT support, security, or compliance is invaluable.",
    author: "Managing Director",
    date: "Apr 02, 2024",
    initials: "MD",
    industry: "Management",
    rating: 5,
  },
  {
    title: "Great pen test provider!",
    content:
      "Very thorough testing, and great communication. Highly recommended!",
    author: "Security Manager",
    date: "Apr 01, 2024",
    initials: "SM",
    industry: "Security",
    rating: 5,
  },
  {
    title: "Great experience",
    content:
      "Worked with them to become SOC 2 compliant. Great turn around and easy to work with.",
    author: "Compliance Lead",
    date: "Oct 30, 2023",
    initials: "CL",
    industry: "Compliance",
    rating: 5,
  },
  {
    title: "Outstanding service for our first Pentest",
    content:
      "Com-Sec has been fantastic. They conducted a thorough pen test tailored to our needs, simplified compliance, improved our security, and did it all at a great price. Led by Farbod, their professional and adaptable team has been crucial. Highly recommended for ISO 27001.",
    author: "Compliance Director",
    date: "Oct 23, 2023",
    initials: "CD",
    industry: "Compliance",
    rating: 5,
  },
  {
    title: "Well-executed, fairly priced, and professional",
    content:
      "We hired Com-Sec for a pentest. They did everything they said they would, which... is surprisingly rare. Really enjoyed working with them, and they're thoughtful and helpful in discussing the finding and working through remediation efforts with us.",
    author: "Tech Lead",
    date: "Oct 02, 2023",
    initials: "TL",
    industry: "Technology",
    rating: 5,
  },
  {
    title: "Excellent service and expertise",
    content:
      "I've had the pleasure of working with the Com-Sec team for over a year. Each team member takes ownership and closes the loop on all their tasks. They assisted in updating and revamping our organizations outdated practices with security and compliance in mind, giving me peace of mind. Highly recommend",
    author: "Security Lead",
    date: "Jun 14, 2023",
    initials: "SL",
    industry: "Security",
    rating: 5,
  },
  {
    title: "Wonderful experience working with Com Sec",
    content:
      "After researching and meeting with several security companies, we decided to go with Com-Sec because of their customer-first approach —and we are glad we did! They heard our needs and created a unique plan designed to meet our specific security goals. They made the SOC2 process less overwhelming and improved our security posture overall.",
    author: "Operations Manager",
    date: "Jun 13, 2023",
    initials: "OM",
    industry: "Operations",
    rating: 5,
  },
];

function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Removed auto-playing functionality to keep testimonials fixed

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className="relative max-w-5xl mx-auto perspective-1000"
      onMouseEnter={() => {
        setIsAutoPlaying(false);
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsAutoPlaying(true);
        setIsHovered(false);
      }}
    >
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-4 h-4 bg-blue-400 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-20 right-20 w-3 h-3 bg-purple-400 rounded-full animate-float-delayed opacity-60"></div>
        <div className="absolute bottom-20 left-20 w-2 h-2 bg-pink-400 rounded-full animate-float-slow opacity-60"></div>
        <div className="absolute bottom-10 right-10 w-5 h-5 bg-indigo-400 rounded-full animate-bounce opacity-40"></div>
        <div className="absolute top-1/2 left-5 w-1 h-1 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-5 w-1 h-1 bg-green-400 rounded-full animate-ping"></div>
      </div>

      {/* Navigation Buttons with Advanced Effects */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 group bg-gradient-to-r from-white to-gray-50 hover:from-blue-50 hover:to-indigo-50 shadow-xl rounded-full p-4 transition-all duration-500 hover:scale-125 hover:shadow-2xl border border-white/20 backdrop-blur-sm hover:rotate-[-5deg]"
      >
        <ChevronLeft className="h-6 w-6 text-primary group-hover:text-blue-600 transition-colors duration-300 group-hover:scale-110" />
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 group bg-gradient-to-r from-white to-gray-50 hover:from-blue-50 hover:to-indigo-50 shadow-xl rounded-full p-4 transition-all duration-500 hover:scale-125 hover:shadow-2xl border border-white/20 backdrop-blur-sm hover:rotate-[5deg]"
      >
        <ChevronRight className="h-6 w-6 text-primary group-hover:text-blue-600 transition-colors duration-300 group-hover:scale-110" />
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
      </button>

      {/* Carousel Container with 3D Effect */}
      <div className="overflow-hidden rounded-3xl shadow-2xl">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ 
            transform: `translateX(-${currentIndex * 100}%) rotateY(${isHovered ? '2deg' : '0deg'})`,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 px-6">
              <Card className={`mx-auto max-w-4xl bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 relative overflow-hidden group ${
                index === currentIndex ? 'scale-105 animate-glow' : 'scale-95 opacity-70'
              }`}>
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 via-purple-400/5 to-pink-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Floating Particles */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <Sparkles className="h-6 w-6 text-yellow-400 animate-pulse" />
                </div>
                <div className="absolute top-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                </div>
                <div className="absolute bottom-6 right-8 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-300">
                  <div className="w-1 h-1 bg-purple-400 rounded-full animate-bounce"></div>
                </div>

                <CardContent className="pt-10 pb-10 relative z-10">
                  {/* Industry Badge */}
                  <div className="absolute top-4 left-6">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border border-blue-200/50 backdrop-blur-sm">
                      <Shield className="h-3 w-3 mr-1" />
                      {testimonial.industry}
                    </span>
                  </div>

                  <Quote className="h-16 w-16 text-blue-400/30 mb-8 mx-auto group-hover:text-blue-500/50 transition-colors duration-500 group-hover:scale-110 group-hover:rotate-12" />
                  
                  {/* Rating Stars with Animation */}
                  <div className="flex justify-center mb-8">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-7 w-7 fill-yellow-400 text-yellow-400 mr-1 transition-all duration-300 hover:scale-125 hover:rotate-12 ${
                          index === currentIndex 
                            ? 'animate-sparkle' 
                            : ''
                        }`}
                        style={{ 
                          animationDelay: `${i * 100}ms`,
                          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                        }}
                      />
                    ))}
                  </div>

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-primary mb-6 group-hover:text-blue-600 transition-colors duration-300">
                      {testimonial.title}
                    </h3>
                    <blockquote className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto group-hover:text-gray-700 transition-colors duration-300 relative">
                      <span className="relative z-10">"{testimonial.content}"</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                    </blockquote>
                  </div>

                  <footer className="border-t border-gray-200/50 pt-8">
                    <div className="flex items-center justify-center group-hover:transform group-hover:scale-105 transition-transform duration-300">
                      <div className="relative">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary via-blue-600 to-purple-600 rounded-full flex items-center justify-center mr-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300 group-hover:animate-pulse">
                          <span className="text-white font-bold text-xl">
                            {testimonial.initials}
                          </span>
                        </div>
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <ThumbsUp className="h-3 w-3 text-white" />
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-primary text-xl group-hover:text-blue-600 transition-colors duration-300">
                          {testimonial.author}
                        </div>
                        <div className="text-sm text-muted-foreground mb-1">
                          {testimonial.date}
                        </div>
                        <div className="flex items-center justify-center">
                          <Award className="h-4 w-4 text-yellow-500 mr-1" />
                          <span className="text-xs text-yellow-600 font-medium">Verified Client</span>
                        </div>
                      </div>
                    </div>
                  </footer>
                </CardContent>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Dots Indicator */}
      <div className="flex justify-center mt-10 space-x-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative transition-all duration-300 group ${
              index === currentIndex
                ? "w-12 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg"
                : "w-4 h-4 bg-gray-300 hover:bg-gray-400 rounded-full"
            }`}
          >
            {index === currentIndex && (
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-50 animate-pulse"></div>
            )}
          </button>
        ))}
      </div>

      {/* Enhanced Progress Bar */}
      <div className="mt-8 w-full bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-full h-2 overflow-hidden shadow-inner">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-700 shadow-lg relative"
          style={{
            width: `${((currentIndex + 1) / testimonials.length) * 100}%`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent rounded-full animate-shimmer"></div>
        </div>
      </div>

      {/* Testimonial Counter */}
      <div className="text-center mt-6">
        <span className="text-sm text-gray-500 bg-white/80 px-4 py-2 rounded-full shadow-sm backdrop-blur-sm">
          {currentIndex + 1} of {testimonials.length} testimonials
        </span>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <Navigation />

      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        ></div>
        <div 
          className="absolute top-1/2 right-0 w-64 h-64 bg-gradient-to-r from-pink-400/10 to-orange-400/10 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        ></div>
      </div>

      {/* Hero Section with Parallax */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-primary via-blue-800 to-purple-900 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-gradient-x"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-8 h-8 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-6 h-6 bg-blue-300/20 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/4 w-4 h-4 bg-purple-300/20 rounded-full animate-float-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-white/5 rounded-full animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center bg-white/10 rounded-full px-6 py-3 text-white/90 font-medium mb-8 backdrop-blur-sm border border-white/20">
              <Heart className="h-5 w-5 mr-2 text-red-400 animate-pulse" />
              Loved by 50+ Companies
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent animate-fade-in">
              Client
              <span className="block text-yellow-400 animate-sparkle">Testimonials</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-4xl mx-auto leading-relaxed">
              Hear from businesses who trust Com-Sec to protect their digital
              assets and ensure compliance. Real stories, real results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="inline-flex items-center bg-yellow-400/20 rounded-full px-8 py-4 text-yellow-300 font-medium backdrop-blur-sm border border-yellow-400/30 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <div className="flex mr-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400 group-hover:animate-spin transition-transform duration-300" style={{ animationDelay: `${i * 100}ms` }} />
                  ))}
                </div>
                5.0 Star Rating
              </div>
              <div className="inline-flex items-center bg-green-400/20 rounded-full px-8 py-4 text-green-300 font-medium backdrop-blur-sm border border-green-400/30 shadow-lg">
                <Users className="h-6 w-6 mr-3 animate-pulse" />
                50+ Happy Clients
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center group">
                <div className="text-4xl font-bold text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
                <div className="text-white/80">Client Satisfaction</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
                <div className="text-white/80">Support Available</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">5+</div>
                <div className="text-white/80">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonials with Enhanced Effects */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover how we've transformed cybersecurity for industry leaders
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <Card className="relative transform hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl group overflow-hidden border-0 bg-gradient-to-br from-white to-blue-50/50">
              {/* Animated Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Floating Sparkles */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Sparkles className="h-6 w-6 text-yellow-400 animate-pulse" />
              </div>
              
              <CardContent className="pt-10 relative z-10">
                <Quote className="h-14 w-14 text-blue-400/30 mb-6 group-hover:text-blue-500/50 transition-colors duration-300 group-hover:scale-110 group-hover:rotate-12" />
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400 mr-1 group-hover:animate-spin transition-transform duration-300" style={{ animationDelay: `${i * 100}ms` }} />
                  ))}
                </div>
                <blockquote className="text-lg text-muted-foreground mb-8 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  "Amazing partners in your SOC 2 accreditation journey. Farbod
                  and the Com-Sec team have been incredible partners. As an
                  early-stage startup, we were looking for a provider that could
                  accelerate the establishment and maintenance of our controls
                  and security posture, and the Com-Sec team played a key role
                  in the attainment of our accreditation."
                </blockquote>
                <footer className="border-t pt-6">
                  <div className="flex items-center group-hover:transform group-hover:scale-105 transition-transform duration-300">
                    <div className="relative">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                        <span className="text-white font-bold text-lg">S</span>
                      </div>
                      <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-400 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ThumbsUp className="h-3 w-3 text-white" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-primary text-lg group-hover:text-blue-600 transition-colors duration-300">
                        Startup CEO
                      </div>
                      <div className="text-sm text-muted-foreground mb-1">
                        May 14, 2025
                      </div>
                      <div className="flex items-center">
                        <Award className="h-4 w-4 text-yellow-500 mr-1" />
                        <span className="text-xs text-yellow-600 font-medium">Verified Client</span>
                      </div>
                    </div>
                  </div>
                </footer>
              </CardContent>
              
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-lg border-2 border-transparent bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Card>

            <Card className="relative transform hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl group overflow-hidden border-0 bg-gradient-to-br from-white to-purple-50/50">
              {/* Animated Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Floating Sparkles */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Heart className="h-6 w-6 text-red-400 animate-pulse" />
              </div>
              
              <CardContent className="pt-10 relative z-10">
                <Quote className="h-14 w-14 text-purple-400/30 mb-6 group-hover:text-purple-500/50 transition-colors duration-300 group-hover:scale-110 group-hover:rotate-12" />
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400 mr-1 group-hover:animate-spin transition-transform duration-300" style={{ animationDelay: `${i * 100}ms` }} />
                  ))}
                </div>
                <blockquote className="text-lg text-muted-foreground mb-8 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  "Best Experience in Years. Although I have been a part of
                  attaining SOC in the past, this was my first time being fully
                  responsible for acquiring certification. Given the available
                  internal resources, this was a daunting task. Com-Sec stepped
                  in and took the weight off my shoulders. Their knowledge of
                  the process and requirements was immense. Where I didn't know
                  how to begin, they sailed through. I would never want to go
                  through the SOC process without them!"
                </blockquote>
                <footer className="border-t pt-6">
                  <div className="flex items-center group-hover:transform group-hover:scale-105 transition-transform duration-300">
                    <div className="relative">
                      <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                        <span className="text-white font-bold text-lg">C</span>
                      </div>
                      <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-400 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Award className="h-3 w-3 text-white" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-primary text-lg group-hover:text-purple-600 transition-colors duration-300">
                        Compliance Manager
                      </div>
                      <div className="text-sm text-muted-foreground mb-1">
                        Feb 21, 2025
                      </div>
                      <div className="flex items-center">
                        <Shield className="h-4 w-4 text-blue-500 mr-1" />
                        <span className="text-xs text-blue-600 font-medium">Security Expert</span>
                      </div>
                    </div>
                  </div>
                </footer>
              </CardContent>
              
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-lg border-2 border-transparent bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Card>
          </div>
        </div>
      </section>

      {/* All Testimonials Carousel */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-200/20 rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Trusted by companies across industries worldwide
            </p>
          </div>

          <TestimonialsCarousel />
        </div>
      </section>

      {/* Industry Stats with Enhanced Animation */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Serving Diverse Industries
            </h2>
            <p className="text-xl text-muted-foreground">
              Our clients span across multiple sectors globally
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group cursor-pointer">
              <div className="text-5xl font-bold text-blue-600 mb-3 group-hover:scale-125 transition-transform duration-500 group-hover:text-blue-700">40%</div>
              <div className="text-muted-foreground group-hover:text-blue-600 transition-colors duration-300">Healthcare</div>
              <div className="w-full h-1 bg-blue-200 rounded-full mt-2 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 w-[40%] rounded-full group-hover:animate-pulse"></div>
              </div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-5xl font-bold text-green-600 mb-3 group-hover:scale-125 transition-transform duration-500 group-hover:text-green-700">25%</div>
              <div className="text-muted-foreground group-hover:text-green-600 transition-colors duration-300">Financial Services</div>
              <div className="w-full h-1 bg-green-200 rounded-full mt-2 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-green-500 to-green-600 w-[25%] rounded-full group-hover:animate-pulse"></div>
              </div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-5xl font-bold text-purple-600 mb-3 group-hover:scale-125 transition-transform duration-500 group-hover:text-purple-700">20%</div>
              <div className="text-muted-foreground group-hover:text-purple-600 transition-colors duration-300">Technology</div>
              <div className="w-full h-1 bg-purple-200 rounded-full mt-2 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-purple-500 to-purple-600 w-[20%] rounded-full group-hover:animate-pulse"></div>
              </div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-5xl font-bold text-orange-600 mb-3 group-hover:scale-125 transition-transform duration-500 group-hover:text-orange-700">15%</div>
              <div className="text-muted-foreground group-hover:text-orange-600 transition-colors duration-300">Other Industries</div>
              <div className="w-full h-1 bg-orange-200 rounded-full mt-2 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-orange-500 to-orange-600 w-[15%] rounded-full group-hover:animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-blue-800 to-purple-900 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-gradient-x"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-6 h-6 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute top-20 right-20 w-8 h-8 bg-blue-300/20 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-10 left-1/3 w-4 h-4 bg-purple-300/20 rounded-full animate-float-slow"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            Join Our Satisfied Clients
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Ready to experience the Com-Sec difference? Let's start protecting
            your business today with industry-leading cybersecurity solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-400 hover:to-orange-500 text-white font-bold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group border-0"
            >
              Start Your Security Journey
              <ChevronRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" asChild className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary font-bold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group">
              <Link to="/contact" className="text-white hover:text-primary">
                Schedule a Call
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/70">
            <div className="flex items-center">
              <Award className="h-5 w-5 mr-2" />
              <span className="text-sm">Industry Leader</span>
            </div>
            <div className="flex items-center">
              <Users className="h-5 w-5 mr-2" />
              <span className="text-sm">50+ Clients</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes sparkle {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.2) rotate(180deg); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.5); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 10s ease-in-out infinite; }
        .animate-gradient-x { animation: gradient-x 15s ease infinite; background-size: 200% 200%; }
        .animate-sparkle { animation: sparkle 2s ease-in-out 1; animation-fill-mode: forwards; }
        .animate-glow { animation: glow 3s ease-in-out infinite; }
        .animate-shimmer { animation: shimmer 2s infinite; }
        .animate-fade-in { animation: fade-in 1s ease-out; }
        .perspective-1000 { perspective: 1000px; }
      `}</style>
    </div>
  );
}
