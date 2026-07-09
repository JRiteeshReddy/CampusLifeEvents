"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Users, CheckCircle, Clock } from "lucide-react";
import { MOCK_EVENTS } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";

export default function ClubDashboard() {
  const myEvents = MOCK_EVENTS.filter(e => e.club_name === 'GUSAC' || e.club_name === 'ACM Student Chapter'); // Mocking current club

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Club Dashboard</h1>
        <p className="text-muted-foreground mt-1">Welcome back! Here is an overview of your club's activities.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-card border-border/50 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">My Events</CardTitle>
            <Calendar className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">12</div>
          </CardContent>
        </Card>
        <Card className="bg-card border-border/50 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Pending Approval</CardTitle>
            <Clock className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">2</div>
          </CardContent>
        </Card>
        <Card className="bg-card border-border/50 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Registrations</CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">1,240</div>
          </CardContent>
        </Card>
        <Card className="bg-card border-border/50 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Completed Events</CardTitle>
            <CheckCircle className="h-4 w-4 text-secondary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">10</div>
          </CardContent>
        </Card>
      </div>

      <div>
        <h2 className="text-xl font-bold text-foreground mb-4">Recent Events</h2>
        <div className="bg-card border border-border/50 rounded-xl overflow-hidden shadow-sm">
          <table className="w-full text-sm text-left">
            <thead className="bg-secondary/20 text-foreground/80">
              <tr>
                <th className="px-6 py-4 font-medium">Event Title</th>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium">Registrations</th>
                <th className="px-6 py-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              {myEvents.map((event) => (
                <tr key={event.id} className="hover:bg-muted/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-foreground">{event.title}</td>
                  <td className="px-6 py-4 text-muted-foreground">{event.date}</td>
                  <td className="px-6 py-4 text-muted-foreground">{event.max_capacity - event.seats_remaining} / {event.max_capacity}</td>
                  <td className="px-6 py-4">
                    <Badge className={event.status === 'Approved' ? 'bg-primary/20 text-primary hover:bg-primary/30' : 'bg-accent/20 text-accent hover:bg-accent/30'}>
                      {event.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
