
import React from 'react';
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Instagram, Twitter, WhatsApp } from 'lucide-react';

const ContactPage = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/61412345678', '_blank');
  };

  return (
    <div>
      {/* Contact Header */}
      <section className="bg-foodie-orange text-white py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <div className="w-16 h-1 bg-foodie-orange mb-6"></div>
              <p className="text-gray-700 mb-8">
                We're always excited to hear from our customers. Whether you have questions about our menu, want to provide feedback, or are interested in hiring our food truck for an event, we're here to help!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-foodie-yellow/50 w-12 h-12 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-foodie-orange" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <a href="tel:+61412345678" className="text-foodie-orange hover:underline">+61 412 345 678</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-foodie-yellow/50 w-12 h-12 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-foodie-orange" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <a href="mailto:info@hoodieandfoodie.com.au" className="text-foodie-orange hover:underline">info@hoodieandfoodie.com.au</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-foodie-yellow/50 w-12 h-12 rounded-full flex items-center justify-center mt-1">
                    <MapPin className="h-6 w-6 text-foodie-orange" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Locations</h3>
                    <p className="text-gray-700">
                      We move around! Check our social media for daily locations or follow our schedule below.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-foodie-yellow/50 w-12 h-12 rounded-full flex items-center justify-center">
                    <WhatsApp className="h-6 w-6 text-foodie-orange" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">WhatsApp</h3>
                    <p className="text-gray-700">
                      The fastest way to reach us for orders and inquiries.
                    </p>
                    <Button 
                      onClick={handleWhatsAppClick}
                      className="bg-[#25D366] hover:bg-[#128C7E] mt-2 text-white flex items-center gap-2"
                    >
                      <WhatsApp className="h-4 w-4" />
                      Chat on WhatsApp
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Follow Our Journey</h2>
              <div className="w-16 h-1 bg-foodie-orange mb-6"></div>
              <p className="text-gray-700 mb-8">
                Follow us on social media to stay updated on our latest locations, special menu items, and promotions!
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-10">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 border rounded-lg hover:border-foodie-orange hover:bg-gray-50 transition-colors"
                >
                  <Instagram className="h-6 w-6 text-foodie-orange" />
                  <span className="font-medium">@hoodieandfoodie</span>
                </a>
                
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 border rounded-lg hover:border-foodie-orange hover:bg-gray-50 transition-colors"
                >
                  <Twitter className="h-6 w-6 text-foodie-orange" />
                  <span className="font-medium">@hoodiefoodie</span>
                </a>
              </div>
              
              <div className="bg-gray-100 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Weekly Schedule</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">Monday:</span>
                    <span>Sydney CBD (Martin Place, 11am-3pm)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Tuesday:</span>
                    <span>North Sydney (Miller St, 11am-3pm)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Wednesday:</span>
                    <span>Parramatta (Church St, 11am-3pm)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Thursday:</span>
                    <span>Bondi Beach (Campbell Pde, 12pm-8pm)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Friday:</span>
                    <span>Sydney CBD (Pitt St, 11am-8pm)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Saturday:</span>
                    <span>Manly Beach (The Corso, 11am-8pm)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sunday:</span>
                    <span>Circular Quay (Alfred St, 11am-5pm)</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-4 italic">
                  * Schedule subject to change. Check social media for daily updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Find Us Today</h2>
            <div className="w-24 h-1 bg-foodie-orange mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Our current location is shown on the map below. We update this daily!
            </p>
          </div>

          <div className="h-[450px] w-full rounded-lg overflow-hidden shadow-md">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26522.93295990632!2d151.1997!3d-33.8688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae401e8b983f%3A0x5017d681632ccc0!2sSydney%20NSW%2C%20Australia!5e0!3m2!1sen!2sus!4v1587234666159!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Food Truck Location Map"
            ></iframe>
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-500 italic">
              * Map shows our regular Sydney CBD location. For today's exact location, please check our social media.
            </p>
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Follow Our Food Journey</h2>
            <div className="w-24 h-1 bg-foodie-orange mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Check out our latest posts on Instagram for daily locations and food updates!
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block group relative overflow-hidden rounded-lg"
            >
              <img 
                src="https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb" 
                alt="Instagram post" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity flex items-center justify-center">
                <Instagram className="h-8 w-8 text-white" />
              </div>
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block group relative overflow-hidden rounded-lg"
            >
              <img 
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd" 
                alt="Instagram post" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity flex items-center justify-center">
                <Instagram className="h-8 w-8 text-white" />
              </div>
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block group relative overflow-hidden rounded-lg"
            >
              <img 
                src="https://images.unsplash.com/photo-1561651823-34feb02250e4" 
                alt="Instagram post" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity flex items-center justify-center">
                <Instagram className="h-8 w-8 text-white" />
              </div>
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block group relative overflow-hidden rounded-lg"
            >
              <img 
                src="https://images.unsplash.com/photo-1541592106381-b31e9677c0e5" 
                alt="Instagram post" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity flex items-center justify-center">
                <Instagram className="h-8 w-8 text-white" />
              </div>
            </a>
          </div>
          
          <div className="mt-8 text-center">
            <Button asChild variant="outline" className="border-foodie-orange text-foodie-orange hover:bg-foodie-orange hover:text-white">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Instagram className="h-4 w-4" />
                Follow Us on Instagram
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
