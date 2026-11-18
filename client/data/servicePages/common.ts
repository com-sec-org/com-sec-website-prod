import { Award, LayoutDashboard, Timer } from "lucide-react";
import type { ServicePageContent } from "@/components/service-page/types";

// Shared copy reused across service pages. Sources: "Why Com-Sec" strips on the one pagers
// and the Services Booklet company overview. No pricing.

export const whyComSec: NonNullable<ServicePageContent["why"]> = [
  {
    icon: Award,
    title: "Seasoned InfoSec Team",
    body: "Hands on experience across SOC 2, ISO 27001, HIPAA and GDPR, with more than 100 clients secured.",
  },
  {
    icon: LayoutDashboard,
    title: "Built for Your GRC Platform",
    body: "We work inside the platform you already use, so evidence and tasks stay in one place.",
  },
  {
    icon: Timer,
    title: "Start Within Days",
    body: "No long hiring cycle. Our team picks up the work quickly and scales with you.",
  },
];

export const grcPlatforms: NonNullable<ServicePageContent["platforms"]> = {
  title: "Built for Your GRC Platform",
  description: "We work inside the platform you already use, so your controls, policies and evidence stay in one place.",
  names: ["Drata", "Vanta", "Sprinto", "Kertos", "Shield GRC"],
  shieldNote: "No platform yet? Shield GRC is our own platform for controls, evidence, policies and audits.",
};

export const defaultCta = (title: string, highlight: string, body: string): ServicePageContent["cta"] => ({
  title,
  highlight,
  body,
});
