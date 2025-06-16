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
        <div className="flex gap-[30px] mx-auto justify-center  mt-[50px] ">
          <div className="pinkShoesCont w-[114px] h-[112px] rounded-2xl bg-[var(--color-PinkshoeCont)] ">
            <div className="relative">
              <Image
                className="pt-[80px] mx-auto"
                src="/Sprint →.svg"
                width={53}
                height={14}
                alt="womanpng"
              />

              <Image
                className="absolute bottom-8"
                src="/pinkShoes.svg"
                width={131}
                height={106}
                alt="womanpng"
              />
            </div>
          </div>
          <div className="greenCont w-[172px] h-[112px] rounded-2xl bg-[var(--color-trumpetCont)] ">
            <div className="relative">
              <Image
                className="pt-[80px] mx-auto"
                src="/Audio-call.svg"
                width={81}
                height={14}
                alt="womanpng"
              />

              <Image
                className="absolute bottom-8 left-8"
                src="/trumpet.svg"
                width={91}
                height={106}
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
