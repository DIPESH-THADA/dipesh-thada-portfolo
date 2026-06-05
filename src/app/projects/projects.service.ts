import { Injectable } from '@angular/core';

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  role: string;
  tools: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  year: string;
  duration: string;
  category: string;
  features: string[];
  highlights: { label: string; value: string }[];
}

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  private projects: Project[] = [
    {
      id: 1,
      title: 'Ecommerce Website',
      subtitle: 'D Fashion Hub – Full-Stack Fashion Store',
      description:
        'A fully-featured e-commerce platform with real-time inventory, secure payments, and an intuitive admin dashboard for product management.',
      fullDescription: `D Fashion Hub is a complete fashion e-commerce platform built for the modern shopper. The platform covers Women's, Men's, and Kids' fashion with categories including Dresses, Jackets, Skirts, Shoes & Bags, and Gift Cards. Users can explore hundreds of products, filter by category, add to cart, manage wishlists, and track orders — all within a seamless shopping experience.

The admin dashboard enables product management, inventory tracking, and sales analytics in real time. A secure checkout flow integrates payment processing with support for multiple currencies, while trust-building features (30-day returns, 2-year warranty, free delivery over a threshold) keep conversion rates high.`,
      role: 'Full-Stack Developer',
      tools: ['React', 'Node.js', 'MongoDB'],
      image: 'projects/image/ecommerce.webp',
      liveUrl: 'https://ecpmmerce-website.netlify.app',
      githubUrl: 'https://github.com/DIPESH-THADA/data-API',
      featured: true,
      year: '2024',
      duration: '3 Months',
      category: 'E-Commerce',
      features: [
        "Multi-category catalog (Women's, Men's, Kids)",
        'User authentication & account management',
        'Shopping cart & wishlist functionality',
        'Secure payment processing & order tracking',
        'Admin dashboard with inventory management',
        'Newsletter subscription & contact form',
        'Responsive mobile-first design',
        '30-day returns, free delivery & warranty trust signals',
      ],
      highlights: [
        { label: 'Products', value: '500+' },
        { label: 'Categories', value: '6' },
        { label: 'Platform', value: 'Netlify' },
        { label: 'Type', value: 'Full-Stack' },
      ],
    },
    {
      id: 2,
      title: 'Speaker Event Manager',
      subtitle: 'Event Management & Analytics Platform',
      description:
        'A comprehensive event management system for organizing and promoting speaker events with registration, scheduling, and analytics.',
      fullDescription: `The Speaker Event Manager is a full-featured platform designed to simplify the logistics behind organizing speaker events. Organizers can create events, manage speaker registrations, set scheduling slots, and monitor real-time attendee engagement through an intuitive analytics dashboard.

Built with React and TypeScript on the frontend and Node.js on the backend, the application uses Sass for polished custom styling. The platform provides a seamless experience from event creation to post-event analytics — all in one place. Attendees get a smooth registration flow while organizers gain valuable insights through live dashboards.`,
      role: 'Frontend Lead / Backend Support',
      tools: ['React', 'TypeScript', 'Node.js', 'Sass'],
      image: 'projects/image/speaker-add.jpg',
      liveUrl: 'https://speaker-event-manager.netlify.app/',
      githubUrl:
        'https://github.com/DIPESH-THADA/complete-react-redux-next.js-course/tree/main/section-8/split-speaker-app',
      featured: true,
      year: '2024',
      duration: '2 Months',
      category: 'Event Management',
      features: [
        'Event creation and full management dashboard',
        'Speaker registration & profile management',
        'Dynamic scheduling and time-slot configuration',
        'Real-time attendee registration tracking',
        'Analytics dashboard with engagement metrics',
        'Custom Sass UI with polished component design',
        'TypeScript for robust type-safe development',
        'RESTful API backend with Node.js',
      ],
      highlights: [
        { label: 'Stack', value: 'React + TS' },
        { label: 'Backend', value: 'Node.js' },
        { label: 'Role', value: 'Frontend Lead' },
        { label: 'Type', value: 'Full-Stack' },
      ],
    },
    {
      id: 3,
      title: 'AI Powered Animated Website',
      subtitle: 'NEXUS – Enterprise AI Infrastructure Platform',
      description:
        'An AI-powered animated website featuring dynamic visualizations and interactive elements showcasing a next-gen AI platform.',
      fullDescription: `NEXUS is a visually stunning animated landing page for an enterprise-grade AI infrastructure platform. The site showcases complex React animations with Sass-powered styling and TypeScript type safety. It features an animated hero section with live performance metric counters, a features showcase, testimonials, pricing tiers, and a company timeline.

The platform highlights impressive AI capabilities including 99.7% model accuracy, sub-12ms latency, 1.4TB/s throughput, and 180+ global edge points of presence. Three pricing tiers — Starter (free), Professional ($299/mo), and Enterprise (custom) — are presented with smooth scroll animations and interactive UI elements throughout the page.`,
      role: 'UI/UX & Developer',
      tools: ['React', 'Sass', 'TypeScript', 'Node.js'],
      image: 'projects/image/ai-website.webp',
      liveUrl: 'https://animated-ai-website.netlify.app/',
      githubUrl: 'https://github.com/DIPESH-THADA/ai-powered-website',
      featured: false,
      year: '2024',
      duration: '6 Weeks',
      category: 'AI / Landing Page',
      features: [
        'Animated hero with live performance metric counters',
        'Interactive 6-feature grid (Speed, Security, Scale)',
        'Company growth timeline with milestone animations',
        'Customer testimonials with enterprise quotes',
        'Three-tier pricing section (Free / Pro / Enterprise)',
        'Contact form with multiple office locations',
        'Smooth scroll and intersection-based animations',
        'Fully responsive across all screen sizes',
      ],
      highlights: [
        { label: 'Accuracy', value: '99.7%' },
        { label: 'Latency', value: '<12ms' },
        { label: 'Edge PoPs', value: '180+' },
        { label: 'Animations', value: 'Rich' },
      ],
    },
    {
      id: 4,
      title: 'Church Website',
      subtitle: 'Bhimphedi Christian Church – Community & Ministry Platform',
      description:
        'A church website providing information about services, events, and community activities with sermon access and online giving.',
      fullDescription: `Bhimphedi Christian Church's website serves a growing community across four branch locations in Nepal. The platform connects members and visitors with all aspects of church life — from weekly service schedules to upcoming events, sermons, and ministry programs.

The site features a sermon library (audio/video access), an online donations platform supporting global outreach and media broadcast, an events calendar, four branch location pages, and member testimonials. Built with React and TypeScript, the fully responsive platform serves multiple congregations simultaneously, including Saturday main services, weekday prayer meetings, and the women's ministry. The design emphasizes community connection and ease of access to church resources.`,
      role: 'Full-Stack Developer',
      tools: ['React', 'TypeScript', 'Node.js', 'Sass'],
      image: 'projects/image/church-website.jpg',
      liveUrl: 'https://bhimphedi-christian-church.netlify.app/',
      githubUrl:
        'https://github.com/DIPESH-THADA/landing-page/tree/master/lightnation',
      featured: true,
      year: '2023',
      duration: '2 Months',
      category: 'Community / Church',
      features: [
        '8-section website (Home, About, Services, Ministries, Sermons, Events, Branches, Contact)',
        'Weekly multi-day service schedule display',
        'Sermon library with audio and video access',
        'Upcoming events calendar (Festival of Life, Youth Summit)',
        'Online giving platform for outreach and media support',
        '4 branch location pages across Nepal',
        'Member testimonials and transformation stories',
        'Responsive design across all devices',
      ],
      highlights: [
        { label: 'Branches', value: '4 Locations' },
        { label: 'Services', value: 'Weekly' },
        { label: 'Ministries', value: '4+' },
        { label: 'Platform', value: 'Netlify' },
      ],
    },
    {
      id: 5,
      title: 'Todo and Notes App',
      subtitle: 'Productivity App – Smart Note-Taking & Task Manager',
      description:
        'A smart productivity application combining todo lists and rich note-taking with categories, tags, favorites, and archive.',
      fullDescription: `The Todo and Notes App is a polished productivity tool built with pure HTML, CSS, and JavaScript — no frameworks, just clean and efficient vanilla code. Users can create, organize, and manage both task lists and rich notes from a single distraction-free interface.

The app provides six predefined categories (Personal, Work, Study, Ideas, To-Do, Other), custom tagging for flexible filtering, a powerful search system, word and character counters, color coding per note, a favorites system for quick access, and an archive for completed items. The minimal, clean design keeps focus on content rather than complexity.`,
      role: 'Mobile-First Developer',
      tools: ['HTML', 'CSS', 'JavaScript'],
      image: 'projects/image/todo-note.webp',
      liveUrl: 'https://todo-list-notebook.netlify.app/',
      githubUrl: 'https://github.com/DIPESH-THADA/todo-notes-app',
      featured: false,
      year: '2023',
      duration: '4 Weeks',
      category: 'Productivity',
      features: [
        'Create and manage notes and to-do lists',
        '6 predefined categories (Personal, Work, Study, Ideas, To-Do, Other)',
        'Custom tag system with tag-based filtering',
        'Favorites system for quick access',
        'Archive for completed or inactive notes',
        'Search and filter by tags or content',
        'Word and character counter per note',
        'Color coding for visual organization',
      ],
      highlights: [
        { label: 'Stack', value: 'Vanilla JS' },
        { label: 'Categories', value: '6' },
        { label: 'Build', value: 'No Frameworks' },
        { label: 'Type', value: 'Frontend' },
      ],
    },
    {
      id: 6,
      title: 'Hotel Booking Platform',
      subtitle: 'IHG-Inspired – Travel & Hospitality Booking System',
      description:
        'A modern hotel booking platform with real-time availability, advanced filtering, loyalty rewards, and a user-friendly booking flow.',
      fullDescription: `Inspired by IHG's hotel booking system, this platform delivers a premium hotel search and booking experience. Users can search by destination, dates, and guest configuration — with results displayed in both list and interactive map views.

The platform features advanced filtering by amenities and hotel brand, an integrated loyalty rewards program, detailed room and rate comparisons, customer reviews with ratings, and a secure multi-step checkout. Built with Next.js for server-side rendering, Prisma as the ORM, PostgreSQL for persistence, and deployed on Vercel. The UI closely mirrors real-world hotel booking platforms with a clean, professional interface.`,
      role: 'Full-Stack Developer',
      tools: ['Next.js', 'Prisma', 'PostgreSQL', 'Vercel'],
      image: 'projects/image/hotel.webp',
      liveUrl: 'https://hotel-search-website.netlify.app/',
      githubUrl: 'https://github.com/DIPESH-THADA/IHG-HOTEL-WEBSITE',
      featured: false,
      year: '2024',
      duration: '2 Months',
      category: 'Travel / Hospitality',
      features: [
        'Destination search with flexible date picker',
        'Room and guest count configuration',
        'Real-time hotel availability checks & filtering',
        'Map view and list view for search results',
        'Loyalty rewards program (IHG One Rewards style)',
        'Hotel ratings, reviews & full amenity details',
        'Secure multi-step booking and checkout flow',
        'Phone support and live chat integration',
      ],
      highlights: [
        { label: 'Framework', value: 'Next.js' },
        { label: 'Database', value: 'PostgreSQL' },
        { label: 'Deployed', value: 'Vercel' },
        { label: 'Type', value: 'Full-Stack' },
      ],
    },
  ];

  getAll(): Project[] {
    return this.projects;
  }

  getById(id: number): Project | undefined {
    return this.projects.find((p) => p.id === id);
  }

  getNext(id: number): Project | undefined {
    const idx = this.projects.findIndex((p) => p.id === id);
    return this.projects[(idx + 1) % this.projects.length];
  }

  getPrev(id: number): Project | undefined {
    const idx = this.projects.findIndex((p) => p.id === id);
    return this.projects[
      (idx - 1 + this.projects.length) % this.projects.length
    ];
  }
}
