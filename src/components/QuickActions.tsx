import { Link } from "react-router-dom";
import { Building2Icon, SearchIcon } from "./Icons";

const QuickActions = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-3">Quick Actions</h2>
          <p className="text-lg text-muted-foreground">
            Start your AfCFTA journey with these simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 border border-border rounded-2xl hover:shadow-lg transition">
            <div className="w-16 h-16 bg-secondary-100 rounded-xl flex items-center justify-center mb-6">
              <Building2Icon className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Apply to Do Business Across Africa</h3>
            <p className="text-muted-foreground mb-6">
              Register your business, verify your identity, and select your
              industry categories and target countries.
            </p>
            <Link to="/register">
              <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary-700 transition">
                Apply Now →
              </button>
            </Link>
          </div>

          <div className="p-8 border border-border rounded-2xl hover:shadow-lg transition">
            <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
              <SearchIcon className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Find Nigerian Businesses</h3>
            <p className="text-muted-foreground mb-6">
              Discover and connect with verified Nigerian businesses open to
              trade under AfCFTA.
            </p>
            <Link to="/coming-soon">
              <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary-700 transition">
                Browse →
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickActions;
