import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SectionTitle from '../titles/SectionTitle';
import AccountWrapper from './AccountWrapper';

const AccountSection = () => {
  return (
    <div className="AccountSection AccountTypes">
      <div className="AccountSectionWrapper">
        <Container>
          <Row>
            <Col xxl={12}>
              <SectionTitle
                headingtitle="Trading Accounts for Every Trader"
                headingSubTitle="Trade Conditions That Maximize Your Trading Style"
              ></SectionTitle>
            </Col>
          </Row>
          <Row>
            <Col xxl={12}>
              <AccountWrapper></AccountWrapper>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default AccountSection