import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import ParticlesBackground from "@/components/ParticlesBackground";

const heroStats = [
  { value: "54", label: "African Countries"},
  { value: "$15.2B+", label: "Market Access" },
  { value: "$3.4T", label: "GDP Combined" },
  { value: "24/7", label: "Global Support" },
];

const HeroSection = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-slate-800 via-slate-900 to-black dark:from-black dark:via-gray-900 dark:to-black">
      {/* Particles Background */}
      <ParticlesBackground />

      {/* Cosmic overlay effects */}
      <div className="absolute inset-0" style={{ zIndex: 2 }}>
        {/* Nebula effects */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"></div>

        {/* Grid overlay */}
        <div className={"absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.02\" fill-rule=\"evenodd\"%3E%3Cpath d=\"m0 40 40-40h20L20 40H0zm40 0V20l20-20h20l-20 20v20z\"/%3E%3C/g%3E%3C/svg%3E')] opacity-30"}></div>
      </div>

      <div className="container mx-auto px-4 relative" style={{ zIndex: 3 }}>
        <div className="text-center space-y-8 max-w-5xl mx-auto">
          <div className="animate-fade-in-up">
            <Badge variant="secondary" className="w-fit mx-auto bg-green-500/20 text-green-300 hover:bg-green-500/30 transition-colors duration-300 border border-green-500/30 backdrop-blur-sm">
              Connecting African Businesses
            </Badge>
          </div>

          <div className="animate-fade-in-up animation-delay-200">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight text-white">
              Welcome to the National{" "}
              <span className="text-primary">AfCFTA</span>
              <br />
              <span className="text-primary">Digital Trade Portal</span>
            </h1>
          </div>

          <div className="animate-fade-in-up animation-delay-400">
            <p className="text-xl lg:text-2xl text-green-100 leading-relaxed max-w-3xl mx-auto">
              Facilitating digital trade across Africa, connecting Nigerian
              businesses with opportunities under the African Continental Free
              Trade Area.
            </p>
          </div>

          <div className="animate-fade-in-up animation-delay-600 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-lg px-8 bg-green-600 hover:bg-green-700 text-white transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25"
              asChild
            >
              <Link to="/register">
                Get started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-green-500 text-green-300 hover:bg-green-500/10 hover:text-green-200 transform hover:scale-105 transition-all duration-300"
            >
              <Link to="/login">
                Already Registered?
              </Link>
            </Button>
          </div>

          {/* Hero Stats */}
          <div className="animate-fade-in-up animation-delay-800 grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
            {heroStats.map((stat, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-110 transition-all duration-300"
              >
                <div className="text-2xl lg:text-4xl font-bold text-green-400 group-hover:text-green-300 transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-sm lg:text-base text-green-200">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
