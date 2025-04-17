import React from "react";

const Line = ({ 
  color = "black",    // Default color
  thickness = "1px",  // Default thickness
  direction = "horizontal",  // Default direction (horizontal or vertical)
  padding = "0px"     // Default padding
}) => {
  const isHorizontal = direction === "horizontal";

  return (
    <div
      style={{
        backgroundColor: color,
        height: isHorizontal && thickness,
        width: isHorizontal ? "100%" : thickness,
        margin: padding,
      }}
    />
  );
};

export default Line;
