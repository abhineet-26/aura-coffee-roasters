import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { ArrowRight, Star, ShieldCheck, Truck, RefreshCcw } from 'lucide-react';
import { motion } from 'motion/react';

export const Home = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=2000"
            alt="Coffee beans roasting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-secondary/60 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-serif font-bold text-primary mb-6 leading-tight"
          >
            Awaken Your Senses.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-primary/90 mb-10 max-w-2xl font-light tracking-wide"
          >
            Artisan roasted coffee sourced from sustainable farms around the globe. Experience the perfect cup, every time.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link 
              to="/shop" 
              className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-sm font-medium uppercase tracking-wider transition-colors flex items-center justify-center space-x-2"
            >
              <span>Shop Now</span>
              <ArrowRight size={18} />
            </Link>
            <Link 
              to="/about" 
              className="bg-transparent border border-primary text-primary hover:bg-primary hover:text-secondary px-8 py-4 rounded-sm font-medium uppercase tracking-wider transition-colors flex items-center justify-center"
            >
              Our Story
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center space-y-3">
              <div className="bg-primary p-4 rounded-full text-accent">
                <Truck size={28} />
              </div>
              <h3 className="font-serif font-semibold text-secondary">Free Shipping</h3>
              <p className="text-sm text-gray-500">On orders over $50</p>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <div className="bg-primary p-4 rounded-full text-accent">
                <ShieldCheck size={28} />
              </div>
              <h3 className="font-serif font-semibold text-secondary">Secure Checkout</h3>
              <p className="text-sm text-gray-500">100% secure payment</p>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <div className="bg-primary p-4 rounded-full text-accent">
                <RefreshCcw size={28} />
              </div>
              <h3 className="font-serif font-semibold text-secondary">30-Day Returns</h3>
              <p className="text-sm text-gray-500">Not satisfied? Return it.</p>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <div className="bg-primary p-4 rounded-full text-accent">
                <Star size={28} />
              </div>
              <h3 className="font-serif font-semibold text-secondary">Premium Quality</h3>
              <p className="text-sm text-gray-500">Sustainably sourced</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-4">Featured Roasts</h2>
              <p className="text-gray-600 max-w-2xl">Discover our most loved blends and single-origin coffees, carefully selected for your daily ritual.</p>
            </div>
            <Link to="/shop" className="hidden md:flex items-center space-x-2 text-accent font-medium hover:text-secondary transition-colors uppercase tracking-wider text-sm">
              <span>View All</span>
              <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-10 text-center md:hidden">
            <Link to="/shop" className="inline-flex items-center space-x-2 text-accent font-medium hover:text-secondary transition-colors uppercase tracking-wider text-sm">
              <span>View All Products</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* USP / Story Section */}
      <section className="py-24 bg-secondary text-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=1000" 
                alt="Pour over coffee" 
                className="rounded-sm shadow-2xl object-cover h-[600px] w-full"
              />
            </div>
            <div className="order-1 lg:order-2 flex flex-col justify-center">
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 leading-tight">Crafted with Intention. Roasted with Passion.</h2>
              <p className="text-primary/80 mb-6 text-lg font-light leading-relaxed">
                At Aura, we believe that every cup of coffee tells a story. From the high-altitude farms where the cherries are hand-picked, to the meticulous roasting process in our facility.
              </p>
              <p className="text-primary/80 mb-10 text-lg font-light leading-relaxed">
                We partner directly with farmers, ensuring fair wages and sustainable practices. Our commitment to quality means you get the freshest, most flavorful coffee possible.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center space-x-3">
                  <div className="bg-accent/20 p-2 rounded-full text-accent">
                    <Star size={20} />
                  </div>
                  <span className="font-medium tracking-wide">100% Arabica Beans</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="bg-accent/20 p-2 rounded-full text-accent">
                    <Star size={20} />
                  </div>
                  <span className="font-medium tracking-wide">Ethically Sourced</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="bg-accent/20 p-2 rounded-full text-accent">
                    <Star size={20} />
                  </div>
                  <span className="font-medium tracking-wide">Roasted to Order</span>
                </li>
              </ul>
              <div>
                <Link to="/about" className="inline-block border-b-2 border-accent text-accent hover:text-primary hover:border-primary transition-colors pb-1 font-medium uppercase tracking-wider">
                  Read Our Story
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-16">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: "Sarah J.", text: "The Signature Espresso Blend is incredible. It has completely transformed my morning routine. Smooth, rich, and never bitter." },
              { name: "Michael T.", text: "I've tried many specialty coffees, but the Ethiopian Yirgacheffe from Aura is on another level. The floral notes are so distinct." },
              { name: "Emily R.", text: "Fast shipping, beautiful packaging, and the coffee is exceptionally fresh. You can tell they roast it right before sending." }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center relative">
                <div className="flex text-accent mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                </div>
                <p className="text-gray-600 italic mb-8 flex-grow">"{testimonial.text}"</p>
                <p className="font-serif font-bold text-secondary uppercase tracking-wider text-sm">{testimonial.name}</p>
                <div className="absolute -bottom-4 bg-accent text-white px-3 py-1 text-xs font-bold rounded-full flex items-center space-x-1">
                  <ShieldCheck size={14} />
                  <span>Verified Buyer</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
