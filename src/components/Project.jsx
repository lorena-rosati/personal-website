import React from 'react';

const Project = (props) => {
  return (
    <div>
        <div className = "w-4/6">
            <img src= {props.src}></img>
            <h1 className = "font-bold pt-2">{props.title}</h1>
            <p>Tools used: {props.tools}</p>
            <p>{props.description}</p>
        </div>
    </div>
  );
};

export default Project;