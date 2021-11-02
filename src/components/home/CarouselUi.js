import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import ImageListItem from '@material-ui/core/ImageListItem';
import { ImageUi } from "./ImageUi";

export const CarouselUi = () => {

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
    centerPadding: "60px",
    slidesToShow: 2,
    slidesToScrool: 1,
    cssEase: "linear",
    speed: 500,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          centerMode: false
        }
      }
    ]
  };

  const {dataCarousel, loading } = useSelector(state => state.data)

  let films = dataCarousel.filter( (data) => data.background !== null );

  return (
      <div style={{ padding: '0px 25px' }}>
        <Slider {...settings}>

        {
          loading !== true &&

          films.map( film => (
              <ImageListItem key={film.id} style={{ margin: 7 }} >
                  <ImageUi
                      {...film}
                      key={film.key} 
                      />
              </ImageListItem> 
          ))
        }   
        </Slider>
      </div>
    ); 
}