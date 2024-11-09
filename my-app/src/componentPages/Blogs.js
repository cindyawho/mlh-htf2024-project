import '../App.css';
import './blog.css';
import React from "react";
import PageHero from '../components/PageHero'

function Blogs() {
  return (
    <>
      <PageHero 
        title1={"Blogs and"}
        title2={"Journals"}
        subtitle1={"Voices and Experiences"}
        subtitle2={"that Inspire"}
      />
      <div class="blogDiv">
        <div class="create">
          <h2>Create</h2>
          <div class="createButtons">
            <button>Private Journal</button>
            <button>Public Blog</button>
          </div>
        </div>
        <div class="read">
          <h2>Read</h2>
          <div class="readGrid">
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Blogs;
