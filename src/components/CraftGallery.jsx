import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { craftItems } from "../data/profile.json";

function driveFileId(link) {
  const match = (link || "").match(/\/d\/([^/]+)/);
  return match ? match[1] : "";
}

function driveEmbedUrl(link) {
  const id = driveFileId(link);
  return id ? `https://drive.google.com/file/d/${id}/preview` : link || "";
}

function driveThumbnailUrl(link) {
  const id = driveFileId(link);
  return id ? `https://drive.google.com/thumbnail?id=${id}&sz=w1000` : "";
}

function PosterCard({ item, rotate, onClick }) {
  const thumbnail = driveThumbnailUrl(item.link);

  return (
    <button
      type="button"
      onClick={onClick}
      className="relative shrink-0 w-[calc((100%-1rem)/1.6)] sm:w-[calc((100%-2rem)/2.2)] md:w-[calc((100%-4.5rem)/4)] focus:outline-none"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <div className="relative overflow-hidden rounded-sm bg-white shadow-xl shadow-black/10 transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
        <img
          src={item.image}
          alt={item.title}
          className="aspect-[3/4] w-full object-cover"
        />
        {thumbnail && (
          <div className="absolute inset-x-[9%] top-[16%] bottom-[9%] overflow-hidden rounded-sm shadow-md">
            <img
              src={thumbnail}
              alt={`${item.title} preview`}
              className="h-full w-full object-cover"
              onError={(e) => {
                e.currentTarget.parentElement.style.display = "none";
              }}
            />
            {item.type === "video" && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-md">
                  <span className="ml-0.5 h-0 w-0 border-y-[7px] border-l-[11px] border-y-transparent border-l-black" />
                </span>
              </div>
            )}
          </div>
        )}
      </div>
    </button>
  );
}

export default function CraftGallery() {
  const [active, setActive] = useState(null);

  const rotations = [-2, 1.5, -1, 2, -1.5, 1, -2, 1.5];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-20"
    >
      <h2 className="mb-14 text-center font-serif text-4xl md:text-7xl text-black mt-0">
        Craft i'm proud of
      </h2>

      <div className="flex gap-10 overflow-x-auto px-8 pb-8 pt-6 md:gap-14 md:px-16 [scrollbar-width:thin]">
        {craftItems.map((item, i) => (
          <PosterCard
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
              className={`relative overflow-hidden rounded-lg bg-black ${
                active.type === "pdf"
                  ? "h-[85vh] w-[min(90vw,700px)]"
                  : active.vertical
                    ? "h-[85vh] w-auto aspect-[9/16]"
                    : "w-full max-w-3xl aspect-video"
              }`}
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
                  title={active.title}
                  className="h-full w-full bg-white"
                  allow="autoplay"
                  allowFullScreen
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-white/60 text-sm">
                  {active.type === "pdf" ? "PDF" : "Video"} link for "{active.title}" coming soon.
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
