import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Page.css";

function Graph() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:6969/orange")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const { players, runs } = data;
 

  const [bowlers_data, setBowler] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:6969/purple")
      .then((response) => {
        setBowler(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const { bowlers, wickets } = bowlers_data;
  console.log("final",bowlers_data);
  return (
    <>
      <div>
        <div className="card" id="card-flex">
          <div className="card" id="card">
            <div className="card-body align-start">
              <div className="card-summary">
                <p className="card-heading ">Orange Cap - 2022</p>
              </div>
              <div className="card-content">
                <ul>
                  {players?.map((player, index) => (
                    <li key={index}>
                      {player}:{data.runs[index]}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="card" id="card">
            <div className="card-body align-start">
              <div className="card-summary">
                <p className="card-heading ">Purple Cap - 2022</p>
              </div>
              <div className="card-content">
                <ul>
                  {bowlers?.map((bowler, index) => (
                    <li key={index}>
                      {bowler}:{bowlers_data.wickets[index]}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="card" id="card">
            <div className="card-body align-start">
              <div className="card-summary">
                <p className="card-heading ">Orange Cap - 2022</p>
              </div>
              <div className="card-content">
                <ul>
                  {players?.map((player, index) => (
                    <li key={index}>
                      {player}:{data.runs[index]}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>


        <div className="card" id="card-flex">
          <div className="card" id="card">
            <div className="card-body align-start">
              <div className="card-summary">
                <p className="card-heading ">Orange Cap - 2022</p>
              </div>
              <div className="card-content">
                <ul>
                  {players?.map((player, index) => (
                    <li key={index}>
                      {player}:{data.runs[index]}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="card" id="card">
            <div className="card-body align-start">
              <div className="card-summary">
                <p className="card-heading ">Orange Cap - 2022</p>
              </div>
              <div className="card-content">
                <ul>
                  {players?.map((player, index) => (
                    <li key={index}>
                      {player}:{data.runs[index]}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="card" id="card">
            <div className="card-body align-start">
              <div className="card-summary">
                <p className="card-heading ">Orange Cap - 2022</p>
              </div>
              <div className="card-content">
                <ul>
                  {players?.map((player, index) => (
                    <li key={index}>
                      {player}:{data.runs[index]}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="card" id="card-flex">
          <div className="card" id="card">
            <div className="card-body align-start">
              <div className="card-summary">
                <p className="card-heading ">Orange Cap - 2022</p>
              </div>
              <div className="card-content">
                <ul>
                  {players?.map((player, index) => (
                    <li key={index}>
                      {player}:{data.runs[index]}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="card" id="card">
            <div className="card-body align-start">
              <div className="card-summary">
                <p className="card-heading ">Orange Cap - 2022</p>
              </div>
              <div className="card-content">
                <ul>
                  {players?.map((player, index) => (
                    <li key={index}>
                      {player}:{data.runs[index]}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div  id="card">
            <div className="card-body align-start">
              <div className="card-summary">
                <p className="card-heading ">Orange Cap - 2022</p>
              </div>
              <div className="card-content">
                <ul>
                  {players?.map((player, index) => (
                    <li key={index}>
                      {player}:{data.runs[index]}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Graph;
