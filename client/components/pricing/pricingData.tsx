import { Award, Rocket, Search, Shield, Users } from "lucide-react";

// Section 1: One-Time Engagements
export const oneTimeEngagements = [
  {
    id: 1,
    name: "Security Assessments",
    category: "One-Time Engagements",
    type: "One-time",
    startingPrice: "$4,000",
    description:
      "Technical and operational security assessment services designed to identify vulnerabilities, validate controls, and improve organizational security posture.",
    icon: Search,
    highlights: [
      "Penetration Testing",
      "Internal Audit",
    ],
    benefits: [
      "Web & cloud penetration testing",
      "Internal compliance audits",
      "Risk analysis",
      "Remediation recommendations",
      "Technical reporting",
      "Evidence validation",
    ],
    simplePrice: true,
    buttonText: "Learn More",
  },
  {
    id: 2,
    name: "Compliance & Framework Audit Readiness",
    category: "One-Time Engagements",
    type: "One-time",
    startingPrice: "$6,000",
    description:
      "Comprehensive compliance and audit readiness support for major frameworks and certifications.",
    icon: Award,
    frameworks: [
      "SOC 2 Type I",
      "SOC 2 Type II",
      "ISO 27001",
      "GDPR",
      "HIPAA",
      "NIST",
      "HITRUST",
    ],
    benefits: [
      "Gap assessments",
      "Policy & documentation support",
      "Control implementation guidance",
      "Evidence readiness",
      "Audit preparation",
      "Compliance roadmap",
    ],
    simplePrice: true,
    badge: "MOST POPULAR",
    buttonText: "Get Started",
  },
  {
    id: 3,
    name: "Full SOC 2 Audit Package",
    category: "One-Time Engagements",
    type: "One-time",
    startingPrice: "$18,500",
    description:
      "Complete SOC 2 Type II engagement including readiness, evidence collection, GRC platform support, auditor coordination, and compliance management from kickoff to final report.",
    icon: Award,
    highlights: [
      "GRC Platform Support (Drata, Vanta, Ceel)",
      "Auditor Coordination",
      "Audit Readiness",
    ],
    benefits: [
      "GRC platform support",
      "Auditor coordination",
      "Policy implementation",
      "Evidence monitoring",
      "Observation support",
      "Compliance management",
    ],
    simplePrice: true,
    badge: "BEST VALUE",
    pricingDisplay: {
      headline: "All-Inclusive",
      price: "$18,500",
      subtext: "Best value based on scope",
    },
    buttonText: "Book a Consultation",
  },
];

// Section 2: Ongoing Support Services
export const ongoingSupportServices = [
  {
    id: 4,
    name: "vCISO Support",
    category: "Ongoing Support",
    type: "Monthly",
    startingPrice: "$2,500",
    description:
      "Virtual Chief Information Security Officer services including security strategy, risk management, and compliance oversight.",
    icon: Shield,
    highlights: [
      "Security Strategy",
      "Risk Management",
      "Compliance Oversight",
      "Policy Governance",
    ],
    benefits: [
      "Security strategy development",
      "Risk management oversight",
      "Policy development and review",
      "Compliance monitoring",
      "Board-level reporting",
      "Regulatory guidance",
    ],
    simplePrice: true,
    buttonText: "Learn More",
  },
  {
    id: 5,
    name: "vCISO + IT Management",
    category: "Ongoing Support",
    type: "Monthly",
    startingPrice: "$4,500",
    description:
      "Combined virtual security leadership and IT operations management for comprehensive security and infrastructure oversight.",
    icon: Users,
    highlights: [
      "Endpoint Management",
      "IT Operations",
      "User Access Management",
      "Compliance Monitoring",
    ],
    benefits: [
      "Fractional CISO coverage",
      "IT helpdesk support",
      "Endpoint management",
      "User onboarding & access control",
      "Security strategy development",
      "Compliance monitoring",
    ],
    simplePrice: true,
    badge: "MOST POPULAR",
    buttonText: "Learn More",
  },
  {
    id: 6,
    name: "MSSP + SOC Support",
    category: "Ongoing Support",
    type: "Monthly",
    startingPrice: "$6,500",
    description:
      "Managed Security Service Provider with 24/7 Security Operations Center monitoring and threat response capabilities.",
    icon: Rocket,
    highlights: [
      "24/7 SOC Monitoring",
      "Threat Detection",
      "Incident Response",
      "Vulnerability Management",
    ],
    benefits: [
      "24/7 SOC monitoring",
      "Threat detection and response",
      "Security incident management",
      "Log aggregation and analysis",
      "Vulnerability management",
      "Security reporting",
    ],
    simplePrice: true,
    buttonText: "Learn More",
  },
];
