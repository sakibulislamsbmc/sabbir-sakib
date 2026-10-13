import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  Sparkles,
  Phone,
  Calendar,
  X,
  Compass,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export interface Branch {
  id: string;
  name: string;
  details: string;
  landmark: string;
}

export interface Program {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  accent: "amber" | "rose" | "teal" | "purple" | "blue" | "emerald";
  bannerBg: string;
  iconBg: string;
}

const BRANCHES: Branch[] = [
  {
    id: "uttara",
    name: "উত্তরা",
    details: "লিফট: ৮, হাউজ: ২, রোড: ৭, সেক্টর: ৩, উত্তরা, ঢাকা",
    landmark: "রাজলক্ষ্মী কমপ্লেক্সের পেছনে",
  },
  {
    id: "panthapath",
    name: "পান্থপথ",
    details: "লিফট: ২, হাউজ: ১৪৭/ এ/ ২, গ্রীন রোড, পান্থপথ, ঢাকা",
    landmark: "পান্থপথ সিগন্যালের উত্তরে",
  },
  {
    id: "mirpur",
    name: "মিরপুর",
    details: "লিফট: ৭, প্লট: ১১৮, সেনপাড়া পর্বতা, মিরপুর- ১০, ঢাকা",
    landmark: "মেট্রোরেল পিলার: ২৬৫",
  },
  {
    id: "moghbazar",
    name: "মগবাজার",
    details: "লিফট: ৩, প্লট: ২০৬, আউটার সার্কুলার রোড, মগবাজার, ঢাকা",
    landmark: "ওয়্যারলেস সার্কেল",
  },
  {
    id: "chittagong",
    name: "চট্টগ্রাম",
    details: "লিফট: ৪, প্লট: ১৬৩, কাপাসগোলা রোড, চকবাজার, চট্টগ্রাম",
    landmark: "অলি খাঁ মসজিদের পূর্বে",
  },
];

const PROGRAMS: Program[] = [
  {
    id: "kids-english",
    badge: "KIDS ENGLISH",
    title: "Kids' English",
    subtitle: "For KG - Class 5",
    accent: "amber",
    bannerBg: "from-amber-600 via-orange-600 to-rose-700",
    iconBg: "bg-amber-500/20 text-amber-300",
  },
  {
    id: "spoken-english",
    badge: "SPOKEN ENGLISH",
    title: "Spoken English...",
    subtitle: "Offline",
    accent: "rose",
    bannerBg: "from-rose-700 via-red-700 to-red-950",
    iconBg: "bg-rose-500/20 text-rose-300",
  },
  {
    id: "spoken-junior",
    badge: "SPOKEN ENGLISH JUNIOR",
    title: "Spoken English...",
    subtitle: "For Class 6-10",
    accent: "teal",
    bannerBg: "from-slate-800 via-teal-900 to-slate-950",
    iconBg: "bg-teal-500/20 text-teal-300",
  },
  {
    id: "ielts-programme",
    badge: "IELTS PROGRAMME",
    title: "IELTS Programme",
    subtitle: "For HSC & Above",
    accent: "purple",
    bannerBg: "from-red-900 via-amber-950 to-neutral-950",
    iconBg: "bg-red-500/20 text-red-300",
  },
  {
    id: "study-abroad",
    badge: "STUDY ABROAD",
    title: "Study Abroad",
    subtitle: "For HSC & Above",
    accent: "blue",
    bannerBg: "from-sky-700 via-blue-900 to-slate-950",
    iconBg: "bg-blue-500/20 text-blue-300",
  },
  {
    id: "ielts-mock",
    badge: "IELTS CONTENT BANK",
    title: "IELTS Mock Test",
    subtitle: "10MS English Centre",
    accent: "emerald",
    bannerBg: "from-neutral-800 via-slate-900 to-black",
    iconBg: "bg-emerald-500/20 text-emerald-300",
  },
];

export function ClassroomEnglishSection() {
  const [selectedBranch, setSelectedBranch] = useState<string>("uttara");
  const [selectedProgram, setSelectedProgram] = useState<string>("kids-english");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [studentName, setStudentName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>("আগামীকাল বিকাল ৪:০০");

  const currentBranch = BRANCHES.find((b) => b.id === selectedBranch) ?? BRANCHES[0];
  const currentProgram = PROGRAMS.find((p) => p.id === selectedProgram) ?? PROGRAMS[0];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim() || !phoneNumber.trim()) return;
    setFormSubmitted(true);
  };

  const handleResetModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setFormSubmitted(false);
      setStudentName("");
      setPhoneNumber("");
    }, 300);
  };

  return (
    <section id="classroom-english" className="classroom-section-wrapper py-14 px-4 sm:px-6">
      <div className="max-w-[1240px] mx-auto">
        {/* Main Dark Card Container matching screenshot & hero design system */}
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

          {/* Section Heading with Warm Coral/Reddish Gradient */}
          <div className="text-center mb-8 sm:mb-10 relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white drop-shadow-sm font-sans">
              ক্লাসরুমে <span className="golden-coral-shimmer">ইংরেজি শেখার</span> নতুন আনন্দ
            </h2>
            <p className="text-sm text-neutral-400 mt-2">
              সরাসরি অফলাইন সেন্টারে অভিজ্ঞ শিক্ষকদের সাথে আনন্দের মাধ্যমে ইংরেজি শিখুন
            </p>
          </div>

          {/* 5 Branch Cards Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-8 relative z-10">
            {BRANCHES.map((branch) => {
              const isSelected = selectedBranch === branch.id;
              return (
                <button
                  key={branch.id}
                  type="button"
                  onClick={() => setSelectedBranch(branch.id)}
                  className={`branch-card text-left p-3.5 cursor-pointer ${
                    isSelected
                      ? "!border-rose-500/90 shadow-[0_0_20px_rgba(244,83,59,0.28)] !bg-white/[0.09]"
                      : "hover:!bg-white/[0.06]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-semibold text-white text-base font-sans">
                      {branch.name}
                    </span>
                    {isSelected && <span className="w-2 h-2 rounded-full bg-rose-500" />}
                  </div>
                  <p className="text-[11px] leading-relaxed text-neutral-400 line-clamp-2">
                    {branch.details}
                  </p>
                  <p className="text-[10px] text-neutral-500 mt-1 font-medium truncate">
                    ({branch.landmark})
                  </p>
                </button>
              );
            })}
          </div>

          {/* 6 Program Course Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 mb-10 relative z-10">
            {PROGRAMS.map((prog) => {
              const isSelected = selectedProgram === prog.id;
              return (
                <div
                  key={prog.id}
                  onClick={() => setSelectedProgram(prog.id)}
                  className={`lower-program-card p-3 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? prog.accent === "amber"
                        ? "!border-amber-500 ring-2 ring-amber-500/60 shadow-[0_0_28px_rgba(245,158,11,0.35)]"
                        : "!border-rose-500 ring-2 ring-rose-500/60 shadow-[0_0_28px_rgba(244,83,59,0.35)]"
                      : ""
                  }`}
                >
                  {/* Visual Artwork Banner matching the course theme */}
                  <div
                    className={`relative w-full aspect-square rounded-[20px] overflow-hidden mb-3 bg-gradient-to-br ${prog.bannerBg} flex flex-col items-center justify-center p-3 shadow-inner`}
                  >
                    {/* Badge Pill Header */}
                    <div className="absolute top-2 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-xs border border-white/15 text-[8px] font-bold text-white tracking-wider uppercase text-center max-w-[90%] truncate">
                      <span className="golden-text-shimmer">{prog.badge}</span>
                    </div>

                    {/* Thematic Visual Emblem */}
                    {prog.id === "kids-english" && (
                      <div className="flex flex-col items-center justify-center mt-3 text-center">
                        <div className="text-3xl filter drop-shadow">✈️</div>
                        <span className="text-[11px] font-black tracking-tight mt-1 uppercase golden-text-shimmer">
                          Fun & Learn
                        </span>
                      </div>
                    )}

                    {prog.id === "spoken-english" && (
                      <div className="flex flex-col items-center justify-center mt-3 text-center">
                        <div className="text-3xl filter drop-shadow">🇬🇧</div>
                        <span className="text-[10px] font-bold tracking-tight mt-1 golden-text-shimmer">
                          Fluency 100%
                        </span>
                      </div>
                    )}

                    {prog.id === "spoken-junior" && (
                      <div className="flex flex-col items-center justify-center mt-3 text-center">
                        <div className="text-3xl filter drop-shadow">🎒</div>
                        <span className="text-[10px] font-bold tracking-tight mt-1 golden-text-shimmer">
                          Class 6-10
                        </span>
                      </div>
                    )}

                    {prog.id === "ielts-programme" && (
                      <div className="flex flex-col items-center justify-center mt-3 text-center">
                        <GraduationCap className="w-8 h-8 text-amber-400 drop-shadow" />
                        <span className="text-[10px] font-bold tracking-tight mt-1 golden-text-shimmer">
                          Target 7.5+
                        </span>
                      </div>
                    )}

                    {prog.id === "study-abroad" && (
                      <div className="flex flex-col items-center justify-center mt-3 text-center">
                        <Compass className="w-8 h-8 text-sky-300 drop-shadow" />
                        <span className="text-[10px] font-bold tracking-tight mt-1 golden-text-shimmer">
                          UK • USA • CAN
                        </span>
                      </div>
                    )}

                    {prog.id === "ielts-mock" && (
                      <div className="flex flex-col items-center justify-center mt-3 text-center">
                        <div className="text-2xl font-black text-rose-500 bg-white/90 px-2 py-0.5 rounded shadow">
                          IELTS
                        </div>
                        <span className="text-[9px] font-semibold mt-1 golden-text-shimmer">
                          Mock Test
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Caption */}
                  <div className="text-center px-1 pb-1">
                    <h3 className="font-semibold text-white text-[13px] sm:text-sm tracking-tight truncate">
                      {prog.title}
                    </h3>
                    <p className="text-[11px] text-neutral-400 mt-0.5 font-medium truncate">
                      {prog.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Action CTA Button matching green screenshot button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#0ba360] hover:bg-[#098e53] text-white font-semibold text-sm sm:text-base shadow-[0_8px_25px_rgba(11,163,96,0.35)] hover:shadow-[0_10px_30px_rgba(11,163,96,0.5)] transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>অফলাইন সেন্টারে ফ্রি ক্লাস করুন</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Free Trial Class Booking Dialog */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[480px] bg-[#12151d] text-white border-white/10 p-6 rounded-2xl shadow-2xl">
          <DialogHeader className="relative">
            <DialogTitle className="text-xl font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-emerald-400" />
              ফ্রি ক্লাসের জন্য বুকিং দিন
            </DialogTitle>
          </DialogHeader>

          {formSubmitted ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-white">বুকিং সফল হয়েছে!</h3>
              <p className="text-sm text-neutral-300">
                ধন্যবাদ <strong>{studentName}</strong>!{" "}
                <span className="text-emerald-400 font-semibold">{currentBranch?.name}</span>{" "}
                সেন্টারে{" "}
                <span className="text-amber-300 font-semibold">{currentProgram?.title}</span>-এর
                ফ্রি ক্লাসের জন্য আপনার আসন সংরক্ষিত হয়েছে।
              </p>
              <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-xs text-neutral-400 text-left space-y-1">
                <p>
                  <strong>সেন্টার ঠিকানা:</strong> {currentBranch?.details}
                </p>
                <p>
                  <strong>ল্যান্ডমার্ক:</strong> {currentBranch?.landmark}
                </p>
                <p>
                  <strong>সময়সূচী:</strong> {selectedDate}
                </p>
              </div>
              <p className="text-xs text-neutral-400">
                আমাদের প্রতিনিধি শীঘ্রই আপনার দেওয়া নম্বরে ({phoneNumber}) যোগাযোগ করবেন।
              </p>
              <Button onClick={handleResetModal} className="w-full bg-[#0ba360] hover:bg-[#098e53]">
                সম্পন্ন হয়েছে
              </Button>
            </div>
          ) : (
            <form onSubmit={handleBookingSubmit} className="space-y-4 pt-2">
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                  সেন্টার নির্বাচন করুন
                </label>
                <select
                  value={selectedBranch}
                  onChange={(e) => setSelectedBranch(e.target.value)}
                  className="w-full bg-white/5 border border-white/15 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                >
                  {BRANCHES.map((b) => (
                    <option key={b.id} value={b.id} className="bg-neutral-900 text-white">
                      {b.name} ({b.landmark})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                  প্রোগ্রাম নির্বাচন করুন
                </label>
                <select
                  value={selectedProgram}
                  onChange={(e) => setSelectedProgram(e.target.value)}
                  className="w-full bg-white/5 border border-white/15 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                >
                  {PROGRAMS.map((p) => (
                    <option key={p.id} value={p.id} className="bg-neutral-900 text-white">
                      {p.title} - {p.subtitle}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                  শিক্ষার্থীর নাম
                </label>
                <input
                  type="text"
                  required
                  placeholder="আপনার পুরো নাম লিখুন"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="w-full bg-white/5 border border-white/15 rounded-lg px-3 py-2 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                  মোবাইল নম্বর
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
                  পছন্দের সময়
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-neutral-400 absolute left-3 top-2.5" />
                  <select
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full bg-white/5 border border-white/15 rounded-lg pl-9 pr-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  >
                    <option value="আগামীকাল বিকাল ৪:০০" className="bg-neutral-900 text-white">
                      আগামীকাল বিকাল ৪:০০
                    </option>
                    <option value="আগামীকাল সন্ধ্যা ৬:৩০" className="bg-neutral-900 text-white">
                      আগামীকাল সন্ধ্যা ৬:৩০
                    </option>
                    <option value="আগামী শুক্রবার সকাল ১০:৩০" className="bg-neutral-900 text-white">
                      আগামী শুক্রবার সকাল ১০:৩০
                    </option>
                    <option value="আগামী শুক্রবার বিকাল ৫:০০" className="bg-neutral-900 text-white">
                      আগামী শুক্রবার বিকাল ৫:০০
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
                  বুকিং নিশ্চিত করুন
                </Button>
              </div>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
