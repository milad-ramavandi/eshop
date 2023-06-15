import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


export function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <IoIosArrowForward
      className={className}
      style={{
        ...style,
        width: `${props.width}`,
        height: `${props.height}`,
        margin: "auto",
        zIndex: "1",
        color: `${props.color}`,
      }}
      onClick={onClick}
    />
  );
}


export function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <IoIosArrowBack
      className={className}
      style={{
        ...style,
        width: `${props.width}`,
        height: `${props.height}`,
        margin: "aoto",
        zIndex: "1",
        color: `${props.color}`,
      }}
      onClick={onClick}
    />
  );
}
