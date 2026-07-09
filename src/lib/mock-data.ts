export const CATEGORIES = [
  { id: '1', name: 'Workshops' },
  { id: '2', name: 'Cultural' },
  { id: '3', name: 'Technical' },
  { id: '4', name: 'Sports' },
  { id: '5', name: 'Seminars' },
];

export const MOCK_EVENTS = [
  {
    id: '1',
    title: 'Tech Symposium 2026',
    description: 'A grand technical symposium featuring hackathons, coding challenges, and guest lectures from industry leaders.',
    banner_url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop',
    category: 'Technical',
    venue: 'Main Auditorium, GITAM',
    date: '2026-08-15',
    start_time: '09:00',
    end_time: '18:00',
    max_capacity: 500,
    seats_remaining: 120,
    club_name: 'GUSAC',
    status: 'Approved',
  },
  {
    id: '2',
    title: 'Cultural Fest: Kalakrithi',
    description: 'Experience the rich culture and diverse arts of GITAM in this massive 3-day cultural extravaganza.',
    banner_url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop',
    category: 'Cultural',
    venue: 'Open Air Theatre',
    date: '2026-09-02',
    start_time: '17:00',
    end_time: '23:00',
    max_capacity: 2000,
    seats_remaining: 500,
    club_name: 'Kalakrithi',
    status: 'Approved',
  },
  {
    id: '3',
    title: 'Web3 & AI Workshop',
    description: 'Learn the fundamentals of Web3 and how Artificial Intelligence is reshaping the decentralized web.',
    banner_url: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop',
    category: 'Workshops',
    venue: 'Block C, Room 402',
    date: '2026-07-20',
    start_time: '10:00',
    end_time: '13:00',
    max_capacity: 60,
    seats_remaining: 5,
    club_name: 'ACM Student Chapter',
    status: 'Approved',
  },
];

export const STATS = [
  { label: 'Active Clubs', value: '15+' },
  { label: 'Events Hosted', value: '500+' },
  { label: 'Total Participations', value: '25,000+' },
];

export const MOCK_CLUBS = [
  { id: 'c1', name: 'GUSAC', category: 'Technical', members: 120, description: 'GITAM University Science and Activity Centre.', email: 'gusac@gitam.edu' },
  { id: 'c2', name: 'Kalakrithi', category: 'Cultural', members: 200, description: 'The official cultural club of GITAM.', email: 'kalakrithi@gitam.edu' },
  { id: 'c3', name: 'ACM Student Chapter', category: 'Technical', members: 85, description: 'Advancing computing as a science and profession.', email: 'acm@gitam.edu' },
  { id: 'c4', name: 'Sports Club', category: 'Sports', members: 300, description: 'Promoting physical fitness and sportsmanship.', email: 'sports@gitam.edu' },
  { id: 'c5', name: 'NSS Unit', category: 'Social Service', members: 150, description: 'National Service Scheme - Not Me But You.', email: 'nss@gitam.edu' },
  { id: 'c6', name: 'E-Cell', category: 'Entrepreneurship', members: 95, description: 'Fostering entrepreneurial spirit among students.', email: 'ecell@gitam.edu' },
  { id: 'c7', name: 'Rotaract Club', category: 'Social Service', members: 110, description: 'Youth program dedicated to community service.', email: 'rotaract@gitam.edu' },
  { id: 'c8', name: 'Photography Club', category: 'Arts', members: 60, description: 'Capturing moments and teaching photography skills.', email: 'photo@gitam.edu' },
  { id: 'c9', name: 'Debate Society', category: 'Literary', members: 45, description: 'Engaging in formal debates and public speaking.', email: 'debate@gitam.edu' },
];
