interface ImagePropsI {
  src?: string;
  width?: number;
  height?: number;
  className?: string;
  imgClassName?: string;
  layout?: any;
}

const CustomImage = ({
  className,
  src,
  width,
  height,
  imgClassName,
  layout,
}: ImagePropsI) => {
  return (
    <div className={className}>
      <img
        className={imgClassName}
        src={src}
        width={width}
        height={height}
        alt=""
      />
    </div>
  );
};

export default CustomImage;
