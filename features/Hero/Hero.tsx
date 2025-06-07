import React from "react";
import Button from "../organisms/Button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-white mx-auto w-full">
      <p className="font-[700] text-[12px] text-[var(--text-colot)]">
        E-COURSE PLATFORM
      </p>
      <h3 className="mt-2 max-w-[300px] font-[900] text-[32px] text-[var(--color-black)] text-center leading-[100%]">
        Learning and teaching online, made easy.
      </h3>
      <p className="mt-3 mb-5 text-[var(--color-paragraph)]">
        Practice and learn new things with the platform.
      </p>
      <div>
        <Button
          text="About platform"
          size="flex justify-center items-center rounded-[100px] w-[146px] h-[38px]"
          color="bg-[var(--seconadry-color)] text-[var(--text-colot)]"
        />
      </div>
      <div className="flex items-center gap-10 mt-5">
        <div className="flex flex-col items-center">
          <div className="flex">
            <Image
              src="./lightning.svg"
              width={12}
              height={16}
              alt="lightning.svg"
            />
            <p className="font-[800] text-[20px]">600</p>
            <Image src="./+.svg" width={12} height={16} alt="+" />
          </div>
          <p className="font-[600] text-[12px] text-[var(--color-paragraph)]">
            Popular words
          </p>
        </div>
        <div className="bg-[var(--color-paragraph)] w-[1px] h-[32px]"></div>
        <div className="flex flex-col items-center">
          <div className="flex">
            <Image
              src="./controler.svg"
              width={12}
              height={16}
              alt="lightning.svg"
            />
            <p className="font-[800] text-[20px]">2</p>
            <Image src="./+.svg" width={12} height={16} alt="+" />
          </div>
          <p className="font-[600] text-[12px] text-[var(--color-paragraph)]">
            Mini-games
          </p>
        </div>
      </div>
      <Image src="/heropicture.png" width={335} height={280} alt="herobg" />
    </div>
  );
};

export default Hero;
