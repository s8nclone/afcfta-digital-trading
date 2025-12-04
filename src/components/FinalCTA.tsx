import { Link } from "react-router-dom";
import {
  ArrowRight
} from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
          Begin Your AfCFTA Digital Trade Journey Today
        </h2>
        <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
          Register your business and get verified to participate in African
          trade opportunities.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/register"
            className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-flex items-center justify-center gap-2"
          >
            Get Started
            <ArrowRight size={20} />
          </Link>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;