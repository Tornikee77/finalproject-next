import Image from "next/image";

const Footer = () => {
  return (
    <div className="">
      <div className="flex justify-center bg-white gap-[80px] mx-auto w-full max-w-screen-lg px-4">
        <ul className="flex flex-col gap-4 text-[var(--color-paragraph)] font-[600]">
          <li>Home</li>
          <li>Textbook</li>
          <li>Statistic</li>
          <li>Sprint</li>
          <li>Auto-call</li>
        </ul>
        <ul className="flex flex-col gap-4 text-[var(--color-paragraph)] font-[600]">
          <li>Alex</li>
          <li>Gabriel</li>
          <li>Marcus</li>
        </ul>
      </div>
      <div className="w-full h-[1px] bg-[var(--color-paragraph)] mx-auto mt-[20px] max-w-[335px]"></div>
      <div className="footerbottom flex flex-col">
        <div className="footerLogoContainer max-w-[150px] mx-auto mt-4 flex gap-[30px]">
          <Image
            src="./githubIcon.svg"
            width={30}
            height={24}
            alt="github.svg"
          />
          <Image src="./gtIcon.svg" width={30} height={24} alt="gt" />
          <Image src="./youtube.svg" width={30} height={24} alt="youtube" />
        </div>
        <p className="mx-auto mt-4 text-[var(--color-line)] text-[10px]">
          ©2021 GlobalTalk. Project for GlobalTalk.
        </p>
      </div>
    </div>
  );
};

export default Footer;
