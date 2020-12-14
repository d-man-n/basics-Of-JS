import { unsplash } from '../components/auth';
import {toJson} from 'unsplash-js';

export const morePhoto = (items, page) => {
    return {
        type: 'MORE_PHOTO',
        items,
        page
    }
}

export const toggleLiked = (id) => {
    return {
        type: 'TOGGLE_LIKED',
        id
    }
}

export const currentUser = (user) => {
    return {
        type: 'CURRENT_USER',
        user
    }
}

export function itemsFetchData(page) {
    return (dispatch) => {
        unsplash.auth.setBearerToken( JSON.parse(localStorage.getItem('Token')).access_token );
        unsplash.photos.listPhotos(page, 10, "latest")
            .then(toJson)
            .then(json => {
                dispatch(morePhoto(json, page))
            });
    };
}

export function userFetchData() {
    return (dispatch) => {
        unsplash.auth.setBearerToken( JSON.parse(localStorage.getItem('Token')).access_token );
        unsplash.currentUser.profile()
            .then(toJson)
            .then(json => {
                dispatch(currentUser(json))
            });
    };
}