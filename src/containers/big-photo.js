import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import BtnLike from '../components/btn-like';
import DescriptionPhoto from '../components/description-photo';
import {toggleLiked} from '../actions';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Logo from '../../img/logo.png';

 
const PhotoComponent = (props) => {
    const { match, photoStore, toggleLiked } = props;
    const { photos } = photoStore;
    const {
        params: { photoId }
      } = match;

    const photoInf = photos.find(el => el.id === photoId);

    return (
        <div className="big-photo__bg">
            <Link to="/" className="big-photo__bg_back"></Link>
            <div className="container big-photo">
                <div className="big-photo__control">
                    <DescriptionPhoto
                        userUrl = {photoInf.userUrl}
                        userImage = {photoInf.userImage}
                        userName = {photoInf.userName}
                        publishDate = {photoInf.publishDate}
                    />
                    <Link to="/" className="big-photo__back"></Link>
                </div>
                <LazyLoadImage 
                    // effect="blur"
                    src={photoInf.bigUrl} 
                    className="big-photo__img"
                    alt={photoInf.alt_description}
                    key={photoInf.id}
                    placeholder={<h1>Loading....</h1>}
                    height="580"
                    width={(photoInf.width*600)/photoInf.height}
                    placeholderSrc={photoInf.url}
                >
                </LazyLoadImage>
                <BtnLike 
                    id = {photoInf.id}
                    likes = {photoInf.likes}
                    liked_by_user = {photoInf.liked_by_user}
                    toggleLiked = {toggleLiked.bind(this, photoInf.id)}
                />
            </div>
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

const Photo = connect(
    mapStateToProps,
    mapDispatchToProps
)(PhotoComponent);

export default Photo;