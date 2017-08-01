import React from 'react';

export default (props) => {
    return (
        <div className="form-group">
            <label htmlFor={props.id}>{props.labelName}:</label>
            <input type={props.type} className="form-control" data-id={props.id} onChange={props.handleOnChange}/>
        </div>
    )
}