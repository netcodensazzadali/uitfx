import Image from "next/image";
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import bankTransfer from '../../public/img/banktransfer.png';
import masterCard from '../../public/img/mastercard.png';
import neteller from '../../public/img/neteller.png';
import skrill from '../../public/img/skrill.png';
import unionPay from '../../public/img/unionpay.png';
import visaCardImage from '../../public/img/visacard.png';
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

const CarouselPaymentSlider = () => {
    const paymentImage = [
        {
            image: skrill
        },
        {
            image: masterCard
        },
        {
            image: visaCardImage
        },
        {
            image: neteller
        },
        {
            image: bankTransfer
        },
        {
            image: unionPay
        }
    ];
  return (
    <div className='carousel-slider'>
        <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlay
            autoPlaySpeed={3000}
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
                    min: 1024
                    },
                    items: 5,
                    partialVisibilityGutter: 10
                },
                mobile: {
                    breakpoint: {
                    max: 464,
                    min: 0
                    },
                    items: 1,
                    partialVisibilityGutter: 30
                },
                tablet: {
                    breakpoint: {
                    max: 1024,
                    min: 464
                    },
                    items: 3,
                    partialVisibilityGutter: 30
                }
                }}
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
            
                >
                {paymentImage.map((card, index) => {
                    return (
                        <div className='text-center' key={index}>
                            <Image key={index} src={card.image} alt="image" className="img-fluid"></Image> 
                        </div>
                    )
                })}
                
        </Carousel>
    </div>
  )
}

export default CarouselPaymentSlider