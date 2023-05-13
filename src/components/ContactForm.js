import React, { useState } from "react";

function NumberForm() {
  const [name, setName] = useState("");
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("value1", value1);
    formData.append("value2", value2);
    fetch("http://localhost:6969/submit-data", {
      method: "POST",
      body: formData
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label className="form-label">
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-input" />
      </label>
      <br />
      <label className="form-label">
        Value 1:
        <input type="number" value={value1} onChange={(e) => setValue1(parseInt(e.target.value))} className="form-input" />
      </label>
      <br />
      <label className="form-label">
        Value 2:
        <input type="number" value={value2} onChange={(e) => setValue2(parseInt(e.target.value))} className="form-input" />
      </label>
      <br />
      <button type="submit" className="form-button">Submit</button>
    </form>
  );
}
export default NumberForm;