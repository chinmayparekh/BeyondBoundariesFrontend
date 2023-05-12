import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, AreaChart, Area, PieChart, Pie, Cell } from 'recharts';

const ChartTypes = {
  LINE: 'line',
  AREA: 'area',
  PIE: 'pie',
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Options = () => {
  const [chartType, setChartType] = useState(ChartTypes.LINE);
  const [chartData, setChartData] = useState([
    { name: 'January', value: 400 },
    { name: 'February', value: 300 },
    { name: 'March', value: 200 },
    { name: 'April', value: 278 },
    { name: 'May', value: 189 },
    { name: 'June', value: 239 },
  ]);

  const handleDataUpdate = (newData) => {
    setChartData(newData);
  };

  const handleChartTypeChange = (event) => {
    setChartType(event.target.value);
  };

  const renderChart = () => {
    switch (chartType) {
      case ChartTypes.LINE:
        return (
          <LineChart width={500} height={300} data={chartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
            <Tooltip />
            <Legend />
          </LineChart>
        );
      case ChartTypes.AREA:
        return (
          <AreaChart width={500} height={300} data={chartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
            <Tooltip />
            <Legend />
          </AreaChart>
        );
      case ChartTypes.PIE:
        return (
          <PieChart width={500} height={300}>
            <Pie data={chartData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div>
        <label htmlFor="chartType">Chart Type:</label>
        <select id="chartType" name="chartType" onChange={handleChartTypeChange}>
          <option value={ChartTypes.LINE}>Line Chart</option>
          <option value={ChartTypes.AREA}>Area Chart</option>
          <option value={ChartTypes.PIE}>Pie Chart</option>
        </select>
      </div>
      <div>
        <label htmlFor="data">Data:</label>
        <input id="data" type="text" placeholder="Enter data separated by commas" onChange={(event) => handleDataUpdate(event.target.value.split(',').map((value, index) => ({ name: `Data ${index + 1}`, value: parseInt(value, 10) })))} />
      </div>
      {renderChart()}
    </div>
  );
};

export default Options;