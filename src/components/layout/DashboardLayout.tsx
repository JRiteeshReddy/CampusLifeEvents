"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LayoutDashboard, Calendar, Users, LogOut, Settings, PlusCircle, CheckSquare, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SidebarItem {
  name: string;
  href: string;
  icon: React.ElementType;
}

export function DashboardLayout({
  children,
  role,
}: {
  children: React.ReactNode;
  role: 'CAMPUS_LIFE' | 'CLUB';
}) {
  const pathname = usePathname();

  const clubItems: SidebarItem[] = [
    { name: 'Dashboard', href: '/club', icon: LayoutDashboard },
    { name: 'My Events', href: '/club/events', icon: Calendar },
    { name: 'Create Event', href: '/club/events/create', icon: PlusCircle },
    { name: 'Registrations', href: '/club/registrations', icon: Users },
    { name: 'Settings', href: '/club/settings', icon: Settings },
  ];

  const campusLifeItems: SidebarItem[] = [
    { name: 'Dashboard', href: '/campus-life', icon: LayoutDashboard },
    { name: 'Events', href: '/campus-life/events', icon: Calendar },
    { name: 'Pending Approvals', href: '/campus-life/approvals', icon: CheckSquare },
    { name: 'Clubs', href: '/campus-life/clubs', icon: Users },
    { name: 'Registrations', href: '/campus-life/registrations', icon: Users },
    { name: 'Activity Logs', href: '/campus-life/logs', icon: Activity },
    { name: 'Settings', href: '/campus-life/settings', icon: Settings },
  ];

  const sidebarItems = role === 'CAMPUS_LIFE' ? campusLifeItems : clubItems;

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 bg-card border-r border-border hidden md:flex flex-col">
        <div className="h-20 flex items-center px-6 border-b border-border">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold">
              C
            </div>
            <span className="font-bold text-lg text-foreground">Campus Life</span>
          </Link>
        </div>
        
        <div className="p-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
          {role === 'CAMPUS_LIFE' ? 'Admin Portal' : 'Club Portal'}
        </div>

        <nav className="flex-1 px-4 space-y-1">
          {sidebarItems.map((item) => {
            const isActive = pathname === item.href || pathname?.startsWith(`${item.href}/`);
            const Icon = item.icon;
            
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                  isActive 
                    ? "bg-primary text-primary-foreground" 
                    : "text-muted-foreground hover:bg-secondary/30 hover:text-foreground"
                )}
              >
                <Icon className={cn("h-5 w-5", isActive ? "text-primary-foreground" : "text-muted-foreground")} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-border mt-auto">
          <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-destructive hover:bg-destructive/10">
            <LogOut className="mr-3 h-5 w-5" />
            Logout
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-screen overflow-hidden">
        <header className="h-20 bg-background border-b border-border shadow-sm flex items-center justify-end px-8 z-10 sticky top-0">
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium text-foreground">
              {role === 'CAMPUS_LIFE' ? 'Admin User' : 'GUSAC Club'}
            </span>
            <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30" />
          </div>
        </header>
        <div className="flex-1 p-8 overflow-y-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
