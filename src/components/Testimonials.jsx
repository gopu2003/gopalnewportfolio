import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "../data/profile.json";
import { driveEmbedUrl } from "../lib/drive";

const rotations = [-3, 2, -2, 3];

function PaperclipIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      className={className}
    >
      <path d="M6 14V8a6 6 0 0 1 12 0v18a4 4 0 0 1-8 0V10a2 2 0 0 1 4 0v14" />
    </svg>
  );
}

function TestimonialCard({ item, rotate, onClick }) {
  return (
    <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
      <div className="flex shrink-0 flex-col items-center">
        <button
          type="button"
          onClick={onClick}
          className="group relative w-56 focus:outline-none sm:w-64 md:w-72"
        >
          <PaperclipIcon
            className="pointer-events-none absolute -top-5 left-6 h-9 w-6 -rotate-6 text-neutral-400"
          />
          <div
            className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-neutral-800 shadow-xl shadow-black/10 transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl"
            style={{ transform: `rotate(${rotate}deg)` }}
          >
            {item.link ? (
              <iframe
                src={driveEmbedUrl(item.link)}
                title={item.name}
                tabIndex={-1}
                className="pointer-events-none h-full w-full"
                allow="autoplay"
              />
            ) : (
              <div className="flex h-full w-full items-end justify-center pb-4 text-xs text-white/30">
                Video coming soon
              </div>
            )}
            <div className="absolute inset-0 flex items-center justify-center bg-black/10">
              
            </div>
          </div>
        </button>
        <p
          className="mt-3 -rotate-1 text-xl text-black"
          style={{ fontFamily: "'Caveat', cursive" }}
        >
          {item.name}
        </p>
        <p className="text-xs text-neutral-500">{item.role}</p>
      </div>

      <div className="w-full flex-1 rounded-2xl bg-neutral-100 p-6 sm:p-8">
        <p
          className="text-xl leading-relaxed text-neutral-700 sm:text-2xl"
          style={{ fontFamily: "'Caveat', cursive" }}
        >
          {item.quote}
        </p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white py-20"
    >
      <div className="mx-auto mb-16 max-w-2xl px-6 text-center">
        <div className="mb-3 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-sky-600">
          <span className="text-sky-500">◆</span>
          Recommendations
        </div>
        <h2 className="font-serif text-4xl text-black md:text-6xl">
          what people say about me
        </h2>
        <p className="mt-4 text-neutral-500 md:text-lg">
          A few words from people I've edited for, shipped alongside, and problem-solved next to.
        </p>
      </div>

      <div className="mx-auto grid max-w-7xl gap-x-16 gap-y-16 px-6 md:grid-cols-2 md:gap-x-32 lg:gap-x-40">
        {testimonials.map((item, i) => (
          <TestimonialCard
            key={item.id}
            item={item}
            rotate={rotations[i % rotations.length]}
            onClick={() => setActive(item)}
          />
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative h-[85vh] w-auto aspect-[9/16] overflow-hidden rounded-lg bg-black"
            >
              <button
                type="button"
                onClick={() => setActive(null)}
                className="absolute -top-10 right-0 text-sm text-white/70 hover:text-white"
              >
                Close ✕
              </button>
              {active.link ? (
                <iframe
                  src={driveEmbedUrl(active.link)}
                  title={active.name}
                  className="h-full w-full bg-white"
                  allow="autoplay"
                  allowFullScreen
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center p-6 text-center text-sm text-white/60">
                  Video for "{active.name}" coming soon.
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
