import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  ArrowRight,
  Cloud,
  Shield,
  KeyRound,
  AlertTriangle,
  FileCheck,
  CheckCircle,
} from "lucide-react";

export default function CloudPenetrationTestingAwsAzureGcp2026() {
  const relatedArticles = [
    {
      title: "Cloud Security Best Practices for 2024",
      excerpt: "Essential strategies to protect your organization's data in the cloud.",
      link: "/services/cloud-security",
      category: "Cloud Security",
      emoji: "☁️",
    },
    {
      title: "Continuous Monitoring for Security and Compliance",
      excerpt: "Why continuous monitoring matters and how to implement it effectively.",
      link: "/blog/continuous-monitoring-security-compliance",
      category: "Security Operations",
      emoji: "📈",
    },
    {
      title: "Difference Between Internal vs External Penetration Testing",
      excerpt: "Understand the differences between internal and external penetration testing approaches.",
      link: "/blog/difference-between-internal-vs-external-penetration-testing",
      category: "Penetration Testing",
      emoji: "🧪",
    },
  ];

 const faqs = [
  {
    q: "What tools are used in cloud penetration testing?",
    a: "Common tools include ScoutSuite, Prowler, Pacu, Burp Suite, Metasploit, and custom scripts to test cloud-specific vulnerabilities and misconfigurations.",
  },
  {
    q: "Do I need permission from AWS, Azure, or GCP before conducting a pentest?",
    a: "Yes. Cloud providers often have Rules of Engagement. For instance, AWS and Azure require approval for certain tests, while Google Cloud may not require authorization if it’s within your own environment and compliant with its use policies.",
  },
  {
    q: "How often should companies perform cloud penetration testing?",
    a: "Organizations should conduct cloud penetration tests at least once a year, and after major changes to cloud infrastructure. Regular testing helps maintain SOC 2, ISO 27001, PCI DSS, HIPAA, and GDPR compliance while reducing cyber risks.",
  },
  {
    q: "What makes Com-Sec different from other cloud penetration testing providers?",
    a: "Com-Sec combines manual expert testing with automated cloud security tools to uncover deep misconfigurations, privilege escalation risks, and API flaws. Unlike generic providers, we specialize in AWS, Azure, and GCP security, with compliance-driven reporting tailored for auditors.",
  },
  {
    q: "What are the top 7 advanced cloud security challenges?",
    list: [
      "IAM misconfigurations",
      "Insecure APIs",
      "Misconfigured cloud storage",
      "Multi-cloud complexity",
      "Kubernetes and container risks",
      "Serverless function gaps",
      "Insider threats and credential theft",
    ],
  },
];



  return (
    <>
      <Helmet>
        <title>
          Cloud Penetration Testing for AWS, Azure & GCP: Security Guide for 2026
        </title>
        <meta
          name="description"
          content="Learn how cloud penetration testing secures AWS, Azure, and GCP workloads. Identify misconfigurations, reduce risk, and meet SOC 2 and ISO 27001 compliance in 2026."
        />
        <link
          rel="canonical"
          href="https://com-sec.io/blog/cloud-penetration-testing-how-to-secure-aws-azure-and-gcp-workloads-in-2025"
        />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-sky-900 via-blue-800 to-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-white/10 rounded-full animate-bounce"></div>
            <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-ping"></div>
            <Cloud className="absolute top-32 right-1/3 h-12 w-12 text-sky-300/20 animate-spin-slow" />
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Link
              to="/blogs"
              className="inline-flex items-center text-sky-200 hover:text-white transition-colors mb-8 group"
            >
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <span className="bg-sky-500/20 text-sky-100 px-4 py-2 rounded-full text-sm font-medium">
                Cloud Security
              </span>
              <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-bold">
                2026 Guide
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Cloud Penetration Testing for AWS, Azure & GCP: Security Guide for 2026
            </h1>

            <p className="text-xl text-sky-100 mb-8 leading-relaxed">
              Learn how cloud penetration testing secures AWS, Azure, and GCP workloads. Identify misconfigurations, reduce risk, and meet SOC 2 and ISO 27001 compliance in 2026.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sky-100">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>February 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>7 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Com-Sec Team</span>
              </div>
              <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors">
                <Share2 className="h-4 w-4" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              {/* INTRO (Word content kept as is) */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Cloud Penetration Testing: How to Secure AWS, Azure, and GCP Workloads in 2026
                </h2>

                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  Cloud adoption has skyrocketed, with AWS, Microsoft Azure, and Google Cloud Platform (GCP) powering the majority of enterprise workloads. But with cloud growth comes new cyber risks. Misconfigurations, exposed APIs, weak identity controls, and shadow IT leave businesses vulnerable to breaches. According to recent reports, 80% of cloud security incidents are caused by misconfigurations.
                </p>

                <p className="text-gray-700 leading-relaxed text-lg">
                  This is where Cloud Penetration Testing becomes critical. Unlike traditional pen testing, cloud penetration testing is designed to identify cloud-specific vulnerabilities in IaaS, PaaS, and SaaS environments, ensuring compliance, resilience, and trust.
                </p>
              </section>

              {/* What is */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  What Is Cloud Penetration Testing?
                </h2>

                <p className="text-gray-700 leading-relaxed text-lg mb-4">
                  Cloud penetration testing is a controlled security assessment that simulates real-world attacks against cloud workloads. It helps organizations:
                </p>

                <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
                  <li>Detect misconfigured storage buckets (e.g., S3, Blob, GCS)</li>
                  <li>Identify weak IAM roles and privilege escalations</li>
                  <li>Test exposed APIs and endpoints</li>
                  <li>Validate compliance with SOC 2, ISO 27001, HIPAA, PCI-DSS, GDPR</li>
                </ul>
              </section>

              {/* Why it matters */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Why Cloud Penetration Testing Matters in 2025?
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Cloud className="h-5 w-5 text-blue-600" />
                      Rising Multi-Cloud Adoption
                    </h3>
                    <p className="text-gray-700 text-lg">
                      Rising Multi-Cloud Adoption: Over 70% of enterprises use more than one cloud provider, making security consistency a challenge.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-blue-600" />
                      Increased API Attacks
                    </h3>
                    <p className="text-gray-700 text-lg">
                      Increased API Attacks: Gartner predicts that by 2026, API breaches will be the most common attack vector in cloud environments.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <FileCheck className="h-5 w-5 text-blue-600" />
                      Compliance Pressure
                    </h3>
                    <p className="text-gray-700 text-lg">
                      Compliance Pressure: Frameworks like SOC 2, ISO 27001, and PCI DSS 4.0 now expect regular penetration testing of cloud workloads.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Shield className="h-5 w-5 text-blue-600" />
                      Shared Responsibility Model
                    </h3>
                    <p className="text-gray-700 text-lg">
                      Shared Responsibility Model: Cloud providers secure the infrastructure, but you are responsible for securing your workloads.
                    </p>
                  </div>
                </div>
              </section>

              {/* Provider specific */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Cloud-Specific Pen Testing for AWS, Azure, and GCP:
                </h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Cloud className="h-5 w-5 text-blue-600" />
                       AWS Penetration Testing
                    </h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
                      <li>Misconfigured S3 buckets</li>
                      <li>Over-permissive IAM roles</li>
                      <li>Exposed Lambda functions</li>
                      <li>Weak CloudTrail monitoring</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <KeyRound className="h-5 w-5 text-blue-600" />
                    Azure Penetration Testing
                    </h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
                      <li>Insecure Active Directory integration</li>
                      <li>Unprotected Blob Storage</li>
                      <li>Exploitable Key Vault misconfigurations</li>
                      <li>Overexposed Azure Functions</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Shield className="h-5 w-5 text-blue-600" />
                       GCP Penetration Testing
                    </h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
                      <li>Misconfigured Cloud Storage buckets</li>
                      <li>Weak IAM bindings</li>
                      <li>Vulnerable Kubernetes (GKE) clusters</li>
                      <li>Unsecured Cloud Functions / APIs</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Steps */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Key Steps in a Cloud Penetration Test:
                </h2>

                <p className="text-gray-700 leading-relaxed text-lg mb-8">
                  <Link
    target="_blank"
      to="/services/penetration-testing-services"
      className="text-indigo-700 font-semibold hover:underline"
    >
      Cloud Pen Testing
    </Link>{" "}
                  follows a structured methodology to ensure both technical accuracy and business relevance. Below are the essential steps, optimized for AWS, Azure, and GCP workloads:
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Scoping & Planning:
                    </h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
                      <li>Define which environments (IaaS, PaaS, SaaS) will be tested.</li>
                      <li>Identify assets: AWS S3 buckets, Azure Blob Storage, GCP Cloud Functions, Kubernetes clusters.</li>
                      <li>Clarify rules of engagement with the cloud provider (AWS and Azure require prior approval for certain pen tests).</li>
                    </ul>
                  </div>

                  <div >
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Reconnaissance (Information Gathering):
                    </h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
                      <li>Map exposed services (DNS, APIs, endpoints).</li>
                      <li>Use cloud-specific tools like ScoutSuite, Prowler, or CloudSploit.</li>
                      <li>Detect misconfigurations such as open ports, weak IAM policies, or exposed admin dashboards.</li>
                    </ul>
                  </div>

                  <div >
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Vulnerability Discovery
                    </h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
                      <li>Run automated scans for missing patches and insecure services.</li>
                      <li>Identify OWASP Top 10 vulnerabilities, container misconfigurations, and unencrypted storage.</li>
                      <li>Simulate cloud privilege escalation attacks.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Exploitation (Controlled Attacks)
                    </h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
                      <li>Attempt unauthorized access to sensitive workloads.</li>
                      <li>Exploit misconfigured IAM roles (e.g., overly broad permissions in AWS IAM).</li>
                      <li>Simulate API injection attacks and data exfiltration scenarios.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Post-Exploitation & Persistence Testing
                    </h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
                      <li>Test whether attackers can maintain long-term access.</li>
                      <li>Evaluate lateral movement across accounts or services.</li>
                      <li>Assess the potential business impact (e.g., stolen data, service disruption).</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Reporting & Remediation Guidance
                    </h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
                      <li>Deliver a detailed pen test report with risk ratings (Critical, High, Medium, Low).</li>
                      <li>Provide actionable remediation: IAM hardening, encryption enforcement, network segmentation.</li>
                      <li>Align findings with compliance controls (<Link
    target="_blank"
      to="/soc2"
      className="text-indigo-700 font-semibold hover:underline"
    >
      SOC 2
    </Link>, ISO 27001, PCI DSS 4.0).</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Best practices */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Best Practices to Secure AWS, Azure, and GCP Workloads:
                </h2>

                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">Implement least-privilege IAM policies</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">Enable cloud-native monitoring tools (AWS GuardDuty, Azure Security Center, Google Security Command Center)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">Enforce multi-factor authentication (MFA)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">Regularly run cloud penetration tests and vulnerability scans</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">Automate compliance monitoring with tools like Drata, Prisma Cloud, Wiz</span>
                  </li>
                </ul>
              </section>

              {/* Compliance mapping */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Cloud Penetration Testing & Compliance:
                </h2>

                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  <Link
    target="_blank"
      to="/services/penetration-testing-services"
      className="text-indigo-700 font-semibold hover:underline"
    >
      Cloud Penetration Testing
    </Link> isn’t only about identifying technical flaws—it’s also a compliance enabler. In 2025, auditors and regulators expect businesses to prove security controls in action, not just on paper. Here’s how cloud penetration testing maps to the most common compliance frameworks:
                </p>

                <div className="space-y-5">
                  <div>
                    <p className="text-gray-900 font-semibold text-lg mb-2">
                      SOC 2 (Service Organization Control 2):
                    </p>
                    <p className="text-gray-700 text-lg">
                      Penetration testing validates the Security and Availability Trust Services Criteria, proving that your cloud systems are resilient against unauthorized access and downtime.
                    </p>
                  </div>

                  <div >
                    <p className="text-gray-900 font-semibold text-lg mb-2">
                      ISO 27001:2022:
                    </p>
                    <p className="text-gray-700 text-lg">
                      Annex A.12.6.1 requires organizations to regularly test their technical security controls. Cloud pen testing demonstrates compliance with vulnerability management practices.
                    </p>
                  </div>

                  <div >
                    <p className="text-gray-900 font-semibold text-lg mb-2">
                      PCI DSS 4.0 (Payment Card Industry Data Security Standard):
                    </p>
                    <p className="text-gray-700 text-lg">
                      Requirement 11.4 mandates penetration testing of cloud systems that handle cardholder data. This ensures segmentation testing, encryption validation, and attack simulations on AWS, Azure, or GCP payment environments.
                    </p>
                  </div>

                  <div >
                    <p className="text-gray-900 font-semibold text-lg mb-2">
                      HIPAA (Health Insurance Portability and Accountability Act):
                    </p>
                    <p className="text-gray-700 text-lg">
                      Cloud penetration tests help verify technical safeguards for PHI (Protected Health Information), especially in healthcare SaaS or cloud-hosted EHR systems.
                    </p>
                  </div>

                  <div >
                    <p className="text-gray-900 font-semibold text-lg mb-2">
                      GDPR (General Data Protection Regulation):
                    </p>
                    <p className="text-gray-700 text-lg">
                      GDPR Articles 25 & 32 stress the need for data protection by design and default. Pen testing validates that your cloud services meet EU privacy expectations.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
  <h2 className="text-3xl font-bold text-gray-900 mb-6">
    Conclusion
  </h2>

  <p className="text-gray-700 leading-relaxed text-lg">
    In 2025, cloud security is no longer optional—it’s a business-critical requirement. With rising cloud attacks, compliance audits, and customer trust issues, regular cloud penetration testing for AWS, Azure, and GCP workloads is essential. By proactively testing and fixing vulnerabilities, businesses can achieve compliance, resilience, and competitive advantage.
  </p>

  <p className="text-gray-700 leading-relaxed text-lg mt-4">
    Ready to strengthen your cloud security? Contact{" "}
    <Link
    target="_blank"
      to="/"
      className="text-indigo-700 font-semibold hover:underline"
    >
      Com-Sec
    </Link>{" "}
    for{" "}
    <Link
    target="_blank"
      to="/services/penetration-testing-services"
      className="text-indigo-700 font-semibold hover:underline"
    >
      Cloud Penetration Testing Services
    </Link>.
  </p>
</section>


              {/* FAQ Placeholder (you said leave it for now) */}
              {/* FAQs */}
              <section className="mb-12">
  <h2 className="text-3xl font-bold text-gray-900 mb-8">FAQs</h2>

  <div className="space-y-4">
    {faqs.map((item, index) => (
      <details
        key={index}
        className="group bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
      >
        <summary className="flex items-center justify-between cursor-pointer select-none px-6 py-5 hover:bg-gray-50 transition-colors">
          <span className="text-lg font-semibold text-gray-900">
            {index + 1}) {item.q}
          </span>

          {/* Arrow */}
          <span className="ml-4 flex items-center justify-center h-9 w-9 rounded-full bg-gray-100 text-gray-700 group-hover:bg-indigo-50 group-hover:text-indigo-700 transition-colors">
            <ArrowRight className="h-4 w-4 rotate-0 group-open:rotate-90 transition-transform duration-200" />
          </span>
        </summary>

        <div className="px-6 pb-6 pt-1">
          <div className="text-gray-700 leading-relaxed">
            {item.a && <p>{item.a}</p>}

            {item.list && (
                <ul className="list-disc pl-6 mt-3 space-y-2">
                {item.list.map((point, i) => (
                    <li key={i}>{point}</li>
                ))}
                </ul>
            )}
            </div>

        </div>
      </details>
    ))}
  </div>
</section>
              {/* CTA */}
<section className="mb-12">
  <div className="bg-gradient-to-br from-sky-900 via-blue-800 to-slate-900 rounded-xl p-8 text-white text-center">
    <h3 className="text-2xl font-bold mb-4">
      Ready to Strengthen Your SOC 2 Program?
    </h3>

    <p className="text-indigo-100 text-lg mb-6 max-w-2xl mx-auto">
      Partner with{" "}
      <Link target="_blank" to="/" className="text-white font-semibold hover:underline">
        Com Sec
      </Link>{" "}
      to build scalable, audit-ready security and compliance programs that support your growth.
    </p>

    <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
      From readiness assessments to ongoing security validation through{" "}
      <Link
        target="_blank"
        to="/services/penetration-testing-services"
        className="text-white font-semibold hover:underline"
      >
        penetration testing services
      </Link>
      , we help you stay compliant and resilient.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button asChild className="bg-white text-indigo-900 hover:bg-gray-100">
        <Link to="/contact" target="_blank" rel="noopener noreferrer">
          Contact Us
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>

      <Button
        variant="outline"
        asChild
        className="border-white text-white bg-transparent hover:bg-white hover:text-indigo-900"
      >
        <Link
          to="/services/compliance-audit-readiness"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-indigo-900"
        >
          Schedule a Free Consultation
        </Link>
      </Button>
    </div>
  </div>
</section>

            </div>
          </div>
        </article>

        {/* Related Articles */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedArticles.map((article, index) => (
                <Link key={index} to={article.link} className="group">
                  <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow transform hover:scale-105 h-full flex flex-col">
                    <div className="text-4xl mb-4">{article.emoji}</div>
                    <span className="text-xs font-medium text-blue-700 bg-blue-50 px-2 py-1 rounded-full w-fit">
                      {article.category}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2 group-hover:text-blue-700 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm flex-grow">
                      {article.excerpt}
                    </p>
                    <div className="mt-4 flex items-center text-blue-700 text-sm font-medium">
                      Read More
                      <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
