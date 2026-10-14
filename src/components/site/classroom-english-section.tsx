import { useState, useRef } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Phone,
  Calendar,
  Eye,
  Play,
  Film,
  Layers,
  MonitorPlay,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import CircularCarousel, { CarouselItem } from "@/components/ui/CircularCarousel";
import { useIsMobile } from "@/hooks/use-mobile";

// Video Project Thumbnails
import video1Podcast from "@/assets/portfolio-projects/video-1-podcast.jpg";
import video2GhorerBazar from "@/assets/portfolio-projects/video-2-ghorer-bazar.jpg";
import video3BlenderAi from "@/assets/portfolio-projects/video-3-blender-ai.jpg";
import video4MotionGraphics from "@/assets/portfolio-projects/video-4-motion-graphics.jpg";
import video5Modiology from "@/assets/portfolio-projects/video-5-modiology.jpg";
import video6BarnoiTvc from "@/assets/portfolio-projects/video-6-barnoi-tvc.jpg";

// Design Portfolio Images
import project1KidsEnglish from "@/assets/portfolio-projects/project-1-kids-english.jpg";
import project2SpokenEnglish from "@/assets/portfolio-projects/project-2-spoken-english.jpg";
import project3SpokenJunior from "@/assets/portfolio-projects/project-3-spoken-junior.jpg";
import project4IeltsProgramme from "@/assets/portfolio-projects/project-4-ielts-programme.jpg";
import project5StudyAbroad from "@/assets/portfolio-projects/project-5-study-abroad.jpg";
import project6IeltsMock from "@/assets/portfolio-projects/project-6-ielts-mock.jpg";

export interface VideoProject {
  id: string;
  youtubeId: string;
  title: string;
  subtitle: string;
  badge: string;
  category: "long" | "short";
  aspectRatio: "16:9" | "9:16";
  durationLabel: string;
  tag: string;
  tabTitle: string;
  tabSubtitle: string;
  tabDetails: string;
  accent: "amber" | "rose" | "teal" | "purple" | "blue" | "emerald";
  bannerBg: string;
  localThumbnail: string;
  fallbackThumbnail: string;
}

export interface DesignProject {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  accent: "amber" | "rose" | "teal" | "purple" | "blue" | "emerald";
  bannerBg: string;
  imageSrc: string;
  fallbackUrl: string;
}

export const VIDEO_PROJECTS: VideoProject[] = [
  // 3 Long / 16:9 Videos
  {
    id: "podcast-nafees",
    youtubeId: "iGTBJB_OLMI",
    title: "Nafees Selim Podcast In As-sunnah Skill",
    subtitle: "Long-Form Talk Show & Sound Design",
    badge: "PODCAST EDITING",
    category: "long",
    aspectRatio: "16:9",
    durationLabel: "16:9 Widescreen",
    tag: "16:9 • Long Video",
    tabTitle: "Podcast Editing",
    tabSubtitle: "Nafees Selim Podcast",
    tabDetails: "Talk show editing & sound mastering in As-sunnah Skill",
    accent: "amber",
    bannerBg: "from-amber-600 via-orange-600 to-rose-700",
    localThumbnail: video1Podcast,
    fallbackThumbnail: "https://i.ytimg.com/vi/iGTBJB_OLMI/maxresdefault.jpg",
  },
  {
    id: "promo-ghorer-bazar",
    youtubeId: "HWWI6WyThQ8",
    title: "Promotional Ads Video for Ghorer Bazar",
    subtitle: "Commercial E-Commerce Promo",
    badge: "COMMERCIAL ADS",
    category: "long",
    aspectRatio: "16:9",
    durationLabel: "16:9 Widescreen",
    tag: "16:9 • Commercial",
    tabTitle: "Promotional Ads",
    tabSubtitle: "Ghorer Bazar Campaign",
    tabDetails: "High-impact commercial promo with voiceover sync & color grade",
    accent: "rose",
    bannerBg: "from-rose-700 via-red-700 to-red-950",
    localThumbnail: video2GhorerBazar,
    fallbackThumbnail: "https://i.ytimg.com/vi/HWWI6WyThQ8/maxresdefault.jpg",
  },
  {
    id: "blender-ai-ads",
    youtubeId: "HKHbmJwcwwE",
    title: "Blender ads Video Editing using Ai",
    subtitle: "CGI Product Commercial & AI Visuals",
    badge: "3D BLENDER & AI",
    category: "long",
    aspectRatio: "16:9",
    durationLabel: "16:9 Widescreen",
    tag: "16:9 • 3D & AI",
    tabTitle: "Blender 3D & AI",
    tabSubtitle: "CGI Commercial Ads",
    tabDetails: "3D Blender modeling, camera animation & generative AI workflow",
    accent: "purple",
    bannerBg: "from-purple-900 via-indigo-950 to-neutral-950",
    localThumbnail: video3BlenderAi,
    fallbackThumbnail: "https://i.ytimg.com/vi/HKHbmJwcwwE/maxresdefault.jpg",
  },

  // 3 Short / 9:16 Videos
  {
    id: "product-motion",
    youtubeId: "lZWfel4Hpgg",
    title: "Product Motion Graphics Video",
    subtitle: "3D Kinetic Motion Graphics Reel",
    badge: "MOTION GRAPHICS",
    category: "short",
    aspectRatio: "9:16",
    durationLabel: "9:16 Shorts",
    tag: "9:16 • YouTube Shorts",
    tabTitle: "Motion Graphics",
    tabSubtitle: "Product Motion Reel",
    tabDetails: "Dynamic 3D product motion graphics & kinetic typography",
    accent: "teal",
    bannerBg: "from-slate-800 via-teal-900 to-slate-950",
    localThumbnail: video4MotionGraphics,
    fallbackThumbnail: "https://i.ytimg.com/vi/lZWfel4Hpgg/maxresdefault.jpg",
  },
  {
    id: "modiology-promo",
    youtubeId: "iYqOrHPYuaA",
    title: "Modiology Brand Product Promotion Video",
    subtitle: "Viral Apparel & Fashion Showcase",
    badge: "BRAND PROMO",
    category: "short",
    aspectRatio: "9:16",
    durationLabel: "9:16 Shorts",
    tag: "9:16 • YouTube Shorts",
    tabTitle: "Brand Promo",
    tabSubtitle: "Modiology Fashion",
    tabDetails: "Viral vertical product reel for Modiology clothing brand",
    accent: "blue",
    bannerBg: "from-sky-700 via-blue-900 to-slate-950",
    localThumbnail: video5Modiology,
    fallbackThumbnail: "https://i.ytimg.com/vi/iYqOrHPYuaA/maxresdefault.jpg",
  },
  {
    id: "barnoi-tvc",
    youtubeId: "qrsIbB93Uhk",
    title: "Barnoi Lifestyle TVC Ads Video Editing project",
    subtitle: "Cinematic Television Commercial",
    badge: "LIFESTYLE TVC",
    category: "short",
    aspectRatio: "9:16",
    durationLabel: "9:16 Vertical TVC",
    tag: "9:16 • TVC Ads",
    tabTitle: "Lifestyle TVC",
    tabSubtitle: "Barnoi Lifestyle Ads",
    tabDetails: "Cinematic commercial TVC project with cinematic color grading",
    accent: "emerald",
    bannerBg: "from-neutral-800 via-emerald-950 to-black",
    localThumbnail: video6BarnoiTvc,
    fallbackThumbnail: "https://i.ytimg.com/vi/qrsIbB93Uhk/maxresdefault.jpg",
  },
];

export const DESIGN_PROJECTS: DesignProject[] = [
  {
    id: "islamic-ads",
    badge: "ISLAMIC AD DESIGN",
    title: "Islamic Ad Creatives",
    subtitle: "Social Media & Banner Design",
    accent: "amber",
    bannerBg: "from-amber-600 via-orange-600 to-rose-700",
    imageSrc: project1KidsEnglish,
    fallbackUrl:
      "https://plain-apac-prod-public.komododecks.com/202610/14/GqReEs8lhIcqrYxjNI4j/image.jpg",
  },
  {
    id: "quran-academy",
    badge: "QURAN ACADEMY ADS",
    title: "Quran Academy Campaign",
    subtitle: "Online Learning Platform Ad",
    accent: "rose",
    bannerBg: "from-rose-700 via-red-700 to-red-950",
    imageSrc: project2SpokenEnglish,
    fallbackUrl:
      "https://plain-apac-prod-public.komododecks.com/202610/14/RaOSzRw9Ef9hGnVygUAG/image.jpg",
  },
  {
    id: "brand-carousels",
    badge: "SOCIAL MEDIA GRID",
    title: "Brand Carousel Posts",
    subtitle: "Multi-Slide Feed Templates",
    accent: "teal",
    bannerBg: "from-slate-800 via-teal-900 to-slate-950",
    imageSrc: project3SpokenJunior,
    fallbackUrl:
      "https://plain-apac-prod-public.komododecks.com/202610/14/4AqntZHRG3KzOy9ev2ru/image.jpg",
  },
  {
    id: "ui-showcase",
    badge: "UI/UX & WEB DESIGN",
    title: "Web & App UI Showcase",
    subtitle: "Landing Page & Mobile Design",
    accent: "purple",
    bannerBg: "from-red-900 via-amber-950 to-neutral-950",
    imageSrc: project4IeltsProgramme,
    fallbackUrl:
      "https://plain-apac-prod-public.komododecks.com/202610/14/Qg97sjmFFMVGJ31OfXDB/image.jpg",
  },
  {
    id: "digital-marketing",
    badge: "DIGITAL MARKETING",
    title: "Marketing Agency Posts",
    subtitle: "3D Promotional Ad Suite",
    accent: "blue",
    bannerBg: "from-sky-700 via-blue-900 to-slate-950",
    imageSrc: project5StudyAbroad,
    fallbackUrl:
      "https://plain-apac-prod-public.komododecks.com/202610/14/XLD8cHT5n3GDrQ4qZZyi/image.jpg",
  },
  {
    id: "corporate-content-bank",
    badge: "CONTENT BANK SUITE",
    title: "Corporate Content Bank",
    subtitle: "9-Post Social Media Kit",
    accent: "emerald",
    bannerBg: "from-neutral-800 via-slate-900 to-black",
    imageSrc: project6IeltsMock,
    fallbackUrl:
      "https://plain-apac-prod-public.komododecks.com/202610/14/oVs5iyQCZ5hUaQmvhJ39/image.jpg",
  },
];

export const CAROUSEL_ITEMS: CarouselItem[] = [
  {
    src: project1KidsEnglish,
    alt: "Islamic Ad Creatives & Social Media Banner Design",
    title: "Islamic Ad Creatives",
    subtitle: "Social Media & Banner Design",
  },
  {
    src: video1Podcast,
    alt: "Nafees Selim Podcast In As-sunnah Skill",
    title: "Nafees Selim Podcast",
    subtitle: "Podcast Video Editing",
  },
  {
    src: project2SpokenEnglish,
    alt: "Quran Academy Campaign & Online Learning Ads",
    title: "Quran Academy Campaign",
    subtitle: "Online Platform Ads",
  },
  {
    src: video2GhorerBazar,
    alt: "Promotional Ads Video for Ghorer Bazar",
    title: "Promotional Ads Video",
    subtitle: "Ghorer Bazar Commercial",
  },
  {
    src: project3SpokenJunior,
    alt: "Brand Carousel Posts & Multi-Slide Feed Templates",
    title: "Brand Carousel Posts",
    subtitle: "Social Media Grid",
  },
  {
    src: video3BlenderAi,
    alt: "Blender ads Video Editing using AI",
    title: "Blender 3D & AI Ads",
    subtitle: "CGI Commercial Visuals",
  },
  {
    src: project4IeltsProgramme,
    alt: "Web & App UI Showcase & Mobile Design",
    title: "Web & App UI Showcase",
    subtitle: "UI/UX & Mobile Design",
  },
  {
    src: video4MotionGraphics,
    alt: "Product Motion Graphics Video Reel",
    title: "Product Motion Graphics",
    subtitle: "3D Kinetic Reel",
  },
  {
    src: project5StudyAbroad,
    alt: "Marketing Agency Posts & 3D Promotional Ad Suite",
    title: "Marketing Agency Posts",
    subtitle: "3D Promotional Ad Suite",
  },
  {
    src: video5Modiology,
    alt: "Modiology Brand Product Promotion Video",
    title: "Modiology Brand Promo",
    subtitle: "Viral Fashion Showcase",
  },
  {
    src: project6IeltsMock,
    alt: "Corporate Content Bank & 9-Post Social Media Kit",
    title: "Corporate Content Bank",
    subtitle: "9-Post Social Media Kit",
  },
  {
    src: video6BarnoiTvc,
    alt: "Barnoi Lifestyle TVC Commercial Ads Project",
    title: "Barnoi Lifestyle TVC",
    subtitle: "Cinematic TV Commercial",
  },
];

export function ClassroomEnglishSection() {
  const isMobile = useIsMobile();
  const [selectedVideoId, setSelectedVideoId] = useState<string>("podcast-nafees");
  const [inlinePlayingId, setInlinePlayingId] = useState<string | null>(null);
  const [previewVideo, setPreviewVideo] = useState<VideoProject | null>(null);
  const [previewDesign, setPreviewDesign] = useState<DesignProject | null>(null);
  const [selectedDesign, setSelectedDesign] = useState<string>("islamic-ads");
  const [categoryFilter, setCategoryFilter] = useState<"all" | "long" | "short">("all");

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [clientName, setClientName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [selectedService, setSelectedService] = useState<string>("Commercial Ads & Promo");
  const [selectedTimeline, setSelectedTimeline] = useState<string>("উইথিন ১ সপ্তাহ (Urgent)");

  const sectionRef = useRef<HTMLDivElement>(null);

  const handleSelectTab = (video: VideoProject) => {
    setSelectedVideoId(video.id);
    setInlinePlayingId(video.id);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !phoneNumber.trim()) return;
    setFormSubmitted(true);
  };

  const handleResetModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setFormSubmitted(false);
      setClientName("");
      setPhoneNumber("");
    }, 300);
  };

  const longVideos = VIDEO_PROJECTS.filter((v) => v.category === "long");
  const shortVideos = VIDEO_PROJECTS.filter((v) => v.category === "short");

  return (
    <section
      id="classroom-english"
      ref={sectionRef}
      className="classroom-section-wrapper py-14 px-4 sm:px-6"
    >
      <div className="max-w-[1240px] mx-auto">
        {/* Main Dark Card Container */}
        <div className="classroom-main-container relative p-6 sm:p-10 md:p-12 overflow-hidden">
          {/* Subtle Ambient Glowing Gradients */}
          <div
            className="absolute -top-32 left-1/2 -translate-x-1/2 w-[520px] h-[220px] bg-rose-500/15 blur-[120px] pointer-events-none rounded-full"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-24 right-10 w-[300px] h-[200px] bg-amber-500/10 blur-[100px] pointer-events-none rounded-full"
            aria-hidden="true"
          />

          {/* Section Heading */}
          <div className="text-center mb-8 sm:mb-10 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/25 text-[11px] font-semibold text-rose-300 tracking-wider uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-rose-400" />
              <span>DIRECT ON-SITE STREAMING &amp; DESIGN PORTFOLIO</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide text-white drop-shadow-sm uppercase font-sans">
              RECENTLY COMPLETED{" "}
              <span className="golden-coral-shimmer font-extrabold">PROJECT PORTFOLIO</span>
            </h2>
            <p className="text-sm text-neutral-400 mt-2 max-w-2xl mx-auto">
              Explore professional commercial video edits, podcasts, 3D CGI visuals &amp;
              high-converting design portfolio projects.
            </p>
          </div>

          {/* Top 6 Sections (Converted from the 5 sections in the screenshot) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-8 relative z-10">
            {VIDEO_PROJECTS.map((video) => {
              const isSelected = selectedVideoId === video.id;
              return (
                <button
                  key={video.id}
                  type="button"
                  onClick={() => handleSelectTab(video)}
                  className={`branch-card text-left p-3.5 cursor-pointer transition-all duration-300 ${
                    isSelected
                      ? "!border-rose-500/90 shadow-[0_0_20px_rgba(244,83,59,0.32)] !bg-white/[0.09] ring-1 ring-rose-500/50"
                      : "hover:!bg-white/[0.06] border-white/10"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-semibold text-white text-sm sm:text-base font-sans truncate">
                      {video.tabTitle}
                    </span>
                    {isSelected && <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0" />}
                  </div>
                  <p className="text-[11px] leading-relaxed text-neutral-400 line-clamp-2">
                    {video.tabDetails}
                  </p>
                  <p className="text-[10px] text-neutral-500 mt-1 font-medium truncate">
                    ({video.tag})
                  </p>
                </button>
              );
            })}
          </div>

          {/* Filter & Aspect Ratio Group Navigation */}
          <div className="flex items-center justify-between flex-wrap gap-3 mb-6 relative z-10 border-b border-white/10 pb-4">
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-neutral-400">
                VIDEO FORMAT:
              </span>
              <div className="inline-flex p-1 rounded-xl bg-white/5 border border-white/10">
                <button
                  type="button"
                  onClick={() => setCategoryFilter("all")}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                    categoryFilter === "all"
                      ? "bg-rose-500 text-white shadow-md"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  All Videos (6)
                </button>
                <button
                  type="button"
                  onClick={() => setCategoryFilter("long")}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                    categoryFilter === "long"
                      ? "bg-rose-500 text-white shadow-md"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  <MonitorPlay className="w-3 h-3" />
                  <span>16:9 Long Videos (3)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setCategoryFilter("short")}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                    categoryFilter === "short"
                      ? "bg-rose-500 text-white shadow-md"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  <Film className="w-3 h-3" />
                  <span>9:16 Shorts &amp; Reels (3)</span>
                </button>
              </div>
            </div>

            <div className="text-xs text-neutral-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Click any video to stream directly</span>
            </div>
          </div>

          {/* GROUP 1: Long Videos (16:9 Aspect Ratio) */}
          {(categoryFilter === "all" || categoryFilter === "long") && (
            <div className="mb-10 relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <MonitorPlay className="w-4 h-4 text-amber-400" />
                <h3 className="text-sm font-bold tracking-wider uppercase text-white">
                  Widescreen Commercials &amp; Podcasts (16:9 Aspect Ratio)
                </h3>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 font-mono">
                  3 Videos
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {longVideos.map((video) => {
                  const isSelected = selectedVideoId === video.id;
                  const isPlaying = inlinePlayingId === video.id;

                  return (
                    <div
                      key={video.id}
                      className={`lower-program-card p-3.5 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 ${
                        isSelected
                          ? "!border-rose-500 ring-2 ring-rose-500/60 shadow-[0_0_25px_rgba(244,83,59,0.3)]"
                          : "hover:border-white/20"
                      }`}
                    >
                      {/* Video Player / Artwork Area */}
                      <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-3 bg-black flex items-center justify-center shadow-lg">
                        {isPlaying ? (
                          <div className="w-full h-full relative">
                            <iframe
                              src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                              title={video.title}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                              className="w-full h-full border-0"
                            />
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setInlinePlayingId(null);
                              }}
                              className="absolute top-2 right-2 p-1.5 rounded-full bg-black/80 hover:bg-black text-white text-xs border border-white/20 z-20 cursor-pointer shadow-lg"
                              title="Stop Video"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ) : (
                          <>
                            <img
                              src={video.localThumbnail}
                              onError={(e) => {
                                e.currentTarget.src = video.fallbackThumbnail;
                              }}
                              alt={video.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              loading="lazy"
                            />

                            {/* Contrast Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/40 pointer-events-none" />

                            {/* Badge Header */}
                            <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-black/75 backdrop-blur-xs border border-white/15 text-[8.5px] font-bold text-white tracking-wider uppercase shadow-md pointer-events-none">
                              <span className="golden-text-shimmer">{video.badge}</span>
                            </div>

                            {/* Duration / Format Tag */}
                            <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-xs text-[9px] font-mono text-neutral-300 pointer-events-none">
                              {video.durationLabel}
                            </div>

                            {/* Center Play Button */}
                            <button
                              type="button"
                              onClick={() => {
                                setSelectedVideoId(video.id);
                                setInlinePlayingId(video.id);
                              }}
                              className="absolute inset-0 flex items-center justify-center group/btn cursor-pointer"
                              aria-label={`Play ${video.title}`}
                            >
                              <div className="w-13 h-13 rounded-full bg-rose-600/90 group-hover/btn:bg-rose-500 group-hover/btn:scale-110 flex items-center justify-center text-white shadow-[0_0_25px_rgba(244,83,59,0.7)] transition-all">
                                <Play className="w-5 h-5 ml-0.5 fill-current" />
                              </div>
                            </button>

                            {/* Quick View / Enlarge Icon in bottom right */}
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setPreviewVideo(video);
                              }}
                              className="absolute bottom-2.5 right-2.5 p-1.5 rounded-full bg-black/70 hover:bg-black backdrop-blur-sm border border-white/20 text-white shadow-lg transition-transform hover:scale-110 cursor-pointer"
                              title="Enlarge Video Player"
                            >
                              <Eye className="w-3.5 h-3.5 text-white/90" />
                            </button>
                          </>
                        )}
                      </div>

                      {/* Captions */}
                      <div className="px-1 pb-1">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <h4
                            className="font-semibold text-white text-sm tracking-tight truncate group-hover:text-amber-300 transition-colors cursor-pointer"
                            onClick={() => {
                              setSelectedVideoId(video.id);
                              setInlinePlayingId(video.id);
                            }}
                          >
                            {video.title}
                          </h4>
                        </div>
                        <p className="text-[11px] text-neutral-400 font-medium line-clamp-1">
                          {video.subtitle}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* GROUP 2: Short Videos (9:16 Aspect Ratio) */}
          {(categoryFilter === "all" || categoryFilter === "short") && (
            <div className="mb-10 relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <Film className="w-4 h-4 text-rose-400" />
                <h3 className="text-sm font-bold tracking-wider uppercase text-white">
                  Shorts, Reels &amp; Vertical TVC (9:16 Aspect Ratio)
                </h3>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-300 font-mono">
                  3 Videos
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
                {shortVideos.map((video) => {
                  const isSelected = selectedVideoId === video.id;
                  const isPlaying = inlinePlayingId === video.id;

                  return (
                    <div
                      key={video.id}
                      className={`lower-program-card p-3.5 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 ${
                        isSelected
                          ? "!border-rose-500 ring-2 ring-rose-500/60 shadow-[0_0_25px_rgba(244,83,59,0.3)]"
                          : "hover:border-white/20"
                      }`}
                    >
                      {/* 9:16 Aspect Ratio Container */}
                      <div className="relative w-full aspect-[9/16] max-h-[460px] rounded-xl overflow-hidden mb-3 bg-black flex items-center justify-center shadow-lg">
                        {isPlaying ? (
                          <div className="w-full h-full relative">
                            <iframe
                              src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                              title={video.title}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                              className="w-full h-full border-0"
                            />
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setInlinePlayingId(null);
                              }}
                              className="absolute top-2 right-2 p-1.5 rounded-full bg-black/80 hover:bg-black text-white text-xs border border-white/20 z-20 cursor-pointer shadow-lg"
                              title="Stop Video"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ) : (
                          <>
                            <img
                              src={video.localThumbnail}
                              onError={(e) => {
                                e.currentTarget.src = video.fallbackThumbnail;
                              }}
                              alt={video.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              loading="lazy"
                            />

                            {/* Contrast Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/45 pointer-events-none" />

                            {/* Badge Header */}
                            <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-black/75 backdrop-blur-xs border border-white/15 text-[8.5px] font-bold text-white tracking-wider uppercase shadow-md pointer-events-none">
                              <span className="golden-text-shimmer">{video.badge}</span>
                            </div>

                            {/* Duration / Format Tag */}
                            <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-xs text-[9px] font-mono text-neutral-300 pointer-events-none">
                              {video.durationLabel}
                            </div>

                            {/* Center Play Button */}
                            <button
                              type="button"
                              onClick={() => {
                                setSelectedVideoId(video.id);
                                setInlinePlayingId(video.id);
                              }}
                              className="absolute inset-0 flex items-center justify-center group/btn cursor-pointer"
                              aria-label={`Play ${video.title}`}
                            >
                              <div className="w-13 h-13 rounded-full bg-rose-600/90 group-hover/btn:bg-rose-500 group-hover/btn:scale-110 flex items-center justify-center text-white shadow-[0_0_25px_rgba(244,83,59,0.7)] transition-all">
                                <Play className="w-5 h-5 ml-0.5 fill-current" />
                              </div>
                            </button>

                            {/* Quick View / Enlarge Icon in bottom right */}
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setPreviewVideo(video);
                              }}
                              className="absolute bottom-2.5 right-2.5 p-1.5 rounded-full bg-black/70 hover:bg-black backdrop-blur-sm border border-white/20 text-white shadow-lg transition-transform hover:scale-110 cursor-pointer"
                              title="Enlarge Video Player"
                            >
                              <Eye className="w-3.5 h-3.5 text-white/90" />
                            </button>
                          </>
                        )}
                      </div>

                      {/* Captions */}
                      <div className="px-1 pb-1 text-center">
                        <h4
                          className="font-semibold text-white text-sm tracking-tight truncate group-hover:text-amber-300 transition-colors cursor-pointer"
                          onClick={() => {
                            setSelectedVideoId(video.id);
                            setInlinePlayingId(video.id);
                          }}
                        >
                          {video.title}
                        </h4>
                        <p className="text-[11px] text-neutral-400 font-medium line-clamp-1 mt-0.5">
                          {video.subtitle}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* DESIGN PORTFOLIO SECTION (Positioned neatly below the Video Section)     */}
          {/* ========================================================================= */}
          <div
            id="design-portfolio"
            className="mt-14 pt-10 border-t border-white/10 relative z-10 scroll-mt-14"
          >
            <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold tracking-wide uppercase text-white font-sans flex items-center gap-2">
                    <span>GRAPHIC &amp; SOCIAL MEDIA DESIGN PORTFOLIO</span>
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 font-mono">
                      6 Designs
                    </span>
                  </h3>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    High-converting social media creatives, advertising campaigns &amp; digital
                    brand designs
                  </p>
                </div>
              </div>

              <div className="text-xs text-neutral-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Click any design to view full high-resolution artwork</span>
              </div>
            </div>

            {/* 6 Design Portfolio Cards Grid (Exact organized layout as before) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 mb-10">
              {DESIGN_PROJECTS.map((prog) => {
                const isSelected = selectedDesign === prog.id;
                return (
                  <div
                    key={prog.id}
                    onClick={() => {
                      setSelectedDesign(prog.id);
                      setPreviewDesign(prog);
                    }}
                    className={`lower-program-card p-3 cursor-pointer flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5 ${
                      isSelected
                        ? prog.accent === "amber"
                          ? "!border-amber-500 ring-2 ring-amber-500/60 shadow-[0_0_28px_rgba(245,158,11,0.35)]"
                          : "!border-rose-500 ring-2 ring-rose-500/60 shadow-[0_0_28px_rgba(244,83,59,0.35)]"
                        : "hover:border-white/20"
                    }`}
                  >
                    {/* Visual Artwork Banner */}
                    <div
                      className={`relative w-full aspect-square rounded-[20px] overflow-hidden mb-3 bg-gradient-to-br ${prog.bannerBg} flex flex-col items-center justify-center shadow-inner group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.65)] transition-all`}
                    >
                      <img
                        src={prog.imageSrc}
                        onError={(e) => {
                          e.currentTarget.src = prog.fallbackUrl;
                        }}
                        alt={`${prog.title} - ${prog.badge} Design Portfolio`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />

                      {/* Subtle Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/35 pointer-events-none" />

                      {/* Badge Pill Header */}
                      <div className="absolute top-2 px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-xs border border-white/20 text-[8px] sm:text-[8.5px] font-bold text-white tracking-wider uppercase text-center max-w-[94%] truncate shadow-md">
                        <span className="golden-text-shimmer">{prog.badge}</span>
                      </div>

                      {/* Hover Eye Quick-View Cue */}
                      <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-1.5 rounded-full bg-black/70 backdrop-blur-sm border border-white/20 text-white shadow-lg pointer-events-none">
                        <Eye className="w-3.5 h-3.5 text-white/90" />
                      </div>
                    </div>

                    {/* Caption */}
                    <div className="text-center px-1 pb-1">
                      <h4 className="font-semibold text-white text-[13px] sm:text-sm tracking-tight truncate group-hover:text-amber-300 transition-colors">
                        {prog.title}
                      </h4>
                      <p className="text-[11px] text-neutral-400 mt-0.5 font-medium truncate">
                        {prog.subtitle}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Action CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10 pt-4">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#0ba360] hover:bg-[#098e53] text-white font-semibold text-sm sm:text-base shadow-[0_8px_25px_rgba(11,163,96,0.35)] hover:shadow-[0_10px_30px_rgba(11,163,96,0.5)] transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>ভিডিও এডিটিং ও ডিজাইন প্রজেক্টের জন্য যোগাযোগ করুন</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/*
          TRANSPARENT CIRCULAR ELEMENT HOUSING 3D CIRCULAR CAROUSEL:
          Positioned below the shape located under the 'Design Projects' section,
          right beneath the 'Contact us for video editing and design projects' area.
        */}
        <div className="mt-8 sm:mt-12 relative max-w-[1240px] mx-auto">
          {/* Subtle Ambient Radial Glow */}
          <div
            className="absolute -inset-3 bg-gradient-to-r from-emerald-500/10 via-amber-500/10 to-sky-500/10 rounded-[44px] blur-3xl pointer-events-none -z-10"
            aria-hidden="true"
          />

          {/* Transparent Circular Element Frame */}
          <div
            style={{
              width: "100%",
              height: isMobile ? "460px" : "560px",
              position: "relative",
            }}
            className="rounded-[32px] sm:rounded-[44px] border border-white/10 bg-white/[0.025] backdrop-blur-2xl p-2 sm:p-5 shadow-[0_25px_60px_rgba(0,0,0,0.6)] overflow-hidden"
          >
            {/* Elegant Floating Badge */}
            <div className="absolute top-4 sm:top-5 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-xs text-white shadow-lg">
                <span className="w-2 h-2 rounded-full bg-[#0ba360] animate-pulse" />
                <span className="golden-text-shimmer font-bold uppercase tracking-widest text-[10.5px]">
                  3D Creative Portfolio Showcase
                </span>
              </div>
            </div>

            <CircularCarousel
              items={CAROUSEL_ITEMS}
              preset="cylinder"
              intro="rise"
              cardWidth={isMobile ? 180 : 220}
              aspectRatio={1}
              gap={isMobile ? 18 : 25}
              speed={14}
              captions
              fadeColor="#000000"
              cornerRadius={14}
            />
          </div>
        </div>
      </div>

      {/* Video Project Booking / Inquiry Dialog */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[480px] bg-[#12151d] text-white border-white/10 p-6 rounded-2xl shadow-2xl">
          <DialogHeader className="relative">
            <DialogTitle className="text-xl font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-emerald-400" />
              প্রজেক্ট বুকিং ও পরামর্শ
            </DialogTitle>
          </DialogHeader>

          {formSubmitted ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-white">অনুরোধ সফলভাবে গ্রহণ করা হয়েছে!</h3>
              <p className="text-sm text-neutral-300">
                ধন্যবাদ <strong>{clientName}</strong>! আপনার{" "}
                <span className="text-emerald-400 font-semibold">{selectedService}</span> প্রজেক্টের
                জন্য আমাদের সাথে যোগাযোগ করার জন্য।
              </p>
              <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-xs text-neutral-400 text-left space-y-1">
                <p>
                  <strong>সার্ভিস:</strong> {selectedService}
                </p>
                <p>
                  <strong>মোবাইল:</strong> {phoneNumber}
                </p>
                <p>
                  <strong>টাইমলাইন:</strong> {selectedTimeline}
                </p>
              </div>
              <p className="text-xs text-neutral-400">
                আমরা খুব শীঘ্রই আপনার হোয়াটসঅ্যাপ বা মোবাইল নম্বরে যোগাযোগ করব।
              </p>
              <Button onClick={handleResetModal} className="w-full bg-[#0ba360] hover:bg-[#098e53]">
                সম্পন্ন হয়েছে
              </Button>
            </div>
          ) : (
            <form onSubmit={handleBookingSubmit} className="space-y-4 pt-2">
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                  সার্ভিস ক্যাটাগরি নির্বাচন করুন
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full bg-white/5 border border-white/15 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                >
                  <option
                    value="Social Media Post & Banner Design"
                    className="bg-neutral-900 text-white"
                  >
                    Social Media Post &amp; Banner Design
                  </option>
                  <option
                    value="Commercial Ads & Promo Video"
                    className="bg-neutral-900 text-white"
                  >
                    Commercial Ads &amp; Promo Video
                  </option>
                  <option
                    value="Podcast Editing & Sound Design"
                    className="bg-neutral-900 text-white"
                  >
                    Podcast Editing &amp; Sound Design
                  </option>
                  <option
                    value="3D Blender Animation & AI Video"
                    className="bg-neutral-900 text-white"
                  >
                    3D Blender Animation &amp; AI Video
                  </option>
                  <option
                    value="Product Motion Graphics Reel"
                    className="bg-neutral-900 text-white"
                  >
                    Product Motion Graphics Reel
                  </option>
                  <option
                    value="Brand Product Promotion Shorts"
                    className="bg-neutral-900 text-white"
                  >
                    Brand Product Promotion Shorts
                  </option>
                  <option value="UI/UX & Web Landing Design" className="bg-neutral-900 text-white">
                    UI/UX &amp; Web Landing Design
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                  আপনার নাম / প্রতিষ্ঠানের নাম
                </label>
                <input
                  type="text"
                  required
                  placeholder="আপনার নাম লিখুন"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full bg-white/5 border border-white/15 rounded-lg px-3 py-2 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                  মোবাইল / হোয়াটসঅ্যাপ নম্বর
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-neutral-400 absolute left-3 top-2.5" />
                  <input
                    type="tel"
                    required
                    placeholder="01XXXXXXXXX"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full bg-white/5 border border-white/15 rounded-lg pl-9 pr-3 py-2 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                  ডেলিভারি টাইমলাইন
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-neutral-400 absolute left-3 top-2.5" />
                  <select
                    value={selectedTimeline}
                    onChange={(e) => setSelectedTimeline(e.target.value)}
                    className="w-full bg-white/5 border border-white/15 rounded-lg pl-9 pr-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  >
                    <option
                      value="উইথিন ৩ দিন (Emergency Delivery)"
                      className="bg-neutral-900 text-white"
                    >
                      উইথিন ৩ দিন (Emergency Delivery)
                    </option>
                    <option value="উইথিন ১ সপ্তাহ (Standard)" className="bg-neutral-900 text-white">
                      উইথিন ১ সপ্তাহ (Standard)
                    </option>
                    <option
                      value="উইথিন ২ সপ্তাহ (Full Production)"
                      className="bg-neutral-900 text-white"
                    >
                      উইথিন ২ সপ্তাহ (Full Production)
                    </option>
                    <option value="মাসিক কন্টেন্ট রিটেইনার" className="bg-neutral-900 text-white">
                      মাসিক কন্টেন্ট রিটেইনার
                    </option>
                  </select>
                </div>
              </div>

              <div className="pt-2 flex gap-2">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 text-neutral-400 hover:text-white"
                >
                  বাতিল
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-[#0ba360] hover:bg-[#098e53] text-white font-semibold"
                >
                  প্রজেক্ট বুক করুন
                </Button>
              </div>
            </form>
          )}
        </DialogContent>
      </Dialog>

      {/* Video Theater Lightbox Dialog (Enlarge View with NO external redirection links) */}
      <Dialog open={!!previewVideo} onOpenChange={(open) => !open && setPreviewVideo(null)}>
        <DialogContent
          className={`bg-[#0c1017] text-white border-white/15 p-5 sm:p-6 rounded-3xl shadow-2xl overflow-hidden ${
            previewVideo?.category === "short" ? "sm:max-w-[460px]" : "sm:max-w-[840px]"
          }`}
        >
          <DialogHeader className="relative pb-3 border-b border-white/10">
            <div className="flex items-center justify-between pr-8">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-rose-400 font-bold">
                  {previewVideo?.badge} • {previewVideo?.durationLabel}
                </span>
                <DialogTitle className="text-lg sm:text-xl font-bold text-white mt-0.5 line-clamp-1">
                  {previewVideo?.title}
                </DialogTitle>
                <p className="text-xs text-neutral-400">{previewVideo?.subtitle}</p>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/15 border border-rose-500/30 text-xs font-semibold text-rose-300">
                <Sparkles className="w-3.5 h-3.5 text-rose-400" />
                <span>On-Site Stream</span>
              </div>
            </div>
          </DialogHeader>

          {previewVideo && (
            <div className="mt-4 flex flex-col items-center">
              <div
                className={`relative w-full rounded-2xl overflow-hidden border border-white/15 bg-black flex items-center justify-center shadow-2xl ${
                  previewVideo.category === "short"
                    ? "aspect-[9/16] max-h-[68vh]"
                    : "aspect-video max-h-[65vh]"
                }`}
              >
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${previewVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                  title={previewVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>

              <div className="w-full mt-3 px-1 text-center sm:text-left flex items-center justify-between text-xs text-neutral-400">
                <span>{previewVideo.details}</span>
                <span className="text-rose-400 font-mono font-medium">{previewVideo.tag}</span>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Design Portfolio Artwork Lightbox Dialog (High-Res Preview without external redirect links) */}
      <Dialog open={!!previewDesign} onOpenChange={(open) => !open && setPreviewDesign(null)}>
        <DialogContent className="sm:max-w-[720px] bg-[#0c1017] text-white border-white/15 p-5 sm:p-6 rounded-3xl shadow-2xl overflow-hidden">
          <DialogHeader className="relative pb-2 border-b border-white/10">
            <div className="flex items-center justify-between pr-8">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold">
                  {previewDesign?.badge}
                </span>
                <DialogTitle className="text-xl font-bold text-white mt-0.5">
                  {previewDesign?.title}
                </DialogTitle>
                <p className="text-xs text-neutral-400">{previewDesign?.subtitle}</p>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-xs font-semibold text-amber-300">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>High-Res Artwork</span>
              </div>
            </div>
          </DialogHeader>

          {previewDesign && (
            <div className="mt-4 flex flex-col items-center">
              <div className="relative w-full max-h-[70vh] rounded-2xl overflow-hidden border border-white/10 bg-black/60 flex items-center justify-center shadow-2xl">
                <img
                  src={previewDesign.imageSrc}
                  onError={(e) => {
                    e.currentTarget.src = previewDesign.fallbackUrl;
                  }}
                  alt={`${previewDesign.title} Portfolio Preview`}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
