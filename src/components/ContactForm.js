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
function NumberForm() {
  const [name, setName] = useState("");
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [graph_type, setType] = useState("");
  const [data, setData] = useState({});
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("value1", value1);
    formData.append("value2", value2);
    formData.append("type", graph_type);
    fetch("http://localhost:6969/query", {
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

  const { x = [], y = [], type: chartType = "" } = data; // Destructure properties from data
  const chartData = x.map((id, index) => ({
    id,
    city: y[index],
  }));
  console.log(chartData);
  console.log(chartType);
  const totalMatches = chartData.reduce((total, item) => total + item.city, 0);
  const pieData = chartData.map((item) => ({
    x: item.id,
    y: item.city / totalMatches,
  }));


  const columns = [
    "id",
    "city",
    "date",
    "player_of_match",
    "venue",
    "neutral_venue",
    "team1",
    "team2",
    "toss_winner",
    "toss_decision",
    "winner",
    "result",
    "result_margin",
    "eliminator",
    "method",
    "umpire1",
    "umpire2",
  ];
  return (
    <>
      <div>
        <div className="form-container">
          <div className="flex mb-20 mt-10">
            <h2>DataFrame Schema of Ball to Ball </h2>
            <table>
              <thead>
                <tr>
                  <th>Column Name</th>
                  <th>Data Type</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>id</td>
                  <td>integer</td>
                </tr>
                <tr>
                  <td>overs</td>
                  <td>int</td>
                </tr>
                <tr>
                  <td>ballnumber</td>
                  <td>int</td>
                </tr>
                <tr>
                  <td>bowler</td>
                  <td>string</td>
                </tr>
                <tr>
                  <td>batter</td>
                  <td>string</td>
                </tr>
                <tr>
                  <td>non_striker</td>
                  <td>string</td>
                </tr>
                <tr>
                  <td>extra_type</td>
                  <td>string</td>
                </tr>
                <tr>
                  <td>total_run</td>
                  <td>integer</td>
                </tr>
                <tr>
                  <td>overthrow</td>
                  <td>integer</td>
                </tr>
                <tr>
                  <td>iswicket</td>
                  <td>integer</td>
                </tr>
                <tr>
                  <td>player_out</td>
                  <td>string</td>
                </tr>
                <tr>
                  <td>wicket_kind</td>
                  <td>string</td>
                </tr>
                <tr>
                  <td>fielders_involved</td>
                  <td>string</td>
                </tr>
                <tr>
                  <td>batting_team</td>
                  <td>string</td>
                </tr>
              </tbody>
            </table>
            <a href="https://www.kaggle.com/datasets/vora1011/ipl-2008-to-2021-all-match-dataset?select=IPL_Matches_2008_2022.csv">
              Click here to view the full dataframe
            </a>
          </div>
          <div class="form-container">
            <div className="flex mb-20 mt-10">
              <h2>DataFrame Schema of Matches</h2>
              <table>
                <thead>
                  <tr>
                    <th>Column Name</th>
                    <th>Data Type</th>
                  </tr>
                </thead>
                <tbody>
                  {columns.map((column) => (
                    <tr key={column}>
                      <td>{column}</td>
                      <td>String</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <a href="https://www.kaggle.com/datasets/patrickb1912/ipl-complete-dataset-20082020?select=IPL+Matches+2008-2020.csv">
                Click here to view the full dataframe
              </a>
            </div>
          </div>
          <h2 className="form-heading centralize">
            Visualization of a given query
          </h2>
          <form onSubmit={handleSubmit} className="form">
            <label className="form-label">
              Query:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-input"
              />
            </label>
            <br />
            <label className="form-label">
              Parameter 1:
              <input
                type="number"
                value={value1}
                onChange={(e) => setValue1(parseInt(e.target.value))}
                className="form-input"
              />
            </label>
            <br />
            <label className="form-label">
              Paramter 2:
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
      </div>
      <div>
        {chartType === "bar" && (
          <div className="centralize">
            <BarChart width={800} height={500} data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="id" angle={-20} textAnchor="end" />
              <YAxis domain={[0, 200]} />
              <Tooltip />
              <Legend />
              <Bar dataKey="city" fill="#8884d8" />
            </BarChart>
          </div>
        )}
        {chartType === "pie" && (
          <div className="centralize">
            <div className="setHeightWidth">
              <VictoryPie
                data={pieData}
                colorScale="qualitative"
                radius={150}
                innerRadius={70}
                labelRadius={90}
                style={{
                  labels: { fill: "black", fontSize: 8, fontWeight: "bold" },
                }}
                labelComponent={<VictoryLabel angle={0} />}
                height={400} // set height
                width={400} // set width
              />
            </div>
          </div>
        )}
        {chartType === "area" && (
          <div className="centralize">
            <AreaChart width={800} height={500} data={chartData}>
              <XAxis dataKey="id" />
              <YAxis domain={[0, 200]} />
              <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
              <Area
                type="monotone"
                dataKey="city"
                stroke="#8884d8"
                fill="#8884d8"
              />
              <Tooltip />
              <Legend />
            </AreaChart>
          </div>
        )}
        {chartType === "scatter" && (
          <div className="centralize">
            <ScatterChart width={800} height={500}>
              <CartesianGrid />
              <XAxis dataKey="id" />
              <YAxis dataKey="city" domain={[0, 200]} />
              <Tooltip cursor={{ strokeDasharray: "3 3" }} />
              <Scatter name="Cities" data={chartData} fill="#8884d8" />
            </ScatterChart>
          </div>
        )}
      </div>
    </>
  );
}
export default NumberForm;