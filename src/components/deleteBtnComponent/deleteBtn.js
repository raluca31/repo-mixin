import React, { Component } from "react";
import "../deleteBtnComponent/deleteBtn.css";

const DeleteButton = props => {
  return (
    <button type="button" className="btn-delete btn btn-outline-dark btn-sm " onClick={()=>props.onDeleteItem(props.id)}>
      Delete
    </button>
  );
};

export default DeleteButton;
