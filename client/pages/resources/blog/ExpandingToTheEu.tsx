import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import { useState } from "react";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  Check,
  CheckCircle,
} from "lucide-react";

export default function ExpandingToTheEu() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "Expanding to the EU? Here's What You Need to Get Right Before You Start.",
      text: "US-based, growing fast, and looking at the EU as the next market? Here's the practical breakdown of what compliance actually requires.",
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // user cancelled
      }
    } else {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const gdprRequirements = [
    {
      title: "Lawful basis for processing",
      body: "You need a legal reason to collect and process personal data. For most SaaS companies, this is either consent or legitimate interest. You can't just collect data because you want to. Define your lawful basis for each type of processing and document it.",
    },
    {
      title: "Privacy policy and notices",
      body: "Your privacy policy needs to be GDPR-compliant. That means telling EU users exactly what data you collect, why, how long you keep it, who you share it with, and what their rights are. Your current US privacy policy probably doesn't cover this.",
    },
    {
      title: "Data subject rights",
      body: "EU individuals have rights that US consumers generally don't: the right to access their data, correct it, delete it, port it to another provider, and object to processing. You need processes to handle these requests within 30 days. Build the workflows now, not when the first request comes in.",
    },
    {
      title: "Data Processing Agreements",
      body: "Every vendor that processes EU personal data on your behalf needs a DPA. This is the EU equivalent of a BAA. If you're using cloud providers, analytics tools, CRMs, email platforms, or any SaaS that touches EU data, get DPAs in place.",
    },
    {
      title: "Data transfer mechanisms",
      body: "Moving EU personal data to the US requires a legal mechanism. The EU-US Data Privacy Framework is currently the primary path for most companies. You self-certify through the US Department of Commerce. If the framework gets invalidated again (it's happened twice before), you need Standard Contractual Clauses as a backup. Set up both.",
    },
  ];

  const aiActTimeline = [
    {
      title: "Prohibited AI practices",
      body: "Banned since February 2025. This includes manipulative AI, social scoring, and certain biometric systems. If your product does any of this, you can't sell it in the EU.",
    },
    {
      title: "General-purpose AI model obligations",
      body: "In effect since August 2025. If you provide a GPAI model, you need transparency documentation, training data summaries, and copyright compliance. The Commission's enforcement powers and fining authority kicked in August 2, 2026. Fines can reach €15 million or 3% of global revenue.",
    },
    {
      title: "Transparency obligations",
      body: "Active as of August 2, 2026. If your product generates synthetic content (text, images, audio, video) that reaches EU users, you need to disclose that it's AI-generated and label it. This applies even if you're a US company with no EU office.",
    },
    {
      title: "High-risk AI system requirements",
      body: "Originally set for August 2026 but have been pushed to December 2027 for most categories, with sector-specific obligations extending to August 2028. This gives you time, but the transparency and GPAI requirements are live now.",
    },
  ];

  const checklistItems = [
    "Determine whether GDPR applies. It almost certainly does if you're targeting EU customers.",
    "Update your privacy policy for GDPR compliance. Add EU-specific disclosures, data subject rights information, and lawful basis documentation.",
    "Set up data transfer mechanisms. Self-certify under the EU-US Data Privacy Framework. Put Standard Contractual Clauses in place as backup.",
    "Get DPAs signed with every vendor that processes EU data.",
    "Appoint an EU Representative under Article 27 if you don't have an EU establishment.",
    "Evaluate whether you need a DPO. If you process health data or monitor individuals at scale, you probably do.",
    "Inventory your AI features and classify them under the EU AI Act. Handle transparency obligations now.",
    "Set up EU data residency options if your target customers will require it.",
    "Review ISO 27001 readiness. If you have SOC 2, start the gap analysis.",
    "Check accessibility compliance against EN 301 549 / WCAG 2.1 AA.",
    "Understand NIS2 if your customers are in critical sectors.",
  ];

  return (
    <>
      <Helmet>
        <title>
          Expanding to the EU? Here's What You Need to Get Right Before You Start.
        </title>

        <meta
          name="description"
          content="GDPR, the EU AI Act, NIS2, data residency, and ISO 27001 — the practical compliance checklist for US companies expanding into the EU market."
        />

        <link
          rel="canonical"
          href="https://com-sec.io/blog/expanding-to-the-eu-what-you-need-to-get-right"
        />

        <meta
          property="og:title"
          content="Expanding to the EU? Here's What You Need to Get Right Before You Start."
        />

        <meta
          property="og:description"
          content="GDPR, the EU AI Act, NIS2, data residency, and ISO 27001 — the practical compliance checklist for US companies expanding into the EU market."
        />

        <meta
          property="og:image"
          content="https://com-sec.io/images/blog-images/expanding-to-the-eu-what-you-need-to-get-right.png"
        />

        <meta
          property="og:url"
          content="https://com-sec.io/blog/expanding-to-the-eu-what-you-need-to-get-right"
        />

        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Com-Sec" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:author" content="Farbod Fakhrai" />
        <meta property="article:published_time" content="2026-08-06T00:00:00Z" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comsec" />

        <meta
          name="twitter:title"
          content="Expanding to the EU? Here's What You Need to Get Right Before You Start."
        />

        <meta
          name="twitter:description"
          content="GDPR, the EU AI Act, NIS2, data residency, and ISO 27001 — the practical compliance checklist for US companies expanding into the EU market."
        />

        <meta
          name="twitter:image"
          content="https://com-sec.io/images/blog-images/expanding-to-the-eu-what-you-need-to-get-right.png"
        />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navigation />

        <section className="pt-24 pb-16 bg-gradient-to-br from-sky-900 via-blue-800 to-slate-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to="/blogs"
              className="inline-flex items-center text-sky-200 hover:text-white transition-colors mb-8 group"
            >
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>

            <div className="flex items-center gap-4 mb-6 flex-wrap">
              <span className="bg-sky-500/20 text-sky-100 px-4 py-2 rounded-full text-sm font-medium">
                Compliance
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-balance">
              Expanding to the EU? Here's What You Need to Get Right Before You Start.
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sky-200">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>August 6, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>9 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Farbod Fakhrai</span>
              </div>
              <button
                onClick={handleShare}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors"
              >
                {copied ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Share2 className="h-4 w-4" />
                )}
                <span>{copied ? "Copied!" : "Share"}</span>
              </button>
            </div>
          </div>
        </section>

        <article className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 flex justify-center">
              <img
                src="/images/blog-images/expanding-to-the-eu-what-you-need-to-get-right.png"
                alt="Expanding to the EU? Here's What You Need to Get Right Before You Start."
                className="rounded-xl shadow-md max-w-xl w-full h-auto"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <section className="mb-10">
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Several of our clients are in the same spot right now: US-based, growing fast, and looking at the EU as the next market. The product is ready. The demand is there. And then someone on the team asks, "What do we need to do from a compliance perspective?"
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The answer is more than most founders expect but less overwhelming than most lawyers make it sound. Here's the practical breakdown.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  GDPR is not optional and it probably already applies to you
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    If you're selling to, serving, or tracking the behavior of people in the EU,{" "}
                    <Link to="/gdpr" className="text-sky-700 underline hover:text-sky-900">
                      GDPR
                    </Link>{" "}
                    applies. You don't need an office in Europe. You don't need a subsidiary. If your website collects cookies from EU visitors, if your SaaS product has EU users, or if your analytics track EU behavior, you're in scope.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    GDPR is the big one. Fines go up to 4% of global annual revenue or €20 million, whichever is higher. The EU has shown it's willing to enforce: Meta got hit with a €1.2 billion fine in 2023. This isn't theoretical.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Here's what GDPR requires in practice:
                  </p>
                  <div className="space-y-4">
                    {gdprRequirements.map((item, index) => (
                      <div
                        key={index}
                        className="bg-sky-50 border-l-4 border-sky-500 rounded-r-lg p-4"
                      >
                        <p className="text-gray-800 text-lg">
                          <b>{item.title}.</b> {item.body}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  You probably need an EU Representative
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    If you're processing EU personal data without a physical establishment in the EU, Article 27 of GDPR requires you to appoint an EU Representative. This is a local point of contact for EU data subjects and supervisory authorities.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    This is separate from a Data Protection Officer. The EU Rep is your address in the EU. The DPO is the person who oversees your data protection program.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Do you need a DPO? Maybe. It's required if your core activities involve large-scale processing of sensitive data (health data, biometric data) or large-scale regular monitoring of individuals. For most SaaS companies under 200 employees, a DPO isn't mandatory but some enterprise EU customers will ask if you have one.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Both roles can be outsourced. You don't need to hire someone in Berlin. But you do need someone who knows EU privacy law and can actually respond to inquiries.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  The EU AI Act is now enforceable
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    If your product uses AI and you're selling it in the EU, the EU AI Act applies to you. This is the world's first comprehensive AI regulation and it has teeth.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The timeline that matters right now:
                  </p>
                  <div className="space-y-4">
                    {aiActTimeline.map((item, index) => (
                      <div
                        key={index}
                        className="bg-sky-50 border-l-4 border-sky-500 rounded-r-lg p-4"
                      >
                        <p className="text-gray-800 text-lg">
                          <b>{item.title}.</b> {item.body}
                        </p>
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg pt-2">
                    The practical takeaway: inventory every AI feature in your product. Classify each one under the EU AI Act risk tiers. Handle the transparency requirements immediately. Start preparing for high-risk requirements if they apply to your use case.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  Data residency and localization
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Some EU customers, especially in healthcare, financial services, and government, will require that their data stays in the EU. This means you need EU-region deployment options.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    If you're on AWS, Azure, or Google Cloud, this is straightforward: deploy in an EU region (Frankfurt, Ireland, Paris, etc.) and ensure data doesn't replicate to US regions. But it's not just your primary database. Think about logs, backups, analytics, CDN caches, error reporting, and any third-party tool that processes the data. All of it needs to stay in the EU if data residency is a requirement.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    This doesn't apply to every customer, but it will come up in enterprise deals. Have the architecture ready before the first prospect asks.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  NIS2 if you're in a critical sector
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The NIS2 Directive expanded cybersecurity requirements across the EU for essential and important entities. If your product serves healthcare, energy, transport, banking, digital infrastructure, or public administration in the EU, NIS2 may apply to your EU customers and they may flow requirements down to you as a vendor.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    NIS2 requires risk management measures, incident reporting within 24 hours, supply chain security, and board-level accountability. If your EU customers are subject to NIS2, expect them to ask about your security posture, incident response capabilities, and supply chain controls during procurement.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  European Accessibility Act
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The European Accessibility Act took effect in June 2025 and applies to products and services sold in the EU including websites, mobile apps, e-commerce platforms, and digital services. If your product is available to EU consumers, it needs to meet EN 301 549 accessibility standards, which align closely with WCAG 2.1 Level AA.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    If you've already done accessibility work for Section 508 or ADA compliance in the US, you're most of the way there. If you haven't, this is another requirement to add to the list.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  ISO 27001 matters more in Europe than SOC 2
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    In the US,{" "}
                    <Link to="/soc2" className="text-sky-700 underline hover:text-sky-900">
                      SOC 2
                    </Link>{" "}
                    is the standard that enterprise buyers ask for. In Europe, it's{" "}
                    <Link to="/iso27001" className="text-sky-700 underline hover:text-sky-900">
                      ISO 27001
                    </Link>
                    . European enterprise customers, especially in healthcare, financial services, and government, expect ISO 27001 certification. SOC 2 reports are recognized but they're not the default.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    If you're planning to sell into EU enterprises, plan for ISO 27001 certification. If you already have SOC 2, the gap isn't massive. The frameworks overlap significantly on security controls. But the certification process is different and you'll need to build an Information Security Management System that conforms to the ISO standard.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  The practical checklist
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Before you start operating in the EU:
                  </p>
                  <ul className="space-y-3 bg-gray-50 border border-gray-200 rounded-lg p-6">
                    {checklistItems.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  The bottom line
                </h2>
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Expanding to the EU is a revenue opportunity. The compliance requirements are real but manageable if you plan ahead. The companies that build this into their expansion timeline come in ready for procurement conversations. The ones that figure it out after they've already started selling end up retrofitting under deal pressure, which costs more and takes longer.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    If you're planning an EU expansion and don't know where to start, that's exactly what we help with.
                  </p>
                </div>
              </section>

              <section className="mb-12 border-t border-gray-200 pt-8">
                <p className="text-gray-600 text-base italic">
                  Farbod Fakhrai is the founder of{" "}
                  <a
                    href="https://com-sec.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-700 font-semibold hover:underline"
                  >
                    Com-Sec
                  </a>, a cybersecurity and compliance consulting firm supporting startups and growth-stage companies.
                </p>
              </section>
            </div>
          </div>
        </article>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-sky-900 via-blue-800 to-slate-900 rounded-xl px-8 py-10 text-white text-center shadow-lg">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Planning an EU expansion?
              </h3>
              <p className="text-sky-200 text-lg mb-6 max-w-xl mx-auto leading-relaxed">
                Com-Sec helps growth-stage companies get GDPR, the EU AI Act, ISO 27001, and EU Representative requirements right before they start selling — not after.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/contact"
                  className="bg-white text-sky-900 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
                >
                  Schedule a Consultation →
                </Link>
                <Link
                  to="/services"
                  className="border border-white/40 text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-sky-900 transition"
                >
                  Explore Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
