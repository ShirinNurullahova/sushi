import React from "react";
import Background from "../../public/background.png";
import Image from "next/image";
import Marquee from "react-fast-marquee";
const HomeMain = () => {
  const onAnimationRemoveHandler = () => {
    const animation = document.querySelector(".animation");
    animation.classList.remove("animation");
  };
  const onAnimationAddHandler = () => {
    const animation = document.querySelector(".m-scroll");
    if (!animation.className.includes("animation")) {
      animation.classList.add("animation");
    }
  };
  return (
    <main>
      <nav className="d-flex navigation p-135-right">
        <ul className=" d-flex flex-column">
          <li className="pointer">menu</li>
          <li className="pointer">branches</li>
          <li className="pointer">services</li>
          <li className="pointer">about us</li>
        </ul>
      </nav>
      <div className="marquee scroll">
        <div className="m-scroll animation">
          <Marquee pauseOnHover speed={15} gradient={false}>
            <span>SUSHI ROLLS</span>
            <span>NIGIRI</span>
            <span>SASHIMI</span>
            <span>COLD SUSHI</span>
            <span>NOODLES</span>
            <span>BALIK EKMEK</span>
          </Marquee>
        </div>
      </div>
    </main>
  );
};

export default HomeMain;
