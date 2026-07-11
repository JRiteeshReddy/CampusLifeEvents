"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Save } from "lucide-react";
import { toast } from "sonner";

export default function SettingsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Settings updated!", {
        description: "Your club profile has been successfully saved."
      });
    }, 1000);
  };

  return (
    <div className="space-y-6 max-w-4xl pb-10">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Club Settings</h1>
        <p className="text-muted-foreground mt-1">Manage your club's public profile and contact information.</p>
      </div>

      <form onSubmit={handleSubmit}>
        <Card className="bg-card border-border/50 shadow-sm">
          <CardHeader>
            <CardTitle>Profile Details</CardTitle>
            <CardDescription>This information will be displayed publicly on your club's page.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="clubName">Club Name</Label>
                <Input id="clubName" defaultValue="GUSAC" disabled className="bg-muted/50 cursor-not-allowed" />
                <p className="text-xs text-muted-foreground">To change your club's name, please contact Campus Life admin.</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Input id="category" defaultValue="Technical" disabled className="bg-muted/50 cursor-not-allowed" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">About the Club</Label>
              <textarea 
                id="description" 
                className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                defaultValue="GITAM University Science and Activity Centre."
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="email">Contact Email</Label>
                <Input id="email" type="email" defaultValue="gusac@gitam.edu" required className="bg-background" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="website">Website (Optional)</Label>
                <Input id="website" type="url" placeholder="https://..." className="bg-background" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="instagram">Instagram Handle (Optional)</Label>
                <Input id="instagram" placeholder="@gusac_gitam" className="bg-background" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="linkedin">LinkedIn Page (Optional)</Label>
                <Input id="linkedin" placeholder="linkedin.com/company/gusac" className="bg-background" />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end gap-4 border-t border-border/50 pt-6">
            <Button type="button" variant="outline">Discard Changes</Button>
            <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary-dark" disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : (
                <>
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </>
              )}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
