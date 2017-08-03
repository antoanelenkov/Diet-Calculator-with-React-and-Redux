import React from 'react';

export default (props) => {
    return (
        <div className="form-group">
            <label htmlFor={props.id}>{props.labelText}</label>
            <select className="form-control" data-id={props.id} onChange={props.handleOnChange}>
                {props.options.map(option => (<option key={option.value} value={option.value}>{option.name}</option>))}
            </select>
        </div>
    )
}