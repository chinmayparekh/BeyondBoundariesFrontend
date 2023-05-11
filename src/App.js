import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Footer from "./components/Footer";
import Donut from "./components/charts/Donut";
import Temp from "./components/Temp.js";
import Graph from "./components/Graph";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Donut />
      <Temp />
      <Graph />
    </>
  );
}

export default App;
