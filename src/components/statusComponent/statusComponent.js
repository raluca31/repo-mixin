import React, { Component } from "react";
import DeleteButton from "../deleteBtnComponent/deleteBtn";
import StatusCheckbox from "../statusCheckboxComponent/statusCheckbox";
import EditComponent from "../editComponent/editComponent";

class StatusComponent extends Component {
  render() {
    return (
      <div className="status-container">
        <StatusCheckbox id={this.props.id} status={this.props.status} onCheckboxStatusChanged={this.props.onCheckboxStatusChanged}></StatusCheckbox>
        <DeleteButton onDeleteItem={this.props.onDeleteItem} id={this.props.id}></DeleteButton>
        <EditComponent id={this.props.id} onEditItem={this.props.onEditItem}></EditComponent>
      </div>
    );
  }
}

export default StatusComponent;
