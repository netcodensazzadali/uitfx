import Image from "next/image";
import { useEffect } from "react";
import { Card } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import reviewImage5 from "../../public/img/Akshat-Jain.png";
import reviewImage4 from "../../public/img/Bhekani-Masondo.png";
import reviewImage1 from "../../public/img/Watra-Twt.png";
import reviewImage2 from "../../public/img/review-2.png";
import reviewImage3 from "../../public/img/review-3.png";

const CarouselReviewSlider = () => {
  const cardInfo = [
    {
      image: reviewImage1,
      title: "Watra Twt",
      header: "Good Broker",
      subTitle:
        "This broker is recommended,client of Uitfx who has had trading experience with the Uitfx broker, which I consider very trustworthy. Regarding fund withdrawals, there is no doubt because the process is quite fast, although not instant, only around 1 hour. The spread is standard, there are no re-quotes, and there is no hidden spread. Thank you, and always be successful with the Uitfx broker.",
    },
    {
      image: reviewImage2,
      title: "Satriya Yuwana",
      header: "Trusted Broker",
      subTitle:
        "uitfx is a trusted broker, for anyone who wants to find a broker as a place to trade, both for beginners and professionals. uitfx is very competitive regarding spreads, commissions and also customer service. I recommend the uitfx broker as a trusted and good broker for your trading place safely and comfortably. hopefully uitfx will continue to advance and develop in the future.",
    },
    {
      image: reviewImage3,
      title: "Kobeli Kay",
      header: "Best Platform",
      subTitle:
        "Uitfx it is the most reliable,trusted broker and the have easily understood interface,,I love it, it's amazing,they also have mt5 thats is why I love them the most and I will always recommend them to my friends and family, UITFX is the best platform for trading, they have a great customer service and they are always there to help you with any problem you may have. I am very happy with their service and I will continue to use them for my trading needs.",
    },
    {
      image: reviewImage4,
      title: "Bhekani Masondo",
      header: "Experienced Trader",
      subTitle:
        "As an experienced trader, my initial skepticism quickly faded with UITFX. The platform's stability is commendable, allowing for truly precise entries and exits. Spreads have been consistently competitive, which is paramount for my strategies. Their support team understands the nuances of trading, providing efficient assistance. A genuinely solid choice for serious market participants.",
    },
    {
      image: reviewImage5,
      title: "Akshat Jain",
      header: "Reliable Forex Broker",
      subTitle:
        "One of the most reliable forex broking partner you could trust. Have been trading with this broker since last 3 years and everything's running smooth and great.!On time deposits and withdrawals with a super MT5 connection is what they offer. I would highly recommend UITFX to anyone looking for a trustworthy forex broker. Their platform is user-friendly, and their customer service is top-notch. UITFX has truly set a standard in the forex trading industry.",
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
                    src="/img/reviews-trustpilot-stars.svg"
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

export default CarouselReviewSlider;
