import React from 'react';
import {Link} from 'react-scroll';

const style = {
    bar: "flex flex-wrap items-center justify-between p-[1%] pl-[3%] w-full bg-[#f6f6f6] m-0 sticky top-0 bg-opacity-75 backdrop-blur-sm",
    name: "text-4xl font-semibold text-black cursor-pointer my-0",
    tabs: "flex flex-col mt-4 md:flex-row md:space-x-9 md:mt-0 md:text-md md:font-medium mx-4 cursor-pointer",
    tab: "hover:underline hover:rounded-lg px-4 hover:text-black duration-100 text-black text-2xl"
}

const NavBar = () => {
    return (
        <nav className={style.bar}>
            <div>
                <Link  className={style.name} to="Home" spy={true} smooth={true}>Lorena Rosati</Link>
            </div>
            <div>
                <ul className={style.tabs}>
                    <Link className={style.tab} to="Projects" spy={true} smooth={true}>Projects</Link>
                    <a href="https://docs.google.com/document/d/1w0sITv6Hm64dHjv3vwC_0_O-vIUth179MkonK5Otzag/edit?usp=sharing" className={style.tab} target="_blank">Resume</a>
                    <Link className={style.tab} to="Contact" spy={true} smooth={true}>Contact Me</Link>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;