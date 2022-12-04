import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css'

const Profile = () => {
    return (
        <div className={s.profile}>
            <div>
                <img className={s.landscape} src="http://hubertravel.pl/images/destynacje/Nowa-Zelandia.jpg" alt="landscape" />
            </div>
            <div className={s.avaDesc}>ava + description</div>
            <MyPosts />
        </div>
    );
};

export default Profile;