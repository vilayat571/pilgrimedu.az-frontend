import { motion, useScroll } from "framer-motion";

export default function Scroll() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-3 bg-[#fff] origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
