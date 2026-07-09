import { Navbar } from "@/components/layout/Navbar";
import { EventGrid } from "@/components/home/EventGrid";

export default function EventsPage() {
  return (
    <main className="min-h-screen flex flex-col pt-20">
      <Navbar />
      <div className="flex-1 py-12">
        <EventGrid title="All Upcoming Events" />
      </div>
    </main>
  );
}
