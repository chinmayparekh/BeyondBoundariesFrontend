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
  const [balls, setBalls] = useState([]);
  const [pom, setPom] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:6969/get-venues")
      .then((response) => {
        setVenue(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:6969/get-balls-faced")
      .then((response) => {
        setBalls(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:6969/get-pom")
      .then((response) => {
        setPom(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const { x, y } = venue;
  const x_balls = balls.x;
  const y_balls = balls.y;
  const x_pom = pom.x;
  const y_pom = pom.y;
  const [type, setSelectedValue] = useState(props.selectedValue);
  const [graph_type, setDefault] = useState("scatter");
  useEffect(() => {
    setSelectedValue(props.selectedValue);
  }, [props.selectedValue]);

  const chartData = x?.map((id, index) => ({
    id,
    city: y[index],
  }));

  const bowlData = x_balls?.map((id, index) => ({
    id,
    balls: y_balls[index],
  }));

  const pomData = x_pom?.map((id, index) => ({
    id,
    pom: y_pom[index],
  }));
  console.log(graph_type);

  if ( type === "bar" ) {
    return (
      <>
        <div className="centralize mt-50 mb-25">
          <h1>Bar graph for matches played in each city</h1>
          <BarChart width={800} height={500} data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="id" angle={-20} textAnchor="end" />
            <YAxis domain={[0, 200]} />
            <Tooltip />
            <Legend />
            <Bar dataKey="city" fill="#8884d8" />
          </BarChart>
        </div>
        <div className="centralize mt-50 mb-25">
          <h1>Bar graph for total balls faced by each player</h1>
          <BarChart width={800} height={500} data={bowlData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="id" angle={-20} textAnchor="end" />
            <YAxis domain={[0, 200]} />
            <Tooltip />
            <Legend />
            <Bar dataKey="balls" fill="#8884d8" />
          </BarChart>
        </div>
        <div className="centralize mt-50 mb-25">
          <h2>Bar graph for player of the match awards for each player</h2>
          <BarChart width={800} height={500} data={pomData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="id" angle={-20} textAnchor="end" />
            <YAxis domain={[0, 200]} />
            <Tooltip />
            <Legend />
            <Bar dataKey="pom" fill="#8884d8" />
          </BarChart>
        </div>
      </>
    );
  } else if (type === "area") {
    return (
      <>
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
        <div className="centralize mt-50 mb-25">
          <h1>Area graph for total balls faced by each player</h1>
          <AreaChart width={800} height={500} data={bowlData}>
            <XAxis dataKey="id" />
            <YAxis domain={[0, 200]} />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Area
              type="monotone"
              dataKey="balls"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Tooltip />
            <Legend />
          </AreaChart>
        </div>
        <div className="centralize mt-50 mb-25">
          <h1>Area graph for player of the match awards for each player</h1>
          <AreaChart width={800} height={500} data={pomData}>
            <XAxis dataKey="id" />
            <YAxis domain={[0, 200]} />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Area
              type="monotone"
              dataKey="pom"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Tooltip />
            <Legend />
          </AreaChart>
        </div>
      </>
    );
  } else if (type === "pie") {
    const totalMatches = chartData.reduce(
      (total, item) => total + item.city,
      0
    );
    const pieData = chartData.map((item) => ({
      x: item.id,
      y: item.city / totalMatches,
    }));

    const totalBalls = bowlData.reduce(
      (total, item) => total + parseInt(item.balls),
      0
    ); // convert balls to a number
    const pieData_balls = bowlData.map((item) => ({
      x: item.id,
      y: parseInt(item.balls) / totalBalls, // convert balls to a number
    }));

    const totalPom = pomData.reduce(
      (total, item) => total + parseInt(item.pom),
      0
    ); // convert balls to a number
    const pieData_pom = pomData.map((item) => ({
      x: item.id,
      y: parseInt(item.pom) / totalPom,
    }));

    return (
      <>
        <div className="centralize">
          <h1>Pie graph for matches played in each city</h1>
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
        <div className="centralize">
          <h1>Pie graph for total balls faced by each player</h1>
          <div className="setHeightWidth">
            <VictoryPie
              data={pieData_balls}
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
        <div className="centralize">
          <h1>Pie graph for player of the match awards for each player</h1>
          <div className="setHeightWidth">
            <VictoryPie
              data={pieData_pom}
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
      </>
    );
  } else if (graph_type === "scatter"||type === "scatter") {
    return (
      <>
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
        <div className="centralize mt-50 mb-25">
          <h1>Scatter graph for total balls faced by each player</h1>
          <ScatterChart width={800} height={500}>
            <CartesianGrid />
            <XAxis dataKey="id" />
            <YAxis dataKey="balls" domain={[0, 200]} />
            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            <Scatter name="Cities" data={bowlData} fill="#8884d8" />
          </ScatterChart>
        </div>
        <div className="centralize mt-50 mb-25">
          <h1>Scatter graph for player of the match awards for each player</h1>
          <ScatterChart width={800} height={500}>
            <CartesianGrid />
            <XAxis dataKey="id" />
            <YAxis dataKey="pom" domain={[0, 200]} />
            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            <Scatter name="Cities" data={pomData} fill="#8884d8" />
          </ScatterChart>
        </div>
      </>
    );
  } else {
    return <div className="centralize">Unsupported chart type</div>;
  }
};

export default ChartData;
