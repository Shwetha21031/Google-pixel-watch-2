import React from "react";

const BlueBlob = ({
  top,
  left,
  right,
  bottom,
  width = "w-[150px]",
  height = "h-[150px]",
  opacity = "opacity-60",
  blur = "blur-xl",
}) => {
  const positionClasses = `${top || ""} ${left || ""} ${right || ""} ${
    bottom || ""
  }`;

  return (
    <div
      className={`absolute z-0 ${width} ${height} rounded-full ${opacity} ${blur} ${positionClasses} pointer-events-none
                 bg-[radial-gradient(ellipse_at_center,#A4CCF4,transparent)]`}
    ></div>
  );
};

export default BlueBlob;
