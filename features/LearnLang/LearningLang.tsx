import Image from "next/image";

const LearningLang = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-white mx-auto w-full">
      <Image src="/learningLang.png" width={335} height={280} alt="womanpng" />
      <div>
        <h3 className="mt-2 max-w-[335px] font-[900] text-[24px] text-[var(--color-black)] text-center leading-[100%]">
          Learn a language in a playful way
        </h3>
        <p className="mt-3 mb-5 text-[var(--color-paragraph)]">
          Make learning words more fun with mini-games
        </p>
        <div>
          <div className="pinkShoesCont w-[114px] h-[112px] rounded-2xl bg-[aqua] ">
            <div>
              <Image
                className="pt-[80px] mx-auto"
                src="/Sprint →.png"
                width={53}
                height={14}
                alt="womanpng"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningLang;
