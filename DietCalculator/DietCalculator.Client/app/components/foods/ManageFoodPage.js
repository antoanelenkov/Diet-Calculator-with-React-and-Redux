import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import foodsActions from '../../actions/foodsActions';
import * as CaloriesCountType from '../../constants/CaloriesCountType';
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
        if (this.props.food.id !== nextProps.food.id) {
            this.setState({ food: nextProps.food });
        }
    }

    handleOnChange(event) {
        let food = Object.assign({}, this.state.food);
        food[event.target.attributes['data-id'].value] = event.target.value;

        this.setState({ food });
    }

    handleOnSubmit() {
        if(this.fieldsAreValid(this.state.food)){
            this.props.actions.addFood(this.state.food);
            this.props.history.push('/foods');
        }
        else{
            this.setState({error:"Fields \"Name\" and \"Calories\" are required!"});
        }
    }

    fieldsAreValid(food){
        return food.name && food.calories;
    }

    render() {
        return (<ManageFoodsPageView food={this.state.food} error={this.state.error} handleOnChange={this.handleOnChange} handleOnSubmit={this.handleOnSubmit} />);
        }
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

    foodId && state.foodsReducer.length
        && (foodToMapOnProps = state.foodsReducer.find(food => food.id === foodId));

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