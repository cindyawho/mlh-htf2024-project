import '../App.css';
import "./hero.css"
import "./Home.css"
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
    <main class="homeGrid">
      <div class="homeGrid-item">
        <img 
          src={require("../assets/homeIcons/homeDiscuss.png")}
          alt="2 quote bubbles"
        />
        <p>Discussions</p>
      </div>
      <div class="homeGrid-item">
        <img 
          src={require("../assets/homeIcons/homeResources.png")}
          alt="a stacks of documents"
        />
        <p>Resources</p>
      </div>
      <div class="homeGrid-item">
        <img 
          src={require("../assets/homeIcons/homeEvents.png")}
          alt="an icon of three figures cheering"
        />
        <p>Events</p>
      </div>
      <div class="homeGrid-item">
        <img 
          src={require("../assets/homeIcons/homeBlogs.png")}
          alt="an icon of a website"
        />
        <p>Blogs</p>
      </div>
    </main>
    </>
  );
}

export default Home;
