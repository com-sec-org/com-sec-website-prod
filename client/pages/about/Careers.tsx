import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Target,
  Users,
  MapPin,
  Clock,
  Briefcase,
  Star,
  Zap,
  Heart,
  Rocket,
  Mail,
  CheckCircle,
  ArrowRight,
  Code,
  Globe,
  Award,
  Coffee,
  Brain,
} from "lucide-react";

export default function Careers() {
  const jobPositions = [
    {
      id: 1,
      title: "IT Security and Compliance Analyst",
      location: "Remote (occasional site visits)",
      type: "Contract-to-Hire",
      compensation: "Hourly to start, with full-time potential",
      icon: Shield,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      description:
        "Be the security team for the most innovative startups in healthtech, fintech, crypto, and AI. At Com-Sec, we help fast-growing companies build real security programs — not just checkboxes.",
      responsibilities: [
        "Lead clients through SOC 2, HIPAA, and HITRUST readiness",
        "Write and implement security policies, procedures, and risk assessments",
        "Review technical systems, identify gaps, and drive remediation",
        "Support compliance tooling (Drata, Vanta, Thoropass, etc.)",
        "Coordinate with auditors and serve as a trusted security advisor",
      ],
      requirements: [
        "Have 2+ years in IT security, compliance, or audits",
        "Understand frameworks like SOC 2, HIPAA, ISO 27001",
        "Communicate clearly and get things done independently",
        "Are comfortable in fast-paced, client-facing environments",
      ],
      bonusPoints: [
        "Familiarity with AWS and endpoint security tools",
        "Experience with pen testing or vulnerability management",
      ],
      tags: ["SOC 2", "HIPAA", "Compliance", "Risk Assessment", "Remote"],
    },
    {
      id: 2,
      title: "Penetration Tester",
      location: "Remote (occasional site visits)",
      type: "Project-Based",
      compensation: "Contract, with potential for repeat engagements",
      icon: Target,
      gradient: "from-red-500 to-orange-500",
      bgGradient: "from-red-50 to-orange-50",
      description:
        "Break into the most secure systems in healthtech, fintech, crypto, and AI — legally. At Com-Sec, we help fast-growing companies uncover and fix vulnerabilities before attackers find them.",
      responsibilities: [
        "Conduct external, internal, web app, and API penetration tests",
        "Identify and exploit real-world security vulnerabilities",
        "Write clear, actionable reports with remediation guidance",
        "Retest findings and validate client fixes",
        "Collaborate with security analysts, engineers, and compliance teams",
        "Support risk assessments and contribute to security strategy",
      ],
      requirements: [
        "Have 2+ years of hands-on experience in ethical hacking or pen testing",
        "Are fluent in tools like Burp Suite, Metasploit, Nmap, etc.",
        "Understand common vulnerabilities (OWASP Top 10, CVEs)",
        "Communicate clearly and document findings effectively",
        "Are confident working independently and managing client interactions",
      ],
      bonusPoints: [
        "OSCP or similar certification",
        "Experience testing cloud environments (AWS, Azure, GCP)",
        "Familiarity with compliance frameworks like SOC 2 and HIPAA",
        "Interest in red teaming, threat modeling, or scripting your own tools",
      ],
      tags: [
        "Penetration Testing",
        "OSCP",
        "Ethical Hacking",
        "OWASP",
        "Remote",
      ],
    },
  ];

  const perks = [
    {
      icon: Globe,
      title: "100% Remote",
      description: "Work from anywhere with occasional client visits",
      color: "text-blue-600",
    },
    {
      icon: Rocket,
      title: "Cutting-Edge Clients",
      description:
        "Work with innovative startups in AI, crypto, and healthtech",
      color: "text-purple-600",
    },
    {
      icon: Brain,
      title: "Continuous Learning",
      description: "Stay ahead with the latest security tools and techniques",
      color: "text-green-600",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Collaborate with seasoned cybersecurity professionals",
      color: "text-orange-600",
    },
    {
      icon: Coffee,
      title: "Flexible Schedule",
      description: "Work when you're most productive and effective",
      color: "text-teal-600",
    },
    {
      icon: Award,
      title: "Career Growth",
      description: "Contract-to-hire opportunities and skill development",
      color: "text-pink-600",
    },
  ];

  return (
    <>
  <Helmet>
    <title>Careers at Com-Sec | Cybersecurity Jobs | Remote Security Roles</title>

    <meta
      name="description"
      content="Join Com-Sec and help build security programs for innovative startups in AI, fintech, crypto, and healthtech. Explore remote roles in IT security, compliance, penetration testing, and more."
    />

    <meta
      name="keywords"
      content="cybersecurity careers, security jobs, penetration tester jobs, compliance analyst jobs, remote security roles, SOC 2 analyst, HIPAA compliance jobs, IT security careers, Com-Sec careers, cybersecurity hiring"
    />

    <link rel="canonical" href="https://com-sec.io/careers" />

    <meta name="robots" content="index, follow" />
    <meta name="author" content="Com-Sec" />
    <meta name="publisher" content="Com-Sec" />
    <meta charSet="utf-8" />
    <meta name="language" content="English" />
  </Helmet>
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-purple-400/20 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-blue-400/20 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-ping"></div>

          {/* Floating icons */}
          <Rocket className="absolute top-20 left-1/3 h-8 w-8 text-purple-300/30 animate-float" />
          <Heart className="absolute bottom-32 right-1/4 h-6 w-6 text-pink-300/30 animate-bounce" />
          <Code className="absolute top-40 right-10 h-10 w-10 text-blue-300/30 animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
              <Briefcase className="h-5 w-5 mr-2 text-purple-300" />
              <span className="text-white font-semibold">Join Our Team</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="block bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                Shape the Future of
              </span>
              <span className="block text-white mt-2">
                Cybersecurity
                <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text animate-pulse ml-4">
                  Together
                </span>
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-purple-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Join Com-Sec and help the most innovative companies build
              bulletproof security. Work remotely with cutting-edge clients in
              AI, crypto, fintech, and healthtech.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transform hover:scale-110 transition-all duration-300 shadow-2xl"
                asChild
              >
                <a href="#positions">
                  View Open Positions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 rounded-full px-6 py-2 mb-6">
              <Star className="h-5 w-5 text-blue-600 mr-2 animate-pulse" />
              <span className="text-blue-800 font-semibold">Why Com-Sec?</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Where Security Experts
              <span className="block text-blue-600">Thrive</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We're not just another cybersecurity firm. We're a team of
              passionate experts helping the world's most innovative companies
              stay secure while they change the world.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {perks.map((perk, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200 group"
              >
                <div
                  className={`${perk.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <perk.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {perk.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {perk.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-green-100 rounded-full px-6 py-2 mb-6">
              <Zap className="h-5 w-5 text-green-600 mr-2 animate-bounce" />
              <span className="text-green-800 font-semibold">
                Open Positions
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Ready to Make an
              <span className="block text-green-600">Impact?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We're looking for passionate cybersecurity professionals to join
              our mission of democratizing enterprise-grade security.
            </p>
          </div>

          <div className="space-y-8">
            {jobPositions.map((job, index) => (
              <div
                key={job.id}
                className={`bg-gradient-to-r ${job.bgGradient} rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] border border-gray-200`}
              >
                <div className="p-6 sm:p-8 lg:p-10">
                  {/* Job Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                    <div className="flex-1">
                      <div className="flex items-center mb-4">
                        <div
                          className={`w-12 h-12 bg-gradient-to-r ${job.gradient} rounded-xl flex items-center justify-center mr-4`}
                        >
                          <job.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {job.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="bg-white/80 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                        {job.title}
                      </h3>

                      <div className="flex flex-wrap gap-4 mb-6 text-gray-600">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span className="text-sm sm:text-base">
                            {job.location}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2" />
                          <span className="text-sm sm:text-base">
                            {job.type}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Briefcase className="h-4 w-4 mr-2" />
                          <span className="text-sm sm:text-base">
                            {job.compensation}
                          </span>
                        </div>
                      </div>

                      <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        {job.description}
                      </p>
                    </div>

                    <div className="lg:ml-8 mt-6 lg:mt-0">
                      <Button
                        size="lg"
                        className={`bg-gradient-to-r ${job.gradient} hover:opacity-90 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 w-full lg:w-auto`}
                        asChild
                      >
                        <a href="mailto:jobs@com-sec.io">
                          Apply Now
                          <Mail className="ml-2 h-5 w-5" />
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* Job Details */}
                  <div className="grid md:grid-cols-3 gap-8">
                    {/* What You'll Do */}
                    <div className="bg-white/80 rounded-xl p-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                        <Target className="h-5 w-5 mr-2 text-blue-600" />
                        What You'll Do
                      </h4>
                      <ul className="space-y-3">
                        {job.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">
                              {responsibility}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* You're a Fit If */}
                    <div className="bg-white/80 rounded-xl p-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                        <Users className="h-5 w-5 mr-2 text-purple-600" />
                        You're a Fit If You
                      </h4>
                      <ul className="space-y-3">
                        {job.requirements.map((requirement, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">
                              {requirement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bonus Points */}
                    <div className="bg-white/80 rounded-xl p-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                        <Star className="h-5 w-5 mr-2 text-yellow-600" />
                        Bonus Points
                      </h4>
                      <ul className="space-y-3">
                        {job.bonusPoints.map((bonus, idx) => (
                          <li key={idx} className="flex items-start">
                            <Star className="h-4 w-4 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">
                              {bonus}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* How to Apply */}
                  <div className="mt-8 bg-white/80 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                      <Mail className="h-5 w-5 mr-2 text-indigo-600" />
                      How to Apply
                    </h4>
                    <p className="text-gray-700 mb-4">
                      Email your resume and a brief note about your experience
                      to{" "}
                      <a
                        href="mailto:jobs@com-sec.io"
                        className="font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
                      >
                        jobs@com-sec.io
                      </a>
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        size="lg"
                        className={`bg-gradient-to-r ${job.gradient} hover:opacity-90 text-white shadow-lg transform hover:scale-105 transition-all duration-300`}
                        asChild
                      >
                        <a href={`mailto:jobs@com-sec.io?subject=${encodeURIComponent(`Application for ${job.title}`)}&body=${encodeURIComponent(`Hi Com-Sec Team,\n\nI am interested in applying for the ${job.title} position.\n\nPlease find my resume attached.\n\nBest regards,`)}`}>
                          Send Application
                          <Mail className="ml-2 h-5 w-5" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Mission */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-white/5 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white/5 rounded-full animate-ping"></div>

          <Shield className="absolute top-32 left-10 h-8 w-8 text-purple-300/30 animate-spin" />
          <Heart className="absolute bottom-32 right-10 h-8 w-8 text-pink-300/30 animate-pulse" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to Join Our
            <span className="block text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
              Security Mission?
            </span>
          </h2>

          <p className="text-xl sm:text-2xl text-purple-100 mb-8 leading-relaxed">
            Don't see a perfect fit? We're always looking for talented
            cybersecurity professionals to join our growing team.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transform hover:scale-110 transition-all duration-300 shadow-2xl"
              asChild
            >
              <a href="mailto:jobs@com-sec.io">
                Send Us Your Resume
                <Mail className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>

          <p className="text-purple-200 mt-6 text-sm">
            We're an equal opportunity employer committed to diversity and
            inclusion.
          </p>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
}
