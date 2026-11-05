import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ArrowRight, Check } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const INTRO_EMAIL = "team@com-sec.io";

const services = [
  "SOC 2",
  "ISO 27001",
  "HITRUST",
  "vCISO",
  "Penetration testing",
  "Managed security",
];

const steps = [
  {
    title: "Make the intro.",
    body: (
      <>
        Email us at{" "}
        <a
          href={`mailto:${INTRO_EMAIL}`}
          className="font-semibold underline underline-offset-2 hover:text-orange-700"
        >
          {INTRO_EMAIL}
        </a>
        , or connect us directly with your contact.
      </>
    ),
  },
  {
    title: "We take it from there.",
    body: "Our team meets with them, learns what they need, and puts together a proposal.",
  },
  {
    title: "You get paid.",
    body: "Once they sign and pay their first invoice, we send you 10% of it.",
  },
];

const goodFits = [
  "Startups and growing companies facing their first security review or compliance audit",
  "Healthcare and fintech companies handling sensitive data",
  "Teams without a full-time security leader",
];

const goodToKnow = [
  "The referral must be a new Com-Sec client.",
  "The payout is 10% of the client's first paid invoice, sent within 30 days of payment.",
  "If more than one person refers the same company, the first intro counts.",
];

// 18-point seal, drawn in a 200 x 200 viewBox.
const SEAL_POINTS = Array.from({ length: 36 }, (_, i) => {
  const radius = i % 2 === 0 ? 100 : 87;
  const angle = (Math.PI * i) / 18;
  return `${(100 + radius * Math.sin(angle)).toFixed(2)},${(100 - radius * Math.cos(angle)).toFixed(2)}`;
}).join(" ");

function RewardSeal() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto aspect-square w-64 sm:w-80 lg:w-[26rem] animate-in zoom-in-75 fade-in duration-700 motion-reduce:animate-none"
    >
      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full">
        <polygon points={SEAL_POINTS} className="fill-amber-300" />
        <circle
          cx="100"
          cy="100"
          r="74"
          fill="none"
          strokeWidth="1.5"
          strokeDasharray="1 5"
          strokeLinecap="round"
          className="stroke-primary"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-primary">
        <span className="text-7xl sm:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-none">
          10%
        </span>
        <span className="mt-2 font-mono text-xs sm:text-sm uppercase tracking-[0.15em]">
          Your thank-you
        </span>
      </div>
    </div>
  );
}

// A few hand-placed shapes for a sense of occasion. Decorative, and kept sparse on purpose.
const CONFETTI = [
  "left-[4%] top-[18%] h-3 w-3 rounded-full bg-amber-300",
  "left-[44%] top-[12%] h-2 w-6 rotate-12 rounded-full bg-accent",
  "right-[6%] top-[14%] h-2 w-5 -rotate-45 rounded-full bg-white/70",
  "right-[42%] bottom-[12%] h-3 w-3 rotate-45 bg-accent",
  "left-[10%] bottom-[10%] h-2 w-5 rotate-45 rounded-full bg-white/50",
  "right-[4%] bottom-[20%] h-3 w-3 rounded-full bg-accent",
];

export default function Refer() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Refer a Company to Com-Sec and Earn 10% | Com-Sec</title>
        <meta
          name="description"
          content="Know a company that needs SOC 2, ISO 27001, HITRUST, a vCISO, penetration testing, or managed security? Introduce them to Com-Sec and earn 10% of their first invoice."
        />
        <link rel="canonical" href="https://com-sec.io/refer" />
      </Helmet>

      <Navigation />

      <main>
        {/* Hero: the reward is the first thing anyone sees */}
        <section className="relative overflow-hidden bg-primary pt-28 pb-20 text-white lg:pt-36 lg:pb-28">
          <div aria-hidden="true" className="hidden lg:block">
            {CONFETTI.map((shape) => (
              <span key={shape} className={cn("absolute", shape)} />
            ))}
          </div>

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:px-8">
            <div>
              <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
                Refer a Company to Com-Sec and{" "}
                <span className="text-amber-300">Earn 10%</span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl">
                Know a company that needs SOC 2, ISO 27001, HITRUST, a vCISO,
                penetration testing, or managed security? Introduce them to
                Com-Sec. When they become a client, we'll pay you 10% of their
                first invoice as a thank-you.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                <Button
                  asChild
                  size="lg"
                  className="h-14 gap-2 bg-amber-300 px-8 text-lg font-bold text-primary hover:bg-amber-200 focus-visible:ring-amber-200 focus-visible:ring-offset-primary"
                >
                  <Link to="/contact">
                    Make an intro
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </Link>
                </Button>
                <a
                  href={`mailto:${INTRO_EMAIL}`}
                  className="text-base font-medium text-white underline underline-offset-4 hover:text-amber-300"
                >
                  or email {INTRO_EMAIL}
                </a>
              </div>

              <p className="mt-6 text-base text-white/80">
                Already working with us? Just connect us directly with your
                contact.
              </p>
            </div>

            <RewardSeal />
          </div>
        </section>

        {/* How it works: three steps that climb to the payoff */}
        <section className="bg-orange-50 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-extrabold tracking-tight text-primary md:text-5xl">
              How it works
            </h2>

            <ol className="mt-12 grid gap-6 lg:grid-cols-3 lg:items-end">
              {steps.map((step, index) => {
                const isPayoff = index === steps.length - 1;
                return (
                  <li
                    key={step.title}
                    className={cn(
                      "rounded-2xl p-8 text-primary",
                      isPayoff ? "bg-amber-300 lg:min-h-[23rem]" : "bg-white",
                      index === 0 && "lg:min-h-[17rem]",
                      index === 1 && "lg:min-h-[20rem]",
                    )}
                  >
                    <span className="font-mono text-sm uppercase tracking-[0.15em]">
                      Step {index + 1}
                    </span>
                    <h3
                      className={cn(
                        "mt-4 font-extrabold tracking-tight",
                        isPayoff ? "text-4xl" : "text-3xl",
                      )}
                    >
                      {step.title}
                    </h3>
                    <p className="mt-4 text-lg leading-relaxed">{step.body}</p>
                    {isPayoff && (
                      <p
                        aria-hidden="true"
                        className="mt-6 text-7xl font-extrabold leading-none tracking-tighter lg:text-8xl"
                      >
                        10%
                      </p>
                    )}
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        {/* Who can refer, and who to think of */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <h2 className="text-4xl font-extrabold tracking-tight text-primary md:text-5xl">
                Who can refer?
              </h2>
              <p className="mt-6 text-2xl leading-snug text-primary md:text-3xl">
                Clients, partners, friends, and anyone in our network.
              </p>
              <p className="mt-4 text-lg text-gray-700">
                You don't need to sign up.
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-extrabold tracking-tight text-primary md:text-5xl">
                Good fits
              </h2>
              <ul className="mt-6 space-y-5">
                {goodFits.map((fit) => (
                  <li key={fit} className="flex gap-4 text-lg text-gray-800">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-300 text-primary">
                      <Check className="h-4 w-4" strokeWidth={3} aria-hidden="true" />
                    </span>
                    {fit}
                  </li>
                ))}
              </ul>
              <ul className="mt-8 flex flex-wrap gap-2" aria-label="Services we can help with">
                {services.map((service) => (
                  <li
                    key={service}
                    className="rounded-full bg-orange-50 px-4 py-1.5 text-sm font-medium text-primary"
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Closing ask, with the terms in plain sight beside it */}
        <section className="bg-amber-300 py-20 text-primary lg:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:px-8">
            <div>
              <h2 className="text-4xl font-extrabold tracking-tight md:text-6xl">
                Who comes to mind?
              </h2>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                <Button
                  asChild
                  size="lg"
                  className="h-14 gap-2 bg-primary px-8 text-lg font-bold text-white hover:bg-primary/90"
                >
                  <Link to="/contact">
                    Make an intro
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </Link>
                </Button>
                <a
                  href={`mailto:${INTRO_EMAIL}`}
                  className="text-base font-medium underline underline-offset-4 hover:text-orange-800"
                >
                  or email {INTRO_EMAIL}
                </a>
              </div>
            </div>

            <div className="rounded-2xl bg-white/70 p-6">
              <h2 className="font-mono text-sm uppercase tracking-[0.15em]">Good to know</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-relaxed">
                {goodToKnow.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
