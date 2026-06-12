import React from 'react';
import { HOTEL_INFO } from '@/lib/constants';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Mail, Clock, Smartphone, Globe, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export const HotelInfo: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="relative h-[400px] rounded-2xl overflow-hidden">
        <img
          src={HOTEL_INFO.images[0]}
          alt={HOTEL_INFO.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center p-6">
          <div className="max-w-2xl space-y-4">
            <div className="flex flex-col items-center gap-2">
              <div className="flex gap-1">
                {[...Array(HOTEL_INFO.starRating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">{HOTEL_INFO.name}</h2>
            </div>
            <p className="text-lg text-white/90">{HOTEL_INFO.description}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: MapPin, title: "Location", text: HOTEL_INFO.address, link: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(HOTEL_INFO.address)}` },
          { icon: Clock, title: "Service", text: HOTEL_INFO.openingHours },
          { icon: Phone, title: "Contact", text: HOTEL_INFO.phone, link: `tel:${HOTEL_INFO.phone}` }
        ].map((item, i) => (
          <Card key={i}>
            {item.link ? (
              <a href={item.link} className="block transition-transform hover:scale-[1.02]">
                <CardContent className="pt-6 text-center space-y-3">
                  <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.text}</p>
                </CardContent>
              </a>
            ) : (
              <CardContent className="pt-6 text-center space-y-3">
                <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.text}</p>
              </CardContent>
            )}
          </Card>
        ))}
      </div>

      <Card className="bg-primary text-primary-foreground overflow-hidden">
        <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <Badge variant="outline" className="text-primary-foreground border-primary-foreground/30 bg-primary-foreground/10 px-3 py-1">
              Guest Services App
            </Badge>
            <h3 className="text-3xl font-bold">Take Haile Grand with you</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Install our web app on your device for instant access to the menu, room service, and technical guides. 
              No store download required—works offline and uses minimal storage.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button 
                variant="secondary" 
                size="lg" 
                className="gap-2"
                onClick={() => toast.info("To install: Tap the share icon in your browser and select 'Add to Home Screen'.")}
              >
                <Smartphone className="h-5 w-5" /> Install App
              </Button>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="bg-white p-6 rounded-2xl shadow-2xl rotate-3">
              <div className="w-40 h-40 bg-muted rounded-lg flex flex-col items-center justify-center text-muted-foreground gap-2">
                <Globe className="h-10 w-10 text-primary" />
                <span className="text-[10px] font-bold text-center uppercase tracking-widest px-4">Scan to Share App</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
