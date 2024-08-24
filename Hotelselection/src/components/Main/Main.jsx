import React from "react";
import "./Main.css";
import SlideShow from "./SlideShow.jsx";
import Hero from "./Hero";
import Contact from "./Contact.jsx";
import { UserAuthContextProvider } from "../context/UserAuthContext.jsx";
import { Route, Routes } from "react-router-dom";
import Login from "./Login.jsx";
import SignUp from "./Signup.jsx";
import video from "../../assets/hotelm.mp4";
import Footer from "./Footer.jsx";
const Main = () => {
  return (
    <main className=" mx-4 h-auto text-center">
      <Hero />

      <SlideShow />

      <div className="row m-0 my-5">
        <div className="col-lg-4 signup">
          <UserAuthContextProvider>
            <Routes>
              <Route path="/" element={<Login />}></Route>
              <Route path="/signup" element={<SignUp />}></Route>
            </Routes>
          </UserAuthContextProvider>
        </div>
        <div className="col-lg-7  about">
          <video controls className="h-auto w-100  ">
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>
      <Contact />
      <Footer />
    </main>
  );
};

export default Main;
