


import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Profile from "./pages/users/Profile";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import "./App.css";
import { useEffect } from "react";
import Admin from "./pages/Admin";
import LoginPage from "./pages/auth/LoginPage";
import Packages from "./pages/Packages";
import ProfilePage from "./pages/users/Profile";
import Bookings from "./pages/Bookings";
import PackageInfo from "./pages/PackageInfo";

function userRoutes() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/profile" element={<Profile />} />
    </Routes>
    </BrowserRouter>
  );
}
function adminRoutes() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Profile />} />
    </Routes>
    </BrowserRouter>
  );
}
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const token = sessionStorage.getItem("authToken");
    console.log(token);
    if (token) {
      const tokenexpiration = sessionStorage.getItem("tokenexpiration");
      console.log(tokenexpiration);
      if (Date.now() < tokenexpiration) {
        setIsLoggedIn(true);
      }
    }
  });

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      {/* <Route path="/courses" element={<Courses />} />
      <Route path="/course/:id" element={<Course />} /> */}
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/packages" element={<Packages />} />
      <Route path="/bookings" element={<Bookings />} />
      <Route path="/packageinfo" element={<PackageInfo />} />
      <Route path="/admi" element={<Admin />} />
      <Route
        path="/user/*"
        element={isLoggedIn ? userRoutes() : <Navigate to="/login" />}
      />
      <Route
        path="/admin/*"
        element={isLoggedIn ? adminRoutes() : <Navigate to="/login" />}
      />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
