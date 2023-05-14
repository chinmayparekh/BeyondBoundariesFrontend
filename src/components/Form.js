import React, { useState } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area,
  Scatter,
  ScatterChart,
  Bar,
  BarChart,
} from "recharts";
import { VictoryPie, VictoryLabel } from "victory";
function Form() {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [name3, setName3] = useState("");
  const [data, setData] = useState({});
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name1", name1);
    formData.append("name2", name2);
    formData.append("name3", name3);

    fetch("http://localhost:6969/submit-data", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setData(data);
        } else {
          console.log("No data received");
        }
      })
      .catch((error) => console.error(error));
  };
  const chartData = Object.entries(data).map(([key, value]) => ({
    player: key.charAt(0).toUpperCase() + key.slice(1),
    runs: value.runs,
    wickets: value.wickets,
    catches: value.catches,
  }));

  console.log(chartData);
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
    <>
      <div>
        <form onSubmit={handleSubmit} className="form">
          <label className="form-label">
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-input"
            />
          </label>
          <br />
          <label className="form-label">
            Value 1:
            <input
              type="number"
              value={value1}
              onChange={(e) => setValue1(parseInt(e.target.value))}
              className="form-input"
            />
          </label>
          <br />
          <label className="form-label">
            Value 2:
            <input
              type="number"
              value={value2}
              onChange={(e) => setValue2(parseInt(e.target.value))}
              className="form-input"
            />
          </label>
          <label className="form-label">
            Type of Graph:
            <input
              type="text"
              placeholder="pie/area/bar/scatter"
              value={graph_type}
              onChange={(e) => setType(e.target.value)}
              className="form-input"
            />
          </label>
          <br />
          <button type="submit" className="form-button">
            Submit
          </button>
        </form>
      </div>
      <div>
        <div className="radar">
          <div>
            <h2>Radar chart for player strengths</h2>
          </div>

          <div>
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
      </div>
    </>
  );
}
export default Form;
