import React, { useState } from 'react';
import { MENU_ITEMS, MenuItem } from '@/lib/constants';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search, Plus, Download } from 'lucide-react';
import { toast } from 'sonner';

interface MenuProps {
  onAddToCart: (item: MenuItem) => void;
}

export const Menu: React.FC<MenuProps> = ({ onAddToCart }) => {
  const [search, setSearch] = useState('');

  const filteredItems = MENU_ITEMS.filter((item) => 
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
        <div className="space-y-1 text-center md:text-left">
          <h2 className="text-3xl font-bold tracking-tight">Hotel Menu</h2>
          <p className="text-sm text-muted-foreground">Select from our premium food and beverage offerings.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <Button 
            variant="outline" 
            className="gap-2 shrink-0"
            onClick={() => toast.success("Menu download started...", { description: "The Haile Grand Digital Menu PDF is being prepared." })}
          >
            <Download className="h-4 w-4" /> Download Menu
          </Button>
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search our selection..."
            className="pl-9"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <Card key={item.id} className="overflow-hidden group">
            <div className="relative aspect-square">
              <img
                src={item.image}
                alt={item.name}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              <Badge className="absolute top-2 right-2">${item.price}</Badge>
            </div>
            <CardContent className="p-4 space-y-2">
              <h3 className="font-bold line-clamp-1">{item.name}</h3>
              <p className="text-xs text-muted-foreground line-clamp-2">{item.description}</p>
              <Badge variant="outline" className="text-[10px]">{item.subCategory}</Badge>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button className="w-full gap-2" size="sm" onClick={() => onAddToCart(item)}>
                <Plus className="h-4 w-4" /> Add to Order
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};
