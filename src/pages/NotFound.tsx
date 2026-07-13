import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center max-w-md">
        <h1 className="mb-4 text-4xl sm:text-5xl font-bold text-foreground">404</h1>
        <p className="mb-6 text-base sm:text-xl text-muted-foreground">
          Oops! Page not found
        </p>
        <Button asChild className="min-h-[44px]">
          <a href="/" aria-label="Return to home page">
            Return to Home
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
