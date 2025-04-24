
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const AboutPage = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      quote: "The best burger I've ever had! The quality and taste is outstanding. I'm a regular customer now!",
      avatar: "https://randomuser.me/api/portraits/women/12.jpg"
    },
    {
      id: 2,
      name: "Michael Lee",
      quote: "Their loaded fries are incredible! The service is always friendly and quick. Highly recommend!",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 3,
      name: "Emma Wilson",
      quote: "I'm addicted to their milkshakes. Perfect companion to their amazing burgers. Worth every penny!",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    }
  ];

  return (
    <div>
      {/* About Header */}
      <section className="bg-foodie-orange text-white py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Our Story</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Learn about the journey and passion behind Hoodie & Foodie
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">How It All Started</h2>
              <div className="w-16 h-1 bg-foodie-orange mb-6"></div>
              <p className="text-gray-700 mb-6">
                Hoodie & Foodie was born from a simple love for great food and community. What started as weekend barbecues for friends in 2018 quickly grew into something more when co-founders Jack and Emma realized their passion for creating mouthwatering burgers was something worth sharing with all of Australia.
              </p>
              <p className="text-gray-700 mb-6">
                In 2019, they purchased their first food truck—a vintage 1975 van they lovingly restored and customized. Starting with just three menu items and a dream, they hit the streets of Sydney, bringing their unique flavors to hungry customers.
              </p>
              <p className="text-gray-700">
                Today, Hoodie & Foodie has grown to include a fleet of three trucks touring across major Australian cities, but our commitment remains the same: serving up delicious, high-quality street food made with locally-sourced ingredients and a whole lot of heart.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb" 
                alt="Hoodie & Foodie Food Truck" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet The Team</h2>
            <div className="w-24 h-1 bg-foodie-orange mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-2xl mx-auto">
              The passionate people behind your favorite street food
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a" 
                  alt="Jack Thompson" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Jack Thompson</h3>
                <p className="text-foodie-orange font-semibold mb-3">Co-founder & Head Chef</p>
                <p className="text-gray-600">
                  A culinary genius with 10 years of experience in top restaurants. Jack creates all our signature recipes.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2" 
                  alt="Emma Chen" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Emma Chen</h3>
                <p className="text-foodie-orange font-semibold mb-3">Co-founder & Operations</p>
                <p className="text-gray-600">
                  With a background in business, Emma handles operations and ensures everything runs smoothly.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5" 
                  alt="David Miller" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">David Miller</h3>
                <p className="text-foodie-orange font-semibold mb-3">Food Truck Manager</p>
                <p className="text-gray-600">
                  David brings the energy and enthusiasm to our trucks, ensuring every customer leaves happy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Behind The Scenes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Behind The Scenes</h2>
            <div className="w-24 h-1 bg-foodie-orange mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Take a peek at how we create your favorite street food
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1550367363-9553d3782051" 
              alt="Kitchen prep" 
              className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
            />
            <img 
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5" 
              alt="Burger grilling" 
              className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
            />
            <img 
              src="https://images.unsplash.com/photo-1549590143-d5855148a9d5" 
              alt="Food truck exterior" 
              className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
            />
            <img 
              src="https://images.unsplash.com/photo-1561651823-34feb02250e4" 
              alt="Customers enjoying food" 
              className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <div className="w-24 h-1 bg-foodie-orange mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full mr-4"
                  />
                  <h3 className="font-bold">{testimonial.name}</h3>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                <div className="mt-4 text-foodie-orange">★★★★★</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-foodie-orange text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Try Our Food?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Check out our menu and place an order today. We can't wait to serve you!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-foodie-orange">
              <Link to="/menu">View Menu</Link>
            </Button>
            <Button asChild size="lg" className="bg-white text-foodie-orange hover:bg-foodie-yellow hover:text-foodie-dark">
              <Link to="/order">Order Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
