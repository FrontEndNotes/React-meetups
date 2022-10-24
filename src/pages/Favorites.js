import { useContext } from "react";

import FavoritesContext from "../store/favorites-context";
import MeetupList from '../components/meetups/MeetupList';

function Favorites() {
    const favContext = useContext(FavoritesContext);
    const content = (favContext.totalFavorites === 0) ? <p>Nothing favorites yet</p> : <MeetupList meetups={favContext.favorites}/>;

    return (
      <section>
          <h1>My favorites</h1>
          { content }
      </section>
    );
  }
  
  export default Favorites;
  