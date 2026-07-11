"use client";

import { MOCK_EVENTS } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlusCircle, Edit, Eye } from "lucide-react";
import Link from "next/link";

export default function MyEventsPage() {
  // Mocking the current logged-in club
  const myEvents = MOCK_EVENTS.filter(e => e.club_name === 'GUSAC' || e.club_name === 'ACM Student Chapter');

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">My Events</h1>
          <p className="text-muted-foreground mt-1">Manage all the events hosted by your club.</p>
        </div>
        <Link href="/club/events/create">
          <Button className="bg-primary text-primary-foreground hover:bg-primary-dark">
            <PlusCircle className="mr-2 h-4 w-4" />
            Create Event
          </Button>
        </Link>
      </div>

      <div className="bg-card border border-border/50 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-sm text-left">
          <thead className="bg-secondary/20 text-foreground/80">
            <tr>
              <th className="px-6 py-4 font-medium">Event Title</th>
              <th className="px-6 py-4 font-medium">Category</th>
              <th className="px-6 py-4 font-medium">Date & Time</th>
              <th className="px-6 py-4 font-medium">Registrations</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/50">
            {myEvents.map((event) => (
              <tr key={event.id} className="hover:bg-muted/50 transition-colors">
                <td className="px-6 py-4 font-medium text-foreground">{event.title}</td>
                <td className="px-6 py-4 text-muted-foreground">{event.category}</td>
                <td className="px-6 py-4 text-muted-foreground">
                  {event.date} <br />
                  <span className="text-xs opacity-80">{event.start_time} - {event.end_time}</span>
                </td>
                <td className="px-6 py-4 text-muted-foreground">
                  {event.max_capacity - event.seats_remaining} / {event.max_capacity}
                </td>
                <td className="px-6 py-4">
                  <Badge className={event.status === 'Approved' ? 'bg-primary/20 text-primary hover:bg-primary/30' : 'bg-accent/20 text-accent hover:bg-accent/30'}>
                    {event.status}
                  </Badge>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
            
            {myEvents.length === 0 && (
              <tr>
                <td colSpan={6} className="px-6 py-12 text-center text-muted-foreground">
                  No events found. Click "Create Event" to get started.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
