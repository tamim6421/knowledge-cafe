
import { FaBookmark } from 'react-icons/fa';
import PropTypes from 'prop-types'; 
const Blog = ({blog, addToBookmarks, handleReadingTime}) => {
    // console.log(blog)
    const {title, id, cover, author, author_img, posted_date, reading_time, hashtags} = blog
    return (
        <div className='mb-20 space-y-2'>
            <img className='w-full h-72' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between mt-3'>
                <div className='flex gap-5 mt-1 my-3 items-center'>
                    <img className='w-14 rounded-full' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span> {reading_time} min read </span>
                    <button onClick={() =>addToBookmarks(blog)}
                     className='ml-2 text-xl text-red-500'> <FaBookmark></FaBookmark> </button>
                </div>
            </div>
           <h3 className='text-2xl font-semibold'>{title}</h3>
           <p>
            {
                hashtags.map( (hash, idx)  => <span key={idx}> <a href="" > #{hash} </a> </span>)
            }
           </p>
           <button
           onClick={() =>handleReadingTime(reading_time, id)}
            className='text-purple-800 underline'>mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    addToBookmarks: PropTypes.func.isRequired,
    handleReadingTime: PropTypes.func.isRequired
}
export default Blog;