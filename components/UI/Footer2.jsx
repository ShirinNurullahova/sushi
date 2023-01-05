import React from "react";
import Logo from "../../public/logo2.png";
import Image from "next/image";

const Footer2 = () => {
  return (
    <footer className="d-flex-container p-135 footer2 ">
      <div className="logo">
        <Image width={101} height={54} src={Logo} alt="logo" />
      </div>
      <div className="footer-content d-flex-container ">
        <div className="branch ">
          <h3>ELMLAR BRANCH</h3>
          <h2>+99450 366 77 70</h2>
        </div>
        <div className="branch">
          <h3>ADJAMI BRANCH</h3>
          <h2>+99450 366 77 70</h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
