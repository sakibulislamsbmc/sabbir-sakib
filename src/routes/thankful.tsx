import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  HeartHandshake,
  Sparkles,
  Heart,
  Quote,
  Users,
  Award,
  BookHeart,
} from "lucide-react";
import { Header } from "@/components/site/header";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/thankful")({
  head: () => ({
    meta: [
      { title: "Thankful — Sabbir Sakib" },
      {
        name: "description",
        content:
          "Heartfelt gratitude, mentors, team members, students, and inspirations that shaped Sabbir Sakib's path.",
      },
      { property: "og:title", content: "Thankful — Sabbir Sakib" },
      {
        property: "og:description",
        content:
          "Heartfelt gratitude, mentors, team members, students, and inspirations that shaped Sabbir Sakib's path.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ThankfulPage,
});

interface GratitudeItem {
  name: string;
  role: string;
  note: string;
  tag: string;
}

const mentorsAndInspirations: GratitudeItem[] = [
  {
    name: "The 10 Minute School Family",
    role: "Pioneering EdTech Community",
    note: "For pioneering the digital education revolution in Bangladesh and creating an ecosystem where millions of dreams find structure, support, and wings to fly.",
    tag: "Ecosystem & Platform",
  },
  {
    name: "Teachers, Mentors & Academics",
    role: "Guiding Lights",
    note: "To every teacher who took an extra minute to explain a difficult concept, encourage a curious mind, and instill values of integrity and ceaseless exploration.",
    tag: "Wisdom & Mentorship",
  },
  {
    name: "Our Incredible Learners & Students",
    role: "The Heartbeat of Everything",
    note: "Every message, every breakthrough moment when a student speaks English without hesitation for the first time — you are the sole reason this journey exists.",
    tag: "Community & Purpose",
  },
  {
    name: "Creative Collaborators & Developers",
    role: "Builders & Co-Creators",
    note: "The designers, video editors, coders, and sound artists whose unseen dedication transforms simple ideas into breathtaking educational experiences.",
    tag: "Creativity & Craft",
  },
  {
    name: "Family & Close Well-Wishers",
    role: "Unconditional Support",
    note: "For the quiet belief, the late-night cups of tea, and the boundless patience during hours of writing, recording, and debugging.",
    tag: "Pillars of Strength",
  },
  {
    name: "Open Source & Global Thinkers",
    role: "Global Knowledge Commons",
    note: "The worldwide network of educators, open-source contributors, and thinkers who generously share their tools and discoveries with humanity.",
    tag: "Knowledge & Innovation",
  },
];

function ThankfulPage() {
  return (
    <div className="site-shell">
      <Header />
      <main className="content-page category-books">
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
          <HeartHandshake size={48} strokeWidth={1.5} className="text-[#38bdf8] drop-shadow-sm" />
          <p className="section-eyebrow">
            <span className="status-dot" />
            <span className="golden-text-shimmer font-semibold tracking-wider">
              SABBIR SAKIB / GRATITUDE & INSPIRATION
            </span>
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mt-2">
            Thankful<span className="text-[#38bdf8]">.</span>
          </h1>
          <p className="text-xl text-white/70 mt-2 font-['Hind_Siliguri',sans-serif]">
            কৃতজ্ঞতা, অনুপ্রেরণা ও যাদের হাত ধরে এই পথচলা
          </p>
          <p className="max-w-2xl text-sm sm:text-base text-white/60 mt-4 leading-relaxed">
            No journey is accomplished alone. This page is a dedicated tribute of sincere gratitude
            to the mentors, teachers, students, teammates, and loved ones who make this voyage
            meaningful.
          </p>
        </div>

        {/* Featured Gratitude Quote Banner */}
        <div className="mt-8 p-8 rounded-2xl bg-gradient-to-r from-sky-950/40 via-blue-950/30 to-black/50 border border-sky-400/20 relative overflow-hidden">
          <Quote className="absolute right-6 -bottom-4 text-sky-400/10 w-36 h-36 pointer-events-none" />
          <div className="relative z-10 max-w-2xl">
            <p className="font-['Hind_Siliguri',sans-serif] text-xl sm:text-2xl text-white/95 leading-relaxed italic font-medium">
              "কৃতজ্ঞতা এমন এক অনুভূতি যা আমাদের অর্জনের অহংকার দূর করে এবং শেখার পথকে উন্মুক্ত
              রাখে।"
            </p>
            <p className="text-xs text-sky-300 font-semibold tracking-wider mt-4 uppercase">
              — A Note of Appreciation from Sabbir Sakib
            </p>
          </div>
        </div>

        {/* Gratitude Cards Grid */}
        <section className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentorsAndInspirations.map((item, index) => (
            <div
              key={index}
              className="lower-program-card p-6 flex flex-col justify-between group hover:border-sky-400/50 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs uppercase font-bold tracking-wider text-[#38bdf8]">
                    {item.tag}
                  </span>
                  <Heart
                    size={15}
                    className="text-pink-400 group-hover:scale-110 transition-transform fill-pink-400/30"
                  />
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors leading-snug">
                  {item.name}
                </h3>
                <p className="text-xs text-white/60 mt-1 font-medium">{item.role}</p>

                <p className="text-sm text-white/75 mt-4 leading-relaxed font-light">{item.note}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-sky-200/80">
                <span className="flex items-center gap-1.5">
                  <Sparkles size={13} className="text-amber-400" />
                  Eternal Gratitude
                </span>
              </div>
            </div>
          ))}
        </section>

        {/* Bottom Community Note */}
        <div className="mt-14 p-6 rounded-xl bg-black/30 border border-white/10 text-center max-w-xl mx-auto">
          <BookHeart className="mx-auto text-sky-400 mb-2" size={28} />
          <h4 className="text-lg font-bold text-white">To every visitor reading this</h4>
          <p className="text-xs sm:text-sm text-white/70 mt-1">
            Thank you for spending a moment of your time exploring my world. May your own journey be
            filled with curiosity, perseverance, and discovery.
          </p>
        </div>
      </main>
    </div>
  );
}
