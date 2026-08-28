import { Project, Certification, InnovationHighlight } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    type: 'developer',
    title: 'Portfolio',
    summary: 'A minimalist, high-performance portfolio engineered with responsive design, dynamic layout transitions, and optimized bundle sizes.',
    audience: 'Engineering managers and technical recruiters looking for frontend talent with a focus on clean code and system logic.',
    researchProcess: 'Iterated through layout concepts to maximize scannability. Focused on performance benchmarks to ensure instant rendering across both desktop and mobile viewports.',
    tools: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    images: ['/portfoliosc.png',],
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
    title: 'SocialGrid',
    summary: 'A multi-platform AI social media assistant that allows users to generate customized captions, discover trending hashtags, and schedule posts.',
    audience: 'Content creators and brands looking for an intelligent, automated tool to manage their digital presence across multiple channels.',
    researchProcess: 'Analyzed social media engagement metrics to optimize caption generation parameters. Structured user-controlled content rules to ensure generated posts align perfectly with brand safety standards.',
    tools: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    images: ['/socialgrid1.png', '/Socialgrid2.png'],
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
