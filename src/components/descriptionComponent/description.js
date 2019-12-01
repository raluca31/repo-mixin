import React from "react";

class Description extends React.Component {
  state = {
    text: ""
  };

  onInputChanged = e => {
    this.setState({ text: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onTextChanged(this.props.editedItemId, this.state.text);
  };

  render() {
    return this.props.inEditing ? (
      <div className="description-container">
        <form onSubmit={this.onSubmit}>
          <div className="form-group form-inline">
            <input
              type="text"
              className="form-control"
              defaultValue={this.props.description}
              onChange={this.onInputChanged}
            />
            <div>
              <button
                className="btn btn-outline-dark btn-sm"
                onClick={() => this.props.onEditItem(this.props.editedItemId)}
              >
                Cancel
              </button>
            </div>
            <div>
              <button className="btn btn-outline-success btn-sm" type="submit">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    ) : (
      <div className="description-container">
        <span>{this.props.description}</span>
      </div>
    );
  }
}
export default Description;
