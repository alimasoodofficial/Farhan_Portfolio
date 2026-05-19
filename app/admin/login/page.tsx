"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, ArrowRight, ArrowLeft, Loader2, ShieldCheck, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";

export default function AdminLoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate authentication process
    setTimeout(() => {
      toast.success("Signed in successfully");
      router.push("/admin");
    }, 1200);
  };
  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-background">
      {/* Left side - Visual/Brand (Hidden on mobile) */}
      <div className="relative hidden lg:flex flex-col justify-between p-12 bg-zinc-950 overflow-hidden text-zinc-50">
        {/* Dynamic abstract background elements */}
        <div className="absolute inset-0 bg-brand-gradient z-0 mix-blend-overlay opacity-10" />
        <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-brand-gradient blur-[120px] z-0 animate-pulse opacity-20" style={{ animationDuration: "10s" }} />
        <div className="absolute top-[40%] right-[10%] w-[50%] h-[50%] rounded-full bg-teal-600/20 blur-[100px] z-0" />
        
        <div className="relative z-10 flex items-center gap-3">
          <Link href="/" className="inline-flex items-center gap-3 font-display font-bold text-2xl hover:opacity-80 transition-opacity">
            <span className="grid place-items-center size-12 rounded-xl bg-brand-gradient text-brand-foreground shadow-lg shadow-brand-dark/20">
              <Leaf className="size-7" />
            </span>
            Farhan Admin
          </Link>
        </div>
        
        <div className="relative z-10 max-w-lg mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-sm font-medium mb-6">
            <ShieldCheck className="size-4 text-brand" />
            Secure Access
          </div>
          <h2 className="text-5xl font-display font-bold tracking-tight mb-6 leading-[1.1]">
            Manage your portfolio <br/>
            <span className="text-brand">with precision.</span>
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Welcome to the command center. Authenticate to manage services, publish blogs, review testimonials, and track bookings seamlessly.
          </p>
        </div>
      </div>
      
      {/* Right side - Login Form */}
      <div className="flex items-center justify-center p-6 sm:p-12 relative overflow-hidden">
        {/* Mobile header (only visible on small screens) */}
        <div className="absolute top-6 left-6 lg:hidden z-20">
          <Link href="/" className="inline-flex items-center gap-2 text-foreground font-display font-bold text-lg">
            <span className="grid place-items-center size-9 rounded-xl bg-brand-gradient text-brand-foreground shadow-md">
              <Leaf className="size-5" />
            </span>
            Farhan Admin
          </Link>
        </div>
        
        {/* Back to website (Desktop & Mobile top right) */}
        <div className="absolute top-6 right-6 z-20">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors bg-background/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-border/50 shadow-sm hover:shadow-md">
            <ArrowLeft className="size-4" />
            <span className="hidden sm:inline">Back to website</span>
          </Link>
        </div>

        {/* Ambient mobile background */}
        <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-brand-gradient blur-[80px] lg:hidden z-0 opacity-10" />

        <div className="w-full max-w-[420px] z-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Card className="border-0 shadow-none lg:shadow-xl lg:border lg:border-border/50 bg-background/50 lg:bg-card backdrop-blur-xl">
            <CardHeader className="space-y-3 pb-6 pt-12 lg:pt-8 text-center lg:text-left">
              <CardTitle className="text-3xl font-bold tracking-tight">Welcome back</CardTitle>
              <CardDescription className="text-base">
                Enter your credentials to access the dashboard
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2.5">
                  <Label htmlFor="email" className="font-medium">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="admin@example.com" 
                    required 
                    className="bg-background h-12 px-4 transition-colors focus-visible:ring-brand"
                  />
                </div>
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password" className="font-medium">Password</Label>
                    <Link href="#" className="text-sm font-medium text-brand hover:text-brand/80 transition-colors">
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative">
                    <Input 
                      id="password" 
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••" 
                      required 
                      className="bg-background h-12 pl-4 pr-10 transition-colors focus-visible:ring-brand"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="size-5" />
                      ) : (
                        <Eye className="size-5" />
                      )}
                      <span className="sr-only">
                        {showPassword ? "Hide password" : "Show password"}
                      </span>
                    </button>
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full h-12 text-base mt-4 group font-semibold bg-brand-gradient hover:bg-brand-gradient-hover text-brand-foreground shadow-md shadow-brand-dark/20 transition-all hover:shadow-lg hover:shadow-brand-dark/30"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 size-5 animate-spin" />
                      Authenticating...
                    </>
                  ) : (
                    <>
                      Sign In
                      <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex justify-center text-sm text-muted-foreground pb-8 lg:pb-8 pt-4">
              <p>Secure portal for Farhan's Portfolio.</p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
