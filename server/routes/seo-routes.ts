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
      "Comsec delivers expert cybersecurity services including SOC 2 compliance, penetration testing, cloud security, and compliance audits to protect and scale your business, including compliance frameworks like ISO 27001, HIPAA, and GDPR.",
    canonical: `${BASE_URL}/`,
    image: `${BASE_URL}/images/pages/home.webp`,
    keywords: "cybersecurity services, soc 2 readiness, penetration testing, iso 27001 compliance, cloud security",
  },

  "/pricing": {
    title: "Cybersecurity & Compliance Pricing | Com-Sec",
    description:
      "Transparent pricing for security assessments, SOC 2 audit packages, vCISO support, and MSSP/SOC monitoring, from one-time engagements starting at $4,000 to ongoing monthly plans.",
    canonical: `${BASE_URL}/pricing`,
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
  "/compliance-audit-service": {
    title: "Cybersecurity & Compliance Audit Services | Com-Sec",
    description:
      "Get top cybersecurity compliance, cloud security, GDPR, HITRUST, and IT audit services. Ensure readiness with continuous monitoring. Secure your business with Com-Sec today!",
    canonical: `${BASE_URL}/compliance-audit-service`,
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
  "/blog": {
    title: "Cybersecurity & Compliance Blog | SOC 2, ISO 27001, Pen Tests & More | Com-Sec",
    description:
      "Expert insights on SOC 2, ISO 27001, penetration testing, cloud security, AI security, and cybersecurity trends.",
    canonical: `${BASE_URL}/blog`,
    image: `${BASE_URL}/images/resources/blogs.webp`,
  },
  "/approach": {
    title: "Our Cybersecurity & Compliance Approach | 3-Phase Process | Com-Sec",
    description:
      "Learn Com-Sec's structured approach — assessment, implementation, and continuous monitoring.",
    canonical: `${BASE_URL}/approach`,
    image: `${BASE_URL}/images/resources/approach.webp`,
  },
  "/resources/approach": {
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
  "/resources/phishing": {
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
  "/about/team": {
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
  "/about/careers": {
    title: "Careers at Com-Sec | Cybersecurity & Compliance Jobs | Remote Roles",
    description:
      "Join Com-Sec and work with security programs for AI, fintech, healthcare, and cloud companies.",
    canonical: `${BASE_URL}/careers`,
    image: `${BASE_URL}/images/about/careers.webp`,
  },
  "/about": {
    title: "About Com-Sec | Our Story, Mission & Track Record",
    description:
      "Founded in 2009, Com-Sec has helped 200+ companies achieve their cybersecurity and compliance goals, from first-time SOC 2 audits to enterprise-wide security programs.",
    canonical: `${BASE_URL}/about`,
  },
  "/partnerships": {
    title: "Partnerships | Com-Sec - Security & Compliance Partners",
    description:
      "Explore Com-Sec's trusted partners in auditing, compliance tools, IT consulting, MDM, and password management solutions.",
    canonical: `${BASE_URL}/partnerships`,
    keywords: "partnerships, compliance, security, auditors, IT consulting",
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
  "/privacy-policy": {
    title: "Privacy Policy | Com-Sec",
    description:
      "Com-Sec's Privacy Policy describing how we collect, use, and protect your personal information.",
    canonical: `${BASE_URL}/privacy-policy`,
  },
  "/terms-of-use": {
    title: "Terms of Use | Com-Sec",
    description:
      "Read Com-Sec's Terms of Use governing your access to and use of com-sec.io.",
    canonical: `${BASE_URL}/terms-of-use`,
  },

  // Blog articles
  "/blog/iso-27001-certification-guide-what-it-is-why-it-matters-and-how-to-get-compliant": {
    title: "ISO 27001 Certification Guide | Requirements, Steps & Best Practices | Com-Sec",
    description:
      "A full guide to ISO 27001 certification — requirements, controls, risk assessment, and audit preparation.",
    canonical: `${BASE_URL}/blog/iso-27001-certification-guide-what-it-is-why-it-matters-and-how-to-get-compliant`,
    image: `${BASE_URL}/images/blog/iso-27001-certification-guide.webp`,
  },
  "/blog/soc-2-vs-iso-27001-which-is-right-for-you": {
    title: "SOC 2 vs ISO 27001: Key Differences & Which One You Need | Com-Sec",
    description:
      "Learn the differences between SOC 2 and ISO 27001 — purpose, cost, scope, and what companies should choose.",
    canonical: `${BASE_URL}/blog/soc-2-vs-iso-27001-which-is-right-for-you`,
    image: `${BASE_URL}/images/blog/soc2-vs-iso27001.webp`,
  },
  "/blog/why-soc-2-matterseven-if-youre-not-a-big-company": {
    title: "Why SOC 2 Matters for Small Companies & Startups | Com-Sec",
    description:
      "Why SOC 2 is essential for startups — customer trust, enterprise sales, and compliance readiness.",
    canonical: `${BASE_URL}/blog/why-soc-2-matterseven-if-youre-not-a-big-company`,
    image: `${BASE_URL}/images/blog/soc2-small-companies.webp`,
  },
  "/blog/how-to-prepare-for-a-compliance-audit-best-practices-and-strategies": {
    title: "How to Prepare for a Compliance Audit | Best Practices & Steps | Com-Sec",
    description:
      "Prepare for SOC 2, ISO 27001, HIPAA, and PCI DSS audits with a structured readiness strategy.",
    canonical: `${BASE_URL}/blog/how-to-prepare-for-a-compliance-audit-best-practices-and-strategies`,
    image: `${BASE_URL}/images/blog/prepare-compliance-audit.webp`,
  },
  "/blog/what-are-managed-security-compliance-services-and-why-are-they-essential": {
    title: "Managed Security & Compliance Services | Benefits & Use Cases | Com-Sec",
    description:
      "How managed security and compliance services can improve readiness, reduce workload, and support frameworks like SOC 2, ISO 27001, and HIPAA.",
    canonical: `${BASE_URL}/blog/what-are-managed-security-compliance-services-and-why-are-they-essential`,
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
  "/blog/the-vital-importance-of-security-and-compliance-for-health-companies-safeguarding-patient-data": {
    title: "Security & Compliance for Healthtech Companies | HIPAA, SOC 2 & Risk Management | Com-Sec",
    description:
      "A deep dive into compliance and security requirements for healthtech — HIPAA, SOC 2, data protection, and risk.",
    canonical: `${BASE_URL}/blog/the-vital-importance-of-security-and-compliance-for-health-companies-safeguarding-patient-data`,
    image: `${BASE_URL}/images/blog/security-compliance-health-companies.webp`,
  },
  "/blog/safeguarding-data-sharing-tech-companies": {
    title: "Safeguarding Data Sharing for Tech Companies | Security Risks & Controls | Com-Sec",
    description:
      "How to secure APIs, cloud platforms, and data sharing pipelines with modern security controls.",
    canonical: `${BASE_URL}/blog/safeguarding-data-sharing-tech-companies`,
    image: `${BASE_URL}/images/blog/safeguarding-data-sharing-tech-companies.webp`,
  },
  "/blog/human-side-ai-patient-safety": {
    title: "The Human Side of AI: Protecting Patient Safety in Healthcare | Com-Sec",
    description:
      "How AI intersects with human decision-making in healthcare and the impact on patient safety.",
    canonical: `${BASE_URL}/blog/human-side-ai-patient-safety`,
    image: `${BASE_URL}/images/blog/human-side-ai-patient-safety.webp`,
  },
  "/blog/importance-of-transparency-accuracy-and-accountability": {
    title: "Transparency & Accuracy in AI Healthcare Systems | Risks & Controls | Com-Sec",
    description:
      "Why transparency and accuracy are critical in AI healthcare systems — security and compliance considerations.",
    canonical: `${BASE_URL}/blog/importance-of-transparency-accuracy-and-accountability`,
    image: `${BASE_URL}/images/blog/transparency-ai-healthcare.webp`,
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
  "/blog/20-years-of-cybersecurity-a-journey-through-the-digital-age": {
    title: "Cybersecurity Awareness Month 2026: Evolution, Threats & Zero Trust Security",
    description:
      "Discover how cybersecurity has evolved over the years and how modern cybersecurity threats like ransomware, cloud security risks, AI-driven attacks, and Zero Trust security models are shaping cybersecurity strategies and cybersecurity compliance services today.",
    canonical: `${BASE_URL}/blog/20-years-of-cybersecurity-a-journey-through-the-digital-age`,
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
  "/blog/ai-ethics-healthcare-innovation": {
    title: "AI and Ethics in Healthcare Innovation | Com-Sec",
    description:
      "Exploring ethical considerations and frameworks for responsible AI implementation in healthcare. Learn how to balance innovation with patient safety and privacy.",
    canonical: `${BASE_URL}/blog/ai-ethics-healthcare-innovation`,
  },
  "/blog/how-to-prepare-for-soc2-2026": {
    title: "How to Prepare for SOC 2 in 2026 (Step-by-Step SOC 2 Preparation Guide)",
    description:
      "SOC 2 preparation for SaaS and tech companies made simple. Learn how to prepare for SOC 2 compliance step-by-step, including readiness assessment, controls, evidence collection, & the audit process for 2026.",
    canonical: `${BASE_URL}/blog/how-to-prepare-for-soc2-2026`,
  },
  "/blog/caryhealth-first-client-story": {
    title: "CaryHealth Was Our First Client: A Milestone for Com-Sec's Healthcare Security Journey",
    description:
      "CaryHealth was Com-Sec's first client long before the company officially existed. This story reflects how both teams grew together through healthcare compliance, security challenges, and years of building in a difficult industry.",
    canonical: `${BASE_URL}/blog/caryhealth-first-client-story`,
  },
  "/blog/continuous-monitoring-security-compliance": {
    title: "Continuous Monitoring for Security & Compliance | 2026 Guide",
    description:
      "Continuous monitoring for security and compliance in 2026 with real-time security monitoring, continuous compliance monitoring, audit readiness, risk management, and regulatory compliance.",
    canonical: `${BASE_URL}/blog/continuous-monitoring-security-compliance`,
  },
  "/blog/web-application-penetration-testing-checklist-2025-edition": {
    title: "Web Application Penetration Testing Checklist [2026]",
    description:
      "Explore the ultimate 2026 web application penetration testing checklist. Learn how to test for broken authentication, IDOR, API security, session hijacking, and more. Boost your app's protection with expert pentesting techniques.",
    canonical: `${BASE_URL}/blog/web-application-penetration-testing-checklist-2025-edition`,
  },
  "/blog/the-role-of-ai-in-penetration-testing-hype-vs-reality": {
    title: "The Role of AI in Penetration Testing: Hype vs Reality 2026",
    description:
      "Explore how AI is transforming penetration testing in 2026: separating marketing hype from real-world impact. Covers AI-driven pen testing tools, continuous testing, ROI, trending strategies, and what's realistic today.",
    canonical: `${BASE_URL}/blog/the-role-of-ai-in-penetration-testing-hype-vs-reality`,
  },
  "/blog/global-cybersecurity-regulations-in-2025-how-to-prepare-your-business": {
    title: "Global Cybersecurity Compliance Landscape 2025 | Audit Readiness & Regulation",
    description:
      "Explore the evolving global cybersecurity compliance landscape in 2025. Learn how businesses can achieve compliance audit readiness, meet regulations like SOC 2, ISO 27001, HIPAA, PCI DSS, GDPR, NIST, and CMMC, and stay ahead with expert compliance audit services",
    canonical: `${BASE_URL}/blog/global-cybersecurity-regulations-in-2025-how-to-prepare-your-business`,
  },
  "/blog/what-is-cyber-threat-intelligence-amp-why-it-matters": {
    title: "What is Cyber Threat Intelligence (CTI) & Why It Matters? - Com-Sec",
    description:
      "Learn how Cyber Threat Intelligence (CTI) helps businesses predict, detect, and respond to cyber threats. Discover its role in SOC monitoring, incident response, compliance, and proactive defense strategies.",
    canonical: `${BASE_URL}/blog/what-is-cyber-threat-intelligence-amp-why-it-matters`,
  },
  "/blog/how-ai-is-changing-it-security-operations-in-2025": {
    title: "How AI Is Changing IT Security Operations in 2026?",
    description:
      "Discover how AI is revolutionizing IT security operations in 2026. From threat detection and cloud security to identity management and proactive defenses, learn how AI-powered solutions help organizations stay secure.",
    canonical: `${BASE_URL}/blog/how-ai-is-changing-it-security-operations-in-2025`,
  },
  "/blog/ai-health-companies-protect-patient-privacy-confidentiality-2026": {
    title: "How AI Health Companies Protect Patient Privacy and Confidentiality in 2026",
    description:
      "Learn how AI Health companies ensure patient confidentiality and healthcare data privacy in AI-driven healthcare using HIPAA and GDPR compliance, data encryption, access controls, Privacy Impact Assessments, and AI governance.",
    canonical: `${BASE_URL}/blog/ai-health-companies-protect-patient-privacy-confidentiality-2026`,
  },
  "/blog/com-sec-your-trusted-partner-in-achieving-soc2-compliance": {
    title: "SOC 2 Compliance Guide | Why Choose Com-Sec",
    description:
      "SOC 2 compliance services for businesses. Learn what SOC 2 is, why SOC 2 certification matters, and how Com-Sec helps you pass SOC 2 audits faster.",
    canonical: `${BASE_URL}/blog/com-sec-your-trusted-partner-in-achieving-soc2-compliance`,
  },
  "/blog/different-types-of-compliance-audits-complete-guide-for-2025": {
    title: "Different Types of Compliance Audits? Complete Guide for 2026",
    description:
      "Explore the different types of compliance audits in 2025, SOC 2, ISO 27001, HIPAA, PCI-DSS, and more. Learn their purpose, who needs them, and how Com-Sec helps you stay audit-ready.",
    canonical: `${BASE_URL}/blog/different-types-of-compliance-audits-complete-guide-for-2025`,
  },
  "/blog/hitrust-vs-hipaa-which-is-right-for-my-organization": {
    title: "HITRUST vs HIPAA: Key Difference, Benefits & Compliance Guide",
    description:
      "Compare HITRUST certification and HIPAA compliance to understand key differences, benefits, and requirements. Learn how to achieve healthcare data security and prepare for audits in 2026.",
    canonical: `${BASE_URL}/blog/hitrust-vs-hipaa-which-is-right-for-my-organization`,
  },
  "/blog/how-ai-and-analytics-improve-ongoing-security-operations": {
    title: "How AI and Analytics Improve Ongoing Security Operations?",
    description:
      "Discover how AI and analytics transform ongoing security operations with faster threat detection, automated response, predictive insights, and improved compliance.",
    canonical: `${BASE_URL}/blog/how-ai-and-analytics-improve-ongoing-security-operations`,
  },
  "/blog/compliance-vs-security-key-differences-why-both-matter-2026": {
    title: "Compliance vs Security: Key Differences & Why Both Matter in 2026 | Com-Sec",
    description:
      "Learn the difference between compliance and security in 2026. Explore key compliance vs security concepts, overlap, and cybersecurity best practices to reduce risk and meet regulations.",
    canonical: `${BASE_URL}/blog/compliance-vs-security-key-differences-why-both-matter-2026`,
  },
  "/blog/cybersecurity-roundup-key-trends-and-threats-for-startups-in-may": {
    title: "Cybersecurity for Startups 2026: Top Threats, Cloud Risks & AI Attacks",
    description:
      "Learn how startups can protect against the top cybersecurity threats in 2026. Stay secure from cloud misconfigurations, ransomware, AI-driven attacks, and compliance risks.",
    canonical: `${BASE_URL}/blog/cybersecurity-roundup-key-trends-and-threats-for-startups-in-may`,
  },
  "/blog/the-pros-and-cons-of-undergoing-soc-2-type-ii-and-hitrust-audits-simultaneously": {
    title: "SOC 2 Type II and HITRUST Audits: Pros, Cons & 2026 Compliance Guide",
    description:
      "Explore the pros and cons of undergoing SOC 2 Type II and HITRUST audits simultaneously. Learn how 2026 compliance trends, cost savings, and modern audit tools can streamline your certification process.",
    canonical: `${BASE_URL}/blog/the-pros-and-cons-of-undergoing-soc-2-type-ii-and-hitrust-audits-simultaneously`,
  },
  "/blog/understanding-the-differences-between-a-vcco-vs-vciso": {
    title: "vCISO vs vCCO: Key Differences & Roles Businesses Need in 2026 | Com-Sec",
    description:
      "Learn the key differences between a vCISO and vCCO in 2026. Understand their roles, responsibilities, and how businesses can manage cybersecurity and compliance effectively.",
    canonical: `${BASE_URL}/blog/understanding-the-differences-between-a-vcco-vs-vciso`,
  },
  "/blog/cloud-penetration-testing-how-to-secure-aws-azure-and-gcp-workloads-in-2025": {
    title: "Cloud Penetration Testing for AWS, Azure & GCP: Security Guide for 2026",
    description:
      "Learn how cloud penetration testing secures AWS, Azure, and GCP workloads. Identify misconfigurations, reduce risk, and meet SOC 2 and ISO 27001 compliance in 2026.",
    canonical: `${BASE_URL}/blog/cloud-penetration-testing-how-to-secure-aws-azure-and-gcp-workloads-in-2025`,
  },
  "/blog/what-the-latest-ftc-guidelines-mean-for-smbs-in-2026": {
    title: "What the Latest FTC Guidelines Mean for SMBs in 2026 | Com-Sec",
    description:
      "Discover how the new FTC guidelines in 2026 impact SMBs. Learn essential tips on cybersecurity, compliance audits, data privacy, and risk management to keep your business secure and FTC-compliant.",
    canonical: `${BASE_URL}/blog/what-the-latest-ftc-guidelines-mean-for-smbs-in-2026`,
  },
  "/blog/the-order-of-operations-for-engaging-a-vciso-a-step-by-step-guide": {
    title: "How to Engage a vCISO in 2026: Step-by-Step Guide for Startups & SMBs | Com-Sec",
    description:
      "Learn the step-by-step process for engaging a vCISO in 2026. This guide helps startups and SMBs evaluate providers, define scope of work, and start an engagement to improve cybersecurity and compliance.",
    canonical: `${BASE_URL}/blog/the-order-of-operations-for-engaging-a-vciso-a-step-by-step-guide`,
  },
  "/blog/top-10-online-safety-tips": {
    title: "Top 10 Easy Online Safety Tips for 2026 | Online Security Best Practices",
    description:
      "Discover the top 10 online safety tips for 2026. Learn essential cybersecurity awareness and online security best practices to protect your data, devices, and business.",
    canonical: `${BASE_URL}/blog/top-10-online-safety-tips`,
  },
  "/blog/soc2-audit-checklist-2026": {
    title: "SOC 2 Audit Checklist & Report Templates for 2026: Complete Guide",
    description:
      "SOC 2 audit checklist covering controls, documentation, and report templates. A simple guide to help your team prepare for SOC 2 compliance and audits in 2026.",
    canonical: `${BASE_URL}/blog/soc2-audit-checklist-2026`,
  },
  "/blog/automated-vs-manual-penetration-testing-2026": {
    title: "Automated vs Manual Penetration Testing: What Businesses Need in 2026",
    description:
      "Learn the key differences between automated and manual penetration testing in 2026, including pros, cons, costs, and which approach best protects businesses.",
    canonical: `${BASE_URL}/blog/automated-vs-manual-penetration-testing-2026`,
  },
  "/blog/agentic-ai-governance-lifecycle-management-healthcare-2026": {
    title: "Agentic AI governance & Lifecycle management in healthcare 2026",
    description:
      "Master Agentic AI Governance in Healthcare with our 2026 Guide. Implement robust AI Lifecycle Management (ALM), ensure FDA PCCP compliance, and secure HIPAA-compliant autonomous workflows.",
    canonical: `${BASE_URL}/blog/agentic-ai-governance-lifecycle-management-healthcare-2026`,
  },
  "/blog/mythos-changed-the-game-part-4": {
    title: "Mythos Changed the Game. Here's What to Do About It. — Part 4",
    description:
      "Part 4: The Basics Still Matter More Than the Headlines. Why fundamentals like asset management, access controls, and patching are the most effective response to AI-driven threats.",
    canonical: `${BASE_URL}/blog/mythos-changed-the-game-part-4`,
    image: `${BASE_URL}/images/blog-images/mythos-changed-the-game-part-4.png`,
  },
  "/blog/mythos-changed-the-game-part-5": {
    title: "Mythos Changed the Game. Here's What to Do About It. — Part 5",
    description:
      "Part 5: What a Mythos-Ready Security Program Looks Like. A practical, actionable security program for startups and growth-stage companies responding to AI-driven threats.",
    canonical: `${BASE_URL}/blog/mythos-changed-the-game-part-5`,
    image: `${BASE_URL}/images/blog-images/mythos-changed-the-game-part-5.png`,
  },
  "/blog/soc-2-compliance-services-california": {
    title: "SOC 2 Compliance Services in California: Requirements, Costs, and Benefits",
    description:
      "Everything California businesses need to know about SOC 2 compliance — key requirements, benefits, costs, available compliance services, and how to choose the right SOC 2 compliance partner.",
    canonical: `${BASE_URL}/blog/soc-2-compliance-services-california`,
    image: `${BASE_URL}/images/blog-images/soc-2-compliance-services-california.png`,
  },
  "/blog/implementing-an-ai-governance-model-part-1": {
    title: "Implementing an AI Governance Model — Part 1",
    description:
      "Part 1: Start With the Inventory. You can't govern what you don't know about. Learn how to run an AI tool inventory, check your systems, and build your AI register.",
    canonical: `${BASE_URL}/blog/implementing-an-ai-governance-model-part-1`,
    image: `${BASE_URL}/images/blog-images/implementing-an-ai-governance-model-part-1.png`,
  },
  "/blog/implementing-an-ai-governance-model-part-2": {
    title: "Implementing an AI Governance Model — Part 2: Writing an AI Policy That People Actually Follow",
    description:
      "Part 2: Most AI policies are too vague to enforce or too long to read. A practical, four-section structure for an AI acceptable use policy your team will actually follow.",
    canonical: `${BASE_URL}/blog/implementing-an-ai-governance-model-part-2`,
    image: `${BASE_URL}/images/blog-images/implementing-an-ai-governance-model-part-2.png`,
  },
  "/blog/what-founders-get-wrong-about-hiring-their-first-security-person": {
    title: "What Founders Get Wrong About Hiring Their First Security Person",
    description:
      "The instinct to hire a security person is right. The execution is usually wrong. Three common mistakes, and the case for going fractional first.",
    canonical: `${BASE_URL}/blog/what-founders-get-wrong-about-hiring-their-first-security-person`,
    image: `${BASE_URL}/images/blog-images/what-founders-get-wrong-about-hiring-their-first-security-person.png`,
  },
  "/blog/openai-launched-daybreak": {
    title: "OpenAI Launched Daybreak. Here's What It Means for Your Company.",
    description:
      "A month after Anthropic locked Mythos behind Project Glasswing, OpenAI launched Daybreak — a publicly available AI-powered cybersecurity platform. Here's what it means for startups and mid-market companies.",
    canonical: `${BASE_URL}/blog/openai-launched-daybreak`,
    image: `${BASE_URL}/images/blog-images/openai-launched-daybreak.png`,
  },
  "/blog/rolling-out-ai-the-right-way-part-1": {
    title: "Rolling Out AI the Right Way: Part 1: AI Governance Isn't Optional Anymore",
    description:
      "Part 1 of a 5-part playbook for companies that can't afford to get AI wrong. AI governance isn't optional anymore — enterprise buyers, regulators, and auditors are all paying attention.",
    canonical: `${BASE_URL}/blog/rolling-out-ai-the-right-way-part-1`,
    image: `${BASE_URL}/images/blog-images/rolling-out-ai-the-right-way-part-1.png`,
  },
  "/blog/the-cowork-problem-when-ai-gets-admin-access": {
    title: "Rolling Out AI the Right Way: Part 2",
    description:
      "Part 2: The Cowork Problem — When AI Gets Admin Access to Your Infrastructure. A 5-part playbook for companies that can't afford to get it wrong.",
    canonical: `${BASE_URL}/blog/the-cowork-problem-when-ai-gets-admin-access`,
    image: `${BASE_URL}/images/blog-images/the-cowork-problem-when-ai-gets-admin-access.png`,
  },
  "/blog/rolling-out-ai-the-right-way-part-3": {
    title: "Rolling Out AI the Right Way — Part 3: BAAs, Zero Data Retention, and the Data Layer You Need to Understand",
    description:
      "Part 3: The most common question from health tech founders about AI — can we use Claude and still be HIPAA compliant? The answer depends entirely on how you use it and which product surface you're on.",
    canonical: `${BASE_URL}/blog/rolling-out-ai-the-right-way-part-3`,
    image: `${BASE_URL}/images/blog-images/rolling-out-ai-the-right-way-part-3.png`,
  },
  "/blog/rolling-out-ai-the-right-way-part-4": {
    title: "Rolling Out AI the Right Way — Part 4: The AI Rollout Playbook",
    description:
      "Part 4: The AI Rollout Playbook. A practical 5-step playbook for rolling out AI at a company that takes security and compliance seriously — from inventory to monitoring.",
    canonical: `${BASE_URL}/blog/rolling-out-ai-the-right-way-part-4`,
    image: `${BASE_URL}/images/blog-images/rolling-out-ai-the-right-way-part-4.png`,
  },
  "/blog/your-soc-2-auditor-matters-more-than-your-grc-platform": {
    title: "Your SOC 2 Auditor Matters More Than Your GRC Platform",
    description:
      "Post 1: Things I've Learned Running a Cybersecurity Firm. Choosing Drata vs Vanta is the wrong first question — here's what actually determines whether your SOC 2 report holds up.",
    canonical: `${BASE_URL}/blog/your-soc-2-auditor-matters-more-than-your-grc-platform`,
    image: `${BASE_URL}/images/blog-images/your-soc-2-auditor-matters-more-than-your-grc-platform.png`,
  },
  "/blog/soc-2-is-simpler-than-you-think": {
    title: "SOC 2 Is Simpler Than You Think",
    description:
      "Post 2: Things I've Learned Running a Cybersecurity Firm. SOC 2 isn't a certification or a pass/fail test — it's a report. Here's what it actually is, and why the confusion trips founders up.",
    canonical: `${BASE_URL}/blog/soc-2-is-simpler-than-you-think`,
    image: `${BASE_URL}/images/blog-images/soc-2-is-simpler-than-you-think.png`,
  },
  "/blog/rolling-out-ai-the-right-way-part-5": {
    title: "Rolling Out AI the Right Way — Part 5: Common Mistakes and the Path Forward",
    description:
      "Part 5: Common Mistakes and the Path Forward. The mistakes companies most often make when rolling out AI — and how to avoid them — plus what a realistic governance program actually looks like.",
    canonical: `${BASE_URL}/blog/rolling-out-ai-the-right-way-part-5`,
    image: `${BASE_URL}/images/blog-images/rolling-out-ai-the-right-way-part-5.png`,
  },
  "/blog/the-security-questionnaire-is-a-sales-tool-not-a-compliance-exercise": {
    title: "The Security Questionnaire Is a Sales Tool, Not a Compliance Exercise",
    description:
      "Post 2: Things I've Learned Running a Cybersecurity Firm. What separates a security questionnaire that closes deals from one that stalls them — and how to build a response library that scales.",
    canonical: `${BASE_URL}/blog/the-security-questionnaire-is-a-sales-tool-not-a-compliance-exercise`,
    image: `${BASE_URL}/images/blog-images/the-security-questionnaire-is-a-sales-tool-not-a-compliance-exercise.png`,
  },
  "/blog/pentagon-suspended-cmmc-phase-2": {
    title: "The Pentagon Just Suspended CMMC Phase 2 — Here's What It Means and What Doesn't Change",
    description:
      "DoD has suspended CMMC Phase 2 third-party certification requirements. Here's what changed, what didn't, and what defense contractors should do now.",
    canonical: `${BASE_URL}/blog/pentagon-suspended-cmmc-phase-2`,
    image: `${BASE_URL}/images/blog-images/pentagon-suspended-cmmc-phase-2.png`,
  },
};
