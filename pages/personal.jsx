import Link from "next/link";
import React from "react";
import Back from "../components/UI/Back";
import Navigator from "../components/UI/Navigator";
import styles from "../styles/Personal.module.scss";
const Personal = () => {
  return (
    <>
      <Back />
      <Navigator marginTop={42}>
        <p>Profile</p>
      </Navigator>
      <section className={styles.personal_info_container}>
        <div className={`${styles.navigation} d-flex`}>
          <li>Personal Info</li>
          <span>|</span>
          <Link href="/addresses">
            <a>Addresses</a>
          </Link>
        </div>
        <div className={`${styles.info_card}`}>
          <div className={`${styles.name_edit} d-flex-justify`}>
            <h1>Azad Sarkhanli</h1>
            <span>Edit</span>
          </div>
          <div className={`${styles.info_email} d-flex align-center`}>
            <h2>Email</h2>
            <h3>nigarpal@code.edu.az</h3>
          </div>
          <div className={`${styles.number} d-flex align-center`}>
            <h2>Number</h2>
            <h3>+994121234567</h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Personal;
