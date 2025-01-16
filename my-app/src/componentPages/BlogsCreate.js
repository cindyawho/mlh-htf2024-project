import '../App.css';
import './blog.css';
import React, { useState, useEffect } from 'react';
/************************ SUPABASE INFORMATION ************************/
import { supabase } from '../supabase';
// See supabase.js and .env.local file for more information
/**********************************************************************/

function BlogsCreate() {

    return (
        <>
        <div className='createBlogDiv'>
            <h2>Create a Blog</h2>
            <form className='createBlogs'>
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