export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  image: string;
  images: string[];
  tags: string[];
  type: string;
  vendor: string;
  sku: string;
  inventory: number;
  shippingInfo: string;
}

export const products: Product[] = [
  {
    id: "prod_1",
    title: "Signature Espresso Blend",
    description: "A rich, full-bodied espresso blend with notes of dark chocolate, caramel, and a hint of toasted almond. Perfect for your morning ritual or an afternoon pick-me-up. Sourced from sustainable farms in Colombia and Brazil.",
    price: 18.00,
    compareAtPrice: 22.00,
    image: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800"
    ],
    tags: ["espresso", "blend", "dark roast", "best seller"],
    type: "Coffee Beans",
    vendor: "Aura Roasters",
    sku: "AURA-ESP-01",
    inventory: 50,
    shippingInfo: "Ships in 1-2 business days."
  },
  {
    id: "prod_2",
    title: "Ethiopian Yirgacheffe Single Origin",
    description: "A bright, floral, and complex light roast with tasting notes of jasmine, bergamot, and sweet lemon. This single-origin coffee is washed and sun-dried, offering a clean and vibrant cup.",
    price: 22.00,
    image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1620189507195-68309c04c4d0?auto=format&fit=crop&q=80&w=800"
    ],
    tags: ["single origin", "light roast", "floral"],
    type: "Coffee Beans",
    vendor: "Aura Roasters",
    sku: "AURA-ETH-01",
    inventory: 30,
    shippingInfo: "Ships in 1-2 business days."
  },
  {
    id: "prod_3",
    title: "Cold Brew Reserve",
    description: "Specially roasted and coarsely ground for the perfect cold brew. Smooth, low acidity, and naturally sweet with hints of cocoa and vanilla. Just add water and steep for 12-24 hours.",
    price: 20.00,
    compareAtPrice: 24.00,
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=800"
    ],
    tags: ["cold brew", "medium roast", "smooth"],
    type: "Coffee Beans",
    vendor: "Aura Roasters",
    sku: "AURA-CBR-01",
    inventory: 45,
    shippingInfo: "Ships in 1-2 business days."
  },
  {
    id: "prod_4",
    title: "Premium Hand Grinder",
    description: "Elevate your coffee experience with our precision hand grinder. Features stainless steel conical burrs for a consistent grind size, from fine espresso to coarse French press. Durable, portable, and elegant.",
    price: 85.00,
    image: "https://images.unsplash.com/photo-1585421514284-8b6e4f0bb18c?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1585421514284-8b6e4f0bb18c?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800"
    ],
    tags: ["equipment", "grinder", "accessories"],
    type: "Equipment",
    vendor: "Aura Roasters",
    sku: "AURA-GRN-01",
    inventory: 15,
    shippingInfo: "Free shipping. Ships in 1-2 business days."
  }
];
