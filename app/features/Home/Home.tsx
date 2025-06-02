"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "motion/react";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-between items-center mx-auto md:max-w-[375px]">
      <Image src="./burgerMenu.svg" width={24} height={24} alt="burgerMenu" />
      <h1>GlobalTalk</h1>
      <div className="flex gap-2">
        <div className="flex justify-center items-center bg-[var(--seconadry-color)] rounded-[50px] w-[32px] h-[32px]">
          A
        </div>
        <div
          className="flex justify-center items-center gap-1 cursor-pointer"
          onClick={handleDropdownToggle}
        >
          <p>Alex</p>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Image src="./downSvg.svg" width={7} height={7} alt="dropDown" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
