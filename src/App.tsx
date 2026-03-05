import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingPopup from "@/components/BookingPopup";
import Index from "./pages/Index";
import About from "./pages/About";
import Speaking from "./pages/Speaking";
import Impact from "./pages/Impact";
import Media from "./pages/Media";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/speaking" element={<Speaking />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/media" element={<Media />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <BookingPopup />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
