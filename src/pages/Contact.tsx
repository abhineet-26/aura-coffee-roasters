import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for reaching out. We will get back to you shortly.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-primary py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-4">Get in Touch</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Have a question about our coffee, an order, or wholesale? We'd love to hear from you.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="flex flex-col space-y-8">
            <h2 className="text-2xl font-serif font-bold text-secondary mb-4">Contact Information</h2>
            
            <div className="flex items-start space-x-4">
              <div className="bg-white p-3 rounded-full shadow-sm text-accent">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-medium text-secondary mb-1">Our Roastery</h3>
                <p className="text-gray-600">123 Coffee Lane<br />Seattle, WA 98101<br />United States</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-white p-3 rounded-full shadow-sm text-accent">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-medium text-secondary mb-1">Email Us</h3>
                <p className="text-gray-600">hello@auraroasters.com<br />support@auraroasters.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-white p-3 rounded-full shadow-sm text-accent">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-medium text-secondary mb-1">Call Us</h3>
                <p className="text-gray-600">+1 (555) 123-4567<br />Mon-Fri, 9am-5pm PST</p>
              </div>
            </div>

            <div className="mt-8">
              <img 
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800" 
                alt="Coffee shop interior" 
                className="rounded-sm shadow-md w-full h-64 object-cover"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-serif font-bold text-secondary mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-sm px-4 py-3 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-sm px-4 py-3 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-sm px-4 py-3 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-colors"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full border border-gray-300 rounded-sm px-4 py-3 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-colors resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-secondary text-primary py-4 rounded-sm font-medium uppercase tracking-wider hover:bg-accent transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
