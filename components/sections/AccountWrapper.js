import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import { Card } from "react-bootstrap";
import { trackPixel } from "../../utils/trackPixel";

// Dynamically import GSAP
const gsap = dynamic(() => import("gsap"), { ssr: false });
const ScrollTrigger = dynamic(
  () => import("gsap/ScrollTrigger").then((mod) => mod.ScrollTrigger),
  { ssr: false }
);

const AccountWrapper = () => {
  const wrapperRef = useRef(null);

  const cardInfo = [
    {
      title: "CLASSIC",
      leverage: "1:500",
      spread: "2.2",
      MaxLot: "20",
      StopOut: "80%",
      Commission: "N/A",
      deposit: "$1000",
      className: "account-types-card",
    },
    {
      title: "PREMIUM",
      leverage: "1:500",
      spread: "1.5",
      MaxLot: "20",
      StopOut: "80%",
      Commission: "N/A",
      deposit: "$5000",
      className: "active-account-types-card account-types-card",
    },
    {
      title: "VIP",
      leverage: "1:500",
      spread: "0.02",
      MaxLot: "20",
      StopOut: "80%",
      Commission: "$5",
      deposit: "$10000",
      className: "account-types-card",
    },
    {
      title: "CENT",
      leverage: "1:500",
      spread: "1.5",
      MaxLot: "5",
      StopOut: "80%",
      Commission: "N/A",
      deposit: "$10",
      className: "account-types-card",
    },
    {
      title: "ISLAMIC",
      leverage: "1:100",
      spread: "1.5",
      MaxLot: "20",
      StopOut: "80%",
      Commission: "N/A",
      deposit: "$3000",
      className: "account-types-card",
    },
  ];

  useEffect(() => {
    const initGSAP = async () => {
      const gsapModule = (await import("gsap")).default;
      const ScrollTriggerModule = (await import("gsap/ScrollTrigger"))
        .ScrollTrigger;

      // Register the plugin
      gsapModule.registerPlugin(ScrollTriggerModule);

      // Animate cards on scroll
      const cards = wrapperRef.current.querySelectorAll(".account-types-card");
      gsapModule.fromTo(
        cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.3,
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 80%", // Animation starts when 80% of the viewport hits
            end: "bottom 20%", // Animation ends when 20% of the viewport passes
            toggleActions: "play reverse play reverse", // Reverses animation when scrolling up
            markers: false, // Enable this to debug
          },
        }
      );
    };

    initGSAP();
  }, []);

  const TradeNow = () => {
     trackPixel("Lead", { accountType: "Live" });
   };

  return (
    <div className="AccountWrapper" ref={wrapperRef}>
      {cardInfo.map((card, index) => {
        return (
          <Card key={index} className={card.className}>
            <Card.Body>
              <div className="title-card">
                <h5>{card.title}</h5>
              </div>
              <div className="details-card">
                <ul>
                  <li>
                    <span> Leverage: {card.leverage}</span>
                  </li>
                  <li>
                    <span> Spreads: {card.spread}</span>
                  </li>
                  <li>
                    <span> Commission: {card.Commission}</span>
                  </li>
                  {/* <li>
                    <span> Max Lot Size: {card.MaxLot} lots</span>
                  </li> */}
                  <li>
                    <span> Stop Out: {card.StopOut}</span>
                  </li>
                </ul>
              </div>
              <div className="min-deposit">
                <span className="text">Min Deposit</span>
                <span>{card.deposit}</span>
              </div>
              <div className="open-account">
                <a
                  onClick={TradeNow}
                  target="_blank"
                  href="https://my.uitfx.com/create-account"
                >
                  Trade Now
                </a>
              </div>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default AccountWrapper;
