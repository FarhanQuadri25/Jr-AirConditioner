"use client";
import { useState } from "react";
import styles from "./styles.module.scss";
import Menu from "./menu/Menu";
import { AnimatePresence } from "motion/react";

const Sidebar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      {/* Logo Section */}
      <div className="flex justify-between items-center p-4">
        <h1 className="text-3xl font-bold font-olive text-newaccent">
          Jr-AirConditioner
        </h1>
      </div>

      {/* Burger Button */}
      <div
        className={`${styles.button} cursor-pointer mr-2 mt-2`}
        onClick={() => setIsActive((prev) => !prev)}
      >
        <div
          className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}
        ></div>
      </div>

      {/* Menu Component - Animation when active */}
      <AnimatePresence mode="wait">
        {isActive && <Menu setIsActive={setIsActive} />}
      </AnimatePresence>
    </>
  );
};
export default Sidebar;
