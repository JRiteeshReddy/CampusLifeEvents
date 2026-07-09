"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { MOCK_EVENTS } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function EventGrid({ title = "Upcoming Events" }: { title?: string }) {
  return (
    <section className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">{title}</h2>
            <p className="text-muted-foreground max-w-2xl">
              Discover and register for the latest events happening around the campus.
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All Events
          </Button>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {MOCK_EVENTS.map((event) => (
            <motion.div key={event.id} variants={item}>
              <Card className="overflow-hidden h-full flex flex-col border-border/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group bg-card">
                <div className="relative h-48 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={event.banner_url} 
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary/90 text-primary-foreground hover:bg-primary">
                      {event.category}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="flex-1 p-6">
                  <div className="text-sm font-medium text-accent mb-2">
                    {event.club_name}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4 line-clamp-2">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-3 text-primary/70" />
                      {new Date(event.date).toLocaleDateString('en-US', { weekday: 'short', month: 'long', day: 'numeric', year: 'numeric' })}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-3 text-primary/70" />
                      {event.start_time} - {event.end_time}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-3 text-primary/70" />
                      <span className="truncate">{event.venue}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-3 text-primary/70" />
                      {event.seats_remaining} seats remaining
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="p-6 pt-0 mt-auto">
                  <Button render={<Link href={`/events/${event.id}`} />} nativeButton={false} className="w-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground">
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-8 text-center md:hidden">
          <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
}
