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
  Shield,
  Lock,
  Eye,
  Database,
  Network,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Users,
  Globe,
  FileText,
  Settings,
  Target,
  TrendingUp,
  Zap,
  Cloud,
  Smartphone,
  Key,
} from "lucide-react";

export default function SafeguardingDataSharingTechCompanies() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-cyan-900 via-blue-800 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blogs">
            <Button
              variant="ghost"
              className="text-white hover:text-cyan-300 mb-8 group"
            >
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Blogs
            </Button>
          </Link>

          <div className="flex items-center gap-2 mb-6">
            <Badge className="bg-cyan-600 hover:bg-cyan-700">Data Security</Badge>
            <Badge variant="outline" className="text-white border-white/20">
              Tech Companies
            </Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Safeguarding Data Sharing: Mitigating Cybersecurity Risks for Tech Companies with Com-Sec
          </h1>

          <div className="flex items-center gap-6 text-white/80 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>October 4, 2022</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>6 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Com-Sec Tech Team</span>
            </div>
          </div>

          <p className="text-xl text-white/90 leading-relaxed">
            How tech companies can secure data sharing processes and mitigate 
            cybersecurity risks effectively with comprehensive security strategies 
            and industry best practices.
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
                In today's interconnected digital ecosystem, tech companies 
                regularly share sensitive data with partners, vendors, customers, 
                and third-party services. While data sharing enables innovation, 
                collaboration, and business growth, it also introduces significant 
                cybersecurity risks that can lead to data breaches, compliance 
                violations, and operational disruptions.
              </p>

              <div className="bg-cyan-50 border-l-4 border-cyan-500 p-6 my-8">
                <div className="flex items-start">
                  <Database className="h-6 w-6 text-cyan-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-cyan-800 font-semibold mb-2">
                      The Data Sharing Challenge
                    </p>
                    <p className="text-cyan-700">
                      Tech companies handle vast amounts of sensitive data—customer 
                      information, intellectual property, financial records, and 
                      technical specifications. Securing this data while enabling 
                      necessary business processes requires a comprehensive, 
                      risk-based approach to cybersecurity.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Understanding Data Sharing Risks */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <AlertTriangle className="h-8 w-8 text-red-600 mr-3" />
                Understanding Data Sharing Risks in Tech Companies
              </h2>

              <p className="text-gray-700 mb-6">
                Data sharing risks in tech companies are multifaceted, spanning 
                technical vulnerabilities, process gaps, and human factors. 
                Understanding these risks is essential for developing effective 
                mitigation strategies.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="border-red-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-red-800">
                      <Network className="h-5 w-5 text-red-600 mr-2" />
                      Technical Vulnerabilities
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      Insecure APIs, unencrypted data transmission, weak 
                      authentication mechanisms, and inadequate access controls 
                      can expose sensitive data during sharing processes.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <XCircle className="h-4 w-4 text-red-500 mr-2" />
                        <span className="text-sm">Unencrypted API endpoints</span>
                      </li>
                      <li className="flex items-center">
                        <XCircle className="h-4 w-4 text-red-500 mr-2" />
                        <span className="text-sm">Weak authentication protocols</span>
                      </li>
                      <li className="flex items-center">
                        <XCircle className="h-4 w-4 text-red-500 mr-2" />
                        <span className="text-sm">Inadequate data validation</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-orange-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-orange-800">
                      <Users className="h-5 w-5 text-orange-600 mr-2" />
                      Third-Party Risks
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      Partner organizations, cloud service providers, and vendors 
                      may have different security standards, creating potential 
                      weak links in the data sharing chain.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <XCircle className="h-4 w-4 text-orange-500 mr-2" />
                        <span className="text-sm">Vendor security gaps</span>
                      </li>
                      <li className="flex items-center">
                        <XCircle className="h-4 w-4 text-orange-500 mr-2" />
                        <span className="text-sm">Inadequate due diligence</span>
                      </li>
                      <li className="flex items-center">
                        <XCircle className="h-4 w-4 text-orange-500 mr-2" />
                        <span className="text-sm">Supply chain vulnerabilities</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
                <h4 className="font-semibold text-red-900 mb-3">
                  Data Breach Impact Statistics for Tech Companies
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">$4.45M</div>
                    <div className="text-red-800 text-sm">Average breach cost</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">277</div>
                    <div className="text-red-800 text-sm">Days to identify</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">70</div>
                    <div className="text-red-800 text-sm">Days to contain</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Comprehensive Security Framework */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="h-8 w-8 text-blue-600 mr-3" />
                Comprehensive Security Framework for Data Sharing
              </h2>

              <p className="text-gray-700 mb-6">
                Effective data sharing security requires a multi-layered approach 
                that addresses technical controls, governance processes, and 
                risk management. This framework provides the foundation for 
                secure data sharing operations.
              </p>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Lock className="h-5 w-5 text-blue-600 mr-2" />
                      Data Classification and Inventory
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Classification Levels
                        </h4>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li>• Public: General company information</li>
                          <li>• Internal: Business operational data</li>
                          <li>• Confidential: Sensitive business data</li>
                          <li>• Restricted: Highly sensitive/regulated data</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Data Inventory Requirements
                        </h4>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li>• Data location mapping</li>
                          <li>• Data flow documentation</li>
                          <li>• Sensitivity level assignment</li>
                          <li>• Retention policy definition</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Key className="h-5 w-5 text-purple-600 mr-2" />
                      Access Control and Authentication
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-900 mb-2">
                          Zero Trust Architecture
                        </h4>
                        <p className="text-purple-800 text-sm mb-3">
                          Implement "never trust, always verify" principles for 
                          all data sharing interactions, regardless of location 
                          or user credentials.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-purple-200 text-purple-800 px-2 py-1 rounded text-xs">
                            Multi-factor authentication
                          </span>
                          <span className="bg-purple-200 text-purple-800 px-2 py-1 rounded text-xs">
                            Least privilege access
                          </span>
                          <span className="bg-purple-200 text-purple-800 px-2 py-1 rounded text-xs">
                            Continuous verification
                          </span>
                        </div>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-2">
                          API Security Controls
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <ul className="text-blue-800 text-sm space-y-1">
                            <li>• OAuth 2.0 / OpenID Connect</li>
                            <li>• API rate limiting and throttling</li>
                            <li>• Input validation and sanitization</li>
                          </ul>
                          <ul className="text-blue-800 text-sm space-y-1">
                            <li>• API gateway security</li>
                            <li>• Request/response encryption</li>
                            <li>• API versioning and deprecation</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Database className="h-5 w-5 text-green-600 mr-2" />
                      Data Encryption and Protection
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Lock className="h-8 w-8 text-green-600" />
                        </div>
                        <h4 className="font-medium text-gray-900 mb-2">Data at Rest</h4>
                        <p className="text-gray-700 text-sm">
                          AES-256 encryption for stored data with secure key management
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Network className="h-8 w-8 text-blue-600" />
                        </div>
                        <h4 className="font-medium text-gray-900 mb-2">Data in Transit</h4>
                        <p className="text-gray-700 text-sm">
                          TLS 1.3 encryption for all data transmission and API calls
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Settings className="h-8 w-8 text-purple-600" />
                        </div>
                        <h4 className="font-medium text-gray-900 mb-2">Data in Use</h4>
                        <p className="text-gray-700 text-sm">
                          Application-level encryption and secure enclaves
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Third-Party Risk Management */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Users className="h-8 w-8 text-orange-600 mr-3" />
                Third-Party Risk Management
              </h2>

              <p className="text-gray-700 mb-6">
                Managing third-party risks is crucial for maintaining data security 
                throughout the sharing ecosystem. This requires thorough vendor 
                assessment, ongoing monitoring, and contractual protections.
              </p>

              <div className="space-y-6">
                <div className="bg-orange-50 border-l-4 border-orange-500 p-6">
                  <h4 className="font-semibold text-orange-900 mb-3">
                    Vendor Security Assessment Framework
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium text-orange-800 mb-2">Due Diligence</h5>
                      <ul className="text-orange-700 text-sm space-y-1">
                        <li>• Security questionnaire completion</li>
                        <li>• Compliance certification review</li>
                        <li>• Financial stability assessment</li>
                        <li>• Reference checks and reputation analysis</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-orange-800 mb-2">Technical Assessment</h5>
                      <ul className="text-orange-700 text-sm space-y-1">
                        <li>• Penetration testing results</li>
                        <li>• Security architecture review</li>
                        <li>• Incident response capabilities</li>
                        <li>• Data handling procedures</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FileText className="h-5 w-5 text-indigo-600 mr-2" />
                      Contractual Security Requirements
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            Data Protection Clauses
                          </h4>
                          <ul className="text-gray-700 text-sm space-y-1">
                            <li>• Data processing limitations</li>
                            <li>• Encryption requirements</li>
                            <li>• Access control specifications</li>
                            <li>• Data retention and deletion</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            Compliance and Audit
                          </h4>
                          <ul className="text-gray-700 text-sm space-y-1">
                            <li>• Right to audit provisions</li>
                            <li>• Compliance certification requirements</li>
                            <li>• Incident notification obligations</li>
                            <li>• Liability and indemnification</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Monitoring and Incident Response */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Eye className="h-8 w-8 text-purple-600 mr-3" />
                Continuous Monitoring and Incident Response
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Real-Time Monitoring
                  </h3>
                  <Card>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <TrendingUp className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium text-gray-900">Data Flow Monitoring</h4>
                            <p className="text-gray-700 text-sm">
                              Track data movement across systems and detect 
                              unauthorized access or unusual patterns
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Target className="h-5 w-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium text-gray-900">API Monitoring</h4>
                            <p className="text-gray-700 text-sm">
                              Monitor API usage patterns, response times, and 
                              security events in real-time
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Zap className="h-5 w-5 text-purple-500 mt-1 mr-3 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium text-gray-900">Threat Detection</h4>
                            <p className="text-gray-700 text-sm">
                              Use machine learning to identify potential security 
                              threats and anomalous behavior
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Incident Response Plan
                  </h3>
                  <Card>
                    <CardContent className="p-6">
                      <div className="space-y-3">
                        <div className="bg-red-50 p-3 rounded">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-medium text-red-900 text-sm">1. Detection</span>
                            <span className="text-red-600 text-xs">0-15 minutes</span>
                          </div>
                          <p className="text-red-800 text-xs">Automated alerts and manual verification</p>
                        </div>
                        <div className="bg-orange-50 p-3 rounded">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-medium text-orange-900 text-sm">2. Containment</span>
                            <span className="text-orange-600 text-xs">15-60 minutes</span>
                          </div>
                          <p className="text-orange-800 text-xs">Isolate affected systems and data flows</p>
                        </div>
                        <div className="bg-blue-50 p-3 rounded">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-medium text-blue-900 text-sm">3. Investigation</span>
                            <span className="text-blue-600 text-xs">1-24 hours</span>
                          </div>
                          <p className="text-blue-800 text-xs">Forensic analysis and impact assessment</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-medium text-green-900 text-sm">4. Recovery</span>
                            <span className="text-green-600 text-xs">24-72 hours</span>
                          </div>
                          <p className="text-green-800 text-xs">System restoration and security hardening</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            {/* Implementation Roadmap */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Implementation Roadmap for Secure Data Sharing
              </h2>

              <div className="space-y-6">
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                  <h4 className="font-semibold text-blue-900 mb-3">
                    Phase 1: Assessment and Planning (Weeks 1-4)
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium text-blue-800 mb-2">Current State Analysis</h5>
                      <ul className="text-blue-700 text-sm space-y-1">
                        <li>• Data inventory and classification</li>
                        <li>• Risk assessment and threat modeling</li>
                        <li>• Current security control evaluation</li>
                        <li>�� Compliance gap analysis</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-blue-800 mb-2">Strategy Development</h5>
                      <ul className="text-blue-700 text-sm space-y-1">
                        <li>• Security architecture design</li>
                        <li>• Policy and procedure framework</li>
                        <li>• Technology selection and planning</li>
                        <li>• Implementation timeline creation</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-6">
                  <h4 className="font-semibold text-green-900 mb-3">
                    Phase 2: Core Security Implementation (Weeks 5-12)
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium text-green-800 mb-2">Technical Controls</h5>
                      <ul className="text-green-700 text-sm space-y-1">
                        <li>• Encryption deployment</li>
                        <li>• Access control implementation</li>
                        <li>• API security hardening</li>
                        <li>• Monitoring system setup</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-green-800 mb-2">Process Implementation</h5>
                      <ul className="text-green-700 text-sm space-y-1">
                        <li>• Vendor management program</li>
                        <li>• Incident response procedures</li>
                        <li>• Security training programs</li>
                        <li>• Compliance monitoring setup</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-500 p-6">
                  <h4 className="font-semibold text-purple-900 mb-3">
                    Phase 3: Optimization and Maturity (Ongoing)
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium text-purple-800 mb-2">Continuous Improvement</h5>
                      <ul className="text-purple-700 text-sm space-y-1">
                        <li>• Regular security assessments</li>
                        <li>• Threat intelligence integration</li>
                        <li>• Advanced analytics implementation</li>
                        <li>• Automation and orchestration</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-purple-800 mb-2">Program Maturity</h5>
                      <ul className="text-purple-700 text-sm space-y-1">
                        <li>• Zero trust architecture advancement</li>
                        <li>• AI-powered security controls</li>
                        <li>• Industry collaboration and sharing</li>
                        <li>• Regulatory alignment and reporting</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Com-Sec Partnership */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                How Com-Sec Enables Secure Data Sharing for Tech Companies
              </h2>

              <p className="text-gray-700 mb-6">
                Com-Sec brings deep expertise in cybersecurity, compliance, and 
                risk management to help tech companies implement robust data 
                sharing security programs that protect sensitive information 
                while enabling business growth.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Shield className="h-5 w-5 text-blue-600 mr-2" />
                      Comprehensive Security Assessment
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-sm">Data flow analysis and risk assessment</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-sm">Third-party vendor security evaluation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-sm">API security testing and validation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-sm">Compliance gap analysis and remediation</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Settings className="h-5 w-5 text-purple-600 mr-2" />
                      Implementation and Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-sm">Security architecture design and deployment</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-sm">Policy development and training programs</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-sm">Incident response plan development</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-sm">Ongoing monitoring and optimization</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-cyan-50 p-6 rounded-lg">
                <h4 className="font-semibold text-cyan-900 mb-2">
                  Secure Your Data Sharing Operations
                </h4>
                <p className="text-cyan-800 mb-4">
                  Partner with Com-Sec to implement comprehensive data sharing 
                  security that protects your organization while enabling 
                  innovation and growth. Our experts understand the unique 
                  challenges facing tech companies and provide tailored 
                  solutions that meet your specific needs.
                </p>
                <Link to="/contact">
                  <Button className="bg-cyan-600 hover:bg-cyan-700">
                    Schedule a Data Security Consultation
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
