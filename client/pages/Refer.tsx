import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  ArrowRight,
  Briefcase,
  CheckCircle,
  ChevronRight,
  ClipboardCheck,
  Handshake,
  Layers,
  Search,
  ShieldCheck,
} from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const INTRO_EMAIL = "team@com-sec.io";

const PRIMARY_BUTTON =
  "bg-gradient-to-r from-accent to-orange-600 hover:from-accent/80 hover:to-orange-500 text-white transform hover:scale-105 transition-all duration-300 text-sm sm:text-base px-6 sm:px-8 shadow-2xl whitespace-nowrap backdrop-blur-sm border border-white/10";

const ORANGE_TEXT =
  "bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent";

// The homepage hero's entrance animation. Delays are set inline because the
// animate-* shorthand in global.css resets the animation-delay-* utilities.
const FADE_UP =
  "animate-fade-in-delayed opacity-0 motion-reduce:animate-none motion-reduce:opacity-100";
const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

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

/** The homepage's soft light section background, in blue and orange. */
function LightGlowBackground() {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <div className="absolute top-0 left-1/4 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-orange-400/10 blur-3xl" />
    </div>
  );
}

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
        <section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-primary via-blue-900 to-blue-800 pt-24 pb-20 text-white">
          <div className="absolute inset-0 hidden lg:block" aria-hidden="true">
            <div className="absolute top-20 left-10 h-32 w-32 rounded-full bg-white/5" />
            <div className="absolute top-40 right-20 h-24 w-24 rounded-full bg-white/5" />
            <div className="absolute bottom-20 left-1/4 h-16 w-16 rounded-full bg-white/5" />
          </div>


          <div className="relative z-20 mx-auto w-full max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <div
              className="mb-6 animate-slide-down opacity-0 motion-reduce:animate-none motion-reduce:opacity-100 sm:mb-8"
              style={delay(100)}
            >
              <div className="inline-flex items-center rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 text-xs font-medium text-orange-300 backdrop-blur-sm transition-transform duration-300 hover:scale-105 sm:px-6 sm:text-sm">
                <Handshake
                  className="mr-2 h-3 w-3 flex-shrink-0 sm:h-4 sm:w-4"
                  aria-hidden="true"
                />
                No registration. No complicated process. Just a warm introduction.
              </div>
            </div>

            <h1 className="mb-6 pb-2 text-3xl font-bold leading-tight drop-shadow-2xl sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="text-white">Make an Introduction.</span>{" "}
              <span className="block bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent lg:inline">
                Earn 10%.
              </span>
            </h1>

            <p
              className={`mx-auto mb-8 max-w-4xl text-lg text-white/90 drop-shadow-lg sm:text-xl md:text-2xl ${FADE_UP}`}
              style={delay(300)}
            >
              Know a company that needs cybersecurity or compliance support?{" "}
              <span className="animate-shimmer-text bg-gradient-to-r from-white via-orange-200 to-white bg-clip-text text-transparent motion-reduce:animate-none">
                We'd love an introduction.
              </span>
            </p>

            <p
              className={`mx-auto mb-4 max-w-3xl text-base text-white/80 sm:text-lg ${FADE_UP}`}
              style={delay(500)}
            >
              At Com-Sec, we help growing companies strengthen security, achieve
              compliance, and manage ongoing cybersecurity operations.
            </p>
            <p
              className={`mx-auto mb-8 max-w-3xl text-base text-white/80 sm:text-lg ${FADE_UP}`}
              style={delay(700)}
            >
              If you introduce us to a company that becomes a client, we'll thank
              you with{" "}
              <strong className={`font-bold ${ORANGE_TEXT}`}>
                10% of their first paid invoice
              </strong>
              .
            </p>

            <div
              className={`flex flex-col justify-center gap-4 sm:flex-row ${FADE_UP}`}
              style={delay(900)}
            >
              <Button size="lg" className={PRIMARY_BUTTON} asChild>
                <Link to="/contact" className="flex items-center gap-2">
                  Make a Referral
                  <ChevronRight
                    className="h-4 w-4 flex-shrink-0 animate-bounce-x motion-reduce:animate-none sm:h-5 sm:w-5"
                    aria-hidden="true"
                  />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="transform whitespace-nowrap border-2 border-white bg-white/10 px-6 font-semibold text-white shadow-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white hover:text-slate-900 sm:px-8"
                asChild
              >
                <a href="#how-it-works" className="flex items-center gap-2 font-semibold">
                  How It Works
                  <ArrowRight
                    className="h-4 w-4 flex-shrink-0 sm:h-5 sm:w-5"
                    aria-hidden="true"
                  />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section
          id="how-it-works"
          className="relative scroll-mt-16 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-blue-900 py-16 text-white sm:py-20"
        >
          <div
            className="absolute top-10 left-10 h-32 w-32 rounded-full bg-blue-400/10"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-10 right-16 h-24 w-24 rounded-full bg-accent/10"
            aria-hidden="true"
          />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-12 text-center text-3xl font-bold sm:mb-16 sm:text-4xl lg:text-5xl">
              How It{" "}
              <span className="bg-gradient-to-r from-accent to-orange-400 bg-clip-text text-transparent">
                Works
              </span>
            </h2>

            <ol className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {steps.map((step, index) => (
                <li
                  key={step.title}
                  className="rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-accent/50 sm:p-8"
                >
                  <div className="mb-4 text-4xl font-bold text-accent lg:text-5xl">
                    {index + 1}
                  </div>
                  <h3 className="mb-3 text-xl font-bold sm:text-2xl">{step.title}</h3>
                  <p className="text-base leading-relaxed text-white/80">{step.body}</p>
                  <div className="mt-6 h-1 w-full overflow-hidden rounded-full bg-white/20">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-accent to-orange-500"
                      style={{ width: `${((index + 1) / steps.length) * 100}%` }}
                    />
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Who Should You Refer? */}
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 py-16 sm:py-20">
          <LightGlowBackground />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center sm:mb-16">
              <h2 className="mb-4 text-3xl font-bold text-primary sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
                Who Should You{" "}
                <span className="bg-gradient-to-r from-accent to-orange-600 bg-clip-text text-transparent">
                  Refer?
                </span>
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-600 sm:text-xl">
                We work with startups, growing businesses, and established
                organizations that need:
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
              {referralNeeds.map((need) => {
                const Icon = need.icon;
                return (
                  <div
                    key={need.title}
                    className="w-full transform rounded-2xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-orange-200 hover:shadow-2xl sm:p-8 md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.334rem)]"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-accent to-orange-600 text-white">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-primary sm:text-xl">
                      {need.title}
                    </h3>
                    <p className="text-base leading-relaxed text-gray-700">{need.body}</p>
                  </div>
                );
              })}
            </div>

            <p className="mx-auto mt-12 max-w-5xl text-center text-lg text-gray-600 sm:text-xl">
              We specialize in supporting{" "}
              <strong className="font-bold text-primary">
                AI, SaaS, HealthTech, FinTech, and other technology-driven
                companies.
              </strong>
            </p>
          </div>
        </section>

        {/* Who Can Participate? */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-16 text-white sm:py-20">
          <div
            className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center sm:mb-16">
              <h2 className="mb-4 text-3xl font-bold sm:mb-6 sm:text-4xl lg:text-5xl">
                Who Can{" "}
                <span className="bg-gradient-to-r from-accent to-orange-400 bg-clip-text text-transparent">
                  Participate?
                </span>
              </h2>
              <p className="text-lg text-white/80 sm:text-xl">
                Our referral program is open to:
              </p>
            </div>

            <ul className="flex flex-wrap justify-center gap-6">
              {participants.map((participant) => (
                <li
                  key={participant.title}
                  className="w-full rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-accent/50 md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
                >
                  <CheckCircle className="mb-4 h-7 w-7 text-accent" aria-hidden="true" />
                  <p className="text-base leading-relaxed text-white/80">
                    <strong className="block text-lg font-bold text-white">
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
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 py-16 sm:py-20">
          <LightGlowBackground />

          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-12 text-center text-3xl font-bold text-primary sm:mb-16 sm:text-4xl md:text-5xl">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-accent to-orange-600 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>

            <dl className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:border-orange-200 hover:shadow-xl"
                >
                  <dt className="text-lg font-bold text-primary">{faq.question}</dt>
                  <dd className="mt-2 text-base text-gray-700">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Know Someone We Can Help? */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-16 text-white sm:py-20">

          <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-white/20 bg-gradient-to-r from-accent/20 to-blue-500/20 p-6 backdrop-blur-sm sm:p-10">
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
                Know Someone We Can Help?
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-base text-white/80 sm:text-lg">
                A quick introduction could help a company strengthen its security
                and earn you a referral reward.
              </p>

              <Button size="lg" className={PRIMARY_BUTTON} asChild>
                <Link to="/contact" className="flex items-center gap-2">
                  Make an Introduction
                  <ChevronRight
                    className="h-4 w-4 flex-shrink-0 animate-bounce-x motion-reduce:animate-none sm:h-5 sm:w-5"
                    aria-hidden="true"
                  />
                </Link>
              </Button>

              <p className="mt-6 text-base text-white/90">
                Or email{" "}
                <a
                  href={`mailto:${INTRO_EMAIL}`}
                  className="font-bold text-orange-300 underline underline-offset-4 hover:text-orange-200"
                >
                  {INTRO_EMAIL}
                </a>
                .
              </p>
            </div>

            <p className="mt-8 text-sm italic text-white/70">
              Referral rewards apply to qualifying new clients. Additional program
              terms and eligibility requirements may apply.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
