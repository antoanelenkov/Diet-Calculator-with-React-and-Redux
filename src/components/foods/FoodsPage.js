import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import foodsActions from '../../actions/foodsActions';
import CaloriesCountType from '../../constants/CaloriesCountType';
import FoodsPageView from './FoodsPageView';


class FoodsPage extends React.Component {
    constructor(props) {
        super(props);

        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(event) {
        event.target.value == "Edit" && this.props.history.push('manage-food/' + event.target.attributes['data-food-id'].value)
    }

    render() {
        return (<FoodsPageView foods={this.props.foods} handleOnClick={this.handleOnClick} />);
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