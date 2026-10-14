import { useState } from "react";
import { Star, Sparkles, Quote, CheckCircle2, Play, Pause } from "lucide-react";

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  initials: string;
  rating: number;
  badge?: string;
  accent: "amber" | "rose" | "emerald" | "sky" | "purple" | "indigo";
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "review-1",
    quote: "One word when I saw the delivery: perfect. From now on, all our editing goes through Sabbir.",
    author: "Md Jabed Hossen",
    role: "Founder, Creative iQ",
    initials: "MJ",
    rating: 5,
    badge: "Commercial Video",
    accent: "rose",
  },
  {
    id: "review-2",
    quote: "ডেডলাইনের আগেই ডেলিভারি, কোয়ালিটি নিয়ে কোনো কম্প্রোমাইজ নেই। সাব্বিরের কাজে চোখ বন্ধ করে ভরসা করা যায়।",
    author: "Tanvir Ahmed",
    role: "YouTube Creator",
    initials: "TA",
    rating: 5,
    badge: "YouTube Retention",
    accent: "amber",
  },
  {
    id: "review-3",
    quote: "The work came out perfect — and he stayed patient through every single revision until it was exactly right.",
    author: "Ashikur Rahman",
    role: "Founder, Alfa Creative",
    initials: "AR",
    rating: 5,
    badge: "Brand Identity",
    accent: "emerald",
  },
  {
    id: "review-4",
    quote: "রিলসের রিটেনশন আগের চেয়ে অনেক বেড়ে গেছে। ওর এডিটিংয়ে আলাদা একটা প্রাণ আছে।",
    author: "Sadia Islam",
    role: "Online Business Owner",
    initials: "SI",
    rating: 5,
    badge: "Shorts & Reels",
    accent: "sky",
  },
  {
    id: "review-5",
    quote: "Thank you for the creative work. I recommend Sabbir to everyone — without a second thought.",
    author: "Amit",
    role: "Founder, Maa App",
    initials: "A",
    rating: 5,
    badge: "App Promo Creative",
    accent: "purple",
  },
  {
    id: "review-6",
    quote: "Fast, communicative and genuinely creative — he treats your project like it's his own.",
    author: "Daniel M.",
    role: "Content Strategist",
    initials: "DM",
    rating: 5,
    badge: "Long-form Podcast",
    accent: "amber",
  },
  {
    id: "review-7",
    quote: "এক কথায়, কাজ দেখে মন ভরে গেছে। বারবার ফিরে আসার মতো একজন এডিটর।",
    author: "Rafiul Islam",
    role: "Startup Founder",
    initials: "RI",
    rating: 5,
    badge: "Product Showcase",
    accent: "emerald",
  },
  {
    id: "review-8",
    quote: "Wow — excellent. Great job, Sabbir. Thank you!",
    author: "Joy",
    role: "U.S. Army Officer",
    initials: "J",
    rating: 5,
    badge: "Specialized Visuals",
    accent: "rose",
  },
  {
    id: "review-9",
    quote: "His 3D animation and Blender visuals gave our product campaign a cinematic edge. Client engagement spiked immediately.",
    author: "Mahmud Hasan",
    role: "Marketing Director, TechVibe",
    initials: "MH",
    rating: 5,
    badge: "3D Blender & VFX",
    accent: "sky",
  },
  {
    id: "review-10",
    quote: "অডিও মিক্সিং, কালার গ্রেডিং থেকে শুরু করে পেসিং—সবকিছুতেই প্রফেশনাল ছোঁয়া। সত্যি অসাধারণ কাজ!",
    author: "Nafis Kamal",
    role: "Media Producer & Host",
    initials: "NK",
    rating: 5,
    badge: "Studio Sound & Grade",
    accent: "indigo",
  },
];

const ACCENT_STYLES = {
  rose: {
    avatarBg: "from-rose-500/25 to-pink-600/35 border-rose-400/40 text-rose-200",
    glow: "rgba(244, 63, 94, 0.18)",
    badgeBg: "bg-rose-500/15 border-rose-500/30 text-rose-300",
    borderHover: "hover:border-rose-400/50",
  },
  amber: {
    avatarBg: "from-amber-500/25 to-yellow-600/35 border-amber-400/40 text-amber-200",
    glow: "rgba(245, 158, 11, 0.18)",
    badgeBg: "bg-amber-500/15 border-amber-500/30 text-amber-300",
    borderHover: "hover:border-amber-400/50",
  },
  emerald: {
    avatarBg: "from-emerald-500/25 to-teal-600/35 border-emerald-400/40 text-emerald-200",
    glow: "rgba(16, 185, 129, 0.18)",
    badgeBg: "bg-emerald-500/15 border-emerald-500/30 text-emerald-300",
    borderHover: "hover:border-emerald-400/50",
  },
  sky: {
    avatarBg: "from-sky-500/25 to-blue-600/35 border-sky-400/40 text-sky-200",
    glow: "rgba(14, 165, 233, 0.18)",
    badgeBg: "bg-sky-500/15 border-sky-500/30 text-sky-300",
    borderHover: "hover:border-sky-400/50",
  },
  purple: {
    avatarBg: "from-purple-500/25 to-violet-600/35 border-purple-400/40 text-purple-200",
    glow: "rgba(168, 85, 247, 0.18)",
    badgeBg: "bg-purple-500/15 border-purple-500/30 text-purple-300",
    borderHover: "hover:border-purple-400/50",
  },
  indigo: {
    avatarBg: "from-indigo-500/25 to-blue-700/35 border-indigo-400/40 text-indigo-200",
    glow: "rgba(99, 102, 241, 0.18)",
    badgeBg: "bg-indigo-500/15 border-indigo-500/30 text-indigo-300",
    borderHover: "hover:border-indigo-400/50",
  },
};

export function TestimonialsSection() {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate items twice to ensure endless continuous seamless train scrolling loop
  const duplicatedItems = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <div className="testimonials-section mt-10 sm:mt-16 relative z-10 w-full max-w-[1240px] mx-auto">
      {/* Outer Glow Backdrop */}
      <div
        className="absolute -inset-4 bg-gradient-to-r from-rose-500/10 via-amber-500/10 to-indigo-500/10 rounded-[44px] blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Main Transparent Plasma-Style Frosted Glass Container */}
      <div className="relative rounded-[32px] sm:rounded-[44px] border border-white/12 bg-white/[0.03] backdrop-blur-2xl p-6 sm:p-10 md:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.65)] overflow-hidden">
        {/* Subtle Ambient Plasma Light Blobs inside container */}
        <div
          className="absolute -top-24 -left-20 w-72 h-72 bg-rose-500/12 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-24 -right-20 w-80 h-80 bg-amber-500/12 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] backdrop-blur-md border border-white/15 text-xs text-neutral-300 shadow-lg mb-3.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-semibold text-white tracking-wide">
              Testimonials — <span className="text-amber-400 font-bold">5.0★</span> average
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white drop-shadow-sm font-sans">
            What clients keep <span className="golden-coral-shimmer font-extrabold">saying.</span>
          </h3>

          <p className="text-xs sm:text-sm text-neutral-400 mt-2.5 max-w-xl mx-auto leading-relaxed">
            Real feedback from startup founders, YouTubers, online business owners &amp; creators
            working with Sabbir.
          </p>

          {/* Interactive Train Scroll Controls */}
          <div className="mt-4 flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => setIsPaused(!isPaused)}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] text-neutral-300 transition-colors cursor-pointer"
              title={isPaused ? "Resume auto-scroll" : "Pause auto-scroll"}
            >
              {isPaused ? (
                <>
                  <Play className="w-3 h-3 text-emerald-400 fill-current" />
                  <span>Resume Train</span>
                </>
              ) : (
                <>
                  <Pause className="w-3 h-3 text-neutral-400" />
                  <span>Pause on Hover / Click</span>
                </>
              )}
            </button>
            <span className="text-[11px] text-neutral-500">• 10 Client Stories</span>
          </div>
        </div>

        {/* Train Scroll Track with Gradient Edge Fades */}
        <div
          className="relative w-full overflow-hidden py-3"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          }}
        >
          {/* Continuous Train Animation Line */}
          <div
            className={`flex gap-5 w-max will-change-transform ${
              isPaused ? "[animation-play-state:paused]" : ""
            } animate-testimonials-train hover:[animation-play-state:paused]`}
          >
            {duplicatedItems.map((item, index) => {
              const accent = ACCENT_STYLES[item.accent];
              return (
                <div
                  key={`${item.id}-${index}`}
                  className={`w-[300px] sm:w-[350px] md:w-[380px] shrink-0 rounded-2xl sm:rounded-3xl p-5 sm:p-6 transition-all duration-300 relative group cursor-pointer ${accent.borderHover}`}
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255, 255, 255, 0.065) 0%, rgba(255, 255, 255, 0.02) 100%)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    borderTop: "1px solid rgba(255, 255, 255, 0.22)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    boxShadow:
                      "0 15px 35px -5px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.12)",
                  }}
                >
                  {/* Subtle Plasma Hover Glow */}
                  <div
                    className="absolute -inset-0.5 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10 blur-sm"
                    style={{ background: accent.glow }}
                  />

                  {/* Header Row: Stars & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3.5">
                    {/* 5-Star Rating */}
                    <div className="flex items-center gap-1 text-amber-400">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.6)]"
                        />
                      ))}
                    </div>

                    {item.badge && (
                      <span
                        className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full border tracking-wide uppercase ${accent.badgeBg}`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Quote Body with Plasma Frosted Accent */}
                  <div className="relative mb-5 min-h-[74px]">
                    <Quote
                      className="w-5 h-5 text-white/15 absolute -top-1.5 -left-1 pointer-events-none"
                      strokeWidth={1.5}
                    />
                    <p className="text-[13px] sm:text-sm text-neutral-200 leading-relaxed pl-4 font-normal">
                      "{item.quote}"
                    </p>
                  </div>

                  {/* Client Info: Rounded Plasma Avatar + Details */}
                  <div className="flex items-center gap-3 pt-3.5 border-t border-white/10">
                    {/* Distinct Circular Plasma Avatar with Initials */}
                    <div
                      className={`w-11 h-11 rounded-full bg-gradient-to-br border flex items-center justify-center font-bold text-sm tracking-wider shadow-md shrink-0 ${accent.avatarBg}`}
                    >
                      <span>{item.initials}</span>
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-bold text-white text-sm truncate">{item.author}</h4>
                        <CheckCircle2
                          className="w-3.5 h-3.5 text-emerald-400 shrink-0"
                          title="Verified Client"
                        />
                      </div>
                      <p className="text-xs text-neutral-400 truncate mt-0.5">{item.role}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
