"use client";

import React, { createContext, useContext, useState } from "react";
import { MOCK_EVENTS } from "@/lib/mock-data";

export type EventType = typeof MOCK_EVENTS[0];

interface EventContextType {
  events: EventType[];
  addEvent: (event: Omit<EventType, "id">) => void;
  deleteEvent: (id: string) => void;
}

const EventContext = createContext<EventContextType | undefined>(undefined);

export function EventProvider({ children }: { children: React.ReactNode }) {
  const [events, setEvents] = useState<EventType[]>(MOCK_EVENTS);

  const addEvent = (eventData: Omit<EventType, "id">) => {
    const newEvent = {
      ...eventData,
      id: Math.random().toString(36).substr(2, 9),
    };
    // Add to top of list
    setEvents(prev => [newEvent, ...prev]);
  };

  const deleteEvent = (id: string) => {
    setEvents(prev => prev.filter(e => e.id !== id));
  };

  return (
    <EventContext.Provider value={{ events, addEvent, deleteEvent }}>
      {children}
    </EventContext.Provider>
  );
}

export function useEvents() {
  const context = useContext(EventContext);
  if (context === undefined) {
    throw new Error("useEvents must be used within an EventProvider");
  }
  return context;
}
