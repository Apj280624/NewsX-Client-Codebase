import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/login.css";
import { generateRegisterURL } from "../utilities/UtilityFunctions";
import { toast } from "react-hot-toast";

const axios = require("axios").default;

const Register = () => {
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

  const handleRegisterClick = async () => {
    try {
      const response = await axios.post(generateRegisterURL(), creds);
      // console.log(response.data);

      toast.success(response.data.statusText);

      setCreds({
        username: "",
        password: "",
      });
    } catch (error) {
      console.log(error.response.data.statusText);
      toast.error(error.response.data.statusText);
    }
  };

  return (
    <div className="login-div">
      <h1 className="login-title">Register</h1>

      <input
        className="login-input"
        name="username"
        type="text"
        placeholder="Username"
        value={creds.username}
        onChange={handleCredsChange}
      />

      <input
        className="login-input"
        name="password"
        type="text"
        placeholder="Password"
        value={creds.password}
        onChange={handleCredsChange}
      />
      <button className="login-btn" onClick={handleRegisterClick}>
        Register
      </button>

      <p className="regis-text">
        Already have an account ?{" "}
        <span
          onClick={() => {
            navigate("/login");
          }}
          style={{
            textDecoration: "underline",
            cursor: "pointer",
            color: "white",
          }}
        >
          Login
        </span>
      </p>
    </div>
  );
};

export default Register;
