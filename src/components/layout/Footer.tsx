import React from 'react';
import { UtensilsCrossed, Mail, Phone, MapPin } from 'lucide-react';
import { HOTEL_INFO } from '@/lib/constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-muted py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <UtensilsCrossed className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">{HOTEL_INFO.name}</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Providing exceptional culinary experiences and luxurious hospitality since 2010.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Contact Us</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> {HOTEL_INFO.address}
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> {HOTEL_INFO.phone}
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> {HOTEL_INFO.email}
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Opening Hours</h4>
            <p className="text-sm text-muted-foreground">
              {HOTEL_INFO.openingHours}
            </p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} {HOTEL_INFO.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
