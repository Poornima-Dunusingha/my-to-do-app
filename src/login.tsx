import React from "react";
import "./App.css";
// import Link from "antd/es/typography/Link";
// import { Link } from "react-router-dom";
import img1 from "./todo.png";
// import { useNavigate } from "react-router-dom";

function Login() {
  //   const navigate = useNavigate();

  //   const handleLoginClick = () => {
  //     navigate("/SignUp");
  //   };

  return (
    <div className="Login">
      <div className="LoginBox">
        <div className="Image">
          <img src={img1} alt="Todoimg" className="image" />
        </div>
        <div className="LoginHeader">
          Welcome to <br />
          My Todo App
        </div>
        <div className="inputs-login">
          <p className="label">
            Username:{" "}
            <input
              type="text"
              className="email"
              placeholder="Enter your email"
            ></input>
          </p>
          <p className="label">
            Password:{" "}
            <input
              type="password"
              className="password"
              placeholder="Enter your password"
            ></input>
          </p>
        </div>
        <div>
          {/* <Link to="/todoList"> */}
          <button
            type="submit"
            className="submit-button"
            placeholder="Login"
            // onClick={handleLoginClick}
          >
            Login
          </button>
          {/* </Link> */}

          <button type="submit" className="signup-button" placeholder="Signup">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
