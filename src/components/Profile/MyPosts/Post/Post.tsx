import React from 'react';
//@ts-ignore
import s from './Post.module.css';

type PropsType = {
    message: string
    likesCount: number
}

const Post: React.FC<PropsType> = ({message, likesCount}) => {
    return (
        <div className={s.post}>
            <img className={s.ava} src="https://cdn-icons-png.flaticon.com/512/906/906517.png" alt="ava" />
            {message}
            <div className={s.likes}>Likes
                <span className={s.likesCount}>{likesCount}</span>
            </div>
        </div>
    );
};

export default Post;