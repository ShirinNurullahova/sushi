import Image from 'next/image';
import Link from "next/link";
import React from "react";
import Back from "../components/UI/Back";
import Navigator from "../components/UI/Navigator";
import styles from "../styles/Orders.module.scss";

const Orders = () => {
  return (
    <>
      <Back />
      <Navigator marginTop="45px">
        <p>Orders</p>
      </Navigator>
      <section
        className={`${styles.orders_container} d-flex flex-column  p-135-right`}
      >
        <h1>SELECTED ITEMS</h1>
        <aside className="d-flex">
          <div className={`${styles.order_items} d-flex flex-column`}>
            <div className={`${styles.order_item} d-flex-justify  `}>
              <div className={`${styles.item_content}`}>
                <div className={`${styles.title_count} d-flex align-center`}>
                  <span>x1</span>
                  <h2>Magura</h2>
                </div>
                <p>Salmon, crab, avocado, rice hbahsvhg</p>
                <div className={`${styles.buttons_container} d-flex-justify`}>
                  <button className="minus">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="10" cy="10" r="10" fill="#FFFCF5" />
                      <line
                        x1="4"
                        y1="10"
                        x2="16"
                        y2="10"
                        stroke="#4D4D4D"
                        strokeWidth="2"
                      />
                    </svg>
                  </button>
                  <button className="count">1</button>
                  <button className="plus">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="10" cy="10" r="10" fill="#FFFCF5" />
                      <line
                        x1="4"
                        y1="10"
                        x2="16"
                        y2="10"
                        stroke="#4D4D4D"
                        strokeWidth="2"
                      />
                      <path d="M10 4L10 16" stroke="#4D4D4D" strokeWidth="2" />
                    </svg>
                  </button>
                </div>
                <div className={`${styles.price_remove} d-flex-justify`}>
                  <h2>AZN 20</h2>
                  <span>Remove</span>
                </div>
              </div>
              <div className="item-img d-flex">
                <Image
                  width={170}
                  height={200}
                  src="/orders.png"
                  alt="orders_photo"
                />
              </div>
            </div>
            <div className={`${styles.order_item} d-flex-justify  `}>
              <div className={`${styles.item_content}`}>
                <div className={`${styles.title_count} d-flex align-center`}>
                  <span>x1</span>
                  <h2>Magura</h2>
                </div>
                <p>Salmon, crab, avocado, rice hbahsvhg</p>
                <div className={`${styles.buttons_container} d-flex-justify`}>
                  <button className="minus">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="10" cy="10" r="10" fill="#FFFCF5" />
                      <line
                        x1="4"
                        y1="10"
                        x2="16"
                        y2="10"
                        stroke="#4D4D4D"
                        strokeWidth="2"
                      />
                    </svg>
                  </button>
                  <button className="count">1</button>
                  <button className="plus">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="10" cy="10" r="10" fill="#FFFCF5" />
                      <line
                        x1="4"
                        y1="10"
                        x2="16"
                        y2="10"
                        stroke="#4D4D4D"
                        strokeWidth="2"
                      />
                      <path d="M10 4L10 16" stroke="#4D4D4D" strokeWidth="2" />
                    </svg>
                  </button>
                </div>
                <div className={`${styles.price_remove} d-flex-justify`}>
                  <h2>AZN 20</h2>
                  <span>Remove</span>
                </div>
              </div>
              <div className={`${styles.item_img} d-flex`}>
                <Image
                  width={170}
                  height={200}
                  src="/orders.png"
                  alt="orders_photo"
                />
              </div>
            </div>
            <Link href={`#`}>
              <a className={`${styles.add_items}`}>+ Add more items</a>
            </Link>
            <input
              className={`${styles.comment_input}`}
              type="text"
              placeholder="Comment"
            />
            <div className={`${styles.reccomendation}`}>
              <h2>RECOMMENDATION</h2>
              <div
                className={`${styles.reccomendation_items} d-flex flex-column`}
              >
                <div className={`${styles.reccomendation_item} d-flex-justify`}>
                  <div className={`${styles.item_content}`}>
                    <h2>SALMON SET</h2>
                    <p>Salmon, crab, avocado, rice</p>
                    <h3>AZN 20</h3>
                  </div>
                  <div className={`${styles.item_img} d-flex`}>
                    <Image
                      width={171}
                      height={123}
                      src="/orders.png"
                      alt="orders_photo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.prices_container}`}>
            <h2>PRICES INCLUDE VAT</h2>
            <div
              className={`${
                (styles.items_total, styles.prices_div)
              } d-flex-justify`}
            >
              <h2>Items total</h2>
              <span>AZN 40</span>
            </div>
            <div
              className={`${
                (styles.delivery, styles.prices_div)
              } d-flex-justify`}
            >
              <h2>Delivery </h2>
              <span>AZN 1.5</span>
            </div>
            <div className={`${styles.total} d-flex-justify`}>
              <h2>Total:</h2>
              <span>AZN 41.5</span>
            </div>
            <p>Orders below 20 azn are free of charge*</p>
            <button>Click to Order</button>
          </div>
        </aside>
      </section>
    </>
  );
};

export default Orders;
