
import Image from 'next/image';
import React from 'react';
import { Card } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import userName1 from '../../public/img/username-1.png';
import userName2 from '../../public/img/username-2.png';
import userName3 from '../../public/img/username-3.png';
import userName4 from '../../public/img/username-4.png';
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

const CarouselSlider = () => {
    const cardInfo = [
        {
            image: userName1, title: "Aidyn Orozco", subTitle:"Trader"
        },
        {
            image: userName2, title: "Sophia Bolton", subTitle:"Manager"
        },
        {
            image: userName3, title: "Maleah Reeves", subTitle:"Trader"
        },
        {
            image: userName4, title: "Charlee Bean", subTitle:"Manager"
        },
        {
            image: userName1, title: "Aidyn Orozco", subTitle:"Trader"
        },
        {
            image: userName2, title: "Sophia Bolton", subTitle:"Manager"
        },
        
    ];
  return (
    <div className='carousel-slider'>
        <Carousel
            additionalTransfrom={0}
            arrows
            autoPlay
            autoPlaySpeed={4000}
            centerMode={false}
            className=""
            containerClass="carousel-slider-arrow"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
                desktop: {
                    breakpoint: {
                    max: 3000,
                    min: 1200
                    },
                    items: 4,
                    partialVisibilityGutter: 40
                },
                mobile: {
                    breakpoint: {
                    max: 575,
                    min: 0
                    },
                    items: 1,
                    partialVisibilityGutter: 30
                },
                tablet: {
                    breakpoint: {
                    max: 1199,
                    min: 576
                    },
                    items: 2,
                    partialVisibilityGutter: 30
                }
                }}
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
            
                >
                {cardInfo.map((card, index) => {
                        return (
                        <Card key={index} className="text-center m-3 border-0">
                            <Card.Body>
                                <Image src={card.image} className="img-fluid"></Image>
                                <Card.Title className='mt-3'>{card.title}</Card.Title>
                                <Card.Subtitle>{card.subTitle}</Card.Subtitle>
                            </Card.Body>
                        </Card>
                        )
                    })}
        </Carousel>
    </div>
  )
}

export default CarouselSlider