import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, ArrowRight, Eye, EyeOff, CheckCircle2 } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: { email?: string; password?: string } = {};

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = "Valid email required";
    }
    if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      // Simulate login
      setTimeout(() => {
        alert("Login successful! Redirecting to dashboard...");
        setIsLoading(false);
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Header */}
      <header className="w-full bg-primary-900 text-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded flex items-center justify-center font-bold text-primary-900">
              A
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-base">AFCFTA Digital Trade</div>
              <div className="text-xs opacity-90">National Portal</div>
            </div>
          </Link>
        </nav>
      </header>

      {/* Main Content - Half Layout */}
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Left Side - Form */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 bg-white">
          <div className="w-full max-w-md">
            {/* Welcome Section */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-3">Welcome Back</h1>
              <p className="text-lg text-muted-foreground">
                Sign in to your AFCFTA Digital Trade account
              </p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-3.5 w-5 h-5 text-muted-foreground" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) {
                        setErrors({ ...errors, email: undefined });
                      }
                    }}
                    placeholder="your@email.com"
                    className={`w-full pl-12 pr-4 py-3 rounded-lg border-2 transition bg-background text-foreground placeholder-muted-foreground focus:outline-none ${
                      errors.email
                        ? "border-destructive focus:ring-2 focus:ring-destructive"
                        : "border-border focus:border-primary focus:ring-2 focus:ring-primary/20"
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="text-sm text-destructive mt-2">{errors.email}</p>
                )}
              </div>

              {/* Password Field */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-semibold">Password</label>
                  <Link
                    to="/coming-soon"
                    className="text-sm text-primary hover:underline font-semibold"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <Lock className="absolute left-4 top-3.5 w-5 h-5 text-muted-foreground" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (errors.password) {
                        setErrors({ ...errors, password: undefined });
                      }
                    }}
                    placeholder="••••••••"
                    className={`w-full pl-12 pr-12 py-3 rounded-lg border-2 transition bg-background text-foreground placeholder-muted-foreground focus:outline-none ${
                      errors.password
                        ? "border-destructive focus:ring-2 focus:ring-destructive"
                        : "border-border focus:border-primary focus:ring-2 focus:ring-primary/20"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-3.5 text-muted-foreground hover:text-foreground transition"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-sm text-destructive mt-2">{errors.password}</p>
                )}
              </div>

              {/* Remember Me */}
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-5 h-5 rounded border-2 border-border accent-primary cursor-pointer"
                  defaultChecked
                />
                <span className="text-sm text-foreground">Remember me</span>
              </label>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary-700 transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Signing in..." : "Sign In"}
                {!isLoading && <ArrowRight size={20} />}
              </button>
            </form>

            {/* Divider */}
            <div className="my-8 flex items-center gap-4">
              <div className="flex-1 h-px bg-border" />
              <span className="text-sm text-muted-foreground">or</span>
              <div className="flex-1 h-px bg-border" />
            </div>

            {/* Sign Up Link */}
            <p className="text-center text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-primary hover:underline font-semibold"
              >
                Sign up for free
              </Link>
            </p>
          </div>
        </div>

        {/* Right Side - Benefits (visible only on md and above) */}
        <div className="hidden md:flex flex-1 bg-gradient-to-br from-primary-900 to-primary-800 text-white items-center justify-center px-8 py-12">
          <div className="max-w-md">
            <h2 className="text-4xl font-bold mb-6">
              Trade Across Africa Today
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Join thousands of businesses accessing opportunities across 54
              African nations through the AFCFTA Digital Trade Portal.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-white/90">Real-time market data</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-white/90">Verified business network</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-white/90">Secure payments</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-white/90">24/7 support</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-white/90">AI-powered insights</span>
              </div>
            </div>

            <div className="bg-white/10 border border-white/20 rounded-xl p-6 backdrop-blur-sm">
              <p className="text-white/80 italic mb-4">
                "This platform made it easy for me to find suppliers across
                Africa. The verification process gave me confidence."
              </p>
              <div className="text-sm font-semibold">— Samuel K., Nigeria</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-primary-900 text-white border-t border-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-sm text-white/80">
          <p>
            © 2025 National AFCFTA Digital Trade Platform. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
