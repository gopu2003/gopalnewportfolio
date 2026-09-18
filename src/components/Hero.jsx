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

const softShadowFilter =
  "drop-shadow(0 2px 3px rgba(10,10,20,0.28)) drop-shadow(0 20px 22px rgba(10,10,20,0.30)) drop-shadow(0 55px 60px rgba(10,10,20,0.24))";

function Sticker({ src, label, className, rotate = 0, fit = "contain", zoom = 1, grayscale = false, rounded = false, children }) {
  return (
    <div
      className={`absolute ${rounded ? "overflow-hidden rounded-[2rem]" : ""} ${className}`}
      style={{
        transform: `rotate(${rotate}deg)`,
        boxShadow: rounded
          ? "0 2px 3px rgba(10,10,20,0.28), 0 20px 22px rgba(10,10,20,0.30), 0 55px 60px rgba(10,10,20,0.24)"
          : undefined,
      }}
    >
      {src ? (
        <>
          <img
            src={src}
            alt={label}
            className={`w-full h-full object-${fit} ${grayscale ? "grayscale" : ""}`}
            style={{
              filter: rounded ? undefined : softShadowFilter,
              ...(zoom !== 1 ? { transform: `scale(${zoom})` } : {}),
            }}
          />
          {children}
        </>
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
        className="left-[-10%] top-[16%] w-[34%] h-[83%] hidden md:block"
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
        className="left-[33%] top-[11%] w-[31.5%] h-[57%] hidden md:block"
      />
      <Sticker
        src={heroImages.coffee}
        label="Coffee"
        className="left-[20.5%] top-[38%] w-[13%] h-[20%] hidden md:block"
      />
      <Sticker
        src={heroImages.cabinet}
        label="Cabinet"
        className="left-[83%] top-[-5%] w-[14%] h-[25%] hidden md:block"
      />
      <Sticker
        src={heroImages.nameTag}
        label="Name tag"
        rotate={-8}
        className="left-[68%] top-[24%] w-[20%] h-[19%] hidden md:block"
      />
      <Sticker
        src={heroImages.notepad}
        label="Notepad"
        rotate={2.5}
        className="left-[85%] top-[59%] w-[10%] h-[23%] hidden md:block"
      >
        <div
          className="pointer-events-none absolute left-[22%] right-[6%] top-[15%] flex flex-col gap-[5%] text-emerald-700"
          style={{ fontFamily: "'Caveat', cursive" }}
        >
          <div className="flex items-baseline gap-[5%] whitespace-nowrap">
            <span className="shrink-0" style={{ fontSize: "clamp(8px, 0.85vw, 12px)" }}>
              ✓
            </span>
            <span
              className="leading-none uppercase tracking-tight"
              style={{ fontSize: "clamp(7px, 0.72vw, 10px)" }}
            >
              Curious
            </span>
          </div>
          <div className="flex items-baseline gap-[5%] whitespace-nowrap pl-[10%]">
            <span className="shrink-0" style={{ fontSize: "clamp(8px, 0.85vw, 12px)" }}>
              ✓
            </span>
            <span
              className="leading-none uppercase tracking-tight"
              style={{ fontSize: "clamp(7px, 0.72vw, 10px)" }}
            >
              Learning new things
            </span>
          </div>
          <div className="flex items-baseline gap-[5%] whitespace-nowrap text-black">
            <span
              className="shrink-0 inline-block rounded-full border border-black"
              style={{ width: "0.55em", height: "0.55em", fontSize: "clamp(8px, 0.85vw, 12px)" }}
            />
            <span
              className="leading-none uppercase tracking-tight"
              style={{ fontSize: "clamp(7px, 0.72vw, 10px)" }}
            >
              Hired
            </span>
          </div>
        </div>
      </Sticker>
      <Sticker
        src={heroImages.welcomeMat}
        label="Welcome mat"
        className="left-[33%] bottom-[-5%] w-[30%] aspect-[2.3/2.1] hidden md:block"
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
