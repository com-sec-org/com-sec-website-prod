import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Menu, X, ChevronDown } from "lucide-react";
import {
  availableProducts,
  productPath,
  roadmapProducts,
} from "@/pages/products/shieldProducts";

// Services menu. An item without `to` has no page yet and renders grayed out
// (not clickable) until its page is built and the route is added here.
type ServiceItem = { label: string; to?: string };
type ServiceGroup = { title: string; to?: string; items: ServiceItem[] };

// "Not routed yet" items have an older page file in client/pages/services but
// no route in client/main.tsx, so they stay grayed until that page is
// reviewed and routed.
const serviceGroups: ServiceGroup[] = [
  {
    title: "Audit Readiness & Certification",
    to: "/compliance-audit-readiness",
    items: [
      // /soc2-readiness stays live (it gets search traffic) but is no longer in the menu.
      { label: "SOC 2", to: "/soc2" },
      { label: "HIPAA", to: "/hipaa" },
      { label: "ISO 27001", to: "/iso27001" },
      { label: "ISO 42001" },
      { label: "HITRUST", to: "/hitrust" },
      { label: "GDPR", to: "/gdpr" },
      { label: "PCI DSS", to: "/pci-dss" },
      { label: "NIST", to: "/nist" },
      { label: "CMMC", to: "/cmmc" },
      { label: "FedRAMP" },
      { label: "Internal Audits" },
      { label: "ADA/VPAT" },
    ],
  },
  {
    title: "vCISO Leadership",
    items: [
      { label: "Fractional Security Leadership", to: "/fractional-security-leadership" },
      { label: "Security Questionnaires & RFPs" },
      { label: "Risk Management" }, // /risk-management: not routed yet
      { label: "Policies & Procedures" },
      { label: "Vendor Risk Management" },
      { label: "Security Awareness & Phishing" }, // /security-training: not routed yet
      { label: "Incident Response & Resilience", to: "/incident-response-resilience" },
    ],
  },
  {
    title: "Managed Security & IT",
    items: [
      { label: "Security Operations & Monitoring", to: "/soc-support-monitoring-services" },
      { label: "Endpoint & Device Management" },
      { label: "Identity & Access Management" },
      { label: "Vulnerability & Patch Management" },
      { label: "Employee Onboarding & Offboarding" },
      { label: "SaaS & Asset Management" },
      { label: "IT Support" }, // /it-support: not routed yet
    ],
  },
  {
    title: "Penetration Testing",
    to: "/penetration-testing-services",
    items: [
      { label: "Web Application Testing" },
      { label: "API Security Testing" },
      { label: "Cloud Security Review" },
      { label: "Desktop & Mobile App Testing" },
      { label: "Network & Infrastructure Testing" },
      { label: "Retesting & Remediation Verification" },
      { label: "Pen Test Reports for Audits & Customers" },
      { label: "AI-Assisted Pen Testing" },
      { label: "Red Team Exercises" },
    ],
  },
  {
    title: "AI Governance",
    items: [
      { label: "AI Tool Inventory" },
      { label: "Acceptable Use Policies" },
      { label: "AI Vendor Reviews" },
      { label: "AI Risk Assessments" },
      { label: "Approval Workflows" },
    ],
  },
  {
    title: "CTO, Engineering & DevOps",
    items: [
      { label: "Audit-Ready Infrastructure" },
      { label: "Cloud Security Hardening" }, // /cloud-security: not routed yet
      { label: "DevSecOps & CI/CD Security" },
      { label: "Application & Infrastructure Hardening" },
      { label: "Technical Incident Response" },
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
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  // Reset expanded sections when menu closes
  useEffect(() => {
    if (!isMenuOpen) {
      setExpandedSection(null);
      setIsAboutMenuOpen(false);
      setMobileServiceGroup(null);
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

            {/* Products Dropdown: live Shield products, plus a roadmap flyout */}
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
                  <div className="relative group/roadmap">
                    <button
                      type="button"
                      className="w-full flex items-center justify-between px-4 py-2 text-left text-sm text-gray-700 hover:bg-accent/10 hover:text-accent group-hover/roadmap:bg-accent/10 group-hover/roadmap:text-accent transition-colors"
                    >
                      On the Roadmap
                      <ChevronDown className="h-4 w-4 -rotate-90 shrink-0" />
                    </button>
                    <div className="absolute left-full top-0 pl-1 opacity-0 invisible group-hover/roadmap:opacity-100 group-hover/roadmap:visible group-focus-within/roadmap:opacity-100 group-focus-within/roadmap:visible transition-all duration-200">
                      <div className="w-56 rounded-lg border bg-white shadow-xl py-2">
                        {roadmapProducts.map((p) => (
                          <Link
                            key={p.slug}
                            to={p.page ? productPath(p.slug) : COMING_SOON_HREF}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent/10 hover:text-accent transition-colors"
                          >
                            {p.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="my-2 border-t" />
                  <Link
                    to="/products"
                    className="block px-4 py-2 text-sm font-medium text-gray-900 hover:bg-accent/10 hover:text-accent transition-colors"
                  >
                    All Shield Products
                  </Link>
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
                        <Link to="/company" className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent/10 hover:text-accent transition-colors">Our Company</Link>
                        <Link to="/careers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent/10 hover:text-accent transition-colors">Careers</Link>
                        <Link to="/partnerships" className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent/10 hover:text-accent transition-colors">Partnerships</Link>
                      </div>
                    </div>
                  </div>
                  <Link to="/blogs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent/10 hover:text-accent transition-colors">Blog</Link>
                  <Link to="/phishing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent/10 hover:text-accent transition-colors">Phishing Testing</Link>
                  <Link to="/pricing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent/10 hover:text-accent transition-colors">Pricing</Link>
                  <Link to="/refer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent/10 hover:text-accent transition-colors">Refer &amp; Earn 10%</Link>
                </div>
              </div>
            </div>

            <div className="relative group">
              <Link
                to="/case-studies?category=HealthTech"
                className={`flex items-center text-foreground hover:text-accent transition-colors ${isActive("/case-studies") ? "text-accent" : ""}`}
              >
                Case Studies
                <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
              </Link>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
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
                <button
                  className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() => setExpandedSection(expandedSection === "products" ? null : "products")}
                >
                  <span className="text-sm font-medium text-gray-900">Products</span>
                  <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform ${expandedSection === "products" || expandedSection === "products-roadmap" ? "rotate-180" : ""}`} />
                </button>
                {(expandedSection === "products" || expandedSection === "products-roadmap") && (
                  <div className="px-4 pb-3 bg-gray-50">
                    <div className="flex flex-col space-y-1">
                      <Link to="/products" className="block px-3 py-2 text-sm font-medium text-gray-900 hover:text-accent hover:bg-white rounded transition-colors" onClick={() => setIsMenuOpen(false)}>All Shield Products</Link>
                      {availableProducts.map((p) => (
                        <Link key={p.slug} to={productPath(p.slug)} className="block px-3 py-2 text-sm text-gray-700 hover:text-accent hover:bg-white rounded transition-colors" onClick={() => setIsMenuOpen(false)}>{p.name}</Link>
                      ))}
                      <div>
                        <button type="button" className="w-full px-3 py-2 text-left flex items-center justify-between text-sm text-gray-700 hover:text-accent hover:bg-white rounded transition-colors" onClick={() => setExpandedSection(expandedSection === "products-roadmap" ? "products" : "products-roadmap")}>
                          On the Roadmap
                          <ChevronDown className={`h-4 w-4 transition-transform ${expandedSection === "products-roadmap" ? "rotate-180" : "-rotate-90"}`} />
                        </button>
                        {expandedSection === "products-roadmap" && <div className="ml-3 flex flex-col space-y-1 border-l border-gray-200 pl-2">
                          {roadmapProducts.map((p) => (
                            <Link key={p.slug} to={p.page ? productPath(p.slug) : COMING_SOON_HREF} className="block px-3 py-2 text-sm text-gray-700 hover:text-accent hover:bg-white rounded transition-colors" onClick={() => setIsMenuOpen(false)}>{p.name}</Link>
                          ))}
                        </div>}
                      </div>
                    </div>
                  </div>
                )}
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
                        <button type="button" className="w-full px-3 py-2 text-left flex items-center justify-between text-sm text-gray-700 hover:text-accent hover:bg-white rounded transition-colors" onClick={() => setExpandedSection(expandedSection === "resources-about" ? "resources" : "resources-about")}>
                          About Us
                          <ChevronDown className={`h-4 w-4 transition-transform ${expandedSection === "resources-about" ? "rotate-180" : "-rotate-90"}`} />
                        </button>
                        {expandedSection === "resources-about" && <div className="ml-3 flex flex-col space-y-1 border-l border-gray-200 pl-2">
                          <Link to="/company" className="block px-3 py-2 text-sm text-gray-700 hover:text-accent hover:bg-white rounded transition-colors" onClick={() => setIsMenuOpen(false)}>Our Company</Link>
                          <Link to="/careers" className="block px-3 py-2 text-sm text-gray-700 hover:text-accent hover:bg-white rounded transition-colors" onClick={() => setIsMenuOpen(false)}>Careers</Link>
                          <Link to="/partnerships" className="block px-3 py-2 text-sm text-gray-700 hover:text-accent hover:bg-white rounded transition-colors" onClick={() => setIsMenuOpen(false)}>Partnerships</Link>
                        </div>}
                      </div>
                      <Link to="/blogs" className="block px-3 py-2 text-sm text-gray-700 hover:text-accent hover:bg-white rounded transition-colors" onClick={() => setIsMenuOpen(false)}>Blog</Link>
                      <Link to="/phishing" className="block px-3 py-2 text-sm text-gray-700 hover:text-accent hover:bg-white rounded transition-colors" onClick={() => setIsMenuOpen(false)}>Phishing Testing</Link>
                      <Link to="/pricing" className="block px-3 py-2 text-sm text-gray-700 hover:text-accent hover:bg-white rounded transition-colors" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
                      <Link to="/refer" className="block px-3 py-2 text-sm text-gray-700 hover:text-accent hover:bg-white rounded transition-colors" onClick={() => setIsMenuOpen(false)}>Refer &amp; Earn 10%</Link>
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
