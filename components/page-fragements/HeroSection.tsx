import ArrowLink from "../globals/ArrowLink";

const HeroSection = () => {
  return (
    <div className="relative">
      <div className="w-full h-[320px] sm:h-[420px] md:h-[80vh] heroSection flex items-center justify-start"></div>
      <div className=" h-[20vh] bg-[#1B0538] left-0 w-full px-[1.2rem] md:pl-[12rem] py-[1rem]">
        <h2 className="text-[18px] md:text-[24px] font-bold text-[#fff]">
          Better Health Through Quality Research
        </h2>
        <ArrowLink
          text="It starts here"
          textStyles="text-[18px] md:text-[25px] font-[500] text-[#EE4036]"
          containerStyles="w-[150px] md:w-[200px] flex items-center justify-between"
          arrowStyles="text-[24px] md:text-[25px] text-[#EE4036] font-[500]"
        />
      </div>
    </div>
  );
};

export default HeroSection;
