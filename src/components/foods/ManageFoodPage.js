import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import foodsActions from '../../actions/foodsActions';
import * as CaloriesCountType from '../../constants/CaloriesCountType';
import InputFormGroup from '../HtmlHelpers/InputFormGroup';
import { withRouter } from 'react-router-dom';


class ManageFoodPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = { food: Object.assign({}, this.props.food) };

        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    // Invoked after mapStateToProps func is called
    componentWillReceiveProps(nextProps) {
        if (this.props.food.id != nextProps.food.id) {
            this.setState({ food: Object.assign(nextProps.food) });
        }
    }

    handleOnChange(event) {
        let state = {};
        state.food = {};
        state.food[event.target.id] = event.target.value;

        this.setState((prevState, props) => {
            return { food: Object.assign(prevState.food, state.food) };
        });
    }

    handleOnSubmit() {
        this.props.actions.addFood(this.state.food);
        this.props.history.push('/foods');
    }

    render() {
        return (
            <div>
                <h3 className="centered">Add new food</h3>
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <InputFormGroup type="text" id="name" labelName="Name" value={this.state.food.name} handleOnChange={this.handleOnChange} />
                        <InputFormGroup type="number" id="calories" labelName="Calories" value={this.state.food.calories} handleOnChange={this.handleOnChange} />
                        <InputFormGroup type="number" id="fats" labelName="Fats" value={this.state.food.fats} handleOnChange={this.handleOnChange} />
                        <InputFormGroup type="number" id="proteins" labelName="Proteins" value={this.state.food.proteins} handleOnChange={this.handleOnChange} />
                        <InputFormGroup type="number" id="carbs" labelName="Carbs" value={this.state.food.carbs} handleOnChange={this.handleOnChange} />
                        <div className="form-group">
                            <label htmlFor="type">Type:</label>
                            <select className="form-control" id="type">
                                {Object.values(CaloriesCountType).map(type => (<option value={type}>{type}</option>))}
                            </select>
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Add" className="form-control btn btn-primary" id="add-food-btn" onClick={this.handleOnSubmit} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ManageFoodPage.PropTypes = {
    foods: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
    const foodId = ownProps.match.params.id * 1;

    let foodToMapOnProps = {
        name: "",
        calories: "",
        proteins: "",
        carbs: "",
        fats: "",
        type: CaloriesCountType.PER_HUNDRED_GRAMS,
    };

    if (foodId && state.foodsReducer.length) {
        foodToMapOnProps = state.foodsReducer.find(food => food.id === foodId);
    }
    return {
        food: foodToMapOnProps
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(foodsActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageFoodPage);