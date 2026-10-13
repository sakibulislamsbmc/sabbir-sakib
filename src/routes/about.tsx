import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  User,
  Compass,
  Lightbulb,
  Target,
  Heart,
  Sparkles,
  BookOpen,
  Globe2,
} from "lucide-react";
import { Header } from "@/components/site/header";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Sabbir Sakib" },
      {
        name: "description",
        content:
          "The story, vision, principles, and journey of Sabbir Sakib — educator, builder, and creative explorer.",
      },
      { property: "og:title", content: "About — Sabbir Sakib" },
      {
        property: "og:description",
        content:
          "The story, vision, principles, and journey of Sabbir Sakib — educator, builder, and creative explorer.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="site-shell">
      <Header />
      <main className="content-page category-blog">
        <div className="mb-6">
          <Button
            variant="ghost"
            asChild
            className="hover:bg-white/10 text-white/80 hover:text-white"
          >
            <Link to="/">
              <ArrowLeft className="mr-2" size={16} />
              Home
            </Link>
          </Button>
        </div>

        <div className="page-heading">
          <User size={48} strokeWidth={1.5} className="text-[#a855f7] drop-shadow-sm" />
          <p className="section-eyebrow">
            <span className="status-dot" />
            <span className="golden-text-shimmer font-semibold tracking-wider">
              SABBIR SAKIB / STORY & PHILOSOPHY
            </span>
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mt-2">
            About<span className="text-[#a855f7]">.</span>
          </h1>
          <p className="text-xl text-white/70 mt-2 font-['Hind_Siliguri',sans-serif]">
            শেখা, শেখানো আর কৌতূহলের এক অবিরাম যাত্রা
          </p>
          <p className="max-w-2xl text-sm sm:text-base text-white/60 mt-4 leading-relaxed">
            Curiosity is the engine of human growth. Discover who I am, what drives my work, and the
            philosophy behind my courses, software, and creative experiments.
          </p>
        </div>

        {/* Story Section */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6 text-white/80 leading-relaxed text-base">
            <div className="p-6 rounded-2xl bg-black/40 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
                <Compass className="text-[#a855f7]" size={22} />
                Who Am I?
              </h2>
              <p className="font-['Hind_Siliguri',sans-serif] text-lg text-white/90 mb-3">
                আমি সাব্বির সাকীব — একজন লার্নার, এডুকেটর এবং ক্রিয়েটিভ বিল্ডার।
              </p>
              <p>
                Over the past several years, I have been deeply engaged in transforming how students
                and young minds discover, learn, and master modern skills. From simplifying English
                communication barriers to designing interactive digital experiences, my mission is
                to make high-standard education accessible, captivating, and genuinely enjoyable.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-black/40 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
                <Lightbulb className="text-amber-400" size={22} />
                My Core Philosophy
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="font-bold text-white text-sm mb-1">Curiosity Over Compliance</div>
                  <p className="text-xs text-white/70">
                    True learning never occurs through pressure or rote memorization; it starts when
                    curiosity sparks genuine internal motivation.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="font-bold text-white text-sm mb-1">Clarity & Simplicity</div>
                  <p className="text-xs text-white/70">
                    If you cannot explain it simply, you do not understand it well enough. Every
                    lesson and tool is distilled to its core essence.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="font-bold text-white text-sm mb-1">Interactive & Tangible</div>
                  <p className="text-xs text-white/70">
                    Passive listening produces passive understanding. Real growth requires active
                    speaking, building, and instant constructive feedback.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="font-bold text-white text-sm mb-1">Lifelong Compounding</div>
                  <p className="text-xs text-white/70">
                    Small incremental improvements every single day yield exponential compounding
                    knowledge and personal breakthroughs over years.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-black/40 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
                <Target className="text-emerald-400" size={22} />
                What I Build & Teach
              </h2>
              <p>
                Whether it's the Classroom English initiatives, immersive Spoken English frameworks,
                IELTS training modules, or modern software prototypes, each initiative is engineered
                with meticulous care to deliver immediate transformation in the learner's confidence
                and capability.
              </p>
            </div>
          </div>

          {/* Quick Sidebar Profile Highlights */}
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-gradient-to-b from-purple-950/40 to-black/60 border border-purple-500/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-300 font-bold text-xl">
                  SS
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg leading-tight">Sabbir Sakib</h3>
                  <p className="text-xs text-purple-300">Educator & Creator</p>
                </div>
              </div>

              <div className="space-y-3 pt-3 border-t border-white/10 text-xs">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-white/60">Focus Areas</span>
                  <span className="text-white font-semibold">EdTech, English, Media</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-white/60">Community</span>
                  <span className="text-white font-semibold">10 Minute School & Beyond</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-white/60">Language</span>
                  <span className="text-white font-semibold">English & Bengali</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-white/60">Location</span>
                  <span className="text-white font-semibold">Dhaka, Bangladesh</span>
                </div>
              </div>

              <div className="mt-6">
                <Button
                  asChild
                  className="w-full bg-[#a855f7] hover:bg-[#9333ea] text-white font-bold text-xs h-9"
                >
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-black/30 border border-white/10 text-xs text-white/70 space-y-2">
              <div className="flex items-center gap-2 text-white font-semibold mb-2">
                <Globe2 size={15} className="text-[#0ba360]" />
                Personal Mission
              </div>
              <p>
                "Empowering 1,000,000 young learners across Bangladesh to speak English confidently
                and leverage technology to create global opportunities."
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
