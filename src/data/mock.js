export const interests = [
  'Arts', 'Sports', 'Tech', 'Culture', 'Music', 'Gaming', 'Volunteer', 'Academic', 'Social', 'Media',
  'Photography', 'Dance', 'Theater', 'Writing', 'Sustainability', 'Entrepreneurship', 'Pre-med', 'Law',
  'Affinity', 'Pre-Professional', 'Soccer', 'Pickleball', 'Gaelic Football'
]

export const clubs = [
  { id: '1', name: 'Hack@Davidson', tagline: 'Build. Code. Ship.', interests: ['Tech', 'Academic'], memberCount: 95, isExclusive: false, coverColor: '#c41e3a', eventsThisWeek: 3 },
  { id: '2', name: 'Davidson College Debate Club', tagline: 'Think. Argue. Win.', interests: ['Academic', 'Culture'], memberCount: 58, isExclusive: false, coverColor: '#0d0d0d', eventsThisWeek: 3 },
  { id: '3', name: 'Davidson College Neuroscience Club', tagline: 'Explore the brain.', interests: ['Academic', 'Pre-med'], memberCount: 72, isExclusive: false, coverColor: '#9e1830', eventsThisWeek: 3 },
  { id: '4', name: 'Women in Computer Science (WiCS)', tagline: 'Code. Connect. Lead.', interests: ['Tech', 'Academic'], memberCount: 64, isExclusive: false, coverColor: '#c41e3a', eventsThisWeek: 3 },
  { id: '5', name: 'Black Student Coalition (BSC)', tagline: 'Community. Voice. Action.', interests: ['Affinity', 'Social'], memberCount: 120, isExclusive: false, coverColor: '#0d0d0d', eventsThisWeek: 3 },
  { id: '6', name: 'Davidson International Association (DIA)', tagline: 'Global community at Davidson.', interests: ['Affinity', 'Culture'], memberCount: 88, isExclusive: false, coverColor: '#9e1830', eventsThisWeek: 3 },
  { id: '7', name: 'Korean Student Association (KSA)', tagline: 'Culture. Food. Connection.', interests: ['Affinity', 'Culture'], memberCount: 45, isExclusive: false, coverColor: '#c41e3a', eventsThisWeek: 3 },
  { id: '8', name: 'Pan-Asian Student Association (PASA)', tagline: 'Unite. Celebrate. Advocate.', interests: ['Affinity', 'Culture'], memberCount: 92, isExclusive: false, coverColor: '#0d0d0d', eventsThisWeek: 3 },
  { id: '9', name: 'Queers & Allies', tagline: 'Visible. Proud. Together.', interests: ['Affinity', 'Social'], memberCount: 78, isExclusive: false, coverColor: '#c41e3a', eventsThisWeek: 3 },
  { id: '10', name: 'You Are Not A Stranger Here (YANASH)', tagline: 'You belong here.', interests: ['Affinity', 'Social'], memberCount: 65, isExclusive: false, coverColor: '#9e1830', eventsThisWeek: 3 },
  { id: '11', name: 'Davidson Investment & Financial Association (DIFA)', tagline: 'Invest. Learn. Network.', interests: ['Pre-Professional', 'Tech'], memberCount: 85, isExclusive: false, coverColor: '#0d0d0d', eventsThisWeek: 3 },
  { id: '12', name: 'Mock Trial Association', tagline: 'Argue. Perform. Compete.', interests: ['Law', 'Pre-Professional'], memberCount: 42, isExclusive: true, coverColor: '#c41e3a', eventsThisWeek: 3 },
  { id: '13', name: 'Pre-Law Society', tagline: 'Think like a lawyer.', interests: ['Law', 'Pre-Professional'], memberCount: 56, isExclusive: false, coverColor: '#0d0d0d', eventsThisWeek: 3 },
  { id: '14', name: 'Premedicine Society', tagline: 'Future healers.', interests: ['Pre-med', 'Academic'], memberCount: 130, isExclusive: false, coverColor: '#9e1830', eventsThisWeek: 3 },
  { id: '15', name: 'Women in Business (WIB)', tagline: 'Lead. Grow. Connect.', interests: ['Pre-Professional', 'Social'], memberCount: 70, isExclusive: false, coverColor: '#c41e3a', eventsThisWeek: 3 },
  { id: '16', name: 'Davidson Filmmakers Club', tagline: 'Screen. Discuss. Create.', interests: ['Arts', 'Media'], memberCount: 48, isExclusive: false, coverColor: '#0d0d0d', eventsThisWeek: 3 },
  { id: '17', name: 'Libertas', tagline: 'Write. Share. Publish.', interests: ['Writing', 'Media'], memberCount: 35, isExclusive: false, coverColor: '#9e1830', eventsThisWeek: 3 },
  { id: '18', name: 'The Davidsonian', tagline: 'Campus news. Student voice.', interests: ['Media', 'Writing'], memberCount: 55, isExclusive: false, coverColor: '#c41e3a', eventsThisWeek: 3 },
  { id: '19', name: 'WALT 1610', tagline: 'Student radio. Your sound.', interests: ['Media', 'Music'], memberCount: 28, isExclusive: false, coverColor: '#0d0d0d', eventsThisWeek: 3 },
  { id: '20', name: 'Adopt-A-Grandfriend', tagline: 'Give time. Build connection.', interests: ['Volunteer', 'Social'], memberCount: 62, isExclusive: false, coverColor: '#c41e3a', eventsThisWeek: 3 },
  { id: '28', name: 'Bee Club', tagline: 'Bees. Campus. Sustainability.', interests: ['Sustainability', 'Academic'], memberCount: 32, isExclusive: false, coverColor: '#c41e3a', eventsThisWeek: 3 },
  { id: '33', name: 'The Davidson Delilahs', tagline: 'A cappella. All voices.', interests: ['Music', 'Arts'], memberCount: 22, isExclusive: true, coverColor: '#c41e3a', eventsThisWeek: 3 },
  { id: '34', name: 'Davidson Soccer Club', tagline: 'Kick it.', interests: ['Sports', 'Soccer'], memberCount: 68, isExclusive: false, coverColor: '#0d0d0d', eventsThisWeek: 3 },
  { id: '35', name: 'Davidson Pickleball Club', tagline: 'Dink. Drive. Win.', interests: ['Sports', 'Pickleball'], memberCount: 52, isExclusive: false, coverColor: '#9e1830', eventsThisWeek: 3 },
  { id: '36', name: 'Davidson Gaelic Football Club', tagline: 'Run. Pass. Score.', interests: ['Sports', 'Gaelic Football'], memberCount: 28, isExclusive: false, coverColor: '#c41e3a', eventsThisWeek: 3 },
]

export const events = [
  { id: 'e1', clubId: '1', clubName: 'Hack@Davidson', title: 'Build Night: Web Apps', date: 'Feb 22, 2026', time: '7:00 PM', location: 'E. Craig Wall Jr. Academic Center, Room 204', rsvpCount: 34, isMemberOnly: false },
  { id: 'e2', clubId: '2', clubName: 'Davidson College Debate Club', title: 'Practice Round: Policy', date: 'Feb 23, 2026', time: '2:00 PM', location: 'Chambers Building, Room 302', rsvpCount: 28, isMemberOnly: true },
  { id: 'e3', clubId: '3', clubName: 'Davidson College Neuroscience Club', title: 'Brain & Behavior Talk', date: 'Feb 24, 2026', time: '4:00 PM', location: 'Watson Life Sciences, Room 105', rsvpCount: 42, isMemberOnly: false },
  { id: 'e4', clubId: '1', clubName: 'Hack@Davidson', title: 'Git Workshop', date: 'Feb 25, 2026', time: '6:00 PM', location: 'E. Craig Wall Jr. Academic Center, Lab B', rsvpCount: 56, isMemberOnly: false },
  { id: 'e5', clubId: '4', clubName: 'Women in Computer Science (WiCS)', title: 'Tech Industry Panel', date: 'Feb 23, 2026', time: '5:30 PM', location: 'Chambers Building, Room 201', rsvpCount: 18, isMemberOnly: false },
  { id: 'e6', clubId: '5', clubName: 'Black Student Coalition (BSC)', title: 'Community Dinner', date: 'Feb 24, 2026', time: '6:00 PM', location: 'Vail Commons', rsvpCount: 31, isMemberOnly: false },
  { id: 'e7', clubId: '2', clubName: 'Davidson College Debate Club', title: 'Lincoln-Douglas Practice', date: 'Feb 22, 2026', time: '4:00 PM', location: 'Chambers Building, Room 302', rsvpCount: 22, isMemberOnly: false },
  { id: 'e8', clubId: '16', clubName: 'Davidson Filmmakers Club', title: 'Short Film Screening', date: 'Feb 23, 2026', time: '7:00 PM', location: 'Cunningham Theatre Center', rsvpCount: 45, isMemberOnly: false },
  { id: 'e9', clubId: '17', clubName: 'Libertas', title: 'Open Mic: Poetry & Prose', date: 'Feb 22, 2026', time: '7:30 PM', location: 'E.H. Little Library, Room 117', rsvpCount: 38, isMemberOnly: false },
  { id: 'e10', clubId: '18', clubName: 'The Davidsonian', title: 'Editorial Meeting', date: 'Feb 25, 2026', time: '4:00 PM', location: 'Knobloch Campus Center, Room 201', rsvpCount: 24, isMemberOnly: false },
  { id: 'e11', clubId: '14', clubName: 'Premedicine Society', title: 'MCAT Study Session', date: 'Feb 26, 2026', time: '1:00 PM', location: 'E.H. Little Library, Room 405', rsvpCount: 89, isMemberOnly: true },
  { id: 'e12', clubId: '28', clubName: 'Bee Club', title: 'Hive Check & Campus Tour', date: 'Feb 24, 2026', time: '10:00 AM', location: 'Meet at Baker Sports Complex', rsvpCount: 67, isMemberOnly: false },
  { id: 'e13', clubId: '33', clubName: 'The Davidson Delilahs', title: 'Spring Concert Rehearsal', date: 'Feb 23, 2026', time: '6:00 PM', location: 'Sloan Music Center, Room 101', rsvpCount: 52, isMemberOnly: true },
  { id: 'e14', clubId: '20', clubName: 'Adopt-A-Grandfriend', title: 'Visit at Senior Center', date: 'Feb 25, 2026', time: '2:00 PM', location: 'Conner House', rsvpCount: 41, isMemberOnly: false },
  { id: 'e15', clubId: '11', clubName: 'DIFA', title: 'Market Update & Pizza', date: 'Feb 22, 2026', time: '6:00 PM', location: 'Knobloch Campus Center, Room 302', rsvpCount: 120, isMemberOnly: false },
  { id: 'e16', clubId: '12', clubName: 'Mock Trial Association', title: 'Scrimmage Round', date: 'Feb 26, 2026', time: '5:00 PM', location: 'Chambers Building, Room 205', rsvpCount: 95, isMemberOnly: false },
  { id: 'e17', clubId: '17', clubName: 'Libertas', title: 'Fiction Workshop', date: 'Feb 24, 2026', time: '7:30 PM', location: 'Eumenean Hall', rsvpCount: 33, isMemberOnly: false },
  { id: 'e18', clubId: '14', clubName: 'Premedicine Society', title: 'Shadowing Info Session', date: 'Feb 23, 2026', time: '6:00 PM', location: 'Watson Life Sciences, Room 105', rsvpCount: 58, isMemberOnly: true },
  { id: 'e19', clubId: '33', clubName: 'The Davidson Delilahs', title: 'Sectionals', date: 'Feb 25, 2026', time: '5:00 PM', location: 'Sloan Music Center', rsvpCount: 44, isMemberOnly: true },
  { id: 'e20', clubId: '28', clubName: 'Bee Club', title: 'Sustainability & Pollinators Talk', date: 'Feb 24, 2026', time: '3:00 PM', location: 'Visual Arts Center, Room 102', rsvpCount: 29, isMemberOnly: false },
  { id: 'e21', clubId: '19', clubName: 'WALT 1610', title: 'Live Broadcast: Friday Night', date: 'Feb 27, 2026', time: '8:00 PM', location: 'Johnston Gym (studio)', rsvpCount: 28, isMemberOnly: false },
  { id: 'e22', clubId: '2', clubName: 'Davidson College Debate Club', title: 'Tournament Debrief', date: 'Feb 24, 2026', time: '4:00 PM', location: 'Chambers Building, Room 201', rsvpCount: 22, isMemberOnly: true },
  { id: 'e23', clubId: '18', clubName: 'The Davidsonian', title: 'Layout Night', date: 'Feb 28, 2026', time: '6:00 PM', location: 'Knobloch Campus Center', rsvpCount: 30, isMemberOnly: false },
  { id: 'e24', clubId: '6', clubName: 'DIA', title: 'International Coffee Hour', date: 'Feb 26, 2026', time: '4:00 PM', location: 'Vail Commons', rsvpCount: 35, isMemberOnly: false },
  { id: 'e25', clubId: '5', clubName: 'BSC', title: 'Study Jam', date: 'Feb 25, 2026', time: '7:00 PM', location: 'E.H. Little Library', rsvpCount: 25, isMemberOnly: false },
  { id: 'e26', clubId: '9', clubName: 'Queers & Allies', title: 'Movie Night', date: 'Feb 28, 2026', time: '7:00 PM', location: 'Philanthropic Hall', rsvpCount: 40, isMemberOnly: false },
  { id: 'e27', clubId: '1', clubName: 'Hack@Davidson', title: 'Demo Day Prep', date: 'Feb 27, 2026', time: '5:00 PM', location: 'E. Craig Wall Jr. Academic Center', rsvpCount: 18, isMemberOnly: false },
  { id: 'e28', clubId: '14', clubName: 'Premedicine Society', title: 'Anatomy Review', date: 'Feb 28, 2026', time: '2:00 PM', location: 'Watson Life Sciences', rsvpCount: 24, isMemberOnly: false },
  { id: 'e29', clubId: '16', clubName: 'Davidson Filmmakers Club', title: 'Documentary Night', date: 'Feb 25, 2026', time: '6:00 PM', location: 'Cunningham Theatre Center', rsvpCount: 32, isMemberOnly: false },
  { id: 'e30', clubId: '33', clubName: 'The Davidson Delilahs', title: 'Spring Concert', date: 'Mar 1, 2026', time: '7:00 PM', location: 'Sloan Music Center', rsvpCount: 28, isMemberOnly: false },
  // Club 3 — 2 more
  { id: 'e31', clubId: '3', clubName: 'Davidson College Neuroscience Club', title: 'Journal Club: Cognition', date: 'Feb 25, 2026', time: '3:00 PM', location: 'Watson Life Sciences, Room 210', rsvpCount: 28, isMemberOnly: false },
  { id: 'e32', clubId: '3', clubName: 'Davidson College Neuroscience Club', title: 'Guest Speaker: Clinical Research', date: 'Feb 27, 2026', time: '5:00 PM', location: 'Chambers Building, Room 101', rsvpCount: 45, isMemberOnly: false },
  // Club 4 — 2 more
  { id: 'e33', clubId: '4', clubName: 'Women in Computer Science (WiCS)', title: 'Resume Workshop', date: 'Feb 24, 2026', time: '4:00 PM', location: 'E. Craig Wall Jr. Academic Center, Room 302', rsvpCount: 38, isMemberOnly: false },
  { id: 'e34', clubId: '4', clubName: 'Women in Computer Science (WiCS)', title: 'Mentorship Mixer', date: 'Feb 28, 2026', time: '6:00 PM', location: 'Knobloch Campus Center', rsvpCount: 52, isMemberOnly: false },
  // Club 5 — 1 more
  { id: 'e35', clubId: '5', clubName: 'Black Student Coalition (BSC)', title: 'Community Brunch', date: 'Feb 23, 2026', time: '11:00 AM', location: 'Vail Commons', rsvpCount: 68, isMemberOnly: false },
  // Club 6 — 2 more
  { id: 'e36', clubId: '6', clubName: 'Davidson International Association (DIA)', title: 'Global Game Night', date: 'Feb 24, 2026', time: '7:00 PM', location: 'Philanthropic Hall', rsvpCount: 42, isMemberOnly: false },
  { id: 'e37', clubId: '6', clubName: 'Davidson International Association (DIA)', title: 'Language Exchange', date: 'Feb 27, 2026', time: '4:00 PM', location: 'E.H. Little Library, Room 117', rsvpCount: 35, isMemberOnly: false },
  // Club 7 — 3
  { id: 'e38', clubId: '7', clubName: 'Korean Student Association (KSA)', title: 'K-Drama Watch Party', date: 'Feb 22, 2026', time: '7:00 PM', location: 'Knobloch Campus Center, Room 201', rsvpCount: 32, isMemberOnly: false },
  { id: 'e39', clubId: '7', clubName: 'Korean Student Association (KSA)', title: 'Korean Cooking Night', date: 'Feb 25, 2026', time: '6:00 PM', location: 'Warner House', rsvpCount: 28, isMemberOnly: false },
  { id: 'e40', clubId: '7', clubName: 'Korean Student Association (KSA)', title: 'Culture Share: Holidays', date: 'Feb 28, 2026', time: '5:00 PM', location: 'Eumenean Hall', rsvpCount: 24, isMemberOnly: false },
  // Club 8 — 3
  { id: 'e41', clubId: '8', clubName: 'Pan-Asian Student Association (PASA)', title: 'PASA General Meeting', date: 'Feb 23, 2026', time: '5:30 PM', location: 'Chambers Building, Room 205', rsvpCount: 55, isMemberOnly: false },
  { id: 'e42', clubId: '8', clubName: 'Pan-Asian Student Association (PASA)', title: 'Lunar New Year Celebration', date: 'Feb 26, 2026', time: '6:00 PM', location: 'Vail Commons', rsvpCount: 90, isMemberOnly: false },
  { id: 'e43', clubId: '8', clubName: 'Pan-Asian Student Association (PASA)', title: 'Study Session', date: 'Feb 28, 2026', time: '2:00 PM', location: 'E.H. Little Library', rsvpCount: 40, isMemberOnly: false },
  // Club 9 — 2 more
  { id: 'e44', clubId: '9', clubName: 'Queers & Allies', title: 'Pride Week Kickoff', date: 'Feb 24, 2026', time: '6:00 PM', location: 'Knobloch Campus Center', rsvpCount: 48, isMemberOnly: false },
  { id: 'e45', clubId: '9', clubName: 'Queers & Allies', title: 'Safe Space Discussion', date: 'Feb 27, 2026', time: '4:00 PM', location: 'Conner House', rsvpCount: 35, isMemberOnly: false },
  // Club 10 — 3
  { id: 'e46', clubId: '10', clubName: 'You Are Not A Stranger Here (YANASH)', title: 'Welcome Coffee', date: 'Feb 22, 2026', time: '10:00 AM', location: 'Vail Commons', rsvpCount: 42, isMemberOnly: false },
  { id: 'e47', clubId: '10', clubName: 'You Are Not A Stranger Here (YANASH)', title: 'Storytelling Night', date: 'Feb 25, 2026', time: '7:00 PM', location: 'Philanthropic Hall', rsvpCount: 38, isMemberOnly: false },
  { id: 'e48', clubId: '10', clubName: 'You Are Not A Stranger Here (YANASH)', title: 'Study Buddy Match', date: 'Feb 28, 2026', time: '3:00 PM', location: 'E.H. Little Library', rsvpCount: 30, isMemberOnly: false },
  // Club 11 — 2 more
  { id: 'e49', clubId: '11', clubName: 'Davidson Investment & Financial Association (DIFA)', title: 'Stock Pitch Practice', date: 'Feb 24, 2026', time: '5:00 PM', location: 'Chambers Building, Room 302', rsvpCount: 32, isMemberOnly: false },
  { id: 'e50', clubId: '11', clubName: 'Davidson Investment & Financial Association (DIFA)', title: 'Alumni Finance Panel', date: 'Feb 27, 2026', time: '6:30 PM', location: 'Knobloch Campus Center', rsvpCount: 58, isMemberOnly: false },
  // Club 12 — 2 more
  { id: 'e51', clubId: '12', clubName: 'Mock Trial Association', title: 'Witness Prep', date: 'Feb 23, 2026', time: '4:00 PM', location: 'Chambers Building, Room 205', rsvpCount: 28, isMemberOnly: true },
  { id: 'e52', clubId: '12', clubName: 'Mock Trial Association', title: 'Opening Statement Workshop', date: 'Feb 28, 2026', time: '5:00 PM', location: 'Chambers Building, Room 302', rsvpCount: 35, isMemberOnly: false },
  // Club 13 — 3
  { id: 'e53', clubId: '13', clubName: 'Pre-Law Society', title: 'LSAT Info Session', date: 'Feb 22, 2026', time: '5:00 PM', location: 'Chambers Building, Room 201', rsvpCount: 44, isMemberOnly: false },
  { id: 'e54', clubId: '13', clubName: 'Pre-Law Society', title: 'Law School Fair Prep', date: 'Feb 25, 2026', time: '4:30 PM', location: 'Knobloch Campus Center', rsvpCount: 36, isMemberOnly: false },
  { id: 'e55', clubId: '13', clubName: 'Pre-Law Society', title: 'Mock Admissions Review', date: 'Feb 27, 2026', time: '6:00 PM', location: 'E.H. Little Library, Room 202', rsvpCount: 28, isMemberOnly: false },
  // Club 15 — 3
  { id: 'e56', clubId: '15', clubName: 'Women in Business (WIB)', title: 'Networking Night', date: 'Feb 23, 2026', time: '6:00 PM', location: 'Knobloch Campus Center', rsvpCount: 52, isMemberOnly: false },
  { id: 'e57', clubId: '15', clubName: 'Women in Business (WIB)', title: 'Case Study Workshop', date: 'Feb 26, 2026', time: '5:00 PM', location: 'Chambers Building, Room 302', rsvpCount: 38, isMemberOnly: false },
  { id: 'e58', clubId: '15', clubName: 'Women in Business (WIB)', title: 'Executive Speaker Series', date: 'Feb 28, 2026', time: '6:30 PM', location: 'E. Craig Wall Jr. Academic Center', rsvpCount: 65, isMemberOnly: false },
  // Club 16 — 1 more
  { id: 'e59', clubId: '16', clubName: 'Davidson Filmmakers Club', title: 'Editing Lab', date: 'Feb 27, 2026', time: '4:00 PM', location: 'Visual Arts Center, Room 102', rsvpCount: 22, isMemberOnly: false },
  // Club 17 — 1 more
  { id: 'e60', clubId: '17', clubName: 'Libertas', title: 'Editorial Board Meeting', date: 'Feb 26, 2026', time: '5:00 PM', location: 'E.H. Little Library, Room 117', rsvpCount: 18, isMemberOnly: true },
  // Club 18 — 1 more
  { id: 'e61', clubId: '18', clubName: 'The Davidsonian', title: 'Pitch Meeting', date: 'Feb 24, 2026', time: '5:00 PM', location: 'Knobloch Campus Center, Room 201', rsvpCount: 28, isMemberOnly: false },
  // Club 19 — 2 more
  { id: 'e62', clubId: '19', clubName: 'WALT 1610', title: 'New DJ Training', date: 'Feb 23, 2026', time: '4:00 PM', location: 'Johnston Gym (studio)', rsvpCount: 15, isMemberOnly: false },
  { id: 'e63', clubId: '19', clubName: 'WALT 1610', title: 'Saturday Morning Show', date: 'Feb 28, 2026', time: '10:00 AM', location: 'Johnston Gym (studio)', rsvpCount: 12, isMemberOnly: false },
  // Club 20 — 2 more
  { id: 'e64', clubId: '20', clubName: 'Adopt-A-Grandfriend', title: 'Card Making for Seniors', date: 'Feb 23, 2026', time: '3:00 PM', location: 'Warner House', rsvpCount: 28, isMemberOnly: false },
  { id: 'e65', clubId: '20', clubName: 'Adopt-A-Grandfriend', title: 'Bingo Night', date: 'Feb 27, 2026', time: '6:00 PM', location: 'Conner House', rsvpCount: 35, isMemberOnly: false },
  // Club 28 — 1 more
  { id: 'e66', clubId: '28', clubName: 'Bee Club', title: 'Honey Harvest Demo', date: 'Feb 26, 2026', time: '2:00 PM', location: 'Baker Sports Complex (apiary)', rsvpCount: 24, isMemberOnly: false },
  // Soccer (34) — 3
  { id: 'e67', clubId: '34', clubName: 'Davidson Soccer Club', title: 'Open Pickup', date: 'Feb 22, 2026', time: '4:00 PM', location: 'Baker Sports Complex, Field 1', rsvpCount: 42, isMemberOnly: false },
  { id: 'e68', clubId: '34', clubName: 'Davidson Soccer Club', title: 'Skills Clinic', date: 'Feb 25, 2026', time: '5:00 PM', location: 'Baker Sports Complex', rsvpCount: 28, isMemberOnly: false },
  { id: 'e69', clubId: '34', clubName: 'Davidson Soccer Club', title: 'Scrimmage vs Alumni', date: 'Feb 28, 2026', time: '2:00 PM', location: 'Baker Sports Complex, Field 1', rsvpCount: 55, isMemberOnly: false },
  // Pickleball (35) — 3
  { id: 'e70', clubId: '35', clubName: 'Davidson Pickleball Club', title: 'Round Robin', date: 'Feb 23, 2026', time: '6:00 PM', location: 'Johnston Gym, Courts 1–2', rsvpCount: 24, isMemberOnly: false },
  { id: 'e71', clubId: '35', clubName: 'Davidson Pickleball Club', title: 'Beginner Session', date: 'Feb 26, 2026', time: '5:30 PM', location: 'Johnston Gym', rsvpCount: 18, isMemberOnly: false },
  { id: 'e72', clubId: '35', clubName: 'Davidson Pickleball Club', title: 'Doubles Tournament', date: 'Feb 27, 2026', time: '4:00 PM', location: 'Johnston Gym, Courts 1–4', rsvpCount: 32, isMemberOnly: false },
  // Gaelic Football (36) — 3
  { id: 'e73', clubId: '36', clubName: 'Davidson Gaelic Football Club', title: 'Training Session', date: 'Feb 24, 2026', time: '5:00 PM', location: 'Baker Sports Complex, Field 2', rsvpCount: 20, isMemberOnly: false },
  { id: 'e74', clubId: '36', clubName: 'Davidson Gaelic Football Club', title: 'Intro to Gaelic Football', date: 'Feb 26, 2026', time: '4:00 PM', location: 'Baker Sports Complex', rsvpCount: 15, isMemberOnly: false },
  { id: 'e75', clubId: '36', clubName: 'Davidson Gaelic Football Club', title: 'Match: Davidson vs Charlotte', date: 'Mar 1, 2026', time: '1:00 PM', location: 'Baker Sports Complex, Field 1', rsvpCount: 38, isMemberOnly: false },
]

export const stories = [
  { id: 's1', clubId: '1', clubName: 'Hack@Davidson', text: 'Build night this week' },
  { id: 's2', clubId: '2', clubName: 'Davidson College Debate Club', text: 'Policy round Thursday' },
  { id: 's3', clubId: '14', clubName: 'Premedicine Society', text: 'MCAT study session' },
  { id: 's4', clubId: '17', clubName: 'Libertas', text: 'Open mic Friday' },
  { id: 's5', clubId: '28', clubName: 'Bee Club', text: 'Hive check Saturday' },
  { id: 's6', clubId: '33', clubName: 'The Davidson Delilahs', text: 'Spring concert coming up' },
  { id: 's7', clubId: '18', clubName: 'The Davidsonian', text: 'New issue out soon' },
  { id: 's8', clubId: '5', clubName: 'BSC', text: 'Community dinner Friday' },
  { id: 's9', clubId: '16', clubName: 'Davidson Filmmakers Club', text: 'Short film screening' },
  { id: 's10', clubId: '20', clubName: 'Adopt-A-Grandfriend', text: 'Visit at Conner House' },
]

export const posts = [
  { id: 'p1', clubId: '1', clubName: 'Hack@Davidson', text: 'Build night was a hit!', likes: 24, comments: 5 },
  { id: 'p2', clubId: '17', clubName: 'Libertas', text: 'New issue submissions open.', likes: 18, comments: 3 },
  { id: 'p3', clubId: '33', clubName: 'The Davidson Delilahs', text: 'Spring concert save the date.', likes: 42, comments: 8 },
]

export const clubMembers = [
  { id: 'm1', clubId: '17', name: 'Alex Chen', email: 'achen@davidson.edu', role: 'Editor' },
  { id: 'm2', clubId: '17', name: 'Jordan Smith', email: 'jsmith@davidson.edu', role: 'Member' },
  { id: 'm3', clubId: '17', name: 'Sam Williams', email: 'swilliams@davidson.edu', role: 'Member' },
  { id: 'm4', clubId: '17', name: 'Morgan Lee', email: 'mlee@davidson.edu', role: 'Editor' },
  { id: 'm5', clubId: '17', name: 'Casey Rivera', email: 'crivera@davidson.edu', role: 'Member' },
  { id: 'm6', clubId: '17', name: 'Taylor Kim', email: 'tkim@davidson.edu', role: 'Member' },
  { id: 'm7', clubId: '17', name: 'Jamie Foster', email: 'jfoster@davidson.edu', role: 'Member' },
  { id: 'm8', clubId: '17', name: 'Riley Nguyen', email: 'rnguyen@davidson.edu', role: 'Member' },
  { id: 'm9', clubId: '17', name: 'Quinn Davis', email: 'qdavis@davidson.edu', role: 'Member' },
]

export const notifications = [
  { id: 'n1', type: 'event', clubId: '14', text: 'Premedicine Society — MCAT Study Session starts in 2 hours', time: '5m ago', read: false },
  { id: 'n2', type: 'rsvp', clubId: '28', text: 'You RSVP\'d to Bee Club Hive Check — Feb 24', time: '1h ago', read: true },
  { id: 'n3', type: 'club', clubId: '33', text: 'The Davidson Delilahs posted a new event', time: '3h ago', read: false },
  { id: 'n4', type: 'reminder', clubId: '17', text: 'Reminder: Libertas Open Mic tomorrow 7:30 PM', time: '1d ago', read: true },
  { id: 'n5', type: 'event', clubId: '1', text: 'Hack@Davidson — Build Night tonight 7 PM', time: '12m ago', read: false },
  { id: 'n6', type: 'club', clubId: '14', text: 'Premedicine Society — Shadowing Info Feb 23', time: '2h ago', read: false },
  { id: 'n7', type: 'rsvp', clubId: '6', text: 'You RSVP\'d to DIA Coffee Hour — Feb 26', time: '5h ago', read: true },
  { id: 'n8', type: 'reminder', clubId: '20', text: 'Reminder: Adopt-A-Grandfriend visit tomorrow 2 PM', time: '1d ago', read: true },
  { id: 'n9', type: 'event', clubId: '33', text: 'The Davidson Delilahs — Spring Concert Mar 1', time: '4h ago', read: false },
  { id: 'n10', type: 'club', clubId: '17', text: 'Libertas posted: Fiction Workshop Feb 24', time: '6h ago', read: false },
  { id: 'n11', type: 'rsvp', clubId: '14', text: 'You RSVP\'d to Pre-Med MCAT Study — Feb 26', time: '8h ago', read: true },
  { id: 'n12', type: 'event', clubId: '28', text: 'Bee Club — Sustainability Talk Saturday 3 PM', time: '1d ago', read: true },
  { id: 'n13', type: 'club', clubId: '2', text: 'Debate Club — Practice Round Feb 22', time: '2d ago', read: true },
  { id: 'n14', type: 'reminder', clubId: '5', text: 'Reminder: BSC Community Dinner today 6 PM', time: '30m ago', read: false },
  { id: 'n15', type: 'event', clubId: '17', text: 'Libertas — Poetry & Prose sign-ups open', time: '3h ago', read: false },
]
