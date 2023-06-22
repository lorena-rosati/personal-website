import React from 'react';

const style= {
  container: "bg-[#ECECEC]",
  form: "flex flex-col px-28",
  title: "text-4xl font-semibold inline pt-16 pb-4 text-black",
  infocontainer: "",
  name: "p-2 bg-transparent border-2 rounded-md border-blue-700 mr-7",
  email: "p-2 my-4 bg-transparent border-2 rounded-md border-blue-700 mr-7",
  msg: "p-2 my-4 bg-transparent border-2 rounded-md border-blue-700 mr-7 mt-2",
  submit: "bg-white text-black text-semibold hover:bg-white hover:text-black rounded-full p-3 w-1/6 mb-12"
}

const Contact = () => {
  return (
    <div id = "Contact" className={style.container}>
            <form action = "https://getform.io/f/ecf62dd5-557f-4f87-a5b2-37a25af131e3" method = "POST" className = {style.form}>
                <h2 className = {style.title}>Contact Me!</h2>
                <div className={style.infocontainer}>
                  <input className = {style.name} type = "text" name = "name" placeholder = "Your Name"></input>
                  <input className = {style.email} type = "text" name = "email" placeholder = "Your Email"></input>
                </div>
                <textarea className = {style.msg} rows = "10" name = "message"   placeholder = "Your Message"></textarea>
                <button className = {style.submit}>Get in Touch</button>
            </form>
        <div>

        </div>
    </div>
  );
};

export default Contact;