import { IMenuItems, IRestaurant } from "../interfaces/restaurant";
export const restaurantList: IRestaurant[] = [
  {
    _id: "1",
    name: "Spice Garden Grill",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=400&h=250&fit=crop",
    description: "Authentic Indian spicy dishes",
    currentOffer: "20% Off",
    rating: 4.5,
  },
  {
    _id: "2",
    name: "Urban Thai Delight",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=250&fit=crop",
    description: "Fresh and flavorful Thai food",
    currentOffer: "Free Dessert",
    rating: 4.2,
  },
  {
    _id: "3",
    name: "Burger Stack House",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=400&h=250&fit=crop",
    description: "Juicy burgers and fries",
    currentOffer: "Buy 1 Get",
    rating: 4.8,
  },
  {
    _id: "4",
    name: "Green Leaf Cafe",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=250&fit=crop",
    description: "Healthy organic meal options",
    currentOffer: "Lunch Combo",
    rating: 3.9,
  },
  {
    _id: "5",
    name: "Royal Punjabi Tandoor",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=400&h=250&fit=crop",
    description: "Classic Punjabi tandoori dishes",
    currentOffer: "Flat 30%",
    rating: 4.6,
  }
];
export const menuItemsList: IMenuItems[] = [
  // Spice Garden Grill
  {
    _id: "m1",
    restaurantId: "1",
    name: "Butter Chicken",
    image: "https://images.unsplash.com/photo-1605478031579-6a57c7cb99c1?w=400&h=250&fit=crop",
    price: 250,
    description: "Rich creamy chicken curry with Indian spices"
  },
  {
    _id: "m2",
    restaurantId: "1",
    name: "Paneer Tikka",
    image: "https://images.unsplash.com/photo-1620490359609-7b7c97f45ff0?w=400&h=250&fit=crop",
    price: 200,
    description: "Grilled paneer cubes marinated in Indian spices"
  },
  {
    _id: "m3",
    restaurantId: "1",
    name: "Chicken Biryani",
    image: "https://images.unsplash.com/photo-1626601538379-cd28bc6c327f?w=400&h=250&fit=crop",
    price: 280,
    description: "Spiced rice layered with marinated chicken pieces"
  },
  {
    _id: "m4",
    restaurantId: "1",
    name: "Masala Dosa",
    image: "https://images.unsplash.com/photo-1666002123475-cfdd3217b68b?w=400&h=250&fit=crop",
    price: 180,
    description: "Crispy dosa filled with spiced mashed potatoes"
  },
  {
    _id: "m5",
    restaurantId: "1",
    name: "Tandoori Roti",
    image: "https://images.unsplash.com/photo-1638441589320-7bb59d205cfa?w=400&h=250&fit=crop",
    price: 30,
    description: "Whole wheat flatbread cooked in clay tandoor"
  },

  // Urban Thai Delight
  {
    _id: "m6",
    restaurantId: "2",
    name: "Pad Thai Noodles",
    image: "https://images.unsplash.com/photo-1608139740935-4a53b02b4e58?w=400&h=250&fit=crop",
    price: 220,
    description: "Stir-fried noodles with vegetables and peanut topping"
  },
  {
    _id: "m7",
    restaurantId: "2",
    name: "Green Chicken Curry",
    image: "https://images.unsplash.com/photo-1660308481172-c33cd0ab1b33?w=400&h=250&fit=crop",
    price: 240,
    description: "Thai green curry with chicken and coconut milk"
  },
  {
    _id: "m8",
    restaurantId: "2",
    name: "Tom Yum Soup",
    image: "https://images.unsplash.com/photo-1660458500342-43b2049d2808?w=400&h=250&fit=crop",
    price: 160,
    description: "Hot and sour soup with shrimp and herbs"
  },
  {
    _id: "m9",
    restaurantId: "2",
    name: "Mango Sticky Rice",
    image: "https://images.unsplash.com/photo-1615648473713-2079b17d0d16?w=400&h=250&fit=crop",
    price: 140,
    description: "Sweet rice dessert with fresh mango slices"
  },
  {
    _id: "m10",
    restaurantId: "2",
    name: "Thai Spring Rolls",
    image: "https://images.unsplash.com/photo-1656569216502-07c87e145d44?w=400&h=250&fit=crop",
    price: 120,
    description: "Crispy rolls stuffed with vegetables and glass noodles"
  },

  // Burger Stack House
  {
    _id: "m11",
    restaurantId: "3",
    name: "Double Cheeseburger",
    image: "https://images.unsplash.com/photo-1601924928533-3c28cc5e2b56?w=400&h=250&fit=crop",
    price: 180,
    description: "Two patties with melted cheese and pickles"
  },
  {
    _id: "m12",
    restaurantId: "3",
    name: "BBQ Chicken Burger",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=250&fit=crop",
    price: 170,
    description: "Grilled chicken with BBQ sauce and onions"
  },
  {
    _id: "m13",
    restaurantId: "3",
    name: "Veggie Cheese Burger",
    image: "https://images.unsplash.com/photo-1603899121385-1cf212d29709?w=400&h=250&fit=crop",
    price: 150,
    description: "Vegetable patty with lettuce, tomato, and cheese"
  },
  {
    _id: "m14",
    restaurantId: "3",
    name: "Classic French Fries",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&h=250&fit=crop",
    price: 80,
    description: "Crispy golden fries with ketchup and seasoning"
  },
  {
    _id: "m15",
    restaurantId: "3",
    name: "Crispy Onion Rings",
    image: "https://images.unsplash.com/photo-1604908177225-3e8dbe40625a?w=400&h=250&fit=crop",
    price: 90,
    description: "Deep-fried onion rings served with spicy mayo"
  },

  // Green Leaf Cafe
  {
    _id: "m16",
    restaurantId: "4",
    name: "Avocado Toast",
    image: "https://images.unsplash.com/photo-1612197583097-6c81b6cf4e1a?w=400&h=250&fit=crop",
    price: 140,
    description: "Sourdough bread topped with smashed seasoned avocado"
  },
  {
    _id: "m17",
    restaurantId: "4",
    name: "Quinoa Power Bowl",
    image: "https://images.unsplash.com/photo-1630450207487-8e2c2d8a6cbf?w=400&h=250&fit=crop",
    price: 180,
    description: "Healthy quinoa bowl with veggies and seeds"
  },
  {
    _id: "m18",
    restaurantId: "4",
    name: "Grilled Veg Wrap",
    image: "https://images.unsplash.com/photo-1600628422011-8a2613ba4b67?w=400&h=250&fit=crop",
    price: 160,
    description: "Wrap stuffed with grilled seasonal vegetables"
  },
  {
    _id: "m19",
    restaurantId: "4",
    name: "Mixed Fruit Smoothie",
    image: "https://images.unsplash.com/photo-1625945259005-bb449e217c01?w=400&h=250&fit=crop",
    price: 120,
    description: "Refreshing smoothie with banana, berries, almond milk"
  },
  {
    _id: "m20",
    restaurantId: "4",
    name: "Fresh Greek Salad",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=250&fit=crop",
    price: 130,
    description: "Lettuce, feta cheese, olives, and vinaigrette dressing"
  },

  // Royal Punjabi Tandoor
  {
    _id: "m21",
    restaurantId: "5",
    name: "Amritsari Kulcha",
    image: "https://images.unsplash.com/photo-1642156542820-b7a24b0e51da?w=400&h=250&fit=crop",
    price: 150,
    description: "Stuffed kulcha with spicy chickpeas and butter"
  },
  {
    _id: "m22",
    restaurantId: "5",
    name: "Dal Makhani",
    image: "https://images.unsplash.com/photo-1642333872171-240f8892aa73?w=400&h=250&fit=crop",
    price: 190,
    description: "Creamy black lentils cooked with Indian spices"
  },
  {
    _id: "m23",
    restaurantId: "5",
    name: "Tandoori Chicken",
    image: "https://images.unsplash.com/photo-1660046711677-49a71d4dfded?w=400&h=250&fit=crop",
    price: 260,
    description: "Chicken grilled with yogurt, herbs, and spices"
  },
  {
    _id: "m24",
    restaurantId: "5",
    name: "Rajma Chawal",
    image: "https://images.unsplash.com/photo-1673867521805-bd75c49de870?w=400&h=250&fit=crop",
    price: 160,
    description: "Red kidney beans curry with basmati rice"
  },
  {
    _id: "m25",
    restaurantId: "5",
    name: "Punjabi Lassi",
    image: "https://images.unsplash.com/photo-1621619773860-5475dfcefc3e?w=400&h=250&fit=crop",
    price: 60,
    description: "Chilled sweet yogurt drink with cardamom flavor"
  }
];
