import * as ActionTypes from '../constants/ActionTypes'

export default function foodsReducer(state = {}, action) {
    switch (action.type) {
        case ActionTypes.ADD_FOOD:
            return Object.assign({ ...state }, action.food)
        case ActionTypes.GET_ALL_FOODS:
            return action.foods; 
        default:
            return state;
    }
}