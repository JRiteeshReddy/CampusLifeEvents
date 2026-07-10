"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-background pt-[120px] pb-[80px]">


      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm text-primary mb-6"
        >
          <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
          GITAM University Official Portal
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight max-w-4xl"
        >
          Discover & Experience <br />
          <span className="text-primary">Campus Life Events</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-foreground/70 mb-10 max-w-2xl"
        >
          Your one-stop platform for all university clubs, fests, workshops, and extracurricular activities. Engage, learn, and grow.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full max-w-2xl bg-card rounded-2xl shadow-xl shadow-primary/5 p-2 flex items-center border border-border/50"
        >
          <div className="pl-4 text-muted-foreground">
            <Search className="h-5 w-5" />
          </div>
          <input
            type="text"
            placeholder="Search for events, clubs, or categories..."
            className="flex-1 bg-transparent border-none outline-none px-4 py-3 text-foreground placeholder:text-muted-foreground"
          />
          <Button size="lg" className="rounded-xl px-8 h-12 bg-primary hover:bg-dark-primary text-primary-foreground">
            Search
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
