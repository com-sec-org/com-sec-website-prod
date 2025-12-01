// import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// import { useEffect } from "react";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import ComSecChatbot from "@/components/ComSecChatbot";

// import Index from "./pages/Index";
// import Services from "./pages/Services";
// import Testimonials from "./pages/Testimonials";
// import Contact from "./pages/Contact";

// import Soc2Readiness from "./pages/services/Soc2Readiness";
// import PenetrationTesting from "./pages/services/PenetrationTesting";
// import CloudSecurity from "./pages/services/CloudSecurity";
// import ComplianceAuditReadiness from "./pages/services/ComplianceAuditReadiness";
// import ItSupport from "./pages/services/ItSupport";
// import SocSupport from "./pages/services/SocSupport";
// import SecurityTraining from "./pages/services/SecurityTraining";
// import RiskManagement from "./pages/services/RiskManagement";

// import Soc2Framework from "./pages/frameworks/Soc2";
// import Iso27001 from "./pages/frameworks/Iso27001";
// import Hipaa from "./pages/frameworks/Hipaa";
// import Hitrust from "./pages/frameworks/Hitrust";
// import PciDss from "./pages/frameworks/PciDss";
// import Nist from "./pages/frameworks/Nist";
// import Gdpr from "./pages/frameworks/Gdpr";
// import Cmmc from "./pages/frameworks/Cmmc";

// import Blogs from "./pages/resources/Blogs";
// import Approach from "./pages/resources/Approach";
// import PhishingTest from "./pages/resources/PhishingTest";

// import Company from "./pages/about/Company";
// import Careers from "./pages/about/Careers";
// import Team from "./pages/about/Team";

// import Iso27001Guide from "./pages/resources/blog/Iso27001Guide";
// import Soc2SmallCompanies from "./pages/resources/blog/Soc2SmallCompanies";
// import MeetTeamJayush from "./pages/resources/blog/MeetTeamJayush";
// import MeetTeamRojin from "./pages/resources/blog/MeetTeamRojin";
// import PentestingComparison from "./pages/resources/blog/PentestingComparison";
// import PrepareComplianceAudit from "./pages/resources/blog/PrepareComplianceAudit";
// import WhatIsVciso from "./pages/resources/blog/WhatIsVciso";
// import ManagedSecurityCompliance from "./pages/resources/blog/ManagedSecurityCompliance";
// import AiEthicsHealthcare from "./pages/resources/blog/AiEthicsHealthcare";
// import PatientConfidentialityAi from "./pages/resources/blog/PatientConfidentialityAi";
// import HumanSideAiPatientSafety from "./pages/resources/blog/HumanSideAiPatientSafety";
// import Soc2VsIso27001 from "./pages/resources/blog/Soc2VsIso27001";
// import TransparencyAccuracyAiHealthcare from "./pages/resources/blog/TransparencyAccuracyAiHealthcare";
// import CybersecurityRoundupStartupsMay from "./pages/resources/blog/CybersecurityRoundupStartupsMay";
// import SecurityComplianceHealthCompanies from "./pages/resources/blog/SecurityComplianceHealthCompanies";
// import SafeguardingDataSharingTechCompanies from "./pages/resources/blog/SafeguardingDataSharingTechCompanies";

// import NotFound from "./pages/NotFound";

// const queryClient = new QueryClient();

// function ScrollToTop() {
//   const { pathname } = useLocation();
//   useEffect(() => window.scrollTo(0, 0), [pathname]);
//   return null;
// }

// export default function App() {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <TooltipProvider>
//         <Toaster />
//         <Sonner />
//         <BrowserRouter>
//           <ScrollToTop />

//           <Routes>
//             {/* Homepage */}
//             <Route path="/" element={<Index />} />

//             {/* Services */}
//             <Route path="/services" element={<Services />} />
//             <Route path="/penetration-testing-services" element={<PenetrationTesting />} />
//             <Route path="/compliance-audit-readiness" element={<ComplianceAuditReadiness />} />
//             <Route path="/it-support" element={<ItSupport />} />
//             <Route path="/soc-support" element={<SocSupport />} />
//             <Route path="/soc2-readiness" element={<Soc2Readiness />} />
//             <Route path="/cloud-security" element={<CloudSecurity />} />
//             <Route path="/security-training" element={<SecurityTraining />} />
//             <Route path="/risk-management" element={<RiskManagement />} />

//             {/* Frameworks */}
//             <Route path="/soc2" element={<Soc2Framework />} />
//             <Route path="/iso27001" element={<Iso27001 />} />
//             <Route path="/hipaa" element={<Hipaa />} />
//             <Route path="/hitrust" element={<Hitrust />} />
//             <Route path="/pci-dss" element={<PciDss />} />
//             <Route path="/nist" element={<Nist />} />
//             <Route path="/gdpr" element={<Gdpr />} />
//             <Route path="/cmmc" element={<Cmmc />} />

//             {/* Resources */}
//             <Route path="/blogs" element={<Blogs />} />
//             <Route path="/approach" element={<Approach />} />
//             <Route path="/phishing" element={<PhishingTest />} />

//             {/* About */}
//             <Route path="/company" element={<Company />} />
//             <Route path="/careers" element={<Careers />} />
//             <Route path="/team" element={<Team />} />

//             {/* SPECIAL OLD BLOG URL */}
//             <Route
//               path="/blog/how-to-prepare-for-a-compliance-audit-best-practices-and-strategies"
//               element={<PrepareComplianceAudit />}
//             />
//             {/* Default */}
//             <Route path="/testimonials" element={<Testimonials />} />
//             <Route path="/contact" element={<Contact />} />
//             {/* Catch-all */}
//             <Route path="*" element={<NotFound />} />
//           </Routes>

//           <ComSecChatbot />
//         </BrowserRouter>
//       </TooltipProvider>
//     </QueryClientProvider>
//   );
// }


import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import ComSecChatbot from "@/components/ComSecChatbot";

/* Main pages */
import Index from "./pages/Index";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";

/* Services */
import Soc2Readiness from "./pages/services/Soc2Readiness";
import PenetrationTesting from "./pages/services/PenetrationTesting";
import CloudSecurity from "./pages/services/CloudSecurity";
import ComplianceAuditReadiness from "./pages/services/ComplianceAuditReadiness";
import ItSupport from "./pages/services/ItSupport";
import SocSupport from "./pages/services/SocSupport";
import SecurityTraining from "./pages/services/SecurityTraining";
import RiskManagement from "./pages/services/RiskManagement";

/* Frameworks */
import Soc2Framework from "./pages/frameworks/Soc2";
import Iso27001 from "./pages/frameworks/Iso27001";
import Hipaa from "./pages/frameworks/Hipaa";
import Hitrust from "./pages/frameworks/Hitrust";
import PciDss from "./pages/frameworks/PciDss";
import Nist from "./pages/frameworks/Nist";
import Gdpr from "./pages/frameworks/Gdpr";
import Cmmc from "./pages/frameworks/Cmmc";

/* Resources */
import Blogs from "./pages/resources/Blogs";
import Approach from "./pages/resources/Approach";
import PhishingTest from "./pages/resources/PhishingTest";

/* About */
import Company from "./pages/about/Company";
import Careers from "./pages/about/Careers";
import Team from "./pages/about/Team";

/* Blog Articles */
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

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>
          <ScrollToTop />

          <Routes>
            {/* Homepage */}
            <Route path="/" element={<Index />} />
            <Route path="/contact" element={<Contact />} />
            {/* Services */}
            <Route path="/services" element={<Services />} />
            <Route path="/penetration-testing-services" element={<PenetrationTesting />} />
            <Route path="/compliance-audit-readiness" element={<ComplianceAuditReadiness />} />
            <Route path="/it-support" element={<ItSupport />} />
            <Route path="/soc-support" element={<SocSupport />} />
            <Route path="/soc2-readiness" element={<Soc2Readiness />} />
            <Route path="/cloud-security" element={<CloudSecurity />} />
            <Route path="/security-training" element={<SecurityTraining />} />
            <Route path="/risk-management" element={<RiskManagement />} />

            {/* Frameworks */}
            <Route path="/soc2" element={<Soc2Framework />} />
            <Route path="/iso27001" element={<Iso27001 />} />
            <Route path="/hipaa" element={<Hipaa />} />
            <Route path="/hitrust" element={<Hitrust />} />
            <Route path="/pci-dss" element={<PciDss />} />
            <Route path="/nist" element={<Nist />} />
            <Route path="/gdpr" element={<Gdpr />} />
            <Route path="/cmmc" element={<Cmmc />} />

            {/* Resources */}
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/approach" element={<Approach />} />
            <Route path="/phishing" element={<PhishingTest />} />

            {/* About */}
            <Route path="/company" element={<Company />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/team" element={<Team />} />

            {/* BLOG ROUTES (100% matched to Blogs.tsx IDs) */}
            <Route path="/blog/iso-27001-certification-guide" element={<Iso27001Guide />} />
            <Route path="/blog/soc2-vs-iso27001-comparison" element={<Soc2VsIso27001 />} />
            <Route path="/blog/why-soc2-matters-small-companies" element={<Soc2SmallCompanies />} />
            <Route path="/blog/difference-between-internal-vs-external-penetration-testing" element={<PentestingComparison />} />

            <Route path="/blog/how-to-prepare-for-a-compliance-audit-best-practices-and-strategies" element={<PrepareComplianceAudit />} />

            <Route path="/blog/what-is-vciso-role-cybersecurity" element={<WhatIsVciso />} />
            <Route path="/blog/managed-security-compliance-services" element={<ManagedSecurityCompliance />} />

            <Route path="/blog/ai-ethics-healthcare" element={<AiEthicsHealthcare />} />
            <Route path="/blog/patient-confidentiality-ai-healthcare" element={<PatientConfidentialityAi />} />
            <Route path="/blog/human-side-ai-patient-safety" element={<HumanSideAiPatientSafety />} />
            <Route path="/blog/transparency-accuracy-ai-healthcare" element={<TransparencyAccuracyAiHealthcare />} />

            <Route path="/blog/cybersecurity-roundup-startups-may" element={<CybersecurityRoundupStartupsMay />} />
            <Route path="/blog/security-compliance-health-companies" element={<SecurityComplianceHealthCompanies />} />
            <Route path="/blog/safeguarding-data-sharing-tech-companies" element={<SafeguardingDataSharingTechCompanies />} />

            <Route path="/blog/meet-team-jayush-chawla" element={<MeetTeamJayush />} />
            <Route path="/blog/meet-team-rojin-rezaei" element={<MeetTeamRojin />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>

          <ComSecChatbot />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
