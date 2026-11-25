import React from "react";
import { Navigation } from "@/components/Navigation";
import { Helmet } from "react-helmet";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Shield, Users, Award, Star, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Team() {
  const [expandedMember, setExpandedMember] = React.useState<string | null>(null);
  const [expandedBio, setExpandedBio] = React.useState<string | null>(null);

  const teamMembers = [
    {
      name: "Farbod Fakhrai",
      role: "Founder & CEO",
      image: "/images/team/farbod.webp",
      description:
        "Farbod is the Founder & CEO of Com-Sec, leading the vision for building a more secure and compliant world. With deep expertise in cybersecurity strategy and organizational leadership, he guides Com-Sec in delivering innovative security solutions and helping organizations achieve regulatory assurance. His strategic leadership and industry insights drive the company's mission to empower businesses with resilient security programs.",
      expertise: [
        "Strategic Leadership",
        "Business Development",
        "Cybersecurity Strategy",
        "Client Relations",
      ],
    },
    {
      name: "Win Raguini",
      role: "Director of Engineering",
      image: "https://cdn.builder.io/api/v1/image/assets%2F0ba8b9be18d047ca8e1a6f29e75eea99%2F80c57969d2a747a2b1306568fda75b58?format=webp&width=800&height=1200",
      description:
        "Win provides engineering support to help clients address security issues in their environments, code, and infrastructure. With experience ranging from iOS development to OAuth implementation, he ensures our clients have the necessary technical resources. Win excels at translating complex security requirements into practical engineering solutions.",
      expertise: [
        "iOS Development",
        "OAuth Implementation",
        "Security Engineering",
        "Technical Solutions",
      ],
    },
    {
      name: "Cavour Lafleur",
      role: "Security Analyst",
      image: "/images/team/cavour.webp",
      description:
        "Cavour Lafleur is a Security Analyst at Com-Sec who works directly with clients on SOC 2 and ISO 27001 requirements. He also supports Wazuh deployments, helping teams turn security monitoring and alerting into the evidence auditors ask for.",
      expertise: [
        "SOC 2",
        "ISO 27001",
        "Wazuh",
        "Security Monitoring",
        "Audit Readiness",
        "ISO 42001",
        "IT Support",
      ],
    },
    {
      name: "Raj",
      role: "Security Analyst",
      image: "/images/team/raj.webp",
      description:
        "Raj is a Security Analyst at Com-Sec who helps clients meet SOC 2, ISO 27001, and HITRUST requirements. He works through control gaps and evidence needs with each client so audits move forward without surprises.",
      expertise: [
        "SOC 2",
        "ISO 27001",
        "HITRUST",
        "Audit Readiness",
        "Control Gap Analysis",
      ],
    },
    {
      name: "Dennis Calpatura",
      role: "Internal Audit Specialist",
      image: "/images/team/dennis.webp",
      description:
        "Dennis Calpatura is an internal audit expert at Com-Sec who brings certified internal audit experience to client engagements. He evaluates internal controls, tests compliance, and helps organizations strengthen their audit readiness.",
      expertise: [
        "Internal Audit",
        "Internal Controls",
        "Compliance Testing",
        "Audit Readiness",
      ],
    },
    {
      name: "Shamanth Hedge",
      role: "Security Analyst",
      image: "/images/team/shamanth-hedge.webp",
      description:
        "Shamanth is a Security Analyst at Com-Sec who works across multiple compliance frameworks to get clients audit ready. He maps their controls, closes gaps, and gathers the evidence auditors need so certification moves forward smoothly.",
      expertise: [
        "Multi-Framework Compliance",
        "Audit Readiness",
        "Control Mapping",
        "Evidence Collection",
      ],
    },
    {
      name: "Karanjeet Toor",
      role: "Security Analyst",
      image: "/images/team/kj.webp",
      description:
        "Karanjeet Toor is a Security Analyst at Com-Sec who is building hands-on experience across client compliance work. He collects audit evidence, tracks remediation items to closure, and assists senior analysts during client reviews.",
      expertise: [
        "Evidence Collection",
        "Remediation Tracking",
        "Security Documentation",
        "Control Testing",
      ],
    },
    {
      name: "Manoj Kumar",
      role: "Senior Security & Compliance Manager",
      image: "https://cdn.builder.io/api/v1/image/assets%2F0ba8b9be18d047ca8e1a6f29e75eea99%2F290af4abcaf646438ded5ea504684d9d?format=webp&width=800&height=1200",
      description:
        "Manoj Kumar Pellur Santhosh Kumar is a Senior Security Analyst with experience leading security, IT security, and compliance programs across client environments. He specializes in endpoint security, identity and access management, cloud security controls, vulnerability management, risk assessments, audit readiness, and compliance frameworks including SOC 2, ISO 27001, HIPAA, HITRUST, and CMS-regulated requirements.",
      expertise: [
        "Enterprise Security",
        "Endpoint Security",
        "Identity & Access Management",
        "Cloud Security",
        "Vulnerability Management",
        "Threat Detection",
        "Risk Assessment",
        "Risk Treatment Planning",
        "SOC 2",
        "ISO 27001",
        "HIPAA",
        "HITRUST",
        "CMS Compliance",
        "Audit Readiness",
        "Third-Party Risk Management",
        "IT Support",
      ],
    },
    {
      name: "Banu Priya",
      role: "Security & Compliance Manager",
      image: "https://cdn.builder.io/api/v1/image/assets%2F0ba8b9be18d047ca8e1a6f29e75eea99%2Fc37523b82ac94584b7e6a509ac7eb695?format=webp&width=800&height=1200",
      description:
        "Banu is a Security & Compliance Manager at Com-Sec, specializing in comprehensive compliance management and security frameworks. She conducts thorough security evaluations, manages compliance initiatives, and implements effective security strategies. Banu's analytical skills and attention to detail help strengthen organizational security postures and ensure continuous compliance excellence.",
      expertise: [
        "Security Assessments",
        "Vulnerability Management",
        "Threat Analysis",
        "Risk Mitigation",
      ],
    },
    {
      name: "Parag Khankari",
      role: "Security & Compliance Manager",
      image: "/images/team/Parag.jpg",
      description:
        "Parag Khankari is a Security & Compliance Manager at Com-Sec, where he leads end-to-end security and compliance programs, helping organizations achieve and maintain compliance across SOC 2, ISO 27001, ISO 42001, HITRUST, and HIPAA. He specializes in audit readiness, risk management, security assessments, control implementation, and continuous compliance monitoring. He works closely with clients, engineering teams, and external auditors to strengthen security programs and ensure successful audit outcomes. He also plays a key role in the development of Com-Sec Shield, a GRC platform designed to simplify and automate security and compliance operations. By combining his technical knowledge with hands-on compliance experience, he helps translate complex regulatory requirements into practical, scalable solutions.",
      expertise: [
        "Threat Analysis",
        "Vulnerability Assessment",
        "Risk Assessment",
        "Penetration Testing Support",
        "Access Control Review",
        "Security Monitoring",
        "Incident Response",
        "Cloud Security Review",
        "Vendor Security Review",
        "SOC 2",
        "ISO 27001",
        "HITRUST",
        "HIPAA",
        "Audit Readiness",
        "ISO 42001",
        "Security Documentation",
      ],
    },
    {
      name: "Bojan Trifunovic",
      role: "Information Security Director",
      image: "/images/team/bojan-trifunovic.webp",
      description:
        "Bojan is the Information Security Director at Com-Sec, overseeing information security operations, client engagements, and service delivery. He leads internal teams and coordinates security and compliance initiatives across the company's client portfolio, guiding organizations through SOC 2, HITRUST, and ISO certification processes while providing strategic security leadership through Com-Sec's vCISO services. Representing Com-Sec's leadership team, he drives operational priorities, team performance, client relationships, and continuous service improvement.",
      expertise: [
        "Operations Management",
        "Strategic Planning",
        "Team Coordination",
        "Process Optimization",
      ],
    },
    {
      name: "Fernando Garcia",
      role: "Senior Engineer",
      image: "/images/team/fernando.jpg",
      description:
        "Fernando is a Senior Engineer at Com-Sec, providing advanced technical solutions and engineering support to clients. With extensive experience in security infrastructure and system design, he helps organizations build robust and secure technical environments. Fernando's expertise ensures clients have access to cutting-edge engineering solutions for their security needs.",
      expertise: [
        "System Architecture",
        "Security Infrastructure",
        "Technical Design",
        "Engineering Solutions",
      ],
    },
    {
      name: "Fernando Pineda",
      role: "Senior Software Engineer",
      image: "https://cdn.builder.io/api/v1/image/assets%2F0ba8b9be18d047ca8e1a6f29e75eea99%2F3d78bb7bfc9449c687f2a3354acd43ab?format=webp&width=800&height=1200",
      description:
        "Fernando Pineda is a Senior Software Engineer at Com-Sec who builds the Shield GRC platform and supports the security of the company's field platform. He also helps clients with their backend systems, bringing hands-on experience in secure software development.",
      expertise: [
        "Secure Software Development",
        "Backend Support",
        "Client Engineering",
      ],
    },
    {
      name: "Roshani",
      role: "Security Analyst",
      image: "https://cdn.builder.io/api/v1/image/assets%2F0ba8b9be18d047ca8e1a6f29e75eea99%2Ff7a0758f766c4fc1a70b60c1b5e07eec?format=webp&width=800&height=1200",
      description:
        "Roshani is a Security Analyst at Com-Sec who helps clients achieve certification and prepares them for audit readiness across multiple compliance frameworks. She guides each client through their readiness process so certification moves forward smoothly.",
      expertise: [
        "Readiness",
        "Audit Readiness",
        "Multi-Framework Compliance",
      ],
    },
    {
      name: "Ryan Chen",
      role: "Director of Partnerships",
      image: "/images/team/ryan.jpg",
      description:
        "Ryan is the Director of Partnerships at Com-Sec, leading strategic partnerships and business development initiatives. He builds and nurtures key relationships with clients and partners to expand Com-Sec's reach and impact. Ryan's relationship-building skills and business acumen drive growth and create mutually beneficial partnerships.",
      expertise: [
        "Business Development",
        "Partnership Strategy",
        "Client Relations",
        "Market Expansion",
      ],
    },
    {
      name: "Safaras Patel",
      role: "Pen Test Engineer",
      image: "/images/team/safaras.jpg",
      description:
        "Safaras is a Pen Test Engineer at Com-Sec, specializing in penetration testing and vulnerability assessment. He conducts thorough security assessments to identify vulnerabilities and help clients strengthen their defensive posture. Safaras's technical expertise and methodical approach ensure comprehensive security testing and actionable findings.",
      expertise: [
        "Penetration Testing",
        "Vulnerability Assessment",
        "Security Testing",
        "Exploitation Techniques",
      ],
    },
  ];

  const teamOrder = [
    "Farbod Fakhrai",
    "Bojan Trifunovic",
    "Win Raguini",
    "Manoj Kumar",
    "Banu Priya",
    "Parag Khankari",
    "Fernando Pineda",
    "Dennis Calpatura",
    "Cavour Lafleur",
    "Raj",
    "Shamanth Hedge",
    "Karanjeet Toor",
    "Roshani",
  ];

  return (
    <>
  <Helmet>
  <title>Meet the Com-Sec Team | Cybersecurity & Compliance Experts</title>

  <meta
    name="description"
    content="Meet the security and compliance experts behind Com-Sec. Our team specializes in SOC 2, ISO 27001, HIPAA, cloud security, penetration testing, and risk management for startups and enterprises."
  />

  <meta
    name="keywords"
    content="Com-Sec team, cybersecurity experts, SOC2 consultants, security analysts, compliance specialists, penetration testers, ISO 27001 experts, HIPAA consultants, GRC professionals"
  />

  <link rel="canonical" href="https://com-sec.io/team" />

  <meta name="robots" content="index, follow" />
  <meta name="author" content="Com-Sec" />
  <meta name="publisher" content="Com-Sec" />
  <meta charSet="utf-8" />
  <meta name="language" content="English" />

  <meta property="og:title" content="Meet the Com-Sec Team | Cybersecurity Experts" />
  <meta property="og:description" content="Get to know the cybersecurity and compliance professionals powering Com-Sec’s security programs." />
  <meta property="og:url" content="https://com-sec.io/team" />
  <meta property="og:type" content="website" />
</Helmet>


    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-primary via-blue-800 to-accent text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full animate-float animation-delay-100"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-accent/10 rounded-full animate-bounce-slow animation-delay-200"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-blue-300/10 rounded-full animate-ping-slow animation-delay-300"></div>
          <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-white/5 rounded-full animate-wiggle animation-delay-400"></div>
          <div className="absolute bottom-1/3 left-2/3 w-12 h-12 bg-accent/20 rounded-full animate-twinkle animation-delay-500"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center bg-accent/20 rounded-full px-6 py-2 text-accent font-medium text-sm mb-8 animate-scale-in">
              <Users className="h-4 w-4 mr-2 animate-magical-sparkle" />
              Meet Our Expert Team
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="animate-typewriter-word animation-delay-200 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Our
              </span>{" "}
              <span className="animate-confidence-reveal animation-delay-600 bg-gradient-to-r from-accent via-orange-400 to-accent bg-clip-text text-transparent animate-gradient-shift">
                Team
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-4xl mx-auto animate-fade-in-delayed animation-delay-800 opacity-0">
              At Com-Sec, we equip organizations with the tools and insights to
              master security and compliance, fostering proactive risk
              management. Backed by seasoned infosec experts, we deliver
              innovative strategies, expert audits, and timely solutions to meet
              your certification and regulatory needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delayed animation-delay-1000 opacity-0">
              <Button
                size="lg"
                className="bg-gradient-to-r from-accent to-orange-600 hover:from-accent/80 hover:to-orange-500 text-white transform hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link to="/contact">
                  Work With Our Team
                  <ChevronRight className="ml-2 h-5 w-5 animate-bounce-x" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Security Experts You Can Trust
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our diverse team brings together decades of experience in
              cybersecurity, compliance, and risk management to protect your
              organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[...teamMembers].filter((member) => !['Fernando Garcia', 'Ryan Chen', 'Safaras Patel'].includes(member.name)).sort((a, b) => teamOrder.indexOf(a.name) - teamOrder.indexOf(b.name)).map((member, index) => (
              <Card
                key={index}
                className={`group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:ring-2 hover:ring-accent/60 animate-scale-in animation-delay-${(index + 1) * 100} opacity-0 bg-white border-0 shadow-lg overflow-hidden`}
              >
                <div className="relative">
                  {/* Member Image */}
                  <div className="relative overflow-hidden flex justify-center pt-6">
                    {member.image.includes("placeholder") ? (
                      <div className="w-48 h-48 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center shadow-xl">
                        <div className="w-40 h-40 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-inner">
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                      </div>
                    ) : (
                      <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-xl ring-4 ring-primary/10 group-hover:ring-accent/30 transition-all duration-500">
                        <img
                          src={member.image}
                          alt={member.name}
                          className={`absolute max-w-none h-auto transition-transform duration-500 group-hover:scale-110 ${
                            member.name === "Bojan Trifunovic"
                              ? "left-[-44.3%] top-0 w-[181.8%]"
                              : member.name === "Shamanth Hedge"
                                ? "left-[-21.4%] -top-[19.6%] w-[142.9%]"
                                : member.name === "Parag Khankari"
                                  ? "left-[-102.9%] -top-[85.3%] w-[301.2%]"
                                  : member.name === "Dennis Calpatura"
                                    ? "left-[-40.9%] -top-[29.5%] w-[173.9%]"
                                    : member.name === "Manoj Kumar"
                                      ? "left-[-29%] -top-[20%] w-[150%]"
                                    : member.name === "Cavour Lafleur"
                                      ? "left-[-12.5%] -top-[15.6%] w-[125%]"
                                    : "left-[-12.5%] top-0 w-[125%]"
                          }`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                        <div className="absolute inset-0 ring-2 ring-white/20 rounded-full"></div>
                        {/* Creative background blur for Samuel */}
                        {member.name === "Samuel Soto" && (
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-full"></div>
                        )}
                      </div>
                    )}
                  </div>

                  <CardHeader className="text-center pb-4">
                    <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-accent font-medium">{member.role}</p>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <p
                      className={`text-sm text-muted-foreground leading-relaxed min-h-[7.125rem] ${expandedBio === member.name ? "" : "line-clamp-5"}`}
                    >
                      {member.description}
                    </p>
                    <button
                      type="button"
                      onClick={() => setExpandedBio(expandedBio === member.name ? null : member.name)}
                      className="mb-4 text-xs font-medium text-accent hover:underline"
                    >
                      {expandedBio === member.name ? "Show less" : "Read more"}
                    </button>

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-2 justify-center">
                      {expandedMember === member.name
                        ? member.expertise.map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium cursor-default transition-all duration-300 hover:bg-primary hover:text-white hover:scale-110 hover:shadow-md"
                            >
                              {skill}
                            </span>
                          ))
                        : member.expertise.slice(0, 2).map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium cursor-default transition-all duration-300 hover:bg-primary hover:text-white hover:scale-110 hover:shadow-md"
                            >
                              {skill}
                            </span>
                          ))}
                      {member.expertise.length > 2 && (
                        <button
                          onClick={() => setExpandedMember(expandedMember === member.name ? null : member.name)}
                          className="px-2 py-1 bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors rounded-full text-xs font-medium cursor-pointer"
                        >
                          {expandedMember === member.name
                            ? "- less"
                            : `+${member.expertise.length - 2} more`}
                        </button>
                      )}
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Team by the Numbers
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl font-bold text-accent mb-2 animate-counter group-hover:animate-bounce">
                100+
              </div>
              <div className="text-muted-foreground font-medium">
                Years Combined Experience
              </div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-blue-600 mb-2 animate-counter group-hover:animate-bounce animation-delay-200">
                50+
              </div>
              <div className="text-muted-foreground font-medium">
                Certifications Held
              </div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-green-600 mb-2 animate-counter group-hover:animate-bounce animation-delay-400">
                200+
              </div>
              <div className="text-muted-foreground font-medium">
                Projects Completed
              </div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-purple-600 mb-2 animate-counter group-hover:animate-bounce animation-delay-600">
                24/7
              </div>
              <div className="text-muted-foreground font-medium">
                Support Available
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Award className="h-16 w-16 text-accent mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Want to Join Our Team?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            We're always looking for talented cybersecurity professionals who
            are passionate about helping organizations achieve security and
            compliance excellence.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-accent to-orange-600 hover:from-accent/80 hover:to-orange-500 text-white transform hover:scale-105 transition-all duration-300"
            asChild
          >
            <Link to="/careers">
              View Open Positions
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
}
