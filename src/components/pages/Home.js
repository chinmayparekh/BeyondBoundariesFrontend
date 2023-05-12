import React from "react";
import "../../styles/Page.css";
import GraphCard from "../GraphCard";
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
      <GraphCard />
      <div className="h-150 bg-dark flex-space-evenly title-white">
        <div>View More Stats</div>
      </div>
    </>
  );
};

export default Home;
