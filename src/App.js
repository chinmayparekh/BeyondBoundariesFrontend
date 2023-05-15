import "./App.css";
import { useState } from "react";
import ContactForm from "./components/ContactForm";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Predef from "./components/Predef";
import Dropdown from "./components/Dropdown";
import Exp from "./components/Radar";
import Form from "./components/Form";
function App() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <>
      <Navbar />
      <Home />
      <Dropdown onSelectChange={handleSelectChange} />
      <Predef selectedValue={selectedValue} />
      <ContactForm />
      <Form />
    </>
  );
}

export default App;
