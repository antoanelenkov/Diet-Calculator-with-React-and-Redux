import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import foodsActions from '../../actions/foodsActions';
import FoodsPageView from './FoodsPageView';


class FoodsPage extends React.Component {
    constructor(props) {
        super(props);

        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(event) {
        event.target.value === "Edit" && this.props.history.push('manage-food/' + event.target.attributes['data-food-id'].value);
        event.target.value === "Delete" && this.props.actions.delete(event.target.attributes['data-food-id'].value*1);
    }

    render() {
        return (<FoodsPageView foods={this.props.foods} handleOnClick={this.handleOnClick} />);
    }
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