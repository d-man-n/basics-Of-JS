import React from 'react';

const MorePhoto = ({page, itemsFetchData}) => {
    return (
        <div className="photo-list_more">
            <button
                className="photo-list_more_btn"
                onClick = {ev => {
                    itemsFetchData(++page)
                }}
            >
            Показать еще
            </button>
            <p>Эта кнопка больше не нужна, но удалить жаль ))</p>
        </div>
    );
}

export default MorePhoto;