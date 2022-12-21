import React from 'react';
import Slider from 'react-slick';
import IDish from '../../interfaces/Dishes'
import IRestaurant from '../../interfaces/Restaurant';
import '../../assets/styles/components/common/_carausel.scss';
interface IProps{
    data: IDish[] | IRestaurant[];
     //Content: React.ComponentType<{item: IRestaurant| IDish }>;
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
              {data && data.map((rest) => (
                <Content key={rest._id} item={rest} />
              ))}
            </Slider>
          </div>
          <div className="desktop">
            <div className="items">
              {data && data.slice(0, 3).map((rest) => (
                <Content key={rest._id} item={rest} />
              ))}
            </div>
          </div>
        </>
      );
    };

export default Carousel;