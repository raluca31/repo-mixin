import React, { Component } from "react";
import StatusComponent from "../statusComponent/statusComponent";
import Description from "../descriptionComponent/description";
import "../itemComponent/itemComponent.css";

class ItemComponent extends Component {
  render() {
    return (
      <div className="item-container ihover">
        <Description
          description={this.props.description}
          inEditing={this.props.inEditing}
          editedItemId={this.props.editedItemId}
          onEditItem={this.props.onEditItem}
          onTextChanged={this.props.onTextChanged}
        ></Description>
        <StatusComponent
          status={this.props.status}
          onDeleteItem={this.props.onDeleteItem}
          id={this.props.id}
          onCheckboxStatusChanged={this.props.onCheckboxStatusChanged}
          onEditItem={this.props.onEditItem}
          inEditing={this.props.inEditing}
        ></StatusComponent>
      </div>
    );
  }
}

export default ItemComponent;
