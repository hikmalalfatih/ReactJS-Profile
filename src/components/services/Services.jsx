import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import "./services.css";

const Services = () => {
  const { scrollYProgress } = useScroll();
  const technical = useTransform(scrollYProgress, [0, 1], [0, 800]);
  const customer = useTransform(scrollYProgress, [0, 1], [0, 600]);
  const troubleshoot = useTransform(scrollYProgress, [0, 1], [0, 400]);
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
              technical engineering - technical{" "}
              <span className="typo__outline">engineering</span> - technical
              engineering
            </motion.h1>
          </div>
          <div class="typo__filled">
            <motion.h1
              initial={{ x: -1800 }}
              animate={{ x: 0, transition: { duration: 0.8 } }}
              style={{ x: customer }}
              className="service__typo"
            >
              customer relations -{" "}
              <span className="typo__outline"> backend</span> relations -
              customer relations
            </motion.h1>
          </div>
          <div class="typo__filled">
            <motion.h1
              initial={{ x: -1800 }}
              animate={{ x: 0, transition: { duration: 0.8 } }}
              style={{ x: troubleshoot }}
              className="service__typo"
            >
              troubleshoot and repair - troubleshoot and repair -{" "}
              <span className="typo__outline"> troubleshoot</span> and repair
            </motion.h1>
          </div>
        </div>

        <div className="service__stack">
          <div className="stack__item">
            <span>LCD</span>
            <span>Battery</span>
            <span>Express JS</span>
            <span>Face id</span>
            <span>Touch id</span>
          </div>
          <div className="stack__item">
            <span>Backglass</span>
            <span>Housing</span>
            <span>Flexible</span>
            <span>Camera</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
