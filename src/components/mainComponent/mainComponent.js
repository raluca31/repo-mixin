import React, { Component } from "react";
import AddButton from "../addBtnComponent/addButton";
import ItemsComponent from "../itemsComponent/itemsComponent";

class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: 1, description: "Description1", status: false },
        { id: 2, description: "Description2", status: false },
        { id: 3, description: "Description3", status: true },
        { id: 4, description: "Description4", status: false },
        { id: 5, description: "Description5", status: false }
      ]
    };
  }

  handleDeleteItem = itemId => {
    console.log(itemId);
    const items = this.state.items.filter(i => i.id !== itemId);
    this.setState({ items });
  };
  render() {
    return (
      <div className="main-container">
        <AddButton></AddButton>
        <ItemsComponent
          items={this.state.items}
          onDeleteItem={this.handleDeleteItem}
        ></ItemsComponent>
      </div>
    );
  }
}

export default MainComponent;
