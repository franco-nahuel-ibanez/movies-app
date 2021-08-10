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
    autoplay: true,
    autoplaySpeed: 3000,
    centerPadding: "60px",
    slidesToShow: 2,
    slidesToScrool: 1,
    cssEase: "linear",
    speed: 500,
  };

  const {films, loading } = useSelector(state => state.data)

  return (
      <div style={{ padding: '0px 25px' }}>
        <Slider {...settings}>
        {
          loading !== true &&

          films.allData.map( film => (
              <ImageListItem key={film.id} style={{ margin: 7 }} >
                  <ImageUi
                      title={ film.title } 
                      background={ film.background }
                      key={film.key} 
                      />
              </ImageListItem> 
          ))
        }          
        </Slider>
      </div>
    );
  
}