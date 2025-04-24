
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Twitter, WhatsApp } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foodie-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Hoodie & Foodie</h3>
            <p className="mb-4 text-gray-300">Serving up delicious, handcrafted street food with soul across Australia.</p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-foodie-orange transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-foodie-orange transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://wa.me/61412345678" target="_blank" rel="noopener noreferrer" className="hover:text-foodie-orange transition-colors">
                <WhatsApp className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-foodie-orange transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-foodie-orange transition-colors">Menu</Link>
              </li>
              <li>
                <Link to="/order" className="hover:text-foodie-orange transition-colors">Order Online</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-foodie-orange transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-foodie-orange transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-foodie-orange" />
                <a href="tel:+61412345678" className="hover:text-foodie-orange transition-colors">+61 412 345 678</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-foodie-orange" />
                <a href="mailto:info@hoodieandfoodie.com.au" className="hover:text-foodie-orange transition-colors">info@hoodieandfoodie.com.au</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-foodie-orange mt-1" />
                <span>Check our social media for today's location!</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Hoodie & Foodie. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
