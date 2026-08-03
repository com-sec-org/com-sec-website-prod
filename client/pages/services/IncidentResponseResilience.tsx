import { Helmet } from "react-helmet";
import { Navigation } from "@/components/Navigation";
import { Link } from "react-router-dom";
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
  CheckCircle,
  ChevronRight,
  AlertTriangle,
  Shield,
  Clock,
  Users,
  BarChart3,
  Lock,
  Zap,
  Building2,
  FileCheck,
  BookOpen,
} from "lucide-react";

export default function IncidentResponseResilience() {
  return (
    <>
      <Helmet>
        <title>Incident Response & Business Resilience | Com-Sec</title>
        <meta
          name="description"
          content="Incident response planning, active incident response, digital forensics, business continuity, and disaster recovery planning to keep your organization running."
        />
        <link rel="canonical" href="https://com-sec.io/incident-response-resilience" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Incident Response & Resilience | Com-Sec" />
        <meta property="og:description" content="Expert incident response and business continuity planning to minimize downtime and protect your organization." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://com-sec.io/incident-response-resilience" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-24 pb-20 bg-gradient-to-br from-amber-900 via-red-800 to-orange-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-16 left-8 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-12 right-24 w-28 h-28 bg-yellow-400/10 rounded-full blur-xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <div className="inline-flex items-center bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full px-6 py-2 text-amber-700 font-semibold text-sm mb-8 border border-yellow-200">
                <AlertTriangle className="h-4 w-4 mr-2" />
                Crisis Management & Recovery
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Incident Response &
                </span>
                <span className="block bg-gradient-to-r from-white to-yellow-300 bg-clip-text text-transparent">
                  Business Resilience
                </span>
              </h1>

              <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
                Proactive planning and expert response to security incidents. Minimize downtime, recover quickly, and maintain business continuity when incidents occur.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-500/90 hover:to-orange-600/90 transform hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <Link to="/contact">
                    Develop Your IR Plan
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Core Services */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Our Incident Response & Resilience Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Comprehensive planning, training, and response capabilities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Incident Response Planning",
                  icon: FileCheck,
                  description: "Develop comprehensive incident response procedures and playbooks.",
                  features: [
                    "IR policy and procedures",
                    "Incident classification framework",
                    "Escalation procedures",
                    "Communication plans",
                    "Contact information repository",
                    "Regulatory notification templates",
                    "Regular updates and drills",
                    "Staff training materials"
                  ],
                  price: "Starting at $4,500"
                },
                {
                  title: "Active Incident Response",
                  icon: Zap,
                  description: "Expert response when incidents occur to minimize damage.",
                  features: [
                    "24/7 incident response team",
                    "Rapid containment",
                    "Evidence preservation",
                    "Root cause analysis",
                    "Recovery guidance",
                    "Executive reporting",
                    "Post-incident review",
                    "Lessons learned documentation"
                  ],
                  price: "Custom pricing"
                },
                {
                  title: "Digital Forensics Coordination",
                  icon: Lock,
                  description: "Coordinate forensic investigations and evidence handling.",
                  features: [
                    "Forensic assessment",
                    "Evidence collection support",
                    "Chain of custody management",
                    "Forensic investigator coordination",
                    "Report review and interpretation",
                    "Legal consultation support",
                    "System recovery guidance",
                    "Timeline reconstruction"
                  ],
                  price: "Starting at $3,500"
                },
                {
                  title: "Tabletop Exercises",
                  icon: Users,
                  description: "Hands-on training to prepare your team for incident response.",
                  features: [
                    "Custom scenario design",
                    "Realistic incident simulation",
                    "Leadership participation",
                    "Cross-functional teams",
                    "Communication drills",
                    "Decision-making practice",
                    "After-action review",
                    "Training report"
                  ],
                  price: "Starting at $3,000"
                },
                {
                  title: "Business Continuity Planning",
                  icon: Building2,
                  description: "Ensure critical business functions continue during disruptions.",
                  features: [
                    "Business impact analysis",
                    "Critical function identification",
                    "Alternative process development",
                    "Alternate work site planning",
                    "Communication procedures",
                    "Data backup strategy",
                    "Testing and validation",
                    "Ongoing maintenance"
                  ],
                  price: "Starting at $5,000"
                },
                {
                  title: "Disaster Recovery Planning",
                  icon: BarChart3,
                  description: "Rapid IT system recovery to minimize service disruption.",
                  features: [
                    "IT system inventory",
                    "Recovery time objectives (RTO)",
                    "Recovery point objectives (RPO)",
                    "Backup strategy development",
                    "Failover procedures",
                    "Data replication setup",
                    "DR testing and validation",
                    "Recovery runbooks"
                  ],
                  price: "Starting at $4,500"
                }
              ].map((service, idx) => {
                const IconComponent = service.icon;
                return (
                  <Card key={idx} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-xl">{service.title}</CardTitle>
                          <CardDescription className="mt-2">{service.description}</CardDescription>
                        </div>
                        <IconComponent className="h-8 w-8 text-accent flex-shrink-0 ml-4" />
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm mb-3">Includes:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="pt-4 border-t">
                        <div className="font-bold text-accent text-sm">{service.price}</div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* IR Process */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Our Incident Response Process
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Industry-standard IR framework for effective incident management
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-6">
              {[
                {
                  stage: "Preparation",
                  description: "IR plans, procedures, and team training in place before incidents occur."
                },
                {
                  stage: "Detection",
                  description: "Identify and recognize potential security incidents in your environment."
                },
                {
                  stage: "Containment",
                  description: "Isolate affected systems to prevent further damage or spread."
                },
                {
                  stage: "Eradication",
                  description: "Remove the threat and eliminate the root cause of the incident."
                },
                {
                  stage: "Recovery",
                  description: "Restore systems and data while monitoring for re-infection."
                }
              ].map((phase, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow text-center">
                  <CardHeader>
                    <div className="text-4xl font-bold text-accent mb-3">{String(idx + 1).padStart(2, '0')}</div>
                    <CardTitle className="text-lg">{phase.stage}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{phase.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground text-lg">
                <strong>Ongoing Monitoring:</strong> Continuous monitoring and lessons learned from every incident
              </p>
            </div>
          </div>
        </section>

        {/* Planning Components */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                What's Included in Our Plans
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Incident Response Plan",
                  items: [
                    "Incident classification",
                    "Response procedures",
                    "Escalation procedures",
                    "Contact lists",
                    "Communication templates",
                    "Legal/compliance guidance",
                    "External resources"
                  ]
                },
                {
                  title: "Business Continuity Plan",
                  items: [
                    "Business impact analysis",
                    "Critical functions list",
                    "Recovery strategies",
                    "Alternative locations",
                    "Communication plan",
                    "Testing schedule",
                    "Maintenance procedures"
                  ]
                },
                {
                  title: "Disaster Recovery Plan",
                  items: [
                    "System inventory",
                    "Recovery priorities",
                    "Backup procedures",
                    "Failover processes",
                    "Recovery time objectives",
                    "Testing procedures",
                    "Documentation"
                  ]
                },
                {
                  title: "Crisis Communication Plan",
                  items: [
                    "Stakeholder list",
                    "Message templates",
                    "Communication channels",
                    "Timing guidelines",
                    "Spokesperson identification",
                    "Internal procedures",
                    "External protocols"
                  ]
                }
              ].map((plan, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{plan.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {plan.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Why Partner With Us for Incident Response
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                "Experienced incident response professionals",
                "Proven rapid response capabilities",
                "Industry-standard IR frameworks",
                "Customized plans for your organization",
                "Hands-on tabletop exercise training",
                "24/7 incident support availability",
                "Clear post-incident reporting",
                "Continuous plan updates and improvements"
              ].map((benefit, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-lg text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-amber-900 via-red-800 to-orange-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Build Your Resilience?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Don't wait for an incident to realize you're not prepared. Build your incident response and continuity plans today.
            </p>
            <Button
              size="lg"
              className="bg-white text-amber-900 hover:bg-gray-100"
              asChild
            >
              <Link to="/contact">
                Start Your Planning Engagement
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
