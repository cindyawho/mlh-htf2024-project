import "../App.css";
import "../componentPages/hero.css"
import React from "react";

function PageHero({title1, title2, subtitle1, subtitle2}) {
  return (
    <>
    <div class="heroClass">
        <div class='title'>
            <div class='titleText'>
            <h1>{title1} </h1>
            <h1>{title2}</h1>
            </div>
            <img 
                src={require("../assets/shareIdeas.png")}
                alt="a community with lightbulbs overhead"
                width="40vw"
                height="auto"
            />
        </div>
        <div class="subtitle">
            <img 
                src={require("../assets/laptop.png")}
                alt="an illustration of someone working on their laptop"
                width="40vw"
                height="auto"
            />
            <h2 class='tagline'>{subtitle1} <br/> {subtitle2}</h2>
        </div>
    </div>
    </>
  );
}

export default PageHero;