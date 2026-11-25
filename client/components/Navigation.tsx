import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Menu, X, ChevronDown } from "lucide-react";
import {
  availableProducts,
  productPath,
} from "@/pages/products/shieldProducts";

// Services menu. An item without `to` has no page yet and renders grayed out
// (not clickable) until its page is built and the route is added here.
type ServiceItem = { label: string; to?: string };
type ServiceGroup = { title: string; to?: string; items: ServiceItem[] };

// Every Services item has a page (most use the shared ServicePage template,
// content in client/data/servicePages) or a #section on its group page.
const serviceGroups: ServiceGroup[] = [
  {
    title: "Audit Readiness & Certification",
    to: "/compliance-audit-service",
    items: [
      // /soc2-readiness stays live (it gets search traffic) but is no longer in the menu.
      { label: "SOC 2", to: "/soc2" },
      { label: "HIPAA", to: "/hipaa" },
      { label: "ISO 27001", to: "/iso27001" },
      { label: "ISO 42001", to: "/iso42001" },
      { label: "HITRUST", to: "/hitrust" },
      { label: "GDPR", to: "/gdpr" },
      { label: "PCI DSS", to: "/pci-dss" },
      { label: "NIST", to: "/nist" },
      { label: "CMMC", to: "/cmmc" },
      { label: "FedRAMP", to: "/compliance-audit-service#fedramp" },
      { label: "Internal Audits", to: "/internal-audits" },
      { label: "ADA/VPAT", to: "/compliance-audit-service#ada-vpat" },
    ],
  },
  {
    title: "vCISO Leadership",
    to: "/fractional-security-leadership",
    items: [
      { label: "Fractional Security Leadership", to: "/fractional-security-leadership" },
      { label: "Security Questionnaires & RFPs", to: "/security-questionnaires" },
      { label: "Risk Management", to: "/risk-management" },
      { label: "Policies & Procedures", to: "/policies-procedures" },
      { label: "Vendor Risk Management", to: "/vendor-risk-management" },
      { label: "Security Awareness & Phishing", to: "/security-awareness-training" },
      { label: "Incident Response & Resilience", to: "/incident-response-resilience" },
    ],
  },
  {
    title: "Managed Security & IT",
    to: "/managed-security-it",
    items: [
      { label: "Security Operations & Monitoring", to: "/soc-support" },
      { label: "Endpoint & Device Management", to: "/endpoint-device-management" },
      { label: "Identity & Access Management", to: "/identity-access-management" },
      { label: "Vulnerability & Patch Management", to: "/vulnerability-patch-management" },
      { label: "Employee Onboarding & Offboarding", to: "/employee-onboarding-offboarding" },
      { label: "SaaS & Asset Management", to: "/saas-asset-management" },
      { label: "IT Support", to: "/it-support" },
    ],
  },
  {
    title: "Penetration Testing",
    to: "/penetration-testing-services",
    items: [
      { label: "Web Application Testing", to: "/web-application-penetration-testing" },
      { label: "API Security Testing", to: "/api-security-testing" },
      { label: "Cloud Security Review", to: "/cloud-security-review" },
      { label: "Desktop & Mobile App Testing", to: "/mobile-desktop-app-testing" },
      { label: "Network & Infrastructure Testing", to: "/network-penetration-testing" },
      { label: "Retesting & Remediation Verification", to: "/penetration-retesting" },
      { label: "Pen Test Reports for Audits & Customers", to: "/penetration-test-reports" },
      { label: "AI-Assisted Pen Testing", to: "/penetration-testing-services#ai-assisted" },
      { label: "Red Team Exercises", to: "/penetration-testing-services#red-team" },
    ],
  },
  {
    title: "AI Governance",
    to: "/ai-governance",
    items: [
      { label: "AI Tool Inventory", to: "/ai-tool-inventory" },
      { label: "Acceptable Use Policies", to: "/ai-acceptable-use-policy" },
      { label: "AI Vendor Reviews", to: "/ai-vendor-reviews" },
      { label: "AI Risk Assessments", to: "/ai-risk-assessments" },
      { label: "Approval Workflows", to: "/ai-governance#approval-workflows" },
    ],
  },
  {
    title: "CTO, Engineering & DevOps",
    to: "/cto-engineering-devops",
    items: [
      { label: "Audit-Ready Infrastructure", to: "/audit-ready-infrastructure" },
      { label: "Cloud Security Hardening", to: "/cloud-security-hardening" },
      { label: "DevSecOps & CI/CD Security", to: "/devsecops" },
      { label: "Application & Infrastructure Hardening", to: "/application-infrastructure-hardening" },
      { label: "Technical Incident Response", to: "/technical-incident-response" },
    ],
  },
];

// Items without a page yet link to the contact form until their page is built.
const COMING_SOON_HREF = "/contact";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [isAboutMenuOpen, setIsAboutMenuOpen] = useState(false);
  const [mobileServiceGroup, setMobileServiceGroup] = useState<string | null>(null);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  // Reset expanded sections when menu closes
  useEffect(() => {
    if (!isMenuOpen) {
      setExpandedSection(null);
      setIsAboutMenuOpen(false);
      setMobileServiceGroup(null);
      setIsMobileAboutOpen(false);
    }
  }, [isMenuOpen]);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center no-underline">
            <img
              src="/images/logo/com-sec_logo.png"
              alt="Com-Sec Logo"
              className="w-auto transform hover:scale-105 transition-transform duration-300 block"
              style={{ height: "38px" }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Services Dropdown: section list with a flyout per section
                (same pattern as About Us under Resources). */}
            <div className="relative group">
              <button className="flex items-center text-foreground hover:text-accent transition-colors">
                Services
                <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  {serviceGroups.map((group) => {
                    const headingClass =
                      "w-full flex items-center justify-between px-4 py-2 text-left text-sm text-gray-700 hover:bg-accent/10 hover:text-accent group-hover/svc:bg-accent/10 group-hover/svc:text-accent transition-colors";
                    const heading = (
                      <>
                        {group.title}
                        <ChevronDown className="h-4 w-4 -rotate-90 shrink-0" />
                      </>
                    );
                    // Heading links to its page, or to contact until that page exists.
                    return (
                      <div key={group.title} className="relative group/svc">
                        <Link to={group.to ?? COMING_SOON_HREF} className={headingClass}>
                          {heading}
                        </Link>
                        {/* pl-1 (not margin) keeps the hover area continuous into the flyout */}
                        <div className="absolute left-full top-0 pl-1 opacity-0 invisible group-hover/svc:opacity-100 group-hover/svc:visible group-focus-within/svc:opacity-100 group-focus-within/svc:visible transition-all duration-200">
                          <div className="w-72 rounded-lg border bg-white shadow-xl py-2">
                            {group.items.map((item) => (
                              <Link
                                key={item.label}
                                to={item.to ?? COMING_SOON_HREF}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent/10 hover:text-accent transition-colors"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Products Dropdown */}
            <div className="relative group">
              <Link
                to="/products"
                className={`flex items-center text-foreground hover:text-accent transition-colors ${location.pathname.startsWith("/products") ? "text-accent" : ""}`}
              >
                Products
                <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
              </Link>
              <div className="absolute top-full left-0 mt-2 w-60 bg-white rounded-lg shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  {availableProducts.map((p) => (
                    <Link
                      key={p.slug}
                      to={productPath(p.slug)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent/10 hover:text-accent transition-colors"
                    >
                      {p.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Resources Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-foreground hover:text-accent transition-colors">
                Resources
                <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  <div className="relative group/about">
                    <button
                      type="button"
                      onClick={() => setIsAboutMenuOpen(!isAboutMenuOpen)}
                      className="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-accent/10 hover:text-accent transition-colors"
                    >
                      About Us
                      <ChevronDown className={`h-4 w-4 -rotate-90 transition-transform ${isAboutMenuOpen ? "rotate-0" : ""}`} />
                    </button>
                    <div className={`absolute left-full top-0 ml-1 w-48 rounded-lg border bg-white shadow-xl transition-all duration-300 ${isAboutMenuOpen ? "opacity-100 visible" : "opacity-0 invisible group-hover/about:opacity-100 group-hover/about:visible"}`}>
                      <div className="py-2">
                        <Link to="/company" className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent/10 hover:text-accent transition-colors">Company</Link>
                        <Link to="/team" className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent/10 hover:text-accent transition-colors">Team</Link>
                        <Link to="/careers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent/10 hover:text-accent transition-colors">Careers</Link>
                        <Link to="/partnerships" className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent/10 hover:text-accent transition-colors">Partnerships</Link>
                      </div>
                    </div>
                  </div>
                  <Link to="/blogs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent/10 hover:text-accent transition-colors">Blog</Link>
                  <Link to="/phishing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent/10 hover:text-accent transition-colors">Phishing Testing</Link>
                  <Link to="/refer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent/10 hover:text-accent transition-colors">Refer &amp; Earn 10%</Link>
                </div>
              </div>
            </div>

            {/* Pricing Dropdown */}
            <div className="relative group">
              <Link
                to="/pricing"
                className={`flex items-center text-foreground hover:text-accent transition-colors ${location.pathname.startsWith("/pricing") ? "text-accent" : ""}`}
              >
                Pricing
                <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
              </Link>
              <div className="absolute top-full left-0 mt-2 w-60 bg-white rounded-lg shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  <Link
                    to="/pricing/one-time"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent/10 hover:text-accent transition-colors"
                  >
                    One-Time Engagements
                  </Link>
                  <Link
                    to="/pricing/ongoing"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent/10 hover:text-accent transition-colors"
                  >
                    Ongoing Support
                  </Link>
                  <div className="relative group/grc">
                    <Link
                      to="/pricing/calculator"
                      className="w-full flex items-center justify-between px-4 py-2 text-left text-sm text-gray-700 hover:bg-accent/10 hover:text-accent group-hover/grc:bg-accent/10 group-hover/grc:text-accent transition-colors"
                    >
                      Shield GRC
                      <ChevronDown className="h-4 w-4 -rotate-90 shrink-0" />
                    </Link>
                    <div className="absolute left-full top-0 pl-1 opacity-0 invisible group-hover/grc:opacity-100 group-hover/grc:visible group-focus-within/grc:opacity-100 group-focus-within/grc:visible transition-all duration-200">
                      <div className="w-56 rounded-lg border bg-white shadow-xl py-2">
                        <Link
                          to="/pricing/calculator"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent/10 hover:text-accent transition-colors"
                        >
                          Package Calculator
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <Link
                to="/case-studies"
                className={`flex items-center text-foreground hover:text-accent transition-colors ${isActive("/case-studies") ? "text-accent" : ""}`}
              >
                Case Studies
                <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
              </Link>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  <Link
                    to="/case-studies"
                    className="block px-4 py-2 text-sm font-medium text-gray-900 hover:bg-accent/10 hover:text-accent transition-colors"
                  >
                    All Case Studies
                  </Link>
                  <div className="my-1 border-t" />
                  {['HealthTech', 'InsurTech', 'AgTech', 'AI / SaaS', 'Global Mobility', 'FinTech', 'Energy', 'EdTech', 'Services'].map((category) => (
                    <Link
                      key={category}
                      to={`/case-studies?category=${encodeURIComponent(category)}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent/10 hover:text-accent transition-colors"
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/contact"
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform ${
                isActive("/contact")
                  ? "bg-gradient-to-r from-accent to-orange-500 text-white shadow-lg hover:shadow-xl hover:scale-105"
                  : "bg-accent/10 text-accent hover:bg-accent hover:text-white hover:shadow-lg hover:scale-105"
              }`}
            >
              Let's Talk
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
                if (isMenuOpen) {
                  setExpandedSection(null);
                }
              }}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 bg-white border-t max-h-[70vh] overflow-y-auto">
            <div className="flex flex-col pt-2">
              {/* Services Section */}
              <div className="border-b border-gray-100">
                <button
                  className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() =>
                    setExpandedSection(
                      expandedSection === "services" ? null : "services",
                    )
                  }
                >
                  <span className="text-sm font-medium text-gray-900">
                    Services
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 text-gray-500 transition-transform ${expandedSection === "services" ? "rotate-180" : ""}`}
                  />
                </button>
                {expandedSection === "services" && (
                  <div className="px-4 pb-3 bg-gray-50">
                    <div className="flex flex-col space-y-1">
                      {serviceGroups.map((group) => (
                        <div key={group.title}>
                          <button
                            type="button"
                            className="w-full px-3 py-2 text-left flex items-center justify-between text-sm text-gray-700 hover:text-accent hover:bg-white rounded transition-colors"
                            onClick={() =>
                              setMobileServiceGroup(
                                mobileServiceGroup === group.title ? null : group.title,
                              )
                            }
                          >
                            {group.title}
                            <ChevronDown
                              className={`h-4 w-4 shrink-0 transition-transform ${mobileServiceGroup === group.title ? "rotate-180" : "-rotate-90"}`}
                            />
                          </button>
                          {mobileServiceGroup === group.title && (
                          <div className="ml-3 flex flex-col space-y-1 border-l border-gray-200 pl-2">
                            {group.to && (
                              <Link
                                to={group.to}
                                className="block px-3 py-2 text-sm font-medium text-gray-900 hover:text-accent hover:bg-white rounded transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                Overview
                              </Link>
                            )}
                            {group.items.map((item) => (
                              <Link
                                key={item.label}
                                to={item.to ?? COMING_SOON_HREF}
                                className="block px-3 py-2 text-sm text-gray-700 hover:text-accent hover:bg-white rounded transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Products Section */}
              <div className="border-b border-gray-100">
                <Link to="/products" className="block px-4 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors" onClick={() => setIsMenuOpen(false)}>
                  Products
                </Link>
              </div>

              {/* Resources Section */}
              <div className="border-b border-gray-100">
                <button
                  className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() => setExpandedSection(expandedSection === "resources" ? null : "resources")}
                >
                  <span className="text-sm font-medium text-gray-900">Resources</span>
                  <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform ${expandedSection === "resources" ? "rotate-180" : ""}`} />
                </button>
                {expandedSection === "resources" && (
                  <div className="px-4 pb-3 bg-gray-50">
                    <div className="flex flex-col space-y-1">
                      <div>
                        <button type="button" className="w-full px-3 py-2 text-left flex items-center justify-between text-sm text-gray-700 hover:text-accent hover:bg-white rounded transition-colors" onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}>
                          About Us
                          <ChevronDown className={`h-4 w-4 transition-transform ${isMobileAboutOpen ? "rotate-180" : "-rotate-90"}`} />
                        </button>
                        {isMobileAboutOpen && <div className="ml-3 flex flex-col space-y-1 border-l border-gray-200 pl-2">
                          <Link to="/company" className="block px-3 py-2 text-sm text-gray-700 hover:text-accent hover:bg-white rounded transition-colors" onClick={() => setIsMenuOpen(false)}>Company</Link>
                          <Link to="/team" className="block px-3 py-2 text-sm text-gray-700 hover:text-accent hover:bg-white rounded transition-colors" onClick={() => setIsMenuOpen(false)}>Team</Link>
                          <Link to="/careers" className="block px-3 py-2 text-sm text-gray-700 hover:text-accent hover:bg-white rounded transition-colors" onClick={() => setIsMenuOpen(false)}>Careers</Link>
                          <Link to="/partnerships" className="block px-3 py-2 text-sm text-gray-700 hover:text-accent hover:bg-white rounded transition-colors" onClick={() => setIsMenuOpen(false)}>Partnerships</Link>
                        </div>}
                      </div>
                      <Link to="/blogs" className="block px-3 py-2 text-sm text-gray-700 hover:text-accent hover:bg-white rounded transition-colors" onClick={() => setIsMenuOpen(false)}>Blog</Link>
                      <Link to="/phishing" className="block px-3 py-2 text-sm text-gray-700 hover:text-accent hover:bg-white rounded transition-colors" onClick={() => setIsMenuOpen(false)}>Phishing Testing</Link>
                      <Link to="/refer" className="block px-3 py-2 text-sm text-gray-700 hover:text-accent hover:bg-white rounded transition-colors" onClick={() => setIsMenuOpen(false)}>Refer &amp; Earn 10%</Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Pricing Section */}
              <div className="border-b border-gray-100">
                <button
                  className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() => setExpandedSection(expandedSection === "pricing" ? null : "pricing")}
                >
                  <span className="text-sm font-medium text-gray-900">Pricing</span>
                  <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform ${expandedSection === "pricing" ? "rotate-180" : ""}`} />
                </button>
                {expandedSection === "pricing" && (
                  <div className="px-4 pb-3 bg-gray-50">
                    <div className="flex flex-col space-y-1">
                      <Link to="/pricing" className="block rounded px-3 py-2 text-sm font-medium text-gray-900 hover:bg-white hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>Overview</Link>
                      <Link to="/pricing/one-time" className="block rounded px-3 py-2 text-sm text-gray-700 hover:bg-white hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>One-Time Engagements</Link>
                      <Link to="/pricing/ongoing" className="block rounded px-3 py-2 text-sm text-gray-700 hover:bg-white hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>Ongoing Support</Link>
                      <Link to="/pricing/calculator" className="block rounded px-3 py-2 text-sm text-gray-700 hover:bg-white hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>Shield GRC Package Calculator</Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Case Studies Section */}
              <div className="border-b border-gray-100">
                <button
                  className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() => setExpandedSection(expandedSection === "case-studies" ? null : "case-studies")}
                >
                  <span className="text-sm font-medium text-gray-900">Case Studies</span>
                  <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform ${expandedSection === "case-studies" ? "rotate-180" : ""}`} />
                </button>
                {expandedSection === "case-studies" && (
                  <div className="px-4 pb-3 bg-gray-50">
                    <div className="flex flex-col space-y-1">
                      <Link
                        to="/case-studies"
                        className="block rounded px-3 py-2 text-sm font-medium text-gray-900 hover:bg-white hover:text-accent transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        All Case Studies
                      </Link>
                      {['HealthTech', 'InsurTech', 'AgTech', 'AI / SaaS', 'Global Mobility', 'FinTech', 'Energy', 'EdTech', 'Services'].map((category) => (
                        <Link
                          key={category}
                          to={`/case-studies?category=${encodeURIComponent(category)}`}
                          className="block rounded px-3 py-2 text-sm text-gray-700 hover:bg-white hover:text-accent transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {category}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Contact & CTA */}
              <div className="px-4 py-3">
                <Link
                  to="/contact"
                  className={`block px-3 py-2 font-medium rounded transition-colors ${
                    isActive("/contact")
                      ? "text-accent bg-accent/10"
                      : "text-foreground hover:text-accent hover:bg-gray-50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Let's Talk
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
