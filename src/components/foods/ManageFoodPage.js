import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import foodsActions from '../../actions/foodsActions';
import * as CaloriesCountType from '../../constants/CaloriesCountType';
import { withRouter } from 'react-router-dom';
import ManageFoodsPageView from './ManageFoodsPageView';


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
        return (<ManageFoodsPageView food={this.state.food} handleOnChange={this.handleOnChange} handleOnSubmit={this.handleOnSubmit}/>);
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