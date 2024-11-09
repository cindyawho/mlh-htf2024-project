import '../App.css';
import "./hero.css"
import React from "react";

function Home() {
  return (
    <>
    <header className="App-header">
      <div class='title'>
        <div class='titleText'>
          <h2>Welcome to the</h2>
          <h1>Educator Lounge</h1>
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
        <h2 class='tagline'>Tools, Ideas, and Community <br/> for Today's Teachers</h2>
      </div>
    </header>
    <main>

    </main>
    </>
  );
}

export default Home;
