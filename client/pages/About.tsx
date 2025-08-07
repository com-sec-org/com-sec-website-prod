import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Users, Target, ChevronRight } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-primary to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About
              <span className="block text-accent">Com-Sec</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              Your trusted cybersecurity partner with over 15 years of combined
              experience protecting businesses worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 2009, Com-Sec emerged from a simple yet critical
                observation: businesses needed more than just generic security
                solutions. They needed partners who understood their unique
                challenges and could provide tailored cybersecurity strategies.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                With over 15 years of combined experience in information
                security and compliance, our team brings deep expertise in
                protecting businesses from cyber threats while ensuring
                regulatory compliance across various industries.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Today, we've helped over 200+ companies achieve their security
                goals, from startups preparing for their first SOC 2 audit to
                enterprise organizations implementing comprehensive security
                programs.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="bg-gradient-to-br from-primary to-blue-600 rounded-lg p-12 text-white">
                <Shield className="h-48 w-48 mx-auto opacity-20" />
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                200+
              </div>
              <div className="text-muted-foreground">Companies Protected</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                15+
              </div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                100%
              </div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                24/7
              </div>
              <div className="text-muted-foreground">Emergency Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="pt-8">
                <Shield className="h-16 w-16 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary mb-3">
                  Security First
                </h3>
                <p className="text-muted-foreground">
                  We prioritize security in every decision and recommendation,
                  ensuring your business is protected against evolving threats.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-8">
                <Users className="h-16 w-16 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary mb-3">
                  Client Partnership
                </h3>
                <p className="text-muted-foreground">
                  We work as an extension of your team, understanding your
                  business goals and aligning security with your objectives.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-8">
                <Award className="h-16 w-16 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary mb-3">
                  Excellence
                </h3>
                <p className="text-muted-foreground">
                  We maintain the highest standards in our services, staying
                  current with the latest security practices and regulations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Expert Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Certified security professionals dedicated to your protection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">JS</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">
                  John Smith
                </h3>
                <p className="text-accent font-medium mb-3">
                  Chief Security Officer
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  CISSP, CISM | 12+ years in cybersecurity consulting and
                  enterprise security architecture.
                </p>
                <div className="flex justify-center space-x-2 text-xs">
                  <span className="bg-accent/10 text-accent px-2 py-1 rounded">
                    CISSP
                  </span>
                  <span className="bg-accent/10 text-accent px-2 py-1 rounded">
                    CISM
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">ED</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">
                  Emily Davis
                </h3>
                <p className="text-accent font-medium mb-3">
                  Compliance Director
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  CPA, CIA | 10+ years specializing in SOC 2, HIPAA, and
                  international compliance frameworks.
                </p>
                <div className="flex justify-center space-x-2 text-xs">
                  <span className="bg-accent/10 text-accent px-2 py-1 rounded">
                    CPA
                  </span>
                  <span className="bg-accent/10 text-accent px-2 py-1 rounded">
                    CIA
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">MC</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">
                  Michael Chen
                </h3>
                <p className="text-accent font-medium mb-3">
                  Senior Penetration Tester
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  CEH, OSCP | 8+ years in ethical hacking and vulnerability
                  assessments for Fortune 500 companies.
                </p>
                <div className="flex justify-center space-x-2 text-xs">
                  <span className="bg-accent/10 text-accent px-2 py-1 rounded">
                    CEH
                  </span>
                  <span className="bg-accent/10 text-accent px-2 py-1 rounded">
                    OSCP
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Target className="h-16 w-16 text-accent mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            To democratize enterprise-level cybersecurity by making
            comprehensive security solutions accessible to businesses of all
            sizes. We believe that every organization, from startups to
            enterprises, deserves robust protection against cyber threats and
            seamless compliance with regulatory requirements.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-accent to-orange-600 hover:from-accent/90 hover:to-orange-600/90"
          >
            Join Our Mission
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
