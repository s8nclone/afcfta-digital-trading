import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import TradingViewWidget from "./TradingViewWidget";

interface LayoutProps {
  children: ReactNode;
  hideHeader?: boolean;
}

export default function Layout({ children, hideHeader = false }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {!hideHeader && (
        <header className={`w-full text-white sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-primary-900/70 backdrop-blur-md shadow-lg border-b border-white/10"
            : "bg-primary-900 shadow-sm"
        }`}>
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded flex items-center justify-center font-bold text-primary">
                A
              </div>
              <div className="hidden sm:block">
                <div className="font-bold text-base">AFCFTA Digital Trade</div>
                <div className="text-xs opacity-90">National Portal</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-white hover:opacity-80 transition font-medium text-sm">
                Home
              </Link>
              <Link to="/coming-soon" className="text-white hover:opacity-80 transition font-medium text-sm">
                Monitoring Dashboard
              </Link>
              <Link to="/coming-soon" className="text-white hover:opacity-80 transition font-medium text-sm">
                Knowledge & Support Hub
              </Link>
              <Link to="/coming-soon" className="text-white hover:opacity-80 transition font-medium text-sm">
                About AFCFTA
              </Link>
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                to="/login"
                className="text-white px-6 py-2 rounded font-semibold hover:opacity-80 transition text-sm"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-primary text-primary-foreground px-6 py-2 rounded font-semibold hover:bg-primary-700 transition text-sm"
              >
                Register
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-primary-800 border-t border-white/20">
              <div className="px-4 py-4 space-y-3">
                <Link
                  to="/"
                  className="block text-white hover:opacity-80 transition py-2 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/coming-soon"
                  className="block text-white hover:opacity-80 transition py-2 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Monitoring Dashboard
                </Link>
                <Link
                  to="/coming-soon"
                  className="block text-white hover:opacity-80 transition py-2 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Knowledge & Support Hub
                </Link>
                <Link
                  to="/coming-soon"
                  className="block text-white hover:opacity-80 transition py-2 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About AFCFTA
                </Link>
                <div className="pt-3 border-t border-white/20 space-y-2">
                  <Link
                    to="/login"
                    className="block w-full text-white px-6 py-2 rounded text-center hover:opacity-80 transition font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="block w-full bg-primary text-primary-foreground px-6 py-2 rounded text-center font-semibold hover:bg-primary-700 transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Register
                  </Link>
                </div>
              </div>
            </div>
          )}
          <TradingViewWidget />
        </header>
      )}

      <main className="flex-1">{children}</main>

      {!hideHeader && (
        <footer className="w-full bg-primary-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-white rounded flex items-center justify-center font-bold text-primary text-sm">
                    A
                  </div>
                  <span className="font-bold">AFCFTA Digital Trade</span>
                </div>
                <p className="text-white/80 text-sm">
                  Empowering Nigerian businesses to trade seamlessly across Africa under the African Continental Free Trade Area.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm text-white/80">
                  <li>
                    <Link to="/" className="hover:text-white transition">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/register" className="hover:text-white transition">
                      Apply to Trade
                    </Link>
                  </li>
                  <li>
                    <Link to="/coming-soon" className="hover:text-white transition">
                      Find Businesses
                    </Link>
                  </li>
                  <li>
                    <Link to="/coming-soon" className="hover:text-white transition">
                      How It Works
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Policy & Legal</h4>
                <ul className="space-y-2 text-sm text-white/80">
                  <li>
                    <Link to="/coming-soon" className="hover:text-white transition">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/coming-soon" className="hover:text-white transition">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link to="/coming-soon" className="hover:text-white transition">
                      AFCFTA Guidelines
                    </Link>
                  </li>
                  <li>
                    <Link to="/coming-soon" className="hover:text-white transition">
                      Data Protection
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Contact Us</h4>
                <ul className="space-y-2 text-sm text-white/80">
                  <li className="flex items-start gap-2">
                    <span>📍</span>
                    <span>Federal Ministry of Trade & Investment, Abuja, Nigeria</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>📞</span>
                    <span>+234 900 AFCFTA</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✉️</span>
                    <span>info@afcfta.gov.ng</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-white/20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-white/80">
                © 2025 National AFCFTA Digital Trade Platform. All rights reserved.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-white/80 hover:text-white transition">
                  f
                </a>
                <a href="#" className="text-white/80 hover:text-white transition">
                  𝕏
                </a>
                <a href="#" className="text-white/80 hover:text-white transition">
                  in
                </a>
              </div>
            </div>
            <div className="mt-4 text-center text-sm text-white/60">
              Powered by the Federal Republic of Nigeria
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
