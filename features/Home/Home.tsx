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
      <header className="z-20 relative flex justify-center items-center bg-white mx-auto max-w-[335px] lg:max-w-[1440px] lg:px-20 lg:py-4">
        <div className="flex justify-between w-full max-w-[375px] lg:max-w-[1200px]">
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
              className="cursor-pointer lg:hidden"
              onClick={burgerToggle}
              src="./burgerMenu.svg"
              width={24}
              height={24}
              alt="burgerMenu"
            />
          )}
          <div className=" flex items-center gap-[30px] justify-center ">
            <h1 className="text-base lg:text-xl font-semibold">GlobalTalk</h1>
            <ul className="flex gap-5 lg:flex md:hidden ">
              <li> skdm</li>
              <li>s;ldf</li>
              <li>sl;f</li>
              <li>shfukfh</li>
            </ul>
          </div>

          <div className="flex gap-2 lg:gap-4">
            <div className="flex justify-center items-center bg-[var(--seconadry-color)] rounded-[50px] w-[32px] h-[32px] lg:w-[40px] lg:h-[40px]">
              A
            </div>
            <div
              className="flex justify-center items-center gap-1 cursor-pointer lg:gap-2"
              onClick={handleDropdownToggle}
            >
              <p className="text-sm lg:text-base">Alex</p>
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
        <ul className="flex flex-col text-center cursor-pointer gap-2 lg:gap-4">
          <li className="text-[var(--color-paragraph)] text-sm lg:text-base">
            Main
          </li>
          <li className="text-[var(--color-paragraph)] text-sm lg:text-base">
            TextBook
          </li>
          <li className="text-[var(--color-paragraph)] text-sm lg:text-base">
            Statistics
          </li>
          <li className="text-[var(--color-paragraph)] text-sm lg:text-base">
            Sprint
          </li>
          <li className="text-[var(--color-paragraph)] text-sm lg:text-base">
            Audio-call
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Home;
