import { Navbar } from "@/components/layout/Navbar";
import { MOCK_EVENTS } from "@/lib/mock-data";
import { notFound } from "next/navigation";
import { Calendar, Clock, MapPin, Users, Award, Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { EventRegistrationDialog } from "@/components/events/EventRegistrationDialog";

// A Next.js Page component for Next 15 with async params
export default async function EventDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const event = MOCK_EVENTS.find((e) => e.id === id);

  if (!event) {
    notFound();
  }

  const isFull = event.seats_remaining <= 0;

  return (
    <main className="min-h-screen flex flex-col bg-background pb-20">
      <Navbar />
      
      <div className="pt-20">
        {/* Banner Section */}
        <div className="w-full h-[400px] md:h-[500px] relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={event.banner_url || "https://images.unsplash.com/photo-1540575467063-178a50c2df87"} 
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative -mt-32">
          <div className="bg-card rounded-2xl shadow-xl shadow-primary/5 p-8 md:p-12 border border-border/50 max-w-4xl mx-auto">
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <Badge className="bg-primary/90 text-primary-foreground mb-4 md:mb-0 text-sm px-4 py-1">
                {event.category}
              </Badge>
              <div className="text-right">
                <span className="text-sm text-muted-foreground block">Organized by</span>
                <span className="font-bold text-accent text-lg">{event.club_name}</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {event.title}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 p-6 bg-secondary/10 rounded-xl">
              <div className="flex items-center text-foreground/80">
                <Calendar className="h-5 w-5 mr-4 text-primary" />
                <span>{new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center text-foreground/80">
                <Clock className="h-5 w-5 mr-4 text-primary" />
                <span>{event.start_time} - {event.end_time}</span>
              </div>
              <div className="flex items-center text-foreground/80">
                <MapPin className="h-5 w-5 mr-4 text-primary" />
                <span>{event.venue}</span>
              </div>
              <div className="flex items-center text-foreground/80">
                <Users className="h-5 w-5 mr-4 text-primary" />
                <span>{event.max_capacity} Total Capacity ({event.seats_remaining} Left)</span>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-foreground/80 mb-12">
              <h3 className="text-2xl font-bold text-foreground mb-4">About the Event</h3>
              <p>{event.description}</p>
            </div>
            
            <hr className="border-border mb-10" />

            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Registration closes soon.</p>
                <p className="font-medium text-foreground">Open to all GITAM students.</p>
              </div>
              <EventRegistrationDialog eventId={event.id} isFull={isFull} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
