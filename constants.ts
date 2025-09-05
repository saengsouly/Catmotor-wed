
import { Car, CarType, CarCondition } from './types';

export const CARS_DATA: Car[] = [
  {
    id: 1,
    brand: 'Toyota',
    model: 'Camry',
    year: 2021,
    price: 25000,
    mileage: 30000,
    type: CarType.Sedan,
    condition: CarCondition.Certified,
    vin: '1T1BF1FKXLU123456',
    images: [
      'https://picsum.photos/seed/car1-1/800/600',
      'https://picsum.photos/seed/car1-2/800/600',
      'https://picsum.photos/seed/car1-3/800/600',
      'https://picsum.photos/seed/car1-4/800/600',
    ],
    description: 'A reliable and fuel-efficient sedan, perfect for families and daily commutes. This certified pre-owned Camry comes with a full service history and a clean bill of health.',
    features: ['Bluetooth', 'Backup Camera', 'Apple CarPlay', 'Lane Assist'],
    status: 'Available',
    seller: { id: 1, name: 'Vientiane Motors', type: 'dealership', trustScore: 95 },
    reviews: [
        { id: 1, author: 'Somchai P.', rating: 5, comment: 'Excellent condition, exactly as described. The dealership was very professional.', date: '2023-08-15' },
        { id: 2, author: 'Noy V.', rating: 4, comment: 'Good car, fair price. A few minor scratches but nothing unexpected for a used vehicle.', date: '2023-07-22' }
    ]
  },
  {
    id: 2,
    brand: 'Honda',
    model: 'CR-V',
    year: 2020,
    price: 28000,
    mileage: 45000,
    type: CarType.SUV,
    condition: CarCondition.Used,
    vin: '2HGRW1H5XLL789012',
    images: [
      'https://picsum.photos/seed/car2-1/800/600',
      'https://picsum.photos/seed/car2-2/800/600',
      'https://picsum.photos/seed/car2-3/800/600',
    ],
    description: 'Spacious and versatile, the Honda CR-V is the ideal SUV for any adventure. With ample cargo space and advanced safety features, it\'s ready for anything.',
    features: ['All-Wheel Drive', 'Sunroof', 'Heated Seats', 'Android Auto'],
    status: 'Available',
    seller: { id: 1, name: 'Vientiane Motors', type: 'dealership', trustScore: 95 },
    reviews: [
        { id: 3, author: 'Bounmy S.', rating: 5, comment: 'Great family car. The purchase process was smooth and easy.', date: '2023-09-01' }
    ]
  },
  {
    id: 3,
    brand: 'Ford',
    model: 'F-150',
    year: 2019,
    price: 35000,
    mileage: 60000,
    type: CarType.Pickup,
    condition: CarCondition.Used,
    vin: '1FTFW1E5XKFCA34567',
    images: [
      'https://picsum.photos/seed/car3-1/800/600',
      'https://picsum.photos/seed/car3-2/800/600',
      'https://picsum.photos/seed/car3-3/800/600',
      'https://picsum.photos/seed/car3-4/800/600',
    ],
    description: 'The legendary Ford F-150. Built tough to handle any job you throw at it. This truck has been well-maintained and is equipped with a powerful V8 engine.',
    features: ['Towing Package', '4x4', 'Bed Liner', 'Touchscreen Display'],
    status: 'Sold',
    seller: { id: 2, name: 'Private Seller', type: 'private', trustScore: 88 },
    reviews: [
        { id: 4, author: 'Kham D.', rating: 5, comment: 'This truck is a beast! Got a great deal.', date: '2023-06-10' }
    ]
  },
  {
    id: 4,
    brand: 'BMW',
    model: '3 Series',
    year: 2022,
    price: 42000,
    mileage: 15000,
    type: CarType.Sedan,
    condition: CarCondition.Certified,
    vin: 'WBA330I0XNMFG89012',
    images: [
      'https://picsum.photos/seed/car4-1/800/600',
      'https://picsum.photos/seed/car4-2/800/600',
    ],
    description: 'Experience the ultimate driving machine. This low-mileage BMW 3 Series offers a perfect blend of performance, luxury, and technology. M-Sport package included.',
    features: ['Leather Seats', 'Harman Kardon Audio', 'Navigation', 'Sunroof'],
    status: 'Available',
    seller: { id: 1, name: 'Vientiane Motors', type: 'dealership', trustScore: 95 },
    reviews: [
         { id: 5, author: 'Chanthavong', rating: 5, comment: 'Drives like a dream. The certified warranty gives me peace of mind.', date: '2023-09-05' }
    ]
  },
  {
    id: 5,
    brand: 'Mazda',
    model: 'CX-5',
    year: 2021,
    price: 26500,
    mileage: 22000,
    type: CarType.SUV,
    condition: CarCondition.Used,
    vin: 'JM3KFBMDXML0123456',
    images: [
      'https://picsum.photos/seed/car5-1/800/600',
      'https://picsum.photos/seed/car5-2/800/600',
      'https://picsum.photos/seed/car5-3/800/600',
    ],
    description: 'A stylish and fun-to-drive crossover SUV. The Mazda CX-5 boasts a premium interior and responsive handling that sets it apart from the competition.',
    features: ['Bose Sound System', 'Adaptive Cruise Control', 'Heads-Up Display', 'AWD'],
    status: 'Available',
    seller: { id: 1, name: 'Vientiane Motors', type: 'dealership', trustScore: 95 },
    reviews: []
  },
  {
    id: 6,
    brand: 'Toyota',
    model: 'Hilux',
    year: 2022,
    price: 38000,
    mileage: 18000,
    type: CarType.Pickup,
    condition: CarCondition.Certified,
    vin: 'MR0FR22GXX0012345',
    images: [
      'https://picsum.photos/seed/car6-1/800/600',
      'https://picsum.photos/seed/car6-2/800/600',
      'https://picsum.photos/seed/car6-3/800/600',
    ],
    description: 'Unbreakable reliability. The Toyota Hilux is a world-renowned pickup known for its durability and off-road capability. This one is practically new.',
    features: ['Off-road Tires', 'Snorkel', 'LED Light Bar', '4x4'],
    status: 'Available',
    seller: { id: 1, name: 'Vientiane Motors', type: 'dealership', trustScore: 95 },
    reviews: [
        { id: 6, author: 'Sengdeuan', rating: 5, comment: 'The best truck for Laos roads. Very happy with my purchase.', date: '2023-08-20' }
    ]
  },
];

export const TESTIMONIALS_DATA = [
    {
        id: 1,
        name: 'Anousa K.',
        quote: 'The team at Vientiane Motors was incredibly helpful and transparent. They helped me find the perfect car for my family. Highly recommended!',
        car: '2020 Honda CR-V'
    },
    {
        id: 2,
        name: 'Linda S.',
        quote: 'I was nervous about buying a used car, but their certified pre-owned program gave me confidence. The car is fantastic and the service was top-notch.',
        car: '2021 Toyota Camry'
    },
    {
        id: 3,
        name: 'Phasouk V.',
        quote: 'A great selection of quality vehicles. I found a low-mileage pickup truck in excellent condition for a very fair price. The process was fast and easy.',
        car: '2022 Toyota Hilux'
    }
];


export const STORE_INFO = {
  name: 'Vientiane Motors',
  address: '123 Fa Ngum Road, Vientiane, Laos',
  phone: '+856 20 1234 5678',
  email: 'contact@vientianemotors.com',
  googleMapsUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.131175841097!2d102.60749891488523!3d17.9691959877041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3124687a74092b7b%3A0x84b90e6f333b2e5!2sPatuxay%20Park!5e0!3m2!1sen!2sla!4v1689669527329!5m2!1sen!2sla',
  social: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    tiktok: 'https://tiktok.com',
  },
};