import React, { ChangeEvent } from "react";
//@ts-ignore
import s from "./ProfileInfo.module.css";
import Preloader from "../../commons/Preloader/Preloader";
//@ts-ignore
import defaultAva from './../../../assets/images/userAvatar.png';
import ProfileStatusWithHook from "./ProfileStatus";
import { compose } from "redux";
import { withAuthNavigate } from "../../../hoc/withAuthNavigate";
import { ProfileType, StatusType } from "../../../types";

type PropsType = {
  profile: ProfileType
  status: StatusType
  updateStatus: () => void
  isOwner: boolean
  savePhoto: (file: string) => void
}

const ProfileInfo: React.FC<PropsType> = ({profile, status, updateStatus, isOwner, savePhoto}) => {

  if (profile == null) {
    return <Preloader />
  }

  
const onPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
  //@ts-ignore
  if(e.target.files.length) {
    //@ts-ignore
    savePhoto(e.target.files[0])
  }
}

  return (
    <div>
      <div className={s.avaDesc}>
        <img className={s.ava} src={profile.photos.large || defaultAva} alt="avatar" />

        <div className={s.textInfo}>
        <ul className={s.contacts}>
          <div className={s.contactsTitle}>Contacts</div>
          {/* {Object.entries(props.profile.contacts).map(c => {
            if (c[1] !== null && c[1] !== '') {
                return <li><span className={s.socialsName}>{c[0]}</span>: {c[1]}</li>
            }
          })} */}
        </ul>
        <ProfileStatusWithHook status={status} updateStatus={updateStatus}/>
        {isOwner && <input type={'file'} onChange={onPhotoSelected}/>}
        </div>
      </div>
    </div>
  );
};

export default compose(withAuthNavigate(ProfileInfo))
