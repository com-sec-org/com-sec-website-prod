import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center mb-4">
              <img
                src="/images/logo/com-sec_logo.png"
                alt="Com-Sec Logo"
                className="h-8 w-auto mr-2"
              />
            </Link>
            <p className="text-white/80 mb-4">
              Your trusted cybersecurity partner, ensuring compliance meets
              confidence through comprehensive security solutions.
            </p>
            <div className="text-sm text-white/60">
              © 2025 Com-Sec. All rights reserved.
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <Link
                  to="/services/soc2-readiness"
                  className="hover:text-accent transition-colors"
                >
                  SOC 2 Readiness
                </Link>
              </li>
              <li>
                <Link
                  to="/services/penetration-testing"
                  className="hover:text-accent transition-colors"
                >
                  Penetration Testing
                </Link>
              </li>
              <li>
                <Link
                  to="/services/cloud-security"
                  className="hover:text-accent transition-colors"
                >
                  Cloud Security
                </Link>
              </li>
              <li>
                <Link
                  to="/services/compliance-audit-readiness"
                  className="hover:text-accent transition-colors"
                >
                  Audit Readiness
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <Link
                  to="/about"
                  className="hover:text-accent transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonials"
                  className="hover:text-accent transition-colors"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-accent transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
