import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import foodsActions from '../../actions/foodsActions';
import CaloriesCountType from '../../constants/CaloriesCountType';


class FoodsPage extends React.Component {
    constructor(props) {
        super(props);

        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(event) {
        alert(event.target);
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
                            {Object.values(this.props.foods).map(food => {
                                return (
                                    <tr>
                                        <td>{food.name}</td>
                                        <td>{food.type}</td>
                                        <td>{food.calories}</td>
                                        <td>{food.protein}</td>
                                        <td>{food.carbs}</td>
                                        <td>{food.fats}</td>
                                        <td><input type="button" className="btn btn-primary" value="Edit" onClick={this.handleOnClick}/></td>
                                        <td><input type="button" className="btn btn-primary" value="Delete" onClick={this.handleOnClick}/></td>
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
    foods: PropTypes.object.isRequired,
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