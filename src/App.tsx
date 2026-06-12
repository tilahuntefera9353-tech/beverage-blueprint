import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Menu } from '@/components/menu/Menu';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Utensils, Beaker, Info, ShieldCheck, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HOTEL_INFO } from './lib/constants';
import { Toaster } from '@/components/ui/sonner';
import { Login } from '@/components/auth/Login';
import { HotelInfo } from '@/components/info/HotelInfo';
import { BeverageMethods } from '@/components/recipes/BeverageMethods';
import { useCart } from '@/hooks/use-cart';
import { CartDrawer } from '@/components/cart/CartDrawer';

function App() {
  const [user, setUser] = useState<string | null>(() => localStorage.getItem('haile-grand-user'));
  const [activeSection, setActiveSection] = useState('home');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart, totalItems, totalPrice, addToCart, removeFromCart, updateQuantity, clearCart } = useCart();

  const handleLogin = (account: string) => {
    setUser(account);
    localStorage.setItem('haile-grand-user', account);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('haile-grand-user');
    setActiveSection('home');
  };

  if (!user) {
    return (
      <>
        <Login onLogin={handleLogin} />
        <Toaster position="top-center" richColors />
      </>
    );
  }

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Hero onExploreMenu={() => setActiveSection('menu')} />;
      case 'menu':
        return <Menu onAddToCart={(item) => {
          addToCart(item);
          setIsCartOpen(true);
        }} />;
      case 'recipes':
        return <BeverageMethods />;
      case 'about':
        return <HotelInfo />;
      default:
        return <Hero onExploreMenu={() => setActiveSection('menu')} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header 
        totalItems={totalItems} 
        onCartClick={() => setIsCartOpen(true)} 
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        onLogout={handleLogout}
      />

      <main className="flex-grow container mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="border-t py-8 bg-muted/30">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} {HOTEL_INFO.name}. Addis Ababa, Ethiopia.
        </div>
      </footer>

      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        totalPrice={totalPrice}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
        onClear={clearCart}
      />

      <Toaster position="top-center" richColors />
    </div>
  );
}

const Hero: React.FC<{ onExploreMenu: () => void }> = ({ onExploreMenu }) => {
  return (
    <div className="space-y-12">
      <section className="text-center py-12 space-y-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary text-sm font-bold rounded-full mb-4"
        >
          <div className="flex items-center gap-0.5 border-r border-primary/20 pr-2 mr-1">
            {[...Array(HOTEL_INFO.starRating)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-primary" />
            ))}
          </div>
          Welcome to Haile Grand Addis Ababa Hotel dear valuable guest
        </motion.div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Excellence in <span className="text-primary italic">Service</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          We are delighted to have you with us. Explore our world-class dining and handcrafted beverages.
        </p>
        <div className="pt-6 flex flex-wrap justify-center gap-4">
          <Button size="lg" className="h-14 px-8 text-lg gap-2" onClick={onExploreMenu}>
            Explore Our Menu <ArrowRight className="h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="h-14 px-8 text-lg" onClick={() => window.scrollTo({ top: 1000, behavior: 'smooth' })}>
            View Beverage Methods
          </Button>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: Utensils, title: "Our Menu", desc: "Local & International" },
          { icon: Beaker, title: "Methods", desc: "Mixology & Brewing" },
          { icon: ShieldCheck, title: "Quality", desc: "Highest Standards" },
          { icon: Info, title: "Info", desc: "Hotel Information" }
        ].map((feat, i) => (
          <div key={i} className="p-6 border rounded-2xl bg-card space-y-3">
            <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
              <feat.icon className="h-5 w-5" />
            </div>
            <h3 className="font-bold">{feat.title}</h3>
            <p className="text-sm text-muted-foreground">{feat.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
