import React from "react";
import { VictoryChart, VictoryGroup, VictoryPolarAxis, VictoryArea } from "victory";

function RadarChart() {
  const data = [
    { player: "Player 1", runs: 8, wickets: 5, catches: 9 },
    { player: "Player 2", runs: 6, wickets: 8, catches: 7 },
    { player: "Player 3", runs: 7, wickets: 7, catches: 8 }
  ];

  return (
    <VictoryChart polar>
      <VictoryGroup colorScale={"qualitative"}>
        <VictoryArea
          data={data}
          x={"player"}
          y={"runs"}
        />
        <VictoryArea
          data={data}
          x={"player"}
          y={"wickets"}
        />
        <VictoryArea
          data={data}
          x={"player"}
          y={"catches"}
        />
      </VictoryGroup>
      <VictoryPolarAxis />
    </VictoryChart>
  );
}
export default RadarChart;