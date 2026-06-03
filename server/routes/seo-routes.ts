const BASE_URL = "https://com-sec.io";

// ─── Priority map ─────────────────────────────────────────────────────────────
// Routes starting with /blog/ get 0.7, service/framework/about pages get 0.8, / gets 1.0
function getPriority(path: string): string {
  if (path === "/") return "1.0";
  if (path.startsWith("/blog/")) return "0.7";
  return "0.8";
}

// ─── Legacy blog URLs ─────────────────────────────────────────────────────────
// Blog pages that exist on the site but don't need full SEO metadata.
// Adding a new blog to SEO_ROUTES below is preferred — it auto-adds it here too.
const LEGACY_BLOG_URLS: string[] = [
  "/blog/agentic-ai-governance-lifecycle-management-healthcare-2026",
  "/blog/automated-vs-manual-penetration-testing-2026",
  "/blog/caryhealth-first-client-story",
  "/blog/how-to-prepare-for-soc2-2026",
  "/blog/soc2-audit-checklist-2026",
  "/blog/top-10-online-safety-tips",
  "/blog/the-order-of-operations-for-engaging-a-vciso-a-step-by-step-guide",
  "/blog/what-the-latest-ftc-guidelines-mean-for-smbs-in-2026",
  "/blog/cloud-penetration-testing-how-to-secure-aws-azure-and-gcp-workloads-in-2025",
  "/blog/understanding-the-differences-between-a-vcco-vs-vciso",
  "/blog/the-vital-importance-of-security-and-compliance-for-health-companies-safeguarding-patient-data",
  "/blog/the-pros-and-cons-of-undergoing-soc-2-type-ii-and-hitrust-audits-simultaneously",
  "/blog/cybersecurity-roundup-key-trends-and-threats-for-startups-in-may",
  "/blog/compliance-vs-security-key-differences-why-both-matter-2026",
  "/blog/how-ai-and-analytics-improve-ongoing-security-operations",
  "/blog/hitrust-vs-hipaa-which-is-right-for-my-organization",
  "/blog/different-types-of-compliance-audits-complete-guide-for-2025",
  "/blog/com-sec-your-trusted-partner-in-achieving-soc2-compliance",
  "/blog/ai-health-companies-protect-patient-privacy-confidentiality-2026",
  "/blog/20-years-of-cybersecurity-a-journey-through-the-digital-age",
  "/blog/how-ai-is-changing-it-security-operations-in-2025",
  "/blog/iso-27001-certification-guide-what-it-is-why-it-matters-and-how-to-get-compliant",
  "/blog/importance-of-transparency-accuracy-and-accountability",
  "/blog/what-are-managed-security-compliance-services-and-why-are-they-essential",
  "/blog/what-is-cyber-threat-intelligence-amp-why-it-matters",
  "/blog/global-cybersecurity-regulations-in-2025-how-to-prepare-your-business",
  "/blog/the-role-of-ai-in-penetration-testing-hype-vs-reality",
  "/blog/web-application-penetration-testing-checklist-2025-edition",
  "/blog/continuous-monitoring-security-compliance",
  "/blog/soc-2-vs-iso-27001-which-is-right-for-you",
  "/blog/ai-ethics-healthcare-innovation",
  "/blog/why-soc-2-matterseven-if-youre-not-a-big-company",
];

// ─── Sitemap generator ────────────────────────────────────────────────────────
export function generateSitemap(): string {
  const today = new Date().toISOString().split("T")[0];

  // All routes from SEO_ROUTES (sorted: homepage first, then others)
  const seoRouteUrls = Object.keys(SEO_ROUTES).map((path) => ({
    loc: `${BASE_URL}${path === "/" ? "" : path}`,
    priority: getPriority(path),
  }));

  // Legacy blog URLs not already covered by SEO_ROUTES
  const seoRoutePaths = new Set(Object.keys(SEO_ROUTES));
  const legacyUrls = LEGACY_BLOG_URLS.filter((p) => !seoRoutePaths.has(p)).map((path) => ({
    loc: `${BASE_URL}${path}`,
    priority: "0.7",
  }));

  const allUrls = [...seoRouteUrls, ...legacyUrls];

  const urlEntries = allUrls
    .map(
      ({ loc, priority }) =>
        `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${priority}</priority>\n  </url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>`;
}

export interface PageSEO {
  title: string;
  description: string;
  canonical: string;
  image?: string;
  keywords?: string;
}

export const SEO_ROUTES: Record<string, PageSEO> = {
  "/": {
    title: "Trusted Cybersecurity & SOC 2 Compliance Services | Com-Sec",
    description:
      "Comsec delivers expert cybersecurity services including SOC 2 compliance, penetration testing, cloud security, and compliance audits to protect and scale your business.",
    canonical: `${BASE_URL}/`,
    image: `${BASE_URL}/images/pages/home.webp`,
    keywords: "cybersecurity services, soc 2 readiness, penetration testing, iso 27001 compliance, cloud security",
  },

  // Services
  "/services": {
    title: "Cybersecurity & IT Security Services | SOC 2, Pen Testing, ISO | Com-Sec",
    description:
      "Explore Com-Sec's full suite of cybersecurity services including SOC 2 readiness, penetration testing, IT support, cloud security, and risk management.",
    canonical: `${BASE_URL}/services`,
    image: `${BASE_URL}/images/services/services.webp`,
  },
  "/soc2-readiness": {
    title: "SOC 2 Readiness & Audit Preparation Services | Com-Sec",
    description:
      "Get complete SOC 2 readiness support, audit preparation, control implementation, risk assessment, and gap remediation.",
    canonical: `${BASE_URL}/soc2-readiness`,
    image: `${BASE_URL}/images/soc2-readiness.webp`,
  },
  "/penetration-testing-services": {
    title: "Penetration Testing Services | Internal & External Pen Testing | Com-Sec",
    description:
      "Advanced penetration testing services for web apps, APIs, cloud, internal networks, and mobile applications.",
    canonical: `${BASE_URL}/penetration-testing-services`,
    image: `${BASE_URL}/images/services/penetration-testing.webp`,
  },
  "/cloud-security": {
    title: "Cloud Security Services | AWS, Azure, GCP Hardening | Com-Sec",
    description:
      "Cloud security assessments, IAM hardening, CIS benchmarks, architecture review, and remediation across AWS, Azure, and GCP.",
    canonical: `${BASE_URL}/cloud-security`,
    image: `${BASE_URL}/images/cloud-security.webp`,
  },
  "/compliance-audit-readiness": {
    title: "Compliance Audit Readiness | SOC 2, ISO 27001, HIPAA, PCI | Com-Sec",
    description:
      "Prepare for compliance audits with gap assessments, evidence collection, policy development, and readiness reporting.",
    canonical: `${BASE_URL}/compliance-audit-readiness`,
    image: `${BASE_URL}/images/services/audit-readiness.webp`,
  },
  "/it-support": {
    title: "IT Support & Security Operations | Endpoints, MDM, Access Reviews | Com-Sec",
    description:
      "Get IT and security operational support including device management, encryption, access reviews, and IT onboarding/offboarding.",
    canonical: `${BASE_URL}/it-support`,
    image: `${BASE_URL}/images/it-support.webp`,
  },
  "/soc-support": {
    title: "SOC Program Support | Continuous Monitoring & Compliance Automation | Com-Sec",
    description:
      "We help companies run their SOC programs with continuous monitoring, evidence management, and compliance automation.",
    canonical: `${BASE_URL}/soc-support`,
    image: `${BASE_URL}/images/soc-support.webp`,
  },
  "/security-training": {
    title: "Security Awareness Training | Phishing, Best Practices, Compliance | Com-Sec",
    description:
      "Security awareness training including phishing simulations, best practices, and compliance-focused educational content.",
    canonical: `${BASE_URL}/security-training`,
    image: `${BASE_URL}/images/security-training.webp`,
  },
  "/risk-management": {
    title: "Risk Management Services | Risk Assessments & Mitigation Plans | Com-Sec",
    description:
      "Perform security risk assessments, identify threats, evaluate impact, and implement mitigation strategies.",
    canonical: `${BASE_URL}/risk-management`,
    image: `${BASE_URL}/images/risk-management.webp`,
  },

  // Frameworks
  "/soc2": {
    title: "SOC 2 Compliance & Readiness Guide | Security & Trust | Com-Sec",
    description:
      "Learn SOC 2 requirements, audit preparation steps, controls, and best practices.",
    canonical: `${BASE_URL}/soc2`,
    image: `${BASE_URL}/images/frameworks/soc2.webp`,
  },
  "/iso27001": {
    title: "ISO 27001 Compliance | Information Security Management System | Com-Sec",
    description:
      "Understand ISO 27001 requirements, Annex A controls, risk assessments, and certification readiness.",
    canonical: `${BASE_URL}/iso27001`,
    image: `${BASE_URL}/images/frameworks/iso27001.webp`,
  },
  "/hipaa": {
    title: "HIPAA Compliance Requirements & Security Rule Guide | Protect PHI | Com-Sec",
    description:
      "Learn HIPAA compliance requirements, privacy rules, PHI protection, and safeguards.",
    canonical: `${BASE_URL}/hipaa`,
    image: `${BASE_URL}/images/frameworks/hipaa.webp`,
  },
  "/hitrust": {
    title: "HITRUST CSF Certification & Compliance Guide | Com-Sec",
    description:
      "Learn how HITRUST CSF certification works, control maturity scoring, and readiness.",
    canonical: `${BASE_URL}/hitrust`,
    image: `${BASE_URL}/images/frameworks/hitrust.webp`,
  },
  "/pci-dss": {
    title: "PCI DSS Compliance Requirements & SAQ Guide | Com-Sec",
    description:
      "Understand PCI DSS requirements, SAQ levels, cardholder data protection, and audit preparation.",
    canonical: `${BASE_URL}/pci-dss`,
    image: `${BASE_URL}/images/frameworks/pci.webp`,
  },
  "/nist": {
    title: "NIST Cybersecurity Framework (CSF) Guide | Controls & Maturity | Com-Sec",
    description:
      "Learn NIST CSF functions, maturity tiers, and how to align your security program with NIST.",
    canonical: `${BASE_URL}/nist`,
    image: `${BASE_URL}/images/frameworks/nist.webp`,
  },
  "/gdpr": {
    title: "GDPR Compliance Guide | Data Protection & Privacy Requirements | Com-Sec",
    description:
      "Understand GDPR principles, data subject rights, and privacy obligations.",
    canonical: `${BASE_URL}/gdpr`,
    image: `${BASE_URL}/images/frameworks/gdpr.webp`,
  },
  "/cmmc": {
    title: "CMMC 2.0 Compliance Guide | DoD Requirements | Com-Sec",
    description:
      "Learn CMMC 2.0 levels, NIST 800-171 alignment, and DoD requirements.",
    canonical: `${BASE_URL}/cmmc`,
    image: `${BASE_URL}/images/frameworks/cmmc.webp`,
  },

  // Resources
  "/blogs": {
    title: "Cybersecurity & Compliance Blog | SOC 2, ISO 27001, Pen Tests & More | Com-Sec",
    description:
      "Expert insights on SOC 2, ISO 27001, penetration testing, cloud security, AI security, and cybersecurity trends.",
    canonical: `${BASE_URL}/blogs`,
    image: `${BASE_URL}/images/resources/blogs.webp`,
  },
  "/approach": {
    title: "Our Cybersecurity & Compliance Approach | 3-Phase Process | Com-Sec",
    description:
      "Learn Com-Sec's structured approach — assessment, implementation, and continuous monitoring.",
    canonical: `${BASE_URL}/approach`,
    image: `${BASE_URL}/images/resources/approach.webp`,
  },
  "/phishing": {
    title: "Phishing Simulation & Employee Security Testing | Com-Sec",
    description:
      "Run realistic phishing simulations to test employee awareness and meet SOC 2/ISO training requirements.",
    canonical: `${BASE_URL}/phishing`,
    image: `${BASE_URL}/images/resources/phishing.webp`,
  },

  // About
  "/company": {
    title: "About Com-Sec | 20+ Years of Cybersecurity & Compliance Excellence",
    description:
      "Learn about Com-Sec's mission, leadership, and decades of cybersecurity and compliance expertise.",
    canonical: `${BASE_URL}/company`,
    image: `${BASE_URL}/images/about/company.webp`,
  },
  "/team": {
    title: "Meet the Com-Sec Team | Cybersecurity, Audit, & Compliance Professionals",
    description:
      "Meet Com-Sec's team of cybersecurity and compliance experts supporting SOC 2, ISO 27001, cloud security, and more.",
    canonical: `${BASE_URL}/team`,
    image: `${BASE_URL}/images/about/team.webp`,
  },
  "/careers": {
    title: "Careers at Com-Sec | Cybersecurity & Compliance Jobs | Remote Roles",
    description:
      "Join Com-Sec and work with security programs for AI, fintech, healthcare, and cloud companies.",
    canonical: `${BASE_URL}/careers`,
    image: `${BASE_URL}/images/about/careers.webp`,
  },
  "/contact": {
    title: "Contact Com-Sec | Get a Free Cybersecurity Consultation",
    description:
      "Reach out to Com-Sec for a free consultation on SOC 2, penetration testing, cloud security, or compliance services.",
    canonical: `${BASE_URL}/contact`,
  },
  "/testimonials": {
    title: "Client Testimonials | Com-Sec Cybersecurity & Compliance Reviews",
    description:
      "See what clients say about Com-Sec's cybersecurity, SOC 2, penetration testing, and compliance services.",
    canonical: `${BASE_URL}/testimonials`,
  },

  // Blog articles
  "/blog/iso-27001-certification-guide": {
    title: "ISO 27001 Certification Guide | Requirements, Steps & Best Practices | Com-Sec",
    description:
      "A full guide to ISO 27001 certification — requirements, controls, risk assessment, and audit preparation.",
    canonical: `${BASE_URL}/blog/iso-27001-certification-guide`,
    image: `${BASE_URL}/images/blog/iso-27001-certification-guide.webp`,
  },
  "/blog/soc2-vs-iso27001-comparison": {
    title: "SOC 2 vs ISO 27001: Key Differences & Which One You Need | Com-Sec",
    description:
      "Learn the differences between SOC 2 and ISO 27001 — purpose, cost, scope, and what companies should choose.",
    canonical: `${BASE_URL}/blog/soc2-vs-iso27001-comparison`,
    image: `${BASE_URL}/images/blog/soc2-vs-iso27001.webp`,
  },
  "/blog/why-soc2-matters-small-companies": {
    title: "Why SOC 2 Matters for Small Companies & Startups | Com-Sec",
    description:
      "Why SOC 2 is essential for startups — customer trust, enterprise sales, and compliance readiness.",
    canonical: `${BASE_URL}/blog/why-soc2-matters-small-companies`,
    image: `${BASE_URL}/images/blog/soc2-small-companies.webp`,
  },
  "/blog/how-to-prepare-for-a-compliance-audit-best-practices-and-strategies": {
    title: "How to Prepare for a Compliance Audit | Best Practices & Steps | Com-Sec",
    description:
      "Prepare for SOC 2, ISO 27001, HIPAA, and PCI DSS audits with a structured readiness strategy.",
    canonical: `${BASE_URL}/blog/how-to-prepare-for-a-compliance-audit-best-practices-and-strategies`,
    image: `${BASE_URL}/images/blog/prepare-compliance-audit.webp`,
  },
  "/blog/managed-security-compliance-services": {
    title: "Managed Security & Compliance Services | Benefits & Use Cases | Com-Sec",
    description:
      "How managed security and compliance services can improve readiness, reduce workload, and support frameworks.",
    canonical: `${BASE_URL}/blog/managed-security-compliance-services`,
    image: `${BASE_URL}/images/blog/managed-security-compliance.webp`,
  },
  "/blog/what-is-vciso-role-cybersecurity": {
    title: "What Is a vCISO? Role, Responsibilities & Benefits | Com-Sec",
    description:
      "Learn how a vCISO supports SOC 2, ISO 27001, risk management, policies, and security strategy.",
    canonical: `${BASE_URL}/blog/what-is-vciso-role-cybersecurity`,
    image: `${BASE_URL}/images/blog/vciso.webp`,
  },
  "/blog/difference-between-internal-vs-external-penetration-testing": {
    title: "Internal vs External Penetration Testing: Key Differences & Use Cases | Com-Sec",
    description:
      "Understand the difference between internal and external penetration testing and when each is needed.",
    canonical: `${BASE_URL}/blog/difference-between-internal-vs-external-penetration-testing`,
    image: `${BASE_URL}/images/blog/internal-vs-external-pentesting.webp`,
  },
  "/blog/cybersecurity-roundup-startups-may": {
    title: "Cybersecurity Roundup for Startups — Key Threats & Trends (May) | Com-Sec",
    description:
      "A roundup of cybersecurity threats, vulnerabilities, and industry updates for startups.",
    canonical: `${BASE_URL}/blog/cybersecurity-roundup-startups-may`,
    image: `${BASE_URL}/images/blog/cybersecurity-roundup-startups-may.webp`,
  },
  "/blog/security-compliance-health-companies": {
    title: "Security & Compliance for Healthtech Companies | HIPAA, SOC 2 & Risk Management | Com-Sec",
    description:
      "A deep dive into compliance and security requirements for healthtech — HIPAA, SOC 2, data protection, and risk.",
    canonical: `${BASE_URL}/blog/security-compliance-health-companies`,
    image: `${BASE_URL}/images/blog/security-compliance-health-companies.webp`,
  },
  "/blog/safeguarding-data-sharing-tech-companies": {
    title: "Safeguarding Data Sharing for Tech Companies | Security Risks & Controls | Com-Sec",
    description:
      "How to secure APIs, cloud platforms, and data sharing pipelines with modern security controls.",
    canonical: `${BASE_URL}/blog/safeguarding-data-sharing-tech-companies`,
    image: `${BASE_URL}/images/blog/safeguarding-data-sharing-tech-companies.webp`,
  },
  "/blog/ai-ethics-healthcare": {
    title: "AI Ethics in Healthcare: Risks, Challenges & Responsible Use | Com-Sec",
    description:
      "Explore responsible AI practices in healthcare — transparency, bias, patient safety, and privacy risks.",
    canonical: `${BASE_URL}/blog/ai-ethics-healthcare`,
    image: `${BASE_URL}/images/blog/ai-ethics-healthcare.webp`,
  },
  "/blog/patient-confidentiality-ai-healthcare": {
    title: "Patient Confidentiality in AI Healthcare Systems | Privacy & Security Challenges | Com-Sec",
    description:
      "How AI impacts patient confidentiality, HIPAA obligations, data protection, and medical privacy risks.",
    canonical: `${BASE_URL}/blog/patient-confidentiality-ai-healthcare`,
    image: `${BASE_URL}/images/blog/patient-confidentiality-ai.webp`,
  },
  "/blog/human-side-ai-patient-safety": {
    title: "The Human Side of AI: Protecting Patient Safety in Healthcare | Com-Sec",
    description:
      "How AI intersects with human decision-making in healthcare and the impact on patient safety.",
    canonical: `${BASE_URL}/blog/human-side-ai-patient-safety`,
    image: `${BASE_URL}/images/blog/human-side-ai-patient-safety.webp`,
  },
  "/blog/transparency-accuracy-ai-healthcare": {
    title: "Transparency & Accuracy in AI Healthcare Systems | Risks & Controls | Com-Sec",
    description:
      "Why transparency and accuracy are critical in AI healthcare systems — security and compliance considerations.",
    canonical: `${BASE_URL}/blog/transparency-accuracy-ai-healthcare`,
    image: `${BASE_URL}/images/blog/transparency-ai-healthcare.webp`,
  },
  "/blog/20-years-cybersecurity-journey": {
    title: "20 Years of Cybersecurity: Evolution, Milestones & Key Lessons | Com-Sec",
    description:
      "A 20-year journey through cybersecurity evolution — from early viruses to APTs, ransomware, cloud security, and AI threats.",
    canonical: `${BASE_URL}/blog/20-years-cybersecurity-journey`,
    image: `${BASE_URL}/images/blog/20-years-cybersecurity-journey.webp`,
  },
  "/blog/meet-team-jayush-chawla": {
    title: "Meet the Team: Jayush Chawla | Com-Sec",
    description:
      "Get to know Jayush Chawla, a key member of the Com-Sec cybersecurity and compliance team.",
    canonical: `${BASE_URL}/blog/meet-team-jayush-chawla`,
    image: `${BASE_URL}/images/blog/meet-team-jayush.webp`,
  },
  "/blog/meet-team-rojin-rezaei": {
    title: "Meet the Team: Rojin Rezaei | Com-Sec",
    description:
      "Get to know Rojin Rezaei, a key member of the Com-Sec cybersecurity and compliance team.",
    canonical: `${BASE_URL}/blog/meet-team-rojin-rezaei`,
    image: `${BASE_URL}/images/blog/meet-team-rojin.webp`,
  },
  "/blog/we-almost-partnered-with-delve": {
    title: "We Almost Partnered With Delve. Here's What Stopped Us. | Com-Sec",
    description:
      "Com-Sec was weeks away from being Delve's lead vCISO partner for HITRUST clients. Then things started feeling off. Here's what we saw.",
    canonical: `${BASE_URL}/blog/we-almost-partnered-with-delve`,
    image: `${BASE_URL}/images/blog-images/delve-compliance-scandal.png`,
  },
  "/blog/mythos-changed-the-game-part-1": {
    title: "Mythos Changed the Game. Here's What to Do About It. — Part 1 | Com-Sec",
    description:
      "Part 1: What Mythos actually is (and isn't). Anthropic's Claude Mythos changed the cybersecurity landscape — here's what it means for startups and founders.",
    canonical: `${BASE_URL}/blog/mythos-changed-the-game-part-1`,
    image: `${BASE_URL}/images/blog-images/mythos-part-1.png`,
  },
  "/blog/mythos-changed-the-game-part-2": {
    title: "Mythos Changed the Game. Here's What to Do About It. — Part 2 | Com-Sec",
    description:
      "Part 2: The Patching Window Just Collapsed. AI-driven vulnerability discovery is shrinking patch windows — here's what to do about it.",
    canonical: `${BASE_URL}/blog/mythos-changed-the-game-part-2`,
    image: `${BASE_URL}/images/blog-images/mythos-patching-window-collapsed.png`,
  },
  "/blog/mythos-compliance-alone-wont-save-you-part-3": {
    title: "Mythos Changed the Game — Part 3: Compliance Alone Won't Save You | Com-Sec",
    description:
      "Your SOC 2 report won't protect you from an AI that exploits zero-days in hours. Why compliance frameworks are a foundation, not a finish line.",
    canonical: `${BASE_URL}/blog/mythos-compliance-alone-wont-save-you-part-3`,
    image: `${BASE_URL}/images/blog-images/mythos-compliance-alone-wont-save-you.png`,
  },
  "/blog/rippling-entered-compliance-market": {
    title: "Rippling Just Entered the Compliance Market. Here's Why the Numbers Matter. | Com-Sec",
    description:
      "Rippling launched its Automated Compliance module in 2026. With 25,000 customers, the market math is significant — and the disruption to Drata and Vanta is real.",
    canonical: `${BASE_URL}/blog/rippling-entered-compliance-market`,
    image: `${BASE_URL}/images/blog-images/rippling-compliance-market-banner.png`,
  },
};
