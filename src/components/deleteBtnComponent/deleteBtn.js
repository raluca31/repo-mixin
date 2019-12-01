import React from "react";

const DeleteButton = props => {
  return (
    <button
      type="button"
      className="btn-delete btn btn-outline-dark btn-sm "
      onClick={() => props.onDeleteItem(props.id)}
    >
      Delete &#x1F5D1;
    </button>
  );
};

export default DeleteButton;
