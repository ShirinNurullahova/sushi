import React, { useState } from "react";
import Link from "next/link";
import Navigator from "../components/UI/Navigator";
import Image from 'next/image';
import GetInTouch from "../components/UI/GetInTouch";
const Menu = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="bread-crumb menu-breadcrumb p-135 d-flex">
        <Link href="/">
          <a>Home</a>
        </Link>
        <span>/</span>
        <li>Menu</li>
      </div>
      <Navigator>
        <p>Menu</p>
      </Navigator>
      <section className="menu-section d-flex-justify p-135-right">
        <aside className="food-category">
          <h3 className="active d-flex flex-column">
            HOT SUSHI ROLLS
            <span></span>
          </h3>
          <h3 className=" d-flex flex-column">
            HOT SUSHI ROLLS
            <span></span>
          </h3>
          <h3 className=" d-flex flex-column">
            HOT SUSHI ROLLS
            <span></span>
          </h3>
          <h3 className=" d-flex flex-column">
            HOT SUSHI ROLLS
            <span></span>
          </h3>
          <h3 className=" d-flex flex-column">
            HOT SUSHI ROLLS
            <span></span>
          </h3>
          <h3 className=" d-flex flex-column">
            HOT SUSHI ROLLS
            <span></span>
          </h3>
        </aside>
        <div className="food-items  d-flex">
          <div className="food-item flex-column">
            <div className="food-item-img">
              <Image
                // src require image path
                src={require("../public/1.png")}
                width={370}
                height={220}
                alt="salmon"
              />
            </div>
            <div className="food-item-content">
              <div className="title-price d-flex-justify">
                <h2>Juma SET</h2>
                <h3>AZN 20</h3>
              </div>
              <p className="description">Salmon, crab, avocado, rice</p>
              <div className="buttons d-flex-container">
                <div className="minus d-flex-center">
                  <svg
                    width="20"
                    height="2"
                    viewBox="0 0 20 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      y1="1"
                      x2="20"
                      y2="1"
                      stroke="#B9B9B9"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div className="count">
                  <input value={count} type="number" />
                </div>
                <div className="plus d-flex-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      y1="10"
                      x2="20"
                      y2="10"
                      stroke="#4D4D4D"
                      strokeWidth="2"
                    />
                    <path d="M10 0L10 20" stroke="#4D4D4D" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="food-item flex-column">
            <div className="food-item-img">
              <Image
                src={require("../public/1.png")}
                width={370}
                height={220}
                alt="salmon"
              />
            </div>
            <div className="food-item-content">
              <div className="title-price d-flex-justify">
                <h2>Juma SET</h2>
                <h3>AZN 20</h3>
              </div>
              <p className="description">Salmon, crab, avocado, rice</p>
              <div className="buttons d-flex-container">
                <div className="minus d-flex-center">
                  <svg
                    width="20"
                    height="2"
                    viewBox="0 0 20 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      y1="1"
                      x2="20"
                      y2="1"
                      stroke="#B9B9B9"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div className="count">
                  <input value={count} type="number" />
                </div>
                <div className="plus d-flex-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      y1="10"
                      x2="20"
                      y2="10"
                      stroke="#4D4D4D"
                      strokeWidth="2"
                    />
                    <path d="M10 0L10 20" stroke="#4D4D4D" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="food-item flex-column">
            <div className="food-item-img">
              <Image
                src={require("../public/1.png")}
                width={370}
                height={220}
                alt="salmon"
              />
            </div>
            <div className="food-item-content">
              <div className="title-price d-flex-justify">
                <h2>Juma SET</h2>
                <h3>AZN 20</h3>
              </div>
              <p className="description">Salmon, crab, avocado, rice</p>
              <div className="buttons d-flex-container">
                <div className="minus d-flex-center">
                  <svg
                    width="20"
                    height="2"
                    viewBox="0 0 20 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      y1="1"
                      x2="20"
                      y2="1"
                      stroke="#B9B9B9"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div className="count">
                  <input value={count} type="number" />
                </div>
                <div className="plus d-flex-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      y1="10"
                      x2="20"
                      y2="10"
                      stroke="#4D4D4D"
                      strokeWidth="2"
                    />
                    <path d="M10 0L10 20" stroke="#4D4D4D" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="food-item flex-column">
            <div className="food-item-img">
              <Image
                src={require("../public/1.png")}
                width={370}
                height={220}
                alt="salmon"
              />
            </div>
            <div className="food-item-content">
              <div className="title-price d-flex-justify">
                <h2>Juma SET</h2>
                <h3>AZN 20</h3>
              </div>
              <p className="description">Salmon, crab, avocado, rice</p>
              <div className="buttons d-flex-container">
                <div className="minus d-flex-center">
                  <svg
                    width="20"
                    height="2"
                    viewBox="0 0 20 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      y1="1"
                      x2="20"
                      y2="1"
                      stroke="#B9B9B9"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div className="count">
                  <input value={count} type="number" />
                </div>
                <div className="plus d-flex-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      y1="10"
                      x2="20"
                      y2="10"
                      stroke="#4D4D4D"
                      strokeWidth="2"
                    />
                    <path d="M10 0L10 20" stroke="#4D4D4D" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <GetInTouch />
    </>
  );
};

export default Menu;
