import Image from 'next/image'
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import AppStroe from '../../public/img/app-store.png'
import GooglePlay from '../../public/img/google-play.png'
import MobileApp from '../../public/img/mobile-app.png'
import Windows from '../../public/img/windows.png'
import SectionTitleFlip from '../titles/SectionTitleFlip'

const DownloadApp = () => {
  return (
    <div className="download-app bg-white">
      <Container>
        <Row className="flex-md-column-reverse flex-sm-column-reverse flex-column-reverse flex-lg-row align-items-md-baseline align-items-lg-center">
          <Col lg={6} md={12}>
            <Card>
              <Card.Body>
                <div className="content">
                  <SectionTitleFlip headingtitle="Powered by MT 5"></SectionTitleFlip>
                  <p>
                    MT5 is a trader-friendly, innovative platform that’s
                    designed for simplicity. Access and manage all your
                    accounts, explore new opportunities, and trade a variety of
                    instruments from any device.
                  </p>
                </div>
                <div className="app-links">
                  <div className="apps">
                    <p>For mobile Devices</p>
                    <ul>
                      <li>
                        <Card.Link
                          href="#"
                          target="_blank"
                        >
                          <Image src={AppStroe} alt="App Store"></Image>
                        </Card.Link>
                      </li>
                      <li>
                        <Card.Link
                          href="#"
                          target="_blank"
                        >
                          <Image src={GooglePlay} alt="Google Play"></Image>
                        </Card.Link>
                      </li>
                    </ul>
                  </div>
                  <div className="apps">
                    <p>For desktop, laptop & mac</p>
                    <ul>
                      <li>
                        <Card.Link
                          target="_blank"
                          href="https://download.mql5.com/cdn/web/united.international.trading/mt5/unitedinternationaltrading5setup.exe"
                        >
                          <Image src={Windows} alt="Windows"></Image>
                        </Card.Link>
                      </li>
                      <li>
                        <Card.Link
                          href="#"
                          target="_blank"
                        >
                          <Image src={AppStroe} alt="App Store"></Image>
                        </Card.Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} md={12}>
            <div className="mb-md-5 mb-sm-5 mb-5 mb-lg-0">
              <Image
                as="image"
                priority={true}
                sizes="100"
                layout="responsive"
                src={MobileApp}
                alt="Mobile App"
              ></Image>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default DownloadApp