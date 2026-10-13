import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/site/header";
import { Button } from "@/components/ui/button";
import { sections } from "@/lib/site-sections";

export const Route = createFileRoute("/$section")({
  loader: ({ params }) => {
    const section = sections.find((s) => s.slug === params.section);
    if (!section) throw notFound();
    return {
      slug: section.slug,
      title: section.title,
      subtitle: section.subtitle,
      tone: section.tone,
      label: section.label,
    };
  },
  head: ({ params }) => {
    const title = sections.find((s) => s.slug === params.section)?.title ?? "Page";
    const description = `${title} from Sabbir Sakib. Discover a world of curiosity and creation.`;
    return {
      meta: [
        { title: `${title} — Sabbir Sakib` },
        { name: "description", content: description },
        { property: "og:title", content: `${title} — Sabbir Sakib` },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary" },
      ],
    };
  },
  component: SectionPage,
});
function SectionPage() {
  const data = Route.useLoaderData();
  const section = sections.find((s) => s.slug === data.slug) ?? sections[0];
  const Icon = section.icon;
  return (
    <div className="site-shell">
      <Header />
      <main className={`content-page category-${section.tone}`}>
        <Button variant="ghost" asChild>
          <Link to="/">
            <ArrowLeft />
            Home
          </Link>
        </Button>
        <div className="page-heading">
          <Icon size={48} strokeWidth={1.5} />
          <p className="section-eyebrow">SABBIR SAKIB / {section.title.toUpperCase()}</p>
          <h1>{section.title}</h1>
          <p>{section.subtitle}</p>
        </div>
        <div className="page-empty">
          <p>
            {section.slug === "contact"
              ? "Contact details will be added here soon."
              : `New ${section.title.toLowerCase()} will be added here soon.`}
          </p>
        </div>
      </main>
    </div>
  );
}
