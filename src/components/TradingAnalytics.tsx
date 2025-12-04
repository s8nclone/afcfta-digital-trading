import {
  CheckCircle2
} from "lucide-react";
import TradingViewMarketWidget from "./TradingViewMarketWidget";

const TradingAnalytics = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-primary-950 to-primary-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 md:order-1 h-full">
            {/* <div className="bg-primary-900/50 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="font-bold text-xl">Live Trade Analytics</h3>
                <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">Live Data</span>
              </div>

              <div className="bg-primary-950/70 rounded-lg p-4 mb-6 border border-white/5">
                <div className="flex gap-4 mb-4 border-b border-white/10 pb-4">
                  <button className="text-white font-semibold text-sm hover:text-primary transition">Top Exporters</button>
                  <button className="text-white/50 text-sm hover:text-white transition">Market Trends</button>
                  <button className="text-white/50 text-sm hover:text-white transition">Regional Data</button>
                  <button className="text-white/50 text-sm hover:text-white transition">Analytics</button>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-primary-900/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center font-bold text-sm">
                        🇳🇬
                      </div>
                      <div>
                        <div className="font-bold text-white">Nigeria</div>
                        <div className="text-xs text-white/60">Export Volume</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-white">$2.4B</div>
                      <div className="text-xs text-primary">+12.4% this month</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-primary-900/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center font-bold text-sm">
                        🇰🇪
                      </div>
                      <div>
                        <div className="font-bold text-white">Kenya</div>
                        <div className="text-xs text-white/60">Import Volume</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-white">$1.8B</div>
                      <div className="text-xs text-secondary">+8.2% this month</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-primary-900/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center font-bold text-sm">
                        🇬🇭
                      </div>
                      <div>
                        <div className="font-bold text-white">Ghana</div>
                        <div className="text-xs text-white/60">Trade Volume</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-white">$1.2B</div>
                      <div className="text-xs text-amber-400">+6.8% this month</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/10">
                  <svg
                    viewBox="0 0 300 100"
                    className="w-full h-16 opacity-50"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,80 Q75,30 150,50 T300,20"
                      stroke="hsl(142 71.5% 45.3%)"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      d="M0,100 Q75,50 150,70 T300,40 L300,100 L0,100"
                      fill="url(#grad)"
                      opacity="0.2"
                    />
                    <defs>
                      <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="hsl(142 71.5% 45.3%)" />
                        <stop offset="100%" stopColor="transparent" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <div className="flex items-center justify-between text-xs text-white/50 mt-4">
                  <span>1D</span>
                  <span>1W</span>
                  <span>1M</span>
                  <span>3M</span>
                  <span>All</span>
                </div>
              </div>
            </div> */}
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