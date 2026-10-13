import { BookOpen, Wrench, Layers3, NotebookPen, Send } from "lucide-react";

export const sections = [
  {
    slug: "books",
    title: "Books",
    subtitle: "পড়ার জগৎ",
    icon: BookOpen,
    tone: "books",
    label: "Read & discover",
  },
  {
    slug: "tools",
    title: "Tools",
    subtitle: "কাজ হোক সহজ",
    icon: Wrench,
    tone: "tools",
    label: "Create & simplify",
  },
  {
    slug: "projects",
    title: "Projects",
    subtitle: "ভাবনা থেকে বাস্তবে",
    icon: Layers3,
    tone: "projects",
    label: "Explore & build",
  },
  {
    slug: "blog",
    title: "Blog",
    subtitle: "ভাবনা ও গল্প",
    icon: NotebookPen,
    tone: "blog",
    label: "Ideas & stories",
  },
  {
    slug: "contact",
    title: "Contact",
    subtitle: "চলো কথা বলি",
    icon: Send,
    tone: "contact",
    label: "Let’s connect",
  },
] as const;
