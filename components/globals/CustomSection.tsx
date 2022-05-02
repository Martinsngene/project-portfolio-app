import ArrowLink from "./ArrowLink";
import CustomImage from "./CustomImage";

interface CustomSectionI {
  img: string;
  header: string;
  onLoad?: any;
  children: React.ReactNode;
  imgWidth: number;
  imgHeight: number;
  containerStyles: string;
}

const CustomSecion = ({
  img,
  header,
  children,
  imgWidth,
  imgHeight,
  containerStyles,
}: CustomSectionI) => {
  return (
    <div
      className={`w-full flex-col md:flex-row flex justify-between items-center ${containerStyles}`}
    >
      <CustomImage
        className="itemOne w-full md:placeholder:w-[35%] h-full flex items-center justify-center"
        src={img}
        width={imgWidth}
        height={imgHeight}
      />

      <div className="itemTwo w-full md:w-[65%] px-12">
        <div className="head">
          <h1 className="text-[24px] md:text-[32px] font-[600] text-[#616060] leading-[110%]">
            {header}
          </h1>
        </div>
        <div className="body">
          <p className="text-[1rem] font-[400] text-[#001011] my-[1rem]">
            {children}
          </p>
        </div>
        <a href="/" className="button">
          <ArrowLink
            text="Our Difference"
            textStyles="text-[20px] font-bold text-[#1B0538]"
            containerStyles="w-[200px] flex items-center justify-around"
            arrowStyles="text-[32px] text-[#1B0538] font-[800]"
          />
        </a>
      </div>
    </div>
  );
};

export default CustomSecion;
