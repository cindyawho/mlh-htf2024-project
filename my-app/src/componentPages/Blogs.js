import '../App.css';
import './blog.css';
import React from "react";
import PageHero from '../components/PageHero'
import blogList from '../data/blogs.json'

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
            {blogList.map((blog, index) => (
              <BlogItems
                title={blog.title} 
                author={blog.author}
                blogURL={blog.blogURL} 
                summary={blog.summary}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function BlogItems({title, author, blogURL, summary}) {
  return (
    <>
    <div class="blogItem">
      <a href={blogURL} target='_blank' rel='noopener noreferrer'>
        <div class="itemTitle">
          <h3>{title}</h3>
          <h4>{author}</h4>
        </div>
        <p>{summary}</p>
      </a>      
    </div>
    </>
  );
}

export default Blogs;
