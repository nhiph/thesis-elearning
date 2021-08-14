import React from "react";
import { Carousel } from "antd";
import './Carousel.scss'
import banner1 from "../../assets/img/banner1.jpg";
import banner2 from "../../assets/img/banner2.jpg";
import banner3 from "../../assets/img/banner3.jpg";
import banner4 from "../../assets/img/banner4.jpg";
import banner5 from "../../assets/img/banner5.jpg";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export default function CarouselComponent() {
  const onChange = (a, b, c) => {
    console.log(a, b, c);
  };

  return (
    <Carousel afterChange={onChange}>
      <div className="flex justify-center items-center portrait">
        <img src={banner2} alt=""/>
      </div>
      <div className="flex justify-center items-center portrait">
        <img src={banner3} alt="" />
      </div>
      <div className="flex justify-center items-center portrait">
        <img src={banner4} alt="" />
      </div>
      <div className="flex justify-center items-center portrait">
        <img src={banner5} alt="" />
      </div>
    </Carousel>
  );
}
