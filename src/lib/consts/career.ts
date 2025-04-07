import { Career } from '../types';

export const MY_CAREERS: Career[] = [
  {
    logoUrl: '/svgs/ins.webp',
    role: 'Frontend Developer',
    companyLabel: 'Maven Digital Asia',
    companyFullName: 'Maven Digital Asia',
    address: 'Jakarta, Indonesia 🇮🇩',
    fromDate: new Date('2023-03-02'),
    endDate: new Date('2023-09-27'),
    workMode: 'Part-time',
    workType: 'Remote',
    responsibilities: [
      'Refactored the HTML, CSS, and JavaScript code of existing web pages to improve page loading speed.',
      'Used cross-browser compatibility techniques to ensure pages render the same across all browsers.',
      'Built a website for online travel and tour booking that offers a range of services.',
    ],
  },
  {
    logoUrl: '/svgs/umpo.png',
    role: 'Programming Laboratory Assistant',
    companyLabel: 'UMPO',
    companyFullName: 'Muhammadiyah University of Ponorogo',
    address: 'Ponorogo, Indonesia 🇮🇩',
    fromDate: new Date('2023-11-01'),
    endDate: new Date('2024-02-29'),
    workMode: 'Part-time',
    workType: 'On-site',
    responsibilities: [
      'Designing a practical class for automation systems and mobile programming practicals to become a facilitator between 30+ students and lecturers in implementing each practical material.',
      'Making evaluation reports for each practical activity.',
      'Conducting assessments of practical activities based on attendance, activity, assignments, and student reports.',
    ],
  },
  {
    logoUrl: '/svgs/SGI.png',
    role: 'Full Stack Developer',
    companyLabel: 'SGI',
    companyFullName: 'PT. Saputra Group Indonesia',
    address: 'Mojokerto, Indonesia 🇮🇩',
    fromDate: new Date('2024-12-22'),
    endDate: new Date('2025-01-02'),
    workMode: 'Full-time',
    workType: 'Remote',
    responsibilities: [
      'Design and develop internal project components and templates, ensuring efficient structure and scalability for long-term development.',
      'Improved and developed a CRUD dashboard for Cleaning Service Product management using the Laravel framework.',
      'Develop and optimize CRUD dashboard for convection production management using Laravel framework, increasing efficiency and ease in managing production data.',
    ],
  },
  {
    logoUrl: '/svgs/yasmaga.jpeg',
    role: 'Full Stack Developer',
    companyLabel: 'Yasmaga',
    companyFullName: 'Yasmaga FM 96.9 MHz',
    address: 'Ponorogo, Indonesia 🇮🇩',
    fromDate: new Date('2024-08-22'),
    endDate: new Date('2024-12-02'),
    workMode: 'Full-time',
    workType: 'Remote',
    responsibilities: [
      'Building a radio streaming web platform with Laravel for the backend, providing APIs for audio streaming and dynamic content management.',
      'Developing a responsive user interface using React.js and TypeScript for an interactive and seamless streaming experience.',
      'Integrating the streaming system with AzuraCast for real-time audio broadcasting, ensuring smoothness and optimal broadcast quality on the platform.',
    ],
}
];
