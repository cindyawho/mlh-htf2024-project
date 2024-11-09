import '../App.css';
import PageHero from '../components/PageHero';
import './discussions.css'
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'; // yarn add react-responsive-carousel
import Button from '../components/Button';

function Discussions() {
  return (
    <>
      <PageHero 
        title1={"Discussions"}
        title2={"Room"}
        subtitle1={"Supporting Every Step"}
        subtitle2={"of your Teaching Journey"}
      />
      <div class="communityHighlights">
        <h1>Community Highlights</h1>
        <Carousel
          showArrows={true} 
          showStatus={false} 
          showThumbs={false} 
          infiniteLoop={true} 
          autoPlay={true} 
          interval={5000}
        >
          <div className="carousel-item" key="1">
            <p>Monthly Check-in: What are some challenges you had this month?
            Share your stories and read what others went through here. 
            </p>
          </div>
          <div className="carousel-item" key="2">
            <p>Help!! How do I take care of myself when there's so much going on all the time?</p>
          </div>
          <div className="carousel-item" key="3">
            <p>I am struggling to help a student and I have tried everything. What classroom management secret haven't I tried??</p>
          </div>
        </Carousel>
      </div>
      <Button 
        text="Start a Discussion"
      />
      <img 
        src={require("../assets/temporary/DiscussionsOrganization.png")} 
        alt="static visual of discussions"
        class="tempDiscussions"
      />
    </>
  );
}

export default Discussions;
