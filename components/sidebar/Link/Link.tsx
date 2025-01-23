"use client";
import styles from "./styles.module.scss";
import Link from "next/link";
import { motion } from "motion/react";
import { slide } from "../data/anim";

interface CustomLinkProps {
  data: { url: string; name: string };
  setIsActive: (isActive: boolean) => void;
}

const CustomLink = ({ data, setIsActive }: CustomLinkProps) => {
  const handleClick = () => {
    setIsActive(false);
  };

  return (
    <motion.div
      custom={data.name}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={`${styles.link}`}
    >
      <Link href={`#${data.url}`} onClick={handleClick}>
        {data.name}
      </Link>
    </motion.div>
  );
};

export default CustomLink;
