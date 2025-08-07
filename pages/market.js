import Head from "next/head";
import React from "react";
import BannerForMarkets from "../components/banners/BannerForMarkets";
import Footer from "../components/footer/Footer";
import PaymentMethod from "../components/sections/PaymentMethod";
import Review from "../components/sections/Review";
import TradingMarkets from "../components/sections/TradingMarkets";
import TradingProducts from "../components/sections/TradingProducts";

export default function Market() {
  return (
    <div>
      <Head>
        <title>Foreign Exchange | Products | UITFX Markets</title>
        <meta
          name="description"
          content="UITFX Markets is a global forex, commodities, stocks brokers to provide the clients best trading experiences."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <BannerForMarkets></BannerForMarkets>
        <TradingProducts></TradingProducts>
        <TradingMarkets></TradingMarkets>
        <PaymentMethod></PaymentMethod>
        <Review></Review>
        <Footer></Footer>
      </main>
    </div>
  );
}
