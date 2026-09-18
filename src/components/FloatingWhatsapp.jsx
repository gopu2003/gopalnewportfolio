import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { phone } from "../data/profile.json";

function WhatsappIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.48-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.5-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.35.2 1.86.12.57-.08 1.75-.71 2-1.4.24-.68.24-1.27.17-1.4-.07-.12-.27-.2-.57-.35Z" />
      <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l5.06-1.33A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2Zm0 18.06c-1.6 0-3.09-.44-4.37-1.2l-.31-.18-3.13.82.84-3.05-.2-.32A8.05 8.05 0 0 1 3.94 12c0-4.45 3.62-8.06 8.06-8.06 4.45 0 8.06 3.61 8.06 8.06 0 4.45-3.61 8.06-8.06 8.06Z" />
    </svg>
  );
}

const whatsappDigits = phone.replace(/[^\d]/g, "");

export default function FloatingWhatsapp() {
  const [visible, setVisible] = useState(false);
  const [nudge, setNudge] = useState(false);
  const shownOnce = useRef(false);

  useEffect(() => {
    const target = document.getElementById("experience");
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !shownOnce.current) {
          shownOnce.current = true;
          setVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    let timeoutId;
    const scheduleNudge = () => {
      const delay = 4000 + Math.random() * 6000;
      timeoutId = setTimeout(() => {
        setNudge(true);
        setTimeout(() => setNudge(false), 900);
        scheduleNudge();
      }, delay);
    };
    scheduleNudge();
    return () => clearTimeout(timeoutId);
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={`https://wa.me/${whatsappDigits}`}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          initial={{ opacity: 0, scale: 0.4, x: 40 }}
          animate={{
            opacity: 1,
            scale: nudge ? [1, 1.15, 0.95, 1.05, 1] : 1,
            x: 0,
            rotate: nudge ? [0, -8, 8, -4, 0] : 0,
          }}
          exit={{ opacity: 0, scale: 0.4, x: 40 }}
          transition={{ duration: nudge ? 0.6 : 0.4, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_25px_rgba(0,0,0,0.3)] hover:bg-[#20bd5a]"
        >
          <WhatsappIcon />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
