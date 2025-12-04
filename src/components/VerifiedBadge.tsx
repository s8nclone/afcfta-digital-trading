import {
  CheckCircle2,
  Shield,
  TrendingUp,
} from "lucide-react";

const VerifiedBadge = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center gap-8">
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">Why Choose AfCFTA Portal?</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-foreground">
                Trade Digitally Across 54 African nations
              </span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-foreground">
                Verified & Secure Government-backed platform
              </span>
            </div>
            <div className="flex items-center gap-3">
              <TrendingUp className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-foreground">
                Grow Your Business Access new markets easily
              </span>
            </div>
          </div>
        </div>
        <div className="bg-green-50 rounded-2xl px-8 py-6 border-2 border-primary">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle2 className="w-6 h-6 text-primary" />
            <span className="font-bold text-primary">Verified Platform</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Government-backed and trusted by Nigerian and African businesses
          </p>
        </div>
      </div>
    </section>
  );
}

export default VerifiedBadge;