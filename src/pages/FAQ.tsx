import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How long does shipping take?",
    answer: "We process and ship all orders within 1-2 business days. Standard shipping typically takes 3-5 business days within the contiguous United States. Expedited shipping options are available at checkout."
  },
  {
    question: "Do you ship internationally?",
    answer: "Currently, we only ship within the United States and Canada. We are working hard to expand our shipping capabilities globally in the near future."
  },
  {
    question: "What is your return policy?",
    answer: "We want you to be completely satisfied with your coffee. If you are not happy with your purchase, please contact us within 30 days of receiving your order, and we will make it right with a replacement or refund."
  },
  {
    question: "How should I store my coffee beans?",
    answer: "For optimal freshness, store your coffee beans in an airtight container at room temperature, away from direct sunlight and moisture. We do not recommend storing coffee in the refrigerator or freezer as it can introduce moisture and absorb odors."
  },
  {
    question: "Is your coffee ethically sourced?",
    answer: "Yes, absolutely. We partner directly with farmers and cooperatives to ensure fair wages and sustainable agricultural practices. Transparency and ethical sourcing are at the core of our business."
  },
  {
    question: "Do you offer wholesale pricing?",
    answer: "Yes, we offer wholesale partnerships for cafes, restaurants, and offices. Please visit our Contact page and select 'Wholesale Inquiry' in the subject line to get in touch with our team."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-primary py-12 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-600">Find answers to common questions about our coffee, shipping, and more.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-medium text-secondary pr-8">{faq.question}</span>
                <span className="text-accent flex-shrink-0">
                  {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-secondary text-primary p-8 rounded-lg">
          <h2 className="text-2xl font-serif font-bold mb-4">Still have questions?</h2>
          <p className="mb-6 text-primary/80">We're here to help. Reach out to our customer support team.</p>
          <a 
            href="/contact" 
            className="inline-block bg-accent hover:bg-accent-hover text-white px-8 py-3 rounded-sm font-medium uppercase tracking-wider transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};
