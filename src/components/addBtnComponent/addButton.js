import React, { Component } from "react";

class AddButton extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="button-container">
          <button
            className="btn-add btn btn-dark btn-sm"
            onClick={this.props.onAddItem}
          >
            Add
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default AddButton;
