import { Navbar } from "@/components/layout/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Info, Target, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col pt-20">
      <Navbar />
      <div className="flex-1 py-16 container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-dark-primary mb-6">About Campus Life</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Welcome to the official Campus Life Events platform for GITAM (Deemed to be University). 
            Our goal is to foster a vibrant, engaging, and inclusive campus environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-card border-border/50 text-center p-6 shadow-sm">
            <CardContent className="pt-6 space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Our Mission</h3>
              <p className="text-muted-foreground text-sm">
                To empower students to discover their passions, develop leadership skills, and create lifelong memories through extracurricular engagement.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-card border-border/50 text-center p-6 shadow-sm">
            <CardContent className="pt-6 space-y-4">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto text-secondary-foreground">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Our Values</h3>
              <p className="text-muted-foreground text-sm">
                Inclusivity, innovation, and collaboration form the core of everything we do. We believe in providing a platform for every voice.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-card border-border/50 text-center p-6 shadow-sm">
            <CardContent className="pt-6 space-y-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto text-accent">
                <Info className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground">What We Do</h3>
              <p className="text-muted-foreground text-sm">
                We manage and support hundreds of student-led clubs, coordinate university-wide events, and ensure smooth extracurricular operations.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 border border-border/50 shadow-sm text-center">
          <h2 className="text-3xl font-bold text-dark-primary mb-6">Get Involved Today</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you want to join a technical club, participate in a cultural fest, or start your own initiative, Campus Life is here to support you.
          </p>
          <a href="/clubs" className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-dark-primary transition-colors">
            Explore Clubs
          </a>
        </div>
      </div>
    </main>
  );
}
