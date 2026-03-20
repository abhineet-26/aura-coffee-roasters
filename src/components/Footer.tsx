import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-secondary text-primary/80 pt-16 pb-8 border-t border-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="font-serif text-3xl font-bold tracking-tight text-primary mb-6 block">
              AURA<span className="text-accent">.</span>
            </Link>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              Premium, sustainably sourced coffee roasted with passion. Elevating your daily ritual.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary/60 hover:text-accent transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-primary/60 hover:text-accent transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-primary/60 hover:text-accent transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-primary font-serif font-semibold text-lg mb-6 tracking-wide">Shop</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/shop" className="hover:text-accent transition-colors">All Coffee</Link></li>
              <li><Link to="/shop?type=espresso" className="hover:text-accent transition-colors">Espresso</Link></li>
              <li><Link to="/shop?type=single-origin" className="hover:text-accent transition-colors">Single Origin</Link></li>
              <li><Link to="/shop?type=equipment" className="hover:text-accent transition-colors">Equipment</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-primary font-serif font-semibold text-lg mb-6 tracking-wide">Support</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/faq" className="hover:text-accent transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="hover:text-accent transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
              <li><Link to="/track" className="hover:text-accent transition-colors">Track Order</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-primary font-serif font-semibold text-lg mb-6 tracking-wide">Stay Awake</h3>
            <p className="text-sm mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form className="flex flex-col space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full bg-transparent border-b border-primary/30 py-2 pl-2 pr-10 text-primary focus:outline-none focus:border-accent transition-colors placeholder:text-primary/40 text-sm"
                  required
                />
                <button type="submit" className="absolute right-0 top-1/2 -translate-y-1/2 text-primary/60 hover:text-accent transition-colors">
                  <Mail size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center text-xs text-primary/50">
          <p>&copy; {new Date().getFullYear()} Aura Coffee Roasters. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
