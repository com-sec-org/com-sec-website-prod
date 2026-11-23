import { CheckCircle } from "lucide-react";

type ServiceRow = { service: string; price: string; billing?: string };
type ServiceCategory = {
  name: string;
  summary: string;
  rows: ServiceRow[];
};

const serviceCategories: ServiceCategory[] = [
  {
    name: "Managed IT & Security Operations",
    summary: "Secure and manage your technology infrastructure.",
    rows: [
      { service: "Managed IT Support", price: "$75", billing: "Per user / month" },
      { service: "Managed Endpoint Security", price: "$15", billing: "Per device / month" },
      { service: "Mobile Device Management", price: "$10", billing: "Per device / month" },
      { service: "24/7 SOC & MDR", price: "$35", billing: "Per endpoint / month" },
      { service: "Security Awareness Training", price: "$5", billing: "Per user / month" },
      { service: "Phishing Simulations", price: "$5", billing: "Per user / month" },
      { service: "Microsoft 365 Security Assessment", price: "$1,800" },
      { service: "Google Workspace Security Assessment", price: "$1,800" },
      { service: "Identity and Access Management Assessment", price: "$2,500" },
      { service: "Employee Onboarding & Offboarding", price: "$100", billing: "Per user" },
      { service: "Email Security Management", price: "$10", billing: "Per user / month" },
      { service: "Incident Response Support", price: "$250", billing: "Hourly" },
    ],
  },
  {
    name: "Internal Audit & Assurance",
    summary: "Independent assessments of security and compliance programs.",
    rows: [
      { service: "SOC 2 Internal Audit", price: "$3,000" },
      { service: "ISO 27001 Internal Audit", price: "$3,500" },
      { service: "ISO 27701 Internal Audit", price: "$3,500" },
      { service: "ISO 42001 Internal Audit", price: "$3,500" },
      { service: "HIPAA Security Risk Assessment", price: "$3,000" },
      { service: "HITRUST Internal Assessment", price: "$5,000" },
      { service: "Third-Party Risk Assessment", price: "$750", billing: "Per vendor" },
      { service: "Business Continuity & Disaster Recovery Test", price: "$2,500" },
      { service: "Incident Response Tabletop Exercise", price: "$2,000" },
      { service: "ADA Accessibility Assessment", price: "$3,500" },
      { service: "VPAT/ACR Development", price: "$2,500" },
    ],
  },
  {
    name: "AI Security & Governance",
    summary: "Secure AI systems and establish responsible AI governance.",
    rows: [
      { service: "AI Security Risk Assessment", price: "$3,500" },
      { service: "AI Governance Program Development", price: "$5,000" },
      { service: "ISO 42001 Implementation", price: "$6,000" },
      { service: "AIUC-1 Readiness", price: "$7,500" },
      { service: "EU AI Act Readiness", price: "$5,000" },
      { service: "AI Red Teaming", price: "$7,500" },
      { service: "LLM Security Testing", price: "$6,000" },
      { service: "AI Vendor Risk Assessment", price: "$1,500" },
      { service: "Managed AI Governance", price: "$1,500", billing: "Monthly" },
    ],
  },
];

const vcisoTiers = [
  {
    name: "Essential",
    audience: "Early-stage companies",
    price: "$1,800",
    hours: "20 hours/month",
    features: [
      "Security leadership",
      "Policy management",
      "Risk management",
      "Compliance oversight",
      "Security roadmap",
    ],
  },
  {
    name: "Professional",
    audience: "Growing companies",
    price: "$3,000",
    hours: "30 hours/month",
    features: [
      "Everything in Essential",
      "Security operations",
      "Audit management",
      "Customer questionnaires",
      "Vulnerability oversight",
    ],
  },
  {
    name: "Enterprise",
    audience: "Outsourced security team",
    price: "$7,000",
    hours: "Up to 70 hours/month",
    features: [
      "Everything in Professional",
      "Dedicated security team",
      "Managed IT operations",
      "Security engineering",
      "Executive reporting",
    ],
  },
];

export function ServiceCatalog({
  names,
  showVciso = false,
}: {
  names: string[];
  showVciso?: boolean;
}) {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {serviceCategories
        .filter((category) => names.includes(category.name))
        .map((category) => (
        <div key={category.name} className="rounded-xl border border-slate-700 bg-slate-900 p-6">
          <h3 className="text-xl font-bold text-white">{category.name}</h3>
          <p className="mt-1 mb-5 text-sm text-slate-400">{category.summary}</p>
          <div className="overflow-x-auto rounded-lg border border-slate-700">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-800 text-slate-300">
                <tr>
                  <th className="px-4 py-3 font-semibold">Service</th>
                  <th className="px-4 py-3 font-semibold">Starting price</th>
                  <th className="px-4 py-3 font-semibold">Billing</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {category.rows.map((row) => (
                  <tr key={row.service} className="text-slate-300">
                    <td className="px-4 py-3">{row.service}</td>
                    <td className="px-4 py-3 font-semibold text-orange-400">{row.price}</td>
                    <td className="px-4 py-3 text-slate-400">{row.billing ?? "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}

      {showVciso && (
      <div className="rounded-xl border border-slate-700 bg-slate-900 p-6 lg:col-span-2">
        <h3 className="text-xl font-bold text-white">Virtual CISO & Managed Security</h3>
        <p className="mt-1 mb-6 text-sm text-slate-400">Your outsourced security department.</p>
        <div className="grid gap-6 md:grid-cols-3">
          {vcisoTiers.map((tier) => (
            <div key={tier.name} className="flex flex-col rounded-lg border border-slate-700 bg-slate-800/50 p-5">
              <p className="text-lg font-bold text-white">{tier.name}</p>
              <p className="text-sm text-slate-400">{tier.audience}</p>
              <p className="mt-4 text-3xl font-bold text-orange-400">
                {tier.price}
                <span className="ml-1 text-sm font-normal text-slate-400">per month</span>
              </p>
              <p className="mt-1 text-sm text-slate-300">{tier.hours}</p>
              <ul className="mt-4 space-y-2">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-slate-300">
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-orange-400" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      )}
    </div>
  );
}
