import React, { useState } from "react";
import Link from "next/link";
import Back from "../components/UI/Back";

const Login = () => {
  const onSubmitHandler = (e) => {
    null;
  };
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  // check if there is a user.id in localStorage

  const onInputChangeHandler = () => null;
  return (
    <section className="section-authentication">
      <Back />
      <div className="form-container">
        <div className="navigation">
          <ul className="d-flex align-center">
            <li className="active pointer">Log in</li>
            <li className="pointer">
              {" "}
              <Link href="/register">
                <a>Sign up</a>
              </Link>
            </li>
            <li className="pointer">
              <Link href="/">
                <a>Continue without account</a>
              </Link>
            </li>
          </ul>
        </div>
        <form onSubmit={onSubmitHandler} action="#">
          <label className="d-flex-justify  align-center">
            PHONE / NUMBER
            <input
              onChange={onInputChangeHandler}
              name="phone"
              value={inputValue.phone}
              type="tel"
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

          <button className="pointer ">DONE</button>
        </form>
      </div>
    </section>
  );
};

export default Login;
