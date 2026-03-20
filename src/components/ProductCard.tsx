import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../data/products';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  return (
    <div 
      className="group relative flex flex-col overflow-hidden rounded-lg bg-white shadow-sm transition-all hover:shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="relative aspect-[4/5] overflow-hidden bg-gray-100">
        <img
          src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
          alt={product.title}
          className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
        {product.compareAtPrice && (
          <div className="absolute top-3 left-3 bg-accent text-white px-2 py-1 text-xs font-bold uppercase tracking-wider rounded-sm z-10">
            Sale
          </div>
        )}
        
        {/* Quick Add Button */}
        <div className={`absolute bottom-0 left-0 right-0 p-4 transition-transform duration-300 ease-in-out ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
          <button 
            onClick={handleQuickAdd}
            className="w-full bg-secondary text-primary py-3 px-4 flex items-center justify-center space-x-2 font-medium text-sm uppercase tracking-wide hover:bg-accent transition-colors rounded-sm cursor-pointer"
          >
            <ShoppingBag size={16} />
            <span>Quick Add</span>
          </button>
        </div>
      </Link>

      <div className="flex flex-col p-5 flex-grow">
        <div className="mb-1 flex items-center justify-between">
          <p className="text-xs text-gray-500 uppercase tracking-wider">{product.vendor}</p>
        </div>
        <h3 className="text-lg font-serif font-medium text-secondary mb-2 line-clamp-2">
          <Link to={`/product/${product.id}`}>
            {product.title}
          </Link>
        </h3>
        <div className="mt-auto flex items-center space-x-2">
          <span className="text-base font-medium text-secondary">${product.price.toFixed(2)}</span>
          {product.compareAtPrice && (
            <span className="text-sm text-gray-400 line-through">${product.compareAtPrice.toFixed(2)}</span>
          )}
        </div>
      </div>
    </div>
  );
};
