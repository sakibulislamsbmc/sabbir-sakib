import {
  Play,
  MonitorPlay,
  Film,
  Sparkles,
  Layers,
  ShoppingBag,
  Mic,
  Smartphone,
  Palette,
} from "lucide-react";

export function MobileStoryTray() {
  const stories = [
    {
      id: "showreel",
      label: "Showreel",
      badge: "LIVE",
      ringGradient: "from-rose-500 via-red-500 to-amber-500",
      icon: Play,
      targetId: "classroom-english",
    },
    {
      id: "podcast",
      label: "Podcast",
      badge: "16:9",
      ringGradient: "from-amber-500 via-orange-500 to-rose-500",
      icon: Mic,
      targetId: "classroom-english",
    },
    {
      id: "commercials",
      label: "Commercials",
      badge: "ADS",
      ringGradient: "from-rose-600 via-pink-600 to-red-600",
      icon: ShoppingBag,
      targetId: "classroom-english",
    },
    {
      id: "blender-ai",
      label: "3D & AI",
      badge: "CGI",
      ringGradient: "from-purple-500 via-indigo-500 to-blue-500",
      icon: Sparkles,
      targetId: "classroom-english",
    },
    {
      id: "shorts",
      label: "9:16 Shorts",
      badge: "REELS",
      ringGradient: "from-teal-500 via-emerald-500 to-cyan-500",
      icon: Smartphone,
      targetId: "classroom-english",
    },
    {
      id: "designs",
      label: "Designs",
      badge: "6 POSTS",
      ringGradient: "from-amber-400 via-yellow-500 to-orange-500",
      icon: Palette,
      targetId: "design-portfolio",
    },
    {
      id: "hire",
      label: "Hire Me",
      badge: "OPEN",
      ringGradient: "from-emerald-400 via-green-500 to-teal-500",
      icon: MonitorPlay,
      targetId: "classroom-english",
    },
  ];

  const handleStoryClick = (targetId: string) => {
    const el = document.getElementById(targetId) || document.getElementById("classroom-english");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="md:hidden w-full overflow-x-auto no-scrollbar py-2.5 px-3 bg-[#080b12]/80 backdrop-blur-md border-b border-white/[0.06]">
      <div className="flex items-center gap-3 w-max">
        {stories.map((story) => {
          const Icon = story.icon;
          return (
            <button
              key={story.id}
              type="button"
              onClick={() => handleStoryClick(story.targetId)}
              className="flex flex-col items-center gap-1 group cursor-pointer active:scale-90 transition-transform"
            >
              {/* Story Circular Ring */}
              <div className="relative">
                <div
                  className={`w-[54px] h-[54px] rounded-full p-[2px] bg-gradient-to-tr ${story.ringGradient} shadow-md group-hover:scale-105 transition-transform`}
                >
                  <div className="w-full h-full rounded-full bg-[#0d121c] flex items-center justify-center border border-white/10 overflow-hidden">
                    <Icon className="w-5 h-5 text-white/90 group-hover:text-white group-hover:scale-110 transition-transform" />
                  </div>
                </div>

                {/* Micro Badge */}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 px-1.5 py-[1px] rounded-full bg-black/90 border border-white/20 text-[7.5px] font-mono font-bold text-white tracking-tighter uppercase whitespace-nowrap shadow-sm">
                  {story.badge}
                </span>
              </div>

              {/* Story Title */}
              <span className="text-[10px] text-neutral-300 font-medium tracking-tight mt-0.5 truncate max-w-[58px]">
                {story.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
