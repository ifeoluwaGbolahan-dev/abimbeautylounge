export interface Service {
  name: string;
  duration: string;
  price: string;
  description: string;
  image: string;
  icon: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  tagline: string;
  services: Service[];
}

export interface Review {
  name: string;
  rating: number;
  text: string;
  date: string;
  service: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  span: boolean;
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'nails',
    title: 'Nails',
    tagline: 'From classic acrylics to bold nail art — every set is a masterpiece.',
    services: [
      {
        name: 'French Tips, Cat Eye, Marble, Chrome Effect & Nail Art',
        duration: '1 hr',
        price: 'from NGN 7,000',
        description: 'Expressive nail art including French tips, cat eye, marble, chrome effects, random designs and rhinestone application.',
        image: 'https://images.pexels.com/photos/5484948/pexels-photo-5484948.png?auto=compress&cs=tinysrgb&h=650&w=940',
        icon: 'Hand',
      },
      {
        name: 'Plain Acrylic / Overlay',
        duration: '1 hr',
        price: 'NGN 15,000',
        description: 'Clean, classic acrylic nails or overlay for a polished everyday look.',
        image: 'https://images.pexels.com/photos/4783335/pexels-photo-4783335.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        icon: 'Hand',
      },
      {
        name: 'Gel Polish Manicure',
        duration: '45 min',
        price: 'NGN 8,000',
        description: 'Long-lasting gel polish application with a glossy, chip-resistant finish.',
        image: 'https://images.pexels.com/photos/9099607/pexels-photo-9099607.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        icon: 'Hand',
      },
      {
        name: 'Luxury Pedicure',
        duration: '1 hr',
        price: 'NGN 10,000',
        description: 'A relaxing pedicure with soak, scrub, massage and polish for refreshed, beautiful feet.',
        image: 'https://images.pexels.com/photos/34930123/pexels-photo-34930123.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        icon: 'Footprints',
      },
    ],
  },
  {
    id: 'lashes',
    title: 'Lashes & Brows',
    tagline: 'Frame your eyes with lashes and brows crafted to perfection.',
    services: [
      {
        name: 'Premium Classic Lash Extensions',
        duration: '1 hr 30 min',
        price: 'NGN 16,000',
        description: 'Classic one-on-one lash extensions for a natural, elegant enhancement.',
        image: 'https://images.pexels.com/photos/8554941/pexels-photo-8554941.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        icon: 'Eye',
      },
      {
        name: 'Volume Lash Extensions',
        duration: '2 hr',
        price: 'NGN 22,000',
        description: 'Full volume lashes for a dramatic, fluttery look that lasts.',
        image: 'https://images.pexels.com/photos/7755525/pexels-photo-7755525.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        icon: 'Eye',
      },
      {
        name: 'Brow Shaping & Threading',
        duration: '30 min',
        price: 'NGN 5,000',
        description: 'Precision brow shaping and threading to define your natural arch.',
        image: 'https://images.pexels.com/photos/6135620/pexels-photo-6135620.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        icon: 'Eye',
      },
      {
        name: 'Brow Lamination',
        duration: '45 min',
        price: 'NGN 12,000',
        description: 'Brow lamination for fuller, brushed-up brows that stay in place all day.',
        image: 'https://images.pexels.com/photos/5177995/pexels-photo-5177995.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        icon: 'Eye',
      },
    ],
  },
  {
    id: 'makeup',
    title: 'Makeup & Facials',
    tagline: 'Radiant skin and flawless makeup for every occasion.',
    services: [
      {
        name: 'Glam Makeup',
        duration: '1 hr 30 min',
        price: 'NGN 20,000',
        description: 'Full glam makeup for events, photoshoots and special occasions.',
        image: 'https://images.pexels.com/photos/8031803/pexels-photo-8031803.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        icon: 'Sparkles',
      },
      {
        name: 'Facial Treatment',
        duration: '1 hr',
        price: 'NGN 15,000',
        description: 'Deep-cleansing facial treatment to rejuvenate and refresh your skin.',
        image: 'https://images.pexels.com/photos/5659018/pexels-photo-5659018.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        icon: 'Sparkles',
      },
      {
        name: 'Bridal Makeup Package',
        duration: '3 hr',
        price: 'NGN 50,000',
        description: 'Complete bridal makeup with consultation, trial and wedding-day application.',
        image: 'https://images.pexels.com/photos/2823975/pexels-photo-2823975.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        icon: 'Sparkles',
      },
      {
        name: 'Classic Babe Combo',
        duration: '4 hr',
        price: 'NGN 25,999',
        description: 'Five services bundled — nails, lashes, brows, facial and makeup. Save 38%.',
        image: 'https://images.pexels.com/photos/3985331/pexels-photo-3985331.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        icon: 'Sparkles',
      },
    ],
  },
];

export const galleryImages: GalleryImage[] = [
  { src: 'https://images.pexels.com/photos/6899554/pexels-photo-6899554.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Modern beauty salon interior', span: true },
  { src: 'https://images.pexels.com/photos/5484948/pexels-photo-5484948.png?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Detailed nail art', span: false },
  { src: 'https://images.pexels.com/photos/8554941/pexels-photo-8554941.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Eyelash extension application', span: false },
  { src: 'https://images.pexels.com/photos/12115016/pexels-photo-12115016.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Facial mask treatment', span: true },
  { src: 'https://images.pexels.com/photos/6135620/pexels-photo-6135620.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Eyebrow threading', span: false },
  { src: 'https://images.pexels.com/photos/7755525/pexels-photo-7755525.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Lash extension procedure', span: false },
  { src: 'https://images.pexels.com/photos/17553843/pexels-photo-17553843.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Head massage at salon', span: false },
  { src: 'https://images.pexels.com/photos/3985331/pexels-photo-3985331.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Facial treatment with mask', span: true },
];

export const reviews: Review[] = [
  {
    name: 'Mama Zeee',
    rating: 5,
    text: "Excellent! She's so good at what she does. My brows have never looked better.",
    date: '5 months ago',
    service: 'Brow Model (without lash)',
  },
  {
    name: 'Susan O',
    rating: 5,
    text: "I'm a returning customer, so as always, I got exactly what I wanted. Highly recommend!",
    date: '6 months ago',
    service: '2 services',
  },
  {
    name: 'Adetutu A',
    rating: 5,
    text: "The ambience is so calming and the results are always flawless. Abim Beauty Lounge is my go-to for everything beauty in Ibadan.",
    date: '3 months ago',
    service: 'Classic Babe Combo',
  },
  {
    name: 'Chioma N',
    rating: 5,
    text: "Best lash extensions in Akobo! They last for weeks and look so natural. I won't go anywhere else.",
    date: '2 months ago',
    service: 'Premium Classic Lash Extensions',
  },
];

export const openingHours = [
  { day: 'Monday', hours: '10:00 AM — 7:00 PM' },
  { day: 'Tuesday', hours: '10:00 AM — 7:00 PM' },
  { day: 'Wednesday', hours: '10:00 AM — 7:00 PM' },
  { day: 'Thursday', hours: '10:00 AM — 7:00 PM' },
  { day: 'Friday', hours: '10:00 AM — 8:00 PM' },
  { day: 'Saturday', hours: '10:00 AM — 8:00 PM' },
  { day: 'Sunday', hours: 'Closed' },
];

export const salonInfo = {
  name: 'Abim Beauty Lounge',
  address: '1st Floor Glo Building, Green Building, Opposite Foodco, Akobo, Ibadan, Oyo',
  phone: '+234 800 000 0000',
  email: 'hello@abimbeautylounge.com',
  instagram: 'https://instagram.com/abimbeautylounge',
  facebook: 'https://facebook.com/abimbeautylounge',
  mapsUrl: 'https://maps.google.com/?daddr=1st+Floor+Glo+Building+Opposite+Foodco+Akobo+Ibadan+Nigeria',
};
