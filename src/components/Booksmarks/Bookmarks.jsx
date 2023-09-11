
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmark, readingTime}) => {
    return (
        <div className="md:w-1/3 bg-slate-100 ml-5 mt-3">
            <div>
                <h3 className='text-2xl text-center my-5 font-semibold text-purple-600 border border-red-200 p-3'>Reading Time: {readingTime}</h3>
            </div>
            <h3 className='text-2xl font-semibold border-2 text-center p-3'>Bookmarked Blogs: {bookmark.length}</h3>
            {
                bookmark.map( book=> <Bookmark key={book.id} bookmark={book}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes = {
    bookmark: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
}
export default Bookmarks;