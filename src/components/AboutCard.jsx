import { motion } from "framer-motion";
import { bio } from "../data/profile.json";

export default function AboutCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-bold mb-4 text-black">About</h2>
      <p className="text-black/70 leading-relaxed max-w-2xl">{bio}</p>
    </motion.div>
  );
}
