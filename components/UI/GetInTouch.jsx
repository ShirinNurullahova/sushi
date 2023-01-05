import Link from "next/link";
import React from "react";
import Navigator from "./Navigator";
import Map from "../../public/map.png";
import Image from "next/image";

const GetInTouch = () => {
  return (
    <section className="get-in-touch">
      <Navigator style={{ marginBottom: "0px" }}>
        <p>Get In Touch</p>
      </Navigator>
      <div className="get-in-touch-container d-flex-container p-135-left">
        <div className="adress-details d-flex-justify">
          <div className="left-panel">
            <div className="opening">
              <h2>Opening Hours</h2>
              <span>
                MON - SAT <br /> 10:00 - 23:00
              </span>{" "}
              <span>
                Sunday <br /> 12:00 - 23:00
              </span>
            </div>
            <div className="email">
              <h2>Email</h2>
              <span>info@sushialfa.az</span>
            </div>
            <div className="social">
              <h2>Social</h2>
              <span className="d-flex-justify">
                <a href="https://www.instagram.com/azadsarxanli">IsNSTAGRAM</a>
                <a href="https://www.instagram.com/azadsarxanli">FACEBOOK</a>
              </span>
            </div>
          </div>
          <div className="right-panel">
            <div className="adress">
              <h2>ADRESS</h2>
              <span>
                Huseyn Seyidzade 29, <br />
                Baku, AZERBAIJAN
              </span>
            </div>
            <div className="phone">
              <h2>Phone</h2>
              <span>+994504808467</span>
            </div>
          </div>
        </div>
        <div className="map">
          <Image width={835} height={352} src={Map} alt="map" />
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
