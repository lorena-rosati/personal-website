import React from 'react';

const style= {
  container: "",
  form: "flex flex-col px-28 items-center justify-center",
  title: "text-4xl font-semibold inline pt-16 pb-4 text-black",
  form2: " flex flex-col w-[45%]",
  infocontainer: "m-0",
  name: "p-2 bg-transparent border-2 rounded-md border-[#ECECEC] mr-[2%] w-[49%]",
  email: "p-2 my-4 bg-transparent border-2 rounded-md border-[#ECECEC] w-[49%]",
  msg: "p-2 mb-4 bg-transparent border-2 rounded-md border-[#ECECEC]",
  submit: "bg-[#ECECEC] text-black font-semibold text-xl hover:bg-[#f6f6f6] hover:text-black rounded-md p-3 w-[15%] mb-12 border-2 border-[#ECECEC]"
}

const Contact = () => {
  return (
    <div id = "Contact" className={style.container}>
            <form action = "https://getform.io/f/ecf62dd5-557f-4f87-a5b2-37a25af131e3" method = "POST" className = {style.form}>
                <h2 className = {style.title}>Contact Me</h2>
                <div className={style.form2}>
                  <div className={style.infocontainer}>
                    <input className = {style.name} type = "text" name = "name" placeholder = "Your Name"></input>
                    <input className = {style.email} type = "text" name = "email" placeholder = "Your Email"></input>
                  </div>
                  <textarea className = {style.msg} rows = "10" name = "message"   placeholder = "Your Message"></textarea>
                </div>
                <button className = {style.submit}>Send Message</button>
            </form>
        <div>

        </div>
    </div>
  );
};

export default Contact;