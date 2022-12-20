import React, { useState } from "react";

const ProfileStatusWithHook = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  }

  const deactivateMode = () => {
    setEditMode(false);
    props.updateStatus(status)
  }

  const activateMode = () => {
    setEditMode(true);
  }

  return (
    <div>
        {editMode ? (
          <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateMode} value={status} />
        ) : (
          <span onDoubleClick={activateMode}>{props.status || '_-_-_-_-_'}</span>
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
