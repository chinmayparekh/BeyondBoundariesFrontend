import React from "react";
import "../../styles/Page.css";
import Card from "../Card";
const Home = (props) => {
  return (
    <>
      <section className="mt-75">
        <div className="centralize">
          <p className="title-font">
            Beyond Boundaries - Redifining Cricket Analytics
          </p>
        </div>
      </section>
      <div className="cards">
        <Card
          img="1"
          heading="Monthly Calendar"
          content="Make your monthly calendars interactive with an in-app calendar
        and journal feature."
        />
        <Card
          img="2"
          heading="Daily Journal"
          content="Help them record and reflect through private daily journal entries."
        />
        <Card
          img="3"
          heading="Custom Playlists"
          content="Easily create and save content into their own custom playlists."
        />
      </div>
      <div className="cards">
        <Card
          img="2"
          heading="Secure Downloads"
          content="Make your monthly calendars interactive with an in-app calendar and journal feature."
        />
        <Card
          img="4"
          heading="In-app Purchases"
          content="Sell your memberships and subscriptions in the App Stores with in-app purchases"
        />
        <Card
          img="5"
          heading="Custom Look & Feel"
          content="Make your monthly calendars interactive with an in-app calendar and journal feature."
        />
      </div>

      <div className="cards">
        <Card
          img="5"
          heading="Apple TV & apps"
          content="Give them ability to watch on any device with native Apple TV and Roku apps."
        />
        <Card
          img="6"
          heading="Modular Templates"
          content="Combine our modular templates together to create your own navigation."
        />
        <Card
          img="7"
          heading="Chromecast/Airplay"
          content="Cast to TV using Chromecast, AirPlay and Bluetooth."
        />
      </div>
      <div className=" centralize mt-25 mb-25">
        <button className="intouch">View app features</button>
      </div>
      <div className="h-150 bg-dark flex-space-evenly title-white">
        <div>Grow your online business further</div>
        <div>
            <button className="btn-blue">Contact Us</button>
        </div>
      </div>
    </>
  );
};

export default Home;
