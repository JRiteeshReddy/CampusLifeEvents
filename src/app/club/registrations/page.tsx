"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download, Search, CheckCircle, XCircle } from "lucide-react";
import { useState } from "react";

// Mock registrations data
const MOCK_REGISTRATIONS = [
  { id: '1', studentName: 'John Doe', rollNo: 'VU21CS0101', email: 'jdoe@gitam.in', event: 'Tech Symposium 2026', date: '2026-06-10', status: 'Confirmed' },
  { id: '2', studentName: 'Alice Smith', rollNo: 'VU21CS0102', email: 'asmith@gitam.in', event: 'Tech Symposium 2026', date: '2026-06-11', status: 'Confirmed' },
  { id: '3', studentName: 'Bob Johnson', rollNo: 'VU21EC0205', email: 'bjohnson@gitam.in', event: 'Web3 & AI Workshop', date: '2026-06-12', status: 'Waitlisted' },
  { id: '4', studentName: 'Sarah Williams', rollNo: 'VU21ME0310', email: 'swilliams@gitam.in', event: 'Tech Symposium 2026', date: '2026-06-15', status: 'Cancelled' },
  { id: '5', studentName: 'Michael Brown', rollNo: 'VU21CS0199', email: 'mbrown@gitam.in', event: 'Web3 & AI Workshop', date: '2026-06-16', status: 'Confirmed' },
];

export default function RegistrationsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRegistrations = MOCK_REGISTRATIONS.filter(reg => 
    reg.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    reg.rollNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    reg.event.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Registrations</h1>
          <p className="text-muted-foreground mt-1">View and manage student registrations for your events.</p>
        </div>
        <Button variant="outline" className="bg-background">
          <Download className="mr-2 h-4 w-4" />
          Export CSV
        </Button>
      </div>

      <div className="flex items-center gap-2 max-w-sm">
        <div className="relative w-full">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input 
            type="search" 
            placeholder="Search by name, roll no, or event..." 
            className="w-full bg-card pl-9 border-border/50"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="bg-card border border-border/50 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-sm text-left">
          <thead className="bg-secondary/20 text-foreground/80">
            <tr>
              <th className="px-6 py-4 font-medium">Student Name</th>
              <th className="px-6 py-4 font-medium">Roll Number</th>
              <th className="px-6 py-4 font-medium">Event</th>
              <th className="px-6 py-4 font-medium">Registered On</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/50">
            {filteredRegistrations.map((reg) => (
              <tr key={reg.id} className="hover:bg-muted/50 transition-colors">
                <td className="px-6 py-4">
                  <div className="font-medium text-foreground">{reg.studentName}</div>
                  <div className="text-xs text-muted-foreground">{reg.email}</div>
                </td>
                <td className="px-6 py-4 text-muted-foreground">{reg.rollNo}</td>
                <td className="px-6 py-4 text-muted-foreground">{reg.event}</td>
                <td className="px-6 py-4 text-muted-foreground">{reg.date}</td>
                <td className="px-6 py-4">
                  <Badge 
                    className={
                      reg.status === 'Confirmed' ? 'bg-primary/20 text-primary' : 
                      reg.status === 'Waitlisted' ? 'bg-secondary text-secondary-foreground' : 
                      'bg-destructive/20 text-destructive'
                    }
                  >
                    {reg.status}
                  </Badge>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-primary hover:bg-primary/20 hover:text-primary">
                      <CheckCircle className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:bg-destructive/20 hover:text-destructive">
                      <XCircle className="h-4 w-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
            
            {filteredRegistrations.length === 0 && (
              <tr>
                <td colSpan={6} className="px-6 py-12 text-center text-muted-foreground">
                  No registrations found matching your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
