import { Hero } from "@/components/home/Hero";
import { EventGrid } from "@/components/home/EventGrid";
import { Stats } from "@/components/home/Stats";
import { Navbar } from "@/components/layout/Navbar";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Hero />
        <Stats />
        <EventGrid title="Featured Events" />
      </div>
      
      <footer className="bg-primary-dark py-16 text-white/90 border-t border-primary/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Campus Life Events</h3>
              <p className="text-white/70 max-w-sm leading-relaxed text-sm">
                The official portal for GITAM (Deemed to be University) clubs, fests, workshops, and extracurricular activities.
              </p>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <h4 className="font-semibold text-white mb-4 text-lg">Quick Links</h4>
              <div className="flex flex-col space-y-3 text-sm">
                <Link href="/events" className="text-white/70 hover:text-secondary transition-colors">Browse Events</Link>
                <Link href="/clubs" className="text-white/70 hover:text-secondary transition-colors">Student Clubs</Link>
                <a href="#" className="text-white/70 hover:text-secondary transition-colors">Privacy Policy</a>
                <a href="#" className="text-white/70 hover:text-secondary transition-colors">Terms of Service</a>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <h4 className="font-semibold text-white mb-4 text-lg">Support & Contact</h4>
              <div className="flex flex-col space-y-3 text-sm">
                <Link href="/login" className="text-white/70 hover:text-secondary transition-colors">Admin Login</Link>
                <a href="#" className="text-white/70 hover:text-secondary transition-colors">Contact Us</a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-white/50">
            <p>&copy; {new Date().getFullYear()} GITAM University. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex items-center gap-2">
              <span>Developed by</span>
              <Image 
                src="/images/HIVE logo.png" 
                alt="HIVE" 
                width={80} 
                height={30} 
                className="object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
