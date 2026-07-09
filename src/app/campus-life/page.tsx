"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Users, Building, Activity, CheckSquare, TrendingUp, Bell, Check, X, Calendar as CalendarIcon, MapPin, Search } from "lucide-react";
import { MOCK_EVENTS } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RegistrationChart } from "@/components/dashboard/RegistrationChart";
import { Input } from "@/components/ui/input";

export default function CampusLifeDashboard() {
  const pendingApprovals = MOCK_EVENTS.slice(0, 3);
  const recentActivities = [
    { id: 1, action: "New club registration request", club: "Photography Club", time: "2 hours ago" },
    { id: 2, action: "Event 'Tech Expo 2026' updated", club: "ACM Student Chapter", time: "5 hours ago" },
    { id: 3, action: "Budget request approved", club: "Kalakrithi", time: "1 day ago" },
    { id: 4, action: "New member joined", club: "Sports Club", time: "1 day ago" },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Overview Dashboard</h1>
          <p className="text-muted-foreground mt-1">Manage all university clubs, events, and activities across campus.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search..." className="pl-9 bg-card border-border/50 focus-visible:ring-primary h-10 w-64" />
          </div>
          <Button variant="outline" size="icon" className="h-10 w-10 relative bg-card border-border/50">
            <Bell className="w-4 h-4 text-foreground" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full animate-pulse" />
          </Button>
          <Button className="h-10 bg-primary text-primary-foreground">
            New Announcement
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-card border-border/50 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Clubs</CardTitle>
            <div className="p-2 bg-primary/10 rounded-lg">
              <Building className="h-4 w-4 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">45</div>
            <div className="flex items-center mt-1 text-xs text-emerald-500">
              <TrendingUp className="w-3 h-3 mr-1" />
              <span>+3 this semester</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border/50 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Pending Approvals</CardTitle>
            <div className="p-2 bg-amber-500/10 rounded-lg">
              <CheckSquare className="h-4 w-4 text-amber-500" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">12</div>
            <div className="flex items-center mt-1 text-xs text-amber-500">
              <span>Requires attention</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border/50 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Registrations</CardTitle>
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Users className="h-4 w-4 text-blue-500" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">15,420</div>
            <div className="flex items-center mt-1 text-xs text-emerald-500">
              <TrendingUp className="w-3 h-3 mr-1" />
              <span>+12% from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border/50 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Events</CardTitle>
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Activity className="h-4 w-4 text-purple-500" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">128</div>
            <div className="flex items-center mt-1 text-xs text-emerald-500">
              <TrendingUp className="w-3 h-3 mr-1" />
              <span>+5 new this week</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-6">
          {/* Chart Section */}
          <Card className="bg-card border-border/50 shadow-sm">
            <CardHeader>
              <CardTitle>Registration Trends</CardTitle>
              <CardDescription>Event participations over the last 7 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full">
                <RegistrationChart />
              </div>
            </CardContent>
          </Card>

          {/* Pending Approvals */}
          <Card className="bg-card border-border/50 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Pending Approvals</CardTitle>
                <CardDescription>Events waiting for administrative review</CardDescription>
              </div>
              <Button variant="outline" size="sm">View All</Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pendingApprovals.map((event) => (
                  <div key={event.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border border-border/50 bg-background/50 hover:bg-muted/50 transition-colors gap-4">
                    <div className="flex gap-4 items-start">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <CalendarIcon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground line-clamp-1">{event.title}</h4>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground mt-1">
                          <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {event.club_name}</span>
                          <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {event.venue}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <Button size="icon" variant="outline" className="h-9 w-9 rounded-full text-red-500 hover:text-red-600 hover:bg-red-50 border-border/50">
                        <X className="w-4 h-4" />
                      </Button>
                      <Button size="icon" className="h-9 w-9 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-sm">
                        <Check className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar Area */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <Card className="bg-card border-border/50 shadow-sm">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-2">
              <Button variant="outline" className="justify-start h-12 px-4 hover:bg-primary/5 hover:text-primary hover:border-primary/20 transition-all">
                <Users className="w-4 h-4 mr-3" /> Register New Club
              </Button>
              <Button variant="outline" className="justify-start h-12 px-4 hover:bg-primary/5 hover:text-primary hover:border-primary/20 transition-all">
                <CalendarIcon className="w-4 h-4 mr-3" /> Generate Event Report
              </Button>
              <Button variant="outline" className="justify-start h-12 px-4 hover:bg-primary/5 hover:text-primary hover:border-primary/20 transition-all">
                <CheckSquare className="w-4 h-4 mr-3" /> Review Budget Requests
              </Button>
            </CardContent>
          </Card>

          {/* Activity Feed */}
          <Card className="bg-card border-border/50 shadow-sm flex-1">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest actions across campus</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border/50 before:to-transparent">
                {recentActivities.map((activity, index) => (
                  <div key={activity.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-background bg-card text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                      <Activity className="w-4 h-4" />
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-border/50 bg-background/50 shadow-sm">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-sm text-foreground">{activity.club}</span>
                        <span className="text-xs text-muted-foreground">{activity.time}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{activity.action}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
