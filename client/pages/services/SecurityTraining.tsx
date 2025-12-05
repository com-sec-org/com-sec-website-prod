import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
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
  Users,
  GraduationCap,
  Shield,
  MailWarning,
  AlertTriangle,
  CheckCircle,
  ClipboardList,
  Megaphone,
  ChevronRight,
  ArrowRight,
  Star,
} from "lucide-react";

export default function SecurityTraining() {
  return (

    <>
  <Helmet>
  {/* Primary SEO */}
  <title>Security Awareness Training | Phishing Simulations & Cybersecurity Training | Com-Sec</title>

  <meta
    name="description"
    content="Strengthen your organization's security culture with phishing simulations, awareness programs, incident response drills, secure development training, compliance education, and executive briefings tailored to your team."
  />

  <meta
    name="keywords"
    content="security training, cybersecurity awareness training, phishing simulation, employee security training, incident response training, secure development training, compliance training, SOC 2 training, HIPAA training, security culture, awareness programs"
  />

  <link rel="canonical" href="https://com-sec.io/security-training" />

  <meta name="robots" content="index, follow" />
  <meta name="author" content="Com-Sec" />
  <meta name="publisher" content="Com-Sec" />
  <meta charSet="utf-8" />
  <meta name="language" content="English" />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Security Awareness Training | Phishing Simulations & Cybersecurity Programs | Com-Sec"
  />
  <meta
    property="og:description"
    content="Hands-on cybersecurity training: phishing simulations, awareness modules, role-based education, incident drills, and secure development training."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://com-sec.io/security-training" />
  <meta property="og:site_name" content="Com-Sec" />
  <meta
    property="og:image"
    content="https://com-sec.io/images/security-training-cover.png"
  />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Security Awareness Training | Phishing Simulations & Cybersecurity Programs | Com-Sec"
  />
  <meta
    name="twitter:description"
    content="Boost your team's cybersecurity awareness with phishing simulations, training modules, compliance lessons, and incident response drills."
  />
  <meta
    name="twitter:image"
    content="https://com-sec.io/images/security-training-cover.png"
  />
</Helmet>

    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-orange-600 via-amber-600 to-orange-700 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-16 left-8 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-12 right-24 w-28 h-28 bg-orange-300/10 rounded-full blur-xl"></div>
          <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-amber-300/10 rounded-full blur-lg"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center bg-white/10 rounded-full px-6 py-2 text-white font-semibold text-sm mb-8 border border-white/20">
              <GraduationCap className="h-4 w-4 mr-2" />
              Security Awareness & Training
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="animate-typewriter-word animation-delay-200 bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
                Security Training
              </span>
              <span className="block animate-confidence-reveal animation-delay-600 bg-gradient-to-r from-white via-amber-200 to-white bg-clip-text text-transparent animate-gradient-shift">
                Programs
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              Build a security‑aware culture with hands‑on phishing simulations, targeted awareness campaigns, and role‑based training.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-accent to-orange-600 hover:from-accent/90 hover:to-orange-600/90 transform hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link to="/contact">
                  Launch Training Program
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Training Modules */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Core Training Modules
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Practical, engaging content that changes behavior and reduces risk
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Phishing Simulation",
                description:
                  "Real‑world email, SMS, and voice phishing campaigns with auto‑enrollment for failures",
                icon: MailWarning,
                color: "text-orange-600",
                bg: "bg-orange-50",
                items: ["Email/SMS/Voice lures", "Auto‑remediation flows", "Executive reporting"],
              },
              {
                title: "Security Awareness",
                description:
                  "Monthly micro‑learning with quizzes and bite‑sized videos tailored to your risks",
                icon: Megaphone,
                color: "text-amber-600",
                bg: "bg-amber-50",
                items: ["Role‑based tracks", "Policy acknowledgments", "Gamified leaderboards"],
              },
              {
                title: "Incident Response Drills",
                description:
                  "Tabletop exercises and live drills to practice roles and communications",
                icon: AlertTriangle,
                color: "text-red-600",
                bg: "bg-red-50",
                items: ["Tabletop scenarios", "Runbooks & checklists", "After‑action reports"],
              },
              {
                title: "Secure Development",
                description:
                  "Developer‑focused modules on OWASP Top 10, secrets, and cloud misconfigs",
                icon: ClipboardList,
                color: "text-purple-600",
                bg: "bg-purple-50",
                items: ["OWASP Top 10", "Secrets handling", "IaC best practices"],
              },
              {
                title: "Compliance Awareness",
                description:
                  "SOC 2, HIPAA, ISO 27001 essentials mapped to everyday responsibilities",
                icon: Shield,
                color: "text-blue-600",
                bg: "bg-blue-50",
                items: ["TSC overview", "HIPAA PHI handling", "ISO Annex A themes"],
              },
              {
                title: "Executive Briefings",
                description:
                  "Board‑ready risk briefings and metrics to drive culture from the top",
                icon: Users,
                color: "text-emerald-600",
                bg: "bg-emerald-50",
                items: ["Risk appetite", "KPI/KRI dashboards", "Program governance"],
              },
            ].map((m, i) => (
              <Card key={i} className={`hover:shadow-xl transition-all duration-300 ${m.bg} border-l-4 border-l-orange-400`}>
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

      {/* Outcomes */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Measurable Outcomes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { stat: "60%", label: "Phishing click‑rate reduction" },
              { stat: "90%", label: "Policy acknowledgment completion" },
              { stat: "<15min", label: "Average incident triage time" },
            ].map((o, i) => (
              <Card key={i} className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-amber-600 mb-2">{o.stat}</div>
                  <div className="text-muted-foreground">{o.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Ready to train your team?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get a customized program aligned to your risks, industry, and compliance goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-accent to-orange-600 hover:from-accent/90 hover:to-orange-600/90 transform hover:scale-105 transition-all duration-300"
              asChild
            >
              <Link to="/contact">
                Get Free Plan
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white"
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
