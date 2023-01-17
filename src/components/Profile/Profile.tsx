import React from "react";
import { ProfileType, StatusType } from "../../types";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type PropsType = {
  profile: ProfileType | null
  status: StatusType
  updateStatus: () => void
  isOwner: boolean
  savePhoto: () => void
}

const Profile: React.FC<PropsType> = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
  return (
    <div>
      <ProfileInfo profile={profile} status={status}
        updateStatus={updateStatus} isOwner={isOwner} savePhoto={savePhoto} />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
