import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
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
} from "lucide-react";

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-primary to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Cybersecurity
              <span className="block text-accent">Services</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              Comprehensive security solutions designed to protect your business
              and ensure regulatory compliance across all industries.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-shadow border-2 hover:border-accent/20">
              <CardHeader className="text-center h-full">
                <Shield className="h-16 w-16 text-accent mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-xl mb-3 group-hover:text-accent transition-colors">
                  SOC 2 Readiness
                </CardTitle>
                <CardDescription className="text-base">
                  Complete SOC 2 compliance preparation and audit support to
                  meet industry standards. We guide you through every step of
                  the compliance process.
                </CardDescription>
                <div className="pt-4">
                  <ul className="text-left space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-accent mr-2" />
                      Gap analysis and remediation
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-accent mr-2" />
                      Policy development
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-accent mr-2" />
                      Audit preparation and support
                    </li>
                  </ul>
                </div>
                <div className="mt-4">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-accent text-accent hover:bg-accent hover:text-white"
                    asChild
                  >
                    <Link to="/soc2-readiness">
                      Get Started <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow border-2 hover:border-accent/20">
              <CardHeader className="text-center h-full">
                <Search className="h-16 w-16 text-accent mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-xl mb-3 group-hover:text-accent transition-colors">
                  Penetration Testing
                </CardTitle>
                <CardDescription className="text-base">
                  Comprehensive security assessments to identify vulnerabilities
                  before attackers do. Professional ethical hacking services.
                </CardDescription>
                <div className="pt-4">
                  <ul className="text-left space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-accent mr-2" />
                      Network penetration testing
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-accent mr-2" />
                      Web application testing
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-accent mr-2" />
                      Social engineering assessments
                    </li>
                  </ul>
                </div>
                <div className="mt-4">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-accent text-accent hover:bg-accent hover:text-white"
                    asChild
                  >
                    <Link to="/penetration-testing-services">
                      Get Started <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow border-2 hover:border-accent/20">
              <CardHeader className="text-center h-full">
                <Lock className="h-16 w-16 text-accent mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-xl mb-3 group-hover:text-accent transition-colors">
                  Cloud Security
                </CardTitle>
                <CardDescription className="text-base">
                  Secure your cloud infrastructure with best practices and
                  continuous monitoring across AWS, Azure, and GCP platforms.
                </CardDescription>
                <div className="pt-4">
                  <ul className="text-left space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-accent mr-2" />
                      Cloud security architecture
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-accent mr-2" />
                      Configuration audits
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-accent mr-2" />
                      Continuous monitoring
                    </li>
                  </ul>
                </div>
                <div className="mt-4">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-accent text-accent hover:bg-accent hover:text-white"
                    asChild
                  >
                    <Link to="/cloud-security">
                      Get Started <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow border-2 hover:border-accent/20">
              <CardHeader className="text-center">
                <FileCheck className="h-16 w-16 text-accent mb-4 mx-auto" />
                <CardTitle className="text-xl mb-3">
                  Security Policy Audits
                </CardTitle>
                <CardDescription className="text-base">
                  Review and strengthen your security policies to align with
                  regulatory requirements and industry best practices.
                </CardDescription>
                <div className="pt-4">
                  <ul className="text-left space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-accent mr-2" />
                      Policy gap analysis
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-accent mr-2" />
                      Compliance mapping
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-accent mr-2" />
                      Employee training programs
                    </li>
                  </ul>
                </div>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow border-2 hover:border-accent/20">
              <CardHeader className="text-center">
                <Users className="h-16 w-16 text-accent mb-4 mx-auto" />
                <CardTitle className="text-xl mb-3">Risk Management</CardTitle>
                <CardDescription className="text-base">
                  Identify, assess, and mitigate security risks across your
                  entire organization with comprehensive risk management
                  frameworks.
                </CardDescription>
                <div className="pt-4">
                  <ul className="text-left space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-accent mr-2" />
                      Risk assessments
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-accent mr-2" />
                      Threat modeling
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-accent mr-2" />
                      Incident response planning
                    </li>
                  </ul>
                </div>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow border-2 hover:border-accent/20">
              <CardHeader className="text-center">
                <CheckCircle className="h-16 w-16 text-accent mb-4 mx-auto" />
                <CardTitle className="text-xl mb-3">
                  Compliance Consulting
                </CardTitle>
                <CardDescription className="text-base">
                  Expert guidance on meeting various compliance frameworks and
                  regulations including HIPAA, GDPR, PCI-DSS, and more.
                </CardDescription>
                <div className="pt-4">
                  <ul className="text-left space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-accent mr-2" />
                      Regulatory compliance mapping
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-accent mr-2" />
                      Documentation assistance
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-accent mr-2" />
                      Ongoing compliance support
                    </li>
                  </ul>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss your specific cybersecurity needs and create a
            customized solution for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-accent to-orange-600 hover:from-accent/90 hover:to-orange-600/90"
            >
              Get Free Consultation
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline">
              View Case Studies
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
