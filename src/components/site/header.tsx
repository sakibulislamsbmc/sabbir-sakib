import { useState, useRef, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Search, Menu, X, ArrowUpRight, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { sections, navItems } from "@/lib/site-sections";
import { MobileAppHeader } from "./mobile-app-header";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [query, setQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  const results = sections.filter(
    (s) =>
      s.title.toLowerCase().includes(query.toLowerCase()) ||
      s.label.toLowerCase().includes(query.toLowerCase()),
  );

  // Close mobile menu on escape or resize
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setSearchOpen(false);
        setLoginOpen(false);
      }
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* Dedicated Native Mobile App Bar */}
      <MobileAppHeader />

      {/* Desktop Site Header */}
      <header className="site-header hidden md:block">
        <div className="header-inner">
          {/* 1. Logo */}
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

          {/* 2 to 7. Navigation Items: Home, Portfolio, Course, About, Thankful, Contact */}
          <nav className="desktop-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                params={item.params}
                activeProps={{ className: "nav-active" }}
                activeOptions={item.to === "/" ? { exact: true } : undefined}
                className="desktop-nav-link"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* 8. Search Bar: Compact, sleek search input field matching UI theme */}
          <div className="header-search-wrap">
            <Search className="search-icon" size={15} aria-hidden="true" />
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                if (!searchOpen && e.target.value.trim().length > 0) {
                  setSearchOpen(true);
                }
              }}
              onClick={() => {
                if (query.trim().length > 0) setSearchOpen(true);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setSearchOpen(true);
                }
              }}
              className="header-search-input"
              aria-label="Search website"
            />
          </div>

          {/* 9. Login Action: Distinctive emerald green button with LogIn icon */}
          <Button
            type="button"
            onClick={() => setLoginOpen(true)}
            className="login-button"
            aria-label="Log in to account"
          >
            <LogIn size={16} />
            <span>Login</span>
          </Button>

          {/* Mobile hamburger menu toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="mobile-menu-button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Mobile Navigation Drawer maintaining the exact sequential order */}
        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                params={item.params}
                onClick={() => setMenuOpen(false)}
                activeProps={{ className: "mobile-nav-active" }}
                activeOptions={item.to === "/" ? { exact: true } : undefined}
              >
                <span>{item.label}</span>
                <ArrowUpRight size={15} />
              </Link>
            ))}

            <button
              type="button"
              className="mobile-nav-search-button"
              onClick={() => {
                setMenuOpen(false);
                setSearchOpen(true);
              }}
            >
              <Search size={15} />
              <span>Search...</span>
            </button>

            <button
              type="button"
              className="mobile-nav-login-button"
              onClick={() => {
                setMenuOpen(false);
                setLoginOpen(true);
              }}
            >
              <LogIn size={15} />
              <span>Login</span>
            </button>
          </nav>
        )}
      </header>

      {/* Search Dialog Modal */}
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
                <X size={18} />
              </Button>
            </div>
            <div className="search-input-wrap">
              <Search size={18} />
              <input
                autoFocus
                aria-label="Search pages"
                placeholder="Search portfolio, courses, books, tools..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <div className="search-results">
              {results.map((s) => {
                const dedicatedRoutes = ["portfolio", "course", "about", "thankful", "contact"];
                const isDedicated = dedicatedRoutes.includes(s.slug);
                return (
                  <Link
                    key={s.slug}
                    to={isDedicated ? `/${s.slug}` : "/$section"}
                    params={isDedicated ? undefined : { section: s.slug }}
                    onClick={() => setSearchOpen(false)}
                  >
                    <s.icon size={18} />
                    <div>
                      <span className="font-bold">{s.title}</span>
                      <span className="text-xs text-muted-foreground ml-2">({s.label})</span>
                    </div>
                    <ArrowUpRight size={15} />
                  </Link>
                );
              })}
              {results.length === 0 && (
                <p className="text-muted-foreground p-3 text-sm">No results found.</p>
              )}
            </div>
          </section>
        </div>
      )}

      {/* Login Dialog Modal */}
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
                <X size={18} />
              </Button>
            </div>
            <p className="text-muted-foreground py-6 text-sm">
              Sign-in is currently undergoing maintenance. Please check back soon!
            </p>
            <Button
              onClick={() => setLoginOpen(false)}
              className="w-full bg-[#0ba360] hover:bg-[#098e53] text-white font-bold"
            >
              Back to exploring <ArrowUpRight size={16} />
            </Button>
          </section>
        </div>
      )}
    </>
  );
}
