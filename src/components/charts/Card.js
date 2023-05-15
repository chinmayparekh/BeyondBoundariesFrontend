import React, { useState } from "react";
import { FaList } from "react-icons/fa";

const Card = () => {

  const player = ["a","b","c","d","e"]
  const runs = ["1","2","3","4","5"]  
  const players = []

  return (
    <div className="card" id="card">
            <div className="card-body align-start">
              <div className="card-summary">
                <p className="card-heading ">Orange Cap - 2022</p>
              </div>
              <div className="card-content">
                <ul>
                  {player?.map((player, index) => (
                    <li key={index}>
                      {player}:{runs[index]}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
  );
};

export default Card;