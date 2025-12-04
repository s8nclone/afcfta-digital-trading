import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Mail, ArrowLeft, Bell } from "lucide-react";
import { useState } from "react";

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleNotify = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <Layout>
      <div className="min-h-[calc(100vh-200px)] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-lg">
          <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <Bell className="w-10 h-10 text-primary" />
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Coming Soon</h1>

          <p className="text-lg text-muted-foreground mb-8">
            We're building exciting new features for the AfCFTA Digital Trade Portal. Get notified when they're ready.
          </p>

          <form onSubmit={handleNotify} className="mb-12">
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <Mail size={20} />
                <span className="hidden sm:inline">Notify Me</span>
                <span className="sm:hidden">Notify</span>
              </button>
            </div>
            {submitted && (
              <p className="text-sm text-primary font-semibold">
                ✓ Thanks! We'll notify you when this launches.
              </p>
            )}
          </form>

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:underline font-semibold"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
}
