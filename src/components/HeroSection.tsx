import { Link } from "react-router-dom";
import {
  ArrowRight,
  Globe,
} from "lucide-react";

const HeroSection = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-start mb-8">
          <div className="flex items-center gap-2 px-3 py-1 bg-primary-50 rounded-full">
            <span className="text-primary font-semibold text-sm">🌍</span>
            <span className="text-primary font-semibold text-sm">
              Connecting African Businesses
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
              Welcome to the National{" "}
              <span className="text-primary">AfCFTA</span>
              <br />
              <span className="text-primary">Digital Trade Portal</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-lg">
              Facilitating digital trade across Africa, connecting Nigerian
              businesses with opportunities under the African Continental Free
              Trade Area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                to="/register"
                className="bg-primary text-primary-foreground px-8 py-3 rounded font-semibold hover:bg-primary-700 transition inline-flex items-center justify-center gap-2"
              >
                Get Started
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/coming-soon"
                className="border-2 border-primary text-primary px-8 py-3 rounded font-semibold hover:bg-primary-50 transition inline-flex items-center justify-center"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="bg-primary-100 rounded-2xl p-8 flex flex-col items-center justify-center aspect-square">
            <Globe className="w-32 h-32 text-primary mb-4" />
            <p className="text-primary font-semibold text-center">
              54 African Nations
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 border-t border-border pt-12">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">54</div>
            <p className="text-muted-foreground">African Countries</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">1.3B</div>
            <p className="text-muted-foreground">Market Access</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-amber-500 mb-2">$3.4T</div>
            <p className="text-muted-foreground">GDP Combined</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;