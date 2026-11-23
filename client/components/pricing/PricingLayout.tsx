import type { ReactNode } from "react";
import { Helmet } from "react-helmet";
import { Link, useLocation } from "react-router-dom";
import { Sparkles } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import "../../styles/pricing.css";

const pricingTabs = [
  { label: "One-Time Engagements", href: "/pricing/one-time" },
  { label: "Ongoing Support", href: "/pricing/ongoing" },
  { label: "Package Calculator", href: "/pricing/calculator" },
];

type PricingLayoutProps = {
  title: string;
  description: string;
  canonical: string;
  heroTitle: string;
  heroSubtitle: string;
  children: ReactNode;
};

export function PricingLayout({
  title,
  description,
  canonical,
  heroTitle,
  heroSubtitle,
  children,
}: PricingLayoutProps) {
  const { pathname } = useLocation();

  const tabClass = (href: string) =>
    `inline-block rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
      pathname === href
        ? "bg-orange-500 text-white"
        : "text-slate-300 hover:bg-slate-800 hover:text-white"
    }`;

  return (
    <div className="min-h-screen bg-slate-950">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
      </Helmet>

      <Navigation />

      <section className="pricing-hero py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 pricing-hero-animation"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6 backdrop-blur-md border border-white/20">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-semibold">Transparent Pricing</span>
            </div>
            <h1 className="pricing-hero-title text-4xl md:text-6xl font-bold mb-6">
              {heroTitle}
            </h1>
            <p className="pricing-hero-subtitle text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              {heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      <nav className="bg-slate-900 border-b border-slate-800">
        <ul className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center gap-2 py-4">
          <li>
            <Link to="/pricing" className={tabClass("/pricing")}>
              Pricing Overview
            </Link>
          </li>
          {pricingTabs.map((tab) => (
            <li key={tab.href}>
              <Link to={tab.href} className={tabClass(tab.href)}>
                {tab.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {children}

      <Footer />
    </div>
  );
}
