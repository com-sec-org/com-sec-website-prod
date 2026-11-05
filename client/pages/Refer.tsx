import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  Briefcase,
  CheckCircle,
  ChevronRight,
  ClipboardCheck,
  Layers,
  Search,
  ShieldCheck,
} from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const INTRO_EMAIL = "team@com-sec.io";

const PRIMARY_BUTTON =
  "bg-gradient-to-r from-accent to-orange-500 hover:from-orange-600 hover:to-orange-600 text-white border-0 transform hover:scale-105 transition-all duration-300";

const steps = [
  {
    title: "Make an introduction",
    body: "Connect us with a founder, executive, or company that could benefit from our services. A simple email introduction is all it takes.",
  },
  {
    title: "We handle the rest",
    body: "We'll learn about their needs, recommend the right services, and manage the entire sales process. You don't need to sell anything.",
  },
  {
    title: "Get rewarded",
    body: "When your referral becomes a client and pays their first invoice, you'll receive 10% of that payment within 30 days.",
  },
];

const referralNeeds = [
  {
    icon: ClipboardCheck,
    title: "SOC 2, ISO 27001, HITRUST, or HIPAA",
    body: "Compliance readiness, implementation, and audit support.",
  },
  {
    icon: Briefcase,
    title: "Fractional CISO",
    body: "Experienced security leadership without hiring a full-time CISO.",
  },
  {
    icon: ShieldCheck,
    title: "Managed Cybersecurity",
    body: "Ongoing security operations, monitoring, and IT support.",
  },
  {
    icon: Search,
    title: "Penetration Testing",
    body: "Independent security assessments of applications, APIs, and cloud environments.",
  },
  {
    icon: Layers,
    title: "Security Program Development",
    body: "Building and maintaining security programs that scale.",
  },
];

const participants = [
  {
    title: "Clients",
    body: "Recommend us to other companies in your network.",
  },
  {
    title: "Founders and executives",
    body: "Introduce fellow business leaders.",
  },
  {
    title: "Investors and advisors",
    body: "Connect portfolio companies that need security support.",
  },
  {
    title: "Consultants and technology partners",
    body: "Refer opportunities outside your service offerings.",
  },
  {
    title: "Friends of Com-Sec",
    body: "Anyone who knows a business we can help.",
  },
];

const faqs = [
  {
    question: "Do I need to sign up?",
    answer: "No. Simply make an introduction.",
  },
  {
    question: "Do I need to help close the deal?",
    answer: "Not at all. Our team handles discovery, proposals, and onboarding.",
  },
  {
    question: "When do I get paid?",
    answer: "Within 30 days after the referred client pays their first invoice.",
  },
  {
    question: "Can I refer more than one company?",
    answer:
      "Absolutely. There's no limit to the number of qualifying referrals you can make.",
  },
  {
    question: "What if someone else already referred the company?",
    answer: "The first qualifying introduction receives the referral reward.",
  },
];

export default function Refer() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Make an Introduction. Earn 10%. | Com-Sec</title>
        <meta
          name="description"
          content="Know a company that needs cybersecurity or compliance support? Introduce them to Com-Sec and we'll thank you with 10% of their first paid invoice."
        />
        <link rel="canonical" href="https://com-sec.io/refer" />
      </Helmet>

      <Navigation />

      <main>
        {/* Hero */}
        <section className="pt-24 pb-20 bg-gradient-to-br from-primary to-blue-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Make an Introduction.{" "}
              <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Earn 10%.
              </span>
            </h1>

            <p className="text-xl md:text-2xl font-semibold mb-6">
              Know a company that needs cybersecurity or compliance support?
              We'd love an introduction.
            </p>
            <p className="text-lg md:text-xl mb-4 text-white/90">
              At Com-Sec, we help growing companies strengthen security, achieve
              compliance, and manage ongoing cybersecurity operations.
            </p>
            <p className="text-lg md:text-xl mb-4 text-white/90">
              If you introduce us to a company that becomes a client, we'll thank
              you with{" "}
              <strong className="font-bold text-white">
                10% of their first paid invoice
              </strong>
              .
            </p>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              No registration. No complicated process. Just a warm introduction.
            </p>

            <Button size="lg" className={PRIMARY_BUTTON} asChild>
              <Link to="/contact">
                Make a Referral
                <ChevronRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-16 text-center">
              How It Works
            </h2>

            <ol className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <li key={step.title}>
                  <Card className="h-full hover:shadow-lg transition-shadow border-2 hover:border-accent/20">
                    <CardHeader>
                      <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-accent to-orange-500 text-xl font-bold text-white">
                        {index + 1}
                      </span>
                      <CardTitle className="text-xl text-primary">
                        {step.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{step.body}</p>
                    </CardContent>
                  </Card>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Who Should You Refer? */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Who Should You Refer?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We work with startups, growing businesses, and established
                organizations that need:
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
              {referralNeeds.map((need) => {
                const Icon = need.icon;
                return (
                  <Card
                    key={need.title}
                    className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.334rem)] hover:shadow-lg transition-shadow border-2 hover:border-accent/20"
                  >
                    <CardHeader>
                      <Icon className="h-10 w-10 text-accent mb-3" aria-hidden="true" />
                      <CardTitle className="text-lg text-primary">{need.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">{need.body}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <p className="mt-12 text-center text-lg text-gray-700">
              We specialize in supporting{" "}
              <strong className="font-bold text-primary">
                AI, SaaS, HealthTech, FinTech, and other technology-driven
                companies.
              </strong>
            </p>
          </div>
        </section>

        {/* Who Can Participate? */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Who Can Participate?
              </h2>
              <p className="text-xl text-muted-foreground">
                Our referral program is open to:
              </p>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {participants.map((participant) => (
                <li key={participant.title} className="flex gap-4 items-start">
                  <CheckCircle
                    className="h-6 w-6 text-accent flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <p className="text-lg text-gray-700">
                    <strong className="font-semibold text-primary">
                      {participant.title}:
                    </strong>{" "}
                    {participant.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <dl className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-lg border-2 bg-white p-6"
                >
                  <dt className="text-lg font-semibold text-primary">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-muted-foreground">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Know Someone We Can Help? */}
        <section className="py-20 bg-gradient-to-br from-primary to-blue-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Know Someone We Can Help?</h2>
            <p className="text-xl mb-8 text-white/90">
              A quick introduction could help a company strengthen its security
              and earn you a referral reward.
            </p>

            <Button size="lg" className={PRIMARY_BUTTON} asChild>
              <Link to="/contact">
                Make an Introduction
                <ChevronRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>

            <p className="mt-6 text-lg text-white/90">
              Or email{" "}
              <a
                href={`mailto:${INTRO_EMAIL}`}
                className="font-bold text-white underline underline-offset-4 hover:text-orange-300"
              >
                {INTRO_EMAIL}
              </a>
              .
            </p>

            <p className="mt-10 text-sm italic text-white/70">
              Referral rewards apply to qualifying new clients. Additional
              program terms and eligibility requirements may apply.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
