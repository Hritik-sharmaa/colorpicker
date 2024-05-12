import React, { useState } from "react";

const ColorPicker = () => {
  const [color, setColor] = useState("#FFFFFF");
  const handleColorChange = (e) => {
    setColor(e.target.value);
  };
  return (
    <div>
      <h1>Color Picker</h1>
      <div className="color-container" style={{ backgroundColor: color }}>
        <h4>Selected Color: {color}</h4>
      </div>
      <label>Select Color: </label>
      <input type="color" value={color} onChange={handleColorChange} />
    </div>
  );
};

export default ColorPicker;
