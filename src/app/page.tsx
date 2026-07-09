import { Hero } from "@/components/home/Hero";
import { EventGrid } from "@/components/home/EventGrid";
import { Stats } from "@/components/home/Stats";
import { Navbar } from "@/components/layout/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Hero />
        <Stats />
        <EventGrid title="Featured Events" />
      </div>
      
      {/* Simple Footer */}
      <footer className="bg-dark-primary py-12 text-center text-primary-foreground/70">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-primary-foreground mb-4">Campus Life Events</h3>
          <p className="mb-8">GITAM (Deemed to be University)</p>
          <div className="flex justify-center space-x-6 text-sm">
            <Link href="/login" className="hover:text-secondary transition-colors">Admin Login</Link>
            <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-secondary transition-colors">Contact Us</a>
          </div>
          <p className="mt-8 text-xs opacity-50">&copy; {new Date().getFullYear()} GITAM University. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
