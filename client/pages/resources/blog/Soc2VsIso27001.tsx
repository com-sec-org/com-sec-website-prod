import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  CheckCircle,
  Shield,
  Scale,
  Globe,
  Building,
  Target,
  Users,
  FileText,
  AlertTriangle,
  TrendingUp,
  Award,
  Clock3,
  DollarSign,
} from "lucide-react";

export default function Soc2VsIso27001() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/resources/blogs">
            <Button
              variant="ghost"
              className="text-white hover:text-blue-300 mb-8 group"
            >
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Blogs
            </Button>
          </Link>

          <div className="flex items-center gap-2 mb-6">
            <Badge className="bg-blue-600 hover:bg-blue-700">
              Compliance Comparison
            </Badge>
            <Badge variant="outline" className="text-white border-white/20">
              Framework Guide
            </Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            SOC 2 vs ISO 27001: Which Is Right for Your Organization?
          </h1>

          <div className="flex items-center gap-6 text-white/80 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>July 15, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>8 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Com-Sec Compliance Team</span>
            </div>
          </div>

          <p className="text-xl text-white/90 leading-relaxed">
            A comprehensive comparison of SOC 2 and ISO 27001 frameworks to help
            you choose the right compliance path for your organization's
            security and business needs.
          </p>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F0ba8b9be18d047ca8e1a6f29e75eea99%2Fe3d3be5db7df4ab28a3c74177c6ad19d?format=webp&width=800"
              alt="ISO 27001 vs SOC2 comparison showing two security shields on a balance scale with compliance frameworks"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                When it comes to information security compliance, SOC 2 and ISO
                27001 are two of the most recognized and respected frameworks.
                Both standards help organizations demonstrate their commitment
                to protecting sensitive data, but they serve different purposes
                and audiences. Understanding the key differences between these
                frameworks is crucial for making the right choice for your
                organization.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
                <div className="flex items-start">
                  <Scale className="h-6 w-6 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-blue-800 font-semibold mb-2">
                      Quick Decision Guide
                    </p>
                    <p className="text-blue-700">
                      Choose SOC 2 if you're a service organization focused on
                      customer trust and vendor assessments. Choose ISO 27001
                      for global recognition, comprehensive risk management, and
                      international business expansion.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Framework Overview */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Framework Overview
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Shield className="h-6 w-6 text-blue-600 mr-3" />
                      SOC 2
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      SOC 2 (Service Organization Control 2) is an auditing
                      procedure developed by the AICPA that ensures service
                      providers securely manage data to protect customer
                      organizations and their customers' interests.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm">US-focused framework</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm">
                          Service organization specific
                        </span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm">Customer trust focused</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Globe className="h-6 w-6 text-green-600 mr-3" />
                      ISO 27001
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      ISO 27001 is an international standard that provides a
                      framework for establishing, implementing, maintaining, and
                      continually improving an Information Security Management
                      System (ISMS).
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm">International standard</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm">Any organization type</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm">Risk management focused</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Detailed Comparison */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Target className="h-8 w-8 text-purple-600 mr-3" />
                Detailed Comparison
              </h2>

              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Building className="h-5 w-5 text-blue-600 mr-2" />
                      Scope and Applicability
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-blue-900 mb-3">
                          SOC 2
                        </h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Designed for service organizations</li>
                          <li>
                            • Focus on cloud services, SaaS, hosting providers
                          </li>
                          <li>• Customer data protection emphasis</li>
                          <li>• B2B service provider validation</li>
                          <li>• Vendor risk assessment tool</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-900 mb-3">
                          ISO 27001
                        </h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Applicable to any organization</li>
                          <li>• All industries and sectors</li>
                          <li>• Information assets protection</li>
                          <li>• Business process integration</li>
                          <li>• Comprehensive risk management</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FileText className="h-5 w-5 text-green-600 mr-2" />
                      Framework Structure
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-blue-900 mb-3">
                          SOC 2 Trust Criteria
                        </h4>
                        <div className="space-y-3">
                          <div className="p-3 bg-blue-50 rounded-lg">
                            <h5 className="font-medium text-blue-900">
                              Security (Required)
                            </h5>
                            <p className="text-sm text-blue-700">
                              Protection against unauthorized access
                            </p>
                          </div>
                          <div className="p-3 bg-gray-50 rounded-lg">
                            <h5 className="font-medium text-gray-900">
                              Availability (Optional)
                            </h5>
                            <p className="text-sm text-gray-700">
                              System operational availability
                            </p>
                          </div>
                          <div className="p-3 bg-gray-50 rounded-lg">
                            <h5 className="font-medium text-gray-900">
                              Processing Integrity (Optional)
                            </h5>
                            <p className="text-sm text-gray-700">
                              System processing completeness and accuracy
                            </p>
                          </div>
                          <div className="p-3 bg-gray-50 rounded-lg">
                            <h5 className="font-medium text-gray-900">
                              Confidentiality (Optional)
                            </h5>
                            <p className="text-sm text-gray-700">
                              Information designated as confidential
                            </p>
                          </div>
                          <div className="p-3 bg-gray-50 rounded-lg">
                            <h5 className="font-medium text-gray-900">
                              Privacy (Optional)
                            </h5>
                            <p className="text-sm text-gray-700">
                              Personal information protection
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-900 mb-3">
                          ISO 27001 Domains
                        </h4>
                        <div className="space-y-2">
                          <div className="p-2 bg-green-50 rounded text-sm">
                            <strong>114 controls across 14 domains:</strong>
                          </div>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Information Security Policies</li>
                            <li>• Organization of Information Security</li>
                            <li>• Human Resource Security</li>
                            <li>• Asset Management</li>
                            <li>• Access Control</li>
                            <li>• Cryptography</li>
                            <li>• Physical and Environmental Security</li>
                            <li>• Operations Security</li>
                            <li>• Communications Security</li>
                            <li>• System Acquisition & Development</li>
                            <li>• Supplier Relationships</li>
                            <li>• Information Security Incident Management</li>
                            <li>• Business Continuity Management</li>
                            <li>• Compliance</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Award className="h-5 w-5 text-purple-600 mr-2" />
                      Certification and Recognition
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-blue-900 mb-3">
                          SOC 2
                        </h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Audit report (not certification)</li>
                          <li>
                            • Type I (point-in-time) or Type II (period of time)
                          </li>
                          <li>• Annual audits required</li>
                          <li>• Strong recognition in US market</li>
                          <li>• Standard for SaaS and cloud providers</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-900 mb-3">
                          ISO 27001
                        </h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Formal certification awarded</li>
                          <li>• 3-year certification cycle</li>
                          <li>• Annual surveillance audits</li>
                          <li>• Global recognition and acceptance</li>
                          <li>• Often required for government contracts</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Cost and Time Comparison */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <DollarSign className="h-8 w-8 text-green-600 mr-3" />
                Cost and Time Investment
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="bg-blue-50">
                  <CardHeader>
                    <CardTitle className="text-blue-900">
                      SOC 2 Investment
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
                          <Clock3 className="h-4 w-4 mr-2" />
                          Timeline
                        </h4>
                        <ul className="text-blue-800 text-sm space-y-1">
                          <li>• Type I: 3-6 months</li>
                          <li>• Type II: 6-12 months</li>
                          <li>• Annual maintenance</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
                          <DollarSign className="h-4 w-4 mr-2" />
                          Costs
                        </h4>
                        <ul className="text-blue-800 text-sm space-y-1">
                          <li>• Lower initial investment</li>
                          <li>• Audit fees: $15K-50K annually</li>
                          <li>• Consultant costs: $25K-75K</li>
                          <li>• Tool and compliance costs</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-green-50">
                  <CardHeader>
                    <CardTitle className="text-green-900">
                      ISO 27001 Investment
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-green-900 mb-2 flex items-center">
                          <Clock3 className="h-4 w-4 mr-2" />
                          Timeline
                        </h4>
                        <ul className="text-green-800 text-sm space-y-1">
                          <li>• Initial certification: 12-18 months</li>
                          <li>• 3-year certification cycle</li>
                          <li>• Annual surveillance audits</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-900 mb-2 flex items-center">
                          <DollarSign className="h-4 w-4 mr-2" />
                          Costs
                        </h4>
                        <ul className="text-green-800 text-sm space-y-1">
                          <li>• Higher initial investment</li>
                          <li>• Certification fees: $20K-80K</li>
                          <li>• Consultant costs: $50K-150K</li>
                          <li>• ISMS implementation costs</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Decision Matrix */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Which Framework Should You Choose?
              </h2>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="h-5 w-5 text-purple-600 mr-2" />
                    Decision Matrix
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4 font-semibold">
                            Consideration
                          </th>
                          <th className="text-center py-3 px-4 font-semibold text-blue-900">
                            SOC 2
                          </th>
                          <th className="text-center py-3 px-4 font-semibold text-green-900">
                            ISO 27001
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        <tr>
                          <td className="py-3 px-4 font-medium">
                            Business Type
                          </td>
                          <td className="py-3 px-4 text-center">
                            Service Organizations
                          </td>
                          <td className="py-3 px-4 text-center">
                            Any Organization
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-medium">
                            Geographic Focus
                          </td>
                          <td className="py-3 px-4 text-center">US Market</td>
                          <td className="py-3 px-4 text-center">
                            Global Market
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-medium">
                            Customer Requirements
                          </td>
                          <td className="py-3 px-4 text-center">
                            B2B SaaS/Cloud
                          </td>
                          <td className="py-3 px-4 text-center">
                            Enterprise/Government
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-medium">
                            Implementation Time
                          </td>
                          <td className="py-3 px-4 text-center">3-12 months</td>
                          <td className="py-3 px-4 text-center">
                            12-18 months
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-medium">Cost</td>
                          <td className="py-3 px-4 text-center">Lower</td>
                          <td className="py-3 px-4 text-center">Higher</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-medium">Flexibility</td>
                          <td className="py-3 px-4 text-center">Moderate</td>
                          <td className="py-3 px-4 text-center">High</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-blue-50">
                  <CardHeader>
                    <CardTitle className="text-blue-900">
                      Choose SOC 2 When:
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-blue-800">
                      <li>
                        • You're a service organization (SaaS, cloud provider,
                        MSP)
                      </li>
                      <li>• Your customers primarily require SOC 2 reports</li>
                      <li>• You need faster time to compliance</li>
                      <li>• You operate primarily in the US market</li>
                      <li>
                        • You want to demonstrate customer data protection
                      </li>
                      <li>• You have limited resources for compliance</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-green-50">
                  <CardHeader>
                    <CardTitle className="text-green-900">
                      Choose ISO 27001 When:
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-green-800">
                      <li>
                        • You operate internationally or plan to expand globally
                      </li>
                      <li>• You need comprehensive risk management</li>
                      <li>• Government contracts require ISO 27001</li>
                      <li>• You want maximum flexibility in implementation</li>
                      <li>
                        • You need formal certification (not just audit reports)
                      </li>
                      <li>• You're in highly regulated industries</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Can You Have Both? */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Users className="h-8 w-8 text-orange-600 mr-3" />
                Can You Have Both Frameworks?
              </h2>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-6">
                <div className="flex items-start">
                  <TrendingUp className="h-6 w-6 text-orange-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-orange-800 font-semibold mb-2">
                      Dual Compliance Strategy
                    </p>
                    <p className="text-orange-700">
                      Many organizations pursue both SOC 2 and ISO 27001 to meet
                      diverse customer requirements and expand market
                      opportunities. This dual approach provides maximum market
                      coverage but requires careful planning and resource
                      allocation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Benefits of Dual Compliance:
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Meet requirements of diverse customer base</li>
                  <li>• Demonstrate comprehensive security commitment</li>
                  <li>• Competitive advantage in multiple markets</li>
                  <li>• Overlapping controls reduce implementation effort</li>
                  <li>• Future-proofing compliance strategy</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mt-6">
                  Implementation Strategy:
                </h3>
                <ol className="space-y-2 text-gray-700">
                  <li>
                    1. Start with the framework most critical to your immediate
                    business needs
                  </li>
                  <li>
                    2. Design controls that satisfy both frameworks where
                    possible
                  </li>
                  <li>
                    3. Plan phased implementation to manage costs and resources
                  </li>
                  <li>
                    4. Leverage overlapping requirements to reduce duplication
                  </li>
                  <li>
                    5. Consider integrated audit approaches to optimize
                    efficiency
                  </li>
                </ol>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Making the Right Choice for Your Organization
              </h2>

              <p className="text-gray-700 mb-6">
                The choice between SOC 2 and ISO 27001 ultimately depends on
                your organization's specific needs, customer requirements, and
                business objectives. SOC 2 provides a faster path to
                demonstrating security controls for service organizations, while
                ISO 27001 offers comprehensive risk management and global
                recognition.
              </p>

              <p className="text-gray-700 mb-8">
                Remember that compliance is not a destination but a journey.
                Whichever framework you choose, focus on building a strong
                security culture and continuously improving your security
                posture. The right compliance framework will support your
                business goals while genuinely enhancing your organization's
                security.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">
                  Expert Guidance for Your Compliance Journey
                </h4>
                <p className="text-blue-800 mb-4">
                  Com-Sec's compliance experts can help you choose the right
                  framework and implement it efficiently. We've guided hundreds
                  of organizations through successful SOC 2 and ISO 27001
                  implementations.
                </p>
                <Link to="/contact">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Schedule a Compliance Consultation
                  </Button>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
