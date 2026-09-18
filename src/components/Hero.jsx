import { motion } from "framer-motion";
import {
  name,
  role,
  location,
  openToWork,
  experienceYears,
  heroTagline,
  heroImages,
} from "../data/profile.json";

function Sticker({ src, label, className, rotate = 0, fit = "contain", zoom = 1, grayscale = false, rounded = false }) {
  return (
    <div
      className={`absolute overflow-hidden ${rounded ? "rounded-[2rem]" : ""} ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {src ? (
        <img
          src={src}
          alt={label}
          className={`w-full h-full object-${fit} drop-shadow-xl ${grayscale ? "grayscale" : ""}`}
          style={zoom !== 1 ? { transform: `scale(${zoom})` } : undefined}
        />
      ) : (
        <div className="w-full h-full min-h-16 rounded-lg border-2 border-dashed border-black/20 bg-black/[0.02] flex items-center justify-center">
          <span className="text-[10px] uppercase tracking-wide text-black/30 px-2 text-center">
            {label}
          </span>
        </div>
      )}
    </div>
  );
}

export default function Hero() {
  return (
    <div className="relative hero-grid-bg overflow-hidden w-full h-[100vh] min-h-[820px] md:min-h-[880px]">
      <Sticker
        src={heroImages.cautionSign}
        label="Caution sign"
        rotate={-12}
        className="left-[0%] top-[16%] w-[24%] h-[60%] hidden md:block"
      />
      <Sticker
        src={heroImages.photo}
        label="Photo"
        rotate={-20}
        rounded
        className="left-[25%] top-[3%] w-[12%] h-[22%] hidden md:block"
      />
      <Sticker
        src={heroImages.computer}
        label="Computer"
        className="left-[33%] top-[11%] w-[28%] h-[48%] hidden md:block"
      />
      <Sticker
        src={heroImages.coffee}
        label="Coffee"
        className="left-[22.5%] top-[38%] w-[10%] h-[14%] hidden md:block"
      />
      <Sticker
        src={heroImages.cabinet}
        label="Cabinet"
        className="left-[83%] top-[-5%] w-[14%] h-[25%] hidden md:block"
      />
      <Sticker
        src={heroImages.nameTag}
        label="Name tag"
        rotate={-3}
        className="left-[68%] top-[24%] w-[20%] h-[19%] hidden md:block"
      />
      <Sticker
        src={heroImages.notepad}
        label="Notepad"
        rotate={2}
        className="left-[85%] top-[39%] w-[10%] h-[21%] hidden md:block"
      />
      <Sticker
        src={heroImages.welcomeMat}
        label="Welcome mat"
        className="left-[33%] bottom-[4%] w-[30%] aspect-[2.3/2] hidden md:block"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute left-[4%] right-[4%] top-[44%] md:left-[66%] md:right-[3%] md:top-[46%] flex flex-col gap-3"
      >
        <div className="flex items-center gap-2 text-xs text-black/60">
          <span className="rounded-full bg-black/5 border border-black/10 px-3 py-1">
            {location}
          </span>
          {openToWork && (
            <span className="rounded-full bg-black/5 border border-black/10 px-3 py-1">
              Open to Work
            </span>
          )}
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-black">
          {heroTagline}
        </h1>
        <p className="text-sm text-black/60">
          {name} · {role} · {experienceYears}+ years experience
        </p>
      </motion.div>
    </div>
  );
}
