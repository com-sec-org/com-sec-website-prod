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
  TrendingUp,
  Globe,
  Smartphone,
  Cloud,
  Brain,
  Lock,
  AlertTriangle,
  Target,
  Users,
  Building,
  Zap,
  Eye,
} from "lucide-react";

export default function TwentyYearsCybersecurityJourney() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-900 via-slate-800 to-blue-900 text-white">
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
            <Badge className="bg-gray-600 hover:bg-gray-700">Industry History</Badge>
            <Badge variant="outline" className="text-white border-white/20">
              Leadership Perspective
            </Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            20 Years of Cybersecurity: A Journey Through the Digital Age
          </h1>

          <div className="flex items-center gap-6 text-white/80 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>September 29, 2023</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>9 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Com-Sec Leadership</span>
            </div>
          </div>

          <p className="text-xl text-white/90 leading-relaxed">
            Reflecting on two decades of cybersecurity evolution, major
            milestones, technological shifts, and the lessons learned from
            defending against an ever-changing threat landscape.
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
                When we founded Com-Sec in 2003, the cybersecurity landscape
                was vastly different from what we see today. Email viruses were
                the primary concern, firewalls were considered cutting-edge, and
                the concept of "cloud security" didn't exist because the cloud
                itself was just emerging. Two decades later, we've witnessed a
                complete transformation of the digital threat landscape—and our
                approach to defending against it.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
                <div className="flex items-start">
                  <Shield className="h-6 w-6 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-blue-800 font-semibold mb-2">
                      The Evolution Perspective
                    </p>
                    <p className="text-blue-700">
                      From protecting single computers to securing entire digital
                      ecosystems, the journey of cybersecurity mirrors the
                      evolution of technology itself—each advancement bringing
                      new opportunities and new vulnerabilities.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline of Cybersecurity Evolution */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                The Evolution Timeline: Key Milestones
              </h2>

              <div className="space-y-8">
                {/* Early 2000s */}
                <Card className="border-l-4 border-red-500">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Globe className="h-6 w-6 text-red-600 mr-3" />
                      Early 2000s: The Virus Era
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">
                          Key Threats
                        </h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Email-based viruses and worms</li>
                          <li>• SQL injection attacks</li>
                          <li>• Basic phishing attempts</li>
                          <li>• Network intrusions</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">
                          Defense Strategies
                        </h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Antivirus software</li>
                          <li>• Perimeter firewalls</li>
                          <li>• Email filtering</li>
                          <li>• Basic intrusion detection</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 p-4 bg-red-50 rounded-lg">
                      <p className="text-red-800 text-sm">
                        <strong>Lesson Learned:</strong> The "castle and moat"
                        security model dominated this era, focusing on keeping
                        threats out rather than assuming breach scenarios.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Mid 2000s */}
                <Card className="border-l-4 border-orange-500">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Building className="h-6 w-6 text-orange-600 mr-3" />
                      Mid 2000s: The Rise of Organized Cybercrime
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">
                          New Challenges
                        </h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Organized crime syndicates</li>
                          <li>• Identity theft operations</li>
                          <li>• Banking trojans</li>
                          <li>• Early ransomware attempts</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">
                          Industry Response
                        </h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Compliance frameworks (SOX, PCI DSS)</li>
                          <li>• Security information management</li>
                          <li>• Vulnerability management</li>
                          <li>• Incident response planning</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 p-4 bg-orange-50 rounded-lg">
                      <p className="text-orange-800 text-sm">
                        <strong>Pivotal Moment:</strong> The shift from random
                        attacks to targeted, financially motivated cybercrime
                        changed everything. Security became a business issue,
                        not just an IT problem.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Late 2000s */}
                <Card className="border-l-4 border-yellow-500">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Smartphone className="h-6 w-6 text-yellow-600 mr-3" />
                      Late 2000s: Mobile and Web 2.0 Revolution
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">
                          Expanding Attack Surface
                        </h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Mobile malware emergence</li>
                          <li>• Web application vulnerabilities</li>
                          <li>• Social engineering 2.0</li>
                          <li>• Cross-site scripting (XSS)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">
                          Security Evolution
                        </h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Web application firewalls</li>
                          <li>• Mobile device management</li>
                          <li>• Social media monitoring</li>
                          <li>• Secure coding practices</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Early 2010s */}
                <Card className="border-l-4 border-green-500">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Cloud className="h-6 w-6 text-green-600 mr-3" />
                      Early 2010s: Cloud Computing and APTs
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">
                          Game Changers
                        </h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Advanced Persistent Threats (APTs)</li>
                          <li>• Cloud security challenges</li>
                          <li>• State-sponsored attacks</li>
                          <li>• Bring Your Own Device (BYOD)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">
                          New Paradigms
                        </h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Cloud-native security</li>
                          <li>• Threat intelligence platforms</li>
                          <li>• Security orchestration</li>
                          <li>• Zero-trust concepts</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 p-4 bg-green-50 rounded-lg">
                      <p className="text-green-800 text-sm">
                        <strong>Transformation:</strong> The cloud forced a
                        fundamental rethinking of security architecture—from
                        protecting networks to protecting data and identities.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Mid 2010s */}
                <Card className="border-l-4 border-blue-500">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Lock className="h-6 w-6 text-blue-600 mr-3" />
                      Mid 2010s: The Ransomware Epidemic
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">
                          Major Incidents
                        </h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• WannaCry global outbreak</li>
                          <li>• NotPetya destructive attacks</li>
                          <li>• Healthcare sector targeting</li>
                          <li>• Cryptocurrency-enabled payments</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">
                          Response Strategies
                        </h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Backup and recovery focus</li>
                          <li>• Endpoint detection and response</li>
                          <li>• Incident response automation</li>
                          <li>• Cyber insurance growth</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Late 2010s */}
                <Card className="border-l-4 border-purple-500">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Brain className="h-6 w-6 text-purple-600 mr-3" />
                      Late 2010s: AI, IoT, and Privacy Regulations
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">
                          Emerging Threats
                        </h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• IoT botnets and vulnerabilities</li>
                          <li>• AI-powered attacks</li>
                          <li>• Supply chain compromises</li>
                          <li>• Deep fake technology</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">
                          Regulatory Revolution
                        </h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• GDPR implementation</li>
                          <li>• CCPA and state privacy laws</li>
                          <li>• Mandatory breach notifications</li>
                          <li>• Privacy by design requirements</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* 2020s */}
                <Card className="border-l-4 border-indigo-500">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="h-6 w-6 text-indigo-600 mr-3" />
                      2020s: Remote Work and Zero Trust
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">
                          Pandemic Impact
                        </h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Massive remote work shift</li>
                          <li>• Cloud adoption acceleration</li>
                          <li>• Home network vulnerabilities</li>
                          <li>• COVID-themed social engineering</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">
                          Security Transformation
                        </h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Zero Trust Architecture adoption</li>
                          <li>• SASE and cloud security</li>
                          <li>• Extended detection and response</li>
                          <li>• Identity-centric security</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 p-4 bg-indigo-50 rounded-lg">
                      <p className="text-indigo-800 text-sm">
                        <strong>Current Reality:</strong> The pandemic
                        accelerated digital transformation by 5-10 years,
                        forcing rapid security evolution to match new business
                        realities.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Key Lessons Learned */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Target className="h-8 w-8 text-red-600 mr-3" />
                Key Lessons from Two Decades
              </h2>

              <div className="space-y-6">
                <Card className="bg-red-50">
                  <CardHeader>
                    <CardTitle className="text-red-900">
                      1. The Perimeter Has Dissolved
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-red-800 mb-3">
                      The traditional network perimeter no longer exists. With
                      cloud adoption, remote work, and mobile devices, the new
                      perimeter is around data and identities, not networks.
                    </p>
                    <div className="bg-red-100 p-3 rounded">
                      <p className="text-red-900 text-sm font-semibold">
                        Impact: Security models shifted from "trust but verify"
                        to "never trust, always verify."
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-blue-50">
                  <CardHeader>
                    <CardTitle className="text-blue-900">
                      2. Attackers Are Persistent and Adaptive
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blue-800 mb-3">
                      Every defensive innovation is met with adaptive attack
                      techniques. Cybercriminals are organized, well-funded, and
                      often more agile than the organizations they target.
                    </p>
                    <div className="bg-blue-100 p-3 rounded">
                      <p className="text-blue-900 text-sm font-semibold">
                        Impact: Defense requires continuous evolution and
                        threat-informed security strategies.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-green-50">
                  <CardHeader>
                    <CardTitle className="text-green-900">
                      3. Compliance Drives Security Investment
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-green-800 mb-3">
                      Regulatory requirements and compliance frameworks have
                      been major drivers of security investment, often providing
                      the business case needed for security improvements.
                    </p>
                    <div className="bg-green-100 p-3 rounded">
                      <p className="text-green-900 text-sm font-semibold">
                        Impact: Security and compliance teams became strategic
                        business partners, not just cost centers.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-purple-50">
                  <CardHeader>
                    <CardTitle className="text-purple-900">
                      4. Human Factor Remains Critical
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-purple-800 mb-3">
                      Despite technological advances, humans remain the weakest
                      link in cybersecurity. Social engineering attacks have
                      become more sophisticated, targeting human psychology
                      rather than technical vulnerabilities.
                    </p>
                    <div className="bg-purple-100 p-3 rounded">
                      <p className="text-purple-900 text-sm font-semibold">
                        Impact: Security awareness training and culture change
                        became as important as technical controls.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-yellow-50">
                  <CardHeader>
                    <CardTitle className="text-yellow-900">
                      5. Speed vs. Security Trade-offs
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-yellow-800 mb-3">
                      The demand for faster development and deployment cycles
                      created tension with security requirements. DevSecOps
                      emerged as a response to integrate security into rapid
                      development processes.
                    </p>
                    <div className="bg-yellow-100 p-3 rounded">
                      <p className="text-yellow-900 text-sm font-semibold">
                        Impact: Security shifted left in the development
                        lifecycle, becoming integrated rather than bolted on.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Looking Forward */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Eye className="h-8 w-8 text-blue-600 mr-3" />
                Looking Forward: The Next Decade
              </h2>

              <p className="text-gray-700 mb-6">
                As we look ahead to the next decade of cybersecurity, several
                trends are already shaping the future of our industry. The
                lessons of the past 20 years inform our approach to emerging
                challenges.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Brain className="h-5 w-5 text-blue-600 mr-2" />
                      Emerging Technologies
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Quantum computing impact on cryptography</li>
                      <li>• AI-powered security automation</li>
                      <li>• Extended Reality (XR) security challenges</li>
                      <li>• Edge computing distributed security</li>
                      <li>• Blockchain and decentralized systems</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <TrendingUp className="h-5 w-5 text-green-600 mr-2" />
                      Evolving Threats
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-700">
                      <li>• AI-generated deepfakes and disinformation</li>
                      <li>• Quantum-enabled cryptographic attacks</li>
                      <li>• Supply chain and software composition risks</li>
                      <li>• Nation-state cyber warfare evolution</li>
                      <li>• Privacy-focused attack techniques</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Our Predictions for 2024-2034
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Zap className="h-5 w-5 text-yellow-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>Automation-First Security:</strong> Manual security
                      tasks will largely disappear, replaced by AI-driven
                      automated systems
                    </span>
                  </div>
                  <div className="flex items-start">
                    <Shield className="h-5 w-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>Privacy as Competitive Advantage:</strong>
                      Organizations with superior privacy protection will gain
                      market advantages
                    </span>
                  </div>
                  <div className="flex items-start">
                    <Globe className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>Global Cyber Governance:</strong> International
                      cooperation on cybersecurity will become essential for
                      effective defense
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                The Constant: Change Itself
              </h2>

              <p className="text-gray-700 mb-6">
                If there's one constant we've learned over 20 years in
                cybersecurity, it's that change is the only constant. Technology
                evolves, threats adapt, and business requirements shift. The
                organizations that thrive are those that build adaptability and
                continuous learning into their security DNA.
              </p>

              <p className="text-gray-700 mb-6">
                At Com-Sec, we've guided hundreds of organizations through this
                journey of continuous adaptation. Our experience spanning two
                decades of cybersecurity evolution uniquely positions us to help
                organizations navigate not just today's challenges, but prepare
                for tomorrow's unknowns.
              </p>

              <p className="text-gray-700 mb-8">
                The next 20 years will bring challenges we can't yet imagine,
                built on technologies not yet invented. But armed with the
                lessons of the past and a commitment to continuous adaptation,
                we're ready for whatever comes next.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">
                  Partner with Experienced Security Leaders
                </h4>
                <p className="text-blue-800 mb-4">
                  Com-Sec's 20 years of experience defending against evolving
                  cyber threats gives us unique insights into building resilient
                  security programs. Let us help you navigate your cybersecurity
                  journey with confidence.
                </p>
                <Link to="/contact">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Learn from Our Experience
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
