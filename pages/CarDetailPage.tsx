
import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { CARS_DATA, STORE_INFO } from '../constants';
import { CheckIcon, CalendarIcon, GaugeIcon, PriceTagIcon, ShareIcon, StarIcon, ShieldCheckIcon, MailIcon, PhoneIcon } from '../components/IconComponents';

const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <StarIcon
          key={i}
          className={`w-5 h-5 ${i < Math.round(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
        />
      ))}
    </div>
);

const CarDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const car = CARS_DATA.find(c => c.id === Number(id));
  const [mainImage, setMainImage] = useState(car?.images[0]);
  const [formSubmitted, setFormSubmitted] = useState(false);

  if (!car) {
    return <Navigate to="/404" replace />;
  }
  
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real app, you'd handle form submission here (e.g., API call)
    setFormSubmitted(true);
  };
  
  const handleShare = () => {
    if(navigator.share) {
        navigator.share({
            title: `${car.brand} ${car.model} at Vientiane Motors`,
            text: `Check out this ${car.year} ${car.brand} ${car.model}!`,
            url: window.location.href
        }).catch(console.error);
    } else {
        navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
    }
  };


  return (
    <div className="bg-white p-4 sm:p-8 rounded-lg shadow-xl">
      <div className="flex flex-wrap justify-between items-start mb-4 gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-dark">{car.brand} {car.model}</h1>
          <p className="text-lg text-gray-600">{car.year} &middot; {car.condition}</p>
        </div>
        <button onClick={handleShare} className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-lg transition-colors">
          <ShareIcon className="w-5 h-5"/>
          <span className="hidden sm:inline">Share</span>
        </button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Image Gallery */}
          <div className="mb-8">
            <img src={mainImage} alt="Main car view" className="w-full h-auto object-cover rounded-lg shadow-md mb-4" />
            <div className="grid grid-cols-5 gap-2">
              {car.images.map((img, index) => (
                <img 
                  key={index} 
                  src={img} 
                  alt={`Car view ${index+1}`} 
                  className={`w-full aspect-square object-cover rounded-md cursor-pointer border-4 transition-all ${mainImage === img ? 'border-brand-blue scale-105' : 'border-transparent hover:border-brand-blue/50'}`}
                  onClick={() => setMainImage(img)}
                />
              ))}
            </div>
          </div>
          
          {/* Car Details */}
          <div className="mb-8">
             <h2 className="text-2xl font-bold text-neutral-dark border-b-2 border-brand-gold pb-2 mb-4">Vehicle Details</h2>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-base">
                <div className="flex items-center gap-3"><CalendarIcon className="w-6 h-6 text-brand-blue flex-shrink-0"/> <div><strong>Year:</strong> {car.year}</div></div>
                <div className="flex items-center gap-3"><GaugeIcon className="w-6 h-6 text-brand-blue flex-shrink-0"/> <div><strong>Mileage:</strong> {car.mileage.toLocaleString()} km</div></div>
                <div className="flex items-center gap-3"><div><strong>Type:</strong> {car.type}</div></div>
                <div className="flex items-center gap-3"><div><strong>VIN:</strong> {car.vin}</div></div>
             </div>
             <p className="mt-6 text-gray-700 leading-relaxed">{car.description}</p>
          </div>
          
          {/* Features */}
          <div className="mb-8">
             <h2 className="text-2xl font-bold text-neutral-dark border-b-2 border-brand-gold pb-2 mb-4">Key Features</h2>
             <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {car.features.map(feature => (
                    <li key={feature} className="flex items-center gap-3 text-gray-800">
                        <CheckIcon className="w-6 h-6 text-green-500 flex-shrink-0"/>
                        {feature}
                    </li>
                ))}
             </ul>
          </div>

          {/* Customer Reviews */}
           <div>
             <h2 className="text-2xl font-bold text-neutral-dark border-b-2 border-brand-gold pb-2 mb-4">Customer Reviews</h2>
             {car.reviews.length > 0 ? (
                <div className="space-y-6">
                    {car.reviews.map(review => (
                        <div key={review.id} className="border-b pb-4">
                            <div className="flex items-center justify-between">
                                <h4 className="font-bold text-neutral-dark">{review.author}</h4>
                                <StarRating rating={review.rating} />
                            </div>
                            <p className="text-sm text-gray-500 mb-2">{review.date}</p>
                            <p className="text-gray-700">{review.comment}</p>
                        </div>
                    ))}
                </div>
             ) : (
                <p className="text-gray-600">No reviews yet for this vehicle.</p>
             )}
          </div>

        </div>
        
        {/* Sidebar */}
        <div className="lg:col-span-1">
           <div className="sticky top-24 space-y-6">
                <div className="bg-neutral-light p-6 rounded-lg border">
                    <p className="text-4xl font-bold text-brand-blue flex items-center gap-2">
                        <PriceTagIcon className="w-8 h-8"/>
                        {formatter.format(car.price)}
                    </p>
                    {car.status === 'Sold' && <p className="mt-2 text-2xl font-bold text-red-600">This vehicle has been sold.</p>}
                </div>

                <div className="bg-neutral-light p-6 rounded-lg border">
                    <h3 className="text-xl font-bold text-neutral-dark mb-4">Seller Information</h3>
                    <div className="flex items-center gap-3 mb-2">
                        <ShieldCheckIcon className="w-8 h-8 text-brand-blue"/>
                        <div>
                            <p className="font-bold">{car.seller.name}</p>
                            <p className="text-sm text-gray-600">Trust Score: {car.seller.trustScore}/100</p>
                        </div>
                    </div>
                </div>

                <div className="bg-neutral-light p-6 rounded-lg border">
                    <h3 className="text-xl font-bold text-neutral-dark mb-4">Book a Test Drive</h3>
                    {car.status === 'Available' ? (
                      formSubmitted ? (
                          <div className="text-center p-4 bg-green-100 text-green-800 rounded-lg">
                              <h4 className="font-bold">Thank You!</h4>
                              <p>Your request has been sent. We will contact you shortly to confirm.</p>
                          </div>
                      ) : (
                          <form onSubmit={handleFormSubmit} className="space-y-4">
                              <input type="text" placeholder="Your Name" required className="w-full p-2 border border-gray-300 rounded-md"/>
                              <input type="email" placeholder="Your Email" required className="w-full p-2 border border-gray-300 rounded-md"/>
                              <input type="tel" placeholder="Your Phone (Optional)" className="w-full p-2 border border-gray-300 rounded-md"/>
                              <textarea placeholder="Preferred date and time..." rows={3} className="w-full p-2 border border-gray-300 rounded-md"></textarea>
                              <button type="submit" className="w-full bg-brand-blue text-white font-bold py-3 rounded-lg hover:bg-opacity-90 transition-colors">
                                  Request Test Drive
                              </button>
                          </form>
                      )
                    ) : (
                       <p className="text-gray-600">This car is no longer available, but you can <Link to="/cars" className="text-brand-blue font-semibold hover:underline">browse similar vehicles</Link>.</p>
                    )}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetailPage;