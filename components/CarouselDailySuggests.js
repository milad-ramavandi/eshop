import React from "react";
import Slider from "react-slick";
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import ItemDailySuggest from "./ItemDailySuggest";
import { NextArrow, PrevArrow } from "./CarouselDailySuggestsArrow";

const CarouselDailySuggests = (props) => {
  let settings = {
    className: "innerSliderDiv",
    adaptiveHeight: true,
    speed: 700,
    centerMode: true,
    centerPadding: "1em",
    swipeToSlide: true,
    rtl: true,
    slidesToShow: props.cardsCount,
    slidesToScroll: 1,
    nextArrow: <NextArrow width="20px" height="20px" color='#3f4064' length={props.data.length}/>,
    prevArrow: <PrevArrow width="20px" height="20px" color='#3f4064' length={props.data.length}/>,
    responsive: [
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          speed: 100,
          adaptiveHeight: true,
          slidesToScroll: 1,
          centerPadding: "1px",
          nextArrow: <NextArrow width="10px" height="10px"/>,
          prevArrow: <PrevArrow width="10px" height="10px"/>,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          speed: 100,
          adaptiveHeight: true,
          slidesToScroll: 1,
          centerPadding: "10px",
          nextArrow: <NextArrow width="12px" height="12px" />,
          prevArrow: <PrevArrow width="12px" height="12px" />,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          speed: 100,
          adaptiveHeight: true,
          slidesToScroll: 1,
          centerPadding: "30px",
          nextArrow: <NextArrow width="15px" height="15px" />,
          prevArrow: <PrevArrow width="15px" height="15px" />,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          speed: 100,
          adaptiveHeight: true,
          slidesToScroll: 1,
          centerPadding: "1px",
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          speed: 100,
          adaptiveHeight: true,
          slidesToScroll: 1,
          centerPadding: "10px",
        },
      },
    ],
  };

  return (
    <Slider
      {...settings}
      focusOnSelect={false}
      rtl={true}
      slidesToScroll={1}
    >
      {props.data.map((item) => {
        if (item.stock !== 0) {
          return (
            <div key={item.id}>
              <a href={`products/${item.id}`} target="_blank">
                <ItemDailySuggest data={item} />
              </a>
            </div>
          );
        }
      })}
    </Slider>
  );
};

export default CarouselDailySuggests;
