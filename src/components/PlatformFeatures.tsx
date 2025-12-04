import {
  Globe,
  BarChart3,
  Lock,
  FileCheck,
  Zap,
  Target,
} from "lucide-react";

const PlatformFeatures = () => {
  const features = [
    {
      icon: <Lock className="w-8 h-8 text-secondary" />,
      title: "Digital Identity Verification",
      description: "NIN, TIN, BVN and CAC verification for trusted business profiles",
    },
    {
      icon: <FileCheck className="w-8 h-8 text-primary" />,
      title: "Trade Readiness Test",
      description: "Assessment and guidance to prepare your business for African markets",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-secondary" />,
      title: "AfCFTA Compliance Center",
      description: "Rules of Origin, tariffs, and trade requirements at your fingertips",
    },
    {
      icon: <FileCheck className="w-8 h-8 text-amber-500" />,
      title: "Document & e-Certification",
      description: "Upload and manage certificates, licenses, and trade documents",
    },
    {
      icon: <Globe className="w-8 h-8 text-secondary" />,
      title: "Product & Service Catalog",
      description: "Showcase your offerings to African buyers and partners",
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Payment Layer Integration",
      description: "PAPSS integration and escrow for secure cross-border transactions",
    },
    {
      icon: <Target className="w-8 h-8 text-secondary" />,
      title: "AI Trade Assistant",
      description: "24/7 chatbot support for trade queries and platform guidance",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-amber-500" />,
      title: "Government Dashboards",
      description: "Analytics and insights for policymakers and regulatory bodies",
    },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-3">Platform Features</h2>
          <p className="text-lg text-muted-foreground">
            Everything you need for seamless digital trade across Africa
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 border border-border rounded-xl hover:shadow-lg hover:border-primary transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="font-bold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformFeatures;