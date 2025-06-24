import Image from "next/image";
import Button from "../organisms/Button";

const IncreVocabulary = () => {
  return (
    <div className="flex flex-col bg-[var(--color-prymary)] items-center mx-auto w-[335px]">
      <h3 className="mt-2 max-w-[300px] font-[900] text-[32px] text-[var(--color-black)] text-center leading-[100%]">
        Increase your vocabulary
      </h3>
      <p className="mt-3 mb-5 text-[var(--color-paragraph)] w-[335px] text-center font-[600]">
        Traditional and new effective approaches to word study
      </p>
      <div>
        <Button
          text="Textbook →"
          size="flex justify-center items-center rounded-[100px] w-[116px] h-[38px]"
          color="bg-[var(--seconadry-color)] text-[var(--text-colot)] font-[700]"
        />
      </div>
      <div className="flex justify-center mx-auto mt-5">
        <Image
          src="/learningLang.png"
          width={335}
          height={260}
          alt="womanIcon"
        />
      </div>
    </div>
  );
};

export default IncreVocabulary;
