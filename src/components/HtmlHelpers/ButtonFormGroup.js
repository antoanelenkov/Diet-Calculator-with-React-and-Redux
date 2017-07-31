import React from 'react';

export default (props) => {
    return (
        <div className="form-group">
            <input type="button" value={props.value} className="form-control btn btn-primary"  onClick={props.handleOnSubmit} />
        </div>
    )
}