"use client";

import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Lock } from "lucide-react";
import { loginAction } from "@/app/actions/auth";

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(loginAction, null);

  useEffect(() => {
    if (state?.error) {
      toast.error(state.error);
    }
  }, [state]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[100px]" />
        <div className="absolute bottom-[20%] -left-[10%] w-[40%] h-[60%] rounded-full bg-secondary/20 blur-[100px]" />
      </div>

      <Card className="w-full max-w-md z-10 border-border/50 shadow-xl shadow-primary/5 bg-card">
        <CardHeader className="space-y-1 text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-2xl mx-auto flex items-center justify-center mb-4">
            <Lock className="w-8 h-8 text-primary" />
          </div>
          <CardTitle className="text-2xl font-bold text-foreground">Welcome back</CardTitle>
          <CardDescription>
            Enter your credentials to access the admin portal
          </CardDescription>
        </CardHeader>
        <form action={formAction}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <Input 
                id="email"
                name="email" 
                type="email" 
                placeholder="admin@gitam.in" 
                required 
                className="border-border focus-visible:ring-primary h-12"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link href="#" className="text-sm font-medium text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>
              <Input 
                id="password" 
                name="password"
                type="password" 
                required
                className="border-border focus-visible:ring-primary h-12"
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button className="w-full h-12 bg-primary text-primary-foreground hover:bg-dark-primary text-lg" type="submit" disabled={isPending}>
              {isPending ? "Authenticating..." : "Sign in"}
            </Button>
            <div className="mt-6 text-center text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary transition-colors">
                &larr; Back to Home
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
