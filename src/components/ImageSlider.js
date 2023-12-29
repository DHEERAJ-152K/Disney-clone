import Slider from "react-slick"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './stylesheets/ImageSlider.css'

import image1 from '../images/slider-badag.jpg'
import image2 from '../images/slider-badging.jpg'
import image3 from '../images/slider-scale.jpg'
import image4 from '../images/slider-scales.jpg'



const ImageSlider=()=>{
    const settings={
      dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        slidesToShow:1,
        slidesToScroll:1,
    };

    return(
        <div className="slider-container">
        <Slider {...settings}>
          <a>
            <img src={image1}alt="Image 1" />
          </a>
          <a>
            <img src={image2} alt="Image 2" />
          </a>
          <a>
            <img src={image3} alt="Image 3" />
          </a>
          <a>
            <img src={image4} alt="Image 4" />
          </a>

        </Slider>
      </div>
    );
};

export default ImageSlider;