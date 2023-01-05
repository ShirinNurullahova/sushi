import React from "react";
const Navigator = ({ children, marginTop }) => {
  return (
    <div
      style={{
        marginTop: marginTop ? marginTop : "0px",
      }}
      className="navigator d-flex align-center"
    >
      {children}
    </div>
  );
};

export default Navigator;
