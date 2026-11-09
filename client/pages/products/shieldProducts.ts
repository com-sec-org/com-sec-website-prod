import type { LucideIcon } from "lucide-react";
import { Bot, Bug, GraduationCap, Laptop, ShieldCheck } from "lucide-react";

// Single source for the Shield product line: the navbar Products menu, the
// /products overview, and each /products/<slug> page all read from here.
// To launch a roadmap product, give it a `page` (and add its route in
// client/main.tsx plus sitemap.xml / seo-routes.ts entries).

export type ShieldProductPage = {
  tagline: string;
  description: string;
  features?: string[];
  cta: string;
  statusLabel?: string; // shown as a badge on products that aren't available yet
};

export type ShieldProduct = {
  name: string;
  slug: string;
  available: boolean;
  icon?: LucideIcon;
  page?: ShieldProductPage;
};

export const productPath = (slug: string) => `/products/${slug}`;

export const shieldProducts: ShieldProduct[] = [
  {
    name: "Shield GRC",
    slug: "shield-grc",
    available: true,
    icon: ShieldCheck,
    page: {
      tagline: "Know what's ready for your audit and what still needs work.",
      description:
        "Manage policies, controls, evidence, and audit tasks in one place. Assign owners, track outstanding requests, and see what needs attention before your next audit.",
      features: [
        "Map controls and evidence to the frameworks you're working toward.",
        "Track policies, control owners, due dates, and evidence requests.",
        "Manage risks, vendor reviews, and remediation tasks.",
      ],
      cta: "Request a Shield GRC demo",
    },
  },
  {
    name: "Shield Learn",
    slug: "shield-learn",
    available: true,
    icon: GraduationCap,
    page: {
      tagline: "Help employees spot phishing and know what to do next.",
      description:
        "Run security awareness training and phishing simulations from one place. See who's completed training, where employees get tripped up, and who needs follow-up.",
      features: [
        "Assign short courses by role or team.",
        "Run recurring phishing simulations and assign follow-up training.",
        "Track completion, phishing results, and trends over time.",
      ],
      cta: "Request a Shield Learn demo",
    },
  },
  {
    name: "Shield Pentest",
    slug: "shield-pentest",
    available: true,
    icon: Bug,
    page: {
      tagline: "Keep every pentest finding moving toward a verified fix.",
      description:
        "Manage penetration tests from scope through retesting. Give testers, security teams, and engineers one place to see what was tested, what was found, and what still needs to be fixed.",
      features: [
        "Define targets, test windows, and access requirements.",
        "Review findings, supporting evidence, and remediation guidance.",
        "Assign fixes, request retests, and document closure.",
      ],
      cta: "Request a Shield Pentest demo",
    },
  },
  {
    name: "Shield Endpoint",
    slug: "shield-endpoint",
    available: false,
    icon: Laptop,
    page: {
      tagline: "Manage and secure the devices your team works on.",
      description:
        "Enroll company devices, see who uses them, and check whether they meet your security requirements. Manage settings such as encryption and screen locks, deploy approved apps, and support device offboarding.",
      cta: "Request a Shield Endpoint demo",
      statusLabel: "On the roadmap",
    },
  },
  { name: "Shield SaaS", slug: "shield-saas", available: false },
  { name: "Shield Scorecard", slug: "shield-scorecard", available: false },
  {
    name: "Shield AI",
    slug: "shield-ai",
    available: false,
    icon: Bot,
    page: {
      tagline: "Give employees a clear path to use AI responsibly.",
      description:
        "Keep an inventory of AI tools, track who owns them, and manage requests for new ones. Document what data each tool can handle, review vendor risks, and revisit approvals as use changes.",
      cta: "Get product updates",
      statusLabel: "Planned",
    },
  },
  { name: "Shield Audit", slug: "shield-audit", available: false },
  { name: "Shield Assets", slug: "shield-assets", available: false },
  { name: "Shield VM", slug: "shield-vm", available: false },
  { name: "Shield Vault", slug: "shield-vault", available: false },
  { name: "Shield Email", slug: "shield-email", available: false },
];

export const availableProducts = shieldProducts.filter((p) => p.available);
export const roadmapProducts = shieldProducts.filter((p) => !p.available);
