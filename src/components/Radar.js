import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

const data = [
  { player: "Player 1", runs: 8, wickets: 5, catches: 9 },
  { player: "Player 2", runs: 6, wickets: 8, catches: 7 },
  { player: "Player 3", runs: 7, wickets: 7, catches: 8 },
  // { player: "Player 4", runs: 17, wickets: 27, catches: 8 },
];

const Exp = () => {
  const labels = ["runs", "wickets", "catches"];
  const colors = ["#0088FE", "#00C49F", "#FFBB28"]; // custom colors

  const dataFormatted = data.map((player, index) => ({
    player: player.player,
    ...labels.reduce((obj, label) => {
      obj[label] = player[label];
      return obj;
    }, {}),
    color: colors[index % colors.length], // assign custom color
  }));

  return (
    <div className="radar">
      <div >
        <h2>Radar chart for player strengths</h2>
      </div>

      <div >
        <RadarChart width={450} height={500} data={dataFormatted}>
          <PolarGrid />
          <PolarAngleAxis dataKey="player" />
          <PolarRadiusAxis angle={30} domain={[0, 10]} />
          {labels.map((label, index) => (
            <Radar
              key={label}
              name={label}
              dataKey={label}
              stroke={colors[index % colors.length]} // use custom color
              fill={colors[index % colors.length]} // use custom color
              fillOpacity={0.6}
            />
          ))}
          <Legend />
        </RadarChart>
      </div>
    </div>
  );
};

export default Exp;
