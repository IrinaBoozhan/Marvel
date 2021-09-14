import React, { useEffect, useState } from 'react';
import marvel from '../../units/getResource';
import './Series.css';
import Pagination from '../Pagination';

const Series = () => {


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
         const post = await marvel.getAllSeries(offset) //нужна общая функция
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
            {(offset < 12425) && <button className="offset" onClick={increment}>{offset + 100}+&#62;&#62;</button>}
         </div>
         <ul className='charactersList'>
            {currentPost.map(item =>
               <li li className='characterCard' >

                  <h3>{item.title} (id: {item.id})</h3>

                  <div className='info'>

                     <div className='imgInfo'>
                        <img src={`${item.thumbnail.path}.jpg`} alt={item.title} />
                     </div>

                     <div className='textInfo'>

                        <p><span>Description:</span> {item.description}</p>
                        <p><span>Start-End: </span> {item.endYear} - {item.endYear}</p>
                        <p><span>Type: </span> {item.type}</p>


                        <details><summary> <span>Characters: </span> {item.characters.available}</summary>{item.characters.items.map(it => <li>- {it.name}</li>)}</details>

                        <details><summary><span>Comics: </span> {item.comics.available}</summary>{item.comics.items.map(it => <li>- {it.name}</li>)}</details>

                        <details><summary><span>Events: </span> {item.events.available}</summary>{item.events.items.map(it => <li>- {it.name}</li>)}</details>

                        <details><summary><span>Stories: </span> {item.stories.available}</summary>{item.stories.items.map(it => <li>- {it.name}</li>)}</details>

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
            {(offset < 12425) && <button className="offset" onClick={increment}>{offset + 100}+&#62;&#62;</button>}
         </div>
      </div>
   )
}

export default Series;