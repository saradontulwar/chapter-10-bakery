// ========================================================
// CHAPTER TEN – BAKERY KITCHEN
// Verified Business Details, Menu Data & Gallery Assets
// ========================================================

export const BUSINESS_INFO = {
  name: "Chapter Ten – Bakery Kitchen",
  shortName: "Chapter Ten",
  tagline: "Your next little sweet escape.",
  subTagline: "Good coffee, lovely treats, and little moments worth slowing down for.",
  rating: "5.0 ★",
  ratingCount: "Verified Local Reviews",
  address: {
    line1: "1st Floor, Sukhwani Castle, Shop No. 22, E Wing",
    landmark: "Vaibhav Nagar, opposite Brahma Kumari’s",
    area: "Pimpri Colony, Pimpri-Chinchwad",
    city: "Pune, Maharashtra",
    pincode: "411017",
    country: "India",
    full: "1st Floor, Sukhwani Castle, Shop No. 22, E Wing, Vaibhav Nagar, opposite Brahma Kumari’s, Pimpri Colony, Pimpri-Chinchwad, Maharashtra 411017, India"
  },
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Chapter+Ten+Bakery+Kitchen+Sukhwani+Castle+Pimpri+Pune",
  instagram: {
    handle: "@chapter_ten_",
    url: "https://www.instagram.com/chapter_ten_/"
  },
  timingsNote: "Baking fresh daily from late morning. For custom celebration cakes or bulk orders, advance notice is recommended.",
  phoneNote: "Direct inquiries available via Instagram (@chapter_ten_) or custom order request."
};

export const FEATURED_TREATS = [
  {
    id: "strawberry-shortcake",
    name: "Classic Strawberry Cream Slice",
    tag: "Kitchen Favourite",
    description: "Fluffy sponge layered with fresh strawberries, vanilla bean whipped cream, and delicate piped rosettes.",
    image: "/images/hero-cake.jpg",
    priceNote: "Fresh Daily Counter Special"
  },
  {
    id: "celebration-two-tier",
    name: "Bespoke Celebration Cake",
    tag: "Signature Custom",
    description: "Handcrafted two-tier celebration cake with textured strawberry-milk buttercream, edible florals, and gold foil accents.",
    image: "/images/celebration-cake.jpg",
    priceNote: "Custom Order (Made to Measure)"
  },
  {
    id: "french-patisserie-platter",
    name: "Artisan Tarts & Eclairs",
    tag: "Pastry Counter",
    description: "Crisp butter pastry cases with seasonal berries, rich Belgian chocolate glazed eclairs, and delicate pastel macarons.",
    image: "/images/pastry-platter.jpg",
    priceNote: "Baked Fresh Each Morning"
  },
  {
    id: "sea-salt-cookies",
    name: "Sea Salt Chocolate Chunk & Brownies",
    tag: "Warm Bakes",
    description: "Thick cookies loaded with molten chocolate puddles and flaky sea salt, accompanied by fudgy cocoa brownies.",
    image: "/images/cookies-brownies.jpg",
    priceNote: "Fresh from the Oven"
  }
];

export const MENU_CATEGORIES = [
  {
    id: "cakes",
    label: "Celebration & Layer Cakes",
    description: "From intimate afternoon slices to towering bespoke wedding and milestone cakes crafted with pure butter and premium fillings.",
    items: [
      {
        name: "Custom Milestone & Wedding Cakes",
        type: "Custom Order",
        detail: "Single, two-tier, and multi-tier designs tailored to your celebration themes, florals, and palette preferences."
      },
      {
        name: "Strawberry Cream Cloud Cake",
        type: "Counter & Order",
        detail: "Airy vanilla sponge soaked with strawberry compote and frosted with silky chantilly cream."
      },
      {
        name: "Rich Belgian Chocolate Truffle Cake",
        type: "House Classic",
        detail: "Deep cocoa sponge layered with 54% dark chocolate ganache and chocolate curls."
      },
      {
        name: "Vintage Buttercream Piping Cake",
        type: "Custom Order",
        detail: "Retro pastel piping with bows, delicate pearls, and custom hand-lettered messages."
      }
    ]
  },
  {
    id: "pastries",
    label: "Pastries, Tarts & Confections",
    description: "Individual handcrafted desserts designed for everyday indulgence or pairing with your favorite brew.",
    items: [
      {
        name: "Fresh Berry Tartlet",
        type: "Daily Fresh",
        detail: "Pâte sablée butter crust filled with vanilla pastry cream and crowned with fresh raspberries and blueberries."
      },
      {
        name: "Belgian Chocolate Éclair",
        type: "Daily Fresh",
        detail: "Choux pastry filled with diplomat cream and finished with high-gloss chocolate glaze and gold leaf."
      },
      {
        name: "Artisan Macaron Assortment",
        type: "Confection",
        detail: "Delicate almond meringue shells filled with pistachio, raspberry rose, and dark chocolate ganache."
      },
      {
        name: "Seasonal Fruit Choux Buns",
        type: "Speciality",
        detail: "Crisp craquelin-topped choux pastry with light fruit mousse and mascarpone cream."
      }
    ]
  },
  {
    id: "cookies",
    label: "Cookies, Brownies & Teatime Bakes",
    description: "Homestyle comfort bakes with gourmet ingredients, baked throughout the day.",
    items: [
      {
        name: "Melted Sea Salt Chocolate Chunk Cookie",
        type: "Warm Bake",
        detail: "Golden, chewy center with crisp caramelised edges and dark chocolate chunks topped with Maldon salt."
      },
      {
        name: "Fudgy Double-Chocolate Brownie",
        type: "Warm Bake",
        detail: "Ultra-dense cocoa brownie with crackly shiny top and molten chocolate center."
      },
      {
        name: "Vanilla Sable & Tea Biscuits",
        type: "Teatime",
        detail: "Crumbly French butter sables with delicate sugar sparkle, ideal with an afternoon latte."
      },
      {
        name: "Nutty Blondie Squares",
        type: "Baked Treat",
        detail: "Caramel brown-butter blondie studded with toasted walnuts and white chocolate chips."
      }
    ]
  },
  {
    id: "drinks",
    label: "Café Sips & Refreshers",
    description: "Specially brewed coffees, cool refreshers, and creamy blends to complement your sweet pastry.",
    items: [
      {
        name: "Iced Vanilla Bean Latte",
        type: "Espresso",
        detail: "Rich espresso over ice, whole milk (or oat option), and infused with real vanilla bean extract."
      },
      {
        name: "Strawberry Hibiscus Iced Cooler",
        type: "Refresher",
        detail: "Chilled steeped hibiscus flower tea shaken with strawberry reduction, fresh mint, and crushed ice."
      },
      {
        name: "Classic Cappuccino / Flat White",
        type: "Hot Brew",
        detail: "Smooth espresso poured over textured microfoam milk with subtle latte art."
      },
      {
        name: "Iced Ceremonial Matcha Latte",
        type: "Speciality",
        detail: "Whisked green tea poured over chilled milk for a vibrant, calming pairing."
      }
    ]
  }
];

export const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Fresh Strawberry Shortcake Slice",
    category: "Cakes",
    image: "/images/hero-cake.jpg",
    alt: "Chapter Ten strawberry cake slice with whipped cream on ceramic plate"
  },
  {
    id: 2,
    title: "Artisanal Tarts & Eclairs",
    category: "Pastries",
    image: "/images/pastry-platter.jpg",
    alt: "Assortment of fresh fruit tarts, chocolate eclairs and macarons"
  },
  {
    id: 3,
    title: "Bespoke Two-Tier Celebration Cake",
    category: "Cakes",
    image: "/images/celebration-cake.jpg",
    alt: "Handcrafted celebration two tier pink buttercream cake with edible flowers"
  },
  {
    id: 4,
    title: "Iced Drinks & Afternoon Sips",
    category: "Drinks",
    image: "/images/cafe-drinks.jpg",
    alt: "Iced vanilla latte and strawberry refresher on wooden cafe table"
  },
  {
    id: 5,
    title: "Sea Salt Cookies & Fudgy Brownies",
    category: "Bakes",
    image: "/images/cookies-brownies.jpg",
    alt: "Chunky chocolate chip cookies and chocolate brownies on parchment paper"
  },
  {
    id: 6,
    title: "Cosy Cafe Table & Reading Nook",
    category: "Ambience",
    image: "/images/cafe-corner.jpg",
    alt: "Cosy pastel cafe nook with pink armchair, flower vase and warm lighting"
  }
];
