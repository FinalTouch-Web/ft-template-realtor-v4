export const agent = {
  name: "Sarah Mitchell",
  firstName: "Sarah",
  designation: "REALTOR, ABR, SRS",
  tagline: "Calgary Real Estate, Reimagined.",
  phone: "(403) 555-0567",
  email: "sarah@sarahmitchell.ca",
  headshot:
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
  brokerage: "RE/MAX First",
  experience: { years: 15, propertiesSold: 450, totalVolume: "$180M+" },
};

export const listings = [
  {
    id: "1",
    address: "1205 - 510 12th Ave SW",
    neighborhood: "Beltline",
    price: 485000,
    beds: 2,
    baths: 2,
    sqft: 1050,
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80",
  },
  {
    id: "2",
    address: "2847 Mount Royal Gate SW",
    neighborhood: "Mount Royal",
    price: 1295000,
    beds: 4,
    baths: 3,
    sqft: 2800,
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
  },
  {
    id: "3",
    address: "412 Kensington Road NW",
    neighborhood: "Kensington",
    price: 625000,
    beds: 3,
    baths: 2,
    sqft: 1650,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
  },
  {
    id: "4",
    address: "1923 47th Ave SW",
    neighborhood: "Altadore",
    price: 875000,
    beds: 4,
    baths: 3,
    sqft: 2200,
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
  },
];

export const soldStream = [
  { address: "2156 34th Ave SW", price: "$765,000", hood: "Marda Loop" },
  { address: "1923 47th Ave SW", price: "$892,000", hood: "Altadore" },
  { address: "305 - 810 1st Ave NE", price: "$410,000", hood: "Bridgeland" },
  { address: "88 Edenwold Dr NW", price: "$645,000", hood: "Edgemont" },
  { address: "412 18th Ave SW", price: "$528,000", hood: "Mission" },
  { address: "19 Sunrise Way SE", price: "$712,000", hood: "Sundance" },
];

export const neighborhoods = [
  {
    slug: "beltline",
    name: "Beltline",
    tag: "Urban Pulse",
    description:
      "Calgary's most vibrant urban core. High-rise living, boutique shopping, and a restaurant scene that never sleeps.",
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1600&q=80",
    avgPrice: "$420K",
    stats: { walkScore: 94, listings: 142, demand: "High" },
  },
  {
    slug: "mount-royal",
    name: "Mount Royal",
    tag: "Heritage Elegance",
    description:
      "Stately homes, tree-lined streets, and proximity to the Elbow River. Calgary's most prestigious address.",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80",
    avgPrice: "$1.15M",
    stats: { walkScore: 78, listings: 24, demand: "Exclusive" },
  },
  {
    slug: "kensington",
    name: "Kensington",
    tag: "Village Charm",
    description:
      "A walkable village of independent shops, cafes, and Bow River views. Heritage meets modern energy.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80",
    avgPrice: "$525K",
    stats: { walkScore: 91, listings: 67, demand: "High" },
  },
  {
    slug: "altadore",
    name: "Altadore",
    tag: "Family Sanctuary",
    description:
      "Inner-city living with a community feel. Top schools, River Park, and Marda Loop on your doorstep.",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1600&q=80",
    avgPrice: "$825K",
    stats: { walkScore: 82, listings: 38, demand: "Rising" },
  },
  {
    slug: "bridgeland",
    name: "Bridgeland",
    tag: "Riverside Cool",
    description:
      "A hillside neighbourhood with skyline views, craft breweries, and a quick walk to the zoo and downtown.",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1600&q=80",
    avgPrice: "$485K",
    stats: { walkScore: 86, listings: 52, demand: "Rising" },
  },
  {
    slug: "inglewood",
    name: "Inglewood",
    tag: "Creative Quarter",
    description:
      "Calgary's oldest neighbourhood, reborn as a hub for galleries, live music, and independent kitchens.",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1600&q=80",
    avgPrice: "$565K",
    stats: { walkScore: 88, listings: 44, demand: "High" },
  },
];

export const testimonials = [
  {
    name: "Michael & Jessica Chen",
    neighborhood: "Mount Royal",
    text: "Sarah found us our dream home before it even hit the market. Her knowledge and negotiation saved us over $40,000. The best realtor in Calgary, full stop.",
    avatar:
      "https://images.unsplash.com/photo-1604426633861-11b2faead63c?w=200&q=80",
    rating: 5,
  },
  {
    name: "David Thompson",
    neighborhood: "Beltline",
    text: "She staged it beautifully, priced it perfectly, and we had multiple offers within the first weekend. Sold for $15,000 over asking.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    rating: 5,
  },
  {
    name: "Priya & Raj Patel",
    neighborhood: "Altadore",
    text: "As first-time buyers we had a million questions. Sarah walked us through every step and found us our perfect family home within budget.",
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=80",
    rating: 5,
  },
  {
    name: "James & Sarah O'Brien",
    neighborhood: "Marda Loop",
    text: "We relocated from Toronto and Sarah was a lifesaver. She found us a gem in Marda Loop. Five stars all the way.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    rating: 5,
  },
  {
    name: "Linda Morrison",
    neighborhood: "Kensington",
    text: "Sarah helped me downsize after 30 years in my family home. She handled everything with real care. Sold in 5 days, over asking.",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
    rating: 5,
  },
  {
    name: "Robert Kim",
    neighborhood: "Bridgeland",
    text: "Sarah sold two investment properties for me and maximized my returns on both. Her market analysis is spot-on. My go-to realtor.",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    rating: 5,
  },
];

export const marketStats = {
  averagePrice: "$592,000",
  medianDays: 24,
  totalSold: 2847,
  yearOverYear: "+4.2%",
};
