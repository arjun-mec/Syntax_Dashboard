import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../components/GraphImages.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

const GraphImages = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    pauseOnHover: true,
    prevArrow: <NavigateBeforeIcon />,
    nextArrow: <NavigateNextIcon />,
  };
  return (
    <Slider {...settings} className="image-slider">
      <div>
        <img
          src="src\assets\image1.png"
          alt="Graph 1"
          className="graph-image1"
        />
      </div>
      <div>
        <img
          src="src\assets\image2.png"
          alt="Graph 1"
          className="graph-image2"
        />
      </div>
      <div>
        <img
          src="src\assets\image3.png"
          alt="Graph 1"
          className="graph-image3"
        />
      </div>
      <div>
        <img
          src="src\assets\image4.png"
          alt="Graph 1"
          className="graph-image4"
        />
      </div>
      <div>
        <img
          src="src\assets\image5.png"
          alt="Graph 1"
          className="graph-image5"
        />
      </div>
      <div>
        <img
          src="src\assets\image6.png"
          alt="Graph 1"
          className="graph-image6"
        />
      </div>
    </Slider>
  );
};

export default GraphImages;
