import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Loading from './components/Loading';
import Contact from './pages/Contact';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';
import FooterSection from './components/footer/FooterSection';
import { CursorProvider } from './components/cursor/CursorProvider';
import { CartProvider } from './context/CartContext';
import { useScrollToTop } from './hooks/useScrollToTop';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProductId, setSelectedProductId] = useState<number>();

  // Scroll to top when page changes
  useScrollToTop(currentPage);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleNavigate = (page: string, productId?: number) => {
    setCurrentPage(page);
    setSelectedProductId(productId);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Hero onNavigate={handleNavigate} />;
      case 'products':
        return <Products onNavigate={handleNavigate} />;
      case 'product-details':
        return <ProductDetails onNavigate={handleNavigate} productId={selectedProductId} />;
      case 'contact':
        return <Contact />;
      case 'checkout':
        return <Checkout onNavigate={handleNavigate} />;
      default:
        return <Hero onNavigate={handleNavigate} />;
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <CartProvider>
      <CursorProvider>
        <div className="min-h-screen">
          <Navbar onNavigate={handleNavigate} currentPage={currentPage} />
          {renderPage()}
          <FooterSection />
        </div>
      </CursorProvider>
    </CartProvider>
  );
}

export default App;