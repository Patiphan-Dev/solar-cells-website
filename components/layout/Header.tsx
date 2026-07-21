"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { NAV_LINKS, BUSINESS } from "@/lib/constants";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Logo />

        <nav className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-navy-900 hover:text-amber-600">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href={BUSINESS.lineHref} external variant="primary" className="!px-5 !py-2.5">
            ประเมินราคาฟรี
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="lg:hidden rounded-md p-2 text-navy-900"
          aria-label="เปิดเมนู"
          aria-expanded={menuOpen}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? <path d="M6 6l12 12M18 6l-12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </Container>

      {menuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <Container className="flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-navy-900 hover:bg-slate-50"
              >
                {link.label}
              </Link>
            ))}
            <Button href={BUSINESS.lineHref} external variant="primary" className="mt-2">
              ประเมินราคาฟรี
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
