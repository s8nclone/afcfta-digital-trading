import Benefits from "@/components/Benefits";
import ContactSection from "@/components/ContactSection";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import MonitoringDashboard from "@/components/MonitoringDashboard";
import PlatformFeatures from "@/components/PlatformFeatures";
import PlatformOverview from "@/components/PlatformOverview";
import QuickActions from "@/components/QuickActions";
import TradingAnalytics from "@/components/TradingAnalytics";
import VerifiedBadge from "@/components/VerifiedBadge";


export default function Landing() {
  return (
    <div>
      <HeroSection />
      <PlatformOverview />
      <VerifiedBadge />
      <QuickActions />
      <HowItWorks />
      <PlatformFeatures />
      <Benefits />
      <MonitoringDashboard />
      <TradingAnalytics />
      <FAQ />
      <ContactSection />
      <FinalCTA />
    </div>
  );
}