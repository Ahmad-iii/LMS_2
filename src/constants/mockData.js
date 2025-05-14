export const mockCourses = [
  {
    id: 'cs101',
    code: 'CS101',
    title: 'Programming Fundamentals',
    department: 'Computer Science',
    description: 'Introduction to programming concepts using Python',
    instructor: 'Dr. Ali Ahmad',
    credits: 3,
    schedule: 'Mon, Wed 10:00 AM - 11:30 AM',
    prerequisites: 'None',
    maxStudents: 40,
    enrolledStudents: 32,
    progress: 75,
    semester: 'Fall 2024',
    materials: ['Lecture Notes', 'Practice Problems', 'Sample Code'],
    status: 'active'
  },
  {
    id: 'cs305',
    code: 'CS305',
    title: 'Database Systems',
    department: 'Computer Science',
    description: 'Design and implementation of database systems',
    instructor: 'Dr. Sarah Khan',
    credits: 3,
    schedule: 'Tue, Thu 1:00 PM - 2:30 PM',
    prerequisites: 'CS201',
    maxStudents: 35,
    enrolledStudents: 28,
    progress: 60,
    semester: 'Spring 2025',
    materials: ['SQL Examples', 'Database Design Docs'],
    status: 'active'
  },
  {
    id: 'mgt201',
    code: 'MGT201',
    title: 'Principles of Management',
    department: 'Management Sciences',
    description: 'Fundamentals of management and organizational behavior',
    instructor: 'Dr. Fazal Rahman',
    credits: 3,
    schedule: 'Mon, Wed 2:00 PM - 3:30 PM',
    prerequisites: 'None',
    maxStudents: 45,
    enrolledStudents: 40,
    progress: 85,
    semester: 'Fall 2024',
    materials: ['Case Studies', 'Lecture Slides'],
    status: 'active'
  },
  {
    id: 'mgt305',
    code: 'MGT305',
    title: 'Marketing Management',
    department: 'Management Sciences',
    description: 'Strategic marketing concepts and practices',
    instructor: 'Dr. Amina Khalil',
    credits: 3,
    schedule: 'Tue, Thu 10:00 AM - 11:30 AM',
    prerequisites: 'MGT201',
    maxStudents: 40,
    enrolledStudents: 35,
    progress: 70,
    semester: 'Spring 2025',
    materials: ['Marketing Plans', 'Case Analysis'],
    status: 'active'
  }
];

export const departments = [
  'Computer Science',
  'Management Sciences',
  'Mathematics',
  'Physics',
  'Chemistry',
  'Biotechnology',
  'Islamic Studies',
  'English',
  'Urdu'
];

export const semesters = [
  'Fall 2024',
  'Spring 2025',
  'Summer 2025',
  'Fall 2025'
];
