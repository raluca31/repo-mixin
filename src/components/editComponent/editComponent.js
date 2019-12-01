import React from "react";

const EditComponent = props => {
  return (
    <button
      type="button"
      className="btn-delete btn btn-dark btn-sm "
      onClick={() => props.onEditItem(props.id)}
    >
      Edit &#x1F589; 
    </button>
  );
};

export default EditComponent;
