import React from 'react';
import * as CaloriesCountType from '../../constants/CaloriesCountType';

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
                                        <th>Proteins</th>
                                        <th>Carbs</th>
                                        <th>Fats</th>
                                        <th>Calories</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {consumationByDate.consumations.map(consumation => {
                                        return (
                                            <tr key={consumation.id}>
                                                <td>{consumation.food.name}</td>
                                                <td>{consumation.quantity}
                                                    {consumation.food.type === CaloriesCountType.PER_HUNDRED_GRAMS ? " gr.":" item(s)"}
                                                </td>
                                                <td>{consumation.proteins}</td>
                                                <td>{consumation.carbs}</td>
                                                <td>{consumation.fats}</td>
                                                <td>{consumation.calories}</td>
                                                <td><input type="button" className="btn btn-primary" value="Edit" data-consumation-id={consumation.id} onClick={props.handleOnClick} /></td>
                                                <td><input type="button" className="btn btn-primary" value="Delete" data-consumation-id={consumation.id} onClick={props.handleOnClick} /></td>
                                            </tr>
                                        )
                                    })}

                                </tbody>
                                <tfoot>
                                   <tr>
                                        <th>Total:</th>
                                        <th></th>
                                        <th>{consumationByDate.totalProteins.toFixed(2)}({consumationByDate.percentProteins.toFixed(1)}%)</th>
                                        <th>{consumationByDate.totalCarbs.toFixed(2)}({consumationByDate.percentCarbs.toFixed(1)}%)</th>
                                        <th>{consumationByDate.totalFats.toFixed(2)}({consumationByDate.percentFats.toFixed(1)}%)</th>
                                        <th>{consumationByDate.totalCalories.toFixed(2)}</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                               </tfoot>
                            </table>
                        </div>
                        <hr/>
                    </div>
                )
            })}
        </div>
    );
}