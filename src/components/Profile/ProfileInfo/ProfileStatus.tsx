import React, { ChangeEvent, useEffect, useState } from "react";
import { StatusType } from "../../../types";

type PropsType = {
  status: StatusType
  updateStatus: (localStatus: string) => void
}

const ProfileStatusWithHook: React.FC<PropsType> = ({status, updateStatus}) => {
  let [editMode, setEditMode] = useState(false);
  let [localStatus, setLocalStatus] = useState(status);

  useEffect(() => {
    setLocalStatus(status)
  }, [status])

  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLocalStatus(e.currentTarget.value)
  }

  const deactivateMode = () => {
    setEditMode(false);
    updateStatus(localStatus)
  }

  const activateMode = () => {
    setEditMode(true);
  }

  return (
    <div>
        {editMode ? (
          <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateMode} value={localStatus} />
        ) : (
          <span onDoubleClick={activateMode}>{status || '_-_-_-_-_'}</span>
        )}
      </div>
  )
}

export default ProfileStatusWithHook;

//   componentDidUpdate = (prevProps, prevState) => {
//     if (prevProps.status !== this.props.status) {
//       this.setState({
//         status: this.props.status,
//       })
//     }
//   }
