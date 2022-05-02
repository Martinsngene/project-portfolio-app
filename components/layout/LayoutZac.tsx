import { Children, useEffect, useState } from "react";
import Footer from "../navigations/Footer";
import Navbar from "../navigations/Navbar";
import FAQLink from "../page-fragements/FAQLink";
import HeroSectionZac from "../page-fragements/HeroSectionZac";

interface LayoutPropsI {
  className?: string;

  children: React.ReactNode;
  heroImgContainer?: string;
  leftContainerStyle?: string;
  rightContainerStyle?: string;
  reverse?: boolean;
  heroTextRight?: boolean;
}

const LayoutZac = ({
  children,

  className,
  heroImgContainer,
  leftContainerStyle,
  rightContainerStyle,
  reverse,
  heroTextRight,
}: LayoutPropsI) => {
  const [navToggleVal, setNavToggleVal] = useState(false);

  const toggleNavBg = () => {
    if (window.pageYOffset > 100) {
      setNavToggleVal(true);
    } else {
      setNavToggleVal(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleNavBg);

    return () => {
      window.removeEventListener("scroll", toggleNavBg);
    };
  }, []);

  const [HeroSectionLeft, HeroSectionRight, LayoutChildren] =
    Children.toArray(children);

  return (
    <div>
      <div>
        <Navbar navToggle={navToggleVal} />
      </div>
      <div className={className}>
        <HeroSectionZac
          heroImgContainer={heroImgContainer}
          leftContainerStyle={leftContainerStyle}
          rightContainerStyle={rightContainerStyle}
          reverse={reverse}
          heroTextRight={heroTextRight}
        >
          <div>{HeroSectionLeft}</div>
          <div>{HeroSectionRight}</div>
        </HeroSectionZac>
        {LayoutChildren}
      </div>
      <div>
        <FAQLink />
        <Footer />
      </div>
    </div>
  );
};

export default LayoutZac;
