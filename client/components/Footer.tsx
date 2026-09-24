import { Link } from "react-router-dom";

const LINKEDIN_URL = "https://www.linkedin.com/company/com-sec/";

type FooterLink = { label: string; to: string };
type FooterColumn = { heading: string; links: FooterLink[] };

const columns: FooterColumn[] = [
  {
    heading: "Services",
    links: [
      { label: "Fractional Security Leadership", to: "/fractional-security-leadership" },
      { label: "Managed Security Services", to: "/managed-security-services" },
      { label: "Compliance, Privacy & GRC", to: "/compliance-privacy-grc" },
      { label: "Assessments & Offensive Security", to: "/assessments-audits-offensive-security" },
      { label: "Incident Response & Resilience", to: "/incident-response-resilience" },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { label: "SOC 2 Readiness", to: "/soc2-readiness" },
      { label: "Compliance & Audit Readiness", to: "/compliance-audit-service" },
      { label: "Penetration Testing", to: "/penetration-testing-services" },
      { label: "SOC Support", to: "/soc-support" },
    ],
  },
  {
    heading: "Frameworks",
    links: [
      { label: "SOC 2", to: "/soc2" },
      { label: "ISO 27001", to: "/iso27001" },
      { label: "HIPAA", to: "/hipaa" },
      { label: "HITRUST", to: "/hitrust" },
      { label: "PCI DSS", to: "/pci-dss" },
      { label: "NIST", to: "/nist" },
      { label: "GDPR", to: "/gdpr" },
      { label: "CMMC", to: "/cmmc" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Blog", to: "/blog" },
      { label: "Case Studies", to: "/case-studies" },
      { label: "Phishing Testing", to: "/phishing" },
      { label: "Pricing", to: "/pricing" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", to: "/company" },
      { label: "Careers", to: "/careers" },
      { label: "Partnerships", to: "/partnerships" },
      { label: "Testimonials", to: "/testimonials" },
      { label: "Contact", to: "/contact" },
    ],
  },
];

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-3 lg:grid-cols-[auto_repeat(5,minmax(0,1fr))] lg:gap-x-10">
          <div className="col-span-2 md:col-span-3 lg:col-span-1 lg:pr-4">
            <Link to="/" className="inline-block">
              <img
                src="/images/logo/com-sec_logo.png"
                alt="Com-Sec Logo"
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {columns.map((column) => (
            <div key={column.heading}>
              <h3 className="font-mono text-[13px] uppercase tracking-[0.15em] text-white/60 mb-5">
                {column.heading}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-[15px] text-white/80 hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t border-white/15 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[13px] text-white/60">
            <span>© {new Date().getFullYear()} Com-Sec. All rights reserved.</span>
            <Link to="/privacy-policy" className="underline underline-offset-2 hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-use" className="underline underline-offset-2 hover:text-accent transition-colors">
              Terms of Use
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Com-Sec on LinkedIn"
              className="text-white/70 hover:text-accent transition-colors"
            >
              <LinkedInIcon className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
