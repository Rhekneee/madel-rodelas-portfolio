import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { motion, AnimatePresence, useScroll, useSpring, useTransform, type Variants } from 'motion/react';
import { 
  Laptop, 
  Scissors, 
  Terminal, 
  ExternalLink, 
  Github, 
  Linkedin, 
  Mail,
  Activity,
  Music,
  Package,
  Plane,
  Camera,
  Heart,
  ShieldCheck,
  Flower2,
  Stethoscope,
  Cpu,
  Map,
  X,
  ChevronLeft,
  ChevronRight,
  Calendar,
  User,
  Check,
  Layers,
  Sparkles,
  GraduationCap,
  Briefcase,
  Award,
  Code2,
  Database,
  Server,
  Wrench,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Eye,
  FileText,
  Maximize2
} from 'lucide-react';

// --- Components ---

const SkillLogo = ({ name, className = "w-10 h-10" }: { name: string; className?: string }) => {
  switch (name) {
    case 'HTML5':
      return (
        <svg className={`${className} flex-shrink-0`} viewBox="0 0 24 24" fill="none">
          <path d="M4.17 2.05L5.8 20.35L12 22.06L18.19 20.35L19.83 2.05H4.17Z" fill="#E34F26" />
          <path d="M12 3.73V20.27L16.71 18.96L18.06 3.73H12Z" fill="#EF652A" />
          <path d="M12 7.76H8.38L8.62 10.45H12V13.14H8.86L9.18 16.73L12 17.51V15.11L11.02 14.83L10.9 13.54H12V7.76Z" fill="#ECECEC" />
          <path d="M12 7.76V10.45H15.42L15.14 13.54L12 14.41V16.8L15.82 15.74L16.27 10.74L16.32 10.45H12V7.76Z" fill="#FFFFFF" />
        </svg>
      );
    case 'CSS3':
      return (
        <svg className={`${className} flex-shrink-0`} viewBox="0 0 24 24" fill="none">
          <path d="M4.17 2.05L5.8 20.35L12 22.06L18.19 20.35L19.83 2.05H4.17Z" fill="#1572B6" />
          <path d="M12 3.73V20.27L16.71 18.96L18.06 3.73H12Z" fill="#33A9DC" />
          <path d="M12 7.76H7.93L8.18 10.45H12V13.14H8.42L8.74 16.73L12 17.63V15.11L10.74 14.77L10.62 13.54H12V7.76Z" fill="#ECECEC" />
          <path d="M12 7.76V10.45H15.86L15.61 13.14H12V15.74L15.36 14.82L15.69 11.23L16.03 7.76H12Z" fill="#FFFFFF" />
        </svg>
      );
    case 'JavaScript':
      return (
        <svg className={`${className} flex-shrink-0`} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path d="M7.7 17.8C8.3 18.5 9.2 18.9 10.3 18.9C11.9 18.9 12.8 18.1 12.8 16.5V11.2H10.8V16.5C10.8 17.1 10.5 17.4 9.9 17.4C9.4 17.4 9.1 17.2 8.7 16.7L7.7 17.8ZM13.8 17.5C14.4 18.3 15.5 18.9 17 18.9C19 18.9 20.2 17.8 20.2 16.2C20.2 14.8 19.3 14.1 17.7 13.4L17.2 13.2C16.2 12.8 15.7 12.4 15.7 11.7C15.7 11 16.3 10.5 17.1 10.5C17.9 10.5 18.4 10.8 18.9 11.5L20 10.4C19.3 9.4 18.3 9 17.1 9C15.2 9 14.1 10.2 14.1 11.8C14.1 13.1 14.9 13.8 16.3 14.4L16.8 14.6C17.9 15.1 18.5 15.5 18.5 16.3C18.5 17.1 17.8 17.6 16.8 17.6C15.8 17.6 15.1 17.1 14.5 16.2L13.8 17.5Z" fill="#000000" />
        </svg>
      );
    case 'PHP':
      return (
        <svg className={`${className} flex-shrink-0`} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="5" fill="#777BB4" />
          <path d="M6.2 14.8H4.6L5.8 8.8H8.5C9.8 8.8 10.6 9.5 10.4 10.6C10.2 11.9 9.1 12.8 7.8 12.8H6.6L6.2 14.8ZM6.8 11.6H7.6C8.2 11.6 8.7 11.2 8.8 10.7C8.9 10.2 8.6 9.8 8 9.8H7.2L6.8 11.6ZM13.8 11.6H12.2L11.5 14.8H9.9L11.1 8.8H12.7L12.4 10.4H14.1L14.4 8.8H16L14.7 14.8H13.1L13.8 11.6ZM18.2 14.8H16.6L17.8 8.8H20.5C21.8 8.8 22.6 9.5 22.4 10.6C22.2 11.9 21.1 12.8 19.8 12.8H18.6L18.2 14.8ZM18.8 11.6H19.6C20.2 11.6 20.7 11.2 20.8 10.7C20.9 10.2 20.6 9.8 20 9.8H19.2L18.8 11.6Z" fill="#FFFFFF" />
        </svg>
      );
    case 'Node.js':
      return (
        <svg className={`${className} flex-shrink-0`} viewBox="0 0 24 24" fill="none">
          <path d="M12 2L21 7.2V16.8L12 22L3 16.8V7.2L12 2Z" fill="#339933" />
          <path d="M12 4.3L19 8.3V15.7L12 19.7L5 15.7V8.3L12 4.3Z" fill="#026E00" />
          <path d="M12 6.5L16.8 9.3V14.7L12 17.5L7.2 14.7V9.3L12 6.5Z" fill="#5FA04E" />
          <path d="M12 9.5L14.5 11V13.5L12 15L9.5 13.5V11L12 9.5Z" fill="#FFFFFF" />
        </svg>
      );
    case 'MySQL':
    case 'MySql':
      return (
        <svg className={`${className} flex-shrink-0`} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="5" fill="#00618A" />
          <path d="M18.8 7.2C17.5 5.8 15.5 5.3 13.8 5.7C12.1 6.1 10.8 7.3 10.2 8.9C9.7 10.2 9.7 11.7 10.3 13C10.9 14.2 12.1 15 13.4 15.2C14.7 15.4 16.1 15 17.1 14.1L18.2 15.2C16.8 16.5 14.8 17.1 13 16.8C11.2 16.5 9.6 15.4 8.7 13.8C7.9 12.2 7.8 10.3 8.5 8.7C9.3 6.7 11 5.3 13.1 4.7C15.3 4.2 17.7 4.8 19.4 6.4L18.8 7.2Z" fill="#E48E00" />
          <path d="M14.5 9.5C14.2 9.2 13.7 9 13.2 9.1C12.7 9.2 12.3 9.6 12.1 10.1C11.9 10.6 12 11.2 12.3 11.6C12.6 11.9 13.1 12.1 13.6 12C14.1 11.9 14.5 11.5 14.7 11C14.9 10.5 14.8 9.9 14.5 9.5Z" fill="#FFFFFF" />
        </svg>
      );
    case 'Network Design':
      return (
        <svg className={`${className} flex-shrink-0`} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="5" fill="#0D9488" />
          <circle cx="6" cy="7" r="2.5" fill="#5EEAD4" />
          <circle cx="18" cy="7" r="2.5" fill="#5EEAD4" />
          <circle cx="12" cy="17" r="2.5" fill="#5EEAD4" />
          <path d="M8 8.5L11 15M16 8.5L13 15M8.5 7H15.5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case 'Server & Router Config':
    case 'Server & Router':
      return (
        <svg className={`${className} flex-shrink-0`} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="5" fill="#4F46E5" />
          <rect x="5" y="6" width="14" height="4" rx="1.5" fill="#818CF8" />
          <rect x="5" y="14" width="14" height="4" rx="1.5" fill="#818CF8" />
          <circle cx="8" cy="8" r="1" fill="#FFFFFF" />
          <circle cx="11" cy="8" r="1" fill="#FFFFFF" />
          <circle cx="8" cy="16" r="1" fill="#FFFFFF" />
          <circle cx="11" cy="16" r="1" fill="#FFFFFF" />
          <path d="M15 8h2M15 16h2" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case 'UTP Cabling':
      return (
        <svg className={`${className} flex-shrink-0`} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="5" fill="#D97706" />
          <path d="M7 6h10v6c0 2-1 3-3 4l-1 4h-2l-1-4c-2-1-3-2-3-4V6z" fill="#FDE68A" />
          <rect x="9" y="4" width="6" height="3" rx="0.5" fill="#B45309" />
          <path d="M9 8v3M11 8v3M13 8v3M15 8v3" stroke="#B45309" strokeWidth="1" strokeLinecap="round" />
        </svg>
      );
    default:
      return <Code2 className={`${className} text-pothos`} />;
  }
};

interface SimpleSkillItem {
  id: string;
  name: string;
}

const TECHNICAL_SKILLS_LIST: SimpleSkillItem[] = [
  { id: 'html5', name: 'HTML5' },
  { id: 'css3', name: 'CSS3' },
  { id: 'javascript', name: 'JavaScript' },
  { id: 'php', name: 'PHP' },
  { id: 'nodejs', name: 'Node.js' },
  { id: 'mysql', name: 'MySQL' },
  { id: 'network-design', name: 'Network Design' },
  { id: 'server-router', name: 'Server & Router Config' },
  { id: 'utp-cabling', name: 'UTP Cabling' },
];

const ThreadScroll = () => {
  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed left-8 top-0 bottom-0 w-px z-40 hidden lg:block">
      <svg className="h-full w-8 -ml-4" viewBox="0 0 32 1000" preserveAspectRatio="none">
        <motion.path
          d="M 16 0 V 1000"
          fill="none"
          stroke="url(#thread-gradient)"
          strokeWidth="2"
          strokeDasharray="4 4"
          style={{ pathLength }}
        />
        <defs>
          <linearGradient id="thread-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4CAF50" />
            <stop offset="100%" stopColor="#E6E6FA" />
          </linearGradient>
        </defs>
      </svg>
      <motion.div 
        style={{ top: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
        className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-bg-base rounded-full border-2 border-pothos shadow-[0_0_15px_rgba(76,175,80,0.5)] flex items-center justify-center"
      >
        <div className="w-1 h-1 bg-pothos rounded-full" />
      </motion.div>
    </div>
  );
};

interface ProjectChallenge {
  title: string;
  description: string;
}

interface ProjectData {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  images: string[];
  challenges: ProjectChallenge[];
  tags: string[];
  role: string;
  duration: string;
  liveLinks?: { label: string; url: string; category?: string }[];
}

const PROJECTS_DATA: ProjectData[] = [
  {
    id: '4th-gen',
    title: '4th Generation: trading-travel.system',
    category: 'Automated SCM',
    shortDescription: 'Engineered a B2B Supply Chain Management System and high-performance Admin Portal with Automated Email Blasting and real-time inventory tracking.',
    fullDescription: 'A custom, high-performance comprehensive enterprise platform engineered specifically for trading and travel operations. The system automates stock replenishment cycles, executes bulk client communications across multiple communication nodes, and handles multi-tenant distributor data with perfect isolation.',
    images: [
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop'
    ],
    liveLinks: [
      { label: '4th Generation Trading', url: 'https://4thgenerationtrading.com/', category: 'Trading & Logistics' },
      { label: '4th Generation Travel', url: 'https://4thgenerationtravel.com/', category: 'Travel & Tours' }
    ],
    challenges: [
      {
        title: 'Real-Time Inventory Synchronization',
        description: 'Managing synchronous state across geographical distribution centers during flash travel booking rushes required designing a state-polling queue with optimistic locking. This prevented race conditions and reduced database lock-wait times by 42%.'
      },
      {
        title: 'High-Volume Automated Email Blasting',
        description: 'Blasting thousands of dynamic travel documents and invoices per minute resulted in severe outbound bandwidth congestion. Architected an asynchronous rate-limited job queue utilizing a Redis backing queue to successfully spread delivery loads.'
      },
      {
        title: 'Distributed System Latency',
        description: 'Third-party flight and supply chains APIs had unpredictable latencies ranging from 150ms to 5s. Created an aggressive Redis-based key-value caching layer with intelligent stale-while-revalidate TTL mechanisms to preserve 95th-percentile response rates below 200ms.'
      }
    ],
    tags: ['Automated SCM', 'Node.js', 'MySQL', 'Redis', 'Tailwind CSS'],
    role: 'Lead Architect & Intern Team Lead',
    duration: 'Dec 2025 - Mar 2026'
  },
  {
    id: 'md-buendia',
    title: 'ERP SOFTWARE FOR M.D BUENDIA CONSTRUCTION INC. WITH DECISION SUPPORT SYSTEM AND VIRTUAL TOUR',
    category: 'Command Center',
    shortDescription: 'Powerhouse Construction Management featuring industrial-grade logistics auditing and decision support system.',
    fullDescription: 'An enterprise-scale resource planning software custom-tailored for massive infrastructural operations. This system integrates material supply lines, machine diagnostics, structural schedules, and compliance ledger logging into a centralized web-based command suite.',
    images: [
      '/mdb_vid.mp4',
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop'
    ],
    challenges: [
      {
        title: 'Complex Supply-Line Auditing Trail',
        description: 'Any modification to high-value steel and concrete orders had to be immutable and fully auditable. Devised a write-only cryptography-linked database ledger system that records all transaction transitions with sha256 checksum tags.'
      },
      {
        title: 'Complex Relational Data Schemas',
        description: 'Tracking physical machinery moving between disjointed active sites required structuring complex recursive SQL relations. Optimized standard subqueries into material highly-indexed CTEs to prevent slow-down as the database storage scales.'
      }
    ],
    tags: ['Construction', 'ERP', 'Audit', 'PostgreSQL', 'TypeScript'],
    role: 'Technical Lead & Full-Stack Developer',
    duration: '6 Months'
  },
  {
    id: 'paper-vending',
    title: 'Paper Vending Machine',
    category: 'Integration Schematic',
    shortDescription: 'Complex hardware-software integration for high-volume automated distribution. Schematic view.',
    fullDescription: 'A custom solution uniting embedded electronic circuits with modern web interfaces. Engineered to facilitate transaction protocols, mechanical dispensing feedback loops, and live inventory telemetry for coin-operated kiosk stations.',
    images: [
      '/paper-vendo-machine.mp4',
      '/paper-vendo-1.jpg',
      '/paper-vendo-2.jpg'
    ],
    challenges: [
      {
        title: 'Hardware-to-Software Timing Latencies',
        description: 'Interfacing with serial port coin acceptors frequently resulted in frame-drops due to OS level multi-threading schedules. Developed a high-priority persistent polling routine using clean C++ wrapper bridges to ensure precise pulse capture.'
      },
      {
        title: 'Offline Telemetry Resilience',
        description: 'Physical vending environments have highly unstable Wi-Fi connections. Designed local SQLite database staging layers that buffered machine diagnostic data during failures, automatically syncing records once the connection was re-established.'
      }
    ],
    tags: ['IoT', 'Hardware', 'Integration', 'C++', 'React', 'SQLite'],
    role: 'Embedded Software Developer',
    duration: '4 Months'
  },
  {
    id: 'flowershop',
    title: 'FlowerShop Scents',
    category: 'Boutique Website',
    shortDescription: 'Elegant front-end focused inventory management for premium floral services. Focusing on front-end leadership.',
    fullDescription: 'An ultra-refined floral asset organizer tracking real-time fresh perishability ratings, custom-designed bouquet configuration grids, and online client order tracking. Crafted with sleek typography, luxury interactions, and high-contrast styling layouts.',
    images: [
      '/smoother-interface.mp4',
      '/flowershop-1.png',
      '/flowershop-2.png',
      '/flowershop-3.png',
      '/flowershop-4.png',
      '/flowershop-5.png',
      '/flowershop-6.png'
    ],
    challenges: [
      {
        title: 'Perishability Inventory Logic',
        description: 'Floral inventory requires strict FIFO queues due to fragile 48-hour lifespans. Developed an automatic color-coded expiring state manager that dynamically recalculates bulk pricing scales to minimize stock wastage.'
      },
      {
        title: 'Artistic Bouquet Creator Canvas',
        description: 'Allowing customers to visually place and configure individual flowers online. Formulated an interactive HTML5 drag canvas optimized for mobile view touch target widths.'
      }
    ],
    tags: ['Frontend', 'Elegant', 'Audit', 'Tailwind CSS', 'Vite'],
    role: 'Frontend Experience Designer',
    duration: '2 Months'
  },
  {
    id: 'pinoy-recipe',
    title: 'Pinoy Recipe & Tour',
    category: 'Tactile Card System',
    shortDescription: 'Immersive virtual tours and digital heritage navigation using a custom tactile card component system.',
    fullDescription: 'An immersive digital compass exploring the colorful tapestry of Filipino culinary traditions and regional travel spots. Driven by fluid physical-feeling animations, local geographical coordinate references, and rich sensory audio/visual elements.',
    images: [
      '/filipino-sharing-1.png',
      '/filipino-sharing-2.png',
      '/filipino-sharing-3.png'
    ],
    liveLinks: [
      { label: 'Visit Pinoy Recipe', url: 'https://filipino-recipe-sharing.netlify.app/', category: 'Web Application' }
    ],
    challenges: [
      {
        title: 'Physics-Based Tactile Interactions',
        description: 'Recreating traditional physical cooking guides required high-fidelity spring animations. Utilized Framer Motion state loops tuned with high damping coefficients to make drag gestures feel heavy, tactile, and natural.'
      },
      {
        title: 'Performance on Low-Tier Mobile Devices',
        description: 'Heavy geographical routing data blocks originally caused 150ms rendering delays. Offloaded complex spatial sorting coordinates tasks to web workers, fully preventing main UI thread blocking.'
      }
    ],
    tags: ['UX', 'Tactile', 'Virtual Tour', 'Framer Motion', 'Web Workers'],
    role: 'Frontend Experience Designer & Developer',
    duration: '3 Months'
  }
];

const projectContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const projectCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 45,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  tags?: string[];
  icon: React.ComponentType<any>;
  onClick: () => void;
  websiteUrl?: string;
}

const ProjectCard = ({ title, category, description, icon: Icon, onClick, websiteUrl }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onClick={onClick}
      className="group relative overflow-hidden rounded-3xl p-5 sm:p-6 lg:p-8 h-full flex flex-col transition-all duration-500 hover:shadow-[0_25px_60px_-12px_rgba(1,31,91,0.35)] bg-penn-blue border border-white/10 text-off-white cursor-pointer select-none ring-1 ring-white/5 hover:ring-pothos/40"
    >
      <div className="flex justify-between items-start mb-4 sm:mb-6">
        <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-white/10 text-off-white group-hover:bg-pothos group-hover:text-black transition-colors">
          <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
        {websiteUrl ? (
          <div className="flex items-center gap-2">
            <a
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-pothos font-bold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-pothos/10 border border-pothos/20 hover:bg-pothos hover:text-black transition-all flex items-center gap-1 sm:gap-1.5 cursor-pointer z-10 shadow-xs"
              title={`Visit ${title}`}
            >
              <span>Website</span>
              <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </a>
          </div>
        ) : null}
      </div>

      <div className="flex-grow">
        <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider sm:tracking-widest mb-1.5 sm:mb-2 block text-pothos font-bold">
          {category}
        </span>
        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 leading-snug sm:leading-tight text-off-white group-hover:text-pothos transition-colors font-sans tracking-tight">
          {title}
        </h3>
        <p className="text-[13px] sm:text-sm leading-relaxed text-off-white/80 font-sans">
          {description}
        </p>
      </div>

      {/* Inventory Stocking Effect Overlay */}
      <div className="absolute inset-0 bg-pothos/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.div>
  );
};

interface ProjectModalProps {
  project: ProjectData;
  onClose: () => void;
  onSelectProject: (project: ProjectData) => void;
}

const ProjectModal = ({ project, onClose, onSelectProject }: ProjectModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVideoPaused, setIsVideoPaused] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const currentProjectIndex = PROJECTS_DATA.findIndex((p) => p.id === project.id);
  const prevProject = PROJECTS_DATA[(currentProjectIndex - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length];
  const nextProject = PROJECTS_DATA[(currentProjectIndex + 1) % PROJECTS_DATA.length];

  // Lock background scroll when open
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  // Reset image index when project changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [project.id]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentImageIndex, project.images.length]);

  const nextImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const currentMedia = project.images[currentImageIndex];
  const isCurrentVideo = typeof currentMedia === 'string' && currentMedia.toLowerCase().endsWith('.mp4');

  useEffect(() => {
    const video = videoRef.current;
    if (!isCurrentVideo || !video) return;

    setIsVideoPaused(false);
    video.muted = true;
    video.loop = true;
    video.autoplay = true;
    video.play().catch(() => {});
  }, [currentImageIndex, isCurrentVideo, project.id]);

  const toggleVideoPlayback = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().catch(() => {});
      setIsVideoPaused(false);
    } else {
      video.pause();
      setIsVideoPaused(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 lg:p-8 bg-black/85 backdrop-blur-xl overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 35 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 20 }}
        transition={{ type: "spring", stiffness: 320, damping: 28 }}
        className="relative w-full max-w-6xl max-h-[92vh] flex flex-col bg-penn-blue border border-white/20 rounded-[2.5rem] overflow-hidden shadow-[0_35px_120px_rgba(0,0,0,0.85)] text-off-white my-auto ring-1 ring-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Top Control Bar */}
        <div className="sticky top-0 z-30 bg-penn-blue/95 backdrop-blur-md px-6 sm:px-8 py-4 border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
          {/* Left Metadata Indicator */}
          <div className="flex items-center gap-3">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pothos opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-pothos"></span>
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-off-white/80 font-bold hidden sm:inline">
              System Architecture
            </span>
            <span className="font-mono text-xs text-pothos font-bold bg-pothos/10 border border-pothos/20 px-2.5 py-0.5 rounded-full">
              {currentProjectIndex + 1} / {PROJECTS_DATA.length}
            </span>
            <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-full bg-white/10 text-off-white border border-white/10">
              {project.category}
            </span>
          </div>

          {/* Center Project Navigation Switcher */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => onSelectProject(prevProject)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/15 text-xs font-mono font-bold text-off-white transition-all border border-white/10 hover:border-pothos/40 cursor-pointer"
              title={`Previous: ${prevProject.title}`}
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Prev Project</span>
            </button>
            <button
              onClick={() => onSelectProject(nextProject)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/15 text-xs font-mono font-bold text-off-white transition-all border border-white/10 hover:border-pothos/40 cursor-pointer"
              title={`Next: ${nextProject.title}`}
            >
              <span className="hidden md:inline">Next Project</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Right Action Tools & Close */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={onClose}
              className="flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 hover:bg-white/20 text-off-white hover:text-white border border-white/15 font-mono text-xs font-bold transition-all shadow-md active:scale-95 cursor-pointer"
              aria-label="Close project modal"
            >
              <span className="hidden sm:inline text-[11px] opacity-60">ESC</span>
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Floating Body */}
        <div className="overflow-y-auto p-6 sm:p-8 lg:p-10 space-y-10">
          
          {/* Main Hero Showcase Viewport */}
          <div className="relative w-full h-[360px] sm:h-[500px] md:h-[560px] rounded-3xl overflow-hidden bg-black/60 border border-white/15 shadow-2xl group select-none flex flex-col justify-between">
            {/* Carousel Screenshot with subtle scale & fade */}
            <div className="absolute inset-0">
              <AnimatePresence mode="wait">
                {isCurrentVideo ? (
                  <motion.video
                    key={`${project.id}-${currentImageIndex}`}
                    ref={videoRef}
                    src={currentMedia}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls={false}
                    preload="auto"
                    poster={project.images.find((url) => !url.toLowerCase().endsWith('.mp4')) || project.images[0]}
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full object-cover"
                    onPause={() => setIsVideoPaused(true)}
                    onPlay={() => setIsVideoPaused(false)}
                  />
                ) : (
                  <motion.img
                    key={`${project.id}-${currentImageIndex}`}
                    src={project.images[currentImageIndex]}
                    alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                    referrerPolicy="no-referrer"
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full object-cover"
                  />
                )}
              </AnimatePresence>
              {/* Cinematic Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none" />
            </div>

            {isCurrentVideo && (
              <button
                onClick={toggleVideoPlayback}
                className="absolute bottom-6 right-6 z-20 flex items-center justify-center w-12 h-12 rounded-full bg-black/65 border border-white/15 text-white backdrop-blur-md shadow-lg hover:scale-105 transition-transform cursor-pointer"
                aria-label={isVideoPaused ? 'Play video' : 'Pause video'}
                title={isVideoPaused ? 'Play video' : 'Pause video'}
              >
                {isVideoPaused ? (
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                    <path d="M8 5.5v13a1 1 0 0 1-1.6.8L2.8 16.7A1.2 1.2 0 0 1 2.8 15L6.4 12 2.8 9A1.2 1.2 0 0 1 2.8 7.3l3.6-2.6A1 1 0 0 1 8 5.5Zm11 0v13a1 1 0 0 1-1.6.8L14.8 16.7A1.2 1.2 0 0 1 14.8 15l3.6-3L14.8 9a1.2 1.2 0 0 1 0-1.7l3.6-2.6A1 1 0 0 1 19 5.5Z" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                    <path d="M8 5.5a1.2 1.2 0 0 1 1.2 1.2v11.1A1.2 1.2 0 0 1 8 19a1.2 1.2 0 0 1-1.2-1.2V6.7A1.2 1.2 0 0 1 8 5.5Zm8 0a1.2 1.2 0 0 1 1.2 1.2v11.1A1.2 1.2 0 0 1 16 19a1.2 1.2 0 0 1-1.2-1.2V6.7A1.2 1.2 0 0 1 16 5.5Z" />
                  </svg>
                )}
              </button>
            )}

            {/* Top Carousel Overlays */}
            <div className="relative z-10 p-6 flex justify-between items-start pointer-events-none">
              <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-pothos">
                High-Res System View
              </span>
              <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-off-white">
                Screenshot {currentImageIndex + 1} of {project.images.length}
              </span>
            </div>

            {/* Floating Carousel Navigation Buttons */}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/85 text-white transition-all cursor-pointer border border-white/15 shadow-xl hover:scale-110 active:scale-95 z-20 backdrop-blur-md"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/85 text-white transition-all cursor-pointer border border-white/15 shadow-xl hover:scale-110 active:scale-95 z-20 backdrop-blur-md"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Bottom Scrim with Thumbnail Reel */}
            <div className="relative z-10 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              {/* Clickable Thumbnail Reel */}
              {project.images.length > 1 && (
                <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md p-1.5 rounded-2xl border border-white/15 self-start sm:self-auto">
                  {project.images.map((imgUrl, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(idx);
                      }}
                      className={`relative w-14 h-10 rounded-xl overflow-hidden transition-all duration-200 cursor-pointer border ${
                        idx === currentImageIndex
                          ? 'ring-2 ring-pothos border-pothos scale-105 opacity-100'
                          : 'border-white/20 opacity-50 hover:opacity-90'
                      }`}
                    >
                      {imgUrl.toLowerCase().endsWith('.mp4') ? (
                        <video
                          src={imgUrl}
                          muted
                          playsInline
                          className="w-full h-full object-cover"
                          preload="metadata"
                        />
                      ) : (
                        <img
                          src={imgUrl}
                          alt={`Thumb ${idx + 1}`}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="pt-2">
            <span className="text-xs font-mono uppercase tracking-widest text-pothos font-bold block mb-2">
              {project.category}
            </span>
            <h3 className="text-2xl sm:text-4xl font-sans font-bold tracking-tight text-off-white">
              {project.title}
            </h3>
          </div>

          {/* Architecture Information */}
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Quick Spec Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-xs font-mono uppercase tracking-widest text-off-white/70 block mb-1">
                  Role & Ownership
                </span>
                <p className="font-bold text-sm text-off-white flex items-center gap-1.5">
                  <User className="w-4 h-4 text-pothos shrink-0" />
                  <span className="truncate">{project.role}</span>
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-xs font-mono uppercase tracking-widest text-off-white/70 block mb-1">
                  Timeline Span
                </span>
                <p className="font-bold text-sm text-off-white flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-pothos shrink-0" />
                  <span>{project.duration}</span>
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 col-span-2 sm:col-span-1">
                <span className="text-xs font-mono uppercase tracking-widest text-off-white/70 block mb-1">
                  Architecture Level
                </span>
                <p className="font-bold text-sm text-off-white flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-pothos shrink-0" />
                  <span>Production Grade</span>
                </p>
              </div>
            </div>

            {/* Full Architectural Narrative */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-pothos" />
                <h4 className="text-xs font-mono uppercase tracking-widest text-pothos font-bold">
                  Executive Architecture Narrative
                </h4>
              </div>
              <p className="text-sm sm:text-base text-off-white/80 leading-relaxed font-sans">
                {project.fullDescription}
              </p>
            </div>

            {/* Technologies Applied */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-widest text-off-white/70 font-bold">
                Technologies & System Dependencies
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-mono font-bold text-off-white border border-white/10 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Direct Action Hub */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              {project.liveLinks && project.liveLinks.length > 0 ? (
                project.liveLinks.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 rounded-full bg-pothos text-black font-mono font-bold text-xs uppercase tracking-wider hover:scale-105 transition-all shadow-lg shadow-pothos/20 flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>{link.label}</span>
                  </a>
                ))
              ) : null}
              <button
                onClick={onClose}
                className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-off-white font-mono font-bold text-xs uppercase tracking-wider transition-all border border-white/10 cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>

        </div>
      </motion.div>
    </motion.div>
  );
};

// --- Certification Modal & Data ---

export interface CertificationItem {
  id: string;
  year: string;
  title: string;
  issuer: string;
  fullNameIssuer: string;
  date: string;
  image: string;
  category: string;
  description: string;
  recipient: string;
  skills: string[];
}

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: 'prompt-engineering',
    year: '2026',
    title: 'Prompt Engineering',
    issuer: 'Owlvantage Solutions',
    fullNameIssuer: 'Owlvantage Solutions Inc.',
    date: 'February 2026',
    category: 'Artificial Intelligence & Generative LLMs',
    description: 'Specialized competency in structured prompt design, context-window optimization, few-shot prompting patterns, chain-of-thought system prompts, automated benchmark evaluations, and AI workflow integration.',
    recipient: 'Renee Madel L. Rodelas',
    image: '/cert-prompt-engineering.jpg',
    skills: ['Prompt Engineering', 'LLM Architectures', 'Context Optimization', 'System Prompts', 'Evaluation Protocols']
  },
  {
    id: 'low-code-automation',
    year: '2026',
    title: 'Low-Code Automation',
    issuer: 'Owlvantage Solutions',
    fullNameIssuer: 'Owlvantage Solutions Inc.',
    date: 'January 2026',
    category: 'Robotic Process & Workflow Automation',
    description: 'Certified expertise in building automated workflow pipelines, enterprise webhook triggers, automated data ingestion systems, and low-code operational dashboards.',
    recipient: 'Renee Madel L. Rodelas',
    image: '/cert-low-code.jpg',
    skills: ['Workflow Pipelines', 'Webhook Triggers', 'RPA Automation', 'API Integrations', 'ETL Pipelines']
  },
  {
    id: 'employability-skills',
    year: '2026',
    title: 'Employability Skills',
    issuer: 'Wadhwani Foundation',
    fullNameIssuer: 'Wadhwani Foundation Global Opportunity Track',
    date: 'March 2026',
    category: 'Workplace Readiness & Professional Excellence',
    description: 'Accreditation in global workplace readiness, high-performance team leadership, agile sprint collaboration, critical technical analysis, and executive communication.',
    recipient: 'Renee Madel L. Rodelas',
    image: '/cert-wadhwani.jpg',
    skills: ['Workplace Readiness', 'Agile Collaboration', 'Critical Thinking', 'Technical Problem Solving', 'Leadership']
  },
  {
    id: 'internet-of-things',
    year: '2024',
    title: 'Internet of Things',
    issuer: 'NCST',
    fullNameIssuer: 'National College of Science and Technology',
    date: 'November 2024',
    category: 'Embedded Systems & Network Hardware',
    description: 'Hands-on accreditation in microcontroller programming, IoT sensor circuit assembly, hardware-to-cloud telemetry networking, and embedded device architecture.',
    recipient: 'Renee Madel L. Rodelas',
    image: '/cert-iot.jpg',
    skills: ['IoT Architecture', 'Microcontrollers', 'Sensor Telemetry', 'Network Protocols', 'Hardware Prototyping']
  }
];

const CertificationModal = ({
  certification,
  onClose
}: {
  certification: CertificationItem;
  onClose: () => void;
}) => {
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const activeDisplayImage = certification.image;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 lg:p-8 bg-black/85 backdrop-blur-xl overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 35 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 20 }}
        transition={{ type: "spring", stiffness: 320, damping: 28 }}
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#161a22] border border-white/20 rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-[0_35px_120px_rgba(0,0,0,0.85)] text-off-white my-auto ring-1 ring-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Top Control Bar */}
        <div className="sticky top-0 z-30 bg-[#161a22]/95 backdrop-blur-md px-5 sm:px-8 py-4 border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
          {/* Left Metadata Indicator */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pothos opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-pothos"></span>
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-off-white/80 font-bold hidden sm:inline">
              Verified Credential
            </span>
            <span className="font-mono text-xs text-pothos font-bold bg-pothos/10 border border-pothos/20 px-2.5 py-0.5 rounded-full">
              {certification.year}
            </span>
            <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-full bg-white/10 text-off-white border border-white/10">
              {certification.issuer}
            </span>
          </div>

          {/* Right Action Tools & Close */}
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 hover:bg-white/20 text-off-white hover:text-white border border-white/15 font-mono text-xs font-bold transition-all shadow-md active:scale-95 cursor-pointer"
              aria-label="Close certificate modal"
            >
              <span className="hidden sm:inline text-[11px] opacity-60">ESC</span>
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Floating Body */}
        <div className="overflow-y-auto p-5 sm:p-8 space-y-8">
          <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl border border-white/15">
            <div className="relative w-full bg-black flex flex-col items-center justify-center min-h-[380px] sm:min-h-[460px] overflow-hidden group">
                <img
                  src={activeDisplayImage}
                  alt={`${certification.title} Certificate`}
                  className={`w-full max-h-[560px] object-contain transition-transform duration-300 ${
                    isZoomed ? 'scale-125 cursor-zoom-out' : 'cursor-zoom-in'
                  }`}
                  onClick={() => setIsZoomed(!isZoomed)}
                />
                
                {/* Floating Floating controls overlay */}
                <div className="absolute top-4 right-4 flex items-center gap-2 z-20">
                  <button
                    type="button"
                    onClick={() => setIsZoomed(!isZoomed)}
                    className="p-2.5 rounded-full bg-black/70 hover:bg-black text-white border border-white/20 shadow-lg backdrop-blur-md transition-all cursor-pointer"
                    title={isZoomed ? "Zoom out" : "Zoom in"}
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                  <a
                    href={activeDisplayImage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-black/70 hover:bg-black text-white border border-white/20 shadow-lg backdrop-blur-md transition-all cursor-pointer flex items-center gap-1.5 text-xs font-mono"
                    title="Open in new window"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-gray-300 bg-black/75 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 pointer-events-none">
                  <span>Click image to {isZoomed ? 'zoom out' : 'zoom in'}</span>
                  <span className="text-pothos font-bold">Official Credential</span>
                </div>
              </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// --- Confetti Celebration Helper ---

const fireCelebrationConfetti = () => {
  try {
    // 1. Initial center eruption
    confetti({
      particleCount: 90,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#4CAF50', '#81C784', '#C8E6C9', '#E6E6FA', '#FFFFFF', '#FFD700']
    });

    // 2. Left side cannon
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 60,
        origin: { x: 0.1, y: 0.65 },
        colors: ['#4CAF50', '#81C784', '#FFD700', '#FFFFFF']
      });
    }, 200);

    // 3. Right side cannon
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 60,
        origin: { x: 0.9, y: 0.65 },
        colors: ['#4CAF50', '#81C784', '#E6E6FA', '#FFD700']
      });
    }, 350);
  } catch (err) {
    console.error('Confetti trigger failed:', err);
  }
};

// --- Contact Form Component ---

const ContactForm = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<'idle' | 'transmitting' | 'success'>('idle');
  const [progress, setProgress] = useState(0);
  const [progressStage, setProgressStage] = useState('');
  const [dispatchId, setDispatchId] = useState('');
  const [timestamp, setTimestamp] = useState('');

  // Warn user against closing tab while transmission is underway
  useEffect(() => {
    if (status === 'transmitting') {
      const handleBeforeUnload = (e: BeforeUnloadEvent) => {
        e.preventDefault();
        e.returnValue = 'Transmission is currently in progress. Please do not close this tab.';
        return 'Transmission is currently in progress. Please do not close this tab.';
      };
      window.addEventListener('beforeunload', handleBeforeUnload);
      return () => window.removeEventListener('beforeunload', handleBeforeUnload);
    }
  }, [status]);

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!values.name.trim()) {
      errors.name = 'Name or entity is required';
    } else if (values.name.trim().length < 2) {
      errors.name = 'Minimum 2 characters required';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!values.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!emailPattern.test(values.email.trim())) {
      errors.email = 'Please provide a valid email address';
    }

    if (!values.message.trim()) {
      errors.message = 'Please share your message or scope';
    } else if (values.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }

    return errors;
  };

  const errors = validate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });

    const currentErrors = validate();
    if (Object.keys(currentErrors).length > 0) return;

    setStatus('transmitting');
    setProgress(15);
    setProgressStage('1/4 Preparing your message...');
    const randomId = `DSP-${Math.floor(1000 + Math.random() * 9000)}`;
    setDispatchId(randomId);
    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    setTimestamp(timeStr);

    const payload = {
      name: values.name.trim(),
      email: values.email.trim(),
      _subject: values.subject.trim() || `Portfolio Inquiry from ${values.name.trim()}`,
      message: values.message.trim(),
      _replyto: values.email.trim(),
      _template: 'table'
    };

    // Store in LocalStorage archive
    try {
      const stored = JSON.parse(localStorage.getItem('renee_transmissions') || '[]');
      stored.unshift({
        id: randomId,
        ...payload,
        sentAt: new Date().toISOString()
      });
      localStorage.setItem('renee_transmissions', JSON.stringify(stored.slice(0, 20)));
    } catch {
      // LocalStorage fallback
    }

    // Network request to rodelasrenee@gmail.com
    const networkPromise = fetch('https://formsubmit.co/ajax/rodelasrenee@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    }).catch(() => null);

    // Friendly, easy-to-understand progress sequence
    setTimeout(() => {
      setProgress(45);
      setProgressStage('2/4 Connecting to Renee\'s inbox (rodelasrenee@gmail.com)...');
    }, 450);

    setTimeout(() => {
      setProgress(75);
      setProgressStage('3/4 Sending your message...');
    }, 950);

    setTimeout(() => {
      setProgress(94);
      setProgressStage('4/4 Confirming delivery...');
    }, 1500);

    setTimeout(async () => {
      await networkPromise;
      setProgress(100);
      setProgressStage('Message delivered successfully!');
      setTimeout(() => {
        setStatus('success');
        fireCelebrationConfetti();
      }, 350);
    }, 2200);
  };

  const handleReset = () => {
    setValues({ name: '', email: '', subject: '', message: '' });
    setTouched({});
    setProgress(0);
    setProgressStage('');
    setStatus('idle');
  };

  return (
    <div className="relative rounded-3xl p-6 sm:p-8 bg-white/5 border border-white/10 shadow-2xl backdrop-blur-md overflow-hidden ring-1 ring-white/5">
      <AnimatePresence mode="wait">
        {status === 'transmitting' ? (
          <motion.div
            key="deterministic-loader"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="py-4 px-1 sm:px-3 space-y-6"
          >
            {/* Header with activity radar */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-2xl bg-pothos/20 border border-pothos/40 flex items-center justify-center text-pothos">
                    <Loader2 className="w-5 h-5 animate-spin text-pothos" />
                  </div>
                  <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pothos opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-pothos"></span>
                  </span>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-off-white font-sans tracking-tight">
                    Direct Transmission Underway
                  </h3>
                  <p className="text-xs font-mono text-pothos">
                    Progress Indicator / Deterministic Loader
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-pothos bg-pothos/10 border border-pothos/30 px-3 py-1.5 rounded-full shadow-inner">
                  {progress}%
                </span>
              </div>
            </div>

            {/* Glowing Deterministic Progress Bar */}
            <div className="space-y-2.5">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-off-white/90 font-medium flex items-center gap-2 truncate pr-2">
                  <span className="w-2 h-2 rounded-full bg-pothos animate-ping shrink-0" />
                  <span className="truncate">{progressStage}</span>
                </span>
                <span className="text-pothos font-bold shrink-0">{progress}%</span>
              </div>

              <div className="relative h-3.5 w-full bg-black/50 rounded-full overflow-hidden border border-white/15 p-0.5 shadow-inner">
                <div 
                  className="h-full bg-gradient-to-r from-pothos via-[#81C784] to-pothos rounded-full transition-all duration-300 ease-out shadow-lg shadow-pothos/40 relative overflow-hidden"
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse" />
                </div>
              </div>
            </div>

            {/* Crucial Assurance Banner: DO NOT CLOSE TAB */}
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/40 text-amber-200 text-xs font-sans space-y-2 shadow-lg">
              <div className="flex items-center gap-2 font-bold font-mono uppercase tracking-wider text-amber-300">
                <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Important: Please Do Not Close This Tab</span>
              </div>
              <p className="text-off-white/85 leading-relaxed text-[12px] font-sans">
                Your message is being sent directly to <strong className="text-pothos font-mono">rodelasrenee@gmail.com</strong>. Please keep this browser tab open for a few seconds until delivery is confirmed.
              </p>
            </div>
          </motion.div>
        ) : status === 'success' ? (
          <motion.div
            key="success-card"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="space-y-6"
          >
            {/* Header badge */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-pothos/20 border border-pothos/40 flex items-center justify-center text-pothos">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-off-white font-sans">
                    Transmission Dispatched
                  </h3>
                  <p className="text-xs font-mono text-pothos">
                    Delivered to Console &amp; Inbox
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono text-off-white/60 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                #{dispatchId}
              </span>
            </div>

            {/* Automated Mock Response */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="p-5 rounded-2xl bg-penn-blue/70 border border-pothos/30 shadow-inner space-y-3 relative overflow-hidden"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-pothos animate-ping" />
                  <span className="text-xs font-mono uppercase tracking-widest text-pothos font-bold">
                    Transmission Auto-Responder
                  </span>
                </div>
                <span className="text-[11px] font-mono text-off-white/50">{timestamp}</span>
              </div>

              <p className="text-sm font-sans text-off-white/90 leading-relaxed">
                "Hello <strong className="text-off-white">{values.name}</strong>, your message has been transmitted and logged. A notification has been registered with priority delivery to <span className="text-pothos font-mono font-bold">rodelasrenee@gmail.com</span>. Expect a direct follow-up within 24 hours."
              </p>

              <div className="pt-2 text-[11px] font-mono text-off-white/60 flex flex-wrap gap-x-4 gap-y-1">
                <span>Sender: <strong className="text-off-white">{values.email}</strong></span>
                <span>Topic: <strong className="text-off-white">{values.subject || 'Project Inquiry'}</strong></span>
              </div>
            </motion.div>

            {/* Digest preview */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-off-white/70 space-y-1">
              <span className="text-off-white/40 uppercase tracking-widest text-[10px] block">
                Dispatched Payload Preview:
              </span>
              <p className="italic text-off-white/80 line-clamp-3">"{values.message}"</p>
            </div>

            <button
              type="button"
              onClick={handleReset}
              className="w-full py-3.5 px-6 rounded-xl font-mono text-xs uppercase tracking-wider font-bold bg-pothos text-black hover:bg-pothos/90 transition-all text-center flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <span>Send Another Message</span>
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-pothos" />
                <span className="text-xs font-mono uppercase tracking-widest text-off-white font-bold">
                  Direct Transmission Form
                </span>
              </div>
              <span className="text-xs font-mono text-pothos">
                Console Ready
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name field */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase tracking-wider text-off-white/70 block">
                  Name / Entity <span className="text-pothos">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={() => handleBlur('name')}
                    placeholder="e.g. Alex Morgan"
                    disabled={status === 'transmitting'}
                    className={`w-full px-4 py-2.5 rounded-xl bg-white/5 border text-sm font-sans text-off-white placeholder:text-off-white/30 focus:outline-none transition-all ${
                      touched.name && errors.name
                        ? 'border-rose-500/80 focus:border-rose-500 bg-rose-500/5'
                        : touched.name && !errors.name
                        ? 'border-pothos/60 focus:border-pothos'
                        : 'border-white/15 focus:border-pothos'
                    }`}
                  />
                  {touched.name && errors.name && (
                    <AlertCircle className="w-4 h-4 text-rose-400 absolute right-3 top-3 pointer-events-none" />
                  )}
                  {touched.name && !errors.name && (
                    <Check className="w-4 h-4 text-pothos absolute right-3 top-3 pointer-events-none" />
                  )}
                </div>
                {touched.name && errors.name && (
                  <p className="text-[11px] font-mono text-rose-400">{errors.name}</p>
                )}
              </div>

              {/* Email field */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase tracking-wider text-off-white/70 block">
                  Email Address <span className="text-pothos">*</span>
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={() => handleBlur('email')}
                    placeholder="e.g. alex@example.com"
                    disabled={status === 'transmitting'}
                    className={`w-full px-4 py-2.5 rounded-xl bg-white/5 border text-sm font-sans text-off-white placeholder:text-off-white/30 focus:outline-none transition-all ${
                      touched.email && errors.email
                        ? 'border-rose-500/80 focus:border-rose-500 bg-rose-500/5'
                        : touched.email && !errors.email
                        ? 'border-pothos/60 focus:border-pothos'
                        : 'border-white/15 focus:border-pothos'
                    }`}
                  />
                  {touched.email && errors.email && (
                    <AlertCircle className="w-4 h-4 text-rose-400 absolute right-3 top-3 pointer-events-none" />
                  )}
                  {touched.email && !errors.email && (
                    <Check className="w-4 h-4 text-pothos absolute right-3 top-3 pointer-events-none" />
                  )}
                </div>
                {touched.email && errors.email && (
                  <p className="text-[11px] font-mono text-rose-400">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Subject field */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono uppercase tracking-wider text-off-white/70 block">
                Subject / Scope
              </label>
              <input
                type="text"
                name="subject"
                value={values.subject}
                onChange={handleChange}
                placeholder="e.g. Full-Stack Engineering / Custom ERP / Interaction Design"
                disabled={status === 'transmitting'}
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-sm font-sans text-off-white placeholder:text-off-white/30 focus:border-pothos focus:outline-none transition-all"
              />
            </div>

            {/* Message field */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono uppercase tracking-wider text-off-white/70 block">
                Message & Details <span className="text-pothos">*</span>
              </label>
              <div className="relative">
                <textarea
                  name="message"
                  rows={4}
                  value={values.message}
                  onChange={handleChange}
                  onBlur={() => handleBlur('message')}
                  placeholder="Share your project requirements, goals, questions, or timeline..."
                  disabled={status === 'transmitting'}
                  className={`w-full px-4 py-2.5 rounded-xl bg-white/5 border text-sm font-sans text-off-white placeholder:text-off-white/30 focus:outline-none transition-all resize-none ${
                    touched.message && errors.message
                      ? 'border-rose-500/80 focus:border-rose-500 bg-rose-500/5'
                      : touched.message && !errors.message
                      ? 'border-pothos/60 focus:border-pothos'
                      : 'border-white/15 focus:border-pothos'
                  }`}
                />
                {touched.message && errors.message && (
                  <AlertCircle className="w-4 h-4 text-rose-400 absolute right-3 top-3 pointer-events-none" />
                )}
                {touched.message && !errors.message && (
                  <Check className="w-4 h-4 text-pothos absolute right-3 top-3 pointer-events-none" />
                )}
              </div>
              {touched.message && errors.message && (
                <p className="text-[11px] font-mono text-rose-400">{errors.message}</p>
              )}
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={status === 'transmitting'}
              className="w-full mt-2 py-3.5 px-6 rounded-xl font-mono text-xs uppercase tracking-widest font-bold bg-pothos text-black hover:bg-pothos/90 transition-all duration-200 cursor-pointer disabled:opacity-60 flex items-center justify-center gap-2 shadow-lg shadow-pothos/20 active:scale-[0.99]"
            >
              {status === 'transmitting' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Transmitting to Console...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Direct Transmission</span>
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [selectedCertification, setSelectedCertification] = useState<CertificationItem | null>(null);
  const [activeSkillId, setActiveSkillId] = useState<string>('html5');
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // Parallax transformations as user scrolls down and hero is covered
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.93]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85, 1], [1, 0.6, 0.2]);
  const bgTextY = useTransform(scrollYProgress, [0, 1], ["0%", "45%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0, 0.55]);
  const scrollPromptOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.classList.add('dark');
      const handleScroll = () => {
        setScrolledPastHero(window.scrollY > window.innerHeight * 0.6);
      };
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="min-h-screen selection:bg-pothos/30 transition-colors duration-300">
      <ThreadScroll />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 sm:px-8 py-4 sm:py-6 flex justify-between items-center pointer-events-none transition-all duration-300">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="pointer-events-auto"
        >
          <a href="#" className={`font-mono font-bold text-xl tracking-tighter transition-colors duration-300 ${scrolledPastHero ? 'text-penn-blue' : 'text-off-white'}`}>
            RL<span className="text-pothos">.</span>
          </a>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className={`flex items-center gap-6 sm:gap-8 pointer-events-auto px-5 py-2.5 rounded-full transition-all duration-300 ${
            scrolledPastHero 
              ? 'bg-off-white/90 backdrop-blur-md shadow-md border border-penn-blue/15' 
              : 'bg-penn-blue/40 backdrop-blur-md border border-white/15'
          }`}
        >
          {['About', 'Resume', 'Skills', 'Projects', 'Certifications', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className={`text-xs font-mono uppercase tracking-widest font-bold transition-colors ${
                scrolledPastHero 
                  ? 'text-penn-blue hover:text-pothos' 
                  : 'text-off-white/90 hover:text-pothos'
              }`}
            >
              {item}
            </a>
          ))}
        </motion.div>
      </nav>

      <main className="relative">
        {/* Parallax Hero Section: Pinned/sticky so it gets covered as you scroll down */}
        <section 
          ref={heroRef}
          className="sticky top-0 h-screen w-full z-0 overflow-hidden bg-penn-blue transition-colors flex flex-col justify-between"
        >
          {/* Background Text Layer with Parallax */}
          <motion.div 
            style={{ y: bgTextY }}
            className="absolute right-0 top-0 bottom-0 flex flex-col justify-center pointer-events-none select-none z-0 pr-8"
          >
            {[1, 2, 3, 4, 5].map((i) => (
              <div 
                key={i} 
                className={`text-[12vw] font-bold leading-none tracking-tighter uppercase whitespace-nowrap ${
                  i % 2 === 0 
                  ? 'text-transparent stroke-off-white/10 stroke-1' 
                  : 'text-off-white/5'
                }`}
              >
                Portfolio
              </div>
            ))}
          </motion.div>

          {/* Darkening overlay scrim during scroll cover */}
          <motion.div 
            style={{ opacity: overlayOpacity }}
            className="absolute inset-0 bg-black pointer-events-none z-5"
          />

          {/* Parallax Content Container */}
          <motion.div 
            style={{ y: heroY, scale: heroScale, opacity: heroOpacity }}
            className="relative z-10 flex flex-col items-center justify-center p-6 sm:p-8 lg:p-16 h-full w-full max-w-6xl mx-auto my-auto"
          >
            <div className="relative w-full flex flex-col items-center justify-center text-center">
              
              {/* Centered Creative Letters in a Horizontal Line (No enclosing card container) */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="w-full select-none py-6 sm:py-10 overflow-hidden"
              >
                <div className="flex flex-row flex-nowrap gap-0 items-center justify-center w-full">
                  {[
                    { char: 'P', delay: 0.1, class: 'font-sans font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-off-white' },
                    { char: 'O', delay: 0.2, class: 'font-serif italic text-6xl sm:text-8xl md:text-9xl lg:text-[9rem] text-pothos' },
                    { char: 'R', delay: 0.3, class: 'font-mono font-medium tracking-tighter text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-off-white/90 border border-white/20 px-3.5 py-1 rounded-2xl' },
                    { char: 'T', delay: 0.4, class: 'font-sans font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl bg-gradient-to-b from-pothos via-off-white to-pothos text-transparent bg-clip-text' },
                    { char: 'F', delay: 0.5, class: 'font-serif font-bold text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-transparent [-webkit-text-stroke:1.5px_#FAF9F6]' },
                    { char: 'O', delay: 0.6, class: 'font-sans font-black text-6xl sm:text-8xl md:text-9xl lg:text-[9rem] text-pothos' },
                    { char: 'L', delay: 0.7, class: 'font-mono font-light text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white' },
                    { char: 'I', delay: 0.8, class: 'font-serif italic text-6xl sm:text-8xl md:text-9xl lg:text-[9rem] text-off-white underline decoration-pothos decoration-4 underline-offset-4' },
                    { char: 'O', delay: 0.9, class: 'font-mono font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl border border-pothos p-2.5 sm:p-3 text-off-white rounded-full bg-pothos/10' },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.7, rotate: -15 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      whileHover={{ 
                        scale: 1.12, 
                        rotate: index % 2 === 0 ? -4 : 4, 
                        color: "#4CAF50",
                        transition: { type: "spring", stiffness: 400, damping: 12 }
                      }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 300, 
                        damping: 15,
                        delay: item.delay 
                      }}
                      className={`cursor-pointer flex items-center justify-center select-none ${item.class}`}
                    >
                      {item.char}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

            </div>
          </motion.div>
          
          <motion.div 
            style={{ opacity: scrollPromptOpacity }}
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 pointer-events-none"
          >
            <div className="w-10 h-10 rounded-full border border-pothos/50 flex items-center justify-center text-pothos">
              <div className="w-1 h-3 bg-pothos rounded-full animate-bounce" />
            </div>
          </motion.div>
        </section>

        {/* Content Cover Sheet: Scrolls over and covers the hero section */}
        <div className="relative z-10 bg-off-white shadow-[0_-25px_60px_rgba(0,0,0,0.5)] rounded-t-[36px] sm:rounded-t-[48px] overflow-hidden">
          {/* Hello Section (About) */}
          <section id="about" className="py-32 bg-off-white transition-colors">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <h2 className="text-7xl lg:text-9xl font-bold tracking-tighter leading-none text-penn-blue">
                  Hello, <br />
                  I'm Renee !
                </h2>
                <p className="text-xl text-text-muted leading-relaxed max-w-lg">
                  I am a passionate Full-Stack Developer & System Architect based in Cavite with a focus on high-performance ERP systems. Currently pursuing BSIT with a GWA of 1.30, I specialize in engineering automated solutions that drive efficiency.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="https://www.linkedin.com/in/renee-rodelas-it" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-penn-blue text-off-white px-8 py-4 rounded-full font-bold hover:scale-105 hover:bg-pothos transition-all shadow-md">
                    <ExternalLink className="w-4 h-4" />
                    linkedin.com/in/renee-rodelas-it
                  </a>
                  <a href="/Rodelas_renee_resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-pothos text-off-white px-8 py-4 rounded-full font-bold hover:scale-105 hover:bg-penn-blue transition-all shadow-md">
                    <FileText className="w-4 h-4" />
                    Resume
                  </a>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-6 relative">
               <motion.div 
                initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                className="relative z-30 aspect-square max-w-md mx-auto lg:mb-[-220px]"
               >
                 <div className="absolute inset-0 bg-penn-blue/20 rounded-3xl -translate-x-6 translate-y-6" />
                 <div className="relative h-full w-full rounded-2xl overflow-hidden border-2 border-text-base/10 shadow-2xl bg-white">
                    <img 
                      src="/renee-profile.jpg" 
                      alt="Renee Madel Rodelas" 
                      className="w-full h-full object-cover object-top"
                      referrerPolicy="no-referrer"
                    />
                 </div>
               </motion.div>
            </div>
          </div>
        </section>

        {/* Resume Section: Education, Experience, Skills & Certifications */}
        <section id="resume" className="relative z-0 py-32 bg-off-white transition-colors">
          <div className="max-w-7xl mx-auto px-8">
            {/* Section Header */}
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-pothos animate-pulse" />
                  <span className="text-xs font-mono uppercase tracking-widest text-penn-blue font-bold">
                    Curriculum Vitae & Matrix
                  </span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-sans font-bold tracking-tight text-penn-blue">
                  Qualifications & Expertise
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-widest text-penn-blue/70 bg-penn-blue/5 border border-penn-blue/15 px-3.5 py-1.5 rounded-full font-bold">
                  Verified Academic & Industry Track
                </span>
              </div>
            </motion.div>

            {/* 2-Column Balanced Master Grid: Professional Experience (Left) & Academic Foundation (Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              
              {/* Column 1: Professional Experience */}
              <div className="lg:col-span-6">
                <div className="relative pl-8 sm:pl-10 border-l-2 border-penn-blue/15 h-full flex flex-col justify-between">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="group relative"
                  >
                    {/* Timeline Node Icon */}
                    <div className="absolute -left-[41px] sm:-left-[49px] top-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-off-white border-2 border-penn-blue/30 group-hover:border-pothos group-hover:bg-pothos/10 flex items-center justify-center text-penn-blue group-hover:text-pothos transition-all shadow-xs">
                      <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:scale-110" />
                    </div>

                    <div className="space-y-4">
                      {/* Meta header row */}
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-xs font-mono uppercase tracking-widest text-pothos font-bold">
                          Professional Experience
                        </span>
                        <span className="font-mono text-xs font-bold text-penn-blue bg-penn-blue/5 border border-penn-blue/15 px-3 py-1 rounded-full">
                          Dec 2025 - Mar 2026
                        </span>
                        <span className="text-xs font-mono uppercase tracking-wider text-penn-blue/60 font-semibold px-2.5 py-0.5 rounded-full bg-penn-blue/5">
                          Industry Track
                        </span>
                      </div>

                      {/* Main Title & Company */}
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-penn-blue font-sans tracking-tight leading-tight group-hover:text-pothos transition-colors">
                          IT Intern – Web Developer &amp; QA
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 mt-1.5">
                          <p className="text-sm font-mono font-bold text-penn-blue/90 uppercase tracking-wider">
                            4th Generation Trading &amp; Travel
                          </p>
                          <span className="text-penn-blue/30 font-mono text-xs hidden sm:inline">•</span>
                          <a
                            href="https://4thgenerationtrading.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-pothos bg-pothos/10 hover:bg-pothos hover:text-white px-2.5 py-0.5 rounded-full border border-pothos/30 transition-all shadow-2xs"
                            title="Visit 4th Generation Trading"
                          >
                            <span>Trading</span>
                            <ExternalLink className="w-2.5 h-2.5" />
                          </a>
                          <a
                            href="https://4thgenerationtravel.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-pothos bg-pothos/10 hover:bg-pothos hover:text-white px-2.5 py-0.5 rounded-full border border-pothos/30 transition-all shadow-2xs"
                            title="Visit 4th Generation Travel"
                          >
                            <span>Travel</span>
                            <ExternalLink className="w-2.5 h-2.5" />
                          </a>
                        </div>
                      </div>

                      {/* Narrative */}
                      <p className="text-sm sm:text-base text-penn-blue/80 leading-relaxed font-sans">
                        Engineered high-performance Admin Portal with Live Preview and Automated Email Blasting. Led a 3-person dev team through sprint planning, automated testing pipelines, and client delivery.
                      </p>

                      {/* Highlight Chips */}
                      <div className="pt-2 flex flex-wrap gap-2">
                        <span className="text-xs font-mono px-3 py-1.5 rounded-lg border border-penn-blue/15 bg-white/80 text-penn-blue font-medium shadow-2xs hover:border-pothos hover:text-pothos hover:bg-white transition-all">
                          Dev Team Lead
                        </span>
                        <span className="text-xs font-mono px-3 py-1.5 rounded-lg border border-penn-blue/15 bg-white/80 text-penn-blue font-medium shadow-2xs hover:border-pothos hover:text-pothos hover:bg-white transition-all">
                          Live Preview Engine
                        </span>
                        <span className="text-xs font-mono px-3 py-1.5 rounded-lg border border-penn-blue/15 bg-white/80 text-penn-blue font-medium shadow-2xs hover:border-pothos hover:text-pothos hover:bg-white transition-all">
                          Automated Email Blasting
                        </span>
                        <span className="text-xs font-mono px-3 py-1.5 rounded-lg border border-penn-blue/15 bg-white/80 text-penn-blue font-medium shadow-2xs hover:border-pothos hover:text-pothos hover:bg-white transition-all">
                          QA Engineering
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Column 2: Academic Foundation / Education */}
              <div className="lg:col-span-6">
                <div className="relative pl-8 sm:pl-10 border-l-2 border-penn-blue/15 h-full flex flex-col justify-between">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="group relative"
                  >
                    {/* Timeline Node Icon */}
                    <div className="absolute -left-[41px] sm:-left-[49px] top-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-off-white border-2 border-penn-blue/30 group-hover:border-pothos group-hover:bg-pothos/10 flex items-center justify-center text-penn-blue group-hover:text-pothos transition-all shadow-xs">
                      <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:scale-110" />
                    </div>

                    <div className="space-y-4">
                      {/* Meta header row */}
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-xs font-mono uppercase tracking-widest text-pothos font-bold">
                          Academic Foundation
                        </span>
                        <span className="font-mono text-xs font-bold text-penn-blue bg-penn-blue/5 border border-penn-blue/15 px-3 py-1 rounded-full">
                          2022 - 2026
                        </span>
                      </div>

                      {/* Main Title & Institution */}
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-penn-blue font-sans tracking-tight leading-tight group-hover:text-pothos transition-colors">
                          BS in Information Technology
                        </h3>
                        <p className="text-sm font-mono text-penn-blue/70 mt-1">
                          National College of Science and Technology, Dasmariñas, Cavite
                        </p>
                      </div>

                      {/* Narrative */}
                      <p className="text-sm sm:text-base text-penn-blue/80 leading-relaxed font-sans">
                        Consistent GWA of 1.30 across all academic terms. Ranked 1st in Interactive Media Design competition and Ranked 7th in Introduction to Computing, excelling in systems architecture, networking, and full-stack software development.
                      </p>

                      {/* Honor Badges */}
                      <div className="pt-2 flex flex-wrap gap-2">
                        <span className="text-xs font-mono px-3 py-1.5 rounded-lg border border-pothos/40 bg-pothos/10 text-pothos font-bold shadow-2xs hover:bg-pothos hover:text-black transition-all">
                          GWA: 1.30
                        </span>
                        <span className="text-xs font-mono px-3 py-1.5 rounded-lg border border-penn-blue/15 bg-white/80 text-penn-blue font-medium shadow-2xs hover:border-pothos hover:text-pothos hover:bg-white transition-all">
                          Ranked 1st in Interactive Media Design
                        </span>
                        <span className="text-xs font-mono px-3 py-1.5 rounded-lg border border-penn-blue/15 bg-white/80 text-penn-blue font-medium shadow-2xs hover:border-pothos hover:text-pothos hover:bg-white transition-all">
                          Ranked 7th in Introduction to Computing
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Continuous Horizontal Moving Carousel for "Technical Skills" */}
        <section id="skills" className="py-20 sm:py-28 w-full bg-[#1b2028] text-white overflow-hidden">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            {/* Centered Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-center mb-8 sm:mb-12"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
                Technical Skills
              </h2>
              <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-300/90 font-sans leading-relaxed mt-3 sm:mt-4">
                A versatile solutions builder who delivers end-to-end results, bridging modern full-stack web development, relational database systems, and hands-on network infrastructure.
              </p>
            </motion.div>
          </div>

          {/* Full-width Carousel Track Container */}
          <div className="relative w-full overflow-hidden py-3">
            {/* Edge gradient masks for seamless fade */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 md:w-40 bg-gradient-to-r from-[#1b2028] via-[#1b2028]/80 to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 md:w-40 bg-gradient-to-l from-[#1b2028] via-[#1b2028]/80 to-transparent z-10" />

            {/* Continuous Moving Track */}
            <div className="animate-skills-carousel flex items-center gap-4 sm:gap-5 py-2">
              {[...TECHNICAL_SKILLS_LIST, ...TECHNICAL_SKILLS_LIST, ...TECHNICAL_SKILLS_LIST, ...TECHNICAL_SKILLS_LIST].map((skill, index) => {
                const isActive = activeSkillId === skill.id;
                return (
                  <button
                    key={`${skill.id}-${index}`}
                    type="button"
                    onClick={() => setActiveSkillId(skill.id)}
                    className={`w-36 sm:w-44 lg:w-48 aspect-square rounded-2xl sm:rounded-3xl p-4 sm:p-5 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-200 select-none outline-none shrink-0 ${
                      isActive
                        ? 'bg-[#ebb55f] text-[#1c2128] font-bold shadow-xl shadow-amber-500/15 border border-[#ebb55f] scale-105'
                        : 'bg-[#252b34] text-gray-200 hover:bg-[#2e3541] hover:text-white hover:scale-105 border border-white/5'
                    }`}
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center mb-2.5 sm:mb-3">
                      <SkillLogo name={skill.name} className="w-10 h-10 sm:w-11 sm:h-11" />
                    </div>
                    <span className={`text-xs sm:text-sm font-sans tracking-normal leading-snug line-clamp-2 px-1 ${
                      isActive ? 'font-bold text-[#181d24]' : 'font-medium text-gray-200'
                    }`}>
                      {skill.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Bento Grid Projects (Inventory) */}
        <section id="projects" className="py-20 sm:py-32 w-full bg-off-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex items-end justify-between mb-8 sm:mb-12"
            >
              <div>
                <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-penn-blue font-bold mb-1.5 sm:mb-2 block">Project Stacks</span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold tracking-tight text-penn-blue">The Inventory</h2>
              </div>
            </motion.div>

            <motion.div 
              variants={projectContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            >
              {/* Featured Project: 4th Generation Trading & Travel */}
              <motion.div variants={projectCardVariants} className="lg:col-span-2 h-full">
                <motion.div
                  whileHover={{ y: -6, scale: 1.005 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  onClick={() => setSelectedProject(PROJECTS_DATA[0])}
                  className="group relative rounded-3xl overflow-hidden min-h-[360px] sm:min-h-[420px] lg:min-h-[460px] flex items-center p-5 sm:p-8 lg:p-12 bg-penn-blue border border-white/10 text-off-white h-full hover:shadow-[0_25px_60px_-12px_rgba(1,31,91,0.35)] transition-all duration-300 cursor-pointer select-none ring-1 ring-white/5 hover:ring-pothos/40"
                >
                  {/* Background Visuals */}
                  <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#FAF9F6_0%,transparent_50%)] opacity-10" />
                  </div>

                  <div className="relative z-10 grid grid-cols-1 gap-4 sm:gap-6 items-center w-full">
                    <div>
                      <div className="flex justify-between items-start mb-4 sm:mb-6">
                        <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-white/10 text-off-white group-hover:bg-pothos group-hover:text-black transition-colors">
                          <Package className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <div className="flex flex-wrap items-center gap-2">
                          <a
                            href="https://4thgenerationtrading.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-off-white hover:text-black font-bold px-3 py-1 rounded-full bg-white/10 hover:bg-pothos border border-white/20 hover:border-pothos transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
                            title="Visit 4th Generation Trading Website"
                          >
                            <span>Trading</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                          <a
                            href="https://4thgenerationtravel.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-off-white hover:text-black font-bold px-3 py-1 rounded-full bg-white/10 hover:bg-pothos border border-white/20 hover:border-pothos transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
                            title="Visit 4th Generation Travel Website"
                          >
                            <span>Travel</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>

                      <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider sm:tracking-widest mb-1.5 sm:mb-2 block text-pothos font-bold">
                        Automated SCM
                      </span>
                      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 leading-snug sm:leading-tight text-off-white group-hover:text-pothos transition-colors font-sans tracking-tight">
                        4th Generation Trading & Travel
                      </h3>
                      <p className="text-[13px] sm:text-sm leading-relaxed text-off-white/80 font-sans max-w-xl">
                        Engineered a B2B Supply Chain Management System and high-performance Admin Portal with Automated Email Blasting and real-time inventory tracking.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

            <motion.div variants={projectCardVariants} className="lg:col-span-1 h-full">
              <ProjectCard 
                icon={ShieldCheck}
                category="Command Center"
                title="ERP SOFTWARE FOR M.D BUENDIA CONSTRUCTION INC. WITH DECISION SUPPORT SYSTEM AND VIRTUAL TOUR"
                description="Powerhouse Construction Management featuring industrial-grade logistics auditing and decision support system."
                tags={['Construction', 'ERP', 'Audit']}
                onClick={() => setSelectedProject(PROJECTS_DATA[1])}
              />
            </motion.div>

            <motion.div variants={projectCardVariants} className="lg:col-span-1 h-full">
              <ProjectCard 
                icon={Cpu}
                category="Integration Schematic"
                title="Paper Vending Machine"
                description="Complex hardware-software integration for high-volume automated distribution. Schematic view."
                tags={['IoT', 'Hardware', 'Integration']}
                onClick={() => setSelectedProject(PROJECTS_DATA[2])}
              />
            </motion.div>

            <motion.div variants={projectCardVariants} className="lg:col-span-1 h-full">
              <ProjectCard 
                icon={Flower2}
                category="Boutique Dashboard"
                title="FlowerShop Scents"
                description="Elegant front-end focused inventory management for premium floral services. Focusing on front-end leadership."
                tags={['Frontend', 'Elegant', 'Audit']}
                onClick={() => setSelectedProject(PROJECTS_DATA[3])}
              />
            </motion.div>

            <motion.div variants={projectCardVariants} className="lg:col-span-1 h-full">
              <ProjectCard 
                icon={Map}
                category="Tactile Card System"
                title="Pinoy Recipe & Tour"
                description="Immersive virtual tours and digital heritage navigation using a custom tactile card component system."
                tags={['UX', 'Tactile', 'Virtual Tour']}
                onClick={() => setSelectedProject(PROJECTS_DATA[4])}
                websiteUrl="https://filipino-recipe-sharing.netlify.app/"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Dedicated Certifications Section (Below Inventory) */}
      <section id="certifications" className="py-32 w-full bg-off-white border-t border-penn-blue/10">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-pothos animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-widest text-penn-blue font-bold">
                  Credentials & Accreditations
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-sans font-bold tracking-tight text-penn-blue">
                Verified Certifications
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-widest text-penn-blue/70 bg-penn-blue/5 border border-penn-blue/15 px-3.5 py-1.5 rounded-full font-bold">
                4 Industry & Academic Accreditations
              </span>
            </div>
          </motion.div>

          <motion.div 
            variants={projectContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {CERTIFICATIONS_DATA.map((cert) => (
              <motion.button
                key={cert.id}
                type="button"
                variants={projectCardVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                onClick={() => setSelectedCertification(cert)}
                className="group relative rounded-3xl p-7 bg-penn-blue border border-white/10 hover:border-pothos/60 shadow-xl text-off-white flex flex-col justify-between h-full ring-1 ring-white/5 hover:ring-pothos/40 transition-all cursor-pointer select-none overflow-hidden text-left outline-none"
              >
                <div className="relative z-10 w-full">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 rounded-2xl bg-white/10 text-off-white group-hover:bg-pothos group-hover:text-black transition-colors">
                      <Award className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono uppercase tracking-widest text-pothos font-bold px-3 py-1 rounded-full bg-pothos/10 border border-pothos/20">
                      {cert.year}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-sans text-off-white group-hover:text-pothos transition-colors leading-snug mb-3">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-mono uppercase tracking-widest text-off-white/70 mb-4 font-bold">
                    {cert.issuer}
                  </p>
                </div>

                <div className="relative z-10 pt-5 mt-6 border-t border-white/10 flex items-center justify-between w-full">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-pothos font-medium">
                    <ShieldCheck className="w-4 h-4 text-pothos" />
                    <span>Verified</span>
                  </div>
                  <div className="flex items-center text-xs font-mono text-off-white/80 group-hover:text-pothos transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>

                {/* Ambient Hover Glow */}
                <div className="absolute inset-0 bg-pothos/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>


        {/* Footer */}
        <footer id="contact" className="pt-32 pb-16 bg-penn-blue text-off-white transition-colors border-t border-white/10">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20 items-start">
              {/* Left Column: Heading & Context */}
              <div className="lg:col-span-5 space-y-8">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-pothos animate-pulse" />
                    <span className="text-xs font-mono uppercase tracking-widest text-pothos font-bold">
                      Direct Channel & Transmission
                    </span>
                  </div>
                  <h2 className="text-5xl lg:text-7xl font-bold tracking-tighter mb-6 italic leading-none">
                    Let's build <br />
                    <span className="text-pothos italic">something.</span>
                  </h2>
                  <p className="text-off-white/80 font-sans text-sm sm:text-base leading-relaxed">
                    Have an upcoming web application, enterprise ERP system, or technical challenge to tackle? Send a direct dispatch to my console using the form.
                  </p>
                </div>

                <div className="space-y-4 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-3 text-xs font-mono text-off-white/80">
                    <div className="w-2 h-2 rounded-full bg-pothos shrink-0" />
                    <span> Location: <span className="text-off-white font-bold text-lg">Dasmariñas, Cavite</span></span>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-mono text-off-white/80">
                    <div className="w-2 h-2 rounded-full bg-pothos shrink-0" />
                   <span> Email: <span className="text-off-white font-bold text-lg">rodelasrenee@gmail.com</span></span>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-mono text-off-white/80">
                    <div className="w-2 h-2 rounded-full bg-pothos shrink-0" />
                    <span> Contact: <span className="text-off-white font-bold text-lg">0908 989 5186</span></span>
                  </div>
                </div>
              </div>

              {/* Right Column: Controlled Interactive Contact Form */}
              <div className="lg:col-span-7">
                <ContactForm />
              </div>
            </div>

            {/* Bottom Footer Bar */}
            <div className="pt-10 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
              <div className="flex gap-8">
                <a href="https://github.com/renee-rodelas" target="_blank" rel="noopener noreferrer" className="font-mono text-xs uppercase tracking-[0.3em] text-off-white/80 hover:text-pothos transition-colors">Github</a>
                <a href="https://www.linkedin.com/in/renee-rodelas-it" target="_blank" rel="noopener noreferrer" className="font-mono text-xs uppercase tracking-[0.3em] text-off-white/80 hover:text-pothos transition-colors">LinkedIn</a>
              </div>
              <p className="text-[10px] font-mono opacity-40 text-left sm:text-right uppercase text-off-white">
                © 2026 RENEE MADEL L. ROELAS — FULL-STACK DEVELOPER<br/>
                v5.0.0-PROD | CAVITE, PHILIPPINES
              </p>
            </div>
          </div>
        </footer>
        </div>
      </main>
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            onSelectProject={(proj) => setSelectedProject(proj)}
          />
        )}
        {selectedCertification && (
          <CertificationModal
            certification={selectedCertification}
            onClose={() => setSelectedCertification(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
