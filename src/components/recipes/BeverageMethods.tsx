import React from 'react';
import { BEVERAGE_RECIPES, BeverageRecipe } from '@/lib/constants';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Clock, Thermometer, Scale, Beaker, GlassWater, Download, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export const BeverageMethods: React.FC = () => {
  const categories: BeverageRecipe['category'][] = ['Coffee', 'Tea', 'Iced Drink'];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Standard Operating Procedures</h2>
        <p className="text-muted-foreground">
          Detailed technical specifications and preparation methods for our signature beverages.
        </p>
      </div>

      <Tabs defaultValue="Coffee" className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList className="grid grid-cols-3 w-full max-w-md">
            {categories.map(cat => (
              <TabsTrigger key={cat} value={cat}>{cat === 'Iced Drink' ? 'Iced' : cat}</TabsTrigger>
            ))}
          </TabsList>
        </div>

        {categories.map(cat => (
          <TabsContent key={cat} value={cat} className="space-y-12">
            <div className="grid grid-cols-1 gap-12">
              {BEVERAGE_RECIPES.filter(r => r.category === cat).map(recipe => (
                <RecipeDetail key={recipe.id} recipe={recipe} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

const RecipeDetail: React.FC<{ recipe: BeverageRecipe }> = ({ recipe }) => (
  <Card className="overflow-hidden border-none shadow-none bg-transparent">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Image and Technical Stats */}
      <div className="lg:col-span-5 space-y-6">
        <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
          <img src={recipe.image} alt={recipe.name} className="w-full h-full object-cover" />
          <div className="absolute top-4 left-4">
            <Badge className="bg-background/80 text-foreground backdrop-blur-md border-none">
              {recipe.category}
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <StatItem icon={Beaker} label="Std. Yield" value={recipe.yield} />
          <StatItem icon={Thermometer} label="Temperature" value={recipe.temperature} />
          <StatItem icon={Scale} label="Qty (Grams)" value={recipe.grams} />
          <StatItem icon={Clock} label="Making Time" value={recipe.time} />
        </div>
        
        <div className="p-4 rounded-xl bg-primary/5 border border-primary/10 flex gap-3">
          <GlassWater className="h-5 w-5 text-primary shrink-0" />
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-primary/70">Serving Method</span>
            <p className="text-sm font-medium">{recipe.servingMethod}</p>
          </div>
        </div>
      </div>

      {/* Preparation Details */}
      <div className="lg:col-span-7 space-y-8">
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h3 className="text-3xl font-bold tracking-tight">{recipe.name}</h3>
            <Button 
              size="sm" 
              variant="secondary" 
              className="gap-2 self-start sm:self-auto"
              onClick={() => toast.success(`${recipe.name} Recipe Card Downloaded`, {
                description: "Standard Operating Procedure saved for offline use.",
                icon: <FileText className="h-4 w-4" />
              })}
            >
              <Download className="h-4 w-4" /> Save Guide
            </Button>
          </div>
          <p className="text-muted-foreground leading-relaxed">{recipe.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-primary flex items-center gap-2">
              <span className="h-1 w-4 bg-primary rounded-full" />
              Ingredients
            </h4>
            <ul className="space-y-3">
              {recipe.ingredients.map((ing, i) => (
                <li key={i} className="text-sm flex items-start gap-3 text-muted-foreground">
                  <span className="h-5 w-5 rounded-full bg-primary/10 text-primary text-[10px] font-bold flex items-center justify-center shrink-0">
                    +
                  </span>
                  {ing}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-primary flex items-center gap-2">
              <span className="h-1 w-4 bg-primary rounded-full" />
              Making Method
            </h4>
            <ol className="space-y-4">
              {recipe.steps.map((step, i) => (
                <li key={i} className="text-sm flex gap-4 text-muted-foreground leading-relaxed">
                  <span className="font-black text-primary/20 text-lg -mt-1">{i + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  </Card>
);

const StatItem = ({ icon: Icon, label, value }: { icon: any, label: string, value: string }) => (
  <div className="flex flex-col p-3 rounded-xl bg-card border shadow-sm">
    <div className="flex items-center gap-2 mb-1">
      <Icon className="h-3.5 w-3.5 text-muted-foreground" />
      <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{label}</span>
    </div>
    <span className="text-sm font-bold">{value}</span>
  </div>
);
