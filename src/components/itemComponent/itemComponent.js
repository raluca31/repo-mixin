import React, { Component } from "react";
import StatusComponent from "../statusComponent/statusComponent";
import Description from "../descriptionComponent/description";
import "../itemComponent/itemComponent.css";

class ItemComponent extends Component {
  render() {
    return (
      <div className="item-container">
        <Description description={this.props.description}></Description>
        <StatusComponent status={this.props.status} onDeleteItem={this.props.onDeleteItem} id={this.props.id}></StatusComponent>
      </div>
    );
  }
}

export default ItemComponent;
