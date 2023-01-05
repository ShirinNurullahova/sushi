import React from "react";
import Logo from "../../public/LOGO.png";
import Image from 'next/Image';
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer d-flex-justify p-135">
      <div className="copyright">© {new Date().getFullYear()}</div>
      <div className="logo d-flex flex-column align-center">
        <Image width={101} height={54} src={Logo} alt="logo" />
        <span>Website by claradix</span>
      </div>
      <Link href={"/privacy"}>
        <a>Privacy Policy</a>
      </Link>
    </footer>
  );
};

export default Footer;
