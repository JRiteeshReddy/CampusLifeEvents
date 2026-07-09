import { Navbar } from "@/components/layout/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";
import { MOCK_CLUBS } from "@/lib/mock-data";
import Link from "next/link";

export default function ClubsPage() {
  return (
    <main className="min-h-screen flex flex-col pt-20">
      <Navbar />
      <div className="flex-1 py-12 container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-dark-primary mb-4">University Clubs</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover and join various student-led clubs and organizations across the campus.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_CLUBS.map((club) => (
            <Link key={club.id} href={`/clubs/${club.id}`}>
              <Card className="bg-card border-border/50 hover:border-primary/50 transition-colors shadow-sm cursor-pointer group h-full">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-semibold px-2 py-1 bg-primary/10 text-primary rounded-full">
                      {club.category}
                    </span>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Users className="w-4 h-4 mr-1" />
                      {club.members}
                    </div>
                  </div>
                  <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-colors">{club.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{club.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
