"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/button";
import { useI18n, locales, type Locale } from "@/lib/i18n";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const py = useTransform(scrollY, [0, 100], [24, 12]);
  const logoScale = useTransform(scrollY, [0, 100], [1, 0.85]);
  const { locale, setLocale, t } = useI18n();

  const navLinks = [
    { href: "/#about", label: t.nav.about },
    { href: "/#services", label: t.nav.services },
    { href: "/#work", label: t.nav.work },
    { href: "/work", label: t.nav.archive },
    { href: "/#contact", label: t.nav.contact },
  ];

  const cycleLocale = () => {
    const idx = locales.indexOf(locale);
    const next = locales[(idx + 1) % locales.length] as Locale;
    setLocale(next);
  };

  return (
    <motion.header
      style={{ paddingTop: py, paddingBottom: py }}
      className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md"
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6"
        aria-label="Main navigation"
      >
        <Link href="/" className="flex items-center gap-2">
          <motion.div style={{ scale: logoScale }}>
            <Logo size={28} />
          </motion.div>
          <span className="font-heading text-lg font-normal">
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={cycleLocale}
            aria-label={`Switch language — current: ${t.language[locale]}`}
            title={t.language[locale]}
          >
            <Globe size={18} />
          </Button>
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </nav>

      {/* Mobile nav */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="border-t border-border bg-background px-6 py-6 md:hidden"
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}
