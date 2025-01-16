import '../App.css';
import './blog.css';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import PageHero from '../components/PageHero'
import blogListJSON from '../data/blogs.json'
/************************ SUPABASE INFORMATION ************************/
import { supabase } from '../supabase';
// See supabase.js and .env.local file for more information
/**********************************************************************/

function Blogs() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState(blogListJSON);
  /************************ SUPABASE INFORMATION ************************/
  const [supabaseBlogs, setSupabaseBlogs] = useState(blogListJSON);

  // Fetch blogs from Supabase
  useEffect(() => {
    async function fetchBlogs() {
    try {
        const { data, error } = await supabase.from("blogs").select("*"); 
        if (error) {
            console.error("Error fetching blogs:", error.message);
            return;
        }
        if (data) {
            setSupabaseBlogs(data);
            setFilteredItems(data);
            // console.log("TESTING in blogs.js: " + data);
        }
    } catch (error) {
        console.error("Error fetching blogs:", error.message);
    }
    }

    fetchBlogs();
}, []);
/***********************************************************************/

  const handleType = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const results = supabaseBlogs.filter((item) => {
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
      <div className="blogDiv">
        <div className="create">
          <h2>Create</h2>
          <div className="createButtons">
            <button>Private Journal</button>
            <Link to="/blogs/create">
              <button>Public Blog</button>
            </Link>
            
          </div>
        </div>
        <div className="read">
          <h2>Read</h2>
          
          <form onSubmit={handleSearch}>
            <input type="text" placeholder="Search Blogs" onChange={handleType}/>
            <button>Search</button>
          </form>
          <p>*Searches through our blog titles, authors, and summaries.*</p>

          <div className="readGrid">
            {filteredItems.map((blog, index) => (
              <BlogItems
                title={blog.title} 
                author={blog.author}
                blogURL={blog.blogURL} 
                summary={blog.summary}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function BlogItems({title, author, blogURL, summary, index}) {
  return (
    <>
    <div className="blogItem" id={index}>
      <a href={blogURL} target='_blank' rel='noopener noreferrer'>
        <div className="itemTitle">
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
