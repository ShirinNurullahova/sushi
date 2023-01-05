import React from 'react'
import styles from '../styles/About.module.scss'
import Header from '../components/UI/Header'
import Footer from '../components/UI/Footer2'
import Gallery from '../components/about/gallery'

const About = () => {
  return (
    <>
      <div className={` ${styles.about_page}`}>
        <nav className={`d-flex ${styles.navigation} p-135-right`}>
          <ul className={`d-flex flex-column`}>
            <li className={`pointer`}>menu</li>
            <li className={`pointer`}>branches</li>
            <li className={`pointer`}>services</li>
            <li className={`pointer`}>about us</li>
          </ul>
        </nav>
        <div className={`${styles.chefs}`}>
          <h1>OUR CHEFS</h1>
        </div>
      </div>
      <Gallery />
    </>
  )
}

export default About

About.getLayout = (page) => (
  <>
    <Header isAbout="true" />
    {page}
    <Footer />
  </>
);
