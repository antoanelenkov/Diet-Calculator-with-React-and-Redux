import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'underscore';

import consumationActions from '../../actions/consumationActions';
import ConsumationPageView from './ConsumationPageView';


class ConsumationPage extends React.Component {
    constructor(props) {
        super(props);

        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(event) {
        event.target.value === "Edit" && this.props.history.push('manage-consumation/' + event.target.attributes['data-consumation-id'].value);
        event.target.value === "Delete" && this.props.actions.delete(event.target.attributes['data-consumation-id'].value * 1);
    }

    render() {
        return (<ConsumationPageView consumationsInfo={_formatConsumationData(this.props.consumations)} handleOnClick={this.handleOnClick} />);
    }
}

function mapStateToProps(state, ownProps) {
    return {
        consumations: state.consumationReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(consumationActions, dispatch)
    };
}

function _formatConsumationData(consumations){
    const groupedByDateConsumationsObj = _.groupBy(consumations, 'date');
    const groupedByDateConsumationsArr = [];
    let i = 0;

    for (var date in groupedByDateConsumationsObj) {
        groupedByDateConsumationsArr[i++] = { date, consumations: groupedByDateConsumationsObj[date] }
    }

    return _calculateTotalMacronutrients(groupedByDateConsumationsArr);
}

function _calculateTotalMacronutrients(consumationsByDay){
    return consumationsByDay.map(consum=>{
        consum.totalProteins = consum.consumations.reduce((accum,current)=>{return accum.proteins + current.proteins});
        consum.totalCarbs = consum.consumations.reduce((accum,current)=>{return accum.carbs + current.carbs});
        consum.totalFats = consum.consumations.reduce((accum,current)=>{return accum.fats + current.fats});
        consum.totalCalories = consum.consumations.reduce((accum,current)=>{return accum.calories + current.calories});
        return consum;
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(ConsumationPage);