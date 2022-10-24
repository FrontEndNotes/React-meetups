import { createContext, useState } from "react";


const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (meetup) => {},
    removeFavorite: (meetupId) => {},
    itemIsFavorite: (meetupId) => {}
});


export function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoriteHandler(meetup) {
        setUserFavorites((prevUserFavorites) => prevUserFavorites.concat(meetup));
    }
    function removeFavoriteHandler(meetupId) {
        setUserFavorites((prevUserFavorites) => prevUserFavorites.filter(item => item.id !== meetupId));
    }
    function itemIsFavoriteHandler(meetupId) {
        return userFavorites.some(item => item.id === meetupId)
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    };

    return (<FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>)
}


export default FavoritesContext;