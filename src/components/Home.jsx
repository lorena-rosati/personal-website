import React from 'react';
import bgimg from '../../src/assets/sitebackground.jpg'
import {BsLinkedin} from "react-icons/bs";
import {BsGithub} from "react-icons/bs";
import {MdMail} from "react-icons/md";

const style= {
  container: "bg-cover",
  about: "py-[15%] px-[30%] items-center justify-center",
  intro: "text-3xl",
  namebigdiv: "flex flex-row",
  namediv: "pt-1 pb-7 pr-7 font-semibold",
  name: "text-7xl animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-[#ECECEC] pr-5 text-black",
  bio: "text-2xl",
  iconcontainer: "flex flex-row mt-[2%]",
  linkedin: "mr-[2%]",
  github: "mr-[2%]",
  email: ""
}

const Home = () => {
  return (
    <div id="Home" className={style.container} style={{ backgroundImage: `url(${bgimg})`}}>
        <div className={style.about}>
            <h4 className={style.intro}>Hey, my name is...</h4>
            <div className={style.namebigdiv}><div className={style.namediv}><h1 className={style.name}>Lorena Rosati</h1></div><div></div></div>
            <p className={style.bio}>I'm a second-year Computer Engineering student at the University of Waterloo working as a Computer Programmer at Caribou Contests this summer. Welcome to my personal website! 👋</p>
            <div className={style.iconcontainer}>
              <div className={style.linkedin}>
                <a href="https://www.linkedin.com/in/lorenarosati/" target="_blank"><BsLinkedin size={31} /> </a>
              </div>
              <div className={style.github}>
                <a href="https://github.com/lorena-rosati" target="_blank"><BsGithub size={32} /></a>
              </div>
              <div className={style.email}>
                <a href="mailto:lirosati@uwaterloo.ca" target="_blank"><MdMail size={36} /></a>
              </div>
            </div>
        </div>
    </div>
  );
};

export default Home;