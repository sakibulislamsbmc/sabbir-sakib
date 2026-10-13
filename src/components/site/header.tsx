import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Search, Menu, X, ArrowUpRight, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { sections } from "@/lib/site-sections";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [query, setQuery] = useState("");
  const results = sections.filter((s) => s.title.toLowerCase().includes(query.toLowerCase()));
  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <Link
            to="/"
            className="wordmark"
            activeOptions={{ exact: true }}
            aria-label="Sabbir Sakib home"
          >
            Sabbir{" "}
            <span>
              Sakib<span className="brand-dot">.</span>
            </span>
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            <Link to="/" activeProps={{ className: "nav-active" }} activeOptions={{ exact: true }}>
              Home
            </Link>
            {sections.map((s) => (
              <Link
                key={s.slug}
                to="/$section"
                params={{ section: s.slug }}
                activeProps={{ className: "nav-active" }}
              >
                {s.title}
              </Link>
            ))}
          </nav>
          <div className="header-actions">
            <Button
              variant="ghost"
              className="search-trigger"
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
            >
              <Search />
              <span>Search...</span>
            </Button>
            <Button onClick={() => setLoginOpen(true)} className="login-button">
              <LogIn />
              Login
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="mobile-menu-button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <Link to="/" onClick={() => setMenuOpen(false)} activeOptions={{ exact: true }}>
              Home
            </Link>
            {sections.map((s) => (
              <Link
                key={s.slug}
                to="/$section"
                params={{ section: s.slug }}
                onClick={() => setMenuOpen(false)}
              >
                {s.title}
                <ArrowUpRight size={16} />
              </Link>
            ))}
          </nav>
        )}
      </header>
      {searchOpen && (
        <div className="dialog-backdrop" onClick={() => setSearchOpen(false)}>
          <section
            className="site-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="search-title"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="dialog-heading">
              <h2 id="search-title">Search Sabbir Sakib</h2>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Close search"
                onClick={() => setSearchOpen(false)}
              >
                <X />
              </Button>
            </div>
            <div className="search-input-wrap">
              <Search size={20} />
              <input
                autoFocus
                aria-label="Search pages"
                placeholder="Search books, tools, projects..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <div className="search-results">
              {results.map((s) => (
                <Link
                  key={s.slug}
                  to="/$section"
                  params={{ section: s.slug }}
                  onClick={() => setSearchOpen(false)}
                >
                  <s.icon size={20} />
                  {s.title}
                  <ArrowUpRight size={16} />
                </Link>
              ))}
              {results.length === 0 && <p>No pages found.</p>}
            </div>
          </section>
        </div>
      )}
      {loginOpen && (
        <div className="dialog-backdrop" onClick={() => setLoginOpen(false)}>
          <section
            className="site-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="login-title"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="dialog-heading">
              <h2 id="login-title">Login</h2>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Close login"
                onClick={() => setLoginOpen(false)}
              >
                <X />
              </Button>
            </div>
            <p className="text-muted-foreground py-6">Sign-in is not available yet.</p>
            <Button onClick={() => setLoginOpen(false)}>
              Back to exploring <ArrowUpRight />
            </Button>
          </section>
        </div>
      )}
    </>
  );
}
