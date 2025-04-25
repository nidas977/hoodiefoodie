
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight, Utensils, Truck, Pizza } from 'lucide-react';
import { menuItems } from '@/data/menuItems';

const HomePage = () => {
  // Get the most popular items from the menu (first 3)
  const popularItems = menuItems.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-foodie-dark text-white min-h-[80vh] flex items-center">
        <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1466721591366-2d5fba72006d')] bg-cover bg-center"></div>
        <div className="relative container mx-auto px-4 py-20 md:py-32 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Street Food on Wheels
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mb-10 animate-fade-in">
            Bringing authentic flavors to the streets of Australia. Find us at your favorite spots around town!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <Button asChild size="lg" className="bg-foodie-orange hover:bg-foodie-red text-white">
              <Link to="/menu">Explore Menu</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent hover:bg-white/10 border-white text-white">
              <Link to="/order">Order Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Intro Section */}
      <section className="py-16 md:py-20 bg-foodie-yellow/20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Welcome to <span className="text-foodie-orange">Hoodie & Foodie</span></h2>
            <div className="w-24 h-1 bg-foodie-orange mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Your favorite food truck bringing gourmet street food vibes to Australia's best spots.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="bg-foodie-yellow w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Pizza className="h-8 w-8 text-foodie-orange" />
              </div>
              <h3 className="text-xl font-bold mb-3">Fresh & Hot</h3>
              <p className="text-gray-600">
                Made fresh daily with locally-sourced ingredients and authentic recipes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="bg-foodie-yellow w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-foodie-orange" />
              </div>
              <h3 className="text-xl font-bold mb-3">Food Truck Life</h3>
              <p className="text-gray-600">
                Find us cruising through different locations. Follow us for daily spots!
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="bg-foodie-yellow w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="h-8 w-8 text-foodie-orange" />
              </div>
              <h3 className="text-xl font-bold mb-3">Street Food Culture</h3>
              <p className="text-gray-600">
                Experience authentic street food with a modern Australian twist.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu Section - Now using actual menu items */}
      <section className="py-16 bg-white hero-pattern">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Today's Specials</h2>
            <div className="w-24 h-1 bg-foodie-orange mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Fresh from our food truck, straight to your plate!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md group hover:shadow-lg transition-all">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <span className="text-foodie-orange font-bold">${item.price.toFixed(2)}</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {item.description}
                  </p>
                  <Button asChild className="w-full bg-foodie-orange hover:bg-foodie-red text-white">
                    <Link to="/menu">View Menu</Link>
                  </Button>
                </div>
              </div>
            ))}
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
      <section className="py-16 bg-gradient-to-r from-foodie-orange to-foodie-red text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Order?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Experience the taste of authentic street food, crafted with love!
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
