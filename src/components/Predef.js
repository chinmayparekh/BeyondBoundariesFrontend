import React, { useState, useEffect } from "react";
import axios from "axios";
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
import "../styles/Page.css";

const ChartData = (props) => {
  const [venue, setVenue] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:6969/venue-data")
      .then((response) => {
        setVenue(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const { x, y } = venue;
  const [type, setSelectedValue] = useState(props.selectedValue);
  useEffect(() => {
    setSelectedValue(props.selectedValue);
  }, [props.selectedValue]);
  console.log(props)
  console.log(type);
  const chartData = x?.map((id, index) => ({
    id,
    city: y[index],
  }));
  console.log(chartData);
  if (type === "line") {
    return (
      <div className="centralize mt-50 mb-25">
        <h1>Line graph for matches played in each city</h1>
        <BarChart width={800} height={500} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="id" angle={-20} textAnchor="end" />
          <YAxis domain={[0, 200]} />
          <Tooltip />
          <Legend />
          <Bar dataKey="city" fill="#8884d8" />
        </BarChart>
      </div>
    );
  } else if (type === "area") {
    return (
      <div className="centralize mt-50 mb-25">
        <h1>Area graph for matches played in each city</h1>
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
    );
  } else if (type === "pie") {
    const pieData = chartData.map((item) => ({ x: item.id, y: item.city }));
    return (
      <div className="centralize">
        <h1>Pie graph for matches played in each city</h1>
        <div className="setHeightWidth">
          <VictoryPie
            data={pieData}
            colorScale="qualitative"
            radius={100}
            innerRadius={40}
            labelRadius={60}
            style={{
              labels: { fill: "black", fontSize: 8, fontWeight: "bold" },
            }}
            labelComponent={<VictoryLabel angle={0} />}
            height={400} // set height
            width={400} // set width
          />
        </div>
      </div>
    );
  } else if (type === "scatter") {
    return (
      <div className="centralize mt-50 mb-25">
        <h1>Scatter graph for matches played in each city</h1>
        <ScatterChart width={800} height={500}>
          <CartesianGrid />
          <XAxis dataKey="id" />
          <YAxis dataKey="city" domain={[0, 200]} />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Scatter name="Cities" data={chartData} fill="#8884d8" />
        </ScatterChart>
      </div>
    );
  } else {
    return <div className="centralize">Unsupported chart type</div>;
  }
};

export default ChartData;
