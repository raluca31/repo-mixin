import React, { Component } from "react";
import AddButton from "../addBtnComponent/addButton";
import ItemsComponent from "../itemsComponent/itemsComponent";

class MainComponent extends Component {
  render() {
    return (
      <div className="main-container">
        <AddButton onAddItem={this.props.onAddItem} />
        {this.props.showForm ? (
          <div className="item-container">
            <form onSubmit={this.props.onSubmit}>
              <div className="form-group form-inline">
                <label>Add description: </label>
                <input
                  type="text"
                  defaultValue=""
                  onChange={this.props.onDescriptionChange}
                  className="form-control"
                />

                <input
                  type="submit"
                  value="Add ToDo"
                  className="btn btn-outline-success btn-sm"
                />
              </div>
            </form>
          </div>
        ) : (
          " "
        )}
        <ItemsComponent
          items={this.props.items}
          onDeleteItem={this.props.onDeleteItem}
          onCheckboxStatusChanged={this.props.onCheckboxStatusChanged}
          onEditItem={this.props.onEditItem}
          inEditing={this.props.inEditing}
          editedItemId={this.props.editedItemId}
          onTextChanged={this.props.onTextChanged}
        ></ItemsComponent>
      </div>
    );
  }
}

export default MainComponent;
