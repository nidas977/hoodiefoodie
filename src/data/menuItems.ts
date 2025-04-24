
import { MenuItem } from "@/hooks/useCart";

export const menuItems: MenuItem[] = [
  // Burgers
  {
    id: "burger-1",
    name: "Classic Burger",
    description: "Premium beef patty with cheese, lettuce, tomato, and our special sauce.",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    category: "Burgers"
  },
  {
    id: "burger-2",
    name: "Double Trouble",
    description: "Two beef patties with double cheese, bacon, lettuce, and BBQ sauce.",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b",
    category: "Burgers"
  },
  {
    id: "burger-3",
    name: "Chicken Deluxe",
    description: "Crispy chicken fillet with avocado, slaw, and honey mustard.",
    price: 13.99,
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086",
    category: "Burgers"
  },
  {
    id: "burger-4",
    name: "Veggie Supreme",
    description: "Plant-based patty with grilled vegetables and vegan aioli.",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707",
    category: "Burgers"
  },

  // Loaded Fries
  {
    id: "fries-1",
    name: "Loaded Fries",
    description: "Crispy fries topped with cheese sauce, bacon bits, and green onions.",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5",
    category: "Loaded Fries"
  },
  {
    id: "fries-2",
    name: "Truffle Parmesan Fries",
    description: "Golden fries tossed with truffle oil and parmesan cheese.",
    price: 10.99,
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877",
    category: "Loaded Fries"
  },
  {
    id: "fries-3",
    name: "Chili Cheese Fries",
    description: "Crispy fries topped with homemade chili and melted cheese.",
    price: 11.99,
    image: "https://images.unsplash.com/photo-1680394032343-82299e86725e",
    category: "Loaded Fries"
  },

  // Drinks
  {
    id: "drink-1",
    name: "Signature Shake",
    description: "Creamy vanilla milkshake topped with whipped cream and sprinkles.",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58",
    category: "Drinks"
  },
  {
    id: "drink-2",
    name: "Fresh Lemonade",
    description: "Freshly squeezed lemonade with a hint of mint.",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1618485476424-7c49b2530563",
    category: "Drinks"
  },
  {
    id: "drink-3",
    name: "Iced Coffee",
    description: "Cold brew coffee with milk and caramel syrup.",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1534687941688-13aadec5b04c",
    category: "Drinks"
  },
  
  // Desserts
  {
    id: "dessert-1",
    name: "Choc Chip Cookie",
    description: "Warm chocolate chip cookie with a gooey center.",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e",
    category: "Desserts"
  },
  {
    id: "dessert-2",
    name: "Brownie Sundae",
    description: "Chocolate brownie topped with vanilla ice cream and chocolate sauce.",
    price: 7.99,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c",
    category: "Desserts"
  }
];

export const menuCategories = Array.from(new Set(menuItems.map(item => item.category)));
