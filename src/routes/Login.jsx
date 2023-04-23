import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/login.css";
import {
  generateLoginURL,
  generateRegisterURL,
} from "../utilities/UtilityFunctions";
import { toast } from "react-hot-toast";

const axios = require("axios").default;

const Login = () => {
  const [creds, setCreds] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate("/register");

  const handleCredsChange = (e) => {
    // console.log(e.target.value);

    setCreds((prevCreds) => {
      const newCreds = { ...prevCreds, [e.target.name]: e.target.value };

      // console.log(newCreds);

      return newCreds;
    });
  };

  const handleLoginClick = async () => {
    try {
      const response = await axios.post(generateLoginURL(), creds);
      // console.log(response.data);

      toast.success(response.data.statusText);

      const token = response.data.token;
      if (!token) {
        toast.error("Invalid credentials1");
      } else {
        localStorage.setItem("token", token);
        navigate("/");
      }
    } catch (error) {
      console.log(error.response.data.statusText);
      toast.error(error.response.data.statusText);
    }

    setCreds({
      username: "",
      password: "",
    });
  };

  return (
    <div className="login-div">
      <h1 className="login-title">Login</h1>

      <input
        className="login-input"
        name="username"
        type="text"
        placeholder="Username"
        value={creds.username}
        onChange={handleCredsChange}
        autoComplete="off"
      />

      <input
        className="login-input"
        name="password"
        type="text"
        placeholder="Password"
        value={creds.password}
        onChange={handleCredsChange}
        autoComplete="off"
      />
      <button className="login-btn" onClick={handleLoginClick}>
        Login
      </button>

      <p className="regis-text">
        Dont have an account ?{" "}
        <span
          onClick={() => {
            navigate("/register");
          }}
          style={{
            textDecoration: "underline",
            cursor: "pointer",
            color: "white",
          }}
        >
          Register
        </span>
      </p>
    </div>
  );
};

export default Login;
