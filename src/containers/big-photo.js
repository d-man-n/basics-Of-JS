import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import BtnLike from '../components/btn-like';
import DescriptionPhoto from '../components/description-photo';
import {toggleLiked} from '../actions';

 
let Photo = (props) => {
    const { match, photoStore, toggleLiked } = props;
    const { photos } = photoStore;
    const {
        params: { photoId }
      } = match;

    const photoInf = photos.find(el => el.id === photoId);

    return (
        <div className="container big-photo">
            <div className="big-photo__control">
                <DescriptionPhoto
                    userUrl = {photoInf.userUrl}
                    userImage = {photoInf.userImage}
                    userName = {photoInf.userName}
                    publishDate = {photoInf.publishDate}
                />
                <BtnLike 
                    id = {photoInf.id}
                    likes = {photoInf.likes}
                    liked_by_user = {photoInf.liked_by_user}
                    toggleLiked = {toggleLiked.bind(this, photoInf.id)}
                />
            </div>
            <img 
                src={photoInf.bigUrl} 
                alt={photoInf.alt_description}
                className="big-photo__img"
            />
            <Link to="/" className="big-photo__back">Назад</Link>
        </div>
    );
}

const mapStateToProps = (state) => {
    localStorage.setItem('store', JSON.stringify(state));
    return {
        photoStore: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleLiked: (id) => dispatch(toggleLiked(id))
    }
}

Photo = connect(
    mapStateToProps,
    mapDispatchToProps
)(Photo);

export default Photo;