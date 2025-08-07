import Head from "next/head";
import React from "react";
import Footer from "../../components/footer/Footer";

import PaymentMethod from "../../components/sections/PaymentMethod";
import Review from "../../components/sections/Review";

import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import BannerForCopyTrade from "../../components/banners/BannerForCopyTrade";
import UserCard from "../../components/sections/UserCard";
import WhatIsCopyTrading from "../../components/sections/WhatIsCopyTrading";
import WhatIsMam from "../../components/sections/WhatIsMam";
import WhatIsPamm from "../../components/sections/WhatIsPamm";


export default function CopyTrade() {
  const users = [
    {
      image: "/img/user/user-1.png",
      name: "Jeppe Krik Bonde",
      username: "JeppeKrikBonde",
      returnPercentage: 30.97,
      copiers: "1.56k",
      chartData: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "july",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "Performance",
            data: [5, 10, 8, 12, 14, 12, 14, 16, 14, 12, 22, 18],
            borderColor: "#00C94C",
            backgroundColor: "#00C94C",
            tension: 0,
            borderWidth: 1,
            pointRadius: 1,
            pointHoverRadius: 2,
          },
        ],
      },
    },
    {
      image: "/img/user/user-2.png",
      name: "JRonald Diaz",
      username: "JeppeKrikBonde",
      returnPercentage: 30.97,
      copiers: "1.56k",
      chartData: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "july",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "Performance",
            data: [5, 10, 8, 12, 14, 12, 14, 16, 14, 12, 22, 18],
            borderColor: "#00C94C",
            backgroundColor: "#00C94C",
            tension: 0,
            borderWidth: 1,
            pointRadius: 1,
            pointHoverRadius: 2,
          },
        ],
      },
    },
    {
      image: "/img/user/user-3.png",
      name: "Jacob Philippus",
      username: "JeppeKrikBonde",
      returnPercentage: 30.97,
      copiers: "1.56k",
      chartData: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "july",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "Performance",
            data: [5, 10, 8, 12, 14, 12, 14, 16, 14, 12, 22, 18],
            borderColor: "#00C94C",
            backgroundColor: "#00C94C",
            tension: 0,
            borderWidth: 1,
            pointRadius: 1,
            pointHoverRadius: 2,
          },
        ],
      },
    },
    {
      image: "/img/user/user-4.png",
      name: "Jeppe Krik Bonde",
      username: "JeppeKrikBonde",
      returnPercentage: 30.97,
      copiers: "1.56k",
      chartData: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "july",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "Performance",
            data: [5, 10, 8, 12, 14, 12, 14, 16, 14, 12, 22, 18],
            borderColor: "#00C94C",
            backgroundColor: "#00C94C",
            tension: 0,
            borderWidth: 1,
            pointRadius: 1,
            pointHoverRadius: 2,
          },
        ],
      },
    },
    {
      image: "/img/user/user-5.png",
      name: "Jeppe Krik Bonde",
      username: "JeppeKrikBonde",
      returnPercentage: 30.97,
      copiers: "1.56k",
      chartData: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "july",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "Performance",
            data: [5, 10, 8, 12, 14, 12, 14, 16, 14, 12, 22, 18],
            borderColor: "#00C94C",
            backgroundColor: "#00C94C",
            tension: 0,
            borderWidth: 1,
            pointRadius: 1,
            pointHoverRadius: 2,
          },
        ],
      },
    },
    {
      image: "/img/user/user-6.png",
      name: "JRonald Diaz",
      username: "JeppeKrikBonde",
      returnPercentage: 30.97,
      copiers: "1.56k",
      chartData: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "july",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "Performance",
            data: [5, 10, 8, 12, 14, 12, 14, 16, 14, 12, 22, 18],
            borderColor: "#00C94C",
            backgroundColor: "#00C94C",
            tension: 0,
            borderWidth: 1,
            pointRadius: 1,
            pointHoverRadius: 2,
          },
        ],
      },
    },
    {
      image: "/img/user/user-7.png",
      name: "Jacob Philippus",
      username: "JeppeKrikBonde",
      returnPercentage: 30.97,
      copiers: "1.56k",
      chartData: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "july",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "Performance",
            data: [5, 10, 8, 12, 14, 12, 14, 16, 14, 12, 22, 18],
            borderColor: "#00C94C",
            backgroundColor: "#00C94C",
            tension: 0,
            borderWidth: 1,
            pointRadius: 1,
            pointHoverRadius: 2,
          },
        ],
      },
    },
    {
      image: "/img/user/user-8.png",
      name: "Jeppe Krik Bonde",
      username: "JeppeKrikBonde",
      returnPercentage: 30.97,
      copiers: "1.56k",
      chartData: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "july",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "Performance",
            data: [5, 10, 8, 12, 14, 12, 14, 16, 14, 12, 22, 18],
            borderColor: "#00C94C",
            backgroundColor: "#00C94C",
            tension: 0,
            borderWidth: 1,
            pointRadius: 1,
            pointHoverRadius: 2,
          },
        ],
      },
    },
  ];
  return (
    <div>
      <Head>
        <title>Copy Trade & Invest | UITFX Markets</title>
        <meta
          name="description"
          content="UITFX Markets is a global forex, commodities, stocks brokers to provide the clients best trading experiences."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <BannerForCopyTrade></BannerForCopyTrade>
        <WhatIsMam></WhatIsMam>
        <WhatIsPamm></WhatIsPamm>
        <WhatIsCopyTrading></WhatIsCopyTrading>
        <div className="CommissionChart copy-trade-chart">
          <div className="CommissionChartWrapper">
            <Container fluid="xxl">
              <Row>
                <Col xxl={12}>
                  <div className="SectionTitleFlip SectionTitle text-center">
                    <span>from best traders</span>
                    <h2>Start Copy Trading</h2>
                  </div>
                </Col>
              </Row>
              <div className="row justify-content-center">
                <div className="col-xl-8 col-lg-9">
                  <div className="row">
                    {users.map((user, index) => (
                      <div className="col-md-3 col-sm-4 col-12 mb-3" key={index}>
                        <UserCard
                          image={user.image}
                          name={user.name}
                          username={user.username}
                          returnPercentage={user.returnPercentage}
                          copiers={user.copiers}
                          chartData={user.chartData}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <Row>
                <Col lg={12} className="text-center">
                  <button className="text-center GlobalBtn custom my-5">
                    <Link href="/pamm/all-traders">
                      See all traders
                    </Link>
                  </button>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <PaymentMethod></PaymentMethod>
        <Review></Review>
        <Footer></Footer>
      </main>
    </div>
  );
}
