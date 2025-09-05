
import React, { useState, useMemo } from 'react';
import CarCard from '../components/CarCard';
import { CARS_DATA } from '../constants';
import { Car, CarType } from '../types';

const ITEMS_PER_PAGE = 6;

const CarListPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [maxPrice, setMaxPrice] = useState(50000);
  const [sortBy, setSortBy] = useState('default');
  const [currentPage, setCurrentPage] = useState(1);
  
  const uniqueBrands = useMemo(() => [...new Set(CARS_DATA.map(car => car.brand))], []);

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedBrand('');
    setSelectedType('');
    setMaxPrice(50000);
    setSortBy('default');
    setCurrentPage(1);
  };

  const filteredCars = useMemo(() => {
    let cars = CARS_DATA.filter(car => {
      const searchTermMatch = `${car.brand} ${car.model} ${car.year}`.toLowerCase().includes(searchTerm.toLowerCase());
      const brandMatch = selectedBrand ? car.brand === selectedBrand : true;
      const typeMatch = selectedType ? car.type === selectedType : true;
      const priceMatch = car.price <= maxPrice;
      return searchTermMatch && brandMatch && typeMatch && priceMatch;
    });

    switch (sortBy) {
        case 'price-asc':
            cars.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            cars.sort((a, b) => b.price - a.price);
            break;
        case 'year-desc':
            cars.sort((a, b) => b.year - a.year);
            break;
        default:
            break;
    }

    return cars;
  }, [searchTerm, selectedBrand, selectedType, maxPrice, sortBy]);

  const totalPages = Math.ceil(filteredCars.length / ITEMS_PER_PAGE);
  const paginatedCars = filteredCars.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };
  
  return (
    <div>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="flex flex-wrap justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-neutral-dark">Find Your Perfect Car</h2>
          <p className="text-gray-600 font-medium">{filteredCars.length} results found</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Search by make, model..."
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-brand-blue focus:border-brand-blue"
            value={searchTerm}
            onChange={e => { setSearchTerm(e.target.value); setCurrentPage(1); }}
          />
          <select
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-brand-blue focus:border-brand-blue"
            value={selectedBrand}
            onChange={e => { setSelectedBrand(e.target.value); setCurrentPage(1); }}
          >
            <option value="">All Brands</option>
            {uniqueBrands.map(brand => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>
          <select
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-brand-blue focus:border-brand-blue"
            value={selectedType}
            onChange={e => { setSelectedType(e.target.value); setCurrentPage(1); }}
          >
            <option value="">All Types</option>
            {Object.values(CarType).map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
                <label htmlFor="maxPrice" className="block text-sm font-medium text-gray-700">Max Price: ${maxPrice.toLocaleString()}</label>
                <input
                id="maxPrice"
                type="range"
                min="10000"
                max="50000"
                step="1000"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                value={maxPrice}
                onChange={e => { setMaxPrice(Number(e.target.value)); setCurrentPage(1); }}
                />
            </div>
            <select
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-brand-blue focus:border-brand-blue"
                value={sortBy}
                onChange={e => { setSortBy(e.target.value); setCurrentPage(1); }}
            >
                <option value="default">Sort By</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="year-desc">Year: Newest First</option>
            </select>
        </div>
        <div className="mt-4 text-right">
            <button onClick={resetFilters} className="text-sm font-semibold text-brand-blue hover:underline">Reset Filters</button>
        </div>
      </div>

      {paginatedCars.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedCars.map(car => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-12 space-x-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-4 py-2 rounded-md font-semibold transition-colors ${
                    currentPage === page
                      ? 'bg-brand-blue text-white shadow-md'
                      : 'bg-white text-brand-blue hover:bg-gray-100'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-16 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-neutral-dark">No Cars Found</h3>
          <p className="text-gray-600 mt-2">Try adjusting your search filters.</p>
        </div>
      )}
    </div>
  );
};

export default CarListPage;