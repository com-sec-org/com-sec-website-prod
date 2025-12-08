import { useState } from "react";
import { Helmet } from "react-helmet";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  Shield,
  ArrowRight,
} from "lucide-react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: `${(formData.get("firstName") as string) || ""} ${(formData.get("lastName") as string) || ""}`.trim(),
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      company: formData.get("company") as string,
      service: formData.get("service") as string,
      budget: formData.get("budget") as string,
      message: formData.get("message") as string,
    };

    try {
      const response = await fetch('/.netlify/functions/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
  <Helmet>
    <title>Contact Com-Sec | Speak With Our Cybersecurity & Compliance Experts</title>

    <meta
      name="description"
      content="Contact Com-Sec for SOC 2 readiness, penetration testing, cloud security, HIPAA compliance, vendor risk, and cybersecurity advisory services. Get expert help within 24 hours."
    />

    <meta
      name="keywords"
      content="contact com-sec, cybersecurity contact, SOC 2 help, penetration testing quote, cybersecurity consulting, risk assessment consultation, compliance services contact, cloud security support, GRC consulting"
    />

    <link rel="canonical" href="https://com-sec.io/contact" />

    <meta name="robots" content="index, follow" />
    <meta name="author" content="Com-Sec" />
    <meta name="publisher" content="Com-Sec" />
    <meta charSet="utf-8" />
    <meta name="language" content="English" />

    <meta property="og:title" content="Contact Com-Sec | Cybersecurity & Compliance Experts" />
    <meta property="og:description" content="Reach out to Com-Sec for SOC 2 readiness, penetration testing, cloud security, and compliance advisory services. Our team responds within 24 hours." />
    <meta property="og:url" content="https://com-sec.io/contact" />
    <meta property="og:type" content="website" />
  </Helmet>

    
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-primary to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg"
            alt="Abstract data center corridor with servers and network lights"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-blue-900/80"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get in
              <span className="block text-accent">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              Ready to secure your business? Let's discuss your cybersecurity
              needs and create a customized solution.
            </p>
            <a
              href="https://calendly.com/brendan-com-sec/30min?month=2025-12"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 bg-gradient-to-r from-accent via-orange-500 to-red-500 text-white font-bold py-3 px-8 text-lg rounded-lg overflow-hidden group hover:shadow-2xl transform hover:scale-110 transition-all duration-300 shadow-xl animate-glow-pulse hover:gap-4"
            >
              <span className="bg-gradient-to-r from-white via-orange-50 to-white bg-clip-text text-transparent group-hover:text-white transition-all duration-300">
                BOOK A MEETING
              </span>
              <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shimmer-btn"></div>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="h-6 w-6 text-accent mr-2" />
                  Send us a message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@company.com"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="company">Company *</Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Your Company"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="service">Service Interest</Label>
                    <Select name="service">
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="SOC 2 Readiness">
                          SOC 2 Readiness
                        </SelectItem>
                        <SelectItem value="Penetration Testing">
                          Penetration Testing
                        </SelectItem>
                        <SelectItem value="Cloud Security">
                          Cloud Security
                        </SelectItem>
                        <SelectItem value="Security Policy Audits">
                          Security Policy Audits
                        </SelectItem>
                        <SelectItem value="Risk Management">
                          Risk Management
                        </SelectItem>
                        <SelectItem value="Compliance Consulting">
                          Compliance Consulting
                        </SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="budget">Budget Range</Label>
                    <Select name="budget">
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Under $10,000">
                          Under $10,000
                        </SelectItem>
                        <SelectItem value="$10,000 - $25,000">
                          $10,000 - $25,000
                        </SelectItem>
                        <SelectItem value="$25,000 - $50,000">
                          $25,000 - $50,000
                        </SelectItem>
                        <SelectItem value="$50,000 - $100,000">
                          $50,000 - $100,000
                        </SelectItem>
                        <SelectItem value="Over $100,000">
                          Over $100,000
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your cybersecurity needs, current challenges, and goals..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 disabled:opacity-50"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    <Send className="mr-2 h-5 w-5" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>

                  {submitStatus === 'success' && (
                    <div className="text-green-600 text-center mt-4 p-3 bg-green-50 rounded-lg">
                      ✅ Message sent successfully! Our team will get back to you within 24 hours.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="text-red-600 text-center mt-4 p-3 bg-red-50 rounded-lg">
                      ❌ Failed to send message. Please try again or email team@com-sec.io directly.
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Team Image */}
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/images/logo/contact us.png"
                  alt="Close-up of network equipment and circuit board with no people"
                  className="w-2/3 mx-auto object-contain"
                />
              </div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Mail className="h-6 w-6 text-accent mr-2" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-muted-foreground">
                        team@com-sec.io
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Phone</div>
                      <div className="text-muted-foreground">
                        857-832-1623
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Address</div>
                      <div className="text-muted-foreground">
                        Washington
                        <br />
                        DC 20001
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="h-6 w-6 text-accent mr-2" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-muted-foreground">
                      9:00 AM - 6:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-muted-foreground">
                      10:00 AM - 4:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-muted-foreground">Closed</span>
                  </div>
                  <div className="pt-2 border-t">
                    <div className="flex items-center text-accent">
                      <Shield className="h-4 w-4 mr-2" />
                      <span className="text-sm font-medium">
                        Emergency support available 24/7
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card> */}

              <Card>
                <CardHeader>
                  <CardTitle>Follow Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="icon" asChild>
                      <a href="https://www.linkedin.com/company/com-sec/" target="_blank" rel="noopener noreferrer">
                        <span className="sr-only">LinkedIn</span>
                        <svg
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-20 bg-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Need Immediate Assistance?
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose the best way to reach us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <Phone className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary mb-3">Call Us</h3>
                <p className="text-muted-foreground mb-4">
                  Speak directly with our security experts
                </p>
                <Button variant="outline">+1 (857) 832-1623</Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <Mail className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary mb-3">
                  Email Us
                </h3>
                <p className="text-muted-foreground mb-4">
                  Get detailed responses to your inquiries
                </p>
                <Button variant="outline" asChild>
                  <a href="mailto:team@com-sec.io">team@com-sec.io</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <Shield className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary mb-3">
                  Emergency
                </h3>
                <p className="text-muted-foreground mb-4">
                  24/7 emergency security incident response
                </p>
                <Button className="bg-gradient-to-r from-accent to-orange-600">
                  Emergency Hotline
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
}
