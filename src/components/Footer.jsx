import React from 'react';

const style= {
    footer: "bg-[#f6f6f6]",
    container: "pl-[5%] py-[1%]",
    text: "font-semibold text-xl"
}

const Footer = () => {
  return (
    <div id = "Footer" className={style.footer}>
        <div className={style.container}><h1 className={style.text}>Copyright © 2023 Lorena Rosati</h1></div>
    </div>
  );
};

export default Footer;