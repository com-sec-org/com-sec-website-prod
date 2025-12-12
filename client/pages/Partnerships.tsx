import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Building2,
  Shield,
  Laptop,
  Lock,
  Key,
  ExternalLink,
} from "lucide-react";
import { Helmet } from "react-helmet";

interface Partner {
  name: string;
  description: string;
  website: string;
  category: string;
}

const partners: Record<string, Partner[]> = {
  auditors: [
    {
      name: "Sensiba LLP",
      description: "Professional audit and compliance services",
      website: "https://sensiba.com/",
      category: "auditors",
    },
    {
      name: "A-LIGN",
      description: "Cloud security and compliance auditing",
      website: "https://a-lign.com/",
      category: "auditors",
    },
    {
      name: "Prescient Security",
      description: "Information security and compliance consulting",
      website: "https://www.prescientsecurity.com/",
      category: "auditors",
    },
    {
      name: "MJD Advisors",
      description: "Cybersecurity and compliance advisory services",
      website: "https://mjdadvisors.com/",
      category: "auditors",
    },
    {
      name: "Securley",
      description: "Security audit and risk assessment partner",
      website: "https://www.securly.com/",
      category: "auditors",
    },
    {
      name: "Accorp",
      description: "Professional audit and compliance services",
      website: "https://accorp.com/",
      category: "auditors",
    },
  ],
  complianceTools: [
    {
      name: "Drata",
      description: "Trust and compliance automation platform",
      website: "https://drata.com/",
      category: "complianceTools",
    },
    {
      name: "Vanta",
      description: "Automated compliance and security monitoring",
      website: "https://vanta.com/",
      category: "complianceTools",
    },
    {
      name: "Sprinto",
      description: "Compliance and audit management software",
      website: "https://sprinto.com/",
      category: "complianceTools",
    },
    {
      name: "OneLeet",
      description: "Compliance automation and management platform",
      website: "https://oneleet.com/",
      category: "complianceTools",
    },
    {
      name: "Thoropass",
      description: "Compliance automation and audit readiness",
      website: "https://thoropass.com/",
      category: "complianceTools",
    },
    {
      name: "Scrut",
      description: "Third-party risk and compliance management",
      website: "https://www.scrut.io/",
      category: "complianceTools",
    },
    {
      name: "Wiz",
      description: "Cloud security and compliance platform",
      website: "https://wiz.io/",
      category: "complianceTools",
    },
    {
      name: "Safebase by Drata",
      description: "Security and trust documentation platform",
      website: "https://safebase.io/",
      category: "complianceTools",
    },
    {
      name: "Compliancy Group",
      description: "HIPAA compliance and security services",
      website: "https://compliancygroup.com/",
      category: "complianceTools",
    },
  ],
  itConsultants: [
    {
      name: "TechSphere Global",
      description: "Fractional IT Leadership and IT Services Specialized in Life Sciences and Biotechnology",
      website: "https://www.techsphereglobal.io/",
      category: "itConsultants",
    },
  ],
  mdmProviders: [
    {
      name: "Hexnode",
      description: "Mobile device management and security",
      website: "https://www.hexnode.com/",
      category: "mdmProviders",
    },
    {
      name: "Kandji",
      description: "Apple device management and security",
      website: "https://www.kandji.io/",
      category: "mdmProviders",
    },
  ],
  passwordManagers: [
    {
      name: "1Password",
      description: "Enterprise password and identity management",
      website: "https://1password.com/",
      category: "passwordManagers",
    },
  ],
};

const categoryConfig: Record<
  string,
  { icon: React.ReactNode; label: string; color: string }
> = {
  auditors: {
    icon: <Building2 className="h-6 w-6" />,
    label: "Auditors",
    color: "from-blue-600 to-blue-700",
  },
  complianceTools: {
    icon: <Shield className="h-6 w-6" />,
    label: "Compliance Tools",
    color: "from-orange-600 to-orange-700",
  },
  itConsultants: {
    icon: <Laptop className="h-6 w-6" />,
    label: "IT Consultants",
    color: "from-purple-600 to-purple-700",
  },
  mdmProviders: {
    icon: <Lock className="h-6 w-6" />,
    label: "MDM Providers",
    color: "from-green-600 to-green-700",
  },
  passwordManagers: {
    icon: <Key className="h-6 w-6" />,
    label: "Password Managers",
    color: "from-red-600 to-red-700",
  },
};

export default function Partnerships() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Partnerships | Com-Sec - Security & Compliance Partners</title>
        <meta
          name="description"
          content="Explore Com-Sec's trusted partners in auditing, compliance tools, IT consulting, MDM, and password management solutions."
        />
        <meta name="keywords" content="partnerships, compliance, security, auditors, IT consulting" />
        <link rel="canonical" href="https://com-sec.io/partnerships" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-primary to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Trusted
              <span className="block text-accent">Partners</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              We collaborate with industry-leading auditors, compliance tools,
              and technology partners to strengthen security and accelerate
              compliance for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {Object.entries(partners).map(([key, categoryPartners]) => (
            <div key={key} className="mb-20">
              {/* Category Header */}
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-3">
                  <div
                    className={`p-3 rounded-lg bg-gradient-to-br ${
                      categoryConfig[key]?.color || "from-gray-600 to-gray-700"
                    } text-white`}
                  >
                    {categoryConfig[key]?.icon}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    {categoryConfig[key]?.label}
                  </h2>
                </div>
                <div className="h-1 w-20 bg-gradient-to-r from-accent to-orange-500 rounded-full"></div>
              </div>

              {/* Partners Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryPartners.map((partner) => (
                  <Card
                    key={partner.name}
                    className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/30 overflow-hidden h-full flex flex-col"
                  >
                    {/* Card Header with Color Accent */}
                    <div
                      className={`h-1 bg-gradient-to-r ${
                        categoryConfig[key]?.color || "from-gray-600 to-gray-700"
                      }`}
                    ></div>

                    <CardHeader className="flex-grow">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <CardTitle className="text-xl group-hover:text-accent transition-colors mb-2">
                            {partner.name}
                          </CardTitle>
                        </div>
                      </div>
                      <CardDescription className="text-base">
                        {partner.description}
                      </CardDescription>
                    </CardHeader>

                    {/* Card Footer with Button */}
                    <CardContent className="pt-0">
                      <Button
                        className="w-full gap-2 group/btn bg-gradient-to-r from-accent to-orange-500 hover:from-orange-600 hover:to-orange-600 text-white border-0"
                        asChild
                      >
                        <a
                          href={partner.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Visit ${partner.name} website`}
                        >
                          Learn More
                          <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Strengthen Your Security Posture?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Partner with Com-Sec and leverage our trusted ecosystem of industry
            leaders to accelerate your compliance journey.
          </p>
          <Button
            size="lg"
            className="gap-2 bg-gradient-to-r from-accent to-orange-500 hover:from-orange-600 hover:to-orange-600 text-white border-0"
            asChild
          >
            <Link to="/contact">
              Get Started
              <ExternalLink className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
