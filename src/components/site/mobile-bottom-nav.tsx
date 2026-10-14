import { useState, useEffect } from "react";
import { Link, useRouterState, useNavigate } from "@tanstack/react-router";
import {
  Home,
  MonitorPlay,
  Layers,
  User,
  Sparkles,
  PhoneCall,
  Send,
  X,
  MessageCircle,
  Mail,
  Calendar,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export function MobileBottomNav() {
  const routerState = useRouterState();
  const navigate = useNavigate();
  const currentPath = routerState.location.pathname;

  const [activeTab, setActiveTab] = useState<"home" | "videos" | "designs" | "about" | "contact">(
    "home",
  );
  const [sheetOpen, setSheetOpen] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [projectType, setProjectType] = useState("Commercial Ads & Promo Video");

  // Keep active tab synced with current path
  useEffect(() => {
    if (currentPath === "/about") {
      setActiveTab("about");
    } else if (currentPath === "/contact") {
      setActiveTab("contact");
    } else {
      // Check if hash matches
      const hash = window.location.hash;
      if (hash.includes("design")) {
        setActiveTab("designs");
      } else if (hash.includes("classroom") || hash.includes("video")) {
        setActiveTab("videos");
      } else {
        setActiveTab("home");
      }
    }
  }, [currentPath]);

  const handleNavClick = (tab: "home" | "videos" | "designs" | "about" | "contact") => {
    setActiveTab(tab);

    if (tab === "home") {
      if (currentPath === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate({ to: "/" });
      }
    } else if (tab === "videos") {
      if (currentPath === "/") {
        const el = document.getElementById("classroom-english");
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        navigate({ to: "/" }).then(() => {
          setTimeout(() => {
            const el = document.getElementById("classroom-english");
            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 300);
        });
      }
    } else if (tab === "designs") {
      if (currentPath === "/") {
        const el =
          document.getElementById("design-portfolio") ||
          document.getElementById("classroom-english");
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      } else {
        navigate({ to: "/" }).then(() => {
          setTimeout(() => {
            const el =
              document.getElementById("design-portfolio") ||
              document.getElementById("classroom-english");
            if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
          }, 300);
        });
      }
    } else if (tab === "about") {
      navigate({ to: "/about" });
    } else if (tab === "contact") {
      setSheetOpen(true);
    }
  };

  const handleQuickBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !clientPhone.trim()) return;
    setBookingSuccess(true);
  };

  const resetBooking = () => {
    setBookingSuccess(false);
    setSheetOpen(false);
    setClientName("");
    setClientPhone("");
  };

  return (
    <>
      {/* Fixed Native-Style Mobile App Bottom Tab Bar (Visible on screens < 768px) */}
      <nav
        aria-label="Mobile App Navigation"
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#090d16]/95 backdrop-blur-2xl border-t border-white/10 shadow-[0_-8px_30px_rgba(0,0,0,0.7)] px-2 pt-1.5 pb-[max(12px,env(safe-area-inset-bottom,12px))]"
      >
        <div className="grid grid-cols-5 items-center justify-around gap-1 max-w-md mx-auto">
          {/* 1. Home Tab */}
          <button
            type="button"
            onClick={() => handleNavClick("home")}
            className={`flex flex-col items-center justify-center py-1 px-1 rounded-xl transition-all duration-200 cursor-pointer active:scale-90 ${
              activeTab === "home" && currentPath === "/"
                ? "text-rose-400 font-semibold"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <div
              className={`p-1 rounded-lg ${activeTab === "home" && currentPath === "/" ? "bg-rose-500/15" : ""}`}
            >
              <Home className="w-5 h-5" />
            </div>
            <span className="text-[10px] mt-0.5 tracking-tight">Home</span>
          </button>

          {/* 2. Videos Tab */}
          <button
            type="button"
            onClick={() => handleNavClick("videos")}
            className={`flex flex-col items-center justify-center py-1 px-1 rounded-xl transition-all duration-200 cursor-pointer active:scale-90 ${
              activeTab === "videos"
                ? "text-rose-400 font-semibold"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <div className={`p-1 rounded-lg ${activeTab === "videos" ? "bg-rose-500/15" : ""}`}>
              <MonitorPlay className="w-5 h-5" />
            </div>
            <span className="text-[10px] mt-0.5 tracking-tight">Videos</span>
          </button>

          {/* 3. Center Highlight: Designs Tab */}
          <button
            type="button"
            onClick={() => handleNavClick("designs")}
            className={`flex flex-col items-center justify-center py-1 px-1 rounded-xl transition-all duration-200 cursor-pointer active:scale-90 ${
              activeTab === "designs"
                ? "text-amber-400 font-semibold"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <div className={`p-1 rounded-lg ${activeTab === "designs" ? "bg-amber-500/15" : ""}`}>
              <Layers className="w-5 h-5" />
            </div>
            <span className="text-[10px] mt-0.5 tracking-tight">Designs</span>
          </button>

          {/* 4. About Tab */}
          <button
            type="button"
            onClick={() => handleNavClick("about")}
            className={`flex flex-col items-center justify-center py-1 px-1 rounded-xl transition-all duration-200 cursor-pointer active:scale-90 ${
              currentPath === "/about"
                ? "text-rose-400 font-semibold"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <div className={`p-1 rounded-lg ${currentPath === "/about" ? "bg-rose-500/15" : ""}`}>
              <User className="w-5 h-5" />
            </div>
            <span className="text-[10px] mt-0.5 tracking-tight">About</span>
          </button>

          {/* 5. Quick Hire / Contact Action Sheet Tab */}
          <button
            type="button"
            onClick={() => handleNavClick("contact")}
            className="flex flex-col items-center justify-center py-1 px-1 rounded-xl transition-all duration-200 cursor-pointer active:scale-90 relative text-emerald-400 hover:text-emerald-300"
          >
            <span className="absolute -top-1 right-2 px-1.5 py-0.2 rounded-full bg-emerald-500 text-[8px] font-bold text-black animate-pulse">
              HIRE
            </span>
            <div className="p-1 rounded-lg bg-emerald-500/15">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="text-[10px] mt-0.5 tracking-tight font-medium">Contact</span>
          </button>
        </div>
      </nav>

      {/* Native App-Style Bottom Sheet Modal for Contact & Quick Hire */}
      <Dialog open={sheetOpen} onOpenChange={setSheetOpen}>
        <DialogContent className="sm:max-w-[460px] bg-[#0c1017] text-white border-white/15 p-5 rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
          {/* iOS-Style Sheet Drag Handle */}
          <div className="w-12 h-1.5 rounded-full bg-white/20 mx-auto mb-3" />

          <DialogHeader className="text-left pb-3 border-b border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-[10px] font-bold text-emerald-400 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  AVAILABLE FOR PROJECTS
                </div>
                <DialogTitle className="text-xl font-bold text-white">Sakibul Islam</DialogTitle>
                <p className="text-xs text-neutral-400">
                  Video Editor, Motion Graphics &amp; Visual Designer
                </p>
              </div>
            </div>
          </DialogHeader>

          {bookingSuccess ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-white">বার্তা সফলভাবে পাঠানো হয়েছে!</h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                ধন্যবাদ <strong>{clientName}</strong>! আপনার প্রজেক্টের তথ্য পেয়েছি। খুব শীঘ্রই
                আপনার নম্বরে ({clientPhone}) যোগাযোগ করা হবে।
              </p>
              <Button
                onClick={resetBooking}
                className="w-full bg-[#0ba360] hover:bg-[#098e53] text-white"
              >
                ঠিক আছে
              </Button>
            </div>
          ) : (
            <div className="space-y-4 pt-2">
              {/* Fast Direct Action Buttons */}
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href="https://wa.me/8801828000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/30 text-emerald-300 text-xs font-semibold transition-all active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Chat</span>
                </a>
                <a
                  href="tel:+8801828000000"
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-rose-600/20 hover:bg-rose-600/30 border border-rose-500/30 text-rose-300 text-xs font-semibold transition-all active:scale-95"
                >
                  <PhoneCall className="w-4 h-4 text-rose-400" />
                  <span>Direct Call</span>
                </a>
              </div>

              {/* Quick Inquiry Form */}
              <form onSubmit={handleQuickBookingSubmit} className="space-y-3 pt-1">
                <div>
                  <label className="block text-[11px] font-medium text-neutral-300 mb-1">
                    সার্ভিস ক্যাটাগরি
                  </label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full bg-white/5 border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  >
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
                    <option value="3D Blender Animation & AI" className="bg-neutral-900 text-white">
                      3D Blender Animation &amp; AI
                    </option>
                    <option
                      value="Social Media Post & Banner Design"
                      className="bg-neutral-900 text-white"
                    >
                      Social Media Post &amp; Banner Design
                    </option>
                    <option value="Shorts & Vertical Reels" className="bg-neutral-900 text-white">
                      Shorts &amp; Vertical Reels
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-neutral-300 mb-1">
                    আপনার নাম
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="নাম লিখুন"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full bg-white/5 border border-white/15 rounded-xl px-3 py-2 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-neutral-300 mb-1">
                    মোবাইল / হোয়াটসঅ্যাপ নম্বর
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="01XXXXXXXXX"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="w-full bg-white/5 border border-white/15 rounded-xl px-3 py-2 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    className="w-full bg-[#0ba360] hover:bg-[#098e53] text-white text-xs font-semibold py-2.5 rounded-xl"
                  >
                    <Send className="w-3.5 h-3.5 mr-1.5" />
                    প্রজেক্ট রিকোয়েস্ট পাঠান
                  </Button>
                </div>
              </form>

              {/* Install App Tip */}
              <div className="p-3 bg-white/[0.04] border border-white/10 rounded-xl text-[11px] text-neutral-400 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-white">📱 মোবাইল অ্যাপ হিসেবে ব্যবহার করুন</p>
                  <p className="text-[10px] text-neutral-500 mt-0.5">
                    Safari/Chrome থেকে &apos;Add to Home Screen&apos; চাপুন
                  </p>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 text-[9px] font-mono font-bold">
                  PWA Ready
                </span>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
