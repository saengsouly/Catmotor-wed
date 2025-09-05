
export enum CarType {
  Sedan = 'Sedan',
  SUV = 'SUV',
  Pickup = 'Pickup',
  Hatchback = 'Hatchback',
  Coupe = 'Coupe',
}

export enum CarCondition {
  Used = 'Used',
  Certified = 'Certified Pre-Owned',
  New = 'New',
}

export interface Review {
  id: number;
  author: string;
  rating: number; // out of 5
  comment: string;
  date: string;
}

export interface Seller {
  id: number;
  name: string;
  type: 'dealership' | 'private';
  trustScore: number; // out of 100
}

export interface Car {
  id: number;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  type: CarType;
  condition: CarCondition;
  vin: string;
  images: string[];
  description: string;
  features: string[];
  status: 'Available' | 'Sold';
  reviews: Review[];
  seller: Seller;
}