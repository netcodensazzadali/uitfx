import Image from 'next/image';
import { Tab, Tabs } from 'react-bootstrap';
import CarouselReviewSlider from '../slider/CarouselReviewSlider';
import GoogleReviewSlider from '../slider/GoogleReviewSlider';

const ReviewTabs = () => {
  return (
    <div className="ReviewTabs">
      <Tabs defaultActiveKey="TrustPilot" id="platform-tab-example">
        <Tab
          eventKey="TrustPilot"
          title={
            <span>
              <Image
                src="/img/reviews-trustpilot.svg"
                alt="TrustPilot"
                width={223}
                height={80}
              />
            </span>
          }
        >
          <CarouselReviewSlider></CarouselReviewSlider>
        </Tab>
        <Tab
          eventKey="GoogleReview"
          title={
            <span>
              <Image
                src="/img/reviews-google.svg"
                alt="TrustPilot"
                width={179}
                height={81}
              />
            </span>
          }
        >
          <GoogleReviewSlider></GoogleReviewSlider>
        </Tab>
      </Tabs>
    </div>
  );
};

export default ReviewTabs;