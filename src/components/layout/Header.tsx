import React from 'react';
import { ShoppingCart, Menu as MenuIcon, X, Hotel } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface HeaderProps {
  totalItems: number;
  onCartClick: () => void;
  activeSection: string;
  onSectionChange: (section: string) => void;
  onLogout: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  totalItems, 
  onCartClick, 
  activeSection, 
  onSectionChange,
  onLogout
}) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'Menu' },
    { id: 'recipes', label: 'Preparing Methods' },
    { id: 'about', label: 'About' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => onSectionChange('home')}
        >
          <Hotel className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg tracking-tight hidden sm:inline-block">Haile Grand</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onSectionChange(link.id)}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === link.id ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="relative"
            onClick={onCartClick}
          >
            <ShoppingCart className="h-5 w-5" />
            {totalItems > 0 && (
              <Badge 
                className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-[10px]"
              >
                {totalItems}
              </Badge>
            )}
          </Button>

          <Button variant="outline" size="sm" onClick={onLogout} className="hidden sm:flex">
            Logout
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden border-b bg-background">
          <nav className="flex flex-col p-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onSectionChange(link.id);
                  setIsMenuOpen(false);
                }}
                className={`px-4 py-2 text-left text-sm font-medium transition-colors hover:bg-accent rounded-md ${
                  activeSection === link.id ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={onLogout}
              className="px-4 py-2 text-left text-sm font-medium text-destructive hover:bg-destructive/10 rounded-md"
            >
              Logout
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
