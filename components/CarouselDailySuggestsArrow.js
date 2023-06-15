import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styles from "./CarouselDailySuggestsArrow.module.css";
export function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={styles.nextArrow}>
      <div style={{position:'relative', width:'100%', height:'100%'}}>
        <IoIosArrowForward
          className={className}
          style={{
            ...style,
            width: `${props.width}`,
            height: `${props.height}`,
            zIndex: "1",
            color: `${props.color}`,
            right:'0',
            left:'50%',
            transform:`translate(-50%, -50%)`,
            opacity: "0.7",
          }}
          onClick={onClick}
        />
      </div>
    </div>
  );
}

export function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={styles.prevArrow}>
      <div style={{position:'relative', width:'100%', height:'100%'}}>
        <IoIosArrowBack
          className={className}
          style={{
            ...style,
            width: `${props.width}`,
            height: `${props.height}`,
            zIndex: "1",
            color: `${props.color}`,
            left:'50%',
            transform:`translate(-50%, -50%)`,
            opacity: "0.7",
          }}
          onClick={onClick}
        />
      </div>
    </div>
  );
}
