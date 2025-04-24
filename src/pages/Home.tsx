
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight, Utensils, Truck, Users } from 'lucide-react';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-foodie-dark text-white">
        <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9')] bg-cover bg-center"></div>
        <div className="relative container mx-auto px-4 py-20 md:py-32 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Street Food with Soul
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mb-10 animate-fade-in">
            Experience the vibrant taste of authentic Australian street food, crafted with love and served with passion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <Button asChild size="lg" className="bg-foodie-orange hover:bg-foodie-red text-white">
              <Link to="/menu">View Our Menu</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent hover:bg-white/10 border-white text-white">
              <Link to="/order">Order Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Intro Section */}
      <section className="py-16 md:py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Welcome to <span className="text-foodie-orange">Hoodie & Foodie</span></h2>
            <div className="w-24 h-1 bg-foodie-orange mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              A food truck experience unlike any other, bringing gourmet street food to the streets of Australia.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="bg-foodie-yellow/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="h-8 w-8 text-foodie-orange" />
              </div>
              <h3 className="text-xl font-bold mb-3">Delicious Food</h3>
              <p className="text-gray-600">
                Crafted with fresh, locally-sourced ingredients and inspired by global flavors.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="bg-foodie-yellow/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-foodie-orange" />
              </div>
              <h3 className="text-xl font-bold mb-3">On The Go</h3>
              <p className="text-gray-600">
                Find us at different locations across Australia, bringing good food wherever we go.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="bg-foodie-yellow/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-foodie-orange" />
              </div>
              <h3 className="text-xl font-bold mb-3">Community</h3>
              <p className="text-gray-600">
                More than just food, we're building a community of food lovers across Australia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu Section */}
      <section className="py-16 bg-gray-50 hero-pattern">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Popular Items</h2>
            <div className="w-24 h-1 bg-foodie-orange mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              These crowd favorites keep our customers coming back for more.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured Item 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md group hover:shadow-lg transition-all">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd" 
                  alt="Classic Burger" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-bold">Classic Burger</h3>
                  <span className="text-foodie-orange font-bold">$12.99</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Premium beef patty with cheese, lettuce, tomato, and our special sauce.
                </p>
                <Button asChild className="w-full bg-foodie-orange hover:bg-foodie-red text-white">
                  <Link to="/menu">View Menu</Link>
                </Button>
              </div>
            </div>

            {/* Featured Item 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md group hover:shadow-lg transition-all">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1541592106381-b31e9677c0e5" 
                  alt="Loaded Fries" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-bold">Loaded Fries</h3>
                  <span className="text-foodie-orange font-bold">$9.99</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Crispy fries topped with cheese sauce, bacon bits, and green onions.
                </p>
                <Button asChild className="w-full bg-foodie-orange hover:bg-foodie-red text-white">
                  <Link to="/menu">View Menu</Link>
                </Button>
              </div>
            </div>

            {/* Featured Item 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md group hover:shadow-lg transition-all">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58" 
                  alt="Milkshake" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-bold">Signature Shake</h3>
                  <span className="text-foodie-orange font-bold">$6.99</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Creamy vanilla milkshake topped with whipped cream and sprinkles.
                </p>
                <Button asChild className="w-full bg-foodie-orange hover:bg-foodie-red text-white">
                  <Link to="/menu">View Menu</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-foodie-orange hover:bg-foodie-red text-white">
              <Link to="/menu" className="flex items-center gap-2">
                Explore Full Menu <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-foodie-orange text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Order?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            We're just a click away. Order now and experience the taste of Hoodie & Foodie!
          </p>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-foodie-orange">
            <Link to="/order">Order Online Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
