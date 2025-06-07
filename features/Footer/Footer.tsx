import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <div className="footerTopleft flex    bg-white  w-full gap-[80px] ml-[40px] ">
        <ul className="flex flex-col  gap-4">
          <li>Home</li>
          <li>Textbook</li>
          <li>Statistic</li>
          <li>Sprint</li>
          <li>Auto-call</li>
        </ul>
        <ul className="flex flex-col  gap-4">
          <li>Alex</li>
          <li>Gabriel</li>
          <li>Marcus</li>
        </ul>
      </div>
      <div className="w-[335px] h-[1px] bg-[aqua] mx-auto mt-[20px]"></div>
      <div className="footerbottom">
        <div className="footerLogoContainer">
          <Image
            src="./githubIcon.svg"
            width={30}
            height={24}
            alt="github.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
