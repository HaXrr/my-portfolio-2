import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import FloatingGeometry from "@/components/floating-geometry";
import InteractiveCursor from "@/components/interactive-cursor";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ProjectsSection from "@/components/projects-section";
import BlogSection from "@/components/blog-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <div className="relative min-h-screen overflow-x-hidden">
            <FloatingGeometry />
            <Navigation />
            <main>
              <HeroSection />
              <AboutSection />
              <ProjectsSection />
              <BlogSection />
              <ContactSection />
            </main>
            <Footer />
          </div>
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
