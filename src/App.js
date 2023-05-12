import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Footer from "./components/Footer";
import Donut from "./components/charts/Donut";
import Temp from "./components/Temp.js";
import Graph from "./components/Graph";
import GraphCard from "./components/GraphCard";
import Options from "./components/Options";
import ContactForm from "./components/ContactForm";
function App() {
  return (
    <>
      <Navbar />
      {/* <GraphCard/> */}
      <Home />
      <Donut />
      <Temp />
      <Options/>
      <ContactForm />
      <Graph />
    </>
  );
}

export default App;
