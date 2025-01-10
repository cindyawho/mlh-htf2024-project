import '../App.css';
import './blog.css';
import React, { useState } from 'react';
import PageHero from '../components/PageHero'
import blogList from '../data/blogs.json'

function Blogs() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState(blogList);

  const handleType = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const results = blogList.filter((item) => {
      const titleMatch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
      const authorMatch = item.author.toLowerCase().includes(searchQuery.toLowerCase());
      const summaryMatch = item.summary.toLowerCase().includes(searchQuery.toLowerCase());

      return titleMatch || authorMatch || summaryMatch;
    });
    setFilteredItems(results);
    console.log(searchQuery);
  };

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
          
          <form onSubmit={handleSearch}>
            <input type="text" placeholder="Search Blogs" onChange={handleType}/>
            <button>Search</button>
          </form>
          <p>*Searches through our blog titles, authors, and summaries.*</p>

          <div class="readGrid">
            {filteredItems.map((blog, index) => (
              <BlogItems
                title={blog.title} 
                author={blog.author}
                blogURL={blog.blogURL} 
                summary={blog.summary}
                filteredItems={filteredItems}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function BlogItems({title, author, blogURL, summary, filteredItems}) {
  return (
    <>
    <div class="blogItem">
      <a href={blogURL} target='_blank' rel='noopener noreferrer'>
        <div class="itemTitle">
          <h3>{title}</h3>
          <h4>By: {author}</h4>
        </div>
        <p>{summary}</p>
      </a>      
    </div>
    </>
  );
}

export default Blogs;
