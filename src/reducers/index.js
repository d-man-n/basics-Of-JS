import { unsplash } from '../components/auth';

const page = (state = 0, action) => {
    switch(action.type) {
        case 'MORE_PHOTO':
            return ++state;

        default:
            return state;
    }
  } 

const user = (state = {}, action) => {
switch(action.type) {
    case 'CURRENT_USER':
        state = {
            id: action.user.id,
            userName: action.user.name, 
            userUrl: action.user.links.html,
            userImage: action.user.profile_image.small
        }
        return state;

    default:
        return state;
    }
} 

const photos = (state = [], action) => {
    switch(action.type) {
        case 'MORE_PHOTO':
            for (let i = 0; i < action.items.length; i++) {
                state = [
                    ...state,
                    {
                        id: action.items[i].id, 
                        width: action.items[i].width,
                        height: action.items[i].height,
                        url: action.items[i].urls.small, 
                        bigUrl: action.items[i].urls.full, 
                        alt_description: action.items[i].alt_description,
                        publishDate: action.items[i].created_at, 
                        likes: action.items[i].likes, 
                        liked_by_user: action.items[i].liked_by_user, 
                        userName: action.items[i].user.name, 
                        userUrl: action.items[i].user.links.html,
                        userImage: action.items[i].user.profile_image.small
                    }
                ];
            }
            return state;

        case 'TOGGLE_LIKED':
            return state.map(el => { 
                if (action.id === el.id) {
                    let likes = (el.liked_by_user) ? --el.likes : ++el.likes;
                    
                    unsplash.auth.setBearerToken( JSON.parse(localStorage.getItem('Token')).access_token );
                    if (el.liked_by_user) {
                        unsplash.photos.unlikePhoto(el.id);
                    }
                    else {
                        unsplash.photos.likePhoto(el.id);
                    }
                    return {
                        id: el.id, 
                        width: el.width,
                        height: el.height,
                        url: el.url, 
                        bigUrl: el.bigUrl, 
                        alt_description: el.alt_description,
                        publishDate: el.publishDate, 
                        likes: likes, 
                        liked_by_user: !el.liked_by_user, 
                        userName: el.userName, 
                        userUrl: el.userUrl,
                        userImage: el.userImage
                    }
                }
                return el;
            })

        default:
            return state;
    }
}

const photoState = (state = {}, action) => { 
    return { 
        page: page(state.page, action), 
        photos: photos(state.photos, action), 
        user: user(state.user, action)
    } 
}

export default photoState;