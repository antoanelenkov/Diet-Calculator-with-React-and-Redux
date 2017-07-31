import React from 'react';

export default (props) => {
    return (
        <div className="form-group">
            <label htmlFor={props.id}>{props.labelText}</label>
            <select className="form-control" id={props.id}>
                {props.options.map(option => (<option value={option}>{option}</option>))}
            </select>
        </div>
    )
}