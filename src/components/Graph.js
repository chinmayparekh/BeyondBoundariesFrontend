import React, { useState, useEffect } from "react";
import axios from "axios";
// import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Bar,
  BarChart,
  Legend,
} from "recharts";
function Graph() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:6969/read-file")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(data);
  const { cities, ids } = data;
  console.log(cities);
  console.log(ids);

  const chartData = ids?.map((id, index) => ({
    id,
    city: cities[index],
  }));

  console.log(chartData);

  return (
    <div>
      <h1>City IDs by City Name</h1>
      <div>
        <ScatterChart width={600} height={300}>
          <CartesianGrid />
          <XAxis dataKey="id" type="number" name="ID" />
          <YAxis dataKey="city" type="category" name="City" />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Scatter name="Cities" data={chartData} fill="#8884d8" />
        </ScatterChart>
      </div>
      <div>
        <BarChart width={600} height={600} data={chartData}>
          <Bar dataKey="city" fill="#8884d8" />
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="id" />
          <YAxis />
          <Tooltip />
        </BarChart>
      </div>
      {Object.keys(data).map((key) => (
        <h3>
          {key}:{data[key]}
        </h3>
      ))}
    </div>
  );
}

export default Graph;
