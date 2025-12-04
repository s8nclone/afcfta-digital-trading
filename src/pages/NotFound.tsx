import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { AlertCircle, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <Layout>
      <div className="min-h-[calc(100vh-200px)] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-lg">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <AlertCircle className="w-10 h-10 text-destructive" />
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold mb-2">404</h1>

          <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>

          <p className="text-lg text-muted-foreground mb-8">
            The page you're looking for doesn't exist. Let's get you back to the AfCFTA Digital Trade Portal.
          </p>

          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
