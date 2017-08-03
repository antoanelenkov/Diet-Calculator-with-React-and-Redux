import * as ActionTypes from '../constants/ActionTypes'

export default function consumationReducer(consumationState = [], action) {
    switch (action.type) {
        case ActionTypes.ADD_CONSUMATION:
            return [...consumationState, Object.assign({}, action.consumation)]
        case ActionTypes.EDIT_CONSUMATION:
            return [...consumationState.filter(consumation => consumation.id !== action.consumation.id), Object.assign({}, action.consumation)]
        case ActionTypes.DELETE_CONSUMATION:
            return consumationState.filter(consumation => consumation.id !== action.id);
        case ActionTypes.GET_ALL_CONSUMATIONS:
            return action.consumations;
        default:
            return consumationState;
    }
}