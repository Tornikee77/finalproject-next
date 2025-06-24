import Image from "next/image";
import Button from "../organisms/Button";

const WatchProgres = () => {
  return (
    <div className=" md:flex flex-col  items-center mx-auto w-[335px]">
      <div className="flex justify-center mx-auto mt-5 ">
        <Image
          src="/watchProgres.png"
          width={335}
          height={260}
          alt="womanIcon"
        />
      </div>
      <h3 className="mt-2 max-w-[300px] font-[900] text-[24px]  text-[var(--color-black)] text-center leading-[100%]">
        Watch your progress every day
      </h3>
      <p className="mt-3 mb-5 text-[var(--color-paragraph)] text-[14px] w-[335px] text-center font-[600]">
        Save statistics on your achievements, words learned, and mistakes
      </p>
      <div>
        <Button
          text="Statistics →"
          size="flex justify-center items-center rounded-[100px] w-[116px] h-[38px] mb-[52px]"
          color="bg-[var(--seconadry-color)] text-[var(--text-colot)] font-[700]"
        />
      </div>
    </div>
  );
};

export default WatchProgres;
