import { 
  Github, 
  Linkedin, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin, 
  Code2, 
  Layout, 
  Smartphone, 
  Layers, 
  Cpu, 
  Palette,
  ExternalLink,
  Terminal
} from 'lucide-react';

export const PROFILE_IMAGES = {
  formal: 'https://r2.erweima.ai/ai_image/1715846400000_1.jpg', // Placeholder, will use actual if available or descriptive
  casual: 'https://r2.erweima.ai/ai_image/1715846400000_2.jpg',
};

// Since I cannot get the direct URLs from the prompt attachments easily without them being provided as strings, 
// I will use the attachment references if the system supports it, or placeholders that the user can see.
// Actually, I'll use the provided image descriptions in the code so the user knows where to swap.

export const ACHIEVEMENTS = [
  {
    title: 'Coding Summer Camp 2024',
    organization: 'Improved HUB LTD',
    date: 'August 2024',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800', // Coding related
    description: 'Successfully completed Dynamic Website Development (Node.js, React.js, Flutter).'
  },
  {
    title: 'ALX Virtual Assistant Program',
    organization: 'ALX Africa',
    date: '2024',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800', // Collaboration/Learning
    description: 'Accepted into the prestigious ALX Virtual Assistant Program.'
  }
];
export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS = [
  { name: 'GitHub', href: 'https://github.com', icon: Github },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
  { name: 'Instagram', href: 'https://www.instagram.com/_iampri_nce/', icon: Instagram },
];

export const SKILLS = [
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', level: 95 },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', level: 90 },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', level: 85 },
  { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', level: 88 },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', level: 92 },
  { name: 'Git/GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', level: 80 },
  { name: 'Responsive Design', icon: Smartphone, level: 95, isLucide: true },
  { name: 'UI/UX Basics', icon: Palette, level: 75, isLucide: true },
  { name: 'API Integration', icon: Cpu, level: 82, isLucide: true },
];

export const PROJECTS = [
  {
    title: 'Personal Portfolio Website',
    description: 'A premium, modern, and visually impressive portfolio built with React and Framer Motion.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Modern Business Landing Page',
    description: 'High-converting landing page for a tech startup with smooth animations and responsive layout.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'Tailwind', 'GSAP'],
    github: '#',
    demo: '#',
  },
  {
    title: 'E-commerce UI',
    description: 'A sleek and modern e-commerce interface with product filtering and shopping cart functionality.',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'Redux', 'Styled Components'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Dashboard Interface',
    description: 'A comprehensive admin dashboard with data visualization and real-time analytics.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'Recharts', 'Tailwind'],
    github: '#',
    demo: '#',
  },
  {
    title: 'School Notes Platform',
    description: 'A collaborative platform for students to share and organize study materials.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'Firebase', 'Tailwind'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Photo Gallery Web App',
    description: 'A beautiful photo gallery with masonry layout and image lightbox features.',
    image: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'Framer Motion', 'API'],
    github: '#',
    demo: '#',
  },
];

export const SERVICES = [
  {
    title: 'Front-End Development',
    description: 'Building high-performance, interactive web applications using modern frameworks like React.',
    icon: Code2,
  },
  {
    title: 'Landing Page Design',
    description: 'Creating visually stunning and high-converting landing pages tailored to your brand.',
    icon: Layout,
  },
  {
    title: 'Responsive Conversion',
    description: 'Transforming existing designs into fully responsive websites that work on all devices.',
    icon: Smartphone,
  },
  {
    title: 'React.js Web Apps',
    description: 'Developing complex, scalable web applications with a focus on user experience and performance.',
    icon: Layers,
  },
  {
    title: 'UI Improvements',
    description: 'Enhancing the look and feel of your existing web applications for better user engagement.',
    icon: Palette,
  },
  {
    title: 'Portfolio Creation',
    description: 'Crafting unique and professional portfolios to showcase your skills and projects effectively.',
    icon: Terminal,
  },
];

export const TESTIMONIALS = [
  {
    name: 'John Doe',
    role: 'CEO at TechFlow',
    content: 'Ngendo is an exceptionally talented developer. He delivered our project on time and exceeded our expectations with his creative coding skills.',
    avatar: 'https://i.pravatar.cc/150?u=john',
  },
  {
    name: 'Sarah Smith',
    role: 'Product Manager',
    content: 'Working with Ngendo was a pleasure. His attention to detail and passion for modern web technologies really shines through in his work.',
    avatar: 'https://i.pravatar.cc/150?u=sarah',
  },
  {
    name: 'Alex Johnson',
    role: 'Freelance Designer',
    content: 'The portfolio Ngendo built for me is simply amazing. It is fast, responsive, and looks incredibly professional. Highly recommended!',
    avatar: 'https://i.pravatar.cc/150?u=alex',
  },
];

export const JOURNEY = [
  {
    year: '2023',
    title: 'The Beginning',
    description: 'Started my coding journey by learning the fundamentals of HTML, CSS, and JavaScript.',
  },
  {
    year: '2024',
    title: 'Exploring Frameworks',
    description: 'Dived deep into React.js and modern front-end tools like Tailwind CSS and Framer Motion.',
  },
  {
    year: '2025',
    title: 'Building & Growing',
    description: 'Focused on building real-world projects, improving UI/UX skills, and collaborating on open-source.',
  },
  {
    year: '2026',
    title: 'Professional Path',
    description: 'Available for freelance and professional collaborations, continuing to push the boundaries of creative coding.',
  },
];
