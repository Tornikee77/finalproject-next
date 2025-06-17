"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "motion/react";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const burgerToggle = () => {
    setClicked((prev) => !prev);
  };

  return (
    <div>
      <header className="z-20 relative flex justify-center items-center bg-white mx-auto max-w-[335px]">
        <div className="flex justify-between w-full max-w-[375px]">
          {clicked ? (
            <div onClick={burgerToggle}>
              <Image
                src="./closeBtn.svg"
                width={24}
                height={24}
                alt="closeBtn"
              />
            </div>
          ) : (
            <Image
              className="cursor-pointer"
              onClick={burgerToggle}
              src="./burgerMenu.svg"
              width={24}
              height={24}
              alt="burgerMenu"
            />
          )}

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
                <Image
                  src="./downSvg.svg"
                  width={7}
                  height={7}
                  alt="dropDown"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </header>
      <motion.div
        initial={{ y: "-100%" }}
        animate={clicked ? { y: 0 } : { y: "-100%" }}
        transition={{ duration: 0.5 }}
        className="z-10 absolute flex justify-center items-center bg-[var(--background)] w-full h-dvh"
      >
        <ul className="flex flex-col text-center cursor-pointer">
          <li className="text-[var(--color-paragraph)]">Main</li>
          <li className="text-[var(--color-paragraph)]">TextBook</li>
          <li className="text-[var(--color-paragraph)]">Statistics</li>
          <li className="text-[var(--color-paragraph)]">Sprint</li>
          <li className="text-[var(--color-paragraph)]">Audio-call</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Home;
