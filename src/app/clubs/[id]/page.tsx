import { Navbar } from "@/components/layout/Navbar";
import { MOCK_CLUBS, MOCK_EVENTS } from "@/lib/mock-data";
import { notFound } from "next/navigation";
import { Users, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default async function ClubDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const club = MOCK_CLUBS.find(c => c.id === id);
  
  if (!club) {
    notFound();
  }

  const clubEvents = MOCK_EVENTS.filter(e => e.club_name === club.name);

  return (
    <main className="min-h-screen flex flex-col pt-20">
      <Navbar />
      
      {/* Club Banner / Header */}
      <div className="bg-dark-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <div className="mb-4">
                <span className="text-sm font-semibold px-3 py-1 bg-primary/20 text-primary-foreground rounded-full border border-primary/50">
                  {club.category}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{club.name}</h1>
              <p className="text-lg text-primary-foreground/80 max-w-2xl">{club.description}</p>
              
              <div className="flex items-center gap-6 mt-6">
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-2 text-primary" />
                  <span>{club.members} Active Members</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-2 text-primary" />
                  <span>{club.email}</span>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-auto shrink-0">
              <Button size="lg" className="w-full md:w-auto px-10 h-14 text-lg rounded-xl bg-primary text-primary-foreground hover:bg-white hover:text-dark-primary transition-colors">
                Apply to Join
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl py-16 flex-1">
        <h2 className="text-3xl font-bold text-foreground mb-8">Events Hosted by {club.name}</h2>
        
        {clubEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clubEvents.map((event) => (
              <Link href={`/events/${event.id}`} key={event.id}>
                <Card className="bg-card border-border/50 hover:border-primary/50 transition-colors overflow-hidden group h-full flex flex-col">
                  <div className="h-48 w-full relative bg-muted overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={event.banner_url} 
                      alt={event.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-background/90 text-foreground backdrop-blur-sm border-none">
                        {event.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    <div className="mt-auto space-y-2 text-sm text-muted-foreground">
                      <p>{event.date}</p>
                      <p>{event.venue}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-muted/30 rounded-2xl border border-border/50">
            <p className="text-muted-foreground text-lg">No upcoming events found for this club.</p>
          </div>
        )}
      </div>
    </main>
  );
}
