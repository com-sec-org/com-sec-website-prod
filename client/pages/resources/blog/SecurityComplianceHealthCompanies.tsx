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
  Heart,
  Lock,
  AlertTriangle,
  FileText,
  Users,
  Eye,
  CheckCircle,
  XCircle,
  Database,
  Smartphone,
  Globe,
  Settings,
  Award,
  TrendingUp,
  Target,
} from "lucide-react";

export default function SecurityComplianceHealthCompanies() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-teal-900 via-cyan-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blogs">
            <Button
              variant="ghost"
              className="text-white hover:text-teal-300 mb-8 group"
            >
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Blogs
            </Button>
          </Link>

          <div className="flex items-center gap-2 mb-6">
            <Badge className="bg-teal-600 hover:bg-teal-700">Healthcare</Badge>
            <Badge variant="outline" className="text-white border-white/20">
              Compliance
            </Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            The Vital Importance of Security and Compliance for Health Companies: Safeguarding Patient Data
          </h1>

          <div className="flex items-center gap-6 text-white/80 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>August 2, 2022</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>8 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Com-Sec Healthcare Team</span>
            </div>
          </div>

          <p className="text-xl text-white/90 leading-relaxed">
            Why healthcare organizations must prioritize cybersecurity and 
            compliance to protect sensitive patient information and maintain 
            trust in an increasingly digital healthcare landscape.
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
                In today's interconnected healthcare environment, the protection 
                of patient data has become more critical than ever before. Healthcare 
                organizations handle some of the most sensitive information 
                imaginable���medical records, personal identifiers, treatment plans, 
                and financial data—making them prime targets for cybercriminals 
                and subject to stringent regulatory requirements.
              </p>

              <div className="bg-teal-50 border-l-4 border-teal-500 p-6 my-8">
                <div className="flex items-start">
                  <Heart className="h-6 w-6 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-teal-800 font-semibold mb-2">
                      The Healthcare Security Imperative
                    </p>
                    <p className="text-teal-700">
                      Patient trust forms the foundation of healthcare. When that 
                      trust is broken through data breaches or compliance failures, 
                      the consequences extend far beyond financial penalties—they 
                      can compromise patient care and organizational reputation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Current Threat Landscape */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <AlertTriangle className="h-8 w-8 text-red-600 mr-3" />
                The Current Threat Landscape in Healthcare
              </h2>

              <p className="text-gray-700 mb-6">
                Healthcare organizations face an unprecedented number of cyber 
                threats, with attack frequency and sophistication continuing to 
                increase. Understanding these threats is the first step in 
                building effective defenses.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="border-red-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-red-800">
                      <Lock className="h-5 w-5 text-red-600 mr-2" />
                      Ransomware Attacks
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      Healthcare organizations are 2.3x more likely to be targeted 
                      by ransomware than other industries. These attacks can shut 
                      down critical systems, delay patient care, and cost millions 
                      in recovery.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <XCircle className="h-4 w-4 text-red-500 mr-2" />
                        <span className="text-sm">Average downtime: 2-3 weeks</span>
                      </div>
                      <div className="flex items-center">
                        <XCircle className="h-4 w-4 text-red-500 mr-2" />
                        <span className="text-sm">Recovery cost: $10.9M average</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-orange-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-orange-800">
                      <Database className="h-5 w-5 text-orange-600 mr-2" />
                      Data Breaches
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      Healthcare data breaches affect millions of patients annually. 
                      Each compromised record contains highly valuable personal 
                      health information that sells for premium prices on dark markets.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <XCircle className="h-4 w-4 text-orange-500 mr-2" />
                        <span className="text-sm">PHI value: $429 per record</span>
                      </div>
                      <div className="flex items-center">
                        <XCircle className="h-4 w-4 text-orange-500 mr-2" />
                        <span className="text-sm">Detection time: 236 days average</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
                <h4 className="font-semibold text-red-900 mb-3">
                  2022 Healthcare Breach Statistics
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">599</div>
                    <div className="text-red-800 text-sm">Healthcare breaches reported</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">42M</div>
                    <div className="text-red-800 text-sm">Patient records compromised</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">287</div>
                    <div className="text-red-800 text-sm">Average days to contain</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Regulatory Compliance Framework */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <FileText className="h-8 w-8 text-blue-600 mr-3" />
                Essential Compliance Frameworks for Healthcare
              </h2>

              <p className="text-gray-700 mb-6">
                Healthcare organizations must navigate a complex web of regulations 
                designed to protect patient privacy and ensure data security. 
                Compliance isn't just about avoiding penalties—it's about 
                implementing best practices that genuinely protect patients.
              </p>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Shield className="h-5 w-5 text-blue-600 mr-2" />
                      HIPAA (Health Insurance Portability and Accountability Act)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Privacy Rule Requirements
                        </h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Limit use and disclosure of PHI</li>
                          <li>• Patient rights over health information</li>
                          <li>• Minimum necessary standard</li>
                          <li>• Business associate agreements</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Security Rule Requirements
                        </h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Administrative safeguards</li>
                          <li>• Physical safeguards</li>
                          <li>• Technical safeguards</li>
                          <li>• Breach notification procedures</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Award className="h-5 w-5 text-purple-600 mr-2" />
                      HITECH Act (Health Information Technology for Economic and Clinical Health)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-900 mb-2">
                        Key Provisions
                      </h4>
                      <ul className="text-purple-800 text-sm space-y-2">
                        <li>• Expanded HIPAA enforcement and penalties</li>
                        <li>• Breach notification requirements for covered entities</li>
                        <li>• Business associate liability for HIPAA violations</li>
                        <li>• Enhanced patient rights and access to information</li>
                        <li>• Audit programs to ensure compliance</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Settings className="h-5 w-5 text-green-600 mr-2" />
                      FDA Medical Device Regulations
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      Medical devices increasingly connect to networks and cloud 
                      services, creating new cybersecurity considerations that the 
                      FDA actively regulates.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                        Premarket cybersecurity
                      </span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                        Post-market surveillance
                      </span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                        Vulnerability disclosure
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Financial and Operational Impact */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <TrendingUp className="h-8 w-8 text-green-600 mr-3" />
                Financial and Operational Impact of Security Failures
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Direct Financial Costs
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-red-900">HIPAA Fines</span>
                        <span className="text-red-600 font-bold">Up to $1.5M</span>
                      </div>
                      <p className="text-red-800 text-sm">Per incident, with maximum annual penalties of $2M</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-orange-900">Breach Response</span>
                        <span className="text-orange-600 font-bold">$1.8M - $10.9M</span>
                      </div>
                      <p className="text-orange-800 text-sm">Incident response, forensics, notification, and recovery costs</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-purple-900">Litigation</span>
                        <span className="text-purple-600 font-bold">$3.2M</span>
                      </div>
                      <p className="text-purple-800 text-sm">Average legal costs from patient lawsuits and class actions</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Operational Disruption
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <XCircle className="h-5 w-5 text-red-500 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-gray-900">Patient Care Delays</h4>
                        <p className="text-gray-700 text-sm">
                          System downtime can delay treatments, surgeries, and 
                          emergency care, potentially impacting patient outcomes
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <XCircle className="h-5 w-5 text-red-500 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-gray-900">Revenue Loss</h4>
                        <p className="text-gray-700 text-sm">
                          Inability to process appointments, billing, and insurance 
                          claims during system recovery
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <XCircle className="h-5 w-5 text-red-500 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-gray-900">Reputation Damage</h4>
                        <p className="text-gray-700 text-sm">
                          Loss of patient trust and confidence can have long-lasting 
                          effects on practice growth and community standing
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
                <h4 className="font-semibold text-yellow-900 mb-2">
                  Case Study: Real-World Impact
                </h4>
                <p className="text-yellow-800 mb-3">
                  In 2020, a major healthcare system experienced a ransomware 
                  attack that shut down operations across 400+ locations for 
                  weeks, resulting in:
                </p>
                <ul className="text-yellow-800 text-sm space-y-1">
                  <li>• $240M in lost revenue during downtime</li>
                  <li>• 4,000+ postponed surgeries and procedures</li>
                  <li>• 18 months of recovery and system rebuilding</li>
                  <li>• Ongoing patient lawsuits and regulatory scrutiny</li>
                </ul>
              </div>
            </section>

            {/* Best Practices for Healthcare Security */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="h-8 w-8 text-green-600 mr-3" />
                Essential Security Best Practices for Healthcare Organizations
              </h2>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Lock className="h-5 w-5 text-blue-600 mr-2" />
                      Technical Safeguards
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">
                          Access Control & Authentication
                        </h4>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                            <span className="text-sm">Multi-factor authentication for all users</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                            <span className="text-sm">Role-based access controls (RBAC)</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                            <span className="text-sm">Regular access reviews and deprovisioning</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                            <span className="text-sm">Automatic session timeouts</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">
                          Data Protection
                        </h4>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                            <span className="text-sm">Encryption at rest and in transit</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                            <span className="text-sm">Secure backup and recovery systems</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                            <span className="text-sm">Data loss prevention (DLP) tools</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                            <span className="text-sm">Secure data disposal procedures</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="h-5 w-5 text-purple-600 mr-2" />
                      Administrative Safeguards
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-900 mb-2">
                          Workforce Training and Awareness
                        </h4>
                        <ul className="text-purple-800 text-sm space-y-1">
                          <li>• HIPAA privacy and security training for all staff</li>
                          <li>• Regular phishing simulations and security awareness</li>
                          <li>• Incident response training and tabletop exercises</li>
                          <li>• Role-specific security training for IT and clinical staff</li>
                        </ul>
                      </div>
                      
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-2">
                          Policies and Procedures
                        </h4>
                        <ul className="text-blue-800 text-sm space-y-1">
                          <li>• Comprehensive information security policies</li>
                          <li>• Incident response and breach notification procedures</li>
                          <li>• Business associate management program</li>
                          <li>• Regular risk assessments and security evaluations</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Settings className="h-5 w-5 text-orange-600 mr-2" />
                      Physical Safeguards
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Lock className="h-8 w-8 text-orange-600" />
                        </div>
                        <h4 className="font-medium text-gray-900 mb-2">Facility Access</h4>
                        <p className="text-gray-700 text-sm">
                          Controlled physical access to systems containing PHI
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Smartphone className="h-8 w-8 text-blue-600" />
                        </div>
                        <h4 className="font-medium text-gray-900 mb-2">Workstation Use</h4>
                        <p className="text-gray-700 text-sm">
                          Secure workstation and device management policies
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Database className="h-8 w-8 text-green-600" />
                        </div>
                        <h4 className="font-medium text-gray-900 mb-2">Media Controls</h4>
                        <p className="text-gray-700 text-sm">
                          Secure handling of storage media and disposal
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Implementation Roadmap */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Implementation Roadmap: Building Healthcare Security
              </h2>

              <div className="space-y-6">
                <div className="bg-green-50 border-l-4 border-green-500 p-6">
                  <h4 className="font-semibold text-green-900 mb-3">
                    Phase 1: Foundation (Months 1-3)
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium text-green-800 mb-2">Risk Assessment</h5>
                      <ul className="text-green-700 text-sm space-y-1">
                        <li>• Comprehensive HIPAA risk assessment</li>
                        <li>• Asset inventory and data mapping</li>
                        <li>• Vulnerability scanning and testing</li>
                        <li>• Business associate evaluation</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-green-800 mb-2">Policy Development</h5>
                      <ul className="text-green-700 text-sm space-y-1">
                        <li>• HIPAA-compliant security policies</li>
                        <li>• Incident response procedures</li>
                        <li>• Employee training programs</li>
                        <li>• Business associate agreements</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                  <h4 className="font-semibold text-blue-900 mb-3">
                    Phase 2: Implementation (Months 4-8)
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium text-blue-800 mb-2">Technical Controls</h5>
                      <ul className="text-blue-700 text-sm space-y-1">
                        <li>• Multi-factor authentication deployment</li>
                        <li>• Encryption implementation</li>
                        <li>• Access control configuration</li>
                        <li>• Monitoring and logging systems</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-blue-800 mb-2">Training & Awareness</h5>
                      <ul className="text-blue-700 text-sm space-y-1">
                        <li>• HIPAA training rollout</li>
                        <li>• Security awareness programs</li>
                        <li>• Phishing simulation campaigns</li>
                        <li>• Incident response training</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-500 p-6">
                  <h4 className="font-semibold text-purple-900 mb-3">
                    Phase 3: Optimization (Ongoing)
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium text-purple-800 mb-2">Continuous Monitoring</h5>
                      <ul className="text-purple-700 text-sm space-y-1">
                        <li>• Regular security assessments</li>
                        <li>• Penetration testing</li>
                        <li>• Compliance audits</li>
                        <li>• Threat intelligence integration</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-purple-800 mb-2">Program Maturity</h5>
                      <ul className="text-purple-700 text-sm space-y-1">
                        <li>• Advanced threat detection</li>
                        <li>• Zero trust architecture</li>
                        <li>• Security automation</li>
                        <li>• Industry benchmarking</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Future Outlook */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Looking Forward: The Future of Healthcare Security
              </h2>

              <p className="text-gray-700 mb-6">
                As healthcare continues to digitize and embrace new technologies, 
                security and compliance challenges will only grow more complex. 
                Organizations that invest in robust security programs today will 
                be better positioned to adapt to future requirements and threats.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Target className="h-5 w-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Emerging Technologies
                    </h4>
                    <p className="text-gray-700 text-sm">
                      AI, IoT medical devices, and telemedicine platforms will 
                      require new security approaches and regulatory frameworks
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Globe className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Evolving Regulations
                    </h4>
                    <p className="text-gray-700 text-sm">
                      State privacy laws and international data protection 
                      requirements will add complexity to compliance programs
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Eye className="h-5 w-5 text-purple-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Advanced Threats
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Nation-state actors and sophisticated criminal organizations 
                      will continue targeting healthcare with advanced techniques
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-teal-50 p-6 rounded-lg">
                <h4 className="font-semibold text-teal-900 mb-2">
                  Partner with Healthcare Security Experts
                </h4>
                <p className="text-teal-800 mb-4">
                  Com-Sec specializes in healthcare cybersecurity and HIPAA 
                  compliance. Our team understands the unique challenges facing 
                  healthcare organizations and provides tailored solutions that 
                  protect patient data while enabling clinical innovation.
                </p>
                <Link to="/contact">
                  <Button className="bg-teal-600 hover:bg-teal-700">
                    Schedule a Healthcare Security Assessment
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
