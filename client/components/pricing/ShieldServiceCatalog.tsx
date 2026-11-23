type ServiceRow = { service: string; price: string; billing?: string };
type ServiceCategory = {
  name: string;
  summary: string;
  rows: ServiceRow[];
};

const serviceCategories: ServiceCategory[] = [
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

export function ServiceCatalog({ names }: { names: string[] }) {
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
    </div>
  );
}
