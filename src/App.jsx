import React from "react";
import { Routes, Route, HashRouter, BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

// my modules
import Home from "./routes/Home.jsx";
import Register from "./routes/Register.jsx";
import Login from "./routes/Login.jsx";

import { routes } from "./utilities/Vars.js";

////////////////////////////////////////////////////////////////////////////////////////////////////////////

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Toaster
        toastOptions={{
          duration: 2500,
          style: {
            fontFamily: "Montserrat",
            marginTop: "2rem",
          },
        }}
      />
    </HashRouter>
  );
}

export default App;
