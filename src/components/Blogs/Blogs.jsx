import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";
import PropTypes from 'prop-types'; 

const Blogs = ({addToBookmarks, handleReadingTime}) => {
    const [blogs, setBlogs] = useState([])
    useEffect( ()=>{
        fetch('public.json')
        .then( res => res.json())
        .then( data => setBlogs(data))
    } ,[])
    return (
        <div className="md:w-2/3">
            <h2 className="text-4xl text-center my-2">Blogs: {blogs.length}</h2>
            {
                blogs.map( (blog) => <Blog
                 key={blog.id} 
                 addToBookmarks = {addToBookmarks}
                 handleReadingTime = {handleReadingTime}
                 blog={blog}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = { 
    addToBookmarks: PropTypes.func.isRequired,
    handleReadingTime: PropTypes.func.isRequired
}
export default Blogs;