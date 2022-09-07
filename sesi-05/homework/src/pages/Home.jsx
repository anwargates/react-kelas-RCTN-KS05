import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import NextMeetup from "../components/NextMeetup";
import AboutMeetup from "../components/AboutMeetup";
import Members from "../components/Members";
import PastMeetups from "../components/PastMeetups";
import Footer from "../components/Footer";

function Home() {

  return (
    <>
      <Navbar />
      <Header />
      <NextMeetup />
      <AboutMeetup />
      <Members />
      <PastMeetups />
      <Footer />
    </>
  );
}

export default Home;
