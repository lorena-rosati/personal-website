import React from 'react';
import Project from "./Project.jsx";
import cryptopriceapp from "../assets/cryptopriceapp.png";

const style = {
  container: "bg-[#f6f6f6] px-[5%] py-[7%]",
  titlecontainer: "pl-[1%] pb-[3%]",
  title: "text-5xl font-semibold text-center",
  projects: "grid sm:grid-cols-2 md:grid-cols-3"
}

const Projects = () => {
  return (
    <div className={style.container} id="Projects">
      <div className={style.titlecontainer}>
        <h1 className={style.title}>Projects</h1>
      </div>
      <div className={style.projects}>
        <Project src={cryptopriceapp} title="Crypto Price App" tools="JavaScript, React, CSS" description="A responsive Crypto Price App where users can search for coins and their information. The app utilizes Axios for real-time data retrieval of 100 coins from the CoinStats API." />
        <Project src={cryptopriceapp} title="Crypto Price App" tools="JavaScript, React, CSS" description="A responsive Crypto Price App where users can search for coins and their information. The app utilizes Axios for real-time data retrieval of 100 coins from the CoinStats API." />
        <Project src={cryptopriceapp} title="Crypto Price App" tools="JavaScript, React, CSS" description="A responsive Crypto Price App where users can search for coins and their information. The app utilizes Axios for real-time data retrieval of 100 coins from the CoinStats API." />

      </div>
    </div>
  );
};

export default Projects;