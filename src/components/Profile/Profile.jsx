import React from 'react';
import s from './Profile.module.css'

const Profile = () => {
    return (
        <div className={s.profile}>
            <div>
                <img className={s.landscape} src="https://assets.tradetracker.com/media/2021/09/Travel-interview-campspace-1200x500-1.jpg" alt="landscape" />
            </div>
            <div className={s.avaDesc}>ava + description</div>
            <div>
                my posts
                <div>
                    new posts
                </div>
                <div>
                    <div>
                        post1
                    </div>
                    <div>
                        post2
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;