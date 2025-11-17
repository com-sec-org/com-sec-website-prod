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
  Shield,
  Target,
  Activity,
  AlertTriangle,
  FileCheck,
  TrendingUp,
  CheckCircle,
  ChevronRight,
  ArrowRight,
  BarChart3,
} from "lucide-react";

export default function RiskManagement() {
  return (


    <>
    <link
          rel="canonical"
          href="https://com-sec.io/risk-management"
        />
  
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-teal-800 via-cyan-800 to-teal-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-16 left-8 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-12 right-24 w-28 h-28 bg-cyan-300/10 rounded-full blur-xl"></div>
          <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-teal-300/10 rounded-full blur-lg"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center bg-white/10 rounded-full px-6 py-2 text-white font-semibold text-sm mb-8 border border-white/20">
              <Shield className="h-4 w-4 mr-2" />
              Enterprise Risk Management
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="animate-typewriter-word animation-delay-200 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                Risk Management
              </span>
              <span className="block animate-confidence-reveal animation-delay-600 bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent animate-gradient-shift">
                & Governance
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              Identify, assess, and mitigate cybersecurity risks with a measurable, programmatic approach aligned to your business objectives.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-accent to-orange-600 hover:from-accent/90 hover:to-orange-600/90 transform hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link to="/contact">
                  Start Risk Assessment
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Core Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Practical services that reduce likelihood and impact across your environment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Risk Assessment",
                description:
                  "Data‑driven identification and scoring of risks across assets, vendors, and processes",
                icon: Target,
                color: "text-cyan-600",
                bg: "bg-cyan-50",
                items: ["Asset & data mapping", "Likelihood/impact scoring", "Remediation roadmap"],
              },
              {
                title: "Threat Modeling",
                description:
                  "Scenario‑based analysis to understand credible threats and attack paths",
                icon: Activity,
                color: "text-teal-600",
                bg: "bg-teal-50",
                items: ["STRIDE use cases", "Crown‑jewel focus", "Mitigation strategies"],
              },
              {
                title: "Control Testing",
                description:
                  "Validation of control design and operating effectiveness with evidence collection",
                icon: FileCheck,
                color: "text-blue-600",
                bg: "bg-blue-50",
                items: ["Design reviews", "Sampling & walkthroughs", "Evidence repositories"],
              },
              {
                title: "Issue & Exception Management",
                description:
                  "Track findings, ownership, due dates, and risk acceptance with governance",
                icon: AlertTriangle,
                color: "text-red-600",
                bg: "bg-red-50",
                items: ["Owner assignments", "Risk acceptance", "Board reporting"],
              },
              {
                title: "KRI/KPI Dashboards",
                description:
                  "Board‑ready metrics that show risk reduction and program maturity",
                icon: BarChart3,
                color: "text-indigo-600",
                bg: "bg-indigo-50",
                items: ["Heat maps", "Trend lines", "Quarterly reviews"],
              },
              {
                title: "Program Governance",
                description:
                  "Policies, standards, and cadence to keep risk under control",
                icon: TrendingUp,
                color: "text-emerald-600",
                bg: "bg-emerald-50",
                items: ["Policies & standards", "RACI & committees", "Audit readiness"],
              },
            ].map((m, i) => (
              <Card key={i} className={`hover:shadow-xl transition-all duration-300 ${m.bg} border-l-4 border-l-teal-400`}>
                <CardHeader>
                  <m.icon className={`h-12 w-12 mb-4 ${m.color}`} />
                  <CardTitle className="text-xl">{m.title}</CardTitle>
                  <CardDescription className="text-base">{m.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {m.items.map((it, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{it}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Ready to reduce risk?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get a tailored risk register and 90‑day reduction plan aligned to your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-accent to-orange-600 hover:from-accent/90 hover:to-orange-600/90 transform hover:scale-105 transition-all duration-300"
              asChild
            >
              <Link to="/contact">
                Book Free Assessment
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white"
              asChild
            >
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
}
