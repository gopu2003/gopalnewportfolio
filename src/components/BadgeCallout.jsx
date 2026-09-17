import { motion } from "framer-motion";

export default function BadgeCallout() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl bg-black/5 border border-black/10 p-6 flex items-center gap-4"
    >
      <img src="/assets/svg/badge.svg" alt="Badge" className="h-16" />
      <div>
        <p className="font-bold text-black">Certified Video Editor</p>
        <p className="text-black/70 text-sm">
          Recognized for excellence in editing and motion design.
        </p>
      </div>
      <button className="rounded-full bg-black text-white px-5 py-2 text-sm font-medium ml-auto">
        View Certificate
      </button>
    </motion.div>
  );
}
