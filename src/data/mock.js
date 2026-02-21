export const interests = [
  'Arts', 'Sports', 'Tech', 'Culture', 'Music', 'Gaming', 'Volunteer', 'Academic', 'Social', 'Media',
  'Photography', 'Dance', 'Theater', 'Writing', 'Sustainability', 'Entrepreneurship', 'Pre-med', 'Law'
]

export const clubs = [
  { id: '1', name: 'Film Society', tagline: 'Screen, discuss, create.', interests: ['Arts', 'Media'], memberCount: 120, isExclusive: false, coverColor: '#c41e3a', eventsThisWeek: 2 },
  { id: '2', name: 'Robotics Club', tagline: 'Build. Code. Compete.', interests: ['Tech', 'Academic'], memberCount: 85, isExclusive: true, coverColor: '#0d0d0d', eventsThisWeek: 1 },
  { id: '3', name: 'Hiking & Outdoors', tagline: 'Get outside.', interests: ['Sports', 'Social'], memberCount: 200, isExclusive: false, coverColor: '#9e1830', eventsThisWeek: 3 },
  { id: '4', name: 'Jazz Ensemble', tagline: 'Play live. Every week.', interests: ['Music', 'Arts'], memberCount: 45, isExclusive: true, coverColor: '#c41e3a', eventsThisWeek: 1 },
  { id: '5', name: 'Debate Team', tagline: 'Think. Argue. Win.', interests: ['Academic', 'Culture'], memberCount: 60, isExclusive: false, coverColor: '#0d0d0d', eventsThisWeek: 2 },
  { id: '6', name: 'Photo Club', tagline: 'Capture the moment.', interests: ['Arts', 'Photography'], memberCount: 95, isExclusive: false, coverColor: '#c41e3a', eventsThisWeek: 2 },
  { id: '7', name: 'Ultimate Frisbee', tagline: 'Run. Throw. Spirit.', interests: ['Sports', 'Social'], memberCount: 78, isExclusive: false, coverColor: '#0d0d0d', eventsThisWeek: 4 },
  { id: '8', name: 'Startup Society', tagline: 'Ideas to impact.', interests: ['Entrepreneurship', 'Tech'], memberCount: 112, isExclusive: false, coverColor: '#9e1830', eventsThisWeek: 1 },
  { id: '9', name: 'Theater Guild', tagline: 'All the world’s a stage.', interests: ['Theater', 'Arts'], memberCount: 64, isExclusive: false, coverColor: '#c41e3a', eventsThisWeek: 2 },
  { id: '10', name: 'Volunteer Corps', tagline: 'Give back. Grow.', interests: ['Volunteer', 'Social'], memberCount: 180, isExclusive: false, coverColor: '#0d0d0d', eventsThisWeek: 3 },
  { id: '11', name: 'Esports League', tagline: 'Level up together.', interests: ['Gaming', 'Tech'], memberCount: 220, isExclusive: false, coverColor: '#c41e3a', eventsThisWeek: 5 },
  { id: '12', name: 'Creative Writing', tagline: 'Write. Share. Revise.', interests: ['Writing', 'Arts'], memberCount: 52, isExclusive: false, coverColor: '#9e1830', eventsThisWeek: 1 },
  { id: '13', name: 'Pre-Med Society', tagline: 'Future healers.', interests: ['Pre-med', 'Academic'], memberCount: 140, isExclusive: true, coverColor: '#0d0d0d', eventsThisWeek: 2 },
  { id: '14', name: 'Dance Collective', tagline: 'Move. Create. Connect.', interests: ['Dance', 'Arts'], memberCount: 88, isExclusive: false, coverColor: '#c41e3a', eventsThisWeek: 2 },
  { id: '15', name: 'Green Campus', tagline: 'Sustainability in action.', interests: ['Sustainability', 'Volunteer'], memberCount: 72, isExclusive: false, coverColor: '#9e1830', eventsThisWeek: 1 },
]

export const events = [
  { id: 'e1', clubId: '1', clubName: 'Film Society', title: 'Documentary Night: Nature', date: 'Feb 22, 2026', time: '7:00 PM', location: 'Student Center Room 204', rsvpCount: 34, isMemberOnly: false },
  { id: 'e2', clubId: '2', clubName: 'Robotics Club', title: 'Workshop: Sensors & Arduino', date: 'Feb 23, 2026', time: '2:00 PM', location: 'Engineering Lab B', rsvpCount: 28, isMemberOnly: true },
  { id: 'e3', clubId: '3', clubName: 'Hiking & Outdoors', title: 'Weekend Trail — Blue Ridge', date: 'Feb 24, 2026', time: '8:00 AM', location: 'Meet at North Lot', rsvpCount: 42, isMemberOnly: false },
  { id: 'e4', clubId: '1', clubName: 'Film Society', title: 'Short Film Screening', date: 'Feb 25, 2026', time: '6:00 PM', location: 'Theater 1', rsvpCount: 56, isMemberOnly: false },
  { id: 'e5', clubId: '3', clubName: 'Hiking & Outdoors', title: 'Sunrise Summit', date: 'Feb 23, 2026', time: '5:30 AM', location: 'East Trailhead', rsvpCount: 18, isMemberOnly: false },
  { id: 'e6', clubId: '4', clubName: 'Jazz Ensemble', title: 'Open Jam Session', date: 'Feb 24, 2026', time: '8:00 PM', location: 'Music Hall 101', rsvpCount: 31, isMemberOnly: true },
  { id: 'e7', clubId: '5', clubName: 'Debate Team', title: 'Practice Round: Policy', date: 'Feb 22, 2026', time: '4:00 PM', location: 'Law Building 302', rsvpCount: 22, isMemberOnly: false },
  { id: 'e8', clubId: '6', clubName: 'Photo Club', title: 'Street Photography Walk', date: 'Feb 23, 2026', time: '10:00 AM', location: 'Main Gate', rsvpCount: 45, isMemberOnly: false },
  { id: 'e9', clubId: '7', clubName: 'Ultimate Frisbee', title: 'Pickup Game', date: 'Feb 22, 2026', time: '3:00 PM', location: 'Rec Field 2', rsvpCount: 38, isMemberOnly: false },
  { id: 'e10', clubId: '7', clubName: 'Ultimate Frisbee', title: 'Tournament Practice', date: 'Feb 25, 2026', time: '2:00 PM', location: 'Rec Field 1', rsvpCount: 24, isMemberOnly: false },
  { id: 'e11', clubId: '8', clubName: 'Startup Society', title: 'Pitch Night', date: 'Feb 26, 2026', time: '6:30 PM', location: 'Business School Auditorium', rsvpCount: 89, isMemberOnly: false },
  { id: 'e12', clubId: '9', clubName: 'Theater Guild', title: 'Auditions: Spring Musical', date: 'Feb 24, 2026', time: '7:00 PM', location: 'Black Box Theater', rsvpCount: 67, isMemberOnly: false },
  { id: 'e13', clubId: '10', clubName: 'Volunteer Corps', title: 'Campus Cleanup', date: 'Feb 23, 2026', time: '9:00 AM', location: 'Quad', rsvpCount: 52, isMemberOnly: false },
  { id: 'e14', clubId: '10', clubName: 'Volunteer Corps', title: 'Food Drive Kickoff', date: 'Feb 25, 2026', time: '12:00 PM', location: 'Student Center Lobby', rsvpCount: 41, isMemberOnly: false },
  { id: 'e15', clubId: '11', clubName: 'Esports League', title: 'Valorant Scrims', date: 'Feb 22, 2026', time: '6:00 PM', location: 'Gaming Lab', rsvpCount: 120, isMemberOnly: false },
  { id: 'e16', clubId: '11', clubName: 'Esports League', title: 'League of Legends Tournament', date: 'Feb 26, 2026', time: '5:00 PM', location: 'Gaming Lab', rsvpCount: 95, isMemberOnly: false },
  { id: 'e17', clubId: '12', clubName: 'Creative Writing', title: 'Poetry Slam', date: 'Feb 24, 2026', time: '7:30 PM', location: 'Coffee House', rsvpCount: 33, isMemberOnly: false },
  { id: 'e18', clubId: '13', clubName: 'Pre-Med Society', title: 'MCAT Study Session', date: 'Feb 23, 2026', time: '1:00 PM', location: 'Library Room 405', rsvpCount: 58, isMemberOnly: true },
  { id: 'e19', clubId: '14', clubName: 'Dance Collective', title: 'Hip-Hop Workshop', date: 'Feb 25, 2026', time: '5:00 PM', location: 'Dance Studio A', rsvpCount: 44, isMemberOnly: false },
  { id: 'e20', clubId: '15', clubName: 'Green Campus', title: 'Tree Planting', date: 'Feb 24, 2026', time: '10:00 AM', location: 'West Lawn', rsvpCount: 29, isMemberOnly: false },
  // Film Society (1) — 3rd event
  { id: 'e21', clubId: '1', clubName: 'Film Society', title: 'Director Q&A: Indie Films', date: 'Feb 27, 2026', time: '6:00 PM', location: 'Theater 1', rsvpCount: 28, isMemberOnly: false },
  // Robotics Club (2) — 2nd & 3rd
  { id: 'e22', clubId: '2', clubName: 'Robotics Club', title: 'Build Night: Rover Kits', date: 'Feb 24, 2026', time: '4:00 PM', location: 'Engineering Lab B', rsvpCount: 22, isMemberOnly: true },
  { id: 'e23', clubId: '2', clubName: 'Robotics Club', title: 'Competition Prep Session', date: 'Feb 28, 2026', time: '2:00 PM', location: 'Engineering Lab A', rsvpCount: 30, isMemberOnly: true },
  // Hiking & Outdoors (3) — 3rd
  { id: 'e24', clubId: '3', clubName: 'Hiking & Outdoors', title: 'Night Hike & Stargazing', date: 'Feb 26, 2026', time: '7:00 PM', location: 'East Trailhead', rsvpCount: 35, isMemberOnly: false },
  // Jazz Ensemble (4) — 2nd & 3rd
  { id: 'e25', clubId: '4', clubName: 'Jazz Ensemble', title: 'Big Band Rehearsal', date: 'Feb 25, 2026', time: '7:00 PM', location: 'Music Hall 101', rsvpCount: 25, isMemberOnly: true },
  { id: 'e26', clubId: '4', clubName: 'Jazz Ensemble', title: 'Jazz at the Café', date: 'Feb 28, 2026', time: '8:00 PM', location: 'Student Center Café', rsvpCount: 40, isMemberOnly: false },
  // Debate Team (5) — 2nd & 3rd
  { id: 'e27', clubId: '5', clubName: 'Debate Team', title: 'Lincoln-Douglas Practice', date: 'Feb 24, 2026', time: '4:00 PM', location: 'Law Building 302', rsvpCount: 18, isMemberOnly: false },
  { id: 'e28', clubId: '5', clubName: 'Debate Team', title: 'Tournament Debrief', date: 'Feb 27, 2026', time: '5:00 PM', location: 'Law Building 201', rsvpCount: 24, isMemberOnly: false },
  // Photo Club (6) — 2nd & 3rd
  { id: 'e29', clubId: '6', clubName: 'Photo Club', title: 'Portrait Workshop', date: 'Feb 25, 2026', time: '2:00 PM', location: 'Arts Building Studio', rsvpCount: 32, isMemberOnly: false },
  { id: 'e30', clubId: '6', clubName: 'Photo Club', title: 'Photo Critique Night', date: 'Feb 28, 2026', time: '6:00 PM', location: 'Main Gallery', rsvpCount: 28, isMemberOnly: false },
  // Ultimate Frisbee (7) — 3rd
  { id: 'e31', clubId: '7', clubName: 'Ultimate Frisbee', title: 'Skills Clinic', date: 'Feb 26, 2026', time: '4:00 PM', location: 'Rec Field 2', rsvpCount: 42, isMemberOnly: false },
  // Startup Society (8) — 2nd & 3rd
  { id: 'e32', clubId: '8', clubName: 'Startup Society', title: 'Founder Fireside Chat', date: 'Feb 24, 2026', time: '5:30 PM', location: 'Business School Room 101', rsvpCount: 55, isMemberOnly: false },
  { id: 'e33', clubId: '8', clubName: 'Startup Society', title: 'Ideation Workshop', date: 'Feb 27, 2026', time: '6:00 PM', location: 'Innovation Lab', rsvpCount: 48, isMemberOnly: false },
  // Theater Guild (9) — 2nd & 3rd
  { id: 'e34', clubId: '9', clubName: 'Theater Guild', title: 'Improv Night', date: 'Feb 25, 2026', time: '8:00 PM', location: 'Black Box Theater', rsvpCount: 52, isMemberOnly: false },
  { id: 'e35', clubId: '9', clubName: 'Theater Guild', title: 'Tech Rehearsal: Spring Musical', date: 'Feb 28, 2026', time: '6:00 PM', location: 'Main Stage', rsvpCount: 38, isMemberOnly: false },
  // Volunteer Corps (10) — 3rd
  { id: 'e36', clubId: '10', clubName: 'Volunteer Corps', title: 'Tutoring at Community Center', date: 'Feb 26, 2026', time: '3:00 PM', location: 'Downtown Community Center', rsvpCount: 44, isMemberOnly: false },
  // Esports League (11) — 3rd
  { id: 'e37', clubId: '11', clubName: 'Esports League', title: 'Rocket League Mini-Tournament', date: 'Feb 25, 2026', time: '7:00 PM', location: 'Gaming Lab', rsvpCount: 80, isMemberOnly: false },
  // Creative Writing (12) — 2nd & 3rd
  { id: 'e38', clubId: '12', clubName: 'Creative Writing', title: 'Fiction Workshop', date: 'Feb 23, 2026', time: '5:00 PM', location: 'Library Room 202', rsvpCount: 26, isMemberOnly: false },
  { id: 'e39', clubId: '12', clubName: 'Creative Writing', title: 'Open Mic Night', date: 'Feb 27, 2026', time: '7:00 PM', location: 'Coffee House', rsvpCount: 41, isMemberOnly: false },
  // Pre-Med Society (13) — 2nd & 3rd
  { id: 'e40', clubId: '13', clubName: 'Pre-Med Society', title: 'Shadowing Info Session', date: 'Feb 24, 2026', time: '6:00 PM', location: 'Science Building 105', rsvpCount: 62, isMemberOnly: true },
  { id: 'e41', clubId: '13', clubName: 'Pre-Med Society', title: 'Anatomy Review Session', date: 'Feb 28, 2026', time: '2:00 PM', location: 'Library Room 405', rsvpCount: 45, isMemberOnly: false },
  // Dance Collective (14) — 2nd & 3rd
  { id: 'e42', clubId: '14', clubName: 'Dance Collective', title: 'Ballet Basics', date: 'Feb 24, 2026', time: '4:00 PM', location: 'Dance Studio A', rsvpCount: 36, isMemberOnly: false },
  { id: 'e43', clubId: '14', clubName: 'Dance Collective', title: 'Choreography Showcase', date: 'Feb 27, 2026', time: '7:00 PM', location: 'Main Stage', rsvpCount: 58, isMemberOnly: false },
  // Green Campus (15) — 2nd & 3rd
  { id: 'e44', clubId: '15', clubName: 'Green Campus', title: 'Composting Workshop', date: 'Feb 25, 2026', time: '11:00 AM', location: 'Garden Shed', rsvpCount: 34, isMemberOnly: false },
  { id: 'e45', clubId: '15', clubName: 'Green Campus', title: 'Sustainability Fair', date: 'Feb 28, 2026', time: '12:00 PM', location: 'Quad', rsvpCount: 67, isMemberOnly: false },
]

export const stories = [
  { id: 's1', clubId: '1', clubName: 'Film Society', text: 'Documentary night this week 🎬' },
  { id: 's2', clubId: '2', clubName: 'Robotics Club', text: 'Arduino workshop sign-ups open' },
  { id: 's3', clubId: '3', clubName: 'Hiking & Outdoors', text: 'Weekend trail — Blue Ridge' },
  { id: 's4', clubId: '4', clubName: 'Jazz Ensemble', text: 'Open jam session Friday' },
  { id: 's5', clubId: '5', clubName: 'Debate Team', text: 'Policy round Thursday' },
  { id: 's6', clubId: '6', clubName: 'Photo Club', text: 'Street photography walk Saturday' },
  { id: 's7', clubId: '7', clubName: 'Ultimate Frisbee', text: 'Pickup game at Rec Field 2' },
  { id: 's8', clubId: '8', clubName: 'Startup Society', text: 'Pitch Night next week' },
  { id: 's9', clubId: '9', clubName: 'Theater Guild', text: 'Auditions for spring musical' },
  { id: 's10', clubId: '10', clubName: 'Volunteer Corps', text: 'Campus cleanup Saturday 9 AM' },
  { id: 's11', clubId: '11', clubName: 'Esports League', text: 'Valorant scrims tonight' },
  { id: 's12', clubId: '12', clubName: 'Creative Writing', text: 'Poetry slam sign-ups open' },
  { id: 's13', clubId: '13', clubName: 'Pre-Med Society', text: 'MCAT study session' },
  { id: 's14', clubId: '14', clubName: 'Dance Collective', text: 'Hip-hop workshop this week' },
  { id: 's15', clubId: '15', clubName: 'Green Campus', text: 'Tree planting on West Lawn' },
]

export const posts = [
  { id: 'p1', clubId: '1', clubName: 'Film Society', text: 'Documentary night was a hit!', likes: 24, comments: 5 },
  { id: 'p2', clubId: '3', clubName: 'Hiking & Outdoors', text: 'Weekend trail recap.', likes: 18, comments: 3 },
  { id: 'p3', clubId: '9', clubName: 'Theater Guild', text: 'Auditions next week — spread the word.', likes: 42, comments: 8 },
]

export const notifications = [
  { id: 'n1', type: 'event', text: 'Film Society — Documentary Night starts in 2 hours', time: '5m ago', read: false },
  { id: 'n2', type: 'rsvp', text: 'You RSVP’d to Robotics Workshop — Feb 23', time: '1h ago', read: true },
  { id: 'n3', type: 'club', text: 'Hiking & Outdoors posted a new event', time: '3h ago', read: false },
  { id: 'n4', type: 'reminder', text: 'Reminder: Short Film Screening tomorrow 6 PM', time: '1d ago', read: true },
  { id: 'n5', type: 'event', text: 'Esports League — Valorant Scrims tonight 6 PM', time: '12m ago', read: false },
  { id: 'n6', type: 'club', text: 'Startup Society — Pitch Night is Feb 26', time: '2h ago', read: false },
  { id: 'n7', type: 'rsvp', text: 'You RSVP’d to Photo Club Street Walk — Feb 23', time: '5h ago', read: true },
  { id: 'n8', type: 'reminder', text: 'Reminder: Volunteer Campus Cleanup tomorrow 9 AM', time: '1d ago', read: true },
  { id: 'n9', type: 'event', text: 'Theater Guild — Auditions for Spring Musical Feb 24', time: '4h ago', read: false },
  { id: 'n10', type: 'club', text: 'Dance Collective posted: Hip-Hop Workshop Feb 25', time: '6h ago', read: false },
  { id: 'n11', type: 'rsvp', text: 'You RSVP’d to Pre-Med MCAT Study Session — Feb 23', time: '8h ago', read: true },
  { id: 'n12', type: 'event', text: 'Green Campus — Tree Planting Saturday 10 AM', time: '1d ago', read: true },
  { id: 'n13', type: 'club', text: 'Debate Team — Practice Round Feb 22', time: '2d ago', read: true },
  { id: 'n14', type: 'reminder', text: 'Reminder: Ultimate Pickup Game today 3 PM', time: '30m ago', read: false },
  { id: 'n15', type: 'event', text: 'Creative Writing — Poetry Slam sign-ups open', time: '3h ago', read: false },
]
