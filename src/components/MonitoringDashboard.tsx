import {
  Shield,
  BarChart3,
  FileCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

const MonitoringDashboard = () => {
  const items = [
    {
      icon: <BarChart3 className="w-12 h-12 text-primary" />,
      title: "Trade Analytics",
      description: "Real-time insights on trade flows and market trends",
    },
    {
      icon: <FileCheck className="w-12 h-12 text-secondary" />,
      title: "Compliance Monitoring",
      description: "Track adherence to AfCFTA rules and regulations",
    },
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: "Policy Tools",
      description: "Resources for policymakers and regulators",
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-amber-500" />,
      title: "Data Intelligence",
      description: "Comprehensive trade data and reporting",
    },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-3">Monitoring & Compliance</h2>
          <p className="text-lg text-muted-foreground">
            A single national gateway to AfCFTA digital trade resources,
            compliance tools, and intelligence dashboards for Nigerian agencies
            and policymakers.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {items.map((item, index) => (
            <div
              key={index}
              className="p-6 border border-border rounded-xl hover:shadow-lg transition text-center"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/coming-soon">
            <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition">
              Access Monitoring Dashboard
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MonitoringDashboard;