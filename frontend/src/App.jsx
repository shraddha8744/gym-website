import React, { useContext } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { MyContext } from "./context/authContext";

const App = () => {
  const { state } = useContext(MyContext); // state = true (logged in) or false (logged out)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Redirect to home if already logged in */}
          <Route
            path="/"
            element={state ? <Navigate to="/home" /> : <Login />}
          />

          {/* Home is protected - only accessible if logged in */}
          <Route
            path="/home"
            element={state ? <Home /> : <Navigate to="/" />}
          />

          {/* Signup route - if logged in, redirect to home */}
          <Route
            path="/signup"
            element={state ? <Navigate to="/home" /> : <Signup />}
          />

          {/* Catch-all route - redirect to login */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
