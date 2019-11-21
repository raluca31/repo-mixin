import React, { Component } from "react";
import DeleteButton from "../deleteBtnComponent/deleteBtn";
import StatusCheckbox from "../statusCheckboxComponent/statusCheckbox";

class StatusComponent extends Component {
  render() {
    return (
      <div className="status-container">
        <StatusCheckbox status={this.props.status}></StatusCheckbox>
        <DeleteButton onDeleteItem={this.props.onDeleteItem} id={this.props.id}></DeleteButton>
      </div>
    );
  }
}

export default StatusComponent;
