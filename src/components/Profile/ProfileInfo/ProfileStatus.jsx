import React from "react";

export class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  };

  activateMode = (any) => {
    this.setState({
        editMode: any,
    })
  }

  render() {
    return (
      <div>
        {this.state.editMode ? (
          <input autoFocus={true} onBlur={() => {this.activateMode(false)}} value={this.props.status} />
        ) : (
          <span onDoubleClick={() => {this.activateMode(true)}}>{this.props.status}</span>
        )}
      </div>
    );
  }
}
