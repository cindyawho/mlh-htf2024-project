import '../App.css';
import './events.css'
import React from "react";
import PageHero from '../components/PageHero';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'; // yarn add react-responsive-carousel
import eventList from '../data/events.json'

function Events() {
  return (
    <>
      <PageHero 
        title1={"Upcoming"}
        title2={"Events"}
        subtitle1={"Building Connections Beyond"}
        subtitle2={"the Classroom"}
      />

      <div class="eventHighlights">
        <Carousel
          showArrows={true} 
          showStatus={false} 
          showThumbs={false} 
          infiniteLoop={true} 
          autoPlay={true} 
          interval={5000}
        >
          {eventList.map((event, index) => (
            <>
            <div className="carousel-item" key={index}>
              <h2>{event.title}</h2>
              <div class="carouselInfo">
                <h3>{event.date}</h3>
                <h4>Hosted By {event.host}</h4>
              </div>
              <p>{event.details}</p>
              <button>Register Today!</button>
            </div>
            </>
          ))}
        </Carousel>
      </div>
    </>
  );
}

export default Events;
