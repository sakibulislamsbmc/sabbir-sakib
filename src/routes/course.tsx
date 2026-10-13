import { useState, useEffect, useRef } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowUpRight,
  Clock,
  Users,
  CheckCircle2,
  Sparkles,
  X,
  BookOpen,
  Award,
  Video,
  FileText,
  Star,
  Check,
  Zap,
  Briefcase,
  GraduationCap,
  FolderCheck,
  ChevronDown,
  PhoneCall,
  Calendar,
  Layers,
  Flame,
  Radio,
  ExternalLink,
} from "lucide-react";
import { Header } from "@/components/site/header";
import { Button } from "@/components/ui/button";
import { SpaceMotionOverlay } from "@/components/site/space-motion-overlay";
import horizon from "@/assets/space-horizon.jpg";
import gdCourseThumbnail from "@/assets/gd-course-thumbnail.png";
import videoCourseBanner from "@/assets/video-editing-course-banner.svg";
import webappCourseBanner from "@/assets/webapp-course-banner.svg";
import freelancingCourseBanner from "@/assets/freelancing-course-banner.svg";
import {
  Icon3DGraphicDesign,
  Icon3DVideoEditing,
  Icon3DWebApp,
  Icon3DOthers,
} from "@/components/portfolio/icons-3d";

export const Route = createFileRoute("/course")({
  head: () => ({
    meta: [
      {
        title: "Advanced Graphic Design with AI Tools Live Course & Programs — Sabbir Sakib",
      },
      {
        name: "description",
        content:
          "Level up your creativity. Master modern design with AI tools, Photoshop, Illustrator, and freelancing roadmaps by Sakibul Islam Sabbir.",
      },
      {
        property: "og:title",
        content: "Advanced Graphic Design with AI Tools Live Course — Bismahsoft Academy",
      },
      {
        property: "og:description",
        content:
          "Level up your creativity. Master modern design with AI tools, Photoshop, Illustrator, and real client workflows.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CoursePage,
});

type CourseTrackId = "Graphic Design" | "Video Editing" | "Web App" | "Others";

interface CourseTrack {
  id: CourseTrackId;
  index: string;
  label: string;
  subtitle: string;
  bengaliCaption: string;
  icon: typeof Icon3DGraphicDesign;
  tone: string;
  accentColor: string;
}

const COURSE_TRACKS: CourseTrack[] = [
  {
    id: "Graphic Design",
    index: "01",
    label: "Graphic Design",
    subtitle: "AI Tools, Photoshop, Illustrator & Branding",
    bengaliCaption: "গ্রাফিক ডিজাইন ও AI টুলস লাইভ কোর্স",
    icon: Icon3DGraphicDesign,
    tone: "sector-graphic-design",
    accentColor: "#0284c7",
  },
  {
    id: "Video Editing",
    index: "02",
    label: "Video Editing",
    subtitle: "Cinematic Cuts, Motion Graphics & CapCut Desktop",
    bengaliCaption: "ভিডিও এডিটিং ও ভিজ্যুয়াল মোশন",
    icon: Icon3DVideoEditing,
    tone: "sector-video-editing",
    accentColor: "#f43f5e",
  },
  {
    id: "Web App",
    index: "03",
    label: "Web App",
    subtitle: "Modern Frontend, React, Next.js & UI Architecture",
    bengaliCaption: "ওয়েব অ্যাপ্লিকেশন ও ফুল-স্ট্যাক কোডিং",
    icon: Icon3DWebApp,
    tone: "sector-web-app",
    accentColor: "#10b981",
  },
  {
    id: "Others",
    index: "04",
    label: "Others",
    subtitle: "Freelancing Strategy, Client Communication & Career",
    bengaliCaption: "ফ্রিল্যান্সিং ক্যারিয়ার ও লোকাল জব সাপোর্ট",
    icon: Icon3DOthers,
    tone: "sector-others",
    accentColor: "#8b5cf6",
  },
];

interface TargetAudience {
  title: string;
  description: string;
}

interface LearningOutcome {
  title: string;
  description: string;
}

interface CurriculumModule {
  number: string;
  title: string;
  topics: string[];
}

interface OfferValueItem {
  title: string;
  description: string;
}

interface MentorInfo {
  role: string;
  name: string;
  designation: string;
  bio: string;
}

interface CourseItem {
  id: string;
  title: string;
  titleBn?: string;
  tagline: string;
  track: CourseTrackId;
  price: string;
  originalPrice?: string;
  rating: string;
  level: string;
  sessions: string;
  duration: string;
  badge?: string;
  accentColor: string;
  thumbnail?: string;
  isLive: boolean;
  description: string;
  guarantees: string[];
  audienceHeading: string;
  audienceIntro: string;
  targetAudience: TargetAudience[];
  outcomesHeading: string;
  outcomesIntro: string;
  learningOutcomes: LearningOutcome[];
  curriculumHeading: string;
  curriculumIntro: string;
  curriculum: CurriculumModule[];
  offerValueHeading: string;
  offerValueIntro: string;
  offerValues: OfferValueItem[];
  mentor: MentorInfo;
}

const COURSES: CourseItem[] = [
  {
    id: "graphic-design-ai-live-course",
    title: "Advanced Graphic Design with AI Tools Live Course",
    tagline: "Level up your creativity. Master modern design.",
    track: "Graphic Design",
    price: "৳6,000",
    originalPrice: "৳10,000",
    rating: "4.9/5",
    level: "Beginner to Advanced",
    sessions: "20+ Class",
    duration: "Live Course",
    badge: "Limited Time Offer",
    accentColor: "#0284c7",
    thumbnail: gdCourseThumbnail,
    isLive: true,
    description:
      "Step into the future of design with this advanced course that combines the foundational principles of graphic design with the power of artificial intelligence. Ideal for modern creatives, this course is designed to make your workflow faster, smarter, and more professional.",
    guarantees: [
      "নিশ্চিত লাইভ প্রজেক্টে অংশগ্রহণের সুযোগ",
      "বাঙালি ক্লায়েন্টদের সাথে রিয়েল-টাইম কাজ",
      "ভালো পারফর্মারদের জন্য নিশ্চিত জব সাপোর্ট",
      "হ্যান্ডস-অন স্টেপ-বাই-স্টেপ প্র্যাক্টিক্যাল লার্নিং",
    ],
    audienceHeading: "এই কোর্সটি কাদের জন্য?",
    audienceIntro:
      "আপনি যদি গ্রাফিক ডিজাইন ও AI টুলসের মাধ্যমে future skill, freelance service অথবা প্রফেশনাল ডিজাইন ক্যারিয়ার গড়তে চান - তাহলে এই course আপনার জন্য নিখুঁত পছন্দ।",
    targetAudience: [
      {
        title: "Students & Professionals",
        description:
          "স্কুল-কলেজ ও ইউনিভার্সিটিতে পড়ুয়া ছাত্রছাত্রী এবং যারা ক্যারিয়ার গড়তে আগ্রহী।",
      },
      {
        title: "Freelancers",
        description: "চাকরি বা ব্যবসার পাশাপাশি যারা Graphic Design শিখে Extra ইনকাম করতে চান।",
      },
      {
        title: "Career Seekers",
        description:
          "যারা গ্রাফিক ডিজাইন শিখতে ইচ্ছুক এবং এই ইন্ডাস্ট্রিতে প্রফেশনাল ক্যারিয়ার গড়তে চান।",
      },
    ],
    outcomesHeading: "এই কোর্সে আপনি কী কী শিখবেন",
    outcomesIntro:
      "শুধুমাত্র বেসিক ডিজাইন না - এখানে আপনি শিখবেন কিভাবে AI টুলস ব্যবহার করে স্মার্টলি এবং দ্রুত প্রফেশনাল আউটপুট তৈরি করতে হয়।",
    learningOutcomes: [
      {
        title: "Modern AI Integration",
        description: "Midjourney, Adobe Firefly, DALL·E এবং অন্যান্য AI টুলসের প্রফেশনাল ব্যবহার।",
      },
      {
        title: "Advanced PS & AI",
        description: "Adobe Illustrator এবং Photoshop এর মাধ্যমে অ্যাডভান্সড ডিজাইন টেকনিক।",
      },
      {
        title: "Branding & Logo Design",
        description:
          "AI-powered লোগো এবং ব্র্যান্ডিং ডিজাইন প্রসেস এবং রিয়েল-ওয়ার্ল্ড প্রোজেক্ট।",
      },
      {
        title: "Marketplace Strategy",
        description: "Fiverr, Upwork, Behance এবং Dribbble-এ কাজ করার কার্যকরী কৌশল।",
      },
      {
        title: "Modern Portfolio",
        description: "ফ্রীল্যান্সিং এবং চাকরির জন্য একটি স্ট্রং এবং মডার্ন পোর্টফোলিও তৈরি করা।",
      },
      {
        title: "Efficient AI Workflow",
        description: "AI টুলস ব্যবহার করে প্রোডাক্টিভিটি বাড়ানো এবং স্মার্ট ডিজাইন স্কিল অর্জন।",
      },
    ],
    curriculumHeading: "Course Curriculum",
    curriculumIntro:
      "নিচের structure টি এমনভাবে সাজানো হয়েছে যেন একজন learner step-by-step editing ও design confidence build করতে পারে।",
    curriculum: [
      {
        number: "01",
        title: "Adobe Photoshop",
        topics: [
          "প্রয়োজনীয় সকল টুল ও এর প্রয়োগ",
          "টাইপোগ্রাফি, ইমেজ এডিটিং ও ম্যানিপুলেশন",
          "ফটোশপ সংক্রান্ত বিভিন্ন প্রফেশনাল প্রোজেক্ট",
          "ডিজাইন জগতের সেরা সফটওয়্যার গুলোর গাইডলাইন",
        ],
      },
      {
        number: "02",
        title: "Adobe Illustrator",
        topics: [
          "প্রয়োজনীয় সকল টুল ও এর প্রয়োগ",
          "লোগো, ব্র্যান্ড ও স্টেশনারি ডিজাইন",
          "প্রিন্ট ডিজাইন ও ডিজিটাল কন্টেন্ট ডিজাইন",
          "বিভিন্ন প্র্যাক্টিক্যাল প্রোজেক্ট ও পোর্টফোলিও তৈরি",
        ],
      },
      {
        number: "03",
        title: "Artificial Intelligence (AI)",
        topics: [
          "AI ব্যবহার করে কিভাবে আইডিয়া বের করতে হয়",
          "আইডিয়াকে ডিজাইন রূপে রূপান্তর করার বিস্তারিত লেসন",
          "Midjourney, Firefly এবং DALL·E ইন্টিগ্রেশন",
        ],
      },
      {
        number: "04",
        title: "Freelancing & Marketplace",
        topics: [
          "মার্কেটপ্লেসে যথাযথভাবে অ্যাকাউন্ট খোলা ও গিগ তৈরি",
          "ক্লায়েন্ট কমিউনিকেশন ও বিডিং কৌশল",
          "মার্কেটপ্লেস থেকে ডলার ট্রান্সফার ও টাকা উত্তোলন",
        ],
      },
      {
        number: "05",
        title: "Local Job Market & Career",
        topics: [
          "বাংলাদেশি লোকাল কোম্পানিতে চাকরি সন্ধান",
          "প্রফেশনাল সিভি তৈরির প্রক্রিয়া ও গাইডলাইন",
          "ইন্টারভিউ সংক্রান্ত বিভিন্ন টেকনিক ও ৩টি স্পেশাল অ্যাসাইনমেন্ট",
        ],
      },
      {
        number: "06",
        title: "Basic Video Editing & Animation",
        topics: [
          "CapCut ব্যবহার করে প্রফেশনাল লেভেলের ভিডিও এডিটিং",
          "ভিডিও এডিটিং এর বেসিক কনসেপ্ট ও ডিজাইন ইন্টিগ্রেশন",
          "লোগো অ্যানিমেশন (Logo Animation) এবং মোশন গ্রাফিক্স",
        ],
      },
    ],
    offerValueHeading: "এই কোর্সের সাথে আপনি আর কী কী পাবেন",
    offerValueIntro:
      "Hands-on project-based learning এবং ইন্ডাস্ট্রি স্ট্যান্ডার্ড ট্রেনিং যা আপনাকে ডিজাইন মার্কেটে সবার থেকে আলাদা করে তুলবে।",
    offerValues: [
      {
        title: "Practice Files",
        description:
          "প্র্যাকটিসের জন্য project file, assets, demo materials যা editable sample files",
      },
      {
        title: "Preset / Template Ideas",
        description:
          "Text Presets, Logo Animation Templates, Motion Graphics Templates এবং Liquid Glass Effect Templates",
      },
      {
        title: "Freelance Direction",
        description:
          "কীভাবে নিজের স্কিল সেলস করে ক্লায়েন্টের কাজ করার জন্য উপযুক্ত হবেন, পোর্টফোলিও বিল্ড করবেন ও প্রজেক্টের কাজ রেডি করবেন।",
      },
    ],
    mentor: {
      role: "Instructor",
      name: "Sakibul Islam Sabbir",
      designation: "Founder @ Bismahsoft Academy",
      bio: "দীর্ঘ সময় ধরে ডিজাইন এবং ফ্রিল্যান্সিং ইন্ডাস্ট্রির সাথে যুক্ত, তার মূল লক্ষ্য শুধুমাত্র ডিজাইন শেখানো নয়, বরং প্র্যাক্টিক্যাল কাজ এবং ক্লায়েন্ট ডিলিং থেকে শুরু করে কিভাবে মার্কেটপ্লেসে সফল হওয়া যায় তার পূর্ণাঙ্গ গাইডলাইন...",
    },
  },
  {
    id: "cinematic-video-editing-bootcamp",
    title: "Cinematic Video Editing & Motion Graphics Bootcamp",
    tagline: "Craft visual stories that mesmerize and captivate audiences.",
    track: "Video Editing",
    price: "৳6,000",
    originalPrice: "৳10,000",
    rating: "4.9/5",
    level: "Beginner to Advanced",
    sessions: "24+ Live Classes",
    duration: "Live Course",
    badge: "Popular Choice",
    accentColor: "#f43f5e",
    thumbnail: videoCourseBanner,
    isLive: true,
    description:
      "Master cinematic video pacing, advanced sound design, Hollywood-style color grading, and viral short-form retention techniques using Premiere Pro, After Effects, and CapCut Desktop.",
    guarantees: [
      "বাস্তব ক্লায়েন্ট প্রজেক্ট এবং কমার্শিয়াল ফুটেজে কাজ",
      "সাউন্ড ডিজাইন এবং কালার গ্রেডিং এর প্রিমিয়াম রিসোর্স",
      "ইউটিউব এবং রিলস অপটিমাইজেশন টেকনিক",
      "টপ পারফর্মারদের জন্য এজেন্সিতে ইন্টার্নশিপ সাপোর্ট",
    ],
    audienceHeading: "এই কোর্সটি কাদের জন্য?",
    audienceIntro:
      "কনটেন্ট ক্রিয়েটর, ইউটিউবার এবং ফ্রিল্যান্সার যারা আন্তর্জাতিক মানের ভিডিও এডিটিং স্কিল তৈরি করতে চান।",
    targetAudience: [
      {
        title: "Aspiring Video Editors",
        description: "ভিডিও এডিটিংকে ফুল-টাইম ফ্রিল্যান্স ক্যারিয়ার বানাতে আগ্রহী。",
      },
      {
        title: "Content Creators",
        description: "নিজের চ্যানেল ও পেজের জন্য হাই-কোয়ালিটি ভিডিও বানাতে চান।",
      },
      {
        title: "Social Media Marketers",
        description: "ব্র্যান্ডের জন্য এনগেজিং বিজ্ঞাপন ও রিলস তৈরি করতে আগ্রহী।",
      },
    ],
    outcomesHeading: "এই কোর্সে আপনি কী কী শিখবেন",
    outcomesIntro:
      "স্ক্রিপ্ট থেকে শুরু করে ফাইনাল এক্সপোর্ট পর্যন্ত প্রতিটি সিনেমাটিক ফ্রেম মাস্টার করুন।",
    learningOutcomes: [
      {
        title: "Pacing & Story Rhythm",
        description: "৩ সেকেন্ডের হুক এবং আবেগঘন ভিজ্যুয়াল কাটিং আর্ট।",
      },
      {
        title: "Sound Design Mastery",
        description: "Foley, whooshes, impacts ও অডিও লেভেলিং সাইন্স।",
      },
      {
        title: "Color Grading & LUTs",
        description: "Lumetri Color wheels এবং সিনেমাটিক স্কিনটোন কালার।",
      },
      {
        title: "Motion Presets & Typography",
        description: "Kinetic টেক্সট, সাবটাইটেল এবং এনিমেটেড লোয়ার থার্ডস।",
      },
    ],
    curriculumHeading: "Course Curriculum",
    curriculumIntro: "স্টেপ-বাই-স্টেপ প্র্যাক্টিক্যাল ভিডিও এডিটিং রোডম্যাপ।",
    curriculum: [
      {
        number: "01",
        title: "Premiere Pro Architecture & Keyboard Shortcuts",
        topics: [
          "ওয়ার্কস্পেস সেটআপ ও টাইমলাইন অপটিমাইজেশন",
          "কাটিং রুলস: J-cuts, L-cuts এবং ম্যাচ কাটস",
          "মাল্টিক্যাম এডিটিং ও অডিও সিঙ্ক",
        ],
      },
      {
        number: "02",
        title: "CapCut Desktop Fast-Paced Viral Edits",
        topics: [
          "টিকটক ও রিলস এর ভাইরাল এডিটিং স্টাইল",
          "অটো-ক্যাপশন ও কাইনেটিক স্টাইলিং",
          "স্মুথ ট্রানজিশন ও স্পিড র‍্যাম্পিং",
        ],
      },
      {
        number: "03",
        title: "After Effects Motion & Logo Animation",
        topics: [
          "কিফ্রেম গ্রাফ এডিটর ও ইলাস্টিক মোশন",
          "লোগো অ্যানিমেশন ও গ্লো ইফেক্টস",
          "৩ডি ক্যামেরা মুভমেন্ট ও ট্র্যাকিং",
        ],
      },
    ],
    offerValueHeading: "এই কোর্সের সাথে আপনি আর কী কী পাবেন",
    offerValueIntro: "কোর্স ম্যাটেরিয়ালস এবং আনলিমিটেড লাইব্রেরি।",
    offerValues: [
      {
        title: "15GB+ Sound Effects Pack",
        description: "সিনেমাটিক ট্রেইলার ও রিলস সাউন্ড লাইব্রেরি।",
      },
      {
        title: "LUTs & Presets Bundle",
        description: "রেডিমেড সিনেমাটিক প্রিসেট যা এক ক্লিকেই ব্যবহারযোগ্য।",
      },
    ],
    mentor: {
      role: "Instructor",
      name: "Sakibul Islam Sabbir",
      designation: "Founder @ Bismahsoft Academy",
      bio: "ভিডিও এডিটিং ও ভিজ্যুয়াল স্টোরিটেলিং স্পেশালিস্ট, আন্তর্জাতিক ক্লায়েন্টদের জন্য সফলভাবে শত শত প্রজেক্ট সম্পন্নকারী।",
    },
  },
  {
    id: "full-stack-web-engineering",
    title: "Full-Stack Web App Development Bootcamp",
    tagline: "Build scalable web applications from prototype to cloud deployment.",
    track: "Web App",
    price: "৳8,000",
    originalPrice: "৳12,000",
    rating: "4.9/5",
    level: "Intermediate",
    sessions: "30+ Live Classes",
    duration: "Live Course",
    badge: "High Demand",
    accentColor: "#10b981",
    thumbnail: webappCourseBanner,
    isLive: true,
    description:
      "Deep dive into React, TypeScript, Tailwind CSS, Node.js, and modern full-stack workflows. Build real SaaS dashboards, responsive interactive platforms, and deploy production architectures.",
    guarantees: [
      "৩টি সম্পূর্ণ লাইভ ফুল-স্ট্যাক প্রজেক্ট ডেভেলপমেন্ট",
      "গিটহাব ও লাইভ হোস্টিং পোর্টফোলিও সেটআপ",
      "ইন্টারভিউ প্রিপারেশন ও টেকনিক্যাল টেস্ট গাইড",
    ],
    audienceHeading: "এই কোর্সটি কাদের জন্য?",
    audienceIntro:
      "ওয়েব ডেভেলপার এবং প্রোগ্রামার যারা আধুনিক ফ্রেমওয়ার্ক ও ক্লাউড ডেপ্লয়মেন্ট শিখতে চান।",
    targetAudience: [
      {
        title: "Frontend Developers",
        description: "React, TypeScript ও মডার্ন ইকোসিস্টেম আয়ত্ত করতে চান।",
      },
      {
        title: "CS Students",
        description: "বিশ্ববিদ্যালয়ের পড়ালেখার সাথে ইন্ডাস্ট্রির রিয়েল টেক শিখতে চান।",
      },
    ],
    outcomesHeading: "এই কোর্সে আপনি কী কী শিখবেন",
    outcomesIntro: "ইন্ডাস্ট্রি স্ট্যান্ডার্ড ক্লিন কোড ও আর্কিটেকচার।",
    learningOutcomes: [
      {
        title: "React & TypeScript Mastery",
        description: "টাইপ-সেফ ইউজার ইন্টারফেস এবং স্টেট ম্যানেজমেন্ট।",
      },
      {
        title: "Full-Stack API Design",
        description: "RESTful ব্যাকএন্ড ও রিয়েল-টাইম ডাটাবেস ইন্টিগ্রেশন।",
      },
    ],
    curriculumHeading: "Course Curriculum",
    curriculumIntro: "মডার্ন সফটওয়্যার ইঞ্জিনিয়ারিং রোডম্যাপ।",
    curriculum: [
      {
        number: "01",
        title: "TypeScript & React Foundation",
        topics: [
          "আধুনিক জাভাস্ক্রিপ্ট ও টাইপস্ক্রিপ্ট সিনট্যাক্স",
          "কম্পোনেন্ট ডিজাইন ও হুকস আর্কিটেকচার",
          "টেইলউইন্ড সিএসএস দিয়ে রেসপনসিভ ইউআই",
        ],
      },
      {
        number: "02",
        title: "Full-Stack Architecture & Cloud",
        topics: [
          "সার্ভার আর্কিটেকচার ও API রাউটিং",
          "ডাটাবেস ডিজাইন ও অথেন্টিকেশন",
          "ক্লাউড প্ল্যাটফর্মে ডেপ্লয়মেন্ট ও অপটিমাইজেশন",
        ],
      },
    ],
    offerValueHeading: "এই কোর্সের সাথে আপনি আর কী কী পাবেন",
    offerValueIntro: "সোর্স কোড ও ক্যারিয়ার সাপোর্ট।",
    offerValues: [
      {
        title: "Full Source Code Repositories",
        description: "লাইভ সব প্রজেক্টের ক্লিন ও কমেন্টেড সোর্স কোড।",
      },
    ],
    mentor: {
      role: "Instructor",
      name: "Sakibul Islam Sabbir",
      designation: "Founder @ Bismahsoft Academy",
      bio: "সফটওয়্যার আর্কিটেক্ট ও টেক মেন্টর, আন্তর্জাতিক স্কেলে ওয়েব অ্যাপ্লিকেশন ডেভেলপমেন্টে অভিজ্ঞ।",
    },
  },
  {
    id: "freelancing-client-mastery",
    title: "Freelancing & International Client Mastery",
    tagline: "Win high-ticket global clients and build a thriving remote business.",
    track: "Others",
    price: "৳5,000",
    originalPrice: "৳8,000",
    rating: "4.9/5",
    level: "All Skill Levels",
    sessions: "16+ Live Classes",
    duration: "Live Course",
    badge: "Career Growth",
    accentColor: "#8b5cf6",
    thumbnail: freelancingCourseBanner,
    isLive: true,
    description:
      "Learn how to pitch, close, and negotiate with international clients across Upwork, Fiverr, LinkedIn, and direct cold outreach without relying solely on low-paying bidding battles.",
    guarantees: [
      "প্রুভেন প্রপোজাল এবং কভার লেটার টেমপ্লেটস",
      "ক্লায়েন্ট কমিউনিকেশন ও জুম মিটিং ডিলিং সিক্রেটস",
      "ডলার উইথড্রয়াল ও পেমেন্ট গেটওয়ে সেটআপ",
    ],
    audienceHeading: "এই কোর্সটি কাদের জন্য?",
    audienceIntro:
      "ডিজাইনার, ডেভেলপার ও যে কোনো স্কিলধারী যারা ফ্রিল্যান্সিংয়ে রেগুলার ক্লায়েন্ট চান।",
    targetAudience: [
      {
        title: "Freelancers with Stagnant Income",
        description: "লো-টিকিট কাজ থেকে হাই-টিকিট ক্লায়েন্টে শিফট হতে চান।",
      },
    ],
    outcomesHeading: "এই কোর্সে আপনি কী কী শিখবেন",
    outcomesIntro: "ইন্টারন্যাশনাল ক্লায়েন্ট হ্যান্ডলিং ও সেলস স্ট্র্যাটেজি।",
    learningOutcomes: [
      {
        title: "High-Converting Profiles",
        description: "আপওয়ার্ক ও ফাইভার প্রোফাইল অপটিমাইজেশন।",
      },
    ],
    curriculumHeading: "Course Curriculum",
    curriculumIntro: "ফ্রিল্যান্সিং সাকসেস ব্লুপ্রিন্ট।",
    curriculum: [
      {
        number: "01",
        title: "Marketplace Mastery & Profile SEO",
        topics: [
          "অ্যালগরিদম আন্ডারস্ট্যান্ডিং ও গিগ র‍্যাঙ্কিং",
          "ক্লিন বিডিং ও পারসোনালাইজড প্রপোজাল",
        ],
      },
    ],
    offerValueHeading: "এই কোর্সের সাথে আপনি আর কী কী পাবেন",
    offerValueIntro: "রেডিমেড বিজনেস টেমপ্লেট।",
    offerValues: [
      {
        title: "Cold Email & Proposal Swipe Files",
        description: "যে টেমপ্লেটগুলো দিয়ে সরাসরি বিদেশী ক্লায়েন্ট ক্লোজ করা যায়।",
      },
    ],
    mentor: {
      role: "Instructor",
      name: "Sakibul Islam Sabbir",
      designation: "Founder @ Bismahsoft Academy",
      bio: "টপ-রেটেড ফ্রিল্যান্সার এবং কনসালট্যান্ট, শিক্ষার্থীদের ক্যারিয়ারে গাইড করতে নিবেদিত।",
    },
  },
];

function CoursePage() {
  const [selectedTrack, setSelectedTrack] = useState<CourseTrackId | "ALL">("ALL");
  const [activeModalCourse, setActiveModalCourse] = useState<CourseItem | null>(null);
  const [showEnrollPaymentModal, setShowEnrollPaymentModal] = useState<boolean>(false);
  const [enrolledSuccessNotice, setEnrolledSuccessNotice] = useState<string | null>(null);

  // Dynamic ticking countdown timer for Admission Deadline
  const [timeLeft, setTimeLeft] = useState({
    days: "03",
    hours: "14",
    minutes: "28",
    seconds: "45",
  });

  const curriculumSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Dynamic countdown timer
    let totalSeconds = 3 * 86400 + 14 * 3600 + 28 * 60 + 45;
    const interval = setInterval(() => {
      totalSeconds = Math.max(0, totalSeconds - 1);
      const d = Math.floor(totalSeconds / 86400);
      const h = Math.floor((totalSeconds % 86400) / 3600);
      const m = Math.floor((totalSeconds % 3600) / 60);
      const s = totalSeconds % 60;
      setTimeLeft({
        days: String(d).padStart(2, "0"),
        hours: String(h).padStart(2, "0"),
        minutes: String(m).padStart(2, "0"),
        seconds: String(s).padStart(2, "0"),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (showEnrollPaymentModal) {
          setShowEnrollPaymentModal(false);
        } else {
          setActiveModalCourse(null);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showEnrollPaymentModal]);

  // Filter courses based on active track
  const filteredCourses =
    selectedTrack === "ALL" ? COURSES : COURSES.filter((course) => course.track === selectedTrack);

  const scrollToCurriculum = () => {
    if (curriculumSectionRef.current) {
      curriculumSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="site-shell">
      {/* Top Centered Navigation Bar */}
      <Header />

      <main>
        {/*
          HERO SECTION:
          Arranged in the exact same way as the portfolio page & homepage:
          - horizon background image with breathing animation
          - hero-shade gradient overlay
          - SpaceMotionOverlay with floating 3D tech drift geometry & splines
          - Dual starfields (stars-one, stars-two)
          - Hero typography, eyebrow, and golden shimmer
        */}
        <section className="space-hero portfolio-space-hero">
          {/* Background Horizon Image */}
          <img
            src={horizon}
            alt=""
            width={1920}
            height={1024}
            className="horizon-image"
            loading="eager"
          />

          {/* Deep Space Shade Gradient */}
          <div className="hero-shade" />

          {/* Dynamic Motion Graphic & 3D Vector Overlay */}
          <SpaceMotionOverlay />

          {/* Starfields */}
          <div className="stars stars-one" aria-hidden="true" />
          <div className="stars stars-two" aria-hidden="true" />

          {/* Hero Content Container */}
          <div className="hero-content portfolio-hero-content max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 pt-8 md:pt-14 pb-16">
            {/* Top Navigation Back Action */}
            <div className="flex items-center justify-start mb-6">
              <Button
                variant="ghost"
                asChild
                className="hover:bg-white/10 text-white/80 hover:text-white rounded-full px-4 text-xs font-bold transition-colors"
                style={{ fontFamily: "'Tomato Grotesk', -apple-system, sans-serif" }}
              >
                <Link to="/">
                  <ArrowLeft className="mr-2" size={15} />
                  Home
                </Link>
              </Button>
            </div>

            {/* Hero Eyebrow Pill */}
            <div className="hero-eyebrow mb-4">
              <span className="status-dot" />{" "}
              <span
                className="golden-text-shimmer font-bold tracking-widest uppercase text-xs"
                style={{ fontFamily: "'Tomato Grotesk', -apple-system, sans-serif" }}
              >
                LIVE COURSES &bull; MASTERCLASSES &bull; ACADEMY
              </span>
            </div>

            {/* EXACT TITLE */}
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-3"
              style={{ fontFamily: "'Tomato Grotesk', -apple-system, sans-serif" }}
            >
              Mastering Skills. Shaping Futures
              <span className="title-period text-[#0284c7]">.</span>
            </h1>

            {/* EXACT SUB TITLE */}
            <p
              className="text-lg sm:text-xl md:text-2xl text-white/85 font-bold tracking-wide max-w-2xl mx-auto mb-10 md:mb-14"
              style={{ fontFamily: "'Tomato Grotesk', -apple-system, sans-serif" }}
            >
              Level up your creativity. Master modern design.
            </p>

            {/*
              CONTAINER TEXT RECTANGULAR SHAPES:
              Sequential rounded rectangular containers matching portfolio page:
              - Graphic Design
              - Video Editing
              - Web App
              - Others
              Featuring transparent UI elements and 3D icons.
            */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 max-w-[1140px] mx-auto text-left"
              role="region"
              aria-label="Course Sectors"
            >
              {COURSE_TRACKS.map((track) => {
                const IconComponent = track.icon;
                const isSelected = selectedTrack === track.id;

                return (
                  <div
                    key={track.id}
                    onClick={() =>
                      setSelectedTrack((prev) => (prev === track.id ? "ALL" : track.id))
                    }
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setSelectedTrack((prev) => (prev === track.id ? "ALL" : track.id));
                      }
                    }}
                    className={`
                      category-card ${track.tone} group cursor-pointer select-none
                      flex flex-col justify-between
                      min-h-[290px] sm:min-h-[310px]
                      p-3.5 sm:p-4
                      rounded-[32px] sm:rounded-[36px]
                      transition-all duration-300
                      ${
                        isSelected
                          ? "ring-2 ring-sky-400/90 shadow-[0_0_35px_rgba(2,132,199,0.35)] -translate-y-2 border-sky-400/80"
                          : "hover:-translate-y-2"
                      }
                    `}
                    style={{
                      background: isSelected
                        ? "color-mix(in oklch, var(--tile-background) 96%, rgba(2, 132, 199, 0.12))"
                        : "var(--tile-background)",
                      borderColor: isSelected ? track.accentColor : "var(--tile-border)",
                    }}
                  >
                    {/* Art Section: Rounded rectangle with translucent glass gradient & 3D Icon */}
                    <div className="category-art relative flex items-center justify-center aspect-[1.3] rounded-[24px] sm:rounded-[26px] overflow-hidden p-2">
                      {/* Sequential index badge */}
                      <span
                        className="category-number font-mono font-bold tracking-wider text-xs"
                        style={{ fontFamily: "'Tomato Grotesk', monospace" }}
                      >
                        {track.index}
                      </span>

                      {/* Top-Right Arrow Indicator */}
                      <ArrowUpRight
                        className={`category-arrow transition-transform duration-300 ${
                          isSelected
                            ? "rotate-45 text-white opacity-100 scale-110"
                            : "group-hover:translate-x-0.5 group-hover:-translate-y-0.5 opacity-80"
                        }`}
                        size={20}
                      />

                      {/* Sector-specific 3D Icon */}
                      <div className="transform transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 drop-shadow-[0_12px_20px_rgba(0,0,0,0.45)]">
                        <IconComponent className="w-24 h-24 sm:w-28 sm:h-28" />
                      </div>

                      {/* Inner Highlight Border */}
                      <div
                        className="absolute inset-0 rounded-[24px] sm:rounded-[26px] border border-white/20 pointer-events-none"
                        aria-hidden="true"
                      />
                    </div>

                    {/* Category Caption / Container Text */}
                    <div className="category-caption px-3 pt-3.5 pb-2">
                      <div className="flex items-center justify-between gap-2">
                        <h2
                          className="text-xl sm:text-[22px] font-bold text-white tracking-tight leading-tight transition-colors group-hover:text-white"
                          style={{ fontFamily: "'Tomato Grotesk', -apple-system, sans-serif" }}
                        >
                          {track.label}
                        </h2>

                        {isSelected && (
                          <span className="text-sky-400 shrink-0">
                            <CheckCircle2 size={16} />
                          </span>
                        )}
                      </div>

                      {/* Track Subtitle & Bengali Detail */}
                      <p className="text-xs sm:text-[13px] text-white/60 mt-1 line-clamp-1 font-medium leading-snug">
                        {track.subtitle}
                      </p>
                      <p className="font-['Hind_Siliguri',sans-serif] text-xs text-white/40 mt-0.5 line-clamp-1">
                        {track.bengaliCaption}
                      </p>
                    </div>

                    {/* Sector Accent Line at Bottom */}
                    <div
                      className={`h-[3px] rounded-full mx-3 mb-1 transition-all duration-300 ${
                        isSelected ? "opacity-100 scale-x-100" : "opacity-0 group-hover:opacity-60"
                      }`}
                      style={{
                        background: `linear-gradient(90deg, transparent, ${track.accentColor}, transparent)`,
                      }}
                    />
                  </div>
                );
              })}
            </div>

            {/* Filter Status & Show All */}
            <div className="max-w-[1140px] mx-auto mt-6 flex items-center justify-between px-2 text-xs text-white/60">
              <span className="font-['Tomato_Grotesk',sans-serif]">
                Showing <strong className="text-white font-bold">{filteredCourses.length}</strong>{" "}
                course{filteredCourses.length === 1 ? "" : "s"}{" "}
                {selectedTrack !== "ALL" ? `in ${selectedTrack}` : "across all sectors"}
              </span>

              {selectedTrack !== "ALL" && (
                <button
                  onClick={() => setSelectedTrack("ALL")}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors cursor-pointer"
                  style={{ fontFamily: "'Tomato Grotesk', -apple-system, sans-serif" }}
                >
                  <X size={12} />
                  Show All Courses
                </button>
              )}
            </div>

            {/*
              LOWER SECTION:
              Courses presented inside the same rounded-rectangle shapes.
              Clicking on them opens up the details and displays information about them.
            */}
            <section
              className="mt-12 md:mt-16 max-w-[1140px] mx-auto text-left"
              aria-label="Courses Catalog"
            >
              {/* Section Header */}
              <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-1">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-sky-400 mb-2">
                    <Sparkles size={13} />
                    <span
                      className="font-bold uppercase tracking-wider text-[11px]"
                      style={{ fontFamily: "'Tomato Grotesk', -apple-system, sans-serif" }}
                    >
                      Featured Live Course Catalog
                    </span>
                  </div>
                  <h3
                    className="text-2xl sm:text-3xl font-bold text-white tracking-tight"
                    style={{ fontFamily: "'Tomato Grotesk', -apple-system, sans-serif" }}
                  >
                    Select a Course to View Details &amp; Syllabus
                  </h3>
                </div>

                <p className="text-xs text-white/50 max-w-xs sm:text-right">
                  Click on any course card to open the complete curriculum, AI modules, admission
                  fee, and live mentor details.
                </p>
              </div>

              {/* Grid of Courses inside the same rounded-rectangle shapes */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {filteredCourses.map((course, index) => {
                  const isFirstCourse =
                    index === 0 && course.id === "graphic-design-ai-live-course";

                  return (
                    <div
                      key={course.id}
                      onClick={() => setActiveModalCourse(course)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setActiveModalCourse(course);
                        }
                      }}
                      className={`
                        group cursor-pointer select-none text-left
                        flex flex-col justify-between
                        p-6 sm:p-8
                        rounded-[32px] sm:rounded-[36px]
                        border border-white/15 hover:border-sky-400/70
                        shadow-xl backdrop-blur-xl
                        transition-all duration-300
                        hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)]
                        relative overflow-hidden
                        ${isFirstCourse ? "ring-1 ring-sky-400/40" : ""}
                      `}
                      style={{
                        background: "color-mix(in oklch, var(--tile-background) 88%, transparent)",
                        borderBottomWidth: "3px",
                        borderBottomColor: course.accentColor,
                      }}
                    >
                      {/* Top Accent Light Beam */}
                      <div
                        className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          background: `linear-gradient(90deg, transparent, ${course.accentColor}, transparent)`,
                        }}
                      />

                      <div>
                        {/* Top Badges */}
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                          <div className="flex items-center gap-2">
                            <span
                              className="text-[11px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full border"
                              style={{
                                color: course.accentColor,
                                borderColor: `${course.accentColor}50`,
                                backgroundColor: `${course.accentColor}18`,
                              }}
                            >
                              {course.track}
                            </span>

                            {course.isLive && (
                              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-red-500/15 text-red-400 border border-red-500/30">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                                LIVE
                              </span>
                            )}
                          </div>

                          {course.badge && (
                            <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-amber-400/15 text-amber-300 border border-amber-400/30">
                              {course.badge}
                            </span>
                          )}
                        </div>

                        {/* Course Thumbnail Image */}
                        {course.thumbnail && (
                          <div
                            className="relative mb-5 rounded-[22px] sm:rounded-[26px] overflow-hidden aspect-[16/10] bg-black/50 border border-white/15 shadow-inner transition-colors duration-300"
                            style={{ borderColor: "rgba(255, 255, 255, 0.15)" }}
                          >
                            <img
                              src={course.thumbnail}
                              alt={course.title}
                              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-[1.04]"
                              loading="lazy"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent pointer-events-none" />
                            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-white">
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 font-bold">
                                <Sparkles size={12} className="text-amber-400" />
                                Course Preview
                              </span>
                              <span
                                className="px-2.5 py-1 rounded-full font-bold shadow-md text-white text-[10px] tracking-wide uppercase"
                                style={{
                                  backgroundColor: course.accentColor,
                                  boxShadow: `0 0 12px ${course.accentColor}80`,
                                }}
                              >
                                {course.track}
                              </span>
                            </div>
                          </div>
                        )}

                        {/* Course Title in Tomato Grotesk */}
                        <h4
                          className="text-2xl sm:text-3xl font-bold text-white group-hover:text-sky-300 transition-colors leading-snug"
                          style={{ fontFamily: "'Tomato Grotesk', -apple-system, sans-serif" }}
                        >
                          {course.title}
                        </h4>

                        {/* Tagline / Subtitle */}
                        <p
                          className="text-sm sm:text-base text-sky-400/90 font-semibold mt-1.5"
                          style={{ fontFamily: "'Tomato Grotesk', -apple-system, sans-serif" }}
                        >
                          {course.tagline}
                        </p>

                        {/* Course Summary Snippet */}
                        <p className="text-xs sm:text-sm text-white/70 mt-3 line-clamp-2 leading-relaxed">
                          {course.description}
                        </p>

                        {/* Meta Specs Bar */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-5 p-3 rounded-2xl bg-white/[0.04] border border-white/10 text-xs">
                          <div>
                            <span className="text-[10px] uppercase tracking-wider text-white/40 block">
                              Level
                            </span>
                            <span className="font-bold text-white mt-0.5 block truncate">
                              {course.level}
                            </span>
                          </div>
                          <div>
                            <span className="text-[10px] uppercase tracking-wider text-white/40 block">
                              Format
                            </span>
                            <span className="font-bold text-white mt-0.5 block truncate">
                              {course.duration}
                            </span>
                          </div>
                          <div>
                            <span className="text-[10px] uppercase tracking-wider text-white/40 block">
                              Classes
                            </span>
                            <span className="font-bold text-white mt-0.5 block truncate">
                              {course.sessions}
                            </span>
                          </div>
                          <div>
                            <span className="text-[10px] uppercase tracking-wider text-white/40 block">
                              Support
                            </span>
                            <span className="font-bold text-emerald-400 mt-0.5 block truncate">
                              Included
                            </span>
                          </div>
                        </div>

                        {/* Key Guarantees / Highlights Checklist */}
                        <div className="mt-5 space-y-2 border-t border-white/10 pt-4">
                          {course.guarantees.slice(0, 3).map((item, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80 font-['Hind_Siliguri',sans-serif]"
                            >
                              <CheckCircle2
                                size={15}
                                className="text-emerald-400 shrink-0 mt-0.5"
                              />
                              <span className="line-clamp-1">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Card Bottom: Price, Rating & 'View Details / Curriculum' Action */}
                      <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                        <div className="flex items-baseline gap-2">
                          <span
                            className="text-2xl sm:text-3xl font-bold text-white"
                            style={{ fontFamily: "'Tomato Grotesk', -apple-system, sans-serif" }}
                          >
                            {course.price}
                          </span>
                          {course.originalPrice && (
                            <span className="text-xs text-white/40 line-through">
                              {course.originalPrice}
                            </span>
                          )}
                          <div className="flex items-center gap-1 text-xs font-bold text-amber-400 ml-2">
                            <Star size={13} className="fill-amber-400 text-amber-400" />
                            <span>{course.rating}</span>
                          </div>
                        </div>

                        <div
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 group-hover:bg-sky-500 group-hover:text-black text-white text-xs font-bold transition-all"
                          style={{ fontFamily: "'Tomato Grotesk', -apple-system, sans-serif" }}
                        >
                          <span>Curriculum দেখুন</span>
                          <ArrowUpRight
                            size={14}
                            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        </section>
      </main>

      {/*
        FEATURE: CLICKING ON A COURSE OPENS UP THE DETAILS AND DISPLAYS INFORMATION ABOUT THEM
        Incorporate exact content provided:
        - Title, Subtitle, Full description
        - Admission Deadline Countdown clock (00 Days : 00 Hrs : 00 Mins : 00 Secs)
        - Price ৳6,000, 4.9/5, Limited Time Offer
        - Key Highlights / Guarantees
        - Enroll & Pay Now & নতুন ব্যাচে জয়েন করতে নক দিন
        - Course Overview (এই কোর্সটি কাদের জন্য?)
        - Learning Outcomes (এই কোর্সে আপনি কী কী শিখবেন)
        - Detailed Structure (Course Curriculum) with 6 Modules (Photoshop, Illustrator, AI, Freelancing, Local Job Market, CapCut Video)
        - Offer Value (এই কোর্সের সাথে আপনি আর কী কী পাবেন)
        - Meet Your Mentor: Sakibul Islam Sabbir, Founder @ Bismahsoft Academy
      */}
      {activeModalCourse && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveModalCourse(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="course-modal-title"
        >
          <div
            className="
              relative w-full max-w-4xl max-h-[92vh] overflow-y-auto
              rounded-[32px] sm:rounded-[40px]
              bg-[#0a0d14]/95 border border-white/20
              shadow-[0_24px_90px_rgba(0,0,0,0.85)]
              p-5 sm:p-8 md:p-10 text-left
              animate-in zoom-in-95 duration-200
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalCourse(null)}
              className="absolute top-5 right-5 sm:top-7 sm:right-7 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors cursor-pointer z-10"
              aria-label="Close Course Details"
            >
              <X size={20} />
            </button>

            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2.5 mb-3 pr-12">
              <span
                className="text-xs font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full border"
                style={{
                  color: activeModalCourse.accentColor,
                  borderColor: `${activeModalCourse.accentColor}50`,
                  backgroundColor: `${activeModalCourse.accentColor}18`,
                }}
              >
                {activeModalCourse.track}
              </span>

              {activeModalCourse.isLive && (
                <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full bg-red-500/15 text-red-400 border border-red-500/30">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                  LIVE
                </span>
              )}

              {activeModalCourse.badge && (
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-400/15 text-amber-300 border border-amber-400/30">
                  {activeModalCourse.badge}
                </span>
              )}
            </div>

            {/* Course Title */}
            <h3
              id="course-modal-title"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.12] mb-2"
              style={{ fontFamily: "'Tomato Grotesk', -apple-system, sans-serif" }}
            >
              {activeModalCourse.title}
            </h3>

            {/* Sub Title / Tagline */}
            <p
              className="text-lg sm:text-xl text-sky-400 font-bold mb-4"
              style={{ fontFamily: "'Tomato Grotesk', -apple-system, sans-serif" }}
            >
              {activeModalCourse.tagline}
            </p>

            {/* Full Course Description */}
            <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-3xl mb-6">
              {activeModalCourse.description}
            </p>

            {/* Course Thumbnail Banner */}
            {activeModalCourse.thumbnail && (
              <div
                className="relative mb-8 rounded-[24px] sm:rounded-[30px] overflow-hidden aspect-[16/9] sm:aspect-[16/10] max-h-[380px] bg-black/50 border shadow-2xl transition-all duration-300"
                style={{ borderColor: `${activeModalCourse.accentColor}40` }}
              >
                <img
                  src={activeModalCourse.thumbnail}
                  alt={activeModalCourse.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-xs text-white font-bold">
                    <Sparkles size={14} className="text-amber-400" />
                    Official Live Course Masterclass
                  </div>
                  <span
                    className="text-xs font-mono font-bold px-3 py-1 rounded-full border shadow-sm"
                    style={{
                      color: "#ffffff",
                      backgroundColor: `${activeModalCourse.accentColor}dd`,
                      borderColor: activeModalCourse.accentColor,
                    }}
                  >
                    {activeModalCourse.track} &bull; Live Bootcamp &bull; 2026
                  </span>
                </div>
              </div>
            )}

            {/* Quick Badges Row */}
            <div className="flex flex-wrap items-center gap-2 mb-8">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-1.5 rounded-full bg-white/10 text-white border border-white/10">
                <GraduationCap size={14} className="text-sky-400" />
                {activeModalCourse.level}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-1.5 rounded-full bg-white/10 text-white border border-white/10">
                <Radio size={14} className="text-red-400" />
                {activeModalCourse.duration}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-1.5 rounded-full bg-white/10 text-white border border-white/10">
                <Video size={14} className="text-amber-400" />
                {activeModalCourse.sessions}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-1.5 rounded-full bg-white/10 text-white border border-white/10">
                <CheckCircle2 size={14} className="text-emerald-400" />
                Support Included
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-1.5 rounded-full bg-white/10 text-white border border-white/10">
                <Sparkles size={14} className="text-purple-400" />
                Course Preview
              </span>
            </div>

            {/*
              ADMISSION DEADLINE & PRICING HERO CARD:
              Contains:
              - LIVE badge
              - Admission Deadline countdown timer: 00 Days : 00 Hrs : 00 Mins : 00 Secs
              - Price: ৳6,000
              - Rating: 4.9/5
              - Limited Time Offer
              - 4 Key Guarantees
              - Action buttons: Enroll & Pay Now | Curriculum দেখুন | নতুন ব্যাচে জয়েন করতে নক দিন
            */}
            <div className="rounded-[28px] sm:rounded-[32px] p-5 sm:p-7 md:p-8 bg-gradient-to-br from-sky-950/40 via-black/60 to-purple-950/30 border border-sky-400/30 shadow-2xl mb-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-white/10">
                {/* Left: Admission Countdown */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                    <span
                      className="text-xs uppercase tracking-widest font-bold text-red-400"
                      style={{ fontFamily: "'Tomato Grotesk', -apple-system, sans-serif" }}
                    >
                      Admission Deadline
                    </span>
                  </div>

                  {/* Countdown Timer Display */}
                  <div className="flex items-center gap-2 sm:gap-3 text-center">
                    <div className="bg-black/60 border border-white/15 rounded-xl px-2.5 sm:px-3 py-1.5">
                      <span className="text-lg sm:text-2xl font-mono font-bold text-white block">
                        {timeLeft.days}
                      </span>
                      <span className="text-[10px] uppercase text-white/50 block font-medium">
                        Days
                      </span>
                    </div>
                    <span className="text-white/60 font-bold text-lg">:</span>
                    <div className="bg-black/60 border border-white/15 rounded-xl px-2.5 sm:px-3 py-1.5">
                      <span className="text-lg sm:text-2xl font-mono font-bold text-white block">
                        {timeLeft.hours}
                      </span>
                      <span className="text-[10px] uppercase text-white/50 block font-medium">
                        Hrs
                      </span>
                    </div>
                    <span className="text-white/60 font-bold text-lg">:</span>
                    <div className="bg-black/60 border border-white/15 rounded-xl px-2.5 sm:px-3 py-1.5">
                      <span className="text-lg sm:text-2xl font-mono font-bold text-white block">
                        {timeLeft.minutes}
                      </span>
                      <span className="text-[10px] uppercase text-white/50 block font-medium">
                        Mins
                      </span>
                    </div>
                    <span className="text-white/60 font-bold text-lg">:</span>
                    <div className="bg-black/60 border border-white/15 rounded-xl px-2.5 sm:px-3 py-1.5">
                      <span className="text-lg sm:text-2xl font-mono font-bold text-sky-400 block">
                        {timeLeft.seconds}
                      </span>
                      <span className="text-[10px] uppercase text-white/50 block font-medium">
                        Secs
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right: Fee and Rating */}
                <div className="md:text-right">
                  <div className="flex items-center md:justify-end gap-2 mb-1">
                    <span
                      className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
                      style={{ fontFamily: "'Tomato Grotesk', -apple-system, sans-serif" }}
                    >
                      {activeModalCourse.price}
                    </span>
                    {activeModalCourse.originalPrice && (
                      <span className="text-sm text-white/40 line-through">
                        {activeModalCourse.originalPrice}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center md:justify-end gap-2">
                    <div className="flex items-center gap-1 text-xs font-bold text-amber-400">
                      <Star size={14} className="fill-amber-400 text-amber-400" />
                      <span>{activeModalCourse.rating}</span>
                    </div>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 font-bold border border-amber-400/30">
                      Limited Time Offer
                    </span>
                  </div>
                </div>
              </div>

              {/* Guarantees List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-5 border-b border-white/10 font-['Hind_Siliguri',sans-serif]">
                {activeModalCourse.guarantees.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 text-xs sm:text-sm text-white/90"
                  >
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons inside Admission Box */}
              <div className="pt-5 flex flex-wrap items-center gap-3">
                <Button
                  onClick={() => setShowEnrollPaymentModal(true)}
                  className="bg-sky-500 hover:bg-sky-400 text-black font-bold px-6 h-12 rounded-full cursor-pointer shadow-lg shadow-sky-500/25 transition-all text-sm"
                  style={{ fontFamily: "'Tomato Grotesk', -apple-system, sans-serif" }}
                >
                  <Sparkles size={16} className="mr-2" />
                  Enroll &amp; Pay Now
                </Button>

                <Button
                  variant="outline"
                  onClick={scrollToCurriculum}
                  className="border-white/20 text-white hover:bg-white/10 rounded-full h-12 px-5 text-sm font-bold font-['Hind_Siliguri',sans-serif]"
                >
                  <BookOpen size={16} className="mr-2" />
                  Curriculum দেখুন
                </Button>

                <Button
                  variant="ghost"
                  asChild
                  className="text-white/80 hover:text-white hover:bg-white/10 rounded-full h-12 px-5 text-sm font-bold font-['Hind_Siliguri',sans-serif] ml-auto"
                >
                  <Link to="/contact">
                    <PhoneCall size={16} className="mr-2 text-emerald-400" />
                    নতুন ব্যাচে জয়েন করতে নক দিন
                  </Link>
                </Button>
              </div>
            </div>

            {/*
              SECTION 1: COURSE OVERVIEW — এই কোর্সটি কাদের জন্য?
            */}
            <section className="mb-10">
              <div className="mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-sky-400 mb-2">
                  <Flame size={13} />
                  <span
                    className="font-bold uppercase tracking-wider text-[11px]"
                    style={{ fontFamily: "'Tomato Grotesk', -apple-system, sans-serif" }}
                  >
                    Course Overview
                  </span>
                </div>
                <h4 className="text-2xl sm:text-3xl font-bold text-white font-['Hind_Siliguri',sans-serif]">
                  {activeModalCourse.audienceHeading}
                </h4>
                <p className="text-sm sm:text-base text-white/75 mt-2 font-['Hind_Siliguri',sans-serif] leading-relaxed">
                  {activeModalCourse.audienceIntro}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
                {activeModalCourse.targetAudience.map((audience, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-sky-400/40 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mb-3 font-bold">
                      0{idx + 1}
                    </div>
                    <h5
                      className="text-base sm:text-lg font-bold text-white mb-2"
                      style={{ fontFamily: "'Tomato Grotesk', -apple-system, sans-serif" }}
                    >
                      {audience.title}
                    </h5>
                    <p className="text-xs sm:text-sm text-white/70 font-['Hind_Siliguri',sans-serif] leading-relaxed">
                      {audience.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/*
              SECTION 2: LEARNING OUTCOMES — এই কোর্সে আপনি কী কী শিখবেন
            */}
            <section className="mb-10">
              <div className="mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-emerald-400 mb-2">
                  <Award size={13} />
                  <span
                    className="font-bold uppercase tracking-wider text-[11px]"
                    style={{ fontFamily: "'Tomato Grotesk', -apple-system, sans-serif" }}
                  >
                    Learning Outcomes
                  </span>
                </div>
                <h4 className="text-2xl sm:text-3xl font-bold text-white font-['Hind_Siliguri',sans-serif]">
                  {activeModalCourse.outcomesHeading}
                </h4>
                <p className="text-sm sm:text-base text-white/75 mt-2 font-['Hind_Siliguri',sans-serif] leading-relaxed">
                  {activeModalCourse.outcomesIntro}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-5">
                {activeModalCourse.learningOutcomes.map((outcome, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-emerald-400/40 transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                          Skill #{idx + 1}
                        </span>
                        <CheckCircle2 size={16} className="text-emerald-400" />
                      </div>
                      <h5
                        className="text-base sm:text-lg font-bold text-white mb-2 leading-snug"
                        style={{ fontFamily: "'Tomato Grotesk', -apple-system, sans-serif" }}
                      >
                        {outcome.title}
                      </h5>
                    </div>
                    <p className="text-xs sm:text-sm text-white/70 font-['Hind_Siliguri',sans-serif] leading-relaxed mt-2">
                      {outcome.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/*
              SECTION 3: DETAILED STRUCTURE — COURSE CURRICULUM
            */}
            <section ref={curriculumSectionRef} className="mb-10 scroll-mt-20">
              <div className="mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-sky-400 mb-2">
                  <BookOpen size={13} />
                  <span
                    className="font-bold uppercase tracking-wider text-[11px]"
                    style={{ fontFamily: "'Tomato Grotesk', -apple-system, sans-serif" }}
                  >
                    Detailed Structure
                  </span>
                </div>
                <h4
                  className="text-2xl sm:text-3xl font-bold text-white"
                  style={{ fontFamily: "'Tomato Grotesk', -apple-system, sans-serif" }}
                >
                  {activeModalCourse.curriculumHeading}
                </h4>
                <p className="text-sm sm:text-base text-white/75 mt-2 font-['Hind_Siliguri',sans-serif] leading-relaxed">
                  {activeModalCourse.curriculumIntro}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                {activeModalCourse.curriculum.map((mod) => (
                  <div
                    key={mod.number}
                    className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-sky-400/40 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 mb-3">
                      <span className="text-xs font-mono font-bold text-sky-400 bg-sky-500/10 px-2.5 py-1 rounded-lg border border-sky-500/20">
                        Module {mod.number}
                      </span>
                      <h5
                        className="text-base sm:text-lg font-bold text-white"
                        style={{ fontFamily: "'Tomato Grotesk', -apple-system, sans-serif" }}
                      >
                        {mod.title}
                      </h5>
                    </div>
                    <ul className="space-y-2 mt-3 pl-1 font-['Hind_Siliguri',sans-serif]">
                      {mod.topics.map((topic, tIdx) => (
                        <li
                          key={tIdx}
                          className="flex items-start gap-2 text-xs sm:text-sm text-white/80 leading-relaxed"
                        >
                          <span className="text-sky-400 font-bold mt-0.5">•</span>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/*
              SECTION 4: OFFER VALUE — এই কোর্সের সাথে আপনি আর কী কী পাবেন
            */}
            <section className="mb-10">
              <div className="mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-purple-400 mb-2">
                  <Sparkles size={13} />
                  <span
                    className="font-bold uppercase tracking-wider text-[11px]"
                    style={{ fontFamily: "'Tomato Grotesk', -apple-system, sans-serif" }}
                  >
                    Offer Value
                  </span>
                </div>
                <h4 className="text-2xl sm:text-3xl font-bold text-white font-['Hind_Siliguri',sans-serif]">
                  {activeModalCourse.offerValueHeading}
                </h4>
                <p className="text-sm sm:text-base text-white/75 mt-2 font-['Hind_Siliguri',sans-serif] leading-relaxed">
                  {activeModalCourse.offerValueIntro}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
                {activeModalCourse.offerValues.map((val, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-gradient-to-b from-white/[0.04] to-purple-950/20 border border-purple-400/20 hover:border-purple-400/50 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-3 font-bold">
                      <FolderCheck size={20} />
                    </div>
                    <h5
                      className="text-base sm:text-lg font-bold text-white mb-2"
                      style={{ fontFamily: "'Tomato Grotesk', -apple-system, sans-serif" }}
                    >
                      {val.title}
                    </h5>
                    <p className="text-xs sm:text-sm text-white/75 font-['Hind_Siliguri',sans-serif] leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/*
              SECTION 5: MEET YOUR MENTOR — INSTRUCTOR
            */}
            <section className="mb-10">
              <div className="mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-amber-400 mb-2">
                  <Users size={13} />
                  <span
                    className="font-bold uppercase tracking-wider text-[11px]"
                    style={{ fontFamily: "'Tomato Grotesk', -apple-system, sans-serif" }}
                  >
                    Meet Your Mentor
                  </span>
                </div>
                <h4
                  className="text-2xl sm:text-3xl font-bold text-white"
                  style={{ fontFamily: "'Tomato Grotesk', -apple-system, sans-serif" }}
                >
                  Instructor Profile
                </h4>
              </div>

              <div className="rounded-3xl p-6 sm:p-8 bg-white/[0.03] border border-white/15 flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-tr from-sky-600 via-indigo-600 to-amber-500 flex items-center justify-center text-white text-2xl sm:text-3xl font-bold shrink-0 shadow-lg border border-white/20">
                  SS
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded-full border border-amber-400/30">
                      {activeModalCourse.mentor.role}
                    </span>
                  </div>
                  <h5
                    className="text-2xl sm:text-3xl font-bold text-white"
                    style={{ fontFamily: "'Tomato Grotesk', -apple-system, sans-serif" }}
                  >
                    {activeModalCourse.mentor.name}
                  </h5>
                  <p className="text-sm font-semibold text-sky-400 mt-0.5">
                    {activeModalCourse.mentor.designation}
                  </p>
                  <p className="text-xs sm:text-sm text-white/70 mt-3 font-['Hind_Siliguri',sans-serif] leading-relaxed max-w-2xl">
                    {activeModalCourse.mentor.bio}
                  </p>
                </div>
              </div>
            </section>

            {/* Bottom Actions Bar */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-3">
              <Button
                onClick={() => setShowEnrollPaymentModal(true)}
                className="bg-sky-500 hover:bg-sky-400 text-black font-bold px-7 h-12 rounded-full cursor-pointer shadow-lg shadow-sky-500/20 text-sm"
                style={{ fontFamily: "'Tomato Grotesk', -apple-system, sans-serif" }}
              >
                Enroll &amp; Pay Now ({activeModalCourse.price})
              </Button>

              <Button
                variant="outline"
                asChild
                className="border-white/20 text-white hover:bg-white/10 rounded-full h-12 px-6 text-sm font-['Hind_Siliguri',sans-serif]"
              >
                <Link to="/contact">নতুন ব্যাচে জয়েন করতে নক দিন</Link>
              </Button>

              <Button
                variant="ghost"
                onClick={() => setActiveModalCourse(null)}
                className="text-white/60 hover:text-white rounded-full h-12 ml-auto"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}

      {/*
        ENROLLMENT & PAYMENT MODAL:
        Step-by-step payment instructions with bKash / Nagad / Bank transfer guidance
      */}
      {showEnrollPaymentModal && activeModalCourse && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setShowEnrollPaymentModal(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="
              relative w-full max-w-lg rounded-[32px]
              bg-[#0e111a] border border-sky-400/40
              shadow-[0_24px_80px_rgba(0,0,0,0.9)]
              p-6 sm:p-8 text-left
              animate-in zoom-in-95 duration-200
            "
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowEnrollPaymentModal(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold">
                Direct Enrollment
              </span>
            </div>

            <h4
              className="text-2xl font-bold text-white mb-1"
              style={{ fontFamily: "'Tomato Grotesk', -apple-system, sans-serif" }}
            >
              Enroll &amp; Pay Now
            </h4>
            <p className="text-xs text-white/70 mb-5 font-['Hind_Siliguri',sans-serif]">
              কোর্স ফি: <strong className="text-white">{activeModalCourse.price}</strong> |
              প্রোগ্রাম: {activeModalCourse.title}
            </p>

            <div className="space-y-3 font-['Hind_Siliguri',sans-serif] text-xs sm:text-sm text-white/85">
              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10">
                <span className="text-xs font-bold text-pink-400 uppercase tracking-wider block mb-1">
                  বিকাশ (bKash Send Money)
                </span>
                <p className="font-mono text-base font-bold text-white">01XXXXXXXXX</p>
                <p className="text-xs text-white/50 mt-1">
                  রেফারেন্সে আপনার নাম ও ফোন নম্বর লিখুন।
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10">
                <span className="text-xs font-bold text-orange-400 uppercase tracking-wider block mb-1">
                  নগদ (Nagad Send Money)
                </span>
                <p className="font-mono text-base font-bold text-white">01XXXXXXXXX</p>
                <p className="text-xs text-white/50 mt-1">
                  টাকা পাঠানোর পর ট্রানজ্যাকশন আইডি সংরক্ষণ করুন।
                </p>
              </div>
            </div>

            {enrolledSuccessNotice && (
              <div className="mt-4 p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
                <Check size={16} />
                <span>{enrolledSuccessNotice}</span>
              </div>
            )}

            <div className="mt-6 flex flex-col gap-2.5">
              <Button
                onClick={() => {
                  setEnrolledSuccessNotice(
                    "পেমেন্ট নিশ্চিতকরণ মেসেজ রেকর্ড করা হয়েছে! দ্রুত কাউন্সেলরের সাথে কথা বলে ব্যাচ কনফার্ম করুন।",
                  );
                }}
                className="w-full bg-sky-500 hover:bg-sky-400 text-black font-bold h-11 rounded-full cursor-pointer text-sm"
                style={{ fontFamily: "'Tomato Grotesk', -apple-system, sans-serif" }}
              >
                পেমেন্ট সম্পন্ন করেছি (Confirm Trx)
              </Button>

              <Button
                variant="outline"
                asChild
                className="w-full border-white/20 text-white hover:bg-white/10 h-11 rounded-full text-xs font-['Hind_Siliguri',sans-serif]"
              >
                <Link to="/contact">কাউন্সেলরের সাথে সরাসরি কথা বলুন</Link>
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Site Footer matching homepage & portfolio */}
      <footer className="site-footer">
        <Link to="/" className="wordmark" activeOptions={{ exact: true }}>
          Sabbir Sakib<span className="brand-dot">.</span>
        </Link>
        <span>© 2026 Sabbir Sakib</span>
        <Link to="/contact">
          Let’s connect <ArrowUpRight size={16} />
        </Link>
      </footer>
    </div>
  );
}
