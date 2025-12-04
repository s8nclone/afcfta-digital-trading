import { Link } from "react-router-dom";
import {
  CheckCircle2,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

const PlatformOverview = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20 bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-primary-800 rounded-lg p-8 border border-primary-700">
              <div className="flex items-start gap-3 mb-4">
                <TrendingUp className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Real-Time Trade Analytics</h3>
                  <div className="text-3xl font-bold text-primary mb-2">$2.8B+</div>
                  <p className="text-primary-100 text-sm">Total Trade Volume This Month</p>
                  <div className="flex gap-8 mt-6">
                    <div>
                      <div className="text-sm text-primary-300 mb-1">Top Exporter</div>
                      <div className="font-bold text-white">Nigeria</div>
                      <div className="text-xs text-primary-300">+12.4%</div>
                    </div>
                    <div>
                      <div className="text-sm text-primary-300 mb-1">Top Importer</div>
                      <div className="font-bold text-white">Kenya</div>
                      <div className="text-xs text-primary-300">+8.2%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6">
              We've built a platform to trade across Africa
            </h2>
            <p className="text-lg text-primary-100 mb-8">
              We're revolutionizing the continental trade landscape with a
              platform that is secure, smart and easy-to-use, completely
              transforming the way businesses access new markets and growth
              opportunities under AfCFTA.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <span>Verified identity and business credentials</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <span>Real-time market insights across 54 countries</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <span>AI-powered trade recommendations</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <span>Secure payment infrastructure</span>
              </div>
            </div>
            <Link
              to="/register"
              className="inline-flex items-center gap-2 mt-8 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
            >
              Start Trading Today
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformOverview;