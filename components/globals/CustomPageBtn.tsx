import { CustomButton } from "../buttons/Buttons";

interface ButtonPropsI {
  href?: string;
  onClick?: any;
  buttonLabel?: string;
}

function CustomPageBtn({ href, onClick, buttonLabel }: ButtonPropsI) {
  return (
    <a href={href}>
      <CustomButton
        className="bg-[#430990] hover:bg-[#EE4036] w-[150px] px-[0.8rem] py-[0.7rem] transition rounded-[1.5rem] flex items-center justify-center"
        textStyle="text-[#fff] text-[0.9rem] font-[700]"
        onClick={onClick}
      >
        {buttonLabel}
      </CustomButton>
    </a>
  );
}

export default CustomPageBtn;
