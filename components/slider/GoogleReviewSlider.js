import Image from "next/image";
import { useEffect } from "react";
import { Card } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import reviewImage3 from "../../public/img/Achmad-Affandi.png";
import reviewImage1 from "../../public/img/Iqbal-Gusmara.png";
import reviewImage4 from "../../public/img/Ismail-Maziidi.png";
import reviewImage2 from "../../public/img/Mulyono.png";
import reviewImage5 from "../../public/img/Wasi-Mohammad.png";

const GoogleReviewSlider = () => {
  const cardInfo = [
    {
      image: reviewImage1,
      title: "Iqbal Gusmara",
      header: "Clean Platform",
      subTitle:
        "UITFX offers a clean platform with fast execution and tight spreads. I tested their No Deposit Bonus offer and successfully withdrew after meeting the trading conditions. Great support, reliable performance — a good broker for both beginners and scalpers! Highly recommended for anyone looking to trade forex with confidence.",
    },
    {
      image: reviewImage2,
      title: "Mulyono",
      header: "Great Broker",
      subTitle:
        "Leverage at UITFX up to 1:500, spreads starting from 1.5, and no commissions charged. In addition, UITFX also offers responsive customer service and an easy-to-use trading platform, as well as allowing deposits and withdrawals through various methods. I highly recommend UITFX to anyone looking for a reliable and trustworthy broker.",
    },
    {
      image: reviewImage3,
      title: "Achmad Affandi",
      header: "Best Platform",
      subTitle:
        "UITFX is a forex and CFD broker that offers trading on various instruments like currencies, gold, oil, crypto, and stock indices. Overall, UITFX tries to attract traders with tight spreads, flexible leverage, and a trading platform that’s easy to use on both desktop and mobile. For beginners, UITFX says it provides some basic learning materials and customer service to help new clients understand how to trade. The account opening process is also made simple, with different account types to match different budgets and trading styles.",
    },
    {
      image: reviewImage4,
      title: "Ismail Maziidi",
      header: "Experienced Trader",
      subTitle:
        "The respond of the customer service is faster, deposit and Withdrawal is just a minute, the platform is very easy to use, and the spreads are very low. UITFX is a great broker for both beginners and experienced traders. I highly recommend UITFX to anyone looking for a reliable and trustworthy broker. UITFX has truly set a standard in the forex trading industry.",
    },
    {
      image: reviewImage5,
      title: "Wasi Mohammad",
      header: "Reliable Forex Broker",
      subTitle:
        "Best forex broker quick support and intuitive UI/UX. Highly recommended for both beginners and experienced traders. UITFX has a wide range of trading instruments, including forex, commodities, indices, and cryptocurrencies. The platform is user-friendly and offers a variety of tools and features to help traders make informed decisions. UITFX also provides excellent customer support, with a team of knowledgeable professionals available 24/7 to assist with any questions or concerns.",
    },
  ];

  useEffect(() => {
    const loadGSAP = async () => {
      if (typeof window === "undefined") return;

      const { default: gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        ".review-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".carousel-slider",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    };

    loadGSAP();
  }, []);

  return (
    <div className="carousel-slider">
      <Carousel
        additionalTransfrom={0}
        arrows
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
              min: 1200,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 767,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1199,
              min: 768,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {cardInfo.map((card, index) => {
          return (
            <Card key={index} className="m-3 border-0 review-card">
              <Card.Body>
                <div className="review-icon mb-4">
                  <Image
                    src="/img/reviews-google-stars.svg"
                    alt="review-icons"
                    width={139}
                    height={27}
                  ></Image>
                </div>
                <h3>{card.header}</h3>
                <div className="card-text">{card.subTitle}</div>

                <div className="card-intro">
                  <div className="icon-image">
                    <Image
                      src={card.image}
                      className="img-fluid"
                      alt="review"
                    ></Image>
                  </div>
                  <div className="ms-3">
                    <Card.Title>{card.title}</Card.Title>
                  </div>
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </Carousel>
    </div>
  );
};

export default GoogleReviewSlider;
