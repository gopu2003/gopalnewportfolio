import { motion } from "framer-motion";

const paragraphs = [
  "Editor by craft. Storyteller by instinct.",
  "A few pivotal projects led me here — to a place where raw footage turns into something people actually feel. I believe editing is more than cuts and transitions; it's a language, and I'm always finding new ways to speak through it.",
  "From corporate video at Icon.com to freelance work with agencies, creators, and a US-based team, every project has shaped how I cut, pace, and tell a story — pushing each edit further than the last. I cut with intention, design motion with purpose, and carry curiosity into every timeline I touch.",
  "And every single day, I'm still learning. Still building — from color grades to custom AE scripts that make the whole process faster.",
];

export default function AboutCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto flex min-h-[70vh] max-w-4xl flex-col justify-center gap-8 px-6 py-24 text-center"
    >
      {paragraphs.map((p, i) => (
        <p
          key={i}
          className={`font-serif leading-relaxed text-black/80 ${
            i === 0
              ? "text-2xl md:text-3xl"
              : "text-base md:text-lg text-black/60"
          }`}
        >
          {p}
        </p>
      ))}
    </motion.div>
  );
}
