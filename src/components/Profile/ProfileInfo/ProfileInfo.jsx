import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.landscape} src="http://hubertravel.pl/images/destynacje/Nowa-Zelandia.jpg" alt="landscape" />
            </div>
            <div className={s.avaDesc}>ava + description</div>
        </div>
    );
};

export default ProfileInfo;