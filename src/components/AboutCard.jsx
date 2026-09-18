import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

const paragraphs = [
  "Editor by craft. Storyteller by instinct.",
  "A few pivotal projects led me here — to a place where raw footage turns into something people actually feel. I believe editing is more than cuts and transitions; it's a language, and I'm always finding new ways to speak through it.",
  "From corporate video at Icon.com to freelance work with agencies, creators, and a US-based team, every project has shaped how I cut, pace, and tell a story — pushing each edit further than the last. I cut with intention, design motion with purpose, and carry curiosity into every timeline I touch.",
  "And every single day, I'm still learning. Still building — from color grades to custom AE scripts that make the whole process faster.",
];

const BG_IMAGE =
  "https://res.cloudinary.com/xjo36sha/image/upload/v1789658540/WhatsApp_Image_2026-09-17_at_7.16.55_PM.jpg";

function AboutText() {
  return (
    <div className="relative z-10 mx-auto flex h-full max-w-4xl flex-col justify-center gap-8 px-6 text-center">
      {paragraphs.map((p, i) => (
        <motion.p
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, delay: i * 0.2, ease: "easeOut" }}
          className={
            i === 0
              ? "font-[Playfair_Display] text-3xl italic font-semibold leading-snug tracking-tight text-white md:text-5xl [text-wrap:balance]"
              : "font-[Inter] text-base leading-relaxed text-white/70 md:text-lg"
          }
        >
          {p}
        </motion.p>
      ))}
    </div>
  );
}

export default function AboutCard() {
  const wrapperRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  // Progress 0 = section just starting to enter from the bottom of the viewport.
  // Progress 1 = section top reaches the viewport top (i.e. fully pinned/on-screen).
  // Zooming across this entry window means the image is already full-bleed by the
  // time the section takes over the screen, instead of zooming while being read.
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const radius = useTransform(scrollYProgress, [0, 1], [32, 0]);

  if (prefersReducedMotion) {
    return (
      <section className="relative isolate min-h-[100vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${BG_IMAGE})` }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-black/55" />
        <div className="grain-overlay pointer-events-none absolute inset-0" />
        <AboutText />
      </section>
    );
  }

  return (
    <section ref={wrapperRef} className="relative isolate" style={{ height: "220vh" }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <motion.div
          className="absolute inset-0 overflow-hidden"
          style={{ scale, borderRadius: radius }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${BG_IMAGE})` }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-black/55" />
          <div className="grain-overlay pointer-events-none absolute inset-0" />
        </motion.div>
        <AboutText />
      </div>
    </section>
  );
}
