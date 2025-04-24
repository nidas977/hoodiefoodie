
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useCart } from '@/hooks/useCart';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { items } = useCart();
  
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-foodie-orange">Hoodie <span className="text-foodie-red">&</span> Foodie</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="font-medium text-gray-700 hover:text-foodie-orange transition-colors">
            Home
          </Link>
          <Link to="/menu" className="font-medium text-gray-700 hover:text-foodie-orange transition-colors">
            Menu
          </Link>
          <Link to="/order" className="font-medium text-gray-700 hover:text-foodie-orange transition-colors">
            Order Online
          </Link>
          <Link to="/about" className="font-medium text-gray-700 hover:text-foodie-orange transition-colors">
            About
          </Link>
          <Link to="/contact" className="font-medium text-gray-700 hover:text-foodie-orange transition-colors">
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link to="/cart" className="relative">
            <ShoppingCart className="h-6 w-6 text-foodie-dark hover:text-foodie-orange transition-colors" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-foodie-red text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          <Button asChild className="bg-foodie-orange hover:bg-foodie-red text-white">
            <Link to="/order">Order Now</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <Link to="/cart" className="relative">
            <ShoppingCart className="h-6 w-6 text-foodie-dark hover:text-foodie-orange transition-colors" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-foodie-red text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          <button 
            onClick={toggleMenu} 
            className="text-gray-700 hover:text-foodie-orange transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4">
          <div className="container mx-auto px-4 flex flex-col gap-4">
            <Link 
              to="/" 
              className="font-medium text-gray-700 hover:text-foodie-orange transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/menu" 
              className="font-medium text-gray-700 hover:text-foodie-orange transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Menu
            </Link>
            <Link 
              to="/order" 
              className="font-medium text-gray-700 hover:text-foodie-orange transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Order Online
            </Link>
            <Link 
              to="/about" 
              className="font-medium text-gray-700 hover:text-foodie-orange transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="font-medium text-gray-700 hover:text-foodie-orange transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button asChild className="mt-2 bg-foodie-orange hover:bg-foodie-red text-white">
              <Link to="/order" onClick={() => setIsMenuOpen(false)}>Order Now</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
