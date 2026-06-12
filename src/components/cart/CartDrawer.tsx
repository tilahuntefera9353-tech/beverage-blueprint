import React from 'react';
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetFooter,
  SheetDescription
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { ShoppingBag, Trash2, Plus, Minus } from 'lucide-react';
import { CartItem as CartItemType } from '@/hooks/use-cart';
import { toast } from 'sonner';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItemType[];
  totalPrice: number;
  onUpdateQuantity: (id: string, qty: number) => void;
  onRemove: (id: string) => void;
  onClear: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  totalPrice,
  onUpdateQuantity,
  onRemove,
  onClear,
}) => {
  const handleCheckout = () => {
    toast.success("Order placed successfully!", {
      description: "Our staff will begin preparing your order shortly.",
    });
    onClear();
    onClose();
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-md flex flex-col h-full">
        <SheetHeader className="space-y-1">
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" /> Your Order
          </SheetTitle>
          <SheetDescription>
            Review your selection before placing the order.
          </SheetDescription>
        </SheetHeader>

        <div className="flex-grow overflow-hidden mt-6">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-60">
              <ShoppingBag className="h-12 w-12" />
              <p>Your cart is empty.</p>
              <Button variant="outline" onClick={onClose}>Browse Menu</Button>
            </div>
          ) : (
            <ScrollArea className="h-full pr-4">
              <div className="space-y-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="h-20 w-20 rounded-lg overflow-hidden shrink-0 border">
                      <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                    </div>
                    <div className="flex-grow space-y-1">
                      <div className="flex justify-between items-start">
                        <h4 className="font-medium text-sm leading-none">{item.name}</h4>
                        <span className="text-sm font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">${item.price.toFixed(2)} each</p>
                      
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border rounded-md">
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-7 w-7 rounded-none"
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center text-xs font-medium">{item.quantity}</span>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-7 w-7 rounded-none"
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-7 w-7 text-destructive hover:text-destructive hover:bg-destructive/10"
                          onClick={() => onRemove(item.id)}
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          )}
        </div>

        {cart.length > 0 && (
          <div className="mt-auto space-y-4">
            <Separator />
            <div className="space-y-1.5">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-lg pt-2">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </div>
            <Button className="w-full h-12 text-base font-bold" onClick={handleCheckout}>
              Place Order
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};
