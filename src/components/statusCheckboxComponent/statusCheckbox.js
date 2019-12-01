import React from 'react';

const StatusCheckbox = (props) => {
    return ( <div><span>Status</span>
        <input type="checkbox" name="status-checkbox" className="status-checkbox" defaultChecked={props.status} onChange={() => props.onCheckboxStatusChanged(props.id)}/> </div>);
}
 
export default StatusCheckbox;