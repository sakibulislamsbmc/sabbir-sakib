import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Search,
  MessageCircle,
  Sparkles,
  CheckCircle2,
  Menu,
  X,
  Phone,
  Film,
  Layers,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export function MobileAppHeader() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const searchItems = [
    {
      title: "Nafees Selim Podcast",
      subtitle: "16:9 Long-Form Talk Show Edit",
      category: "video",
      target: "classroom-english",
    },
    {
      title: "Promotional Ads Video",
      subtitle: "Commercial E-Commerce for Ghorer Bazar",
      category: "video",
      target: "classroom-english",
    },
    {
      title: "Blender 3D & AI Commercial",
      subtitle: "CGI Product Visuals & AI Generation",
      category: "video",
      target: "classroom-english",
    },
    {
      title: "Product Motion Graphics Reel",
      subtitle: "3D Kinetic Typography & Motion",
      category: "video",
      target: "classroom-english",
    },
    {
      title: "Modiology Brand Promo Reel",
      subtitle: "Viral Vertical Apparel Showcase",
      category: "video",
      target: "classroom-english",
    },
    {
      title: "Barnoi Lifestyle TVC Commercial",
      subtitle: "Cinematic Television Campaign",
      category: "video",
      target: "classroom-english",
    },
    {
      title: "Islamic Ad Creatives",
      subtitle: "Social Media & Banner Design Portfolio",
      category: "design",
      target: "design-portfolio",
    },
    {
      title: "Quran Academy Campaign",
      subtitle: "Online Learning Platform Ad",
      category: "design",
      target: "design-portfolio",
    },
    {
      title: "Brand Carousel Posts",
      subtitle: "Multi-Slide Feed Templates",
      category: "design",
      target: "design-portfolio",
    },
    {
      title: "Web & App UI Showcase",
      subtitle: "Landing Page & Mobile Design",
      category: "design",
      target: "design-portfolio",
    },
    {
      title: "Marketing Agency Posts",
      subtitle: "3D Promotional Ad Suite",
      category: "design",
      target: "design-portfolio",
    },
    {
      title: "Corporate Content Bank",
      subtitle: "9-Post Social Media Kit",
      category: "design",
      target: "design-portfolio",
    },
  ];

  const filteredItems = searchItems.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleSearchSelect = (target: string) => {
    setSearchOpen(false);
    const el = document.getElementById(target) || document.getElementById("classroom-english");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Mobile Sticky Native App Bar (Visible on screens < 768px) */}
      <div className="md:hidden sticky top-0 z-40 bg-[#080b12]/95 backdrop-blur-2xl border-b border-white/10 px-3.5 py-2.5 transition-all">
        <div className="flex items-center justify-between">
          {/* Left: Creator Profile Identity with Verified Badge */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="relative">
              {/* Profile Avatar Disc */}
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-rose-500 via-amber-500 to-indigo-600 p-[1.5px] shadow-md">
                <div className="w-full h-full rounded-full bg-[#0d121d] flex items-center justify-center overflow-hidden">
                  <span className="text-xs font-bold text-white tracking-wider">SI</span>
                </div>
              </div>
              {/* Live Online Pulsing Indicator */}
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-[#080b12]" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="font-bold text-sm text-white tracking-tight group-hover:text-rose-400 transition-colors">
                  Sakibul Islam
                </span>
                <span
                  className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full bg-blue-500 text-white text-[9px] font-bold"
                  title="Verified Creator"
                >
                  ✓
                </span>
              </div>
              <span className="text-[10px] text-neutral-400 font-medium leading-none flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Video Editor &amp; Designer
              </span>
            </div>
          </Link>

          {/* Right: Quick Action Controls */}
          <div className="flex items-center gap-1.5">
            {/* Search Trigger */}
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Search portfolio"
              className="p-2 rounded-xl bg-white/[0.06] hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white transition-all active:scale-90"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Quick WhatsApp Button */}
            <a
              href="https://wa.me/8801828000000"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Direct WhatsApp Message"
              className="p-2 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-400 transition-all active:scale-90"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            {/* App Drawer Menu Trigger */}
            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open App Menu"
              className="p-2 rounded-xl bg-white/[0.06] hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white transition-all active:scale-90"
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile App Drawer Dialog */}
      <Dialog open={drawerOpen} onOpenChange={setDrawerOpen}>
        <DialogContent className="sm:max-w-[400px] bg-[#0c1017] text-white border-white/15 p-5 rounded-3xl shadow-2xl">
          <DialogHeader className="pb-3 border-b border-white/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-rose-500 via-amber-500 to-indigo-600 p-[1.5px]">
                  <div className="w-full h-full rounded-full bg-[#0d121d] flex items-center justify-center font-bold text-sm text-white">
                    SI
                  </div>
                </div>
                <div>
                  <DialogTitle className="text-base font-bold text-white flex items-center gap-1.5">
                    <span>Sakibul Islam</span>
                    <span className="w-3.5 h-3.5 rounded-full bg-blue-500 text-white text-[9px] flex items-center justify-center">
                      ✓
                    </span>
                  </DialogTitle>
                  <p className="text-[11px] text-neutral-400">
                    Professional Video &amp; Design Portfolio
                  </p>
                </div>
              </div>
            </div>
          </DialogHeader>

          {/* Drawer Links */}
          <div className="space-y-2 py-3">
            <Link
              to="/"
              onClick={() => setDrawerOpen(false)}
              className="flex items-center justify-between p-3 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-sm font-medium transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-rose-500/15 text-rose-400">
                  <Film className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">Home &amp; Video Streams</div>
                  <div className="text-[10px] text-neutral-400">
                    Watch 6 YouTube projects streaming live
                  </div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-neutral-400" />
            </Link>

            <Link
              to="/about"
              onClick={() => setDrawerOpen(false)}
              className="flex items-center justify-between p-3 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-sm font-medium transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-indigo-500/15 text-indigo-400">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">About &amp; 3D Showcase</div>
                  <div className="text-[10px] text-neutral-400">
                    3D cylinder, experience &amp; motion skills
                  </div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-neutral-400" />
            </Link>

            <Link
              to="/portfolio"
              onClick={() => setDrawerOpen(false)}
              className="flex items-center justify-between p-3 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-sm font-medium transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-amber-500/15 text-amber-400">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">Design &amp; Artwork Portfolio</div>
                  <div className="text-[10px] text-neutral-400">
                    Social media posts &amp; branding graphics
                  </div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-neutral-400" />
            </Link>

            <Link
              to="/contact"
              onClick={() => setDrawerOpen(false)}
              className="flex items-center justify-between p-3 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-sm font-medium transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-emerald-500/15 text-emerald-400">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">Contact &amp; Bookings</div>
                  <div className="text-[10px] text-neutral-400">
                    Get in touch for your next project
                  </div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-neutral-400" />
            </Link>
          </div>

          {/* Direct WhatsApp Callout */}
          <div className="p-3.5 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-white">দ্রুত যোগাযোগের জন্য</p>
              <p className="text-[11px] text-emerald-300">হোয়াটসঅ্যাপে সরাসরি চ্যাট করুন</p>
            </div>
            <a
              href="https://wa.me/8801828000000"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-xl bg-emerald-500 text-black text-xs font-bold flex items-center gap-1.5 shadow-md active:scale-95"
            >
              <span>Chat Now</span>
              <MessageCircle className="w-3.5 h-3.5" />
            </a>
          </div>
        </DialogContent>
      </Dialog>

      {/* Instant Search Dialog */}
      <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
        <DialogContent className="sm:max-w-[480px] bg-[#0c1017] text-white border-white/15 p-4 rounded-3xl shadow-2xl">
          <div className="relative mb-3">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-3" />
            <input
              autoFocus
              type="text"
              placeholder="Search videos, ads, motion reels, designs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/15 rounded-2xl pl-9 pr-3 py-2.5 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-rose-500"
            />
          </div>

          <div className="space-y-1.5 max-h-[50vh] overflow-y-auto">
            {filteredItems.map((item, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSearchSelect(item.target)}
                className="w-full text-left p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] transition-colors flex items-center justify-between"
              >
                <div>
                  <p className="text-xs font-semibold text-white">{item.title}</p>
                  <p className="text-[10px] text-neutral-400">{item.subtitle}</p>
                </div>
                <span
                  className={`text-[9px] px-2 py-0.5 rounded-full font-mono font-bold uppercase ${
                    item.category === "video"
                      ? "bg-rose-500/20 text-rose-300"
                      : "bg-amber-500/20 text-amber-300"
                  }`}
                >
                  {item.category}
                </span>
              </button>
            ))}
            {filteredItems.length === 0 && (
              <p className="text-xs text-neutral-400 text-center py-4">
                No results found for &quot;{searchQuery}&quot;
              </p>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
