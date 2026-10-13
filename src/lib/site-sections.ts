import {
  BookOpen,
  Wrench,
  Layers3,
  NotebookPen,
  Send,
  Briefcase,
  GraduationCap,
  User,
  HeartHandshake,
  LucideIcon,
} from "lucide-react";

export interface SiteSection {
  slug: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  tone: string;
  label: string;
}

export const heroSections: readonly SiteSection[] = [
  {
    slug: "books",
    title: "Books",
    subtitle: "পড়ার জগৎ",
    icon: BookOpen,
    tone: "books",
    label: "Read & discover",
  },
  {
    slug: "tools",
    title: "Tools",
    subtitle: "কাজ হোক সহজ",
    icon: Wrench,
    tone: "tools",
    label: "Create & simplify",
  },
  {
    slug: "projects",
    title: "Projects",
    subtitle: "ভাবনা থেকে বাস্তবে",
    icon: Layers3,
    tone: "projects",
    label: "Explore & build",
  },
  {
    slug: "blog",
    title: "Blog",
    subtitle: "ভাবনা ও গল্প",
    icon: NotebookPen,
    tone: "blog",
    label: "Ideas & stories",
  },
  {
    slug: "contact",
    title: "Contact",
    subtitle: "চলো কথা বলি",
    icon: Send,
    tone: "contact",
    label: "Let’s connect",
  },
] as const;

export const additionalNavSections: readonly SiteSection[] = [
  {
    slug: "portfolio",
    title: "Portfolio",
    subtitle: "আমার কাজ ও অভিজ্ঞতা",
    icon: Briefcase,
    tone: "projects",
    label: "Works & Creations",
  },
  {
    slug: "course",
    title: "Course",
    subtitle: "শেখার প্ল্যাটফর্ম ও ক্লাস",
    icon: GraduationCap,
    tone: "tools",
    label: "Learn & Grow",
  },
  {
    slug: "about",
    title: "About",
    subtitle: "আমার গল্প ও দর্শন",
    icon: User,
    tone: "blog",
    label: "Story & Vision",
  },
  {
    slug: "thankful",
    title: "Thankful",
    subtitle: "কৃতজ্ঞতা ও অনুপ্রেরণা",
    icon: HeartHandshake,
    tone: "books",
    label: "Gratitude & Mentors",
  },
] as const;

export const sections: readonly SiteSection[] = [
  ...heroSections,
  ...additionalNavSections,
] as const;

export interface NavItem {
  label: string;
  to: string;
  params?: Record<string, string>;
}

export const navItems: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Course", to: "/course" },
  { label: "About", to: "/about" },
  { label: "Thankful", to: "/thankful" },
  { label: "Contact", to: "/contact" },
];
