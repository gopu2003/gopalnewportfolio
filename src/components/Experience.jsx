import { Fragment } from "react";
import { motion } from "framer-motion";

const experience = [
  {
    id: "freelance",
    title: "Freelance Video Editor & Content Strategist",
    company: "Independent",
    date: "2024 - 2026",
    logoText: "F",
    logoClass: "bg-neutral-900 text-white",
    bullets: [
      "Collaborated with a **US-based company**, 2+ **marketing agencies**, and 10+ independent creators across tech, documentary, health, and podcast niches.",
      "Delivered highly optimized content strategies for **YouTube** and **Instagram**, increasing audience retention and platform performance.",
      "Managed end-to-end editing workflows — precise cutting, advanced **color correction**, **sound design**, and custom **motion graphics**.",
      "Developed custom **After Effects** script UI panels to automate unprecomposing layers and auto-delete original pre-comps, reducing project clutter.",
      "Engineered a web-based **Typography Storyboard Generator** with React and Python that parses SRT files and enforces caption line limits for social platforms.",
    ],
    position: "bottom",
  },
  {
    id: "iconcom",
    title: "Video Editor",
    company: "Icon.com",
    date: "Apr '26 - Present",
    logoText: "I",
    logoClass: "bg-sky-600 text-white",
    bullets: [
      "Spearhead end-to-end **video post-production** for corporate initiatives, ensuring high-quality storytelling and strict **brand consistency**.",
      "Utilise **Adobe Premiere Pro** and **After Effects** to deliver polished visual assets on tight production schedules.",
    ],
    position: "top",
  },
];

function renderBold(text) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-black">
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

function DatePill({ date }) {
  return (
    <span className="shrink-0 rounded-full border border-sky-200 bg-white px-4 py-1.5 text-sm font-medium text-sky-900 shadow-sm">
      {date}
    </span>
  );
}

function ExperienceCard({ item }) {
  return (
    <div className="w-full shrink-0 rounded-2xl border border-black/5 bg-white p-6 shadow-xl shadow-black/5">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-lg font-serif ${item.logoClass}`}
          >
            {item.logoText}
          </span>
          <div>
            <p className="font-semibold text-black leading-tight">{item.title}</p>
            <p className="text-sm text-neutral-500">{item.company}</p>
          </div>
        </div>
      </div>
      <ul className="space-y-3">
        {item.bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-800" />
            <span className="text-[15px] leading-relaxed text-neutral-600">
              {renderBold(b)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Experience() {
  const cols = experience.length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-sky-50 py-20"
    >
      <div className="mx-auto mb-14 max-w-2xl px-6 text-center">
        <div className="mb-3 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-sky-600">
          <span className="text-sky-500">◆</span>
          Experience
        </div>
        <h2 className="font-serif text-4xl text-black md:text-6xl">
          the journey so far
        </h2>
        <p className="mt-4 text-neutral-500 md:text-lg">
          From corporate post-production to freelance work with agencies and creators — building
          the craft one project at a time.
        </p>
      </div>

      <div className="overflow-x-auto px-8 pb-4 md:px-16 [scrollbar-width:thin]">
        <div
          className="mx-auto justify-center"
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${cols}, minmax(280px, 360px))`,
            gridTemplateRows: "auto 28px auto 28px auto",
            columnGap: "3.5rem",
            width: "max-content",
          }}
        >
          {/* horizontal timeline line, spans all columns on the dot row */}
          <div
            className="h-px bg-neutral-300"
            style={{ gridRow: 3, gridColumn: `1 / -1`, alignSelf: "center", justifySelf: "stretch" }}
          />

          {experience.map((item, idx) => {
            const col = idx + 1;
            const isTop = item.position === "top";

            return (
              <Fragment key={item.id}>
                <div
                  key={`${item.id}-top`}
                  style={{ gridRow: 1, gridColumn: col, alignSelf: "end", justifySelf: "center", zIndex: 10 }}
                >
                  {isTop ? <ExperienceCard item={item} /> : <DatePill date={item.date} />}
                </div>

                <div
                  key={`${item.id}-connector-top`}
                  className="w-px bg-neutral-300"
                  style={{ gridRow: 2, gridColumn: col, justifySelf: "center", height: "100%" }}
                />

                <div
                  key={`${item.id}-dot`}
                  style={{ gridRow: 3, gridColumn: col, justifySelf: "center", alignSelf: "center", zIndex: 10 }}
                >
                  <span className="block h-3 w-3 rounded-full border-2 border-sky-300 bg-white" />
                </div>

                <div
                  key={`${item.id}-connector-bottom`}
                  className="w-px bg-neutral-300"
                  style={{ gridRow: 4, gridColumn: col, justifySelf: "center", height: "100%" }}
                />

                <div
                  key={`${item.id}-bottom`}
                  style={{ gridRow: 5, gridColumn: col, alignSelf: "start", justifySelf: "center", zIndex: 10 }}
                >
                  {!isTop ? <ExperienceCard item={item} /> : <DatePill date={item.date} />}
                </div>
              </Fragment>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
