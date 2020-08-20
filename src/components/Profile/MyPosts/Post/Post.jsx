import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (

        <div className={s.item}>
            {props.message}
            <div className={s.likecount}>
                <button className={s.likeBtn}>like</button>
                {props.likesCount}
            </div>

        </div>

    );
}

export default Post;