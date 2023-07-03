import React from 'react';

const style = {
  project: "p-5 mr-7 mb-7 bg-white rounded-lg flex flex-col flex-initial h-[96%] hover:shadow-lg",
  imgcontainer: "w-[98%]",
  img: "object-cover",
  contentcontainer: "",
  title: "font-semibold text-2xl py-3",
  tools: "pb-2",
  toolsitems: "italic", 
  description: ""
}

const Project = (props) => {
  return (
    <div>
        <div className={style.project}>
            <div className={style.imgcontainer}><img src={props.src} className={style.img}/></div>
            <div className={style.contentcontainer}>
              <h1 className={style.title}>{props.title}</h1>
              <p className={style.tools}><b>Tools used:</b> <span className={style.toolsitems}>{props.tools}</span></p>
              <p className={style.description}>{props.description}</p>
            </div>
        </div>
    </div>
  );
};

export default Project;