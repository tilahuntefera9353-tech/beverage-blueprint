import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MenuItem } from '@/lib/constants';
import { Plus } from 'lucide-react';
import { motion } from 'framer-motion';

interface MenuItemCardProps {
  item: MenuItem;
  onAddToCart: (item: MenuItem) => void;
}

export const MenuItemCard: React.FC<MenuItemCardProps> = ({ item, onAddToCart }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden h-full flex flex-col group">
        <div className="relative aspect-video overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
          <Badge className="absolute top-2 right-2 bg-background/80 text-foreground hover:bg-background/90 backdrop-blur-sm">
            ${item.price.toFixed(2)}
          </Badge>
        </div>
        <CardContent className="p-4 flex-grow">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-lg line-clamp-1">{item.name}</h3>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {item.description}
          </p>
          <div className="mt-3">
            <Badge variant="outline" className="text-[10px] uppercase tracking-wider">
              {item.subCategory}
            </Badge>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Button 
            className="w-full gap-2" 
            onClick={() => onAddToCart(item)}
          >
            <Plus className="h-4 w-4" /> Add to Order
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
