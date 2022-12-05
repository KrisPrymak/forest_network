import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.post}>
            <img className={s.ava} src="https://cdn-icons-png.flaticon.com/512/906/906517.png" alt="ava" />
            {props.message}
            <div className={s.likes}>Likes
                <span className={s.likesCount}>{props.likesCount}</span>
            </div>
        </div>
    );
};

export default Post;