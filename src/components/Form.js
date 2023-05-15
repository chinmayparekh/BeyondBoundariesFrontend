import React, { useState } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

function Form() {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [name3, setName3] = useState("");
  const [data, setData] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name1", name1);
    formData.append("name2", name2);
    formData.append("name3", name3);
    console.log(formData);

    try {
      const response = await fetch("http://localhost:6969/player", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const json = await response.json();
      console.log(json);
      setData(json);
    } catch (error) {
      console.error(error);
    }
  };
  const labels = ["runs", "wickets", "catches"];
  const colors = ["#0088FE", "#00C49F", "#FFBB28"]; // custom colors
  const chartData = Object.entries(data).map(([key, value]) => ({
    player: key.charAt(0).toUpperCase() + key.slice(1),
    runs: value.runs,
    wickets: value.wickets,
    catches: value.catches,
  }));
  
  const dataFormatted = Object.entries(data).map(([key, value], index) => ({
    player: key,
    ...value,
    color: colors[index % colors.length],
  }));
  console.log(dataFormatted);
  return (
    <>
      <div>
        <form onSubmit={handleSubmit} className="form">
          <label className="form-label">
            Name 1:
            <input
              type="text"
              value={name1}
              onChange={(e) => setName1(e.target.value)}
              className="form-input"
            />
          </label>
          <br />
          <label className="form-label">
            Name 2:
            <input
              type="text"
              value={name2}
              onChange={(e) => setName2(e.target.value)}
              className="form-input"
            />
          </label>
          <br />
          <label className="form-label">
            Name 3:
            <input
              type="text"
              value={name3}
              onChange={(e) => setName3(e.target.value)}
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
