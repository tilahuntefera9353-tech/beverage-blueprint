import React from 'react';
import { BeverageRecipe } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2 } from 'lucide-react';

interface RecipeCardProps {
  recipe: BeverageRecipe;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <Card className="overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="lg:col-span-1 relative h-64 md:h-full">
          <img
            src={recipe.image}
            alt={recipe.name}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="lg:col-span-2 p-6 space-y-6">
          <CardHeader className="p-0">
            <CardTitle className="text-2xl">{recipe.name}</CardTitle>
          </CardHeader>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h4 className="font-semibold text-sm uppercase tracking-wider text-primary">Ingredients</h4>
              <ul className="space-y-2">
                {recipe.ingredients.map((ing, i) => (
                  <li key={i} className="text-sm flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    {ing}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-sm uppercase tracking-wider text-primary">Instructions</h4>
              <ul className="space-y-3">
                {recipe.steps.map((step, i) => (
                  <li key={i} className="text-sm flex gap-3">
                    <span className="font-bold text-primary/50 shrink-0">{i + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
