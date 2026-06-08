import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Shield, FileText, Clock, Globe, Mail } from "lucide-react";

export default function TermsOfUse() {
  return (
    <>
      <Helmet>
        <title>Terms of Use | Com-Sec</title>
        <meta
          name="description"
          content="Read Com-Sec's Terms of Use governing your access to and use of com-sec.io."
        />
        <link rel="canonical" href="https://com-sec.io/terms-of-use" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen bg-white overflow-x-hidden">
        <Navigation />

        {/* Hero */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-primary to-indigo-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-16 left-12 w-40 h-40 bg-white/5 rounded-full animate-pulse" />
            <div className="absolute top-32 right-16 w-28 h-28 bg-accent/10 rounded-full animate-bounce" />
            <div className="absolute bottom-16 left-1/3 w-20 h-20 bg-white/5 rounded-full animate-ping" />
            <Shield className="absolute bottom-24 right-1/4 h-16 w-16 text-white/5" />
          </div>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-5 py-2 text-accent text-sm font-medium mb-6">
              <FileText className="h-4 w-4" />
              Legal
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white leading-tight">
              Terms of <span className="text-accent">Use</span>
            </h1>
            <p className="text-white/60 text-lg mb-8 max-w-2xl">
              These Terms govern your access to and use of com-sec.io. Please read them carefully before using the Site.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2 text-sm text-white/80">
                <Clock className="h-4 w-4 text-accent" />
                Effective: May 1, 2025
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2 text-sm text-white/80">
                <Globe className="h-4 w-4 text-accent" />
                Applies to com-sec.io
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2 text-sm text-white/80">
                <Mail className="h-4 w-4 text-accent" />
                info@com-sec.io
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <article>

            {/* Preamble */}
            <p className="text-gray-600 text-[15px] leading-relaxed mb-12">
              Welcome to Com-Sec LLC ("Com-Sec," "we," "us," or "our"). These Terms of Use ("Terms") govern your access to and use of our website,{" "}
              <a href="https://com-sec.io" className="text-accent hover:underline">https://com-sec.io</a>{" "}
              (the "Site"), and any content, materials, or resources we make available through it. By accessing or using the Site, you agree to be bound by these Terms and our{" "}
              <Link to="/privacy-policy" className="text-accent hover:underline">Privacy Policy</Link>. If you do not agree, please do not use the Site.
            </p>

            <Section number="1" id="about" title="About Com-Sec">
              <P>
                Com-Sec is a cybersecurity and compliance consulting firm that helps startups and growth-stage companies simplify and attain security certifications. Our services include SOC 2, ISO 27001, HIPAA, GDPR, PCI-DSS readiness, internal penetration testing, audit support, and virtual CISO services. This Site provides information about our offerings, enables you to contact us, and serves as a resource for prospective and current clients.
              </P>
            </Section>

            <Section number="2" id="who" title="Who Can Use This Site">
              <P>By using this Site, you represent and warrant that:</P>
              <BulletList items={[
                "You are at least 18 years of age",
                "You have the legal authority to enter into these Terms",
                "If accessing on behalf of an organization, you are authorized to agree to these Terms on its behalf",
              ]} />
            </Section>

            <Section number="3" id="acceptable" title="Acceptable Use">
              <P>You may use the Site for lawful, personal, and informational purposes. You may not:</P>
              <BulletList items={[
                "Use the Site in violation of any applicable laws or regulations",
                "Infringe upon our intellectual property rights or those of others",
                "Interfere with or disrupt the functionality or security of the Site",
                "Introduce malicious code such as viruses, spyware, or ransomware",
                "Attempt unauthorized access to the Site, our systems, or data",
                "Use bots, crawlers, or scraping tools to extract data from the Site without permission",
              ]} />
              <P>We reserve the right to monitor usage and take appropriate action against misuse.</P>
            </Section>

            <Section number="4" id="submissions" title="User Submissions and Inquiries">
              <P>If you contact us through the Site or submit an inquiry, you agree that:</P>
              <BulletList items={[
                "All information you provide will be truthful, current, and accurate",
                "We may use this information solely for responding to your request or assessing interest in our services",
                "You will not upload or transmit any harmful or confidential data without authorization",
              ]} />
              <P>We do not guarantee a response to every inquiry submitted.</P>
            </Section>

            <Section number="5" id="ip" title="Intellectual Property">
              <P>
                All content on the Site, including but not limited to text, graphics, logos, icons, videos, code, and design, is the property of Com-Sec or its licensors, protected under U.S. and international copyright, trademark, and intellectual property laws.
              </P>
              <P>
                You may not reproduce, distribute, modify, or publicly display any part of the Site without our express written permission. The Com-Sec name, logo, and service marks may not be used without authorization.
              </P>
            </Section>

            <Section number="6" id="informational" title="Informational Nature of Content">
              <P>
                The content on this Site is provided for general informational purposes only and does not constitute legal, regulatory, or professional advice. While Com-Sec offers expert cybersecurity consulting, nothing on this Site should be interpreted as forming a professional services agreement.
              </P>
              <Callout>
                To engage our consulting or penetration testing services, a separate, signed client agreement is required.
              </Callout>
            </Section>

            <Section number="7" id="third-party" title="Third-Party Links">
              <P>
                The Site may include links to third-party websites or tools. These are provided solely for convenience and do not imply endorsement. We are not responsible for the availability, accuracy, or content of third-party sites, nor for their privacy or security practices.
              </P>
              <P>You access third-party resources at your own risk.</P>
            </Section>

            <Section number="8" id="disclaimers" title="Disclaimers">
              <P>
                The Site is provided "as is" and "as available" without warranties of any kind. Com-Sec does not guarantee that the Site will be secure, error-free, or continuously available. We disclaim all warranties, express or implied, including but not limited to:
              </P>
              <BulletList items={[
                "Warranties of merchantability or fitness for a particular purpose",
                "Non-infringement",
                "Accuracy, reliability, or timeliness of information",
              ]} />
              <P>Your use of the Site is solely at your own risk.</P>
            </Section>

            <Section number="9" id="liability" title="Limitation of Liability">
              <P>
                To the maximum extent permitted by law, Com-Sec shall not be liable for any indirect, incidental, consequential, special, or punitive damages, including loss of profits, data, or business interruption, arising from your use of or inability to use the Site, even if we were advised of the possibility of such damages.
              </P>
              <P>
                Some jurisdictions may not allow certain exclusions or limitations of liability, so parts of this section may not apply to you.
              </P>
            </Section>

            <Section number="10" id="indemnification" title="Indemnification">
              <P>
                You agree to indemnify and hold harmless Com-Sec, its directors, officers, employees, affiliates, and agents from and against any third-party claims, damages, or liabilities (including legal fees) arising out of:
              </P>
              <BulletList items={[
                "Your use of the Site",
                "Your violation of these Terms",
                "Your infringement of any intellectual property or privacy rights",
              ]} />
            </Section>

            <Section number="11" id="termination" title="Suspension and Termination">
              <P>
                We may suspend or terminate your access to the Site at any time, without notice, for conduct that we determine violates these Terms or is harmful to Com-Sec, its users, or its reputation.
              </P>
            </Section>

            <Section number="12" id="updates" title="Updates to These Terms">
              <P>
                We may update these Terms periodically to reflect changes to our services, the law, or the Site itself. The "Effective Date" above will always reflect the latest version. We encourage you to review these Terms regularly. Continued use of the Site constitutes acceptance of any changes.
              </P>
            </Section>

            <Section number="13" id="governing" title="Governing Law and Jurisdiction">
              <P>
                These Terms are governed by the laws of the State of Maryland, excluding its conflict of law provisions. You agree that any legal dispute arising from these Terms or your use of the Site will be brought exclusively in the state or federal courts located in Montgomery County, Maryland.
              </P>
            </Section>

            <Section number="14" id="severability" title="Severability">
              <P>
                If any provision of these Terms is held to be unlawful or unenforceable, the remainder of the Terms shall remain in full force and effect. The unenforceable provision shall be interpreted in a manner consistent with applicable law to reflect the original intent.
              </P>
            </Section>

            <Section number="15" id="agreement" title="Entire Agreement">
              <P>
                These Terms, together with our{" "}
                <Link to="/privacy-policy" className="text-accent hover:underline font-medium">Privacy Policy</Link>,
                constitute the entire agreement between you and Com-Sec regarding your use of the Site, superseding any prior understandings or agreements.
              </P>
            </Section>

            <Section number="16" id="contact" title="Contact Us">
              <P>If you have any questions or feedback about these Terms, please contact us:</P>
              <div className="mt-5 rounded-2xl border border-gray-200 overflow-hidden">
                <div className="bg-primary px-6 py-4">
                  <p className="font-semibold text-white text-sm">Com-Sec LLC</p>
                  <p className="text-white/60 text-xs mt-0.5">Cybersecurity and Compliance Firm</p>
                </div>
                <div className="divide-y divide-gray-100">
                  <div className="flex items-center justify-between px-6 py-4">
                    <span className="text-sm text-gray-500">Email</span>
                    <a href="mailto:info@com-sec.io" className="text-sm text-accent font-medium hover:underline">info@com-sec.io</a>
                  </div>
                  <div className="flex items-center justify-between px-6 py-4">
                    <span className="text-sm text-gray-500">Website</span>
                    <a href="https://com-sec.io" className="text-sm text-accent font-medium hover:underline">https://com-sec.io</a>
                  </div>
                </div>
              </div>
            </Section>

          </article>
        </div>

        <Footer />
      </div>
    </>
  );
}

function Section({ number, id, title, children }: {
  number: string; id: string; title: string; children: React.ReactNode;
}) {
  return (
    <section id={id} className="mb-10 pb-10 border-b border-gray-100 last:border-0 last:pb-0 scroll-mt-28">
      <div className="flex items-baseline gap-3 mb-4">
        <span className="text-accent font-bold text-sm tabular-nums shrink-0">{number}.</span>
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
      </div>
      <div className="pl-6 space-y-4">
        {children}
      </div>
    </section>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="text-gray-600 text-[15px] leading-relaxed">{children}</p>;
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-[15px] text-gray-600">
          <span className="mt-2 w-1 h-1 rounded-full bg-accent shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-l-2 border-accent bg-orange-50/60 rounded-r-lg px-4 py-3 text-[14px] text-gray-700 leading-relaxed">
      {children}
    </div>
  );
}
