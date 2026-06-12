export interface HotelInfo {
  name: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  openingHours: string;
  images: string[];
  starRating: number;
}
export interface MenuItem {
  id: string;
  name: string;
  category: 'Food' | 'Beverage';
  subCategory: string;
  price: number;
  description: string;
  image: string;
}

export interface BeverageRecipe {
  id: string;
  name: string;
  category: 'Cocktail' | 'Mocktail' | 'Hot Drink' | 'Coffee' | 'Tea' | 'Iced Drink';
  description: string;
  ingredients: string[];
  steps: string[];
  yield: string;
  temperature: string;
  grams: string;
  time: string;
  servingMethod: string;
  image: string;
}
export const HOTEL_INFO: HotelInfo = {
  name: "Haile Grand Addis Ababa Hotel",
  description: "Haile Grand Addis Ababa is a premium five-star hotel offering unparalleled luxury and world-class hospitality in the heart of Ethiopia's capital. Located near Lambert Square, it features elegant accommodations, exceptional dining, and state-of-the-art facilities.",
  address: "Lambert Square, Lamberet, Addis Ababa, Ethiopia",
  phone: "0927747474",
  email: "info@hailegrandaddis.com",
  openingHours: "Mon-Sun: 24 Hours",
  images: [
    "https://storage.googleapis.com/dala-prod-public-storage/generated-images/447dd894-f187-4d2e-b233-04b50dc1aebe/hotel-lobby-9ea4ce63-1781300358123.webp"
  ],
  starRating: 5,
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "f1",
    name: "Haile Signature Burger",
    category: "Food",
    subCategory: "Mains",
    price: 450,
    description: "Premium beef patty, local spices, aged cheddar, and house secret sauce on a toasted bun.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/447dd894-f187-4d2e-b233-04b50dc1aebe/menu-item-1-9e427f1e-1781300357536.webp"
  },
  {
    id: "f2",
    name: "Ethio-Italian Fusion Pasta",
    category: "Food",
    subCategory: "Mains",
    price: 380,
    description: "Creamy pasta infused with traditional Ethiopian herbs and parmesan cheese.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/447dd894-f187-4d2e-b233-04b50dc1aebe/menu-item-2-bc537a1e-1781300359017.webp"
  },
  {
    id: "b1",
    name: "Single Macchiato",
    category: "Beverage",
    subCategory: "Coffee",
    price: 85,
    description: "Espresso with a small amount of foamed milk.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/447dd894-f187-4d2e-b233-04b50dc1aebe/single-macchiato-191c5f43-1781300871716.webp"
  },
  {
    id: "b2",
    name: "Double Macchiato",
    category: "Beverage",
    subCategory: "Coffee",
    price: 120,
    description: "A double shot of espresso with a dollop of foamed milk.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/447dd894-f187-4d2e-b233-04b50dc1aebe/single-macchiato-191c5f43-1781300871716.webp"
  },
  {
    id: "b3",
    name: "Cappuccino",
    category: "Beverage",
    subCategory: "Coffee",
    price: 140,
    description: "A balanced coffee drink made with equal parts espresso, steamed milk, and milk foam.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/447dd894-f187-4d2e-b233-04b50dc1aebe/cappuccino-c53eec22-1781300871558.webp"
  },
  {
    id: "b4",
    name: "Iced Latte",
    category: "Beverage",
    subCategory: "Iced Drink",
    price: 160,
    description: "Espresso and chilled milk served over ice.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/447dd894-f187-4d2e-b233-04b50dc1aebe/iced-latte-4237af6a-1781300872766.webp"
  },
  {
    id: "b5",
    name: "Hot Tea Selection",
    category: "Beverage",
    subCategory: "Tea",
    price: 75,
    description: "A choice of premium black, green, or herbal tea.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/447dd894-f187-4d2e-b233-04b50dc1aebe/hot-tea-2b47dd47-1781300871420.webp"
  },
  {
    id: "b6",
    name: "Caffe Mocha",
    category: "Beverage",
    subCategory: "Coffee",
    price: 170,
    description: "Espresso combined with chocolate sauce and steamed milk, topped with whipped cream.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/447dd894-f187-4d2e-b233-04b50dc1aebe/caffe-mocha-ab5db1de-1781300871632.webp"
  },
  {
    id: "b7",
    name: "Caffe Latte",
    category: "Beverage",
    subCategory: "Coffee",
    price: 130,
    description: "Espresso with steamed milk and a light layer of foam.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/447dd894-f187-4d2e-b233-04b50dc1aebe/hot-drink-2c22299f-1781300358741.webp"
  }
];

export const BEVERAGE_RECIPES: BeverageRecipe[] = [
  {
    id: "r1",
    name: "Single Macchiato",
    category: "Coffee",
    description: "A bold espresso marked with a delicate dollop of velvety milk foam.",
    ingredients: ["9g Fine ground coffee", "1 oz Hot water", "Small amount of steamed milk foam"],
    steps: [
      "Grind 9g of premium coffee beans to a fine consistency.",
      "Tamp evenly and pull a 1 oz (30ml) espresso shot into a demitasse glass.",
      "Steam milk to create a dense, micro-foam.",
      "Use a spoon to place one dollop of foam in the center of the espresso crema."
    ],
    yield: "35ml",
    temperature: "65\u00b0C - 70\u00b0C",
    grams: "9g",
    time: "25-30 Seconds",
    servingMethod: "Serve in a 60ml pre-heated demitasse glass on a saucer with a small spoon.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/447dd894-f187-4d2e-b233-04b50dc1aebe/single-macchiato-191c5f43-1781300871716.webp"
  },
  {
    id: "r2",
    name: "Double Macchiato",
    category: "Coffee",
    description: "A robust double shot of espresso marked with a dollop of milk foam.",
    ingredients: ["18g Fine ground coffee", "2 oz Hot water", "Small amount of steamed milk foam"],
    steps: [
      "Grind 18g of premium coffee beans.",
      "Tamp and pull a double espresso shot (2 oz / 60ml).",
      "Steam milk to create micro-foam.",
      "Place a dollop of foam on the double espresso."
    ],
    yield: "65ml",
    temperature: "65\u00b0C - 70\u00b0C",
    grams: "18g",
    time: "30 Seconds",
    servingMethod: "Serve in a 90ml pre-heated glass on a saucer with a small spoon.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/447dd894-f187-4d2e-b233-04b50dc1aebe/single-macchiato-191c5f43-1781300871716.webp"
  },
  {
    id: "r3",
    name: "Cappuccino",
    category: "Coffee",
    description: "A classic Italian coffee with a perfect balance of espresso, steamed milk, and thick foam.",
    ingredients: ["9g Ground coffee", "1 oz Espresso", "4 oz Steamed milk", "Dense milk foam"],
    steps: [
      "Pull a standard 1 oz espresso shot.",
      "Steam milk to 60\u00b0C, creating a thick layer of micro-foam.",
      "Pour the milk and foam simultaneously into the espresso to create a 1:1:1 ratio.",
      "The surface should be glossy and white with a brown espresso ring."
    ],
    yield: "180ml",
    temperature: "60\u00b0C - 65\u00b0C",
    grams: "9g",
    time: "45 Seconds",
    servingMethod: "Serve in a 200ml ceramic cup. Optional: Dust with cocoa powder.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/447dd894-f187-4d2e-b233-04b50dc1aebe/cappuccino-c53eec22-1781300871558.webp"
  },
  {
    id: "r4",
    name: "Iced Latte",
    category: "Iced Drink",
    description: "A cool and refreshing beverage with layers of cold milk and rich espresso over ice.",
    ingredients: ["18g Ground coffee", "2 oz Espresso", "6 oz Cold milk", "Ice cubes"],
    steps: [
      "Fill a tall glass with ice cubes.",
      "Pour cold milk into the glass, leaving space at the top.",
      "Pull a double espresso shot and pour it slowly over the milk to create a layered effect."
    ],
    yield: "350ml",
    temperature: "4\u00b0C - 8\u00b0C",
    grams: "18g",
    time: "1 Minute",
    servingMethod: "Serve in a tall 400ml glass with a long straw.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/447dd894-f187-4d2e-b233-04b50dc1aebe/iced-latte-4237af6a-1781300872766.webp"
  },
  {
    id: "r5",
    name: "Caffe Mocha",
    category: "Coffee",
    description: "A decadent treat combining rich chocolate sauce with bold espresso and velvety milk.",
    ingredients: ["9g Ground coffee", "1 oz Espresso", "1 oz Chocolate sauce", "Steamed milk", "Whipped cream"],
    steps: [
      "Pour chocolate sauce into the bottom of the glass.",
      "Pull a 1 oz espresso shot directly over the chocolate and stir to combine.",
      "Fill with steamed milk.",
      "Top with whipped cream and a drizzle of chocolate sauce."
    ],
    yield: "240ml",
    temperature: "65\u00b0C",
    grams: "9g",
    time: "1.5 Minutes",
    servingMethod: "Serve in a glass mug with a saucer and small spoon.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/447dd894-f187-4d2e-b233-04b50dc1aebe/cappuccino-c53eec22-1781300871558.webp"
  },
  {
    id: "r6",
    name: "Premium Hot Tea",
    category: "Tea",
    description: "Expertly steeped premium tea leaves for a soothing experience.",
    ingredients: ["2.5g Tea leaves or 1 tea bag", "240ml Hot water", "Lemon slice or honey (optional)"],
    steps: [
      "Heat water to the appropriate temperature (100\u00b0C for Black, 80\u00b0C for Green).",
      "Pour water over the tea leaves in a pre-heated pot.",
      "Steep for 3-5 minutes depending on tea type.",
      "Remove tea leaves or bag."
    ],
    yield: "240ml",
    temperature: "80\u00b0C - 100\u00b0C",
    grams: "2.5g",
    time: "3-5 Minutes",
    servingMethod: "Serve in a teapot with a separate cup and saucer. Offer lemon, honey, or milk on the side.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/447dd894-f187-4d2e-b233-04b50dc1aebe/hot-tea-2b47dd47-1781300871420.webp"
  },
  {
    id: "r7",
    name: "Caramel Latte",
    category: "Coffee",
    description: "A sweet twist on the classic latte with smooth caramel syrup.",
    ingredients: ["9g Ground coffee", "1 oz Espresso", "1 oz Caramel syrup", "7 oz Steamed milk"],
    steps: [
      "Add caramel syrup to the glass.",
      "Add espresso and stir.",
      "Pour in steamed milk, holding back the foam until the end.",
      "Top with a thin layer of foam and a caramel drizzle."
    ],
    yield: "240ml",
    temperature: "65\u00b0C",
    grams: "9g",
    time: "1.5 Minutes",
    servingMethod: "Serve in a 250ml glass with a handle.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/447dd894-f187-4d2e-b233-04b50dc1aebe/hot-drink-2c22299f-1781300358741.webp"
  },
  {
    id: "r8",
    name: "Caffe Latte",
    category: "Coffee",
    description: "A silky smooth coffee made with rich espresso and plenty of steamed milk.",
    ingredients: ["9g Ground coffee", "1 oz Espresso", "7-9 oz Steamed milk"],
    steps: [
      "Pull a 1 oz espresso shot.",
      "Steam milk to 65\u00b0C with minimal foam (velvet texture).",
      "Pour the steamed milk into the espresso, finishing with a 1cm layer of foam on top."
    ],
    yield: "240-300ml",
    temperature: "65\u00b0C",
    grams: "9g",
    time: "1 Minute",
    servingMethod: "Serve in a 300ml glass or ceramic mug.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/447dd894-f187-4d2e-b233-04b50dc1aebe/hot-drink-2c22299f-1781300358741.webp"
  }
];
