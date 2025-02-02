import React from "react";
import "./header.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


const Header = () => {
  const [ref, InView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <div className="header">
      <div className="checker_bg_container">
        <img className="checker_bg" src="./checkered-bg.png" alt="checker_bg" />
      </div>
      <div className="sub_header">
        <div className="header_hero_text_container">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 0 }}
            animate={InView ? { opacity: 1 } : {}}
            exit={{ opacity: 0}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="sub_header_hero_text_container">
            <span className="header_hero_span">let's help you stay</span>
            <h1>Secured</h1>
          </motion.div>

          <p className="header_hero_p">
            Expert cybersecurity solutions tailored to protect <br /> your
            organization from emerging threats
          </p>
        </div>

        <div className="header_hero_btns_container">
          <button className="header_btn_1">Schedule a call</button>
          <button className="header_btn_2">Get a Quote</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
