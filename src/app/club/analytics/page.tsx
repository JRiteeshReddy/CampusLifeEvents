"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Users, Calendar, TrendingUp } from "lucide-react";

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Analytics</h1>
        <p className="text-muted-foreground mt-1">Insights into your club's performance and engagement.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-card border-border/50 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Reach</CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">3,240</div>
            <p className="text-xs text-secondary font-medium mt-1">+12% from last month</p>
          </CardContent>
        </Card>
        <Card className="bg-card border-border/50 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Avg. Attendance Rate</CardTitle>
            <Activity className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">87%</div>
            <p className="text-xs text-secondary font-medium mt-1">+2.1% from last month</p>
          </CardContent>
        </Card>
        <Card className="bg-card border-border/50 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Events This Year</CardTitle>
            <Calendar className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">14</div>
            <p className="text-xs text-muted-foreground mt-1">4 pending approval</p>
          </CardContent>
        </Card>
        <Card className="bg-card border-border/50 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Profile Views</CardTitle>
            <TrendingUp className="h-4 w-4 text-secondary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">1,104</div>
            <p className="text-xs text-secondary font-medium mt-1">+45% from last month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-card border-border/50 shadow-sm">
          <CardHeader>
            <CardTitle>Top Performing Events</CardTitle>
            <CardDescription>Events with the highest registration rates.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-foreground">Tech Symposium 2026</span>
                  <span className="text-muted-foreground">380/500 (76%)</span>
                </div>
                <div className="h-2 w-full bg-secondary/20 rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: '76%' }} />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-foreground">Web3 & AI Workshop</span>
                  <span className="text-muted-foreground">55/60 (91%)</span>
                </div>
                <div className="h-2 w-full bg-secondary/20 rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: '91%' }} />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-foreground">Intro to Cloud Computing</span>
                  <span className="text-muted-foreground">120/120 (100%)</span>
                </div>
                <div className="h-2 w-full bg-secondary/20 rounded-full overflow-hidden">
                  <div className="h-full bg-accent rounded-full" style={{ width: '100%' }} />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border/50 shadow-sm">
          <CardHeader>
            <CardTitle>Registrations by Department</CardTitle>
            <CardDescription>Demographics of your attendees.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  <span className="text-foreground">Computer Science (CSE)</span>
                </div>
                <span className="font-bold text-foreground">45%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-secondary"></div>
                  <span className="text-foreground">Electronics (ECE)</span>
                </div>
                <span className="font-bold text-foreground">25%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-accent"></div>
                  <span className="text-foreground">Mechanical (MECH)</span>
                </div>
                <span className="font-bold text-foreground">15%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-muted-foreground"></div>
                  <span className="text-foreground">Other Branches</span>
                </div>
                <span className="font-bold text-foreground">15%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
