import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../components/GraphImages.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";

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
        <img src={image1} alt="Graph 1" className="graph-image1" />
      </div>
      <div>
        <img src={image2} alt="Graph 2" className="graph-image2" />
      </div>
      <div>
        <img src={image3} alt="Graph 3" className="graph-image3" />
      </div>
      <div>
        <img src={image4} alt="Graph 4" className="graph-image4" />
      </div>
      <div>
        <img src={image5} alt="Graph 5" className="graph-image5" />
      </div>
      <div>
        <img src={image6} alt="Graph 6" className="graph-image6" />
      </div>
    </Slider>
  );
};

export default GraphImages;
