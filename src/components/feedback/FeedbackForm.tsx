import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Star, Send } from 'lucide-react';
import { toast } from 'sonner';

export const FeedbackForm: React.FC = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) {
      toast.error("Please select a rating.");
      return;
    }
    
    toast.success("Thank you for your feedback!", {
      description: "We appreciate your input and will use it to improve our service.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', comment: '' });
    setRating(0);
  };

  return (
    <div className="max-w-2xl mx-auto py-8">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Share Your Experience</CardTitle>
          <CardDescription>
            How was your meal or stay? We'd love to hear from you.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col items-center justify-center space-y-2 pb-4">
              <Label className="text-base">Your Rating</Label>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    className="p-1 transition-transform hover:scale-110"
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    onClick={() => setRating(star)}
                  >
                    <Star
                      className={`h-8 w-8 ${
                        (hoverRating || rating) >= star
                          ? 'fill-primary text-primary'
                          : 'text-muted-foreground'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="comment">Your Comments</Label>
              <Textarea
                id="comment"
                placeholder="Tell us about your experience..."
                className="min-h-[120px]"
                value={formData.comment}
                onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                required
              />
            </div>

            <Button type="submit" className="w-full gap-2">
              <Send className="h-4 w-4" /> Submit Feedback
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
