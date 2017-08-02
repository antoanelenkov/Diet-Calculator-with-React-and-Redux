import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import consumationActions from '../../actions/consumationActions';
import * as CaloriesCountType from '../../constants/CaloriesCountType';
import ManageConsumationPageView from './ManageConsumationPageView';

class ManageConsumationPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            consumation: Object.assign({}, this.props.consumation)
        };

        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.handleOnFoodSelectChange = this.handleOnFoodSelectChange.bind(this);
    }

    // Invoked after mapStateToProps func is called
    componentWillReceiveProps(nextProps) {
        if (this.props.consumation.id !== nextProps.consumation.id) {
            this.setState({ consumation: nextProps.consumation });
        }
    }

    handleOnChange(event) {
        let consumation = Object.assign({}, this.state.consumation);
        consumation[event.target.attributes['data-id'].value] = event.target.value;

        this.setState({ consumation });
    }

    handleOnFoodSelectChange(event) {
        let consumation = Object.assign({}, this.state.consumation);
        consumation.food = Object.assign({}, this.props.foods.find(food => food.id == event.target.value * 1));

        this.setState({ consumation, selectedFoodType: consumation.food.type });
    }


    handleOnSubmit() {
        this.props.actions.saveConsumation(this.state.consumation);
        this.props.history.push('/consumations');
    }

    render() {
        return (<ManageConsumationPageView
            foods={this.props.foods}
            consumation = {this.state.consumation}
            selectedType={this.state.selectedFoodType}
            handleOnChange={this.handleOnChange}
            handleOnSubmit={this.handleOnSubmit}
            handleOnFoodSelectChange={this.handleOnFoodSelectChange} />);
    }
}

function mapStateToProps(state, ownProps) {
    const consumationId = ownProps.match.params.id * 1;
    const todayDate = new Date();

    let consumationToMapOnProps = {
        date: todayDate,
        food: state.foodsReducer[0],
        quantity: 0,
    };

    consumationId && state.consumationReducer.length
        && (consumationToMapOnProps = state.consumationReducer.find(consumation => consumation.id === consumationId));

    return {
        consumation: consumationToMapOnProps,
        foods: state.foodsReducer,
        selectedFoodType: consumationToMapOnProps.food && consumationToMapOnProps.food.type
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(consumationActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageConsumationPage);

