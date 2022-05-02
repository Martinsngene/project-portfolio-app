import CustomImage from "../globals/CustomImage";
import { NavbarSchemaData, NavbarSchemaData2 } from "../constants/NavBarSchema";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import SlideOut from "../animations/SlideOut";
import CustomPageBtn from "../globals/CustomPageBtn";

interface NavBarPropsI {
  navToggle: boolean;
  navStatic?: boolean;
}

const Navbar = ({ navToggle, navStatic }: NavBarPropsI) => {
  const [menu, setMenu] = useState(false);

  return (
    <div>
      <div className="hidden md:block ">
        <div
          className={` ${
            navToggle
              ? "bg-[#fff] transition-colors shadow-lg"
              : "bg-[rgba(0,0,0,0.06)] backdrop-blur-md"
          } ${
            navStatic ? "bg-[#fff] transition-colors shadow-lg" : null
          } h-[80px] fixed z-10 w-[100%] flex items-center justify-between px-[3rem] py-[1.5rem]`}
        >
          <a href={"/"}>
            <div className="logo pl-[1rem] ">
              <CustomImage
                src="/images/navlogo.png"
                width={120}
                height={60}
                imgClassName={"w-[120px] h-[60px]"}
              />
            </div>
          </a>

          <ul className="flex items-center justify-between w-[60%] z-50">
            {NavbarSchemaData.map((item, index) => (
              <li
                className={`font-[400] hover:font-[700] focus:font-[700]
             ${navToggle ? "text-[#000]" : "text-[#fff]"}
               text-[1rem]`}
                key={index}
              >
                <a href={`${item.route}`}>{item.name}</a>
              </li>
            ))}

            <li className="hidden lg:block">
              <CustomPageBtn href="/contact" buttonLabel="Contact Us" />
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`md:hidden  ${
          navToggle
            ? "bg-[#fff] transition-colors shadow-lg"
            : "bg-[rgba(0,0,0,0.06)] backdrop-blur-md"
        } ${
          navStatic ? "bg-[#fff] transition-colors shadow-lg" : null
        } h-[4rem] fixed z-10 w-[100%] flex items-center justify-between  px-[1.5rem] py-[1rem]`}
      >
        <a href={"/"}>
          <div className="logo pl-[1rem]">
            <CustomImage
              src="/images/navlogo.png"
              imgClassName={"w-[80px] h-[40px]"}
            />
          </div>
        </a>

        <div>
          <SlideOut menu={menu}>
            <div
              className={`menuWrapper ${menu === true ? "block" : "hidden"}`}
              id="hamBurgerMenu"
            >
              <div className="menuBody">
                <a href={"/"}>
                  <div className="logo pl-[1rem] z-50">
                    <CustomImage
                      src="/images/navlogo2.png"
                      imgClassName={"w-[80px] h-[40px]"}
                    />
                  </div>
                </a>

                <div className="menuCloseContainer">
                  <button
                    className="text-[#FFF]"
                    id="navMenuClose"
                    onClick={() => setMenu(!menu)}
                  >
                    <AiOutlineClose size={"26px"} />
                  </button>
                </div>
                <ul className="flex flex-col items-center justify-between">
                  {NavbarSchemaData2.map((item, index) => (
                    <li
                      className="font-[700] my-[0.6rem] text-[#fff] text-[16px]"
                      key={index}
                    >
                      <a href={`${item.route}`}>{item.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SlideOut>
        </div>
        <button className={`${navToggle ? "text-[#000]" : "text-[#fff]"}`}>
          <AiOutlineMenu size={"26px"} onClick={() => setMenu(!menu)} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
