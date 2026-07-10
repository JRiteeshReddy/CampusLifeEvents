"use client";

import { motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-background pt-[140px] pb-[100px]">
      {/* Premium subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5 opacity-80" />

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-8 backdrop-blur-sm"
        >
          <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
          GITAM University Official Portal
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl font-extrabold text-foreground mb-6 tracking-tight max-w-4xl leading-[1.1]"
        >
          Discover & Experience <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Campus Life Events
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-foreground/70 mb-12 max-w-2xl leading-relaxed font-light"
        >
          Your one-stop platform for all university clubs, fests, workshops, and extracurricular activities. Engage, learn, and grow.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-2xl bg-card rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-2 flex items-center border border-border/40 transition-all duration-300 focus-within:shadow-[0_8px_30px_rgb(0,115,103,0.1)] focus-within:border-primary/30 relative z-20 group hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
        >
          <div className="pl-5 text-muted-foreground transition-colors group-focus-within:text-primary">
            <Search className="h-[18px] w-[18px]" />
          </div>
          <input
            type="text"
            placeholder="Search for events, clubs, or categories..."
            className="flex-1 bg-transparent border-none outline-none px-4 py-3.5 text-foreground placeholder:text-muted-foreground/70 font-medium"
          />
          <Button size="lg" className="rounded-xl px-8 h-12 bg-primary hover:bg-dark-primary text-primary-foreground group-hover:shadow-md transition-all">
            Search
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
