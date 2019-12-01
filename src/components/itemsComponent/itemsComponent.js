import React, { Component } from "react";
import ItemComponent from "../itemComponent/itemComponent";

class ItemsComponent extends Component {
  render() {
    return (
      <div className="content-container">
        {this.props.items.map(item => (
          <ItemComponent
            key={item._id}
            id={item._id}
            description={item.text}
            status={item.checked}
            onDeleteItem={this.props.onDeleteItem}
            onCheckboxStatusChanged={this.props.onCheckboxStatusChanged}
            onEditItem={this.props.onEditItem}
            inEditing={item._id === this.props.editedItemId ? this.props.inEditing : false}
            editedItemId={this.props.editedItemId}
            onTextChanged={this.props.onTextChanged}
          ></ItemComponent>
        ))}
      </div>
    );
  }
}

export default ItemsComponent;
