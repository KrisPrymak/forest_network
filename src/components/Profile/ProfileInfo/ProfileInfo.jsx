import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "./../../commons/Preloader/Preloader";
import defaultAva from './../../../assets/images/userAvatar.png';
import ProfileStatusWithHook from "./ProfileStatus";
import { compose } from "redux";
import { withAuthNavigate } from "../../../hoc/withAuthNavigate";

const ProfileInfo = (props) => {

  if (props.profile == null) {
    return <Preloader />
  }

  
const onPhotoSelected = (e) => {
  if(e.target.files.length) {
    props.savePhoto(e.target.files[0])
  }
}

  return (
    <div>
      <div className={s.avaDesc}>
        <img className={s.ava} src={props.profile.photos.large || defaultAva} alt="avatar" />

        <div className={s.textInfo}>
        <ul className={s.contacts}>
          <div className={s.contactsTitle}>Contacts</div>
          {/* {Object.entries(props.profile.contacts).map(c => {
            if (c[1] !== null && c[1] !== '') {
                return <li><span className={s.socialsName}>{c[0]}</span>: {c[1]}</li>
            }
          })} */}
        </ul>
        <ProfileStatusWithHook status={props.status} updateStatus={props.updateStatus}/>
        {props.isOwner && <input type={'file'} onChange={onPhotoSelected}/>}
        </div>
      </div>
    </div>
  );
};

export default compose(withAuthNavigate(ProfileInfo))
