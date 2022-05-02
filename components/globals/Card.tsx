import CustomPageBtn from "./CustomPageBtn";

interface CardPropsI {
  children: React.ReactNode;
  href?: string;
  buttonLabel: string;
  src: string;
  header?: string;
}

const Card = ({ children, src, buttonLabel, header, href }: CardPropsI) => {
  return (
    <div className="bg-transparent w-[290px] col-span-1">
      <div className="cardImgContainer w-full flex  items-center justify-center">
        <img src={src} alt="" className="w-[250px]" />
      </div>
      <div className="cardHeaderContainer flex items-center justify-center">
        <h2 className="text-[28px] font-bold text-[#1B0538] mt-[0.6rem]">
          {header}
        </h2>
      </div>
      <div className="cardDescriptionContainer p-2 h-[12rem]">
        <p>{children}</p>
      </div>
      <div className="cardBtnContainer my-4 mx-3">
        <CustomPageBtn href={`${href}`} buttonLabel={buttonLabel} />
      </div>
    </div>
  );
};

export default Card;
