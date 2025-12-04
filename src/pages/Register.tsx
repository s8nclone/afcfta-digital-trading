import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle2, ArrowRight, Mail, User, Building2, Phone } from "lucide-react";

export default function Register() {
  const navigate = useNavigate();
  const [hasSurveyCompleted, setHasSurveyCompleted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    nin: "",
    cac: "",
    terms: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    // Check if survey was completed
    const surveyAnswers = localStorage.getItem("surveyAnswers");
    if (surveyAnswers) {
      setHasSurveyCompleted(true);
    }
  }, []);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name required";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = "Valid email required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number required";
    if (!formData.company.trim()) newErrors.company = "Company name required";
    if (!formData.nin.trim()) newErrors.nin = "NIN required";
    if (!formData.cac.trim()) newErrors.cac = "CAC number required";
    if (!formData.terms)
      newErrors.terms = "You must accept the terms and conditions";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: undefined,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      localStorage.setItem("registrationData", JSON.stringify(formData));
      setSubmitted(true);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  };

  if (!hasSurveyCompleted) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        {/* Header */}
        <header className="w-full bg-primary-900 text-white shadow-sm">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-white rounded flex items-center justify-center font-bold text-primary-900">
                A
              </div>
              <div className="hidden sm:block">
                <div className="font-bold text-base">AFCFTA Digital Trade</div>
                <div className="text-xs opacity-90">National Portal</div>
              </div>
            </button>
          </nav>
        </header>

        {/* Content */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-lg">
            <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <User className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Complete the Trade Assessment First
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              We'd love to understand your business before you register.
              Please complete our quick trade readiness assessment.
            </p>
            <button
              onClick={() => navigate("/survey")}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
            >
              Start Assessment
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        {/* Header */}
        <header className="w-full bg-primary-900 text-white shadow-sm">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-white rounded flex items-center justify-center font-bold text-primary-900">
                A
              </div>
              <div className="hidden sm:block">
                <div className="font-bold text-base">AFCFTA Digital Trade</div>
                <div className="text-xs opacity-90">National Portal</div>
              </div>
            </button>
          </nav>
        </header>

        {/* Content */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-lg">
            <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Registration Complete!
            </h1>
            <p className="text-lg text-muted-foreground mb-2">
              Welcome to AfCFTA Digital Trade, {formData.firstName}!
            </p>
            <p className="text-muted-foreground">
              Check your email for verification details and next steps to start
              trading.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Header */}
      <header className="w-full bg-primary-900 text-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-white rounded flex items-center justify-center font-bold text-primary-900">
              A
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-base">AFCFTA Digital Trade</div>
              <div className="text-xs opacity-90">National Portal</div>
            </div>
          </button>
        </nav>
      </header>

      {/* Main Content - Half Layout */}
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Left Side - Benefits (visible only on md and above) */}
        <div className="hidden md:flex flex-1 bg-gradient-to-br from-primary-900 to-primary-800 text-white items-center justify-center px-8 py-12">
          <div className="max-w-md">
            <h2 className="text-4xl font-bold mb-6">
              Start Trading Across Africa
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Register your business, complete verification, and unlock access to
              the largest digital trade marketplace connecting African businesses.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-white/90">Verified business credentials</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-white/90">Government-backed platform</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-white/90">Secure identity verification</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-white/90">Market access across 54 nations</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-white/90">Real-time trade analytics</span>
              </div>
            </div>

            <div className="bg-white/10 border border-white/20 rounded-xl p-6 backdrop-blur-sm">
              <p className="text-white/80 italic mb-4">
                "Within weeks of registering, I secured suppliers across East Africa.
                The platform is truly transformative for small exporters."
              </p>
              <div className="text-sm font-semibold">— Fatima A., Nigeria</div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 bg-white">
          <div className="w-full max-w-md">
            {/* Welcome Section */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-3">Register Your Business</h1>
              <p className="text-muted-foreground">
                Complete your registration to get verified and start trading across
                AfCFTA markets.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Fields */}
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold mb-2 uppercase tracking-wide">
                    First Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      className={`w-full pl-10 pr-3 py-2 rounded-lg border-2 text-sm transition bg-background placeholder-muted-foreground focus:outline-none ${
                        errors.firstName
                          ? "border-destructive"
                          : "border-border focus:border-primary"
                      }`}
                    />
                  </div>
                  {errors.firstName && (
                    <p className="text-xs text-destructive mt-1">{errors.firstName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-2 uppercase tracking-wide">
                    Last Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      className={`w-full pl-10 pr-3 py-2 rounded-lg border-2 text-sm transition bg-background placeholder-muted-foreground focus:outline-none ${
                        errors.lastName
                          ? "border-destructive"
                          : "border-border focus:border-primary"
                      }`}
                    />
                  </div>
                  {errors.lastName && (
                    <p className="text-xs text-destructive mt-1">{errors.lastName}</p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold mb-2 uppercase tracking-wide">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`w-full pl-10 pr-3 py-2 rounded-lg border-2 text-sm transition bg-background placeholder-muted-foreground focus:outline-none ${
                      errors.email
                        ? "border-destructive"
                        : "border-border focus:border-primary"
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="text-xs text-destructive mt-1">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-semibold mb-2 uppercase tracking-wide">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+234 (701) 234-5678"
                    className={`w-full pl-10 pr-3 py-2 rounded-lg border-2 text-sm transition bg-background placeholder-muted-foreground focus:outline-none ${
                      errors.phone
                        ? "border-destructive"
                        : "border-border focus:border-primary"
                    }`}
                  />
                </div>
                {errors.phone && (
                  <p className="text-xs text-destructive mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Company */}
              <div>
                <label className="block text-xs font-semibold mb-2 uppercase tracking-wide">
                  Company Name *
                </label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company Ltd."
                    className={`w-full pl-10 pr-3 py-2 rounded-lg border-2 text-sm transition bg-background placeholder-muted-foreground focus:outline-none ${
                      errors.company
                        ? "border-destructive"
                        : "border-border focus:border-primary"
                    }`}
                  />
                </div>
                {errors.company && (
                  <p className="text-xs text-destructive mt-1">{errors.company}</p>
                )}
              </div>

              {/* NIN */}
              <div>
                <label className="block text-xs font-semibold mb-2 uppercase tracking-wide">
                  National ID Number (NIN) *
                </label>
                <input
                  type="text"
                  name="nin"
                  value={formData.nin}
                  onChange={handleChange}
                  placeholder="Enter your NIN"
                  className={`w-full px-3 py-2 rounded-lg border-2 text-sm transition bg-background placeholder-muted-foreground focus:outline-none ${
                    errors.nin
                      ? "border-destructive"
                      : "border-border focus:border-primary"
                  }`}
                />
                {errors.nin && (
                  <p className="text-xs text-destructive mt-1">{errors.nin}</p>
                )}
              </div>

              {/* CAC */}
              <div>
                <label className="block text-xs font-semibold mb-2 uppercase tracking-wide">
                  Company Reg. (CAC) *
                </label>
                <input
                  type="text"
                  name="cac"
                  value={formData.cac}
                  onChange={handleChange}
                  placeholder="Enter your CAC number"
                  className={`w-full px-3 py-2 rounded-lg border-2 text-sm transition bg-background placeholder-muted-foreground focus:outline-none ${
                    errors.cac
                      ? "border-destructive"
                      : "border-border focus:border-primary"
                  }`}
                />
                {errors.cac && (
                  <p className="text-xs text-destructive mt-1">{errors.cac}</p>
                )}
              </div>

              {/* Terms & Conditions */}
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                  className="w-5 h-5 rounded border-2 mt-0.5"
                />
                <span className="text-xs text-muted-foreground">
                  I agree to the Terms of Service, Privacy Policy, and AFCFTA Guidelines
                </span>
              </label>
              {errors.terms && (
                <p className="text-xs text-destructive">{errors.terms}</p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary-700 transition flex items-center justify-center gap-2 text-sm"
              >
                Complete Registration
                <ArrowRight size={18} />
              </button>
            </form>

            <p className="text-xs text-muted-foreground text-center mt-6">
              Already registered?{" "}
              <button
                onClick={() => navigate("/login")}
                className="text-primary hover:underline font-semibold"
              >
                Sign in
              </button>
            </p>
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
