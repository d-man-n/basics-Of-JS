import React from 'react';
import {connect} from 'react-redux';

import PhotoList from '../components/photo-list';
import MorePhoto from '../components/more-photo';

import {itemsFetchData, toggleLiked} from '../actions';

const GalleryComponent = (props) => {
    const {photoStore, itemsFetchData, toggleLiked} = props;
    const {photos, page} = photoStore;

    return (
        <div className="container">
            <PhotoList photos={photos} toggleLiked={toggleLiked} itemsFetchData={itemsFetchData} page={page} />
            <MorePhoto page={page} itemsFetchData={itemsFetchData} />
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
        itemsFetchData: (page) => dispatch(itemsFetchData(page)),
        toggleLiked: (id) => dispatch(toggleLiked(id))
    }
}

const Gallery = connect(
    mapStateToProps,
    mapDispatchToProps
)(GalleryComponent);

export default Gallery;