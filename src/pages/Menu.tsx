
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MenuItem from '@/components/menu/MenuItem';
import { menuItems, menuCategories } from '@/data/menuItems';

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0]);

  return (
    <div>
      {/* Menu Header */}
      <section className="bg-foodie-orange text-white py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Our Menu</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Delicious, freshly made food crafted with passion and quality ingredients.
          </p>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue={menuCategories[0]} value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-gray-100 border">
                {menuCategories.map((category) => (
                  <TabsTrigger 
                    key={category} 
                    value={category}
                    className="data-[state=active]:bg-foodie-orange data-[state=active]:text-white"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {menuCategories.map((category) => (
              <TabsContent key={category} value={category}>
                <h2 className="text-2xl font-bold mb-8 text-center">{category}</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {menuItems
                    .filter(item => item.category === category)
                    .map((item) => (
                      <MenuItem key={item.id} item={item} />
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default MenuPage;
