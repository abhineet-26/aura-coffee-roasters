import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { ShoppingBag, Star, Truck, ShieldCheck, RefreshCcw, ChevronRight, ChevronLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-primary">
        <div className="text-center">
          <h2 className="text-2xl font-serif font-bold text-secondary mb-4">Product Not Found</h2>
          <Link to="/shop" className="text-accent hover:underline">Return to Shop</Link>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="min-h-screen bg-primary py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="flex text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRight size={16} className="mx-1" />
                <Link to="/shop" className="hover:text-secondary transition-colors">Shop</Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <ChevronRight size={16} className="mx-1" />
                <span className="text-secondary font-medium">{product.title}</span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Product Images */}
          <div className="flex flex-col space-y-4">
            <div className="relative aspect-square overflow-hidden bg-gray-100 rounded-lg">
              <img
                src={product.images[currentImageIndex]}
                alt={product.title}
                className="w-full h-full object-cover object-center"
              />
              {product.images.length > 1 && (
                <>
                  <button 
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full text-secondary hover:bg-white transition-colors shadow-sm"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full text-secondary hover:bg-white transition-colors shadow-sm"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
              {product.compareAtPrice && (
                <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 text-sm font-bold uppercase tracking-wider rounded-sm z-10">
                  Sale
                </div>
              )}
            </div>
            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex space-x-4 overflow-x-auto pb-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`relative w-24 aspect-square rounded-md overflow-hidden flex-shrink-0 ${
                      currentImageIndex === idx ? 'ring-2 ring-accent' : 'opacity-70 hover:opacity-100'
                    } transition-all`}
                  >
                    <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <p className="text-sm text-gray-500 uppercase tracking-widest mb-2">{product.vendor}</p>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-4">{product.title}</h1>
            
            {/* Reviews */}
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex text-accent">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <span className="text-sm text-gray-500 underline cursor-pointer">128 Reviews</span>
            </div>

            {/* Price */}
            <div className="flex items-end space-x-4 mb-8">
              <span className="text-3xl font-medium text-secondary">${product.price.toFixed(2)}</span>
              {product.compareAtPrice && (
                <span className="text-xl text-gray-400 line-through mb-1">${product.compareAtPrice.toFixed(2)}</span>
              )}
            </div>

            {/* Description */}
            <div className="prose prose-sm text-gray-600 mb-8 leading-relaxed">
              <p>{product.description}</p>
            </div>

            {/* Variants (Mock) */}
            {product.type === 'Coffee Beans' && (
              <div className="mb-8">
                <h3 className="text-sm font-medium text-secondary uppercase tracking-wider mb-3">Grind Type</h3>
                <div className="grid grid-cols-2 gap-3">
                  {['Whole Bean', 'Espresso', 'Filter / Drip', 'French Press'].map((grind, idx) => (
                    <button
                      key={idx}
                      className={`py-3 px-4 text-sm border rounded-sm transition-colors ${
                        idx === 0 
                          ? 'border-secondary bg-secondary text-primary font-medium' 
                          : 'border-gray-300 text-gray-600 hover:border-secondary'
                      }`}
                    >
                      {grind}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity & Add to Cart */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-10">
              <div className="flex items-center border border-gray-300 rounded-sm h-14 w-full sm:w-32">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 text-gray-500 hover:text-secondary transition-colors"
                >
                  -
                </button>
                <input 
                  type="number" 
                  value={quantity} 
                  readOnly 
                  className="w-full text-center bg-transparent text-secondary font-medium focus:outline-none"
                />
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 text-gray-500 hover:text-secondary transition-colors"
                >
                  +
                </button>
              </div>
              <button 
                onClick={() => addToCart(product, quantity)}
                className="flex-1 bg-accent hover:bg-accent-hover text-white h-14 rounded-sm font-medium uppercase tracking-wider transition-colors flex items-center justify-center space-x-2 cursor-pointer"
              >
                <ShoppingBag size={20} />
                <span>Add to Cart - ${(product.price * quantity).toFixed(2)}</span>
              </button>
            </div>

            {/* Trust Signals */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t border-gray-200">
              <div className="flex items-center space-x-3 text-gray-600">
                <Truck size={20} className="text-accent" />
                <span className="text-sm">{product.shippingInfo}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <ShieldCheck size={20} className="text-accent" />
                <span className="text-sm">Secure Checkout</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <RefreshCcw size={20} className="text-accent" />
                <span className="text-sm">30-Day Returns</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
