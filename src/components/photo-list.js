import React from 'react';
import { Link } from 'react-router-dom';

import Masonry from 'react-masonry-css';
import InfiniteScroll from 'react-infinite-scroller';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Logo from '../../img/logo.png';

import BtnLike from './btn-like';
import DescriptionPhoto from './description-photo';

const PhotoList = (props) => {
    let {photos, toggleLiked, page, itemsFetchData} = props;
    const breakpointColumnsObj = {
        default: 4,
            1350: 3,
            1100: 2,
            700: 1
        };

    return (
        <div className="photo-list">
            <InfiniteScroll
                loadMore={() => itemsFetchData(++page)}
                hasMore={true}
                loader={<h2>Loading...</h2>}
            >
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
                                        <LazyLoadImage 
                                            effect="blur"
                                            src={el.url} 
                                            className="photo-item__photo"
                                            alt={el.alt_description}
                                            key={el.id}
                                            placeholder={<h1>Loading....</h1>}
                                            width="276"
                                            height={(el.height*276)/el.width}
                                            placeholderSrc={Logo}
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
            </InfiniteScroll>
        </div>
    );
}

export default PhotoList;
