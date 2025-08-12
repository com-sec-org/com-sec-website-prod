import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Menu, X, ChevronDown } from "lucide-react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  // Reset expanded sections when menu closes
  useEffect(() => {
    if (!isMenuOpen) {
      setExpandedSection(null);
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
            <Link
              to="/"
              className={`transition-colors ${
                isActive("/")
                  ? "text-accent font-medium"
                  : "text-foreground hover:text-accent"
              }`}
            >
              Home
            </Link>
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-foreground hover:text-accent transition-colors">
                Services
                <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  <Link
                    to="/services/compliance-audit-readiness"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent/10 hover:text-accent transition-colors"
                  >
                    Compliance and Audit Readiness
                  </Link>
                  <Link
                    to="/services/penetration-testing"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent/10 hover:text-accent transition-colors"
                  >
                    Penetration Testing
                  </Link>
                  <Link
                    to="/services/it-support"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent/10 hover:text-accent transition-colors"
                  >
                    IT Support
                  </Link>
                  <Link
                    to="/services/soc-support"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent/10 hover:text-accent transition-colors"
                  >
                    SOC Support
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
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  <Link
                    to="/resources/blogs"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent/10 hover:text-accent transition-colors"
                  >
                    Blogs
                  </Link>
                  <Link
                    to="/resources/approach"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent/10 hover:text-accent transition-colors"
                  >
                    Approach
                  </Link>
                  <Link
                    to="/resources/phishing"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent/10 hover:text-accent transition-colors"
                  >
                    Phishing Test
                  </Link>
                </div>
              </div>
            </div>

            {/* Frameworks Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-foreground hover:text-accent transition-colors">
                Frameworks
                <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  <Link
                    to="/frameworks/soc2"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent/10 hover:text-accent transition-colors"
                  >
                    SOC 2
                  </Link>
                  <Link
                    to="/frameworks/iso27001"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent/10 hover:text-accent transition-colors"
                  >
                    ISO 27001
                  </Link>
                  <Link
                    to="/frameworks/hitrust"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent/10 hover:text-accent transition-colors"
                  >
                    HITRUST
                  </Link>
                  <Link
                    to="/frameworks/hipaa"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent/10 hover:text-accent transition-colors"
                  >
                    HIPAA
                  </Link>
                  <Link
                    to="/frameworks/pci-dss"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent/10 hover:text-accent transition-colors"
                  >
                    PCI-DSS
                  </Link>
                  <Link
                    to="/frameworks/nist"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent/10 hover:text-accent transition-colors"
                  >
                    NIST
                  </Link>
                  <Link
                    to="/frameworks/gdpr"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent/10 hover:text-accent transition-colors"
                  >
                    GDPR
                  </Link>
                  <Link
                    to="/frameworks/cmmc"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent/10 hover:text-accent transition-colors"
                  >
                    CMMC
                  </Link>
                </div>
              </div>
            </div>

            {/* About Us Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-foreground hover:text-accent transition-colors">
                About Us
                <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  <Link
                    to="/about/company"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent/10 hover:text-accent transition-colors"
                  >
                    Our Company
                  </Link>
                  <Link
                    to="/about/careers"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent/10 hover:text-accent transition-colors"
                  >
                    Careers
                  </Link>
                  <Link
                    to="/about/team"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent/10 hover:text-accent transition-colors"
                  >
                    Team
                  </Link>
                </div>
              </div>
            </div>

            <Link
              to="/contact"
              className={`transition-colors ${
                isActive("/contact")
                  ? "text-accent font-medium"
                  : "text-foreground hover:text-accent"
              }`}
            >
              Contact Us
            </Link>
            <Button
              className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              asChild
            >
              <a
                href="https://calendly.com/bojan-com-sec"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started
              </a>
            </Button>
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
                      <Link
                        to="/services/compliance-audit-readiness"
                        className="block px-3 py-2 text-sm text-gray-700 hover:text-accent hover:bg-white rounded transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Compliance and Audit Readiness
                      </Link>
                      <Link
                        to="/services/penetration-testing"
                        className="block px-3 py-2 text-sm text-gray-700 hover:text-accent hover:bg-white rounded transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Penetration Testing
                      </Link>
                      <Link
                        to="/services/it-support"
                        className="block px-3 py-2 text-sm text-gray-700 hover:text-accent hover:bg-white rounded transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        IT Support
                      </Link>
                      <Link
                        to="/services/soc-support"
                        className="block px-3 py-2 text-sm text-gray-700 hover:text-accent hover:bg-white rounded transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        SOC Support
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Frameworks Section */}
              <div className="border-b border-gray-100">
                <button
                  className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() =>
                    setExpandedSection(
                      expandedSection === "frameworks" ? null : "frameworks",
                    )
                  }
                >
                  <span className="text-sm font-medium text-gray-900">
                    Frameworks
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 text-gray-500 transition-transform ${expandedSection === "frameworks" ? "rotate-180" : ""}`}
                  />
                </button>
                {expandedSection === "frameworks" && (
                  <div className="px-4 pb-3 bg-gray-50">
                    <div className="flex flex-col space-y-1">
                      <Link
                        to="/frameworks/soc2"
                        className="block px-3 py-2 text-sm text-gray-700 hover:text-accent hover:bg-white rounded transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        SOC 2
                      </Link>
                      <Link
                        to="/frameworks/iso27001"
                        className="block px-3 py-2 text-sm text-gray-700 hover:text-accent hover:bg-white rounded transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        ISO 27001
                      </Link>
                      <Link
                        to="/frameworks/hitrust"
                        className="block px-3 py-2 text-sm text-gray-700 hover:text-accent hover:bg-white rounded transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        HITRUST
                      </Link>
                      <Link
                        to="/frameworks/hipaa"
                        className="block px-3 py-2 text-sm text-gray-700 hover:text-accent hover:bg-white rounded transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        HIPAA
                      </Link>
                      <Link
                        to="/frameworks/pci-dss"
                        className="block px-3 py-2 text-sm text-gray-700 hover:text-accent hover:bg-white rounded transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        PCI-DSS
                      </Link>
                      <Link
                        to="/frameworks/nist"
                        className="block px-3 py-2 text-sm text-gray-700 hover:text-accent hover:bg-white rounded transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        NIST
                      </Link>
                      <Link
                        to="/frameworks/gdpr"
                        className="block px-3 py-2 text-sm text-gray-700 hover:text-accent hover:bg-white rounded transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        GDPR
                      </Link>
                      <Link
                        to="/frameworks/cmmc"
                        className="block px-3 py-2 text-sm text-gray-700 hover:text-accent hover:bg-white rounded transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        CMMC
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Resources Section */}
              <div className="border-b border-gray-100">
                <button
                  className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() =>
                    setExpandedSection(
                      expandedSection === "resources" ? null : "resources",
                    )
                  }
                >
                  <span className="text-sm font-medium text-gray-900">
                    Resources
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 text-gray-500 transition-transform ${expandedSection === "resources" ? "rotate-180" : ""}`}
                  />
                </button>
                {expandedSection === "resources" && (
                  <div className="px-4 pb-3 bg-gray-50">
                    <div className="flex flex-col space-y-1">
                      <Link
                        to="/resources/blogs"
                        className="block px-3 py-2 text-sm text-gray-700 hover:text-accent hover:bg-white rounded transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Blogs
                      </Link>
                      <Link
                        to="/resources/approach"
                        className="block px-3 py-2 text-sm text-gray-700 hover:text-accent hover:bg-white rounded transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Approach
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* About Section */}
              <div className="border-b border-gray-100">
                <button
                  className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() =>
                    setExpandedSection(
                      expandedSection === "about" ? null : "about",
                    )
                  }
                >
                  <span className="text-sm font-medium text-gray-900">
                    About Us
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 text-gray-500 transition-transform ${expandedSection === "about" ? "rotate-180" : ""}`}
                  />
                </button>
                {expandedSection === "about" && (
                  <div className="px-4 pb-3 bg-gray-50">
                    <div className="flex flex-col space-y-1">
                      <Link
                        to="/about/company"
                        className="block px-3 py-2 text-sm text-gray-700 hover:text-accent hover:bg-white rounded transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Our Company
                      </Link>
                      <Link
                        to="/about/careers"
                        className="block px-3 py-2 text-sm text-gray-700 hover:text-accent hover:bg-white rounded transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Careers
                      </Link>
                      <Link
                        to="/about/team"
                        className="block px-3 py-2 text-sm text-gray-700 hover:text-accent hover:bg-white rounded transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Team
                      </Link>
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
                  Contact Us
                </Link>
                <Button
                  className="w-full mt-3 bg-gradient-to-r from-primary to-blue-600 transform hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <a
                    href="https://calendly.com/bojan-com-sec"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Started
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
