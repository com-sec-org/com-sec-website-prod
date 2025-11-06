// import { Link } from "react-router-dom";
// import { Navigation } from "@/components/Navigation";
// import { Footer } from "@/components/Footer";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import {
//   Heart,
//   Shield,
//   Award,
//   FileCheck,
//   Users,
//   TrendingUp,
//   ChevronRight,
//   ArrowRight,
//   Star,
//   CheckCircle,
//   Target,
//   Lock,
//   Eye,
// } from "lucide-react";

// export default function Hitrust() {
//   return (
//     <div className="min-h-screen bg-white">
//       <Navigation />

//       {/* Hero Section */}
//       <section className="pt-24 pb-20 bg-gradient-to-br from-red-900 via-pink-800 to-rose-900 text-white relative overflow-hidden">
//         <div className="absolute inset-0">
//           <div className="absolute top-20 left-10 w-32 h-32 bg-red-400/10 rounded-full animate-pulse"></div>
//           <div className="absolute top-40 right-20 w-24 h-24 bg-white/5 rounded-full animate-bounce"></div>
//           <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-pink-400/20 rounded-full animate-ping"></div>
//         </div>

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <div className="text-center">
//             <div className="inline-flex items-center bg-red-400/20 rounded-full px-6 py-2 text-red-300 font-medium text-sm mb-8">
//               <Award className="h-4 w-4 mr-2" />
//               Healthcare Trust Alliance
//             </div>

//             <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
//               HITRUST
//               <span className="block text-red-400">CSF</span>
//             </h1>

//             <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
//               Health Information Trust Alliance Common Security Framework - the
//               most comprehensive and widely adopted security framework for
//               healthcare organizations.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Button
//                 size="lg"
//                 className="bg-gradient-to-r from-red-600 to-pink-700 hover:from-red-500 hover:to-pink-600 transform hover:scale-105 transition-all duration-300"
//                 asChild
//               >
//                 <Link to="/contact">
//                   Achieve HITRUST Certification
//                   <ChevronRight className="ml-2 h-5 w-5" />
//                 </Link>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* What is HITRUST */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
//                 What is HITRUST CSF?
//               </h2>
//               <p className="text-lg text-muted-foreground mb-6">
//                 The HITRUST Common Security Framework (CSF) is a certifiable
//                 framework that provides organizations with a comprehensive,
//                 flexible, and efficient approach to regulatory compliance and
//                 risk management.
//               </p>
//               <p className="text-lg text-muted-foreground mb-8">
//                 HITRUST CSF harmonizes the requirements of existing standards,
//                 regulations, and frameworks including HIPAA, NIST, ISO 27001,
//                 PCI DSS, and others into a single overarching security
//                 framework.
//               </p>
//               <div className="grid grid-cols-2 gap-6">
//                 <div className="text-center p-4 bg-red-50 rounded-lg">
//                   <div className="text-3xl font-bold text-red-600 mb-2">
//                     5,000+
//                   </div>
//                   <div className="text-sm text-muted-foreground">
//                     Organizations Using HITRUST
//                   </div>
//                 </div>
//                 <div className="text-center p-4 bg-red-50 rounded-lg">
//                   <div className="text-3xl font-bold text-red-600 mb-2">14</div>
//                   <div className="text-sm text-muted-foreground">
//                     Authoritative Sources
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="flex justify-center">
//               <div className="relative rounded-2xl overflow-hidden shadow-2xl">
//                 <img
//                   src="https://images.pexels.com/photos/7195310/pexels-photo-7195310.jpeg"
//                   alt="A female doctor using a laptop for an online consultation, wearing a headset in a bright office"
//                   className="w-full h-64 md:h-80 object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-br from-red-600/80 to-pink-700/80 flex items-center justify-center">
//                   <Award className="h-24 w-24 md:h-32 md:w-32 text-white opacity-90" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* HITRUST Benefits */}
//       <section className="py-20 bg-red-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
//               Why Choose HITRUST CSF?
//             </h2>
//             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//               The advantages of implementing HITRUST Common Security Framework
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 title: "Comprehensive Coverage",
//                 description:
//                   "Addresses requirements from 14 authoritative sources in one framework",
//                 icon: Shield,
//                 color: "text-blue-600",
//                 benefits: [
//                   "HIPAA compliance",
//                   "NIST alignment",
//                   "ISO 27001 integration",
//                   "PCI DSS coverage",
//                 ],
//               },
//               {
//                 title: "Risk-Based Approach",
//                 description:
//                   "Tailored controls based on your organization's specific risk factors",
//                 icon: Target,
//                 color: "text-green-600",
//                 benefits: [
//                   "Organizational factors",
//                   "System factors",
//                   "Regulatory factors",
//                   "Threat environment",
//                 ],
//               },
//               {
//                 title: "Third-Party Assurance",
//                 description:
//                   "Independent validation and certification by qualified assessors",
//                 icon: Award,
//                 color: "text-purple-600",
//                 benefits: [
//                   "HITRUST assessors",
//                   "Standardized process",
//                   "Validated assessment",
//                   "Certification badge",
//                 ],
//               },
//               {
//                 title: "Continuous Monitoring",
//                 description:
//                   "Ongoing assessment and monitoring to maintain certification",
//                 icon: Eye,
//                 color: "text-orange-600",
//                 benefits: [
//                   "Regular assessments",
//                   "Control monitoring",
//                   "Threat intelligence",
//                   "Security metrics",
//                 ],
//               },
//               {
//                 title: "Business Efficiency",
//                 description:
//                   "Streamlined compliance process reduces audit fatigue",
//                 icon: TrendingUp,
//                 color: "text-cyan-600",
//                 benefits: [
//                   "Single assessment",
//                   "Multiple compliance",
//                   "Reduced audits",
//                   "Cost savings",
//                 ],
//               },
//               {
//                 title: "Market Recognition",
//                 description:
//                   "Industry-recognized certification enhances business relationships",
//                 icon: Star,
//                 color: "text-yellow-600",
//                 benefits: [
//                   "Customer trust",
//                   "Market advantage",
//                   "Due diligence",
//                   "Business growth",
//                 ],
//               },
//             ].map((benefit, index) => (
//               <Card
//                 key={index}
//                 className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-red-400"
//               >
//                 <CardHeader>
//                   <benefit.icon className={`h-12 w-12 mb-4 ${benefit.color}`} />
//                   <CardTitle className="text-xl">{benefit.title}</CardTitle>
//                   <CardDescription className="text-base">
//                     {benefit.description}
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <ul className="space-y-2">
//                     {benefit.benefits.map((item, idx) => (
//                       <li key={idx} className="flex items-center gap-2">
//                         <CheckCircle className="h-4 w-4 text-red-500" />
//                         <span className="text-sm">{item}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* HITRUST Assessment Types */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
//               HITRUST Assessment Types
//             </h2>
//             <p className="text-xl text-muted-foreground">
//               Choose the right assessment level for your organization
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 name: "e1 Assessment",
//                 description: "Entry-level assessment for smaller organizations",
//                 duration: "3-6 months",
//                 controls: "44 controls",
//                 features: [
//                   "Self-assessment option",
//                   "Validated assessment option",
//                   "Streamlined process",
//                   "Cost-effective approach",
//                   "Foundation for CSF certification",
//                 ],
//                 color: "border-green-400",
//                 ideal: "Small to medium organizations",
//               },
//               {
//                 name: "i1 Assessment",
//                 description:
//                   "Intermediate assessment with broader control coverage",
//                 duration: "6-12 months",
//                 controls: "75+ controls",
//                 features: [
//                   "Validated assessment required",
//                   "Enhanced security posture",
//                   "More comprehensive coverage",
//                   "Interim certification available",
//                   "Pathway to CSF certification",
//                 ],
//                 color: "border-red-400",
//                 popular: true,
//                 ideal: "Growing organizations",
//               },
//               {
//                 name: "r2 Assessment",
//                 description:
//                   "Full CSF assessment with comprehensive control coverage",
//                 duration: "12-18 months",
//                 controls: "156+ controls",
//                 features: [
//                   "Full HITRUST CSF certification",
//                   "Comprehensive risk coverage",
//                   "Maximum market recognition",
//                   "Highest assurance level",
//                   "Annual certification maintenance",
//                 ],
//                 color: "border-purple-400",
//                 ideal: "Large enterprises",
//               },
//             ].map((assessment, index) => (
//               <Card
//                 key={index}
//                 className={`relative hover:shadow-xl transition-all duration-300 border-2 ${assessment.color} ${assessment.popular ? "scale-105" : ""}`}
//               >
//                 {assessment.popular && (
//                   <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
//                     <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-medium">
//                       Most Popular
//                     </span>
//                   </div>
//                 )}
//                 <CardHeader>
//                   <CardTitle className="text-2xl text-primary">
//                     {assessment.name}
//                   </CardTitle>
//                   <CardDescription className="text-base">
//                     {assessment.description}
//                   </CardDescription>
//                   <div className="space-y-2 mt-4">
//                     <div className="text-sm">
//                       <span className="font-medium">Duration:</span>{" "}
//                       {assessment.duration}
//                     </div>
//                     <div className="text-sm">
//                       <span className="font-medium">Controls:</span>{" "}
//                       {assessment.controls}
//                     </div>
//                   </div>
//                 </CardHeader>
//                 <CardContent>
//                   <ul className="space-y-3 mb-6">
//                     {assessment.features.map((feature, idx) => (
//                       <li key={idx} className="flex items-center gap-3">
//                         <CheckCircle className="h-4 w-4 text-red-500" />
//                         <span className="text-sm">{feature}</span>
//                       </li>
//                     ))}
//                   </ul>
//                   <div className="bg-gray-50 p-3 rounded-lg">
//                     <div className="text-sm font-medium text-gray-700">
//                       Ideal for:
//                     </div>
//                     <div className="text-sm text-gray-600">
//                       {assessment.ideal}
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Implementation Process */}
//       <section className="py-20 bg-red-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
//               HITRUST Implementation Process
//             </h2>
//             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//               Our proven methodology for achieving HITRUST CSF certification
//             </p>
//           </div>

//           <div className="space-y-8">
//             {[
//               {
//                 step: "01",
//                 title: "Readiness Assessment",
//                 description:
//                   "Evaluate current security posture and determine readiness for HITRUST assessment",
//                 icon: Target,
//                 duration: "2-4 weeks",
//               },
//               {
//                 step: "02",
//                 title: "Scoping & Planning",
//                 description:
//                   "Define assessment scope, select appropriate assessment type, and create project plan",
//                 icon: FileCheck,
//                 duration: "1-2 weeks",
//               },
//               {
//                 step: "03",
//                 title: "Control Implementation",
//                 description:
//                   "Implement required controls and document policies and procedures",
//                 icon: Lock,
//                 duration: "12-24 weeks",
//               },
//               {
//                 step: "04",
//                 title: "Self-Assessment",
//                 description:
//                   "Complete MyCSF self-assessment and gather evidence for control implementation",
//                 icon: Users,
//                 duration: "4-8 weeks",
//               },
//               {
//                 step: "05",
//                 title: "Validation Assessment",
//                 description:
//                   "Independent third-party validation by HITRUST-authorized assessor",
//                 icon: Award,
//                 duration: "6-12 weeks",
//               },
//               {
//                 step: "06",
//                 title: "Certification",
//                 description:
//                   "HITRUST review and certification issuance upon successful validation",
//                 icon: Star,
//                 duration: "4-6 weeks",
//               },
//             ].map((step, index) => (
//               <div
//                 key={index}
//                 className={`flex flex-col lg:flex-row items-center gap-8 ${
//                   index % 2 === 0 ? "" : "lg:flex-row-reverse"
//                 }`}
//               >
//                 <div className="flex-shrink-0">
//                   <div className="relative">
//                     <div className="w-24 h-24 bg-gradient-to-br from-red-600 to-pink-700 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
//                       {step.step}
//                     </div>
//                     <div className="absolute inset-0 w-24 h-24 bg-gradient-to-br from-red-600 to-pink-700 rounded-full animate-ping opacity-20"></div>
//                   </div>
//                 </div>
//                 <Card className="flex-1 hover:shadow-lg transition-all duration-300">
//                   <CardContent className="p-8">
//                     <div className="flex items-start gap-4">
//                       <step.icon className="h-8 w-8 text-red-600 flex-shrink-0 mt-1" />
//                       <div>
//                         <h3 className="text-2xl font-bold text-primary mb-3">
//                           {step.title}
//                         </h3>
//                         <p className="text-muted-foreground text-lg leading-relaxed mb-3">
//                           {step.description}
//                         </p>
//                         <div className="text-sm text-red-600 font-medium">
//                           Duration: {step.duration}
//                         </div>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Success Stories */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
//               HITRUST Success Metrics
//             </h2>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             {[
//               {
//                 stat: "100%",
//                 label: "Success Rate",
//                 description: "Clients achieving HITRUST certification",
//                 icon: "🎯",
//               },
//               {
//                 stat: "18",
//                 label: "Average Months",
//                 description: "Time to achieve r2 certification",
//                 icon: "⏱️",
//               },
//               {
//                 stat: "40%",
//                 label: "Cost Reduction",
//                 description: "Reduction in compliance costs",
//                 icon: "💰",
//               },
//               {
//                 stat: "85%",
//                 label: "Client Retention",
//                 description: "Clients continue with annual maintenance",
//                 icon: "🤝",
//               },
//             ].map((metric, index) => (
//               <Card
//                 key={index}
//                 className="text-center hover:shadow-lg transition-all duration-300"
//               >
//                 <CardContent className="pt-8">
//                   <div className="text-4xl mb-4">{metric.icon}</div>
//                   <div className="text-4xl font-bold text-red-600 mb-2">
//                     {metric.stat}
//                   </div>
//                   <h3 className="font-bold text-primary mb-3">
//                     {metric.label}
//                   </h3>
//                   <p className="text-sm text-muted-foreground">
//                     {metric.description}
//                   </p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* HITRUST Pricing */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">HITRUST Pricing</h2>
//             <p className="text-xl text-muted-foreground">Outcome-focused pricing aligned to HITRUST CSF activities</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 name: "Readiness & Gap Assessment",
//                 price: "$8,000",
//                 description:
//                   "Baseline your program against HITRUST CSF and get a prioritized remediation plan",
//                 features: [
//                   "MyCSF scoping workshop",
//                   "Control maturity baseline (e1/i1/r2)",
//                   "Gap analysis and risk-ranked remediation roadmap",
//                   "Policy and procedure templates mapped to CSF",
//                   "Executive readout and next-step plan",
//                 ],
//               },
//               {
//                 name: "Full Audit Support",
//                 price: "$16,000",
//                 description:
//                   "End-to-end guidance through validated assessment and certification",
//                 features: [
//                   "Project plan and assessor coordination",
//                   "Evidence collection and mapping in MyCSF",
//                   "Remediation guidance and control hardening",
//                   "Pre-validation review and mock interviews",
//                   "Readiness checkpoint before submission",
//                 ],
//               },
//               {
//                 name: "Continued HITRUST Support",
//                 price: "Custom Pricing",
//                 description:
//                   "Ongoing program operations to maintain certification and improve maturity",
//                 features: [
//                   "Quarterly control monitoring and metrics",
//                   "Annual interim assessment preparation",
//                   "Policy updates and training refresh",
//                   "Vendor risk and security questionnaire support",
//                   "Executive dashboards and board reporting",
//                 ],
//               },
//             ].map((plan, index) => (
//               <Card key={index} className="relative hover:shadow-xl transition-all duration-300 border-2">
//                 <CardHeader>
//                   <CardTitle className="text-2xl text-primary">{plan.name}</CardTitle>
//                   <div className="text-3xl font-bold text-red-600 mb-2">{plan.price}</div>
//                   <CardDescription>{plan.description}</CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <ul className="space-y-3 mb-6">
//                     {plan.features.map((feature, idx) => (
//                       <li key={idx} className="flex items-center gap-3">
//                         <CheckCircle className="h-4 w-4 text-green-500" />
//                         <span className="text-sm">{feature}</span>
//                       </li>
//                     ))}
//                   </ul>
//                   <Button className="w-full bg-gradient-to-r from-red-600 to-pink-700 hover:from-red-500 hover:to-pink-600" asChild>
//                     <Link to="/contact">Get Started</Link>
//                   </Button>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-red-50">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
//             Ready for HITRUST Certification?
//           </h2>
//           <p className="text-xl text-muted-foreground mb-8">
//             Start your HITRUST journey with our expert guidance and proven track
//             record of successful certifications.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button
//               size="lg"
//               className="bg-gradient-to-r from-red-600 to-pink-700 hover:from-red-500 hover:to-pink-600 transform hover:scale-105 transition-all duration-300"
//               asChild
//             >
//               <Link to="/compliance-audit-readiness">
//                 Start HITRUST Assessment
//                 <ChevronRight className="ml-2 h-5 w-5" />
//               </Link>
//             </Button>
//             <Button size="lg" variant="outline" asChild>
//               <Link to="/contact">
//                 Schedule Consultation
//                 <ArrowRight className="ml-2 h-5 w-5" />
//               </Link>
//             </Button>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }
