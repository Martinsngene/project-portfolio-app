interface LinkPropsI {
  children?: React.ReactNode;
  className?: string;
  onClick?: any;
  textStyle?: string;
  href?: string;
}

const CustomLink = ({
  children,
  className,
  onClick,
  textStyle,
  href,
}: LinkPropsI) => {
  return (
    <div className={className} onClick={onClick}>
      <a href={`${href}`}>
        <span className={textStyle}>{children}</span>
      </a>
    </div>
  );
};

export default CustomLink;
