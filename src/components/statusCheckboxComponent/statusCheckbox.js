import React, { Component } from 'react';

const StatusCheckbox = (props) => {
    return ( <div><span>Status</span>
        <input type="checkbox" name="status-checkbox" className="status-checkbox" defaultChecked={props.status} /> </div>);
}
 
export default StatusCheckbox;