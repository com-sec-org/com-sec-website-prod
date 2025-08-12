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
  TrendingUp,
  Shield,
  AlertTriangle,
  Target,
  Eye,
  Lock,
  Wifi,
  Smartphone,
  Cloud,
  Users,
  FileText,
  CheckCircle,
  XCircle,
  BarChart3,
  Zap,
  Globe,
  Database,
} from "lucide-react";

export default function CybersecurityRoundupStartupsMay() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-orange-900 via-red-800 to-pink-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/resources/blogs">
            <Button
              variant="ghost"
              className="text-white hover:text-orange-300 mb-8 group"
            >
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Blogs
            </Button>
          </Link>

          <div className="flex items-center gap-2 mb-6">
            <Badge className="bg-orange-600 hover:bg-orange-700">Industry Trends</Badge>
            <Badge variant="outline" className="text-white border-white/20">
              Monthly Roundup
            </Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Cybersecurity Roundup: Key Trends and Threats for Startups in May
          </h1>

          <div className="flex items-center gap-6 text-white/80 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>June 1, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>4 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Com-Sec Research Team</span>
            </div>
          </div>

          <p className="text-xl text-white/90 leading-relaxed">
            Monthly cybersecurity insights, emerging threats, and protection 
            strategies specifically tailored for startup companies navigating 
            the evolving digital landscape.
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                May 2024 brought significant developments in the cybersecurity 
                landscape that every startup should be aware of. From emerging 
                threats targeting smaller organizations to new regulatory 
                requirements and innovative protection strategies, this monthly 
                roundup covers the essential cybersecurity intelligence that 
                startups need to stay secure and compliant.
              </p>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 my-8">
                <div className="flex items-start">
                  <TrendingUp className="h-6 w-6 text-orange-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-orange-800 font-semibold mb-2">
                      Key Insight for May 2024
                    </p>
                    <p className="text-orange-700">
                      Startups face 43% more targeted cyberattacks than in 2023, 
                      with ransomware and supply chain attacks leading the threat 
                      landscape. Early-stage companies need robust security 
                      frameworks from day one.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emerging Threats Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <AlertTriangle className="h-8 w-8 text-red-600 mr-3" />
                Emerging Threats Targeting Startups
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="border-red-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-red-800">
                      <Shield className="h-5 w-5 text-red-600 mr-2" />
                      Ransomware-as-a-Service (RaaS)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      May saw a 35% increase in RaaS attacks targeting startups. 
                      Criminal organizations now offer easy-to-use ransomware 
                      tools, making attacks more accessible to less sophisticated 
                      threat actors.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <XCircle className="h-4 w-4 text-red-500 mr-2" />
                        <span className="text-sm">Average ransom demand: $50K-$200K</span>
                      </div>
                      <div className="flex items-center">
                        <XCircle className="h-4 w-4 text-red-500 mr-2" />
                        <span className="text-sm">Recovery time: 2-6 weeks</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-orange-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-orange-800">
                      <Wifi className="h-5 w-5 text-orange-600 mr-2" />
                      Supply Chain Attacks
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      Attackers increasingly target third-party vendors and 
                      software dependencies to reach startup networks. May 
                      featured several high-profile incidents affecting multiple 
                      companies simultaneously.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <XCircle className="h-4 w-4 text-orange-500 mr-2" />
                        <span className="text-sm">78% of startups use vulnerable dependencies</span>
                      </div>
                      <div className="flex items-center">
                        <XCircle className="h-4 w-4 text-orange-500 mr-2" />
                        <span className="text-sm">Average detection time: 287 days</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
                <h4 className="font-semibold text-red-900 mb-3">
                  Critical Alert: New Phishing Campaign
                </h4>
                <p className="text-red-800 mb-4">
                  A sophisticated phishing campaign targeting startup executives 
                  was discovered in May, using AI-generated content and deepfake 
                  voice calls to convince victims to transfer funds or share 
                  sensitive information.
                </p>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-3 mt-0.5" />
                  <span className="text-red-800">
                    <strong>Protection:</strong> Implement multi-factor 
                    authentication and verbal verification protocols for financial 
                    transactions
                  </span>
                </div>
              </div>
            </section>

            {/* Industry Trends Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <BarChart3 className="h-8 w-8 text-blue-600 mr-3" />
                Industry Trends and Statistics
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card className="bg-blue-50">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">67%</div>
                    <div className="text-blue-800 font-medium mb-2">Remote Work Vulnerabilities</div>
                    <div className="text-sm text-blue-700">
                      Startups reported increased security challenges with hybrid work models
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-green-50">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">$4.5M</div>
                    <div className="text-green-800 font-medium mb-2">Average Breach Cost</div>
                    <div className="text-sm text-green-700">
                      For startups with less than 500 employees in 2024
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-purple-50">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">89%</div>
                    <div className="text-purple-800 font-medium mb-2">Cloud Adoption</div>
                    <div className="text-sm text-purple-700">
                      Of startups rely primarily on cloud infrastructure
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Key Market Developments in May 2024
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <TrendingUp className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">
                        <strong>Zero Trust Adoption:</strong> 40% increase in 
                        zero trust implementations among startups, driven by 
                        remote work security concerns
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Globe className="h-5 w-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">
                        <strong>Regulatory Changes:</strong> New data protection 
                        requirements in 12 states affecting startup compliance 
                        obligations
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Zap className="h-5 w-5 text-yellow-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">
                        <strong>AI Security Tools:</strong> 60% of startups now 
                        using AI-powered security solutions for threat detection 
                        and response
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Protection Strategies Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="h-8 w-8 text-green-600 mr-3" />
                Essential Protection Strategies for Startups
              </h2>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Lock className="h-5 w-5 text-blue-600 mr-2" />
                      Immediate Actions (This Week)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Security Hygiene
                        </h4>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li>• Enable MFA on all critical accounts</li>
                          <li>• Update all software and systems</li>
                          <li>• Review and revoke unnecessary access permissions</li>
                          <li>• Backup critical data to secure, offline storage</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Employee Training
                        </h4>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li>• Conduct phishing simulation tests</li>
                          <li>• Review social engineering awareness</li>
                          <li>• Update incident response procedures</li>
                          <li>• Establish secure communication protocols</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Target className="h-5 w-5 text-purple-600 mr-2" />
                      Medium-Term Initiatives (This Month)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-900 mb-2">
                          Vendor Risk Assessment
                        </h4>
                        <p className="text-purple-800 text-sm mb-3">
                          Review all third-party vendors and assess their security 
                          posture to prevent supply chain attacks.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-purple-200 text-purple-800 px-2 py-1 rounded text-xs">
                            Security questionnaires
                          </span>
                          <span className="bg-purple-200 text-purple-800 px-2 py-1 rounded text-xs">
                            Penetration testing requirements
                          </span>
                          <span className="bg-purple-200 text-purple-800 px-2 py-1 rounded text-xs">
                            Incident response plans
                          </span>
                        </div>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-2">
                          Zero Trust Implementation
                        </h4>
                        <p className="text-blue-800 text-sm mb-3">
                          Begin implementing zero trust principles to secure 
                          remote work environments and cloud infrastructure.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-xs">
                            Network segmentation
                          </span>
                          <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-xs">
                            Identity verification
                          </span>
                          <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-xs">
                            Continuous monitoring
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Compliance Updates Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <FileText className="h-8 w-8 text-indigo-600 mr-3" />
                Compliance and Regulatory Updates
              </h2>

              <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 mb-8">
                <h4 className="font-semibold text-indigo-900 mb-3">
                  New Requirements for May 2024
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-indigo-600 mr-3 mt-0.5" />
                    <div>
                      <p className="text-indigo-800 font-medium">
                        Enhanced Data Protection Rules
                      </p>
                      <p className="text-indigo-700 text-sm">
                        New state-level requirements for data breach notification 
                        and customer consent management
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-indigo-600 mr-3 mt-0.5" />
                    <div>
                      <p className="text-indigo-800 font-medium">
                        Supply Chain Security Standards
                      </p>
                      <p className="text-indigo-700 text-sm">
                        Federal contractors must now demonstrate third-party 
                        vendor security assessments
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-indigo-600 mr-3 mt-0.5" />
                    <div>
                      <p className="text-indigo-800 font-medium">
                        AI Governance Framework
                      </p>
                      <p className="text-indigo-700 text-sm">
                        New guidelines for responsible AI development and 
                        deployment in sensitive industries
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Action Items for Startups
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Review current data handling practices
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Update privacy policies and terms of service
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Assess vendor compliance requirements
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Implement breach notification procedures
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Recommended Resources
                  </h3>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="font-medium text-gray-900 text-sm">
                        NIST Cybersecurity Framework 2.0
                      </p>
                      <p className="text-gray-600 text-xs">
                        Updated guidelines for small business security
                      </p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="font-medium text-gray-900 text-sm">
                        State Privacy Law Tracker
                      </p>
                      <p className="text-gray-600 text-xs">
                        Monitor changing requirements across states
                      </p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="font-medium text-gray-900 text-sm">
                        CISA Small Business Guide
                      </p>
                      <p className="text-gray-600 text-xs">
                        Free cybersecurity resources and tools
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Looking Ahead Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Looking Ahead: June 2024 Predictions
              </h2>

              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h4 className="font-semibold text-gray-900 mb-4">
                  What to Watch For Next Month
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">
                      Emerging Threats
                    </h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• AI-powered social engineering attacks</li>
                      <li>• Quantum computing threat assessments</li>
                      <li>• Supply chain firmware compromises</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">
                      Technology Trends
                    </h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Extended Detection and Response (XDR) adoption</li>
                      <li>• Passwordless authentication growth</li>
                      <li>• Cloud security posture management</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">
                  Get Ahead of the Threats
                </h4>
                <p className="text-green-800 mb-4">
                  Com-Sec helps startups build robust cybersecurity programs 
                  that grow with your business. Our monthly threat intelligence 
                  and proactive security measures keep your company protected 
                  against emerging threats.
                </p>
                <Link to="/contact">
                  <Button className="bg-green-600 hover:bg-green-700">
                    Schedule a Security Assessment
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
