import React from 'react';
import Project from "./Project.jsx";
import cryptopriceapp from "../assets/cryptopriceapp.png";
import todoapp from "../assets/todolist.png";
import spotifydata from "../assets/popularitygraph.png";
import bytelife from "../assets/bytelife.png";

const style = {
  container: "bg-[#f6f6f6] px-[5%] py-[7%]",
  titlecontainer: "pl-[1%] pb-[3%]",
  title: "text-5xl font-semibold text-center",
  projects: "grid sm:grid-cols-2 md:grid-cols-3",
  projects2: "flex flex-grow"
}

const Projects = () => {
  return (
    <div className={style.container} id="Projects">
      <div className={style.titlecontainer}>
        <h1 className={style.title}>Projects</h1>
      </div>
      <div className={style.projects}>
        <a href="https://github.com/lorena-rosati/spotify-artist-data-exploration.git" target="_blank"><Project src={spotifydata} title="Spotify Artist Data Exploration" tools="SQL, PostgreSQL" description="Cleaning and analysis of a dataset of an artist’s discography (450+ songs) to determine conclusions on the success of albums/songs given their beat, energy, and other properties." /></a>
        <a href="https://github.com/lorena-rosati/crypto-price-app.git" target="_blank"><Project src={cryptopriceapp} title="Crypto Price App" tools="JavaScript, React, CSS" description="A responsive Crypto Price App where users can search for coins and their information. The app utilizes Axios for real-time data retrieval of 100 coins from the CoinStats API." /></a>
        <a href="https://github.com/lorena-rosati/REACTive-todo-list.git" target="_blank"><Project src={todoapp} title="To-Do List App" tools="JavaScript, React, Firebase (Cloud Firestore), Tailwind CSS" description="A dynamic to-do list app with CRUD functionality (create, read, update, and delete) that stores user data using Cloud Firestore database software." /></a>
        <a><Project src={bytelife} title="ByteLife" tools="Java, JPanel" description="An object-oriented life simulation game, based on the popular game Bitlife. Applies principles such as inheritance and polymorphism to enable the user to make customized choices at each age which alters their personal statistics and corresponding risk of death." /></a>
      </div>
    </div>
  );
};

export default Projects;