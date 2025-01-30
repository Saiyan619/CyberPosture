import { useRef } from "react";
import './scrollsection.css'
import Card from "./Card";
import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";


const ScrollSection = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-105%"]);

  return (
    <section ref={targetRef} className="scroll-section">
      <div className="sticky-container">
      {/* //pass x in the style prop */}
        <motion.div style={{ x }}>
        <Card />
        </motion.div>
      </div>
    </section>
  );
};

export default ScrollSection;