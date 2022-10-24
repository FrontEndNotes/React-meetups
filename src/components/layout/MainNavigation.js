import { useContext } from "react";
import { Link } from "react-router-dom";

import FavoritesContext from "../../store/favorites-context";
import classes from './MainNavigation.module.css';

function MainNavigation() {
    const favContext = useContext(FavoritesContext);

    return (
      <header className={classes.header}>
          <div className={classes.logo}>React Meetups</div>
              <nav>
                <ul>
                    <li>
                        <Link to="/">Meetups</Link>
                    </li>
                    <li>
                        <Link to="/favorites">
                            My Favorites
                            <span className={classes.badge}>
                                {favContext.totalFavorites}
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/new-meetup">New meetup</Link>
                    </li>
                </ul>
              </nav>
      </header>
    );
  }
  
  export default MainNavigation;
  