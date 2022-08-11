import React from "react";
import Links from "./Links"

function About(props) {
  if (!props.bio) {
    return (
      <div id="about">
        <h2>About Me</h2>
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
        <h3>Links</h3>
        <a href={props.github}>{props.github}</a>
        <a href={props.linkedin}>{props.linkedin}</a>
      </div>
    )
  }
  else {
    return (
      <div id="about">
        <h2>About Me</h2>
        <p>{props.bio}</p>
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
        <Links github={props.github} linkedin={props.linkedin} />
      </div>
    );
  }
}

export default About;
