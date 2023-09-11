

import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Booksmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)

  const addToBookmarks = (blog) =>{
    const newBookmark = [...bookmarks, blog]
    setBookmarks(newBookmark)
  }

  const handleReadingTime = (time)=>{
   setReadingTime( readingTime + time)
  }
  return (
    <>
    <div className='max-w-[1200px] mx-auto' >
    <Header></Header>
    <div className='md:flex'>
    <Blogs addToBookmarks= {addToBookmarks} handleReadingTime= {handleReadingTime}></Blogs>
    <Bookmarks bookmark = {bookmarks} readingTime = {readingTime}></Bookmarks>
    </div>
    
    </div>
      
    </>
  )
}

export default App
