import "./global.css";
import ComSecChatbot from "@/components/ComSecChatbot";
import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, Component, ErrorInfo, ReactNode } from "react";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";

// Service Pages
import Soc2Readiness from "./pages/services/Soc2Readiness";
import PenetrationTesting from "./pages/services/PenetrationTesting";
import CloudSecurity from "./pages/services/CloudSecurity";
import ComplianceAuditReadiness from "./pages/services/ComplianceAuditReadiness";
import ItSupport from "./pages/services/ItSupport";
import SocSupport from "./pages/services/SocSupport";
import SecurityTraining from "./pages/services/SecurityTraining";
import RiskManagement from "./pages/services/RiskManagement";

// Framework Pages
import Soc2Framework from "./pages/frameworks/Soc2";
import Iso27001 from "./pages/frameworks/Iso27001";
import Hipaa from "./pages/frameworks/Hipaa";
// import Hitrust from "./pages/frameworks/Hitrust";
import PciDss from "./pages/frameworks/PciDss";
import Nist from "./pages/frameworks/Nist";
import Gdpr from "./pages/frameworks/Gdpr";
import Cmmc from "./pages/frameworks/Cmmc";

// Resource Pages
import Blogs from "./pages/resources/Blogs";
import Approach from "./pages/resources/Approach";
import PhishingTest from "./pages/resources/PhishingTest";

// About Pages
import Company from "./pages/about/Company";
import Careers from "./pages/about/Careers";
import Team from "./pages/about/Team";

// Blog Pages
import Iso27001Guide from "./pages/resources/blog/Iso27001Guide";
import Soc2SmallCompanies from "./pages/resources/blog/Soc2SmallCompanies";
import MeetTeamJayush from "./pages/resources/blog/MeetTeamJayush";
import MeetTeamRojin from "./pages/resources/blog/MeetTeamRojin";
import PentestingComparison from "./pages/resources/blog/PentestingComparison";
import PrepareComplianceAudit from "./pages/resources/blog/PrepareComplianceAudit";
import WhatIsVciso from "./pages/resources/blog/WhatIsVciso";
import ManagedSecurityCompliance from "./pages/resources/blog/ManagedSecurityCompliance";
import AiEthicsHealthcare from "./pages/resources/blog/AiEthicsHealthcare";
import PatientConfidentialityAi from "./pages/resources/blog/PatientConfidentialityAi";
import HumanSideAiPatientSafety from "./pages/resources/blog/HumanSideAiPatientSafety";
import Soc2VsIso27001 from "./pages/resources/blog/Soc2VsIso27001";
import TransparencyAccuracyAiHealthcare from "./pages/resources/blog/TransparencyAccuracyAiHealthcare";
import CybersecurityRoundupStartupsMay from "./pages/resources/blog/CybersecurityRoundupStartupsMay";
import SecurityComplianceHealthCompanies from "./pages/resources/blog/SecurityComplianceHealthCompanies";
import SafeguardingDataSharingTechCompanies from "./pages/resources/blog/SafeguardingDataSharingTechCompanies";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("React Error Boundary caught an error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Something went wrong
            </h2>
            <p className="text-gray-600 mb-4">
              Please refresh the page to try again.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function CanonicalLink() {
  const location = useLocation();

  useEffect(() => {
    const baseUrl = window.location.origin;
    const canonicalUrl = `${baseUrl}${location.pathname}`;

    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.setAttribute("href", canonicalUrl);
  }, [location.pathname]);

  return null;
}

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <CanonicalLink />
            <Routes>
              <Route path="/" element={<Index />} />

              {/* Service Routes */}
              <Route path="/services" element={<Services />} />
              <Route
                path="/services/compliance-audit-readiness"
                element={<ComplianceAuditReadiness />}
              />
              <Route
                path="/services/penetration-testing-services"
                element={<PenetrationTesting />}
              />
              <Route path="/services/it-support" element={<ItSupport />} />
              <Route path="/services/soc-support" element={<SocSupport />} />
              <Route
                path="/services/soc2-readiness"
                element={<Soc2Readiness />}
              />
              <Route
                path="/services/cloud-security"
                element={<CloudSecurity />}
              />
              <Route
                path="/services/security-training"
                element={<SecurityTraining />}
              />
              <Route
                path="/services/risk-management"
                element={<RiskManagement />}
              />

              <Route path="/compliance-audit-readiness" element={<ComplianceAuditReadiness />} />
              <Route path="/penetration-testing-services" element={<PenetrationTesting />} />
              <Route path="/it-support" element={<ItSupport />} />
              <Route path="/soc-support" element={<SocSupport />} />
              <Route path="/soc2-readiness" element={<Soc2Readiness />} />
              <Route path="/cloud-security" element={<CloudSecurity />} />
              <Route path="/security-training" element={<SecurityTraining />} />
              <Route path="/risk-management" element={<RiskManagement />} />

              {/* Framework Routes */}
              <Route path="/frameworks/soc2" element={<Soc2Framework />} />
              <Route path="/frameworks/iso27001" element={<Iso27001 />} />
              <Route path="/frameworks/hipaa" element={<Hipaa />} />
              {/* <Route path="/frameworks/hitrust" element={<Hitrust />} /> */}
              <Route path="/frameworks/pci-dss" element={<PciDss />} />
              <Route path="/frameworks/nist" element={<Nist />} />
              <Route path="/frameworks/gdpr" element={<Gdpr />} />
              <Route path="/frameworks/cmmc" element={<Cmmc />} />
              {/* Top-level Framework Routes (duplicates for new paths) */}
              <Route path="/soc2" element={<Soc2Framework />} />
              <Route path="/iso27001" element={<Iso27001 />} />
              <Route path="/hipaa" element={<Hipaa />} />
              {/* <Route path="/hitrust" element={<Hitrust />} /> */}
              <Route path="/pci-dss" element={<PciDss />} />
              <Route path="/nist" element={<Nist />} />
              <Route path="/gdpr" element={<Gdpr />} />
              <Route path="/cmmc" element={<Cmmc />} />

              {/* Resource Routes */}
              <Route path="/resources/blogs" element={<Blogs />} />
              <Route path="/resources/approach" element={<Approach />} />
              <Route path="/resources/phishing" element={<PhishingTest />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/approach" element={<Approach />} />
              <Route path="/phishing" element={<PhishingTest />} />
              <Route path="/approach" element={<Approach />} />
              <Route path="/phishing" element={<PhishingTest />} />

              {/* About Routes */}
              <Route path="/about/company" element={<Company />} />
              <Route path="/about/careers" element={<Careers />} />
              <Route path="/about/team" element={<Team />} />
              {/* Top-level About Routes (duplicates for new paths) */}
              <Route path="/company" element={<Company />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/team" element={<Team />} />

              {/* Blog Post Routes */}
              <Route
                path="/resources/blog/iso-27001-certification-guide"
                element={<Iso27001Guide />}
              />
              <Route
                path="/resources/blog/why-soc2-matters-small-companies"
                element={<Soc2SmallCompanies />}
              />
              <Route
                path="/resources/blog/meet-team-jayush-chawla"
                element={<MeetTeamJayush />}
              />
              <Route
                path="/resources/blog/meet-team-rojin-rezaei"
                element={<MeetTeamRojin />}
              />
              <Route
                path="/resources/blog/internal-vs-external-penetration-testing"
                element={<PentestingComparison />}
              />
              <Route
                path="/resources/blog/prepare-compliance-audit-best-practices"
                element={<PrepareComplianceAudit />}
              />
              <Route
                path="/resources/blog/what-is-vciso-role-cybersecurity"
                element={<WhatIsVciso />}
              />
              <Route
                path="/resources/blog/managed-security-compliance-services"
                element={<ManagedSecurityCompliance />}
              />
              <Route
                path="/resources/blog/ai-ethics-healthcare-innovation"
                element={<AiEthicsHealthcare />}
              />
              <Route
                path="/resources/blog/patient-confidentiality-ai-healthcare"
                element={<PatientConfidentialityAi />}
              />
              <Route
                path="/resources/blog/human-side-ai-patient-safety"
                element={<HumanSideAiPatientSafety />}
              />
              <Route
                path="/resources/blog/soc2-vs-iso27001-comparison"
                element={<Soc2VsIso27001 />}
              />
              <Route
                path="/resources/blog/transparency-accuracy-ai-healthcare"
                element={<TransparencyAccuracyAiHealthcare />}
              />
              <Route
                path="/resources/blog/cybersecurity-roundup-startups-may"
                element={<CybersecurityRoundupStartupsMay />}
              />
              <Route
                path="/resources/blog/security-compliance-health-companies"
                element={<SecurityComplianceHealthCompanies />}
              />
              <Route
                path="/resources/blog/safeguarding-data-sharing-tech-companies"
                element={<SafeguardingDataSharingTechCompanies />}
              />
              {/* Top-level Blog Post Routes (duplicates for new paths) */}
              <Route path="/blog/iso-27001-certification-guide" element={<Iso27001Guide />} />
              <Route path="/blog/why-soc2-matters-small-companies" element={<Soc2SmallCompanies />} />
              <Route path="/blog/meet-team-jayush-chawla" element={<MeetTeamJayush />} />
              <Route path="/blog/meet-team-rojin-rezaei" element={<MeetTeamRojin />} />
              <Route path="/blog/internal-vs-external-penetration-testing" element={<PentestingComparison />} />
              <Route path="/blog/prepare-compliance-audit-best-practices" element={<PrepareComplianceAudit />} />
              <Route path="/blog/what-is-vciso-role-cybersecurity" element={<WhatIsVciso />} />
              <Route path="/blog/managed-security-compliance-services" element={<ManagedSecurityCompliance />} />
              <Route path="/blog/ai-ethics-healthcare-innovation" element={<AiEthicsHealthcare />} />
              <Route path="/blog/patient-confidentiality-ai-healthcare" element={<PatientConfidentialityAi />} />
              <Route path="/blog/human-side-ai-patient-safety" element={<HumanSideAiPatientSafety />} />
              <Route path="/blog/soc2-vs-iso27001-comparison" element={<Soc2VsIso27001 />} />
              <Route path="/blog/transparency-accuracy-ai-healthcare" element={<TransparencyAccuracyAiHealthcare />} />
              <Route path="/blog/cybersecurity-roundup-startups-may" element={<CybersecurityRoundupStartupsMay />} />
              <Route path="/blog/security-compliance-health-companies" element={<SecurityComplianceHealthCompanies />} />
              <Route path="/blog/safeguarding-data-sharing-tech-companies" element={<SafeguardingDataSharingTechCompanies />} />
              <Route path="/about" element={<About />} />

              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/contact" element={<Contact />} />

              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
    <ComSecChatbot />
  </ErrorBoundary>
);

// Ensure single root creation
const container = document.getElementById("root")!;
let root: any;

// Check if root already exists (for HMR)
if (!container._reactRootContainer) {
  root = createRoot(container);
  container._reactRootContainer = root;
} else {
  root = container._reactRootContainer;
}

root.render(<App />);
