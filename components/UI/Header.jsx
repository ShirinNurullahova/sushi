import React from "react";
import Link from "next/link";
import Logo from "../../public/logo2.png";
import Image from "next/image";

const Header = ({isAbout}) => {
  console.log(isAbout);
  // how to check responsive media query in javascript 
  // 
  return (
    <header className={`main-header d-flex-container p-135 ${isAbout ? "about-header" : ""}`}>
      <div className="logo">
        <Link href={'/'}>
        <Image src={Logo} alt="" />
        </Link>
   
      </div>
      <div className="branches d-flex ">
        <div className="branch ">
          <h3>ELMLAR BRANCH</h3>
          <h2>+99450 366 77 70</h2>
        </div>
        <div className="branch">
          <h3>ADJAMI BRANCH</h3>
          <h2>+99450 366 77 70</h2>
        </div>
      </div>
      <nav className="navigation">
        <ul className="d-flex-container">
          <li>Search</li>
          <li>
            Bag <span className="badge-count">(0)</span>
          </li>
          <li>English</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
