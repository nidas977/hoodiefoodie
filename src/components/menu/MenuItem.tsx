
import React from 'react';
import { Button } from "@/components/ui/button";
import { ShoppingCart, MessageSquare } from 'lucide-react';
import { useCart, MenuItem as MenuItemType } from '@/hooks/useCart';

interface MenuItemProps {
  item: MenuItemType;
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  const { addItem } = useCart();
  
  const handleAddToCart = () => {
    addItem(item, 1);
  };

  const handleWhatsAppOrder = () => {
    const message = `Hi, I'd like to order a ${item.name}`;
    const whatsappUrl = `https://wa.me/61412345678?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md group hover:shadow-lg transition-all">
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
        <div className="flex gap-2">
          <Button 
            onClick={handleAddToCart}
            className="flex-1 bg-foodie-orange hover:bg-foodie-red text-white flex items-center gap-2"
          >
            <ShoppingCart className="h-4 w-4" />
            Add to Cart
          </Button>
          <Button 
            onClick={handleWhatsAppOrder}
            variant="outline" 
            className="border-foodie-orange text-foodie-orange hover:bg-foodie-orange hover:text-white"
          >
            <MessageSquare className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
