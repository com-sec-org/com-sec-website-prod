// ----------------------------------------
// SEO BASE CONFIG + HELPERS
// ----------------------------------------

const BASE_URL = "https://com-sec.io";

// Breadcrumb generator
export function generateBreadcrumbs(path) {
  const parts = path.split("/").filter(Boolean);

  let accumulated = "";
  const breadcrumbList = parts.map((part, index) => {
    accumulated += `/${part}`;

    return {
      "@type": "ListItem",
      position: index + 1,
      name: part
        .replace(/-/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase()),
      item: `${BASE_URL}${accumulated}`,
    };
  });

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbList,
  };
}

// FAQ Schema builder
export function buildFAQ(questions = []) {
  if (!questions.length) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };
}

// Base SEO builder
export function buildPageSEO({
  title,
  description,
  canonical,
  keywords = [],
  image,
  faq = null,
  type = "website",
}) {
  return {
    title,
    description,
    canonical: `${BASE_URL}${canonical}`,
    keywords,
    image,
    faq,
    type,
  };
}

// ----------------------------------------
// MAIN SEO CONFIG (ONE CLEAN OBJECT)
// ----------------------------------------

export const SEO_CONFIG = {
  // ----------------------------------------
  // HOMEPAGE
  // ----------------------------------------
  "/": buildPageSEO({
    title:
      "Cybersecurity & Compliance Services | SOC 2, ISO 27001, Pen Testing | Com-Sec",
    description:
      "Com-Sec helps companies achieve SOC 2, ISO 27001, HIPAA, penetration testing, cloud security and compliance through expert cybersecurity services.",
    canonical: "/",
    keywords: [
      "cybersecurity services",
      "soc 2 readiness",
      "penetration testing",
      "iso 27001 compliance",
      "cloud security",
      "startup security",
      "com-sec",
    ],
    image: `${BASE_URL}/images/pages/home.webp`,
  }),

  // ----------------------------------------
  // SERVICES
  // ----------------------------------------
  "/services": buildPageSEO({
    title:
      "Cybersecurity & IT Security Services | SOC 2, Pen Testing, ISO | Com-Sec",
    description:
      "Explore Com-Sec’s full suite of cybersecurity services including SOC 2 readiness, penetration testing, IT support, cloud security, and risk management.",
    canonical: "/services",
    image: `${BASE_URL}/images/services/services.webp`,
  }),

  "/soc2-readiness": buildPageSEO({
    title: "SOC 2 Readiness & Audit Preparation Services | Com-Sec",
    description:
      "Get complete SOC 2 readiness support, audit preparation, control implementation, risk assessment, and gap remediation.",
    canonical: "/soc2-readiness",
    keywords: ["soc 2 readiness", "soc 2 audit", "soc 2 consulting"],
    image: `${BASE_URL}/images/services/soc2-readiness.webp`,
    faq: buildFAQ([
      {
        question: "How long does SOC 2 readiness take?",
        answer: "Most companies require 4–12 weeks depending on complexity.",
      },
      {
        question: "What does a SOC 2 readiness assessment include?",
        answer:
          "Gap analysis, control implementation, audit preparation, and evidence review.",
      },
    ]),
  }),

  "/penetration-testing-services": buildPageSEO({
    title:
      "Penetration Testing Services | Internal & External Pen Testing | Com-Sec",
    description:
      "Advanced penetration testing services for web apps, APIs, cloud, internal networks, and mobile applications.",
    canonical: "/penetration-testing-services",
    keywords: ["penetration testing", "pentest services", "app security"],
    image: `${BASE_URL}/images/services/penetration-testing.webp`,
  }),

  "/cloud-security": buildPageSEO({
    title: "Cloud Security Services | AWS, Azure, GCP Hardening | Com-Sec",
    description:
      "Cloud security assessments, IAM hardening, CIS benchmarks, architecture review, and remediation across AWS, Azure, and GCP.",
    canonical: "/cloud-security",
    keywords: ["cloud security", "aws security", "azure security"],
    image: `${BASE_URL}/images/services/cloud-security.webp`,
  }),

  "/compliance-audit-readiness": buildPageSEO({
    title: "Compliance Audit Readiness | SOC 2, ISO 27001, HIPAA, PCI | Com-Sec",
    description:
      "Prepare for compliance audits with gap assessments, evidence collection, policy development, and readiness reporting.",
    canonical: "/compliance-audit-readiness",
    image: `${BASE_URL}/images/services/audit-readiness.webp`,
  }),

  "/it-support": buildPageSEO({
    title:
      "IT Support & Security Operations | Endpoints, MDM, Access Reviews | Com-Sec",
    description:
      "Get IT and security operational support including device management, encryption, access reviews, and IT onboarding/offboarding.",
    canonical: "/it-support",
    image: `${BASE_URL}/images/services/it-support.webp`,
  }),

  "/soc-support": buildPageSEO({
    title:
      "SOC Program Support | Continuous Monitoring & Compliance Automation | Com-Sec",
    description:
      "We help companies run their SOC programs with continuous monitoring, evidence management, and compliance automation.",
    canonical: "/soc-support",
    image: `${BASE_URL}/images/services/soc-support.webp`,
  }),

  "/security-training": buildPageSEO({
    title:
      "Security Awareness Training | Phishing, Best Practices, Compliance | Com-Sec",
    description:
      "Security awareness training including phishing simulations, best practices, and compliance-focused educational content.",
    canonical: "/security-training",
    image: `${BASE_URL}/images/services/security-training.webp`,
  }),

  "/risk-management": buildPageSEO({
    title:
      "Risk Management Services | Risk Assessments & Mitigation Plans | Com-Sec",
    description:
      "Perform security risk assessments, identify threats, evaluate impact, and implement mitigation strategies.",
    canonical: "/risk-management",
    image: `${BASE_URL}/images/services/risk-management.webp`,
  }),

  // ----------------------------------------
  // FRAMEWORK PAGES
  // ----------------------------------------
  "/soc2": buildPageSEO({
    title: "SOC 2 Compliance & Readiness Guide | Security & Trust | Com-Sec",
    description:
      "Learn SOC 2 requirements, audit preparation steps, controls, and best practices.",
    canonical: "/soc2",
    image: `${BASE_URL}/images/frameworks/soc2.webp`,
  }),

  "/iso27001": buildPageSEO({
    title:
      "ISO 27001 Compliance | Information Security Management System | Com-Sec",
    description:
      "Understand ISO 27001 requirements, Annex A controls, risk assessments, and certification readiness.",
    canonical: "/iso27001",
    image: `${BASE_URL}/images/frameworks/iso27001.webp`,
  }),

  "/hipaa": buildPageSEO({
    title:
      "HIPAA Compliance Requirements & Security Rule Guide | Protect PHI | Com-Sec",
    description:
      "Learn HIPAA compliance requirements, privacy rules, PHI protection, and safeguards.",
    canonical: "/hipaa",
    image: `${BASE_URL}/images/frameworks/hipaa.webp`,
  }),

  "/hitrust": buildPageSEO({
    title: "HITRUST CSF Certification & Compliance Guide | Com-Sec",
    description:
      "Learn how HITRUST CSF certification works, control maturity scoring, and readiness.",
    canonical: "/hitrust",
    image: `${BASE_URL}/images/frameworks/hitrust.webp`,
  }),

  "/pci-dss": buildPageSEO({
    title: "PCI DSS Compliance Requirements & SAQ Guide | Com-Sec",
    description:
      "Understand PCI DSS requirements, SAQ levels, cardholder data protection, and audit preparation.",
    canonical: "/pci-dss",
    image: `${BASE_URL}/images/frameworks/pci.webp`,
  }),

  "/nist": buildPageSEO({
    title:
      "NIST Cybersecurity Framework (CSF) Guide | Controls & Maturity | Com-Sec",
    description:
      "Learn NIST CSF functions, maturity tiers, and how to align your security program with NIST.",
    canonical: "/nist",
    image: `${BASE_URL}/images/frameworks/nist.webp`,
  }),

  "/gdpr": buildPageSEO({
    title:
      "GDPR Compliance Guide | Data Protection & Privacy Requirements | Com-Sec",
    description:
      "Understand GDPR principles, data subject rights, and privacy obligations.",
    canonical: "/gdpr",
    image: `${BASE_URL}/images/frameworks/gdpr.webp`,
  }),

  "/cmmc": buildPageSEO({
    title: "CMMC 2.0 Compliance Guide | DoD Requirements | Com-Sec",
    description:
      "Learn CMMC 2.0 levels, NIST 800-171 alignment, and DoD requirements.",
    canonical: "/cmmc",
    image: `${BASE_URL}/images/frameworks/cmmc.webp`,
  }),

  // ----------------------------------------
  // RESOURCES
  // ----------------------------------------
  "/blogs": buildPageSEO({
    title:
      "Cybersecurity & Compliance Blog | SOC 2, ISO 27001, Pen Tests & More | Com-Sec",
    description:
      "Expert insights on SOC 2, ISO 27001, penetration testing, cloud security, AI security, and cybersecurity trends.",
    canonical: "/blogs",
    image: `${BASE_URL}/images/resources/blogs.webp`,
  }),

  "/approach": buildPageSEO({
    title:
      "Our Cybersecurity & Compliance Approach | 3-Phase Process | Com-Sec",
    description:
      "Learn Com-Sec’s structured approach — assessment, implementation, and continuous monitoring.",
    canonical: "/approach",
    image: `${BASE_URL}/images/resources/approach.webp`,
  }),

  "/phishing": buildPageSEO({
    title: "Phishing Simulation & Employee Security Testing | Com-Sec",
    description:
      "Run realistic phishing simulations to test employee awareness and meet SOC 2/ISO training requirements.",
    canonical: "/phishing",
    image: `${BASE_URL}/images/resources/phishing.webp`,
  }),

  "/company": buildPageSEO({
    title:
      "About Com-Sec | 20+ Years of Cybersecurity & Compliance Excellence",
    description:
      "Learn about Com-Sec’s mission, leadership, and decades of cybersecurity and compliance expertise.",
    canonical: "/company",
    image: `${BASE_URL}/images/about/company.webp`,
  }),

  "/team": buildPageSEO({
    title:
      "Meet the Com-Sec Team | Cybersecurity, Audit, & Compliance Professionals",
    description:
      "Meet Com-Sec’s team of cybersecurity and compliance experts supporting SOC 2, ISO 27001, cloud security, and more.",
    canonical: "/team",
    image: `${BASE_URL}/images/about/team.webp`,
  }),

  "/careers": buildPageSEO({
    title:
      "Careers at Com-Sec | Cybersecurity & Compliance Jobs | Remote Roles",
    description:
      "Join Com-Sec and work with security programs for AI, fintech, healthcare, and cloud companies.",
    canonical: "/careers",
    image: `${BASE_URL}/images/about/careers.webp`,
  }),

  // ----------------------------------------
  // BLOGS
  // ----------------------------------------

  "/blog/iso-27001-certification-guide": buildPageSEO({
    title:
      "ISO 27001 Certification Guide | Requirements, Steps & Best Practices | Com-Sec",
    description:
      "A full guide to ISO 27001 certification — requirements, controls, risk assessment, and audit preparation.",
    canonical: "/blog/iso-27001-certification-guide",
    image: `${BASE_URL}/images/blog/iso-27001-certification-guide.webp`,
    type: "article",
  }),

  "/blog/soc2-vs-iso27001-comparison": buildPageSEO({
    title: "SOC 2 vs ISO 27001: Key Differences & Which One You Need | Com-Sec",
    description:
      "Learn the differences between SOC 2 and ISO 27001 — purpose, cost, scope, and what companies should choose.",
    canonical: "/blog/soc2-vs-iso27001-comparison",
    image: `${BASE_URL}/images/blog/soc2-vs-iso27001.webp`,
    type: "article",
  }),

  "/blog/why-soc2-matters-small-companies": buildPageSEO({
    title: "Why SOC 2 Matters for Small Companies & Startups | Com-Sec",
    description:
      "Why SOC 2 is essential for startups — customer trust, enterprise sales, and compliance readiness.",
    canonical: "/blog/why-soc2-matters-small-companies",
    image: `${BASE_URL}/images/blog/soc2-small-companies.webp`,
    type: "article",
  }),

  "/blog/how-to-prepare-for-a-compliance-audit-best-practices-and-strategies":
    buildPageSEO({
      title:
        "How to Prepare for a Compliance Audit | Best Practices & Steps | Com-Sec",
      description:
        "Prepare for SOC 2, ISO 27001, HIPAA, and PCI DSS audits with a structured readiness strategy.",
      canonical:
        "/blog/how-to-prepare-for-a-compliance-audit-best-practices-and-strategies",
      image: `${BASE_URL}/images/blog/prepare-compliance-audit.webp`,
      type: "article",
    }),

  "/blog/managed-security-compliance-services": buildPageSEO({
    title:
      "Managed Security & Compliance Services | Benefits & Use Cases | Com-Sec",
    description:
      "How managed security and compliance services can improve readiness, reduce workload, and support frameworks.",
    canonical: "/blog/managed-security-compliance-services",
    image: `${BASE_URL}/images/blog/managed-security-compliance.webp`,
    type: "article",
  }),

  "/blog/what-is-vciso-role-cybersecurity": buildPageSEO({
    title: "What Is a vCISO? Role, Responsibilities & Benefits | Com-Sec",
    description:
      "Learn how a vCISO supports SOC 2, ISO 27001, risk management, policies, and security strategy.",
    canonical: "/blog/what-is-vciso-role-cybersecurity",
    image: `${BASE_URL}/images/blog/vciso.webp`,
    type: "article",
  }),

  "/blog/difference-between-internal-vs-external-penetration-testing":
    buildPageSEO({
      title:
        "Internal vs External Penetration Testing: Key Differences & Use Cases | Com-Sec",
      description:
        "Understand the difference between internal and external penetration testing and when each is needed.",
      canonical:
        "/blog/difference-between-internal-vs-external-penetration-testing",
      image: `${BASE_URL}/images/blog/internal-vs-external-pentesting.webp`,
      type: "article",
    }),

  "/blog/cybersecurity-roundup-startups-may": buildPageSEO({
    title:
      "Cybersecurity Roundup for Startups — Key Threats & Trends (May) | Com-Sec",
    description:
      "A roundup of cybersecurity threats, vulnerabilities, and industry updates for startups.",
    canonical: "/blog/cybersecurity-roundup-startups-may",
    image: `${BASE_URL}/images/blog/cybersecurity-roundup-startups-may.webp`,
    type: "article",
  }),

  "/blog/security-compliance-health-companies": buildPageSEO({
    title:
      "Security & Compliance for Healthtech Companies | HIPAA, SOC 2 & Risk Management | Com-Sec",
    description:
      "A deep dive into compliance and security requirements for healthtech — HIPAA, SOC 2, data protection, and risk.",
    canonical: "/blog/security-compliance-health-companies",
    image: `${BASE_URL}/images/blog/security-compliance-health-companies.webp`,
    type: "article",
  }),

  "/blog/safeguarding-data-sharing-tech-companies": buildPageSEO({
    title:
      "Safeguarding Data Sharing for Tech Companies | Security Risks & Controls | Com-Sec",
    description:
      "How to secure APIs, cloud platforms, and data sharing pipelines with modern security controls.",
    canonical: "/blog/safeguarding-data-sharing-tech-companies",
    image: `${BASE_URL}/images/blog/safeguarding-data-sharing-tech-companies.webp`,
    type: "article",
  }),

  "/blog/ai-ethics-healthcare": buildPageSEO({
    title: "AI Ethics in Healthcare: Risks, Challenges & Responsible Use | Com-Sec",
    description:
      "Explore responsible AI practices in healthcare — transparency, bias, patient safety, and privacy risks.",
    canonical: "/blog/ai-ethics-healthcare",
    image: `${BASE_URL}/images/blog/ai-ethics-healthcare.webp`,
    type: "article",
  }),

  "/blog/patient-confidentiality-ai-healthcare": buildPageSEO({
    title:
      "Patient Confidentiality in AI Healthcare Systems | Privacy & Security Challenges | Com-Sec",
    description:
      "How AI impacts patient confidentiality, HIPAA obligations, data protection, and medical privacy risks.",
    canonical: "/blog/patient-confidentiality-ai-healthcare",
    image: `${BASE_URL}/images/blog/patient-confidentiality-ai.webp`,
    type: "article",
  }),

  "/blog/human-side-ai-patient-safety": buildPageSEO({
    title:
      "The Human Side of AI: Protecting Patient Safety in Healthcare | Com-Sec",
    description:
      "How AI intersects with human decision-making in healthcare and the impact on patient safety.",
    canonical: "/blog/human-side-ai-patient-safety",
    image: `${BASE_URL}/images/blog/human-side-ai-patient-safety.webp`,
    type: "article",
  }),

  "/blog/transparency-accuracy-ai-healthcare": buildPageSEO({
    title:
      "Transparency & Accuracy in AI Healthcare Systems | Risks & Controls | Com-Sec",
    description:
      "Why transparency and accuracy are critical in AI healthcare systems — security and compliance considerations.",
    canonical: "/blog/transparency-accuracy-ai-healthcare",
    image: `${BASE_URL}/images/blog/transparency-ai-healthcare.webp`,
    type: "article",
  }),

  "/blog/20-years-cybersecurity-journey": buildPageSEO({
    title:
      "20 Years of Cybersecurity: Evolution, Milestones & Key Lessons | Com-Sec",
    description:
      "A 20-year journey through cybersecurity evolution — from early viruses to APTs, ransomware, cloud security, and AI threats.",
    canonical: "/blog/20-years-cybersecurity-journey",
    image: `${BASE_URL}/images/blog/20-years-cybersecurity-journey.webp`,
    type: "article",
  }),
};
