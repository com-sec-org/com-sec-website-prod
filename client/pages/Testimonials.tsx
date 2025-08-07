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
  },
  {
    title: "Amazing partners in your SOC 2 accreditation journey",
    content:
      "Farbod and the Com-Sec team have been incredible partners. As an early-stage startup, we were looking for a provider that could accelerate the establishment and maintenance of our controls and security posture, and the Com-Sec team played a key role in the attainment of our accreditation.",
    author: "Startup CEO",
    date: "May 14, 2025",
    initials: "SC",
  },
  {
    title: "Com-Sec is a great company to partner with",
    content:
      "We chose to work with Com-Sec to help us obtain our SOC2 Type 2 certification. I highly recommend working with this company. They were in constant communication with us through the entire process and made it very easy to understand. They took care of the Drata side of things so we could focus on updating our system to become fully compliant in less than 3 months.",
    author: "Business Owner",
    date: "Sep 09, 2024",
    initials: "BO",
  },
  {
    title: "Wonderful experience, would use again",
    content:
      "Com-Sec was great! They did a very thorough pen testing for us. In healthcare, we have to be extremely diligent with cybersecurity. Farbod and his team allowed us to make sure we can provide secure service to our patients. Thank you!",
    author: "Healthcare Executive",
    date: "Apr 06, 2024",
    initials: "HE",
  },
  {
    title: "Put our security, compliance, and IT support on auto-pilot",
    content:
      "Com-sec's services are an absolute game-changer for businesses looking to offload their IT support, security, and compliance concerns. Their approach has been a great experience, allowing us to focus on our core operations without the constant worry about IT-related issues. The peace of mind that comes from not having to think about IT support, security, or compliance is invaluable.",
    author: "Managing Director",
    date: "Apr 02, 2024",
    initials: "MD",
  },
  {
    title: "Great pen test provider!",
    content:
      "Very thorough testing, and great communication. Highly recommended!",
    author: "Security Manager",
    date: "Apr 01, 2024",
    initials: "SM",
  },
  {
    title: "Great experience",
    content:
      "Worked with them to become SOC 2 compliant. Great turn around and easy to work with.",
    author: "Compliance Lead",
    date: "Oct 30, 2023",
    initials: "CL",
  },
  {
    title: "Outstanding service for our first Pentest",
    content:
      "Com-Sec has been fantastic. They conducted a thorough pen test tailored to our needs, simplified compliance, improved our security, and did it all at a great price. Led by Farbod, their professional and adaptable team has been crucial. Highly recommended for ISO 27001.",
    author: "Compliance Director",
    date: "Oct 23, 2023",
    initials: "CD",
  },
  {
    title: "Well-executed, fairly priced, and professional",
    content:
      "We hired Com-Sec for a pentest. They did everything they said they would, which... is surprisingly rare. Really enjoyed working with them, and they're thoughtful and helpful in discussing the finding and working through remediation efforts with us.",
    author: "Tech Lead",
    date: "Oct 02, 2023",
    initials: "TL",
  },
  {
    title: "Excellent service and expertise",
    content:
      "I've had the pleasure of working with the Com-Sec team for over a year. Each team member takes ownership and closes the loop on all their tasks. They assisted in updating and revamping our organizations outdated practices with security and compliance in mind, giving me peace of mind. Highly recommend",
    author: "Security Lead",
    date: "Jun 14, 2023",
    initials: "SL",
  },
  {
    title: "Wonderful experience working with Com Sec",
    content:
      "After researching and meeting with several security companies, we decided to go with Com-Sec because of their customer-first approach —and we are glad we did! They heard our needs and created a unique plan designed to meet our specific security goals. They made the SOC2 process less overwhelming and improved our security posture overall.",
    author: "Operations Manager",
    date: "Jun 13, 2023",
    initials: "OM",
  },
];

function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1,
        );
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [isAutoPlaying]);

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
      className="relative max-w-4xl mx-auto"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200 hover:scale-110"
      >
        <ChevronLeft className="h-6 w-6 text-primary" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200 hover:scale-110"
      >
        <ChevronRight className="h-6 w-6 text-primary" />
      </button>

      {/* Carousel Container */}
      <div className="overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <Card className="mx-auto max-w-3xl bg-gradient-to-br from-white to-accent/5 border-2 border-accent/10 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="pt-8 pb-8">
                  <Quote className="h-12 w-12 text-accent/30 mb-6 mx-auto" />
                  <div className="flex justify-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-6 w-6 fill-accent text-accent mr-1"
                      />
                    ))}
                  </div>
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-primary mb-4">
                      {testimonial.title}
                    </h3>
                    <blockquote className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                      "{testimonial.content}"
                    </blockquote>
                  </div>
                  <footer className="border-t pt-6">
                    <div className="flex items-center justify-center">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold text-lg">
                          {testimonial.initials}
                        </span>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-primary text-lg">
                          {testimonial.author}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.date}
                        </div>
                      </div>
                    </div>
                  </footer>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex
                ? "bg-accent scale-125"
                : "bg-accent/30 hover:bg-accent/50"
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="mt-6 w-full bg-accent/20 rounded-full h-1 overflow-hidden">
        <div
          className="h-full bg-accent transition-all duration-100 rounded-full"
          style={{
            width: `${((currentIndex + 1) / testimonials.length) * 100}%`,
          }}
        />
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-primary to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Client
              <span className="block text-accent">Testimonials</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              Hear from businesses who trust Com-Sec to protect their digital
              assets and ensure compliance.
            </p>
            <div className="inline-flex items-center bg-accent/20 rounded-full px-6 py-3 text-accent font-medium">
              <Star className="h-5 w-5 mr-2 fill-current" />
              5.0 Star Rating • 17+ Reviews
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <Card className="relative transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
              <CardContent className="pt-8">
                <Quote className="h-12 w-12 text-accent/20 mb-4" />
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  "Amazing partners in your SOC 2 accreditation journey. Farbod
                  and the Com-Sec team have been incredible partners. As an
                  early-stage startup, we were looking for a provider that could
                  accelerate the establishment and maintenance of our controls
                  and security posture, and the Com-Sec team played a key role
                  in the attainment of our accreditation."
                </blockquote>
                <footer className="border-t pt-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">S</span>
                    </div>
                    <div>
                      <div className="font-semibold text-primary">
                        Startup CEO
                      </div>
                      <div className="text-sm text-muted-foreground">
                        May 14, 2025
                      </div>
                    </div>
                  </div>
                </footer>
              </CardContent>
            </Card>

            <Card className="relative transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
              <CardContent className="pt-8">
                <Quote className="h-12 w-12 text-accent/20 mb-4" />
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  "Best Experience in Years. Although I have been a part of
                  attaining SOC in the past, this was my first time being fully
                  responsible for acquiring certification. Given the available
                  internal resources, this was a daunting task. Com-Sec stepped
                  in and took the weight off my shoulders. Their knowledge of
                  the process and requirements was immense. Where I didn't know
                  how to begin, they sailed through. I would never want to go
                  through the SOC process without them!"
                </blockquote>
                <footer className="border-t pt-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">C</span>
                    </div>
                    <div>
                      <div className="font-semibold text-primary">
                        Compliance Manager
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Feb 21, 2025
                      </div>
                    </div>
                  </div>
                </footer>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* All Testimonials Carousel */}
      <section className="py-20 bg-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Trusted by companies across industries
            </p>
          </div>

          <TestimonialsCarousel />
        </div>
      </section>

      {/* Industry Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Serving Diverse Industries
            </h2>
            <p className="text-xl text-muted-foreground">
              Our clients span across multiple sectors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">40%</div>
              <div className="text-muted-foreground">Healthcare</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">25%</div>
              <div className="text-muted-foreground">Financial Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">20%</div>
              <div className="text-muted-foreground">Technology</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">15%</div>
              <div className="text-muted-foreground">Other Industries</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Join Our Satisfied Clients
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Ready to experience the Com-Sec difference? Let's start protecting
            your business today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-accent to-orange-600 hover:from-accent/90 hover:to-orange-600/90"
            >
              Start Your Security Journey
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">
                Schedule a Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
