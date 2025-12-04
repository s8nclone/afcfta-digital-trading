import Benefits from "@/components/Benefits";
import ContactSection from "@/components/ContactSection";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import MonitoringDashboard from "@/components/MonitoringDashboard";
import PlatformFeatures from "@/components/PlatformFeatures";
import PlatformOverview from "@/components/PlatformOverview";
import QuickActions from "@/components/QuickActions";
import TradingAnalytics from "@/components/TradingAnalytics";
import VerifiedBadge from "@/components/VerifiedBadge";

// import { useState } from "react";
// import { Link } from "react-router-dom";
// import Layout from "@/components/Layout";
// import {
//   CheckCircle2,
//   ArrowRight,
//   Globe,
//   Shield,
//   Users,
//   BarChart3,
//   Clock,
//   Lock,
//   FileCheck,
//   Zap,
//   Target,
//   TrendingUp,
//   ChevronDown,
//   Send,
//   Mail,
//   Phone,
//   MapPin,
// } from "lucide-react";

// export default function Landing() {
//   const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
//   const [contactForm, setContactForm] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const handleContactChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setContactForm({
//       ...contactForm,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleContactSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     alert("Thank you for your message! We'll respond within 24 hours.");
//     setContactForm({ name: "", email: "", subject: "", message: "" });
//   };

//   return (
//     <Layout>
//       {/* Hero Section */}
//       <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex items-start mb-8">
//             <div className="flex items-center gap-2 px-3 py-1 bg-primary-50 rounded-full">
//               <span className="text-primary font-semibold text-sm">🌍</span>
//               <span className="text-primary font-semibold text-sm">
//                 Connecting African Businesses
//               </span>
//             </div>
//           </div>

//           <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
//             <div>
//               <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
//                 Welcome to the National{" "}
//                 <span className="text-primary">AfCFTA</span>
//                 <br />
//                 <span className="text-primary">Digital Trade Portal</span>
//               </h1>
//               <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-lg">
//                 Facilitating digital trade across Africa, connecting Nigerian
//                 businesses with opportunities under the African Continental Free
//                 Trade Area.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 mb-8">
//                 <Link
//                   to="/register"
//                   className="bg-primary text-primary-foreground px-8 py-3 rounded font-semibold hover:bg-primary-700 transition inline-flex items-center justify-center gap-2"
//                 >
//                   Get Started
//                   <ArrowRight size={20} />
//                 </Link>
//                 <Link
//                   to="/coming-soon"
//                   className="border-2 border-primary text-primary px-8 py-3 rounded font-semibold hover:bg-primary-50 transition inline-flex items-center justify-center"
//                 >
//                   Learn More
//                 </Link>
//               </div>
//             </div>
//             <div className="bg-primary-100 rounded-2xl p-8 flex flex-col items-center justify-center aspect-square">
//               <Globe className="w-32 h-32 text-primary mb-4" />
//               <p className="text-primary font-semibold text-center">
//                 54 African Nations
//               </p>
//             </div>
//           </div>

//           {/* Stats */}
//           <div className="grid md:grid-cols-3 gap-8 border-t border-border pt-12">
//             <div>
//               <div className="text-4xl font-bold text-primary mb-2">54</div>
//               <p className="text-muted-foreground">African Countries</p>
//             </div>
//             <div>
//               <div className="text-4xl font-bold text-primary mb-2">1.3B</div>
//               <p className="text-muted-foreground">Market Access</p>
//             </div>
//             <div>
//               <div className="text-4xl font-bold text-amber-500 mb-2">$3.4T</div>
//               <p className="text-muted-foreground">GDP Combined</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Real-Time Portfolio & Benefits Section */}
//       <section className="px-4 sm:px-6 lg:px-8 py-20 bg-primary-900 text-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div>
//               <div className="bg-primary-800 rounded-lg p-8 border border-primary-700">
//                 <div className="flex items-start gap-3 mb-4">
//                   <TrendingUp className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
//                   <div>
//                     <h3 className="text-xl font-bold mb-2">Real-Time Trade Analytics</h3>
//                     <div className="text-3xl font-bold text-primary mb-2">$2.8B+</div>
//                     <p className="text-primary-100 text-sm">Total Trade Volume This Month</p>
//                     <div className="flex gap-8 mt-6">
//                       <div>
//                         <div className="text-sm text-primary-300 mb-1">Top Exporter</div>
//                         <div className="font-bold text-white">Nigeria</div>
//                         <div className="text-xs text-primary-300">+12.4%</div>
//                       </div>
//                       <div>
//                         <div className="text-sm text-primary-300 mb-1">Top Importer</div>
//                         <div className="font-bold text-white">Kenya</div>
//                         <div className="text-xs text-primary-300">+8.2%</div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div>
//               <h2 className="text-4xl font-bold mb-6">
//                 We've built a platform to trade across Africa
//               </h2>
//               <p className="text-lg text-primary-100 mb-8">
//                 We're revolutionizing the continental trade landscape with a
//                 platform that is secure, smart and easy-to-use, completely
//                 transforming the way businesses access new markets and growth
//                 opportunities under AfCFTA.
//               </p>
//               <div className="space-y-4">
//                 <div className="flex items-center gap-3">
//                   <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
//                   <span>Verified identity and business credentials</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
//                   <span>Real-time market insights across 54 countries</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
//                   <span>AI-powered trade recommendations</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
//                   <span>Secure payment infrastructure</span>
//                 </div>
//               </div>
//               <Link
//                 to="/register"
//                 className="inline-flex items-center gap-2 mt-8 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
//               >
//                 Start Trading Today
//                 <ArrowRight size={20} />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Verified Platform Badge */}
//       <section className="px-4 sm:px-6 lg:px-8 py-12 bg-white border-b border-border">
//         <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center gap-8">
//           <div className="flex-1">
//             <h2 className="text-2xl font-bold mb-4">Why Choose AfCFTA Portal?</h2>
//             <div className="space-y-3">
//               <div className="flex items-center gap-3">
//                 <Shield className="w-5 h-5 text-primary flex-shrink-0" />
//                 <span className="text-foreground">
//                   Trade Digitally Across 54 African nations
//                 </span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
//                 <span className="text-foreground">
//                   Verified & Secure Government-backed platform
//                 </span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <TrendingUp className="w-5 h-5 text-primary flex-shrink-0" />
//                 <span className="text-foreground">
//                   Grow Your Business Access new markets easily
//                 </span>
//               </div>
//             </div>
//           </div>
//           <div className="bg-green-50 rounded-2xl px-8 py-6 border-2 border-primary">
//             <div className="flex items-center gap-2 mb-2">
//               <CheckCircle2 className="w-6 h-6 text-primary" />
//               <span className="font-bold text-primary">Verified Platform</span>
//             </div>
//             <p className="text-sm text-muted-foreground">
//               Government-backed and trusted by Nigerian and African businesses
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Quick Actions Section */}
//       <section className="px-4 sm:px-6 lg:px-8 py-20 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold mb-3">Quick Actions</h2>
//             <p className="text-lg text-muted-foreground">
//               Start your AfCFTA journey with these simple steps
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             {/* Action 1 */}
//             <div className="p-8 border border-border rounded-2xl hover:shadow-lg transition">
//               <div className="w-16 h-16 bg-secondary-100 rounded-xl flex items-center justify-center mb-6">
//                 <Building2Icon className="w-8 h-8 text-secondary" />
//               </div>
//               <h3 className="text-2xl font-bold mb-3">Apply to Do Business Across Africa</h3>
//               <p className="text-muted-foreground mb-6">
//                 Register your business, verify your identity, and select your
//                 industry categories and target countries.
//               </p>
//               <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary-700 transition">
//                 Apply Now →
//               </button>
//             </div>

//             {/* Action 2 */}
//             <div className="p-8 border border-border rounded-2xl hover:shadow-lg transition">
//               <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
//                 <SearchIcon className="w-8 h-8 text-primary" />
//               </div>
//               <h3 className="text-2xl font-bold mb-3">Find Nigerian Businesses</h3>
//               <p className="text-muted-foreground mb-6">
//                 Discover and connect with verified Nigerian businesses open to
//                 trade under AfCFTA.
//               </p>
//               <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary-700 transition">
//                 Browse →
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* How It Works Section */}
//       <section className="px-4 sm:px-6 lg:px-8 py-20 bg-muted">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold mb-3">How It Works</h2>
//             <p className="text-lg text-muted-foreground">
//               Get started in four simple steps
//             </p>
//           </div>

//           <div className="relative">
//             {/* Timeline Line */}
//             <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-1 bg-border" />

//             <div className="grid md:grid-cols-4 gap-8">
//               {[
//                 {
//                   number: "1",
//                   title: "Sign Up",
//                   description:
//                     "Create an account and provide basic business details.",
//                   icon: "👤",
//                 },
//                 {
//                   number: "2",
//                   title: "Complete Verification",
//                   description:
//                     "Securely submit NIN, CAC documents, and identity information.",
//                   icon: "🛡️",
//                 },
//                 {
//                   number: "3",
//                   title: "Select Categories & Countries",
//                   description:
//                     "Choose industries and African markets you want to engage with.",
//                   icon: "🎯",
//                 },
//                 {
//                   number: "4",
//                   title: "Get Recommendations",
//                   description:
//                     "Receive guidance and export opportunities based on your profile.",
//                   icon: "✨",
//                 },
//               ].map((step, index) => (
//                 <div key={index} className="relative">
//                   <div className="flex flex-col items-center">
//                     <div className="w-24 h-24 rounded-full bg-white border-4 border-primary flex items-center justify-center mb-6 relative z-10 text-4xl">
//                       {step.icon}
//                     </div>
//                     <div className="flex items-center gap-2 mb-3">
//                       <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
//                         {step.number}
//                       </span>
//                     </div>
//                     <h3 className="font-bold text-center mb-2">{step.title}</h3>
//                     <p className="text-sm text-muted-foreground text-center">
//                       {step.description}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Platform Features Section */}
//       <section className="px-4 sm:px-6 lg:px-8 py-20 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold mb-3">Platform Features</h2>
//             <p className="text-lg text-muted-foreground">
//               Everything you need for seamless digital trade across Africa
//             </p>
//           </div>

//           <div className="grid md:grid-cols-4 gap-6">
//             {[
//               {
//                 icon: <Lock className="w-8 h-8 text-secondary" />,
//                 title: "Digital Identity Verification",
//                 description:
//                   "NIN, TIN, BVN and CAC verification for trusted business profiles",
//               },
//               {
//                 icon: <FileCheck className="w-8 h-8 text-primary" />,
//                 title: "Trade Readiness Test",
//                 description:
//                   "Assessment and guidance to prepare your business for African markets",
//               },
//               {
//                 icon: <BarChart3 className="w-8 h-8 text-secondary" />,
//                 title: "AfCFTA Compliance Center",
//                 description:
//                   "Rules of Origin, tariffs, and trade requirements at your fingertips",
//               },
//               {
//                 icon: <FileCheck className="w-8 h-8 text-amber-500" />,
//                 title: "Document & e-Certification",
//                 description:
//                   "Upload and manage certificates, licenses, and trade documents",
//               },
//               {
//                 icon: <Globe className="w-8 h-8 text-secondary" />,
//                 title: "Product & Service Catalog",
//                 description:
//                   "Showcase your offerings to African buyers and partners",
//               },
//               {
//                 icon: <Zap className="w-8 h-8 text-primary" />,
//                 title: "Payment Layer Integration",
//                 description:
//                   "PAPSS integration and escrow for secure cross-border transactions",
//               },
//               {
//                 icon: <Target className="w-8 h-8 text-secondary" />,
//                 title: "AI Trade Assistant",
//                 description:
//                   "24/7 chatbot support for trade queries and platform guidance",
//               },
//               {
//                 icon: <BarChart3 className="w-8 h-8 text-amber-500" />,
//                 title: "Government Dashboards",
//                 description:
//                   "Analytics and insights for policymakers and regulatory bodies",
//               },
//             ].map((feature, index) => (
//               <div
//                 key={index}
//                 className="p-6 border border-border rounded-xl hover:shadow-lg hover:border-primary transition"
//               >
//                 <div className="mb-4">{feature.icon}</div>
//                 <h3 className="font-bold mb-2 text-foreground">{feature.title}</h3>
//                 <p className="text-sm text-muted-foreground">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Benefits & Impact Section */}
//       <section className="px-4 sm:px-6 lg:px-8 py-20 bg-muted">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold mb-3">Benefits & Impact</h2>
//             <p className="text-lg text-muted-foreground">
//               Transforming African trade for businesses and governments
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: "📈",
//                 title: "Empower MSMEs & Exporters",
//                 description:
//                   "Level the playing field with digital tools, market access, and export readiness support for small and medium enterprises across Nigeria.",
//                 color: "bg-blue-50",
//               },
//               {
//                 icon: "🛡️",
//                 title: "Promote Transparency & Verification",
//                 description:
//                   "Build trust through government-backed identity verification, secure documentation, and compliance with AfCFTA standards.",
//                 color: "bg-green-50",
//               },
//               {
//                 icon: "🌍",
//                 title: "Unlock Access to African Markets",
//                 description:
//                   "Connect with 1.3 billion consumers across 54 countries with simplified trade processes and digital infrastructure.",
//                 color: "bg-amber-50",
//               },
//             ].map((benefit, index) => (
//               <div
//                 key={index}
//                 className={`${benefit.color} p-8 rounded-xl border border-border hover:shadow-lg transition`}
//               >
//                 <div className="text-4xl mb-4">{benefit.icon}</div>
//                 <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
//                 <p className="text-muted-foreground">{benefit.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Monitoring & Compliance Section - Card Layout */}
//       <section className="px-4 sm:px-6 lg:px-8 py-20 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold mb-3">Monitoring & Compliance</h2>
//             <p className="text-lg text-muted-foreground">
//               A single national gateway to AfCFTA digital trade resources,
//               compliance tools, and intelligence dashboards for Nigerian agencies
//               and policymakers.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-4 gap-6 mb-12">
//             {[
//               {
//                 icon: <BarChart3 className="w-12 h-12 text-primary" />,
//                 title: "Trade Analytics",
//                 description: "Real-time insights on trade flows and market trends",
//               },
//               {
//                 icon: <FileCheck className="w-12 h-12 text-secondary" />,
//                 title: "Compliance Monitoring",
//                 description: "Track adherence to AfCFTA rules and regulations",
//               },
//               {
//                 icon: <Shield className="w-12 h-12 text-primary" />,
//                 title: "Policy Tools",
//                 description: "Resources for policymakers and regulators",
//               },
//               {
//                 icon: <BarChart3 className="w-12 h-12 text-amber-500" />,
//                 title: "Data Intelligence",
//                 description: "Comprehensive trade data and reporting",
//               },
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 className="p-6 border border-border rounded-xl hover:shadow-lg transition text-center"
//               >
//                 <div className="flex justify-center mb-4">{item.icon}</div>
//                 <h3 className="font-bold mb-2">{item.title}</h3>
//                 <p className="text-sm text-muted-foreground">{item.description}</p>
//               </div>
//             ))}
//           </div>

//           <div className="text-center">
//             <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition">
//               Access Monitoring Dashboard
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Trading Analytics Section */}
//       <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-primary-950 to-primary-900 text-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
//             {/* Left: Trading Interface */}
//             <div className="order-2 md:order-1">
//               <div className="bg-primary-900/50 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
//                 <div className="mb-6 flex items-center justify-between">
//                   <h3 className="font-bold text-xl">Live Trade Analytics</h3>
//                   <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">Live Data</span>
//                 </div>

//                 {/* Mock Trading Chart Interface */}
//                 <div className="bg-primary-950/70 rounded-lg p-4 mb-6 border border-white/5">
//                   {/* Tab Headers */}
//                   <div className="flex gap-4 mb-4 border-b border-white/10 pb-4">
//                     <button className="text-white font-semibold text-sm hover:text-primary transition">Top Exporters</button>
//                     <button className="text-white/50 text-sm hover:text-white transition">Market Trends</button>
//                     <button className="text-white/50 text-sm hover:text-white transition">Regional Data</button>
//                     <button className="text-white/50 text-sm hover:text-white transition">Analytics</button>
//                   </div>

//                   {/* Trade Data Display */}
//                   <div className="space-y-4">
//                     <div className="flex items-center justify-between p-3 bg-primary-900/50 rounded-lg">
//                       <div className="flex items-center gap-3">
//                         <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center font-bold text-sm">
//                           🇳🇬
//                         </div>
//                         <div>
//                           <div className="font-bold text-white">Nigeria</div>
//                           <div className="text-xs text-white/60">Export Volume</div>
//                         </div>
//                       </div>
//                       <div className="text-right">
//                         <div className="text-xl font-bold text-white">$2.4B</div>
//                         <div className="text-xs text-primary">+12.4% this month</div>
//                       </div>
//                     </div>

//                     <div className="flex items-center justify-between p-3 bg-primary-900/50 rounded-lg">
//                       <div className="flex items-center gap-3">
//                         <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center font-bold text-sm">
//                           🇰🇪
//                         </div>
//                         <div>
//                           <div className="font-bold text-white">Kenya</div>
//                           <div className="text-xs text-white/60">Import Volume</div>
//                         </div>
//                       </div>
//                       <div className="text-right">
//                         <div className="text-xl font-bold text-white">$1.8B</div>
//                         <div className="text-xs text-secondary">+8.2% this month</div>
//                       </div>
//                     </div>

//                     <div className="flex items-center justify-between p-3 bg-primary-900/50 rounded-lg">
//                       <div className="flex items-center gap-3">
//                         <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center font-bold text-sm">
//                           🇬🇭
//                         </div>
//                         <div>
//                           <div className="font-bold text-white">Ghana</div>
//                           <div className="text-xs text-white/60">Trade Volume</div>
//                         </div>
//                       </div>
//                       <div className="text-right">
//                         <div className="text-xl font-bold text-white">$1.2B</div>
//                         <div className="text-xs text-amber-400">+6.8% this month</div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Simple Chart Placeholder */}
//                   <div className="mt-6 pt-6 border-t border-white/10">
//                     <svg
//                       viewBox="0 0 300 100"
//                       className="w-full h-16 opacity-50"
//                       preserveAspectRatio="none"
//                     >
//                       <path
//                         d="M0,80 Q75,30 150,50 T300,20"
//                         stroke="hsl(142 71.5% 45.3%)"
//                         strokeWidth="2"
//                         fill="none"
//                       />
//                       <path
//                         d="M0,100 Q75,50 150,70 T300,40 L300,100 L0,100"
//                         fill="url(#grad)"
//                         opacity="0.2"
//                       />
//                       <defs>
//                         <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
//                           <stop offset="0%" stopColor="hsl(142 71.5% 45.3%)" />
//                           <stop offset="100%" stopColor="transparent" />
//                         </linearGradient>
//                       </defs>
//                     </svg>
//                   </div>

//                   <div className="flex items-center justify-between text-xs text-white/50 mt-4">
//                     <span>1D</span>
//                     <span>1W</span>
//                     <span>1M</span>
//                     <span>3M</span>
//                     <span>All</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Right: Benefits & Testimonial */}
//             <div className="order-1 md:order-2">
//               <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white">
//                 Trade Digitally Across Africa
//               </h2>
//               <p className="text-lg text-white/80 mb-8">
//                 Leverage real-time analytics and AI-powered insights to make informed
//                 trade decisions. Access market data, compliance tools, and business
//                 recommendations powered by AfCFTA.
//               </p>

//               <div className="space-y-4 mb-8">
//                 <div className="flex items-center gap-3">
//                   <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
//                   <span className="text-white/90">Real-time market data and analysis across 54 nations</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
//                   <span className="text-white/90">AI-powered trade recommendations for your business</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
//                   <span className="text-white/90">Advanced compliance and verification tools</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
//                   <span className="text-white/90">Institutional-grade security and encryption</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
//                   <span className="text-white/90">24/7 global market access and support</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
//                   <span className="text-white/90">Professional-level analytics and reporting tools</span>
//                 </div>
//               </div>

//               {/* Testimonial */}
//               <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
//                 <p className="text-white/80 italic mb-4">
//                   "The platform's real-time trade analytics have helped me expand my business
//                   across three new African markets. The compliance support is invaluable."
//                 </p>
//                 <div className="flex items-center gap-3">
//                   <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center font-bold text-sm">
//                     ✓
//                   </div>
//                   <div>
//                     <div className="font-semibold text-white">Aisha Okafor</div>
//                     <div className="text-sm text-white/60">CEO, AfriTrade Solutions</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="px-4 sm:px-6 lg:px-8 py-20 bg-muted">
//         <div className="max-w-3xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold mb-3">Frequently Asked Questions</h2>
//             <p className="text-lg text-muted-foreground">
//               Below we've provided answers to common questions about our
//               AfCFTA platform, security measures, and trading features.
//             </p>
//           </div>

//           <div className="space-y-4">
//             {[
//               {
//                 question: "What is the AFCFTA Digital Trade Portal?",
//                 answer:
//                   "The AFCFTA Digital Trade Portal is a government-backed platform designed to facilitate seamless digital trade across 54 African nations, connecting Nigerian businesses with opportunities under the African Continental Free Trade Area.",
//               },
//               {
//                 question: "How does the verification process work?",
//                 answer:
//                   "We use secure government-backed verification including NIN, CAC, and business documentation verification to ensure all traders are legitimate and trustworthy, building a secure trading community.",
//               },
//               {
//                 question: "What security measures do you have in place?",
//                 answer:
//                   "We employ military-grade encryption, regular security audits, government-backed identity verification, and secure payment integration through PAPSS to protect all transactions and data.",
//               },
//               {
//                 question: "Are there any fees for using the platform?",
//                 answer:
//                   "Registration and basic platform access are free. We offer premium features and advanced analytics at competitive rates designed to support MSMEs in accessing African markets.",
//               },
//               {
//                 question: "How long does the verification process take?",
//                 answer:
//                   "Most verifications are completed within 24-48 hours. During the verification period, you can explore the platform and access educational resources about AfCFTA trade opportunities.",
//               },
//             ].map((faq, index) => (
//               <div
//                 key={index}
//                 className="border border-border rounded-lg bg-white overflow-hidden"
//               >
//                 <button
//                   onClick={() =>
//                     setExpandedFaq(expandedFaq === index ? null : index)
//                   }
//                   className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted transition text-left font-semibold"
//                 >
//                   {faq.question}
//                   <ChevronDown
//                     size={20}
//                     className={`transform transition ${
//                       expandedFaq === index ? "rotate-180" : ""
//                     }`}
//                   />
//                 </button>
//                 {expandedFaq === index && (
//                   <div className="px-6 py-4 bg-primary-50 border-t border-border text-muted-foreground">
//                     {faq.answer}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="px-4 sm:px-6 lg:px-8 py-20 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid md:grid-cols-2 gap-12">
//             {/* Contact Form */}
//             <div>
//               <h2 className="text-4xl font-bold mb-2">Send us a Message</h2>
//               <p className="text-muted-foreground mb-8">
//                 Fill out the form below and our team will respond promptly.
//               </p>
//               <form onSubmit={handleContactSubmit} className="space-y-6">
//                 <div className="grid sm:grid-cols-2 gap-4">
//                   <input
//                     type="text"
//                     name="name"
//                     placeholder="Your full name"
//                     value={contactForm.name}
//                     onChange={handleContactChange}
//                     required
//                     className="px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
//                   />
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="your@email.com"
//                     value={contactForm.email}
//                     onChange={handleContactChange}
//                     required
//                     className="px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
//                   />
//                 </div>
//                 <input
//                   type="text"
//                   name="subject"
//                   placeholder="What is this regarding?"
//                   value={contactForm.subject}
//                   onChange={handleContactChange}
//                   required
//                   className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
//                 />
//                 <textarea
//                   name="message"
//                   placeholder="Tell us more about your inquiry..."
//                   rows={5}
//                   value={contactForm.message}
//                   onChange={handleContactChange}
//                   required
//                   className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
//                 />
//                 <button
//                   type="submit"
//                   className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary-700 transition flex items-center justify-center gap-2"
//                 >
//                   <Send size={20} />
//                   Send Message
//                 </button>
//               </form>
//             </div>

//             {/* Contact Information */}
//             <div>
//               <h2 className="text-4xl font-bold mb-2">Contact Information</h2>
//               <p className="text-muted-foreground mb-8">
//                 Reach out to us through any of these channels.
//               </p>
//               <div className="space-y-6">
//                 <div className="flex items-start gap-4">
//                   <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
//                     <Mail className="w-6 h-6 text-primary" />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold mb-1">Email Support</h3>
//                     <p className="text-muted-foreground">support@afcfta.gov.ng</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-4">
//                   <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
//                     <Phone className="w-6 h-6 text-primary" />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold mb-1">Phone Support</h3>
//                     <p className="text-muted-foreground">+234 800 AFCFTA</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-4">
//                   <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
//                     <MapPin className="w-6 h-6 text-primary" />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold mb-1">Headquarters</h3>
//                     <p className="text-muted-foreground">
//                       Federal Ministry of Trade & Investment, Abuja, Nigeria
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-4">
//                   <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
//                     <Clock className="w-6 h-6 text-primary" />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold mb-1">Support Hours</h3>
//                     <p className="text-muted-foreground">
//                       24/7 Global Support - Response within 24 hours
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Final CTA Section */}
//       <section className="px-4 sm:px-6 lg:px-8 py-20 bg-primary text-primary-foreground">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-4xl sm:text-5xl font-bold mb-6">
//             Begin Your AfCFTA Digital Trade Journey Today
//           </h2>
//           <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
//             Register your business and get verified to participate in African
//             trade opportunities.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link
//               to="/register"
//               className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-flex items-center justify-center gap-2"
//             >
//               Get Started
//               <ArrowRight size={20} />
//             </Link>
//             <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition">
//               Contact Support
//             </button>
//           </div>
//         </div>
//       </section>
//     </Layout>
//   );
// }

// // Icon components
// function Building2Icon(props: any) {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       {...props}
//     >
//       <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
//       <polyline points="9 22 9 12 15 12 15 22" />
//       <line x1="9" y1="5" x2="9" y2="9" />
//       <line x1="15" y1="5" x2="15" y2="9" />
//     </svg>
//   );
// }

// function SearchIcon(props: any) {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       {...props}
//     >
//       <circle cx="11" cy="11" r="8" />
//       <path d="m21 21-4.35-4.35" />
//     </svg>
//   );
// }


export default function Landing() {
  return (
    <div>
      <HeroSection />
      <PlatformOverview />
      <VerifiedBadge />
      <QuickActions />
      <HowItWorks />
      <PlatformFeatures />
      <Benefits />
      <MonitoringDashboard />
      <TradingAnalytics />
      <FAQ />
      <ContactSection />
      <FinalCTA />
    </div>
  );
}