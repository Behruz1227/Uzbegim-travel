import React from 'react'
import Page1 from "../Page1/Page1"
import Page2 from "../Page1/Page2"
import Footer from "../footer/Footer"
import SideNavBar from '../SideNavBar/SideNavBar'

const Home = () => {

  return (
    <div>
      <SideNavBar />
      <Page1 />
      <Page2 />
      <Footer />
    </div>
  );

}

export default Home;