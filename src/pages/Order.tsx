
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { WhatsApp } from 'lucide-react';
import { toast } from "sonner";
import { useCart } from '@/hooks/useCart';
import { menuItems } from '@/data/menuItems';

const OrderPage = () => {
  const { items, getTotalPrice } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    abn: '',
    message: '',
    deliveryOption: 'pickup',
    menuSelection: '',
    quantity: 1,
  });
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});

  const validateABN = (abn: string) => {
    if (!abn) return true; // Optional field
    
    // Remove spaces and check if it's 11 digits
    const abnClean = abn.replace(/\s/g, '');
    return /^\d{11}$/.test(abnClean);
  };

  const validatePhone = (phone: string) => {
    // Australian phone validation - accept various formats
    const phoneClean = phone.replace(/\s/g, '');
    return /^(?:\+61|0)[2-478](?:[ -]?[0-9]){8}$/.test(phoneClean);
  };

  const validateForm = () => {
    const errors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      errors.phone = 'Please enter a valid Australian phone number';
    }
    
    if (formData.abn && !validateABN(formData.abn)) {
      errors.abn = 'ABN must be 11 digits';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleRadioChange = (value: string) => {
    setFormData(prev => ({ ...prev, deliveryOption: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error("Please fix the errors in the form before submitting");
      return;
    }

    let orderMessage = `Hello! I'd like to place an order.\n\n`;
    orderMessage += `Name: ${formData.name}\n`;
    orderMessage += `Phone: ${formData.phone}\n`;
    
    if (formData.abn) {
      orderMessage += `ABN: ${formData.abn}\n`;
    }

    orderMessage += `\nDelivery Option: ${formData.deliveryOption}\n\n`;
    
    if (items.length > 0) {
      // If there are items in the cart
      orderMessage += "Order Items:\n";
      items.forEach(item => {
        orderMessage += `${item.name} x ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}\n`;
      });
      orderMessage += `\nTotal: $${getTotalPrice().toFixed(2)}`;
    } else if (formData.menuSelection) {
      // If user selected an item from the dropdown
      const selectedItem = menuItems.find(item => item.id === formData.menuSelection);
      if (selectedItem) {
        orderMessage += `Order Items:\n${selectedItem.name} x ${formData.quantity} - $${(selectedItem.price * formData.quantity).toFixed(2)}`;
      }
    }

    if (formData.message) {
      orderMessage += `\n\nSpecial Instructions: ${formData.message}`;
    }

    // Open WhatsApp with pre-filled message
    const whatsappUrl = `https://wa.me/61412345678?text=${encodeURIComponent(orderMessage)}`;
    window.open(whatsappUrl, '_blank');
    
    toast.success("Redirecting to WhatsApp to complete your order");
  };

  return (
    <div>
      {/* Order Header */}
      <section className="bg-foodie-orange text-white py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Order Online</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Fill out the form below and we'll receive your order via WhatsApp. We'll reply promptly to confirm.
          </p>
        </div>
      </section>

      {/* Order Form Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className={formErrors.name ? "border-red-500" : ""}
                />
                {formErrors.name && <p className="text-red-500 text-sm">{formErrors.name}</p>}
              </div>

              {/* Phone Field */}
              <div className="space-y-2">
                <Label htmlFor="phone">Contact Number *</Label>
                <Input 
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="e.g., 0412 345 678"
                  className={formErrors.phone ? "border-red-500" : ""}
                />
                {formErrors.phone && <p className="text-red-500 text-sm">{formErrors.phone}</p>}
              </div>

              {/* ABN Field (Optional) */}
              <div className="space-y-2">
                <Label htmlFor="abn">ABN (Optional)</Label>
                <Input 
                  id="abn"
                  name="abn"
                  value={formData.abn}
                  onChange={handleInputChange}
                  placeholder="11 digit ABN (for business orders)"
                  className={formErrors.abn ? "border-red-500" : ""}
                />
                {formErrors.abn && <p className="text-red-500 text-sm">{formErrors.abn}</p>}
              </div>

              {/* Delivery Options */}
              <div className="space-y-3">
                <Label>Delivery Option *</Label>
                <RadioGroup 
                  value={formData.deliveryOption} 
                  onValueChange={handleRadioChange}
                  className="flex flex-col gap-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="pickup" id="pickup" />
                    <Label htmlFor="pickup" className="cursor-pointer">Pickup (from food truck)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="delivery" id="delivery" />
                    <Label htmlFor="delivery" className="cursor-pointer">Delivery (within 5km radius)</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Menu Selection - Only if cart is empty */}
              {items.length === 0 && (
                <div className="space-y-3">
                  <Label htmlFor="menuSelection">Select Menu Item</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <select 
                      id="menuSelection"
                      name="menuSelection"
                      value={formData.menuSelection}
                      onChange={handleInputChange}
                      className="border rounded-md p-2 w-full"
                    >
                      <option value="">Select an item</option>
                      {menuItems.map(item => (
                        <option key={item.id} value={item.id}>
                          {item.name} - ${item.price.toFixed(2)}
                        </option>
                      ))}
                    </select>
                    <Input 
                      type="number"
                      id="quantity"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleInputChange}
                      min="1"
                      className="w-full"
                      placeholder="Quantity"
                    />
                  </div>
                </div>
              )}

              {/* Special Instructions */}
              <div className="space-y-2">
                <Label htmlFor="message">Special Instructions (Optional)</Label>
                <Textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Any special requests or delivery instructions"
                  rows={4}
                />
              </div>

              {/* Cart Summary - Only if cart has items */}
              {items.length > 0 && (
                <div className="border-t pt-4 space-y-3">
                  <h3 className="font-bold text-lg">Order Summary</h3>
                  <div className="space-y-2">
                    {items.map(item => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <span>{item.name} x {item.quantity}</span>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                    <div className="flex justify-between font-bold border-t pt-2">
                      <span>Total:</span>
                      <span>${getTotalPrice().toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <Button 
                type="submit"
                className="w-full bg-foodie-orange hover:bg-foodie-red text-white flex items-center justify-center gap-2"
              >
                <WhatsApp className="h-5 w-5" />
                {items.length > 0 ? "Place Order via WhatsApp" : "Continue to WhatsApp"}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Instructions Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold mb-6 text-center">How to Order</h2>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-foodie-yellow/50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold text-foodie-orange">
                1
              </div>
              <h3 className="font-bold mb-2">Fill the Form</h3>
              <p className="text-gray-600 text-sm">Complete the order form with your details and food choices.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-foodie-yellow/50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold text-foodie-orange">
                2
              </div>
              <h3 className="font-bold mb-2">Confirm on WhatsApp</h3>
              <p className="text-gray-600 text-sm">You'll be redirected to WhatsApp with your order details pre-filled.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-foodie-yellow/50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold text-foodie-orange">
                3
              </div>
              <h3 className="font-bold mb-2">Enjoy Your Food</h3>
              <p className="text-gray-600 text-sm">We'll confirm your order and have it ready for pickup or delivery.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderPage;
