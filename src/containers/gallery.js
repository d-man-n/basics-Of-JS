import React from 'react';
import {connect} from 'react-redux';

import PhotoList from '../components/photo-list';
import MorePhoto from '../components/more-photo';

import {itemsFetchData, toggleLiked} from '../actions';

let Gallery = (props) => {
    const {photoStore, itemsFetchData, toggleLiked} = props;
    const {photos, page} = photoStore;

    return (
        <div className="container">
            <MorePhoto page={page} itemsFetchData={itemsFetchData} />
            <PhotoList photos={photos} toggleLiked={toggleLiked} itemsFetchData={itemsFetchData} page={page} />
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

Gallery = connect(
    mapStateToProps,
    mapDispatchToProps
)(Gallery);

export default Gallery;