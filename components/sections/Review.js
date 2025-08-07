import { Col, Container, Row } from 'react-bootstrap';
import ReviewTabs from '../tabs/ReviewTabs';
import SectionTitleFlip from '../titles/SectionTitleFlip';
const Review = () => {
  return (
    <div className="review pt-5 mt-5">
      <Container fluid="xxl">
        <Row>
          <Col xl={12}>
            <SectionTitleFlip
              headingSubTitle="They Tried, They Loved, They Shared"
              headingtitle="Our Clients Testimonials"
            ></SectionTitleFlip>
          </Col>
        </Row>
        <Row>
          <Col xxl="12">
            <ReviewTabs></ReviewTabs>
          </Col>
        </Row>
        
      </Container>
    </div>
  );
}

export default Review