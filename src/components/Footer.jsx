import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { email, instagram, resumeLink, name, phone } from "../data/profile.json";

const rotatingWords = ["design", "build", "create"];

const FOOTER_VIDEO = "https://res.cloudinary.com/gitn9iob/video/upload/v1789743986/Video_Project_10.mp4";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ResumeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
      <path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6M9 17h6" />
    </svg>
  );
}

function WhatsappIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.48-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.5-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.35.2 1.86.12.57-.08 1.75-.71 2-1.4.24-.68.24-1.27.17-1.4-.07-.12-.27-.2-.57-.35Z" />
      <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l5.06-1.33A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2Zm0 18.06c-1.6 0-3.09-.44-4.37-1.2l-.31-.18-3.13.82.84-3.05-.2-.32A8.05 8.05 0 0 1 3.94 12c0-4.45 3.62-8.06 8.06-8.06 4.45 0 8.06 3.61 8.06 8.06 0 4.45-3.61 8.06-8.06 8.06Z" />
    </svg>
  );
}

const whatsappDigits = phone.replace(/[^\d]/g, "");

const socials = [
  { href: `https://instagram.com/${instagram}`, label: "Instagram", Icon: InstagramIcon },
  { href: `https://wa.me/${whatsappDigits}`, label: "WhatsApp", Icon: WhatsappIcon },
  { href: resumeLink, label: "Resume", Icon: ResumeIcon },
];

const firstName = name.split(" ")[0];

export default function Footer() {
  const year = new Date().getFullYear();
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % rotatingWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-sky-300 via-sky-500 to-sky-600 text-white">
      <video
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        src={FOOTER_VIDEO}
        autoPlay
        loop
        muted
        playsInline
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(56,132,236,0.92) 0%, rgba(56,150,236,0.75) 35%, rgba(56,150,236,0.4) 60%, rgba(30,120,220,0.55) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 pb-8 pt-20 md:px-16 md:pt-28">
        <div className="mb-14 flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <h2 className="font-serif text-4xl leading-tight text-white md:text-6xl">
              lets{" "}
              <span
                className="relative inline-block overflow-hidden align-bottom"
                style={{ height: "1em", width: "2.6em", verticalAlign: "-0.15em" }}
              >
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={rotatingWords[wordIndex]}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="italic font-normal absolute inset-0 flex items-center justify-start"
                    style={{ fontFamily: "'Caveat', cursive" }}
                  >
                    {rotatingWords[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
              <br />
              incredible work together.
            </h2>
          </div>

          
        </div>

        <div className="mb-10 flex flex-col gap-8 md:flex-row md:gap-24">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-white/60">
              Email
            </p>
            <a href={`mailto:${email}`} className="text-sm font-medium text-white hover:text-white/80">
              {email}
            </a>
          </div>

          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-white/60">
              Social
            </p>
            <div className="flex items-center gap-2">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition-colors hover:bg-white/90"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/25 pt-6">
          <p className="text-xs text-white/70">© {year} {name}</p>
        </div>
      </div>

      <div className="relative select-none overflow-hidden pb-2">
        <p
          className="relative whitespace-nowrap text-center font-serif font-bold uppercase leading-none text-white/25 mix-blend-overlay"
          style={{ fontSize: "clamp(5rem, 18vw, 14rem)", top: "-0.14em" }}
        >
          {firstName}
        </p>
      </div>
    </footer>
  );
}
