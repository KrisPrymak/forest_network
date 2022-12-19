import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "./../../commons/Preloader/Preloader";
import defaultAva from './../../../assets/images/userAvatar.png';
import { ProfileStatus } from "./ProfileStatus";

const ProfileInfo = (props) => {
  if (props.profile == null) {
    return <Preloader />;
  }

  return (
    <div>
      {/* <div>
        <img
          className={s.landscape}
          src="http://hubertravel.pl/images/destynacje/Nowa-Zelandia.jpg"
          alt="landscape"
        />
      </div> */}
      <div className={s.avaDesc}>
        <img className={s.ava} src={props.profile.photos.large ? props.profile.photos.large : defaultAva} alt="avatar" />

        <div className={s.textInfo}>
        <ul className={s.contacts}>
          <div className={s.contactsTitle}>Contacts</div>
          {/* {Object.entries(props.profile.contacts).map(c => {
            if (c[1] !== null && c[1] !== '') {
                return <li><span className={s.socialsName}>{c[0]}</span>: {c[1]}</li>
            }
          })} */}
        </ul>
        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
