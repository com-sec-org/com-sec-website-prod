import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Shield, Users, Award, Star, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Team() {
  const teamMembers = [
    {
      name: "Farbod Fakhrai",
      role: "Security & Compliance Advisor",
      image: "/images/team/farbs1.jpg",
      description:
        "Farbod is the Chief Executive Officer of Com-Sec, bringing visionary leadership and strategic direction to the company's cybersecurity mission. With extensive experience in security and compliance, he drives innovation and growth while ensuring the highest standards of service delivery. Farbod's leadership philosophy focuses on building strong client relationships and empowering his team to deliver exceptional cybersecurity solutions.",
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
      image: "/images/team/Win.png",
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
      name: "Jayush Chawla",
      role: "Penetration Testing Manager",
      image: "/images/team/Jayush.png",
      description:
        "Jayush oversees all penetration testing at Com-Sec. He uses a mix of manual and automated testing, code reviews, threat modeling, and application assessments to find and fix security vulnerabilities, strengthening our clients' defenses. Jayush's thorough testing approach helps clients identify risks before they become problems.",
      expertise: [
        "Manual Testing",
        "Automated Testing",
        "Code Reviews",
        "Threat Modeling",
      ],
    },
    // {
    //   name: "Christian Manalaysay",
    //   role: "PSecurity & Compliance Manager",
    //   image: "/images/team/Jayush.png",
    //   description:
    //     "Jayush oversees all penetration testing at Com-Sec. He uses a mix of manual and automated testing, code reviews, threat modeling, and application assessments to find and fix security vulnerabilities, strengthening our clients' defenses. Jayush's thorough testing approach helps clients identify risks before they become problems.",
    //   expertise: [
    //     "Manual Testing",
    //     "Automated Testing",
    //     "Code Reviews",
    //     "Threat Modeling",
    //   ],
    // },
    {
      name: "Christopher Cole",
      role: "Security & Compliance Engineer",
      image: "/images/team/Christopher.png",
      description:
        "Christopher is a dedicated Security and Compliance Engineer with a strong focus on IT support and compliance management. He helps clients achieve compliance frameworks through best practices, threat detection, mitigation, and device management, ensuring robust protection and readiness for evolving security challenges.",
      expertise: [
        "IT Support",
        "Compliance Management",
        "Threat Detection",
        "Device Management",
      ],
    },
    {
      name: "Manoj Kumar",
      role: "Security Analyst",
      image: "/images/team/Manoj.png",
      description:
        "Manoj is a Security Analyst at Com-Sec, focused on threat monitoring, incident response, and security compliance. He works with tools like CrowdStrike, AWS, and Jira to investigate alerts, assess risks, and streamline security operations. His contributions enhance the organization's security posture and support audit readiness across cloud and on-prem environments.",
      expertise: [
        "CrowdStrike",
        "AWS Security",
        "Incident Response",
        "Risk Assessment",
      ],
    },
    {
      name: "Banu Priya",
      role: "Security Analyst",
      image: "/images/team/Banu.jpg",
      description:
        "Banu is a Security Analyst at Com-Sec, specializing in comprehensive security assessments and vulnerability management. She conducts thorough security evaluations, identifies potential threats, and implements effective mitigation strategies. Banu's analytical skills and attention to detail help strengthen organizational security postures and ensure robust defense mechanisms.",
      expertise: [
        "Security Assessments",
        "Vulnerability Management",
        "Threat Analysis",
        "Risk Mitigation",
      ],
    },
    {
      name: "Samuel Soto",
      role: "Security Analyst",
      image: "/images/team/Samuel.jpg",
      description:
        "Samuel is a Security Analyst at Com-Sec with expertise in continuous security monitoring and rapid incident response. He specializes in analyzing security logs, detecting anomalies, and coordinating response efforts to minimize impact. Samuel's proactive monitoring approach and analytical mindset ensure early threat detection and swift resolution of security incidents.",
      expertise: [
        "Security Monitoring",
        "Incident Response",
        "Log Analysis",
        "Threat Detection",
      ],
    },
    {
      name: "Parag Khankari",
      role: "Security Analyst",
      image: "/images/team/Parag.jpg",
      description:
        "Security Analyst at Com-Sec with expertise in vulnerability assessment, threat analysis, and security monitoring. Parag specializes in identifying security gaps and implementing robust protection measures to safeguard client environments and ensure compliance readiness.",
      expertise: [
        "Threat Analysis",
        "Vulnerability Assessment",
        "Security Monitoring",
        "Compliance Management",
      ],
    },
    {
      name: "Raj Dayakar",
      role: "Security Analyst",
      image: "/images/team/Raj.jpg",
      description:
        "Raj is a Security Analyst at Com-Sec, specializing in IT support, compliance, and cybersecurity. He identifies and remediates vulnerabilities in websites and systems, ensuring robust security measures. Raj's proactive approach keeps the infrastructure secure and compliant with industry standards.",
      expertise: [
        "IT Support",
        "Vulnerability Management",
        "Compliance",
        "Infrastructure Security",
      ],
    },
    {
      name: "Roshani Chitre",
      role: "Data Analyst",
      image: "/images/team/Roshni.png",
      description:
        "Roshani is a Data Analyst at Com-Sec, specializing in compliance reporting and operational analytics. She leverages tools like SQL, Python, Power BI, and Jira to automate reports, visualize incident trends, and extract insights from large datasets. Her work supports audit readiness and enhances decision-making across the information security team.",
      expertise: [
        "SQL & Python",
        "Power BI",
        "Compliance Reporting",
        "Data Analytics",
      ],
    },
  ];

  return (
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
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className={`group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-scale-in animation-delay-${(index + 1) * 100} opacity-0 bg-white border-0 shadow-lg overflow-hidden`}
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
                          className={`w-full h-full transform group-hover:scale-110 transition-transform duration-500 ${
                            member.name === "Banu Priya"
                              ? "object-cover object-top"
                              : member.name === "Samuel Soto"
                                ? "object-cover object-center scale-150 -translate-y-4"
                                : "object-cover object-center"
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
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {member.description}
                    </p>

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.expertise.slice(0, 2).map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                      {member.expertise.length > 2 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                          +{member.expertise.length - 2} more
                        </span>
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
                15+
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
                30+
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
            <Link to="/about/careers">
              View Open Positions
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
