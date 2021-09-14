import React, { useEffect, useState } from 'react';
import marvel from '../../units/getResource';
import './Stories.css';
import Pagination from '../Pagination';

const Stories = () => {


   const [posts, setPosts] = useState([])
   const [currentPage, setCurrentPage] = useState(1)
   const [postsPerPage] = useState(20)

   //Пагинация

   //загрузка +100
   const [offset, setOffset] = useState(0)

   function increment() {
      setOffset(offset + 100);
   }
   function decrement() {
      setOffset(offset - 100);
   }

   useEffect(() => {
      const getPosts = async () => {
         const post = await marvel.getAllStories(offset)
         setPosts(post)
      }
      getPosts()
   }, [offset])


   const lastPostIndex = currentPage * postsPerPage;
   const firstPostIndex = lastPostIndex - postsPerPage;
   const currentPost = posts.slice(firstPostIndex, lastPostIndex)


   const paginate = (pageNumber) => { setCurrentPage(pageNumber) }




   return (
      <div>
         <div className='wrapperPagination'>
            {(offset > 0) && <button className="offset" onClick={decrement}>&#60;&#60;{offset}</button>}
            <Pagination postsPerPage={postsPerPage}
               totalPosts={posts.length}
               paginate={paginate}
               offset={offset} />
            {(offset < 115203) && <button className="offset" onClick={increment}>{offset + 100}+&#62;&#62;</button>}
         </div>
         <ul className='charactersList'>

            {currentPost.map(item =>
               <li className='characterCard storyCard' >

                  <h3>{item.title} (id: {item.id})</h3>

                  <div className='storyInfo'>

                     <p><span>Type: </span> {item.type}</p>

                     <p><span>Original issu: </span> {item.originalIssue.name}</p>

                     <p>{item.comics.items.map(it => <li><span>Comics: </span>{it.name}</li>)}</p>

                     <p>{item.series.items.map(it => <li><span>Series: </span>{it.name}</li>)}</p>

                     <details><summary><span>Creators: </span> {item.creators.available}</summary>{item.creators.items.map(it => <li>- {it.role} {it.name}</li>)}</details>

                  </div >
               </li >)



            }

         </ul >
         <div className='wrapperPagination'>
            {(offset > 0) && <button className="offset" onClick={decrement}>&#60;&#60;{offset}</button>}
            <Pagination postsPerPage={postsPerPage}
               totalPosts={posts.length}
               paginate={paginate}
               offset={offset} />
            {(offset < 115203) && <button className="offset" onClick={increment}>{offset + 100}+&#62;&#62;</button>}
         </div>
      </div>
   )
}

export default Stories;