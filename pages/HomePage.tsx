
import React from 'react';
import { Link } from 'react-router-dom';
import CarCard from '../components/CarCard';
import { CARS_DATA, TESTIMONIALS_DATA, STORE_INFO } from '../constants';
import { ShieldCheckIcon, UserGroupIcon, WrenchScrewdriverIcon } from '../components/IconComponents';

const HomePage: React.FC = () => {
  const featuredCars = CARS_DATA.filter(car => car.status === 'Available').slice(0, 3);

  return (
    <div className="space-y-16 md:space-y-24">
      <section className="relative bg-brand-blue rounded-lg shadow-xl text-white py-20 px-8 text-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{backgroundImage: "url('https://picsum.photos/seed/hero/1600/900')"}}></div>
         <div className="absolute inset-0 bg-gradient-to-t from-brand-blue via-brand-blue/80 to-transparent"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-brand-gold">Find Your Next Ride</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Quality used cars you can trust. Browse our curated selection of pre-owned vehicles at competitive prices.
          </p>
          <Link 
            to="/cars"
            className="bg-brand-gold text-brand-blue font-bold text-lg py-3 px-8 rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View All Cars
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center text-neutral-dark mb-2">Featured Vehicles</h2>
        <p className="text-center text-gray-600 mb-10">Get started with some of our top picks</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCars.map(car => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
        <div className="text-center mt-12">
           <Link 
            to="/cars"
            className="bg-brand-blue text-white font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Explore More
          </Link>
        </div>
      </section>

      <section className="bg-white p-10 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center text-neutral-dark mb-10">Why Choose {STORE_INFO.name}?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div className="flex flex-col items-center">
                <div className="bg-brand-blue text-brand-gold rounded-full p-4 mb-4">
                    <ShieldCheckIcon className="w-10 h-10"/>
                </div>
                <h3 className="text-xl font-bold text-neutral-dark mb-2">Trusted & Verified</h3>
                <p className="text-gray-600">Every car in our inventory undergoes a rigorous multi-point inspection to ensure it meets our high standards of quality and safety.</p>
            </div>
             <div className="flex flex-col items-center">
                <div className="bg-brand-blue text-brand-gold rounded-full p-4 mb-4">
                    <UserGroupIcon className="w-10 h-10"/>
                </div>
                <h3 className="text-xl font-bold text-neutral-dark mb-2">Customer-Focused Service</h3>
                <p className="text-gray-600">Our dedicated team is here to guide you through every step, offering transparent advice and a hassle-free buying experience.</p>
            </div>
             <div className="flex flex-col items-center">
                <div className="bg-brand-blue text-brand-gold rounded-full p-4 mb-4">
                    <WrenchScrewdriverIcon className="w-10 h-10"/>
                </div>
                <h3 className="text-xl font-bold text-neutral-dark mb-2">After-Sales Support</h3>
                <p className="text-gray-600">We stand by our vehicles. Benefit from our dedicated after-sales support and warranty options for your peace of mind.</p>
            </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center text-neutral-dark mb-10">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS_DATA.map(testimonial => (
                <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-brand-gold">
                    <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                    <div className="mt-4 text-right">
                        <p className="font-bold text-neutral-dark">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">Purchased a {testimonial.car}</p>
                    </div>
                </div>
            ))}
        </div>
      </section>

    </div>
  );
};

export default HomePage;