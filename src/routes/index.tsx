import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/site/header";
import { ClassroomEnglishSection } from "@/components/site/classroom-english-section";
import { SpaceMotionOverlay } from "@/components/site/space-motion-overlay";
import { MobileStoryTray } from "@/components/site/mobile-story-tray";
import { sections, heroSections } from "@/lib/site-sections";
import horizon from "@/assets/space-horizon.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sabbir Sakib — Explore, Learn & Create" },
      {
        name: "description",
        content: "Explore books, tools, projects and stories in the world of Sabbir Sakib.",
      },
      { property: "og:title", content: "Sabbir Sakib — Explore, Learn & Create" },
      {
        property: "og:description",
        content: "Books, tools, projects and fresh perspectives from Sabbir Sakib.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="site-shell">
      <Header />
      {/* Mobile Stories Reel Tray */}
      <MobileStoryTray />
      <main>
        <section className="space-hero">
          <img
            src={horizon}
            alt=""
            width={1920}
            height={1024}
            className="horizon-image"
            loading="eager"
          />
          <div className="hero-shade" />
          <SpaceMotionOverlay />
          <div className="stars stars-one" aria-hidden="true" />
          <div className="stars stars-two" aria-hidden="true" />
          <div className="hero-content">
            <div className="hero-eyebrow">
              <span className="status-dot" />{" "}
              <span className="golden-text-shimmer font-semibold tracking-wider">
                A WORLD OF CURIOSITY & CREATION
              </span>
            </div>
            <h1>
              Sabbir Sakib<span className="title-period">.</span>
            </h1>
            <p className="hero-bengali">শেখা, ভাবনা আর সৃষ্টির এক নতুন জগৎ।</p>
            <p className="hero-description">
              A little curiosity. A new perspective. Endless possibilities.
            </p>
            <div className="category-grid">
              {heroSections.map((s, i) => (
                <Link
                  key={s.slug}
                  to="/$section"
                  params={{ section: s.slug }}
                  className={`category-card category-${s.tone}`}
                >
                  <div className="category-art">
                    <span className="category-number">0{i + 1}</span>
                    <s.icon className="category-icon" strokeWidth={1.5} />
                    <ArrowUpRight className="category-arrow" size={20} />
                  </div>
                  <div className="category-caption">
                    <h2>{s.title}</h2>
                    <p>{s.subtitle}</p>
                  </div>
                </Link>
              ))}
            </div>
            <Button asChild size="lg" className="explore-button">
              <a href="#classroom-english">
                Explore my world <ArrowRight />
              </a>
            </Button>

            {/* Showcase Animated GIF with Transparent Glassmorphic Effect */}
            <div className="explore-gif-wrapper max-w-[860px] mx-auto mt-8 mb-6 px-1 sm:px-0">
              <div className="explore-gif-card p-2 sm:p-3 relative group">
                {/* Ambient Back Glow */}
                <div
                  className="absolute -inset-1.5 bg-gradient-to-r from-amber-500/15 via-rose-500/10 to-indigo-500/15 rounded-[32px] blur-xl opacity-60 group-hover:opacity-100 transition duration-500 pointer-events-none -z-10"
                  aria-hidden="true"
                />

                <div className="relative rounded-[20px] overflow-hidden bg-black/25">
                  <img
                    src="/explore-showcase.gif"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://plain-apac-prod-public.komododecks.com/202610/13/4K7OKheeoXowpS0TRKql/image.gif";
                    }}
                    alt="Explore my world animation showcase"
                    width={1400}
                    height={788}
                    className="explore-gif-image w-full h-auto object-cover"
                    loading="lazy"
                  />
                  <div className="explore-gif-overlay" aria-hidden="true" />
                </div>
              </div>
            </div>

            <div className="hero-footnote">
              <span />{" "}
              <span className="golden-text-shimmer">MADE OF IDEAS. DRIVEN BY CURIOSITY.</span>{" "}
              <span />
            </div>
          </div>
        </section>
        <ClassroomEnglishSection />
        <section id="explore" className="explore-section">
          <div className="section-intro">
            <div>
              <span className="section-eyebrow">
                <Sparkles size={15} /> THE NEXT CHAPTER
              </span>
              <h2>
                Find your next{" "}
                <span className="golden-text-shimmer font-semibold">inspiration.</span>
              </h2>
            </div>
            <p>পড়ো। জানো। নতুন কিছু তৈরি করো।</p>
          </div>
          <div className="explore-links">
            {sections.slice(0, 3).map((s) => (
              <Link key={s.slug} to="/$section" params={{ section: s.slug }}>
                <s.icon size={24} />
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.label}</p>
                </div>
                <ArrowUpRight size={22} />
              </Link>
            ))}
          </div>
        </section>
      </main>
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
