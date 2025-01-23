"use client";
import Curve from "../Curve/index";
import styles from "./styles.module.scss";
import { LINKS } from "../data/data";
import Link from "../Link/Link";
import { menuSlide } from "../data/anim";
import { motion } from "motion/react";

const Menu = ({
  setIsActive,
}: {
  setIsActive: (isActive: boolean) => void;
}) => {
  return (
    <motion.div
      className={`${styles.menu}`}
      variants={menuSlide}
      animate="enter"
      exit="exit"
      initial="initial"
    >
      <div className={`${styles.body}`}>
        <div className={`${styles.nav}`}>
          <div className={`${styles.header}`}>
            <p className="text-base font-bold font-olive">Navigation</p>
          </div>
          {LINKS.map((item) => {
            return (
              <Link
                key={item.name}
                data={{ ...item }}
                setIsActive={setIsActive}
              />
            );
          })}
        </div>
      </div>
      <Curve />
    </motion.div>
  );
};

export default Menu;
