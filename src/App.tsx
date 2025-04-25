import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CartProvider } from "@/hooks/useCart";
import HomePage from "@/pages/Home";
import MenuPage from "@/pages/Menu";
import OrderPage from "@/pages/Order";
import AboutPage from "@/pages/About";
import ContactPage from "@/pages/Contact";
import CartPage from "@/pages/Cart";
import NotFound from "@/pages/NotFound";
import { ErrorBoundary } from "react-error-boundary";

const queryClient = new QueryClient();

const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div role="alert" className="p-4 text-red-600">
    <h2>Something went wrong:</h2>
    <pre>{error.message}</pre>
    <button
      onClick={resetErrorBoundary}
      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
    >
      Try Again
    </button>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => {
              // Reset logic, e.g., clear cache or reload the app
              queryClient.clear();
            }}
          >
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/menu" element={<MenuPage />} />
                  <Route path="/order" element={<OrderPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </ErrorBoundary>
        </BrowserRouter>
      </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;
