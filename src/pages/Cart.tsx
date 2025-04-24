
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useCart } from '@/hooks/useCart';
import { Trash2, Plus, Minus, MessageSquare } from 'lucide-react';

const CartPage = () => {
  const { items, removeItem, updateQuantity, getTotalPrice, clearCart } = useCart();

  const handleCheckoutViaWhatsApp = () => {
    if (items.length === 0) return;

    const orderDetails = items.map(item => (
      `${item.name} x ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`
    )).join('\n');

    const message = `Hello! I'd like to place the following order:\n\n${orderDetails}\n\nTotal: $${getTotalPrice().toFixed(2)}`;
    
    const whatsappUrl = `https://wa.me/61412345678?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
        
        {items.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Looks like you haven't added any items to your cart yet.</p>
            <Button asChild className="bg-foodie-orange hover:bg-foodie-red text-white">
              <Link to="/menu">Browse Menu</Link>
            </Button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md">
                <div className="p-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex flex-col sm:flex-row border-b border-gray-200 py-4">
                      <div className="sm:w-24 h-24 flex-shrink-0 mb-4 sm:mb-0">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover rounded"
                        />
                      </div>
                      <div className="flex-grow sm:ml-6">
                        <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
                          <h3 className="text-lg font-bold">{item.name}</h3>
                          <p className="text-foodie-orange font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                        <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center border rounded">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="px-4 py-1 border-x">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                              aria-label="Increase quantity"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                          <button 
                            onClick={() => removeItem(item.id)}
                            className="text-red-500 hover:text-red-700"
                            aria-label="Remove item"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t border-gray-200 p-6">
                  <Button 
                    onClick={clearCart} 
                    variant="outline" 
                    className="text-gray-600 hover:text-red-600 border-gray-300"
                  >
                    Clear Cart
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-6 pb-4 border-b">Order Summary</h3>
                <div className="space-y-2 mb-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between text-gray-600">
                      <span>{item.name} x {item.quantity}</span>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t">
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-bold text-lg">Total</span>
                    <span className="font-bold text-foodie-orange text-xl">${getTotalPrice().toFixed(2)}</span>
                  </div>
                  <Button 
                    onClick={handleCheckoutViaWhatsApp}
                    className="w-full bg-foodie-orange hover:bg-foodie-red text-white flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="h-4 w-4" />
                    Checkout via WhatsApp
                  </Button>
                  <div className="mt-4 text-center">
                    <Link to="/menu" className="text-foodie-orange hover:underline text-sm">
                      Continue Shopping
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
