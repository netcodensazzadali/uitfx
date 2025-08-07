import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Accordion, Card } from "react-bootstrap";

const AccordionWrapper = () => {
  const [cardText] = useState({
    HeaderTitle: [
      "1)	What are the client support options?",
      "2)	I do not have experience trading, but I am curious and I want to learn, can you help?",
      "3)	How can I become an associate of United International Trading Co. Ltd.?",
      "4)	How can I fund my account?",
      "5)	Do I need funds in my account to select my trading software?",
      "6)	Can I test your platform before using it?",
      "7)	Does your tools run on mobiles?",
      "8)	How can I open account?",
      "9)	How can I contact you?",
      "10) Why is it better to start online with you?",
      "11) What are cash indices?",
      "12) Why should I invest in cash indices?",
      "13) What is energy trading?",
      "14) What is leverage?",
      "15) What is spread?",
    ],

    BodyText: [
      "Phone support is available from 9am to 5pm EST. Web chat and email service is available 24x5.",

      "United International Trading Co. Ltd. has education partner relationships that can help with trading education. United International Trading Co. Ltd. can provide you a real-time demo that will allow you to trade the stock market and not lose a single penny!",

      "At United International Trading Co. Ltd. our door is always open to new relationships. Please contact us if you would like to be part of the United International Trading Co. Ltd. team. We offer all our associates unlimited earnings potential. Get started today and become one of our trusted partners.",

      "Funding of accounts can be made by (direct) bank to bank wire transfers. We also allow for alternative options such as paypal, debit or credit card funding. Also, the name appearing in the bank account from where the funds are transferred must be the same as what is on file with us. Please note Third Party Funding is not accepted.",

      "Accounts must have a minimum balance of $200.",

      "Yes, you can create a Demo Account and learn & understand our tools and platforms. After that you can create live account.",
      "Also use PC software or Web Terminal.",
      "You can open either a Demo Account or a Live Account. Click on links given at Home Page and other pages as per your need.",
      "Visit Contact Us page on website and you an find our contact number and email. You can also contact us by filling a contact us form.",
      "We provide modern technologies and tools for better trading experience. We have easy to use UI and freshers can easily operate our products.",
      "Cash indices are financial derivatives that are calculated as the weighted average of the top performing companies included in the index. Cash market transactions take place either on regulated exchanges or over-the-counter (OTC). This is in stark contrast to the futures market, which exclusively trades on exchanges and even the currency forwards market, which is generally traded OTC. The NYSE is a real-world example of a large regulated cash market. The S&P 500 index is a leading index of NYSE, listing the collective value of top trading companies on the exchange.",
      "Cash indices track and measure a particular group of related stocks. Since there are thousands of such stocks trading across the various exchanges, indices provide a window into the overall market sentiment and prove to be an effective tool to benchmark against individual stock portfolios. The advantage of trading cash indices over individual securities and commodities is the amount of exposure they provide to the entire industry. As an investor, you don’t need to conduct research on individual P&L statements and news reports of different companies. Depending on the market sentiment, all you have to do is take a short or long position. When traders invest in cash indices, instead of individual securities, the risk factor is considerably reduced, since the effect of a single company’s performance doesn’t influence the entire index. This suits the more risk-averse and long-term investor.",
      "Energy trading involves products like crude oil, electricity, natural gas and wind power. Since these commodities often fluctuate abruptly, they can be attractive to speculators. Trade on energy derivatives & diversify your trading portfolio.",
      "Leverage is the use of borrowed funds to increase one's trading position beyond what would be available from their cash balance alone. Brokerage accounts allow the use of leverage through margin trading, where the broker provides the borrowed funds. Forex traders often use leverage to profit from relatively small price changes in currency pairs. Leverage, however, can amplify both profits as well as losses.",
      "In finance, a spread refers to the difference between two prices, rates, or yields. One of the most common types is the bid-ask spread, which refers to the gap between the bid (from buyers) and the ask (from sellers) prices of a security or asset. Spread can also refer to the difference in a trading position – the gap between a short position (that is, selling) in one futures contract or currency and a long position (that is, buying) in another.",
    ],
  });
  useEffect(() => {
    const loadGSAP = async () => {
      if (typeof window === "undefined") return;

      // Dynamically import GSAP and ScrollTrigger
      const { default: gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      // Add animations
      const accordions = document.querySelectorAll(".accordion-item");
      accordions.forEach((accordion, index) => {
        gsap.fromTo(
          accordion,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: index * 0.2,
            scrollTrigger: {
              trigger: accordion,
              start: "top 90%",
              end: "top 70%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    };

    loadGSAP();
  }, []);

  return (
    <div className="accordion-wrapper">
      <Card>
        <Card.Body>
          <Accordion defaultActiveKey="0" flush>
            {cardText.HeaderTitle.map((header, index) => (
              <Accordion.Item
                eventKey={`${index}`}
                className="accordion-item"
                key={index}
              >
                <Accordion.Header>{header}</Accordion.Header>
                <Accordion.Body>{cardText.BodyText[index]}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Card.Body>
      </Card>
      <div className="text-center">
        <span className="GlobalBtn GlobalBtnOutline px-5">
          <Link href="/about/faqs" passHref>
            See All
          </Link>
        </span>
      </div>
    </div>
  );
};

export default AccordionWrapper;
