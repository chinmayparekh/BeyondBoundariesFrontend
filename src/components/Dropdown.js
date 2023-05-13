function Dropdown(props) {
    const options = [
      { value: "line", label: "Line" },
      { value: "pie", label: "Pie" },
      { value: "area", label: "Area" },
      { value: "scatter", label: "Scatter" },
    ];
  
    return (
      <div className="centralize mt-25 dropdown">
        <label htmlFor="dropdown">Select an option:</label>
        <select id="dropdown" onChange={props.onSelectChange}>
          <option value="">Select an option</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }
  
  export default Dropdown;