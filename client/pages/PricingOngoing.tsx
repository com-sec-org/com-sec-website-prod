import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {Card, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import { CheckCircle, ChevronRight } from "lucide-react";
import { PricingLayout } from "@/components/pricing/PricingLayout";
import {
  DefenseSubscriptions,
  ServiceCatalog,
} from "@/components/pricing/ShieldServiceCatalog";
import { ongoingSupportServices } from "@/components/pricing/pricingData";

export default function PricingOngoing() {
  return (
    <PricingLayout
      title="Ongoing Security & IT Support | Com-Sec"
      description="Monthly security, compliance, and managed IT support, including Shield Defense subscriptions and virtual CISO services."
      canonical="https://com-sec.io/pricing/ongoing"
      heroTitle="Ongoing Security & IT Support"
      heroSubtitle="Continuous monthly security, compliance, and managed IT support services."
    >
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
                Ongoing Security & IT Support
              </h2>
              <p className="text-center text-slate-400 text-lg">
                Continuous monthly security, compliance, and managed IT support services.
              </p>
            </div>

            <div className="pricing-grid">
              {ongoingSupportServices.map((service) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={service.id}
                    className="pricing-card-wrapper"
                  >
                    <Card
                      className="pricing-card h-full relative overflow-hidden group border-0 flex flex-col"
                    >

                      <div className="pricing-card-glow"></div>

                      <CardHeader className="pb-4 flex-grow relative">
                        {service.badge && (
                          <div className="absolute top-2 right-4 flex flex-col items-end gap-1">
                            <div className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                              {service.badge}
                            </div>
                            {service.badgeSubtext && (
                              <p className="text-xs text-orange-400 font-semibold">{service.badgeSubtext}</p>
                            )}
                          </div>
                        )}
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <p className="text-sm font-semibold text-orange-400 mb-2">
                              {service.category}
                            </p>
                            <CardTitle className="text-xl mb-2 text-white">
                              {service.name}
                            </CardTitle>
                            <CardDescription className="text-slate-300 text-base">
                              {service.description}
                            </CardDescription>
                          </div>
                          <IconComponent className="h-12 w-12 text-orange-400 opacity-20 flex-shrink-0" />
                        </div>
                      </CardHeader>

                      {/* Pricing Section */}
                      <div className="px-6 pb-6">
                        <div className="pricing-tier-display mb-6 p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                          <div className="text-sm text-slate-400 mb-2">
                            Starting Price (Monthly)
                          </div>
                          <p className="text-3xl font-bold text-orange-400">
                            {service.startingPrice}
                          </p>
                          <p className="text-xs text-slate-400 mt-2">
                            Per month
                          </p>
                        </div>

                        {/* Highlights Section - Services */}
                        {service.highlights && (
                          <div className="mb-6">
                            <p className="text-xs font-semibold text-orange-400 mb-3 uppercase tracking-wider">Highlighted Services</p>
                            <div className="flex flex-wrap gap-2">
                              {service.highlights.map((highlight, idx) => (
                                <span key={idx} className="px-3 py-1 bg-orange-500/20 text-orange-300 text-xs rounded-full font-semibold border border-orange-500/30">
                                  {highlight}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Benefits */}
                        <div className="mb-6">
                          <h4 className="font-semibold text-sm mb-3 text-white">
                            What's Included:
                          </h4>
                          <ul className="space-y-2">
                            {service.benefits.map((benefit, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-orange-400 flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-slate-300">
                                  {benefit}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* CTA Button */}
                        <Link to={service.href || "/contact"}>
                          <Button
                            className="w-full bg-slate-700 hover:bg-orange-500 text-white transition-colors pricing-cta-btn"
                            variant="default"
                          >
                            {service.buttonText || "Learn More"}
                            <ChevronRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          <div>
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Shield Defense Subscriptions</h2>
              <p className="text-slate-400 text-lg">Recurring packages that turn one-time penetration tests into ongoing vulnerability management.</p>
            </div>
            <DefenseSubscriptions />
          </div>

          <div>
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Managed IT, Virtual CISO & Managed Security</h2>
              <p className="text-slate-400 text-lg">Monthly leadership and operations support.</p>
            </div>
            <ServiceCatalog names={["Managed IT & Security Operations"]} showVciso />
          </div>
        </div>
      </section>
    </PricingLayout>
  );
}
