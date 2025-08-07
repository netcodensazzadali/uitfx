import Head from "next/head";
import React from "react";
import BannerAll from "../components/banners/BannerAll";
import Footer from "../components/footer/Footer";
import AccountSection from "../components/sections/AccountSection";
import PaymentMethod from "../components/sections/PaymentMethod";
import Review from "../components/sections/Review";
import WhichOneOther from "../components/sections/WhichOneOther";

export default function Accounts() {
  return (
    <div>
      <Head>
        <title>Trading Account Comparison | UITFX Markets</title>
        <meta
          name="description"
          content="UITFX Markets is a global forex, commodities, stocks brokers to provide the clients best trading experiences."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <BannerAll
          title="Trading Opportunities for everyone"
          subtitle="Beginner to Professional UITFX is for all"
        ></BannerAll>
        <AccountSection></AccountSection>
        <WhichOneOther
          title="Our commitment is you"
          subtitle="IInstitutional grade conditions and a transparent, fair trading environment."
        ></WhichOneOther>
        <PaymentMethod></PaymentMethod>
        
        <Review></Review>
        <Footer></Footer>
      </main>
    </div>
  );
}
