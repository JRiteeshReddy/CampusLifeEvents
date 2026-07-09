"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { CheckCircle2 } from "lucide-react";

export function EventRegistrationDialog({ eventId, isFull }: { eventId: string, isFull: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API Call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      toast.success("Successfully registered for the event!");
    }, 1500);
  };

  if (isSuccess) {
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md text-center p-8">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center text-primary mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <DialogTitle className="text-2xl text-foreground">Registration Successful!</DialogTitle>
            <p className="text-muted-foreground text-sm">
              Your registration has been confirmed. You will receive an email shortly with the details.
            </p>
            <Button onClick={() => setIsOpen(false)} className="w-full mt-6 bg-primary text-primary-foreground hover:bg-dark-primary">
              Done
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger 
        render={
          <Button size="lg" disabled={isFull} className="w-full md:w-auto px-12 h-14 text-lg rounded-xl bg-primary text-primary-foreground hover:bg-dark-primary">
            {isFull ? 'Event Full' : 'Register Now'}
          </Button>
        }
      />
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">Event Registration</DialogTitle>
          <DialogDescription>
            Please fill in your details to register. All fields except phone are required.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input id="fullName" required placeholder="John Doe" className="border-border focus-visible:ring-primary" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="regNumber">Registration Number</Label>
            <Input id="regNumber" required placeholder="1234567890" className="border-border focus-visible:ring-primary" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">University Email</Label>
            <Input id="email" type="email" required placeholder="jdoe@gitam.in" className="border-border focus-visible:ring-primary" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number (Optional)</Label>
            <Input id="phone" type="tel" placeholder="+91 9876543210" className="border-border focus-visible:ring-primary" />
          </div>
          
          <Button type="submit" disabled={isSubmitting} className="w-full h-12 mt-4 bg-primary text-primary-foreground hover:bg-dark-primary text-lg">
            {isSubmitting ? "Submitting..." : "Confirm Registration"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
