import { Project, Certification, InnovationHighlight } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    type: 'developer',
    title: 'FinTech Dashboard',
    summary: 'A high-performance React dashboard for managing complex financial transactions with real-time data visualization.',
    audience: 'Financial analysts and portfolio managers looking for a streamlined, data-rich interface.',
    researchProcess: 'Conducted user interviews with 5 analysts to identify pain points in existing tools. Iterated through 3 wireframe versions focusing on data density without cognitive overload.',
    tools: ['React', 'TypeScript', 'Tailwind CSS', 'D3.js', 'Node.js'],
    images: ['https://picsum.photos/seed/dev1/800/600', 'https://picsum.photos/seed/dev1-2/800/600'],
    color: 'bg-cyber-gray'
  },
  {
  id: '2',
  type: 'designer',
  title: 'Tamela Health',
  summary: 'An AI-powered medical transcription tool designed to help radiologists reduce the time spent writing reports and focus more on reviewing and interpreting medical images.',
  audience: 'Radiologists and medical professionals who spend significant time documenting and preparing diagnostic reports.',
  researchProcess: 'Explored the reporting workflow and identified documentation as a time-consuming part of a radiologist’s routine. Designed the interface and user flow in Figma, focusing on clear transcription, efficient report editing, and a streamlined experience for clinical use. The product was developed and launched during TETFAIR.',
  tools: ['Figma'],
  images: ['/TScribe1.png','/TScribe2.png' ],
  color: 'bg-cyber-gray'
},
  {
    id: '3',
    type: 'developer',
    title: 'EcoTrack Mobile App',
    summary: 'A React Native application that helps users track their carbon footprint through automated receipt scanning and lifestyle logging.',
    audience: 'Environmentally conscious individuals looking for actionable data to reduce their daily impact.',
    researchProcess: 'Analyzed existing carbon calculators to find gaps in user engagement. Implemented gamification elements based on behavioral psychology research.',
    tools: ['React Native', 'Firebase', 'Python', 'OpenCV'],
    images: ['https://picsum.photos/seed/dev2/800/600', 'https://picsum.photos/seed/dev2-2/800/600'],
    color: 'bg-cyber-gray'
  },
  {
  id: '4',
  type: 'designer',
  title: 'CampusFlow',
  summary: 'A student navigation and campus discovery app designed to help new students find their way around campus, discover clubs, and keep track of events and activities.',
  audience: 'New and prospective students who need an easier way to navigate campus, discover student communities, and stay informed about events.',
  researchProcess: 'Identified common challenges faced by new students when navigating unfamiliar campus spaces and discovering activities. Designed user flows and interface concepts in Figma for campus navigation, club discovery, event schedules, and student activities, creating a centralized experience for exploring campus life.',
  tools: ['Figma'],
  images: ['/campus flow1.png', '/Campusflow2.png'],
  color: 'bg-cyber-gray'
},
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'c1',
    title: 'Front-End Engineering',
    issuer: 'AltSchool Africa',
    date: '2025',
    link: '/altschool ugomma.png'
  },
  {
    id: 'c2',
    title: 'UX Research',
    issuer: 'Coursera',
    date: '2026',
    link: '/Coursera UX Research.jpg'
  },
  {
    id: 'c3',
    title: 'User Experience',
    issuer: 'Coursera',
    date: '2026',
    link: '/Coursera User experience Design.jpg'
  },
  {
    id: 'c1',
    title: 'Volunteer Letter',
    issuer: 'Innov8 HUb',
    date: '2026',
    link: '/Volunteer letter innov8.jpg'
  },
  {
    id: 'c2',
    title: 'Creative Support Award',
    issuer: 'JamFORTE Technologies',
    date: '2025',
    link: '/Award for creative support JamForte.jpg'
  },
  {
    id: 'c3',
    title: 'Microsoft Project Management',
    issuer: 'Coursera',
    date: '2026',
    link: '/Project management.jpg'
  }
];

export const INNOVATION_HIGHLIGHT: InnovationHighlight = {
  title: 'Innovation Hub Volunteer',
  description: 'Supported hands-on projects across the Software Lab and Product Design Lab, contributing to software development, prototyping, and design activities.',
  role: 'FrontEnd Dev & Design Assistant',
  impact: 'Collaborated on high-fidelity prototypes and supported the development of market-ready projects, bringing ideas from concept toward practical implementation.'
};
