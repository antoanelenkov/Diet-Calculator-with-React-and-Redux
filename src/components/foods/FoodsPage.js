import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import foodsActions from '../../actions/foodsActions';
import CaloriesCountType from '../../constants/CaloriesCountType';
import { withRouter } from 'react-router-dom';


class FoodsPage extends React.Component {
    constructor(props) {
        super(props);

        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(event) {
        event.target.value == "Edit" && this.props.history.push('manage-food/' + event.target.attributes['data-food-id'].value)
    }

    render() {
        return (
            <div>
                <h3 className="centered">Foods macronutient information</h3>
                <div className="container">
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
                            {this.props.foods.map(food => {
                                return (
                                    <tr>
                                        <td>{food.name}</td>
                                        <td>{food.type}</td>
                                        <td>{food.calories}</td>
                                        <td>{food.proteins}</td>
                                        <td>{food.carbs}</td>
                                        <td>{food.fats}</td>
                                        <td><input type="button" className="btn btn-primary" value="Edit" data-food-id={food.id} onClick={this.handleOnClick} /></td>
                                        <td><input type="button" className="btn btn-primary" value="Delete" data-food-id={food.id} onClick={this.handleOnClick} /></td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

FoodsPage.PropTypes = {
    foods: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
    return {
        foods: state.foodsReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(foodsActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodsPage);