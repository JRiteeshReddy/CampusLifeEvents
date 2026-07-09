-- Supabase SQL Schema for Campus Life Events

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Table: clubs
CREATE TABLE IF NOT EXISTS public.clubs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  status VARCHAR(50) DEFAULT 'Active', -- Active, Disabled
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table: categories
CREATE TABLE IF NOT EXISTS public.categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table: events
CREATE TABLE IF NOT EXISTS public.events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  banner_url TEXT,
  category_id UUID REFERENCES public.categories(id) ON DELETE SET NULL,
  venue VARCHAR(255) NOT NULL,
  date DATE NOT NULL,
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  registration_deadline TIMESTAMP WITH TIME ZONE NOT NULL,
  max_capacity INTEGER NOT NULL,
  contact_person VARCHAR(255) NOT NULL,
  contact_number VARCHAR(50),
  requirements TEXT,
  certificate_available BOOLEAN DEFAULT FALSE,
  event_type VARCHAR(100) NOT NULL, -- e.g. Workshop, Seminar, Cultural
  status VARCHAR(50) DEFAULT 'Pending', -- Pending, Approved, Rejected, Completed, Cancelled
  rejection_remarks TEXT,
  club_id UUID REFERENCES public.clubs(id) ON DELETE CASCADE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table: registrations
CREATE TABLE IF NOT EXISTS public.registrations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  event_id UUID REFERENCES public.events(id) ON DELETE CASCADE NOT NULL,
  full_name VARCHAR(255) NOT NULL,
  registration_number VARCHAR(100) NOT NULL,
  university_email VARCHAR(255) NOT NULL,
  phone_number VARCHAR(50),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE (event_id, university_email),
  UNIQUE (event_id, registration_number)
);

-- Table: attendance
CREATE TABLE IF NOT EXISTS public.attendance (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  registration_id UUID REFERENCES public.registrations(id) ON DELETE CASCADE NOT NULL,
  event_id UUID REFERENCES public.events(id) ON DELETE CASCADE NOT NULL,
  present BOOLEAN DEFAULT FALSE,
  attendance_timestamp TIMESTAMP WITH TIME ZONE,
  UNIQUE (registration_id)
);

-- Table: activity_logs
CREATE TABLE IF NOT EXISTS public.activity_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  user_email VARCHAR(255) NOT NULL,
  role VARCHAR(50) NOT NULL,
  action VARCHAR(255) NOT NULL,
  description TEXT
);

-- Setup Row Level Security (RLS)
ALTER TABLE public.clubs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.attendance ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.activity_logs ENABLE ROW LEVEL SECURITY;

-- Note: In a production environment, you would define specific policies for RLS. 
-- For example, allowing public access to read categories and approved events,
-- while restricting updates to Campus Life admins and the specific club owner.
-- For the sake of this prototype assuming server-side Supabase client with Service Role Key, 
-- or custom API routes for all DB operations, we can bypass RLS via server API or add allow-all policies.
