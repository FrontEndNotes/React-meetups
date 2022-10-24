import { useContext } from 'react';

import FavoritesContext from '../../store/favorites-context';
import Card from '../ui/Card';
import classes from './MeetupItem.module.css';

function MeetupItem(props) {
    const {meetup} = props;

    const favoritesContext = useContext(FavoritesContext);
    const itemIsFavorite = favoritesContext.itemIsFavorite(meetup.id);

    function toggleFavoriteStatusHandler() {
        if (itemIsFavorite) {
            favoritesContext.removeFavorite(meetup.id);
        } else {
            favoritesContext.addFavorite(meetup);
        }
    }

    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={meetup.image} alt={meetup.title}/>
                </div>
                
                <div className={classes.content}>
                    <h3>{meetup.title}</h3>
                    <address>{meetup.address}</address>
                    <p>{meetup.description}</p>
                </div>

                <div className={classes.actions}>
                    <button type="button" onClick={toggleFavoriteStatusHandler}>
                        {itemIsFavorite ? 'Remove from favorites' : 'Add to favorites'}
                    </button>
                </div>
            </Card>
        </li>
    );
}

export default MeetupItem;