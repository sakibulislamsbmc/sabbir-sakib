import { useState, useRef } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Download,
  Mail,
  ShieldCheck,
  Calendar,
  Briefcase,
  GraduationCap,
  Award,
  Layers,
  Volume2,
  ExternalLink,
  X,
  FileText,
  Printer,
  Upload,
  Eye,
} from "lucide-react";
import { Header } from "@/components/site/header";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { SpaceMotionOverlay } from "@/components/site/space-motion-overlay";
import horizon from "@/assets/space-horizon.jpg";
import { Icon3DGraphicDesign, Icon3DVideoEditing } from "@/components/portfolio/icons-3d";
import {
  Icon3DAfterEffects,
  Icon3DPremierePro,
  Icon3DCapCut,
  Icon3DMotionGraphicsSkill,
  Icon3DColorGradingSkill,
  Icon3DEducation,
  Icon3DHalalStandard,
} from "@/components/about/about-icons-3d";
import { useIsMobile } from "@/hooks/use-mobile";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: "Sakibul Islam Sabbir · Est. 2024 — Motion Designer & Video Editor | About",
      },
      {
        name: "description",
        content:
          "Hi, I'm Sakibul Islam Sabbir — a passionate motion designer & video editor from Bangladesh. 4+ years crafting kinetic typography, motion graphics, and high-retention video stories.",
      },
      {
        property: "og:title",
        content: "Sakibul Islam Sabbir · Est. 2024 — Motion Designer & Video Editor | About",
      },
      {
        property: "og:description",
        content:
          "Hi, I'm Sakibul Islam Sabbir — a passionate motion designer & video editor from Bangladesh. 4+ years crafting kinetic typography, motion graphics, and high-retention video stories.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

// Day-to-Day Creative Tools
interface ToolItem {
  key: string;
  short: string;
  name: string;
  tagline: string;
  accentColor: string;
  glowColor: string;
  icon: typeof Icon3DAfterEffects;
}

const CREATIVE_TOOLS: ToolItem[] = [
  {
    key: "ae",
    short: "Ae",
    name: "After Effects",
    tagline: "Kinetic typography, VFX & complex 2D/3D motion graphics",
    accentColor: "#9999ff",
    glowColor: "rgba(153, 153, 255, 0.45)",
    icon: Icon3DAfterEffects,
  },
  {
    key: "pr",
    short: "Pr",
    name: "Premiere Pro",
    tagline: "Story-driven pacing, dynamic commercial cutting & sound design",
    accentColor: "#ea7af4",
    glowColor: "rgba(234, 122, 244, 0.45)",
    icon: Icon3DPremierePro,
  },
  {
    key: "cc",
    short: "Cc",
    name: "CapCut",
    tagline: "Ultra-fast social reels, TikTok pacing & trending virality",
    accentColor: "#22d3ee",
    glowColor: "rgba(34, 211, 238, 0.45)",
    icon: Icon3DCapCut,
  },
];

// Skills & Expertise Data
interface SkillItem {
  id: string;
  index: string;
  title: string;
  percentage: number;
  description: string;
  accentColor: string;
  icon: typeof Icon3DMotionGraphicsSkill;
}

const SKILLS_DATA: SkillItem[] = [
  {
    id: "motion-graphics",
    index: "01",
    title: "Motion Graphics",
    percentage: 85,
    description: "2D/3D animation & kinetic typography",
    accentColor: "#38bdf8",
    icon: Icon3DMotionGraphicsSkill,
  },
  {
    id: "after-effects",
    index: "02",
    title: "After Effects",
    percentage: 80,
    description: "Advanced motion graphics, animation & VFX",
    accentColor: "#818cf8",
    icon: Icon3DAfterEffects,
  },
  {
    id: "video-editing",
    index: "03",
    title: "Video Editing",
    percentage: 80,
    description: "Story-driven editing & pacing",
    accentColor: "#f43f5e",
    icon: Icon3DVideoEditing,
  },
  {
    id: "premiere-pro",
    index: "04",
    title: "Premiere Pro",
    percentage: 75,
    description: "Professional editing & color grading",
    accentColor: "#c084fc",
    icon: Icon3DPremierePro,
  },
  {
    id: "color-grading",
    index: "05",
    title: "Color Grading",
    percentage: 70,
    description: "Cinematic looks & color correction",
    accentColor: "#fbbf24",
    icon: Icon3DColorGradingSkill,
  },
  {
    id: "capcut",
    index: "06",
    title: "CapCut",
    percentage: 60,
    description: "Fast-paced social media content",
    accentColor: "#2dd4bf",
    icon: Icon3DCapCut,
  },
];

// Experience Data
interface ExperienceItem {
  id: string;
  period: string;
  badge?: string;
  title: string;
  company: string;
  summary: string;
  bullets: string[];
  accentColor: string;
}

const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "ononno",
    period: "April 2026 — Present",
    badge: "Now",
    title: "Junior Executive",
    company: "Ononno.com",
    summary:
      "I create video content and motion graphics for Ononno's digital platforms — product stories, promotional videos and quick-turnaround social content, working with the creative team every day.",
    bullets: [
      "Video editing & motion design for brand campaigns",
      "Fast-turnaround social media content",
      "Collaborating daily with the creative team",
    ],
    accentColor: "#10b981",
  },
  {
    id: "creative-studio",
    period: "July 2025 — March 2026",
    title: "Senior Motion Designer & Video Editor",
    company: "Creative Studio / Agency",
    summary:
      "Led creative projects end to end — from concept and motion design to final delivery — while mentoring junior editors and tightening the studio's production workflow.",
    bullets: [
      "Led high-end commercial video production",
      "Advanced motion graphics and visual effects",
      "Team leadership and project management",
    ],
    accentColor: "#8b5cf6",
  },
  {
    id: "ajwah",
    period: "July 2024 — July 2025",
    title: "Video Editor",
    company: "Ajwah Global Corporation",
    summary:
      "Produced promotional and corporate videos, owning post-production from the first cut through color grading and sound design.",
    bullets: [
      "Corporate video production and editing",
      "Social media content strategy compliance",
      "Color grading and audio enhancement",
    ],
    accentColor: "#38bdf8",
  },
  {
    id: "freelance",
    period: "Ongoing",
    badge: "Active",
    title: "Freelance Motion Designer & Video Editor",
    company: "Local & International Market",
    summary:
      "Ongoing work for clients at home and abroad — branded content, kinetic typography and high-retention social reels, delivered on deadline.",
    bullets: [
      "Served 50+ local and international clients",
      "Specialized in Reels, Shorts and ads",
      "Consistent 5-star client satisfaction",
    ],
    accentColor: "#f59e0b",
  },
];

// Education Data
interface EducationItem {
  id: string;
  period: string;
  degree: string;
  institution: string;
  description: string;
  accentColor: string;
}

const EDUCATION_DATA: EducationItem[] = [
  {
    id: "hsc",
    period: "2025 — 2027",
    degree: "HSC — Higher Secondary Certificate",
    institution: "Govt Tolaram College, Narayanganj",
    description:
      "Pursuing Higher Secondary Certificate in Business Studies. Active participant in creative clubs, audiovisual workshops, and media societies.",
    accentColor: "#06b6d4",
  },
  {
    id: "ssc",
    period: "2022 — 2024",
    degree: "SSC — Secondary School Certificate",
    institution: "TalukderPara Govt Secondary High School",
    description:
      "Completed secondary school certificate with distinction (GPA 5.00). Built solid foundational skills in computer science, design principles, and visual communications.",
    accentColor: "#10b981",
  },
  {
    id: "diploma-motion",
    period: "2023 — 2024",
    degree: "Diploma in Commercial Motion Design & Post-Production",
    institution: "Digital Media Arts Institute",
    description:
      "Hands-on professional training in keyframing, timeline pacing, kinetic typography, cinematic color LUTs, and studio audio mastering.",
    accentColor: "#a855f7",
  },
];

// Courses & Certifications Data
interface CertificationItem {
  id: string;
  title: string;
  instructor: string;
  year: string;
  accentColor: string;
}

const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: "cert-ae",
    title: "Advance After Effects",
    instructor: "Jake in Motion",
    year: "2025",
    accentColor: "#818cf8",
  },
  {
    id: "cert-3d",
    title: "3D Motion Graphic",
    instructor: "Karm Visuals",
    year: "2024",
    accentColor: "#f43f5e",
  },
  {
    id: "cert-ve",
    title: "Basic to Advance Video Editing",
    instructor: "Nazmul Huda Sir (As-Sunnah)",
    year: "2024",
    accentColor: "#10b981",
  },
  {
    id: "cert-mg",
    title: "Basic to Advance Motion Graphic",
    instructor: "Nazmul Huda Sir",
    year: "2024",
    accentColor: "#38bdf8",
  },
];

function AboutPage() {
  const [activeTool, setActiveTool] = useState<string | null>(null);
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [uploadedPdfUrl, setUploadedPdfUrl] = useState<string | null>(null);
  const [uploadedPdfName, setUploadedPdfName] = useState<string | null>(null);
  const [activeCvView, setActiveCvView] = useState<"formatted" | "pdf">("formatted");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const isMobile = useIsMobile();

  const handlePdfUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && (file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf"))) {
      const url = URL.createObjectURL(file);
      setUploadedPdfUrl(url);
      setUploadedPdfName(file.name);
      setActiveCvView("pdf");
    }
  };

  const handlePrintCV = () => {
    window.print();
  };

  const handleDownloadCV = () => {
    // Generate text/markdown formatted resume for direct download
    const cvContent = `SAKIBUL ISLAM SABBIR · EST. 2024
Motion Designer & Video Editor
Email: sakibulislamsbmc@gmail.com
Location: Bangladesh

SUMMARY
Passionate motion designer and video editor with 4+ years of hands-on experience turning raw footage and briefs into high-retention videos people actually finish watching. Over 50+ satisfied clients locally and internationally.

ETHICAL WORK PRINCIPLE
Work stays 100% halal. No haram music; energy is built with clean sound design. No projects involving betting, alcohol, or adult/objectifying content.

DAY-TO-DAY TOOLS
- Adobe After Effects (Kinetic typography, VFX, 2D/3D motion graphics)
- Adobe Premiere Pro (Story-driven pacing, commercial cutting, sound design)
- CapCut (Fast-paced social media content, viral reels)

SKILLS & EXPERTISE
- Motion Graphics: 85% (2D/3D animation & kinetic typography)
- After Effects: 80% (Advanced motion graphics, animation & VFX)
- Video Editing: 80% (Story-driven editing & pacing)
- Premiere Pro: 75% (Professional editing & color grading)
- Color Grading: 70% (Cinematic looks & color correction)
- CapCut: 60% (Fast-paced social media content)

WORK EXPERIENCE
1. Junior Executive — Ononno.com (April 2026 — Present)
   - Video content & motion graphics for digital platforms
   - Brand campaigns & fast-turnaround social media content
   - Daily collaboration with creative teams

2. Senior Motion Designer & Video Editor — Creative Studio / Agency (July 2025 — March 2026)
   - Led commercial video production end-to-end
   - Advanced motion graphics and visual effects
   - Mentored junior editors and tightened production workflow

3. Video Editor — Ajwah Global Corporation (July 2024 — July 2025)
   - Produced promotional and corporate videos
   - Owned post-production, color grading, and audio enhancement

4. Freelance Motion Designer & Video Editor — Local & International Market (Ongoing)
   - 50+ happy clients worldwide with 5-star feedback
   - High-retention Reels, YouTube edits, and branded ads

EDUCATION
- HSC (2025 — 2027): Govt Tolaram College (Business Studies)
- SSC (2022 — 2024): TalukderPara Govt Secondary High School

COURSES & CERTIFICATIONS
- Advance After Effects — Jake in Motion (2025)
- 3D Motion Graphic — Karm Visuals (2024)
- Basic to Advance Video Editing — Nazmul Huda Sir (As-Sunnah, 2024)
- Basic to Advance Motion Graphic — Nazmul Huda Sir (2024)
`;

    const blob = new Blob([cvContent], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Sakibul_Islam_Sabbir_CV.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="site-shell">
      {/* Top Centered Navigation Bar */}
      <Header />

      <main>
        {/*
          HERO & BIOGRAPHY SECTION:
          Replicating the exact UI design used on the portfolio page:
          - horizon background image with breathing animation
          - hero-shade gradient overlay
          - SpaceMotionOverlay with floating 3D tech drift geometry & splines
          - Dual starfield layers (stars-one and stars-two)
          - Rounded rectangular shapes with transparent UI elements
          - 3D icons customized to the creative disciplines
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
          <div className="hero-content portfolio-hero-content max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 pt-8 md:pt-14 pb-20">
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
            <div className="hero-eyebrow mb-6">
              <span className="status-dot" />{" "}
              <span
                className="golden-text-shimmer font-bold tracking-widest uppercase text-xs"
                style={{ fontFamily: "'Tomato Grotesk', -apple-system, sans-serif" }}
              >
                Sakibul Islam Sabbir &bull; Est. 2024
              </span>
            </div>

            {/* EXACT TITLE */}
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] mb-6 max-w-4xl mx-auto"
              style={{ fontFamily: "'Tomato Grotesk', -apple-system, sans-serif" }}
            >
              Hi, I'm Sakibul Islam Sabbir — a passionate motion designer &amp; video editor
              <span className="title-period text-[#0ba360]">.</span>
            </h1>

            {/* Story / Biography Card in rounded rectangle transparent UI */}
            <div className="max-w-4xl mx-auto mb-10 text-left">
              <div className="rounded-[32px] sm:rounded-[38px] border border-white/10 bg-white/[0.035] backdrop-blur-2xl p-6 sm:p-9 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.45)] relative overflow-hidden">
                {/* Decorative corner glow */}
                <div
                  className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none opacity-20 filter blur-3xl -mr-20 -mt-20"
                  style={{
                    background: "radial-gradient(circle, #38bdf8 0%, #8b5cf6 50%, transparent 80%)",
                  }}
                  aria-hidden="true"
                />

                <div className="relative z-10 space-y-4 sm:space-y-5 text-white/85 text-base sm:text-lg leading-relaxed">
                  <p className="font-normal">
                    I'm a motion designer and video editor from Bangladesh. Over the last four years
                    I've worked with brands, agencies and creators to turn raw footage and rough
                    briefs into videos people actually finish watching.
                  </p>

                  <p className="font-normal text-white/80">
                    My day-to-day tools are After Effects, Premiere Pro and CapCut. Depending on the
                    brief, that means kinetic typography for an ad, clean motion graphics for a
                    product story, or the pacing and sound design that carry a long-form YouTube
                    video.
                  </p>

                  <p className="font-normal text-white/80">
                    I've delivered work for more than fifty clients at home and abroad, and I keep
                    one simple standard: every project should be something the client is proud to
                    publish — and something I'd put my own name on.
                  </p>

                  {/* Halal Principles & Standards Callout */}
                  <div className="mt-6 pt-5 border-t border-white/10">
                    <div className="flex flex-col sm:flex-row items-start gap-4 p-4 sm:p-5 rounded-[22px] bg-emerald-950/30 border border-emerald-500/30">
                      <div className="shrink-0 mt-0.5">
                        <Icon3DHalalStandard className="w-12 h-12 sm:w-14 sm:h-14 drop-shadow-[0_4px_16px_rgba(16,185,129,0.35)]" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span
                            className="text-xs font-bold uppercase tracking-wider text-emerald-400"
                            style={{ fontFamily: "'Tomato Grotesk', -apple-system, sans-serif" }}
                          >
                            Uncompromising Ethical Standard
                          </span>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono font-semibold">
                            Halal Creative Workflow
                          </span>
                        </div>
                        <p className="text-sm sm:text-[15px] text-emerald-100/90 leading-relaxed font-normal">
                          And one principle I never compromise on: my work stays halal. I don't use
                          haram music in my edits — I build the energy with halal-friendly sound
                          instead — and I respectfully decline projects that promote betting,
                          alcohol, or adult and objectifying content.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*
              DAY-TO-DAY TOOLS:
              Ae (After Effects), Pr (Premiere Pro), Cc (CapCut)
              Presented inside rounded-rectangular shapes featuring transparent UI elements & 3D icons
            */}
            <div className="max-w-4xl mx-auto mb-10 text-left">
              <div className="flex items-center gap-2 mb-4 px-2">
                <Layers size={16} className="text-purple-400" />
                <h3
                  className="text-xs sm:text-sm font-bold tracking-widest uppercase text-white/70"
                  style={{ fontFamily: "'Tomato Grotesk', -apple-system, sans-serif" }}
                >
                  Core Creative Stack &bull; Daily Production Tools
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {CREATIVE_TOOLS.map((tool) => {
                  const IconComp = tool.icon;
                  const isSelected = activeTool === tool.key;

                  return (
                    <div
                      key={tool.key}
                      onClick={() => setActiveTool((prev) => (prev === tool.key ? null : tool.key))}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setActiveTool((prev) => (prev === tool.key ? null : tool.key));
                        }
                      }}
                      className={`
                        group cursor-pointer select-none
                        flex flex-col justify-between
                        p-4 sm:p-5
                        rounded-[28px] sm:rounded-[32px]
                        border transition-all duration-300
                        ${
                          isSelected
                            ? "ring-2 ring-purple-400 shadow-[0_0_30px_rgba(168,85,247,0.35)] -translate-y-1.5 border-purple-400"
                            : "hover:-translate-y-1.5"
                        }
                      `}
                      style={{
                        background: isSelected
                          ? "rgba(168, 85, 247, 0.12)"
                          : "var(--tile-background)",
                        borderColor: isSelected ? tool.accentColor : "var(--tile-border)",
                      }}
                    >
                      <div className="flex items-center gap-3.5 mb-3">
                        {/* 3D App Icon */}
                        <div className="shrink-0 transform transition-transform duration-300 group-hover:scale-105 group-hover:rotate-2">
                          <IconComp className="w-14 h-14 sm:w-16 sm:h-16 drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)]" />
                        </div>

                        <div>
                          <div className="flex items-center gap-1.5">
                            <span
                              className="text-2xl font-extrabold text-white tracking-tight"
                              style={{ fontFamily: "'Tomato Grotesk', -apple-system, sans-serif" }}
                            >
                              {tool.short}
                            </span>
                            <span className="text-[11px] font-mono font-bold text-white/50 px-1.5 py-0.5 rounded-md bg-white/5 border border-white/10">
                              Pro
                            </span>
                          </div>
                          <h4
                            className="text-sm font-bold text-white/90"
                            style={{ fontFamily: "'Tomato Grotesk', -apple-system, sans-serif" }}
                          >
                            {tool.name}
                          </h4>
                        </div>
                      </div>

                      <p className="text-xs text-white/60 leading-relaxed font-medium">
                        {tool.tagline}
                      </p>

                      <div
                        className="h-[2px] w-full rounded-full mt-3.5 transition-all duration-300"
                        style={{
                          background: `linear-gradient(90deg, transparent, ${tool.accentColor}, transparent)`,
                          opacity: isSelected ? 1 : 0.4,
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ACTION BUTTONS: See the Work, View Full CV, Get in Touch, Download CV */}
            <div className="flex flex-wrap items-center justify-center gap-3.5 mb-16">
              <Button
                asChild
                className="rounded-full px-6 py-5 text-sm font-bold bg-white text-black hover:bg-white/90 shadow-[0_0_25px_rgba(255,255,255,0.3)] transition-all transform hover:-translate-y-0.5"
                style={{ fontFamily: "'Tomato Grotesk', -apple-system, sans-serif" }}
              >
                <Link to="/portfolio">
                  See the Work
                  <ArrowUpRight className="ml-2" size={17} />
                </Link>
              </Button>

              <Button
                onClick={() => setCvModalOpen(true)}
                variant="outline"
                className="rounded-full px-6 py-5 text-sm font-bold bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border-cyan-500/30 transition-all transform hover:-translate-y-0.5"
                style={{ fontFamily: "'Tomato Grotesk', -apple-system, sans-serif" }}
              >
                <FileText className="mr-2" size={16} />
                View Full CV
              </Button>

              <Button
                asChild
                variant="outline"
                className="rounded-full px-6 py-5 text-sm font-bold bg-white/5 hover:bg-white/10 text-white border-white/20 transition-all transform hover:-translate-y-0.5"
                style={{ fontFamily: "'Tomato Grotesk', -apple-system, sans-serif" }}
              >
                <Link to="/contact">
                  <Mail className="mr-2" size={16} />
                  Get in Touch
                </Link>
              </Button>

              <Button
                onClick={handleDownloadCV}
                variant="outline"
                className="rounded-full px-6 py-5 text-sm font-bold bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border-emerald-500/30 transition-all transform hover:-translate-y-0.5"
                style={{ fontFamily: "'Tomato Grotesk', -apple-system, sans-serif" }}
              >
                <Download className="mr-2" size={16} />
                Download CV
              </Button>
            </div>

            {/* =========================================================================
                SECTION 1: SKILLS & EXPERTISE
                "What I'm good at."
                01 Motion Graphics (85%)
                02 After Effects (80%)
                03 Video Editing (80%)
                04 Premiere Pro (75%)
                05 Color Grading (70%)
                06 CapCut (60%)
                Inside rounded rectangular shapes with transparent UI and 3D icons
               ========================================================================= */}
            <div className="mt-16 mb-20 text-left">
              {/* Section Heading */}
              <div className="text-center max-w-2xl mx-auto mb-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-wider mb-3">
                  <Sparkles size={13} />
                  <span>Skills &amp; Expertise</span>
                </div>
                <h2
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-2"
                  style={{ fontFamily: "'Tomato Grotesk', -apple-system, sans-serif" }}
                >
                  What I'm good at<span className="text-[#38bdf8]">.</span>
                </h2>
                <p className="text-sm sm:text-base text-white/60">
                  Precision craft developed over 4+ years of hands-on motion design &amp; story
                  editing.
                </p>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1140px] mx-auto">
                {SKILLS_DATA.map((skill) => {
                  const IconComp = skill.icon;
                  return (
                    <div
                      key={skill.id}
                      className="group p-5 sm:p-6 rounded-[30px] sm:rounded-[34px] border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:border-white/25 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                      style={{
                        boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)",
                      }}
                    >
                      <div>
                        {/* Top Row: Sequential index, 3D icon and percentage */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <span
                              className="font-mono font-bold text-sm text-white/40 group-hover:text-white/80 transition-colors"
                              style={{ fontFamily: "'Tomato Grotesk', monospace" }}
                            >
                              {skill.index}
                            </span>
                            <span
                              className="text-xs font-semibold px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/70"
                              style={{ fontFamily: "'Tomato Grotesk', -apple-system, sans-serif" }}
                            >
                              Discipline
                            </span>
                          </div>

                          {/* Skill Percentage Pill */}
                          <div
                            className="px-3 py-1 rounded-full font-mono font-bold text-sm border"
                            style={{
                              background: `${skill.accentColor}18`,
                              borderColor: `${skill.accentColor}40`,
                              color: skill.accentColor,
                            }}
                          >
                            {skill.percentage}%
                          </div>
                        </div>

                        {/* 3D Icon Presentation Frame */}
                        <div className="relative aspect-[1.8] rounded-[22px] bg-black/40 border border-white/10 flex items-center justify-center overflow-hidden mb-4 group-hover:border-white/20 transition-all">
                          <div className="transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-1">
                            <IconComp className="w-20 h-20 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]" />
                          </div>
                          {/* Inner glass highlight */}
                          <div
                            className="absolute inset-0 rounded-[22px] border border-white/15 pointer-events-none"
                            aria-hidden="true"
                          />
                        </div>

                        {/* Title and Description */}
                        <h3
                          className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-1 group-hover:text-white transition-colors"
                          style={{ fontFamily: "'Tomato Grotesk', -apple-system, sans-serif" }}
                        >
                          {skill.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-white/60 font-medium leading-snug">
                          {skill.description}
                        </p>
                      </div>

                      {/* Percentage Bar */}
                      <div className="mt-5 pt-4 border-t border-white/5">
                        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden p-[1px] border border-white/10">
                          <div
                            className="h-full rounded-full transition-all duration-1000"
                            style={{
                              width: `${skill.percentage}%`,
                              background: `linear-gradient(90deg, ${skill.accentColor}90, ${skill.accentColor})`,
                              boxShadow: `0 0 12px ${skill.accentColor}80`,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* =========================================================================
                SECTION 2: EXPERIENCE
                "Where I've worked."
                April 2026 — Present (Junior Executive @ Ononno.com)
                July 2025 — March 2026 (Senior Motion Designer & Video Editor @ Creative Studio / Agency)
                July 2024 — July 2025 (Video Editor @ Ajwah Global Corporation)
                Ongoing (Freelance Motion Designer & Video Editor @ Local & International Market)
               ========================================================================= */}
            <div className="mt-20 mb-20 text-left">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
                  <Briefcase size={13} />
                  <span>Experience</span>
                </div>
                <h2
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-2"
                  style={{ fontFamily: "'Tomato Grotesk', -apple-system, sans-serif" }}
                >
                  Where I've worked<span className="text-[#10b981]">.</span>
                </h2>
                <p className="text-sm sm:text-base text-white/60">
                  Track record of commercial campaigns, agency deliverables, and high-retention
                  video stories.
                </p>
              </div>

              {/* Experience Timeline Grid */}
              <div className="space-y-5 max-w-[1000px] mx-auto">
                {EXPERIENCE_DATA.map((exp, idx) => {
                  return (
                    <div
                      key={exp.id}
                      className="group p-6 sm:p-8 rounded-[32px] sm:rounded-[36px] border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:border-white/25 hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                        <div className="space-y-1.5">
                          {/* Period & Badge */}
                          <div className="flex items-center gap-2.5">
                            <span
                              className="text-xs font-mono font-bold tracking-wide text-white/50"
                              style={{ fontFamily: "'Tomato Grotesk', monospace" }}
                            >
                              {exp.period}
                            </span>
                            {exp.badge && (
                              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                                {exp.badge}
                              </span>
                            )}
                          </div>

                          {/* Role & Company */}
                          <h3
                            className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-emerald-300 transition-colors"
                            style={{ fontFamily: "'Tomato Grotesk', -apple-system, sans-serif" }}
                          >
                            {exp.title}
                          </h3>
                          <p
                            className="text-sm sm:text-base font-semibold text-white/80"
                            style={{ fontFamily: "'Tomato Grotesk', -apple-system, sans-serif" }}
                          >
                            {exp.company}
                          </p>
                        </div>

                        {/* Sequential Index Tag */}
                        <div className="hidden md:block">
                          <span
                            className="font-mono text-2xl font-bold text-white/20 group-hover:text-white/40 transition-colors"
                            style={{ fontFamily: "'Tomato Grotesk', monospace" }}
                          >
                            0{idx + 1}
                          </span>
                        </div>
                      </div>

                      {/* Summary */}
                      <p className="text-sm sm:text-base text-white/75 leading-relaxed mb-5 font-normal">
                        {exp.summary}
                      </p>

                      {/* Bullet Highlights */}
                      <div className="space-y-2 pt-4 border-t border-white/5">
                        {exp.bullets.map((bullet, bIdx) => (
                          <div
                            key={bIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-white/70"
                          >
                            <span className="text-emerald-400 font-bold select-none shrink-0 mt-0.5">
                              —
                            </span>
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* View Full Work History Trigger under Experience */}
              <div className="mt-8 text-center">
                <Button
                  onClick={() => setCvModalOpen(true)}
                  variant="outline"
                  size="sm"
                  className="rounded-full px-5 py-2 text-xs font-bold bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
                  style={{ fontFamily: "'Tomato Grotesk', -apple-system, sans-serif" }}
                >
                  <Briefcase className="mr-2" size={14} />
                  View Full Career History &amp; Client Highlights in CV
                </Button>
              </div>
            </div>

            {/* =========================================================================
                SECTION 3: EDUCATION
                "Where I studied."
                2025 — 2027: HSC — Higher Secondary Certificate @ Govt Tolaram College
                2022 — 2024: SSC — Secondary School Certificate @ TalukderPara Govt Secondary High School
               ========================================================================= */}
            <div className="mt-20 mb-20 text-left">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3">
                  <GraduationCap size={13} />
                  <span>Education</span>
                </div>
                <h2
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-2"
                  style={{ fontFamily: "'Tomato Grotesk', -apple-system, sans-serif" }}
                >
                  Where I studied<span className="text-[#06b6d4]">.</span>
                </h2>
                <p className="text-sm sm:text-base text-white/60">
                  Academic foundations, business studies, and creative extracurricular engagement.
                </p>
              </div>

              {/* Education Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1140px] mx-auto">
                {EDUCATION_DATA.map((edu) => (
                  <div
                    key={edu.id}
                    className="p-6 sm:p-7 rounded-[32px] sm:rounded-[36px] border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:border-white/25 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span
                          className="font-mono text-xs font-bold text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 px-3 py-1 rounded-full"
                          style={{ fontFamily: "'Tomato Grotesk', monospace" }}
                        >
                          {edu.period}
                        </span>

                        <Icon3DEducation className="w-12 h-12 drop-shadow-[0_6px_12px_rgba(0,0,0,0.4)]" />
                      </div>

                      <h3
                        className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-1"
                        style={{ fontFamily: "'Tomato Grotesk', -apple-system, sans-serif" }}
                      >
                        {edu.degree}
                      </h3>
                      <p
                        className="text-sm font-semibold text-white/80 mb-3"
                        style={{ fontFamily: "'Tomato Grotesk', -apple-system, sans-serif" }}
                      >
                        {edu.institution}
                      </p>

                      <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal">
                        {edu.description}
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-white/40">
                      <span>Academic Background</span>
                      <CheckCircle2 size={15} className="text-cyan-400" />
                    </div>
                  </div>
                ))}
              </div>

              {/* View Full Resume Trigger under Education */}
              <div className="mt-8 text-center">
                <Button
                  onClick={() => setCvModalOpen(true)}
                  variant="outline"
                  size="sm"
                  className="rounded-full px-5 py-2 text-xs font-bold bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border-cyan-500/30"
                  style={{ fontFamily: "'Tomato Grotesk', -apple-system, sans-serif" }}
                >
                  <FileText className="mr-2" size={14} />
                  View Complete Resume &amp; Academic Timeline
                </Button>
              </div>
            </div>

            {/* =========================================================================
                SECTION 4: COURSES & CERTIFICATIONS
                "Always learning."
                ✓ Advance After Effects | Jake in Motion | 2025
                ✓ 3D Motion Graphic | Karm Visuals | 2024
                ✓ Basic to Advance Video Editing | Nazmul Huda Sir (As-Sunnah) | 2024
                ✓ Basic to Advance Motion Graphic | Nazmul Huda Sir | 2024
               ========================================================================= */}
            <div className="mt-20 mb-16 text-left">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-wider mb-3">
                  <Award size={13} />
                  <span>Courses &amp; Certifications</span>
                </div>
                <h2
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-2"
                  style={{ fontFamily: "'Tomato Grotesk', -apple-system, sans-serif" }}
                >
                  Always learning<span className="text-[#a855f7]">.</span>
                </h2>
                <p className="text-sm sm:text-base text-white/60">
                  Continuous professional development under renowned industry mentors and
                  specialized courses.
                </p>
              </div>

              {/* Certifications Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[1140px] mx-auto">
                {CERTIFICATIONS_DATA.map((cert) => (
                  <div
                    key={cert.id}
                    className="p-5 sm:p-6 rounded-[28px] sm:rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:border-white/25 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      {/* Checkmark and Year Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                          <CheckCircle2 size={16} />
                        </div>
                        <span
                          className="font-mono text-xs font-bold text-white/60 bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-full"
                          style={{ fontFamily: "'Tomato Grotesk', monospace" }}
                        >
                          {cert.year}
                        </span>
                      </div>

                      <h3
                        className="text-lg font-bold text-white tracking-tight mb-1.5 leading-snug"
                        style={{ fontFamily: "'Tomato Grotesk', -apple-system, sans-serif" }}
                      >
                        {cert.title}
                      </h3>
                      <p
                        className="text-xs sm:text-sm text-purple-300/80 font-medium leading-relaxed"
                        style={{ fontFamily: "'Tomato Grotesk', -apple-system, sans-serif" }}
                      >
                        {cert.instructor}
                      </p>
                    </div>

                    <div
                      className="h-[2px] w-full rounded-full mt-5 opacity-40"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${cert.accentColor}, transparent)`,
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Callout: Let's make something that moves */}
            <div className="mt-16 max-w-2xl mx-auto px-2">
              <div className="rounded-[28px] border border-white/10 bg-white/[0.025] backdrop-blur-xl p-6 sm:p-7 text-center relative overflow-hidden transition-all duration-300">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/60 mb-2.5">
                  <Sparkles size={13} className="text-emerald-400" />
                  <span
                    className="font-bold tracking-wider uppercase text-[11px]"
                    style={{ fontFamily: "'Tomato Grotesk', -apple-system, sans-serif" }}
                  >
                    Open for New Collaborations
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-white/70 max-w-lg mx-auto font-medium leading-relaxed mb-4">
                  Need kinetic typography for an ad, clean motion graphics for a product story, or
                  pacing that keeps viewers hooked? Let's connect.
                </p>

                <div className="flex items-center justify-center gap-3">
                  <Button
                    asChild
                    size="sm"
                    className="rounded-full px-5 bg-white text-black hover:bg-white/90 text-xs font-bold"
                    style={{ fontFamily: "'Tomato Grotesk', -apple-system, sans-serif" }}
                  >
                    <Link to="/contact">
                      Get in Touch
                      <ArrowUpRight className="ml-1" size={14} />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Site Footer matching homepage */}
      <footer className="site-footer">
        <Link to="/" className="wordmark" activeOptions={{ exact: true }}>
          Sabbir Sakib<span className="brand-dot">.</span>
        </Link>
        <span>© 2026 Sabbir Sakib</span>
        <Link to="/contact">
          Let’s connect <ArrowUpRight size={16} />
        </Link>
      </footer>

      {/* Interactive CV Modal Dialog with Web View, PDF Preview, Print, and Download */}
      <Dialog open={cvModalOpen} onOpenChange={setCvModalOpen}>
        <DialogContent className="max-w-4xl max-h-[92vh] overflow-y-auto bg-neutral-950/95 border border-white/20 text-white backdrop-blur-2xl p-6 sm:p-8 rounded-[28px] sm:rounded-[36px] shadow-[0_25px_60px_rgba(0,0,0,0.8)]">
          <DialogHeader className="border-b border-white/10 pb-5 mb-6 text-left">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                    Official Resume · Sakibul Islam Sabbir
                  </span>
                </div>
                <DialogTitle
                  className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight"
                  style={{ fontFamily: "'Tomato Grotesk', -apple-system, sans-serif" }}
                >
                  Curriculum Vitae
                </DialogTitle>
                <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                  Motion Designer &amp; Video Editor · Bangladesh · 4+ Years Experience
                </p>
              </div>

              {/* Quick Actions Header */}
              <div className="flex flex-wrap items-center gap-2">
                {uploadedPdfUrl && (
                  <div className="flex rounded-full bg-white/10 p-1 border border-white/15 text-xs font-semibold">
                    <button
                      type="button"
                      onClick={() => setActiveCvView("formatted")}
                      className={`px-3 py-1 rounded-full transition-all ${
                        activeCvView === "formatted"
                          ? "bg-white text-black font-bold shadow"
                          : "text-white/70 hover:text-white"
                      }`}
                    >
                      Web View
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveCvView("pdf")}
                      className={`px-3 py-1 rounded-full transition-all ${
                        activeCvView === "pdf"
                          ? "bg-cyan-500 text-black font-bold shadow"
                          : "text-white/70 hover:text-white"
                      }`}
                    >
                      PDF View
                    </button>
                  </div>
                )}

                {/* Upload PDF Button */}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="application/pdf,.pdf"
                  className="hidden"
                  onChange={handlePdfUpload}
                />
                <Button
                  onClick={() => fileInputRef.current?.click()}
                  size="sm"
                  variant="outline"
                  className="rounded-full bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border-purple-500/30 text-xs font-bold"
                >
                  <Upload size={14} className="mr-1.5" />
                  {uploadedPdfName ? "Replace PDF" : "Attach PDF"}
                </Button>

                {/* Print / Save PDF Button */}
                <Button
                  onClick={handlePrintCV}
                  size="sm"
                  variant="outline"
                  className="rounded-full bg-white/5 hover:bg-white/15 text-white border-white/20 text-xs font-bold"
                >
                  <Printer size={14} className="mr-1.5" />
                  Print / PDF
                </Button>

                {/* Direct Download .TXT Button */}
                <Button
                  onClick={handleDownloadCV}
                  size="sm"
                  className="rounded-full bg-emerald-500 hover:bg-emerald-600 text-black text-xs font-bold shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                >
                  <Download size={14} className="mr-1.5" />
                  Download .TXT
                </Button>
              </div>
            </div>
          </DialogHeader>

          {/* Conditional View: Uploaded PDF vs Formatted Structured Resume */}
          {activeCvView === "pdf" && uploadedPdfUrl ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-neutral-400 bg-white/5 p-3 rounded-2xl border border-white/10">
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-emerald-400" />
                  Viewing uploaded PDF: <strong className="text-white">{uploadedPdfName}</strong>
                </span>
                <button
                  type="button"
                  onClick={() => setActiveCvView("formatted")}
                  className="text-cyan-400 hover:underline font-semibold"
                >
                  Switch to formatted web resume &rarr;
                </button>
              </div>
              <iframe
                src={uploadedPdfUrl}
                title="Uploaded CV PDF Document"
                className="w-full h-[640px] rounded-2xl border border-white/20 bg-neutral-900"
              />
            </div>
          ) : (
            <div className="space-y-8 text-neutral-200 text-sm leading-relaxed">
              {/* Profile Card */}
              <div className="rounded-2xl p-5 sm:p-6 bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Sakibul Islam Sabbir</h3>
                  <p className="text-emerald-400 font-semibold text-xs sm:text-sm">
                    Motion Designer, Commercial Video Editor &amp; Visual Storyteller
                  </p>
                  <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-neutral-400">
                    <span className="flex items-center gap-1.5">
                      <Mail size={13} className="text-neutral-500" /> sakibulislamsbmc@gmail.com
                    </span>
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck size={13} className="text-emerald-400" /> 100% Halal Creative
                      Standard
                    </span>
                  </div>
                </div>
                <div className="shrink-0 text-left sm:text-right">
                  <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-mono text-xs font-bold border border-emerald-500/40">
                    Available for Contracts
                  </span>
                </div>
              </div>

              {/* Professional Summary */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2 flex items-center gap-2">
                  <Sparkles size={14} /> Professional Summary
                </h4>
                <p className="text-neutral-300 text-sm sm:text-[15px] leading-relaxed">
                  Passionate motion designer and commercial video editor with 4+ years of hands-on
                  experience turning raw footage and rough briefs into high-retention videos
                  audiences actually finish watching. Over 50+ satisfied local and international
                  clients, delivering kinetic typography, commercial TVCs, viral vertical reels, and
                  brand identity systems.
                </p>
              </div>

              {/* Core Disciplines & Tools */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-3 flex items-center gap-2">
                  <Layers size={14} /> Technical Stack &amp; Creative Tools
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <div className="font-bold text-white text-sm">After Effects</div>
                    <div className="text-xs text-neutral-400 mt-1">
                      Kinetic typography, 2D/3D visual effects, logo animations &amp; complex motion
                      graphics.
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <div className="font-bold text-white text-sm">Premiere Pro</div>
                    <div className="text-xs text-neutral-400 mt-1">
                      Story-driven timeline pacing, commercial cutting, sound design &amp; color
                      grading.
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <div className="font-bold text-white text-sm">CapCut &amp; AI Tools</div>
                    <div className="text-xs text-neutral-400 mt-1">
                      Ultra-fast viral reels, TikTok pacing, generative AI imagery, and 3D product
                      renders.
                    </div>
                  </div>
                </div>
              </div>

              {/* Work Experience */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-4 flex items-center gap-2">
                  <Briefcase size={14} /> Professional Experience
                </h4>
                <div className="space-y-4">
                  {EXPERIENCE_DATA.map((exp) => (
                    <div
                      key={exp.id}
                      className="p-4 sm:p-5 rounded-2xl bg-white/[0.025] border border-white/10 space-y-2"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                        <span className="font-mono text-neutral-400">{exp.period}</span>
                        {exp.badge && (
                          <span className="self-start sm:self-auto px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold uppercase text-[10px]">
                            {exp.badge}
                          </span>
                        )}
                      </div>
                      <div className="font-bold text-white text-base">{exp.title}</div>
                      <div className="text-xs font-semibold text-emerald-400">{exp.company}</div>
                      <p className="text-xs text-neutral-300 leading-relaxed">{exp.summary}</p>
                      <ul className="list-disc list-inside text-xs text-neutral-400 space-y-1 pt-1">
                        {exp.bullets.map((b, bIdx) => (
                          <li key={bIdx}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education Background */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-4 flex items-center gap-2">
                  <GraduationCap size={14} /> Education &amp; Academic Background
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {EDUCATION_DATA.map((edu) => (
                    <div
                      key={edu.id}
                      className="p-4 sm:p-5 rounded-2xl bg-white/[0.025] border border-white/10 space-y-2"
                    >
                      <span className="font-mono text-cyan-400 text-xs font-bold bg-cyan-950/40 border border-cyan-500/30 px-2.5 py-0.5 rounded-full">
                        {edu.period}
                      </span>
                      <div className="font-bold text-white text-sm pt-1">{edu.degree}</div>
                      <div className="text-xs text-neutral-400 font-medium">{edu.institution}</div>
                      <p className="text-xs text-neutral-300 leading-relaxed">{edu.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-3 flex items-center gap-2">
                  <Award size={14} /> Professional Mentorships &amp; Certifications
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {CERTIFICATIONS_DATA.map((cert) => (
                    <div
                      key={cert.id}
                      className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs"
                    >
                      <span className="font-mono text-[10px] text-neutral-500">{cert.year}</span>
                      <div className="font-bold text-white mt-1">{cert.title}</div>
                      <div className="text-purple-300/80 mt-0.5">{cert.instructor}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Halal Standard Note */}
              <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 text-xs text-emerald-200/90 leading-relaxed flex items-start gap-3">
                <ShieldCheck size={20} className="text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-emerald-300 block mb-1">Ethical Work Commitment</strong>
                  All production strictly observes halal creative guidelines — rhythm and energy are
                  sculpted using clean, halal sound design. I decline projects promoting betting,
                  alcohol, or objectifying content.
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
