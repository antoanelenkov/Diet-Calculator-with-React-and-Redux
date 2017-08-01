import React from 'react';

export default (props) => {
    return (
        <div>
            <h3 className="centered">Foods macronutient information</h3>
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Calories</th>
                            <th>Proteins</th>
                            <th>Carbs</th>
                            <th>Fats</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.foods.map(food => {
                            return (
                                <tr key={food.id}>
                                    <td>{food.name}</td>
                                    <td>{food.type}</td>
                                    <td>{food.calories}</td>
                                    <td>{food.proteins}</td>
                                    <td>{food.carbs}</td>
                                    <td>{food.fats}</td>
                                    <td><input type="button" className="btn btn-primary" value="Edit" data-food-id={food.id} onClick={props.handleOnClick} /></td>
                                    <td><input type="button" className="btn btn-primary" value="Delete" data-food-id={food.id} onClick={props.handleOnClick} /></td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
        </div>
    );
}