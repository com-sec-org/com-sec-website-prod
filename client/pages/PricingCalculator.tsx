import { PricingLayout } from "@/components/pricing/PricingLayout";
import {
  ProductNavigation,
} from "@/components/pricing/ShieldServiceCatalog";
import { PackageCalculator } from "@/components/pricing/PackageCalculator";

export default function PricingCalculator() {
  return (
    <PricingLayout
      title="Package Calculator | Com-Sec"
      description="Estimate the cost of a custom Com-Sec security package by selecting services, users, and endpoints."
      canonical="https://com-sec.io/pricing/calculator"
      heroTitle="Package Calculator"
      heroSubtitle="Build a custom security package and see one-time, monthly, and first-year estimates."
    >
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          <div>
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Build your own security package</h2>
              <p className="text-slate-400 text-lg">Select the offerings you need and see your estimated costs.</p>
            </div>
            <PackageCalculator />
          </div>

          <div>
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Explore Shield</h2>
              <p className="text-slate-400 text-lg">Shield product lines and the service categories they cover.</p>
            </div>
            <ProductNavigation />
          </div>
        </div>
      </section>
    </PricingLayout>
  );
}
