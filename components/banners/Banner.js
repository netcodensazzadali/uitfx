import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Card, Carousel, Col, Container, Row } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { useSwipeable } from "react-swipeable";

import BannerMain2 from "../../public/img/banner-main-2.png";
import BannerMain3 from "../../public/img/banner-main-3.png";
import BannerMain4 from "../../public/img/banner-main-4.png";
import BannerMain from "../../public/img/banner-main.png";
import WhatsAppIcon from "../../public/img/WhatsAppIcon.png";
import { trackPixel } from "../../utils/trackPixel";
import Bubbles from "../animation/Bubbles";

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slideRefs = useRef([]);

  const banners = [
    {
      image: BannerMain,
      title: "Trade Smarter\nWith UITFX",
      subtitle: (
        <>
          Upgrade your trading experience <br /> With the leading trading broker
        </>
      ),
      primaryBtn: "Open Your Account",
      secondaryBtn: "Try Demo Account",
    },
    {
      image: BannerMain2,
      title: "30% Bonus\nOn Deposit",
      subtitle: (
        <>
          If You Deposit <strong className="text-black">$10,000</strong> You
          Will Get 30% Bonus
        </>
      ),
      primaryBtn: "Claim deposit bonus",
      secondaryBtn: "deposit now",
    },
    {
      image: BannerMain3,
      title: "50% Bonus\nOn Deposit",
      subtitle: (
        <>
          If You Deposit <strong className="text-black">$200 - $5000</strong>{" "}
          You Will Get 50% Bonus
        </>
      ),
      primaryBtn: "Claim deposit bonus",
      secondaryBtn: "deposit now",
    },
    {
      image: BannerMain4,
      title: "100% Bonus\nOn Deposit",
      subtitle: (
        <>
          If You Deposit <strong className="text-black">$100</strong> You Will
          Get 100% Bonus
        </>
      ),
      primaryBtn: "Claim deposit bonus",
      secondaryBtn: "deposit now",
    },
  ];

  const openYourAccount = () => {
    trackPixel("Lead", { accountType: "Live" });
  };

  const tryDemoAccount = () => {
    trackPixel("Lead", { accountType: "Demo" });
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    import("gsap/SplitText").then((mod) => {
      const SplitText = mod.SplitText || mod.default;
      gsap.registerPlugin(SplitText);

      const currentSlide = slideRefs.current[activeIndex];
      if (!currentSlide) return;

      const titleEl = currentSlide.querySelector(".card-title");
      const subtitleEl = currentSlide.querySelector(".card-subtitle");
      const buttons = currentSlide.querySelectorAll("a");
      const image = currentSlide.querySelector("img");

      const split = new SplitText(titleEl, { type: "chars" });
      gsap.set(split.chars, { opacity: 0, y: 40 });
      gsap.set([subtitleEl, ...buttons], { opacity: 0, y: 30 });
      gsap.set(image, { opacity: 0, scale: 0.95 });

      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.to(split.chars, {
        opacity: 1,
        y: 0,
        stagger: 0.035,
        duration: 0.8,
      })
        .to(subtitleEl, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
        .to(buttons, { opacity: 1, y: 0, duration: 0.6, stagger: 0.2 }, "-=0.4")
        .to(
          image,
          { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.4)" },
          "-=0.8"
        );

      return () => {
        split.revert();
      };
    });
  }, [activeIndex]);

  return (
    <div className="banner-section-wrapper bubbles-wrapper banner-all-section pt-5">
      <Carousel
        controls={false}
        indicators={false}
        interval={3000}
        className="banner-carousel"
        touch={true}
        pause="hover"
        activeIndex={activeIndex}
        onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}
      >
        {banners.map((banner, index) => {
          const swipeHandlers = useSwipeable({
            onSwipedLeft: () =>
              setActiveIndex((prev) => (prev + 1) % banners.length),
            onSwipedRight: () =>
              setActiveIndex((prev) =>
                prev === 0 ? banners.length - 1 : prev - 1
              ),
            trackMouse: true,
          });

          return (
            <Carousel.Item key={index} {...swipeHandlers}>
              <Container fluid="xxl">
                <Row className="banner-section text-center text-md-start align-items-center">
                  <Col
                    xl={6}
                    lg={7}
                    md={8}
                    sm={12}
                    xs={12}
                    ref={(el) => (slideRefs.current[index] = el)}
                  >
                    <div className="banner-title">
                      <Card className="bg-transparent border-0">
                        <Card.Body className="text-center text-md-start mt-5 mt-md-0">
                          <Card.Text className="whatsapp-contact">
                            <Image src={WhatsAppIcon} alt="WhatsAppIcon" />
                            <span>+66 61 331 3845</span>
                            <a
                              href="https://wa.me/66613313845"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaArrowRight />
                            </a>
                          </Card.Text>
                          <Card.Title className="text-center text-md-start card-title">
                            {banner.title.split("\n").map((line, i) => (
                              <span key={i}>
                                {line}
                                <br />
                              </span>
                            ))}
                          </Card.Title>
                          <Card.Subtitle className="text-center text-md-start mb-5 card-subtitle">
                            {banner.subtitle}
                          </Card.Subtitle>
                          <Card.Link
                            href="https://my.uitfx.com/create-account"
                            className="GlobalBtn me-2 me-md-0"
                            onClick={openYourAccount}
                            target="_blank"
                          >
                            {banner.primaryBtn}
                          </Card.Link>
                          <Card.Link
                            href="https://my.uitfx.com/create-account"
                            className="GlobalBtn GlobalBtnOutline"
                            onClick={tryDemoAccount}
                            target="_blank"
                          >
                            {banner.secondaryBtn}
                          </Card.Link>
                        </Card.Body>
                      </Card>
                    </div>
                  </Col>
                  <Col xl={6} lg={5} md={4} sm={12} xs={12}>
                    <div className="image-wrapper no-pointer">
                      <Image src={banner.image} alt="UITFX Banner" priority />
                    </div>
                  </Col>
                </Row>
              </Container>
              <Bubbles />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Banner;
