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

const ChartData = () => {
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
  const { x, y, type } = venue;

  const chartData = x?.map((id, index) => ({
    id,
    city: y[index],
  }));
  console.log(chartData);
  if (type === "line") {
    return (
      <BarChart width={1200} height={500} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="id" angle={-20} textAnchor="end" />
        <YAxis domain={[0, 200]} />
        <Tooltip />
        <Legend />
        <Bar dataKey="city" fill="#8884d8" />
      </BarChart>
    );
  } else if (type === "area") {
    return (
      <AreaChart width={500} height={300} data={chartData}>
        <XAxis dataKey="id" />
        <YAxis domain={[0, 200]} />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Area type="monotone" dataKey="city" stroke="#8884d8" fill="#8884d8" />
        <Tooltip />
        <Legend />
      </AreaChart>
    );
  } else if (type === "pie") {
    const pieData = chartData.map((item) => ({ x: item.id, y: item.city }));
    return (
      <VictoryPie
        data={pieData}
        colorScale="qualitative"
        radius={100}
        innerRadius={40}
        labelRadius={60}
        style={{ labels: { fill: "black", fontSize: 8, fontWeight: "bold" } }}
        labelComponent={<VictoryLabel angle={0} />}
      />
    );
  } else if (type === "scatter") {
    return (
      <ScatterChart width={600} height={300}>
        <CartesianGrid />
        <XAxis dataKey="id" />
        <YAxis dataKey="city" domain={[0, 200]} />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Scatter name="Cities" data={chartData} fill="#8884d8" />
      </ScatterChart>
    );
  } else {
    return <div>Unsupported chart type</div>;
  }
};

export default ChartData;
