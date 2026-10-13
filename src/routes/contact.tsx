import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  Send,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  CheckCircle,
  Sparkles,
  Clock,
  Globe,
} from "lucide-react";
import { Header } from "@/components/site/header";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Sabbir Sakib" },
      {
        name: "description",
        content:
          "Get in touch with Sabbir Sakib for collaborations, speaking engagements, course inquiries, and creative projects.",
      },
      { property: "og:title", content: "Contact — Sabbir Sakib" },
      {
        property: "og:description",
        content:
          "Get in touch with Sabbir Sakib for collaborations, speaking engagements, course inquiries, and creative projects.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <div className="site-shell">
      <Header />
      <main className="content-page category-contact">
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
          <Send size={48} strokeWidth={1.5} className="text-[#14b8a6] drop-shadow-sm" />
          <p className="section-eyebrow">
            <span className="status-dot" />
            <span className="golden-text-shimmer font-semibold tracking-wider">
              SABBIR SAKIB / LET'S CONNECT
            </span>
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mt-2">
            Contact<span className="text-[#14b8a6]">.</span>
          </h1>
          <p className="text-xl text-white/70 mt-2 font-['Hind_Siliguri',sans-serif]">
            চলো কথা বলি — যেকোনো জিজ্ঞাসা বা নতুন আইডিয়া নিয়ে
          </p>
          <p className="max-w-2xl text-sm sm:text-base text-white/60 mt-4 leading-relaxed">
            Whether you want to invite me for a speaking session, collaborate on an educational
            series, ask about a course, or just say hello, my inbox is always open.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Direct Communication Channels */}
          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-black/40 border border-white/10 hover:border-teal-500/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-teal-500/20 text-teal-300 flex items-center justify-center mb-4">
                <Mail size={20} />
              </div>
              <h3 className="font-bold text-white text-base">Direct Email</h3>
              <p className="text-xs text-white/60 mt-1">For official collaborations & queries</p>
              <a
                href="mailto:contact@sabbirsakib.com"
                className="mt-3 block text-sm font-semibold text-teal-300 hover:underline"
              >
                contact@sabbirsakib.com
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-black/40 border border-white/10 hover:border-teal-500/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-teal-500/20 text-teal-300 flex items-center justify-center mb-4">
                <MapPin size={20} />
              </div>
              <h3 className="font-bold text-white text-base">Location</h3>
              <p className="text-xs text-white/60 mt-1">Available worldwide remotely</p>
              <p className="mt-3 text-sm font-semibold text-white/90">Dhaka, Bangladesh (GMT+6)</p>
            </div>

            <div className="p-6 rounded-2xl bg-black/40 border border-white/10 hover:border-teal-500/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-teal-500/20 text-teal-300 flex items-center justify-center mb-4">
                <Clock size={20} />
              </div>
              <h3 className="font-bold text-white text-base">Response Window</h3>
              <p className="text-xs text-white/60 mt-1">Typical turnaround time</p>
              <p className="mt-3 text-sm font-semibold text-white/90">
                Within 24–48 Business Hours
              </p>
            </div>
          </div>

          {/* Contact Message Form */}
          <div className="lg:col-span-2">
            <div className="p-8 rounded-2xl bg-black/40 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <MessageSquare className="text-teal-400" size={22} />
                Send a Message
              </h2>
              <p className="text-xs text-white/60 mb-6 font-['Hind_Siliguri',sans-serif]">
                নিচের ফর্মটি পূরণ করে আপনার বার্তা পাঠাতে পারেন
              </p>

              {submitted ? (
                <div className="p-8 rounded-xl bg-teal-950/40 border border-teal-500/30 text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-teal-500/20 text-teal-300 mx-auto flex items-center justify-center">
                    <CheckCircle size={30} />
                  </div>
                  <h3 className="text-xl font-bold text-white">Message Sent Successfully!</h3>
                  <p className="text-sm text-white/70 max-w-md mx-auto">
                    Thank you, {formData.name || "friend"}! Your message has been received. I will
                    review it and get back to you shortly.
                  </p>
                  <Button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", subject: "General Inquiry", message: "" });
                    }}
                    variant="outline"
                    className="mt-4 border-white/20 text-white hover:bg-white/10 text-xs"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-white/70 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Tanvir Ahmed"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/15 text-white placeholder-white/40 text-sm focus:outline-none focus:border-teal-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-white/70 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/15 text-white placeholder-white/40 text-sm focus:outline-none focus:border-teal-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-white/70 mb-1.5">
                      Subject / Topic
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/15 text-white text-sm focus:outline-none focus:border-teal-400 transition-colors"
                    >
                      <option value="Course Inquiry">
                        Course & Masterclass Enrollment Inquiry
                      </option>
                      <option value="Speaking Engagement">Workshop or Guest Speaking Invite</option>
                      <option value="Collaboration">Content Collaboration & Partnership</option>
                      <option value="General Inquiry">General Feedback or Hello</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-white/70 mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Write your thoughts or details here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/15 text-white placeholder-white/40 text-sm focus:outline-none focus:border-teal-400 transition-colors resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full sm:w-auto bg-[#14b8a6] hover:bg-[#0d9488] text-black font-bold px-8 h-11"
                  >
                    <Send size={15} className="mr-2" />
                    Submit Message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
