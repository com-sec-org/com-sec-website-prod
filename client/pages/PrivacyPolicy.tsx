import { Helmet } from "react-helmet";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Shield, Lock, Eye, Mail, FileText, Users, Globe, Clock, AlertCircle, ChevronRight } from "lucide-react";

const sections = [
  { id: "collect", label: "What We Collect" },
  { id: "process", label: "How We Process" },
  { id: "share", label: "How We Share" },
  { id: "safe", label: "Keeping Info Safe" },
  { id: "retention", label: "Retention" },
  { id: "rights", label: "Your Rights" },
  { id: "us-rights", label: "US Residents" },
  { id: "minors", label: "Minors" },
  { id: "updates", label: "Policy Updates" },
  { id: "contact", label: "Contact Us" },
];

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Com-Sec</title>
        <meta
          name="description"
          content="Com-Sec's Privacy Policy describing how we collect, use, and protect your personal information."
        />
        <link rel="canonical" href="https://com-sec.io/privacy-policy" />
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
              Privacy <span className="text-accent">Policy</span>
            </h1>
            <p className="text-white/60 text-lg mb-8 max-w-2xl">
              Here is exactly how Com-Sec handles your data.
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
                privacy@com-sec.io
              </div>
            </div>
          </div>
        </section>

        {/* Main layout: sidebar + content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row gap-12">

            {/* Sticky sidebar */}
            <aside className="lg:w-64 shrink-0">
              <div className="lg:sticky lg:top-24 bg-gray-50 border border-gray-200 rounded-2xl p-6">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Contents</p>
                <nav className="space-y-1">
                  {sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-accent transition-colors py-1.5 px-2 rounded-lg hover:bg-accent/5 group"
                    >
                      <ChevronRight className="h-3 w-3 text-gray-300 group-hover:text-accent transition-colors" />
                      {s.label}
                    </a>
                  ))}
                </nav>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-xs text-gray-400 mb-3">Questions? Reach out:</p>
                  <a
                    href="mailto:privacy@com-sec.io"
                    className="text-sm text-accent font-medium hover:underline"
                  >
                    privacy@com-sec.io
                  </a>
                </div>
              </div>
            </aside>

            {/* Content */}
            <main className="flex-1 min-w-0 max-w-3xl">

              {/* Intro */}
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-10 flex gap-4">
                <AlertCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <p className="text-gray-700 text-sm leading-relaxed">
                  Com-Sec LLC ("Com-Sec," "we," "us," or "our") is a cybersecurity consulting firm offering security and compliance services to startups and growth-stage companies. This Privacy Policy describes how we collect, use, and protect your personal information when you visit{" "}
                  <a href="https://com-sec.io" className="text-accent font-medium hover:underline">com-sec.io</a>, submit inquiries, or receive our consulting services.
                </p>
              </div>

              {/* Section 1 */}
              <section id="collect" className="mb-12 scroll-mt-24">
                <SectionHeader icon={<Eye className="h-5 w-5" />} number="1" title="What Information Do We Collect?" />
                <p className="text-gray-600 mb-6">Com-Sec collects limited personal information to provide and improve our services, maintain security, and respond to your inquiries.</p>

                <SubSection title="1.1 Information You Provide to Us">
                  <p className="text-gray-600 mb-3">When you contact us through our website or communicate with our team, you may provide:</p>
                  <TagList items={["Name", "Email address", "Phone number", "Job title", "Company name"]} />
                  <InfoBox>
                    Contact form submissions are securely converted into email and delivered to our team. We do <strong>not</strong> store this in a formal internal database, and we do <strong>not</strong> collect sensitive personal information such as financial, health, or government ID data.
                  </InfoBox>
                </SubSection>

                <SubSection title="1.2 Information Collected Automatically">
                  <p className="text-gray-600 mb-3">When you visit our website, we may automatically collect limited technical data:</p>
                  <TagList items={["IP address", "Browser type and version", "Device type and operating system", "Pages visited and time spent", "Referring or exit URLs"]} />
                  <p className="text-gray-500 text-sm mt-3">This data does not reveal your identity and is used in aggregate for diagnostics and service improvement.</p>
                </SubSection>

                <SubSection title="1.3 Cookies and Tracking Technologies">
                  <p className="text-gray-600 mb-3">We use essential cookies and basic analytics tools. We do <strong>not</strong> use marketing, targeting, or advertising cookies. Where required by law, we display a cookie banner to manage preferences.</p>
                </SubSection>
              </section>

              <Divider />

              {/* Section 2 */}
              <section id="process" className="mb-12 scroll-mt-24">
                <SectionHeader icon={<Shield className="h-5 w-5" />} number="2" title="How We Process Your Information" />
                <p className="text-gray-600 mb-6">We use collected information for limited and specific purposes:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {[
                    { title: "Respond to Inquiries", desc: "Address your questions or requests from our contact form." },
                    { title: "Assess Service Interest", desc: "Understand interest in our security and compliance offerings." },
                    { title: "Improve Website Experience", desc: "Maintain, secure, and enhance website performance." },
                    { title: "Maintain Internal Records", desc: "Retain limited correspondence for audit or operational purposes." },
                  ].map((c) => (
                    <div key={c.title} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                      <p className="font-semibold text-gray-800 text-sm mb-1">{c.title}</p>
                      <p className="text-gray-500 text-sm">{c.desc}</p>
                    </div>
                  ))}
                </div>
                <InfoBox>We do <strong>not</strong> use your information for marketing without your express consent and do not engage in automated decision-making or profiling.</InfoBox>
                <p className="text-gray-600 mt-4 mb-2">In EEA/UK jurisdictions, our legal bases are:</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  {[
                    ["Consent", "When you contact us or request information"],
                    ["Legitimate interests", "To operate and improve our website and services"],
                    ["Legal obligation", "When required to comply with applicable laws"],
                  ].map(([b, d]) => (
                    <li key={b} className="flex gap-2"><span className="font-semibold text-gray-800 shrink-0">{b}:</span> {d}</li>
                  ))}
                </ul>
              </section>

              <Divider />

              {/* Section 3 */}
              <section id="share" className="mb-12 scroll-mt-24">
                <SectionHeader icon={<Users className="h-5 w-5" />} number="3" title="How We Share Your Information" />
                <div className="bg-green-50 border border-green-100 rounded-xl p-4 mb-6 flex gap-3">
                  <Shield className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  <p className="text-green-800 text-sm font-medium">We do not sell, rent, or trade your personal information.</p>
                </div>
                <p className="text-gray-600 mb-4">We may share information only under these limited circumstances:</p>
                <div className="space-y-3">
                  <div className="border border-gray-200 rounded-xl p-4">
                    <p className="font-semibold text-gray-800 text-sm mb-1">Legal Requirements</p>
                    <p className="text-gray-500 text-sm">When required to comply with applicable laws, regulations, legal processes, or government requests.</p>
                  </div>
                  <div className="border border-gray-200 rounded-xl p-4">
                    <p className="font-semibold text-gray-800 text-sm mb-1">Business Transactions</p>
                    <p className="text-gray-500 text-sm">In the event of a merger, acquisition, or sale of assets, your information may transfer as part of the transaction.</p>
                  </div>
                </div>
                <p className="text-gray-500 text-sm mt-4">We do not engage third-party vendors to process, host, or manage personal data submitted through our website.</p>
              </section>

              <Divider />

              {/* Section 4 */}
              <section id="safe" className="mb-12 scroll-mt-24">
                <SectionHeader icon={<Lock className="h-5 w-5" />} number="4" title="How Do We Keep Your Information Safe?" />
                <p className="text-gray-600 mb-5">We implement appropriate technical and organizational security measures:</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  {[
                    { icon: <Lock className="h-5 w-5 text-accent" />, label: "TLS Encryption", desc: "Data encrypted in transit" },
                    { icon: <Shield className="h-5 w-5 text-accent" />, label: "Access Controls", desc: "User authentication enforced" },
                    { icon: <Eye className="h-5 w-5 text-accent" />, label: "Policy Reviews", desc: "Periodic internal audits" },
                  ].map((m) => (
                    <div key={m.label} className="bg-gray-50 border border-gray-100 rounded-xl p-4 text-center">
                      <div className="flex justify-center mb-2">{m.icon}</div>
                      <p className="font-semibold text-gray-800 text-sm">{m.label}</p>
                      <p className="text-gray-500 text-xs mt-1">{m.desc}</p>
                    </div>
                  ))}
                </div>
                <InfoBox>No method of transmission over the internet is fully secure. Transmission of information to and from our website is at your own risk. We recommend accessing our services only from secure environments.</InfoBox>
              </section>

              <Divider />

              {/* Section 5 */}
              <section id="retention" className="mb-12 scroll-mt-24">
                <SectionHeader icon={<Clock className="h-5 w-5" />} number="5" title="How Long We Keep Your Information" />
                <p className="text-gray-600 mb-4">We retain personal data only for as long as necessary to fulfill the purposes in this policy or meet applicable legal, regulatory, or contractual obligations.</p>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                  <p className="text-sm text-gray-700">If you contact us without engaging our services, we typically retain your information within our email system for <strong>no longer than 12 months</strong>, unless retention is required for business, legal, or compliance reasons. When data is no longer needed, we securely delete or archive it.</p>
                </div>
              </section>

              <Divider />

              {/* Section 6 */}
              <section id="rights" className="mb-12 scroll-mt-24">
                <SectionHeader icon={<Users className="h-5 w-5" />} number="6" title="What Are Your Privacy Rights?" />
                <p className="text-gray-600 mb-6">Your rights depend on your location and nature of interaction with Com-Sec.</p>

                <SubSection title="6.1 Access and Correction">
                  <p className="text-gray-600">You may request access to the personal information we hold, or request corrections to keep your data accurate. Contact us at <a href="mailto:privacy@com-sec.io" className="text-accent font-semibold hover:underline">privacy@com-sec.io</a>.</p>
                </SubSection>

                <SubSection title="6.2 Opt-Out of Communications">
                  <p className="text-gray-600 mb-2">You may opt out of marketing communications at any time by clicking the unsubscribe link in our emails, or by contacting <a href="mailto:privacy@com-sec.io" className="text-accent font-semibold hover:underline">privacy@com-sec.io</a>.</p>
                  <p className="text-gray-500 text-sm">We may still send essential service-related messages related to an active engagement.</p>
                </SubSection>

                <SubSection title="6.3 Region-Specific Rights (EEA, UK, Switzerland, Canada)">
                  <TagList items={[
                    "Request deletion of your personal data",
                    "Restrict or object to processing",
                    "Request data portability (where technically feasible)",
                    "Withdraw consent at any time",
                    "File a complaint with your local data protection authority",
                  ]} />
                </SubSection>
              </section>

              <Divider />

              {/* Section 7 */}
              <section id="us-rights" className="mb-12 scroll-mt-24">
                <SectionHeader icon={<Globe className="h-5 w-5" />} number="7" title="Do United States Residents Have Specific Privacy Rights?" />
                <p className="text-gray-600 mb-6">California residents have specific rights under the <strong>CCPA</strong> and <strong>CPRA</strong>.</p>

                <SubSection title="7.1 Categories of Personal Information Collected">
                  <div className="overflow-x-auto rounded-xl border border-gray-200">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-gray-50 border-b border-gray-200">
                          <th className="text-left px-4 py-3 font-semibold text-gray-700">Category</th>
                          <th className="text-left px-4 py-3 font-semibold text-gray-700">Examples</th>
                          <th className="text-left px-4 py-3 font-semibold text-gray-700">Collected</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["A. Identifiers", "Name, email, IP address", true],
                          ["B. Customer Records", "Job title, company, phone", true],
                          ["C. Protected Characteristics", "Age, gender, ethnicity", false],
                          ["D. Commercial Information", "Purchase history", false],
                          ["E. Biometric Information", "Fingerprints, face scans", false],
                          ["F. Internet/Network Activity", "Browser type, pages visited", true],
                          ["G. Geolocation Data", "Approximate location via IP", true],
                          ["H. Sensory Data", "Audio/video recordings", false],
                          ["I. Professional/Employment Info", "Job title, company info", true],
                          ["J. Education Info", "Student records", false],
                          ["K. Inferences", "User profiles, predictions", false],
                          ["L. Sensitive Personal Information", "Gov ID, financial info", false],
                          ["M. Other Personal Info", "Contact form messages", true],
                        ].map(([cat, ex, col], i) => (
                          <tr key={String(cat)} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                            <td className="px-4 py-3 text-gray-700">{cat}</td>
                            <td className="px-4 py-3 text-gray-500">{ex}</td>
                            <td className="px-4 py-3">
                              <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${col ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                                {col ? "Yes" : "No"}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-4 bg-green-50 border border-green-100 rounded-xl p-4 flex gap-3">
                    <Shield className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                    <p className="text-green-800 text-sm">We do <strong>not</strong> sell or share your personal information for advertising or marketing purposes.</p>
                  </div>
                </SubSection>

                <SubSection title="7.2 Your Rights Under California Law">
                  <TagList items={[
                    "Know the categories and specific pieces of personal information we collect",
                    "Access a copy of your personal data",
                    "Delete your personal information (with some legal exceptions)",
                    "Correct inaccurate personal data",
                    "Opt out of the sale or sharing of personal information (Note: we do not sell or share your data)",
                    "Limit use of sensitive personal information (Note: we do not collect this data)",
                    "Not be discriminated against for exercising your rights",
                  ]} />
                </SubSection>

                <SubSection title="7.3, 7.4 and 7.5 Exercising Your Rights, Verification and Appeals">
                  <p className="text-gray-600 mb-3">Submit a request by emailing <a href="mailto:privacy@com-sec.io" className="text-accent font-semibold hover:underline">privacy@com-sec.io</a>. We may verify your identity before processing. Authorized agents must provide written authorization. If your state allows privacy appeals, you may appeal our decision via the same email.</p>
                </SubSection>

                <SubSection title='7.6 California "Shine the Light" Disclosure'>
                  <p className="text-gray-600">Under California Civil Code §1798.83, you may request information once per year about personal data shared for third-party marketing. Com-Sec does <strong>not</strong> share your data for such purposes. If this changes, we will update this policy and provide an opt-out.</p>
                </SubSection>
              </section>

              <Divider />

              {/* Section 8 */}
              <section id="minors" className="mb-12 scroll-mt-24">
                <SectionHeader icon={<AlertCircle className="h-5 w-5" />} number="8" title="Do We Collect Information From Minors?" />
                <p className="text-gray-600 mb-4">We do not knowingly collect, solicit, or process personal information from individuals under the age of 18. Our website and services are intended for business and professional use only.</p>
                <InfoBox>If you believe we have inadvertently collected data from someone under 18, please contact us immediately at <a href="mailto:privacy@com-sec.io" className="text-accent font-semibold hover:underline">privacy@com-sec.io</a> and we will take appropriate steps to delete that information.</InfoBox>
              </section>

              <Divider />

              {/* Section 9 */}
              <section id="updates" className="mb-12 scroll-mt-24">
                <SectionHeader icon={<FileText className="h-5 w-5" />} number="9" title="Do We Make Updates To This Policy?" />
                <p className="text-gray-600 mb-4">We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or business operations. When we do, we will revise the "Effective Date" at the top of this page.</p>
                <p className="text-gray-600">If we make material changes, we may notify you by posting a notice on our website or contacting you directly. We encourage you to review this policy periodically.</p>
              </section>

              <Divider />

              {/* Section 10 */}
              <section id="contact" className="mb-12 scroll-mt-24">
                <SectionHeader icon={<Mail className="h-5 w-5" />} number="10" title="How Do You Contact Us?" />
                <p className="text-gray-600 mb-6">If you have any questions or comments about this Privacy Policy or our privacy practices, reach out to us:</p>
                <div className="bg-gradient-to-br from-primary to-indigo-900 rounded-2xl p-8 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-accent/20 rounded-lg p-2">
                      <Shield className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-bold text-lg">Com-Sec LLC</p>
                      <p className="text-white/60 text-sm">Cybersecurity & Compliance Firm</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <a href="mailto:privacy@com-sec.io" className="flex items-center gap-3 bg-white/10 hover:bg-white/20 rounded-xl px-4 py-3 transition-colors group">
                      <Mail className="h-4 w-4 text-accent" />
                      <span className="text-sm text-white/90 group-hover:text-white">privacy@com-sec.io</span>
                    </a>
                    <a href="https://com-sec.io" className="flex items-center gap-3 bg-white/10 hover:bg-white/20 rounded-xl px-4 py-3 transition-colors group">
                      <Globe className="h-4 w-4 text-accent" />
                      <span className="text-sm text-white/90 group-hover:text-white">https://com-sec.io</span>
                    </a>
                  </div>
                </div>
              </section>

            </main>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

/* ─── Small reusable sub-components ─── */

function SectionHeader({ icon, number, title }: { icon: React.ReactNode; number: string; title: string }) {
  return (
    <div className="flex items-start gap-4 mb-5">
      <div className="bg-primary/10 text-primary rounded-xl p-2.5 shrink-0 mt-0.5">
        {icon}
      </div>
      <div>
        <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-0.5">Section {number}</p>
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
      </div>
    </div>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <h3 className="text-sm font-semibold text-gray-800 mb-3 flex items-center gap-2">
        <span className="w-1.5 h-1.5 bg-accent rounded-full inline-block" />
        {title}
      </h3>
      <div className="pl-4 border-l-2 border-gray-100">
        {children}
      </div>
    </div>
  );
}

function TagList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {items.map((item) => (
        <span key={item} className="bg-gray-100 text-gray-700 text-sm px-3 py-1.5 rounded-lg">
          {item}
        </span>
      ))}
    </div>
  );
}

function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 mt-4 text-sm text-gray-700 leading-relaxed">
      {children}
    </div>
  );
}

function Divider() {
  return <hr className="border-gray-100 mb-10" />;
}
