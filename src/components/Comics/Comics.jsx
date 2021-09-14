import React, { useEffect, useState } from 'react';
import marvel from '../../units/getResource';
import './Comics.css';
import Pagination from '../Pagination';



const Comics = () => {
   const [posts, setPosts] = useState([])
   const [currentPage, setCurrentPage] = useState(1)
   const [postsPerPage] = useState(20)

   //Пагинация

   const [offset, setOffset] = useState(0)

   function increment() {
      setOffset(offset + 100);
   }
   function decrement() {
      setOffset(offset - 100);
   }

   useEffect(() => {
      const getPosts = async () => {
         const post = await marvel.getAllComics(offset) //нужна общая функция
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
            {(offset < 49496) && <button className="offset" onClick={increment}>{offset + 100}+&#62;&#62;</button>}
         </div>
         <ul className='charactersList'>
            {currentPost.map(item =>
               <li className='characterCard' >

                  <h3>{item.title} (id:{item.id})</h3>

                  <div className='info'>

                     <div className='imgInfo'>
                        <img src={`${item.thumbnail.path}.jpg`} alt={item.title} />
                     </div>

                     <div className='textInfo'>

                        <p><span>Description:</span> {item.description}</p>
                        <p><span>Format: </span> {item.format}</p>
                        <p><span>Page count:</span>{item.pageCount}</p>

                        <details><summary><span>Characters:</span> {item.characters.available}</summary>{item.characters.items.map(it => <li>- {it.name}</li>)}</details>

                        <details><summary><span>Creators:</span> {item.creators.available}</summary>{item.creators.items.map(it => <li>- {it.name}</li>)}</details>

                        <details><summary><span>Series: </span>1</summary><li>{item.series.name}</li></details>

                        <details><summary><span>Stories: </span>{item.stories.available}</summary>{item.stories.items.map(it => <li>- {it.name}</li>)}</details>

                     </div>
                  </div>

               </li>)

            }

         </ul >
         <div className='wrapperPagination'>
            {(offset > 0) && <button className="offset" onClick={decrement}>&#60;&#60;{offset}</button>}
            <Pagination postsPerPage={postsPerPage}
               totalPosts={posts.length}
               paginate={paginate}
               offset={offset} />
            {(offset < 49496) && <button className="offset" onClick={increment}>{offset + 100}+&#62;&#62;</button>}
         </div>
      </div>

   )
}

export default Comics;