import React from "react";
import Back from "../components/UI/Back";
import Navigator from "../components/UI/Navigator";
import Link from "next/link";
import styles from "../styles/Addresses.module.scss";
const Addresses = () => {
  return (
    <>
      <Back />
      <Navigator marginTop={42}>
        <p>Profile</p>
      </Navigator>
      <section className={styles.personal_info_container}>
        <div className={`${styles.navigation} d-flex`}>
          <Link href="/personal">
            <a>Personal Info</a>
          </Link>
          <span>|</span>
          <li>Addresses</li>
        </div>
        <div className={`${styles.info_card}`}>
          <div className={`${styles.place_edit} d-flex-justify`}>
            <div className={`${styles.place_div}`}>
              <h1>HOME</h1>
              <p>h. aslanov qes. ; d.5</p>
            </div>
            <span>Edit</span>
          </div>
          <div className={`${styles.place_edit} d-flex-justify`}>
            <div className={`${styles.place_div}`}>
              <h1>HOME</h1>
              <p>h. aslanov qes. ; d.5</p>
            </div>
            <span>Edit</span>
          </div>
          <div className={`${styles.place_edit} d-flex-justify`}>
            <div className={`${styles.place_div}`}>
              <h1>HOME</h1>
              <p>h. aslanov qes. ; d.5</p>
            </div>
            <span>Edit</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Addresses;
