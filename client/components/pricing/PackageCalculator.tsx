import { useState } from "react";
import { Button } from "@/components/ui/button";

type Cadence = "one-time" | "monthly" | "annual";
type Unit = "user" | "endpoint";

type Offering = {
  id: string;
  label: string;
  price: number;
  cadence: Cadence;
  unit?: Unit;
};

const offerings: Offering[] = [
  { id: "grc-platform", label: "Shield GRC Platform", price: 3000, cadence: "annual" },
  { id: "soc2-readiness", label: "SOC 2 Readiness", price: 6000, cadence: "one-time" },
  { id: "iso27001-readiness", label: "ISO 27001 Readiness", price: 6000, cadence: "one-time" },
  { id: "webapp-pentest", label: "Web Application Penetration Test", price: 3500, cadence: "one-time" },
  { id: "cloud-assessment", label: "Cloud Security Assessment", price: 2800, cadence: "one-time" },
  { id: "internal-audit", label: "Internal Audit", price: 3500, cadence: "one-time" },
  { id: "ai-assessment", label: "AI Security Assessment", price: 3500, cadence: "one-time" },
  { id: "defense-scan", label: "Shield Defense – Scan", price: 250, cadence: "monthly" },
  { id: "managed-compliance", label: "Managed Compliance", price: 1000, cadence: "monthly" },
  { id: "vciso", label: "Virtual CISO", price: 1800, cadence: "monthly" },
  { id: "managed-it", label: "Managed IT", price: 75, cadence: "monthly", unit: "user" },
  { id: "soc-mdr", label: "24/7 SOC & MDR", price: 35, cadence: "monthly", unit: "endpoint" },
];

const defaultSelected = ["grc-platform", "soc2-readiness", "webapp-pentest", "defense-scan"];

const cadenceSuffix: Record<Cadence, string> = {
  "one-time": "",
  monthly: "/mo",
  annual: "/yr",
};

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const priceLabel = (o: Offering) =>
  `${currency.format(o.price)}${o.unit ? `/${o.unit}` : ""}${cadenceSuffix[o.cadence]}`;

export function PackageCalculator() {
  const [selected, setSelected] = useState<Set<string>>(() => new Set(defaultSelected));
  const [users, setUsers] = useState(10);
  const [endpoints, setEndpoints] = useState(25);
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "failed">("idle");

  const quantityFor = (o: Offering) => (o.unit === "user" ? users : o.unit === "endpoint" ? endpoints : 1);
  const lineTotal = (o: Offering) => o.price * quantityFor(o);

  const selectedOfferings = offerings.filter((o) => selected.has(o.id));
  const total = (cadence: Cadence) =>
    selectedOfferings
      .filter((o) => o.cadence === cadence)
      .reduce((sum, o) => sum + lineTotal(o), 0);

  const oneTime = total("one-time");
  const monthly = total("monthly");
  const annual = total("annual");
  const firstYear = oneTime + monthly * 12 + annual;

  const toggle = (id: string) =>
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  const quantityInput = (value: number, set: (n: number) => void) => (
    <input
      type="number"
      min={1}
      value={value}
      onChange={(e) => set(Math.max(1, Math.floor(Number(e.target.value)) || 1))}
      className="w-20 rounded-md border border-slate-600 bg-slate-800 px-2 py-1 text-sm text-white focus:border-orange-400 focus:outline-none"
    />
  );

  const copyEstimate = async () => {
    const lines = selectedOfferings.map((o) => {
      const qty = o.unit ? ` × ${quantityFor(o)} ${o.unit}${quantityFor(o) === 1 ? "" : "s"}` : "";
      return `- ${o.label}${qty}: ${currency.format(lineTotal(o))}${cadenceSuffix[o.cadence]}`;
    });
    const text = [
      "Shield package estimate",
      ...lines,
      "",
      `One-time fees: ${currency.format(oneTime)}`,
      `Monthly fees: ${currency.format(monthly)}`,
      `Annual fees: ${currency.format(annual)}`,
      `Estimated first-year investment: ${currency.format(firstYear)}`,
    ].join("\n");
    try {
      await navigator.clipboard.writeText(text);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("failed");
    }
    setTimeout(() => setCopyStatus("idle"), 2000);
  };

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      <div className="rounded-xl border border-slate-700 bg-slate-900 p-6 lg:col-span-2">
        <h3 className="text-xl font-bold text-white">Configure your Shield package</h3>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {offerings.map((o) => {
            const isChecked = selected.has(o.id);
            return (
              <label
                key={o.id}
                className={`flex cursor-pointer items-start gap-3 rounded-lg border p-4 transition-colors ${
                  isChecked ? "border-orange-400/60 bg-orange-500/10" : "border-slate-700 bg-slate-800/50 hover:border-slate-500"
                }`}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => toggle(o.id)}
                  className="mt-1 h-4 w-4 accent-orange-500"
                />
                <span className="flex-1">
                  <span className="block text-sm font-semibold text-white">{o.label}</span>
                  <span className="block text-sm text-orange-400">{priceLabel(o)}</span>
                  {o.unit && isChecked && (
                    <span className="mt-2 flex items-center gap-2 text-xs text-slate-300">
                      {o.unit === "user" ? "Number of users" : "Number of endpoints"}
                      {quantityInput(o.unit === "user" ? users : endpoints, o.unit === "user" ? setUsers : setEndpoints)}
                    </span>
                  )}
                </span>
              </label>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col rounded-xl border border-slate-700 bg-slate-900 p-6 lg:sticky lg:top-24 lg:self-start">
        <h3 className="text-xl font-bold text-white">Your estimate</h3>
        <dl className="mt-5 space-y-3 text-sm">
          <div className="flex justify-between text-slate-300">
            <dt>One-time fees</dt>
            <dd className="font-semibold text-white">{currency.format(oneTime)}</dd>
          </div>
          <div className="flex justify-between text-slate-300">
            <dt>Monthly fees</dt>
            <dd className="font-semibold text-white">{currency.format(monthly)}</dd>
          </div>
          <div className="flex justify-between text-slate-300">
            <dt>Annual fees</dt>
            <dd className="font-semibold text-white">{currency.format(annual)}</dd>
          </div>
        </dl>
        <div className="mt-6 rounded-lg border border-slate-700 bg-slate-800/50 p-4">
          <p className="text-sm text-slate-400">Estimated first-year investment</p>
          <p className="mt-1 text-3xl font-bold text-orange-400">{currency.format(firstYear)}</p>
          <p className="mt-2 text-xs text-slate-400">
            One-time fees + 12 months of monthly fees + annual fees. Final scope is confirmed after a consultation.
          </p>
        </div>
        <Button
          onClick={copyEstimate}
          disabled={selectedOfferings.length === 0}
          className="mt-6 w-full bg-slate-700 text-white hover:bg-orange-500"
        >
          {copyStatus === "copied" ? "Copied" : copyStatus === "failed" ? "Copy failed" : "Copy estimate"}
        </Button>
      </div>
    </div>
  );
}
