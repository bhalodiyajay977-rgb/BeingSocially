import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from 'sonner';
import { MessageCircle } from 'lucide-react';

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    businessType: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.businessType) {
      toast.error('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success('Thank you! We will contact you soon.');
      setFormData({ name: '', phone: '', businessType: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="bg-card rounded-2xl p-8 border border-border">
      <h3 className="text-2xl font-semibold mb-6">Get your free marketing plan</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="name" className="text-sm font-medium mb-2 block">
            Your name
          </Label>
          <Input
            id="name"
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="bg-background text-foreground placeholder:text-muted-foreground"
            required
          />
        </div>

        <div>
          <Label htmlFor="phone" className="text-sm font-medium mb-2 block">
            Phone number
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="bg-background text-foreground placeholder:text-muted-foreground"
            required
          />
        </div>

        <div>
          <Label htmlFor="businessType" className="text-sm font-medium mb-2 block">
            Business type
          </Label>
          <Select value={formData.businessType} onValueChange={(value) => setFormData({ ...formData, businessType: value })}>
            <SelectTrigger className="bg-background text-foreground">
              <SelectValue placeholder="Select your business type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ecommerce">E-commerce</SelectItem>
              <SelectItem value="services">Services</SelectItem>
              <SelectItem value="retail">Retail</SelectItem>
              <SelectItem value="restaurant">Restaurant</SelectItem>
              <SelectItem value="fitness">Fitness</SelectItem>
              <SelectItem value="realestate">Real Estate</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button 
          type="submit" 
          className="btn-primary w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Get free marketing plan'}
        </Button>
      </form>

      <div className="mt-6 pt-6 border-t border-border text-center">
        <p className="text-sm text-muted-foreground mb-3">Or chat with us directly</p>
        <a 
          href="https://wa.me/919876543210" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors duration-200"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="font-medium">WhatsApp us</span>
        </a>
      </div>
    </div>
  );
};

export default LeadForm;