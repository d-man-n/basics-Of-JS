import React from 'react';

const DescriptionPhoto = (props) => {
    const textMonth = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];

    let publishDate = (newDate) => {
        let pd = new Date(newDate);
        return `${pd.getDate()} ${textMonth[(pd.getMonth()-1)]} ${pd.getFullYear()}`;
    }

    return (
        <div className="photo-item__description">
            <a href={props.userUrl} className="photo-item__user" target="_blank">
                <img src={props.userImage} className="photo-item__user_img"/>
                {props.userName}
            </a>
            <p className="photo-item__date">
                {publishDate(props.publishDate)}
            </p>
        </div>
    );
}

export default DescriptionPhoto;