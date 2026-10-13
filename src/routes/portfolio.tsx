import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Sparkles, CheckCircle2 } from "lucide-react";
import { Header } from "@/components/site/header";
import { Button } from "@/components/ui/button";
import { SpaceMotionOverlay } from "@/components/site/space-motion-overlay";
import horizon from "@/assets/space-horizon.jpg";
import {
  Icon3DGraphicDesign,
  Icon3DVideoEditing,
  Icon3DWebApp,
  Icon3DOthers,
} from "@/components/portfolio/icons-3d";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Crafting Motion. Telling Stories. — Portfolio | Sabbir Sakib" },
      {
        name: "description",
        content:
          "Let's make something that moves. Explore works across Graphic Design, Video Editing, Web App, and Others by Sabbir Sakib.",
      },
      {
        property: "og:title",
        content: "Crafting Motion. Telling Stories. — Portfolio | Sabbir Sakib",
      },
      {
        property: "og:description",
        content:
          "Let's make something that moves. Explore works across Graphic Design, Video Editing, Web App, and Others by Sabbir Sakib.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortfolioPage,
});

type SectorId = "Graphic Design" | "Video Editing" | "Web App" | "Others";

interface PortfolioSector {
  id: SectorId;
  index: string;
  label: string;
  subtitle: string;
  bengaliCaption: string;
  icon: typeof Icon3DGraphicDesign;
  tone: string;
  accentColor: string;
  glowBorderColor: string;
}

const PORTFOLIO_SECTORS: PortfolioSector[] = [
  {
    id: "Graphic Design",
    index: "01",
    label: "Graphic Design",
    subtitle: "Brand Identity, Typography Systems & Visual Craft",
    bengaliCaption: "ভিজ্যুয়াল আর্ট ও ডিজাইন",
    icon: Icon3DGraphicDesign,
    tone: "sector-graphic-design",
    accentColor: "#0284c7",
    glowBorderColor: "rgba(56, 189, 248, 0.45)",
  },
  {
    id: "Video Editing",
    index: "02",
    label: "Video Editing",
    subtitle: "Kinetic Motion, Documentary Cuts & Reels",
    bengaliCaption: "ভিডিও এডিটিং ও মোশন গ্রাফিক্স",
    icon: Icon3DVideoEditing,
    tone: "sector-video-editing",
    accentColor: "#f43f5e",
    glowBorderColor: "rgba(244, 63, 94, 0.45)",
  },
  {
    id: "Web App",
    index: "03",
    label: "Web App",
    subtitle: "Interactive Systems, React Architecture & EdTech",
    bengaliCaption: "ইন্টারেক্টিভ ওয়েব অ্যাপ্লিকেশন",
    icon: Icon3DWebApp,
    tone: "sector-web-app",
    accentColor: "#10b981",
    glowBorderColor: "rgba(16, 185, 129, 0.45)",
  },
  {
    id: "Others",
    index: "04",
    label: "Others",
    subtitle: "3D Spatial Renders, Sound Design & Creative Lab",
    bengaliCaption: "থ্রিডি রেন্ডার ও ক্রিয়েটিভ ল্যাব",
    icon: Icon3DOthers,
    tone: "sector-others",
    accentColor: "#8b5cf6",
    glowBorderColor: "rgba(139, 92, 246, 0.45)",
  },
];

function PortfolioPage() {
  const [activeSector, setActiveSector] = useState<SectorId | null>(null);

  return (
    <div className="site-shell">
      {/* Top Centered Navigation Bar */}
      <Header />

      <main>
        {/*
          HERO SECTION:
          Replicating the exact UI design used on the homepage:
          - horizon background image with breathing animation
          - hero-shade gradient overlay
          - SpaceMotionOverlay with floating 3D tech drift geometry & splines
          - Dual starfield layers (stars-one and stars-two)
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
                PORTFOLIO &bull; CREATIVE SHOWCASE
              </span>
            </div>

            {/* EXACT TITLE */}
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-3"
              style={{ fontFamily: "'Tomato Grotesk', -apple-system, sans-serif" }}
            >
              Crafting Motion. Telling Stories<span className="title-period text-[#0ba360]">.</span>
            </h1>

            {/* EXACT SUB TITLE */}
            <p
              className="text-lg sm:text-xl md:text-2xl text-white/85 font-bold tracking-wide max-w-2xl mx-auto mb-10 md:mb-14"
              style={{ fontFamily: "'Tomato Grotesk', -apple-system, sans-serif" }}
            >
              Let's make something that moves.
            </p>

            {/*
              CONTAINER TEXT SECTION:
              Graphic Design, Video Editing, Web App, Others
              - Rounded rectangular shapes matching homepage .category-card (rounded-[36px])
              - Transparent glassmorphic UI elements (backdrop-blur-xl, subtle borders)
              - 3D icons customized specifically to each sector
              - Displayed sequentially (01, 02, 03, 04)
            */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 max-w-[1140px] mx-auto text-left"
              role="region"
              aria-label="Portfolio Disciplines"
            >
              {PORTFOLIO_SECTORS.map((sector) => {
                const IconComponent = sector.icon;
                const isSelected = activeSector === sector.id;

                return (
                  <div
                    key={sector.id}
                    onClick={() =>
                      setActiveSector((prev) => (prev === sector.id ? null : sector.id))
                    }
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActiveSector((prev) => (prev === sector.id ? null : sector.id));
                      }
                    }}
                    className={`
                      category-card ${sector.tone} group cursor-pointer select-none
                      flex flex-col justify-between
                      min-h-[290px] sm:min-h-[310px]
                      p-3.5 sm:p-4
                      rounded-[32px] sm:rounded-[36px]
                      transition-all duration-300
                      ${
                        isSelected
                          ? "ring-2 ring-emerald-400/90 shadow-[0_0_35px_rgba(16,185,129,0.35)] -translate-y-2 border-emerald-400/80"
                          : "hover:-translate-y-2"
                      }
                    `}
                    style={{
                      background: isSelected
                        ? "color-mix(in oklch, var(--tile-background) 96%, rgba(16, 185, 129, 0.12))"
                        : "var(--tile-background)",
                      borderColor: isSelected ? sector.accentColor : "var(--tile-border)",
                    }}
                  >
                    {/* Art Section: Rounded rectangle with translucent glass gradient & 3D Icon */}
                    <div className="category-art relative flex items-center justify-center aspect-[1.3] rounded-[24px] sm:rounded-[26px] overflow-hidden p-2">
                      {/* Sequential index badge */}
                      <span
                        className="category-number font-mono font-bold tracking-wider text-xs"
                        style={{ fontFamily: "'Tomato Grotesk', monospace" }}
                      >
                        {sector.index}
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

                      {/* Sector-specific 3D Icon with hover float & specular tilt */}
                      <div className="transform transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 drop-shadow-[0_12px_20px_rgba(0,0,0,0.45)]">
                        <IconComponent className="w-24 h-24 sm:w-28 sm:h-28" />
                      </div>

                      {/* Subtle Glassmorphic Inner Highlight Border */}
                      <div
                        className="absolute inset-0 rounded-[24px] sm:rounded-[26px] border border-white/20 pointer-events-none"
                        aria-hidden="true"
                      />
                    </div>

                    {/* Category Caption / Exact Container Text */}
                    <div className="category-caption px-3 pt-3.5 pb-2">
                      <div className="flex items-center justify-between gap-2">
                        <h2
                          className="text-xl sm:text-[22px] font-bold text-white tracking-tight leading-tight transition-colors group-hover:text-white"
                          style={{ fontFamily: "'Tomato Grotesk', -apple-system, sans-serif" }}
                        >
                          {sector.label}
                        </h2>

                        {isSelected && (
                          <span className="text-emerald-400 shrink-0">
                            <CheckCircle2 size={16} />
                          </span>
                        )}
                      </div>

                      {/* Sector Subtitle & Bengali Detail matching homepage typography */}
                      <p className="text-xs sm:text-[13px] text-white/60 mt-1 line-clamp-1 font-medium leading-snug">
                        {sector.subtitle}
                      </p>
                      <p className="font-['Hind_Siliguri',sans-serif] text-xs text-white/40 mt-0.5 line-clamp-1">
                        {sector.bengaliCaption}
                      </p>
                    </div>

                    {/* Subtle Sector Accent Glow Bar at Bottom */}
                    <div
                      className={`h-[3px] rounded-full mx-3 mb-1 transition-all duration-300 ${
                        isSelected ? "opacity-100 scale-x-100" : "opacity-0 group-hover:opacity-60"
                      }`}
                      style={{
                        background: `linear-gradient(90deg, transparent, ${sector.accentColor}, transparent)`,
                      }}
                    />
                  </div>
                );
              })}
            </div>

            {/*
              CLEAN LOWER AREA:
              User instruction: "Another important point is to remove the unnecessary options
              added to the bottom of the portfolio page. We will neatly arrange the content—such
              as videos, designs, and other items—as we upload it one by one; there is no need
              to write anything there beforehand."
              
              We keep this section completely clean and upload-ready without any mock cards or clutter.
            */}
            <div className="mt-12 md:mt-16 max-w-2xl mx-auto px-2">
              <div className="rounded-[28px] border border-white/10 bg-white/[0.025] backdrop-blur-xl p-6 sm:p-7 text-center relative overflow-hidden transition-all duration-300">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/60 mb-2.5">
                  <Sparkles size={13} className="text-emerald-400" />
                  <span
                    className="font-bold tracking-wider uppercase text-[11px]"
                    style={{ fontFamily: "'Tomato Grotesk', -apple-system, sans-serif" }}
                  >
                    Upload Pipeline Active
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-white/70 max-w-lg mx-auto font-medium leading-relaxed">
                  {activeSector ? (
                    <>
                      Viewing discipline:{" "}
                      <strong className="text-white font-bold">{activeSector}</strong>. New works,
                      videos, and design showcases will appear here as they are uploaded.
                    </>
                  ) : (
                    "Select any discipline above. Videos, designs, and creations will be neatly arranged here as they are uploaded."
                  )}
                </p>
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
    </div>
  );
}
