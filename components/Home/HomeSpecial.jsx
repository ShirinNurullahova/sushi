import React from "react";
import Navigator from "../UI/Navigator";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SpecialImg from "../../public/special.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

// import required modules
import { Pagination } from "swiper";

const HomeSpecial = () => {
  return (
    <section className="special-section">
      <Navigator>
        <p>Special Offers</p>
      </Navigator>
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        spaceBetween={50}
      >
        <SwiperSlide>
          <div className="card d-flex pointer">
            <div className="card-details">
              <div className="title-price d-flex align-center">
                <h2 className="title">Crazy Salmon set</h2>
                <span className="old-price">20AZN</span>
                <span className="new-price">17AZN</span>
              </div>
              <div className="card-content">
                <p>
                  Scelerisque elementum nulla aliquam enim dictum consequat.
                  Nunc, dignissim lectus ullamcorper enim nunc, et laoreet.
                  Mauris, nibh etiam netus orci lorem. Tellus.
                </p>
              </div>
              <button className="order-btn pointer">Add to order</button>
            </div>
            <div className="card-image">
              <Image
                width={535}
                className="card-img"
                height={300}
                src={
                  "https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg"
                }
                alt="salmon"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card  d-flex pointer">
            <div className="card-details">
              <div className="title-price d-flex align-center">
                <h2 className="title">Crazy Salmon set</h2>
                <span className="old-price">20AZN</span>
                <span className="new-price">17AZN</span>
              </div>
              <div className="card-content">
                <p>
                  Scelerisque elementum nulla aliquam enim dictum consequat.
                  Nunc, dignissim lectus ullamcorper enim nunc, et laoreet.
                  Mauris, nibh etiam netus orci lorem. Tellus.
                </p>
              </div>
              <button className="order-btn pointer">Add to order</button>
            </div>
            <div className="card-image">
              <Image
                width={535}
                className="card-img"
                height={300}
                src={SpecialImg}
                alt="salmon"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card  d-flex pointer">
            <div className="card-details">
              <div className="title-price d-flex align-center">
                <h2 className="title">Crazy Salmon set</h2>
                <span className="old-price">20AZN</span>
                <span className="new-price">17AZN</span>
              </div>
              <div className="card-content">
                <p>
                  Scelerisque elementum nulla aliquam enim dictum consequat.
                  Nunc, dignissim lectus ullamcorper enim nunc, et laoreet.
                  Mauris, nibh etiam netus orci lorem. Tellus.
                </p>
              </div>
              <button className="order-btn pointer">Add to order</button>
            </div>
            <div className="card-image">
              <Image
                width={535}
                className="card-img"
                height={300}
                src={SpecialImg}
                alt="salmon"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card  d-flex pointer">
            <div className="card-details">
              <div className="title-price d-flex align-center">
                <h2 className="title">Crazy Salmon set</h2>
                <span className="old-price">20AZN</span>
                <span className="new-price">17AZN</span>
              </div>
              <div className="card-content">
                <p>
                  Scelerisque elementum nulla aliquam enim dictum consequat.
                  Nunc, dignissim lectus ullamcorper enim nunc, et laoreet.
                  Mauris, nibh etiam netus orci lorem. Tellus.
                </p>
              </div>
              <button className="order-btn pointer">Add to order</button>
            </div>
            <div className="card-image">
              <Image
                width={535}
                className="card-img"
                height={300}
                src={SpecialImg}
                alt="salmon"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card  d-flex pointer">
            <div className="card-details">
              <div className="title-price d-flex align-center">
                <h2 className="title">Crazy Salmon set</h2>
                <span className="old-price">20AZN</span>
                <span className="new-price">17AZN</span>
              </div>
              <div className="card-content">
                <p>
                  Scelerisque elementum nulla aliquam enim dictum consequat.
                  Nunc, dignissim lectus ullamcorper enim nunc, et laoreet.
                  Mauris, nibh etiam netus orci lorem. Tellus.
                </p>
              </div>
              <button className="order-btn pointer">Add to order</button>
            </div>
            <div className="card-image">
              <Image
                width={535}
                className="card-img"
                height={300}
                src={SpecialImg}
                alt="salmon"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HomeSpecial;
