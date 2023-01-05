import "../styles/globals.scss";

import Footer from "../components/UI/Footer";
import Header from "../components/UI/Header";
import "../styles/Azad.scss";
import "../styles/HomeMain.scss";
import "../styles/Ali.scss";
import "../styles/Special.scss";
import "../components/UI/Back.scss";
import "../styles/Login.scss";
import "../styles/Register.scss";
import "../styles/GetInTouch.scss";
import "../styles/Footer2.scss";
import "../styles/Footer.scss";
import "../styles/Menu.scss";





function MyApp({ Component, pageProps }) {
  // check if the page has a layout if exists then wrap it with the layout
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;

