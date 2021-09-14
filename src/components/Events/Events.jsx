import React, { useEffect, useState } from 'react';
import marvel from '../../units/getResource';
import './Events.css';
import Pagination from '../Pagination';

const Events = () => {


   const [posts, setPosts] = useState([])
   const [currentPage, setCurrentPage] = useState(1)
   const [postsPerPage] = useState(20)

   //Пагинация

   const [offset, setOffset] = useState(0)


   useEffect(() => {
      const getPosts = async () => {
         const post = await marvel.getAllEvents(offset) //нужна общая функция
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
         <div className="wrapperPagination">
            <Pagination postsPerPage={postsPerPage}
               totalPosts={posts.length}
               paginate={paginate}
               offset={offset} />
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
                        <p><span>Modified:</span> {item.modified}</p>


                        <details><summary> <span>Characters: </span> {item.characters.available}</summary>{item.characters.items.map(it => <li>- {it.name}</li>)}</details>

                        <details><summary><span>Comics: </span> {item.comics.available}</summary>{item.comics.items.map(it => <li>- {it.name}</li>)}</details>

                        <details><summary><span>Series: </span> {item.series.available}</summary>{item.series.items.map(it => <li>- {it.name}</li>)}</details>

                        <details><summary><span>Stories: </span> {item.stories.available}</summary>{item.stories.items.map(it => <li>- {it.name}</li>)}</details>

                        <details><summary><span>Creators: </span> {item.creators.available}</summary>{item.creators.items.map(it => <li>- {it.role} {it.name}</li>)}</details>

                     </div>
                  </div>
               </li>)

            }

         </ul >
         <div className="wrapperPagination">
            <Pagination postsPerPage={postsPerPage}
               totalPosts={posts.length}
               paginate={paginate}
               offset={offset} />
         </div>
      </div>);

}

export default Events;