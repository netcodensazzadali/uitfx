import Head from "next/head";
import React from "react";
import Footer from "../../components/footer/Footer";
import AboutCompany from "../../components/sections/AboutCompany";
import Mission from "../../components/sections/Mission";
import PaymentMethod from "../../components/sections/PaymentMethod";
import Review from "../../components/sections/Review";
import Vision from "../../components/sections/Vision";
import WhichOne from "../../components/sections/WhichOne";
import WhoWeAre from "../../components/sections/WhoWeAre";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Company | Mission & Vision | UITFX Markets</title>
        <meta
          name="description"
          content="UITFX Markets is a global forex, commodities, stocks brokers to provide the clients best trading experiences."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <WhoWeAre></WhoWeAre>
        <Mission></Mission>
        <Vision></Vision>
        <AboutCompany></AboutCompany>
        <WhichOne
          title="Join the platform "
          subtitle="Where trader’s expectations meet results."
        ></WhichOne>
        <PaymentMethod></PaymentMethod>
        <Review></Review>
        <Footer></Footer>
      </main>
    </div>
  );
}
