import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Menu, X, Search, User } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-primary/90 backdrop-blur-md border-b border-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-secondary hover:text-accent transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-secondary hover:text-accent font-medium text-sm tracking-wide uppercase transition-colors">Home</Link>
            <Link to="/shop" className="text-secondary hover:text-accent font-medium text-sm tracking-wide uppercase transition-colors">Shop All</Link>
            <Link to="/about" className="text-secondary hover:text-accent font-medium text-sm tracking-wide uppercase transition-colors">Our Story</Link>
          </nav>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <Link to="/" className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-secondary">
              AURA<span className="text-accent">.</span>
            </Link>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <button className="text-secondary hover:text-accent transition-colors hidden sm:block">
              <Search size={20} />
            </button>
            <button className="text-secondary hover:text-accent transition-colors hidden sm:block">
              <User size={20} />
            </button>
            <button 
              onClick={() => setIsCartOpen(true)} 
              className="text-secondary hover:text-accent transition-colors relative flex items-center cursor-pointer"
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-accent text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary border-b border-secondary/10 absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3 flex flex-col">
            <Link to="/" className="block px-3 py-3 text-base font-medium text-secondary hover:bg-secondary/5 uppercase tracking-wide" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/shop" className="block px-3 py-3 text-base font-medium text-secondary hover:bg-secondary/5 uppercase tracking-wide" onClick={() => setIsMenuOpen(false)}>Shop All</Link>
            <Link to="/about" className="block px-3 py-3 text-base font-medium text-secondary hover:bg-secondary/5 uppercase tracking-wide" onClick={() => setIsMenuOpen(false)}>Our Story</Link>
            <Link to="/contact" className="block px-3 py-3 text-base font-medium text-secondary hover:bg-secondary/5 uppercase tracking-wide" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
};
