import { useState, useEffect } from "react";
import axios from "axios";
import Back from "../components/UI/Back";
import Link from "next/link";
import { useRouter } from "next/router";
const Register = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    password: "",
    adress: "",
    phone: "",
  });
  const [inputErrors, setInputErrors] = useState({
    name: false,
    email: false,
    password: false,
    adress: false,
    phone: false,
  });
  const onInputChangeHandler = (e) => {
    // check if e.target.name === phone and if it is then check if it is a number.
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    // check if inputValue.name includes only one word, alert user he/she should enter two words
    if (inputValue.name.split(" ").length === 1) {
      alert("Please enter your full name");
    }
    // check if inputValue.email is valid, alert user he/she should enter a valid email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValue.email)) {
      alert("Please enter a valid email");
    }
    // check if inputValue.password inputValue.name inputValue.email inputValue.adress inputValue.phone are
    //  include any html tags, alert user he/she should not include
    //  any html tags and remove them
    if (
      inputValue.password.includes("<") ||
      inputValue.password.includes(">") ||
      inputValue.name.includes("<") ||
      inputValue.name.includes(">") ||
      inputValue.email.includes("<") ||
      inputValue.email.includes(">") ||
      inputValue.adress.includes("<") ||
      inputValue.adress.includes(">") ||
      inputValue.phone.includes("<") ||
      inputValue.phone.includes(">")
    ) {
      alert("Please do not include any html tags");
      setInputValue({
        ...inputValue,
        password: inputValue.password.replace(/<|>/g, ""),
        name: inputValue.name.replace(/<|>/g, ""),
        email: inputValue.email.replace(/<|>/g, ""),
        adress: inputValue.adress.replace(/<|>/g, ""),
        phone: inputValue.phone.replace(/<|>/g, ""),
      });
      return false;
    }
    // send the api request to register the user
    // if the request is successful then alert user he/she has been registered
    // if the request is not successful then alert user he/she has not been registered
    let inputsData = {
      firstName: inputValue.name.split(" ")[0],
      lastName: inputValue.name.split(" ")[1],
      email: inputValue.email,
      password: inputValue.password,
      confirmPassword: inputValue.password,
      // address: inputValue.adress,
      // phone: inputValue.phone,
      city: "Baku",
      zone: "Narimanov",
      street: "Ceka Hacibeyli",
      home: "49",
      countryCode: 994,
      operatorCode: 70,
      number: 8881971,
    };

    // post request to http://localhost:3001/api/user/registration with credentials set cors to "*"
    axios
      .post("http://localhost:3001/api/user/registration", inputsData, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "access-control-allow-methods":
            "GET, POST, PATCH, PUT, DELETE, OPTIONS",
        },
      })
      .then((res) => {
        alert(res.data.message);
        // set user.id to the localStorage
        localStorage.setItem("user.id", res.data.user.id);
        router.push("/");
      })
      .catch((err) => {
        alert("You have not been registered successfully");
      });
  };
  return (
    <section className="section-authentication">
      <Back />
      <div className="form-container">
        <div className="navigation">
          <ul className="d-flex align-center">
            <li className="pointer">
              <Link href="/login">
                <a>Log in</a>
              </Link>
            </li>
            <li className="active pointer">SIGN UP</li>
            <li className="pointer">
              <Link href="/">
                <a>Continue without account</a>
              </Link>
            </li>
          </ul>
        </div>
        <form onSubmit={onSubmitHandler} action="#">
          <label className="d-flex-justify align-center ">
            NAME / Surname
            <input
              onChange={onInputChangeHandler}
              name="name"
              value={inputValue.name}
              type="text"
            />
          </label>
          <label className="d-flex-justify  align-center">
            PHONE
            <input
              onChange={onInputChangeHandler}
              name="phone"
              value={inputValue.phone}
              type="tel"
            />
          </label>
          <label className="d-flex-justify  align-center">
            EMAIL
            <input
              onChange={onInputChangeHandler}
              value={inputValue.email}
              type="email"
              name="email"
            />
          </label>
          <label className="d-flex-justify  align-center">
            Password
            <input
              onChange={onInputChangeHandler}
              value={inputValue.password}
              type="password"
              name="password"
            />
          </label>
          <label className="d-flex-justify   align-center">
            Adress
            <input
              onChange={onInputChangeHandler}
              value={inputValue.adress}
              type="text"
              name="adress"
            />
          </label>
          <button className="pointer ">DONE</button>
        </form>
      </div>
    </section>
  );
};

export default Register;
