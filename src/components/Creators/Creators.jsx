import React, { useEffect, useState } from 'react';
import marvel from '../../units/getResource';
import './Creators.css';
import Pagination from '../Pagination';

// let imgCharacter = `${getMarvelResource.data.results[1].thumbnail.path}.${getMarvelResource.data.results[1].thumbnail.extension}`;


const Creators = () => {
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
         const post = await marvel.getAllCreators(offset) //нужна общая функция
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
            {(offset < 5570) && <button className="offset" onClick={increment}>{offset + 100}+&#62;&#62;</button>}
         </div>
         <ul className='charactersList'>

            {currentPost.map(item =>
               <li li className='characterCard' >
                  <h3>{item.fullName} (id: {item.id})</h3>

                  <div className='info'>

                     <div className='imgInfo'>
                        <img src={`${item.thumbnail.path}.jpg`} alt={item.name} />
                     </div>

                     <div className='textInfo'>

                        <details><summary><span>Commics:</span> {item.comics.available}</summary>{item.comics.items.map(it => <li>- {it.name}</li>)}</details>

                        <details><summary><span>Events: </span>{item.events.available}</summary>{item.events.items.map(it => <li>- {it.name}</li>)}</details>

                        <details><summary><span>Series: </span>{item.series.available}</summary>{item.series.items.map(it => <li>- {it.name}</li>)}</details>

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
            {(offset < 5570) && <button className="offset" onClick={increment}>{offset + 100}+&#62;&#62;</button>}
         </div>
      </div>
   )
}

export default Creators;