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
  Monitor,
  Server,
  Wifi,
  HardDrive,
  Shield,
  Clock,
  Users,
  CheckCircle,
  ChevronRight,
  ArrowRight,
  Star,
  Headphones,
  Settings,
  Database,
} from "lucide-react";

export default function ItSupport() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-green-400/10 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-white/5 rounded-full animate-bounce-slow"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-emerald-400/20 rounded-full animate-ping-slow"></div>
          <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-green-300/10 rounded-full animate-wiggle"></div>
          <div className="absolute bottom-1/3 left-2/3 w-12 h-12 bg-emerald-400/20 rounded-full animate-twinkle"></div>
          <div className="absolute top-1/4 left-3/4 w-8 h-8 bg-green-400/30 rounded-full animate-magical-sparkle"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center bg-green-400/20 rounded-full px-6 py-2 text-green-300 font-medium text-sm mb-8">
              <Monitor className="h-4 w-4 mr-2" />
              Professional IT Support
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="animate-typewriter-word animation-delay-200 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                IT Support
              </span>
              <span className="mx-2 animate-typewriter-word animation-delay-400 text-white">
                &
              </span>
              <span className="block animate-confidence-reveal animation-delay-600 bg-gradient-to-r from-green-400 via-emerald-400 to-green-600 bg-clip-text text-transparent animate-gradient-shift">
                Infrastructure
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              Comprehensive IT support services to keep your business running
              smoothly. From infrastructure management to 24/7 technical
              support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-500 hover:to-emerald-600 transform hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link to="/contact">
                  Get IT Support
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* IT Support Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our IT Support Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive technology solutions to keep your business running
              at peak performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "24/7 Help Desk Support",
                description:
                  "Round-the-clock technical support for your team with multiple contact channels",
                icon: Headphones,
                color: "text-blue-600",
                bgColor: "bg-blue-50",
                features: [
                  "Phone, email, chat support",
                  "Remote troubleshooting",
                  "Ticket management system",
                ],
              },
              {
                title: "Network Management",
                description:
                  "Complete network infrastructure management and monitoring",
                icon: Wifi,
                color: "text-green-600",
                bgColor: "bg-green-50",
                features: [
                  "Network monitoring",
                  "Security configuration",
                  "Performance optimization",
                ],
              },
              {
                title: "Server Administration",
                description:
                  "Professional server management and maintenance services",
                icon: Server,
                color: "text-purple-600",
                bgColor: "bg-purple-50",
                features: [
                  "Server maintenance",
                  "Updates & patches",
                  "Performance tuning",
                ],
              },
              {
                title: "Data Backup & Recovery",
                description:
                  "Reliable backup solutions and disaster recovery planning",
                icon: Database,
                color: "text-red-600",
                bgColor: "bg-red-50",
                features: [
                  "Automated backups",
                  "Disaster recovery",
                  "Data restoration",
                ],
              },
              {
                title: "Cloud Infrastructure",
                description:
                  "Cloud migration and management across AWS, Azure, and GCP",
                icon: Monitor,
                color: "text-cyan-600",
                bgColor: "bg-cyan-50",
                features: [
                  "Cloud migration",
                  "Infrastructure as Code",
                  "Cost optimization",
                ],
              },
              {
                title: "Security Management",
                description:
                  "Comprehensive cybersecurity monitoring and incident response",
                icon: Shield,
                color: "text-orange-600",
                bgColor: "bg-orange-50",
                features: [
                  "Security monitoring",
                  "Incident response",
                  "Vulnerability management",
                ],
              },
            ].map((service, index) => (
              <Card
                key={index}
                className={`hover:shadow-xl transition-all duration-300 ${service.bgColor} border-l-4 border-l-green-400`}
              >
                <CardHeader>
                  <service.icon className={`h-12 w-12 mb-4 ${service.color}`} />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Levels */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Support Service Levels
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose the right level of support for your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Essential Support",
                price: "Starting at $1,000/month",
                description: "Basic IT support for small businesses",
                features: [
                  "Business hours support",
                  "Email and phone support",
                  "Basic troubleshooting",
                  "Monthly health checks",
                  "Phishing testing (quarterly)",
                  "Security awareness training (quarterly)",
                ],
                color: "border-green-300",
              },
              {
                name: "Professional Support",
                price: "Starting at $2,500/month",
                description: "Comprehensive support for growing businesses",
                features: [
                  "24/7 support coverage",
                  "Remote monitoring",
                  "Proactive maintenance",
                  "Security monitoring",
                  "Quarterly reviews",
                  "Phishing testing (monthly)",
                  "Security awareness training (monthly)",
                  "Responding to security questionnaires",
                ],
                color: "border-green-500",
                popular: true,
              },
              {
                name: "Enterprise Support",
                price: "Custom pricing",
                description: "Full-service IT management for enterprises",
                features: [
                  "Dedicated support team",
                  "On-site support available",
                  "Custom SLAs",
                  "Strategic IT planning",
                  "Priority response",
                  "Phishing testing program",
                  "Security awareness training program",
                  "Responding to security questionnaires",
                  "Pen testing",
                  "Compliance advisory and governance",
                  "Vendor risk management",
                  "Incident response and tabletop exercises",
                ],
                color: "border-green-700",
              },
            ].map((plan, index) => (
              <Card
                key={index}
                className={`relative hover:shadow-xl transition-all duration-300 border-2 ${plan.color} ${plan.popular ? "scale-105" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">
                    {plan.name}
                  </CardTitle>
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    {plan.price}
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full bg-green-600 hover:bg-green-700"
                    asChild
                  >
                    <Link to="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Choose Our IT Support?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <ul className="space-y-6">
                {[
                  {
                    title: "Experienced Technicians",
                    description:
                      "Certified IT professionals with years of industry experience",
                  },
                  {
                    title: "Proactive Monitoring",
                    description:
                      "We identify and resolve issues before they impact your business",
                  },
                  {
                    title: "Scalable Solutions",
                    description:
                      "IT support that grows with your business needs",
                  },
                  {
                    title: "Cost-Effective",
                    description:
                      "Reduce IT costs by up to 100% compared to in-house teams",
                  },
                ].map((item, index) => (
                  <li key={index} className="flex gap-4">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-primary mb-1">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <img
                  src="https://images.pexels.com/photos/4145355/pexels-photo-4145355.jpeg"
                  alt="A mother and her child smiling while using a computer at home, focused on learning"
                  className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/80 to-emerald-700/80 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Monitor className="h-20 w-20 md:h-24 md:w-24 mx-auto mb-4 animate-pulse" />
                    <div className="text-xl md:text-2xl font-bold mb-2">
                      IT Support
                    </div>
                    <div className="text-lg font-bold mb-2">99.9%</div>
                    <div className="text-sm opacity-90">Uptime Guarantee</div>
                  </div>
                </div>
                {/* Support ticket notifications */}
                <div className="absolute top-4 right-4 flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse animation-delay-300"></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse animation-delay-600"></div>
                </div>
                {/* Connectivity waves */}
                <div className="absolute bottom-6 left-6">
                  <div className="w-4 h-4 border-2 border-emerald-400 rounded-full animate-ping opacity-40"></div>
                  <div className="absolute top-0 left-0 w-4 h-4 border-2 border-green-400 rounded-full animate-ping opacity-60 animation-delay-500"></div>
                </div>
                {/* Help indicators */}
                <div className="absolute top-8 left-8 w-1 h-8 bg-gradient-to-b from-green-400 to-transparent animate-pulse"></div>
                <div className="absolute bottom-8 right-8 w-8 h-1 bg-gradient-to-r from-emerald-400 to-transparent animate-pulse animation-delay-700"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-gradient-to-r from-green-900 to-emerald-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-6 w-6 fill-green-400 text-green-400"
                />
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl font-medium mb-6">
              "Com-Sec's IT support has been a game-changer for our business.
              Their proactive approach has prevented countless issues and their
              24/7 support gives us peace of mind."
            </blockquote>
            <footer>
              <div className="font-semibold text-green-300">David Thompson</div>
              <div className="text-white/80">CEO, RetailPlus</div>
            </footer>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Ready to Upgrade Your IT Support?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let us handle your technology so you can focus on growing your
            business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-500 hover:to-emerald-600 transform hover:scale-105 transition-all duration-300"
              asChild
            >
              <Link to="/contact">
                Get Started Today
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
            >
              Schedule Free Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
