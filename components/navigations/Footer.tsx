import { FooterSchemaData } from "../constants/FooterSchema";
import CustomImage from "../globals/CustomImage";

const Footer = () => {
  return (
    <footer className="pt-[2rem] md:pt-[5rem] pb-[3rem] md:pb-[5rem]">
      <div className="bg-[#fff] w-[100%] py-[1rem] md:py-[3rem] px-[2rem] flex flex-col items-center justify-between">
        <div className="flex flex-col items-center justify-center mb-[2rem] mt-[1rem] md:mt-0">
          <CustomImage src="/images/navlogo.png" width={150} height={75} />
        </div>
        <div className="flex flex-col items-center justify-between w-[100%]">
          <div className="flex flex-col items-center justify-center w-[100%]">
            <ul className="flex flex-col items-center justify-center mt-[0.5rem]">
              {FooterSchemaData.map((currentVal, index) => {
                return (
                  <li
                    className="py-[1px] font-[700] text-[16px] md:text-[17px]"
                    key={index}
                  >
                    <a href={currentVal.href}>{currentVal.text}</a>
                  </li>
                );
              })}
            </ul>
            <ul className="flex flex-col items-center justify-center text-[16px] mt-[1rem] ">
              <li>
                <h2 className="text-[14px] md:text-[16px] text-[#430990] font-[600] md:font-[700]">
                  Get in Touch:
                </h2>
              </li>
              <li>
                <span className="font-[700] text-[11px] md:text-[16px]">
                  Phone:
                </span>{" "}
                864.334.0141
              </li>
              <li className="my-[0.2rem]">
                <span className="font-[700] text-[11px] md:text-[16px]">
                  Fax:
                </span>{" "}
                864.334.0137
              </li>
              <li>
                <span className="font-[700] text-[11px] md:text-[16px]">
                  Email:
                </span>{" "}
                info@example.com
              </li>
            </ul>
            <ul className="flex flex-col items-center justify-center text-[1rem] mt-[3rem]">
              <li>
                <h2 className="text-[18px] font-bold text-[#430990]">
                  NotPowered by Kleekit
                </h2>
              </li>
              <li>
                <h2 className="text-[12px] md:text-[14px] font-[800] text-[#430990]">
                  &copy; 2022 Gadolin Research.
                </h2>
              </li>
              <li className="text-[12px] md:text-[14px]">
                All Rights Reserved.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
