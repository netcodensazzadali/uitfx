import Head from "next/head";
import { useEffect } from "react";

const HolidayCalendar = () => {
  useEffect(() => {
    // Set DukascopyApplet configuration dynamically
    window.DukascopyApplet = {
      type: "holiday_calendar",
      params: {
        showHeader: true,
        tableBorderColor: "#D92626",
        showPastItems: false,
        defaultRegion: 0,
        width: "100%",
        height: "100%",
        adv: "popup",
        lang: "en",
      },
    };
  }, []);

  return (
    <>
      <Head>
        {/* Load the external script */}
        <script
          type="text/javascript"
          src="https://freeserv-static.dukascopy.com/2.0/core.js"
          async
        ></script>
      </Head>
      {/* Add a container where the calendar will render */}
      <div id="holiday-calendar-container"></div>
    </>
  );
};

export default HolidayCalendar;
