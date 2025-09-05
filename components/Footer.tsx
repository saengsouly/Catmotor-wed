
import React from 'react';
import { Link } from 'react-router-dom';
import { STORE_INFO } from '../constants';
import { FacebookIcon, InstagramIcon, TikTokIcon, MailIcon, PhoneIcon, LocationIcon } from './IconComponents';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-dark text-neutral-light">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div>
            <h3 className="text-xl font-bold text-brand-gold mb-4">{STORE_INFO.name}</h3>
            <p className="text-gray-400">Your trusted partner for quality pre-owned vehicles in Vientiane. We pride ourselves on transparency and customer satisfaction.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-brand-gold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <LocationIcon className="w-5 h-5 mt-1 text-brand-gold" />
                <span>{STORE_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon className="w-5 h-5 text-brand-gold" />
                <a href={`tel:${STORE_INFO.phone}`} className="hover:text-brand-gold transition-colors">{STORE_INFO.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <MailIcon className="w-5 h-5 text-brand-gold" />
                <a href={`mailto:${STORE_INFO.email}`} className="hover:text-brand-gold transition-colors">{STORE_INFO.email}</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-brand-gold mb-4">Follow Us</h3>
            <div className="flex items-center gap-4">
              <a href={STORE_INFO.social.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-gold transition-colors">
                <FacebookIcon className="w-7 h-7" />
              </a>
              <a href={STORE_INFO.social.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-gold transition-colors">
                <InstagramIcon className="w-7 h-7" />
              </a>
              <a href={STORE_INFO.social.tiktok} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-gold transition-colors">
                <TikTokIcon className="w-7 h-7" />
              </a>
            </div>
          </div>

        </div>
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} {STORE_INFO.name}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
