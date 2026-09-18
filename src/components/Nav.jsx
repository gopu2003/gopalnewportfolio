import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { email, phone, instagram, resumeLink } from "../data/profile.json";

const links = [
  { href: "#about", label: "About" },
  { href: "#craft", label: "Craft" },
  { href: "#experience", label: "Experience" },
  { href: resumeLink, label: "Portfolio", external: true },
];

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6.5 8.5 6 8.5-6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.9 21 3 13.1 3 3.6c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const digits = phone.replace(/[^\d+]/g, "");

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#hero" className="font-serif text-2xl font-semibold tracking-tight text-black">
          Gopal
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
              className="text-sm font-medium text-black/60 transition-colors hover:text-black"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={`tel:${digits}`}
            title={phone}
            className="text-black/50 transition-colors hover:text-black"
          >
            <PhoneIcon />
          </a>
          <a
            href={`https://instagram.com/${instagram}`}
            target="_blank"
            rel="noreferrer"
            title={`@${instagram}`}
            className="text-black/50 transition-colors hover:text-black"
          >
            <InstagramIcon />
          </a>
          <a
            href={`mailto:${email}`}
            className="rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-black/80"
          >
            Let's talk
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-black md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-black/5 bg-white/95 md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-2.5 text-base font-medium text-black/70 hover:bg-black/5 hover:text-black"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2 flex items-center gap-5 border-t border-black/5 px-2 pt-4">
                <a href={`tel:${digits}`} className="flex items-center gap-2 text-sm text-black/60">
                  <PhoneIcon /> {phone}
                </a>
              </div>
              <div className="flex items-center gap-5 px-2 pt-1">
                <a
                  href={`https://instagram.com/${instagram}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-black/60"
                >
                  <InstagramIcon /> @{instagram}
                </a>
              </div>
              <a
                href={`mailto:${email}`}
                onClick={() => setOpen(false)}
                className="mt-3 rounded-full bg-black px-4 py-2.5 text-center text-sm font-medium text-white"
              >
                Let's talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
