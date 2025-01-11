import '../App.css';
import PageHero from '../components/PageHero';
import './discussions.css'
import React, { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'; // yarn add react-responsive-carousel
import Button from '../components/Button';
import discussionList from '../data/discussions.json'

function Discussions() {
  const [data, setData] = useState(discussionList);
  const [selectedSortValue, setSelectedValue] = useState('newest'); // Default by Newest

  const handleSortChange = (event) => {
    setSelectedValue(event.target.value);
    handleSort(event.target.value);
  };

  const handleSort = (key) => {
    const sortedData = [...data].sort((a, b) => {
      if (key === 'newest') {
        return b.created_at - a.created_at;
      } else if (key === 'oldest') {
        return a.created_at - b.created_at;
      } else if (key === 'popular') {
        return b.replies - a.replies;
      }
      return 0;
    });

    setData(sortedData);
  }

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

      <div class="discussionContainer">
        <div class="filterBar">
          <div class="sortBarSection">
            <p>Sort By: </p>
            <select name="filter" id="filter" value={selectedSortValue} onChange={handleSortChange}>
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
              <option value="popular">Popular</option>
            </select>
          </div>
          <div class="filterBarSection">
            <p>Filter By: </p>
            <select name="subject" id="subject">
              <option value="math">Subjects</option>
            </select>
            <select name="grades" id="grades">
              <option value="kinder">Grades</option>
            </select>
          </div>
        </div>
        <hr/>
        <div class="discussions">
          {data.map((item, index) => (
            <DiscussionItems
              title={item.title} 
              author={item.poster}
              created_at={item.created_at} 
              replies={item.replies}
            />
          ))}
        </div>
      </div>
    </>
  );
}

function DiscussionItems({title, author, created_at, replies}) {
  return (
    <>
    <div class="discussion">
      <div class="discussionHeader">
        <p>Posted by: {author}</p>
        <p>{created_at}</p>
      </div>
      <h2>{title}</h2>
      <p class="discussionReplies">Replies: {replies}</p>
    </div>
    </>
  );
}

export default Discussions;
