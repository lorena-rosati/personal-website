import React from 'react';
import bgimg from '../../src/assets/sitebackground.jpg'

const style= {
  container: "bg-cover",
  about: "py-[15%] px-[30%] items-center justify-center",
  intro: "text-3xl",
  namebigdiv: "flex flex-row",
  namediv: "pt-1 pb-7 pr-7 font-semibold",
  name: "text-7xl animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-[#ECECEC] pr-5 text-black",
  bio: "text-2xl"
}

const Home = () => {
  return (
    <div id="Home" className={style.container} style={{ backgroundImage: `url(${bgimg})`}}>
        <div className={style.about}>
            <h4 className={style.intro}>Hey, my name is...</h4>
            <div className={style.namebigdiv}><div className={style.namediv}><h1 className={style.name}>Lorena Rosati</h1></div><div></div></div>
            <p className={style.bio}>I'm a second-year Computer Engineering student at the University of Waterloo working as a Computer Programmer at Caribou Contests this summer. Welcome to my personal website! 👋</p>
        </div>
    </div>
  );
};

export default Home;