import "./App.css";
import ContactForm from "./components/ContactForm";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Predef from "./components/Predef";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Predef/>
    <ContactForm/>
    </>
  );
}

export default App;
