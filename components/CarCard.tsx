
import React from 'react';
import { Link } from 'react-router-dom';
import { Car } from '../types';
import { CalendarIcon, GaugeIcon, PriceTagIcon, StarIcon } from './IconComponents';

interface CarCardProps {
  car: Car;
}

const StarRating = ({ rating, reviewCount }: { rating: number, reviewCount: number }) => {
  if (reviewCount === 0) {
    return <div className="text-xs text-gray-500">No reviews yet</div>;
  }
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <StarIcon
          key={i}
          className={`w-4 h-4 ${i < Math.round(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
        />
      ))}
      <span className="text-xs text-gray-600 ml-1">({reviewCount})</span>
    </div>
  );
};


const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });

  const avgRating = car.reviews.length > 0
    ? car.reviews.reduce((acc, review) => acc + review.rating, 0) / car.reviews.length
    : 0;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group flex flex-col">
      <Link to={`/cars/${car.id}`} className="block flex flex-col flex-grow">
        <div className="relative">
          <img src={car.images[0]} alt={`${car.brand} ${car.model}`} className="w-full h-56 object-cover" />
           {car.status === 'Sold' && (
             <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 flex items-center justify-center">
                <span className="text-white text-3xl font-bold transform -rotate-12 border-4 border-red-500 p-4 rounded-md">SOLD</span>
              </div>
           )}
          <div className="absolute top-2 right-2 bg-brand-blue text-white text-sm font-semibold py-1 px-3 rounded-full shadow-md">
            {car.type}
          </div>
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <p className="text-sm text-gray-500">{car.condition}</p>
          <h3 className="text-xl font-bold text-neutral-dark mt-1 truncate group-hover:text-brand-blue transition-colors">
            {car.brand} {car.model}
          </h3>
          <div className="mt-2">
            <StarRating rating={avgRating} reviewCount={car.reviews.length} />
          </div>
          <div className="mt-4 flex justify-between items-center text-gray-600">
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-5 h-5 text-brand-blue" />
              <span>{car.year}</span>
            </div>
            <div className="flex items-center gap-2">
              <GaugeIcon className="w-5 h-5 text-brand-blue" />
              <span>{car.mileage.toLocaleString()} km</span>
            </div>
          </div>
          <div className="mt-auto pt-4">
            <p className="text-2xl font-bold text-brand-blue flex items-center gap-2">
                <PriceTagIcon className="w-6 h-6"/>
                {formatter.format(car.price)}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CarCard;