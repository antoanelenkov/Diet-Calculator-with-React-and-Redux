import * as ActionTypes from '../constants/ActionTypes'

export default function foodsReducer(foodsState = [], action) {
    switch (action.type) {
        case ActionTypes.ADD_FOOD:
            return [...foodsState, action.food]
        case ActionTypes.EDIT_FOOD:           
            return [...foodsState.filter( food => food.id !== action.food.id), action.food]
        case ActionTypes.GET_ALL_FOODS:
            return action.foods;
        default:
            return foodsState;
    }
}