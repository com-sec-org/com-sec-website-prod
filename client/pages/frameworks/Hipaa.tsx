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
  Heart,
  Shield,
  Lock,
  FileCheck,
  Users,
  AlertTriangle,
  ChevronRight,
  ArrowRight,
  Star,
  CheckCircle,
  Database,
  Eye,
  Settings,
} from "lucide-react";

export default function Hipaa() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-green-900 via-teal-800 to-emerald-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-green-400/10 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-white/5 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-teal-400/20 rounded-full animate-ping"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center bg-green-400/20 rounded-full px-6 py-2 text-green-300 font-medium text-sm mb-8">
              <Heart className="h-4 w-4 mr-2" />
              Healthcare Compliance
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              HIPAA
              <span className="block text-green-400">Compliance</span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              Health Insurance Portability and Accountability Act compliance to
              protect patient health information and ensure healthcare data
              security and privacy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-teal-700 hover:from-green-500 hover:to-teal-600 transform hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link to="/contact">
                  Achieve HIPAA Compliance
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is HIPAA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                What is HIPAA?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                The Health Insurance Portability and Accountability Act (HIPAA)
                is a US federal law enacted in 1996 to protect sensitive patient
                health information from being disclosed without the patient's
                consent or knowledge.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                HIPAA applies to covered entities (healthcare providers, health
                plans, healthcare clearinghouses) and business associates who
                have access to protected health information (PHI) in the course
                of providing services.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    $18M
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Largest HIPAA Fine
                  </div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    600+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Data Breaches (2023)
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/7195310/pexels-photo-7195310.jpeg"
                  alt="A female doctor using a laptop for an online consultation, wearing a headset in a bright office"
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/80 to-teal-700/80 flex items-center justify-center">
                  <Heart className="h-24 w-24 md:h-32 md:w-32 text-white opacity-90" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HIPAA Rules */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              HIPAA Rules & Requirements
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Understanding the key components of HIPAA compliance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Privacy Rule",
                description:
                  "Establishes national standards for the protection of PHI",
                icon: Eye,
                color: "text-green-600",
                bgColor: "bg-green-50",
                requirements: [
                  "Patient rights to access PHI",
                  "Notice of privacy practices",
                  "Minimum necessary standard",
                  "Administrative safeguards",
                ],
              },
              {
                title: "Security Rule",
                description:
                  "Sets standards for protecting electronic PHI (ePHI)",
                icon: Shield,
                color: "text-blue-600",
                bgColor: "bg-blue-50",
                requirements: [
                  "Administrative safeguards",
                  "Physical safeguards",
                  "Technical safeguards",
                  "Risk assessment",
                ],
              },
              {
                title: "Breach Notification Rule",
                description: "Requires notification when PHI is compromised",
                icon: AlertTriangle,
                color: "text-red-600",
                bgColor: "bg-red-50",
                requirements: [
                  "Individual notification",
                  "HHS notification",
                  "Media notification",
                  "Business associate notification",
                ],
              },
              {
                title: "Omnibus Rule",
                description:
                  "Strengthens patient privacy protections and extends HIPAA to business associates",
                icon: Users,
                color: "text-purple-600",
                bgColor: "bg-purple-50",
                requirements: [
                  "Business associate liability",
                  "Patient access rights",
                  "Marketing restrictions",
                  "Genetic information protection",
                ],
              },
              {
                title: "Enforcement Rule",
                description:
                  "Provides standards for investigating and resolving complaints",
                icon: FileCheck,
                color: "text-orange-600",
                bgColor: "bg-orange-50",
                requirements: [
                  "Complaint procedures",
                  "Compliance reviews",
                  "Penalty structure",
                  "Resolution procedures",
                ],
              },
              {
                title: "Business Associate Rule",
                description:
                  "Extends HIPAA requirements to business associates",
                icon: Settings,
                color: "text-teal-600",
                bgColor: "bg-teal-50",
                requirements: [
                  "Written agreements",
                  "Safeguard requirements",
                  "Breach notification",
                  "Compliance obligations",
                ],
              },
            ].map((rule, index) => (
              <Card
                key={index}
                className={`hover:shadow-xl transition-all duration-300 ${rule.bgColor} border-l-4 border-l-green-400`}
              >
                <CardHeader>
                  <rule.icon className={`h-12 w-12 mb-4 ${rule.color}`} />
                  <CardTitle className="text-xl">{rule.title}</CardTitle>
                  <CardDescription className="text-base">
                    {rule.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {rule.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{req}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* HIPAA Safeguards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Required Safeguards
            </h2>
            <p className="text-xl text-muted-foreground">
              Three categories of safeguards required by HIPAA Security Rule
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Administrative Safeguards",
                description:
                  "Policies and procedures to manage the conduct of the workforce",
                icon: Users,
                color: "text-blue-600",
                safeguards: [
                  "Security Officer Assignment",
                  "Workforce Training",
                  "Information Access Management",
                  "Security Awareness Training",
                  "Security Incident Procedures",
                  "Contingency Plan",
                  "Periodic Security Evaluations",
                ],
              },
              {
                title: "Physical Safeguards",
                description:
                  "Physical measures to protect electronic systems and equipment",
                icon: Lock,
                color: "text-green-600",
                safeguards: [
                  "Facility Access Controls",
                  "Workstation Use Controls",
                  "Device and Media Controls",
                  "Physical Security Measures",
                ],
              },
              {
                title: "Technical Safeguards",
                description:
                  "Technology controls to protect and control access to ePHI",
                icon: Shield,
                color: "text-purple-600",
                safeguards: [
                  "Access Control",
                  "Audit Controls",
                  "Integrity",
                  "Person or Entity Authentication",
                  "Transmission Security",
                ],
              },
            ].map((category, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300"
              >
                <CardHeader className="text-center">
                  <category.icon
                    className={`h-16 w-16 mx-auto mb-4 ${category.color}`}
                  />
                  <CardTitle className="text-2xl">{category.title}</CardTitle>
                  <CardDescription className="text-base">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.safeguards.map((safeguard, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{safeguard}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Steps */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              HIPAA Compliance Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our systematic approach to achieving and maintaining HIPAA
              compliance
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Risk Assessment",
                description:
                  "Comprehensive evaluation of potential risks to ePHI in your organization",
                icon: AlertTriangle,
                duration: "2-3 weeks",
              },
              {
                step: "02",
                title: "Gap Analysis",
                description:
                  "Identify gaps between current practices and HIPAA requirements",
                icon: Eye,
                duration: "1-2 weeks",
              },
              {
                step: "03",
                title: "Policy Development",
                description:
                  "Create comprehensive HIPAA policies and procedures tailored to your organization",
                icon: FileCheck,
                duration: "3-4 weeks",
              },
              {
                step: "04",
                title: "Implementation",
                description:
                  "Deploy safeguards, train staff, and implement security measures",
                icon: Settings,
                duration: "4-6 weeks",
              },
              {
                step: "05",
                title: "Ongoing Monitoring",
                description:
                  "Continuous monitoring and regular compliance assessments",
                icon: Shield,
                duration: "Ongoing",
              },
            ].map((step, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "" : "lg:flex-row-reverse"
                }`}
              >
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-24 h-24 bg-gradient-to-br from-green-600 to-teal-700 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {step.step}
                    </div>
                    <div className="absolute inset-0 w-24 h-24 bg-gradient-to-br from-green-600 to-teal-700 rounded-full animate-ping opacity-20"></div>
                  </div>
                </div>
                <Card className="flex-1 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <step.icon className="h-8 w-8 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-2xl font-bold text-primary mb-3">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground text-lg leading-relaxed mb-3">
                          {step.description}
                        </p>
                        <div className="text-sm text-green-600 font-medium">
                          Duration: {step.duration}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Covered Entities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Who Must Comply with HIPAA?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-primary mb-4 flex items-center">
                  <Heart className="h-8 w-8 mr-3 text-green-600" />
                  Covered Entities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Organizations that directly handle protected health
                  information
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Healthcare Providers (hospitals, clinics, doctors)
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Health Plans (insurance companies, HMOs)
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Healthcare Clearinghouses
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Medicare/Medicaid providers
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-primary mb-4 flex items-center">
                  <Users className="h-8 w-8 mr-3 text-green-600" />
                  Business Associates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Third-party organizations that provide services to covered
                  entities
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    IT service providers
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Cloud storage providers
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Medical billing companies
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Legal and accounting firms
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Penalties */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              HIPAA Violation Penalties
            </h2>
            <p className="text-xl text-muted-foreground">
              Understanding the financial impact of non-compliance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                tier: "Tier 1",
                description: "No knowledge of violation",
                minFine: "$100",
                maxFine: "$50,000",
                maxAnnual: "$1.5M",
                color: "bg-yellow-50 border-yellow-200",
              },
              {
                tier: "Tier 2",
                description: "Reasonable cause, not willful neglect",
                minFine: "$1,000",
                maxFine: "$50,000",
                maxAnnual: "$1.5M",
                color: "bg-orange-50 border-orange-200",
              },
              {
                tier: "Tier 3",
                description: "Willful neglect, corrected",
                minFine: "$10,000",
                maxFine: "$50,000",
                maxAnnual: "$1.5M",
                color: "bg-red-50 border-red-200",
              },
              {
                tier: "Tier 4",
                description: "Willful neglect, not corrected",
                minFine: "$50,000",
                maxFine: "$1.5M",
                maxAnnual: "$1.5M",
                color: "bg-red-100 border-red-300",
              },
            ].map((penalty, index) => (
              <Card
                key={index}
                className={`text-center hover:shadow-lg transition-all duration-300 border-2 ${penalty.color}`}
              >
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg text-primary mb-2">
                    {penalty.tier}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {penalty.description}
                  </p>
                  <div className="space-y-2">
                    <div className="text-sm">
                      <span className="font-medium">Per violation:</span>
                      <br />
                      {penalty.minFine} - {penalty.maxFine}
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">Annual max:</span>
                      <br />
                      {penalty.maxAnnual}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Ensure HIPAA Compliance Today
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Protect your patients and your organization with comprehensive HIPAA
            compliance solutions tailored to your healthcare environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-600 to-teal-700 hover:from-green-500 hover:to-teal-600 transform hover:scale-105 transition-all duration-300"
              asChild
            >
              <Link to="/compliance-audit-readiness">
                Start HIPAA Assessment
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">
                Schedule Consultation
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
