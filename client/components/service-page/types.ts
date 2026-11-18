import type { LucideIcon } from "lucide-react";

// Content model for service pages rendered by <ServicePage>.
// Every section except hero, seo and cta is optional, so thin and rich pages share one layout.

export interface IconCard {
  icon: LucideIcon;
  title: string;
  body: string;
}

export interface ServicePageContent {
  path: string; // e.g. "/iso42001"
  seo: {
    title: string;
    description: string;
    ogTitle: string;
    keywords?: string;
    serviceName: string; // used in the Service JSON-LD
  };
  hero: {
    eyebrow: string;
    title: string;
    highlight: string; // orange gradient part of the H1
    description: string;
    tags?: string[];
    // Use stats only for sourced numbers; otherwise a checklist.
    panel: {
      title: string;
      stats?: { value: string; label: string }[];
      checklist?: string[];
      footnote?: string;
    };
  };
  overview?: {
    eyebrow?: string;
    title: string;
    paragraphs: string[];
    callout?: { title: string; body: string };
  };
  audiences?: {
    eyebrow?: string;
    title: string;
    description?: string;
    items: IconCard[];
  };
  inclusions?: {
    eyebrow?: string;
    title: string;
    description?: string;
    items: IconCard[];
  };
  // Side-by-side options, e.g. black/gray/white box testing on pen test pages.
  approaches?: {
    eyebrow?: string;
    title: string;
    description?: string;
    items: (IconCard & { points: string[]; recommended?: boolean })[];
    note?: string;
  };
  structure?: {
    eyebrow?: string;
    title: string;
    description?: string;
    columns: { heading: string; caption?: string; items: { code: string; label: string }[] }[];
  };
  phases?: {
    eyebrow?: string;
    title: string;
    description?: string;
    steps: { title: string; timing?: string; body: string; points: string[] }[];
  };
  ongoing?: {
    eyebrow?: string;
    title: string;
    description: string;
    items: string[];
    aside?: { title: string; body: string; points: string[] };
  };
  platforms?: {
    title: string;
    description: string;
    names: string[];
    shieldNote?: string;
  };
  // Anchored sections for menu items that don't need a page of their own (e.g. /ai-governance#approval-workflows).
  sections?: { id: string; eyebrow?: string; title: string; body: string; points: string[] }[];
  why?: IconCard[];
  related?: { label: string; to: string; body: string }[];
  faqs?: { q: string; a: string }[];
  cta: {
    title: string;
    highlight: string;
    body: string;
    buttonLabel?: string;
  };
}
