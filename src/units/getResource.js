import { CHARACTERS, COMICS, SERIES, EVENTS, STORIES, CREATORS } from './constants';
import { config } from './config'

let itemList = [CHARACTERS, COMICS, SERIES, EVENTS, STORIES, CREATORS];


class MarvelServies {

   async getAllItems(item) {
      const res = await fetch(`http://gateway.marvel.com/v1/public/${item}}?offset=0&limit=100&ts=1&apikey=0b0803a2316ccbf89ded47f8000fccf4&hash=1006ba6ba4aa9b24eb1f60af0838bf9e`);
      const list = await res.json();
      const itemsList = list.data.results;

      return itemsList;
   }

   async getAllCharacters(offset) {


      const res = await fetch(`http://gateway.marvel.com/v1/public/characters?offset=${offset}&limit=100&ts=1&apikey=0b0803a2316ccbf89ded47f8000fccf4&hash=1006ba6ba4aa9b24eb1f60af0838bf9e`);
      const list = await res.json();
      const charactersList = list.data.results;
      return charactersList;
   }




   async getAllComics(offset) {

      const res = await
         fetch(`http://gateway.marvel.com/v1/public/${itemList[1]}?offset=${offset}&limit=100&ts=1&apikey=0b0803a2316ccbf89ded47f8000fccf4&hash=1006ba6ba4aa9b24eb1f60af0838bf9e`);
      const list = await res.json();
      const comicsList = list.data.results;
      return comicsList;
   }

   async getAllEvents(offset) {
      const res = await
         fetch(`http://gateway.marvel.com/v1/public/${itemList[3]}?offset=${offset}&limit=100&ts=1&apikey=0b0803a2316ccbf89ded47f8000fccf4&hash=1006ba6ba4aa9b24eb1f60af0838bf9e`);
      const list = await res.json();
      const eventsList = list.data.results;

      return eventsList;
   }

   async getAllSeries(offset) {
      const res = await
         fetch(`http://gateway.marvel.com/v1/public/${itemList[2]}?offset=${offset}&limit=100&ts=1&apikey=0b0803a2316ccbf89ded47f8000fccf4&hash=1006ba6ba4aa9b24eb1f60af0838bf9e`);
      const list = await res.json();
      const seriesList = list.data.results;
      return seriesList;
   }

   async getAllStories(offset) {
      const res = await
         fetch(`http://gateway.marvel.com/v1/public/${itemList[4]}?offset=${offset}&limit=100&ts=1&apikey=0b0803a2316ccbf89ded47f8000fccf4&hash=1006ba6ba4aa9b24eb1f60af0838bf9e`);
      const list = await res.json();

      const storiesList = list.data.results;
      return storiesList;
   }


   async getAllCreators(offset) {
      const res = await
         fetch(`http://gateway.marvel.com/v1/public/${itemList[5]}?offset=${offset}&limit=100&ts=1&apikey=0b0803a2316ccbf89ded47f8000fccf4&hash=1006ba6ba4aa9b24eb1f60af0838bf9e`);
      const list = await res.json();
      const creatorsList = list.data.results;

      return creatorsList;
   }


   async getCharacterById(props) {
      const res = await
         fetch(`http://gateway.marvel.com/v1/public/${itemList[0]}/${props.id}?ts=1&apikey=0b0803a2316ccbf89ded47f8000fccf4&hash=1006ba6ba4aa9b24eb1f60af0838bf9e`);
      const character = await res.json();
      return character;
   }




}

const marvel = new MarvelServies()
export default marvel;





