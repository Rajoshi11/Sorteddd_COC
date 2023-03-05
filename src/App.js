import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile/Profile';
import { Link } from "react-router-dom";
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import LandingPage from './LandingPage';
import Swiper from './pages/Swiper/Swiper';
import Navbar from './components/Navbar/Navbar';
<<<<<<< HEAD
import WebcamCapture from './components/Webcam';
=======
import Userinfo from './pages/Userinfo';
import Footer from './components/Footer';
import Pricing from './pages/Pricing';
>>>>>>> 0273dd01778facc109ee798cf36b3dccf4173a3d

export default function App() {
  return (
    <BrowserRouter>
    <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/swiper" element={<Swiper />} />
<<<<<<< HEAD
          <Route path="/verify" element={<WebcamCapture />} />
=======
          <Route path="/userinfo" element={<Userinfo />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/profile" element={<Profile />} />
>>>>>>> 0273dd01778facc109ee798cf36b3dccf4173a3d
        </Routes>
        <Footer />
    </BrowserRouter>
  )
  }