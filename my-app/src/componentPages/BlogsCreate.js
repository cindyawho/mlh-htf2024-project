import '../App.css';
import './blog.css';
import React, { useState, useEffect } from 'react';
/************************ SUPABASE INFORMATION ************************/
import { supabase } from '../supabase';
// See supabase.js and .env.local file for more information
/**********************************************************************/

function BlogsCreate() {
    const [blogAmount, setBlogAmount] = useState(100); //temporary number

    // Fetch blogs from Supabase to find out how many there are for IDs
      useEffect(() => {
        async function fetchBlogs() {
        try {
            const { data, error } = await supabase.from("blogs").select("id"); 
            if (error) {
                console.error("Error fetching blogs:", error.message);
                return;
            }
            if (data) {
                // console.log("TESTING in blogsCreate.js: " + data.length);
                setBlogAmount(data.length);
            }
        } catch (error) {
            console.error("Error fetching blogs:", error.message);
        }
        }
    
        fetchBlogs();
    }, []);

    function handleSubmit(event) {
        event.preventDefault();
        const created_at = new Date().toISOString();
        const id = blogAmount + 1;
        const title = event.target.elements.title.value;
        const author = event.target.elements.author.value;
        const blogURL = event.target.elements.blogURL.value;
        const summary = event.target.elements.summary.value;
        const newBlog = { id, created_at, title, author, blogURL, summary };
        // console.log(newBlog);
        event.target.reset();

        async function insertBlog() {
            try {
                const { data, error } = await supabase.from("blogs").insert([newBlog]);
                // console.log(newBlog);
                if (error) {
                    console.error("Error inserting blog:", error.message);
                    return;
                }
                console.log("Blog inserted successfully:", data);
            } catch (error) {
                console.error("Error inserting blog:", error.message);
            }
        }

        if (window.confirm("Please confirm that you would like to create a Public Blog.")) {
            insertBlog();
        } else {
            console.log("Blog creation cancelled.");
        }
    }

    return (
        <>
        <div className='createBlogDiv'>
            <h2>Create a Public Blog</h2>
            <form className='createBlogs' onSubmit={handleSubmit}>
                <div>
                    <label for="title">Title:</label>
                    <input type="text" id="title" name="title" required></input>
                    <br />
                </div>
                <div>
                    <label for="author">Author:</label>
                    <input type="text" id="author" name="author" required></input>
                    <br />
                </div>
                <div>
                    <label for="blogURL">Blog URL:</label>
                    <input type="text" id="blogURL" name="blogURL" required></input>
                    <br />
                </div>
                <div>
                    <label for="summary">Summary:</label>
                    <textarea id="summary" name="summary" rows="10" cols="38" required></textarea>
                    <br />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
        </>
    )
}

export default BlogsCreate;