import React from 'react';

export default (props) => {
    return (
        <div>
            <h3 className="centered">Consumations information</h3>
            {props.consumationsInfo.map(consumationByDate => {
                return (
                    <div key={consumationByDate.date}>
                        <div>Date: {consumationByDate.date}</div>
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Food</th>
                                        <th>Quantity</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {consumationByDate.consumations.map(consumation => {
                                        return (
                                            <tr key={consumation.id}>
                                                <td>{consumation.food.name}</td>
                                                <td>{consumation.quantity}</td>
                                                <td><input type="button" className="btn btn-primary" value="Edit" data-consumation-id={consumation.id} onClick={props.handleOnClick} /></td>
                                                <td><input type="button" className="btn btn-primary" value="Delete" data-consumation-id={consumation.id} onClick={props.handleOnClick} /></td>
                                            </tr>
                                        )
                                    })}

                                </tbody>
                            </table>
                        </div>
                        <hr/>
                    </div>
                )
            })}
        </div>
    );
}