import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import "./services.css";

const Services = () => {
  const { scrollYProgress } = useScroll();
  const fronted = useTransform(scrollYProgress, [0, 1], [0, 800]);
  const backend = useTransform(scrollYProgress, [0, 1], [0, 600]);
  const fullstack = useTransform(scrollYProgress, [0, 1], [0, 400]);
  return (
    <section className="services" id="services">
      <div className="service__container">
        <div className="typo__service">
          <div class="typo__filled">
            <motion.h1
              initial={{ x: -1800 }}
              animate={{ x: 0, transition: { duration: 0.8 } }}
              style={{ x: fronted }}
              className="service__typo"
            >
              frontend developer - frontend{" "}
              <span className="typo__outline">developer</span> - frontend
              developer
            </motion.h1>
          </div>
          <div class="typo__filled">
            <motion.h1
              initial={{ x: -1800 }}
              animate={{ x: 0, transition: { duration: 0.8 } }}
              style={{ x: backend }}
              className="service__typo"
            >
              backend developer -{" "}
              <span className="typo__outline"> backend</span> developer -
              backend developer
            </motion.h1>
          </div>
          <div class="typo__filled">
            <motion.h1
              initial={{ x: -1800 }}
              animate={{ x: 0, transition: { duration: 0.8 } }}
              style={{ x: fullstack }}
              className="service__typo"
            >
              fullstack developer - fullstack developer -{" "}
              <span className="typo__outline"> fullstack</span> developer
            </motion.h1>
          </div>
        </div>

        <div className="service__stack">
          <div className="stack__item">
            <span>MongoDB</span>
            <span>MySQL</span>
            <span>Express JS</span>
            <span>React JS</span>
            <span>Node JS</span>
          </div>
          <div className="stack__item">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>PHP</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
