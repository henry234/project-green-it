import React from "react";
import Slider from "react-slick";

import MainHeader from "./MainHeader/MainHeader";
import Logo from "./Logo/Logo";
import headerSide1 from "../../assests/headerSlides/s1.png";
import headerSide2 from "../../assests/headerSlides/s2.png";
import headerSide3 from "../../assests/headerSlides/s3.png";
import headerSide4 from "../../assests/headerSlides/s4.png";

const slideUrl = [headerSide1, headerSide2, headerSide3, headerSide4];

const header = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const mainheader = slideUrl.map((url, i) => {
    return <MainHeader loc={url} key={i} name={url} />;
  });
  return (
    <header className="bg-light-green w-100 flex-column justify-center">
      <Logo />
      <Slider {...settings}>{mainheader}</Slider>
    </header>
  );
};
export default header;
