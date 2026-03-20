import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const About = () => {
  return (
    <div className="min-h-screen bg-primary">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=2000"
            alt="Coffee farm"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-secondary/50 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6">Our Story</h1>
          <p className="text-lg md:text-xl text-primary/90 font-light tracking-wide">
            From the high-altitude farms of Colombia to your morning cup.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg text-gray-600 mx-auto leading-relaxed">
            <h2 className="text-3xl font-serif font-bold text-secondary mb-8 text-center">A Passion for the Perfect Cup</h2>
            
            <p className="mb-6">
              Aura Coffee Roasters was founded in 2020 with a simple mission: to source the world's finest coffee beans and roast them with uncompromising attention to detail. What started as a small passion project in a garage has grown into a community of coffee lovers who appreciate the craft.
            </p>
            
            <p className="mb-6">
              We believe that great coffee starts at the source. That's why we partner directly with farmers in Colombia, Ethiopia, and Brazil, ensuring fair wages and supporting sustainable agricultural practices. By cutting out the middlemen, we can guarantee the quality of our beans while empowering the communities that grow them.
            </p>

            <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-8">
              <img 
                src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=800" 
                alt="Roasting process" 
                className="rounded-sm shadow-md w-full h-64 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1495474472205-51f750118cb2?auto=format&fit=crop&q=80&w=800" 
                alt="Brewing coffee" 
                className="rounded-sm shadow-md w-full h-64 object-cover"
              />
            </div>

            <h3 className="text-2xl font-serif font-bold text-secondary mb-6">The Roasting Process</h3>
            
            <p className="mb-6">
              Our roasting philosophy is simple: highlight the unique characteristics of each bean. We don't believe in a one-size-fits-all approach. Instead, we carefully profile each batch, adjusting temperature and airflow to bring out the natural sweetness, acidity, and body of the coffee.
            </p>
            
            <p className="mb-12">
              Every bag of Aura coffee is roasted to order, ensuring that it arrives at your doorstep at peak freshness. We invite you to taste the difference that passion and precision can make.
            </p>

            <div className="text-center">
              <Link 
                to="/shop" 
                className="inline-flex items-center space-x-2 bg-secondary text-primary px-8 py-4 rounded-sm font-medium uppercase tracking-wider hover:bg-accent transition-colors"
              >
                <span>Explore Our Coffees</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
