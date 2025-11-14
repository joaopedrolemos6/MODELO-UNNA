import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Stores from "./pages/Stores";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Policy from "./pages/Policy";
import Sutias from "./pages/categories/Sutias";
import Calcinhas from "./pages/categories/Calcinhas";
import Modeladores from "./pages/categories/Modeladores";
import Pijamas from "./pages/categories/Pijamas";
import Sport from "./pages/categories/Sport";
import Infantil from "./pages/categories/Infantil";
import Praia from "./pages/categories/Praia";
import Maternidade from "./pages/categories/Maternidade";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:slug" element={<ProductDetail />} />
              <Route path="/sutias" element={<Sutias />} />
              <Route path="/calcinhas" element={<Calcinhas />} />
              <Route path="/modeladores" element={<Modeladores />} />
              <Route path="/pijamas" element={<Pijamas />} />
              <Route path="/sport" element={<Sport />} />
              <Route path="/infantil" element={<Infantil />} />
              <Route path="/praia" element={<Praia />} />
              <Route path="/maternidade" element={<Maternidade />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/stores" element={<Stores />} />
              <Route path="/about" element={<About />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/policy" element={<Policy />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
