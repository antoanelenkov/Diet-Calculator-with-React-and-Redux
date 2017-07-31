import * as ActionTypes from '../constants/ActionTypes'

export default function foodsReducer(foodsState = [], action) {
    switch (action.type) {
        case ActionTypes.ADD_FOOD:
            return [...foodsState, Object.assign({}, action.food)]
        case ActionTypes.EDIT_FOOD:
            return [...foodsState.filter(food => food.id !== action.food.id), Object.assign({}, action.food)]
        case ActionTypes.DELETE_FOOD:
            return foodsState.filter(food => food.id !== action.id);
        case ActionTypes.GET_ALL_FOODS:
            return action.foods;
        default:
            return foodsState;
    }
}