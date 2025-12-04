import {
  CheckCircle2
} from "lucide-react";
import TradingViewMarketWidget from "./TradingViewMarketWidget";

const TradingAnalytics = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-primary-950 to-primary-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 md:order-1 h-[50dvh] md:h-full">
            <TradingViewMarketWidget />
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight text-foreground">
              Trade Digitally Across Africa
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Leverage real-time analytics and AI-powered insights to make informed
              trade decisions. Access market data, compliance tools, and business
              recommendations powered by AfCFTA.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Real-time market data and analysis across 54 nations",
                "AI-powered trade recommendations for your business",
                "Advanced compliance and verification tools",
                "Institutional-grade security and encryption",
                "24/7 global market access and support",
                "Professional-level analytics and reporting tools",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground/90">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
              <p className="text-muted-foreground/80 italic mb-4">
                "The platform's real-time trade analytics have helped me expand my business
                across three new African markets. The compliance support is invaluable."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center font-bold text-sm">
                  ✓
                </div>
                <div>
                  <div className="font-semibold text-foreground">Aisha Okafor</div>
                  <div className="text-sm text-muted-foreground">CEO, AfriTrade Solutions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingAnalytics;