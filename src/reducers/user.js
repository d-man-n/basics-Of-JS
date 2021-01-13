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

export default user;