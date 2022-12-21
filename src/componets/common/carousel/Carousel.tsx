import React from 'react';
import Slider from 'react-slick';
import './_carausel.scss';
interface IProps{
    data: any;
    Content: React.FunctionComponent<{item: any }>;
}

const Carousel = ({data,Content}:IProps) => {
    const settings = {
        dots: false,
        speed: 1000,
        infinite: false,
        slidesToShow: 3,
        swipeToSlide: true,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 580,
            settings: {
              slidesToShow: 1.5,
              slidesToScroll: 1,
              initialSlide: 1,
            },
          },
        ],
      };
      
      return (
        <>
          <div className="carousel">
            <Slider {...settings}>
              {data && data.map((item:any) => (
                <Content key={item._id} item={item} />
              ))}
            </Slider>
          </div>
          <div className="desktop">
            <div className="items">
              {data && data.slice(0, 3).map((item:any) => (
                <Content key={item._id} item={item} />
              ))}
            </div>
          </div>
        </>
      );
    };

export default Carousel;