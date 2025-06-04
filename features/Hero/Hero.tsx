import React from "react";
import Button from "../organisms/Button";

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
    </div>
  );
};

export default Hero;
