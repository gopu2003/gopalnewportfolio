import { motion } from "framer-motion";

const paragraphs = [
  "Editor by craft. Storyteller by instinct.",
  "A few pivotal projects led me here — to a place where raw footage turns into something people actually feel. I believe editing is more than cuts and transitions; it's a language, and I'm always finding new ways to speak through it.",
  "From corporate video at Icon.com to freelance work with agencies, creators, and a US-based team, every project has shaped how I cut, pace, and tell a story — pushing each edit further than the last. I cut with intention, design motion with purpose, and carry curiosity into every timeline I touch.",
  "And every single day, I'm still learning. Still building — from color grades to custom AE scripts that make the whole process faster.",
];

const BG_IMAGE =
  "https://res.cloudinary.com/xjo36sha/image/upload/v1789658540/WhatsApp_Image_2026-09-17_at_7.16.55_PM.jpg";

export default function AboutCard() {
  return (
    <section className="relative isolate overflow-hidden">
      <div
        className="absolute inset-0 -z-20 scale-105 bg-cover bg-center"
        style={{ backgroundImage: `url(${BG_IMAGE})` }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/80 via-black/70 to-black/85" />
      <div className="grain-overlay absolute inset-0 -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto flex min-h-[80vh] max-w-4xl flex-col justify-center gap-8 px-6 py-28 text-center"
      >
        {paragraphs.map((p, i) => (
          <p
            key={i}
            className={
              i === 0
                ? "font-[Playfair_Display] text-3xl italic font-semibold leading-snug tracking-tight text-white md:text-5xl [text-wrap:balance]"
                : "font-[Inter] text-base leading-relaxed text-white/70 md:text-lg"
            }
          >
            {p}
          </p>
        ))}
      </motion.div>
    </section>
  );
}
