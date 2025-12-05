import { useState } from "react";
import { Helmet } from "react-helmet";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import {
  Shield,
  AlertTriangle,
  CheckCircle,
  Mail,
  Users,
  TrendingUp,
  Eye,
  Lock,
  Target,
  FileText,
  ExternalLink,
  Loader2,
} from "lucide-react";

export default function PhishingTest() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    companyName: "",
    numberOfEmployees: "",
    emailService: "",
    emailList: "",
    message: "",
  });

  const handleInputChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/submit-phishing-test", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        toast({
          title: "Form submitted successfully!",
          description:
            "We'll be in touch shortly to set up your free phishing test.",
        });
        // Reset form
        setFormData({
          email: "",
          firstName: "",
          lastName: "",
          companyName: "",
          numberOfEmployees: "",
          emailService: "",
          emailList: "",
          message: "",
        });
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
   <Helmet>
  {/* Primary SEO */}
  <title>Free Phishing Test | Email Security Assessment | Com-Sec</title>

  <meta
    name="description"
    content="Run a free phishing test for your organization. Identify vulnerabilities, measure employee awareness, and receive a detailed cybersecurity risk report within 24–48 hours."
  />

  <meta
    name="keywords"
    content="free phishing test, phishing simulation, email security test, employee phishing awareness, cybersecurity assessment, phishing attack test, phishing readiness, Com-Sec phishing test, email security audit"
  />

  <link rel="canonical" href="https://com-sec.io/phishing" />

  <meta name="robots" content="index, follow" />
  <meta name="author" content="Com-Sec" />
  <meta name="publisher" content="Com-Sec" />
  <meta charSet="utf-8" />
  <meta name="language" content="English" />

  {/* Open Graph – Social Preview */}
  <meta property="og:title" content="Free Phishing Test | Email Security Assessment | Com-Sec" />
  <meta
    property="og:description"
    content="Test how your organization responds to phishing attacks. Get an instant phishing risk score, awareness metrics, and remediation recommendations."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://com-sec.io/phishing" />
  <meta property="og:site_name" content="Com-Sec" />
  <meta
    property="og:image"
    content="https://com-sec.io/images/phishing-test-cover.png"
  />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Free Phishing Test | Email Security Assessment | Com-Sec"
  />
  <meta
    name="twitter:description"
    content="Run a free phishing simulation and get an actionable cybersecurity report within 24–48 hours."
  />
  <meta
    name="twitter:image"
    content="https://com-sec.io/images/phishing-test-cover.png"
  />
</Helmet>


    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-red-900 via-orange-800 to-amber-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-red-400/20 rounded-full px-6 py-2 text-red-300 font-medium text-sm mb-8">
              <AlertTriangle className="h-4 w-4 mr-2" />
              Free Security Assessment
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Run a Free
              <span className="block text-red-300">Phishing Test</span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              Assess your organization's vulnerability to phishing attacks with
              our comprehensive security test. Identify risks and strengthen
              your cybersecurity posture.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                onClick={() => {
                  const formSection =
                    document.getElementById("phishing-test-form");
                  if (formSection) {
                    formSection.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
                className="bg-red-600 hover:bg-red-500 text-white transform hover:scale-105 transition-all duration-300"
              >
                Start Free Test
                <Target className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white bg-white/10 text-white hover:bg-white hover:text-red-600 backdrop-blur-sm font-semibold"
              >
                Learn More
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Test Form Section */}
      <section id="phishing-test-form" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Test Your Organization's Security
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our free phishing test helps you understand how vulnerable your
                organization is to email-based cyberattacks. Get detailed
                insights and recommendations to improve your security posture.
              </p>

              {/* Add compelling phishing security image */}
              <div className="mb-8">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F0ba8b9be18d047ca8e1a6f29e75eea99%2F6c78799edc914c0c9043b995aaa950d4?format=webp&width=800"
                  alt="Online security and email safety protection against phishing attacks"
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Realistic Phishing Simulation
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Test with actual phishing scenarios used by cybercriminals
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Detailed Analytics
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Comprehensive report on vulnerabilities and click-through
                      rates
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Actionable Recommendations
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Expert guidance on improving your security awareness
                      training
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
                  <div className="flex items-center">
                    <AlertTriangle className="h-5 w-5 text-red-600 mr-2" />
                    <p className="text-red-800 font-bold">
                      90% of data breaches start with phishing emails
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
                  <div className="flex items-center">
                    <TrendingUp className="h-5 w-5 text-blue-600 mr-2" />
                    <p className="text-blue-800 font-medium">
                      Phishing attacks increased 65% in 2024
                    </p>
                  </div>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg">
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 text-green-600 mr-2" />
                    <p className="text-green-800 font-medium">
                      Free test takes less than 5 minutes to complete
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              {/* Urgency and Social Proof */}
              <div className="mb-6 space-y-4">
                <div className="bg-gradient-to-r from-red-100 to-orange-100 border border-red-200 rounded-lg p-4 text-center">
                  <p className="text-red-800 font-semibold text-sm">
                    🔥 <span className="font-bold">LIMITED TIME:</span> Free
                    security assessment worth $500
                  </p>
                </div>

                <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    <span>500+ companies tested</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
                    <span>24-48 hour results</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse"></div>
                    <span>No credit card required</span>
                  </div>
                </div>
              </div>

              <Card className="shadow-2xl border-0 overflow-hidden max-w-2xl mx-auto">
                <CardHeader className="bg-gradient-to-r from-red-600 to-orange-600 text-white text-center">
                  <CardTitle className="flex items-center justify-center text-2xl">
                    <Shield className="h-6 w-6 mr-2" />
                    Run a Free Phishing Test
                  </CardTitle>
                  <p className="text-red-100 text-sm mt-2">
                    Please fill out this form and we will be in touch shortly.
                  </p>

                  {/* Add trust indicators */}
                  <div className="flex items-center justify-center space-x-4 mt-3 text-red-100 text-xs">
                    <div className="flex items-center">
                      <Lock className="h-3 w-3 mr-1" />
                      <span>SSL Secured</span>
                    </div>
                    <div className="flex items-center">
                      <Shield className="h-3 w-3 mr-1" />
                      <span>GDPR Compliant</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      <span>Privacy Protected</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8 lg:p-10">
                  <form
                    key="phishing-test-form"
                    onSubmit={handleSubmit}
                    className="space-y-8"
                  >
                    {/* Email */}
                    <div>
                      <Label
                        htmlFor="email"
                        className="text-base font-medium text-gray-700 mb-2 block"
                      >
                        Email Address <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        className="h-12 text-base"
                        placeholder="Enter your email address"
                      />
                    </div>

                    {/* Name */}
                    <div>
                      <Label className="text-base font-medium text-gray-700 mb-2 block">
                        Full Name <span className="text-red-500">*</span>
                      </Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input
                          placeholder="First Name"
                          required
                          value={formData.firstName}
                          onChange={(e) =>
                            handleInputChange("firstName", e.target.value)
                          }
                          className="h-12 text-base"
                        />
                        <Input
                          placeholder="Last Name"
                          required
                          value={formData.lastName}
                          onChange={(e) =>
                            handleInputChange("lastName", e.target.value)
                          }
                          className="h-12 text-base"
                        />
                      </div>
                    </div>

                    {/* Company Name */}
                    <div>
                      <Label
                        htmlFor="companyName"
                        className="text-base font-medium text-gray-700 mb-2 block"
                      >
                        Company Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="companyName"
                        required
                        value={formData.companyName}
                        onChange={(e) =>
                          handleInputChange("companyName", e.target.value)
                        }
                        className="h-12 text-base"
                        placeholder="Enter your company name"
                      />
                    </div>

                    {/* Number of Employees */}
                    <div>
                      <Label
                        htmlFor="numberOfEmployees"
                        className="text-base font-medium text-gray-700 mb-2 block"
                      >
                        Number of Employees{" "}
                        <span className="text-red-500">*</span>
                      </Label>
                      <Select
                        onValueChange={(value) =>
                          handleInputChange("numberOfEmployees", value)
                        }
                        required
                      >
                        <SelectTrigger className="h-12 text-base">
                          <SelectValue placeholder="Select number of employees" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1-10 employees</SelectItem>
                          <SelectItem value="11-50">11-50 employees</SelectItem>
                          <SelectItem value="51-100">
                            51-100 employees
                          </SelectItem>
                          <SelectItem value="101-500">
                            101-500 employees
                          </SelectItem>
                          <SelectItem value="500+">500+ employees</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Email Service Used */}
                    <div>
                      <Label className="text-base font-medium text-gray-700 mb-3 block">
                        Email Service Used{" "}
                        <span className="text-red-500">*</span>
                      </Label>
                      <div className="space-y-3">
                        {["Gmail", "Microsoft Outlook", "Other"].map(
                          (service, index) => (
                            <label
                              key={`email-service-${index}-${service}`}
                              className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"
                            >
                              <input
                                type="radio"
                                name="emailService"
                                value={service}
                                checked={formData.emailService === service}
                                onChange={(e) =>
                                  handleInputChange(
                                    "emailService",
                                    e.target.value,
                                  )
                                }
                                className="mr-3 text-red-600 focus:ring-red-500 h-4 w-4"
                                required
                              />
                              <span className="text-base text-gray-700">
                                {service}
                              </span>
                            </label>
                          ),
                        )}
                      </div>
                    </div>

                    {/* List of emails */}
                    <div>
                      <Label
                        htmlFor="emailList"
                        className="text-base font-medium text-gray-700 mb-2 block"
                      >
                        Employee Email List{" "}
                        <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="emailList"
                        required
                        value={formData.emailList}
                        onChange={(e) =>
                          handleInputChange("emailList", e.target.value)
                        }
                        className="text-base min-h-[120px]"
                        placeholder="Enter email addresses for testing (one per line or comma-separated)&#10;Example:&#10;john@company.com&#10;jane@company.com"
                        rows={5}
                      />
                      <p className="text-sm text-gray-500 mt-2">
                        💡 We recommend testing 5-10 employees for a
                        representative sample
                      </p>
                    </div>

                    {/* Message */}
                    <div>
                      <Label
                        htmlFor="message"
                        className="text-base font-medium text-gray-700 mb-2 block"
                      >
                        Additional Notes (Optional)
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) =>
                          handleInputChange("message", e.target.value)
                        }
                        className="text-base"
                        placeholder="Any specific requirements or questions about the phishing test?"
                        rows={3}
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-red-600 hover:bg-red-700 text-white py-4 text-lg font-semibold h-auto"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            Submit Free Test Request
                            <Target className="ml-2 h-5 w-5" />
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Phishing Tests Matter */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Phishing Tests Are Critical
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding your organization's vulnerability to phishing
              attacks is the first step in building a robust cybersecurity
              defense.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Email-Based Attacks
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  95% of successful attacks on enterprise networks are the
                  result of successful spear phishing attempts.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Human Error
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Employees are often the weakest link in cybersecurity, making
                  regular testing and training essential.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Rising Threats
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Phishing attacks have increased by 65% in the last year,
                  making proactive testing more important than ever.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Our Phishing Test Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple, safe, and effective testing process in just a few steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Setup</h3>
              <p className="text-gray-600 text-sm">
                Fill out the form with your organization details and test
                preferences
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Deploy</h3>
              <p className="text-gray-600 text-sm">
                We send simulated phishing emails to your specified employee
                list
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Monitor</h3>
              <p className="text-gray-600 text-sm">
                Track employee responses and identify potential security
                vulnerabilities
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Report</h3>
              <p className="text-gray-600 text-sm">
                Receive detailed analytics and recommendations for improvement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Get */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What You'll Receive
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <FileText className="h-6 w-6 text-red-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Comprehensive Security Report
                    </h4>
                    <p className="text-gray-600">
                      Detailed analysis of your organization's phishing
                      susceptibility with click-through rates, response times,
                      and vulnerability assessment.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Eye className="h-6 w-6 text-orange-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Employee Awareness Insights
                    </h4>
                    <p className="text-gray-600">
                      Identify which employees need additional security training
                      and understand common behavioral patterns in your
                      organization.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Lock className="h-6 w-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Security Recommendations
                    </h4>
                    <p className="text-gray-600">
                      Expert-provided action items and best practices to
                      strengthen your organization's email security and employee
                      training programs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Target className="h-6 w-6 text-green-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Follow-up Consultation
                    </h4>
                    <p className="text-gray-600">
                      30-minute consultation with our cybersecurity experts to
                      discuss results and develop an improvement strategy.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl border border-red-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Ready to Test Your Security?
                </h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-red-200">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900">
                        Free Phishing Test
                      </span>
                      <Badge className="bg-green-100 text-green-800">
                        Free
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      Complete security assessment with detailed report
                    </p>
                  </div>

                  <Button
                    onClick={() => {
                      const formSection =
                        document.getElementById("phishing-test-form");
                      if (formSection) {
                        formSection.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }
                    }}
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-6 text-lg"
                  >
                    Start Your Free Test Now
                    <Shield className="ml-2 h-5 w-5" />
                  </Button>

                  <p className="text-center text-sm text-gray-500">
                    No credit card required • Results in 24-48 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Don't Wait for a Real Attack
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Proactively test your organization's security and strengthen your
            defenses against phishing threats.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => {
                const formSection =
                  document.getElementById("phishing-test-form");
                if (formSection) {
                  formSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
              className="bg-white text-red-600 hover:bg-gray-100 transform hover:scale-105 transition-all"
            >
              Run Free Phishing Test
              <Target className="ml-2 h-5 w-5" />
            </Button>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white bg-white/10 text-white hover:bg-white hover:text-red-600 backdrop-blur-sm font-semibold"
              >
                Contact Our Experts
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
}
