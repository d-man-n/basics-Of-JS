import React from 'react';
import { Link } from 'react-router-dom';

import Masonry from 'react-masonry-css';
import BtnLike from './btn-like';
import DescriptionPhoto from './description-photo';

const PhotoList = (props) => {
    const {photos, toggleLiked} = props;
    const breakpointColumnsObj = {
        default: 4,
            1100: 3,
            700: 2,
            500: 1
        };

    return (
        <div className="photo-list">
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {
                photos.map(el => {
                    return (
                        <div key = {el.id} className = "photo-item">
                            <DescriptionPhoto
                                userUrl = {el.userUrl}
                                userImage = {el.userImage}
                                userName = {el.userName}
                                publishDate = {el.publishDate}
                            />
                            <Link to={{pathname: `/photo/${el.id}`}} >
                                <img 
                                    src={el.url} 
                                    className="photo-item__photo"
                                    alt={el.alt_description}
                                />
                            </Link>
                            <BtnLike 
                                id = {el.id}
                                likes = {el.likes}
                                liked_by_user = {el.liked_by_user}
                                toggleLiked = {toggleLiked.bind(this, el.id)}
                            />
                        </div>
                        );
                    })
                }
            </Masonry>
        </div>
    );
}

export default PhotoList;
